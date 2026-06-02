import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chathura-kulathunga.github.io',

  integrations: [
    sanity({
      projectId: 'xsg8551p',
      dataset: 'production',
      useCdn: false, 
      apiVersion: '2024-05-30', 
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});