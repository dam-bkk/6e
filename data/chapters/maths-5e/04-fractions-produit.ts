import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-fractions-produit",
  subject: "maths",
  grade: "5e",
  num: 4,
  title: "Fractions : multiplier",
  domain: "nombres",
  icon: "X",
  teaser: "Prendre les 2/3 des 3/4 d'un gâteau ? C'est une multiplication !",
  objectives: [
    "Je sais calculer la fraction d'une quantité",
    "Je sais multiplier deux fractions",
    "Je sais simplifier avant de calculer pour me faciliter la vie",
    "Je sais résoudre un problème avec des fractions de fractions",
  ],
  lesson: [
    {
      title: "La fraction d'une quantité",
      paragraphs: [
        "Prendre les 3/4 de 20, c'est multiplier : 3/4 × 20. Le mot « de » se traduit par le signe ×. C'est l'une des traductions les plus utiles des mathématiques.",
        "Pour calculer, la méthode la plus simple est souvent de diviser d'abord par le dénominateur, puis de multiplier par le numérateur : les 3/4 de 20, c'est 20 ÷ 4 = 5, puis 5 × 3 = 15.",
        "On peut aussi faire les opérations dans l'autre ordre (20 × 3 = 60, puis 60 ÷ 4 = 15) : le résultat est le même, choisis l'ordre qui donne les calculs les plus simples.",
      ],
      example: [
        "Les 2/3 de 45 : 45 ÷ 3 = 15, puis 15 × 2 = 30.",
        "Les 3/5 d'une classe de 25 élèves : 25 ÷ 5 = 5, puis 5 × 3 = 15 élèves.",
      ],
      tip: "« Les 3/4 DE 20 » : quand tu lis « de », pense « × ». Et commence par la division quand elle tombe juste, les nombres restent petits.",
    },
    {
      title: "Multiplier deux fractions",
      figure: "mx-fractions-aire",
      paragraphs: [
        "La règle est d'une simplicité désarmante : on multiplie les numérateurs entre eux, et les dénominateurs entre eux.",
        "Ainsi 2/5 × 3/7 = (2 × 3)/(5 × 7) = 6/35. Pas besoin de mettre au même dénominateur : cette contrainte ne concerne que l'addition et la soustraction !",
      ],
      example: [
        "1/2 × 1/3 = 1/6 : la moitié d'un tiers, c'est un sixième.",
        "2/5 × 3/7 = 6/35.",
        "3/4 × 5 = 15/4 (un entier s'écrit 5/1 si besoin).",
      ],
      tip: "Ne mélange pas les règles : pour ×, on multiplie haut avec haut et bas avec bas. Le même dénominateur, c'est uniquement pour + et −.",
    },
    {
      title: "Simplifier avant de calculer",
      paragraphs: [
        "Multiplier d'abord et simplifier ensuite mène vite à de gros nombres pénibles. Le bon réflexe : simplifier AVANT d'effectuer les produits.",
        "Dans un produit de fractions, on peut simplifier un numérateur avec n'importe quel dénominateur. Dans 3/4 × 8/9, le 3 se simplifie avec le 9, et le 8 avec le 4.",
        "Cette méthode donne directement un résultat simplifié, avec des calculs plus légers et moins d'erreurs.",
      ],
      example: [
        "3/4 × 8/9 = (3 × 8)/(4 × 9). On simplifie : 3 et 9 par 3, 8 et 4 par 4. Il reste (1 × 2)/(1 × 3) = 2/3.",
        "Sans simplifier : 24/36, qu'il faut ensuite réduire en 2/3. Même résultat, deux fois plus de travail.",
      ],
      tip: "Écris le produit sous la forme d'une seule fraction avec les deux multiplications en attente, PUIS barre les simplifications avant de calculer quoi que ce soit.",
    },
    {
      title: "Fraction de fraction",
      paragraphs: [
        "« Les 2/3 des 3/4 d'un gâteau » : on prend une fraction d'une quantité qui est elle-même une fraction. Là encore, « de » se traduit par × : cela vaut 2/3 × 3/4 du gâteau.",
        "Le calcul se simplifie élégamment : 2/3 × 3/4 = 6/12 = 1/2. Prendre les deux tiers des trois quarts, c'est finalement prendre la moitié !",
        "Ce type d'enchaînement est partout : soldes sur des soldes, part d'une part, portion d'une équipe…",
      ],
      example: [
        "Dans une classe de 28 élèves, les 4/7 sont des filles : 28 ÷ 7 = 4, puis 4 × 4 = 16 filles.",
        "La moitié de ces filles est demi-pensionnaire : 16 ÷ 2 = 8 filles demi-pensionnaires.",
        "En une fois : 1/2 × 4/7 × 28 = 2/7 × 28 = 8.",
      ],
      tip: "Un problème à étages se traite étage par étage : calcule la première fraction de la quantité, puis applique la seconde fraction au résultat.",
    },
  ],
  exercises: [
    {
      id: "m5frp-1",
      level: 1,
      type: "qcm",
      question: "Combien valent les 3/4 de 20 ?",
      choices: ["15", "12", "5", "60"],
      answer: 0,
      explanation:
        "On divise par le dénominateur puis on multiplie par le numérateur : 20 ÷ 4 = 5, puis 5 × 3 = 15. Les 3/4 de 20 valent 15.",
      hint: "Divise d'abord 20 par 4.",
    },
    {
      id: "m5frp-2",
      level: 1,
      type: "input",
      question: "Calcule : 1/2 × 1/3. (réponse sous la forme a/b)",
      answer: "1/6",
      explanation:
        "On multiplie les numérateurs entre eux (1 × 1 = 1) et les dénominateurs entre eux (2 × 3 = 6) : 1/2 × 1/3 = 1/6. Logique : la moitié d'un tiers de gâteau, c'est bien un sixième du gâteau.",
      hint: "Haut × haut, bas × bas.",
    },
    {
      id: "m5frp-3",
      level: 1,
      type: "truefalse",
      question: "Prendre la moitié d'un nombre, c'est le multiplier par 1/2.",
      answer: true,
      explanation:
        "Vrai ! La moitié de 30, c'est 1/2 × 30 = 15. Prendre une fraction d'une quantité, c'est toujours multiplier la quantité par cette fraction : le mot « de » se traduit par ×.",
    },
    {
      id: "m5frp-4",
      level: 1,
      type: "qcm",
      question: "Que vaut 2/5 × 3/7 ?",
      choices: ["6/35", "5/12", "6/12", "14/15"],
      answer: 0,
      explanation:
        "Numérateurs entre eux : 2 × 3 = 6. Dénominateurs entre eux : 5 × 7 = 35. Résultat : 6/35. Pas besoin de dénominateur commun pour une multiplication !",
      hint: "Aucune mise au même dénominateur n'est nécessaire ici.",
    },
    {
      id: "m5frp-5",
      level: 2,
      type: "input",
      question: "Calcule les 2/3 de 45.",
      answer: "30",
      explanation:
        "45 ÷ 3 = 15 (un tiers de 45), puis 15 × 2 = 30 (deux tiers). Les 2/3 de 45 valent 30. Commencer par la division garde les nombres petits.",
      hint: "Un tiers de 45 d'abord, puis le double.",
    },
    {
      id: "m5frp-6",
      level: 2,
      type: "input",
      question:
        "Calcule en simplifiant avant de multiplier : 3/4 × 8/9. (réponse simplifiée, sous la forme a/b)",
      answer: "2/3",
      accept: ["24/36"],
      explanation:
        "On écrit (3 × 8)/(4 × 9), puis on simplifie avant de calculer : 3 avec 9 (par 3), et 8 avec 4 (par 4). Il reste (1 × 2)/(1 × 3) = 2/3. Sans simplifier, on trouve 24/36, qu'il faut ensuite réduire : même réponse, plus d'efforts.",
      hint: "3 se simplifie avec 9, et 8 avec 4.",
    },
    {
      id: "m5frp-7",
      level: 2,
      type: "qcm",
      question:
        "Dans une classe de 25 élèves, les 3/5 portent des lunettes. Combien d'élèves portent des lunettes ?",
      choices: ["3", "5", "15", "10"],
      answer: 2,
      explanation:
        "Les 3/5 de 25 : 25 ÷ 5 = 5, puis 5 × 3 = 15. Quinze élèves portent des lunettes. Vérification rapide : 3/5 est un peu plus que la moitié, et 15 est un peu plus que la moitié de 25.",
      hint: "« Les 3/5 DE 25 » : traduis le « de » en multiplication.",
    },
    {
      id: "m5frp-8",
      level: 2,
      type: "truefalse",
      question: "2/3 × 3/2 = 1",
      answer: true,
      explanation:
        "Vrai ! (2 × 3)/(3 × 2) = 6/6 = 1. Quand on multiplie une fraction par sa fraction « renversée », tout se simplifie et on obtient 1.",
    },
    {
      id: "m5frp-9",
      level: 3,
      type: "input",
      question: "Calcule les 2/3 des 3/4 de 60.",
      answer: "30",
      explanation:
        "Étape 1 : les 3/4 de 60, soit 60 ÷ 4 = 15, puis 15 × 3 = 45. Étape 2 : les 2/3 de 45, soit 45 ÷ 3 = 15, puis 15 × 2 = 30. En une fois : 2/3 × 3/4 = 6/12 = 1/2, et la moitié de 60 est bien 30.",
      hint: "Calcule d'abord les 3/4 de 60, puis prends les 2/3 du résultat.",
    },
    {
      id: "m5frp-10",
      level: 3,
      type: "qcm",
      question: "Que vaut 7/10 × 5/14, une fois simplifié au maximum ?",
      choices: ["1/4", "1/2", "12/24", "5/7"],
      answer: 0,
      explanation:
        "On écrit (7 × 5)/(10 × 14) et on simplifie avant de calculer : 7 avec 14 (par 7), et 5 avec 10 (par 5). Il reste (1 × 1)/(2 × 2) = 1/4. Multiplier d'abord donnerait 35/140 : beaucoup plus lourd à réduire.",
      hint: "7 se simplifie avec 14, et 5 avec 10.",
    },
    {
      id: "m5frp-11",
      level: 3,
      type: "truefalse",
      question:
        "Prendre les 2/3 d'une quantité, puis les 3/4 du résultat, revient à prendre la moitié de la quantité de départ.",
      answer: true,
      explanation:
        "Vrai ! On enchaîne deux fractions : 3/4 × 2/3 = 6/12 = 1/2. Prendre les 2/3 puis les 3/4, c'est bien multiplier par 1/2, c'est-à-dire prendre la moitié. Les fractions de fractions se calculent en multipliant les fractions.",
      hint: "Traduis l'enchaînement par un produit de deux fractions.",
    },
    {
      id: "m5frp-12",
      level: 3,
      type: "input",
      question:
        "Dans une classe de 28 élèves, les 4/7 sont des filles. La moitié de ces filles mange à la cantine. Combien de filles mangent à la cantine ?",
      answer: "8",
      explanation:
        "Étape 1 : nombre de filles, les 4/7 de 28 : 28 ÷ 7 = 4, puis 4 × 4 = 16 filles. Étape 2 : la moitié de 16, soit 8. Huit filles mangent à la cantine. Piège : la seconde fraction s'applique aux 16 filles, pas aux 28 élèves de la classe !",
      hint: "Deux étapes : d'abord le nombre de filles, ensuite la moitié de ce nombre.",
    },
  ],
  videos: [
    { title: "Effectuer des multiplications de fractions (1) - Quatrième", youtubeId: "j27kXXrw3Xk", channel: "Yvan Monka" },
  ],
};
