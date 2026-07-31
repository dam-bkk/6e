import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-puissances",
  subject: "maths",
  grade: "4e",
  num: 3,
  title: "Les puissances",
  domain: "nombres",
  icon: "Superscript",
  teaser: "Des galaxies aux bactéries : écrire l'immense et le minuscule avec les puissances de 10.",
  objectives: [
    "Je connais la définition de aⁿ et je sais calculer des puissances simples",
    "Je sais utiliser les puissances de 10, à exposant positif ou négatif",
    "Je sais multiplier et diviser des puissances de 10",
    "Je sais écrire un nombre en notation scientifique et donner un ordre de grandeur",
  ],
  lesson: [
    {
      title: "La notation puissance",
      paragraphs: [
        "Pour écrire un produit dont tous les facteurs sont identiques, on utilise la notation puissance : aⁿ désigne le produit de n facteurs égaux à a. On lit « a exposant n ». Ainsi 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.",
        "Cas particuliers à connaître : a¹ = a, et a² et a³ se lisent « a au carré » et « a au cube ».",
        "Si a est négatif, la règle des signes décide : (−2)² = (−2) × (−2) = 4 mais (−2)³ = −8. Un exposant pair donne un résultat positif, un exposant impair conserve le signe −.",
      ],
      example: [
        "3⁴ = 3 × 3 × 3 × 3 = 81.",
        "10² = 100 ; 5³ = 125 ; 7¹ = 7.",
        "(−3)² = 9, mais (−3)³ = −27.",
      ],
      tip: "Ne confonds jamais puissance et multiplication : 2⁵ = 32 (cinq facteurs 2), pas 2 × 5 = 10.",
    },
    {
      title: "Les puissances de 10",
      paragraphs: [
        "Les puissances de 10 sont les plus utiles : 10ⁿ s'écrit 1 suivi de n zéros. Ainsi 10³ = 1 000 et 10⁶ = 1 000 000 (un million).",
        "Pour les nombres plus petits que 1, on utilise des exposants négatifs : 10⁻ⁿ = 1/10ⁿ. Par exemple 10⁻² = 1/100 = 0,01. Le chiffre 1 occupe la n-ième position après la virgule.",
        "Par convention, 10⁰ = 1.",
      ],
      example: [
        "10⁴ = 10 000 ; 10⁹ = 1 000 000 000 (un milliard).",
        "10⁻¹ = 0,1 ; 10⁻³ = 0,001.",
        "3 × 10⁵ = 300 000 : multiplier par 10⁵ décale la virgule de 5 rangs vers la droite.",
      ],
      tip: "Exposant positif n → 1 suivi de n zéros. Exposant négatif → un nombre plus petit que 1, jamais un nombre négatif ! 10⁻² = 0,01, pas −100.",
    },
    {
      title: "Multiplier et diviser des puissances de 10",
      paragraphs: [
        "Pour multiplier deux puissances de 10, on additionne les exposants : 10⁴ × 10³ = 10⁷. En effet, coller 4 zéros puis 3 zéros derrière un 1, c'est en coller 7.",
        "Pour diviser, on soustrait les exposants : 10⁵ ÷ 10² = 10³.",
        "Ces règles fonctionnent aussi avec des exposants négatifs : 10³ × 10⁻⁵ = 10⁻², et 10⁵ ÷ 10⁸ = 10⁻³.",
      ],
      example: [
        "10⁶ × 10² = 10⁸ (on additionne : 6 + 2 = 8).",
        "10⁷ ÷ 10⁴ = 10³ (on soustrait : 7 − 4 = 3).",
        "10⁻² × 10⁵ = 10³ (on additionne : −2 + 5 = 3).",
      ],
      tip: "Produit → on ADDITIONNE les exposants. Quotient → on les SOUSTRAIT. On ne les multiplie jamais !",
    },
    {
      title: "La notation scientifique",
      paragraphs: [
        "Un nombre est en notation scientifique quand il s'écrit a × 10ⁿ, où a est un nombre décimal ayant un seul chiffre non nul avant la virgule (1 ≤ a < 10) et n un entier relatif.",
        "Cette écriture normalisée permet de comparer d'un coup d'œil des nombres très grands ou très petits : il suffit de comparer les exposants.",
        "Méthode : place la virgule juste après le premier chiffre non nul, puis compte de combien de rangs tu l'as déplacée : ce nombre de rangs donne l'exposant (positif si le nombre de départ était grand, négatif s'il était petit).",
      ],
      example: [
        "45 000 = 4,5 × 10⁴ (la virgule recule de 4 rangs).",
        "0,00072 = 7,2 × 10⁻⁴ (la virgule avance de 4 rangs).",
        "34 × 10⁵ n'est PAS une notation scientifique (34 ≥ 10) : on écrit 3,4 × 10⁶.",
      ],
      tip: "Vérifie toujours le nombre devant le × : il doit être au moins égal à 1 et strictement inférieur à 10.",
    },
    {
      title: "Ordres de grandeur : de l'atome aux étoiles",
      paragraphs: [
        "Un ordre de grandeur est une valeur approchée très simple, souvent une puissance de 10, qui donne une idée de la taille d'un nombre sans chercher la précision.",
        "Les sciences en font un usage constant : la distance Terre-Soleil vaut environ 1,5 × 10⁸ km, la taille d'une bactérie environ 10⁻⁶ m (un micromètre), celle d'un atome environ 10⁻¹⁰ m.",
        "Pour calculer avec des ordres de grandeur, on combine les règles sur les puissances de 10 : c'est rapide et suffisant pour vérifier si un résultat est plausible.",
      ],
      example: [
        "La lumière parcourt environ 3 × 10⁵ km par seconde.",
        "Population mondiale : environ 8 × 10⁹ habitants.",
        "Épaisseur d'une feuille de papier : environ 10⁻⁴ m, soit 0,1 mm.",
      ],
      tip: "Avant tout calcul compliqué, estime l'ordre de grandeur du résultat : tu repéreras immédiatement une erreur de virgule ou d'exposant.",
    },
  ],
  exercises: [
    {
      id: "m4pui-1",
      level: 1,
      type: "qcm",
      question: "Que vaut 2⁵ ?",
      choices: ["32", "10", "25", "16"],
      answer: 0,
      explanation:
        "2⁵ = 2 × 2 × 2 × 2 × 2 = 32 : c'est un produit de cinq facteurs égaux à 2. Piège : 10 correspond à 2 × 5, qui n'a rien à voir avec une puissance ; 16 correspond à 2⁴, il manque un facteur.",
      hint: "Écris le produit de cinq facteurs égaux à 2.",
    },
    {
      id: "m4pui-2",
      level: 1,
      type: "input",
      question: "Écris 10³ sous forme d'un nombre entier.",
      answer: "1000",
      accept: ["1 000"],
      explanation:
        "10³ = 10 × 10 × 10 = 1 000 : un 1 suivi de trois zéros. Règle générale : 10ⁿ s'écrit 1 suivi de n zéros.",
      hint: "10ⁿ, c'est 1 suivi de combien de zéros ?",
    },
    {
      id: "m4pui-3",
      level: 1,
      type: "truefalse",
      question: "3² = 6",
      answer: false,
      explanation:
        "Faux ! 3² = 3 × 3 = 9. Le résultat 6 correspond à 3 × 2 : c'est LA confusion classique entre puissance et multiplication. L'exposant indique le nombre de facteurs, pas un nombre qui multiplie.",
    },
    {
      id: "m4pui-4",
      level: 1,
      type: "qcm",
      question: "Que vaut 10⁻² ?",
      choices: ["0,01", "−100", "−20", "0,001"],
      answer: 0,
      explanation:
        "10⁻² = 1/10² = 1/100 = 0,01. Piège majeur : un exposant négatif ne rend pas le nombre négatif ! 10⁻² est un nombre positif, simplement très petit. Et 0,001 correspond à 10⁻³.",
      hint: "10⁻ⁿ = 1/10ⁿ : c'est un nombre positif plus petit que 1.",
    },
    {
      id: "m4pui-5",
      level: 2,
      type: "input",
      question: "On écrit 10⁴ × 10³ sous la forme 10ⁿ. Que vaut l'exposant n ?",
      answer: "7",
      accept: [],
      explanation:
        "Pour multiplier des puissances de 10, on additionne les exposants : 4 + 3 = 7, donc 10⁴ × 10³ = 10⁷. Vérification avec les zéros : 10 000 × 1 000 = 10 000 000, soit 1 suivi de 7 zéros. Piège : ne multiplie pas les exposants (4 × 3 = 12 serait faux).",
      hint: "Produit de puissances de 10 : que fait-on des exposants ?",
    },
    {
      id: "m4pui-6",
      level: 2,
      type: "input",
      question: "Calcule : (−3)²",
      answer: "9",
      accept: ["+9"],
      explanation:
        "(−3)² = (−3) × (−3). Règle des signes : moins par moins donne plus, donc le résultat est 9. Un exposant pair donne toujours un résultat positif. Piège : ne pas confondre avec (−3)³ = −27, où l'exposant impair conserve le signe −.",
      hint: "Écris le produit (−3) × (−3) et applique la règle des signes.",
    },
    {
      id: "m4pui-7",
      level: 2,
      type: "qcm",
      question: "Quelle est l'écriture scientifique de 45 000 ?",
      choices: ["4,5 × 10⁴", "45 × 10³", "4,5 × 10³", "0,45 × 10⁵"],
      answer: 0,
      explanation:
        "En notation scientifique, le nombre devant le × doit vérifier 1 ≤ a < 10. On place la virgule après le premier chiffre : 4,5. De 4,5 à 45 000, la virgule se déplace de 4 rangs : 45 000 = 4,5 × 10⁴. Piège : 45 × 10³ vaut bien 45 000, mais 45 ≥ 10, ce n'est donc pas une notation scientifique.",
      hint: "Le nombre devant le × doit être compris entre 1 et 10 (10 exclu).",
    },
    {
      id: "m4pui-8",
      level: 2,
      type: "truefalse",
      question: "(−2)³ est un nombre négatif.",
      answer: true,
      explanation:
        "Vrai ! (−2)³ = (−2) × (−2) × (−2) = 4 × (−2) = −8. Trois facteurs négatifs, un nombre impair : le produit est négatif. Retiens : base négative avec exposant impair → résultat négatif ; exposant pair → résultat positif.",
    },
    {
      id: "m4pui-9",
      level: 3,
      type: "input",
      question: "On écrit 10⁵ ÷ 10⁸ sous la forme 10ⁿ. Que vaut l'exposant n ?",
      answer: "-3",
      accept: ["−3"],
      explanation:
        "Pour diviser des puissances de 10, on soustrait les exposants : 5 − 8 = −3, donc 10⁵ ÷ 10⁸ = 10⁻³. C'est logique : 100 000 ÷ 100 000 000 = 0,001. Piège : l'ordre de la soustraction compte, c'est bien 5 − 8 et non 8 − 5.",
      hint: "Quotient de puissances de 10 : soustrais les exposants dans le bon ordre.",
    },
    {
      id: "m4pui-10",
      level: 3,
      type: "qcm",
      question: "Quelle est l'écriture scientifique de 0,00072 ?",
      choices: ["7,2 × 10⁻⁴", "7,2 × 10⁴", "72 × 10⁻⁵", "0,72 × 10⁻³"],
      answer: 0,
      explanation:
        "On place la virgule après le premier chiffre non nul : 7,2. De 0,00072 à 7,2, la virgule avance de 4 rangs, et le nombre de départ est plus petit que 1 : l'exposant est donc −4. Résultat : 7,2 × 10⁻⁴. Piège : 72 × 10⁻⁵ a la bonne valeur mais 72 ≥ 10, ce n'est pas une écriture scientifique.",
      hint: "Compte les rangs entre 0,00072 et 7,2 : l'exposant sera négatif.",
    },
    {
      id: "m4pui-11",
      level: 3,
      type: "qcm",
      question: "La distance Terre-Soleil vaut environ 150 000 000 km. Quel est son ordre de grandeur en notation scientifique ?",
      choices: ["1,5 × 10⁸ km", "1,5 × 10⁶ km", "15 × 10⁹ km", "1,5 × 10⁻⁸ km"],
      answer: 0,
      explanation:
        "150 000 000 = 1,5 × 100 000 000 = 1,5 × 10⁸ km. On vérifie : de 1,5 à 150 000 000, la virgule se déplace de 8 rangs. Piège : compter les zéros ne suffit pas, il faut compter les rangs de déplacement de la virgule (il y a 7 zéros mais 8 rangs).",
      hint: "De combien de rangs la virgule se déplace-t-elle entre 1,5 et 150 000 000 ?",
    },
    {
      id: "m4pui-12",
      level: 3,
      type: "input",
      question:
        "Une bactérie mesure 2 × 10⁻⁶ m. Combien de bactéries faut-il aligner bout à bout pour atteindre 1 mm, c'est-à-dire 10⁻³ m ?",
      answer: "500",
      accept: [],
      explanation:
        "On divise la longueur totale par la taille d'une bactérie : 10⁻³ ÷ (2 × 10⁻⁶). D'abord les puissances : 10⁻³ ÷ 10⁻⁶ = 10⁻³⁻⁽⁻⁶⁾ = 10³ = 1000. Puis on divise par 2 : 1000 ÷ 2 = 500. Il faut 500 bactéries. Piège : −3 − (−6) = −3 + 6 = 3, attention au double signe moins.",
      hint: "Divise 10⁻³ par 2 × 10⁻⁶ : commence par le quotient des puissances de 10.",
    },
  ],
};
