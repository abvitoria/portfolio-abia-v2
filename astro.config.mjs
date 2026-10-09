// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Fonts are downloaded at build time and self-hosted (no Google Fonts request).
const fontsource = fontProviders.fontsource();

export default defineConfig({
  // Published on GitHub Pages at https://abvitoria.github.io/portfolio-abia-v2/
  // With a custom domain, set `site` to it and remove `base`.
  site: 'https://abvitoria.github.io',
  base: '/portfolio-abia-v2',
  trailingSlash: 'ignore',
  output: 'static',
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  image: {
    responsiveStyles: true,
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-sans',
      provider: fontsource,
      weights: [300, 400, 500, 600, 700, 800],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Bebas Neue',
      cssVariable: '--font-display',
      provider: fontsource,
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
