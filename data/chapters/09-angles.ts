import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "angles",
  num: 9,
  title: "Les angles",
  domain: "geometrie",
  icon: "Compass",
  teaser: "Nommer, comparer et mesurer les angles au degré près, rapporteur en main.",
  objectives: [
    "Je sais ce qu'est un angle et je connais son vocabulaire : sommet, côtés",
    "Je sais nommer un angle avec trois lettres, la lettre du sommet au milieu",
    "Je sais reconnaître un angle aigu, droit, obtus ou plat",
    "Je sais mesurer un angle avec un rapporteur sans me tromper de graduation",
  ],
  lesson: [
    {
      title: "Qu'est-ce qu'un angle ?",
      paragraphs: [
        "Un angle est une ouverture entre deux demi-droites qui ont la même origine. Cette origine commune s'appelle le sommet de l'angle, et les deux demi-droites sont ses côtés.",
        "Très important : la mesure d'un angle, c'est la taille de l'ouverture, pas la longueur des côtés dessinés. Un angle aux côtés courts et un angle aux côtés longs peuvent avoir exactement la même mesure.",
        "Les angles se mesurent en degrés, notés °. Un tour complet mesure 360°.",
      ],
      example: [
        "Une porte entrouverte forme un angle avec le mur : le sommet est sur les gonds.",
        "Que la porte soit petite ou immense, si elle est ouverte pareil, l'angle est le même.",
      ],
      tip: "Pense à une paire de ciseaux : ce qui compte, c'est l'écartement des lames, pas leur longueur.",
    },
    {
      title: "Nommer un angle",
      paragraphs: [
        "On nomme un angle avec trois lettres : une lettre sur chaque côté et la lettre du sommet obligatoirement au milieu. L'angle de sommet O dont les côtés passent par A et B se nomme « l'angle AOB » (ou « l'angle BOA », c'est le même).",
        "Sur les figures, on repère souvent l'angle par un petit arc de cercle dessiné entre les deux côtés, près du sommet.",
      ],
      example: [
        "Sommet O, côtés [OA) et [OB) : on écrit « l'angle AOB ».",
        "« L'angle OAB » serait un autre angle : son sommet serait A !",
      ],
      tip: "Le sommet est la vedette : il est toujours au centre du nom, entouré par les deux autres lettres.",
    },
    {
      title: "Les familles d'angles",
      paragraphs: [
        "Un angle droit mesure exactement 90° : c'est l'angle de l'équerre, codé par un petit carré. Un angle aigu mesure moins de 90° : il est « pointu ». Un angle obtus mesure entre 90° et 180° : il est « ouvert ». Un angle plat mesure exactement 180° : ses deux côtés sont dans le prolongement l'un de l'autre et forment une droite.",
        "Pour aller plus loin : un angle nul mesure 0° (les deux côtés sont superposés) et un angle plein mesure 360° (un tour complet).",
      ],
      example: [
        "37° → aigu (moins de 90°).",
        "90° → droit.",
        "124° → obtus (entre 90° et 180°).",
        "180° → plat.",
      ],
      tip: "Moyen mnémotechnique : aigu comme une aiguille (fin et pointu), obtus comme une bouche grande ouverte. Le repère central, c'est 90°.",
      figure: "angle-types",
    },
    {
      title: "Comparer des angles",
      paragraphs: [
        "Pour comparer deux angles sans les mesurer, on peut les superposer (avec du papier calque, par exemple) : le plus grand est celui dont l'ouverture dépasse.",
        "Deux angles qui ont la même mesure sont superposables, même si leurs côtés sont dessinés avec des longueurs différentes. Ne te laisse jamais impressionner par un angle « dessiné en grand » : seule l'ouverture compte.",
      ],
      example: [
        "Un angle de 50° aux côtés de 10 cm est PLUS PETIT qu'un angle de 70° aux côtés de 2 cm.",
        "50° < 70°, la longueur des côtés ne joue aucun rôle.",
      ],
      tip: "Avant de comparer, classe d'abord chaque angle dans sa famille (aigu, droit, obtus) : un aigu est toujours plus petit qu'un obtus, sans aucune mesure.",
    },
    {
      title: "Mesurer avec le rapporteur",
      paragraphs: [
        "Méthode en trois étapes. 1 : place le centre du rapporteur exactement sur le sommet de l'angle. 2 : aligne le zéro d'une graduation avec l'un des côtés de l'angle. 3 : lis la mesure là où l'autre côté croise la graduation, en suivant la MÊME graduation que celle du zéro.",
        "Le grand piège du rapporteur : il porte deux graduations, une dans chaque sens, et l'autre côté de l'angle croise donc deux nombres (par exemple 60 et 120). Pour choisir le bon, demande-toi si l'angle est aigu ou obtus : un angle visiblement aigu ne peut pas mesurer 120° !",
        "Si un côté de l'angle est trop court pour atteindre la graduation, prolonge-le légèrement à la règle avant de mesurer.",
      ],
      example: [
        "Le côté de l'angle croise les nombres 60 et 120 sur le rapporteur.",
        "L'angle est pointu, donc aigu, donc inférieur à 90° : sa mesure est 60°.",
      ],
      tip: "Toujours le même réflexe avant de lire : « aigu ou obtus ? ». La réponse élimine automatiquement l'une des deux graduations.",
    },
  ],
  exercises: [
    {
      id: "ang-1",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle un angle qui mesure exactement 90° ?",
      choices: ["Un angle aigu", "Un angle droit", "Un angle obtus", "Un angle plat"],
      answer: 1,
      explanation:
        "Un angle de 90° est un angle droit : c'est l'angle de l'équerre, celui qu'on code avec un petit carré sur les figures. En dessous de 90°, l'angle est aigu ; au-dessus (jusqu'à 180°), il est obtus.",
    },
    {
      id: "ang-2",
      level: 1,
      type: "qcm",
      question: "Un angle mesure 47°. Comment est-il ?",
      choices: ["Aigu", "Droit", "Obtus", "Plat"],
      answer: 0,
      explanation:
        "47° est inférieur à 90°, donc l'angle est aigu. Retiens les seuils : aigu en dessous de 90°, droit à 90° pile, obtus entre 90° et 180°, plat à 180° pile.",
      hint: "Compare 47° au repère central : 90°.",
    },
    {
      id: "ang-3",
      level: 1,
      type: "truefalse",
      question: "Un angle obtus mesure entre 90° et 180°.",
      answer: true,
      explanation:
        "Vrai ! Un angle obtus est plus ouvert qu'un angle droit (90°) mais moins qu'un angle plat (180°). Par exemple, 100°, 135° ou 179° sont des mesures d'angles obtus.",
    },
    {
      id: "ang-4",
      level: 1,
      type: "input",
      question: "Combien mesure un angle plat (en degrés) ?",
      answer: "180",
      explanation:
        "Un angle plat mesure 180°. Ses deux côtés sont dans le prolongement l'un de l'autre : ils forment une droite. C'est aussi la moitié d'un tour complet (360° ÷ 2 = 180°).",
      hint: "Ses deux côtés forment une ligne droite.",
    },
    {
      id: "ang-5",
      level: 2,
      type: "qcm",
      question:
        "Un angle a pour sommet le point O et ses côtés sont les demi-droites [OA) et [OB). Quel est son nom correct ?",
      choices: ["L'angle AOB", "L'angle OAB", "L'angle ABO", "L'angle BAO"],
      answer: 0,
      explanation:
        "La lettre du sommet doit toujours être au milieu du nom. Le sommet est O, donc on écrit « l'angle AOB » (ou « l'angle BOA », qui désigne le même angle). « L'angle OAB » nommerait un angle de sommet A : ce n'est pas le même !",
      hint: "Quelle lettre doit se trouver au milieu du nom ?",
    },
    {
      id: "ang-6",
      level: 2,
      type: "qcm",
      question: "Un angle mesure 134°. Comment est-il ?",
      choices: ["Aigu", "Droit", "Obtus", "Plat"],
      answer: 2,
      explanation:
        "134° est compris entre 90° et 180° : l'angle est obtus. Il est plus ouvert qu'un angle droit, mais ses côtés ne sont pas encore alignés comme dans un angle plat.",
      hint: "Situe 134° par rapport à 90° et à 180°.",
    },
    {
      id: "ang-7",
      level: 2,
      type: "truefalse",
      question:
        "Deux angles qui ont la même mesure sont superposables, même si leurs côtés sont dessinés avec des longueurs différentes.",
      answer: true,
      explanation:
        "Vrai ! La mesure d'un angle, c'est son ouverture, pas la longueur de ses côtés. Deux angles de 40° se superposent parfaitement, que leurs côtés fassent 2 cm ou 15 cm. C'est le piège visuel classique : un angle « dessiné en grand » n'est pas un angle plus grand.",
      hint: "Qu'est-ce qui compte vraiment dans un angle : l'ouverture ou les côtés ?",
    },
    {
      id: "ang-8",
      level: 2,
      type: "input",
      question:
        "En mesurant un angle au rapporteur, tu lis 60 sur une graduation et 120 sur l'autre. L'angle est visiblement aigu. Quelle est sa mesure (en degrés) ?",
      answer: "60",
      explanation:
        "Le rapporteur porte deux graduations qui vont en sens inverse, d'où les deux lectures possibles : 60 et 120. Un angle aigu mesure moins de 90°, donc 120° est impossible : la bonne mesure est 60°. Réflexe à automatiser : décider « aigu ou obtus ? » AVANT de lire le nombre.",
      hint: "Un angle aigu peut-il mesurer 120° ?",
    },
    {
      id: "ang-9",
      level: 3,
      type: "qcm",
      question:
        "Il est exactement 3 h : la grande aiguille d'une horloge pointe le 12 et la petite pointe le 3. Quel angle forment les deux aiguilles ?",
      choices: ["Un angle aigu", "Un angle droit", "Un angle obtus", "Un angle plat"],
      answer: 1,
      explanation:
        "De 12 à 3, la petite aiguille a parcouru un quart du cadran, c'est-à-dire un quart de tour : 360° ÷ 4 = 90°. Les aiguilles forment donc un angle droit. Autre repère : à 6 h, elles formeraient un angle plat (180°).",
      hint: "De 12 à 3, quelle fraction du cadran l'aiguille a-t-elle parcourue ?",
    },
    {
      id: "ang-10",
      level: 3,
      type: "input",
      question:
        "L'angle AOB est un angle plat. La demi-droite [OC) le partage en deux angles : l'angle AOC mesure 65°. Combien mesure l'angle COB (en degrés) ?",
      answer: "115",
      explanation:
        "Un angle plat mesure 180°. La demi-droite [OC) le découpe en deux angles qui, mis bout à bout, reforment l'angle plat : angle AOC + angle COB = 180°. Donc l'angle COB mesure 180 − 65 = 115°. Vérification : 115° est bien obtus, ce qui est cohérent puisque son voisin de 65° est aigu.",
      hint: "Les deux angles mis ensemble forment l'angle plat : leur somme vaut 180°.",
    },
    {
      id: "ang-11",
      level: 3,
      type: "truefalse",
      question: "Si on prolonge les côtés d'un angle à la règle, sa mesure augmente.",
      answer: false,
      explanation:
        "Faux ! Prolonger les côtés ne change rien à l'ouverture entre eux : la mesure de l'angle reste exactement la même. C'est même une technique du cours : quand un côté est trop court pour atteindre la graduation du rapporteur, on le prolonge sans crainte. Seule l'ouverture fait la mesure, jamais la longueur des côtés.",
      hint: "Repense aux ciseaux : allonger les lames change-t-il leur écartement ?",
    },
    {
      id: "ang-12",
      level: 3,
      type: "input",
      question:
        "Le cadran d'une horloge est partagé en 12 heures et un tour complet mesure 360°. Il est exactement 5 h : la grande aiguille pointe le 12 et la petite pointe le 5. Quel angle (en degrés) forment les deux aiguilles ?",
      answer: "150",
      explanation:
        "Entre deux nombres voisins du cadran, l'angle vaut 360° ÷ 12 = 30°. De 12 à 5, il y a 5 intervalles, donc l'angle mesure 5 × 30 = 150°. C'est un angle obtus, ce qui colle bien avec l'image des aiguilles largement écartées à 5 h.",
      hint: "Commence par calculer l'angle entre deux heures voisines : 360° ÷ 12.",
    },
  ],
  videos: [
    { title: "Mesurer un angle (1) - Sixième", youtubeId: "rSeXbu7eEII", channel: "Yvan Monka" },
    { title: "Construire un angle - Sixième", youtubeId: "BHm8ixTi5cc", channel: "Yvan Monka" },
  ],
};
