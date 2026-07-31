import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-cosinus",
  subject: "maths",
  grade: "4e",
  num: 10,
  title: "Le cosinus",
  domain: "geometrie",
  icon: "Compass",
  teaser:
    "Relier un angle et deux côtés d'un triangle rectangle : ta première formule de trigonométrie.",
  objectives: [
    "Je sais identifier le côté adjacent à un angle aigu dans un triangle rectangle",
    "Je sais écrire la formule du cosinus d'un angle aigu",
    "Je sais calculer une longueur à l'aide du cosinus",
    "Je sais calculer un angle à l'aide de la touche Arccos de la calculatrice",
    "Je sais utiliser le cosinus dans des situations concrètes (rampe, pente)",
  ],
  lesson: [
    {
      title: "Le côté adjacent à un angle",
      paragraphs: [
        "Dans un triangle rectangle, on connaît déjà l'hypoténuse : le côté en face de l'angle droit, le plus long. Pour la trigonométrie, il faut un nouveau mot : le côté adjacent à un angle aigu.",
        "Le côté adjacent à un angle aigu est le côté qui touche cet angle, sans être l'hypoténuse. Chacun des deux angles aigus possède donc SON côté adjacent : il change selon l'angle considéré, alors que l'hypoténuse reste toujours la même.",
      ],
      example: [
        "Le triangle ABC est rectangle en A. L'hypoténuse est [BC].",
        "Le côté adjacent à l'angle ABC est [AB] : c'est le côté qui touche le sommet B sans être l'hypoténuse.",
        "Le côté adjacent à l'angle ACB est [AC].",
      ],
      tip: "« Adjacent » veut dire « à côté de ». Le côté adjacent est collé à l'angle : il relie le sommet de l'angle au sommet de l'angle droit.",
    },
    {
      title: "La formule du cosinus",
      paragraphs: [
        "Dans un triangle rectangle, le cosinus d'un angle aigu est le quotient de la longueur du côté adjacent par la longueur de l'hypoténuse : cosinus de l'angle = côté adjacent ÷ hypoténuse.",
        "Comme le côté adjacent est toujours plus court que l'hypoténuse, le cosinus d'un angle aigu est toujours un nombre compris entre 0 et 1. Si ta calculatrice t'affiche un cosinus plus grand que 1, il y a une erreur quelque part !",
        "Point remarquable : le cosinus ne dépend que de la mesure de l'angle, pas de la taille du triangle. Tous les triangles rectangles ayant un angle de 60° donnent le même quotient : cos 60° = 0,5.",
      ],
      example: [
        "Le triangle ABC est rectangle en A, avec AB = 4 cm et BC = 8 cm.",
        "cos ABC = AB ÷ BC = 4 ÷ 8 = 0,5.",
        "Le cosinus de l'angle ABC vaut 0,5 : cet angle mesure donc 60°.",
      ],
      tip: "Vérifie que ta calculatrice est bien en mode degrés (D ou DEG à l'écran) avant tout calcul de trigonométrie. En mode radians, tous tes résultats seraient faux.",
    },
    {
      title: "Calculer une longueur avec le cosinus",
      paragraphs: [
        "Quand tu connais un angle aigu et l'une des deux longueurs de la formule (côté adjacent ou hypoténuse), le cosinus permet de calculer l'autre.",
        "Méthode : écris la formule avec les noms des côtés, remplace ce que tu connais, puis isole la longueur cherchée. Si le côté adjacent est inconnu : adjacent = hypoténuse × cos de l'angle. Si l'hypoténuse est inconnue : hypoténuse = adjacent ÷ cos de l'angle.",
      ],
      example: [
        "Le triangle ABC est rectangle en A, avec BC = 10 cm et l'angle ABC égal à 40°. On cherche AB.",
        "cos ABC = AB ÷ BC, donc AB = BC × cos ABC = 10 × cos 40°.",
        "À la calculatrice : AB ≈ 10 × 0,766 ≈ 7,7 cm (arrondi au dixième).",
      ],
      tip: "Multiplier ou diviser ? Le résultat doit être cohérent : le côté adjacent est toujours PLUS COURT que l'hypoténuse. Si tu trouves un adjacent plus long, tu as inversé l'opération.",
    },
    {
      title: "Calculer un angle avec Arccos",
      paragraphs: [
        "Quand tu connais le côté adjacent et l'hypoténuse, tu peux calculer le cosinus de l'angle. Pour remonter du cosinus à la mesure de l'angle, on utilise la touche Arccos de la calculatrice (souvent notée cos⁻¹, accessible par la touche seconde ou shift).",
        "Méthode : calcule d'abord le quotient adjacent ÷ hypoténuse, puis applique Arccos à ce quotient. Le résultat est la mesure de l'angle en degrés.",
      ],
      example: [
        "Le triangle DEF est rectangle en D, avec DE = 3 cm et EF = 6 cm. On cherche l'angle DEF.",
        "cos DEF = DE ÷ EF = 3 ÷ 6 = 0,5.",
        "À la calculatrice : Arccos(0,5) = 60. L'angle DEF mesure donc 60°.",
      ],
      tip: "cos et Arccos se « défont » l'un l'autre : cos transforme un angle en nombre, Arccos transforme ce nombre en angle. Utilise Arccos uniquement quand c'est l'ANGLE que tu cherches.",
    },
    {
      title: "Applications : rampes et pentes",
      paragraphs: [
        "Le cosinus intervient dès qu'une situation réelle contient une pente et un angle : rampe d'accès, toboggan, route en montée, câble incliné. La rampe est alors l'hypoténuse d'un triangle rectangle dont l'autre côté utile est la distance horizontale au sol.",
        "Méthode : fais un schéma, place l'angle entre la pente et l'horizontale, repère l'hypoténuse (la rampe) et le côté adjacent (la distance horizontale), puis applique la formule. L'angle d'une rampe d'accès pour fauteuil roulant, par exemple, doit rester très faible pour être praticable.",
      ],
      example: [
        "Une rampe de 5 m de long fait un angle de 12° avec le sol horizontal. Quelle distance horizontale occupe-t-elle au sol ?",
        "La rampe est l'hypoténuse, la distance au sol est le côté adjacent à l'angle de 12°.",
        "distance = 5 × cos 12° ≈ 5 × 0,978 ≈ 4,9 m (arrondi au dixième).",
      ],
      tip: "Dans les problèmes de pente, l'angle se mesure presque toujours entre la pente et l'HORIZONTALE. Relis l'énoncé pour bien placer l'angle sur ton schéma.",
    },
  ],
  exercises: [
    {
      id: "m4cos-1",
      level: 1,
      type: "qcm",
      question:
        "Le triangle ABC est rectangle en A. Quel est le côté adjacent à l'angle ABC ?",
      choices: ["[AB]", "[AC]", "[BC]", "Il n'y en a pas"],
      answer: 0,
      explanation:
        "Le côté adjacent à l'angle ABC est le côté qui touche le sommet B sans être l'hypoténuse. L'hypoténuse est [BC] (en face de l'angle droit en A). Le côté qui touche B et qui n'est pas [BC], c'est [AB]. Le côté [AC], lui, ne touche pas le sommet B : il est « opposé » à l'angle.",
      hint: "Le côté adjacent touche le sommet de l'angle, mais ce n'est pas l'hypoténuse.",
    },
    {
      id: "m4cos-2",
      level: 1,
      type: "qcm",
      question:
        "Dans un triangle rectangle, le cosinus d'un angle aigu est égal à…",
      choices: [
        "côté adjacent ÷ hypoténuse",
        "hypoténuse ÷ côté adjacent",
        "côté adjacent × hypoténuse",
        "côté adjacent + hypoténuse",
      ],
      answer: 0,
      explanation:
        "Par définition, le cosinus d'un angle aigu est le quotient du côté adjacent par l'hypoténuse : cos = adjacent ÷ hypoténuse. L'ordre compte : diviser l'hypoténuse par l'adjacent donnerait un nombre plus grand que 1, ce qui est impossible pour un cosinus d'angle aigu.",
      hint: "Le résultat doit toujours être plus petit que 1 : quel côté est le plus court ?",
    },
    {
      id: "m4cos-3",
      level: 1,
      type: "truefalse",
      question:
        "Le cosinus d'un angle aigu est toujours compris entre 0 et 1.",
      answer: true,
      explanation:
        "Vrai ! Le cosinus est le quotient du côté adjacent par l'hypoténuse. Comme l'hypoténuse est le plus long côté du triangle rectangle, ce quotient est toujours inférieur à 1 (et supérieur à 0 pour un angle aigu). C'est un excellent moyen de vérification : un « cosinus » de 1,3 signale une erreur de formule.",
      hint: "Compare la longueur du côté adjacent à celle de l'hypoténuse.",
    },
    {
      id: "m4cos-4",
      level: 1,
      type: "input",
      question:
        "Le triangle ABC est rectangle en A, avec AB = 3 cm et BC = 6 cm. Calcule le cosinus de l'angle ABC (donne un nombre, sans unité).",
      answer: "0,5",
      accept: ["0.5", "1/2"],
      explanation:
        "Le côté adjacent à l'angle ABC est [AB] et l'hypoténuse est [BC]. Donc cos ABC = AB ÷ BC = 3 ÷ 6 = 0,5. Piège : un cosinus est un quotient, il n'a pas d'unité — ne réponds pas « 0,5 cm ».",
      hint: "Divise la longueur du côté adjacent par celle de l'hypoténuse.",
    },
    {
      id: "m4cos-5",
      level: 2,
      type: "input",
      question:
        "Le triangle ABC est rectangle en A, avec BC = 12 cm et l'angle ABC égal à 30°. Calcule AB, en cm, arrondi au dixième.",
      answer: "10,4",
      accept: ["10.4"],
      explanation:
        "Le côté [AB] est adjacent à l'angle ABC et [BC] est l'hypoténuse. cos ABC = AB ÷ BC, donc AB = BC × cos ABC = 12 × cos 30° ≈ 12 × 0,866 ≈ 10,392, soit 10,4 cm arrondi au dixième. Piège : vérifie que ta calculatrice est en mode degrés, sinon cos 30 donne un résultat absurde.",
      hint: "Le côté adjacent s'obtient en multipliant l'hypoténuse par le cosinus de l'angle.",
    },
    {
      id: "m4cos-6",
      level: 2,
      type: "input",
      question:
        "Le triangle DEF est rectangle en D, avec DE = 4 cm et EF = 8 cm. Calcule la mesure de l'angle DEF, en degrés.",
      answer: "60",
      explanation:
        "Le côté [DE] est adjacent à l'angle DEF et [EF] est l'hypoténuse. cos DEF = DE ÷ EF = 4 ÷ 8 = 0,5. On applique ensuite Arccos : Arccos(0,5) = 60, donc l'angle DEF mesure 60°. Piège : n'oublie pas la dernière étape — 0,5 est le cosinus de l'angle, pas sa mesure.",
      hint: "Calcule d'abord le quotient 4 ÷ 8, puis utilise la touche Arccos.",
    },
    {
      id: "m4cos-7",
      level: 2,
      type: "qcm",
      question:
        "Le triangle ABC est rectangle en A. On connaît l'angle ACB et la longueur AC. Que permet de calculer la formule du cosinus appliquée à l'angle ACB ?",
      choices: [
        "La longueur BC, car cos ACB = AC ÷ BC",
        "La longueur AB, car cos ACB = AB ÷ BC",
        "Rien, car il faut connaître deux longueurs",
        "L'angle ABC directement",
      ],
      answer: 0,
      explanation:
        "Le côté adjacent à l'angle ACB est [AC] et l'hypoténuse est [BC], donc cos ACB = AC ÷ BC. Comme on connaît l'angle ACB et AC, on peut isoler BC : BC = AC ÷ cos ACB. Une seule longueur et un angle suffisent : c'est justement la force du cosinus par rapport à Pythagore, qui exige deux longueurs.",
      hint: "Écris la formule pour l'angle ACB : quel est son côté adjacent ?",
    },
    {
      id: "m4cos-8",
      level: 2,
      type: "truefalse",
      question:
        "Tous les triangles rectangles ayant un angle aigu de 40° ont le même cosinus pour cet angle, quelle que soit leur taille.",
      answer: true,
      explanation:
        "Vrai ! Le cosinus ne dépend que de la mesure de l'angle, pas de la taille du triangle : dans un petit ou un grand triangle rectangle avec un angle de 40°, le quotient adjacent ÷ hypoténuse vaut toujours cos 40° ≈ 0,766. C'est ce qui rend la trigonométrie si puissante : une table de cosinus sert pour tous les triangles.",
      hint: "Le cosinus est-il une longueur ou un quotient ?",
    },
    {
      id: "m4cos-9",
      level: 3,
      type: "input",
      question:
        "Une rampe de skate de 4 m de long fait un angle de 25° avec le sol horizontal. Quelle distance horizontale occupe-t-elle au sol, en m, arrondie au dixième ?",
      answer: "3,6",
      accept: ["3.6"],
      explanation:
        "La rampe est l'hypoténuse d'un triangle rectangle et la distance au sol est le côté adjacent à l'angle de 25°. distance = 4 × cos 25° ≈ 4 × 0,906 ≈ 3,625, soit 3,6 m arrondie au dixième. Piège : la distance au sol doit être plus courte que la rampe ; si tu trouves plus de 4 m, tu as divisé au lieu de multiplier.",
      hint: "La distance au sol est le côté adjacent : multiplie la longueur de la rampe par cos 25°.",
    },
    {
      id: "m4cos-10",
      level: 3,
      type: "input",
      question:
        "Une rampe d'accès mesure 6 m de long et sa base occupe 5,9 m au sol à l'horizontale. Calcule l'angle entre la rampe et le sol, en degrés, arrondi à l'unité.",
      answer: "10",
      explanation:
        "La rampe est l'hypoténuse (6 m) et la distance au sol est le côté adjacent (5,9 m). On calcule d'abord le cosinus de l'angle : 5,9 ÷ 6 ≈ 0,9833. Puis on applique Arccos : Arccos(0,9833) ≈ 10,4°, soit 10° arrondi à l'unité. Piège : calcule le quotient AVANT d'appliquer Arccos, garde toutes les décimales pendant le calcul et n'arrondis qu'à la toute fin.",
      hint: "Calcule 5,9 ÷ 6, puis applique la touche Arccos au résultat.",
    },
    {
      id: "m4cos-11",
      level: 3,
      type: "qcm",
      question:
        "À la calculatrice, un élève trouve cos 50° = 0,64 en mode degrés. Son voisin, en mode radians, trouve 0,96. Qui a raison ?",
      choices: [
        "Le premier : les angles du collège se mesurent en degrés",
        "Le second : le mode radians est plus précis",
        "Les deux : cela dépend du triangle",
        "Aucun : cos 50° vaut exactement 0,5",
      ],
      answer: 0,
      explanation:
        "Au collège, tous les angles sont mesurés en degrés : la calculatrice doit être en mode degrés (D ou DEG à l'écran), et cos 50° ≈ 0,64. Le mode radians utilise une autre unité d'angle et donne un résultat différent pour le même nombre tapé : ce n'est pas une question de précision mais d'unité. Piège classique en devoir : un mode mal réglé fausse tous les calculs.",
      hint: "Quelle unité d'angle utilises-tu depuis la 6e ?",
    },
    {
      id: "m4cos-12",
      level: 3,
      type: "truefalse",
      question:
        "Dans le triangle ABC rectangle en A, on peut écrire cos BAC = AB ÷ BC.",
      answer: false,
      explanation:
        "Faux ! L'angle BAC est l'angle droit du triangle : la formule du cosinus vue en 4e ne s'applique qu'aux deux angles AIGUS d'un triangle rectangle. On peut écrire cos ABC = AB ÷ BC ou cos ACB = AC ÷ BC, mais pas de formule pour l'angle droit lui-même. Piège : repère toujours où est l'angle droit avant d'écrire la formule.",
      hint: "Où se trouve l'angle droit du triangle ? La formule s'applique-t-elle à cet angle ?",
    },
  ],
};
