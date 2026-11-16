/*
  Torte di laurea: usate
  - nella sezione "Torte di laurea" di /torte-artistiche
  - come catalogo prodotti in /torte-di-laurea
  - per generare le pagine prodotto /torte-di-laurea/<slug> (src/pages/torte-di-laurea/[slug].astro)
  Ogni torta ha la coppia di foto "torta" + "con il laureato / la laureata / i laureati".

  RECENSIONI: il sito è statico, quindi le recensioni inviate dal modulo arrivano a Lucia su WhatsApp.
  Per pubblicarne una, aggiungerla all'array `recensioni` della torta, ad esempio:
    recensioni: [
      { nome: 'Giulia R.', voto: 5, data: '2026-10-21', testo: 'Torta bellissima e buonissima!' },
    ],
  Media, numero di recensioni e dati strutturati per Google si aggiornano da soli.
*/
export type FotoLaurea = { src: string; label: string; fit?: 'cover' | 'contain'; pos?: string };

export type Recensione = {
  nome: string;
  /** da 1 a 5 */
  voto: number;
  /** data in formato AAAA-MM-GG */
  data: string;
  testo: string;
};

export type TortaLaurea = {
  slug: string;
  titolo: string;
  categoria: 'Laurea';
  /** descrizione breve, usata nelle card */
  descrizione: string;
  /** descrizione completa (un paragrafo per elemento), usata nella pagina prodotto; ammette <strong> per il grassetto e <em> per il corsivo */
  descrizioneLunga: string[];
  /** forma e struttura della torta */
  forma: string;
  /** corso di laurea a cui è ispirata la torta (tutte restano personalizzabili) */
  corso: string;
  /** punti in evidenza */
  dettagli: string[];
  /** meta description della pagina prodotto (Google): 120-160 caratteri, univoca, con città e invito all'azione */
  seoDescription: string;
  foto: FotoLaurea[];
  recensioni: Recensione[];
};

const fotoLaurea = (slug: string, conChi: 'laureato' | 'laureata' | 'laureati'): FotoLaurea[] => [
  { src: `/images/torta-di-laurea-${slug}.webp`, label: 'La torta' },
  {
    src: `/images/torta-di-laurea-${slug}-con-${conChi}.webp`,
    label: conChi === 'laureato' ? 'Con il laureato' : conChi === 'laureata' ? 'Con la laureata' : 'Con i laureati',
  },
];

export const torteLaurea: TortaLaurea[] = [
  {
    slug: 'ingegneria-prestige',
    titolo: 'Ingegneria Prestige',
    categoria: 'Laurea',
    descrizione: 'Torta a tre piani bianca e rossa con rose e fiori di gypsophila, tocco e pergamena in zucchero: pensata per festeggiare i nuovi ingegneri.',
    descrizioneLunga: [
      'Eleganza, raffinatezza e cura dei dettagli si incontrano in questa scenografica <strong>torta di laurea a tre piani</strong>, pensata per celebrare uno dei traguardi più importanti della vita: il conseguimento della laurea in Ingegneria.',
      'La torta si distingue per la sua <strong>raffinata copertura bianco avorio</strong>, impreziosita da eleganti decorazioni in rilievo, delicate bordure di perle e <strong>nastri in raso rosso intenso</strong> che avvolgono armoniosamente ogni piano.',
      'Splendidi bouquet di <strong>rose rosse e piccoli fiori bianchi</strong> donano alla composizione un tocco romantico e sofisticato, creando un contrasto cromatico di grande impatto visivo.',
      'A completare la creazione, l’immancabile <strong>tocco accademico nero con nappina rossa</strong>, simbolo del percorso universitario, del sacrificio e del successo raggiunto.',
      'Una torta dal carattere prestigioso, in cui ogni elemento è studiato per trasformare il momento della laurea in un ricordo indimenticabile.',
      '<strong>Una creazione di cake design che celebra la passione, la determinazione e l’orgoglio di un grande traguardo.</strong>',
    ],
    forma: 'Tonda, 3 piani',
    corso: 'Ingegneria',
    dettagli: ['Tre piani tondi con nastri di raso rosso', 'Rose rosse e gypsophila in zucchero', 'Tocco e pergamena modellati a mano'],
    seoDescription: 'Torta di laurea a tre piani bianca e rossa con rose, tocco e pergamena in zucchero, per i nuovi ingegneri. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoLaurea('ingegneria-prestige', 'laureati'),
    recensioni: [],
  },
  {
    slug: 'elegance',
    titolo: 'Elegance',
    categoria: 'Laurea',
    descrizione: 'Torta a due piani con raffinati decori a ricciolo in ghiaccia, nastro rosso e tocco accademico, personalizzata con la dedica al neo dottore.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Elegance</strong> è una raffinata creazione artigianale a due piani, pensata per celebrare con eleganza e originalità uno dei traguardi più importanti della vita: il conseguimento della laurea.',
      'Il suo design classico e sofisticato si distingue per la delicata <strong>copertura color avorio</strong>, impreziosita da elaborati motivi ornamentali in rilievo, eleganti volute decorative e finiture curate nei minimi dettagli. I <strong>nastri in raso rosso bordeaux</strong>, che avvolgono armoniosamente entrambi i piani, creano un contrasto raffinato e conferiscono alla torta un carattere solenne e prestigioso.',
      'Sulla sommità spicca il tradizionale <strong>tocco accademico nero con nappina rossa</strong>, simbolo dell’impegno, della determinazione e del successo raggiunto al termine del percorso universitario.',
      'A rendere ancora più speciale questa creazione è la <strong>dedica personalizzata</strong>, realizzata con un’elegante scrittura che celebra il neolaureato e rende ogni torta unica.',
      'Ogni elemento si combina armoniosamente, dando vita a una composizione scenografica dal fascino senza tempo, perfetta per impreziosire il tavolo dei festeggiamenti e diventare protagonista di un giorno indimenticabile.',
      '<strong>La Torta di Laurea Elegance è un omaggio alla passione, ai sacrifici e ai sogni realizzati, perché ogni grande traguardo merita di essere celebrato con qualcosa di veramente speciale.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    corso: 'Tutti i corsi di laurea',
    dettagli: ['Decori a ricciolo in ghiaccia reale', 'Dedica personalizzata con il nome', 'Tocco accademico con nappina rossa'],
    seoDescription: 'Torta di laurea Elegance a due piani avorio con nastri bordeaux, tocco accademico e dedica personalizzata. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoLaurea('elegance', 'laureato'),
    recensioni: [],
  },
  {
    slug: 'eleganza-accademica',
    titolo: 'Eleganza Accademica',
    categoria: 'Laurea',
    descrizione: 'Base di balze rosse e grande fiocco in zucchero, piano superiore bianco con dedica e tocco: una torta di laurea scenografica e romantica.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Eleganza Accademica</strong> è una raffinata creazione artigianale a due piani, pensata per celebrare con eleganza, emozione e originalità uno dei momenti più significativi della vita: il conseguimento della laurea.',
      'Il suo design si distingue per un affascinante contrasto tra il <strong>bianco avorio della copertura</strong> e le intense tonalità del rosso, colore simbolo della tradizione accademica. Il piano inferiore è impreziosito da una scenografica lavorazione a balze sovrapposte, che ricorda la delicatezza dei petali di un fiore e dona alla torta movimento, volume e un carattere romantico.',
      'A impreziosire la composizione, un <strong>grande fiocco rosso in raso</strong>, elegante protagonista della decorazione, accompagnato da delicate foglie verdi che ne esaltano la bellezza e il contrasto cromatico.',
      'Il piano superiore, dalla superficie liscia e raffinata, accoglie una <strong>dedica personalizzata in eleganti lettere dorate</strong>, pensata per rendere omaggio alla neolaureata. Sulla sommità spicca il tradizionale <strong>tocco accademico nero con nappina rossa</strong>, simbolo dell’impegno, della perseveranza e del successo raggiunto.',
      'Ogni particolare contribuisce a creare un insieme armonioso e ricercato, in cui la cura artigianale delle decorazioni incontra il significato profondo di un traguardo conquistato attraverso anni di studio e sacrifici.',
      'La Torta di Laurea Eleganza Accademica può essere personalizzata con il nome del laureato, i colori preferiti e dettagli ispirati al percorso universitario, diventando una creazione unica e ricca di significato.',
      '<strong>Una torta che racconta la gioia di un sogno realizzato, celebra l’orgoglio di un grande risultato e rende ancora più indimenticabile il giorno della laurea.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    corso: 'Tutti i corsi di laurea',
    dettagli: ['Base a balze rosse in pasta di zucchero', 'Grande fiocco e foglie in zucchero', 'Dedica scritta a mano sul piano superiore'],
    seoDescription: 'Torta di laurea a due piani con balze rosse, grande fiocco, dedica dorata e tocco accademico. Creata a mano a Siracusa da Lucia Garro, preventivo gratuito.',
    foto: fotoLaurea('eleganza-accademica', 'laureata'),
    recensioni: [],
  },
  {
    slug: 'benessere-accademico',
    titolo: 'Benessere Accademico',
    categoria: 'Laurea',
    descrizione: 'Torta bianca a due piani con rose rosse, nastro di raso, libro e tocco in zucchero, ideale per celebrare una laurea in Medicina.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Benessere Accademico</strong> è una raffinata creazione artigianale a due piani, pensata per celebrare con eleganza e prestigio uno dei traguardi più importanti della vita: il conseguimento della laurea in Medicina e Chirurgia.',
      'Il suo design essenziale e sofisticato si distingue per la <strong>delicata copertura bianco avorio</strong>, impreziosita da eleganti nastri in raso rosso che avvolgono armoniosamente entrambi i piani, creando un contrasto cromatico di grande fascino.',
      'A rendere ancora più scenografica la composizione sono le splendide <strong>rose rosse</strong>, disposte con equilibrio lungo i due livelli della torta. Il loro colore intenso richiama la passione, la determinazione e l’impegno che accompagnano il lungo percorso di studi universitari.',
      'Sulla sommità spiccano il tradizionale <strong>tocco accademico nero con nappina rossa</strong> e un piccolo libro decorativo, simboli della conoscenza, della formazione e del successo raggiunto. Questi elementi, realizzati con cura in pasta di zucchero, conferiscono alla torta un significato speciale, rendendo omaggio alla dedizione necessaria per intraprendere la professione medica.',
      'Le linee pulite, le proporzioni armoniose e la disposizione raffinata delle decorazioni donano alla creazione uno stile elegante e senza tempo, perfetto per impreziosire il tavolo dei festeggiamenti e diventare protagonista di una giornata indimenticabile.',
      'Ogni dettaglio può essere personalizzato per raccontare il percorso universitario del laureato, attraverso colori, dediche e decorazioni capaci di esprimere la sua personalità e il valore del traguardo conquistato.',
      '<strong>La Torta di Laurea Benessere Accademico è un omaggio alla conoscenza, alla passione per la medicina e al desiderio di dedicare il proprio futuro alla cura e al benessere degli altri. Una creazione che celebra non soltanto la fine di un percorso di studi, ma soprattutto l’inizio di una nuova e straordinaria avventura professionale.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    corso: 'Medicina e Chirurgia',
    dettagli: ['Rose rosse modellate a mano', 'Libro e tocco in zucchero', 'Nastro di raso coordinato ai colori della festa'],
    seoDescription: 'Torta di laurea in Medicina a due piani avorio con rose rosse, libro e tocco in zucchero. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoLaurea('benessere-accademico', 'laureato'),
    recensioni: [],
  },
  {
    slug: 'libro-della-conoscenza',
    titolo: 'Libro della Conoscenza',
    categoria: 'Laurea',
    descrizione: 'Torta a forma di libro rosso con titolo del corso di laurea e anno, completata da tocco, pergamena e bigliettino di auguri in zucchero.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Libro della Conoscenza</strong> è una raffinata creazione artigianale dalla caratteristica forma rettangolare, pensata per celebrare con eleganza e originalità uno dei traguardi più significativi della vita: il conseguimento della laurea.',
      'Il suo design si ispira al mondo della conoscenza e della formazione universitaria, trasformando la torta in un <strong>grande libro dalla copertina rosso intenso</strong>, impreziosito da eleganti dettagli dorati e finiture decorative che richiamano il prestigio della tradizione accademica.',
      'Sulla superficie prendono vita simboli ricchi di significato: il tradizionale <strong>tocco di laurea nero con cordoncino rosso e oro</strong>, un raffinato libro decorativo con pagine accuratamente modellate, una pergamena arrotolata e un elegante fiocco rosso, simboli dell’impegno, della dedizione e delle conoscenze acquisite durante il percorso universitario.',
      'La composizione è ulteriormente valorizzata da <strong>piccoli dettagli ornamentali dorati</strong>, che donano luminosità e raffinatezza, mentre la scritta <em>Pedagogia</em> e l’anno <em>2025</em>, collocati lungo il bordo della torta, rendono omaggio alla disciplina di studi e al traguardo raggiunto.',
      'Ogni elemento decorativo è studiato con particolare attenzione alle forme, ai colori e alle proporzioni, dando vita a una creazione armoniosa in cui <strong>l’arte del cake design incontra il valore simbolico della conoscenza</strong>.',
      'La Torta di Laurea Libro della Conoscenza può essere personalizzata con il nome del laureato, il corso di studi, l’anno della laurea e decorazioni ispirate alla facoltà universitaria, diventando un dolce unico, capace di raccontare una storia fatta di sacrifici, crescita personale e aspirazioni.',
      '<strong>Un omaggio alla cultura, alla passione per l’apprendimento e alla determinazione di chi ha trasformato anni di studio in un successo. Perché ogni laurea non rappresenta soltanto la conclusione di un percorso, ma l’inizio di un nuovo capitolo tutto da scrivere.</strong>',
    ],
    forma: 'Scolpita a forma di libro',
    corso: 'Pedagogia e Scienze della Formazione',
    dettagli: ['Torta scolpita a forma di libro', 'Titolo del corso e anno di laurea', 'Tocco, pergamena e bigliettino in zucchero'],
    seoDescription: 'Torta di laurea a forma di libro rosso con dettagli dorati, tocco, pergamena e anno di laurea. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoLaurea('libro-della-conoscenza', 'laureata'),
    recensioni: [],
  },
  {
    slug: 'prestige-square',
    titolo: 'Prestige Square',
    categoria: 'Laurea',
    descrizione: 'Torta a piani quadrati, bianca con nastri rossi e decori in ghiaccia, sormontata da tocco e libro: elegante e dalle linee pulite.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Prestige Square</strong> è una scenografica creazione artigianale a tre piani, caratterizzata da un design geometrico originale e raffinato, pensata per celebrare con eleganza uno dei traguardi più importanti della vita: il conseguimento della laurea.',
      'La sua particolarità risiede nell’elegante <strong>struttura a piani quadrati sovrapposti</strong>, che dona alla composizione un aspetto maestoso e contemporaneo, mantenendo il fascino delle decorazioni classiche della tradizione pasticcera.',
      'La delicata <strong>copertura bianco avorio</strong> è impreziosita da raffinati motivi ornamentali in rilievo, eleganti volute decorative e bordure di piccole perle, che valorizzano ogni piano con armonia e ricercatezza. Gli splendidi <strong>nastri in raso rosso</strong>, disposti lungo la base di ciascun livello, creano un contrasto cromatico intenso e sofisticato, richiamando il colore simbolo della tradizione universitaria italiana.',
      'Sulla sommità della torta trovano spazio due elementi dal profondo valore simbolico: il tradizionale <strong>tocco accademico nero</strong> e un elegante <strong>libro rosso decorativo</strong>, accompagnati da dettagli accuratamente modellati in pasta di zucchero. Questi simboli rappresentano la conoscenza acquisita, la determinazione e i sacrifici affrontati durante il percorso di studi.',
      'L’armonia delle proporzioni, la precisione delle decorazioni e l’equilibrio tra il bianco avorio e il rosso intenso conferiscono alla torta uno stile prestigioso e senza tempo, rendendola una presenza scenografica capace di impreziosire qualsiasi festa di laurea.',
      'La Torta di Laurea Prestige Square può essere personalizzata con il nome del laureato, la facoltà universitaria, l’anno della laurea e dettagli decorativi dedicati al percorso accademico, trasformandosi in una creazione esclusiva che racconta una storia di impegno, crescita e successo.',
      '<strong>Un’elegante celebrazione della conoscenza e della perseveranza, dove ogni dettaglio racconta il valore di un sogno conquistato. Perché il giorno della laurea non rappresenta soltanto la conclusione di un percorso, ma l’inizio di un futuro ricco di nuove opportunità e grandi soddisfazioni.</strong>',
    ],
    forma: 'Quadrata, a più piani',
    corso: 'Tutti i corsi di laurea',
    dettagli: ['Piani quadrati con nastri rossi', 'Decori in ghiaccia reale', 'Tocco e libro in zucchero in cima'],
    seoDescription: 'Torta di laurea a tre piani quadrati avorio con nastri rossi, perle, tocco e libro in zucchero. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoLaurea('prestige-square', 'laureata'),
    recensioni: [],
  },
  {
    slug: 'eleganza-farmaceutica',
    titolo: 'Eleganza Farmaceutica',
    categoria: 'Laurea',
    descrizione: 'Torta bianca a due piani con rose rosse, mortaio, provette e pergamena in zucchero, dedicata a una laurea in Chimica e Tecnologie Farmaceutiche.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Eleganza Farmaceutica</strong> è una raffinata creazione artigianale a due piani, pensata per celebrare con eleganza e originalità il conseguimento della laurea in Chimica e Tecnologie Farmaceutiche, un traguardo che rappresenta anni di studio, dedizione e passione per la scienza.',
      'Il suo design si distingue per la <strong>delicata copertura bianco avorio</strong>, impreziosita da eleganti nastri in raso rosso che avvolgono armoniosamente entrambi i piani, creando un contrasto cromatico raffinato e ricco di significato.',
      'A rendere particolarmente scenografica la composizione è uno splendido bouquet di <strong>rose rosse</strong>, accompagnate da piccoli elementi floreali, bacche decorative e foglie verdi, che dona alla torta un carattere romantico e sofisticato. La disposizione dei fiori sulla sommità crea un movimento naturale, valorizzando l’eleganza dell’intera struttura.',
      'Accanto alle decorazioni floreali spicca il tradizionale <strong>tocco accademico nero con nappina rossa</strong>, simbolo del successo universitario e della determinazione necessaria per raggiungere un obiettivo così importante.',
      'La particolarità di questa creazione risiede nei suoi <strong>dettagli ispirati al mondo della chimica e della farmaceutica</strong>: piccole provette da laboratorio, un mortaio con pestello e una raffinata pergamena decorativa che riporta il titolo di studio e la data della laurea. Elementi accuratamente modellati in pasta di zucchero, capaci di raccontare attraverso forme e simboli il percorso accademico della neolaureata.',
      'Un’elegante dedica personalizzata, accompagnata da una pergamena celebrativa, completa la composizione e rende la torta ancora più significativa, trasformandola in un omaggio speciale alla conoscenza e alla professione scelta.',
      'L’armonia delle proporzioni, la delicatezza delle decorazioni e l’equilibrio tra i toni avorio e rosso intenso conferiscono alla torta uno stile elegante e senza tempo, perfetto per diventare protagonista del tavolo dei festeggiamenti.',
      'La Torta di Laurea Eleganza Farmaceutica può essere personalizzata con il nome del laureato, la facoltà universitaria, la data della laurea e dettagli decorativi dedicati al percorso di studi, dando vita a una creazione unica e ricca di significato.',
      '<strong>Un omaggio alla passione per la scienza, alla perseveranza e al desiderio di contribuire alla salute e al benessere delle persone. Perché ogni laurea non rappresenta soltanto il raggiungimento di un obiettivo, ma l’inizio di un futuro costruito con conoscenza, impegno e grandi aspirazioni.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    corso: 'Farmacia e CTF',
    dettagli: ['Mortaio, provette e pergamena in zucchero', 'Rose rosse fatte a mano', 'Corso e data di laurea sulla pergamena'],
    seoDescription: 'Torta di laurea in Farmacia e CTF con rose rosse, provette, mortaio e pergamena in zucchero. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoLaurea('eleganza-farmaceutica', 'laureati'),
    recensioni: [],
  },
  {
    slug: 'essenza-del-sapere',
    titolo: 'Essenza del Sapere',
    categoria: 'Laurea',
    descrizione: 'Torta rettangolare con bordo di rose rosse, tocco, libro e pergamena in zucchero e la dedica scritta a mano con titolo di laurea.',
    descrizioneLunga: [
      'La <strong>Torta di Laurea Essenza del Sapere</strong> è una raffinata creazione artigianale dalla caratteristica forma rettangolare, pensata per celebrare con eleganza e originalità il conseguimento della laurea in Naturopatia e Scienze Olistiche, un traguardo che rappresenta anni di studio, passione e dedizione al benessere della persona.',
      'Il suo design si distingue per la <strong>delicata copertura bianco avorio</strong>, impreziosita da un’elaborata bordura decorativa nei toni del rosso intenso, colore simbolo della tradizione accademica italiana. Le eleganti lavorazioni lungo i bordi, arricchite da morbide rifiniture bianche, creano un raffinato contrasto cromatico e conferiscono alla composizione un aspetto armonioso e scenografico.',
      'Sulla superficie della torta prendono vita alcuni dei simboli più rappresentativi del percorso universitario: il tradizionale <strong>tocco accademico nero con cordoncino rosso</strong>, un piccolo libro decorativo e una raffinata pergamena arrotolata, impreziosita da un delicato nastro rosso. Ogni elemento, accuratamente modellato in pasta di zucchero, racconta il valore della conoscenza, dell’impegno e della determinazione necessari per raggiungere un obiettivo così importante.',
      'A completare la composizione, <strong>piccole rose rosse e una delicata rosa bianca</strong> donano un tocco romantico ed elegante, mentre la dedica personalizzata, realizzata con una raffinata scrittura, celebra il titolo accademico conseguito e rende omaggio alla neolaureata.',
      'La particolarità di questa creazione risiede nel suo significato: una torta dedicata a un percorso di studi che pone al centro <strong>l’armonia tra corpo, mente e natura</strong>, valorizzando la conoscenza delle discipline olistiche e l’attenzione al benessere naturale.',
      'Ogni dettaglio viene realizzato con cura artigianale, dalle decorazioni simboliche alle finiture floreali, dando vita a una composizione elegante e ricca di personalità, perfetta per diventare protagonista di una festa di laurea indimenticabile.',
      'La Torta di Laurea Essenza del Sapere può essere personalizzata con il nome del laureato, il corso di studi, la data della laurea e decorazioni dedicate alla facoltà universitaria, trasformandosi in una creazione esclusiva capace di raccontare una storia di crescita, sacrifici e sogni realizzati.',
      '<strong>Un omaggio alla conoscenza, alla passione per il benessere naturale e alla determinazione di chi ha scelto di dedicare il proprio futuro all’armonia e alla cura della persona. Perché ogni laurea non è soltanto il coronamento di un percorso di studi, ma l’inizio di un nuovo viaggio fatto di consapevolezza, opportunità e grandi aspirazioni.</strong>',
    ],
    forma: 'Rettangolare, 1 piano',
    corso: 'Naturopatia e Scienze Olistiche',
    dettagli: ['Bordo di rose rosse in zucchero', 'Tocco, libro e pergamena', 'Dedica e titolo di laurea scritti a mano'],
    seoDescription: 'Torta di laurea rettangolare con bordo rosso, rose, tocco, libro e pergamena in zucchero, per Naturopatia. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoLaurea('essenza-del-sapere', 'laureata'),
    recensioni: [],
  },
];

/** nome completo del prodotto, es. "Torta di laurea Essenza del Sapere" */
export const nomeCompleto = (torta: TortaLaurea) => `Torta di laurea ${torta.titolo}`;

/** slug della pagina prodotto, es. "torta-di-laurea-essenza-del-sapere" */
export const slugProdotto = (torta: TortaLaurea) => `torta-di-laurea-${torta.slug}`;

/** indirizzo della pagina prodotto, es. "/torte-di-laurea/torta-di-laurea-essenza-del-sapere" */
export const urlProdotto = (torta: TortaLaurea) => `/torte-di-laurea/${slugProdotto(torta)}`;

/** media dei voti arrotondata a una cifra decimale (0 se non ci sono recensioni) */
export const mediaVoti = (recensioni: Recensione[]) =>
  recensioni.length ? Math.round((recensioni.reduce((tot, r) => tot + r.voto, 0) / recensioni.length) * 10) / 10 : 0;
