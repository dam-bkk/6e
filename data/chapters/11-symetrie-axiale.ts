import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "symetrie-axiale",
  num: 11,
  title: "La symétrie axiale",
  domain: "geometrie",
  icon: "FlipHorizontal2",
  teaser: "Plier, refléter, construire : la géométrie du miroir.",
  objectives: [
    "Je sais reconnaître deux figures symétriques et trouver les axes de symétrie d'une figure",
    "Je sais construire le symétrique d'un point, d'un segment, d'une figure par rapport à une droite",
    "Je sais que la symétrie conserve les longueurs, les angles et les aires",
    "Je connais la médiatrice d'un segment et sa propriété d'équidistance",
  ],
  lesson: [
    {
      title: "Des figures qui se superposent par pliage",
      paragraphs: [
        "Deux figures sont symétriques par rapport à une droite (d) si, en pliant la feuille le long de (d), elles se superposent exactement. La droite (d) s'appelle l'axe de symétrie.",
        "C'est l'effet miroir : chaque figure est le reflet de l'autre, comme une tache d'encre qui s'imprime des deux côtés du pli. Les deux figures sont identiques, mais « retournées » l'une par rapport à l'autre.",
      ],
      example: [
        "Un papillon aux ailes ouvertes : en pliant le long de son corps, l'aile gauche se superpose à l'aile droite.",
      ],
      tip: "Le test du pliage est infaillible : en cas de doute, imagine (ou fais !) le pli le long de l'axe et demande-toi si tout se superpose.",
    },
    {
      title: "L'axe de symétrie d'une figure",
      paragraphs: [
        "Une figure peut avoir son propre axe de symétrie : une droite qui la partage en deux moitiés superposables par pliage. Certaines figures en ont plusieurs, d'autres aucun.",
        "À connaître : le carré a 4 axes de symétrie (ses 2 diagonales et les 2 droites qui joignent les milieux des côtés opposés) ; le rectangle non carré en a seulement 2 (attention, ses diagonales n'en sont PAS) ; le cercle en a une infinité (toute droite qui passe par son centre).",
      ],
      example: [
        "Carré : 4 axes. Rectangle non carré : 2 axes. Cercle : une infinité.",
        "La lettre A a un axe de symétrie vertical ; la lettre B a un axe horizontal ; la lettre F n'en a aucun.",
      ],
      tip: "Piège favori des contrôles : plie mentalement un rectangle le long d'une diagonale… les deux triangles ne se superposent pas ! Les diagonales du rectangle ne sont pas des axes de symétrie.",
      figure: "symetrie-axiale",
    },
    {
      title: "Construire le symétrique d'un point, d'une figure",
      paragraphs: [
        "Le symétrique d'un point A par rapport à une droite (d) est le point A' tel que (d) est perpendiculaire au segment [AA'] et passe par son milieu. Autrement dit : A' est de l'autre côté de (d), sur la perpendiculaire à (d) passant par A, à la même distance de (d) que A.",
        "Cas particulier important : un point situé sur l'axe est son propre symétrique, il ne bouge pas.",
        "Pour construire le symétrique d'un segment, il suffit de construire les symétriques de ses deux extrémités et de les relier. Pour une figure entière, on traite chaque sommet l'un après l'autre. Sur quadrillage, c'est facile : on compte les carreaux jusqu'à l'axe, puis on reporte le même nombre de carreaux de l'autre côté, perpendiculairement à l'axe.",
      ],
      example: [
        "A est à 3 carreaux à gauche de l'axe vertical (d).",
        "Son symétrique A' est à 3 carreaux à droite de (d), sur la même ligne.",
      ],
      tip: "Trois mots d'ordre pour placer un symétrique : de l'autre côté, à la même distance, perpendiculairement à l'axe.",
    },
    {
      title: "Ce que la symétrie conserve",
      paragraphs: [
        "La symétrie axiale ne déforme rien : c'est un reflet exact. Elle conserve les longueurs (le symétrique d'un segment de 4 cm mesure 4 cm), les angles (le symétrique d'un angle de 60° mesure 60°) et les aires (le symétrique d'une figure de 12 cm² a une aire de 12 cm²).",
        "Conséquence : le symétrique d'un cercle est un cercle de même rayon, le symétrique d'un triangle équilatéral est un triangle équilatéral identique. Seule l'orientation change, comme entre ta main gauche et ta main droite.",
      ],
      example: [
        "Le symétrique du segment [AB] est le segment [A'B'], et A'B' = AB.",
        "Le symétrique d'un angle droit est un angle droit.",
      ],
      tip: "Retiens la liste magique : la symétrie conserve les longueurs, les angles, les aires. Si ton symétrique paraît déformé, c'est qu'il y a une erreur de construction.",
    },
    {
      title: "La médiatrice d'un segment",
      paragraphs: [
        "La médiatrice d'un segment est la droite perpendiculaire à ce segment qui passe par son milieu. C'est aussi l'axe de symétrie du segment : le pli qui amène une extrémité exactement sur l'autre.",
        "Propriété d'équidistance, à connaître par cœur : tout point de la médiatrice de [AB] est à égale distance de A et de B. Si M est sur la médiatrice, alors MA = MB. Et réciproquement : tout point à égale distance de A et de B se trouve sur la médiatrice.",
        "Pour la construire au compas : trace deux arcs de même rayon centrés en A puis en B (avec un écartement supérieur à la moitié de AB). Les arcs se coupent en deux points, chacun à égale distance de A et de B : la droite qui les relie est la médiatrice.",
      ],
      example: [
        "M est un point de la médiatrice de [AB] et MA = 5 cm.",
        "Alors MB = 5 cm aussi, sans aucune mesure supplémentaire.",
      ],
      tip: "Médiatrice = deux conditions dans un seul mot : perpendiculaire au segment ET passant par son milieu. Il faut les deux, une seule ne suffit pas.",
      figure: "mediatrice",
    },
  ],
  exercises: [
    {
      id: "sym-1",
      level: 1,
      type: "qcm",
      question: "Combien d'axes de symétrie possède un carré ?",
      choices: ["1", "2", "4", "Une infinité"],
      answer: 2,
      explanation:
        "Le carré a 4 axes de symétrie : ses deux diagonales, et les deux droites qui relient les milieux des côtés opposés. C'est le quadrilatère le plus symétrique. Le rectangle non carré, lui, n'en a que 2, et le cercle en a une infinité.",
      hint: "Pense aux diagonales ET aux droites qui passent par les milieux des côtés.",
    },
    {
      id: "sym-2",
      level: 1,
      type: "truefalse",
      question: "Un rectangle qui n'est pas un carré a exactement 2 axes de symétrie.",
      answer: true,
      explanation:
        "Vrai ! Ce sont les deux droites qui joignent les milieux des côtés opposés. Attention au piège classique : les diagonales du rectangle ne sont PAS des axes de symétrie. Si tu plies un rectangle le long d'une diagonale, les deux triangles ne se superposent pas.",
    },
    {
      id: "sym-3",
      level: 1,
      type: "qcm",
      question:
        "Le segment [AB] mesure 4 cm. Son symétrique par rapport à une droite (d) est le segment [A'B']. Combien mesure A'B' ?",
      choices: ["2 cm", "4 cm", "8 cm", "On ne peut pas savoir"],
      answer: 1,
      explanation:
        "La symétrie axiale conserve les longueurs : le symétrique d'un segment est un segment de même longueur. Donc A'B' = AB = 4 cm. Un reflet dans un miroir ne rétrécit pas et n'agrandit pas !",
      hint: "Que fait la symétrie aux longueurs : elle les change ou elle les garde ?",
    },
    {
      id: "sym-4",
      level: 1,
      type: "input",
      question:
        "Le point A est situé à 3 cm de la droite (d). Son symétrique par rapport à (d) est le point A'. À quelle distance de (d) se trouve A' (en cm) ?",
      answer: "3",
      explanation:
        "Le symétrique se trouve de l'autre côté de l'axe, à la MÊME distance : A' est donc à 3 cm de (d). C'est la règle « de l'autre côté, à la même distance, perpendiculairement à l'axe ».",
      hint: "L'axe joue le rôle d'un miroir : le reflet est-il plus près ou plus loin que l'objet ?",
    },
    {
      id: "sym-5",
      level: 2,
      type: "input",
      question:
        "M est un point de la médiatrice du segment [AB] et MA = 5 cm. Combien mesure MB (en cm) ?",
      answer: "5",
      explanation:
        "C'est la propriété d'équidistance de la médiatrice : tout point de la médiatrice de [AB] est à égale distance de A et de B. Donc MB = MA = 5 cm, sans avoir besoin de mesurer quoi que ce soit d'autre.",
      hint: "Quelle est la grande propriété des points de la médiatrice ?",
    },
    {
      id: "sym-6",
      level: 2,
      type: "qcm",
      question: "Qu'est-ce que la médiatrice d'un segment ?",
      choices: [
        "La droite qui passe par le milieu du segment",
        "La droite perpendiculaire au segment",
        "La droite perpendiculaire au segment qui passe par son milieu",
        "Le segment qui relie les milieux de deux côtés",
      ],
      answer: 2,
      explanation:
        "La médiatrice doit remplir DEUX conditions à la fois : être perpendiculaire au segment ET passer par son milieu. Une droite qui passe par le milieu sans être perpendiculaire n'est pas la médiatrice ; une perpendiculaire ailleurs qu'au milieu non plus. Les deux premières réponses sont incomplètes, donc fausses.",
      hint: "Il faut deux conditions réunies, pas une seule.",
    },
    {
      id: "sym-7",
      level: 2,
      type: "truefalse",
      question: "Un cercle possède une infinité d'axes de symétrie.",
      answer: true,
      explanation:
        "Vrai ! Toute droite qui passe par le centre du cercle est un axe de symétrie : en pliant le long d'un diamètre, les deux demi-cercles se superposent exactement. Comme il existe une infinité de droites passant par le centre, le cercle a une infinité d'axes de symétrie. C'est la figure la plus symétrique de toutes.",
    },
    {
      id: "sym-8",
      level: 2,
      type: "qcm",
      question:
        "Le point M est situé exactement SUR l'axe de symétrie (d). Où se trouve son symétrique par rapport à (d) ?",
      choices: [
        "De l'autre côté de l'axe",
        "C'est M lui-même : il ne bouge pas",
        "Au milieu de la figure",
        "On ne peut pas le construire",
      ],
      answer: 1,
      explanation:
        "Un point de l'axe est à distance zéro de l'axe : son symétrique est à la même distance (zéro !) de l'autre côté… c'est-à-dire au même endroit. Un point de l'axe est donc son propre symétrique. C'est pour cela que, lors d'un pliage, les points du pli restent immobiles.",
      hint: "À quelle distance de l'axe se trouve M ? Et son symétrique ?",
    },
    {
      id: "sym-9",
      level: 3,
      type: "input",
      question:
        "Le point A est à 3 cm de la droite (d), et A' est son symétrique par rapport à (d). Quelle est la longueur AA' (en cm) ?",
      answer: "6",
      explanation:
        "A est à 3 cm d'un côté de l'axe, A' à 3 cm de l'autre côté, et le segment [AA'] traverse l'axe perpendiculairement. Donc AA' = 3 + 3 = 6 cm. C'est le piège de la question : on demande la distance entre A et son symétrique, pas la distance à l'axe. Retiens que l'axe coupe [AA'] en son milieu : il en est la médiatrice.",
      hint: "L'axe passe au milieu de [AA'] : il y a 3 cm de chaque côté.",
    },
    {
      id: "sym-10",
      level: 3,
      type: "truefalse",
      question: "Si un point M vérifie MA = MB, alors M est forcément le milieu du segment [AB].",
      answer: false,
      explanation:
        "Faux, et c'est un piège important ! MA = MB signifie seulement que M est à égale distance de A et de B : M peut se trouver n'importe où sur la médiatrice de [AB], qui contient une infinité de points. Le milieu de [AB] n'est qu'UN de ces points, le seul qui soit aussi sur le segment. Un point au-dessus du segment, à égale distance de A et de B, vérifie MA = MB sans être le milieu.",
      hint: "Où se trouvent TOUS les points à égale distance de A et de B ?",
    },
    {
      id: "sym-11",
      level: 3,
      type: "qcm",
      question:
        "Une figure a une aire de 12 cm². On construit sa figure symétrique par rapport à une droite. Quelle est l'aire de la figure symétrique ?",
      choices: ["6 cm²", "12 cm²", "24 cm²", "On ne peut pas savoir"],
      answer: 1,
      explanation:
        "La symétrie axiale conserve les longueurs, les angles ET les aires : la figure symétrique est une copie exacte de la figure de départ, simplement retournée comme dans un miroir. Son aire est donc toujours 12 cm². Rien n'est agrandi, rien n'est rétréci.",
      hint: "Un reflet dans un miroir a-t-il la même taille que l'objet ?",
    },
    {
      id: "sym-12",
      level: 3,
      type: "qcm",
      question:
        "Deux villages A et B veulent construire un puits commun, à égale distance des deux villages. Sur quelle ligne le puits doit-il se trouver ?",
      choices: [
        "Sur la droite (AB)",
        "Sur la médiatrice du segment [AB]",
        "Sur le cercle de centre A passant par B",
        "Uniquement au milieu du segment [AB]",
      ],
      answer: 1,
      explanation:
        "On cherche tous les points M tels que MA = MB : d'après la propriété d'équidistance, c'est exactement la médiatrice du segment [AB]. Le milieu de [AB] convient, mais ce n'est pas le seul emplacement possible : n'importe quel point de la médiatrice fait l'affaire, ce qui laisse le choix (éviter une colline, se rapprocher d'une route…). C'est une vraie utilisation concrète de la médiatrice.",
      hint: "Quel est l'ensemble de TOUS les points à égale distance de A et de B ?",
    },
  ],
  videos: [
    { title: "Construire le symétrique d'un point (symétrie axiale)  - Sixième", youtubeId: "JauG01P544k", channel: "Yvan Monka" },
    { title: "Construire le symétrique d'une figure (symétrie axiale) - Sixième", youtubeId: "sRcgsiPeIq4", channel: "Yvan Monka" },
  ],
};
