import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "nombres-entiers",
  num: 1,
  title: "Les nombres entiers",
  domain: "nombres",
  icon: "Hash",
  teaser: "Lire, écrire et comparer les grands nombres sans se tromper.",
  objectives: [
    "Je sais lire et écrire des nombres entiers jusqu'aux milliards",
    "Je connais la valeur de chaque chiffre selon son rang",
    "Je sais comparer, ranger et encadrer des nombres entiers",
    "Je sais placer un nombre entier sur une droite graduée",
  ],
  lesson: [
    {
      title: "Lire et écrire les grands nombres",
      paragraphs: [
        "Pour lire facilement un grand nombre, on regroupe ses chiffres par tranches de 3 en partant de la droite : les unités, les milliers, les millions, les milliards.",
        "Chaque tranche se lit comme un nombre de 1 à 999, suivi de son nom : « millions », « mille »…",
      ],
      example: [
        "8 456 210 se lit : « huit millions quatre cent cinquante-six mille deux cent dix ».",
        "En lettres, « mille » est invariable : on écrit « quatre mille », jamais « quatre milles ».",
      ],
      tip: "Quand tu écris un grand nombre en chiffres, laisse un petit espace entre chaque tranche de 3 chiffres : 8 456 210 est bien plus lisible que 8456210.",
    },
    {
      title: "La valeur des chiffres",
      paragraphs: [
        "Dans un nombre, la valeur d'un chiffre dépend de sa position (son rang) : unités, dizaines, centaines, unités de mille…",
        "Dans 3 572, le chiffre 5 est le chiffre des centaines : il vaut 500. Attention à bien faire la différence entre « le chiffre des centaines » (5) et « le nombre de centaines » (35, car 3 572 = 35 centaines et 72 unités).",
      ],
      example: [
        "Dans 46 803 :",
        "• le chiffre des dizaines est 0,",
        "• le chiffre des unités de mille est 6,",
        "• le nombre de centaines est 468.",
      ],
      tip: "Pour trouver le NOMBRE de centaines, cache les deux derniers chiffres : dans 46 8|03, il reste 468.",
    },
    {
      title: "Comparer et ranger",
      paragraphs: [
        "Pour comparer deux nombres entiers : celui qui a le plus de chiffres est le plus grand. S'ils ont autant de chiffres, on compare chiffre par chiffre en partant de la gauche.",
        "On utilise les symboles < (est plus petit que) et > (est plus grand que). Le symbole « ouvre la bouche » toujours vers le plus grand !",
        "Ranger dans l'ordre croissant, c'est du plus petit au plus grand. Dans l'ordre décroissant, c'est du plus grand au plus petit.",
      ],
      example: [
        "9 876 < 10 234 (4 chiffres contre 5 chiffres).",
        "45 621 > 45 289 car au rang des centaines, 6 > 2.",
      ],
      tip: "Croissant = ça grandit (comme la croissance !). Décroissant = ça descend.",
    },
    {
      title: "La droite graduée",
      paragraphs: [
        "Sur une droite graduée, chaque point correspond à un nombre : c'est son abscisse. Les graduations sont régulières : le même écart représente toujours le même nombre d'unités.",
        "Pour lire une abscisse, on repère d'abord la valeur d'une graduation (l'écart entre deux traits), puis on compte.",
      ],
      example: [
        "Si les graduations vont de 100 en 100 et qu'un point est 3 graduations après 2 000, son abscisse est 2 300.",
      ],
      figure: "droite-graduee",
    },
  ],
  exercises: [
    {
      id: "ent-1",
      level: 1,
      type: "qcm",
      question: "Comment s'écrit en chiffres « trois millions cinquante mille deux cents » ?",
      choices: ["3 050 200", "3 500 200", "3 050 020", "300 050 200"],
      answer: 0,
      explanation:
        "On remplit chaque tranche de 3 chiffres : 3 millions → 3, 50 mille → 050, 200 unités → 200. Résultat : 3 050 200. Piège classique : « cinquante mille » s'écrit 050 dans la tranche des mille, pas 500 !",
      hint: "Découpe le nombre en tranches : millions / mille / unités.",
    },
    {
      id: "ent-2",
      level: 1,
      type: "qcm",
      question: "Dans le nombre 47 386, quel est le chiffre des centaines ?",
      choices: ["4", "7", "3", "8"],
      answer: 2,
      explanation:
        "En partant de la droite : 6 unités, 8 dizaines, 3 centaines, 7 unités de mille, 4 dizaines de mille. Le chiffre des centaines est donc 3.",
      hint: "Compte les rangs en partant de la droite : unités, dizaines, centaines…",
    },
    {
      id: "ent-3",
      level: 1,
      type: "truefalse",
      question: "9 999 est plus grand que 10 001.",
      answer: false,
      explanation:
        "Faux ! 9 999 a 4 chiffres et 10 001 en a 5. Un nombre entier qui a plus de chiffres est toujours plus grand : 9 999 < 10 001.",
    },
    {
      id: "ent-4",
      level: 1,
      type: "input",
      question: "Écris en chiffres : « douze mille sept cent cinq ». (sans espaces)",
      answer: "12705",
      accept: ["12 705"],
      explanation:
        "Douze mille → 12 dans la tranche des mille. Sept cent cinq → 705 dans la tranche des unités. On obtient 12 705. Attention au 0 des dizaines : « sept cent cinq », pas « sept cent cinquante » !",
      hint: "Il y a un zéro caché quelque part…",
    },
    {
      id: "ent-5",
      level: 2,
      type: "qcm",
      question: "Quel est le NOMBRE de centaines dans 25 641 ?",
      choices: ["6", "256", "56", "2 564"],
      answer: 1,
      explanation:
        "Le nombre de centaines s'obtient en cachant les 2 derniers chiffres : 256|41 → 256 centaines (et il reste 41 unités). Ne confonds pas avec le CHIFFRE des centaines, qui est 6.",
      hint: "Cache les deux derniers chiffres du nombre.",
    },
    {
      id: "ent-6",
      level: 2,
      type: "qcm",
      question: "Range dans l'ordre croissant : 5 830 / 5 083 / 5 308 / 5 803",
      choices: [
        "5 083 < 5 308 < 5 803 < 5 830",
        "5 830 < 5 803 < 5 308 < 5 083",
        "5 083 < 5 308 < 5 830 < 5 803",
        "5 308 < 5 083 < 5 803 < 5 830",
      ],
      answer: 0,
      explanation:
        "Tous ont 4 chiffres et commencent par 5. On compare le chiffre des centaines : 0 < 3 < 8. Puis pour 5 803 et 5 830, on compare les dizaines : 0 < 3. Ordre croissant : 5 083 < 5 308 < 5 803 < 5 830.",
    },
    {
      id: "ent-7",
      level: 2,
      type: "input",
      question: "Complète : 34 centaines et 7 unités = ?",
      answer: "3407",
      accept: ["3 407"],
      explanation:
        "34 centaines = 34 × 100 = 3 400. On ajoute les 7 unités : 3 400 + 7 = 3 407.",
      hint: "34 centaines, c'est 34 × 100.",
    },
    {
      id: "ent-8",
      level: 2,
      type: "input",
      question:
        "Sur une droite graduée de 500 en 500, un point est placé 3 graduations après 4 000. Quelle est son abscisse ?",
      answer: "5500",
      accept: ["5 500"],
      explanation:
        "Chaque graduation vaut 500. Trois graduations valent 3 × 500 = 1 500. L'abscisse est donc 4 000 + 1 500 = 5 500.",
      hint: "Combien valent 3 graduations de 500 ?",
    },
    {
      id: "ent-9",
      level: 3,
      type: "qcm",
      question: "Quel est le plus grand nombre entier de 4 chiffres TOUS différents ?",
      choices: ["9 999", "9 876", "9 878", "8 765"],
      answer: 1,
      explanation:
        "On veut le plus grand possible, donc on place les plus grands chiffres à gauche : 9, puis 8, puis 7, puis 6 → 9 876. (9 999 est éliminé car ses chiffres ne sont pas tous différents.)",
    },
    {
      id: "ent-10",
      level: 3,
      type: "input",
      question:
        "Un stade contient 38 450 places. Encadre ce nombre entre deux milliers consécutifs : ? < 38 450 < ?. Donne le premier nombre de l'encadrement.",
      answer: "38000",
      accept: ["38 000"],
      explanation:
        "Encadrer au millier, c'est trouver les deux multiples de 1 000 qui entourent le nombre : 38 000 < 38 450 < 39 000. Le premier est 38 000.",
      hint: "Quels sont les multiples de 1 000 juste avant et juste après ?",
    },
    {
      id: "ent-11",
      level: 3,
      type: "truefalse",
      question:
        "Il existe exactement 9 000 nombres entiers de 4 chiffres (de 1 000 à 9 999).",
      answer: true,
      explanation:
        "Vrai ! De 1 000 à 9 999, on compte 9 999 − 1 000 + 1 = 9 000 nombres. Le « +1 » est important : les deux bornes comptent.",
    },
    {
      id: "ent-12",
      level: 3,
      type: "input",
      question:
        "La population d'une ville est « deux cent trois mille quarante » habitants. Écris ce nombre en chiffres. (sans espaces)",
      answer: "203040",
      accept: ["203 040"],
      explanation:
        "Deux cent trois mille → 203 dans la tranche des mille. Quarante → 040 dans la tranche des unités. Résultat : 203 040. Deux zéros pièges : celui de 2_0_3 et celui de 0_40 !",
      hint: "Deux zéros se cachent dans ce nombre.",
    },
  ],
};
