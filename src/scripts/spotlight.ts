/**
 * Cursor spotlight: eases the `.spot` radial gradient towards the pointer.
 * Desktop pointers only; skipped with reduced motion.
 */
const spot = document.querySelector<HTMLElement>('.spot');
const enabled =
  spot &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  window.matchMedia('(hover: hover)').matches;

if (enabled) {
  let x = 50;
  let y = 50;
  let tx = 50;
  let ty = 50;
  let raf = 0;

  const step = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    spot.style.setProperty('--mx', `${x}%`);
    spot.style.setProperty('--my', `${y}%`);
    // Stop the loop once it has settled; restart on the next move.
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.05 ? requestAnimationFrame(step) : 0;
  };

  window.addEventListener(
    'mousemove',
    (e) => {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
      if (!raf) raf = requestAnimationFrame(step);
    },
    { passive: true },
  );
}
