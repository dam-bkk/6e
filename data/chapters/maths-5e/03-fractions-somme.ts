import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-fractions-somme",
  subject: "maths",
  grade: "5e",
  num: 3,
  title: "Fractions : comparer et additionner",
  domain: "nombres",
  icon: "PieChart",
  teaser: "Simplifier, comparer, additionner : les fractions n'auront plus de secret.",
  objectives: [
    "Je sais reconnaître et produire des fractions égales (simplifier)",
    "Je sais mettre deux fractions au même dénominateur quand l'un est un multiple de l'autre",
    "Je sais comparer deux fractions",
    "Je sais additionner et soustraire deux fractions",
  ],
  lesson: [
    {
      title: "Des fractions égales",
      paragraphs: [
        "Une même part de gâteau peut s'écrire de plusieurs façons : la moitié, c'est 1/2, mais aussi 2/4 ou 5/10. Ces fractions sont égales : elles désignent la même quantité.",
        "Règle fondamentale : une fraction ne change pas de valeur quand on multiplie (ou divise) son numérateur ET son dénominateur par un même nombre non nul.",
        "Diviser numérateur et dénominateur par un même nombre s'appelle simplifier. Une fraction qu'on ne peut plus simplifier est dite irréductible.",
      ],
      example: [
        "6/8 = 3/4 (on a divisé le haut et le bas par 2).",
        "10/15 = 2/3 (division par 5).",
        "2/3 = 4/6 = 6/9 = 20/30 (multiplications par 2, 3, 10).",
      ],
      tip: "Pour simplifier vite, cherche un diviseur commun dans tes tables : dans 10/15, le 5 saute aux yeux car 10 et 15 sont dans la table de 5.",
    },
    {
      title: "Mettre au même dénominateur",
      paragraphs: [
        "On ne peut comparer ou additionner facilement que des fractions qui ont le même dénominateur : des parts de la même taille.",
        "En 5e, on traite le cas où l'un des dénominateurs est un multiple de l'autre. On transforme alors la fraction au petit dénominateur pour qu'elle ait le grand.",
        "Exemple : pour 5/6 et 7/12, on remarque que 12 = 6 × 2. On transforme donc 5/6 en 10/12, et les deux fractions parlent désormais en douzièmes.",
      ],
      example: [
        "1/3 et 5/6 : comme 6 = 3 × 2, on écrit 1/3 = 2/6. On compare alors 2/6 et 5/6.",
        "3/4 et 5/8 : comme 8 = 4 × 2, on écrit 3/4 = 6/8.",
      ],
      tip: "Demande-toi toujours : « par combien faut-il multiplier le petit dénominateur pour obtenir le grand ? ». Puis multiplie le numérateur par le même nombre — jamais l'un sans l'autre !",
    },
    {
      title: "Comparer des fractions",
      paragraphs: [
        "Même dénominateur : la plus grande fraction est celle qui a le plus grand numérateur. 5/7 > 3/7, car cinq septièmes font plus que trois septièmes.",
        "Dénominateurs différents : on commence par les mettre au même dénominateur, puis on compare les numérateurs.",
        "Repère utile : une fraction est plus petite que 1 quand son numérateur est plus petit que son dénominateur, et plus grande que 1 dans le cas contraire. 7/5 > 1 mais 5/7 < 1.",
      ],
      example: [
        "Comparer 4/5 et 7/10 : 4/5 = 8/10, et 8/10 > 7/10, donc 4/5 > 7/10.",
        "9/9 = 1 : quand numérateur et dénominateur sont égaux, la fraction vaut exactement 1.",
      ],
      tip: "Avant tout calcul, situe chaque fraction par rapport à 1 (et à 1/2) : parfois cela suffit pour conclure sans rien transformer.",
    },
    {
      title: "Additionner et soustraire",
      paragraphs: [
        "Avec le même dénominateur, on additionne (ou soustrait) les numérateurs, et on garde le dénominateur : 2/9 + 5/9 = 7/9. Les parts sont de même taille, on les compte simplement.",
        "Avec des dénominateurs différents, on met d'abord au même dénominateur, puis on applique la règle précédente. On pense à simplifier le résultat si possible.",
        "Pour ajouter un entier et une fraction, on transforme l'entier en fraction : 2 = 8/4, donc 2 + 3/4 = 8/4 + 3/4 = 11/4.",
      ],
      example: [
        "1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
        "5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2 (résultat simplifié).",
        "2 + 3/4 = 11/4.",
      ],
      tip: "ERREUR INTERDITE : additionner les numérateurs entre eux ET les dénominateurs entre eux. 1/2 + 1/3 ne fait pas 2/5 ! (2/5 est même plus petit que 1/2 : impossible pour une somme de deux quantités positives.)",
    },
  ],
  exercises: [
    {
      id: "m5frs-1",
      level: 1,
      type: "qcm",
      question: "Quelle fraction est égale à 6/8 ?",
      choices: ["3/4", "2/3", "6/4", "8/6"],
      answer: 0,
      explanation:
        "On divise le numérateur et le dénominateur par 2 : 6 ÷ 2 = 3 et 8 ÷ 2 = 4, donc 6/8 = 3/4. Une fraction ne change pas de valeur quand on divise le haut et le bas par le même nombre.",
      hint: "Cherche un nombre qui divise à la fois 6 et 8.",
    },
    {
      id: "m5frs-2",
      level: 1,
      type: "truefalse",
      question: "2/3 = 4/6",
      answer: true,
      explanation:
        "Vrai ! On passe de 2/3 à 4/6 en multipliant le numérateur et le dénominateur par 2. Les deux fractions représentent exactement la même quantité.",
    },
    {
      id: "m5frs-3",
      level: 1,
      type: "input",
      question: "Simplifie la fraction 10/15. (réponse sous la forme a/b)",
      answer: "2/3",
      explanation:
        "10 et 15 sont tous les deux dans la table de 5 : on divise le haut et le bas par 5. 10 ÷ 5 = 2 et 15 ÷ 5 = 3, donc 10/15 = 2/3. La fraction 2/3 est irréductible : on ne peut plus la simplifier.",
      hint: "10 et 15 ont un diviseur commun bien connu…",
    },
    {
      id: "m5frs-4",
      level: 1,
      type: "qcm",
      question: "Quelle est la plus grande fraction : 3/7 ou 5/7 ?",
      choices: ["3/7", "5/7", "Elles sont égales"],
      answer: 1,
      explanation:
        "Les deux fractions ont le même dénominateur : les parts sont de même taille (des septièmes). Cinq parts font plus que trois parts, donc 5/7 > 3/7.",
      hint: "Même dénominateur : compare les numérateurs.",
    },
    {
      id: "m5frs-5",
      level: 2,
      type: "input",
      question: "Calcule : 1/2 + 1/4. (réponse sous la forme a/b)",
      answer: "3/4",
      explanation:
        "Les dénominateurs sont différents, mais 4 = 2 × 2 : on transforme 1/2 en 2/4. Alors 2/4 + 1/4 = 3/4. Piège classique : 1/2 + 1/4 ne fait surtout pas 2/6 ! On n'additionne jamais les dénominateurs.",
      hint: "Transforme 1/2 en quarts avant d'additionner.",
    },
    {
      id: "m5frs-6",
      level: 2,
      type: "qcm",
      question:
        "Pour comparer 5/6 et 7/12, on met tout en douzièmes. Que devient 5/6 ?",
      choices: ["5/12", "7/12", "10/12", "11/12"],
      answer: 2,
      explanation:
        "12 = 6 × 2, donc on multiplie le numérateur ET le dénominateur de 5/6 par 2 : 5/6 = 10/12. On peut alors comparer : 10/12 > 7/12, donc 5/6 > 7/12. Erreur à éviter : écrire 5/12 en ne changeant que le dénominateur.",
      hint: "Par combien multiplie-t-on 6 pour obtenir 12 ? Fais pareil au numérateur.",
    },
    {
      id: "m5frs-7",
      level: 2,
      type: "input",
      question: "Calcule et simplifie : 5/6 − 1/3. (réponse sous la forme a/b)",
      answer: "1/2",
      accept: ["3/6"],
      explanation:
        "6 = 3 × 2, donc 1/3 = 2/6. Alors 5/6 − 2/6 = 3/6. On simplifie en divisant le haut et le bas par 3 : 3/6 = 1/2. Pense toujours à vérifier si ton résultat peut se simplifier.",
      hint: "Mets d'abord 1/3 en sixièmes.",
    },
    {
      id: "m5frs-8",
      level: 2,
      type: "truefalse",
      question: "7/5 > 1",
      answer: true,
      explanation:
        "Vrai ! Le numérateur (7) est plus grand que le dénominateur (5) : la fraction dépasse l'unité. En effet, 5/5 = 1, et 7/5 = 5/5 + 2/5 = 1 + 2/5.",
    },
    {
      id: "m5frs-9",
      level: 3,
      type: "input",
      question: "Écris 2 + 3/4 sous la forme d'une seule fraction a/b.",
      answer: "11/4",
      explanation:
        "On transforme l'entier en quarts : 2 = 8/4 (car 2 = 2 × 4/4). Puis 8/4 + 3/4 = 11/4. Vérification : 11/4 = 2,75, et 2 + 0,75 = 2,75.",
      hint: "Combien de quarts y a-t-il dans 2 unités ?",
    },
    {
      id: "m5frs-10",
      level: 3,
      type: "qcm",
      question: "Quelle est la plus grande fraction : 4/5 ou 7/10 ?",
      choices: ["4/5", "7/10", "Elles sont égales"],
      answer: 0,
      explanation:
        "10 = 5 × 2, donc 4/5 = 8/10. On compare : 8/10 > 7/10, donc 4/5 > 7/10. Ne compare jamais directement des numérateurs quand les dénominateurs sont différents : 7 > 4, et pourtant 7/10 < 4/5 !",
      hint: "Mets 4/5 en dixièmes.",
    },
    {
      id: "m5frs-11",
      level: 3,
      type: "input",
      question:
        "Tom mange 1/4 d'une tarte, sa sœur en mange 3/8. Quelle fraction de la tarte reste-t-il ? (réponse sous la forme a/b)",
      answer: "3/8",
      explanation:
        "Part mangée : 1/4 + 3/8. Comme 8 = 4 × 2, on a 1/4 = 2/8, donc 2/8 + 3/8 = 5/8. La tarte entière vaut 8/8, il reste 8/8 − 5/8 = 3/8. Piège : n'oublie pas la deuxième étape, la question porte sur ce qui RESTE, pas sur ce qui est mangé.",
      hint: "Calcule d'abord la part mangée, puis compare à la tarte entière (8/8).",
    },
    {
      id: "m5frs-12",
      level: 3,
      type: "truefalse",
      question: "1/2 + 1/3 = 2/5",
      answer: false,
      explanation:
        "Faux, et c'est LE piège des fractions ! On n'additionne jamais les numérateurs et les dénominateurs séparément. Le bon calcul : 1/2 = 3/6 et 1/3 = 2/6, donc 1/2 + 1/3 = 5/6. D'ailleurs 2/5 < 1/2 : impossible qu'une somme commençant par 1/2 soit plus petite que 1/2.",
      hint: "Une somme peut-elle être plus petite que l'un de ses termes ?",
    },
  ],
};
