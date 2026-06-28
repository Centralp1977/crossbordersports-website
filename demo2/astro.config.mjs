// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '4322')
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
