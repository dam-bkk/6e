import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci4-reproduction",
  subject: "sciences",
  grade: "4e",
  num: 5,
  title: "La reproduction humaine",
  domain: "grandeurs",
  domainLabel: "SVT",
  icon: "HeartPulse",
  teaser: "Puberté, cycles, fécondation, grossesse : comprendre scientifiquement comment le corps devient capable de se reproduire.",
  objectives: [
    "Je sais décrire les transformations de la puberté et expliquer qu'elles sont déclenchées par des hormones",
    "Je sais nommer les organes des appareils reproducteurs et leur rôle",
    "Je sais expliquer le déroulement d'un cycle menstruel et situer l'ovulation",
    "Je sais décrire la fécondation, la nidation et le rôle du placenta",
    "Je sais distinguer les moyens de contraception et savoir que seul le préservatif protège des IST",
  ],
  lesson: [
    {
      title: "La puberté",
      paragraphs: [
        "La puberté est la période de transformation du corps qui rend l'être humain capable de se reproduire. Elle se déroule en général entre 10 et 16 ans, mais l'âge de début et la vitesse varient beaucoup d'une personne à l'autre : il n'y a pas de calendrier normal, et être en avance ou en retard n'a aucune signification particulière.",
        "Chez la fille, on observe le développement des seins, l'élargissement du bassin, l'apparition de la pilosité et l'arrivée des premières règles. Chez le garçon, on observe le développement des testicules et de la verge, la mue de la voix, le développement de la pilosité et de la musculature, ainsi que les premières éjaculations.",
        "Certaines transformations sont communes aux deux : croissance rapide en taille, apparition de la pilosité, transpiration plus abondante, peau plus grasse. La puberté s'accompagne aussi de changements psychologiques et de l'apparition du désir sexuel.",
        "Le corps devient fertile, c'est-à-dire capable de participer à la conception d'un enfant. Cela ne signifie pas que la personne est prête, ni physiquement ni affectivement, à avoir des relations sexuelles ou un enfant : la maturité biologique et la maturité personnelle ne vont pas au même rythme.",
      ],
      example: [
        "Chez la fille, les premières règles surviennent le plus souvent entre 11 et 14 ans, mais de 9 à 16 ans reste dans la normale.",
        "La poussée de croissance atteint souvent 8 à 10 cm en une année.",
        "La mue de la voix chez le garçon vient du développement du larynx et des cordes vocales.",
      ],
      tip: "La puberté n'est pas un interrupteur mais un processus étalé sur plusieurs années. Les premiers cycles sont souvent irréguliers, et les premières éjaculations peuvent survenir pendant le sommeil : ce sont des phénomènes normaux.",
    },
    {
      title: "Le déclenchement hormonal",
      paragraphs: [
        "Ce ne sont pas les organes qui décident seuls de se transformer : c'est le cerveau. À la puberté, une petite glande située sous le cerveau, l'hypophyse, se met à produire des hormones qui circulent dans le sang et agissent sur les organes reproducteurs.",
        "Une hormone est une substance fabriquée par une glande, libérée dans le sang, et qui agit à distance sur un organe précis. C'est un message chimique, transporté par le sang, par opposition au message nerveux transporté par les nerfs. Le sang irrigue tout le corps, mais seuls les organes sensibles à cette hormone réagissent.",
        "Stimulés par l'hypophyse, les testicules produisent de la testostérone et les ovaires produisent des œstrogènes et de la progestérone. Ce sont ces hormones sexuelles qui provoquent l'ensemble des transformations de la puberté.",
        "Les testicules et les ovaires ont donc deux rôles simultanés : produire les cellules reproductrices (spermatozoïdes et ovules) et produire des hormones sexuelles.",
      ],
      example: [
        "Message nerveux : rapide, circule dans les nerfs, agit en une fraction de seconde.",
        "Message hormonal : plus lent, circule dans le sang, mais son effet dure des heures, des jours ou des années.",
        "Le début de la puberté correspond à l'augmentation de la production d'hormones par l'hypophyse.",
      ],
      tip: "Retiens le trio : hypophyse (le chef d'orchestre, dans la tête) → hormones dans le sang → organes reproducteurs qui se développent. Les hormones ne sont pas des ordres nerveux : elles voyagent dans le sang.",
    },
    {
      title: "Les appareils reproducteurs",
      paragraphs: [
        "L'appareil reproducteur masculin comprend les testicules, qui produisent les spermatozoïdes en continu à partir de la puberté et jusqu'à un âge avancé. Les spermatozoïdes sont conduits par les spermiductes ; des glandes y ajoutent un liquide, formant le sperme, qui est émis par l'urètre lors de l'éjaculation. Un spermatozoïde est une cellule minuscule et mobile, munie d'un flagelle.",
        "L'appareil reproducteur féminin comprend les deux ovaires, situés dans l'abdomen, qui libèrent en général un ovule par cycle. L'ovule est capté par une trompe, laquelle mène à l'utérus. L'utérus est un organe musclé creux, tapissé intérieurement d'une muqueuse richement vascularisée. Il communique avec l'extérieur par le vagin.",
        "L'ovule est une cellule beaucoup plus grosse que le spermatozoïde, environ 0,1 mm de diamètre, et immobile : ce sont les spermatozoïdes qui se déplacent vers elle.",
        "Différence importante : la production de spermatozoïdes est continue, alors que la libération d'ovules est cyclique et s'arrête définitivement à la ménopause, vers 45-55 ans.",
      ],
      example: [
        "Une éjaculation contient plusieurs dizaines de millions de spermatozoïdes ; un seul, au plus, féconde l'ovule.",
        "Une femme naît avec un stock d'ovules déjà constitué ; environ 400 seulement seront libérés au cours de la vie.",
      ],
      tip: "Ne confonds pas ovaire (l'organe qui produit et libère) et ovule (la cellule libérée). De même, testicule est l'organe, spermatozoïde la cellule. Et l'ovule ne descend pas « toute seule » : elle est déplacée par la trompe.",
    },
    {
      title: "Le cycle menstruel",
      paragraphs: [
        "À partir de la puberté, l'appareil reproducteur féminin fonctionne de façon cyclique. Un cycle dure en moyenne 28 jours, mais des cycles de 21 à 35 jours sont parfaitement normaux, et ils sont souvent irréguliers pendant les premières années.",
        "Par convention, le premier jour du cycle est le premier jour des règles. Les règles durent en général 3 à 6 jours : la muqueuse utérine, qui s'était épaissie, est éliminée par le vagin avec un peu de sang. Les règles ne sont donc pas une maladie ni une blessure, mais l'élimination d'une muqueuse devenue inutile.",
        "Après les règles, la muqueuse utérine s'épaissit à nouveau et se remplit de vaisseaux sanguins, sous l'effet des hormones ovariennes : l'utérus se prépare à accueillir un embryon.",
        "Vers le 14e jour dans un cycle de 28 jours, un ovaire libère un ovule : c'est l'ovulation. L'ovule ne survit qu'environ 24 heures, alors que les spermatozoïdes peuvent survivre jusqu'à environ 5 jours dans les voies génitales féminines. S'il n'y a pas eu fécondation, la muqueuse est éliminée environ 14 jours plus tard : ce sont les règles suivantes, et un nouveau cycle commence.",
      ],
      example: [
        "Cycle de 28 jours : jours 1 à 5 les règles, épaississement de la muqueuse, ovulation vers le jour 14, puis élimination de la muqueuse au jour 28.",
        "L'ovulation se situe environ 14 jours AVANT les règles suivantes, quelle que soit la durée du cycle.",
      ],
      tip: "Idée reçue dangereuse : « on ne peut pas être enceinte en dehors du 14e jour ». C'est faux. Les cycles varient, l'ovulation peut se décaler, et les spermatozoïdes survivent plusieurs jours. Aucun calcul de dates ne constitue une contraception fiable.",
    },
    {
      title: "Fécondation, nidation et grossesse",
      paragraphs: [
        "La fécondation est la rencontre et la fusion d'un spermatozoïde et d'un ovule. Elle a lieu dans une trompe, et non dans l'utérus. Un seul spermatozoïde pénètre dans l'ovule ; la cellule ainsi formée est la cellule-œuf, première cellule du futur individu.",
        "La cellule-œuf se divise en deux, puis en quatre, et ainsi de suite, tout en descendant lentement vers l'utérus. Environ 6 à 7 jours après la fécondation, l'embryon s'implante dans la muqueuse utérine épaissie : c'est la nidation. Sans nidation, il n'y a pas de grossesse : c'est la nidation, et non la seule fécondation, qui marque le début effectif de la grossesse.",
        "L'embryon se développe ensuite dans l'utérus. Un organe particulier se met en place, le placenta, relié à l'embryon par le cordon ombilical. Au niveau du placenta, les sangs de la mère et de l'enfant circulent très près l'un de l'autre sans jamais se mélanger : le dioxygène et les nutriments passent du sang maternel vers le sang du fœtus, et les déchets, dont le dioxyde de carbone, font le trajet inverse.",
        "À partir de la 9e semaine environ, on ne parle plus d'embryon mais de fœtus. La grossesse dure environ 9 mois, soit 39 semaines après la fécondation, et se termine par l'accouchement. Le placenta laissant passer beaucoup de substances, l'alcool, le tabac et de nombreux médicaments atteignent le fœtus et peuvent nuire à son développement.",
      ],
      example: [
        "Fécondation dans la trompe → divisions → nidation dans l'utérus vers le 6e ou 7e jour → développement → accouchement vers 9 mois.",
        "Le fœtus ne respire pas et ne mange pas : tout arrive par le cordon ombilical.",
        "Une échographie permet de suivre la croissance du fœtus sans aucun danger, car elle utilise des ultrasons et non des rayons X.",
      ],
      tip: "Le placenta n'est pas un filtre parfait. « Je bois un peu, le bébé n'en reçoit rien » est faux : l'alcool traverse le placenta, et il n'existe aucune dose sans risque pendant la grossesse.",
    },
    {
      title: "Contraception et prévention",
      paragraphs: [
        "La contraception regroupe les méthodes qui permettent d'éviter une grossesse. Elles agissent selon trois principes différents : empêcher la rencontre des cellules reproductrices, empêcher l'ovulation, ou empêcher la nidation.",
        "Le préservatif, masculin ou féminin, est une barrière mécanique : il empêche les spermatozoïdes d'atteindre l'ovule. La pilule contraceptive contient des hormones qui bloquent l'ovulation : sans ovule libéré, aucune fécondation n'est possible. Le stérilet, ou dispositif intra-utérin, placé dans l'utérus par un médecin, gêne principalement la progression des spermatozoïdes et la nidation. Il existe aussi l'implant, le patch et l'anneau, tous hormonaux.",
        "En cas de rapport non protégé ou d'accident, la contraception d'urgence, appelée pilule du lendemain, peut retarder ou empêcher l'ovulation. Elle est d'autant plus efficace qu'elle est prise tôt, dans les heures qui suivent. Ce n'est pas une méthode de contraception régulière et elle n'est pas efficace à 100 %.",
        "Point essentiel : parmi tous ces moyens, seul le préservatif protège à la fois d'une grossesse et des infections sexuellement transmissibles (IST) comme le VIH, l'hépatite B, la chlamydia ou la syphilis. La pilule, l'implant et le stérilet n'offrent aucune protection contre les IST. Certaines IST ne provoquent aucun symptôme visible pendant des années tout en étant contagieuses et en pouvant rendre stérile : seul un dépistage permet de les repérer.",
        "En France, la contraception et le dépistage sont accessibles gratuitement et de façon confidentielle aux mineurs, notamment dans les centres de santé sexuelle. L'infirmerie scolaire et le médecin traitant sont aussi des interlocuteurs possibles.",
      ],
      example: [
        "Empêcher la rencontre des cellules : préservatif.",
        "Empêcher l'ovulation : pilule, implant, patch, anneau.",
        "Gêner la nidation et le trajet des spermatozoïdes : stérilet.",
      ],
      tip: "Retiens la règle des deux protections : une méthode contraceptive protège d'une grossesse, le préservatif protège en plus des IST. C'est pourquoi on peut associer les deux — préservatif et pilule — sans que cela soit redondant.",
    },
  ],
  exercises: [
    {
      id: "s4rep-1",
      level: 1,
      type: "qcm",
      question: "Qu'est-ce qui déclenche les transformations de la puberté ?",
      choices: [
        "L'alimentation pendant l'enfance",
        "Des hormones produites sous le contrôle du cerveau",
        "La pratique du sport",
        "Un changement dans les nerfs des organes reproducteurs",
      ],
      answer: 1,
      explanation:
        "La puberté est déclenchée par l'hypophyse, une glande située sous le cerveau, qui augmente sa production d'hormones. Ces hormones circulent dans le sang et stimulent les testicules ou les ovaires, qui produisent à leur tour les hormones sexuelles responsables des transformations. Idée reçue à corriger : ce n'est pas un message nerveux — les hormones voyagent par le sang, pas par les nerfs.",
      hint: "Cherche ce qui est fabriqué par une glande et transporté par le sang pour agir à distance sur un organe.",
    },
    {
      id: "s4rep-2",
      level: 1,
      type: "input",
      question: "Quelle est la durée moyenne d'un cycle menstruel, en jours ? (nombre seul)",
      answer: "28",
      accept: ["28 jours", "28j"],
      explanation:
        "La durée moyenne est de 28 jours, comptés à partir du premier jour des règles. Attention au mot « moyenne » : des cycles de 21 à 35 jours sont normaux, et ils sont souvent irréguliers dans les premières années après la puberté. Il n'existe donc pas de durée obligatoire, seulement une valeur de référence.",
      hint: "C'est une durée proche de celle d'un mois lunaire, un peu inférieure à un mois du calendrier.",
    },
    {
      id: "s4rep-3",
      level: 1,
      type: "truefalse",
      question: "Les testicules produisent des spermatozoïdes de façon continue à partir de la puberté.",
      answer: true,
      explanation:
        "Vrai. Contrairement aux ovaires, dont le fonctionnement est cyclique et s'arrête à la ménopause, les testicules produisent des spermatozoïdes en continu à partir de la puberté et jusqu'à un âge avancé. C'est une différence importante entre les deux appareils reproducteurs : production continue d'un côté, libération cyclique de l'autre.",
      hint: "Compare avec le fonctionnement de l'ovaire, qui ne libère un ovule qu'une fois par cycle.",
    },
    {
      id: "s4rep-4",
      level: 1,
      type: "qcm",
      question: "Dans un cycle de 28 jours, vers quel jour a lieu l'ovulation ?",
      choices: ["vers le 1er jour", "vers le 7e jour", "vers le 14e jour", "vers le 28e jour"],
      answer: 2,
      explanation:
        "L'ovulation a lieu vers le 14e jour, c'est-à-dire au milieu d'un cycle de 28 jours. Le repère le plus fiable est en réalité l'autre bout : l'ovulation survient environ 14 jours AVANT les règles suivantes, quelle que soit la longueur du cycle. Le 1er jour du cycle, lui, correspond au début des règles, pas à l'ovulation.",
      hint: "Le premier jour du cycle est le premier jour des règles ; l'ovulation se situe au milieu d'un cycle de 28 jours.",
    },
    {
      id: "s4rep-5",
      level: 2,
      type: "qcm",
      question: "Où a lieu la fécondation ?",
      choices: ["dans l'ovaire", "dans une trompe", "dans l'utérus", "dans le vagin"],
      answer: 1,
      explanation:
        "La fécondation, c'est-à-dire la fusion d'un spermatozoïde et d'un ovule, se produit dans une trompe. L'ovule y est capté après l'ovulation, et les spermatozoïdes remontent jusqu'à lui. Idée reçue fréquente : la fécondation n'a pas lieu dans l'utérus. L'utérus intervient plus tard, au moment de la nidation de l'embryon.",
      hint: "L'ovule est libéré par l'ovaire puis capté par un conduit qui mène à l'utérus : c'est là que les spermatozoïdes le rejoignent.",
    },
    {
      id: "s4rep-6",
      level: 2,
      type: "truefalse",
      question: "Au niveau du placenta, le sang de la mère et celui du fœtus se mélangent.",
      answer: false,
      explanation:
        "Faux : les deux sangs circulent très près l'un de l'autre, séparés par une paroi très fine, mais ils ne se mélangent jamais. Les échanges se font à travers cette paroi : dioxygène et nutriments passent vers le fœtus, déchets et dioxyde de carbone repartent vers la mère. C'est d'ailleurs pourquoi la mère et l'enfant peuvent avoir des groupes sanguins différents.",
      hint: "Demande-toi comment un enfant peut avoir un groupe sanguin différent de celui de sa mère.",
    },
    {
      id: "s4rep-7",
      level: 2,
      type: "input",
      question: "Comment appelle-t-on l'implantation de l'embryon dans la muqueuse de l'utérus ? (un seul mot)",
      answer: "nidation",
      accept: ["la nidation"],
      explanation:
        "C'est la nidation, qui survient environ 6 à 7 jours après la fécondation. Elle est indispensable : sans nidation, l'embryon ne peut pas se développer et il n'y a pas de grossesse. C'est pour cela que la muqueuse utérine s'épaissit à chaque cycle — elle prépare un « nid » — et qu'elle est éliminée sous forme de règles quand aucune nidation n'a eu lieu.",
      hint: "Le mot évoque un nid : l'embryon s'installe dans la muqueuse préparée par l'utérus.",
    },
    {
      id: "s4rep-8",
      level: 2,
      type: "qcm",
      question: "Comment la pilule contraceptive empêche-t-elle une grossesse ?",
      choices: [
        "Elle tue les spermatozoïdes dans le vagin",
        "Elle bloque l'ovulation grâce à des hormones",
        "Elle forme une barrière mécanique",
        "Elle protège aussi contre les IST",
      ],
      answer: 1,
      explanation:
        "La pilule contient des hormones qui empêchent l'ovulation : sans ovule libéré, aucune fécondation n'est possible. Ce n'est pas une barrière — c'est le préservatif qui joue ce rôle mécanique. Et surtout, la pilule n'offre aucune protection contre les infections sexuellement transmissibles : seul le préservatif protège des IST.",
      hint: "La pilule est un moyen hormonal : demande-toi sur quelle étape du cycle une hormone peut agir pour qu'aucune fécondation ne soit possible.",
    },
    {
      id: "s4rep-9",
      level: 3,
      type: "qcm",
      question:
        "Quel moyen protège à la fois d'une grossesse non désirée et des infections sexuellement transmissibles ?",
      choices: ["la pilule", "le stérilet", "le préservatif", "l'implant"],
      answer: 2,
      explanation:
        "Seul le préservatif, masculin ou féminin, assure les deux protections, car il constitue une barrière physique qui empêche aussi le contact entre les muqueuses et les liquides biologiques. La pilule, l'implant et le stérilet sont des contraceptifs efficaces contre la grossesse mais n'ont strictement aucun effet sur les IST. C'est pourquoi il n'est pas redondant d'associer préservatif et contraception hormonale.",
      hint: "Cherche le seul moyen qui agisse comme une barrière physique, et non en modifiant le cycle.",
    },
    {
      id: "s4rep-10",
      level: 3,
      type: "truefalse",
      question:
        "Une grossesse est impossible si le rapport a lieu quelques jours avant l'ovulation, puisque l'ovule n'est pas encore libéré.",
      answer: false,
      explanation:
        "Faux, et c'est une erreur aux conséquences graves. Les spermatozoïdes peuvent survivre jusqu'à environ 5 jours dans les voies génitales féminines : présents avant l'ovulation, ils peuvent féconder l'ovule dès sa libération. À cela s'ajoute le fait que la date d'ovulation varie selon les cycles, surtout à l'adolescence. Aucun calcul de dates ne constitue une contraception fiable.",
      hint: "Demande-toi combien de temps un spermatozoïde peut rester vivant dans les voies génitales féminines.",
    },
    {
      id: "s4rep-11",
      level: 3,
      type: "input",
      question:
        "Un cycle dure 32 jours. Sachant que l'ovulation a lieu environ 14 jours avant les règles suivantes, vers quel jour du cycle se situe-t-elle ? (nombre seul)",
      answer: "18",
      accept: ["jour 18", "le 18e", "18e"],
      explanation:
        "Il suffit de retirer 14 jours à la durée du cycle : 32 − 14 = 18. L'ovulation se situe donc vers le 18e jour, et non vers le 14e. Le point important est que la deuxième partie du cycle, après l'ovulation, dure à peu près toujours 14 jours : c'est la première partie qui s'allonge ou se raccourcit selon les personnes et les mois. Répéter « ovulation au 14e jour » pour tous les cycles est donc faux.",
      hint: "Ce n'est pas 14, car le cycle ne dure pas 28 jours : soustrais 14 de la durée totale du cycle.",
    },
    {
      id: "s4rep-12",
      level: 3,
      type: "qcm",
      question:
        "Une personne ne présente aucun symptôme et ne s'est jamais sentie malade. Que peut-on en conclure sur les IST ?",
      choices: [
        "Elle ne peut pas être porteuse d'une IST",
        "Elle peut être porteuse et contagieuse sans le savoir : seul un dépistage permet de le dire",
        "Les IST provoquent toujours des symptômes visibles rapidement",
        "Seules les personnes malades peuvent transmettre une IST",
      ],
      answer: 1,
      explanation:
        "Plusieurs IST, comme la chlamydia ou le VIH, peuvent rester silencieuses pendant des mois ou des années tout en étant transmissibles, et certaines peuvent entraîner une stérilité si elles ne sont pas traitées. L'absence de symptôme ne prouve donc rien : seul un test de dépistage permet de savoir. En France, ce dépistage est accessible gratuitement et de façon confidentielle, y compris aux mineurs, dans les centres de santé sexuelle.",
      hint: "Demande-toi si une infection peut être présente et contagieuse sans provoquer de signe visible.",
    },
  ],
};
