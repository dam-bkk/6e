import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "perimetres-aires",
  num: 13,
  title: "Périmètres et aires",
  domain: "grandeurs",
  icon: "Grid3x3",
  teaser: "Le tour d'une figure, sa surface intérieure… et pourquoi il ne faut surtout pas les confondre.",
  objectives: [
    "Je sais calculer le périmètre d'un polygone, d'un carré et d'un rectangle",
    "Je sais calculer la longueur d'un cercle avec 2 × π × r",
    "Je sais calculer l'aire d'un carré, d'un rectangle et d'un triangle rectangle",
    "Je sais convertir des unités d'aire et je ne confonds jamais périmètre et aire",
  ],
  lesson: [
    {
      title: "Le périmètre : la longueur du tour",
      paragraphs: [
        "Le périmètre d'une figure, c'est la longueur de son tour complet. Imagine une fourmi qui fait le tour de la figure : la distance qu'elle parcourt, c'est le périmètre. Il se mesure en unités de longueur : mm, cm, m, km.",
        "Pour un polygone quelconque, on additionne les longueurs de tous les côtés. Pour certaines figures, il existe des formules plus rapides : périmètre du carré = 4 × c (où c est le côté), périmètre du rectangle = 2 × (L + l) (longueur plus largeur, le tout multiplié par 2).",
      ],
      example: [
        "Carré de côté 6 cm : P = 4 × 6 = 24 cm.",
        "Rectangle de longueur 8 cm et de largeur 5 cm : P = 2 × (8 + 5) = 2 × 13 = 26 cm.",
      ],
      tip: "Avant d'utiliser une formule, vérifie que toutes les longueurs sont dans la même unité. On n'additionne jamais des cm avec des m !",
    },
    {
      title: "La longueur du cercle",
      paragraphs: [
        "Le périmètre d'un cercle s'appelle aussi sa longueur ou sa circonférence. On le calcule avec la formule : L = 2 × π × r, où r est le rayon du cercle.",
        "Le nombre π (« pi ») est un nombre étonnant : ses décimales ne s'arrêtent jamais ! En 6e, on utilise la valeur approchée π ≈ 3,14. Comme le diamètre vaut deux rayons (d = 2 × r), on peut aussi écrire L = π × d.",
      ],
      example: [
        "Cercle de rayon 5 cm : L = 2 × 3,14 × 5 = 31,4 cm.",
        "Cercle de diamètre 10 cm : L = 3,14 × 10 = 31,4 cm. C'est le même cercle !",
      ],
      tip: "Retiens l'ordre de grandeur : la longueur d'un cercle vaut « un peu plus de 3 fois » son diamètre. Si ton résultat est très loin de ça, cherche l'erreur.",
    },
    {
      title: "L'aire : la surface intérieure",
      paragraphs: [
        "L'aire d'une figure, c'est la mesure de sa surface intérieure : tout ce qu'on pourrait colorier. Elle se mesure en unités d'aire : cm², m²… Le petit ² rappelle qu'on mesure une surface, pas une longueur.",
        "Sur un quadrillage, l'aire se trouve en comptant les carreaux : si chaque carreau mesure 1 cm², une figure qui recouvre 12 carreaux entiers a une aire de 12 cm². Quand des carreaux sont coupés en deux, on peut assembler deux moitiés pour former un carreau entier.",
      ],
      example: [
        "Une figure recouvre 9 carreaux entiers et 6 demi-carreaux.",
        "6 demi-carreaux = 3 carreaux entiers.",
        "Aire totale : 9 + 3 = 12 carreaux, soit 12 cm² si le carreau vaut 1 cm².",
      ],
      tip: "Périmètre = le tour (une longueur, en cm). Aire = l'intérieur (une surface, en cm²). Deux mots, deux idées, deux unités !",
      figure: "aire-quadrillage",
    },
    {
      title: "Les formules d'aire",
      paragraphs: [
        "Pour le carré et le rectangle, pas besoin de compter les carreaux : aire du carré = c × c, aire du rectangle = L × l. Par exemple, un rectangle de 7 cm sur 4 cm contient bien 7 × 4 = 28 carreaux de 1 cm².",
        "Un triangle rectangle, c'est exactement la moitié d'un rectangle coupé le long de sa diagonale. Son aire est donc : (côté × côté) ÷ 2, en prenant les deux côtés de l'angle droit.",
        "En découverte : l'aire d'un disque se calcule avec π × r × r. Tu l'étudieras en détail plus tard, mais tu peux déjà l'utiliser avec π ≈ 3,14.",
      ],
      example: [
        "Carré de côté 5 cm : A = 5 × 5 = 25 cm².",
        "Rectangle de 7 cm sur 4 cm : A = 7 × 4 = 28 cm².",
        "Triangle rectangle dont les côtés de l'angle droit mesurent 6 cm et 8 cm : A = (6 × 8) ÷ 2 = 24 cm².",
      ],
      tip: "Pour le triangle rectangle, dessine mentalement le rectangle complet, puis coupe-le en deux : c'est ça, le « ÷ 2 » de la formule.",
    },
    {
      title: "Unités d'aire et le grand piège",
      paragraphs: [
        "Attention aux conversions d'aires : 1 m² = 10 000 cm², et non 100 ! En effet, un carré de 1 m de côté mesure 100 cm de côté, donc son aire vaut 100 × 100 = 10 000 cm². Pour les aires, chaque saut d'unité multiplie ou divise par 100.",
        "Et voici LE grand piège du chapitre : le périmètre et l'aire sont indépendants. Deux figures peuvent avoir le même périmètre et des aires différentes ! Agrandir l'un ne fait pas forcément grandir l'autre de la même façon.",
      ],
      example: [
        "Un rectangle de 5 cm sur 3 cm : P = 16 cm et A = 15 cm².",
        "Un rectangle de 7 cm sur 1 cm : P = 16 cm aussi… mais A = 7 cm² seulement !",
        "Même périmètre, aires très différentes.",
      ],
      tip: "1 m² = 100 cm × 100 cm = 10 000 cm². Pense au carré de 1 m de côté dessiné sur du papier à petits carreaux : il en contient énormément !",
    },
  ],
  exercises: [
    {
      id: "per-1",
      level: 1,
      type: "qcm",
      question: "Quel est le périmètre d'un carré de côté 6 cm ?",
      choices: ["12 cm", "18 cm", "24 cm", "36 cm"],
      answer: 2,
      explanation:
        "Le périmètre du carré, c'est 4 fois le côté : P = 4 × 6 = 24 cm. La réponse 36 cm est un piège : 6 × 6 = 36, c'est l'aire (en cm²), pas le périmètre !",
      hint: "Un carré a 4 côtés de la même longueur.",
    },
    {
      id: "per-2",
      level: 1,
      type: "input",
      question:
        "Un rectangle a une longueur de 8 cm et une largeur de 5 cm. Calcule son périmètre. Réponse en cm.",
      answer: "26",
      explanation:
        "P = 2 × (L + l) = 2 × (8 + 5) = 2 × 13 = 26 cm. On additionne longueur et largeur, puis on multiplie par 2 car chaque dimension apparaît deux fois dans le tour. Ne pas oublier le « × 2 » : 8 + 5 = 13 n'est que la moitié du tour.",
      hint: "P = 2 × (L + l).",
    },
    {
      id: "per-3",
      level: 1,
      type: "qcm",
      question: "Quelle est l'aire d'un rectangle de 7 cm de longueur et 4 cm de largeur ?",
      choices: ["11 cm²", "22 cm²", "28 cm²", "28 cm"],
      answer: 2,
      explanation:
        "A = L × l = 7 × 4 = 28 cm². Attention aux pièges : 22 cm² correspond au périmètre (2 × (7 + 4)), et « 28 cm » a la bonne valeur mais la mauvaise unité — une aire se mesure en cm², pas en cm.",
      hint: "L'aire d'un rectangle, c'est longueur × largeur.",
    },
    {
      id: "per-4",
      level: 1,
      type: "truefalse",
      question: "L'aire d'un carré de côté 5 cm est 20 cm².",
      answer: false,
      explanation:
        "Faux ! L'aire du carré, c'est c × c = 5 × 5 = 25 cm². Le nombre 20, c'est 4 × 5 : le périmètre. Confondre les deux formules est l'erreur la plus fréquente du chapitre.",
    },
    {
      id: "per-5",
      level: 2,
      type: "input",
      question:
        "Calcule la longueur d'un cercle de rayon 5 cm, en prenant π ≈ 3,14. Réponse en cm.",
      answer: "31,4",
      explanation:
        "L = 2 × π × r = 2 × 3,14 × 5 = 31,4 cm. Astuce de calcul : 2 × 5 = 10, puis 3,14 × 10 = 31,4. On vérifie l'ordre de grandeur : le diamètre vaut 10 cm, et le tour vaut bien « un peu plus de 3 fois » le diamètre.",
      hint: "L = 2 × π × r. Commence par calculer 2 × 5.",
    },
    {
      id: "per-6",
      level: 2,
      type: "input",
      question:
        "Un triangle rectangle a ses deux côtés de l'angle droit qui mesurent 6 cm et 8 cm. Calcule son aire. Réponse en cm².",
      answer: "24",
      explanation:
        "Un triangle rectangle est la moitié d'un rectangle : A = (6 × 8) ÷ 2 = 48 ÷ 2 = 24 cm². Le piège classique est d'oublier le « ÷ 2 » et de répondre 48 : ce serait l'aire du rectangle entier.",
      hint: "C'est la moitié de l'aire d'un rectangle de 6 cm sur 8 cm.",
    },
    {
      id: "per-7",
      level: 2,
      type: "qcm",
      question: "Combien de cm² y a-t-il dans 3 m² ?",
      choices: ["300 cm²", "3 000 cm²", "30 000 cm²", "300 000 cm²"],
      answer: 2,
      explanation:
        "1 m² = 10 000 cm² (car 1 m = 100 cm, et 100 × 100 = 10 000). Donc 3 m² = 3 × 10 000 = 30 000 cm². Le grand piège : utiliser × 100 comme pour les longueurs. Pour les aires, chaque saut d'unité vaut × 100, et de m² à cm² il y a deux sauts.",
      hint: "Un carré de 1 m de côté mesure 100 cm sur 100 cm.",
    },
    {
      id: "per-8",
      level: 2,
      type: "truefalse",
      question: "Deux figures qui ont le même périmètre ont forcément la même aire.",
      answer: false,
      explanation:
        "Faux ! Périmètre et aire sont indépendants. Exemple : un rectangle de 5 cm sur 3 cm et un rectangle de 7 cm sur 1 cm ont tous les deux un périmètre de 16 cm, mais leurs aires valent 15 cm² et 7 cm². Même tour, surfaces très différentes.",
      hint: "Compare un rectangle de 5 × 3 et un rectangle de 7 × 1.",
    },
    {
      id: "per-9",
      level: 3,
      type: "input",
      question:
        "Un champ rectangulaire mesure 25 m de long et 14 m de large. On veut le clôturer entièrement, sauf un portail de 3 m de large. Quelle longueur de clôture faut-il acheter ? Réponse en m.",
      answer: "75",
      explanation:
        "On calcule d'abord le périmètre du champ : P = 2 × (25 + 14) = 2 × 39 = 78 m. Puis on retire la largeur du portail, qui ne sera pas clôturé : 78 − 3 = 75 m. Erreur fréquente : oublier de retirer le portail, ou ne compter qu'une longueur et une largeur.",
      hint: "Calcule le tour complet, puis enlève le portail.",
    },
    {
      id: "per-10",
      level: 3,
      type: "qcm",
      question:
        "On veut carreler le sol d'une pièce rectangulaire de 4 m sur 3 m. Le carrelage coûte 15 € le m². Combien va coûter le carrelage ?",
      choices: ["105 €", "180 €", "210 €", "60 €"],
      answer: 1,
      explanation:
        "Le prix dépend de la surface à couvrir, donc de l'aire : A = 4 × 3 = 12 m². Coût : 12 × 15 = 180 €. Le piège 210 € vient du périmètre (14 m × 15 €) : mais on ne carrelle pas le tour de la pièce, on carrelle sa surface !",
      hint: "Carreler un sol, c'est couvrir une surface : périmètre ou aire ?",
    },
    {
      id: "per-11",
      level: 3,
      type: "input",
      question:
        "Dans une feuille rectangulaire de 10 cm sur 6 cm, on découpe et on retire un carré de 2 cm de côté dans un coin. Quelle est l'aire de la feuille restante ? Réponse en cm².",
      answer: "56",
      explanation:
        "Aire de la feuille entière : 10 × 6 = 60 cm². Aire du carré retiré : 2 × 2 = 4 cm². Aire restante : 60 − 4 = 56 cm². Remarque étonnante : l'aire a diminué, mais le périmètre de la feuille découpée, lui, n'a pas changé — encore une preuve que périmètre et aire sont indépendants !",
      hint: "Aire du grand rectangle moins aire du petit carré.",
    },
    {
      id: "per-12",
      level: 3,
      type: "truefalse",
      question: "Quand on double le côté d'un carré, son aire double aussi.",
      answer: false,
      explanation:
        "Faux ! L'aire est multipliée par 4, pas par 2. Vérifie : un carré de côté 3 cm a une aire de 9 cm² ; un carré de côté 6 cm a une aire de 36 cm², et 36 = 4 × 9. Comme l'aire vaut c × c, doubler c revient à multiplier l'aire par 2 × 2 = 4. Seul le périmètre double.",
      hint: "Compare un carré de côté 3 cm et un carré de côté 6 cm.",
    },
  ],
  videos: [
    { title: "Calculer le périmètre d'une figure - Sixième", youtubeId: "w7n638xdT6E", channel: "Yvan Monka" },
    { title: "Calculer l'aire d'une figure - Sixième", youtubeId: "-HKxkx7x2gU", channel: "Yvan Monka" },
  ],
};
