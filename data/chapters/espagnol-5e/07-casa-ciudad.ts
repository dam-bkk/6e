import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-casa-ciudad",
  subject: "espagnol",
  grade: "5e",
  num: 7,
  title: "La casa y la ciudad",
  domain: "grandeurs",
  domainLabel: "Vocabulario",
  icon: "MapPin",
  teaser: "Décrire ta maison, situer les objets et te repérer en ville.",
  objectives: [
    "Je connais les pièces de la maison et quelques meubles",
    "Je sais utiliser hay (il y a) et está / están (se trouve)",
    "Je sais situer avec en, sobre, debajo de, al lado de",
    "Je connais les lieux et magasins de la ville",
    "Je sais demander mon chemin très simplement",
  ],
  lesson: [
    {
      title: "Les pièces de la maison",
      figure: "es-casa",
      paragraphs: [
        "La casa (la maison) ou el piso (l'appartement) se composent de plusieurs pièces : la cocina (la cuisine), el salón (le salon), el dormitorio ou la habitación (la chambre), el cuarto de baño (la salle de bains), el jardín (le jardin).",
        "Quelques meubles utiles : la cama (le lit), la mesa (la table), la silla (la chaise), el armario (l'armoire), la lámpara (la lampe).",
      ],
      example: [
        "Mi casa tiene tres dormitorios. → Ma maison a trois chambres.",
        "En mi habitación hay una cama y una mesa. → Dans ma chambre, il y a un lit et une table.",
      ],
      tip: "Faux ami : la cama = le lit (pas « la came » !). Et attention, cocina = cuisine, avec un c qui se prononce comme un « th » anglais en Espagne : « cothina ».",
    },
    {
      title: "Hay : il y a",
      paragraphs: [
        "Hay signifie « il y a ». C'est un mot invariable : il ne change jamais, qu'il y ait une chose ou plusieurs.",
        "Hay una mesa = il y a une table. Hay dos sillas = il y a deux chaises. Même mot dans les deux cas !",
        "On utilise hay pour dire qu'une chose existe, avec un / una, un nombre, ou sans article : En mi calle hay un parque = dans ma rue, il y a un parc.",
      ],
      example: [
        "En la cocina hay una mesa. → Dans la cuisine, il y a une table.",
        "En mi ciudad hay muchas tiendas. → Dans ma ville, il y a beaucoup de magasins.",
        "¿Hay un supermercado por aquí? → Il y a un supermarché par ici ?",
      ],
      tip: "Prononciation : hay se dit « aï » (comme dans « aïe »). Le h espagnol est toujours muet.",
    },
    {
      title: "Está / están : dire où se trouve quelque chose",
      paragraphs: [
        "Pour localiser une chose précise, on n'utilise pas hay mais le verbe estar : está (au singulier), están (au pluriel).",
        "La règle pour choisir : hay présente une chose nouvelle (avec un / una), está localise une chose précise (avec el / la ou un possessif).",
        "Compare : Hay un libro sobre la mesa (il y a un livre sur la table) et El libro está sobre la mesa (le livre est sur la table).",
      ],
      example: [
        "El cuarto de baño está al lado de la cocina. → La salle de bains est à côté de la cuisine.",
        "Mis libros están en el armario. → Mes livres sont dans l'armoire.",
      ],
      tip: "Astuce infaillible : hay + un/una/dos… mais está + el/la/mi. On ne dit JAMAIS « hay el libro » !",
    },
    {
      title: "Situer : les prépositions de lieu",
      paragraphs: [
        "Pour dire où se trouve un objet : en (dans, sur), sobre (sur), debajo de (sous, en dessous de), al lado de (à côté de), delante de (devant), detrás de (derrière).",
        "En est le mot passe-partout : el libro está en la mesa peut vouloir dire « sur la table », et estoy en casa = je suis à la maison.",
      ],
      example: [
        "El gato está debajo de la cama. → Le chat est sous le lit.",
        "La lámpara está sobre la mesa. → La lampe est sur la table.",
        "La silla está al lado de la ventana. → La chaise est à côté de la fenêtre.",
      ],
      tip: "Debajo de, al lado de, delante de, detrás de finissent tous par de. Si tu oublies le de, la phrase est fausse : on dit debajo DE la cama, jamais « debajo la cama ».",
    },
    {
      title: "La ville et demander son chemin",
      paragraphs: [
        "Les lieux de la ville : la calle (la rue), la plaza (la place), el parque (le parc), la tienda (le magasin), el supermercado (le supermarché), la panadería (la boulangerie), el colegio (le collège), la biblioteca (la bibliothèque), el cine (le cinéma).",
        "Pour demander ton chemin poliment : Por favor, ¿dónde está la plaza? (S'il vous plaît, où est la place ?).",
        "Pour répondre très simplement : todo recto (tout droit), a la derecha (à droite), a la izquierda (à gauche). Et on remercie : ¡Gracias!",
      ],
      example: [
        "— Por favor, ¿dónde está el cine? — Todo recto y a la derecha.",
        "→ S'il vous plaît, où est le cinéma ? — Tout droit puis à droite.",
      ],
      tip: "Faux ami célèbre : la biblioteca = la bibliothèque. La « librairie » (où on achète des livres) se dit la librería !",
    },
  ],
  exercises: [
    {
      id: "es7-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « la cuisine » en espagnol ?",
      choices: ["el salón", "la cocina", "la cama", "el jardín"],
      answer: 1,
      explanation:
        "La cocina = la cuisine. El salón = le salon, la cama = le lit, el jardín = le jardin. Astuce : cocina ressemble à « cuisine », les deux commencent par un son en « c ».",
      hint: "C'est la pièce où l'on prépare les repas.",
    },
    {
      id: "es7-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « hay » ?",
      choices: ["il est", "il y a", "c'est", "voici"],
      answer: 1,
      explanation:
        "Hay = il y a. C'est un mot invariable qui sert à dire qu'une chose existe : hay un parque = il y a un parc. Il se prononce « aï », car le h espagnol est muet.",
      hint: "Hay una mesa = ... une table.",
    },
    {
      id: "es7-3",
      level: 1,
      type: "truefalse",
      question: "« El gato está debajo de la cama » signifie « le chat est sous le lit ».",
      answer: true,
      explanation:
        "Vrai ! Debajo de = sous, en dessous de. La cama = le lit (faux ami : rien à voir avec le français). Le chat est donc bien sous le lit.",
    },
    {
      id: "es7-4",
      level: 1,
      type: "input",
      question: "Complète avec un seul mot : « En la cocina ... una mesa » (dans la cuisine, il y a une table).",
      answer: "hay",
      explanation:
        "Il y a = hay. On l'utilise ici car on présente une chose nouvelle avec una (une table). Hay ne change jamais : hay una mesa, hay dos mesas.",
      hint: "Un petit mot de 3 lettres qui se prononce « aï ».",
    },
    {
      id: "es7-5",
      level: 2,
      type: "qcm",
      question: "Choisis la phrase correcte :",
      choices: [
        "Hay el libro sobre la mesa",
        "El libro está sobre la mesa",
        "El libro hay sobre la mesa",
        "Está un libro sobre la mesa",
      ],
      answer: 1,
      explanation:
        "Pour localiser une chose précise (EL libro, avec l'article défini), on utilise está : el libro está sobre la mesa. Hay ne s'emploie jamais avec el/la : « hay el libro » est impossible. Avec un/una, on dirait : hay un libro sobre la mesa.",
      hint: "El libro : chose précise ou chose nouvelle ? Hay ou está ?",
    },
    {
      id: "es7-6",
      level: 2,
      type: "qcm",
      question: "« Mis libros ... en el armario. » Que faut-il écrire ?",
      choices: ["está", "están", "hay", "es"],
      answer: 1,
      explanation:
        "Mis libros (mes livres) est un pluriel, donc le verbe estar se met au pluriel : están. Mis libros están en el armario = mes livres sont dans l'armoire.",
      hint: "Mis libros : singulier ou pluriel ?",
    },
    {
      id: "es7-7",
      level: 2,
      type: "input",
      question: "Traduis « à droite » en espagnol (3 mots).",
      answer: "a la derecha",
      explanation:
        "À droite = a la derecha. À gauche = a la izquierda. Tout droit = todo recto. Trois expressions indispensables pour comprendre un itinéraire.",
      hint: "Ça commence par « a la… » et ce n'est pas izquierda.",
    },
    {
      id: "es7-8",
      level: 2,
      type: "truefalse",
      question: "En espagnol, « la biblioteca » désigne le magasin où l'on achète des livres.",
      answer: false,
      explanation:
        "Faux ! La biblioteca = la bibliothèque (où l'on emprunte les livres). Le magasin où on les achète est la librería. C'est un faux ami classique avec le français « librairie ».",
      hint: "Attention au faux ami librería / biblioteca…",
    },
    {
      id: "es7-9",
      level: 3,
      type: "input",
      question: "Complète avec les 2 mots manquants : « El gato está debajo ... ... cama » (le chat est sous le lit).",
      answer: "de la",
      explanation:
        "Debajo DE la cama : la préposition complète est debajo de, et on n'oublie jamais le de. « Debajo la cama » est une faute très fréquente. Même règle pour al lado de, delante de, detrás de.",
      hint: "Debajo ne marche jamais seul : il lui faut un petit mot de 2 lettres.",
    },
    {
      id: "es7-10",
      level: 3,
      type: "qcm",
      question: "Tu cherches la place. Comment le demandes-tu poliment ?",
      choices: [
        "¿Hay dónde la plaza?",
        "Por favor, ¿dónde está la plaza?",
        "Por favor, ¿dónde hay la plaza?",
        "¿Qué es la plaza?",
      ],
      answer: 1,
      explanation:
        "Pour localiser un lieu précis (LA plaza), on utilise está : ¿dónde está la plaza? Avec por favor pour la politesse. Piège : hay est impossible avec la (article défini) et ¿qué es? demanderait une définition, pas un lieu.",
      hint: "La plaza est un lieu précis : dónde + hay ou dónde + está ?",
    },
    {
      id: "es7-11",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « dans ma ville, il y a un parc » → « En mi ciudad ... un parque » (complète avec un seul mot).",
      answer: "hay",
      explanation:
        "On présente une chose nouvelle avec un (un parque), donc on utilise hay : en mi ciudad hay un parque. Está serait faux ici : il servirait à localiser un parc précis (el parque está…).",
      hint: "Un parque : article indéfini. Hay ou está ?",
    },
    {
      id: "es7-12",
      level: 3,
      type: "truefalse",
      question: "« La panadería está al lado del supermercado » signifie « la boulangerie est en face du supermarché ».",
      answer: false,
      explanation:
        "Faux ! Al lado de = à côté de, pas « en face de ». La phrase signifie : la boulangerie est à côté du supermarché. Remarque : de + el se contracte en del (al lado DEL supermercado).",
      hint: "Al lado de : côté ou face ?",
    },
  ],
  videos: [
    {
      title: "VOCABULAIRE des pièces de la MAISON 🏠 en ESPAGNOL 🇪🇸 [VOCAMIGO]",
      youtubeId: "KOYuqCy0HB0",
      channel: "Holamigo - apprendre l'espagnol",
    },
  ],
};
