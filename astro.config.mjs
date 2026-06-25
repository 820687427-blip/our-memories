import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://820687427-blip.github.io',
  base: '/our-memories/',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
