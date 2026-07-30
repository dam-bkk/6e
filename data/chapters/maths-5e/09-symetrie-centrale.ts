import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-symetrie-centrale",
  subject: "maths",
  grade: "5e",
  num: 9,
  title: "La symétrie centrale",
  domain: "geometrie",
  icon: "RefreshCw",
  teaser: "Faire tourner une figure d'un demi-tour : la grande nouveauté de la 5e.",
  objectives: [
    "Je sais construire le symétrique d'un point par rapport à un point",
    "Je sais construire le symétrique d'une figure, notamment sur quadrillage",
    "Je connais les propriétés de conservation de la symétrie centrale",
    "Je sais reconnaître un centre de symétrie dans une figure",
    "Je sais distinguer symétrie centrale et symétrie axiale",
  ],
  lesson: [
    {
      title: "Le symétrique d'un point",
      paragraphs: [
        "Le symétrique d'un point M par rapport à un point O est le point M' tel que O soit le milieu du segment [MM'].",
        "Autrement dit : M' est de l'autre côté de O, sur la droite (MO), à la même distance de O que M. Le point O est appelé le centre de la symétrie.",
        "Cas particulier : le symétrique du centre O par rapport à lui-même est O.",
      ],
      example: [
        "Pour construire le symétrique de M par rapport à O :",
        "1. Trace la droite (MO) et prolonge-la au-delà de O.",
        "2. Reporte la longueur OM de l'autre côté de O (au compas).",
        "3. Le point obtenu est M', et on a bien OM = OM'.",
      ],
      tip: "Trois mots à retenir : aligné, même distance, de l'autre côté. Si l'un des trois manque, ce n'est pas le bon point.",
    },
    {
      title: "La symétrie centrale, un demi-tour",
      paragraphs: [
        "Deux figures sont symétriques par rapport à un point O si elles se superposent après un demi-tour (une rotation de 180°) autour de O.",
        "C'est la grande différence avec la symétrie axiale vue en 6e : la symétrie axiale retourne la figure comme dans un miroir, alors que la symétrie centrale la fait pivoter d'un demi-tour. L'image est « à l'envers », tête en bas, mais pas inversée comme dans un miroir.",
      ],
      example: [
        "Pense à une carte à jouer : le roi de cœur du bas est l'image de celui du haut par la symétrie centrale de centre le centre de la carte.",
      ],
      tip: "Pour vérifier une symétrie centrale, tourne ta feuille d'un demi-tour : la figure et son image doivent échanger leurs places exactement.",
    },
    {
      title: "Les propriétés de conservation",
      paragraphs: [
        "La symétrie centrale conserve les longueurs, les angles, les aires et les périmètres. Le symétrique d'un segment est un segment de même longueur.",
        "Elle conserve aussi l'alignement : des points alignés ont des symétriques alignés. Le symétrique d'une droite est une droite qui lui est parallèle.",
        "Le symétrique d'un cercle est un cercle de même rayon : il suffit de construire le symétrique de son centre.",
      ],
      example: [
        "Si le triangle ABC a pour symétrique le triangle A'B'C' par rapport à O, alors A'B' = AB, l'angle ABC est égal à l'angle A'B'C', et les deux triangles ont la même aire.",
      ],
      tip: "« Le symétrique d'une droite est une droite parallèle » : c'est LA propriété propre à la symétrie centrale, la symétrie axiale ne la garantit pas.",
    },
    {
      title: "Le centre de symétrie d'une figure",
      paragraphs: [
        "Un point O est un centre de symétrie d'une figure si le symétrique de la figure par rapport à O est la figure elle-même. La figure semble inchangée après un demi-tour.",
        "Exemples : un rectangle a pour centre de symétrie le point d'intersection de ses diagonales ; un cercle a pour centre de symétrie son centre. En revanche, un triangle équilatéral n'a pas de centre de symétrie, même s'il a trois axes de symétrie.",
      ],
      example: [
        "Parmi les lettres majuscules, H, N, S, O et Z ont un centre de symétrie.",
        "A, M et T ont un axe de symétrie, mais pas de centre de symétrie.",
      ],
      tip: "Axes et centre sont indépendants : une figure peut avoir des axes sans centre (triangle équilatéral) ou un centre sans axe (la lettre S).",
    },
    {
      title: "Construire sur quadrillage",
      paragraphs: [
        "Sur quadrillage, on construit le symétrique d'un point en comptant les carreaux : si A est à 3 carreaux à droite et 2 carreaux au-dessus de O, alors A' est à 3 carreaux à gauche et 2 carreaux en dessous de O.",
        "On inverse donc les deux directions à la fois : droite devient gauche ET haut devient bas. Pour une figure entière, on construit le symétrique de chaque sommet, puis on relie les points dans le même ordre.",
      ],
      example: [
        "Dans un repère, le symétrique du point A(3 ; 2) par rapport à l'origine est le point A'(−3 ; −2) : les deux coordonnées changent de signe.",
      ],
      tip: "Erreur classique : n'inverser qu'une seule direction, ce qui donne une symétrie axiale. En symétrie centrale, on inverse horizontal ET vertical.",
    },
  ],
  exercises: [
    {
      id: "m5sym-1",
      level: 1,
      type: "qcm",
      question:
        "M' est le symétrique de M par rapport au point O. Quelle affirmation est forcément vraie ?",
      choices: [
        "O est le milieu du segment [MM']",
        "M est le milieu du segment [OM']",
        "(MM') est perpendiculaire à (MO)",
        "OM' est le double de OM",
      ],
      answer: 0,
      explanation:
        "C'est la définition de la symétrie centrale : O est le milieu de [MM']. Les points M, O et M' sont alignés et OM = OM'. Attention au piège : c'est MM' qui vaut le double de OM, pas OM'.",
      hint: "Repense à la définition : où se trouve O par rapport à M et M' ?",
    },
    {
      id: "m5sym-2",
      level: 1,
      type: "truefalse",
      question: "Le symétrique du point O par rapport au point O est le point O lui-même.",
      answer: true,
      explanation:
        "Vrai ! Le centre de la symétrie est le seul point qui ne bouge pas : il est son propre symétrique. Tous les autres points changent de place.",
    },
    {
      id: "m5sym-3",
      level: 1,
      type: "qcm",
      question: "La symétrie centrale correspond à une rotation de la figure. De quel angle ?",
      choices: ["90°", "180°", "360°", "45°"],
      answer: 1,
      explanation:
        "La symétrie centrale est un demi-tour, c'est-à-dire une rotation de 180° autour du centre. Une rotation de 360° serait un tour complet : la figure reviendrait exactement à sa place.",
      hint: "On dit aussi que la symétrie centrale est un « demi-tour ».",
    },
    {
      id: "m5sym-4",
      level: 1,
      type: "input",
      question:
        "Le segment [A'B'] est le symétrique du segment [AB] par une symétrie centrale. Si AB = 5 cm, combien mesure A'B' en cm ?",
      answer: "5",
      explanation:
        "La symétrie centrale conserve les longueurs : le symétrique d'un segment est un segment de même longueur. Donc A'B' = AB = 5 cm, quelle que soit la position du centre.",
      hint: "Que fait la symétrie centrale aux longueurs ?",
    },
    {
      id: "m5sym-5",
      level: 2,
      type: "qcm",
      question: "Par une symétrie centrale, quelle est l'image d'une droite ?",
      choices: [
        "Une droite parallèle",
        "Une droite perpendiculaire",
        "Toujours la même droite",
        "Un segment",
      ],
      answer: 0,
      explanation:
        "Le symétrique d'une droite par une symétrie centrale est une droite parallèle. Cas particulier : si la droite passe par le centre, son image est elle-même (et une droite est bien parallèle à elle-même).",
      hint: "Imagine une droite qui fait un demi-tour : change-t-elle de direction ?",
    },
    {
      id: "m5sym-6",
      level: 2,
      type: "input",
      question:
        "Dans un repère, A' est le symétrique du point A(3 ; 2) par rapport à l'origine du repère. Quelle est l'abscisse de A' ?",
      answer: "-3",
      accept: ["−3"],
      explanation:
        "Par la symétrie de centre l'origine, les deux coordonnées changent de signe : A(3 ; 2) devient A'(−3 ; −2). L'abscisse de A' est donc −3. Piège classique : ne changer qu'un seul signe, ce qui donnerait une symétrie axiale.",
      hint: "Par rapport à l'origine, les DEUX coordonnées changent de signe.",
    },
    {
      id: "m5sym-7",
      level: 2,
      type: "truefalse",
      question:
        "Le symétrique d'un cercle de rayon 4 cm par une symétrie centrale est un cercle de rayon 4 cm.",
      answer: true,
      explanation:
        "Vrai ! La symétrie centrale conserve les longueurs, donc le rayon ne change pas. Pour construire l'image du cercle, il suffit de construire le symétrique de son centre, puis de tracer le cercle de même rayon.",
    },
    {
      id: "m5sym-8",
      level: 2,
      type: "qcm",
      question: "Parmi ces figures, laquelle possède un centre de symétrie ?",
      choices: [
        "Un triangle équilatéral",
        "Un rectangle",
        "Un trapèze quelconque",
        "Un pentagone régulier",
      ],
      answer: 1,
      explanation:
        "Le rectangle a un centre de symétrie : le point d'intersection de ses diagonales. Le triangle équilatéral, lui, a trois axes de symétrie mais aucun centre : après un demi-tour, il pointe dans l'autre sens. Ne confonds pas axes et centre !",
      hint: "Fais tourner chaque figure d'un demi-tour dans ta tête : laquelle retombe exactement sur elle-même ?",
    },
    {
      id: "m5sym-9",
      level: 3,
      type: "input",
      question:
        "E et F sont symétriques par rapport au point O, et EO = 3,5 cm. Quelle est la longueur EF en cm ?",
      answer: "7",
      explanation:
        "O est le milieu de [EF], donc EF = 2 × EO = 2 × 3,5 = 7 cm. Piège classique : répondre 3,5 en oubliant que EO n'est que la moitié du segment [EF].",
      hint: "O est le milieu de [EF] : EO n'est donc que la moitié de EF.",
    },
    {
      id: "m5sym-10",
      level: 3,
      type: "qcm",
      question: "Parmi ces lettres majuscules, laquelle possède un centre de symétrie ?",
      choices: ["A", "T", "S", "M"],
      answer: 2,
      explanation:
        "Le S se superpose à lui-même après un demi-tour : il a un centre de symétrie (mais aucun axe !). A, T et M ont un axe de symétrie vertical, mais pas de centre : retournées d'un demi-tour, elles se retrouvent tête en bas.",
      hint: "Écris chaque lettre, puis tourne ta feuille d'un demi-tour.",
    },
    {
      id: "m5sym-11",
      level: 3,
      type: "truefalse",
      question:
        "Par une symétrie centrale, une figure est retournée comme dans un miroir.",
      answer: false,
      explanation:
        "Faux ! C'est la symétrie AXIALE qui retourne la figure comme un miroir. La symétrie centrale fait pivoter la figure d'un demi-tour : elle se retrouve tête en bas, mais son sens de parcours est conservé. C'est la différence essentielle entre les deux symétries.",
      hint: "Quelle symétrie correspond à un demi-tour ? Laquelle correspond à un miroir ?",
    },
    {
      id: "m5sym-12",
      level: 3,
      type: "input",
      question:
        "Sur un quadrillage, le point A est situé 4 carreaux à gauche du point O, sur la même ligne. On construit A', symétrique de A par rapport à O. Combien de carreaux séparent A de A' ?",
      answer: "8",
      explanation:
        "A' se trouve 4 carreaux à droite de O, sur la même ligne. De A à A', on compte donc 4 + 4 = 8 carreaux. C'est logique : O est le milieu de [AA'], donc AA' est le double de AO.",
      hint: "Place O au milieu : combien de carreaux de chaque côté ?",
    },
  ],
};
