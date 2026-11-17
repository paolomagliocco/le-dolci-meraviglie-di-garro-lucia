// Dati SEO condivisi da tutte le pagine: parole chiave (meta keywords) e scheda dell'attività
// (JSON-LD Bakery con catalogo dei servizi ed eventi). Modificare qui per aggiornare tutto il sito.

export const SITE = 'https://www.ledolcimeravigliedigarrolucia.com';
const NOME_ATTIVITA = 'Le Dolci Meraviglie di Lucy Garro';

/** Prodotti realizzati (usati nel catalogo servizi e nelle keyword). */
export const prodottiSeo = ['Torte artistiche', 'Biscotti decorati', 'Sweet table', 'Cupcake', 'Cake pops'];

/** Eventi per cui vengono realizzati i dolci, per adulti e bambini. */
export const eventiSeo = [
  'Compleanno', 'Diciottesimo compleanno', 'Battesimo', 'Prima comunione', 'Cresima', 'Matrimonio',
  'Gender reveal', 'Baby shower', 'Nascita', 'Laurea',
];

// Keyword comuni a tutto il sito: brand + località
const BASE = ['Lucia Garro', 'Lucy Garro', 'Le Dolci Meraviglie', 'cake designer Siracusa', 'pasticceria artistica Siracusa'];

/** Parole chiave per pagina (meta keywords). Frasi brevi e naturali, senza ripetizioni inutili. */
const keywordsPagine: Record<string, string[]> = {
  home: [
    'torte artistiche Siracusa', 'biscotti decorati', 'sweet table', 'cupcake personalizzati', 'cake pops',
    'torte di compleanno per bambini', 'torte di compleanno per adulti', 'torta diciottesimo compleanno',
    'torta battesimo', 'torta comunione', 'torta cresima', 'torta nuziale', 'torta gender reveal',
    'dolci baby shower', 'dolci personalizzati per eventi',
  ],
  'biscotti-decorati': [
    'biscotti decorati', 'biscotti decorati personalizzati', 'biscotti in pasta di zucchero', 'biscotti royal icing',
    'biscotti decorati compleanno', 'biscotti decorati battesimo', 'biscotti decorati comunione', 'biscotti decorati cresima',
    'biscotti decorati matrimonio', 'biscotti gender reveal', 'biscotti baby shower', 'biscotti diciottesimo',
    'bomboniere biscotti', 'biscotti decorati Siracusa',
  ],
  'sweet-table': [
    'sweet table', 'sweet table personalizzata', 'confettata', 'sweet table compleanno', 'sweet table battesimo',
    'sweet table comunione', 'sweet table cresima', 'sweet table matrimonio', 'sweet table gender reveal',
    'sweet table baby shower', 'sweet table diciottesimo', 'cupcake', 'cake pops', 'sweet table Siracusa',
  ],
  'torte-artistiche': [
    'torte artistiche', 'torte personalizzate', 'cake design', 'torte in pasta di zucchero', 'wedding cake',
    'torta nuziale', 'torte di compleanno', 'torta per bambini', 'torta battesimo', 'torta comunione',
    'torta cresima', 'torta diciottesimo', 'torta gender reveal', 'torta baby shower', 'torte scenografiche',
    'torte artistiche Siracusa',
  ],
  'torte-di-laurea': [
    'torte di laurea', 'torta di laurea personalizzata', 'torta laurea con tocco', 'torta laurea in pasta di zucchero',
    'torta laurea scenografica', 'sweet table laurea', 'biscotti decorati laurea', 'torte di laurea Siracusa',
  ],
  'torte-di-compleanno-per-adulti': [
    'torte di compleanno per adulti', 'torta di compleanno personalizzata', 'torta diciottesimo compleanno',
    'torta 18 anni', 'torta 30 anni', 'torta 40 anni', 'torta 50 anni', 'drip cake', 'torta compleanno donna',
    'torta compleanno uomo', 'cupcake', 'cake pops', 'torte di compleanno Siracusa',
  ],
  contatti: [
    'preventivo torta personalizzata', 'ordinare biscotti decorati', 'preventivo sweet table', 'ordinare cupcake',
    'ordinare cake pops', 'contatti cake designer Siracusa', 'dolci per eventi Siracusa',
  ],
  'curriculum-lucia-garro': [
    'Lucia Garro curriculum', 'cake designer professionista', 'PME Professional Diploma', 'Squires Kitchen',
    'Cake International', 'corsi cake design', 'sugar artist',
  ],
  certificazioni: [
    'certificazioni cake design', 'diplomi cake design', 'PME Professional Diploma', 'Squires Kitchen',
    'Cake International', 'royal icing', 'sugarpaste', 'fiori in zucchero',
  ],
  'vip-e-collaborazioni': [
    'torte per VIP', 'cake designer eventi', 'torta battesimo VIP', 'torte di compleanno per bambini',
    'wedding cake', 'Trend Wedding', 'collaborazioni cake design', 'cupcake personalizzati',
  ],
};

/** Stringa per <meta name="keywords"> di una pagina, con eventuali parole chiave extra (es. nome prodotto). */
export function keywordsPagina(pagina: keyof typeof keywordsPagine | string, extra: string[] = []): string {
  const lista = [...extra, ...(keywordsPagine[pagina] ?? keywordsPagine.home), ...BASE];
  return [...new Set(lista.map((k) => k.trim()).filter(Boolean))].join(', ');
}

/**
 * Scheda dell'attività (schema.org Bakery) con catalogo di prodotti ed eventi.
 * Stesso @id su tutte le pagine, così Google la riconosce come un'unica entità.
 * Nessun prezzo o recensione inventati: solo servizi realmente offerti.
 */
export const attivitaSeo = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  '@id': `${SITE}/#bakery`,
  name: NOME_ATTIVITA,
  alternateName: ['Lucy Garro Cake Designer', 'Le Dolci Meraviglie di Garro Lucia'],
  url: `${SITE}/`,
  logo: `${SITE}/apple-touch-icon.png`,
  image: `${SITE}/images/biscotti-decorati-a-tema-rose-e-cuori.png`,
  description:
    'Cake designer a Siracusa: torte artistiche, biscotti decorati, sweet table, cupcake e cake pops personalizzati per compleanni, diciottesimi, battesimi, comunioni, cresime, matrimoni, gender reveal e baby shower, per adulti e bambini.',
  telephone: '+39 351 942 5808',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  founder: { '@type': 'Person', name: 'Lucia Garro', jobTitle: 'Cake designer' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Viale Zecchino 72A',
    addressLocality: 'Siracusa',
    addressRegion: 'SR',
    addressCountry: 'IT',
  },
  areaServed: [
    { '@type': 'City', name: 'Siracusa' },
    { '@type': 'AdministrativeArea', name: 'Sicilia' },
    { '@type': 'Country', name: 'Italia' },
  ],
  sameAs: ['https://sweetwondersoflucy.etsy.com'],
  knowsAbout: [...prodottiSeo, 'Cake design', 'Pasta di zucchero', 'Royal icing', 'Fiori in zucchero', 'Wedding cake'],
  keywords: [...prodottiSeo, ...eventiSeo].join(', '),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dolci personalizzati per eventi',
    itemListElement: prodottiSeo.map((prodotto) => ({
      '@type': 'OfferCatalog',
      name: prodotto,
      itemListElement: eventiSeo.map((evento) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${prodotto} per ${evento.toLowerCase()}`,
          serviceType: prodotto,
          areaServed: 'Siracusa',
          audience: { '@type': 'PeopleAudience', audienceType: 'Adulti e bambini' },
        },
      })),
    })),
  },
};
