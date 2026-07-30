import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-calcul-litteral",
  subject: "maths",
  grade: "5e",
  num: 5,
  title: "Le calcul littéral",
  domain: "nombres",
  icon: "Variable",
  teaser: "Des lettres dans les calculs ? C'est le langage secret des formules.",
  objectives: [
    "Je sais exprimer une grandeur à l'aide d'une lettre",
    "Je connais les conventions d'écriture (3x au lieu de 3 × x)",
    "Je sais substituer une valeur à une lettre pour calculer",
    "Je sais réduire une expression simple et développer avec k(a + b)",
    "Je sais tester si une égalité est vraie pour une valeur donnée",
  ],
  lesson: [
    {
      title: "Pourquoi des lettres ?",
      paragraphs: [
        "Le périmètre d'un carré, c'est toujours « 4 fois le côté », que le côté mesure 3 cm, 7 cm ou 12,5 cm. Pour dire cela en une seule formule, on remplace le côté par une lettre : P = 4 × c.",
        "Une lettre représente un nombre qu'on ne connaît pas encore, ou qui peut changer. C'est ce qui rend les formules universelles : une seule écriture couvre tous les cas.",
        "Traduire une situation avec une lettre s'apprend comme une langue : « le double de x » s'écrit 2 × x, « x augmenté de 5 » s'écrit x + 5, « le double de x augmenté de 5 » s'écrit 2 × x + 5.",
      ],
      example: [
        "Un programme de calcul : « choisis un nombre n, multiplie-le par 3, ajoute 4 » se traduit par 3 × n + 4.",
        "L'âge de Léo dans 10 ans, s'il a a ans aujourd'hui : a + 10.",
      ],
      tip: "Commence toujours par écrire en français ce que représente ta lettre : « x = le prix d'un cahier ». Une lettre sans définition, c'est une phrase sans sujet.",
    },
    {
      title: "Les conventions d'écriture",
      paragraphs: [
        "Pour alléger les écritures, on supprime le signe × devant une lettre ou une parenthèse : 3 × x s'écrit 3x, et 5 × (a + 2) s'écrit 5(a + 2).",
        "De même, a × b s'écrit ab, et 1 × x s'écrit simplement x. Le nombre s'écrit toujours devant la lettre : 3x, jamais x3.",
        "Attention : on ne peut pas supprimer le × entre deux nombres ! 3 × 5 ne s'écrit pas 35…",
      ],
      example: [
        "7 × y = 7y ; x × y = xy ; 4 × (n + 1) = 4(n + 1).",
        "1 × a = a ; 0 × a = 0.",
      ],
      tip: "Le signe × est invisible mais toujours là : quand tu remplaces la lettre par un nombre, fais-le réapparaître. 3x avec x = 5, c'est 3 × 5 = 15, pas 35 !",
    },
    {
      title: "Substituer une valeur",
      paragraphs: [
        "Substituer, c'est remplacer la lettre par un nombre donné, partout où elle apparaît, puis calculer en respectant les priorités.",
        "Méthode en trois temps : réécrire l'expression avec les signes × visibles, remplacer la lettre par sa valeur, calculer.",
      ],
      example: [
        "Calculer 2x + 7 pour x = 3 : 2x + 7 = 2 × x + 7 = 2 × 3 + 7 = 6 + 7 = 13.",
        "Calculer 5(a − 2) pour a = 6 : 5 × (6 − 2) = 5 × 4 = 20.",
      ],
      tip: "Réécris TOUJOURS les × cachés avant de substituer. C'est l'étape que sautent ceux qui écrivent 3x = 35 pour x = 5.",
    },
    {
      title: "Réduire une expression",
      paragraphs: [
        "Réduire, c'est écrire une expression plus simplement en regroupant ce qui se ressemble : 4x + 3x = 7x, car 4 paquets de x plus 3 paquets de x font 7 paquets de x.",
        "On ne peut regrouper que les termes « de la même famille » : les x avec les x, les nombres avec les nombres. 5x + 3 ne se réduit pas : ce sont deux familles différentes.",
      ],
      example: [
        "4x + 3x = 7x ; 9a − 5a = 4a.",
        "6x + 2 + 3x = 9x + 2 (on regroupe les x, le 2 reste seul).",
      ],
      tip: "Imagine que x est un objet : 4 pommes + 3 pommes = 7 pommes. Mais 5 pommes + 3… ça reste 5 pommes et 3 : on n'additionne pas des pommes avec des nombres !",
    },
    {
      title: "Distribuer et tester une égalité",
      paragraphs: [
        "La distributivité permet de supprimer une parenthèse précédée d'un facteur : k(a + b) = ka + kb, et k(a − b) = ka − kb. Le facteur k « distribue » sa multiplication à chaque terme de la parenthèse.",
        "Exemple : 3(x + 5) = 3x + 15. Attention, le facteur multiplie bien LES DEUX termes : écrire 3x + 5 est l'erreur classique.",
        "Tester une égalité pour une valeur, c'est calculer séparément le membre de gauche et le membre de droite, puis comparer. Si les deux résultats sont égaux, l'égalité est vraie pour cette valeur ; sinon elle est fausse.",
      ],
      example: [
        "7(2x + 3) = 14x + 21.",
        "Tester 4x − 2 = 10 pour x = 3 : à gauche, 4 × 3 − 2 = 10 ; à droite, 10. Les deux membres sont égaux : l'égalité est vraie pour x = 3.",
        "Pour x = 2 : à gauche, 4 × 2 − 2 = 6 ≠ 10. L'égalité est fausse pour x = 2.",
      ],
      tip: "Pour tester une égalité, traite chaque membre dans son coin, comme deux calculs indépendants, et compare seulement à la fin.",
    },
  ],
  exercises: [
    {
      id: "m5lit-1",
      level: 1,
      type: "qcm",
      question: "Comment écrit-on plus simplement 3 × x ?",
      choices: ["3x", "x3", "33", "3 + x"],
      answer: 0,
      explanation:
        "Par convention, on supprime le signe × entre un nombre et une lettre, et le nombre s'écrit devant : 3 × x = 3x. L'écriture x3 n'est pas utilisée, et 33 serait une grosse erreur : le × est invisible mais toujours là.",
      hint: "Le nombre se place devant la lettre, sans signe.",
    },
    {
      id: "m5lit-2",
      level: 1,
      type: "input",
      question: "Calcule 5x pour x = 4.",
      answer: "20",
      explanation:
        "5x signifie 5 × x. Pour x = 4 : 5 × 4 = 20. Piège classique : écrire 54 en collant les chiffres. Le signe × caché doit réapparaître quand on remplace la lettre.",
      hint: "5x cache une multiplication.",
    },
    {
      id: "m5lit-3",
      level: 1,
      type: "truefalse",
      question: "Le produit a × b peut s'écrire ab.",
      answer: true,
      explanation:
        "Vrai ! Entre deux lettres, comme entre un nombre et une lettre, le signe × se supprime : a × b = ab. En revanche, entre deux nombres, il est obligatoire : 3 × 5 ne s'écrit jamais 35.",
    },
    {
      id: "m5lit-4",
      level: 1,
      type: "qcm",
      question: "Quelle expression traduit « le double de x, augmenté de 5 » ?",
      choices: ["2x + 5", "2(x + 5)", "x + 25", "5x + 2"],
      answer: 0,
      explanation:
        "Le double de x s'écrit 2x, et « augmenté de 5 » ajoute 5 au résultat : 2x + 5. L'écriture 2(x + 5) traduirait « le double de la somme de x et de 5 » : ce n'est pas la même chose.",
      hint: "Traduis morceau par morceau : d'abord « le double de x ».",
    },
    {
      id: "m5lit-5",
      level: 2,
      type: "input",
      question: "Réduis l'expression : 4x + 3x",
      answer: "7x",
      accept: ["7 x"],
      explanation:
        "4 paquets de x plus 3 paquets de x font 7 paquets de x : 4x + 3x = 7x. On additionne les nombres devant la lettre (les coefficients), et la lettre reste la même.",
      hint: "4 pommes + 3 pommes = ?",
    },
    {
      id: "m5lit-6",
      level: 2,
      type: "qcm",
      question: "Développe : 3(x + 5)",
      choices: ["3x + 5", "3x + 15", "x + 15", "8x"],
      answer: 1,
      explanation:
        "Le facteur 3 multiplie CHAQUE terme de la parenthèse : 3 × x = 3x et 3 × 5 = 15, donc 3(x + 5) = 3x + 15. L'erreur classique est 3x + 5 : le 5 aussi doit être multiplié par 3 !",
      hint: "Le 3 se distribue aux deux termes de la parenthèse.",
    },
    {
      id: "m5lit-7",
      level: 2,
      type: "input",
      question: "Calcule 2x + 7 pour x = 3.",
      answer: "13",
      explanation:
        "On fait réapparaître le × puis on substitue : 2x + 7 = 2 × 3 + 7. Priorité à la multiplication : 6 + 7 = 13.",
      hint: "Remplace x par 3, puis respecte les priorités de calcul.",
    },
    {
      id: "m5lit-8",
      level: 2,
      type: "truefalse",
      question: "5(a − 2) = 5a − 2",
      answer: false,
      explanation:
        "Faux ! Le 5 multiplie les DEUX termes : 5(a − 2) = 5a − 10. Vérifions avec a = 3 : à gauche, 5 × (3 − 2) = 5 ; à droite, 5 × 3 − 2 = 13. Les deux expressions ne sont pas égales.",
      hint: "Teste avec une valeur simple, par exemple a = 3.",
    },
    {
      id: "m5lit-9",
      level: 3,
      type: "input",
      question: "Développe : 7(2x + 3)",
      answer: "14x+21",
      accept: ["14x + 21", "21+14x", "21 + 14x"],
      explanation:
        "On distribue le 7 aux deux termes : 7 × 2x = 14x et 7 × 3 = 21, donc 7(2x + 3) = 14x + 21. Note bien : 7 × 2x = 14x, car on multiplie les coefficients (7 × 2 = 14) et on garde le x.",
      hint: "7 × 2x d'abord, puis 7 × 3.",
    },
    {
      id: "m5lit-10",
      level: 3,
      type: "qcm",
      question: "Pour quelle valeur de x l'égalité 4x − 2 = 10 est-elle vraie ?",
      choices: ["x = 2", "x = 3", "x = 4", "x = 8"],
      answer: 1,
      explanation:
        "On teste chaque valeur dans le membre de gauche. Pour x = 3 : 4 × 3 − 2 = 12 − 2 = 10, égal au membre de droite : l'égalité est vraie. Pour x = 2 : 6 ≠ 10 ; pour x = 4 : 14 ≠ 10 ; pour x = 8 : 30 ≠ 10.",
      hint: "Remplace x par chaque valeur et compare avec 10.",
    },
    {
      id: "m5lit-11",
      level: 3,
      type: "truefalse",
      question: "Les expressions 2(x + 1) et 2x + 1 sont égales pour toutes les valeurs de x.",
      answer: false,
      explanation:
        "Faux ! En développant : 2(x + 1) = 2x + 2, et non 2x + 1. Un seul contre-exemple suffit : pour x = 5, la première vaut 2 × 6 = 12, la seconde 2 × 5 + 1 = 11. Pour prouver qu'une égalité est fausse en général, un contre-exemple suffit.",
      hint: "Teste les deux expressions avec x = 5.",
    },
    {
      id: "m5lit-12",
      level: 3,
      type: "input",
      question:
        "Un rectangle a pour longueur x cm et pour largeur 3 cm. Son périmètre est donné par P = 2x + 6. Calcule le périmètre (en cm) pour x = 7.",
      answer: "20",
      explanation:
        "On substitue x = 7 dans la formule : P = 2 × 7 + 6 = 14 + 6 = 20. Le périmètre vaut 20 cm. Vérification avec la définition : le tour du rectangle vaut 7 + 3 + 7 + 3 = 20 cm. La formule et le calcul direct concordent.",
      hint: "Remplace x par 7 dans 2x + 6.",
    },
  ],
};
