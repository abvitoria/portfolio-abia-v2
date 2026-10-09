/**
 * Scroll reveal: adds `.on` to every `.rv` / `.kin` element when it enters
 * the viewport. A safety timer reveals everything so nothing stays hidden.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('.rv, .kin');

if (reduced || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('on'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  targets.forEach((el) => io.observe(el));
  setTimeout(() => targets.forEach((el) => el.classList.add('on')), 1600);
}
