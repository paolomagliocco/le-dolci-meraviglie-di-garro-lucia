import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ledolcimeravigliedigarrolucia.com',
  // URL senza slash finale (/biscotti-decorati), coerenti con canonical, link interni e sitemap
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
});
