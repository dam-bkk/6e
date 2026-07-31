import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci4-electricite-lois",
  subject: "sciences",
  grade: "4e",
  num: 2,
  title: "Intensité, tension : les lois des circuits",
  domain: "donnees",
  domainLabel: "Physique-chimie",
  icon: "Zap",
  teaser: "Mesurer l'intensité et la tension, appliquer les lois en série et en dérivation, et rester en sécurité.",
  objectives: [
    "Je sais ce que mesurent l'intensité et la tension, et avec quels appareils",
    "Je sais brancher un ampèremètre en série et un voltmètre en dérivation",
    "Je connais les lois de l'intensité et de la tension dans un circuit série",
    "Je connais les lois de l'intensité et de la tension dans un circuit en dérivation",
    "Je sais pourquoi une lampe doit être adaptée à sa tension et à quoi servent fusible et disjoncteur",
  ],
  lesson: [
    {
      title: "L'intensité du courant",
      paragraphs: [
        "Dans un circuit fermé, des charges électriques se déplacent dans les fils. L'intensité du courant mesure le débit de ces charges : plus il en passe par seconde, plus l'intensité est grande. On la note I et elle se mesure en ampères, de symbole A.",
        "On utilise souvent le milliampère : 1 A = 1000 mA. Une petite lampe de poche est traversée par une intensité de l'ordre de 100 mA, soit 0,1 A.",
        "L'intensité se mesure avec un ampèremètre, branché EN SÉRIE dans le circuit : il faut ouvrir le circuit et l'insérer, car le courant doit le traverser. On respecte les bornes : le courant entre par la borne repérée mA ou A et ressort par la borne COM.",
      ],
      example: [
        "0,25 A = 250 mA ; 40 mA = 0,040 A.",
        "Une lampe de poche : environ 0,1 A. Un four électrique : environ 10 A.",
      ],
      tip: "Retiens : l'Ampèremètre s'insère « dAns » le circuit (en série), le Voltmètre se branche « à côté » (en dérivation). Un ampèremètre branché en dérivation aux bornes d'un générateur provoquerait un court-circuit.",
    },
    {
      title: "La tension électrique",
      paragraphs: [
        "La tension mesure ce qui pousse le courant entre deux points du circuit. Elle se note U et se mesure en volts, de symbole V. Une tension se mesure toujours ENTRE DEUX POINTS, jamais en un seul : on parle de la tension aux bornes d'un dipôle.",
        "On la mesure avec un voltmètre branché EN DÉRIVATION, c'est-à-dire en parallèle, directement aux bornes du dipôle étudié. Aucun besoin d'ouvrir le circuit.",
        "Un générateur impose une tension : une pile plate donne 4,5 V, une pile bâton 1,5 V, le secteur des prises françaises 230 V. Un dipôle traversé par aucun courant, comme un interrupteur ouvert, peut malgré tout avoir une tension non nulle à ses bornes.",
      ],
      example: [
        "Pile bâton : 1,5 V. Pile plate : 4,5 V. Batterie de voiture : 12 V. Secteur : 230 V.",
        "Deux piles de 1,5 V branchées en série dans une lampe torche donnent 3,0 V.",
      ],
      tip: "Une tension nulle n'implique pas un circuit sans courant, et un courant nul n'implique pas une tension nulle. Un fil de connexion : U ≈ 0 V mais du courant le traverse. Un interrupteur ouvert : I = 0 A mais U peut valoir plusieurs volts.",
    },
    {
      title: "Le circuit en série",
      paragraphs: [
        "Dans un circuit en série, tous les dipôles sont placés à la suite les uns des autres sur une seule boucle. Il n'y a qu'un seul chemin possible pour le courant.",
        "Loi d'unicité de l'intensité : l'intensité est la MÊME en tout point d'un circuit série. Le courant ne s'use pas et ne se partage pas : ce qui entre dans une lampe en ressort exactement.",
        "Loi d'additivité des tensions : la tension aux bornes du générateur est égale à la somme des tensions aux bornes de chaque dipôle. Chaque dipôle « prend sa part » de la tension.",
        "Conséquence pratique : plus on ajoute de lampes en série, moins chacune reçoit de tension, donc elles brillent toutes plus faiblement. Et si une seule lampe grille, le circuit est ouvert : tout s'éteint.",
      ],
      example: [
        "Générateur 6 V, deux lampes identiques en série : chacune reçoit 6 ÷ 2 = 3 V.",
        "Générateur 9 V, une lampe sous 6 V en série avec un autre dipôle : ce dipôle supporte 9 − 6 = 3 V.",
        "Si l'ampèremètre indique 0,20 A avant la première lampe, il indiquera aussi 0,20 A après la seconde.",
      ],
      tip: "En série, l'intensité est unique et les tensions s'additionnent. Erreur classique : croire que le courant « s'affaiblit » après avoir traversé une lampe. Faux : c'est la tension qui se répartit, pas l'intensité.",
    },
    {
      title: "Le circuit en dérivation",
      paragraphs: [
        "Dans un circuit en dérivation, le courant peut emprunter plusieurs chemins appelés branches, reliées entre deux nœuds. La branche qui contient le générateur s'appelle la branche principale.",
        "Loi d'additivité des intensités (loi des nœuds) : l'intensité dans la branche principale est égale à la somme des intensités dans les branches dérivées. Le courant se partage aux nœuds, puis se rassemble.",
        "Loi d'unicité de la tension : les dipôles branchés en dérivation entre les deux mêmes nœuds ont tous la MÊME tension à leurs bornes, égale à celle du générateur.",
        "Conséquences pratiques : chaque lampe garde son éclat normal quel que soit le nombre de lampes ajoutées, et si l'une grille, les autres continuent de fonctionner. C'est pour cela que toutes les prises et lampes d'une maison sont branchées en dérivation sous 230 V.",
      ],
      example: [
        "Deux lampes en dérivation sur un générateur 6 V : chacune reçoit 6 V.",
        "Branche principale 0,50 A, une branche dérivée parcourue par 0,20 A : l'autre branche est parcourue par 0,50 − 0,20 = 0,30 A.",
      ],
      tip: "Retiens le miroir : en série, I unique et U additives ; en dérivation, U unique et I additives. Une seule phrase à mémoriser, et les deux circuits sont couverts.",
    },
    {
      title: "Adapter une lampe et se protéger",
      paragraphs: [
        "Chaque lampe porte des indications, par exemple 6 V — 100 mA. Ce sont ses valeurs nominales : la tension pour laquelle elle est prévue et l'intensité qui la traverse alors. Une lampe est adaptée quand la tension à ses bornes est proche de sa tension nominale.",
        "Sous une tension trop faible, la lampe brille faiblement, voire pas du tout. Sous une tension trop forte, le filament chauffe excessivement et grille : elle est en surtension.",
        "Un court-circuit se produit quand un fil relie directement les deux bornes d'un dipôle ou du générateur : le courant emprunte ce chemin sans résistance, l'intensité devient énorme, les fils chauffent et peuvent déclencher un incendie.",
        "Pour protéger l'installation, le tableau électrique contient des disjoncteurs qui coupent automatiquement le courant si l'intensité dépasse un seuil ; on peut les réarmer. Le fusible joue le même rôle, mais son fil fond définitivement et il faut le remplacer. Ces dispositifs protègent surtout les installations. Pour protéger les personnes, on ajoute un interrupteur différentiel relié à la prise de terre.",
      ],
      example: [
        "Lampe 6 V branchée sur une pile 4,5 V : elle brille faiblement, sans danger.",
        "Lampe 6 V branchée sur une batterie 12 V : elle grille presque instantanément.",
        "Un disjoncteur de 16 A coupe le circuit dès que l'intensité dépasse 16 A.",
      ],
      tip: "Ne teste jamais un composant sur une prise du secteur : 230 V peut être mortel. Au laboratoire, on travaille uniquement avec des générateurs basse tension, et on n'ouvre jamais un circuit sans avoir coupé l'alimentation.",
    },
  ],
  exercises: [
    {
      id: "s4ele-1",
      level: 1,
      type: "qcm",
      question: "Quelle est l'unité de l'intensité du courant électrique ?",
      choices: ["le volt (V)", "l'ampère (A)", "le watt (W)", "l'ohm (Ω)"],
      answer: 1,
      explanation:
        "L'intensité I se mesure en ampères (A) : elle indique le débit de charges électriques. Le volt est l'unité de tension, le watt celle de la puissance et l'ohm celle de la résistance. Ne confonds pas intensité et tension : ce sont deux grandeurs différentes, mesurées par deux appareils différents.",
      hint: "L'appareil qui mesure cette grandeur s'appelle l'ampèremètre : son nom contient déjà celui de l'unité.",
    },
    {
      id: "s4ele-2",
      level: 1,
      type: "qcm",
      question: "Comment branche-t-on un voltmètre pour mesurer la tension aux bornes d'une lampe ?",
      choices: [
        "en série avec la lampe",
        "en dérivation aux bornes de la lampe",
        "aux bornes du générateur uniquement",
        "n'importe comment, cela ne change rien",
      ],
      answer: 1,
      explanation:
        "Une tension se mesure toujours entre deux points : le voltmètre se branche donc en dérivation, directement aux bornes du dipôle, sans ouvrir le circuit. C'est l'ampèremètre, lui, qui doit être inséré en série pour être traversé par le courant.",
      hint: "Une tension se mesure entre deux points ; l'appareil doit donc être placé à côté du dipôle, sans couper le circuit.",
    },
    {
      id: "s4ele-3",
      level: 1,
      type: "truefalse",
      question: "Dans un circuit en série, le courant est plus faible après la lampe qu'avant.",
      answer: false,
      explanation:
        "Faux : c'est la loi d'unicité de l'intensité. Dans un circuit série, I a la même valeur en tout point, avant comme après chaque dipôle. Le courant ne s'use pas et ne se consomme pas : ce qui se transfère à la lampe, c'est de l'énergie, pas du courant. La tension, elle, se répartit entre les dipôles.",
      hint: "Rappelle-toi ce que dit la loi d'unicité de l'intensité, et quelle grandeur se répartit réellement entre les dipôles.",
    },
    {
      id: "s4ele-4",
      level: 1,
      type: "input",
      question: "Convertis 250 mA en ampères. (nombre seul, virgule décimale)",
      answer: "0,25",
      accept: ["0.25", "0,250", "0,25 a", "0,25a"],
      explanation:
        "1 A = 1000 mA, donc on divise par 1000 : 250 ÷ 1000 = 0,25 A. Erreur fréquente : multiplier au lieu de diviser. Vérifie toujours la logique — un nombre de milliampères donne forcément un nombre d'ampères plus petit.",
      hint: "Un ampère vaut 1000 milliampères ; pour passer des mA aux A, il faut donc diviser.",
    },
    {
      id: "s4ele-5",
      level: 2,
      type: "input",
      question:
        "Un générateur de 9 V alimente deux lampes en série. La tension aux bornes de la première est de 5 V. Quelle est la tension, en volts, aux bornes de la seconde ? (nombre seul)",
      answer: "4",
      accept: ["4 v", "4v"],
      explanation:
        "Loi d'additivité des tensions en série : U générateur = U₁ + U₂, donc U₂ = 9 − 5 = 4 V. En série, chaque dipôle prend une part de la tension totale, et la somme des parts redonne exactement la tension du générateur.",
      hint: "En série, la tension du générateur se partage entre les dipôles : leurs tensions s'additionnent pour donner 9 V.",
    },
    {
      id: "s4ele-6",
      level: 2,
      type: "input",
      question:
        "Dans un circuit en dérivation, la branche principale est parcourue par 0,45 A et une branche dérivée par 0,20 A. Quelle intensité, en ampères, parcourt l'autre branche ? (nombre seul, virgule décimale)",
      answer: "0,25",
      accept: ["0.25", "0,25 a", "0,25a"],
      explanation:
        "Loi d'additivité des intensités (loi des nœuds) : I principale = I₁ + I₂, donc I₂ = 0,45 − 0,20 = 0,25 A. Aux nœuds, le courant se partage puis se rassemble : rien ne se perd, rien ne se crée.",
      hint: "En dérivation, les intensités des branches dérivées s'additionnent pour donner celle de la branche principale.",
    },
    {
      id: "s4ele-7",
      level: 2,
      type: "qcm",
      question: "Deux lampes identiques sont branchées en dérivation sur un générateur de 6 V. Quelle tension reçoit chaque lampe ?",
      choices: ["3 V chacune", "6 V chacune", "12 V chacune", "cela dépend de l'intensité"],
      answer: 1,
      explanation:
        "En dérivation, la tension est unique : chaque dipôle branché entre les deux mêmes nœuds reçoit la tension du générateur, soit 6 V. C'est en SÉRIE que la tension se partagerait (3 V chacune). Cette propriété explique que les lampes d'une maison, toutes en dérivation, gardent leur éclat normal quel que soit leur nombre.",
      hint: "Distingue bien les deux montages : en dérivation, c'est la tension qui est unique, et l'intensité qui s'additionne.",
    },
    {
      id: "s4ele-8",
      level: 2,
      type: "truefalse",
      question: "Dans une guirlande montée en série, si une seule ampoule grille, toutes les autres s'éteignent.",
      answer: true,
      explanation:
        "Vrai : en série il n'existe qu'une seule boucle. Une ampoule grillée ouvre le circuit, l'intensité devient nulle partout et plus rien ne fonctionne. En dérivation, au contraire, chaque branche est indépendante : les autres lampes continueraient de briller. C'est pourquoi les installations domestiques sont câblées en dérivation.",
      hint: "En série, il n'y a qu'un seul chemin pour le courant : que se passe-t-il si ce chemin est coupé quelque part ?",
    },
    {
      id: "s4ele-9",
      level: 3,
      type: "qcm",
      question: "Une lampe portant l'indication « 6 V — 100 mA » est branchée seule aux bornes d'une batterie de 12 V. Que se passe-t-il ?",
      choices: [
        "Elle brille faiblement",
        "Elle brille normalement",
        "Elle grille car elle est en surtension",
        "Rien, elle ne s'allume pas",
      ],
      answer: 2,
      explanation:
        "La tension nominale de la lampe est 6 V. Sous 12 V, soit le double, le filament reçoit beaucoup trop d'énergie, chauffe excessivement et fond : la lampe grille. Une tension trop faible ne casse rien (la lampe brille seulement moins), mais une tension trop forte détruit le dipôle : c'est la surtension.",
      hint: "Compare la tension appliquée à la tension nominale inscrite sur la lampe : ici elle est deux fois trop grande.",
    },
    {
      id: "s4ele-10",
      level: 3,
      type: "truefalse",
      question: "Un fusible et un disjoncteur ont le même rôle, mais le fusible doit être remplacé après avoir fonctionné.",
      answer: true,
      explanation:
        "Vrai : tous deux coupent le circuit quand l'intensité devient trop grande, évitant l'échauffement des fils et l'incendie. Mais le fil du fusible fond définitivement et il faut changer la cartouche, alors qu'un disjoncteur se réarme d'un simple geste. Attention : ces dispositifs protègent l'installation ; ce sont les interrupteurs différentiels reliés à la terre qui protègent les personnes.",
      hint: "Pense à la différence physique : dans un fusible, un fil fond réellement, alors que le disjoncteur est un interrupteur automatique.",
    },
    {
      id: "s4ele-11",
      level: 3,
      type: "input",
      question:
        "Trois lampes sont branchées en dérivation. Elles sont parcourues respectivement par 0,15 A, 0,15 A et 0,20 A. Quelle intensité, en ampères, l'ampèremètre placé dans la branche principale indique-t-il ? (nombre seul, virgule décimale)",
      answer: "0,5",
      accept: ["0.5", "0,50", "0.50", "0,5 a"],
      explanation:
        "Loi d'additivité des intensités : I = 0,15 + 0,15 + 0,20 = 0,50 A. Chaque branche ajoutée en dérivation augmente l'intensité totale débitée par le générateur : c'est exactement pour cela qu'une multiprise surchargée fait disjoncter l'installation.",
      hint: "En dérivation, l'intensité de la branche principale est la somme des intensités de toutes les branches dérivées.",
    },
    {
      id: "s4ele-12",
      level: 3,
      type: "qcm",
      question:
        "Un élève relie par un fil les deux bornes d'un générateur, sans aucun dipôle. Que se produit-il et pourquoi ?",
      choices: [
        "Rien, car il n'y a pas de lampe dans le circuit",
        "Un court-circuit : l'intensité devient très grande et les fils chauffent",
        "La tension du générateur devient énorme",
        "Le courant circule dans les deux sens en même temps",
      ],
      answer: 1,
      explanation:
        "Sans dipôle pour s'opposer au passage du courant, l'intensité prend une valeur très élevée : c'est un court-circuit. Les fils s'échauffent fortement, le générateur peut être détruit et un incendie peut se déclarer. L'idée reçue « pas de lampe, donc pas de courant » est fausse : un circuit fermé, même sans récepteur, laisse passer le courant — et bien trop.",
      hint: "Demande-toi ce qui, dans un circuit normal, limite l'intensité, et ce qu'il se passe quand plus rien ne la limite.",
    },
  ],
};
