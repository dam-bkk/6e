import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci4-atomes-molecules",
  subject: "sciences",
  grade: "4e",
  num: 1,
  title: "Atomes, molécules et transformations",
  domain: "donnees",
  domainLabel: "Physique-chimie",
  icon: "Atom",
  teaser: "Derrière chaque matière : des atomes qui se réorganisent. Formules, combustions et conservation de la masse.",
  objectives: [
    "Je sais que toute matière est constituée d'atomes, désignés par un symbole",
    "Je sais lire une formule chimique et compter les atomes d'une molécule",
    "Je sais distinguer une transformation physique d'une transformation chimique",
    "Je sais décrire une combustion : ce qui est consommé, ce qui est produit",
    "Je sais que la masse totale se conserve au cours d'une transformation chimique",
  ],
  lesson: [
    {
      title: "Les atomes, briques de la matière",
      paragraphs: [
        "Toute la matière qui t'entoure — l'air, l'eau, ton crayon, ton corps — est constituée de particules extrêmement petites appelées atomes. Un atome est si petit que dans une seule goutte d'eau, il y en a bien plus que d'étoiles dans notre galaxie.",
        "Il n'existe qu'une centaine de types d'atomes différents, appelés éléments chimiques. Chacun possède un nom et un symbole : une lettre majuscule, parfois suivie d'une minuscule. Ces symboles sont universels : un chimiste japonais ou brésilien écrit exactement les mêmes.",
        "Un atome est constitué d'un noyau, très petit et chargé positivement, autour duquel se déplacent des électrons chargés négativement. L'ensemble est électriquement neutre : autant de charges positives que négatives.",
      ],
      example: [
        "H = hydrogène, O = oxygène, C = carbone, N = azote, Fe = fer, Cu = cuivre, Al = aluminium.",
        "Attention à la casse : Co (cobalt) n'est pas CO (une molécule faite d'un atome de carbone et d'un atome d'oxygène).",
      ],
      tip: "La première lettre d'un symbole est TOUJOURS en majuscule, la seconde TOUJOURS en minuscule. Certains symboles viennent du latin : Fe = ferrum (fer), Cu = cuprum (cuivre), Na = natrium (sodium).",
    },
    {
      title: "Des molécules et des formules",
      paragraphs: [
        "Les atomes s'associent entre eux pour former des molécules. Une molécule est un assemblage d'atomes liés les uns aux autres. On la décrit par une formule chimique : les symboles des atomes présents, avec un indice en bas à droite pour indiquer combien il y en a.",
        "Quand il n'y a pas d'indice, c'est qu'il n'y a qu'un seul atome de cet élément. L'eau s'écrit H₂O : deux atomes d'hydrogène et un atome d'oxygène, soit trois atomes en tout.",
        "Attention à ne pas confondre l'atome et la molécule : l'oxygène est un élément (symbole O), mais le gaz que nous respirons est le dioxygène, une molécule formée de deux atomes d'oxygène liés, de formule O₂. C'est pour cela qu'on dit dioxygène et non « oxygène ».",
      ],
      example: [
        "H₂O (eau) : 2 atomes d'hydrogène + 1 atome d'oxygène = 3 atomes.",
        "CO₂ (dioxyde de carbone) : 1 atome de carbone + 2 atomes d'oxygène = 3 atomes.",
        "O₂ (dioxygène) : 2 atomes d'oxygène. N₂ (diazote) : 2 atomes d'azote.",
        "C₄H₁₀ (butane) : 4 atomes de carbone + 10 atomes d'hydrogène = 14 atomes.",
      ],
      tip: "L'indice ne concerne QUE le symbole placé juste avant lui. Dans CO₂, le 2 porte sur l'oxygène, pas sur le carbone. Un coefficient écrit devant, lui, multiplie toute la molécule : 3 H₂O, c'est 3 molécules d'eau, donc 6 atomes d'hydrogène et 3 atomes d'oxygène.",
    },
    {
      title: "Transformation physique ou transformation chimique ?",
      paragraphs: [
        "Lors d'une transformation physique, les molécules restent les mêmes : elles changent seulement d'organisation. C'est le cas des changements d'état. Quand la glace fond, les molécules d'eau H₂O sont toujours des molécules d'eau ; elles sont juste moins ordonnées et libres de glisser les unes sur les autres.",
        "Lors d'une transformation chimique, au contraire, des molécules disparaissent et d'autres apparaissent : les atomes se séparent puis se réorganisent autrement. Les substances de départ s'appellent les réactifs, celles formées s'appellent les produits.",
        "Plusieurs indices révèlent une transformation chimique : apparition d'une substance nouvelle, changement de couleur durable, dégagement de gaz, dégagement de chaleur ou de lumière. Une transformation chimique n'est en général pas réversible simplement, alors qu'un glaçon fondu peut toujours être recongelé.",
      ],
      example: [
        "Transformations physiques : fusion de la glace, évaporation de l'eau, dissolution du sel, découpage d'un morceau de bois.",
        "Transformations chimiques : combustion du bois, rouille d'un clou en fer, cuisson d'un œuf, digestion d'un aliment.",
      ],
      tip: "Pose-toi la question : « Ai-je toujours la même substance à la fin ? » De l'eau devenue vapeur reste de l'eau → physique. Du bois devenu cendres et fumée n'est plus du bois → chimique.",
    },
    {
      title: "Les combustions",
      paragraphs: [
        "Une combustion est une transformation chimique entre un combustible (ce qui brûle : bois, carbone, butane, papier) et un comburant, qui est en général le dioxygène de l'air. Elle libère de l'énergie sous forme de chaleur et souvent de lumière.",
        "La combustion complète du carbone consomme du carbone et du dioxygène et produit du dioxyde de carbone. Le dioxyde de carbone se détecte facilement : il trouble l'eau de chaux, qui devient blanchâtre.",
        "La combustion complète du butane C₄H₁₀, comme celle de tout hydrocarbure, produit du dioxyde de carbone et de l'eau (visible sous forme de buée sur un récipient froid tenu au-dessus de la flamme).",
        "Quand le dioxygène manque, la combustion devient incomplète : elle produit du carbone solide (les suies noires) et surtout du monoxyde de carbone CO, un gaz incolore, inodore et mortel. C'est lui qui tue chaque année dans des logements mal ventilés. Un appareil à flamme a donc toujours besoin d'une bonne aération.",
      ],
      example: [
        "carbone + dioxygène → dioxyde de carbone (équation-bilan en mots).",
        "butane + dioxygène → dioxyde de carbone + eau.",
        "Une flamme jaune et fumante d'un brûleur signale un manque de dioxygène ; ouvrir l'arrivée d'air rend la flamme bleue et beaucoup plus chaude.",
      ],
      tip: "Ne dis jamais qu'une combustion « détruit » la matière. Rien n'est détruit : les atomes du bois se retrouvent dans les gaz et les cendres. Ce qui disparaît, c'est le bois en tant que substance, pas la matière.",
    },
    {
      title: "La conservation de la masse",
      paragraphs: [
        "Au cours d'une transformation chimique, les atomes ne sont ni créés ni détruits : ils sont seulement réarrangés. Il y a donc exactement les mêmes atomes, en même nombre, avant et après. Conséquence : la masse totale des réactifs est égale à la masse totale des produits.",
        "En classe, on l'observe en réalisant la transformation dans un récipient fermé posé sur une balance : l'aiguille ne bouge pas. Dans un récipient ouvert, on peut croire à une perte de masse, mais c'est simplement qu'un gaz s'est échappé, emportant sa masse avec lui.",
        "On résume une transformation par une équation-bilan, écrite en mots au collège : les réactifs à gauche, une flèche, les produits à droite. La flèche se lit « donne » ou « se transforme en », jamais « égale ».",
      ],
      example: [
        "On brûle 3 g de carbone qui consomment 8 g de dioxygène : on obtient 3 + 8 = 11 g de dioxyde de carbone.",
        "Un clou en fer de 10 g totalement rouillé pèse PLUS de 10 g : le fer s'est combiné au dioxygène de l'air, dont la masse s'ajoute.",
      ],
      tip: "Une bougie qui brûle semble « perdre » de la matière : en réalité, sa cire se transforme en dioxyde de carbone et en vapeur d'eau qui partent dans l'air. Pèse tout, gaz compris, et la masse est conservée.",
    },
  ],
  exercises: [
    {
      id: "s4ato-1",
      level: 1,
      type: "qcm",
      question: "Quel est le symbole chimique du fer ?",
      choices: ["F", "Fr", "Fe", "FE"],
      answer: 2,
      explanation:
        "Le fer a pour symbole Fe, du latin ferrum. F seul est le fluor et Fr le francium. Retiens la règle d'écriture : première lettre en majuscule, seconde en minuscule — FE serait donc faux dans tous les cas.",
      hint: "Le symbole vient du mot latin ferrum, et il s'écrit avec deux lettres : une majuscule puis une minuscule.",
    },
    {
      id: "s4ato-2",
      level: 1,
      type: "qcm",
      question: "La formule de la molécule d'eau est H₂O. Combien d'atomes cette molécule contient-elle en tout ?",
      choices: ["2 atomes", "3 atomes", "4 atomes", "1 atome"],
      answer: 1,
      explanation:
        "L'indice 2 porte sur l'hydrogène : il y a 2 atomes d'hydrogène. L'oxygène n'a pas d'indice, donc il y a 1 atome d'oxygène. Au total 2 + 1 = 3 atomes. L'erreur classique est de compter seulement les symboles écrits (2) en oubliant l'indice.",
      hint: "Compte les atomes élément par élément : l'indice 2 concerne l'hydrogène, et l'absence d'indice signifie « un seul atome ».",
    },
    {
      id: "s4ato-3",
      level: 1,
      type: "truefalse",
      question: "La fusion d'un glaçon est une transformation chimique.",
      answer: false,
      explanation:
        "Faux : c'est une transformation physique. Les molécules d'eau H₂O restent des molécules d'eau, elles changent seulement d'organisation en passant de l'état solide à l'état liquide. Idée reçue à corriger : « changer d'aspect » n'est pas « changer de substance ». Une transformation chimique fait apparaître de nouvelles substances.",
      hint: "Demande-toi si les molécules d'eau sont toujours des molécules d'eau après la fusion.",
    },
    {
      id: "s4ato-4",
      level: 1,
      type: "input",
      question: "Quel gaz de l'air est consommé lors d'une combustion ? (un seul mot)",
      answer: "dioxygene",
      accept: ["dioxygène", "le dioxygène", "le dioxygene", "o2"],
      explanation:
        "Toute combustion a besoin d'un comburant, qui est le dioxygène O₂ de l'air. Sans lui, la flamme s'éteint : c'est pourquoi un verre retourné sur une bougie l'étouffe. On dit dioxygène et non « oxygène », car la molécule du gaz est formée de deux atomes d'oxygène.",
      hint: "C'est le gaz que nous respirons aussi ; sa molécule contient deux atomes d'oxygène, d'où le préfixe « di- ».",
    },
    {
      id: "s4ato-5",
      level: 2,
      type: "input",
      question: "Dans la molécule de butane C₄H₁₀, combien y a-t-il d'atomes d'hydrogène ? (nombre seul)",
      answer: "10",
      explanation:
        "L'indice écrit juste après H vaut 10 : la molécule contient 10 atomes d'hydrogène (et 4 atomes de carbone, soit 14 atomes en tout). Attention : l'indice porte uniquement sur le symbole qui le précède, jamais sur toute la formule.",
      hint: "Repère l'indice écrit juste après le symbole H ; il ne concerne que l'hydrogène.",
    },
    {
      id: "s4ato-6",
      level: 2,
      type: "qcm",
      question: "On brûle du carbone dans du dioxygène en quantité suffisante. Quel produit se forme ?",
      choices: ["du dioxyde de carbone", "de l'eau", "du monoxyde de carbone", "du diazote"],
      answer: 0,
      explanation:
        "L'équation-bilan en mots est : carbone + dioxygène → dioxyde de carbone. Ce gaz se reconnaît car il trouble l'eau de chaux. Le monoxyde de carbone n'apparaît que si le dioxygène manque (combustion incomplète), et il n'y a pas d'eau formée car le carbone pur ne contient pas d'hydrogène.",
      hint: "Le carbone ne contient pas d'hydrogène, donc aucun produit ne peut contenir d'eau ; et ici le dioxygène est en quantité suffisante.",
    },
    {
      id: "s4ato-7",
      level: 2,
      type: "truefalse",
      question: "Lors d'une transformation chimique, des atomes peuvent disparaître.",
      answer: false,
      explanation:
        "Faux : les atomes se réorganisent mais ne sont ni créés ni détruits. On retrouve exactement les mêmes atomes, en même nombre, avant et après. C'est précisément pour cela que la masse totale se conserve. Ce qui disparaît, ce sont les molécules de départ, pas les atomes.",
      hint: "Pense à ce qui explique la conservation de la masse : que deviennent les atomes des réactifs ?",
    },
    {
      id: "s4ato-8",
      level: 2,
      type: "input",
      question:
        "Dans un récipient fermé, 5 g de fer réagissent complètement avec 2 g de dioxygène. Quelle est la masse, en grammes, du produit formé ? (nombre seul)",
      answer: "7",
      accept: ["7 g", "7g"],
      explanation:
        "La masse se conserve : masse des produits = masse des réactifs = 5 + 2 = 7 g. Comme le récipient est fermé, rien ne peut s'échapper. C'est aussi la raison pour laquelle un clou rouillé est plus lourd que le clou neuf : le dioxygène fixé ajoute sa masse.",
      hint: "Additionne les masses de tous les réactifs : dans un récipient fermé, la masse totale ne change pas.",
    },
    {
      id: "s4ato-9",
      level: 3,
      type: "qcm",
      question: "Un chauffe-eau mal ventilé produit un gaz incolore, inodore et mortel. De quel gaz s'agit-il ?",
      choices: ["le dioxyde de carbone CO₂", "le monoxyde de carbone CO", "le diazote N₂", "la vapeur d'eau"],
      answer: 1,
      explanation:
        "Quand le dioxygène manque, la combustion est incomplète et forme du monoxyde de carbone CO, indétectable par les sens et mortel à faible dose. Le dioxyde de carbone CO₂, lui, est produit par les combustions complètes et n'est dangereux qu'à très forte concentration. D'où la règle : ne jamais boucher les aérations d'une pièce chauffée par une flamme.",
      hint: "Ce gaz se forme quand le dioxygène est insuffisant ; sa molécule ne contient qu'un seul atome d'oxygène.",
    },
    {
      id: "s4ato-10",
      level: 3,
      type: "truefalse",
      question: "Une bougie qui brûle dans une pièce fait disparaître de la matière.",
      answer: false,
      explanation:
        "Faux : la cire se transforme en dioxyde de carbone et en vapeur d'eau, deux gaz invisibles qui se dispersent dans l'air. Si l'on pesait la bougie ET tous les gaz, la masse totale serait inchangée. L'idée reçue vient de ce que l'on ne pèse jamais les gaz : invisible ne veut pas dire inexistant.",
      hint: "Demande-toi où sont partis les atomes de la cire, et si l'on a pensé à peser les gaz produits.",
    },
    {
      id: "s4ato-11",
      level: 3,
      type: "input",
      question: "Combien d'atomes d'oxygène au total y a-t-il dans 3 CO₂ ? (nombre seul)",
      answer: "6",
      explanation:
        "Le coefficient 3 placé devant multiplie toute la molécule. Chaque molécule de CO₂ contient 2 atomes d'oxygène, donc 3 × 2 = 6 atomes d'oxygène (et 3 atomes de carbone). Ne confonds pas le coefficient, écrit devant et valable pour toute la molécule, avec l'indice, écrit en bas et valable pour un seul symbole.",
      hint: "Le nombre écrit devant la formule compte les molécules ; calcule d'abord combien d'atomes d'oxygène il y a dans une seule molécule.",
    },
    {
      id: "s4ato-12",
      level: 3,
      type: "qcm",
      question:
        "On brûle du butane dans une balance sous une hotte ouverte : la masse affichée diminue. Quelle est la bonne explication ?",
      choices: [
        "La masse ne se conserve pas lors d'une combustion",
        "Les atomes de carbone ont été détruits par la flamme",
        "Les gaz produits s'échappent dans l'air et emportent leur masse",
        "La chaleur possède une masse négative",
      ],
      answer: 2,
      explanation:
        "La combustion du butane produit du dioxyde de carbone et de l'eau, qui partent dans l'air sous forme de gaz. La balance ne pèse plus ces produits, d'où l'impression de perte. En système fermé, la masse resterait rigoureusement constante : la conservation de la masse n'est jamais mise en défaut, ce sont les mesures incomplètes qui trompent.",
      hint: "Demande-toi ce que la balance ne pèse plus une fois les produits formés, et ce qui changerait dans un récipient fermé.",
    },
  ],
};
