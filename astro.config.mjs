import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://processssss.github.io',
  base: isGithubActions ? '/portfolio' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
