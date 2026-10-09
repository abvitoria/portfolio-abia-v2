/**
 * Optional portrait photo. Drop an image into src/assets/retrato/ and it is
 * picked up automatically by the Home hero and the About page.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/retrato/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export const portrait: ImageMetadata | undefined = Object.values(files)[0]?.default;
