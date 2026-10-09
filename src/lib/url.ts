/**
 * Internal link helper. The site may be served from a sub-path (GitHub Pages
 * serves it under /<repo>/), so every internal href goes through `url()`.
 *
 *   url('/cases/')  →  '/portfolio-abia-v2/cases/'
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

/** Removes the base from a pathname (for comparing against site routes). */
export const stripBase = (pathname: string) => pathname.slice(base.length) || '/';
