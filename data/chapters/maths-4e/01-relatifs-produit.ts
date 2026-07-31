import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-relatifs-produit",
  subject: "maths",
  grade: "4e",
  num: 1,
  title: "Multiplier et diviser des relatifs",
  domain: "nombres",
  icon: "Thermometer",
  teaser: "La règle des signes : deux moins qui font un plus, et tout devient logique.",
  objectives: [
    "Je connais la règle des signes pour le produit et le quotient de deux relatifs",
    "Je sais déterminer le signe d'un produit de plusieurs facteurs",
    "Je sais calculer un produit ou un quotient de nombres relatifs",
    "Je sais enchaîner les opérations avec des relatifs en respectant les priorités",
  ],
  lesson: [
    {
      title: "La règle des signes pour le produit",
      paragraphs: [
        "En 5e, tu as appris à additionner et soustraire des relatifs. Cette année, on les multiplie. La règle est simple : le produit de deux nombres de même signe est positif, le produit de deux nombres de signes contraires est négatif.",
        "Pour la partie numérique, rien ne change : on multiplie les distances à zéro comme d'habitude. Seul le signe demande une réflexion supplémentaire.",
        "Pourquoi « moins par moins donne plus » ? Pense à une suite logique : 3 × (−2) = −6, puis 2 × (−2) = −4, puis 1 × (−2) = −2, puis 0 × (−2) = 0… À chaque étape le résultat augmente de 2. En continuant : (−1) × (−2) = 2. Les mathématiques restent cohérentes.",
      ],
      example: [
        "(−4) × (−7) = 28 (même signe : résultat positif).",
        "6 × (−5) = −30 (signes contraires : résultat négatif).",
        "(−9) × 0 = 0 : multiplier par zéro donne toujours zéro, quel que soit le signe.",
      ],
      tip: "Retiens la comptine des signes : « plus par plus, plus ; moins par moins, plus ; plus par moins, moins ». Même signe → +, signes contraires → −.",
    },
    {
      title: "La règle des signes pour le quotient",
      paragraphs: [
        "La division suit exactement la même règle que la multiplication : le quotient de deux nombres de même signe est positif, le quotient de deux nombres de signes contraires est négatif.",
        "C'est logique, car la division est l'opération inverse de la multiplication : dire que (−20) ÷ 4 = −5, c'est dire que 4 × (−5) = −20.",
        "Attention : on ne divise jamais par zéro, cette opération n'a pas de sens.",
      ],
      example: [
        "(−36) ÷ (−9) = 4 (même signe : résultat positif).",
        "56 ÷ (−8) = −7 (signes contraires : résultat négatif).",
        "(−4,5) ÷ 3 = −1,5.",
      ],
      tip: "Une seule règle des signes à mémoriser : elle sert pour la multiplication ET pour la division.",
    },
    {
      title: "Produit de plusieurs facteurs",
      paragraphs: [
        "Pour un produit de plusieurs facteurs, inutile de calculer étape par étape pour connaître le signe : compte le nombre de facteurs négatifs.",
        "Si ce nombre est pair (0, 2, 4…), le produit est positif. S'il est impair (1, 3, 5…), le produit est négatif. En effet, les négatifs s'annulent deux par deux.",
        "Méthode efficace : détermine d'abord le signe, puis multiplie les distances à zéro, dans l'ordre qui t'arrange (la multiplication le permet).",
      ],
      example: [
        "(−2) × (−3) × (−5) : trois facteurs négatifs (impair) → signe −. Valeur : 2 × 3 × 5 = 30. Résultat : −30.",
        "(−1) × (−4) × 2 × (−5) × (−10) : quatre facteurs négatifs (pair) → signe +. Résultat : 400.",
        "Si un seul facteur vaut 0, le produit vaut 0, peu importe le reste.",
      ],
      tip: "Compte les signes − : nombre pair → résultat positif, nombre impair → résultat négatif. Ensuite seulement, calcule la valeur.",
    },
    {
      title: "Enchaîner les opérations avec des relatifs",
      paragraphs: [
        "Les priorités de calcul apprises en 5e restent valables avec les relatifs : on calcule d'abord les parenthèses, puis les multiplications et divisions, et enfin les additions et soustractions.",
        "Le danger, c'est de mélanger la règle des signes du produit avec les règles de l'addition. Elles sont différentes ! Par exemple (−3) + (−5) = −8 mais (−3) × (−5) = 15.",
        "Méthode : repère d'abord les multiplications et divisions, calcule-les avec la règle des signes, puis termine par les additions et soustractions.",
      ],
      example: [
        "(−4) + 3 × (−2) = (−4) + (−6) = −10 : la multiplication d'abord !",
        "12 − (−3) × 4 = 12 − (−12) = 12 + 12 = 24.",
        "(5 − 9) × (−2) = (−4) × (−2) = 8 : ici la parenthèse passe avant tout.",
      ],
      tip: "Souligne les multiplications et divisions avant de commencer : tu verras d'un coup d'œil ce qui se calcule en premier.",
    },
  ],
  exercises: [
    {
      id: "m4rel-1",
      level: 1,
      type: "qcm",
      question: "Que vaut (−3) × (−7) ?",
      choices: ["21", "−21", "−10", "10"],
      answer: 0,
      explanation:
        "Les deux facteurs ont le même signe (−), donc le produit est positif. Partie numérique : 3 × 7 = 21. Résultat : 21. Piège : −10 et 10 viendraient d'une addition, or ici c'est une multiplication.",
      hint: "Même signe → produit positif. Puis multiplie 3 par 7.",
    },
    {
      id: "m4rel-2",
      level: 1,
      type: "input",
      question: "Calcule : (−6) × 5",
      answer: "-30",
      accept: ["−30"],
      explanation:
        "Les signes sont contraires (− et +), donc le produit est négatif. Partie numérique : 6 × 5 = 30. Résultat : −30. Piège : n'additionne pas ! (−6) + 5 vaudrait −1, mais ici on multiplie.",
      hint: "Signes contraires → produit négatif.",
    },
    {
      id: "m4rel-3",
      level: 1,
      type: "truefalse",
      question: "Le produit de deux nombres négatifs est négatif.",
      answer: false,
      explanation:
        "Faux ! Deux nombres négatifs ont le même signe, donc leur produit est positif : (−4) × (−5) = 20. C'est la fameuse règle « moins par moins donne plus ». Ne confonds pas avec l'addition : (−4) + (−5) = −9 est bien négatif.",
    },
    {
      id: "m4rel-4",
      level: 1,
      type: "qcm",
      question: "Que vaut (−20) ÷ 4 ?",
      choices: ["−5", "5", "−16", "16"],
      answer: 0,
      explanation:
        "La règle des signes s'applique aussi au quotient : signes contraires → résultat négatif. Partie numérique : 20 ÷ 4 = 5. Résultat : −5. Vérification : 4 × (−5) = −20.",
      hint: "La règle des signes est la même pour la division que pour la multiplication.",
    },
    {
      id: "m4rel-5",
      level: 2,
      type: "input",
      question: "Calcule : (−8) × (−2,5)",
      answer: "20",
      accept: ["+20"],
      explanation:
        "Même signe (deux facteurs négatifs) → produit positif. Partie numérique : 8 × 2,5 = 20. Résultat : 20. Astuce de calcul : 8 × 2,5 = 8 × 2 + 8 × 0,5 = 16 + 4 = 20.",
      hint: "Détermine d'abord le signe, puis calcule 8 × 2,5.",
    },
    {
      id: "m4rel-6",
      level: 2,
      type: "input",
      question: "Calcule : 45 ÷ (−9)",
      answer: "-5",
      accept: ["−5"],
      explanation:
        "Signes contraires (+ et −) → quotient négatif. Partie numérique : 45 ÷ 9 = 5. Résultat : −5. Vérification : (−9) × (−5) = 45.",
      hint: "45 est positif, −9 est négatif : quel est le signe du quotient ?",
    },
    {
      id: "m4rel-7",
      level: 2,
      type: "qcm",
      question: "Que vaut (−2) × (−3) × (−5) ?",
      choices: ["−30", "30", "−10", "10"],
      answer: 0,
      explanation:
        "On compte les facteurs négatifs : il y en a trois, un nombre impair, donc le produit est négatif. Partie numérique : 2 × 3 × 5 = 30. Résultat : −30. Piège : ne t'arrête pas au premier « moins par moins donne plus », il reste un troisième signe − !",
      hint: "Compte le nombre de facteurs négatifs : pair ou impair ?",
    },
    {
      id: "m4rel-8",
      level: 2,
      type: "truefalse",
      question: "Un produit de quatre facteurs tous négatifs est positif.",
      answer: true,
      explanation:
        "Vrai ! Quatre est un nombre pair : les signes − s'annulent deux par deux. Par exemple (−1) × (−2) × (−3) × (−4) = 2 × 12 = 24. Règle générale : nombre pair de facteurs négatifs → produit positif, nombre impair → produit négatif.",
    },
    {
      id: "m4rel-9",
      level: 3,
      type: "input",
      question: "Calcule : (−2) × (−1) × (−3) × 5",
      answer: "-30",
      accept: ["−30"],
      explanation:
        "Étape 1 : le signe. Trois facteurs négatifs (nombre impair) → produit négatif. Étape 2 : la valeur. 2 × 1 × 3 × 5 = 30. Résultat : −30. Piège : le facteur 5 est positif, il ne compte pas dans le décompte des signes −.",
      hint: "Compte d'abord les facteurs négatifs, puis multiplie les distances à zéro.",
    },
    {
      id: "m4rel-10",
      level: 3,
      type: "input",
      question: "Calcule : (−4) + 3 × (−2)",
      answer: "-10",
      accept: ["−10"],
      explanation:
        "Priorité à la multiplication : 3 × (−2) = −6. Puis l'addition : (−4) + (−6) = −10. Piège classique : calculer d'abord (−4) + 3 = −1 puis (−1) × (−2) = 2 est faux, car la multiplication passe avant l'addition.",
      hint: "Quelle opération dois-tu effectuer en premier ?",
    },
    {
      id: "m4rel-11",
      level: 3,
      type: "qcm",
      question: "Que vaut 12 − (−3) × 4 ?",
      choices: ["24", "0", "−24", "−36"],
      answer: 0,
      explanation:
        "Priorité à la multiplication : (−3) × 4 = −12. Il reste 12 − (−12), et soustraire un nombre, c'est ajouter son opposé : 12 + 12 = 24. Double piège ici : la priorité de la multiplication ET la soustraction d'un négatif.",
      hint: "Calcule d'abord (−3) × 4, puis souviens-toi que soustraire, c'est ajouter l'opposé.",
    },
    {
      id: "m4rel-12",
      level: 3,
      type: "input",
      question:
        "Un plongeur part de la surface (altitude 0 m) et descend régulièrement de 3 m par minute. Quelle est son altitude, en m, après 5 minutes de descente ?",
      answer: "-15",
      accept: ["−15"],
      explanation:
        "Descendre de 3 m se traduit par −3 m par minute. Après 5 minutes : 5 × (−3) = −15. Le plongeur est à l'altitude −15 m, c'est-à-dire 15 m sous la surface. La multiplication remplace ici cinq additions : (−3) + (−3) + (−3) + (−3) + (−3).",
      hint: "Traduis « descendre de 3 m » par le relatif −3, puis multiplie par le nombre de minutes.",
    },
  ],
};
