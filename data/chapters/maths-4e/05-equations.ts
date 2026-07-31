import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-equations",
  subject: "maths",
  grade: "4e",
  num: 5,
  title: "Les équations",
  domain: "nombres",
  icon: "Equal",
  teaser: "Une balance à équilibrer : trouver le nombre caché derrière la lettre x.",
  objectives: [
    "Je sais tester si un nombre est solution d'une équation",
    "Je sais résoudre une équation du type ax + b = c",
    "Je sais résoudre une équation avec l'inconnue des deux côtés : ax + b = cx + d",
    "Je sais mettre un problème en équation et le résoudre",
  ],
  lesson: [
    {
      title: "Qu'est-ce qu'une équation ?",
      paragraphs: [
        "Une équation est une égalité dans laquelle un nombre inconnu est représenté par une lettre, souvent x. Résoudre l'équation, c'est trouver toutes les valeurs de x qui rendent l'égalité vraie : ce sont les solutions.",
        "Une égalité a deux membres, séparés par le signe = : dans 2x + 1 = 7, le membre de gauche est 2x + 1 et le membre de droite est 7.",
        "Pour tester si un nombre est solution, on le substitue à x dans chaque membre : si les deux membres donnent le même résultat, c'est une solution.",
      ],
      example: [
        "3 est-il solution de 2x + 1 = 7 ? On teste : 2 × 3 + 1 = 7. Les deux membres valent 7 : oui, 3 est solution.",
        "4 est-il solution de 2x + 1 = 7 ? On teste : 2 × 4 + 1 = 9 et 9 ≠ 7 : non, 4 n'est pas solution.",
      ],
      tip: "Tester une valeur ne demande aucune technique : remplace, calcule chaque membre séparément, compare. C'est aussi le meilleur moyen de VÉRIFIER ta solution à la fin.",
    },
    {
      title: "La règle d'or : mêmes opérations des deux côtés",
      paragraphs: [
        "Imagine une balance en équilibre : les deux membres de l'équation sont les deux plateaux. Si tu ajoutes, enlèves, multiplies ou divises la même chose des deux côtés, la balance reste en équilibre.",
        "Deux transformations conservent donc les solutions : ajouter ou soustraire un même nombre aux deux membres ; multiplier ou diviser les deux membres par un même nombre non nul.",
        "Le but du jeu : isoler x, c'est-à-dire le laisser tout seul dans un membre.",
      ],
      example: [
        "x − 4 = 10 : on ajoute 4 des deux côtés → x = 14.",
        "x + 5 = 12 : on soustrait 5 des deux côtés → x = 7.",
        "6x = 42 : on divise les deux membres par 6 → x = 7.",
      ],
      tip: "À chaque étape, écris l'opération que tu fais des deux côtés. Une équation se résout comme on déshabille un oignon : une couche à la fois.",
    },
    {
      title: "Résoudre ax + b = c",
      paragraphs: [
        "Pour résoudre une équation du type ax + b = c, on procède en deux étapes : d'abord se débarrasser du terme b en le soustrayant des deux côtés, puis se débarrasser du coefficient a en divisant les deux membres par a.",
        "L'ordre est important : on retire d'abord ce qui est ajouté, ensuite ce qui multiplie.",
        "Termine toujours par une vérification : remplace x par ta solution dans l'équation de départ.",
      ],
      example: [
        "3x + 5 = 20 : on soustrait 5 → 3x = 15 ; on divise par 3 → x = 5.",
        "4x − 7 = 9 : on ajoute 7 → 4x = 16 ; on divise par 4 → x = 4.",
        "2x + 9 = 3 : on soustrait 9 → 2x = −6 ; on divise par 2 → x = −3. Une solution peut être négative !",
      ],
      tip: "Moyen mnémotechnique : « d'abord les additions, ensuite les multiplications » — on défait le calcul dans l'ordre inverse de sa construction.",
    },
    {
      title: "L'inconnue des deux côtés : ax + b = cx + d",
      paragraphs: [
        "Quand x apparaît dans les deux membres, on commence par regrouper tous les termes en x d'un même côté, en soustrayant cx des deux membres. On retombe alors sur une équation du type déjà connu.",
        "Stratégie confortable : regroupe les x du côté où le coefficient est le plus grand, tu éviteras les coefficients négatifs.",
        "Ensuite, regroupe les nombres de l'autre côté, puis divise.",
      ],
      example: [
        "5x + 2 = 3x + 10 : on soustrait 3x → 2x + 2 = 10 ; on soustrait 2 → 2x = 8 ; on divise par 2 → x = 4.",
        "7x − 4 = 2x − 19 : on soustrait 2x → 5x − 4 = −19 ; on ajoute 4 → 5x = −15 ; on divise par 5 → x = −3.",
        "Vérification du premier exemple : 5 × 4 + 2 = 22 et 3 × 4 + 10 = 22. Égalité confirmée !",
      ],
      tip: "Un membre pour les x, un membre pour les nombres : quand chaque famille a son camp, la fin du calcul est automatique.",
    },
    {
      title: "Mettre un problème en équation",
      paragraphs: [
        "Beaucoup de problèmes se résolvent en quatre étapes : choisir l'inconnue (« soit x le… »), traduire l'énoncé en équation, résoudre l'équation, puis conclure par une phrase en vérifiant que la réponse est cohérente.",
        "La traduction est l'étape clé : repère les mots qui indiquent des opérations (« le double » → 2x, « augmenté de 5 » → + 5, « j'obtiens » → =).",
        "N'oublie jamais la conclusion : la solution de l'équation doit répondre à la question posée, avec son unité.",
      ],
      example: [
        "« Je pense à un nombre, je le multiplie par 4, j'ajoute 5 : j'obtiens 33. » → 4x + 5 = 33 → 4x = 28 → x = 7.",
        "« Un rectangle a un périmètre de 46 cm et sa longueur dépasse sa largeur de 5 cm. » Soit x la largeur : la longueur est x + 5, et 2(x + x + 5) = 46.",
      ],
      tip: "Commence toujours par écrire « soit x = … » en précisant ce que représente x : la moitié des erreurs de mise en équation vient d'une inconnue mal définie.",
    },
  ],
  exercises: [
    {
      id: "m4equ-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la solution de l'équation x + 5 = 12 ?",
      choices: ["7", "17", "−7", "60"],
      answer: 0,
      explanation:
        "On soustrait 5 aux deux membres : x + 5 − 5 = 12 − 5, donc x = 7. Vérification : 7 + 5 = 12. Piège : 17 correspond à une addition (12 + 5) au lieu d'une soustraction.",
      hint: "Quelle opération enlève le + 5 du membre de gauche ?",
    },
    {
      id: "m4equ-2",
      level: 1,
      type: "input",
      question: "Résous l'équation : x − 4 = 10",
      answer: "14",
      accept: ["x=14", "x = 14"],
      explanation:
        "On ajoute 4 aux deux membres pour isoler x : x − 4 + 4 = 10 + 4, donc x = 14. Vérification : 14 − 4 = 10. La balance reste équilibrée car on a ajouté la même chose des deux côtés.",
      hint: "Ajoute le même nombre des deux côtés pour laisser x tout seul.",
    },
    {
      id: "m4equ-3",
      level: 1,
      type: "truefalse",
      question: "5 est solution de l'équation 3x − 2 = 13.",
      answer: true,
      explanation:
        "Vrai ! On teste en remplaçant x par 5 : 3 × 5 − 2 = 15 − 2 = 13. Le membre de gauche vaut 13, comme le membre de droite : 5 est bien solution. Tester une valeur, c'est simplement substituer et comparer les deux membres.",
    },
    {
      id: "m4equ-4",
      level: 1,
      type: "qcm",
      question: "Quelle est la solution de l'équation 6x = 42 ?",
      choices: ["7", "36", "48", "252"],
      answer: 0,
      explanation:
        "6x signifie 6 × x : pour isoler x, on divise les deux membres par 6 : x = 42 ÷ 6 = 7. Vérification : 6 × 7 = 42. Piège : 36 et 48 viendraient d'une soustraction ou d'une addition, mais ici c'est une multiplication qu'il faut défaire.",
      hint: "6x veut dire 6 × x : quelle opération défait une multiplication ?",
    },
    {
      id: "m4equ-5",
      level: 2,
      type: "input",
      question: "Résous l'équation : 3x + 5 = 20",
      answer: "5",
      accept: ["x=5", "x = 5"],
      explanation:
        "Étape 1 : on soustrait 5 aux deux membres → 3x = 15. Étape 2 : on divise les deux membres par 3 → x = 5. Vérification : 3 × 5 + 5 = 20. Piège : commencer par diviser par 3 obligerait à diviser AUSSI le 5, avec des fractions inutiles.",
      hint: "Débarrasse-toi d'abord du + 5, ensuite du coefficient 3.",
    },
    {
      id: "m4equ-6",
      level: 2,
      type: "input",
      question: "Résous l'équation : 4x − 7 = 9",
      answer: "4",
      accept: ["x=4", "x = 4"],
      explanation:
        "Étape 1 : on ajoute 7 aux deux membres → 4x = 16. Étape 2 : on divise par 4 → x = 4. Vérification : 4 × 4 − 7 = 16 − 7 = 9. La méthode est toujours la même : d'abord le terme ajouté ou soustrait, ensuite le coefficient.",
      hint: "Commence par ajouter 7 des deux côtés.",
    },
    {
      id: "m4equ-7",
      level: 2,
      type: "qcm",
      question: "Quelle est la solution de l'équation 2x + 9 = 3 ?",
      choices: ["−3", "3", "6", "−6"],
      answer: 0,
      explanation:
        "On soustrait 9 : 2x = 3 − 9 = −6. On divise par 2 : x = −3. Vérification : 2 × (−3) + 9 = −6 + 9 = 3. Piège : une solution peut très bien être négative, ne te laisse pas surprendre par 3 − 9.",
      hint: "3 − 9 donne un nombre négatif : continue le calcul normalement.",
    },
    {
      id: "m4equ-8",
      level: 2,
      type: "truefalse",
      question: "Ajouter un même nombre aux deux membres d'une équation ne change pas ses solutions.",
      answer: true,
      explanation:
        "Vrai ! C'est la règle fondamentale de la résolution, l'image de la balance : si les deux plateaux sont en équilibre et qu'on ajoute la même masse des deux côtés, l'équilibre est conservé. Idem pour soustraire, ou pour multiplier et diviser par un nombre non nul.",
    },
    {
      id: "m4equ-9",
      level: 3,
      type: "input",
      question: "Résous l'équation : 5x + 2 = 3x + 10",
      answer: "4",
      accept: ["x=4", "x = 4"],
      explanation:
        "Étape 1 : on soustrait 3x aux deux membres → 2x + 2 = 10. Étape 2 : on soustrait 2 → 2x = 8. Étape 3 : on divise par 2 → x = 4. Vérification : 5 × 4 + 2 = 22 et 3 × 4 + 10 = 22. Piège : commence bien par regrouper les x d'un seul côté avant de toucher aux nombres.",
      hint: "Soustrais 3x des deux côtés pour regrouper les x à gauche.",
    },
    {
      id: "m4equ-10",
      level: 3,
      type: "input",
      question: "Résous l'équation : 7x − 4 = 2x − 19",
      answer: "-3",
      accept: ["−3", "x=-3", "x = -3", "x=−3"],
      explanation:
        "Étape 1 : on soustrait 2x → 5x − 4 = −19. Étape 2 : on ajoute 4 → 5x = −15. Étape 3 : on divise par 5 → x = −3. Vérification : 7 × (−3) − 4 = −25 et 2 × (−3) − 19 = −25. Piège : −19 + 4 = −15, applique soigneusement les règles d'addition des relatifs.",
      hint: "Regroupe les x à gauche, les nombres à droite, puis divise.",
    },
    {
      id: "m4equ-11",
      level: 3,
      type: "qcm",
      question:
        "« Je pense à un nombre, je le multiplie par 4, puis j'ajoute 5 : j'obtiens 33. » Si x est le nombre pensé, quelle équation traduit ce programme ?",
      choices: ["4x + 5 = 33", "4x − 5 = 33", "4(x + 5) = 33", "x + 4 × 5 = 33"],
      answer: 0,
      explanation:
        "On suit les étapes dans l'ordre : le nombre x est multiplié par 4 (→ 4x), puis on ajoute 5 (→ 4x + 5), et le résultat vaut 33. D'où 4x + 5 = 33, qui donne x = 7. Piège : 4(x + 5) correspondrait à « j'ajoute 5 PUIS je multiplie par 4 », l'ordre inverse.",
      hint: "Traduis chaque étape du programme dans l'ordre où elle est faite.",
    },
    {
      id: "m4equ-12",
      level: 3,
      type: "input",
      question:
        "Un rectangle a un périmètre de 46 cm. Sa longueur dépasse sa largeur de 5 cm. Quelle est sa largeur, en cm ?",
      answer: "9",
      accept: [],
      explanation:
        "Soit x la largeur en cm ; la longueur vaut alors x + 5. Le périmètre s'écrit 2(x + x + 5) = 46, soit 2(2x + 5) = 46, donc 4x + 10 = 46. On soustrait 10 : 4x = 36, puis on divise par 4 : x = 9. La largeur mesure 9 cm (et la longueur 14 cm : 2 × (9 + 14) = 46, c'est cohérent). Piège : le périmètre compte DEUX longueurs et DEUX largeurs.",
      hint: "Pose x = largeur, exprime la longueur, puis écris que le périmètre vaut 46.",
    },
  ],
};
