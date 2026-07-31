import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-calcul-litteral",
  subject: "maths",
  grade: "4e",
  num: 4,
  title: "Calcul littéral : développer et réduire",
  domain: "nombres",
  icon: "Variable",
  teaser: "Faire calculer des lettres : développer, réduire et traduire des situations en expressions.",
  objectives: [
    "Je sais développer une expression avec la distributivité simple k(a + b)",
    "Je sais développer un produit de deux sommes avec la double distributivité",
    "Je sais réduire une expression littérale",
    "Je sais substituer une valeur à une lettre et produire une expression à partir d'une situation",
  ],
  lesson: [
    {
      title: "Les conventions d'écriture",
      paragraphs: [
        "En calcul littéral, une lettre représente un nombre quelconque. Pour alléger l'écriture, on supprime le signe × devant une lettre ou une parenthèse : 3 × x s'écrit 3x, et 5 × (a + 2) s'écrit 5(a + 2).",
        "On écrit x au lieu de 1x, et x × x s'écrit x². Le nombre s'écrit toujours devant la lettre : 3x et non x3.",
        "Une expression littérale sert à décrire un calcul valable pour toutes les valeurs possibles de la lettre : une formule, un programme de calcul, un périmètre…",
      ],
      example: [
        "7 × y = 7y ; a × b = ab ; 2 × x × x = 2x².",
        "Le périmètre d'un carré de côté c s'écrit 4c.",
        "« Choisir un nombre, le multiplier par 3, ajouter 7 » se traduit par 3x + 7.",
      ],
      tip: "Le signe × est invisible mais toujours là : 3x veut dire 3 × x. Pense à le faire réapparaître dès que tu remplaces la lettre par un nombre.",
    },
    {
      title: "Développer avec la distributivité simple",
      paragraphs: [
        "Développer, c'est transformer un produit en somme. La distributivité s'écrit : k(a + b) = ka + kb et k(a − b) = ka − kb. Le facteur k « distribue » sa multiplication à chaque terme de la parenthèse.",
        "Attention aux signes : si k est négatif, chaque terme de la parenthèse change de signe en sortant. Ainsi −2(x − 4) = −2x + 8.",
        "Cette règle n'est pas nouvelle : tu l'utilises en calcul mental depuis longtemps, par exemple 12 × 103 = 12 × 100 + 12 × 3.",
      ],
      example: [
        "3(x + 5) = 3x + 15.",
        "5(2x − 3) = 10x − 15.",
        "−4(x + 2) = −4x − 8 et −2(x − 4) = −2x + 8.",
      ],
      tip: "Dessine des flèches du facteur vers CHAQUE terme de la parenthèse : aucun terme ne doit être oublié, et chaque flèche transporte aussi le signe.",
    },
    {
      title: "Développer avec la double distributivité",
      paragraphs: [
        "Pour développer un produit de deux sommes, chaque terme de la première parenthèse multiplie chaque terme de la seconde : (a + b)(c + d) = ac + ad + bc + bd. Cela fait quatre produits.",
        "Avec des soustractions, transforme-les d'abord en additions de relatifs : (x − 2) se lit (x + (−2)). La règle des signes fait le reste.",
        "Après le développement, il reste presque toujours des termes à regrouper : c'est l'étape de réduction.",
      ],
      example: [
        "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.",
        "(x + 4)(x − 2) = x² − 2x + 4x − 8 = x² + 2x − 8.",
        "(2x + 1)(x − 3) = 2x² − 6x + x − 3 = 2x² − 5x − 3.",
      ],
      tip: "Quatre flèches, quatre produits : vérifie que ton développement contient bien quatre termes avant de réduire. S'il en manque un, tu as sauté une flèche.",
    },
    {
      title: "Réduire une expression",
      paragraphs: [
        "Réduire une expression, c'est regrouper les termes « de la même famille » : les termes en x² ensemble, les termes en x ensemble, et les nombres seuls ensemble.",
        "On additionne les coefficients : 4x + 3x = 7x, car quatre x plus trois x font sept x. En revanche, 2x + 3 ne se réduit pas : un terme en x et un nombre seul ne sont pas de la même famille.",
        "De même, x² et x sont deux familles différentes : x² + x ne se simplifie pas.",
      ],
      example: [
        "7x + 2 − 3x + 5 = 4x + 7.",
        "3x² + 5x − x² + 2x = 2x² + 7x.",
        "9 + 6x − 4 = 6x + 5.",
      ],
      tip: "Souligne d'un même trait les termes de la même famille (une couleur pour les x², une pour les x, une pour les nombres), puis regroupe famille par famille.",
    },
    {
      title: "Substituer et produire une expression",
      paragraphs: [
        "Substituer, c'est remplacer la lettre par une valeur donnée pour calculer l'expression. Fais réapparaître les signes × avant de remplacer : pour x = 4, l'expression 2x + 1 devient 2 × 4 + 1 = 9.",
        "Avec une valeur négative, mets-la entre parenthèses : pour x = −2, x² − 3x devient (−2)² − 3 × (−2) = 4 + 6 = 10.",
        "Dans l'autre sens, produire une expression, c'est traduire une situation en langage mathématique : périmètre d'une figure, programme de calcul, prix total… La lettre représente la quantité inconnue ou variable.",
      ],
      example: [
        "Pour x = 5 : 3x + 7 = 3 × 5 + 7 = 22.",
        "Un rectangle de longueur x + 3 et de largeur x a pour périmètre 2(x + 3) + 2x = 4x + 6.",
        "« Le double d'un nombre diminué de 5 » : 2x − 5.",
      ],
      tip: "Valeur négative → parenthèses obligatoires ! Écrire −2² au lieu de (−2)² change le résultat : (−2)² = 4 mais −2² = −4.",
    },
  ],
  exercises: [
    {
      id: "m4lit-1",
      level: 1,
      type: "qcm",
      question: "Développe : 3(x + 5)",
      choices: ["3x + 15", "3x + 5", "x + 15", "8x"],
      answer: 0,
      explanation:
        "Le facteur 3 multiplie CHAQUE terme de la parenthèse : 3 × x = 3x et 3 × 5 = 15, donc 3(x + 5) = 3x + 15. Piège : 3x + 5 est l'erreur classique, le 5 aussi doit être multiplié par 3.",
      hint: "Le 3 distribue sa multiplication au x ET au 5.",
    },
    {
      id: "m4lit-2",
      level: 1,
      type: "input",
      question: "Réduis : 4x + 3x",
      answer: "7x",
      accept: [],
      explanation:
        "4x et 3x sont de la même famille (des termes en x) : on additionne les coefficients, 4 + 3 = 7, donc 4x + 3x = 7x. Image simple : quatre stylos plus trois stylos font sept stylos.",
      hint: "Additionne les nombres devant les x.",
    },
    {
      id: "m4lit-3",
      level: 1,
      type: "truefalse",
      question: "2x + 3 = 5x",
      answer: false,
      explanation:
        "Faux ! 2x est un terme en x et 3 est un nombre seul : ils ne sont pas de la même famille, on ne peut pas les regrouper. Preuve avec x = 1 : 2 × 1 + 3 = 5, mais 5 × 1 = 5… et avec x = 2 : 2 × 2 + 3 = 7 tandis que 5 × 2 = 10. L'égalité est fausse en général.",
    },
    {
      id: "m4lit-4",
      level: 1,
      type: "qcm",
      question: "Quelle est la valeur de 2x + 1 pour x = 4 ?",
      choices: ["9", "7", "3", "24"],
      answer: 0,
      explanation:
        "On remplace x par 4 en faisant réapparaître le signe × : 2 × 4 + 1 = 8 + 1 = 9. Piège : 24 viendrait de « coller » le 4 à la place du x dans 2x, comme si 2x devenait le nombre vingt-quatre. 2x signifie 2 × x.",
      hint: "2x veut dire 2 × x : remplace x par 4 puis calcule.",
    },
    {
      id: "m4lit-5",
      level: 2,
      type: "input",
      question: "Développe : 5(2x − 3)",
      answer: "10x-15",
      accept: ["10x−15", "10x - 15", "10x − 15"],
      explanation:
        "On distribue le 5 aux deux termes : 5 × 2x = 10x et 5 × 3 = 15, en gardant le signe − entre les deux : 5(2x − 3) = 10x − 15. Piège : ne pas oublier de multiplier aussi le 3, et ne pas perdre le signe −.",
      hint: "Multiplie 5 par 2x, puis 5 par 3, sans oublier le signe −.",
    },
    {
      id: "m4lit-6",
      level: 2,
      type: "input",
      question: "Réduis : 7x + 2 − 3x + 5",
      answer: "4x+7",
      accept: ["4x + 7", "7+4x", "7 + 4x"],
      explanation:
        "On regroupe par familles. Termes en x : 7x − 3x = 4x. Nombres seuls : 2 + 5 = 7. Résultat : 4x + 7. Piège : chaque terme voyage avec le signe placé devant lui, c'est bien −3x qu'il faut regrouper avec 7x.",
      hint: "Regroupe d'un côté les termes en x, de l'autre les nombres seuls.",
    },
    {
      id: "m4lit-7",
      level: 2,
      type: "qcm",
      question: "Développe et réduis : (x + 2)(x + 3)",
      choices: ["x² + 5x + 6", "x² + 6", "x² + 6x + 5", "2x + 5"],
      answer: 0,
      explanation:
        "Double distributivité, quatre produits : x × x = x², x × 3 = 3x, 2 × x = 2x, 2 × 3 = 6. On obtient x² + 3x + 2x + 6, puis on réduit : 3x + 2x = 5x. Résultat : x² + 5x + 6. Piège : x² + 6 oublie les deux produits croisés 3x et 2x.",
      hint: "Chaque terme de la première parenthèse multiplie chaque terme de la seconde : quatre produits.",
    },
    {
      id: "m4lit-8",
      level: 2,
      type: "truefalse",
      question: "−2(x − 4) = −2x − 8",
      answer: false,
      explanation:
        "Faux ! On distribue −2 aux deux termes : −2 × x = −2x et −2 × (−4) = +8 (moins par moins donne plus). Le bon développement est −2x + 8. Piège très fréquent : quand le facteur est négatif, le signe du deuxième terme change.",
    },
    {
      id: "m4lit-9",
      level: 3,
      type: "qcm",
      question: "Développe et réduis : (2x + 1)(x − 3)",
      choices: ["2x² − 5x − 3", "2x² − 3", "2x² + 5x − 3", "2x² − 7x − 3"],
      answer: 0,
      explanation:
        "Quatre produits : 2x × x = 2x², 2x × (−3) = −6x, 1 × x = x, 1 × (−3) = −3. On obtient 2x² − 6x + x − 3, puis on réduit : −6x + x = −5x. Résultat : 2x² − 5x − 3. Piège : traite le −3 comme un relatif, chaque produit qui le contient est négatif.",
      hint: "Écris les quatre produits en gardant les signes, puis regroupe les termes en x.",
    },
    {
      id: "m4lit-10",
      level: 3,
      type: "input",
      question: "Quelle est la valeur de x² − 3x pour x = −2 ?",
      answer: "10",
      accept: ["+10"],
      explanation:
        "On remplace x par (−2), entre parenthèses : (−2)² − 3 × (−2). Calculs : (−2)² = 4 (exposant pair, résultat positif) et 3 × (−2) = −6, donc l'expression vaut 4 − (−6) = 4 + 6 = 10. Piège : sans parenthèses, on se trompe sur le carré ; et soustraire −6, c'est ajouter 6.",
      hint: "Remplace x par (−2) avec des parenthèses, puis applique la règle des signes.",
    },
    {
      id: "m4lit-11",
      level: 3,
      type: "input",
      question:
        "Programme de calcul : « Choisis un nombre, multiplie-le par 3, puis ajoute 7. » Si x désigne le nombre choisi, quelle expression obtient-on ?",
      answer: "3x+7",
      accept: ["3x + 7", "7+3x", "7 + 3x"],
      explanation:
        "On suit le programme étape par étape : le nombre choisi est x ; multiplié par 3, il devient 3x ; en ajoutant 7, on obtient 3x + 7. Piège : l'ordre compte ! « Ajouter 7 puis multiplier par 3 » donnerait 3(x + 7), une expression différente.",
      hint: "Applique chaque étape du programme au nombre x, dans l'ordre.",
    },
    {
      id: "m4lit-12",
      level: 3,
      type: "input",
      question:
        "Un rectangle a pour largeur x cm et pour longueur (x + 3) cm. Exprime son périmètre en fonction de x, sous forme réduite.",
      answer: "4x+6",
      accept: ["4x + 6", "6+4x", "6 + 4x"],
      explanation:
        "Le périmètre d'un rectangle vaut 2 × (longueur + largeur) : P = 2(x + 3 + x) = 2(2x + 3). On développe : 2 × 2x = 4x et 2 × 3 = 6, donc P = 4x + 6. Vérification avec x = 2 : largeur 2, longueur 5, périmètre 2 + 5 + 2 + 5 = 14, et 4 × 2 + 6 = 14. Piège : ne pas oublier que chaque côté apparaît deux fois.",
      hint: "Le périmètre, c'est deux longueurs plus deux largeurs. Développe puis réduis.",
    },
  ],
};
