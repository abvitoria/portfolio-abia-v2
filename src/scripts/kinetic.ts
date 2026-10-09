/**
 * Kinetic word reveal: wraps each word of `.kin` elements in `span.w` so the
 * CSS in motion.css can animate them one by one. Re-runs after a language
 * switch, because the text is replaced.
 */
function unwrap(el: HTMLElement) {
  el.querySelectorAll('.w').forEach((w) => {
    const parent = w.parentNode!;
    while (w.firstChild) parent.insertBefore(w.firstChild, w);
    parent.removeChild(w);
  });
  el.normalize();
}

function wrapWords(node: Node) {
  Array.from(node.childNodes).forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      const parts = (child.textContent ?? '').split(/(\s+)/);
      if (parts.length === 1 && parts[0].trim() === '') return;
      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement('span');
          span.className = 'w';
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      child.parentNode!.replaceChild(frag, child);
    } else if (child.nodeType === Node.ELEMENT_NODE && !(child as Element).classList.contains('w')) {
      wrapWords(child);
    }
  });
}

function prepare(el: HTMLElement) {
  const wasOn = el.classList.contains('on');
  el.classList.remove('on');
  unwrap(el);
  wrapWords(el);
  const words = el.querySelectorAll<HTMLElement>('.w');
  const step = words.length > 40 ? 0.015 : 0.04;
  words.forEach((w, i) => (w.style.transitionDelay = `${i * step}s`));
  if (wasOn) requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('on')));
}

const all = () => document.querySelectorAll<HTMLElement>('.kin');
all().forEach(prepare);
document.addEventListener('abia:lang', () => all().forEach(prepare));
