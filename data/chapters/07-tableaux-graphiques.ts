import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "tableaux-graphiques",
  num: 7,
  title: "Tableaux et graphiques",
  domain: "donnees",
  icon: "BarChart3",
  teaser: "Lire, construire et questionner les données : deviens un lecteur de graphiques averti.",
  objectives: [
    "Je sais lire et compléter un tableau, simple ou à double entrée",
    "Je sais lire un diagramme en bâtons en utilisant son échelle",
    "Je sais lire un graphique cartésien simple",
    "Je sais interpréter un diagramme circulaire simple",
    "Je sais choisir une échelle adaptée pour construire un diagramme",
    "Je garde un œil critique face à un graphique",
  ],
  lesson: [
    {
      title: "Lire un tableau",
      paragraphs: [
        "Un tableau sert à ranger des données pour les retrouver d'un coup d'œil. Dans un tableau simple, chaque colonne (ou chaque ligne) correspond à une catégorie : les jours de la semaine, les classes, les sports…",
        "Un tableau à double entrée croise DEUX informations à la fois : par exemple les sports en lignes et les classes en colonnes. Pour lire une case, on suit sa ligne d'une main et sa colonne de l'autre : la case se trouve à leur croisement.",
        "Compléter un tableau demande souvent un petit calcul : un total de ligne, un total de colonne, ou une case manquante retrouvée par soustraction.",
      ],
      example: [
        "Sports choisis au collège — Lignes : foot, basket. Colonnes : 6e A, 6e B.",
        "La case « basket / 6e B » indique combien d'élèves de 6e B ont choisi le basket.",
      ],
      tip: "Dans un tableau à double entrée, pose un doigt sur la ligne, un doigt sur la colonne, et fais-les glisser jusqu'à ce qu'ils se rencontrent : c'est la bonne case, à tous les coups.",
    },
    {
      title: "Le diagramme en bâtons",
      paragraphs: [
        "Dans un diagramme en bâtons, chaque catégorie est représentée par un bâton vertical. Plus le bâton est haut, plus la valeur est grande : la hauteur est proportionnelle à la valeur.",
        "Avant de lire quoi que ce soit, repère l'échelle sur l'axe vertical : que vaut une graduation ? Un même bâton de 4 carreaux vaut 4 si une graduation vaut 1… mais 20 si elle vaut 5 !",
      ],
      example: [
        "Sur l'axe vertical, les graduations vont de 5 en 5.",
        "Un bâton qui monte à 3 graduations représente 3 × 5 = 15.",
      ],
      tip: "Premier réflexe devant un diagramme en bâtons : lire la valeur d'UNE graduation sur l'axe. Ensuite seulement, compare les bâtons.",
      figure: "diagramme-batons",
    },
    {
      title: "Le graphique cartésien",
      paragraphs: [
        "Un graphique cartésien utilise deux axes : un axe horizontal (souvent le temps : heures, jours, années) et un axe vertical (la grandeur mesurée : température, taille, prix…). Chaque point du graphique raconte une mesure.",
        "Pour lire un point, on descend verticalement vers l'axe horizontal (quand ?) et on glisse horizontalement vers l'axe vertical (combien ?). Quand les points sont reliés, la ligne montre l'évolution : elle monte, descend ou reste stable.",
      ],
      example: [
        "Sur un graphique de température : au-dessus de « 10 h », le point est à la hauteur 16.",
        "Lecture : à 10 h, il faisait 16 °C.",
      ],
      tip: "Un graphique cartésien se lit comme une histoire, de gauche à droite : « ça monte, ça descend, ça stagne ». Raconte-toi cette histoire avant de répondre aux questions.",
    },
    {
      title: "Le diagramme circulaire",
      paragraphs: [
        "Dans un diagramme circulaire, le disque entier représente le total (100 %). Chaque catégorie occupe un secteur, une « part de camembert », dont la taille est proportionnelle à sa valeur.",
        "Les repères simples suffisent en 6e : un secteur qui occupe la moitié du disque représente la moitié du total ; un quart du disque, le quart du total.",
      ],
      example: [
        "Un club compte 60 membres. Sur le diagramme circulaire, le secteur « natation » occupe la moitié du disque.",
        "La natation compte donc 60 ÷ 2 = 30 membres.",
      ],
      tip: "Disque entier = total. Retrouve d'abord le total, puis raisonne en moitié et en quart : c'est presque toujours suffisant.",
    },
    {
      title: "Construire un graphique… et garder l'œil critique",
      paragraphs: [
        "Pour construire un diagramme en bâtons, il faut choisir une échelle adaptée : le plus grand bâton doit tenir sur la feuille, sans que les autres deviennent minuscules. Si les valeurs vont jusqu'à 90, une graduation qui vaut 10 est un bon choix ; une graduation qui vaut 1 exigerait 90 carreaux !",
        "Un graphique peut aussi tromper. Si l'axe vertical ne commence pas à 0, les écarts entre les bâtons paraissent énormes alors qu'ils sont petits. Les données sont justes, mais l'impression visuelle est déformée.",
        "Face à un graphique, pose-toi toujours trois questions : que représente-t-il ? Quelle est l'échelle ? L'axe part-il bien de 0 ?",
      ],
      example: [
        "Deux magasins vendent 98 et 102 glaces.",
        "Avec un axe qui part de 0, les deux bâtons semblent presque égaux (ils le sont presque !).",
        "Avec un axe qui part de 95, le second bâton paraît plus de 2 fois plus haut : impression trompeuse.",
      ],
      tip: "Un bon lecteur de graphique commence toujours par les axes, jamais par les bâtons. Titre, échelle, point de départ de l'axe : vérifie ces trois choses avant de conclure.",
    },
  ],
  exercises: [
    {
      id: "dat-1",
      level: 1,
      type: "qcm",
      question:
        "Ventes de glaces d'un marchand : lundi 12, mardi 8, mercredi 15, jeudi 9. Quel jour a-t-il vendu le plus de glaces ?",
      choices: ["Lundi", "Mardi", "Mercredi", "Jeudi"],
      answer: 2,
      explanation:
        "On compare les quatre valeurs : 12, 8, 15 et 9. La plus grande est 15, atteinte le mercredi. Sur un diagramme en bâtons, ce serait simplement le bâton le plus haut.",
    },
    {
      id: "dat-2",
      level: 1,
      type: "input",
      question:
        "Effectifs des classes de 6e d'un collège : 6e A 24 élèves, 6e B 26 élèves, 6e C 22 élèves. Combien y a-t-il d'élèves de 6e en tout ?",
      answer: "72",
      explanation:
        "Le total s'obtient en additionnant toutes les valeurs du tableau : 24 + 26 + 22 = 72. Astuce de calcul : 24 + 26 = 50, puis 50 + 22 = 72. Il y a 72 élèves de 6e.",
      hint: "Additionne les trois effectifs.",
    },
    {
      id: "dat-3",
      level: 1,
      type: "truefalse",
      question:
        "Dans un tableau à double entrée, on trouve une case en croisant une ligne et une colonne.",
      answer: true,
      explanation:
        "Vrai ! C'est exactement le principe du tableau à double entrée : chaque case se trouve au croisement d'une ligne et d'une colonne, et donne l'information qui correspond aux deux à la fois. Par exemple, la case au croisement de la ligne « basket » et de la colonne « 6e B » indique le nombre d'élèves de 6e B qui font du basket.",
    },
    {
      id: "dat-4",
      level: 1,
      type: "qcm",
      question:
        "Sur un diagramme en bâtons, chaque graduation de l'axe vertical vaut 5. Le bâton du mercredi monte à 4 graduations. Quelle valeur représente-t-il ?",
      choices: ["4", "9", "20", "45"],
      answer: 2,
      explanation:
        "Une graduation vaut 5, donc 4 graduations valent 4 × 5 = 20. Piège classique : répondre 4 en comptant les graduations sans tenir compte de l'échelle. Sur un diagramme, la hauteur en graduations doit toujours être multipliée par la valeur d'une graduation.",
      hint: "Une graduation vaut 5 : que valent 4 graduations ?",
    },
    {
      id: "dat-5",
      level: 2,
      type: "input",
      question:
        "Inscriptions au club sportif — Filles : football 14, basket 9. Garçons : football 17, basket 12. Combien d'enfants au total sont inscrits au basket ?",
      answer: "21",
      explanation:
        "On cherche le total de la catégorie « basket », filles et garçons confondus : 9 + 12 = 21. Dans un tableau à double entrée, ce serait le total de la ligne « basket ». Attention à ne pas mélanger avec le football : on n'additionne que les valeurs de la bonne catégorie.",
      hint: "Ne garde que les nombres qui concernent le basket.",
    },
    {
      id: "dat-6",
      level: 2,
      type: "qcm",
      question:
        "Relevé de température d'une journée : à 8 h il fait 12 °C, à 10 h 16 °C, à 12 h 21 °C, à 14 h 19 °C. À quelle heure la température était-elle la plus élevée ?",
      choices: ["8 h", "10 h", "12 h", "14 h"],
      answer: 2,
      explanation:
        "On compare les températures : 12, 16, 21 et 19 °C. La plus élevée est 21 °C, relevée à 12 h. Sur un graphique cartésien, ce serait le point le plus haut de la courbe. Remarque : après 12 h, la courbe redescend (19 °C à 14 h), le maximum n'est donc pas forcément à la fin de la journée.",
      hint: "Cherche la plus grande température, puis remonte à l'heure correspondante.",
    },
    {
      id: "dat-7",
      level: 2,
      type: "input",
      question:
        "Un tableau donne le nombre d'élèves à la cantine : lundi 32, mardi 28, jeudi 35, vendredi effacé. Le total de la semaine est 120. Combien d'élèves ont mangé à la cantine vendredi ?",
      answer: "25",
      explanation:
        "On connaît le total et trois valeurs sur quatre. On additionne ce qu'on connaît : 32 + 28 + 35 = 95. La case manquante s'obtient par soustraction : 120 − 95 = 25. Vendredi, 25 élèves ont mangé à la cantine. C'est la méthode classique pour compléter un tableau : total moins tout le reste.",
      hint: "Additionne les trois jours connus, puis compare au total.",
    },
    {
      id: "dat-8",
      level: 2,
      type: "truefalse",
      question:
        "Sur un diagramme circulaire, un secteur qui occupe le quart du disque représente 25 % du total.",
      answer: true,
      explanation:
        "Vrai ! Le disque entier représente le total, c'est-à-dire 100 %. Un quart du disque représente donc le quart du total, soit 100 ÷ 4 = 25 %. C'est le lien direct entre la surface du secteur et la part qu'il représente.",
    },
    {
      id: "dat-9",
      level: 3,
      type: "qcm",
      question:
        "Tu veux construire un diagramme en bâtons sur une grille de 10 carreaux de haut. Tes valeurs vont de 12 à 90. Quelle échelle choisir pour l'axe vertical ?",
      choices: [
        "1 carreau = 1",
        "1 carreau = 10",
        "1 carreau = 100",
      ],
      answer: 1,
      explanation:
        "Avec 1 carreau = 10, la plus grande valeur (90) occupe 9 carreaux : tout tient sur la grille et les bâtons restent bien lisibles. Avec 1 carreau = 1, il faudrait 90 carreaux : impossible. Avec 1 carreau = 100, tous les bâtons feraient moins d'un carreau : illisible. Une bonne échelle fait tenir la plus grande valeur tout en gardant des bâtons assez hauts pour être comparés.",
      hint: "Avec chaque échelle, calcule combien de carreaux il faudrait pour représenter 90.",
    },
    {
      id: "dat-10",
      level: 3,
      type: "input",
      question:
        "Le budget de la fête de l'école est de 80 €. Sur le diagramme circulaire du budget, la nourriture occupe la moitié du disque, la décoration un quart, et la musique tout le reste. Combien d'euros sont consacrés à la musique ?",
      answer: "20",
      explanation:
        "La nourriture prend la moitié (1/2) et la décoration un quart (1/4). Ensemble : 1/2 + 1/4 = 2/4 + 1/4 = 3/4 du disque. Il reste donc 1/4 pour la musique. Un quart de 80 € : 80 ÷ 4 = 20 €. Piège : ne pas répondre 40 (la nourriture) ni oublier que les trois secteurs doivent remplir tout le disque.",
      hint: "Quelle fraction du disque reste-t-il pour la musique une fois la moitié et le quart enlevés ?",
    },
    {
      id: "dat-11",
      level: 3,
      type: "truefalse",
      question:
        "Sur un diagramme en bâtons dont l'axe vertical commence à 50 au lieu de 0, les écarts entre les bâtons peuvent paraître beaucoup plus grands qu'ils ne le sont réellement.",
      answer: true,
      explanation:
        "Vrai ! Si deux valeurs sont 52 et 60, avec un axe partant de 0 les bâtons semblent presque égaux. Mais avec un axe partant de 50, on ne voit que les parties 2 et 10 : le second bâton paraît 5 fois plus haut ! Les données restent justes, c'est l'impression visuelle qui trompe. C'est une technique très utilisée dans les publicités : vérifie toujours où commence l'axe.",
    },
    {
      id: "dat-12",
      level: 3,
      type: "input",
      question:
        "On mesure une plante chaque semaine : semaine 1 : 4 cm, semaine 2 : 7 cm, semaine 3 : 13 cm, semaine 4 : 16 cm. De combien de centimètres la plante a-t-elle grandi entre la semaine 1 et la semaine 4 ?",
      answer: "12",
      explanation:
        "On cherche l'ÉCART entre deux mesures, pas la taille finale : 16 − 4 = 12. La plante a grandi de 12 cm. Piège classique : répondre 16, qui est la taille de la plante en semaine 4, pas sa croissance. Sur un graphique cartésien, cette croissance correspond à la différence de hauteur entre le premier et le dernier point de la courbe.",
      hint: "Grandir de combien = taille finale moins taille de départ.",
    },
  ],
};
