/*
  Torte per battesimi e comunioni: usate
  - nella sezione "Torte per battesimi e comunioni" di /torte-artistiche
  - come catalogo prodotti in /torte-per-battesimi-e-comunioni
  - per generare le pagine prodotto /torte-per-battesimi-e-comunioni/<slug>
    (src/pages/torte-per-battesimi-e-comunioni/[slug].astro)
  Ogni torta ha la coppia di foto "torta" + "con i festeggiati".
  Le foto sono in public/images (torta-battesimo-*.webp / torta-comunione-*.webp; il .webp viene creato dal PNG in build).

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

export type TortaBattesimoComunione = {
  slug: string;
  titolo: string;
  categoria: 'Battesimo' | 'Comunione';
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

/** coppia di foto: `torta` e `conFesteggiati` sono i nomi dei file in public/images, senza estensione */
const fotoCerimonia = (torta: string, conFesteggiati: string): FotoTorta[] => [
  { src: `/images/${torta}.webp`, label: 'La torta' },
  { src: `/images/${conFesteggiati}.webp`, label: 'Con i festeggiati' },
];

export const torteBattesimoComunione: TortaBattesimoComunione[] = [
  {
    slug: 'angeli',
    titolo: 'degli Angeli',
    categoria: 'Battesimo',
    descrizione: 'Torta azzurra a due piani con angioletti modellati a mano, nuvole e stelline in zucchero e la targa con il nome del bambino.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo degli Angeli</strong> è una creazione delicata e piena di tenerezza, pensata per accogliere il bambino nel giorno del suo primo sacramento sotto lo sguardo protettivo degli angeli custodi.',
      'I due piani, rivestiti di <strong>pasta di zucchero azzurro cielo</strong>, sono decorati da <strong>nuvolette bianche</strong>, piccole <strong>stelle blu</strong> e bordi di perline che incorniciano ogni piano con grazia.',
      'Protagonisti della torta sono gli <strong>angioletti modellati a mano</strong>, con aureola dorata e ali bianche: uno riposa sulle nuvole in cima alla torta, gli altri vegliano sui piani accanto alla <strong>targa a forma di nuvola</strong> con la scritta <em>Il Battesimo di Francesco</em>.',
      'È perfetta per un battesimo dai toni azzurri e bianchi e si abbina a biscotti decorati a forma di angioletto e di nuvola, cupcake e cake pops coordinati per una sweet table armoniosa.',
      'La Torta di battesimo degli Angeli può essere personalizzata con il nome del bambino o della bambina, la data della cerimonia, i colori (anche nei toni del rosa) e il numero di piani.',
      '<strong>Un dolce che è una carezza: per celebrare il battesimo con la dolcezza degli angeli e la luce del cielo.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    tema: 'Angeli e nuvole',
    dettagli: ['Angioletti modellati a mano in zucchero', 'Nuvole, stelle e perline', 'Targa con il nome del bambino'],
    seoDescription: 'Torta di battesimo azzurra a due piani con angioletti modellati a mano, nuvole e targa con il nome. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-degli-angeli', 'torta-battesimo-degli-angeli-con-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'mongolfiera-e-orsetti',
    titolo: 'Mongolfiera e Orsetti',
    categoria: 'Battesimo',
    descrizione: 'Torta azzurra a due piani con mongolfiera e orsetto in cima, nuvole, festoni di bandierine, fasce dorate e la targa “Il Mio Battesimo”.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo Mongolfiera e Orsetti</strong> è una creazione romantica e sognante, che porta in volo il piccolo festeggiato verso il suo primo grande giorno.',
      'I due piani sono rivestiti di <strong>pasta di zucchero azzurra</strong> decorata con <strong>nuvolette bianche</strong> e separati da eleganti <strong>fasce dorate</strong>; sul piano inferiore corre un festone di <strong>bandierine</strong> sorretto da due teneri orsetti.',
      'In cima alla torta, tra soffici nuvole, un <strong>orsetto in mongolfiera</strong> modellato a mano vola sopra la <strong>targa “Il Mio Battesimo”</strong>, incorniciata da un delicato bordo azzurro.',
      'È ideale per una festa nei toni dell’azzurro, del bianco e dell’oro, da completare con biscotti decorati a forma di mongolfiera e di nuvola, cupcake e cake pops coordinati.',
      'La Torta di battesimo Mongolfiera e Orsetti può essere personalizzata con il nome del bambino o della bambina, la data, i colori della mongolfiera e il numero di piani.',
      '<strong>Un viaggio tra le nuvole per celebrare l’inizio di una vita piena di sogni e di amore.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    tema: 'Mongolfiera, nuvole e orsetti',
    dettagli: ['Orsetto in mongolfiera modellato a mano', 'Festone di bandierine e fasce dorate', 'Targa “Il Mio Battesimo” personalizzabile'],
    seoDescription: 'Torta di battesimo azzurra con orsetto in mongolfiera, nuvole, bandierine e fasce dorate. Cake design a Siracusa di Lucia Garro, chiedi un preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-azzurra-orsetti-mongolfiera', 'torta-battesimo-azzurra-orsetti-mongolfiera-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'orsetti-azzurri',
    titolo: 'Orsetti Azzurri',
    categoria: 'Battesimo',
    descrizione: 'Torta bianca a tre piani con effetto capitonné, perline e cubetti azzurri, scarpine in zucchero, cuore con nome e data e orsetto in cima.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo Orsetti Azzurri</strong> è una creazione elegante e classica a tre piani, pensata per un battesimo raffinato in bianco e azzurro.',
      'I piani bianchi sono lavorati con un delicato <strong>effetto capitonné</strong> impreziosito da perline argentate e da <strong>perle di zucchero azzurre</strong>; alla base, una fila di <strong>cubetti azzurri</strong> ricorda i giochi della prima infanzia.',
      'Sul piano centrale spicca un <strong>cuore con il nome della cerimonia e la data</strong>, accompagnato da un paio di <strong>scarpine azzurre</strong> in pasta di zucchero; in cima alla torta, un tenero <strong>orsetto</strong> veglia tra le perle.',
      'È perfetta come torta principale di una sweet table coordinata con biscotti a forma di orsetto e di body, cupcake e cake pops azzurri.',
      'La Torta di battesimo Orsetti Azzurri può essere personalizzata con il nome del bambino o della bambina, la data, la scritta anche in altre lingue, i colori e il numero di piani.',
      '<strong>Un classico senza tempo per festeggiare con tutta la famiglia un giorno da ricordare per sempre.</strong>',
    ],
    forma: 'Tonda, 3 piani',
    tema: 'Orsetti, bianco e azzurro',
    dettagli: ['Effetto capitonné con perline', 'Cuore con nome e data della cerimonia', 'Scarpine e orsetto in zucchero'],
    seoDescription: 'Torta di battesimo bianca e azzurra a tre piani con capitonné, scarpine, orsetto e cuore con nome e data. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-con-orsetti-azzurri', 'torta-battesimo-con-orsetti-azzurri-con-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'bianco-azzurro-con-orsetto',
    titolo: 'Bianco e Azzurro con Orsetto',
    categoria: 'Battesimo',
    descrizione: 'Torta rettangolare bianca con bordo di ciuffi di crema azzurra, stelle, scarpine, una piccola torta regalo con fiocco e orsetto e la scritta con il nome.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo Bianco e Azzurro con Orsetto</strong> è una creazione rettangolare generosa, ideale per le feste con tanti invitati senza rinunciare all’effetto scenografico.',
      'Il piano bianco è incorniciato da un ricco <strong>bordo di ciuffi di crema azzurra</strong> e da una cornice dorata, decorato con <strong>stelle</strong> nei toni dell’azzurro e dell’oro e con un paio di <strong>scarpine</strong> in pasta di zucchero.',
      'Al centro, la scritta <em>Il Mio Battesimo</em> con il <strong>nome del bambino</strong>, e sopra una <strong>piccola torta a forma di regalo</strong> legata da un grande fiocco verde acqua, su cui siede un tenero <strong>orsetto</strong>.',
      'Si abbina perfettamente a biscotti decorati a forma di orsetto, stella e scarpina, cupcake e cake pops per una sweet table coordinata.',
      'La Torta di battesimo Bianco e Azzurro con Orsetto può essere personalizzata con nome, data, colori del bordo e del fiocco e dimensioni in base al numero di invitati.',
      '<strong>Un dolce pieno di tenerezza da condividere con tutti gli invitati, nel giorno più dolce.</strong>',
    ],
    forma: 'Rettangolare, con torta regalo in cima',
    tema: 'Orsetto, stelle e scarpine',
    dettagli: ['Bordo di ciuffi di crema azzurra', 'Torta regalo con fiocco e orsetto', 'Scritta con il nome del bambino'],
    seoDescription: 'Torta di battesimo rettangolare bianca e azzurra con ciuffi di crema, stelle, scarpine e orsetto su torta regalo. Cake design a Siracusa, preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-bianco-azzurro-con-orsetto', 'torta-battesimo-bianco-azzurro-con-orsetto-con-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'fiocco-rosa',
    titolo: 'Fiocco Rosa',
    categoria: 'Battesimo',
    descrizione: 'Torta a tre piani con rose di crema sfumate di rosa, piano bianco capitonné e grande fiocco rosa sulla sommità con il nome della bambina.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo Fiocco Rosa</strong> è una creazione romantica e femminile a tre piani, pensata per il battesimo di una bambina.',
      'Il piano inferiore è avvolto da <strong>rose di crema sfumate</strong> dal rosa intenso al rosa cipria, il piano centrale è bianco con un raffinato <strong>effetto capitonné</strong> impreziosito da perline e il piano superiore accoglie la scritta <em>Il Battesimo di Sophia</em>.',
      'Sulla sommità trionfa un <strong>grande fiocco rosa</strong> in pasta di zucchero, il dettaglio che rende questa torta delicata e inconfondibile.',
      'È perfetta per una sweet table total pink con cupcake, cake pops e biscotti decorati a forma di piedini e di body, coordinati con fiori e palloncini.',
      'La Torta di battesimo Fiocco Rosa può essere personalizzata con il nome della bambina, la data della cerimonia, le sfumature di colore e il numero di piani.',
      '<strong>Dolce come un primo sorriso: la torta per festeggiare una piccola principessa nel suo giorno speciale.</strong>',
    ],
    forma: 'Tonda, 3 piani',
    tema: 'Fiocco e rose, total pink',
    dettagli: ['Rose di crema sfumate di rosa', 'Piano bianco con effetto capitonné', 'Grande fiocco rosa in zucchero'],
    seoDescription: 'Torta di battesimo per bambina a tre piani con rose di crema sfumate, capitonné e grande fiocco rosa. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-con-fiocco-rosa', 'torta-battesimo-con-fiocco-rosa-con-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'rosa-con-orsetto',
    titolo: 'Rosa con Orsetto',
    categoria: 'Battesimo',
    descrizione: 'Torta a due piani con base di rose di crema rosa, piano bianco con pois dorati, rose dorate e orsetto dorato in cima con il nome della bambina.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo Rosa con Orsetto</strong> unisce la dolcezza del rosa alla luce dell’oro, per un battesimo elegante e pieno di tenerezza.',
      'Il piano inferiore è un tripudio di <strong>rose di crema</strong> sfumate dal rosa chiaro al fucsia, mentre il piano superiore, bianco e liscio, è decorato da <strong>pois dorati</strong> e da piccole <strong>rose dorate</strong> alla base.',
      'Sul piano superiore la scritta <em>Il Battesimo di Giordana</em> in elegante corsivo, e in cima un <strong>orsetto dorato</strong> con un fiocchetto rosa, modellato a mano.',
      'La torta, servita su un sottotorta dorato, si abbina a cupcake rosa, cake pops e biscotti decorati a forma di orsetto, body e fiore per una sweet table armoniosa.',
      'La Torta di battesimo Rosa con Orsetto può essere personalizzata con il nome, la data, le sfumature delle rose e il colore dell’orsetto.',
      '<strong>Un abbraccio di rose e d’oro per dare il benvenuto alla piccola di casa.</strong>',
    ],
    forma: 'Tonda, 2 piani',
    tema: 'Rose e orsetto dorato',
    dettagli: ['Rose di crema sfumate di rosa', 'Orsetto dorato modellato a mano', 'Pois e rose dorate'],
    seoDescription: 'Torta di battesimo rosa a due piani con rose di crema, pois dorati e orsetto dorato in cima con il nome. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-rosa-con-orsetto', 'torta-battesimo-rosa-con-orsetto-con-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'orsetto-e-sfere-dorate',
    titolo: 'Orsetto e Sfere Dorate',
    categoria: 'Battesimo',
    descrizione: 'Torta a righe sfumate dal bianco al rosa cipria, con sfere dorate, perle color cioccolato e un orsetto modellato a mano, su alzata dorata.',
    descrizioneLunga: [
      'La <strong>Torta di battesimo Orsetto e Sfere Dorate</strong> è una creazione moderna e raffinata, nei toni caldi e neutri del bianco, del rosa cipria, del cioccolato e dell’oro.',
      'La torta, tonda e alta, è rivestita da una crema lavorata a <strong>righe orizzontali sfumate</strong>, dal bianco al rosa polvere, con un effetto morbido ed elegante.',
      'Sulla sommità, accanto alla scritta <em>Il Battesimo di Michele</em>, siede un tenero <strong>orsetto modellato a mano</strong>, circondato da <strong>sfere dorate</strong> e da perle color cioccolato e cipria che scendono anche lungo il fianco della torta.',
      'Servita su un’<strong>alzata dorata</strong>, è perfetta per un battesimo in stile neutro e senza tempo, coordinata con cupcake, cake pops e biscotti decorati a forma di orsetto, luna e stella.',
      'La Torta di battesimo Orsetto e Sfere Dorate può essere personalizzata con il nome, la data, le sfumature di colore e le dimensioni.',
      '<strong>Semplice, calda e preziosa: per un battesimo dal gusto moderno, adatto a bambini e bambine.</strong>',
    ],
    forma: 'Tonda alta, 1 piano',
    tema: 'Orsetto, toni neutri e oro',
    dettagli: ['Righe di crema sfumate', 'Sfere dorate e perle color cioccolato', 'Orsetto modellato a mano'],
    seoDescription: 'Torta di battesimo a righe sfumate bianco e rosa cipria con sfere dorate e orsetto modellato a mano. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCerimonia('torta-battesimo-orsetti-palline-dorate', 'torta-battesimo-orsetti-palline-dorate-con-festeggiati'),
    recensioni: [],
  },
  {
    slug: 'tema-marino',
    titolo: 'Tema Marino',
    categoria: 'Comunione',
    descrizione: 'Torta a tre piani sfumata dal bianco al turchese, con conchiglie, stelle marine, coralli bianchi, perle e la targa “La Mia Prima Comunione”.',
    descrizioneLunga: [
      'La <strong>Torta di prima comunione Tema Marino</strong> è una creazione luminosa e scenografica a tre piani, che porta in tavola la freschezza e la serenità del mare.',
      'I piani sono rivestiti da una crema <strong>sfumata dal bianco al turchese</strong> con un delicato effetto acquerello, decorati da <strong>conchiglie</strong>, <strong>stelle marine</strong> azzurre e <strong>coralli bianchi</strong> in pasta di zucchero, e separati da file di <strong>perle</strong>.',
      'Alla base, una cornice di “<strong>sabbia</strong>” dorata ricrea la riva del mare; sul piano inferiore spicca la <strong>targa “La Mia Prima Comunione”</strong> e in cima un grande corallo bianco con conchiglie completa la composizione.',
      'È perfetta per le comunioni in primavera e in estate e si abbina a biscotti decorati a forma di conchiglia e stella marina, macarons, cupcake e dolci al bicchiere coordinati.',
      'La Torta di prima comunione Tema Marino può essere personalizzata con il nome del bambino o della bambina, la data, le sfumature di colore e il numero di piani; lo stesso tema è adatto anche alla cresima.',
      '<strong>Un dolce limpido come il mare per celebrare con gioia l’incontro più importante.</strong>',
    ],
    forma: 'Tonda, 3 piani',
    tema: 'Mare, conchiglie e coralli',
    dettagli: ['Sfumatura bianco-turchese effetto acquerello', 'Conchiglie, stelle marine e coralli in zucchero', 'Targa “La Mia Prima Comunione”'],
    seoDescription: 'Torta di prima comunione a tre piani a tema marino, con conchiglie, stelle marine, coralli e perle. Cake design a Siracusa di Lucia Garro, preventivo gratuito.',
    foto: fotoCerimonia('torta-comunione-tema-marino', 'torta-comunione-tema-marino-con-festeggiati'),
    recensioni: [],
  },
];

/** tipo di torta in base alla cerimonia, es. "Torta di battesimo" / "Torta di prima comunione" */
export const tipoTorta = (torta: TortaBattesimoComunione) =>
  torta.categoria === 'Battesimo' ? 'Torta di battesimo' : 'Torta di prima comunione';

/** nome completo del prodotto, es. "Torta di battesimo Fiocco Rosa" */
export const nomeCompleto = (torta: TortaBattesimoComunione) => `${tipoTorta(torta)} ${torta.titolo}`;

/** slug della pagina prodotto, es. "torta-di-battesimo-fiocco-rosa" */
export const slugProdotto = (torta: TortaBattesimoComunione) =>
  `${torta.categoria === 'Battesimo' ? 'torta-di-battesimo' : 'torta-di-prima-comunione'}-${torta.slug}`;

/** indirizzo della pagina prodotto, es. "/torte-per-battesimi-e-comunioni/torta-di-battesimo-fiocco-rosa" */
export const urlProdotto = (torta: TortaBattesimoComunione) => `/torte-per-battesimi-e-comunioni/${slugProdotto(torta)}`;
