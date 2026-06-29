// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isCI = Boolean(process.env.GITHUB_ACTIONS);

// https://astro.build/config
export default defineConfig({
  site: 'https://centralp1977.github.io',
  base: isCI ? '/crossbordersports-website/demo1/' : undefined,
  server: {
    port: parseInt(process.env.PORT || '4321')
  },
  vite: {
    plugins: [tailwindcss()]
  }
});