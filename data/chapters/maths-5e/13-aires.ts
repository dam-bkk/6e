import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-aires",
  subject: "maths",
  grade: "5e",
  num: 13,
  title: "Aires : triangle et disque",
  domain: "grandeurs",
  icon: "Grid3x3",
  teaser: "Des formules qui s'enchaînent : rectangle, parallélogramme, triangle… et le disque avec π.",
  objectives: [
    "Je connais les aires du carré et du rectangle et je sais convertir les unités d'aire",
    "Je sais calculer l'aire d'un parallélogramme : base × hauteur",
    "Je sais calculer l'aire d'un triangle en choisissant la bonne hauteur",
    "Je sais calculer l'aire d'un disque : π × rayon × rayon",
    "Je sais décomposer une figure pour calculer son aire",
  ],
  lesson: [
    {
      title: "Rappels : carré, rectangle et unités d'aire",
      paragraphs: [
        "L'aire d'une figure mesure la surface qu'elle occupe. Aire du rectangle : longueur × largeur. Aire du carré : côté × côté.",
        "L'unité principale est le mètre carré (m²). Attention aux conversions : chaque unité d'aire vaut 100 fois la suivante, et non 10. Ainsi 1 m² = 100 dm² = 10 000 cm².",
      ],
      example: [
        "Un rectangle de 8 cm sur 5 cm a une aire de 8 × 5 = 40 cm².",
        "3,5 m² = 3,5 × 10 000 = 35 000 cm².",
      ],
      tip: "Dans un tableau de conversion d'aires, chaque unité occupe DEUX colonnes. C'est le piège numéro un du chapitre : on décale de 2 chiffres par unité, pas de 1.",
    },
    {
      title: "L'aire du parallélogramme",
      paragraphs: [
        "Aire du parallélogramme : base × hauteur. La base est l'un des côtés ; la hauteur est la distance entre ce côté et le côté opposé, mesurée perpendiculairement.",
        "Pourquoi cette formule ? En découpant un triangle d'un côté du parallélogramme et en le recollant de l'autre, on reconstitue un rectangle de mêmes base et hauteur.",
      ],
      example: [
        "Un parallélogramme de base 9 cm et de hauteur 4 cm a une aire de 9 × 4 = 36 cm².",
      ],
      tip: "La hauteur n'est PAS le côté penché : c'est la distance perpendiculaire entre les deux bases. Si tu multiplies les deux côtés du parallélogramme, ton résultat est faux (sauf pour un rectangle).",
    },
    {
      title: "L'aire du triangle",
      figure: "m5-triangle-hauteur",
      paragraphs: [
        "Aire du triangle : base × hauteur ÷ 2. Un triangle est en effet la moitié d'un parallélogramme de mêmes base et hauteur.",
        "N'importe quel côté peut servir de base, mais il faut alors prendre la hauteur ASSOCIÉE : celle qui part du sommet opposé et arrive perpendiculairement sur cette base (ou son prolongement).",
      ],
      example: [
        "Un triangle de base 10 cm et de hauteur associée 6 cm a une aire de 10 × 6 ÷ 2 = 30 cm².",
        "Cas pratique : dans un triangle rectangle, les deux côtés de l'angle droit sont une base et sa hauteur associée.",
      ],
      tip: "Base et hauteur vont toujours par deux, comme une paire. Vérifie sur la figure que ta hauteur tombe bien perpendiculairement sur la base choisie.",
    },
    {
      title: "L'aire du disque",
      figure: "m5-aire-disque",
      paragraphs: [
        "Aire du disque de rayon r : π × r × r, c'est-à-dire π × r². Le nombre π vaut environ 3,14.",
        "On peut donner un résultat exact en laissant π dans l'écriture (par exemple 25 × π cm²), ou une valeur approchée en remplaçant π par 3,14.",
        "Attention à ne pas confondre avec le périmètre du cercle (2 × π × r) : l'aire utilise le rayon au carré.",
      ],
      example: [
        "Un disque de rayon 5 cm a pour aire exacte 25 × π cm² (car 5² = 25).",
        "Valeur approchée : 25 × 3,14 = 78,5 cm².",
      ],
      tip: "Si l'énoncé donne le DIAMÈTRE, commence par le diviser par 2 pour obtenir le rayon. Oublier cette étape est l'erreur la plus fréquente sur le disque.",
    },
    {
      title: "Les figures composées",
      paragraphs: [
        "Pour calculer l'aire d'une figure compliquée, on la découpe en figures simples (rectangles, triangles, demi-disques…) dont on additionne les aires.",
        "Parfois il est plus malin de soustraire : l'aire d'un cadre, par exemple, est l'aire du grand rectangle moins celle du petit.",
      ],
      example: [
        "Une façade de maison : un rectangle de 10 m sur 6 m surmonté d'un pignon triangulaire de base 10 m et de hauteur 4 m.",
        "Aire totale : 10 × 6 + 10 × 4 ÷ 2 = 60 + 20 = 80 m².",
      ],
      tip: "Avant tout calcul, vérifie que toutes les longueurs sont dans la MÊME unité. Mélanger des cm et des m est le meilleur moyen d'obtenir un résultat absurde.",
    },
  ],
  exercises: [
    {
      id: "m5air-1",
      level: 1,
      type: "qcm",
      question: "Quelle est l'aire d'un rectangle de longueur 8 cm et de largeur 5 cm ?",
      choices: ["40 cm²", "26 cm²", "13 cm²", "80 cm²"],
      answer: 0,
      explanation:
        "Aire du rectangle : longueur × largeur = 8 × 5 = 40 cm². Attention à ne pas confondre avec le périmètre : 2 × (8 + 5) = 26 cm, qui mesure le tour et non la surface.",
      hint: "Aire = longueur × largeur. Le périmètre, lui, mesure le tour.",
    },
    {
      id: "m5air-2",
      level: 1,
      type: "input",
      question: "Quelle est l'aire d'un carré de côté 7 cm, en cm² ?",
      answer: "49",
      explanation:
        "Aire du carré : côté × côté = 7 × 7 = 49 cm². Piège classique : calculer 7 × 4 = 28, qui est le périmètre du carré, pas son aire.",
      hint: "Côté × côté, pas côté × 4.",
    },
    {
      id: "m5air-3",
      level: 1,
      type: "qcm",
      question: "Quelle est la formule de l'aire d'un triangle ?",
      choices: [
        "base × hauteur ÷ 2",
        "base × hauteur",
        "base + hauteur",
        "base × base ÷ 2",
      ],
      answer: 0,
      explanation:
        "L'aire d'un triangle vaut base × hauteur ÷ 2, car un triangle est la moitié d'un parallélogramme de mêmes base et hauteur. Sans le « ÷ 2 », c'est la formule du parallélogramme.",
      hint: "Un triangle, c'est la moitié d'un parallélogramme.",
    },
    {
      id: "m5air-4",
      level: 1,
      type: "truefalse",
      question: "1 m² est égal à 100 cm².",
      answer: false,
      explanation:
        "Faux ! 1 m² = 10 000 cm². Pour les aires, chaque unité vaut 100 fois la suivante : 1 m² = 100 dm² et 1 dm² = 100 cm². Le piège vient des longueurs, où 1 m = 100 cm : les aires se décalent de 2 chiffres par unité, pas de 1.",
    },
    {
      id: "m5air-5",
      level: 2,
      type: "input",
      question:
        "Un parallélogramme a une base de 9 cm et une hauteur associée de 4 cm. Quelle est son aire, en cm² ?",
      answer: "36",
      explanation:
        "Aire du parallélogramme : base × hauteur = 9 × 4 = 36 cm². Pas de division par 2 ici : c'est le triangle qui divise par 2, pas le parallélogramme.",
      hint: "Pour le parallélogramme, base × hauteur suffit.",
    },
    {
      id: "m5air-6",
      level: 2,
      type: "input",
      question:
        "Un triangle a une base de 10 cm et une hauteur associée de 6 cm. Quelle est son aire, en cm² ?",
      answer: "30",
      explanation:
        "Aire du triangle : base × hauteur ÷ 2 = 10 × 6 ÷ 2 = 60 ÷ 2 = 30 cm². Piège classique : oublier de diviser par 2, ce qui donnerait l'aire d'un parallélogramme.",
      hint: "N'oublie pas la division par 2.",
    },
    {
      id: "m5air-7",
      level: 2,
      type: "qcm",
      question: "Quelle est l'aire EXACTE d'un disque de rayon 5 cm ?",
      choices: ["25 × π cm²", "10 × π cm²", "5 × π cm²", "50 × π cm²"],
      answer: 0,
      explanation:
        "Aire du disque : π × r² = π × 5² = 25 × π cm². Le piège 10 × π correspond au périmètre du cercle (2 × π × 5) : le périmètre utilise le rayon simple, l'aire utilise le rayon au carré.",
      hint: "Aire = π × rayon × rayon.",
    },
    {
      id: "m5air-8",
      level: 2,
      type: "truefalse",
      question:
        "Dans un triangle, on peut choisir n'importe quel côté comme base, à condition de prendre la hauteur associée à ce côté.",
      answer: true,
      explanation:
        "Vrai ! Les trois calculs base × hauteur ÷ 2 donnent exactement la même aire, à condition d'associer à chaque base SA hauteur (celle qui part du sommet opposé et tombe perpendiculairement). L'erreur serait de mélanger la base d'un côté avec la hauteur d'un autre.",
    },
    {
      id: "m5air-9",
      level: 3,
      type: "input",
      question: "Convertis 3,5 m² en cm².",
      answer: "35000",
      accept: ["35 000"],
      explanation:
        "1 m² = 10 000 cm², donc 3,5 m² = 3,5 × 10 000 = 35 000 cm². Piège classique : multiplier par 100 comme pour des longueurs, ce qui donnerait 350. Pour les aires, on décale de 2 chiffres PAR unité, et il y a deux unités entre m² et cm².",
      hint: "1 m² = 10 000 cm², pas 100 cm².",
    },
    {
      id: "m5air-10",
      level: 3,
      type: "input",
      question:
        "Une figure est formée d'un rectangle de 10 cm sur 6 cm, surmonté d'un triangle de base 10 cm et de hauteur 4 cm. Quelle est l'aire totale de la figure, en cm² ?",
      answer: "80",
      explanation:
        "On additionne les deux aires. Rectangle : 10 × 6 = 60 cm². Triangle : 10 × 4 ÷ 2 = 20 cm². Total : 60 + 20 = 80 cm². Piège classique : oublier le ÷ 2 du triangle, ce qui donnerait 100 cm².",
      hint: "Calcule chaque morceau séparément, puis additionne.",
    },
    {
      id: "m5air-11",
      level: 3,
      type: "qcm",
      question:
        "Un disque a un diamètre de 12 cm. Quelle est son aire approchée, en prenant π ≈ 3,14 ?",
      choices: ["≈ 113 cm²", "≈ 452 cm²", "≈ 37,7 cm²", "≈ 36 cm²"],
      answer: 0,
      explanation:
        "Le diamètre vaut 12 cm, donc le rayon vaut 12 ÷ 2 = 6 cm. Aire : π × 6² = 3,14 × 36 = 113,04, soit environ 113 cm². Le piège 452 cm² vient de l'utilisation du diamètre au lieu du rayon (3,14 × 144).",
      hint: "Commence par calculer le rayon à partir du diamètre.",
    },
    {
      id: "m5air-12",
      level: 3,
      type: "input",
      question:
        "Un jardinier sème du gazon sur une parcelle triangulaire de base 12 m et de hauteur associée 7,5 m. Quelle surface de gazon obtient-il, en m² ?",
      answer: "45",
      explanation:
        "Aire du triangle : base × hauteur ÷ 2 = 12 × 7,5 ÷ 2 = 90 ÷ 2 = 45 m². Astuce de calcul : 12 × 7,5 = 12 × 7 + 12 × 0,5 = 84 + 6 = 90.",
      hint: "Applique la formule du triangle avec les longueurs en mètres.",
    },
  ],
};
