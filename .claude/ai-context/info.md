# Info — modifiche effettuate

Registro delle modifiche apportate al progetto `biscotti-astro` (Le Dolci Meraviglie di Lucy Garro) tramite Claude Code. Nessuna modifica è stata ancora committata su Git: sono tutte presenti nel working tree, in attesa di revisione.

---

## 2026-11-02

### 10. Visibilità quasi nulla dopo 2 mesi — URL duplicati con/senza slash

Screenshot in `.claude/ai-context/errori-google/`: 2 pagine indicizzate, 10 non indicizzate (3 "Scansionata, ma attualmente non indicizzata", 4 "Rilevata, ma attualmente non indicizzata", 3 "Pagina con reindirizzamento"), 0 clic/impressioni.

Verificato sul sito live un problema tecnico reale: segnali contraddittori sugli URL. La sitemap elencava `/biscotti-decorati/` (con slash), canonical e link interni usavano `/biscotti-decorati` (senza), ed entrambe le versioni rispondevano 200 → ogni pagina esisteva in due copie. In più `le-dolci-meraviglie-di-garro-lucia.vercel.app` serviva una terza copia completa del sito.

**Interventi:**
- `astro.config.mjs`: `trailingSlash: 'never'` + `build.format: 'file'` → la sitemap ora genera URL senza slash, identici ai canonical e ai link interni.
- Nuovo `vercel.json`: `cleanUrls` + `trailingSlash: false` (le versioni con slash fanno redirect 308 a quelle senza) e redirect 308 del dominio `*.vercel.app` verso `www.ledolcimeravigliedigarrolucia.com`.

Le 3 "Pagina con reindirizzamento" sono le varianti http/non-www: comportamento corretto, nessuna azione.

Verificato: `npm run build` ok, sitemap generata senza slash, audit SEO 0 errori/0 avvisi.

---

## 2026-09-22

### 1. Creazione `CLAUDE.md`

Aggiunto il file `CLAUDE.md` nella root del progetto con la documentazione del codebase: stack tecnico (Astro + `@astrojs/sitemap`, CSS puro, nessun framework UI), comandi (`npm run dev/build/preview`), struttura di `src/pages`, convenzioni SEO usate in ogni pagina (title/description/canonical/OG/Twitter/JSON-LD), lingua italiana e prezzi in Euro, cose da non fare.

> Nota: nella cartella `Downloads` era presente un `CLAUDE.md` relativo a un progetto completamente diverso e non correlato (un'app INPS in Java/Spring). Non è stato usato: il nuovo `CLAUDE.md` è stato scritto ispezionando il codice reale di questo progetto.

### 2. Creazione della skill `ottimizza-seo`

Creata la cartella `.claude/skills/ottimizza-seo/` con:

- **`SKILL.md`** — istruzioni per l'ottimizzazione SEO on-page del sito: checklist su title/description, structured data (JSON-LD), immagini, heading, canonical/sitemap/robots.txt, link interni, cosa non fare (no dati falsi nello structured data, no keyword stuffing, non toccare `dist/`).
- **`scripts/seo-audit.mjs`** — script Node (zero dipendenze, sola lettura) che analizza `src/pages/*.astro`, `public/images/`, `robots.txt` e `astro.config.mjs` e produce un report di errori/avvisi. Rieseguibile in qualsiasi momento con:
  ```bash
  node .claude/skills/ottimizza-seo/scripts/seo-audit.mjs
  ```

### 3. Esecuzione della skill SEO e correzioni applicate

Eseguito l'audit iniziale: **1 errore critico e 21 avvisi**. Dopo le correzioni: **0 errori, 0 avvisi**, build (`npm run build`) verificata senza errori.

**Correzioni applicate:**

| Problema | Intervento |
|---|---|
| Immagine gender-reveal rotta in homepage (`index.astro` referenziava un nome file con trattino normale, il file reale aveva un trattino lungo `–`) | Rinominato il file in kebab-case pulito e allineati i riferimenti in `index.astro` e `biscotti-decorati.astro` |
| 8 immagini in `public/images/` con spazi, spazio prima dell'estensione o nomi poco URL-friendly | Rinominate con `git mv` (storia Git preservata) in kebab-case ASCII; aggiornati tutti i riferimenti in `certificazioni.astro`, `curriculum-lucia-garro.astro`, `sweet-table.astro` (inclusi gli `ogImage` che usavano `%20`) |
| `seoTitle` troppo lungo (>60 caratteri, troncato da Google) in `index.astro` e `certificazioni.astro` | Riscritti più corti mantenendoli unici per pagina |
| `seoDescription` fuori range (troppo corta/lunga) in `index.astro` e `curriculum-lucia-garro.astro` | Riscritte entro 120–160 caratteri |
| Due tag `<h1>` nella stessa pagina (`certificazioni.astro`) | Il secondo `<h1>` declassato a `<h2>`, aggiunta regola CSS scoped `.hero h2` per mantenere invariato lo stile visivo |

**File modificati:**
- `src/pages/index.astro`
- `src/pages/biscotti-decorati.astro`
- `src/pages/certificazioni.astro`
- `src/pages/curriculum-lucia-garro.astro`
- `src/pages/sweet-table.astro`

**File rinominati in `public/images/`:**
- `biscotti-decorati-Gender-Reveal-con-orsetti–Boy-or-Girl.png` → `biscotti-decorati-gender-reveal-con-orsetti-boy-or-girl.png`
- `certificato di diploma lucia garro decorazione torte .png` → `certificato-diploma-lucia-garro-decorazione-torte.png`
- `diploma PME di cake designer Lucia Garro.png` → `diploma-pme-di-cake-designer-lucia-garro.png`
- `foto curriculum lucia garro.jpg` → `foto-curriculum-lucia-garro.jpg`
- `lucia garro articolo su Sky tg24.jpg` → `lucia-garro-articolo-su-sky-tg24.jpg`
- `sweet table con biscotti a tema fiorito.png` → `sweet-table-con-biscotti-a-tema-fiorito.png`
- `sweet table con biscotti decorati a tema rose e cuori.png` → `sweet-table-con-biscotti-decorati-a-tema-rose-e-cuori.png`
- `sweet table con biscotti decorati a tema stelle marine.png` → `sweet-table-con-biscotti-decorati-a-tema-stelle-marine.png`
- `sweet-table-biscotti-decorati-a- tema-i-tesori-del-mare.png` → `sweet-table-biscotti-decorati-a-tema-i-tesori-del-mare.png`

**Non ancora fatto (azioni manuali, fuori dal codice):**
- Compressione/conversione immagini in WebP
- Registrazione del sito su Google Search Console e invio della sitemap
- Creazione/collegamento profilo Google Business
- Verifica Core Web Vitals su PageSpeed Insights dopo il deploy in produzione

### 4. Aggiornamento link Etsy in tutto il sito

Il negozio Etsy collegato al sito era `https://toppercrafts.etsy.com` (negozio non corretto/obsoleto). Sostituito ovunque con quello corretto **`https://sweetwondersoflucy.etsy.com`**, per far confluire tutto il traffico verso il negozio giusto e incentivare l'acquisto: 5 `const etsyUrl` (in `index.astro`, `biscotti-decorati.astro`, `certificazioni.astro`, `curriculum-lucia-garro.astro`, `sweet-table.astro`) + 2 link hardcoded in `index.astro`. Verificato con `grep` che non resti alcun riferimento al vecchio dominio.

### 5. Ottimizzazione SEO per intento di acquisto ("biscotti decorati" + Google)

Su richiesta, analizzate le pagine per capire se mancavano tag/keyword utili a farsi trovare da chi cerca di **comprare** biscotti decorati. Trovato e corretto:

- **Product/Offer JSON-LD**: aggiunto in `index.astro` un blocco `ItemList` con 4 `Product` (i prodotti in evidenza in homepage), ciascuno con `Offer` (prezzo in EUR ricavato dal campo `prezzo` esistente, link diretto al negozio Etsy, `availability: InStock`). Permette a Google di mostrare prezzo/disponibilità nei risultati di ricerca per query transazionali.
- **Schema business più specifico**: `LocalBusiness` → `Bakery` (sottotipo più preciso di schema.org), aggiunti `priceRange: '€€'` e `areaServed` (Siracusa, Sicilia, Italia) per rafforzare la pertinenza nelle ricerche locali ("biscotti decorati Siracusa") e nazionali (spedizione tramite Etsy).
- **Local SEO nel testo visibile**: "Siracusa" e "spediti in tutta Italia" resi più visibili nel paragrafo lead dell'hero e nel footer della homepage (prima comparivano solo nei meta/JSON-LD, non nel contenuto leggibile).
- **Scartato di proposito**: il tag `<meta name="keywords">` non è stato aggiunto — Google lo ignora ai fini del ranking dal 2009, sarebbe stato lavoro sprecato.
- Non aggiunto Product schema alle categorie "Prezzo su richiesta" in `biscotti-decorati.astro` (decisione esplicita dell'utente: solo i 4 prodotti con prezzo reale già indicato).

Verificato: audit SEO 0 errori/0 avvisi, `npm run build` senza errori, JSON-LD parsato e validato manualmente sull'HTML generato (2 blocchi validi: `Bakery` e `ItemList`).

**File modificati in questo passaggio:** `src/pages/index.astro` (Etsy link, Product schema, Bakery schema, copy locale), `src/pages/biscotti-decorati.astro`, `src/pages/certificazioni.astro`, `src/pages/curriculum-lucia-garro.astro`, `src/pages/sweet-table.astro` (solo aggiornamento link Etsy).

### 6. Sito in produzione su Vercel

Confermato (screenshot `.claude/ai-context/vercel-per-deploy-sito.png`) che il progetto è collegato a Vercel (account "Magliocco Paolo", piano Hobby, progetto `le-dolci-meraviglie-di-garro-lucia`) con deploy attivo su 3 domini, tutti in stato "Valid Configuration":

- `www.ledolcimeravigliedigarrolucia.com` — dominio principale, Production
- `ledolcimeravigliedigarrolucia.com` — redirect 308 verso la www
- `le-dolci-meraviglie-di-garro-lucia.vercel.app` — dominio di backup Vercel

Il dominio combacia con quello già configurato in `astro.config.mjs` (`site`), quindi canonical URL, sitemap e Open Graph sono già coerenti con il sito live. Nessun `vercel.json` presente né necessario: essendo build statica Astro, Vercel la rileva e builda automaticamente.

**Prossimo passo consigliato ora che il sito è live:** registrare `www.ledolcimeravigliedigarrolucia.com` su Google Search Console e inviare la sitemap (`/sitemap-index.xml`), per iniziare l'indicizzazione.

### 7. Sitemap già registrata su Google Search Console

Confermato (screenshot `.claude/ai-context/google-search-console.png`) che il passo consigliato al punto 6 è già stato completato in autonomia dall'utente, prima di questa verifica:

- Sitemap inviata: `https://www.ledolcimeravigliedigarrolucia.com/sitemap-index.xml`
- Data invio: 29 ago 2026 — ultima lettura: 12 set 2026
- Stato: **Riuscita**
- Pagine rilevate: **5** (corrispondono esattamente alle 5 pagine del sito: home, biscotti-decorati, certificazioni, curriculum-lucia-garro, sweet-table)

Il sito è quindi live, indicizzabile e già scansionato correttamente da Google. Prossimi controlli utili (da fare periodicamente su Search Console, non richiedono modifiche al codice): report "Pagine" per verificare che tutte e 5 risultino effettivamente indicizzate (non solo rilevate), e report "Rendimento" per monitorare le prime query/impressioni una volta che l'indicizzazione matura.

### 8. Audit del funnel "trova il sito → clicca → vai su Etsy" + performance

Su richiesta, verificato l'intero percorso dalla ricerca Google all'acquisto su Etsy. Confermato che il CTA "Acquista su Etsy"/"Vai su Etsy per Acquistare Online" è presente e corretto su ogni pagina, header, menu mobile e su tutte le 66 card prodotto (34 in `biscotti-decorati.astro` + 32 in `sweet-table.astro`), tutte tramite la variabile `etsyUrl` già aggiornata al negozio giusto.

Trovati e risolti due problemi reali:

- **Immagini troppo pesanti (il problema più impattante)**: `public/images/` pesava 153 MB, con 55 immagini su 72 sopra 1 MB (media 2,1 MB/file) — un fattore diretto di rallentamento che penalizza sia il ranking Google (Core Web Vitals/LCP) sia il tasso di abbandono prima che l'utente arrivi al pulsante Etsy. Creato lo script riutilizzabile `.claude/skills/ottimizza-seo/scripts/compress-images.mjs` (usa `sharp`, già presente nel progetto): ridimensiona a un massimo di 1600px di larghezza e ricomprime mantenendo lo stesso nome/estensione file (nessun riferimento da aggiornare). Risultato: **153 MB → 49 MB (-68%)**, qualità visiva invariata. Gli originali non compressi sono salvati in `originals-backup/images/` (cartella aggiunta a `.gitignore`, non finisce nel repo né nella build).
- **Nessuna favicon**: creata da `public/images/biscotti-decorati-a-tema-rose-e-cuori.png` (già l'immagine di riferimento del brand). Generati `public/favicon.png` (48×48) e `public/apple-touch-icon.png` (180×180), collegati con `<link rel="icon">` e `<link rel="apple-touch-icon">` nel `<head>` di tutte e 5 le pagine. Nota: era stato caricato anche `public/images/favicon-sito.png` (banner largo con certificati/ritratto), scartato come sorgente perché il ritaglio quadrato risultava illeggibile — il file resta comunque in `public/images/` (compresso) ma non è referenziato da nessuna pagina.
- **Scartato di proposito**: meta `keywords` non aggiunto (Google la ignora dal 2009).

Verificato: audit SEO 0 errori/0 avvisi, `npm run build` senza errori, tag favicon confermati nell'HTML generato.

**File modificati in questo passaggio:** tutte e 5 le pagine `src/pages/*.astro` (aggiunti i link favicon), `.gitignore` (aggiunto `originals-backup/`), tutte le immagini in `public/images/` (ricompresse in place), nuovi file `public/favicon.png`, `public/apple-touch-icon.png`, nuovo script `.claude/skills/ottimizza-seo/scripts/compress-images.mjs`.

### 9. Solo 1 pagina su 5 indicizzata su Google — diagnosi

Segnalato dall'utente (screenshot `.claude/ai-context/indicizzazione-google.png`): report "Indicizzazione delle pagine" di Search Console mostra 1 pagina indicizzata, 4 "Non indicizzate" con motivo **"Rilevata, attualmente non indicizzata"**.

Verificato lato codice che non ci sia nessuna causa tecnica: meta `robots` corretto su tutte e 5 le pagine, canonical univoci e corretti, sitemap valida (già confermato in sessioni precedenti), navigazione interna completa (ogni pagina linka a tutte le altre 4 da header e menu mobile). Nessuna modifica al codice necessaria.

Il motivo "Rilevata, attualmente non indicizzata" indica semplicemente che Google conosce gli URL (dalla sitemap) ma non li ha ancora scansionati/indicizzati — normalissimo per un sito nuovo (attivo da poche settimane, senza backlink esterni) e senza legame con problemi tecnici. Consigliato all'utente (azioni manuali in Search Console, non richiedono modifiche al codice):

1. Usare "Controllo URL" > "Richiedi indicizzazione" sulle 4 pagine mancanti
2. Costruire qualche link esterno verso il sito (Etsy, social, Google Business) per aumentare la fiducia di Google nel dominio nuovo
3. Attendere: di norma si risolve da solo entro 1-4 settimane

---

## Come aggiornare questo file

Ad ogni nuovo intervento significativo (feature, fix, ottimizzazione), aggiungere una nuova sezione datata sopra le precedenti, con: cosa è stato fatto, perché, e quali file sono stati toccati.
