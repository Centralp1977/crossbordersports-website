// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '4323')
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
