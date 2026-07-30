import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-statistiques",
  subject: "maths",
  grade: "5e",
  num: 7,
  title: "Statistiques",
  domain: "donnees",
  icon: "BarChart3",
  teaser: "Effectifs, fréquences, moyennes : faire parler les données sans se faire piéger.",
  objectives: [
    "Je sais déterminer des effectifs et l'effectif total d'une série",
    "Je sais calculer une fréquence et l'exprimer en fraction, en décimal ou en pourcentage",
    "Je sais regrouper des données en classes",
    "Je sais calculer une moyenne (et je découvre la moyenne pondérée)",
    "Je sais lire un diagramme avec un regard critique",
  ],
  lesson: [
    {
      title: "Série de données et effectifs",
      paragraphs: [
        "Une série statistique, c'est une collection de données recueillies sur un groupe : les notes d'une classe, les sports préférés, les tailles des élèves…",
        "L'effectif d'une valeur est le nombre de fois où elle apparaît dans la série. L'effectif total est le nombre total de données.",
        "Pour y voir clair, on range les données dans un tableau d'effectifs : une ligne pour les valeurs, une ligne pour leurs effectifs.",
      ],
      example: [
        "Notes d'un groupe : 8, 12, 12, 15, 12, 8.",
        "Effectif de la note 12 : elle apparaît 3 fois, donc 3.",
        "Effectif total : 6 données en tout.",
      ],
      tip: "Quand tu comptes des effectifs à la main, barre chaque donnée déjà comptée : c'est le meilleur remède contre les oublis et les doubles comptages.",
    },
    {
      title: "Les fréquences",
      paragraphs: [
        "La fréquence d'une valeur est la proportion qu'elle représente dans la série : fréquence = effectif de la valeur ÷ effectif total.",
        "Une fréquence peut s'écrire sous trois formes équivalentes : en fraction (5/20), en nombre décimal (0,25) ou en pourcentage (25 %). C'est le même nombre, habillé différemment.",
        "Une fréquence est toujours comprise entre 0 et 1 (entre 0 % et 100 %), et la somme de toutes les fréquences d'une série vaut 1 (soit 100 %).",
      ],
      example: [
        "Dans une classe de 20 élèves, 5 portent des lunettes.",
        "Fréquence : 5/20 = 1/4 = 0,25 = 25 %.",
      ],
      tip: "Les fréquences permettent de comparer des groupes de tailles différentes : 5 porteurs de lunettes sur 20, c'est proportionnellement plus que 6 sur 30 (25 % contre 20 %).",
    },
    {
      title: "Regrouper en classes",
      paragraphs: [
        "Quand une série contient beaucoup de valeurs différentes (des tailles en cm, par exemple), un tableau valeur par valeur devient illisible. On regroupe alors les données en classes : des intervalles comme « de 150 à 160 cm ».",
        "Chaque classe a son effectif : le nombre de données qui tombent dedans. Le tableau devient plus court et les tendances apparaissent.",
        "En échange, on perd de la précision : savoir qu'un élève est dans la classe « 150 à 160 cm » ne dit pas sa taille exacte. C'est le compromis du regroupement.",
      ],
      example: [
        "Tailles de 25 élèves regroupées en classes : 140 à 150 cm → 4 élèves ; 150 à 160 cm → 13 élèves ; 160 à 170 cm → 8 élèves.",
        "On lit d'un coup d'œil que la classe la plus nombreuse est « 150 à 160 cm ».",
      ],
      tip: "Vérifie toujours que la somme des effectifs des classes redonne l'effectif total : 4 + 13 + 8 = 25. Si ça ne colle pas, une donnée s'est perdue en route !",
    },
    {
      title: "La moyenne",
      paragraphs: [
        "La moyenne d'une série se calcule en additionnant toutes les données, puis en divisant par l'effectif total. Elle résume la série en un seul nombre : la valeur qu'aurait chaque donnée si tout était réparti équitablement.",
        "En découverte : la moyenne pondérée. Quand des notes ont des coefficients, chaque note compte autant de fois que son coefficient. On multiplie chaque note par son coefficient, on additionne, puis on divise par la somme des coefficients.",
        "Attention aux idées reçues : la moyenne ne dit pas tout ! Une moyenne de 12 peut cacher des notes très regroupées… ou très dispersées, et il se peut qu'aucune donnée ne vaille exactement 12.",
      ],
      example: [
        "Notes 10, 12 et 14 : moyenne = (10 + 12 + 14) ÷ 3 = 36 ÷ 3 = 12.",
        "Contrôle coefficient 2 noté 8, devoir coefficient 1 noté 14 : moyenne pondérée = (8 × 2 + 14 × 1) ÷ 3 = 30 ÷ 3 = 10.",
      ],
      tip: "Contrôle de cohérence express : la moyenne est TOUJOURS comprise entre la plus petite et la plus grande valeur. Si tu trouves autre chose, cherche l'erreur.",
    },
    {
      title: "Lire un diagramme d'un œil critique",
      paragraphs: [
        "Les diagrammes en bâtons, les diagrammes circulaires et les graphiques rendent les données visibles en un instant. Mais une image peut aussi tromper, volontairement ou non.",
        "Piège classique : un axe vertical qui ne commence pas à zéro. Les écarts entre les barres semblent alors énormes, alors que les valeurs réelles sont proches. Autres pièges : des graduations irrégulières, ou des dessins dont la surface exagère les différences.",
        "Réflexe à adopter devant tout diagramme : lire le titre, les axes, les unités et l'origine de l'axe AVANT de tirer une conclusion.",
      ],
      example: [
        "Deux barres de ventes : 95 et 100. Avec un axe qui démarre à 90, la seconde barre paraît deux fois plus haute. Avec un axe qui démarre à 0, on voit que l'écart n'est que de 5 %.",
      ],
      tip: "Première question devant un diagramme : « où commence l'axe vertical ? ». S'il ne part pas de zéro, méfiance sur l'impression visuelle.",
    },
  ],
  exercises: [
    {
      id: "m5sta-1",
      level: 1,
      type: "qcm",
      question:
        "Voici les notes d'un groupe : 8, 12, 12, 15, 12, 8. Quel est l'effectif de la note 12 ?",
      choices: ["2", "3", "12", "6"],
      answer: 1,
      explanation:
        "L'effectif d'une valeur est le nombre de fois où elle apparaît. La note 12 apparaît 3 fois dans la série. Ne confonds pas la valeur (12) et son effectif (3) !",
      hint: "Compte combien de fois 12 apparaît dans la liste.",
    },
    {
      id: "m5sta-2",
      level: 1,
      type: "input",
      question:
        "Toujours avec la série 8, 12, 12, 15, 12, 8 : quel est l'effectif total ?",
      answer: "6",
      explanation:
        "L'effectif total est le nombre total de données de la série. On compte : 8, 12, 12, 15, 12, 8, soit 6 notes en tout. On peut vérifier avec le tableau d'effectifs : 2 (pour la note 8) + 3 (pour 12) + 1 (pour 15) = 6.",
      hint: "Compte toutes les données, même celles qui se répètent.",
    },
    {
      id: "m5sta-3",
      level: 1,
      type: "truefalse",
      question: "Une fréquence est toujours comprise entre 0 et 1.",
      answer: true,
      explanation:
        "Vrai ! Une fréquence est un quotient effectif ÷ effectif total, et l'effectif d'une valeur ne peut pas dépasser l'effectif total. En pourcentage, cela donne : entre 0 % et 100 %. Une fréquence de 1,3 ou de 130 % signale une erreur de calcul.",
    },
    {
      id: "m5sta-4",
      level: 1,
      type: "qcm",
      question:
        "Dans une classe de 20 élèves, 5 portent des lunettes. Quelle est la fréquence des porteurs de lunettes ?",
      choices: ["0,25", "0,5", "4", "5 %"],
      answer: 0,
      explanation:
        "Fréquence = effectif ÷ effectif total = 5/20 = 1/4 = 0,25, soit 25 %. La proposition « 5 % » est le piège : 5 est l'effectif, pas le pourcentage.",
      hint: "Divise l'effectif (5) par l'effectif total (20).",
    },
    {
      id: "m5sta-5",
      level: 2,
      type: "input",
      question: "Calcule la moyenne des notes 10, 12 et 14.",
      answer: "12",
      explanation:
        "On additionne toutes les notes puis on divise par leur nombre : (10 + 12 + 14) ÷ 3 = 36 ÷ 3 = 12. Cohérence : 12 est bien compris entre la plus petite note (10) et la plus grande (14).",
      hint: "Somme des notes, puis division par 3.",
    },
    {
      id: "m5sta-6",
      level: 2,
      type: "qcm",
      question:
        "Dans un club de 25 membres, 8 sont des filles. Quelle est la fréquence des filles, en pourcentage ?",
      choices: ["8 %", "25 %", "32 %", "17 %"],
      answer: 2,
      explanation:
        "Fréquence = 8/25. Pour passer sur 100, on multiplie le numérateur et le dénominateur par 4 : 8/25 = 32/100 = 32 %. Piège : 8 est l'effectif, pas le pourcentage.",
      hint: "Transforme 8/25 en une fraction de dénominateur 100.",
    },
    {
      id: "m5sta-7",
      level: 2,
      type: "truefalse",
      question:
        "Quand on regroupe des tailles en classes comme « de 150 à 160 cm », on perd l'information des valeurs exactes.",
      answer: true,
      explanation:
        "Vrai ! Le regroupement en classes rend le tableau lisible et fait apparaître les tendances, mais on ne sait plus si un élève de la classe « 150 à 160 cm » mesure 151 ou 159 cm. Lisibilité gagnée, précision perdue : c'est le compromis à connaître.",
    },
    {
      id: "m5sta-8",
      level: 2,
      type: "input",
      question: "Calcule la moyenne de la série : 5 ; 9 ; 10 ; 16.",
      answer: "10",
      explanation:
        "Somme : 5 + 9 + 10 + 16 = 40. Effectif total : 4. Moyenne : 40 ÷ 4 = 10. Remarque : une des données vaut justement 10, mais c'est une coïncidence, pas une obligation.",
      hint: "Additionne les 4 valeurs, puis divise par 4.",
    },
    {
      id: "m5sta-9",
      level: 3,
      type: "input",
      question:
        "Un contrôle de coefficient 2 est noté 8, un devoir de coefficient 1 est noté 14. Calcule la moyenne pondérée.",
      answer: "10",
      explanation:
        "Chaque note compte autant de fois que son coefficient : (8 × 2 + 14 × 1) ÷ (2 + 1) = (16 + 14) ÷ 3 = 30 ÷ 3 = 10. Piège classique : diviser par 2 (le nombre de notes) au lieu de 3 (la somme des coefficients). La moyenne penche vers le 8, car il pèse deux fois plus lourd.",
      hint: "On divise par la somme des coefficients, pas par le nombre de notes.",
    },
    {
      id: "m5sta-10",
      level: 3,
      type: "qcm",
      question:
        "Un diagramme en bâtons compare des ventes de 95 et 100 unités, mais son axe vertical commence à 90 au lieu de 0. Quel est l'effet produit ?",
      choices: [
        "Aucun, le diagramme reste fidèle",
        "L'écart entre les barres paraît beaucoup plus grand qu'il ne l'est",
        "Les valeurs deviennent fausses",
        "L'écart paraît plus petit qu'il ne l'est",
      ],
      answer: 1,
      explanation:
        "Avec un axe qui démarre à 90, la barre de 100 paraît deux fois plus haute que celle de 95 (hauteurs visibles : 10 contre 5), alors que l'écart réel n'est que d'environ 5 %. Les valeurs restent exactes, mais l'IMPRESSION visuelle est trompeuse. D'où le réflexe : toujours regarder où commence l'axe.",
      hint: "Compare la hauteur visible des barres au-dessus de 90.",
    },
    {
      id: "m5sta-11",
      level: 3,
      type: "truefalse",
      question:
        "Si la moyenne d'une classe à un contrôle est 12, alors au moins un élève a eu exactement 12.",
      answer: false,
      explanation:
        "Faux ! Contre-exemple : deux élèves notés 10 et 14 ont pour moyenne (10 + 14) ÷ 2 = 12, sans qu'aucun n'ait eu 12. La moyenne résume la série, mais elle n'est pas forcément une note obtenue.",
      hint: "Cherche deux notes différentes dont la moyenne vaut 12.",
    },
    {
      id: "m5sta-12",
      level: 3,
      type: "input",
      question:
        "Un glacier vend 24 glaces lundi, 36 mardi, 18 mercredi et 42 jeudi. Combien de glaces vend-il en moyenne par jour ?",
      answer: "30",
      explanation:
        "Somme des ventes : 24 + 36 + 18 + 42 = 120 glaces. Nombre de jours : 4. Moyenne : 120 ÷ 4 = 30 glaces par jour. Cohérence : 30 est bien entre le minimum (18) et le maximum (42). Astuce de calcul : 24 + 36 = 60 et 18 + 42 = 60, donc 120 au total.",
      hint: "Total des glaces vendues, divisé par le nombre de jours.",
    },
  ],
  videos: [
    { title: "Calculer des fréquences - Cinquième", youtubeId: "MwNV5eCBFrI", channel: "Yvan Monka" },
  ],
};
