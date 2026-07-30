import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-angles-paralleles",
  subject: "maths",
  grade: "5e",
  num: 10,
  title: "Angles et parallèles",
  domain: "geometrie",
  icon: "GitBranch",
  teaser: "Découvrir les couples d'angles qui trahissent les droites parallèles.",
  objectives: [
    "Je reconnais des angles opposés par le sommet, adjacents, complémentaires et supplémentaires",
    "Je reconnais des angles alternes-internes et des angles correspondants",
    "Je sais utiliser les angles pour prouver que deux droites sont parallèles",
    "Je sais calculer un angle en justifiant chaque étape",
  ],
  lesson: [
    {
      title: "Angles opposés par le sommet, angles adjacents",
      paragraphs: [
        "Quand deux droites se coupent, elles forment quatre angles. Deux angles opposés par le sommet ont le même sommet et leurs côtés dans le prolongement l'un de l'autre : ils sont toujours égaux.",
        "Deux angles sont adjacents s'ils ont le même sommet, un côté commun, et s'ils sont situés de part et d'autre de ce côté commun.",
      ],
      example: [
        "Les droites (AB) et (CD) se coupent en O.",
        "L'angle AOC et l'angle BOD sont opposés par le sommet : ils sont égaux.",
        "L'angle AOC et l'angle COB sont adjacents : ils partagent le côté [OC).",
      ],
      tip: "Opposés par le sommet = figure en « papillon » : les deux angles se font face de chaque côté du point d'intersection.",
    },
    {
      title: "Angles complémentaires, angles supplémentaires",
      paragraphs: [
        "Deux angles sont complémentaires si la somme de leurs mesures vaut 90°. Ils sont supplémentaires si leur somme vaut 180°.",
        "Deux angles adjacents dont les côtés extérieurs forment une droite sont toujours supplémentaires : ensemble, ils forment un angle plat.",
      ],
      example: [
        "37° et 53° sont complémentaires car 37 + 53 = 90.",
        "115° et 65° sont supplémentaires car 115 + 65 = 180.",
      ],
      tip: "Pour ne plus confondre : Complémentaires → 90°, et Supplémentaires → 180°. « S » comme « Somme Supérieure ».",
    },
    {
      title: "Alternes-internes et correspondants",
      figure: "m5-alternes-internes",
      paragraphs: [
        "Quand une droite (la sécante) coupe deux autres droites, elle forme huit angles. Certains couples portent des noms précis.",
        "Deux angles alternes-internes sont situés entre les deux droites (internes) et de part et d'autre de la sécante (alternés). Ils forment un « Z ».",
        "Deux angles correspondants sont situés du même côté de la sécante, l'un entre les deux droites et l'autre à l'extérieur. Ils forment un « F ».",
      ],
      example: [
        "Une sécante coupe les droites (d) et (d') en A et B.",
        "Un angle en A situé sous (d) à gauche de la sécante et un angle en B situé au-dessus de (d') à droite de la sécante sont alternes-internes.",
      ],
      tip: "Repère les lettres cachées dans la figure : un « Z » signale des alternes-internes, un « F » (même à l'envers) signale des correspondants.",
    },
    {
      title: "Angles et parallélisme : la propriété clé",
      paragraphs: [
        "Si deux droites sont parallèles, alors toute sécante forme avec elles des angles alternes-internes égaux, et des angles correspondants égaux.",
        "Et réciproquement : si deux droites coupées par une sécante forment deux angles alternes-internes égaux (ou deux angles correspondants égaux), alors ces deux droites sont parallèles.",
        "C'est un aller-retour très puissant : les angles permettent de PROUVER un parallélisme, sans mesurer les droites elles-mêmes.",
      ],
      example: [
        "Une sécante coupe (d) et (d') en formant deux angles correspondants de 75° chacun.",
        "Conclusion : (d) et (d') sont parallèles.",
      ],
      tip: "Deux angles alternes-internes égaux suffisent à prouver le parallélisme, mais s'ils ne sont pas égaux, les droites ne sont pas parallèles : l'information est utile dans les deux sens.",
    },
    {
      title: "Rédiger un calcul d'angle",
      paragraphs: [
        "En 5e, on ne se contente plus de mesurer : on calcule des angles en citant la propriété utilisée à chaque étape.",
        "Une bonne rédaction contient trois ingrédients : les données (« les droites sont parallèles »), la propriété (« donc les angles alternes-internes sont égaux »), puis le calcul.",
      ],
      example: [
        "Données : (d) parallèle à (d'), l'angle en A mesure 118°.",
        "Les angles en A et en B sont alternes-internes et (d) est parallèle à (d'), donc l'angle en B mesure aussi 118°.",
        "L'angle voisin en B est son supplémentaire : 180 − 118 = 62°.",
      ],
      tip: "Jamais de « ça se voit sur la figure » ! Une figure peut être trompeuse : seule une propriété citée justifie un calcul.",
    },
  ],
  exercises: [
    {
      id: "m5ang-1",
      level: 1,
      type: "qcm",
      question: "Deux angles opposés par le sommet sont toujours…",
      choices: ["égaux", "supplémentaires", "complémentaires", "adjacents"],
      answer: 0,
      explanation:
        "Deux angles opposés par le sommet sont toujours égaux : c'est une propriété du cours. Ils ne sont jamais adjacents, car ils n'ont pas de côté commun, seulement un sommet commun.",
      hint: "Pense à la figure en « papillon » formée par deux droites qui se coupent.",
    },
    {
      id: "m5ang-2",
      level: 1,
      type: "input",
      question:
        "Deux angles sont complémentaires. L'un mesure 37°. Combien mesure l'autre, en degrés ?",
      answer: "53",
      explanation:
        "Complémentaires signifie que la somme des deux mesures vaut 90°. L'autre angle mesure donc 90 − 37 = 53°. Piège classique : confondre avec supplémentaires (somme égale à 180°), ce qui donnerait 143°.",
      hint: "Complémentaires : la somme vaut 90°.",
    },
    {
      id: "m5ang-3",
      level: 1,
      type: "input",
      question:
        "Deux angles sont supplémentaires. L'un mesure 115°. Combien mesure l'autre, en degrés ?",
      answer: "65",
      explanation:
        "Supplémentaires signifie que la somme des deux mesures vaut 180°. L'autre angle mesure donc 180 − 115 = 65°.",
      hint: "Supplémentaires : la somme vaut 180°.",
    },
    {
      id: "m5ang-4",
      level: 1,
      type: "truefalse",
      question:
        "Deux angles adjacents ont le même sommet et un côté commun.",
      answer: true,
      explanation:
        "Vrai ! C'est la définition : même sommet, un côté commun, et les deux angles sont situés de part et d'autre de ce côté commun. Sans côté commun, on ne parle pas d'angles adjacents.",
    },
    {
      id: "m5ang-5",
      level: 2,
      type: "qcm",
      question:
        "Une sécante coupe deux droites. Où se trouvent deux angles alternes-internes ?",
      choices: [
        "Entre les deux droites, de part et d'autre de la sécante",
        "Entre les deux droites, du même côté de la sécante",
        "À l'extérieur des deux droites, de part et d'autre de la sécante",
        "Du même côté de la sécante, l'un à l'intérieur et l'autre à l'extérieur",
      ],
      answer: 0,
      explanation:
        "« Internes » signifie entre les deux droites, et « alternes » signifie de part et d'autre de la sécante. La dernière proposition décrit des angles correspondants, pas des alternes-internes.",
      hint: "Décompose le mot : « alternes » + « internes ».",
    },
    {
      id: "m5ang-6",
      level: 2,
      type: "input",
      question:
        "Les droites (d) et (d') sont parallèles et coupées par une sécante en A et B. Un angle en A et un angle en B sont alternes-internes, et celui en A mesure 72°. Combien mesure celui en B, en degrés ?",
      answer: "72",
      explanation:
        "Les droites (d) et (d') sont parallèles, donc les angles alternes-internes formés par la sécante sont égaux. L'angle en B mesure donc aussi 72°. La justification (le parallélisme) est indispensable : sans elle, on ne pourrait rien conclure.",
      hint: "Que peut-on dire des angles alternes-internes quand les droites sont parallèles ?",
    },
    {
      id: "m5ang-7",
      level: 2,
      type: "truefalse",
      question:
        "Deux droites coupées par une sécante forment deux angles alternes-internes égaux. On peut en conclure que ces deux droites sont parallèles.",
      answer: true,
      explanation:
        "Vrai ! C'est la réciproque de la propriété du cours : des angles alternes-internes égaux prouvent le parallélisme. C'est même la méthode classique pour démontrer que deux droites sont parallèles sans les prolonger.",
      hint: "La propriété du cours fonctionne dans les deux sens.",
    },
    {
      id: "m5ang-8",
      level: 2,
      type: "input",
      question:
        "Deux angles supplémentaires sont tels que l'un mesure le double de l'autre. Combien mesure le plus petit, en degrés ?",
      answer: "60",
      explanation:
        "Appelons x la mesure du plus petit angle ; le plus grand mesure alors 2 × x. Leur somme vaut 180°, donc x + 2 × x = 3 × x = 180, d'où x = 180 ÷ 3 = 60. Le plus petit mesure 60° et le plus grand 120°.",
      hint: "Petit angle + double du petit angle = 3 fois le petit angle.",
    },
    {
      id: "m5ang-9",
      level: 3,
      type: "input",
      question:
        "Les droites (d) et (d') sont parallèles, coupées par une sécante en A et en B. L'un des angles en A mesure 118°. Combien mesure l'angle aigu formé en B, en degrés ?",
      answer: "62",
      explanation:
        "Étape 1 : comme (d) et (d') sont parallèles, l'angle alterne-interne en B est égal à celui en A, soit 118°. Étape 2 : en B, l'angle aigu est le supplémentaire de cet angle obtus : 180 − 118 = 62°. Piège classique : répondre 118, alors que la question demande l'angle AIGU (inférieur à 90°).",
      hint: "Commence par transporter le 118° en B grâce au parallélisme, puis utilise l'angle plat.",
    },
    {
      id: "m5ang-10",
      level: 3,
      type: "qcm",
      question:
        "Une sécante coupe les droites (d) et (d') en formant deux angles correspondants qui mesurent chacun 75°. Que peut-on en conclure ?",
      choices: [
        "(d) et (d') sont parallèles",
        "(d) et (d') sont perpendiculaires",
        "(d) et (d') se coupent en formant un angle de 75°",
        "On ne peut rien conclure",
      ],
      answer: 0,
      explanation:
        "Des angles correspondants égaux prouvent que les droites sont parallèles : c'est la réciproque de la propriété du cours. Retiens bien : l'égalité des angles correspondants (ou alternes-internes) est une preuve de parallélisme.",
      hint: "Angles correspondants égaux : quelle propriété du cours s'applique ?",
    },
    {
      id: "m5ang-11",
      level: 3,
      type: "truefalse",
      question:
        "Deux droites coupées par une sécante forment deux angles correspondants qui mesurent 80° et 100°. Ces deux droites sont parallèles.",
      answer: false,
      explanation:
        "Faux ! Pour conclure au parallélisme, les angles correspondants doivent être ÉGAUX. Ici 80° et 100° sont différents (ils sont d'ailleurs supplémentaires), donc les droites ne sont pas parallèles : elles finiront par se couper.",
      hint: "Quelle condition exacte les angles correspondants doivent-ils vérifier ?",
    },
    {
      id: "m5ang-12",
      level: 3,
      type: "input",
      question:
        "Deux rails parallèles sont coupés par une traverse rectiligne. La traverse forme un angle de 68° avec le premier rail. Quel angle obtus forme-t-elle avec le second rail, en degrés ?",
      answer: "112",
      explanation:
        "Étape 1 : les rails sont parallèles, donc la traverse forme avec le second rail un angle correspondant égal à 68°. Étape 2 : l'angle obtus demandé est son supplémentaire : 180 − 68 = 112°. Vérification : 112 est bien supérieur à 90, c'est un angle obtus.",
      hint: "Transporte d'abord le 68° sur le second rail, puis cherche son supplémentaire.",
    },
  ],
};
