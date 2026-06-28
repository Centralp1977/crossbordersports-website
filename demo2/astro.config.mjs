// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isCI = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  site: 'https://centralp1977.github.io',
  base: isCI ? '/crossbordersports-website/demo2' : undefined,
  server: {
    port: parseInt(process.env.PORT || '4322')
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
