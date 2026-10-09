/**
 * Bilingual copy. `pt` is rendered; `en` goes to the `data-en` attribute and
 * is swapped in by src/scripts/i18n.ts. Both may contain inline HTML.
 */
export type L = { pt: string; en?: string };

/** Shorthand for bilingual strings in data files. */
export const t = (pt: string, en?: string): L => ({ pt, en });
