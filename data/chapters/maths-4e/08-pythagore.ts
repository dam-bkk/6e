import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-pythagore",
  subject: "maths",
  grade: "4e",
  num: 8,
  title: "Le théorème de Pythagore",
  domain: "geometrie",
  icon: "TriangleRight",
  teaser:
    "Le théorème le plus célèbre des maths : calculer des longueurs dans un triangle rectangle.",
  objectives: [
    "Je sais reconnaître l'hypoténuse d'un triangle rectangle",
    "Je sais énoncer le théorème de Pythagore et rédiger son égalité",
    "Je sais calculer la longueur de l'hypoténuse",
    "Je sais calculer la longueur d'un côté de l'angle droit",
    "Je sais utiliser la réciproque pour montrer qu'un triangle est rectangle",
    "Je sais résoudre des problèmes concrets avec le théorème de Pythagore",
  ],
  lesson: [
    {
      title: "Le vocabulaire : l'hypoténuse",
      paragraphs: [
        "Dans un triangle rectangle, le côté situé en face de l'angle droit s'appelle l'hypoténuse. C'est toujours le plus long des trois côtés.",
        "Les deux autres côtés sont les côtés de l'angle droit : ce sont eux qui forment l'angle droit. Bien identifier l'hypoténuse est la première étape de tout exercice sur Pythagore, car c'est elle qui joue un rôle à part dans le théorème.",
      ],
      example: [
        "Le triangle ABC est rectangle en A.",
        "L'angle droit est en A, donc l'hypoténuse est le côté [BC], celui qui ne touche pas le sommet A.",
        "Les côtés de l'angle droit sont [AB] et [AC].",
      ],
      tip: "L'hypoténuse est en face de l'angle droit : repère la lettre de l'angle droit, l'hypoténuse est le côté qui ne contient PAS cette lettre.",
    },
    {
      title: "L'énoncé du théorème",
      paragraphs: [
        "Théorème de Pythagore : si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.",
        "Dans un triangle ABC rectangle en A, l'hypoténuse est [BC] et on écrit : BC² = AB² + AC².",
        "Attention à la rédaction : on commence toujours par citer le triangle rectangle (« Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore… »), puis on écrit l'égalité, puis on calcule.",
      ],
      example: [
        "Le triangle RST est rectangle en S.",
        "L'hypoténuse est [RT] (en face de l'angle droit en S).",
        "L'égalité de Pythagore s'écrit : RT² = SR² + ST².",
      ],
      tip: "Le carré de l'hypoténuse est toujours TOUT SEUL d'un côté du signe égal. Si tu hésites, vérifie : le côté le plus long doit être seul.",
    },
    {
      title: "Calculer l'hypoténuse",
      paragraphs: [
        "Quand on connaît les deux côtés de l'angle droit, on calcule d'abord le carré de l'hypoténuse en additionnant les deux carrés, puis on prend la racine carrée du résultat avec la touche √ de la calculatrice.",
        "La racine carrée d'un nombre est le nombre positif dont le carré vaut ce nombre : √25 = 5 car 5² = 25. Si le résultat ne tombe pas juste, on donne la valeur exacte avec le symbole √, ou une valeur arrondie (l'énoncé précise toujours l'arrondi demandé).",
      ],
      example: [
        "Le triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm.",
        "D'après le théorème de Pythagore : BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100.",
        "Donc BC = √100 = 10 cm.",
      ],
      tip: "N'oublie jamais la dernière étape : trouver BC² = 100 ne suffit pas, la réponse est BC = √100 = 10 cm. Beaucoup d'élèves s'arrêtent au carré !",
    },
    {
      title: "Calculer un côté de l'angle droit",
      paragraphs: [
        "Quand on connaît l'hypoténuse et un côté de l'angle droit, on cherche le côté manquant par une soustraction : le carré du côté cherché est égal au carré de l'hypoténuse moins le carré du côté connu.",
        "C'est le piège classique du chapitre : on soustrait au lieu d'additionner, car l'hypoténuse est déjà connue. Écris toujours l'égalité complète d'abord, puis isole le carré inconnu.",
      ],
      example: [
        "Le triangle DEF est rectangle en D, avec EF = 13 cm (hypoténuse) et DE = 5 cm.",
        "D'après le théorème de Pythagore : EF² = DE² + DF².",
        "Donc DF² = EF² − DE² = 13² − 5² = 169 − 25 = 144.",
        "Donc DF = √144 = 12 cm.",
      ],
      tip: "Additionner ou soustraire ? Si tu cherches l'hypoténuse : addition. Si tu connais déjà l'hypoténuse : soustraction. L'hypoténuse est toujours le résultat le plus grand.",
    },
    {
      title: "La réciproque : prouver qu'un triangle est rectangle",
      paragraphs: [
        "Réciproque du théorème de Pythagore : si, dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors ce triangle est rectangle. L'angle droit est en face du plus grand côté.",
        "Méthode : on calcule séparément le carré du plus grand côté d'un côté, et la somme des deux autres carrés de l'autre. Si les deux résultats sont égaux, le triangle est rectangle ; s'ils sont différents, il ne l'est pas.",
        "Attention : le théorème direct sert à CALCULER une longueur dans un triangle dont on sait déjà qu'il est rectangle ; la réciproque sert à PROUVER qu'un triangle est rectangle à partir de ses trois longueurs.",
      ],
      example: [
        "Un triangle a pour côtés 5 cm, 12 cm et 13 cm. Est-il rectangle ?",
        "D'une part : 13² = 169.",
        "D'autre part : 5² + 12² = 25 + 144 = 169.",
        "Les deux résultats sont égaux, donc d'après la réciproque du théorème de Pythagore, le triangle est rectangle, et l'angle droit est en face du côté de 13 cm.",
      ],
      tip: "Calcule TOUJOURS les deux membres séparément (« d'une part… d'autre part… ») avant de conclure. Ne pars jamais de l'égalité comme si elle était déjà vraie.",
    },
    {
      title: "Des applications concrètes",
      paragraphs: [
        "Le théorème de Pythagore sert dès qu'un angle droit se cache dans une situation réelle : une échelle posée contre un mur (le mur est vertical, le sol horizontal), la diagonale d'un écran ou d'un terrain rectangulaire, la longueur d'une pente.",
        "Méthode : fais un schéma, repère le triangle rectangle, nomme ses sommets, identifie l'hypoténuse, puis applique le théorème. Vérifie que toutes les longueurs sont dans la même unité avant de calculer.",
      ],
      example: [
        "Une échelle de 5 m est posée contre un mur vertical. Son pied est à 3 m du mur. À quelle hauteur touche-t-elle le mur ?",
        "Le mur, le sol et l'échelle forment un triangle rectangle au pied du mur. L'échelle est l'hypoténuse.",
        "hauteur² = 5² − 3² = 25 − 9 = 16, donc hauteur = √16 = 4 m.",
      ],
      tip: "La diagonale d'un rectangle le coupe en deux triangles rectangles : Pythagore permet donc de calculer la diagonale d'un écran, d'un terrain de foot ou d'une feuille de papier.",
    },
  ],
  exercises: [
    {
      id: "m4pyt-1",
      level: 1,
      type: "qcm",
      question:
        "Le triangle ABC est rectangle en B. Quel côté est l'hypoténuse ?",
      choices: ["[AC]", "[AB]", "[BC]", "On ne peut pas savoir"],
      answer: 0,
      explanation:
        "L'hypoténuse est le côté situé en face de l'angle droit. L'angle droit est en B, donc l'hypoténuse est le côté qui ne contient pas la lettre B : c'est [AC]. Piège : ne choisis pas un côté qui touche le sommet de l'angle droit.",
      hint: "L'hypoténuse est le côté qui ne touche pas le sommet de l'angle droit.",
    },
    {
      id: "m4pyt-2",
      level: 1,
      type: "qcm",
      question:
        "Le triangle MNP est rectangle en M. Quelle égalité de Pythagore est correcte ?",
      choices: [
        "NP² = MN² + MP²",
        "MN² = NP² + MP²",
        "MP² = MN² + NP²",
        "NP = MN + MP",
      ],
      answer: 0,
      explanation:
        "L'angle droit est en M, donc l'hypoténuse est [NP]. Le carré de l'hypoténuse est seul d'un côté de l'égalité : NP² = MN² + MP². La dernière proposition est fausse car les longueurs ne s'additionnent pas directement : ce sont les CARRÉS qui s'additionnent.",
      hint: "Trouve d'abord l'hypoténuse : elle est en face de l'angle droit, et son carré est seul dans l'égalité.",
    },
    {
      id: "m4pyt-3",
      level: 1,
      type: "input",
      question:
        "Le triangle ABC est rectangle en A, avec AB = 3 cm et AC = 4 cm. Calcule BC, en cm.",
      answer: "5",
      explanation:
        "Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore : BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25. Donc BC = √25 = 5 cm. Piège : ne t'arrête pas à 25, il faut prendre la racine carrée pour obtenir la longueur.",
      hint: "Calcule 3² + 4², puis prends la racine carrée du résultat.",
    },
    {
      id: "m4pyt-4",
      level: 1,
      type: "truefalse",
      question:
        "Dans un triangle rectangle, l'hypoténuse est toujours le plus long des trois côtés.",
      answer: true,
      explanation:
        "Vrai ! L'hypoténuse est en face de l'angle droit, qui est le plus grand angle du triangle rectangle : c'est donc le côté le plus long. C'est d'ailleurs un bon moyen de vérifier tes calculs : si ton « hypoténuse » est plus courte qu'un autre côté, il y a une erreur.",
      hint: "L'hypoténuse est en face du plus grand angle du triangle.",
    },
    {
      id: "m4pyt-5",
      level: 2,
      type: "input",
      question:
        "Le triangle DEF est rectangle en D, avec EF = 10 cm et DE = 6 cm. Calcule DF, en cm.",
      answer: "8",
      explanation:
        "L'angle droit est en D, donc [EF] est l'hypoténuse : elle est déjà connue. D'après le théorème de Pythagore : EF² = DE² + DF², donc DF² = EF² − DE² = 10² − 6² = 100 − 36 = 64. Donc DF = √64 = 8 cm. Piège : comme on connaît l'hypoténuse, on SOUSTRAIT, on n'additionne pas.",
      hint: "Ici l'hypoténuse est connue : le carré du côté cherché s'obtient par une soustraction.",
    },
    {
      id: "m4pyt-6",
      level: 2,
      type: "qcm",
      question:
        "Un triangle a pour côtés 6 cm, 8 cm et 10 cm. Que peut-on conclure ?",
      choices: [
        "Il est rectangle, car 10² = 6² + 8²",
        "Il est rectangle, car 10 = 6 + 8 − 4",
        "Il n'est pas rectangle, car 10² ≠ 6² + 8²",
        "On ne peut rien conclure sans mesurer les angles",
      ],
      answer: 0,
      explanation:
        "On compare le carré du plus grand côté à la somme des deux autres carrés. D'une part : 10² = 100. D'autre part : 6² + 8² = 36 + 64 = 100. Les deux résultats sont égaux, donc d'après la réciproque du théorème de Pythagore, le triangle est rectangle. Pas besoin de rapporteur : les trois longueurs suffisent.",
      hint: "Compare 10² d'une part et 6² + 8² d'autre part.",
    },
    {
      id: "m4pyt-7",
      level: 2,
      type: "input",
      question:
        "Le triangle ABC est rectangle en A, avec AB = 5 cm et AC = 7 cm. Calcule BC, en cm, arrondi au dixième.",
      answer: "8,6",
      accept: ["8.6"],
      explanation:
        "D'après le théorème de Pythagore : BC² = AB² + AC² = 5² + 7² = 25 + 49 = 74. Donc BC = √74. La valeur exacte est √74 cm ; à la calculatrice, √74 ≈ 8,602…, ce qui donne 8,6 cm arrondi au dixième. Piège : ne réponds pas 74, c'est le carré de la longueur, pas la longueur.",
      hint: "Calcule BC² d'abord, puis utilise la touche √ et arrondis au dixième.",
    },
    {
      id: "m4pyt-8",
      level: 2,
      type: "truefalse",
      question:
        "Un triangle dont les côtés mesurent 4 cm, 5 cm et 7 cm est rectangle.",
      answer: false,
      explanation:
        "Faux ! D'une part : 7² = 49. D'autre part : 4² + 5² = 16 + 25 = 41. Comme 49 ≠ 41, l'égalité de Pythagore n'est pas vérifiée : le triangle n'est pas rectangle. Piège : une différence, même petite, suffit pour conclure que le triangle n'est pas rectangle.",
      hint: "Compare le carré du plus grand côté à la somme des carrés des deux autres.",
    },
    {
      id: "m4pyt-9",
      level: 3,
      type: "input",
      question:
        "Une échelle de 6,5 m est posée contre un mur vertical. Son pied est à 2,5 m du mur. À quelle hauteur le haut de l'échelle touche-t-il le mur, en m ?",
      answer: "6",
      explanation:
        "Le mur, le sol et l'échelle forment un triangle rectangle au pied du mur, et l'échelle est l'hypoténuse. D'après le théorème de Pythagore : hauteur² = 6,5² − 2,5² = 42,25 − 6,25 = 36. Donc la hauteur vaut √36 = 6 m. Piège : l'échelle est l'hypoténuse, donc on soustrait ; additionner donnerait une hauteur plus grande que l'échelle, ce qui est impossible.",
      hint: "L'échelle est l'hypoténuse : le carré de la hauteur s'obtient par une soustraction.",
    },
    {
      id: "m4pyt-10",
      level: 3,
      type: "qcm",
      question:
        "Un écran rectangulaire mesure 40 cm de large et 30 cm de haut. Quelle est la longueur de sa diagonale ?",
      choices: ["50 cm", "70 cm", "35 cm", "2 500 cm"],
      answer: 0,
      explanation:
        "La diagonale coupe le rectangle en deux triangles rectangles dont elle est l'hypoténuse. D'après le théorème de Pythagore : d² = 40² + 30² = 1 600 + 900 = 2 500, donc d = √2 500 = 50 cm. Piège : 2 500 est le carré de la diagonale, pas la diagonale ; et 70 cm serait la simple addition 40 + 30, ce qui est faux.",
      hint: "La diagonale est l'hypoténuse d'un triangle rectangle de côtés 40 cm et 30 cm.",
    },
    {
      id: "m4pyt-11",
      level: 3,
      type: "truefalse",
      question:
        "Pour montrer qu'un triangle est rectangle à partir de ses trois longueurs, on utilise le théorème de Pythagore (et non sa réciproque).",
      answer: false,
      explanation:
        "Faux ! C'est la RÉCIPROQUE du théorème de Pythagore qui permet de prouver qu'un triangle est rectangle à partir de ses trois longueurs. Le théorème direct suppose que le triangle est déjà rectangle et sert à calculer une longueur manquante. Confondre les deux fait perdre des points en rédaction.",
      hint: "Le théorème direct calcule une longueur ; la réciproque démontre l'angle droit.",
    },
    {
      id: "m4pyt-12",
      level: 3,
      type: "input",
      question:
        "Un poteau vertical est maintenu par un câble de 7 m accroché à son sommet et fixé au sol à 4 m du pied du poteau. Calcule la hauteur du poteau, en m, arrondie au centième.",
      answer: "5,74",
      accept: ["5.74"],
      explanation:
        "Le poteau, le sol et le câble forment un triangle rectangle au pied du poteau, et le câble est l'hypoténuse. D'après le théorème de Pythagore : hauteur² = 7² − 4² = 49 − 16 = 33. Donc la hauteur vaut √33 ≈ 5,744…, soit 5,74 m arrondie au centième. Piège : garde la valeur exacte √33 jusqu'au bout et n'arrondis qu'à la toute fin.",
      hint: "Le câble est l'hypoténuse. Calcule 7² − 4², puis la racine carrée, puis arrondis.",
    },
  ],
};
