/*
  Prima della build: per ogni PNG in public/images che non ha ancora la sua versione .webp,
  crea il .webp (stesso nome, minuscolo). Così le pagine possono puntare sempre al .webp
  anche se nel repository è stato caricato solo il PNG.

  Usa sharp, già installato come dipendenza di Astro (vedi package-lock.json).
  Se sharp non è disponibile la build prosegue comunque, con un avviso.
*/
import { readdirSync, existsSync } from 'node:fs';
import { join, parse } from 'node:path';

const dir = 'public/images';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.warn('[ensure-webp] sharp non disponibile: conversione PNG -> WebP saltata.');
  process.exit(0);
}

const files = readdirSync(dir);
const existing = new Set(files.map((f) => f.toLowerCase()));
let created = 0;

for (const file of files) {
  const { name, ext } = parse(file);
  if (ext.toLowerCase() !== '.png') continue;

  const webpName = `${name.toLowerCase()}.webp`;
  if (existing.has(webpName) || existsSync(join(dir, webpName))) continue;

  await sharp(join(dir, file)).webp({ quality: 82 }).toFile(join(dir, webpName));
  console.log(`[ensure-webp] creato ${webpName} da ${file}`);
  created++;
}

console.log(`[ensure-webp] ${created ? `${created} immagini convertite` : 'tutte le immagini WebP sono già presenti'}.`);
