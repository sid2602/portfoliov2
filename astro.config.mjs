// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://sid2602.github.io',
  base: '/portfoliov2/',
  outDir: './docs',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
