// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import vercel from '@astrojs/vercel';

// Fonts are downloaded at build time and self-hosted (no Google Fonts request).
const fontsource = fontProviders.fontsource();

export default defineConfig({
  site: 'https://abiabognola.com',
  trailingSlash: 'ignore',
  // Static by default; only /api/contato runs on demand (prerender = false).
  output: 'static',
  adapter: vercel(),
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  image: {
    responsiveStyles: true,
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', default: 'abiabognola14@gmail.com' }),
      CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', default: 'Portfólio <onboarding@resend.dev>' }),
    },
  },
  fonts: [
    {
      name: 'Poppins',
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
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontsource,
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
