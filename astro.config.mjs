import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://processssss.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});
