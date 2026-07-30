import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci-developpement-vivant",
  subject: "sciences",
  num: 4,
  title: "Le développement des êtres vivants",
  domain: "grandeurs",
  domainLabel: "Le vivant",
  icon: "Sprout",
  teaser: "Du têtard à la grenouille et de la graine à la plante : comprendre les cycles de vie.",
  objectives: [
    "Je sais décrire le cycle de vie d'un être vivant",
    "Je sais distinguer un développement direct d'un développement avec métamorphose",
    "Je connais les conditions nécessaires à la germination d'une graine",
    "Je sais expliquer comment une fleur devient un fruit contenant des graines",
    "Je sais distinguer un animal ovipare d'un animal vivipare",
  ],
  lesson: [
    {
      title: "Le cycle de vie",
      paragraphs: [
        "Tout être vivant suit les mêmes grandes étapes : il naît (ou germe), il grandit, il devient adulte et capable de se reproduire, puis il vieillit et meurt. Comme chaque nouvelle génération recommence ces étapes, on parle d'un cycle de vie.",
        "La croissance, c'est l'augmentation de taille et de masse. Chez la plupart des animaux et chez les végétaux, elle est continue. Chez les insectes et les crustacés, la carapace rigide empêche de grandir peu à peu : ils doivent en changer de temps en temps, ce sont les mues, et la croissance se fait donc par étapes.",
        "La durée du cycle varie énormément d'une espèce à l'autre, mais la succession des étapes est toujours la même.",
      ],
      example: [
        "Une souris devient adulte en 6 semaines environ et vit 2 ans. Un chêne peut mettre 30 ans avant de donner ses premiers glands et vivre plusieurs siècles.",
        "Une cigale passe plusieurs années sous terre à l'état de larve et seulement quelques semaines à l'état adulte.",
      ],
      tip: "Le cycle de vie se résume en quatre mots dans l'ordre : naissance, croissance, reproduction, mort.",
    },
    {
      title: "Développement direct ou métamorphose",
      figure: "sci-cycle-vie",
      paragraphs: [
        "On parle de développement direct quand le jeune ressemble déjà à l'adulte, en plus petit : il lui suffit de grandir. C'est le cas du chaton, du poussin, du bébé humain ou d'un jeune escargot.",
        "On parle de développement indirect quand le jeune ne ressemble pas du tout à l'adulte : il doit se transformer profondément. Ces transformations s'appellent des métamorphoses.",
        "Chez la grenouille, l'œuf donne un têtard qui vit dans l'eau, respire par des branchies et nage avec une queue. Puis les pattes apparaissent, la queue régresse, des poumons se forment : la grenouille adulte peut sortir de l'eau. Chez le papillon, l'œuf donne une chenille qui mange et grandit énormément, puis se transforme en chrysalide immobile, d'où sort enfin le papillon. Une fois adulte, le papillon ne grandit plus : un « petit papillon » n'est pas un jeune papillon, c'est simplement un papillon d'une autre espèce.",
      ],
      example: [
        "Cycle du papillon : œuf → chenille → chrysalide → papillon adulte.",
        "Cycle de la grenouille : œuf → têtard (branchies, queue) → jeune grenouille → grenouille adulte (poumons, 4 pattes).",
      ],
      tip: "Pour savoir s'il y a métamorphose, pose une seule question : « le jeune ressemble-t-il à l'adulte ? » Si non, c'est une métamorphose.",
    },
    {
      title: "De la graine à la plante",
      paragraphs: [
        "Une graine contient une toute petite plante en attente, ainsi que des réserves de nourriture qui lui permettront de démarrer. Tant qu'elle est sèche, elle peut attendre des mois, parfois des années.",
        "Pour germer, une graine a besoin d'eau, de chaleur (une température ni trop froide ni trop chaude) et d'air, car elle respire. Point souvent mal compris : la lumière n'est pas nécessaire à la germination, et c'est logique puisque la graine germe sous la terre. En revanche, dès que les premières feuilles apparaissent, la lumière devient indispensable pour que la plante fabrique sa matière et pousse.",
        "La jeune plante développe d'abord une racine, qui absorbe l'eau et les sels minéraux du sol, puis une tige et des feuilles. Elle grandit jusqu'à pouvoir fleurir à son tour.",
      ],
      example: [
        "Expérience : 4 pots de lentilles. Sans eau : pas de germination. Au réfrigérateur : pas de germination. Dans un placard fermé, avec eau et chaleur : germination, mais la tige est pâle et fragile. À la lumière avec eau et chaleur : germination et plante verte et vigoureuse.",
        "Cela montre que la lumière n'est pas nécessaire pour germer, mais qu'elle l'est pour bien pousser.",
      ],
      tip: "Trois conditions pour germer : eau, chaleur, air. Retiens que la lumière n'est pas dans la liste.",
    },
    {
      title: "La reproduction des plantes à fleurs",
      figure: "sci-fleur-graine",
      paragraphs: [
        "Une fleur contient les organes reproducteurs de la plante : les étamines produisent le pollen (partie mâle) et le pistil contient les ovules (partie femelle).",
        "La pollinisation est le transport du pollen d'une fleur vers le pistil d'une autre fleur. Ce transport est le plus souvent assuré par les insectes, attirés par les couleurs, les odeurs et le nectar, parfois par le vent, comme chez les graminées.",
        "Après la rencontre du pollen et de l'ovule, c'est la fécondation : l'ovule se transforme en graine, et la partie du pistil qui l'entoure se transforme en fruit. Un fruit contient donc toujours des graines ou des pépins ou un noyau, et il se forme toujours à partir d'une fleur. Certaines plantes peuvent aussi se multiplier sans fleur ni graine, par exemple le fraisier grâce à ses tiges rampantes, ou une bouture de géranium plantée dans la terre.",
      ],
      example: [
        "Le pommier : fleur au printemps → pollinisation par les abeilles → petite pomme qui grossit tout l'été → pomme mûre contenant des pépins.",
        "Sans insectes pollinisateurs, un pommier isolé donnerait très peu de pommes.",
      ],
      tip: "Retiens la chaîne dans l'ordre : fleur → pollinisation → fécondation → fruit contenant les graines.",
    },
    {
      title: "Ovipares et vivipares",
      paragraphs: [
        "Chez les animaux aussi, la reproduction sexuée demande la rencontre de deux cellules reproductrices : une cellule mâle (le spermatozoïde) et une cellule femelle (l'ovule). Leur union est la fécondation, et elle donne une cellule unique qui se divisera pour former un nouvel individu.",
        "Les animaux ovipares pondent des œufs : le jeune s'y développe à l'abri de la coquille, en utilisant les réserves de l'œuf, puis il éclot. C'est le cas des oiseaux, des poissons, des reptiles, des insectes et des grenouilles.",
        "Les animaux vivipares gardent le jeune dans le ventre de la mère, où il est nourri pendant tout son développement, puis il naît déjà formé. C'est le cas de la plupart des mammifères : chat, vache, baleine, être humain.",
      ],
      example: [
        "Ovipares : poule, truite, tortue, papillon.",
        "Vivipares : chat, cheval, dauphin, être humain.",
      ],
      tip: "« Ovi » vient d'œuf : ovipare = qui pond des œufs. « Vivi » évoque vivant : le petit naît déjà formé.",
    },
  ],
  exercises: [
    {
      id: "sdev-1",
      level: 1,
      type: "qcm",
      question: "Dans quel ordre se déroulent les étapes du cycle de vie d'un être vivant ?",
      choices: [
        "Naissance, croissance, reproduction, mort",
        "Croissance, naissance, mort, reproduction",
        "Reproduction, naissance, mort, croissance",
        "Naissance, reproduction, croissance, mort",
      ],
      answer: 0,
      explanation:
        "Un être vivant naît, grandit, devient adulte et peut alors se reproduire, puis il meurt. Comme chaque génération recommence ces étapes, on parle bien d'un cycle. Il faut être adulte pour se reproduire : la reproduction vient donc après la croissance.",
      hint: "Faut-il être adulte pour se reproduire ?",
    },
    {
      id: "sdev-2",
      level: 1,
      type: "input",
      question:
        "Comment appelle-t-on le jeune de la grenouille, qui vit dans l'eau et possède une queue ? (un mot, en minuscules)",
      answer: "tetard",
      accept: ["têtard", "le têtard", "le tetard"],
      explanation:
        "Le têtard est la forme jeune de la grenouille : il vit dans l'eau, respire par des branchies et nage grâce à sa queue. Il ne ressemble pas du tout à l'adulte : le développement de la grenouille se fait donc par métamorphose.",
    },
    {
      id: "sdev-3",
      level: 1,
      type: "truefalse",
      question: "Une graine a besoin de lumière pour germer.",
      answer: false,
      explanation:
        "Faux. Pour germer, une graine a besoin d'eau, de chaleur et d'air, mais pas de lumière : c'est logique, puisqu'elle germe enfouie sous la terre. La lumière devient indispensable ensuite, dès que la jeune plante a des feuilles et doit fabriquer sa matière.",
      hint: "Où se trouve une graine quand elle germe dans un jardin ?",
    },
    {
      id: "sdev-4",
      level: 1,
      type: "qcm",
      question: "Quel animal est ovipare ?",
      choices: ["Le chat", "La poule", "Le dauphin", "La vache"],
      answer: 1,
      explanation:
        "La poule pond des œufs : elle est ovipare. Le chat, la vache et le dauphin sont des mammifères vivipares : leurs petits se développent dans le ventre de la mère et naissent déjà formés.",
      hint: "« Ovi » vient du mot œuf.",
    },
    {
      id: "sdev-5",
      level: 2,
      type: "qcm",
      question: "Quel est l'ordre correct du cycle de vie du papillon ?",
      choices: [
        "Œuf → chrysalide → chenille → papillon",
        "Chenille → œuf → papillon → chrysalide",
        "Œuf → chenille → chrysalide → papillon",
        "Œuf → papillon → chenille → chrysalide",
      ],
      answer: 2,
      explanation:
        "L'œuf donne une chenille qui mange et grandit beaucoup. La chenille se transforme ensuite en chrysalide immobile, à l'intérieur de laquelle se déroule la métamorphose, et il en sort le papillon adulte.",
      hint: "L'étape immobile arrive juste avant l'adulte.",
    },
    {
      id: "sdev-6",
      level: 2,
      type: "truefalse",
      question: "Le poussin ressemble déjà à la poule adulte : son développement est direct.",
      answer: true,
      explanation:
        "Vrai. Le poussin a un bec, deux pattes, des ailes et un corps couvert de duvet puis de plumes : il ressemble à l'adulte en plus petit. Il lui suffit de grandir, il n'a pas de métamorphose à subir. Son développement est donc direct.",
      hint: "Le jeune ressemble-t-il à l'adulte ?",
    },
    {
      id: "sdev-7",
      level: 2,
      type: "input",
      question:
        "Comment appelle-t-on le transport du pollen d'une fleur vers le pistil d'une autre fleur ? (un mot, en minuscules)",
      answer: "pollinisation",
      accept: ["la pollinisation"],
      explanation:
        "C'est la pollinisation. Elle est assurée surtout par les insectes, attirés par les couleurs, les odeurs et le nectar des fleurs, parfois par le vent. Elle précède la fécondation, qui transformera l'ovule en graine.",
      hint: "Le mot est construit sur « pollen ».",
    },
    {
      id: "sdev-8",
      level: 2,
      type: "qcm",
      question: "Que devient l'ovule d'une fleur après la fécondation ?",
      choices: ["Une graine", "Une étamine", "Un pétale", "Du pollen"],
      answer: 0,
      explanation:
        "Après la fécondation, l'ovule se transforme en graine, tandis que la partie du pistil qui l'entoure devient le fruit. C'est pourquoi tout fruit contient des graines, des pépins ou un noyau, et provient toujours d'une fleur.",
      hint: "Que trouve-t-on à l'intérieur d'un fruit ?",
    },
    {
      id: "sdev-9",
      level: 3,
      type: "qcm",
      question:
        "On place des graines de haricot dans quatre pots : A avec eau et chaleur à la lumière, B avec eau et chaleur dans un placard sombre, C sans eau à la lumière, D avec eau au réfrigérateur. Dans quels pots les graines germent-elles ?",
      choices: ["A seulement", "A et B", "A, B et C", "Tous les pots"],
      answer: 1,
      explanation:
        "Les graines germent dans A et B, car elles y ont de l'eau, de la chaleur et de l'air. Dans C il manque l'eau, dans D il manque la chaleur. Le pot B prouve que la lumière n'est pas nécessaire à la germination, même si la plante obtenue sera pâle et fragile faute de lumière pour pousser ensuite.",
      hint: "Compare les pots deux par deux : que manque-t-il à chaque fois ?",
    },
    {
      id: "sdev-10",
      level: 3,
      type: "truefalse",
      question: "Un petit papillon est un jeune papillon qui grandira encore.",
      answer: false,
      explanation:
        "Faux. Un papillon adulte ne grandit plus : toute sa croissance a eu lieu au stade de la chenille. Un papillon plus petit qu'un autre appartient simplement à une espèce différente, ou a moins mangé au stade de chenille.",
      hint: "À quel stade le papillon mange-t-il et grandit-il ?",
    },
    {
      id: "sdev-11",
      level: 3,
      type: "input",
      question:
        "Comment appelle-t-on la rencontre entre une cellule reproductrice mâle et une cellule reproductrice femelle ? (un mot, en minuscules)",
      answer: "fecondation",
      accept: ["fécondation", "la fécondation", "la fecondation"],
      explanation:
        "C'est la fécondation : le spermatozoïde et l'ovule s'unissent pour former une cellule unique, qui se divisera de nombreuses fois pour donner un nouvel individu. Elle existe chez les animaux comme chez les plantes à fleurs.",
      hint: "Elle vient juste après la pollinisation chez les plantes à fleurs.",
    },
    {
      id: "sdev-12",
      level: 3,
      type: "qcm",
      question:
        "Un jardinier coupe une tige de géranium et la plante dans un pot : elle donne un nouveau pied de géranium. Que peut-on en conclure ?",
      choices: [
        "Il y a eu fécondation entre deux plantes",
        "Certaines plantes peuvent se multiplier sans fleur ni graine",
        "Le géranium n'est pas un être vivant",
        "La nouvelle plante est d'une autre espèce",
      ],
      answer: 1,
      explanation:
        "C'est une bouture : à partir d'un simple morceau de tige, la plante forme des racines et un nouveau pied. Il n'y a ni fleur, ni pollen, ni graine, donc aucune fécondation. Certaines plantes se multiplient ainsi, comme le fraisier avec ses tiges rampantes, et la nouvelle plante appartient bien à la même espèce.",
      hint: "Y a-t-il eu du pollen et une graine dans cette histoire ?",
    },
  ],
};
