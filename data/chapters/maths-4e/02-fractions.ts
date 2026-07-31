import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-fractions",
  subject: "maths",
  grade: "4e",
  num: 2,
  title: "Les quatre opérations sur les fractions",
  domain: "nombres",
  icon: "PieChart",
  teaser: "Additionner, soustraire, multiplier, diviser : les fractions n'auront plus de secret.",
  objectives: [
    "Je sais additionner et soustraire deux fractions de dénominateurs quelconques",
    "Je sais multiplier deux fractions",
    "Je connais l'inverse d'une fraction et je sais diviser par une fraction",
    "Je sais enchaîner des opérations sur les fractions, y compris avec des relatifs",
  ],
  lesson: [
    {
      title: "Additionner et soustraire des fractions",
      paragraphs: [
        "Pour additionner ou soustraire deux fractions, elles doivent avoir le même dénominateur : on additionne alors les numérateurs et on garde le dénominateur.",
        "En 5e, l'un des dénominateurs était un multiple de l'autre. En 4e, les dénominateurs sont quelconques : on cherche un dénominateur commun, par exemple en multipliant les deux dénominateurs, ou mieux, en prenant leur plus petit multiple commun.",
        "N'oublie pas de simplifier le résultat quand c'est possible.",
      ],
      example: [
        "3/4 + 5/6 : un multiple commun de 4 et 6 est 12. Donc 3/4 = 9/12 et 5/6 = 10/12, d'où 9/12 + 10/12 = 19/12.",
        "7/2 − 2/3 = 21/6 − 4/6 = 17/6.",
        "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 (résultat simplifié).",
      ],
      tip: "Jamais d'addition des dénominateurs ! On les rend identiques d'abord, et ensuite seuls les numérateurs s'additionnent.",
    },
    {
      title: "Multiplier des fractions",
      paragraphs: [
        "La multiplication est l'opération la plus simple : on multiplie les numérateurs entre eux et les dénominateurs entre eux. Pas besoin de dénominateur commun !",
        "Avant de multiplier, regarde si tu peux simplifier « en croix » : un numérateur avec un dénominateur. Les calculs deviennent beaucoup plus légers.",
        "Prendre une fraction d'une quantité, c'est multiplier : les 2/3 de 15 se calculent par 2/3 × 15 = 10.",
      ],
      example: [
        "2/5 × 3/7 = (2 × 3)/(5 × 7) = 6/35.",
        "3/8 × 4/9 : on simplifie avant de calculer. 4 et 8 se simplifient par 4, 3 et 9 par 3. Il reste 1/2 × 1/3 = 1/6.",
        "Les 3/4 de 20 € : 3/4 × 20 = 60/4 = 15 €.",
      ],
      tip: "Simplifie AVANT de multiplier : des petits nombres se manipulent sans erreur, des grands nombres cachent les simplifications.",
    },
    {
      title: "Diviser par une fraction : l'inverse",
      paragraphs: [
        "Deux nombres sont inverses l'un de l'autre lorsque leur produit vaut 1. L'inverse de la fraction a/b est la fraction b/a (avec a et b non nuls) : il suffit d'échanger numérateur et dénominateur. L'inverse de 5 est 1/5.",
        "Diviser par une fraction, c'est multiplier par son inverse. La division se transforme donc toujours en multiplication.",
        "Attention à ne pas confondre inverse et opposé : l'opposé de 3/4 est −3/4 (somme nulle), son inverse est 4/3 (produit égal à 1).",
      ],
      example: [
        "L'inverse de 3/4 est 4/3, car 3/4 × 4/3 = 12/12 = 1.",
        "2/3 ÷ 5/7 = 2/3 × 7/5 = 14/15.",
        "Diviser par 1/2, c'est multiplier par 2 : 6 ÷ 1/2 = 12. Logique : combien de demi-parts dans 6 parts ? Douze !",
      ],
      tip: "« Diviser, c'est multiplier par l'inverse » : retourne la deuxième fraction et transforme le ÷ en ×.",
    },
    {
      title: "Enchaîner les calculs, avec des relatifs",
      paragraphs: [
        "Les priorités de calcul restent les mêmes qu'avec les entiers : parenthèses d'abord, puis multiplications et divisions, puis additions et soustractions.",
        "Les fractions peuvent être négatives : la règle des signes s'applique alors comme pour tous les relatifs. On détermine le signe du résultat, puis on calcule avec les fractions positives.",
        "Un signe − peut se placer devant la fraction, au numérateur ou au dénominateur : −3/5, (−3)/5 et 3/(−5) désignent le même nombre.",
      ],
      example: [
        "1/2 + 1/3 × 3/4 : la multiplication d'abord, 1/3 × 3/4 = 1/4, puis 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
        "(−3/5) × 10/9 : signes contraires → négatif. 3/5 × 10/9 = 30/45 = 2/3. Résultat : −2/3.",
        "(−2/7) ÷ (−4/21) = 2/7 × 21/4 = 42/28 = 3/2 (même signe → positif).",
      ],
      tip: "Traite le signe à part : décide du signe du résultat avec la règle des signes, puis calcule tranquillement avec des fractions positives.",
    },
  ],
  exercises: [
    {
      id: "m4fra-1",
      level: 1,
      type: "qcm",
      question: "Que vaut 1/3 + 1/6 ?",
      choices: ["1/2", "2/9", "1/9", "2/3"],
      answer: 0,
      explanation:
        "On met au même dénominateur : 1/3 = 2/6. Donc 2/6 + 1/6 = 3/6, qui se simplifie en 1/2. Piège : 2/9 viendrait d'une addition des numérateurs ET des dénominateurs, ce qui est interdit.",
      hint: "Transforme 1/3 en sixièmes avant d'additionner.",
    },
    {
      id: "m4fra-2",
      level: 1,
      type: "input",
      question: "Calcule : 2/5 × 3/7 (donne le résultat en fraction)",
      answer: "6/35",
      accept: [],
      explanation:
        "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux : (2 × 3)/(5 × 7) = 6/35. Pas de dénominateur commun à chercher pour une multiplication !",
      hint: "Numérateur × numérateur, dénominateur × dénominateur.",
    },
    {
      id: "m4fra-3",
      level: 1,
      type: "truefalse",
      question: "Pour additionner deux fractions, on additionne les numérateurs entre eux et les dénominateurs entre eux.",
      answer: false,
      explanation:
        "Faux ! Cette règle n'existe pas. Il faut d'abord mettre les fractions au même dénominateur, puis additionner uniquement les numérateurs. Exemple : 1/2 + 1/2 vaut 1, et sûrement pas 2/4 = 1/2. Additionner les dénominateurs mène toujours à un résultat absurde.",
    },
    {
      id: "m4fra-4",
      level: 1,
      type: "qcm",
      question: "Quel est l'inverse de 3/4 ?",
      choices: ["4/3", "−3/4", "3/4", "1/4"],
      answer: 0,
      explanation:
        "L'inverse d'une fraction s'obtient en échangeant numérateur et dénominateur : l'inverse de 3/4 est 4/3. Vérification : 3/4 × 4/3 = 12/12 = 1. Piège : −3/4 est l'opposé de 3/4, pas son inverse.",
      hint: "Deux nombres inverses ont un produit égal à 1.",
    },
    {
      id: "m4fra-5",
      level: 2,
      type: "input",
      question: "Calcule : 3/4 + 5/6 (donne le résultat en fraction)",
      answer: "19/12",
      accept: [],
      explanation:
        "Un multiple commun de 4 et 6 est 12. On transforme : 3/4 = 9/12 et 5/6 = 10/12. Puis on additionne les numérateurs : 9/12 + 10/12 = 19/12. Piège : 24 fonctionne aussi comme dénominateur commun, mais 12 (le plus petit) donne des calculs plus simples.",
      hint: "Cherche le plus petit multiple commun de 4 et 6.",
    },
    {
      id: "m4fra-6",
      level: 2,
      type: "input",
      question: "Calcule : 7/2 − 2/3 (donne le résultat en fraction)",
      answer: "17/6",
      accept: [],
      explanation:
        "Dénominateur commun de 2 et 3 : 6. On transforme : 7/2 = 21/6 et 2/3 = 4/6. Puis 21/6 − 4/6 = 17/6. Vérifie toujours que la fraction obtenue ne se simplifie pas : 17 est premier, donc 17/6 est irréductible.",
      hint: "Mets les deux fractions en sixièmes.",
    },
    {
      id: "m4fra-7",
      level: 2,
      type: "qcm",
      question: "Que vaut 2/3 ÷ 5/7 ?",
      choices: ["14/15", "10/21", "35/6", "6/35"],
      answer: 0,
      explanation:
        "Diviser par 5/7, c'est multiplier par son inverse 7/5 : 2/3 × 7/5 = (2 × 7)/(3 × 5) = 14/15. Piège : 10/21 correspond à une multiplication par 5/7 sans avoir retourné la fraction.",
      hint: "Transforme la division en multiplication par l'inverse.",
    },
    {
      id: "m4fra-8",
      level: 2,
      type: "truefalse",
      question: "Diviser par 1/2 revient à multiplier par 2.",
      answer: true,
      explanation:
        "Vrai ! L'inverse de 1/2 est 2/1 = 2, et diviser, c'est multiplier par l'inverse. Concrètement : 6 ÷ 1/2 = 12, car il y a 12 demi-parts dans 6 parts entières. Diviser par un nombre plus petit que 1 donne un résultat plus GRAND que le nombre de départ.",
    },
    {
      id: "m4fra-9",
      level: 3,
      type: "input",
      question: "Calcule et simplifie : (−3/5) × 10/9 (donne le résultat en fraction irréductible)",
      answer: "-2/3",
      accept: ["−2/3"],
      explanation:
        "Étape 1 : le signe. Signes contraires → produit négatif. Étape 2 : la valeur, en simplifiant avant de multiplier : 3 et 9 se simplifient par 3, 10 et 5 par 5. Il reste 1/1 × 2/3 = 2/3. Résultat : −2/3. Piège : sans simplification, on obtient 30/45, qu'il faut encore réduire.",
      hint: "Détermine le signe, puis simplifie 3 avec 9 et 10 avec 5 avant de multiplier.",
    },
    {
      id: "m4fra-10",
      level: 3,
      type: "input",
      question: "Calcule : 1/2 + 1/3 × 3/4 (donne le résultat en fraction)",
      answer: "3/4",
      accept: [],
      explanation:
        "Priorité à la multiplication : 1/3 × 3/4 = 3/12 = 1/4. Puis l'addition : 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Piège classique : commencer par 1/2 + 1/3 est faux, la multiplication passe avant l'addition, même avec des fractions.",
      hint: "Quelle opération est prioritaire ?",
    },
    {
      id: "m4fra-11",
      level: 3,
      type: "qcm",
      question: "Que vaut (−2/7) ÷ (−4/21) ?",
      choices: ["3/2", "−3/2", "8/147", "2/3"],
      answer: 0,
      explanation:
        "Le signe d'abord : deux nombres négatifs, même signe → quotient positif. Puis on multiplie par l'inverse : 2/7 × 21/4. On simplifie : 21 et 7 par 7, 2 et 4 par 2. Il reste 3/2. Piège : oublier de retourner la deuxième fraction donne 8/147.",
      hint: "Même signe → résultat positif. Puis multiplie 2/7 par l'inverse de 4/21.",
    },
    {
      id: "m4fra-12",
      level: 3,
      type: "input",
      question:
        "Pour un goûter, Léa mange 1/4 d'une tarte et son frère en mange 2/5. Quelle fraction de la tarte reste-t-il ? (donne le résultat en fraction)",
      answer: "7/20",
      accept: [],
      explanation:
        "La tarte entière représente 1, soit 20/20. Dénominateur commun de 4 et 5 : 20. Parts mangées : 1/4 = 5/20 et 2/5 = 8/20, soit 13/20 en tout. Reste : 20/20 − 13/20 = 7/20. Piège : ne pas oublier que « la tarte entière » se traduit par la fraction 20/20.",
      hint: "Écris la tarte entière comme une fraction de dénominateur 20, puis soustrais les deux parts.",
    },
  ],
};
