/**
 * PT/EN toggle.
 * Markup keeps Portuguese as the rendered content and the English version in
 * `data-en` (innerHTML) or `data-en-placeholder` (input placeholders).
 * The choice is remembered in localStorage and broadcast as `abia:lang`.
 */
export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'abia-lang';
let current: Lang = 'pt';

function snapshotPortuguese() {
  document.querySelectorAll<HTMLElement>('[data-en]').forEach((el) => {
    if (!el.hasAttribute('data-pt')) el.setAttribute('data-pt', el.innerHTML);
  });
  document.querySelectorAll<HTMLInputElement>('[data-en-placeholder]').forEach((el) => {
    if (!el.hasAttribute('data-pt-placeholder')) el.setAttribute('data-pt-placeholder', el.placeholder);
  });
}

export function setLang(lang: Lang) {
  if (lang !== current || lang === 'en') {
    snapshotPortuguese();
    const attr = lang === 'en' ? 'data-en' : 'data-pt';
    document.querySelectorAll<HTMLElement>('[data-en]').forEach((el) => {
      const html = el.getAttribute(attr);
      if (html !== null) el.innerHTML = html;
    });
    const phAttr = lang === 'en' ? 'data-en-placeholder' : 'data-pt-placeholder';
    document.querySelectorAll<HTMLInputElement>('[data-en-placeholder]').forEach((el) => {
      const ph = el.getAttribute(phAttr);
      if (ph !== null) el.placeholder = ph;
    });
  }
  current = lang;

  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  document.dispatchEvent(new CustomEvent('abia:lang', { detail: { lang } }));
}

export function getLang(): Lang {
  return current;
}

function init() {
  let saved: Lang = 'pt';
  try {
    saved = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt';
  } catch {}
  if (saved === 'en') setLang('en');

  document.addEventListener('click', (e) => {
    const btn = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-lang]');
    if (btn) setLang(btn.dataset.lang === 'en' ? 'en' : 'pt');
  });
}

init();
