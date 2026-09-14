// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Нужен для абсолютных адресов в canonical и OG-тегах.
  site: 'https://saliima.netlify.app',
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 200,
      },
    },
  }
});