import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "nombres-decimaux",
  num: 2,
  title: "Les nombres décimaux",
  domain: "nombres",
  icon: "CircleDot",
  teaser: "Comprendre la virgule pour ne plus jamais confondre 3,15 et 3,2.",
  objectives: [
    "Je sais passer d'une fraction décimale à l'écriture à virgule, et inversement",
    "Je connais la valeur de chaque chiffre : dixièmes, centièmes, millièmes",
    "Je sais comparer, ranger et encadrer des nombres décimaux",
    "Je sais placer un décimal sur une droite graduée",
    "Je sais arrondir un nombre décimal",
  ],
  lesson: [
    {
      title: "Des fractions décimales à la virgule",
      paragraphs: [
        "Quand on partage une unité en 10, 100 ou 1 000 parts égales, on obtient des dixièmes, des centièmes, des millièmes. Une fraction décimale est une fraction dont le dénominateur est 10, 100, 1 000…",
        "L'écriture à virgule n'est qu'une façon plus pratique d'écrire ces fractions : la virgule sépare la partie entière (à gauche) de la partie décimale (à droite).",
      ],
      example: [
        "7/10 = 0,7 (sept dixièmes).",
        "34/100 = 0,34 (trente-quatre centièmes).",
        "2 + 5/10 = 2,5 (deux unités et cinq dixièmes).",
      ],
      tip: "Un nombre décimal se lit sans dire « virgule » : 2,5 se lit « deux unités et cinq dixièmes ». Cette lecture t'indique directement la fraction décimale.",
    },
    {
      title: "Les rangs après la virgule",
      paragraphs: [
        "Après la virgule, chaque position a un nom : d'abord les dixièmes, puis les centièmes, puis les millièmes. Plus on s'éloigne de la virgule vers la droite, plus le rang est petit.",
        "Comme pour les entiers, la valeur d'un chiffre dépend de son rang : dans 6,58, le 5 vaut 5 dixièmes et le 8 vaut 8 centièmes.",
      ],
      example: [
        "Dans 12,345 :",
        "• le chiffre des dixièmes est 3,",
        "• le chiffre des centièmes est 4,",
        "• le chiffre des millièmes est 5.",
      ],
      tip: "Les rangs après la virgule se terminent tous en « -ièmes » : dixièmes, centièmes, millièmes. Ne confonds pas les dizaines (avant la virgule) et les dixièmes (après) !",
    },
    {
      title: "Un même nombre, plusieurs écritures",
      paragraphs: [
        "Un nombre décimal peut s'écrire de plusieurs façons toutes égales : avec une virgule, comme une fraction décimale, ou en décomposant.",
        "Attention aux zéros : ceux placés tout à droite de la partie décimale ne changent rien (5,60 = 5,6), mais un zéro entre la virgule et un chiffre est indispensable (5,06 n'est pas égal à 5,6 !).",
      ],
      example: [
        "4,07 = 4 + 7/100 = 407/100.",
        "3,50 = 3,5 = 3 + 5/10.",
        "En revanche, 3,05 ≠ 3,5 : le zéro des dixièmes compte !",
      ],
      tip: "Un zéro à la FIN de la partie décimale peut s'effacer. Un zéro au MILIEU, jamais.",
    },
    {
      title: "Comparer, ranger, encadrer",
      paragraphs: [
        "Pour comparer deux décimaux, on compare d'abord les parties entières. Si elles sont égales, on compare la partie décimale rang par rang : les dixièmes, puis les centièmes, puis les millièmes.",
        "Piège classique : 3,15 n'est PAS plus grand que 3,2. La partie décimale n'est pas un nombre entier ! On compare les dixièmes : 1 < 2, donc 3,15 < 3,2.",
        "Entre deux nombres décimaux différents, on peut toujours en trouver d'autres : entre 3,4 et 3,5 il y a 3,41 ; 3,45 ; 3,478…",
      ],
      example: [
        "7,3 > 7,08 car 3 dixièmes > 0 dixième.",
        "3,15 < 3,2 car on compare 3,15 et 3,20 : au rang des centièmes, 5 < … non ! Dès les dixièmes, 1 < 2.",
      ],
      tip: "Pour comparer sans te tromper, complète avec des zéros pour avoir autant de chiffres après la virgule : comparer 3,15 et 3,2 revient à comparer 3,15 et 3,20.",
    },
    {
      title: "Droite graduée et arrondis",
      paragraphs: [
        "Sur une droite graduée, les décimaux se placent comme les entiers : on repère la valeur d'une graduation, puis on compte. Pour placer 2,37, on peut « zoomer » entre 2,3 et 2,4 en partageant l'intervalle en 10.",
        "Arrondir un nombre, c'est le remplacer par la valeur « ronde » la plus proche. Pour arrondir à l'unité, on regarde le chiffre des dixièmes : s'il vaut 5 ou plus, on arrondit au-dessus ; sinon, en dessous. Même méthode pour arrondir au dixième en regardant les centièmes.",
      ],
      example: [
        "Arrondi de 6,8 à l'unité : 7 (car 8 ≥ 5).",
        "Arrondi de 12,481 au dixième : 12,5 (le chiffre des centièmes est 8, donc on monte).",
        "Arrondi de 3,42 au dixième : 3,4 (le chiffre des centièmes est 2, donc on garde).",
      ],
      tip: "Regarde UN SEUL chiffre : celui juste après le rang demandé. De 0 à 4 on garde, de 5 à 9 on monte.",
      figure: "droite-graduee",
    },
  ],
  exercises: [
    {
      id: "dec-1",
      level: 1,
      type: "qcm",
      question: "Quelle fraction décimale est égale à 0,7 ?",
      choices: ["7/10", "7/100", "7/1000", "70/1000"],
      answer: 0,
      explanation:
        "0,7 se lit « sept dixièmes » : le 7 est au rang des dixièmes, juste après la virgule. Donc 0,7 = 7/10. Attention : 7/100 = 0,07 et 7/1000 = 0,007, ce sont des nombres bien plus petits. (Et 70/1000 = 0,070 = 0,07 : encore un piège !)",
      hint: "Le 7 est juste après la virgule : à quel rang est-il ?",
    },
    {
      id: "dec-2",
      level: 1,
      type: "qcm",
      question: "Dans le nombre 45,382, quel est le chiffre des centièmes ?",
      choices: ["3", "8", "2", "4"],
      answer: 1,
      explanation:
        "Après la virgule, on lit dans l'ordre : 3 dixièmes, 8 centièmes, 2 millièmes. Le chiffre des centièmes est donc 8. Piège classique : ne confonds pas les centièmes (après la virgule) et les centaines (avant la virgule).",
      hint: "Après la virgule : dixièmes, puis centièmes, puis millièmes.",
    },
    {
      id: "dec-3",
      level: 1,
      type: "truefalse",
      question: "5,60 est égal à 5,6.",
      answer: true,
      explanation:
        "Vrai ! Un zéro placé tout à droite de la partie décimale ne change pas le nombre : 5,60 = 5,6 (soixante centièmes, c'est exactement six dixièmes). En revanche, 5,06 ne serait pas égal à 5,6 : un zéro entre la virgule et un chiffre compte, lui !",
    },
    {
      id: "dec-4",
      level: 1,
      type: "input",
      question: "Écris en écriture décimale (à virgule) : 4 + 7/100.",
      answer: "4,07",
      explanation:
        "4 est la partie entière. 7/100, c'est 7 centièmes : le 7 se place au rang des centièmes, donc au DEUXIÈME rang après la virgule. Il faut un 0 au rang des dixièmes : 4 + 7/100 = 4,07. Le piège classique est d'écrire 4,7, qui vaut 4 + 7/10 : dix fois trop !",
      hint: "7/100, c'est 7 centièmes : à quel rang après la virgule se place le 7 ?",
    },
    {
      id: "dec-5",
      level: 2,
      type: "qcm",
      question: "Quel est le plus grand de ces nombres : 3,15 / 3,2 / 3,148 / 3,09 ?",
      choices: ["3,15", "3,2", "3,148", "3,09"],
      answer: 1,
      explanation:
        "Les parties entières sont égales (3), donc on compare les dixièmes : 1, 2, 1, 0. Le plus grand chiffre des dixièmes est 2, donc 3,2 est le plus grand. Le piège : croire que 3,148 > 3,2 « parce que 148 > 2 ». Faux ! La partie décimale ne se lit pas comme un entier : 3,2 = 3,200 > 3,148.",
      hint: "Complète tous les nombres avec des zéros pour avoir 3 chiffres après la virgule.",
    },
    {
      id: "dec-6",
      level: 2,
      type: "input",
      question: "Écris la fraction décimale 235/100 en écriture à virgule.",
      answer: "2,35",
      explanation:
        "235/100, c'est 235 centièmes. Or 100 centièmes = 1 unité, donc 235 centièmes = 2 unités et 35 centièmes : 235/100 = 2,35. Autre méthode : diviser par 100 décale la virgule de 2 rangs vers la gauche : 235 → 2,35.",
      hint: "Combien de centièmes faut-il pour faire une unité entière ?",
    },
    {
      id: "dec-7",
      level: 2,
      type: "input",
      question:
        "Sur une droite graduée de 0,1 en 0,1, un point est placé 3 graduations après 2,5. Quelle est son abscisse ?",
      answer: "2,8",
      explanation:
        "Chaque graduation vaut 0,1 (un dixième). Trois graduations valent 3 × 0,1 = 0,3. L'abscisse est donc 2,5 + 0,3 = 2,8. On peut aussi compter de dixième en dixième : 2,6 ; 2,7 ; 2,8.",
      hint: "Compte de 0,1 en 0,1 à partir de 2,5.",
    },
    {
      id: "dec-8",
      level: 2,
      type: "qcm",
      question: "Range dans l'ordre croissant : 6,4 / 6,04 / 6,34 / 6,3",
      choices: [
        "6,04 < 6,3 < 6,34 < 6,4",
        "6,04 < 6,34 < 6,3 < 6,4",
        "6,3 < 6,4 < 6,04 < 6,34",
        "6,4 < 6,34 < 6,3 < 6,04",
      ],
      answer: 0,
      explanation:
        "Astuce : on écrit tout avec 2 chiffres après la virgule : 6,40 / 6,04 / 6,34 / 6,30. Il ne reste qu'à comparer 40, 04, 34 et 30 : 04 < 30 < 34 < 40. Donc 6,04 < 6,3 < 6,34 < 6,4. Le piège était de placer 6,3 après 6,34.",
      hint: "Écris tous les nombres avec deux chiffres après la virgule.",
    },
    {
      id: "dec-9",
      level: 3,
      type: "input",
      question: "Quel est l'arrondi de 12,481 au dixième ?",
      answer: "12,5",
      explanation:
        "Arrondir au dixième, c'est choisir entre 12,4 et 12,5. On regarde le chiffre juste après le rang des dixièmes : le chiffre des centièmes est 8. Comme 8 ≥ 5, on arrondit au-dessus : 12,5. Piège : ne regarde qu'UN seul chiffre (le 8), pas « 81 » en entier — même si ici le résultat serait le même, la méthode sûre est celle-là.",
      hint: "Regarde le chiffre des centièmes : est-il plus petit ou plus grand que 5 ?",
    },
    {
      id: "dec-10",
      level: 3,
      type: "truefalse",
      question: "Il n'existe aucun nombre décimal entre 3,4 et 3,5.",
      answer: false,
      explanation:
        "Faux ! Entre 3,4 et 3,5 il y a une infinité de décimaux : 3,41 ; 3,45 ; 3,499… Il suffit d'ajouter des chiffres après la virgule. C'est une grande différence avec les entiers : entre 34 et 35, il n'y a aucun entier, mais entre deux décimaux différents, on peut toujours en glisser d'autres.",
      hint: "Pense à 3,4 comme 3,40 et à 3,5 comme 3,50.",
    },
    {
      id: "dec-11",
      level: 3,
      type: "qcm",
      question:
        "Au concours de saut en longueur, Ana saute 3,08 m, Bilal saute 3,4 m et Chloé saute 3,35 m. Qui a fait le plus long saut ?",
      choices: ["Ana", "Bilal", "Chloé"],
      answer: 1,
      explanation:
        "On compare 3,08 / 3,4 / 3,35, c'est-à-dire 3,08 / 3,40 / 3,35 une fois complétés. Au rang des dixièmes : 0 < 3 < 4. C'est Bilal qui gagne avec 3,4 m. Le piège : croire que 3,35 > 3,4 parce que « 35 > 4 ». Non : 3,40 > 3,35 !",
      hint: "3,4 m, c'est la même chose que 3,40 m.",
    },
    {
      id: "dec-12",
      level: 3,
      type: "input",
      question:
        "Encadre 7,283 entre deux nombres consécutifs ayant un seul chiffre après la virgule : ? < 7,283 < ?. Donne le premier nombre de l'encadrement.",
      answer: "7,2",
      explanation:
        "On cherche les deux « dixièmes » qui entourent 7,283. La partie 7,2 est juste en dessous (car 7,283 = 7,2 + 0,083) et 7,3 est juste au-dessus. Donc 7,2 < 7,283 < 7,3, et le premier nombre est 7,2. Attention : encadrer n'est pas arrondir ! On donne les DEUX voisins, sans choisir le plus proche.",
      hint: "Garde la partie entière et le chiffre des dixièmes, et regarde entre quels dixièmes le nombre se trouve.",
    },
  ],
  videos: [
    { title: "Décomposer un nombre en fractions décimales - Sixième", youtubeId: "uqBEfHwZTX8", channel: "Yvan Monka" },
    { title: "Comparer les nombres décimaux - Sixième", youtubeId: "fr5GemewG4Q", channel: "Yvan Monka" },
  ],
};
