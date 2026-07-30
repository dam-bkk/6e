import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "droites-cercles",
  num: 8,
  title: "Droites, segments et cercles",
  domain: "geometrie",
  icon: "PencilRuler",
  teaser: "Le vocabulaire et les notations pour parler géométrie sans se tromper.",
  objectives: [
    "Je connais les notations : point, droite (AB), segment [AB], demi-droite [AB)",
    "Je sais reconnaître des points alignés et placer le milieu d'un segment",
    "Je sais reconnaître et coder des droites perpendiculaires ou parallèles",
    "Je connais le vocabulaire du cercle : centre, rayon, diamètre, corde",
  ],
  lesson: [
    {
      title: "Point, droite, segment, demi-droite",
      paragraphs: [
        "En géométrie, tout part du point. On le représente par une petite croix et on le nomme avec une lettre majuscule : A, B, M…",
        "La droite (AB) passe par les points A et B et se prolonge à l'infini des deux côtés : on ne peut pas la mesurer. Le segment [AB] est la partie de la droite comprise entre A et B : il a deux extrémités et une longueur. La demi-droite [AB) part de A, passe par B et se prolonge à l'infini d'un seul côté.",
        "Attention aux crochets et aux parenthèses : un crochet [ signifie « ça s'arrête ici », une parenthèse ( signifie « ça continue à l'infini ».",
      ],
      example: [
        "(AB) : la droite qui passe par A et B (infinie des deux côtés).",
        "[AB] : le segment d'extrémités A et B (on peut le mesurer).",
        "[AB) : la demi-droite d'origine A qui passe par B.",
        "AB tout court (sans crochets ni parenthèses) : la longueur du segment [AB], par exemple AB = 5 cm.",
      ],
      tip: "Crochet = stop, parenthèse = ça file à l'infini. [AB] est bloqué des deux côtés, (AB) file des deux côtés, [AB) est bloqué en A seulement.",
      figure: "droite-segment",
    },
    {
      title: "Points alignés et milieu d'un segment",
      paragraphs: [
        "Des points sont alignés lorsqu'ils appartiennent à une même droite. Deux points sont toujours alignés (on peut toujours tracer une droite qui passe par les deux) : la question ne devient intéressante qu'à partir de trois points.",
        "Le milieu d'un segment est le point du segment qui le partage en deux segments de même longueur. Si I est le milieu de [AB], alors I appartient à [AB] et AI = IB.",
      ],
      example: [
        "I est le milieu de [AB] et AB = 8 cm.",
        "Alors AI = IB = 8 ÷ 2 = 4 cm.",
      ],
      tip: "Le milieu doit vérifier DEUX conditions : être sur le segment ET être à égale distance des extrémités. Un point à égale distance de A et de B mais en dehors de [AB] n'est pas le milieu !",
    },
    {
      title: "Droites perpendiculaires",
      paragraphs: [
        "Deux droites sont perpendiculaires lorsqu'elles se coupent en formant un angle droit (un angle de 90°). On le vérifie avec l'équerre, et on le code sur la figure par un petit carré placé dans l'angle.",
        "On note (d1) ⊥ (d2) et on lit : « la droite (d1) est perpendiculaire à la droite (d2) ».",
        "Pour tracer une perpendiculaire, on pose un côté de l'angle droit de l'équerre le long de la droite, et on trace le long de l'autre côté.",
      ],
      example: [
        "Les lignes d'un cahier et ses marges verticales sont perpendiculaires.",
        "Sur une figure, le petit carré dans l'angle suffit à dire « angle droit » : pas besoin d'écrire 90°.",
      ],
      tip: "Perpendiculaire = angle droit = petit carré sur la figure. Si le petit carré n'est pas codé, ne fais jamais confiance à tes yeux : vérifie à l'équerre.",
      figure: "perpendiculaires",
    },
    {
      title: "Droites parallèles",
      paragraphs: [
        "Deux droites sont parallèles lorsqu'elles ne se coupent jamais, même en les prolongeant à l'infini. L'écart entre elles reste constant, comme les deux rails d'une voie ferrée.",
        "On note (d1) // (d2) et on lit : « la droite (d1) est parallèle à la droite (d2) ».",
        "Propriété très utile : si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles. C'est logique : elles font toutes les deux un angle droit avec la même droite, donc elles « penchent » exactement pareil.",
      ],
      example: [
        "(d1) ⊥ (d3) et (d2) ⊥ (d3).",
        "Alors (d1) // (d2) : pas besoin de le vérifier à la règle, la propriété le garantit.",
      ],
      tip: "Pense aux barreaux d'une échelle : chaque barreau est perpendiculaire aux montants, donc tous les barreaux sont parallèles entre eux.",
      figure: "paralleles",
    },
    {
      title: "Le cercle",
      paragraphs: [
        "Le cercle de centre O et de rayon 3 cm est l'ensemble de TOUS les points situés à exactement 3 cm de O. C'est la définition la plus importante du chapitre : si M est sur le cercle, alors OM = 3 cm, et réciproquement.",
        "Un rayon est un segment qui relie le centre à un point du cercle. Une corde est un segment qui relie deux points du cercle. Un diamètre est une corde qui passe par le centre : c'est la plus longue corde possible.",
        "Le diamètre mesure deux fois le rayon : diamètre = 2 × rayon.",
      ],
      example: [
        "Un cercle a un rayon de 4 cm.",
        "Son diamètre mesure 2 × 4 = 8 cm.",
        "Tout point M de ce cercle vérifie OM = 4 cm.",
      ],
      tip: "C'est exactement ce que fait le compas : la pointe reste plantée au centre, l'écartement ne change pas, donc tous les points tracés sont à la même distance du centre.",
      figure: "cercle",
    },
  ],
  exercises: [
    {
      id: "geo-1",
      level: 1,
      type: "qcm",
      question: "Quelle notation désigne le segment d'extrémités A et B ?",
      choices: ["(AB)", "[AB]", "[AB)", "AB"],
      answer: 1,
      explanation:
        "Le segment a deux extrémités : il est « bloqué » des deux côtés, donc on l'écrit avec deux crochets : [AB]. (AB) est la droite (infinie des deux côtés), [AB) est la demi-droite d'origine A, et AB tout seul désigne la longueur du segment.",
      hint: "Crochet = ça s'arrête, parenthèse = ça continue à l'infini.",
    },
    {
      id: "geo-2",
      level: 1,
      type: "qcm",
      question: "Sur une figure, comment code-t-on deux droites perpendiculaires ?",
      choices: [
        "Avec une double flèche",
        "Avec un petit carré dans l'angle",
        "Avec deux petits traits sur chaque droite",
        "En écrivant 180° dans l'angle",
      ],
      answer: 1,
      explanation:
        "Le petit carré dessiné dans l'angle signifie « angle droit », c'est-à-dire un angle de 90°. Deux droites qui se coupent en formant un angle droit sont perpendiculaires. Les petits traits identiques servent, eux, à coder des longueurs égales.",
    },
    {
      id: "geo-3",
      level: 1,
      type: "truefalse",
      question: "Une droite a deux extrémités : on peut mesurer sa longueur.",
      answer: false,
      explanation:
        "Faux ! Une droite se prolonge à l'infini des deux côtés : elle n'a pas d'extrémités, donc pas de longueur. C'est le segment qui a deux extrémités et une longueur. Sur une feuille, on ne dessine qu'un morceau de la droite, mais en réalité elle continue.",
      hint: "Qu'est-ce qui différencie une droite d'un segment ?",
    },
    {
      id: "geo-4",
      level: 1,
      type: "input",
      question:
        "Le segment [AB] mesure 6 cm et I est son milieu. Combien mesure AI (en cm) ?",
      answer: "3",
      explanation:
        "Le milieu partage le segment en deux parts égales : AI = IB = AB ÷ 2 = 6 ÷ 2 = 3 cm.",
      hint: "Le milieu coupe le segment en deux longueurs égales.",
    },
    {
      id: "geo-5",
      level: 2,
      type: "input",
      question:
        "Un cercle a un diamètre de 7 cm. Combien mesure son rayon (en cm) ?",
      answer: "3,5",
      explanation:
        "Le diamètre vaut 2 × rayon, donc le rayon vaut diamètre ÷ 2 = 7 ÷ 2 = 3,5 cm. Attention au sens du calcul : pour passer du diamètre au rayon, on divise ; pour passer du rayon au diamètre, on multiplie.",
      hint: "diamètre = 2 × rayon. Ici, on cherche le rayon.",
    },
    {
      id: "geo-6",
      level: 2,
      type: "input",
      question:
        "I est le milieu du segment [CD] et CI = 3,8 cm. Combien mesure CD (en cm) ?",
      answer: "7,6",
      explanation:
        "Comme I est le milieu, CI = ID = 3,8 cm. La longueur totale est CD = CI + ID = 3,8 + 3,8 = 7,6 cm. Piège classique : ici on donne la demi-longueur et on demande la longueur entière, il faut donc multiplier par 2, pas diviser !",
      hint: "CI n'est que la moitié du segment.",
    },
    {
      id: "geo-7",
      level: 2,
      type: "truefalse",
      question:
        "Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.",
      answer: true,
      explanation:
        "Vrai ! C'est une propriété du cours. Les deux droites forment chacune un angle droit avec la même troisième droite : elles ont donc exactement la même direction et ne se couperont jamais. Pense aux barreaux d'une échelle, tous perpendiculaires aux montants et donc parallèles entre eux.",
    },
    {
      id: "geo-8",
      level: 2,
      type: "qcm",
      question:
        "M est un point du cercle de centre O et de rayon 5 cm. Que peut-on affirmer ?",
      choices: ["OM = 5 cm", "OM = 10 cm", "OM = 2,5 cm", "On ne peut rien dire"],
      answer: 0,
      explanation:
        "Par définition, le cercle de centre O et de rayon 5 cm est l'ensemble des points situés à exactement 5 cm de O. Si M est sur le cercle, alors OM = 5 cm, quel que soit l'endroit où M se trouve sur le cercle. C'est LA définition à connaître par cœur.",
      hint: "Rappelle-toi la définition du cercle : tous les points à égale distance du centre.",
    },
    {
      id: "geo-9",
      level: 3,
      type: "truefalse",
      question: "La demi-droite [AB) et la demi-droite [BA) désignent la même demi-droite.",
      answer: false,
      explanation:
        "Faux ! L'ordre des lettres compte pour les demi-droites. [AB) a pour origine A et se prolonge à l'infini du côté de B ; [BA) a pour origine B et se prolonge à l'infini du côté de A. Elles partent dans des sens opposés. En revanche, [AB] et [BA] désignent bien le même segment, et (AB) et (BA) la même droite.",
      hint: "La première lettre d'une demi-droite est son origine.",
    },
    {
      id: "geo-10",
      level: 3,
      type: "input",
      question:
        "Sur un cercle de centre O, les points A et B sont les deux extrémités d'un même diamètre. On sait que OA = 6 cm. Combien mesure AB (en cm) ?",
      answer: "12",
      explanation:
        "OA est un rayon : le cercle a donc un rayon de 6 cm. [AB] est un diamètre, il passe par le centre O, et AB = OA + OB = 6 + 6 = 12 cm. On retrouve la formule : diamètre = 2 × rayon = 2 × 6 = 12 cm. Remarque au passage : O est le milieu de [AB].",
      hint: "OA est un rayon. Le diamètre vaut combien de rayons ?",
    },
    {
      id: "geo-11",
      level: 3,
      type: "input",
      question:
        "Une chèvre est attachée à un piquet par une corde de 4 m. Elle tourne autour du piquet en gardant la corde bien tendue : elle décrit alors un cercle. Quel est le diamètre de ce cercle (en m) ?",
      answer: "8",
      explanation:
        "La corde tendue joue le rôle du rayon : la chèvre reste toujours à 4 m du piquet, qui est le centre du cercle. Le rayon vaut donc 4 m, et le diamètre vaut 2 × 4 = 8 m. C'est le même principe que le compas : une distance fixe autour d'un point fixe dessine un cercle.",
      hint: "La corde tendue, c'est le rayon du cercle.",
    },
    {
      id: "geo-12",
      level: 3,
      type: "qcm",
      question:
        "Trois droites : (d1) est perpendiculaire à (d3), et (d2) est aussi perpendiculaire à (d3). Que peut-on conclure pour (d1) et (d2) ?",
      choices: [
        "(d1) et (d2) sont perpendiculaires",
        "(d1) et (d2) sont parallèles",
        "(d1) et (d2) se coupent en un point",
        "On ne peut rien conclure",
      ],
      answer: 1,
      explanation:
        "On applique la propriété du cours : deux droites perpendiculaires à une même droite sont parallèles entre elles. Donc (d1) // (d2). Piège classique : beaucoup répondent « perpendiculaires » parce que le mot apparaît deux fois dans l'énoncé. Raisonne avec l'image de l'échelle : deux barreaux perpendiculaires aux montants sont parallèles l'un à l'autre.",
      hint: "Imagine deux barreaux d'une échelle, tous les deux perpendiculaires au montant.",
    },
  ],
};
