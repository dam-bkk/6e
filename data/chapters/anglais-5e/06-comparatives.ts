import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-comparatives",
  subject: "anglais",
  grade: "5e",
  num: 6,
  title: "Comparatifs et superlatifs",
  domain: "donnees",
  domainLabel: "Grammar",
  icon: "ArrowUpDown",
  teaser: "Bigger, more interesting, the best : comparer tout ce qui t'entoure.",
  objectives: [
    "Je sais former le comparatif des adjectifs courts : -er + than",
    "Je sais former le comparatif des adjectifs longs : more + adjectif + than",
    "Je sais former les superlatifs : the -est / the most",
    "Je connais les formes irrégulières : good/better/best, bad/worse/worst",
    "Je sais exprimer l'égalité avec as... as",
  ],
  lesson: [
    {
      title: "Adjectifs courts : -er... than",
      paragraphs: [
        "Pour comparer deux choses avec un adjectif court (1 syllabe, ou 2 syllabes terminées en -y), on ajoute -er à l'adjectif, suivi de than (que) : tall → taller than, old → older than.",
        "Règles d'orthographe familières : le -e final reste seul (large → larger), consonne-voyelle-consonne double la consonne (big → bigger, hot → hotter), et le -y devient -ier (happy → happier, easy → easier).",
        "La structure complète : A + be + adjectif-er + than + B. My brother is taller than me = Mon frère est plus grand que moi.",
      ],
      example: [
        "A plane is faster than a train. → Un avion est plus rapide qu'un train.",
        "This exercise is easier than the first one. → Cet exercice est plus facile que le premier.",
        "Summer is hotter than winter. → L'été est plus chaud que l'hiver.",
      ],
      tip: "Pas de more avec un adjectif court ! « More tall » ou « more big » sont des calques du français « plus grand ». Court → -er : taller, bigger, faster.",
    },
    {
      title: "Adjectifs longs : more... than",
      paragraphs: [
        "Pour les adjectifs longs (2 syllabes ou plus, sauf ceux en -y), pas de -er : on place more devant l'adjectif : more interesting than, more difficult than, more expensive than.",
        "Comment savoir si un adjectif est long ? Compte les syllabes : in-te-res-ting (4), ex-pen-sive (3), beau-ti-ful (3) → more. Big (1), fun-ny (2, en -y) → -er.",
      ],
      example: [
        "This book is more interesting than the film. → Ce livre est plus intéressant que le film.",
        "A phone is more expensive than a book. → Un téléphone est plus cher qu'un livre.",
        "Maths is more difficult than sport! → Les maths sont plus difficiles que le sport !",
      ],
      tip: "Jamais les deux à la fois : « more easier » et « more taller » n'existent pas. C'est -er OU more, selon la longueur de l'adjectif.",
    },
    {
      title: "Le superlatif : the -est / the most",
      paragraphs: [
        "Le superlatif désigne le champion d'un groupe : « le plus... de tous ». Adjectifs courts : the + adjectif-est → the tallest (le plus grand), the biggest (le plus gros), the happiest (le plus heureux).",
        "Adjectifs longs : the most + adjectif → the most interesting (le plus intéressant), the most beautiful (le plus beau).",
        "Le the est obligatoire : c'est lui qui dit « LE plus ». On précise souvent le groupe avec in : the tallest boy in the class = le garçon le plus grand de la classe (in, pas of !).",
      ],
      example: [
        "Mount Everest is the highest mountain in the world. → L'Everest est la plus haute montagne du monde.",
        "It's the most beautiful city in Italy. → C'est la plus belle ville d'Italie.",
        "She's the funniest girl in the school. → C'est la fille la plus drôle de l'école.",
      ],
      tip: "« Le plus grand DE la classe » se dit in the class, pas « of the class ». Après un superlatif, le français « de » se traduit presque toujours par in devant un lieu ou un groupe.",
    },
    {
      title: "Les irréguliers : good, bad, far",
      paragraphs: [
        "Trois adjectifs très fréquents ont des formes complètement irrégulières, à connaître par coeur. Good (bon) → better (meilleur) → the best (le meilleur).",
        "Bad (mauvais) → worse (pire) → the worst (le pire). Et far (loin) → farther/further (plus loin) → the farthest/furthest (le plus loin).",
        "Surtout, ne fabrique jamais « gooder » ou « badder » : ces formes n'existent pas et font très mal aux oreilles anglaises !",
      ],
      example: [
        "Your marks are better than mine. → Tes notes sont meilleures que les miennes.",
        "This is the best pizza in town! → C'est la meilleure pizza de la ville !",
        "The weather is worse today than yesterday. → Le temps est pire aujourd'hui qu'hier.",
      ],
      tip: "Comme en français ! On ne dit pas « plus bon » mais « meilleur » : l'anglais fait pareil avec better. Good-better-best, bad-worse-worst : récite-les comme une comptine.",
    },
    {
      title: "L'égalité : as... as",
      paragraphs: [
        "Pour dire que deux choses sont au même niveau, on encadre l'adjectif (sans -er, sans more) avec as... as : She is as tall as her mother = Elle est aussi grande que sa mère.",
        "À la forme négative, not as... as signifie « pas aussi... que » : This film is not as good as the book = Ce film n'est pas aussi bien que le livre.",
      ],
      example: [
        "My bag is as heavy as yours. → Mon sac est aussi lourd que le tien.",
        "He's not as fast as his brother. → Il n'est pas aussi rapide que son frère.",
      ],
      tip: "Entre les deux as, l'adjectif reste à sa forme de base : as tall as, jamais « as taller as ». Et attention : le deuxième mot est bien as, pas than.",
    },
  ],
  exercises: [
    {
      id: "e5cmp-1",
      level: 1,
      type: "qcm",
      question: "Complète : « An elephant is ___ than a mouse. »",
      choices: ["big", "bigger", "more big", "the biggest"],
      answer: 1,
      explanation:
        "Big est un adjectif court → comparatif en -er avec doublement de la consonne : bigger than. « More big » est le calque du français « plus gros » : interdit avec un adjectif court !",
      hint: "Adjectif court : -er, et attention à la consonne finale.",
    },
    {
      id: "e5cmp-2",
      level: 1,
      type: "qcm",
      question: "Complète : « This book is ___ interesting than the film. »",
      choices: ["more", "most", "the most", "interestinger"],
      answer: 0,
      explanation:
        "Interesting est un adjectif long (4 syllabes) → comparatif avec more : more interesting than. « Interestinger » n'existe pas ; the most serait le superlatif.",
      hint: "Compte les syllabes de interesting.",
    },
    {
      id: "e5cmp-3",
      level: 1,
      type: "input",
      question: "Écris le comparatif de good (un seul mot).",
      answer: "better",
      explanation:
        "Good est irrégulier : good → better → the best. « Gooder » n'existe pas, exactement comme le français ne dit pas « plus bon » mais « meilleur ».",
      hint: "Comme le français « meilleur » : une forme spéciale.",
    },
    {
      id: "e5cmp-4",
      level: 1,
      type: "truefalse",
      question: "« She is more taller than me. » est une phrase correcte.",
      answer: false,
      explanation:
        "Faux ! On ne cumule jamais more et -er : c'est l'un OU l'autre. Tall est court → taller than me. More s'utilise seulement avec les adjectifs longs (more interesting).",
    },
    {
      id: "e5cmp-5",
      level: 2,
      type: "qcm",
      question: "Complète : « Mount Everest is ___ mountain in the world. »",
      choices: ["the higher", "the highest", "the most high", "higher"],
      answer: 1,
      explanation:
        "« La plus haute montagne du monde » = superlatif d'un adjectif court : the + high + -est → the highest. Remarque le in : the highest mountain IN the world, pas « of the world ».",
      hint: "Le champion du monde entier : comparatif ou superlatif ?",
    },
    {
      id: "e5cmp-6",
      level: 2,
      type: "input",
      question: "Écris le comparatif de happy (un seul mot).",
      answer: "happier",
      explanation:
        "Happy se termine par consonne + y : le y devient i avant -er → happier. Les adjectifs de 2 syllabes en -y se comportent comme des adjectifs courts : easy → easier, funny → funnier.",
      hint: "Le -y final se transforme, comme dans study → studied.",
    },
    {
      id: "e5cmp-7",
      level: 2,
      type: "qcm",
      question: "Complète : « My marks are bad, but your marks are ___! »",
      choices: ["badder", "more bad", "worse", "worst"],
      answer: 2,
      explanation:
        "Bad est irrégulier : bad → worse → the worst. Ici on compare (tes notes aux miennes) → worse = pires. « Badder » n'existe pas, et worst (sans the ni comparaison) serait le superlatif.",
      hint: "Bad a une forme spéciale, comme good → better.",
    },
    {
      id: "e5cmp-8",
      level: 2,
      type: "input",
      question: "Complète l'égalité : « She is ___ tall ___ her brother. » (écris les deux mots manquants séparés par un espace)",
      answer: "as as",
      explanation:
        "L'égalité se dit as + adjectif + as : She is as tall as her brother = Elle est aussi grande que son frère. L'adjectif reste à la base (tall), et le deuxième mot est as, pas than.",
      hint: "Le même petit mot des deux côtés de l'adjectif.",
    },
    {
      id: "e5cmp-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correcte ?",
      choices: [
        "He is the funniest boy of the class.",
        "He is the funniest boy in the class.",
        "He is the most funny boy in the class.",
        "He is the funnier boy in the class.",
      ],
      answer: 1,
      explanation:
        "Funny (2 syllabes en -y) fait son superlatif en -iest : the funniest. Et après un superlatif, « de la classe » se dit in the class, pas of the class. Double piège déjoué !",
      hint: "Deux pièges : la forme du superlatif ET la préposition.",
    },
    {
      id: "e5cmp-10",
      level: 3,
      type: "input",
      question: "Complète avec le superlatif de good : « This is ___ pizza in town! » (deux mots)",
      answer: "the best",
      explanation:
        "Good → better → the best : This is the best pizza in town = C'est la meilleure pizza de la ville. N'oublie pas le the : c'est lui qui fait le superlatif.",
      hint: "Good, better... et ensuite ? Avec son petit article.",
    },
    {
      id: "e5cmp-11",
      level: 3,
      type: "truefalse",
      question: "« This film is not as good as the book. » signifie que le livre est meilleur que le film.",
      answer: true,
      explanation:
        "Vrai ! Not as good as = « pas aussi bien que » : le film n'atteint pas le niveau du livre, donc le livre est meilleur. On pourrait aussi dire : The book is better than the film.",
    },
    {
      id: "e5cmp-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Le français est plus difficile que l'anglais. » (commence par French)",
      answer: "french is more difficult than english",
      accept: ["french is harder than english"],
      explanation:
        "French is more difficult than English. Difficult est long (3 syllabes) → more difficult than. Variante avec un adjectif court : French is harder than English (hard → harder). Rappel : les noms de langues prennent une majuscule en anglais.",
      hint: "Difficult est un adjectif long : more ou -er ?",
    },
  ],
};
