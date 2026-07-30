import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "triangles-quadrilateres",
  num: 10,
  title: "Triangles et quadrilatères",
  domain: "geometrie",
  icon: "Triangle",
  teaser: "Reconnaître, décrire et construire les figures stars de la géométrie.",
  objectives: [
    "Je sais reconnaître un triangle équilatéral, isocèle ou rectangle et citer leurs propriétés",
    "Je sais construire un triangle au compas quand on me donne ses trois côtés",
    "Je connais les propriétés du carré, du rectangle et du losange",
    "Je sais lire et utiliser les codages d'une figure (longueurs égales, angles droits)",
    "Je sais que la somme des angles d'un triangle vaut 180° et je m'en sers pour calculer un angle",
  ],
  lesson: [
    {
      title: "Le vocabulaire du triangle",
      paragraphs: [
        "Un triangle a trois sommets et trois côtés. Le triangle de sommets A, B et C se nomme le triangle ABC ; ses côtés sont les segments [AB], [BC] et [CA].",
        "Sur une figure codée, des petits traits identiques sur plusieurs côtés signifient que ces côtés ont la même longueur, et un petit carré signale un angle droit. Ces codages sont des informations sûres : elles comptent plus que ce que tes yeux croient voir.",
      ],
      example: [
        "Dans le triangle ABC, le côté [BC] est le côté « opposé » au sommet A : c'est le seul qui ne touche pas A.",
      ],
      tip: "Une figure de géométrie se lit comme un texte : les codages sont les mots, l'impression visuelle n'est qu'une illustration.",
    },
    {
      title: "Les triangles particuliers",
      paragraphs: [
        "Le triangle équilatéral a ses trois côtés de même longueur, et ses trois angles sont aussi égaux : il est parfaitement régulier.",
        "Le triangle isocèle a deux côtés de même longueur. Le sommet commun à ces deux côtés égaux s'appelle le sommet principal : on dit par exemple « ABC est isocèle en A » quand AB = AC.",
        "Le triangle rectangle a un angle droit. En découverte : son côté le plus long, celui qui fait face à l'angle droit, s'appelle l'hypoténuse. Tu le retrouveras souvent au collège !",
      ],
      example: [
        "ABC est isocèle en A : AB = AC, et le sommet principal est A.",
        "DEF est rectangle en E : l'angle DEF est droit, et le côté [DF] est l'hypoténuse.",
      ],
      tip: "« Isocèle en A » : la lettre qui suit « en » est toujours le sommet principal, celui d'où partent les deux côtés égaux.",
      figure: "triangles-types",
    },
    {
      title: "Construire un triangle au compas",
      paragraphs: [
        "Pour construire un triangle dont on connaît les trois côtés, par exemple 6 cm, 5 cm et 4 cm : trace d'abord un côté à la règle, disons [BC] avec BC = 6 cm. Puis trace un arc de cercle de centre B et de rayon 5 cm, et un arc de cercle de centre C et de rayon 4 cm. Le point A est à l'intersection des deux arcs : il est à la fois à 5 cm de B et à 4 cm de C.",
        "Attention, tous les trios de longueurs ne donnent pas un triangle ! Essaie avec 3 cm, 4 cm et 10 cm : les deux arcs ne se croisent jamais, car 3 + 4 = 7, et 7 cm ne suffisent pas pour « enjamber » un côté de 10 cm. C'est l'inégalité triangulaire, que tu découvres ici : le plus grand côté doit être plus court que la somme des deux autres.",
      ],
      example: [
        "6 cm, 5 cm, 4 cm : possible, car 5 + 4 = 9 et 9 > 6.",
        "3 cm, 4 cm, 10 cm : impossible, car 3 + 4 = 7 et 7 < 10.",
      ],
      tip: "Avant de sortir le compas, fais le test : additionne les deux côtés les plus courts et compare au plus long. Si la somme ne dépasse pas le plus long, inutile de construire.",
    },
    {
      title: "Les quadrilatères particuliers",
      paragraphs: [
        "Un quadrilatère est une figure à quatre côtés et quatre sommets. Trois quadrilatères sont à connaître parfaitement.",
        "Le rectangle a quatre angles droits, et ses côtés opposés ont la même longueur. Le losange a ses quatre côtés de même longueur. Le carré cumule les deux : quatre angles droits ET quatre côtés égaux. C'est pour cela qu'un carré est à la fois un rectangle particulier et un losange particulier.",
        "En découverte, les diagonales (les segments qui relient les sommets opposés) ont aussi leurs secrets : celles du rectangle ont la même longueur, celles du losange sont perpendiculaires, et celles du carré sont les deux à la fois.",
      ],
      example: [
        "Carré : 4 côtés égaux + 4 angles droits.",
        "Rectangle : 4 angles droits, côtés opposés égaux deux à deux.",
        "Losange : 4 côtés égaux, mais pas forcément d'angle droit.",
      ],
      tip: "Le carré est le « champion toutes catégories » : il possède toutes les propriétés du rectangle et toutes celles du losange en même temps.",
      figure: "quadrilateres",
    },
    {
      title: "Décrire une figure avec ses codages",
      paragraphs: [
        "Pour identifier une figure, appuie-toi uniquement sur les informations codées ou données dans l'énoncé : traits identiques pour les longueurs égales, petits carrés pour les angles droits, mesures écrites.",
        "Un quadrilatère qui « a l'air d'un carré » mais dont la figure ne code que quatre côtés égaux est… un losange, tant qu'aucun angle droit n'est indiqué. En géométrie, on ne devine pas, on prouve avec les codages.",
      ],
      example: [
        "Quatre côtés codés égaux, aucun angle droit codé → on peut seulement affirmer : losange.",
        "Quatre côtés codés égaux + un angle droit codé → c'est un carré.",
      ],
      tip: "Demande-toi toujours : « qu'est-ce que je SAIS (codages, énoncé) ? » et non « qu'est-ce que je VOIS ? ».",
    },
    {
      title: "La somme des angles d'un triangle",
      paragraphs: [
        "C'est une propriété magique, vraie pour TOUS les triangles, petits ou grands : la somme des mesures des trois angles d'un triangle est toujours égale à 180°.",
        "Cette propriété permet de calculer un angle manquant sans rapporteur : on additionne les deux angles connus, puis on soustrait le résultat de 180°.",
        "Elle se combine avec les triangles particuliers : dans un triangle équilatéral, les trois angles sont égaux, donc chacun mesure 180° ÷ 3 = 60°. Dans un triangle rectangle, l'angle droit vaut déjà 90°, donc les deux autres angles se partagent les 90° restants.",
      ],
      example: [
        "Dans le triangle ABC, l'angle en A mesure 50° et l'angle en B mesure 70°.",
        "50° + 70° = 120°, donc l'angle en C mesure 180° − 120° = 60°.",
      ],
      tip: "Vérifie-le toi-même : découpe un triangle en papier, arrache ses trois coins et pose-les côte à côte… ils forment un angle plat, c'est-à-dire 180° !",
    },
  ],
  exercises: [
    {
      id: "tri-1",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle un triangle dont les trois côtés ont la même longueur ?",
      choices: ["Isocèle", "Rectangle", "Équilatéral", "Quelconque"],
      answer: 2,
      explanation:
        "Trois côtés égaux → triangle équilatéral (« équi » = égal, « latéral » = côté). Le triangle isocèle n'a que deux côtés égaux, et le triangle rectangle possède un angle droit.",
      hint: "« Équi » signifie « égal » et « latéral » vient de « côté ».",
    },
    {
      id: "tri-2",
      level: 1,
      type: "qcm",
      question:
        "Quel quadrilatère a quatre côtés de même longueur ET quatre angles droits ?",
      choices: ["Le rectangle", "Le losange", "Le carré", "Le triangle"],
      answer: 2,
      explanation:
        "C'est le carré, qui cumule les propriétés du rectangle (4 angles droits) et celles du losange (4 côtés égaux). Le rectangle seul n'a pas forcément 4 côtés égaux, et le losange seul n'a pas forcément d'angle droit. Quant au triangle, il n'a que trois côtés : ce n'est pas un quadrilatère !",
    },
    {
      id: "tri-3",
      level: 1,
      type: "truefalse",
      question: "Un triangle isocèle a deux côtés de même longueur.",
      answer: true,
      explanation:
        "Vrai ! C'est la définition du triangle isocèle. Le sommet commun à ces deux côtés égaux s'appelle le sommet principal. Si les TROIS côtés sont égaux, on parle alors de triangle équilatéral.",
    },
    {
      id: "tri-4",
      level: 1,
      type: "input",
      question:
        "Un triangle équilatéral a un côté qui mesure 5 cm. Combien mesure chacun des deux autres côtés (en cm) ?",
      answer: "5",
      explanation:
        "Dans un triangle équilatéral, les trois côtés ont la même longueur. Si l'un mesure 5 cm, les deux autres mesurent aussi 5 cm chacun.",
      hint: "Équilatéral = tous les côtés égaux.",
    },
    {
      id: "tri-5",
      level: 2,
      type: "qcm",
      question: "Dans un triangle rectangle, qu'appelle-t-on l'hypoténuse ?",
      choices: [
        "Le côté le plus court",
        "Le côté opposé à l'angle droit",
        "L'un des deux côtés de l'angle droit",
        "La hauteur du triangle",
      ],
      answer: 1,
      explanation:
        "L'hypoténuse est le côté qui fait face à l'angle droit : il ne touche pas le sommet de l'angle droit. C'est aussi le plus long des trois côtés du triangle rectangle, jamais le plus court.",
      hint: "C'est le seul côté qui ne touche pas le sommet de l'angle droit.",
    },
    {
      id: "tri-6",
      level: 2,
      type: "truefalse",
      question: "Un losange a toujours quatre angles droits.",
      answer: false,
      explanation:
        "Faux ! La définition du losange ne parle que des côtés : quatre côtés de même longueur. Ses angles peuvent être quelconques (deux aigus et deux obtus, par exemple). Un losange qui a en plus quatre angles droits est un carré.",
      hint: "Quelle est la définition exacte du losange : côtés ou angles ?",
    },
    {
      id: "tri-7",
      level: 2,
      type: "input",
      question:
        "Le triangle ABC est isocèle en A et AB = 7 cm. Combien mesure AC (en cm) ?",
      answer: "7",
      explanation:
        "« Isocèle en A » signifie que A est le sommet principal : les deux côtés qui partent de A sont égaux, donc AB = AC = 7 cm. Attention : l'énoncé ne dit rien sur BC, le troisième côté, qui peut avoir une longueur différente.",
      hint: "« Isocèle en A » : les deux côtés égaux partent du sommet A.",
    },
    {
      id: "tri-8",
      level: 2,
      type: "qcm",
      question:
        "Peut-on construire un triangle dont les côtés mesurent 3 cm, 4 cm et 10 cm ?",
      choices: [
        "Oui, avec une règle et un compas",
        "Non, car 3 + 4 est plus petit que 10",
        "Non, car 10 est un nombre trop grand",
        "Oui, mais seulement s'il est rectangle",
      ],
      answer: 1,
      explanation:
        "Pour fermer le triangle, les deux petits côtés mis bout à bout doivent dépasser le grand côté. Ici 3 + 4 = 7, et 7 < 10 : les deux arcs de compas ne se croisent jamais, le triangle est impossible. C'est l'inégalité triangulaire. Le nombre 10 n'est pas « trop grand » en soi : 10, 8 et 5 donneraient un triangle tout à fait constructible.",
      hint: "Additionne les deux côtés les plus courts et compare au plus long.",
    },
    {
      id: "tri-9",
      level: 3,
      type: "truefalse",
      question: "Un carré est aussi un rectangle.",
      answer: true,
      explanation:
        "Vrai, et c'est le piège de la question ! Un rectangle est un quadrilatère qui a quatre angles droits. Le carré a bien quatre angles droits : il vérifie donc la définition du rectangle. C'est un rectangle particulier, qui a en plus ses quatre côtés égaux (ce qui en fait aussi un losange particulier). En revanche, l'inverse est faux : un rectangle n'est pas toujours un carré.",
      hint: "Relis la définition du rectangle : le carré la vérifie-t-il ?",
    },
    {
      id: "tri-10",
      level: 3,
      type: "input",
      question:
        "Un terrain rectangulaire mesure 30 m de long et 20 m de large. Un jardinier veut le clôturer entièrement, sans laisser d'ouverture. Quelle longueur de clôture doit-il prévoir (en m) ?",
      answer: "100",
      explanation:
        "Un rectangle a ses côtés opposés égaux : ce terrain a donc deux côtés de 30 m et deux côtés de 20 m. Longueur de clôture : 30 + 20 + 30 + 20 = 100 m (c'est le périmètre du rectangle). Piège classique : n'additionner que 30 + 20 = 50, en oubliant que le tour complet compte chaque dimension deux fois.",
      hint: "Le tour du terrain compte deux longueurs et deux largeurs.",
    },
    {
      id: "tri-11",
      level: 3,
      type: "qcm",
      question:
        "Dans un rectangle qui n'est pas un carré, que peut-on dire de ses diagonales ?",
      choices: [
        "Elles ont la même longueur",
        "Elles sont perpendiculaires",
        "Elles ont la même longueur et sont perpendiculaires",
        "Elles n'ont aucune propriété particulière",
      ],
      answer: 0,
      explanation:
        "Les diagonales d'un rectangle ont toujours la même longueur, mais elles ne sont perpendiculaires que dans le cas particulier du carré. Comme l'énoncé précise « pas un carré », seule la première réponse est correcte. À retenir : rectangle → diagonales égales ; losange → diagonales perpendiculaires ; carré → les deux à la fois.",
      hint: "La perpendicularité des diagonales, c'est la spécialité du losange.",
    },
    {
      id: "tri-12",
      level: 3,
      type: "input",
      question:
        "Un triangle isocèle a un périmètre de 20 cm. Le côté qui n'est pas l'un des deux côtés égaux mesure 6 cm. Combien mesure chacun des deux côtés égaux (en cm) ?",
      answer: "7",
      explanation:
        "Le périmètre est la somme des trois côtés : 20 cm en tout. On enlève le côté de 6 cm : il reste 20 − 6 = 14 cm pour les deux côtés égaux. Chacun mesure donc 14 ÷ 2 = 7 cm. Vérification : 7 + 7 + 6 = 20 cm, et l'inégalité triangulaire est respectée (7 + 6 > 7).",
      hint: "Retire d'abord le côté de 6 cm du périmètre, puis partage le reste en deux.",
    },
    {
      id: "tri-13",
      level: 1,
      type: "qcm",
      question: "Quelle est la somme des mesures des trois angles d'un triangle ?",
      choices: ["90°", "180°", "360°", "Ça dépend du triangle"],
      answer: 1,
      explanation:
        "Dans n'importe quel triangle, la somme des trois angles vaut toujours 180°. C'est justement parce que ça ne dépend PAS du triangle que cette propriété est si utile ! (360°, c'est la somme des angles d'un quadrilatère.)",
    },
    {
      id: "tri-14",
      level: 2,
      type: "input",
      question:
        "Dans un triangle, deux angles mesurent 35° et 85°. Combien mesure le troisième angle ? (réponse en degrés, nombre seul)",
      answer: "60",
      explanation:
        "La somme des trois angles vaut 180°. Les deux angles connus totalisent 35° + 85° = 120°. Le troisième mesure donc 180° − 120° = 60°.",
      hint: "Additionne les deux angles connus, puis soustrais de 180°.",
    },
    {
      id: "tri-15",
      level: 3,
      type: "input",
      question:
        "Un triangle est rectangle et isocèle. Son angle droit mesure 90°. Combien mesure chacun des deux autres angles ? (réponse en degrés, nombre seul)",
      answer: "45",
      explanation:
        "La somme des angles vaut 180°, et l'angle droit en prend déjà 90°. Il reste 180° − 90° = 90° à partager entre les deux autres angles. Comme le triangle est isocèle, ces deux angles sont égaux : chacun mesure 90° ÷ 2 = 45°.",
      hint: "Combien reste-t-il pour les deux angles après l'angle droit ? Et ils sont égaux…",
    },
  ],
};
