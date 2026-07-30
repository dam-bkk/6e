import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci5-energie-programmation",
  subject: "sciences",
  grade: "5e",
  num: 6,
  title: "Énergie et programmation",
  domain: "donnees",
  domainLabel: "Technologie",
  icon: "Cpu",
  teaser: "Sources, conversions, watts et kilowattheures, puis capteurs et algorithmes : fais fonctionner un objet.",
  objectives: [
    "Je sais citer des sources d'énergie et distinguer renouvelable et non renouvelable",
    "Je sais nommer les formes d'énergie et repérer les convertisseurs",
    "Je sais construire une chaîne d'énergie d'un objet technique",
    "Je sais utiliser le watt et le kilowattheure sans les confondre",
    "Je sais décrire un objet programmable : capteur, programme, actionneur",
    "Je sais lire un algorithme avec boucles et conditions et prédire son résultat",
  ],
  lesson: [
    {
      title: "Sources et formes d'énergie",
      paragraphs: [
        "L'énergie est ce qui permet de mettre en mouvement, de chauffer, d'éclairer, de faire fonctionner un appareil. On distingue d'abord les sources d'énergie, c'est-à-dire ce dans quoi on puise. Les sources non renouvelables existent en quantité limitée et se reconstituent trop lentement à notre échelle : le charbon, le pétrole, le gaz naturel (les énergies fossiles) et l'uranium. Les sources renouvelables se renouvellent en permanence : le Soleil, le vent, l'eau des rivières, la biomasse, la chaleur du sol.",
        "On distingue ensuite les formes d'énergie, c'est-à-dire la manière dont l'énergie se présente : énergie cinétique (celle d'un objet en mouvement), énergie thermique (liée à la température), énergie électrique, énergie lumineuse, énergie chimique (stockée dans les aliments, les carburants, une pile), énergie de position (un objet en hauteur, l'eau d'un barrage).",
        "Une règle importante : l'énergie ne se crée pas et ne disparaît pas, elle se convertit d'une forme à une autre. Une centrale électrique ne fabrique pas l'énergie : elle convertit celle d'une source en énergie électrique. Et l'électricité n'est pas une source, c'est une forme d'énergie, obtenue à partir d'autre chose.",
      ],
      example: [
        "Sources renouvelables : Soleil, vent, eau, biomasse. Non renouvelables : charbon, pétrole, gaz, uranium.",
        "Formes : cinétique, thermique, électrique, lumineuse, chimique, de position.",
      ],
      tip: "Ne confonds pas source et forme. Le vent est une source ; l'énergie cinétique du vent est une forme. L'électricité est toujours une forme, jamais une source.",
    },
    {
      title: "Chaînes d'énergie et convertisseurs",
      paragraphs: [
        "Un objet technique fonctionne parce que l'énergie y suit un parcours, qu'on appelle la chaîne d'énergie. Elle comporte une source, puis des éléments qui stockent, transportent, convertissent, et enfin l'action utile obtenue. Un convertisseur est un élément qui change l'énergie de forme : un moteur électrique convertit l'énergie électrique en énergie cinétique, une lampe convertit l'énergie électrique en énergie lumineuse, un panneau photovoltaïque convertit l'énergie lumineuse en énergie électrique.",
        "Aucune conversion n'est parfaite : une partie de l'énergie part toujours en chaleur non désirée, ce qu'on appelle les pertes. C'est pour cela qu'un chargeur de téléphone chauffe, qu'une ampoule chauffe, qu'un moteur chauffe. Le rendement d'un appareil est d'autant meilleur que ces pertes sont faibles. Une ampoule LED éclaire autant qu'une vieille ampoule à filament en consommant beaucoup moins, parce qu'elle gaspille bien moins d'énergie en chaleur.",
        "Un même appareil peut enchaîner plusieurs conversions. Dans une centrale thermique : énergie chimique du gaz → énergie thermique de la vapeur → énergie cinétique de la turbine → énergie électrique de l'alternateur. Dans une éolienne : énergie cinétique du vent → énergie cinétique des pales → énergie électrique.",
      ],
      example: [
        "Lampe de poche : énergie chimique de la pile → énergie électrique → énergie lumineuse (et un peu de chaleur perdue).",
        "Vélo électrique : énergie chimique de la batterie → énergie électrique → énergie cinétique de la roue.",
      ],
      tip: "Pour écrire une chaîne d'énergie, pars toujours de la source et termine par l'action utile, avec des flèches. Et pense à noter les pertes en chaleur : elles existent presque toujours.",
      figure: "sx-chaine-energie",
    },
    {
      title: "Puissance et énergie consommée : W et kWh",
      paragraphs: [
        "La puissance d'un appareil indique la vitesse à laquelle il consomme de l'énergie. Elle se mesure en watts (W). Un kilowatt (kW) vaut 1 000 W. Une ampoule LED fait environ 8 W, un ordinateur portable environ 50 W, un four électrique environ 2 000 W soit 2 kW.",
        "L'énergie consommée, elle, dépend aussi de la durée d'utilisation. Elle se mesure en wattheures (Wh) ou en kilowattheures (kWh) : c'est l'unité qui figure sur la facture d'électricité. La relation à retenir est simple : énergie (en kWh) = puissance (en kW) × durée (en h). Un appareil de 2 kW utilisé 3 heures consomme 2 × 3 = 6 kWh.",
        "Ne confonds pas les deux : un four de 2 000 W allumé 5 minutes consomme peu, tandis qu'une box internet de 15 W allumée en permanence consomme beaucoup sur l'année. La puissance est une caractéristique de l'appareil, l'énergie dépend du temps pendant lequel on s'en sert.",
      ],
      example: [
        "Ampoule de 10 W allumée 5 h : 0,01 kW × 5 h = 0,05 kWh.",
        "Four de 2 kW utilisé 1 h 30, soit 1,5 h : 2 × 1,5 = 3 kWh.",
      ],
      tip: "Astuce de calcul : convertis d'abord les watts en kilowatts (divise par 1 000) et les minutes en heures (divise par 60), puis multiplie. Retiens la phrase : « le watt dit à quelle vitesse, le kilowattheure dit combien en tout ».",
    },
    {
      title: "Les objets programmables : capteur, programme, action",
      paragraphs: [
        "Beaucoup d'objets du quotidien réagissent tout seuls à leur environnement : un portail qui s'ouvre, une lampe de couloir qui s'allume au passage, un radiateur qui se coupe quand il fait assez chaud. Ce sont des objets programmables, et ils fonctionnent tous selon la même logique en trois temps.",
        "D'abord les capteurs : ils mesurent une grandeur ou détectent un événement et fournissent une information. Capteur de température, de luminosité, de présence, de distance, bouton poussoir. Ensuite le programme, exécuté par un microcontrôleur : il reçoit les informations des capteurs et décide quoi faire. Enfin les actionneurs : ils réalisent l'action décidée. Moteur, lampe, buzzer, électrovanne, écran.",
        "La chaîne est donc : capteur → programme → actionneur. Un capteur ne décide rien, il informe ; un actionneur ne décide rien non plus, il exécute. Toute l'intelligence de l'objet est dans le programme, écrit par un humain. Attention à l'idée reçue : un objet programmé n'invente rien, il applique exactement les instructions qu'on lui a données, y compris les erreurs.",
      ],
      example: [
        "Éclairage automatique : capteur de luminosité + capteur de présence → programme → lampe (actionneur).",
        "Barrière de parking : capteur de présence et lecteur de badge → programme → moteur de la barrière.",
      ],
      tip: "Pour analyser un objet programmé, cherche les trois éléments dans l'ordre : qu'est-ce qui mesure ? qu'est-ce qui décide ? qu'est-ce qui agit ?",
    },
    {
      title: "Algorithmes : boucles et conditions",
      paragraphs: [
        "Un algorithme est une suite d'instructions, écrites dans l'ordre, qui décrit comment résoudre un problème ou accomplir une tâche. Le programme est la traduction de cet algorithme dans un langage compris par la machine, par exemple avec des blocs Scratch ou du code Python.",
        "Deux structures reviennent sans arrêt. La boucle répète des instructions : « répéter 4 fois : avancer de 100, tourner de 90° » dessine un carré. Une boucle « répéter indéfiniment » tourne sans fin, ce qui est fréquent dans un objet connecté qui surveille en permanence son capteur. La condition, elle, choisit selon la situation : « si la température est inférieure à 19 °C, alors allumer le radiateur, sinon l'éteindre ». Le bloc « sinon » n'est exécuté que quand le test est faux.",
        "Pour prédire ce que fait un programme, il faut le dérouler ligne par ligne, comme un ordinateur, en notant à chaque étape la valeur des variables. Une variable est une case mémoire portant un nom, dont le contenu peut changer : compteur, score, temperature. L'instruction « compteur ← compteur + 1 » signifie « remplacer le contenu de compteur par sa valeur actuelle augmentée de 1 ».",
        "L'ordre des instructions est capital : « avancer puis tourner » ne donne pas le même dessin que « tourner puis avancer ». Et un test mal écrit, comme un « si » sans « sinon » là où il en faudrait un, produit un objet qui fonctionne à moitié. Un programme qui ne fait pas ce que tu voulais n'est presque jamais capricieux : il fait exactement ce que tu as écrit.",
      ],
      example: [
        "Carré : répéter 4 fois [avancer de 100 ; tourner de 90°]. Triangle équilatéral : répéter 3 fois [avancer de 100 ; tourner de 120°].",
        "Serre automatique : répéter indéfiniment [si humidité < 30 % alors ouvrir l'arrosage, sinon fermer l'arrosage].",
      ],
      tip: "Pour un polygone régulier à n côtés en Scratch, l'angle de rotation vaut 360 ÷ n. Pour un carré : 360 ÷ 4 = 90°. Et pour déboguer, déroule le programme à la main avec un tableau des variables.",
    },
  ],
  exercises: [
    {
      id: "s5ene-1",
      level: 1,
      type: "qcm",
      question: "Parmi ces sources d'énergie, laquelle est renouvelable ?",
      choices: ["le charbon", "le pétrole", "le vent", "l'uranium"],
      answer: 2,
      explanation:
        "Le vent est une source renouvelable : il se renouvelle en permanence et son utilisation ne l'épuise pas. Le charbon, le pétrole (énergies fossiles) et l'uranium existent en quantité limitée et se reconstituent bien trop lentement à notre échelle : ce sont des sources non renouvelables. Attention : renouvelable ne veut pas dire « disponible tout le temps » — il n'y a pas toujours du vent.",
      hint: "Laquelle de ces sources ne s'épuise pas quand on l'utilise ?",
    },
    {
      id: "s5ene-2",
      level: 1,
      type: "truefalse",
      question: "L'électricité est une source d'énergie.",
      answer: false,
      explanation:
        "Faux. L'électricité est une forme d'énergie, pas une source : il faut toujours la produire à partir d'autre chose, comme le vent, l'eau, le Soleil, l'uranium ou un combustible fossile. C'est une confusion très fréquente. L'intérêt de cette forme d'énergie est qu'elle se transporte facilement et se convertit en presque toutes les autres formes.",
      hint: "D'où vient l'électricité qui arrive dans la prise ?",
    },
    {
      id: "s5ene-3",
      level: 1,
      type: "input",
      question: "Quelle est l'unité de la puissance d'un appareil électrique ? Réponds par le nom de l'unité, en un seul mot.",
      answer: "watt",
      accept: ["le watt", "watts", "w"],
      explanation:
        "La puissance se mesure en watts, de symbole W. Elle indique la vitesse à laquelle l'appareil consomme de l'énergie. Ne la confonds pas avec l'énergie consommée, qui se mesure en wattheures (Wh) ou kilowattheures (kWh) et qui dépend en plus de la durée d'utilisation.",
      hint: "Son symbole est la lettre W.",
    },
    {
      id: "s5ene-4",
      level: 1,
      type: "qcm",
      question: "Dans un objet programmable, quel élément mesure une grandeur et fournit une information au programme ?",
      choices: ["l'actionneur", "le capteur", "le microcontrôleur", "la batterie"],
      answer: 1,
      explanation:
        "Le capteur mesure ou détecte (température, luminosité, présence, distance) et transmet l'information. Le programme, exécuté par le microcontrôleur, décide ensuite quoi faire, et l'actionneur (moteur, lampe, buzzer) réalise l'action. La chaîne est toujours : capteur → programme → actionneur. Un capteur ne décide rien, il informe seulement.",
      hint: "Lequel des trois est en contact avec l'environnement pour le mesurer ?",
    },
    {
      id: "s5ene-5",
      level: 2,
      type: "qcm",
      question: "Quelle conversion d'énergie réalise un panneau photovoltaïque ?",
      choices: [
        "énergie électrique → énergie lumineuse",
        "énergie lumineuse → énergie électrique",
        "énergie thermique → énergie cinétique",
        "énergie chimique → énergie électrique",
      ],
      answer: 1,
      explanation:
        "Un panneau photovoltaïque convertit l'énergie lumineuse du Soleil en énergie électrique. La conversion inverse (électrique → lumineuse) est celle d'une lampe. Ne confonds pas avec le panneau solaire thermique, qui chauffe de l'eau et convertit donc l'énergie lumineuse en énergie thermique. Et comme toute conversion, celle-ci n'est pas parfaite : une partie de l'énergie reçue devient de la chaleur.",
      hint: "Que reçoit le panneau, et que fournit-il au circuit ?",
    },
    {
      id: "s5ene-6",
      level: 2,
      type: "input",
      question: "Un radiateur de puissance 2 kW fonctionne pendant 3 heures. Quelle énergie consomme-t-il, en kWh ? Réponds par un nombre seul.",
      answer: "6",
      accept: ["6 kwh", "6kwh"],
      explanation:
        "On applique énergie = puissance × durée, avec la puissance en kW et la durée en heures : 2 × 3 = 6 kWh. Le kilowattheure est justement construit pour cela : c'est l'énergie consommée par un appareil de 1 kW pendant 1 h. C'est l'unité que l'on retrouve sur la facture d'électricité.",
      hint: "Énergie (kWh) = puissance (kW) × durée (h).",
    },
    {
      id: "s5ene-7",
      level: 2,
      type: "truefalse",
      question: "Un appareil de forte puissance consomme forcément beaucoup d'énergie sur une journée.",
      answer: false,
      explanation:
        "Faux. L'énergie consommée dépend aussi de la durée d'utilisation. Un four de 2 000 W allumé 5 minutes consomme environ 0,17 kWh, alors qu'une box internet de 15 W laissée allumée 24 h consomme 0,36 kWh, soit plus du double. La puissance décrit la vitesse de consommation, l'énergie décrit le total : c'est le produit des deux qui compte.",
      hint: "Compare un four allumé 5 minutes et une box allumée toute la journée.",
    },
    {
      id: "s5ene-8",
      level: 2,
      type: "qcm",
      question: "En Scratch, on écrit : « répéter 4 fois [avancer de 100 ; tourner de 90 degrés] ». Quelle figure est dessinée ?",
      choices: ["un triangle", "un carré", "un cercle", "une simple ligne droite"],
      answer: 1,
      explanation:
        "Quatre côtés de même longueur séparés par quatre rotations de 90° : le lutin revient à son point de départ après avoir tourné 4 × 90 = 360°, il a donc dessiné un carré. La règle générale pour un polygone régulier à n côtés est : angle = 360 ÷ n. Pour un triangle équilatéral, il faudrait répéter 3 fois avec un angle de 120°.",
      hint: "Combien de côtés, et de quel angle tourne-t-on à chaque coin ?",
    },
    {
      id: "s5ene-9",
      level: 3,
      type: "qcm",
      question: "Dans une centrale thermique au gaz, quel est le bon ordre des conversions d'énergie ?",
      choices: [
        "chimique → thermique → cinétique → électrique",
        "électrique → thermique → chimique → cinétique",
        "cinétique → chimique → électrique → thermique",
        "thermique → électrique → chimique → cinétique",
      ],
      answer: 0,
      explanation:
        "La combustion du gaz libère son énergie chimique sous forme d'énergie thermique, qui produit de la vapeur ; cette vapeur fait tourner une turbine (énergie cinétique) reliée à un alternateur qui fournit l'énergie électrique. La centrale ne crée donc aucune énergie : elle convertit celle du gaz, avec des pertes en chaleur à chaque étape. Une chaîne d'énergie se lit toujours de la source vers l'action utile.",
      hint: "Pars de ce qui est brûlé et termine par ce qui sort de la centrale.",
    },
    {
      id: "s5ene-10",
      level: 3,
      type: "input",
      question: "Une ampoule LED de 10 W reste allumée 5 heures. Quelle énergie consomme-t-elle, en kWh ? Réponds par un nombre seul, avec une virgule si besoin.",
      answer: "0,05",
      accept: ["0.05", "0,05 kwh", ",05"],
      explanation:
        "Il faut d'abord convertir la puissance en kilowatts : 10 W = 10 ÷ 1 000 = 0,01 kW. Puis énergie = 0,01 × 5 = 0,05 kWh. Oublier cette conversion est l'erreur la plus fréquente : elle donnerait 50 kWh, soit mille fois trop, l'équivalent de plusieurs jours de consommation d'un logement.",
      hint: "Convertis d'abord les 10 W en kW en divisant par 1 000.",
    },
    {
      id: "s5ene-11",
      level: 3,
      type: "qcm",
      question: "Un programme de serre automatique dit : « répéter indéfiniment [si humidité < 30 % alors ouvrir l'arrosage, sinon fermer l'arrosage] ». L'humidité mesurée est de 45 %. Que fait le programme ?",
      choices: [
        "il ouvre l'arrosage, car la boucle s'exécute",
        "il ferme l'arrosage, car le test est faux",
        "il s'arrête, car aucune condition n'est remplie",
        "il ouvre puis ferme l'arrosage en alternance",
      ],
      answer: 1,
      explanation:
        "Le test « humidité < 30 % » est faux, puisque 45 n'est pas inférieur à 30 : c'est donc le bloc « sinon » qui s'exécute, et l'arrosage se ferme. La boucle, elle, ne s'arrête pas : elle refait ce test en permanence, et ouvrira l'arrosage dès que l'humidité descendra sous 30 %. Un programme n'invente rien : il applique le test tel qu'il est écrit.",
      hint: "45 est-il inférieur à 30 ? Selon ta réponse, quel bloc s'exécute : « alors » ou « sinon » ?",
    },
    {
      id: "s5ene-12",
      level: 3,
      type: "input",
      question: "Un programme démarre avec compteur = 0, puis exécute : « répéter 5 fois [compteur ← compteur + 3] ». Quelle est la valeur finale de compteur ? Réponds par un nombre seul.",
      answer: "15",
      explanation:
        "À chaque tour de boucle, la variable augmente de 3 : 0, puis 3, 6, 9, 12, 15. Après les 5 répétitions, compteur vaut 5 × 3 = 15. L'instruction « compteur ← compteur + 3 » ne signifie pas une égalité mathématique impossible : c'est une affectation, qui remplace l'ancienne valeur par la nouvelle. Pour prédire un programme, déroule-le ligne par ligne en notant la valeur des variables.",
      hint: "Note la valeur de compteur après chaque tour : 0, 3, 6, …",
    },
  ],
  videos: [
    { title: "Utilisation et économie d'énergie - Physique-Chimie - 6e - Les Bons Profs", youtubeId: "TxA5HXY8ic4", channel: "Les Bons Profs" },
  ],
};
