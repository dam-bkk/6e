import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "probabilites",
  num: 15,
  title: "Les probabilités",
  domain: "donnees",
  icon: "Dices",
  teaser: "Mesurer la chance, du « impossible » au « certain ».",
  objectives: [
    "Je sais passer de « a chances sur b » à la fraction a/b",
    "Je sais qu'une probabilité est toujours un nombre entre 0 et 1",
    "Je sais calculer une probabilité simple quand toutes les issues ont la même chance",
    "Je sais comparer ce qu'on observe en vrai avec la probabilité calculée",
  ],
  lesson: [
    {
      title: "Mesurer la chance",
      paragraphs: [
        "Quand on lance une pièce, on ne sait pas si elle tombera sur pile ou sur face : c'est le hasard. Mais on peut mesurer la chance que quelque chose arrive : c'est la probabilité.",
        "Une probabilité est un nombre entre 0 et 1. Une probabilité de 0, c'est impossible (obtenir 7 avec un dé classique). Une probabilité de 1, c'est certain (obtenir un nombre entre 1 et 6). Entre les deux, plus la probabilité est proche de 1, plus c'est probable.",
      ],
      example: [
        "Impossible → probabilité 0.",
        "Une chance sur deux → probabilité 1/2 = 0,5.",
        "Certain → probabilité 1.",
      ],
      tip: "Imagine une échelle de 0 à 1 : impossible tout en bas, certain tout en haut, et « une chance sur deux » pile au milieu.",
    },
    {
      title: "De « a chances sur b » à la fraction",
      paragraphs: [
        "« J'ai 1 chance sur 6 d'obtenir un 4 avec un dé » se traduit par la fraction 1/6. « 3 chances sur 10 » se traduit par 3/10, qu'on peut aussi écrire 0,3 ou 30 %.",
        "Une même probabilité peut donc s'écrire en fraction, en nombre décimal ou en pourcentage : 1/2 = 0,5 = 50 %.",
      ],
      example: [
        "Un sac contient 10 boules dont 3 rouges. La probabilité de tirer une rouge est 3/10 = 0,3 = 30 %.",
      ],
      tip: "Fraction, décimal, pourcentage : trois costumes pour le même nombre. Entraîne-toi à passer de l'un à l'autre !",
    },
    {
      title: "Quand toutes les issues ont la même chance",
      paragraphs: [
        "Un résultat possible d'une expérience s'appelle une issue. Avec un dé équilibré, il y a 6 issues, et chacune a exactement la même chance de sortir : on dit qu'il y a équiprobabilité.",
        "Dans ce cas, la probabilité d'un événement se calcule facilement : c'est le nombre d'issues favorables divisé par le nombre total d'issues.",
      ],
      example: [
        "Probabilité d'obtenir un nombre pair avec un dé : les issues favorables sont 2, 4 et 6, soit 3 sur 6.",
        "Probabilité = 3/6 = 1/2.",
      ],
      tip: "Attention au piège célèbre : deux résultats possibles, ce n'est PAS forcément une chance sur deux ! Au loto « gagner ou perdre » sont deux issues… qui n'ont pas du tout la même chance.",
    },
    {
      title: "Tester en vrai : la fréquence",
      paragraphs: [
        "Si tu lances une pièce 100 fois, tu n'obtiendras pas forcément exactement 50 fois pile. Le hasard fait fluctuer les résultats !",
        "Mais plus on répète l'expérience un grand nombre de fois, plus la fréquence observée (nombre de piles ÷ nombre de lancers) se rapproche de la probabilité théorique (0,5). C'est ce qui permet de vérifier si un dé est truqué : si le 6 sort 400 fois sur 600 lancers, il y a un problème !",
      ],
      example: [
        "60 lancers d'un dé équilibré : le 3 est sorti 11 fois. Fréquence : 11/60 ≈ 0,18, proche de 1/6 ≈ 0,17. Rien d'anormal.",
      ],
      tip: "Probabilité = ce qu'on calcule AVANT. Fréquence = ce qu'on observe APRÈS. Les deux se rapprochent quand on répète beaucoup l'expérience.",
    },
  ],
  exercises: [
    {
      id: "prob-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la probabilité d'un événement certain ?",
      choices: ["0", "0,5", "1", "100"],
      answer: 2,
      explanation:
        "Un événement certain a une probabilité de 1 (c'est-à-dire 100 %). Attention : on écrit 1 ou 100 %, mais jamais « 100 » tout seul — une probabilité ne dépasse jamais 1 !",
    },
    {
      id: "prob-2",
      level: 1,
      type: "input",
      question:
        "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un 5 ? (réponse en fraction, comme a/b)",
      answer: "1/6",
      explanation:
        "Il y a 6 issues possibles (1, 2, 3, 4, 5, 6), toutes avec la même chance, et une seule est favorable (le 5). La probabilité est donc 1/6.",
      hint: "Combien d'issues possibles ? Combien sont favorables ?",
    },
    {
      id: "prob-3",
      level: 1,
      type: "truefalse",
      question: "Une probabilité peut être égale à 1,3.",
      answer: false,
      explanation:
        "Faux ! Une probabilité est toujours comprise entre 0 (impossible) et 1 (certain). 1,3 est plus grand que 1, ce n'est donc pas une probabilité possible.",
    },
    {
      id: "prob-4",
      level: 1,
      type: "qcm",
      question: "« 3 chances sur 4 » correspond à quelle probabilité ?",
      choices: ["3/4", "4/3", "3,4", "34 %"],
      answer: 0,
      explanation:
        "« a chances sur b » se traduit par la fraction a/b : ici 3/4, c'est-à-dire 0,75 ou 75 %. Le piège 4/3 inverse numérateur et dénominateur — et dépasse 1, impossible pour une probabilité !",
      hint: "« sur » se traduit par la barre de fraction.",
    },
    {
      id: "prob-5",
      level: 2,
      type: "input",
      question:
        "Un sac contient 5 boules rouges et 3 boules bleues. On tire une boule au hasard. Quelle est la probabilité de tirer une bleue ? (réponse en fraction, comme a/b)",
      answer: "3/8",
      explanation:
        "Il y a 5 + 3 = 8 boules en tout, donc 8 issues équiprobables. 3 sont favorables (les bleues). Probabilité = 3/8. Le piège classique : diviser par 5 (les rouges) au lieu du TOTAL.",
      hint: "Combien de boules en tout dans le sac ?",
    },
    {
      id: "prob-6",
      level: 2,
      type: "qcm",
      question:
        "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
      choices: ["1/6", "1/3", "1/2", "2/6"],
      answer: 2,
      explanation:
        "Les nombres pairs du dé sont 2, 4 et 6 : 3 issues favorables sur 6. Probabilité = 3/6 = 1/2. (2/6 correspondrait à 2 issues favorables seulement, c'est faux.)",
      hint: "Liste les nombres pairs entre 1 et 6.",
    },
    {
      id: "prob-7",
      level: 2,
      type: "input",
      question: "Écris la probabilité 3/10 en pourcentage. (réponse : le nombre seul, sans le signe %)",
      answer: "30",
      explanation:
        "3/10 = 30/100 = 30 %. Pour passer d'une fraction sur 10 à un pourcentage, on multiplie le numérateur et le dénominateur par 10 pour obtenir des centièmes.",
      hint: "Un pourcentage, c'est un nombre de centièmes.",
    },
    {
      id: "prob-8",
      level: 2,
      type: "truefalse",
      question:
        "À un jeu, il n'y a que deux résultats possibles : gagner ou perdre. On a donc forcément une chance sur deux de gagner.",
      answer: false,
      explanation:
        "Faux, et c'est LE piège des probabilités ! « Une chance sur deux » n'est vraie que si les deux issues ont la même chance de se produire (équiprobabilité). Au loto, gagner ou perdre sont bien deux issues… mais elles n'ont pas du tout la même probabilité.",
    },
    {
      id: "prob-9",
      level: 3,
      type: "qcm",
      question:
        "Une roue de loterie équilibrée a 12 secteurs identiques : 6 jaunes, 4 verts et 2 rouges. Quelle est la probabilité de tomber sur un secteur vert ?",
      choices: ["4/12", "1/4", "1/3", "Les réponses 4/12 et 1/3 sont toutes les deux justes"],
      answer: 3,
      explanation:
        "4 secteurs verts sur 12 au total : probabilité = 4/12. Or 4/12 = 1/3 (on divise numérateur et dénominateur par 4). Les deux écritures désignent donc la même probabilité — une fraction peut toujours se simplifier !",
      hint: "Compare 4/12 et 1/3 : sont-elles égales ?",
    },
    {
      id: "prob-10",
      level: 3,
      type: "input",
      question:
        "Un sac contient 20 jetons numérotés de 1 à 20. On tire un jeton au hasard. Quelle est la probabilité d'obtenir un multiple de 5 ? (réponse en fraction, comme a/b)",
      answer: "4/20",
      accept: ["1/5"],
      explanation:
        "Les multiples de 5 entre 1 et 20 sont : 5, 10, 15 et 20, soit 4 issues favorables sur 20. Probabilité = 4/20, qu'on peut simplifier en 1/5 (= 0,2 = 20 %).",
      hint: "Liste les multiples de 5 jusqu'à 20.",
    },
    {
      id: "prob-11",
      level: 3,
      type: "truefalse",
      question:
        "On lance une pièce équilibrée 10 fois et on obtient 7 fois pile. Cela prouve que la pièce est truquée.",
      answer: false,
      explanation:
        "Faux ! Sur un petit nombre de lancers, le hasard fluctue beaucoup : 7 piles sur 10 n'a rien d'extraordinaire. C'est seulement sur un GRAND nombre de lancers que la fréquence se rapproche de la probabilité (0,5). Si on obtenait 700 piles sur 1 000 lancers, là, on pourrait avoir des doutes !",
    },
    {
      id: "prob-12",
      level: 3,
      type: "qcm",
      question:
        "Dans une classe de 25 élèves, 10 font du basket. Le professeur tire un prénom au hasard pour l'interroger. Quelle est la probabilité que ce soit un joueur de basket ?",
      choices: ["10/25, soit 40 %", "10/15, soit environ 67 %", "1/10, soit 10 %", "1/25, soit 4 %"],
      answer: 0,
      explanation:
        "10 élèves favorables sur 25 au total : probabilité = 10/25 = 2/5 = 0,4 = 40 %. Le piège 10/15 divise par le nombre d'élèves qui NE font PAS de basket au lieu du total.",
      hint: "On divise toujours par le nombre TOTAL d'issues possibles.",
    },
  ],
  videos: [
    { title: "Expérience aléatoire : définition et exemples faciles à retenir !", youtubeId: "Zuw96cBgu3M", channel: "Jean-Yves Labouche" },
    { title: "Dé, cartes : identifie les issues qui réalisent un événement", youtubeId: "HbovNvD52RU", channel: "Jean-Yves Labouche" },
  ],
};
