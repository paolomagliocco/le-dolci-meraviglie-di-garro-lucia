import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { statSync } from 'node:fs';

const SITE = 'https://www.ledolcimeravigliedigarrolucia.com';

// Data di ultima modifica di una pagina: ultimo commit git del file .astro,
// con fallback alla data di modifica del file (es. build senza cronologia git).
function lastModified(file) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf8' }).trim();
    if (iso) return iso;
  } catch {}
  try {
    return statSync(file).mtime.toISOString();
  } catch {
    return undefined;
  }
}

export default defineConfig({
  site: SITE,
  // URL senza slash finale (/biscotti-decorati), coerenti con canonical, link interni e sitemap
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Aggiunge <lastmod> per aiutare Google a riscansionare le pagine nuove/aggiornate
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/^\/|\/$/g, '') || 'index';
        const lastmod = lastModified(`src/pages/${path}.astro`);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
