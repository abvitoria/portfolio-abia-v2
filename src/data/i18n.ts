/**
 * Bilingual copy. `pt` is rendered; `en` goes to the `data-en` attribute and
 * is swapped in by src/scripts/i18n.ts. Both may contain inline HTML.
 */
export type L = { pt: string; en?: string };

/** Shorthand for bilingual strings in data files. */
export const t = (pt: string, en?: string): L => ({ pt, en });

/** Copy that may or may not have an English version yet. */
export type T = string | L;

/** Portuguese (rendered) side of a `T`. */
export const pt = (x: T): string => (typeof x === 'string' ? x : x.pt);

/** English side of a `T`, for `data-en` (undefined → attribute omitted). */
export const en = (x: T): string | undefined => (typeof x === 'string' ? undefined : x.en);
