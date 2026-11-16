/*
  Torte di compleanno per adulti: usate
  - nella sezione "Torte di compleanno per adulti" di /torte-artistiche
  - come catalogo prodotti in /torte-di-compleanno-per-adulti
  - per generare le pagine prodotto /torte-di-compleanno-per-adulti/<slug>
    (src/pages/torte-di-compleanno-per-adulti/[slug].astro)
  Ogni torta ha la coppia di foto "torta" + "con il festeggiato / la festeggiata / i festeggiati".
  Le foto sono in public/images con il nome: torta-compleanno-adulti-<file>.webp
  e torta-compleanno-adulti-<file>-festeggiat*.webp (il .webp viene creato dal PNG in build).

  RECENSIONI: il sito è statico, quindi le recensioni inviate dal modulo arrivano a Lucia su WhatsApp.
  Per pubblicarne una, aggiungerla all'array `recensioni` della torta, ad esempio:
    recensioni: [
      { nome: 'Giulia R.', voto: 5, data: '2026-10-21', testo: 'Torta bellissima e buonissima!' },
    ],
  Media, numero di recensioni e dati strutturati per Google si aggiornano da soli.
*/
import type { FotoLaurea as FotoTorta, Recensione } from './torte-laurea';
export type { Recensione };
export { mediaVoti } from './torte-laurea';

export type TortaCompleannoAdulti = {
  slug: string;
  titolo: string;
  categoria: 'Compleanno adulti';
  /** descrizione breve, usata nelle card */
  descrizione: string;
  /** descrizione completa (un paragrafo per elemento), usata nella pagina prodotto; ammette <strong> e <em> */
  descrizioneLunga: string[];
  /** forma e struttura della torta */
  forma: string;
  /** tema / stile a cui è ispirata la torta (tutte restano personalizzabili) */
  tema: string;
  /** punti in evidenza */
  dettagli: string[];
  /** meta description della pagina prodotto (Google): 120-160 caratteri, univoca, con città e invito all'azione */
  seoDescription: string;
  foto: FotoTorta[];
  recensioni: Recensione[];
};

/** coppia di foto: `file` è la parte del nome dopo "torta-compleanno-adulti-" */
const fotoCompleanno = (file: string, conChi: 'festeggiato' | 'festeggiata' | 'festeggiati'): FotoTorta[] => [
  { src: `/images/torta-compleanno-adulti-${file}.webp`, label: 'La torta' },
  {
    src: `/images/torta-compleanno-adulti-${file}-${conChi}.webp`,
    label: conChi === 'festeggiato' ? 'Con il festeggiato' : conChi === 'festeggiata' ? 'Con la festeggiata' : 'Con i festeggiati',
  },
];

export const torteCompleannoAdulti: TortaCompleannoAdulti[] = [
  {
    slug: 'limoni-e-maioliche-siciliane',
    titolo: 'Limoni e Maioliche Siciliane',
    categoria: 'Compleanno adulti',
    descrizione: 'Torta bianca a due piani decorata con maioliche siciliane dipinte nei toni del blu e del giallo, limoni e un grande fiore bianco in zucchero.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Limoni e Maioliche Siciliane</strong> è un omaggio alla bellezza della nostra terra: una raffinata creazione artigianale a due piani che porta in tavola i colori, la luce e il calore della Sicilia.',
      'Su una delicata <strong>copertura bianca</strong> prendono vita le <strong>maioliche siciliane</strong>, dipinte nei toni del blu cobalto, del giallo limone e del verde acqua, con rosoni, motivi floreali e geometrie che ricordano le ceramiche di Caltagirone e i pavimenti delle antiche dimore. I bordi delle piastrelle, rifiniti in oro, sembrano “strappare” la superficie della torta, creando un effetto scenografico e moderno.',
      'Sulla sommità spicca un <strong>grande fiore bianco in pasta di zucchero</strong>, morbido e voluminoso, accompagnato da foglie verdi. Intorno alla torta, fette di <strong>limone</strong> e piccoli fiori bianchi completano la composizione con freschezza ed eleganza mediterranea.',
      'È la torta ideale per un compleanno all’aperto, una festa in terrazza o in giardino, per chi ama le tradizioni siciliane e desidera un dolce che racconti le proprie radici con stile.',
      'La Torta di Compleanno Limoni e Maioliche Siciliane può essere personalizzata con il nome del festeggiato, l’età, i colori delle maioliche e il numero di piani, e può essere abbinata a biscotti decorati e dolci coordinati per una sweet table a tema.',
      '<strong>Un dolce che profuma di sole, di mare e di Sicilia: perché ogni compleanno merita di essere festeggiato con la bellezza della propria terra.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    tema: 'Sicilia, limoni e maioliche',
    dettagli: ['Maioliche siciliane dipinte a mano', 'Grande fiore bianco in zucchero', 'Limoni e fiori coordinati alla festa'],
    seoDescription: 'Torta di compleanno a due piani con maioliche siciliane dipinte, limoni e fiore bianco in zucchero. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCompleanno('limoni-e-maioliche-siciliane', 'festeggiata'),
    recensioni: [],
  },
  {
    slug: 'hollywood-star',
    titolo: 'Hollywood Star',
    categoria: 'Compleanno adulti',
    descrizione: 'Torta a due piani bianca, nera e oro a tema cinema, con ciak personalizzato, pellicola, cinepresa, stelle dorate e la festeggiata modellata in zucchero.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Hollywood Star</strong> è una scenografica creazione artigianale a due piani, pensata per chi sogna un compleanno da protagonista: luci, ciak e red carpet per una festa degna del grande cinema.',
      'La torta gioca sull’eleganza senza tempo del <strong>bianco, del nero e dell’oro</strong>: due piani bianchi avvolti da fasce nere e bordure dorate, impreziositi da <strong>stelle in pasta di zucchero</strong> e da un medaglione “Hollywood” in stile vintage.',
      'Sulla sommità campeggia il <strong>ciak cinematografico personalizzato</strong> con il nome della festeggiata, la data e l’età. Intorno alla torta prendono vita i simboli del cinema: una <strong>cinepresa</strong> su treppiede, una <strong>bobina</strong> e una lunga <strong>pellicola</strong> con i fotogrammi che avvolge i piani.',
      'Il dettaglio che rende unica questa creazione è il <strong>personaggio della festeggiata modellato a mano</strong>, seduto sulla sedia da regista con un elegante abito da sera: una vera star sul set della propria festa.',
      'Perfetta per i <strong>18 anni</strong> e per tutti i compleanni a tema cinema, la Torta Hollywood Star può essere personalizzata con nome, età, colori dell’abito, fotogrammi e decorazioni dedicate ai film preferiti.',
      '<strong>Luci, camera, azione: un compleanno da ricordare come la prima di un grande film, con te al centro della scena.</strong>',
    ],
    forma: 'Tonda, 2 piani su base quadrata',
    tema: 'Cinema e Hollywood',
    dettagli: ['Ciak personalizzato con nome ed età', 'Festeggiata modellata in zucchero', 'Pellicola, cinepresa e stelle dorate'],
    seoDescription: 'Torta di compleanno a tema cinema con ciak personalizzato, pellicola, stelle dorate e la festeggiata in zucchero. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoCompleanno('hollywood-star', 'festeggiata'),
    recensioni: [],
  },
  {
    slug: 'fashion-shoes',
    titolo: 'Fashion Shoes',
    categoria: 'Compleanno adulti',
    descrizione: 'Torta glamour a due piani a righe nere e avorio, con décolleté, borsetta, rossetto, perle e rose rosse in zucchero e la dedica personalizzata.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Fashion Shoes</strong> è una creazione glamour a due piani, dedicata a chi ama la moda, le scarpe eleganti e i dettagli che fanno la differenza.',
      'Il piano inferiore è vestito da eleganti <strong>righe nere e avorio</strong>, arricchito da <strong>fili di perle nere</strong> e piccoli fiocchi rossi; il piano superiore, bianco e luminoso, accoglie una raffinata <strong>targa nera con la dedica personalizzata</strong> in lettere dorate.',
      'Sulla sommità, su un disco rosa bordato d’oro, spicca la protagonista: una <strong>décolleté nera con suola rossa</strong> modellata a mano in pasta di zucchero, impreziosita da perle e da un piccolo fiocco.',
      'A completare la composizione, gli accessori più amati: una <strong>borsetta trapuntata dorata</strong>, un <strong>rossetto rosso</strong> e splendide <strong>rose rosse in zucchero</strong>, che donano alla torta un tocco romantico e sofisticato.',
      'La Torta di Compleanno Fashion Shoes può essere personalizzata con il nome della festeggiata, l’età, i colori e gli accessori preferiti, e si abbina perfettamente a cupcake, cake pops e biscotti decorati a tema moda.',
      '<strong>Per chi cammina sempre sui tacchi dei propri sogni: una torta elegante, femminile e irresistibile come la festeggiata.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    tema: 'Moda, scarpe e accessori',
    dettagli: ['Décolleté modellata a mano in zucchero', 'Borsetta, rossetto e perle', 'Dedica personalizzata con il nome'],
    seoDescription: 'Torta di compleanno glamour a righe nere e avorio con décolleté, borsetta, perle e rose rosse in zucchero. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoCompleanno('fashon-shoes-con-scarpe-eleganti', 'festeggiata'),
    recensioni: [],
  },
  {
    slug: 'luxury-fashion',
    titolo: 'Luxury Fashion',
    categoria: 'Compleanno adulti',
    descrizione: 'Torta a forma di elegante scatola regalo con motivo monogram, nastro verde e rosso, fiocco e fibbia dorata, ispirata al mondo dell’alta moda.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Luxury Fashion</strong> è una creazione artigianale ispirata al mondo dell’alta moda, pensata per chi ama il lusso, i dettagli preziosi e uno stile inconfondibile.',
      'La torta riproduce un’<strong>elegante scatola regalo</strong> rivestita da un raffinato <strong>motivo monogram</strong> nei toni del beige e del cioccolato, realizzato con precisione sulla pasta di zucchero.',
      'A impreziosirla, un <strong>nastro a righe verde e rosso</strong> che avvolge la torta e culmina in un grande <strong>fiocco</strong>, una <strong>fibbia dorata</strong> centrale e un cordoncino intrecciato che ne sottolinea il bordo, come nei più eleganti pacchetti da boutique.',
      'Davanti alla torta, una delicata <strong>targhetta con il nome</strong> della festeggiata rende la creazione unica e personale, perfetta per un compleanno chic coordinato con cupcake, macarons e cake pops nello stesso stile.',
      'La Torta di Compleanno Luxury Fashion può essere personalizzata nei colori, nel motivo, nella dedica e nelle dimensioni, ispirandosi al proprio stile o alla maison preferita.',
      '<strong>Un regalo da aprire con gli occhi prima che con il palato: per un compleanno elegante, prezioso e di gran classe.</strong>',
    ],
    forma: 'Tonda alta, a scatola regalo',
    tema: 'Alta moda e lusso',
    dettagli: ['Motivo monogram sulla pasta di zucchero', 'Nastro, fiocco e fibbia dorata', 'Targhetta con il nome'],
    seoDescription: 'Torta di compleanno a scatola regalo con motivo monogram, nastro verde e rosso e fibbia dorata, stile alta moda. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoCompleanno('luxury-fashion-gucci', 'festeggiati'),
    recensioni: [],
  },
  {
    slug: 'drip-cake-blu-con-rose',
    titolo: 'Drip Cake Blu con Rose',
    categoria: 'Compleanno adulti',
    descrizione: 'Drip cake a due piani sfumata dal bianco al blu, con colature blu, fiori freschi, lavanda, rosette di crema e il nome in lettere dorate.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Drip Cake Blu con Rose</strong> è una raffinata creazione a due piani che unisce la tendenza delle drip cake alla delicatezza dei fiori, per un compleanno elegante e romantico.',
      'La copertura in crema, <strong>sfumata dal bianco al blu intenso</strong>, è valorizzata da <strong>colature di glassa blu</strong> che scendono lungo i bordi di entrambi i piani, creando un effetto moderno e goloso.',
      'A decorare la torta, <strong>fiori bianchi e rosa</strong>, rametti di <strong>lavanda</strong>, <strong>rosette di crema blu</strong> e piccole perle di zucchero, disposti a cascata per dare movimento e leggerezza alla composizione.',
      'Sul piano inferiore spicca il <strong>nome della festeggiata</strong> in eleganti lettere color oro, che rende la torta unica e perfettamente coordinata con fiori, cupcake e biscotti decorati della sweet table.',
      'La Torta di Compleanno Drip Cake Blu con Rose può essere personalizzata nei colori della sfumatura e delle colature, nei fiori, nella dedica e nel numero di piani.',
      '<strong>Un dolce raffinato e pieno di poesia, per festeggiare un nuovo anno con la grazia dei fiori e il fascino del blu.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    tema: 'Floreale, nei toni del blu',
    dettagli: ['Sfumatura bianco-blu con colature', 'Fiori, lavanda e rosette di crema', 'Nome in lettere dorate'],
    seoDescription: 'Drip cake di compleanno a due piani sfumata di blu, con colature, fiori, lavanda e nome in lettere dorate. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoCompleanno('drip-cake-blu-con-rose', 'festeggiati'),
    recensioni: [],
  },
  {
    slug: 'drip-cake-rosa',
    titolo: 'Drip Cake Rosa',
    categoria: 'Compleanno adulti',
    descrizione: 'Drip cake rosa con colature bianche, corona di ciuffi di crema e topper “Happy Birthday” dorato: semplice, golosa e romantica.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Drip Cake Rosa</strong> è una creazione dolce e romantica, perfetta per chi desidera una torta elegante, moderna e irresistibilmente golosa.',
      'La torta, tonda e alta, è rivestita da una morbida <strong>copertura rosa cipria</strong> e decorata da <strong>colature di cioccolato bianco</strong> che scendono lungo i bordi con un effetto naturale e raffinato.',
      'Sulla sommità, una <strong>corona di ciuffi di crema rosa</strong> incornicia il <strong>topper “Happy Birthday” dorato</strong>, mentre piccole rosette completano la base con delicatezza.',
      'Il suo stile pulito la rende ideale per compleanni intimi e feste con gli amici, ma anche come torta principale di una sweet table total pink con cupcake, cake pops e macarons coordinati.',
      'La Torta di Compleanno Drip Cake Rosa può essere personalizzata nei colori, nel topper con il nome o l’età, nel gusto e nelle dimensioni.',
      '<strong>Semplice, elegante e golosa: la torta perfetta per festeggiare con dolcezza ogni nuovo inizio.</strong>',
    ],
    forma: 'Tonda, 1 piano',
    tema: 'Romantico, total pink',
    dettagli: ['Colature di cioccolato bianco', 'Corona di ciuffi di crema rosa', 'Topper dorato personalizzabile'],
    seoDescription: 'Drip cake di compleanno rosa con colature bianche, ciuffi di crema e topper Happy Birthday dorato. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCompleanno('drip-cake-rosa', 'festeggiati'),
    recensioni: [],
  },
  {
    slug: 'tema-mare-con-conchiglie',
    titolo: 'Tema Mare con Conchiglie',
    categoria: 'Compleanno adulti',
    descrizione: 'Torta turchese a tema mare con conchiglie, stelle marine e coralli in zucchero, base di sabbia e numeri dell’età decorati con perle.',
    descrizioneLunga: [
      'La <strong>Torta di Compleanno Tema Mare con Conchiglie</strong> porta in tavola tutta la freschezza dell’estate e il fascino dei fondali marini, per un compleanno che profuma di salsedine e vacanza.',
      'La torta è rivestita da una brillante <strong>copertura turchese</strong>, decorata con <strong>coralli bianchi</strong>, <strong>conchiglie</strong> e <strong>stelle marine</strong> in pasta di zucchero e cioccolato, mentre una base di <strong>“sabbia” croccante</strong> ricrea la riva del mare.',
      'Sulla sommità, onde in pasta di zucchero nei toni dell’azzurro accompagnano i <strong>numeri dell’età</strong>, impreziositi da perle e piccole conchiglie, e la scritta <em>Buon Compleanno</em> in elegante corsivo.',
      'È la torta ideale per i compleanni importanti, dai 30 ai 60 anni e oltre, per chi ama il mare e per le feste estive in riva al mare o in giardino.',
      'La Torta di Compleanno Tema Mare con Conchiglie può essere personalizzata con l’età, il nome, la dedica e le sfumature di colore, e si abbina a biscotti decorati, macarons e dolci al bicchiere a tema marino.',
      '<strong>Un tuffo nel blu per festeggiare un nuovo anno con la leggerezza del mare e la luce dell’estate.</strong>',
    ],
    forma: 'Tonda, 1 piano',
    tema: 'Mare e conchiglie',
    dettagli: ['Conchiglie, stelle marine e coralli in zucchero', 'Numeri dell’età decorati con perle', 'Base di sabbia croccante'],
    seoDescription: 'Torta di compleanno turchese a tema mare con conchiglie, stelle marine, coralli e numeri dell’età. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCompleanno('tema-mare-con-conchiglie', 'festeggiati'),
    recensioni: [],
  },
];

/** nome completo del prodotto, es. "Torta di compleanno Hollywood Star" */
export const nomeCompleto = (torta: TortaCompleannoAdulti) => `Torta di compleanno ${torta.titolo}`;

/** slug della pagina prodotto, es. "torta-di-compleanno-hollywood-star" */
export const slugProdotto = (torta: TortaCompleannoAdulti) => `torta-di-compleanno-${torta.slug}`;

/** indirizzo della pagina prodotto, es. "/torte-di-compleanno-per-adulti/torta-di-compleanno-hollywood-star" */
export const urlProdotto = (torta: TortaCompleannoAdulti) => `/torte-di-compleanno-per-adulti/${slugProdotto(torta)}`;
