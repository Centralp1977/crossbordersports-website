// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isCI = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  site: 'https://centralp1977.github.io',
  base: isCI ? '/crossbordersports-website/demo3/' : undefined,
  server: {
    port: parseInt(process.env.PORT || '4323')
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
