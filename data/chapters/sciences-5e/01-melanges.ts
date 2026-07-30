import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci5-melanges",
  subject: "sciences",
  grade: "5e",
  num: 1,
  title: "Mélanges et solutions",
  domain: "donnees",
  domainLabel: "Physique-chimie",
  icon: "FlaskConical",
  teaser: "Homogène ou hétérogène ? Dissoudre, filtrer, distiller : deviens un pro des mélanges.",
  objectives: [
    "Je sais distinguer un mélange homogène d'un mélange hétérogène",
    "Je connais le vocabulaire de la dissolution : soluté, solvant, solution, saturation",
    "Je sais que la masse se conserve lors d'une dissolution",
    "Je sais choisir une technique de séparation adaptée : décantation, filtration, distillation",
    "Je sais expliquer pourquoi une eau limpide n'est pas forcément une eau pure",
  ],
  lesson: [
    {
      title: "Homogène ou hétérogène ?",
      paragraphs: [
        "Un mélange est constitué d'au moins deux substances différentes. Quand on ne peut pas distinguer ses constituants à l'œil nu, le mélange est homogène : il semble fait d'une seule matière. Quand on distingue au moins deux constituants, le mélange est hétérogène.",
        "Attention, « à l'œil nu » est important : l'eau salée paraît identique à l'eau du robinet, pourtant elle contient bien deux substances. Un mélange homogène cache donc ses constituants, il ne les fait pas disparaître.",
      ],
      example: [
        "Mélanges homogènes : eau sucrée, air (diazote + dioxygène + autres gaz), sirop bien mélangé.",
        "Mélanges hétérogènes : eau + huile (deux couches), eau + sable (grains visibles), jus d'orange avec pulpe.",
      ],
      tip: "Pose-toi une seule question : « Est-ce que je vois plusieurs choses différentes ? » Oui → hétérogène. Non → homogène. Le préfixe « hétéro- » veut dire « différent ».",
    },
    {
      title: "La dissolution : soluté, solvant, solution",
      paragraphs: [
        "Quand on verse du sel dans l'eau et qu'on agite, le sel semble disparaître : il se dissout. Le solide dissous s'appelle le soluté, le liquide qui le dissout s'appelle le solvant, et le mélange homogène obtenu s'appelle une solution.",
        "Le soluté n'a pas disparu : il est dispersé dans l'eau sous forme de particules invisibles à l'œil nu. La preuve ? L'eau salée a un goût salé, et si on laisse l'eau s'évaporer, le sel réapparaît.",
        "On ne peut pas dissoudre une quantité illimitée de soluté. À partir d'une certaine quantité, le solide ne se dissout plus et se dépose au fond : la solution est saturée.",
      ],
      example: [
        "Dans une eau sucrée : le sucre est le soluté, l'eau est le solvant, l'eau sucrée est la solution.",
        "À 20 °C, on peut dissoudre au maximum environ 36 g de sel dans 100 g d'eau : au-delà, la solution est saturée.",
      ],
      tip: "Ne dis jamais que le sucre « fond » dans l'eau : il se dissout. Fondre, c'est passer de solide à liquide sous l'effet de la chaleur (comme un glaçon), sans avoir besoin d'un autre liquide.",
    },
    {
      title: "La masse se conserve",
      paragraphs: [
        "Lors d'une dissolution, rien ne disparaît et rien ne se crée : le soluté est toujours là, simplement invisible. La masse de la solution est donc égale à la masse du solvant plus la masse du soluté.",
        "C'est une règle très générale en chimie : quand on mélange des substances, la masse totale se conserve, même si l'aspect change complètement.",
      ],
      example: [
        "On dissout 20 g de sucre dans 200 g d'eau : la solution obtenue a une masse de 200 + 20 = 220 g.",
        "Sur une balance, un verre d'eau + un sucre à côté pèsent exactement pareil avant et après la dissolution.",
      ],
      tip: "« Invisible » ne veut pas dire « disparu ». Si tu hésites, pense au goût : le sucre dissous se goûte toujours, donc il est toujours là, avec toute sa masse.",
    },
    {
      title: "Séparer les constituants d'un mélange",
      paragraphs: [
        "La décantation consiste à laisser reposer un mélange hétérogène : les particules solides les plus lourdes tombent au fond, ou deux liquides non miscibles (comme l'eau et l'huile) se séparent en couches. On récupère ensuite le liquide du dessus.",
        "La filtration consiste à verser le mélange à travers un filtre (papier filtre, passoire) : les particules solides trop grosses pour passer sont retenues, le liquide qui traverse s'appelle le filtrat.",
        "Ces deux techniques ne fonctionnent que sur les mélanges hétérogènes. Pour séparer un mélange homogène comme l'eau salée, il faut la distillation (à découvrir) : on chauffe le mélange, l'eau se transforme en vapeur, puis cette vapeur est refroidie et redevient de l'eau liquide, pure cette fois. Le sel, lui, reste dans le récipient de départ.",
      ],
      example: [
        "Eau boueuse : une décantation dépose la boue au fond, puis une filtration retire les dernières particules. Le filtrat est limpide… mais pas pur !",
        "La distillation de l'eau de mer donne de l'eau pure d'un côté et du sel de l'autre.",
      ],
      tip: "Filtrer une eau salée ne sert à rien : les particules de sel dissous sont bien trop petites pour être retenues par un filtre. Filtre le visible, distille l'invisible.",
    },
    {
      title: "Eau potable, eau pure, eau pétillante",
      paragraphs: [
        "Une eau pure ne contient qu'une seule substance : de l'eau, rien d'autre. Une eau potable est une eau que l'on peut boire sans danger : elle contient toujours des substances dissoutes (sels minéraux, gaz), mais en quantités sans risque pour la santé. L'eau du robinet et les eaux minérales sont potables, pas pures !",
        "Une eau limpide peut même être dangereuse : elle peut contenir des substances dissoutes toxiques ou des microbes invisibles. La limpidité ne prouve donc rien.",
        "Les boissons gazeuses contiennent un gaz dissous : le dioxyde de carbone. Tant que la bouteille est fermée, le gaz reste dissous sous pression. À l'ouverture, la pression chute et le gaz s'échappe en formant des bulles.",
      ],
      example: [
        "L'étiquette d'une eau minérale liste ses sels minéraux dissous : calcium, magnésium, sodium… C'est la preuve qu'elle n'est pas pure.",
        "Secouer une bouteille de soda avant de l'ouvrir aide le dioxyde de carbone dissous à s'échapper d'un coup : d'où le geyser !",
      ],
      tip: "Retiens le trio : pure = une seule substance, potable = sans danger à boire, limpide = transparente. Une eau peut être limpide et potable sans être pure — et limpide sans être potable.",
    },
  ],
  exercises: [
    {
      id: "s5mel-1",
      level: 1,
      type: "qcm",
      question: "De l'eau et de l'huile versées dans un même verre forment deux couches bien visibles. Ce mélange est…",
      choices: ["homogène", "hétérogène", "une solution", "un corps pur"],
      answer: 1,
      explanation:
        "On distingue deux constituants à l'œil nu (la couche d'huile au-dessus de l'eau) : le mélange est hétérogène. Une solution, au contraire, est un mélange homogène : on n'y distingue rien. Et un corps pur n'est pas un mélange du tout : il ne contient qu'une seule substance.",
      hint: "Vois-tu plusieurs constituants différents à l'œil nu ?",
    },
    {
      id: "s5mel-2",
      level: 1,
      type: "qcm",
      question: "On dissout du sucre dans de l'eau. Comment s'appelle le sucre dans ce mélange ?",
      choices: ["le solvant", "la solution", "le soluté", "le filtrat"],
      answer: 2,
      explanation:
        "La substance dissoute est le soluté (ici le sucre), le liquide qui dissout est le solvant (ici l'eau), et le mélange homogène obtenu est la solution (l'eau sucrée). Astuce : solu-té = ce qui est dissous, solv-ant = ce qui dissout, comme un participe présent qui agit.",
      hint: "« -té » comme « dissous », « -ant » comme « qui agit ».",
    },
    {
      id: "s5mel-3",
      level: 1,
      type: "truefalse",
      question: "Quand on dissout du sel dans l'eau, le sel disparaît définitivement.",
      answer: false,
      explanation:
        "Faux ! Le sel ne disparaît pas : il se disperse dans l'eau en particules invisibles à l'œil nu. Deux preuves : l'eau a un goût salé, et si on laisse l'eau s'évaporer, le sel réapparaît. C'est l'idée reçue classique : invisible ne veut pas dire disparu.",
    },
    {
      id: "s5mel-4",
      level: 1,
      type: "input",
      question: "Complète la phrase avec un seul mot : « L'air est un mélange ......... de plusieurs gaz. »",
      answer: "homogène",
      accept: ["homogene"],
      explanation:
        "L'air contient surtout du diazote et du dioxygène, mais on ne distingue aucun de ses constituants : c'est un mélange homogène. Beaucoup pensent que l'air est « du vide » ou un corps pur : non, c'est bien un mélange de gaz.",
      hint: "Peut-on distinguer les gaz de l'air à l'œil nu ?",
    },
    {
      id: "s5mel-5",
      level: 2,
      type: "input",
      question: "On dissout 15 g de sel dans 300 g d'eau. Quelle est la masse de la solution obtenue, en grammes ? (nombre seul)",
      answer: "315",
      accept: ["315 g", "315g"],
      explanation:
        "La masse se conserve lors d'une dissolution : masse de la solution = masse du solvant + masse du soluté = 300 + 15 = 315 g. Le sel devient invisible mais garde toute sa masse : rien ne disparaît dans un mélange.",
      hint: "Le sel dissous garde-t-il sa masse ?",
    },
    {
      id: "s5mel-6",
      level: 2,
      type: "qcm",
      question: "On ajoute du sel dans un verre d'eau en remuant. À un moment, du sel reste au fond malgré l'agitation. Que peut-on dire ?",
      choices: [
        "L'eau est devenue un solvant",
        "La solution est saturée",
        "Le sel a fondu",
        "Le mélange est devenu homogène",
      ],
      answer: 1,
      explanation:
        "Quand le solvant ne peut plus dissoudre davantage de soluté, la solution est saturée : le surplus reste solide au fond. Remuer plus fort n'y change rien. Et attention au vocabulaire : le sel ne « fond » pas dans l'eau, il se dissout — fondre demande de la chaleur, pas un liquide.",
      hint: "Il existe une limite à la quantité de soluté qu'un solvant peut dissoudre.",
    },
    {
      id: "s5mel-7",
      level: 2,
      type: "qcm",
      question: "Quelle technique permet de séparer le sable de l'eau dans une eau sableuse ?",
      choices: [
        "la filtration",
        "la dissolution",
        "rien, c'est impossible",
        "ajouter du sel",
      ],
      answer: 0,
      explanation:
        "Les grains de sable ne sont pas dissous : ils sont assez gros pour être retenus par un papier filtre. La filtration donne un filtrat limpide et le sable reste dans le filtre. (Une décantation fonctionnerait aussi en partie : le sable, plus lourd, se dépose au fond quand on laisse reposer.)",
      hint: "Le sable est-il dissous ou en grains visibles ?",
    },
    {
      id: "s5mel-8",
      level: 2,
      type: "truefalse",
      question: "Pour retirer le sel de l'eau de mer, il suffit de la filtrer avec un papier filtre très fin.",
      answer: false,
      explanation:
        "Faux ! Le sel est dissous : ses particules sont bien trop petites pour être arrêtées par un filtre, même très fin. La filtration ne sépare que les mélanges hétérogènes. Pour récupérer une eau sans sel, il faut une distillation : on vaporise l'eau puis on la condense, le sel restant derrière.",
      hint: "La filtration retient les particules visibles. Le sel dissous est-il visible ?",
    },
    {
      id: "s5mel-9",
      level: 3,
      type: "qcm",
      question: "Lors d'une distillation d'eau salée, qu'obtient-on à la sortie du tube de refroidissement ?",
      choices: [
        "de l'eau salée concentrée",
        "de l'eau pure",
        "du sel solide",
        "de la vapeur de sel",
      ],
      answer: 1,
      explanation:
        "En chauffant, seule l'eau se vaporise : le sel reste dans le ballon. La vapeur d'eau est ensuite refroidie et redevient liquide : on récupère de l'eau pure (le distillat). C'est le seul moyen vu en 5e de séparer un mélange homogène, et c'est ainsi que certains pays produisent de l'eau douce à partir d'eau de mer.",
      hint: "Le sel se transforme-t-il en vapeur quand on chauffe l'eau ?",
    },
    {
      id: "s5mel-10",
      level: 3,
      type: "truefalse",
      question: "Une eau parfaitement limpide et transparente est forcément potable.",
      answer: false,
      explanation:
        "Faux, et c'est une idée reçue dangereuse ! Une eau limpide peut contenir des substances dissoutes toxiques ou des microbes, tous invisibles à l'œil nu. Inversement, une eau potable n'est jamais pure : elle contient des sels minéraux dissous, sans danger. Limpide, potable et pure sont trois notions différentes.",
    },
    {
      id: "s5mel-11",
      level: 3,
      type: "input",
      question: "Quel gaz dissous s'échappe en bulles quand on ouvre une bouteille de boisson gazeuse ? (nom complet en deux mots)",
      answer: "dioxyde de carbone",
      accept: ["le dioxyde de carbone", "co2"],
      explanation:
        "Les boissons gazeuses contiennent du dioxyde de carbone dissous sous pression. Bouteille fermée : le gaz reste dissous. À l'ouverture, la pression diminue d'un coup et le gaz redevient des bulles qui s'échappent. C'est la preuve qu'un gaz aussi peut être un soluté !",
      hint: "Son symbole chimique est CO₂.",
    },
    {
      id: "s5mel-12",
      level: 3,
      type: "input",
      question:
        "On verse 40 g de sucre dans 250 g d'eau à 20 °C, on agite : tout se dissout. On laisse ensuite l'eau s'évaporer complètement. Quelle masse de sucre, en grammes, retrouve-t-on au fond du récipient ? (nombre seul)",
      answer: "40",
      accept: ["40 g", "40g"],
      explanation:
        "Le sucre dissous n'a pas disparu : il est resté dans l'eau pendant toute la dissolution, avec sa masse intacte. Seule l'eau s'évapore. On retrouve donc exactement les 40 g de sucre de départ. La conservation de la masse fonctionne dans les deux sens : à la dissolution comme à l'évaporation.",
      hint: "Lors de l'évaporation, seule l'eau part. Que devient le soluté ?",
    },
  ],
};
