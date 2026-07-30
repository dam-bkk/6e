import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-parallelogrammes",
  subject: "maths",
  grade: "5e",
  num: 12,
  title: "Les parallélogrammes",
  domain: "geometrie",
  icon: "Square",
  teaser: "Le quadrilatère star de la 5e, et sa famille : rectangle, losange, carré.",
  objectives: [
    "Je connais la définition d'un parallélogramme",
    "Je connais ses propriétés : côtés opposés égaux, diagonales, centre de symétrie",
    "Je sais démontrer qu'un quadrilatère est un parallélogramme",
    "Je sais reconnaître un rectangle, un losange ou un carré parmi les parallélogrammes",
  ],
  lesson: [
    {
      title: "Définition",
      paragraphs: [
        "Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles, deux à deux.",
        "Dans le parallélogramme ABCD, le côté (AB) est parallèle au côté (CD), et le côté (BC) est parallèle au côté (AD). Les sommets se lisent dans l'ordre, en tournant autour de la figure.",
      ],
      example: [
        "ABCD est un parallélogramme signifie : (AB) parallèle à (CD) ET (AD) parallèle à (BC).",
        "Attention à l'ordre des lettres : ABCD et ABDC ne désignent pas le même quadrilatère !",
      ],
      tip: "Le nom dit tout : parallélo-gramme = des côtés parallèles. C'est la définition, tout le reste s'en déduit.",
    },
    {
      title: "Les propriétés du parallélogramme",
      figure: "m5-parallelogramme",
      paragraphs: [
        "Si ABCD est un parallélogramme, alors ses côtés opposés sont égaux deux à deux : AB = CD et AD = BC.",
        "Ses diagonales [AC] et [BD] se coupent en leur milieu. Ce point d'intersection O est aussi le centre de symétrie du parallélogramme : la figure se superpose à elle-même après un demi-tour autour de O.",
        "Ses angles opposés sont égaux, et deux angles consécutifs sont supplémentaires (leur somme vaut 180°).",
      ],
      example: [
        "ABCD est un parallélogramme de centre O, avec AB = 6 cm et AC = 9 cm.",
        "Alors CD = AB = 6 cm, et AO = AC ÷ 2 = 4,5 cm car O est le milieu de [AC].",
      ],
      tip: "« Les diagonales se coupent en leur milieu » : c'est LA propriété du parallélogramme à connaître par cœur, elle sert dans presque tous les exercices.",
    },
    {
      title: "Démontrer qu'un quadrilatère est un parallélogramme",
      paragraphs: [
        "Pour prouver qu'un quadrilatère est un parallélogramme, on peut utiliser la définition (côtés opposés parallèles) ou une propriété réciproque.",
        "La plus utile : si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce quadrilatère est un parallélogramme.",
        "Attention : avoir seulement des côtés opposés égaux deux à deux suffit aussi, mais avoir des diagonales perpendiculaires ne suffit pas du tout !",
      ],
      example: [
        "Les segments [AC] et [BD] ont le même milieu O.",
        "Les diagonales du quadrilatère ABCD se coupent en leur milieu, donc ABCD est un parallélogramme.",
      ],
      tip: "Pour construire un parallélogramme rapidement : trace deux segments qui ont le même milieu, puis relie leurs extrémités.",
    },
    {
      title: "Rectangle, losange, carré",
      paragraphs: [
        "Certains parallélogrammes ont des propriétés en plus. Le rectangle est un parallélogramme qui possède un angle droit (et donc quatre). Le losange est un parallélogramme dont les quatre côtés sont égaux.",
        "Le carré cumule les deux : c'est à la fois un rectangle et un losange. Il a quatre angles droits et quatre côtés égaux.",
        "Tous les trois héritent des propriétés du parallélogramme : côtés opposés parallèles, diagonales qui se coupent en leur milieu, centre de symétrie.",
      ],
      example: [
        "Un carré est un parallélogramme, un rectangle ET un losange à la fois.",
        "Un losange n'est pas forcément un carré : ses angles peuvent ne pas être droits.",
      ],
      tip: "Pense à une famille : le parallélogramme est le parent, rectangle et losange sont ses enfants, et le carré est l'enfant des deux.",
    },
    {
      title: "Reconnaître grâce aux diagonales",
      paragraphs: [
        "Les diagonales permettent de reconnaître chaque membre de la famille. Un parallélogramme dont les diagonales ont la même longueur est un rectangle.",
        "Un parallélogramme dont les diagonales sont perpendiculaires est un losange. Un parallélogramme dont les diagonales sont à la fois de même longueur et perpendiculaires est un carré.",
      ],
      example: [
        "ABCD est un parallélogramme avec AC = BD : c'est un rectangle.",
        "EFGH est un parallélogramme avec (EG) perpendiculaire à (FH) : c'est un losange.",
      ],
      tip: "Ces tests sur les diagonales ne marchent que si on sait DÉJÀ que la figure est un parallélogramme. Un quadrilatère quelconque à diagonales perpendiculaires n'est pas forcément un losange (pense au cerf-volant).",
    },
  ],
  exercises: [
    {
      id: "m5par-1",
      level: 1,
      type: "qcm",
      question: "Qu'est-ce qu'un parallélogramme ?",
      choices: [
        "Un quadrilatère dont les côtés opposés sont parallèles",
        "Un quadrilatère qui a quatre côtés égaux",
        "Un quadrilatère qui a un angle droit",
        "Un quadrilatère dont les diagonales sont perpendiculaires",
      ],
      answer: 0,
      explanation:
        "Par définition, un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux. Quatre côtés égaux, c'est le losange ; un angle droit dans un parallélogramme, c'est le rectangle.",
      hint: "Le nom de la figure contient la réponse.",
    },
    {
      id: "m5par-2",
      level: 1,
      type: "truefalse",
      question: "Les diagonales d'un parallélogramme se coupent en leur milieu.",
      answer: true,
      explanation:
        "Vrai ! C'est une propriété fondamentale du parallélogramme. Leur point d'intersection est aussi le centre de symétrie de la figure. Attention : elles se coupent en leur milieu, mais elles n'ont pas forcément la même longueur (ça, c'est le rectangle).",
    },
    {
      id: "m5par-3",
      level: 1,
      type: "input",
      question: "ABCD est un parallélogramme et AB = 6 cm. Combien mesure CD, en cm ?",
      answer: "6",
      explanation:
        "Dans un parallélogramme, les côtés opposés sont égaux : CD = AB = 6 cm. Dans ABCD, le côté opposé à [AB] est bien [CD] (et le côté opposé à [BC] est [AD]).",
      hint: "Que sait-on des côtés opposés d'un parallélogramme ?",
    },
    {
      id: "m5par-4",
      level: 1,
      type: "qcm",
      question: "Où se trouve le centre de symétrie d'un parallélogramme ?",
      choices: [
        "Au point d'intersection de ses diagonales",
        "Au milieu de son plus grand côté",
        "Sur l'un de ses sommets",
        "Un parallélogramme n'a pas de centre de symétrie",
      ],
      answer: 0,
      explanation:
        "Le centre de symétrie d'un parallélogramme est le point d'intersection de ses diagonales, qui est aussi leur milieu commun. Après un demi-tour autour de ce point, la figure se superpose exactement à elle-même.",
      hint: "C'est le même point que le milieu commun des deux diagonales.",
    },
    {
      id: "m5par-5",
      level: 2,
      type: "input",
      question:
        "ABCD est un parallélogramme dont les diagonales se coupent en O. On sait que AC = 9 cm. Combien mesure AO, en cm ?",
      answer: "4,5",
      explanation:
        "Les diagonales d'un parallélogramme se coupent en leur milieu : O est donc le milieu de [AC]. Ainsi AO = 9 ÷ 2 = 4,5 cm. Piège classique : confondre la diagonale entière et sa moitié.",
      hint: "O est le milieu de la diagonale [AC].",
    },
    {
      id: "m5par-6",
      level: 2,
      type: "qcm",
      question:
        "Parmi ces propriétés, laquelle permet de reconnaître un LOSANGE parmi les parallélogrammes ?",
      choices: [
        "Ses diagonales sont perpendiculaires",
        "Ses diagonales ont la même longueur",
        "Il possède un angle droit",
        "Ses côtés opposés sont égaux",
      ],
      answer: 0,
      explanation:
        "Un parallélogramme dont les diagonales sont perpendiculaires est un losange. Des diagonales de même longueur ou un angle droit caractérisent le rectangle. Et les côtés opposés égaux, c'est vrai pour TOUS les parallélogrammes : cela ne distingue rien.",
      hint: "Élimine d'abord ce qui est vrai pour n'importe quel parallélogramme.",
    },
    {
      id: "m5par-7",
      level: 2,
      type: "truefalse",
      question: "Un carré est à la fois un rectangle et un losange.",
      answer: true,
      explanation:
        "Vrai ! Le carré a quatre angles droits (c'est donc un rectangle) et quatre côtés égaux (c'est donc un losange). Il cumule les deux familles, et hérite au passage de toutes les propriétés du parallélogramme.",
      hint: "Vérifie les deux définitions l'une après l'autre sur un carré.",
    },
    {
      id: "m5par-8",
      level: 2,
      type: "input",
      question:
        "ABCD est un parallélogramme et l'angle DAB mesure 70°. Combien mesure l'angle opposé BCD, en degrés ?",
      answer: "70",
      explanation:
        "Dans un parallélogramme, les angles opposés sont égaux : l'angle BCD mesure donc 70° comme l'angle DAB. Ne confonds pas avec deux angles consécutifs, qui sont eux supplémentaires (somme égale à 180°).",
      hint: "Angles opposés : égaux. Angles consécutifs : supplémentaires.",
    },
    {
      id: "m5par-9",
      level: 3,
      type: "qcm",
      question:
        "Quelle information suffit, à elle seule, pour affirmer qu'un quadrilatère est un parallélogramme ?",
      choices: [
        "Ses diagonales se coupent en leur milieu",
        "Ses diagonales sont perpendiculaires",
        "Il a deux côtés parallèles",
        "Il a deux côtés de même longueur",
      ],
      answer: 0,
      explanation:
        "Si les diagonales d'un quadrilatère se coupent en leur milieu, c'est un parallélogramme : c'est la réciproque du cours. Des diagonales perpendiculaires ne suffisent pas (cerf-volant), deux côtés parallèles seulement non plus (trapèze).",
      hint: "Pense aux contre-exemples : cerf-volant, trapèze…",
    },
    {
      id: "m5par-10",
      level: 3,
      type: "input",
      question:
        "Un parallélogramme a deux côtés consécutifs de 7 cm et 4,5 cm. Quel est son périmètre, en cm ?",
      answer: "23",
      explanation:
        "Les côtés opposés sont égaux : le parallélogramme a deux côtés de 7 cm et deux côtés de 4,5 cm. Périmètre : 2 × (7 + 4,5) = 2 × 11,5 = 23 cm. Piège classique : additionner seulement 7 + 4,5 en oubliant de doubler.",
      hint: "Chaque longueur apparaît deux fois dans le tour complet.",
    },
    {
      id: "m5par-11",
      level: 3,
      type: "truefalse",
      question: "Un quadrilatère qui a ses quatre côtés égaux est toujours un carré.",
      answer: false,
      explanation:
        "Faux ! Quatre côtés égaux définissent un losange, pas forcément un carré. Pour un carré, il faut EN PLUS des angles droits. Un losange « penché » a bien quatre côtés égaux sans être un carré.",
      hint: "Imagine un losange écrasé, sans angle droit.",
    },
    {
      id: "m5par-12",
      level: 3,
      type: "input",
      question:
        "Les quatre barres d'un portail articulé forment un parallélogramme ABCD. Quand on le replie, l'angle DAB mesure 65°. Combien mesure alors l'angle consécutif ABC, en degrés ?",
      answer: "115",
      explanation:
        "Dans un parallélogramme, deux angles consécutifs sont supplémentaires : leur somme vaut 180°. Donc l'angle ABC mesure 180 − 65 = 115°. Vérification : les quatre angles valent 65 + 115 + 65 + 115 = 360°, la somme des angles d'un quadrilatère.",
      hint: "Deux angles consécutifs d'un parallélogramme : quelle est leur somme ?",
    },
  ],
  videos: [
    { title: "DÉMONTRER qu'un quadrilatère est un PARALLÉLOGRAMME - Cinquième", youtubeId: "sHMTwpf-__w", channel: "Yvan Monka" },
  ],
};
