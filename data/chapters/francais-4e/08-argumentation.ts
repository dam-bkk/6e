import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-argumentation",
  subject: "francais",
  grade: "4e",
  num: 8,
  title: "Convaincre et argumenter",
  domain: "donnees",
  domainLabel: "Expression",
  icon: "Scale",
  teaser: "Thèse, arguments, connecteurs : apprendre à défendre une idée et à repérer celle des autres.",
  objectives: [
    "Je sais distinguer la thèse, les arguments et les exemples d'un texte argumentatif",
    "Je sais employer les connecteurs logiques de cause, de conséquence, d'opposition et de concession",
    "Je sais faire la différence entre convaincre (la raison) et persuader (les émotions)",
    "Je sais repérer la thèse défendue dans un texte court",
    "Je sais construire un paragraphe argumenté : argument, explication, exemple",
  ],
  lesson: [
    {
      title: "Thèse, arguments, exemples",
      paragraphs: [
        "Argumenter, c'est défendre une opinion pour faire adhérer son destinataire. Un texte argumentatif s'organise autour de trois éléments.",
        "La thèse est l'opinion défendue par l'auteur : c'est l'idée générale qu'il veut faire admettre. Exemple de thèse : « la lecture est indispensable ».",
        "Les arguments sont les raisons qui soutiennent la thèse : chacun répond à la question « pourquoi l'auteur a-t-il raison ? ». Exemple : « la lecture enrichit le vocabulaire ».",
        "Les exemples sont des cas concrets qui illustrent chaque argument : un fait, un chiffre, une expérience vécue, une référence. Un exemple illustre, mais ne prouve rien à lui seul : il a toujours besoin d'un argument.",
      ],
      example: [
        "Thèse : « Le sport est bénéfique aux collégiens. »",
        "Argument : « Il améliore la concentration en classe. »",
        "Exemple : « Après deux mois de natation, Sami a cessé de bavarder et a remonté sa moyenne. »",
      ],
      tip: "Du général au particulier : la thèse coiffe tout le texte, l'argument soutient la thèse, l'exemple illustre l'argument. Si tu peux dire « par exemple » devant, c'est un exemple.",
    },
    {
      title: "Les connecteurs logiques",
      paragraphs: [
        "Les connecteurs logiques relient les idées et rendent le raisonnement visible. On les classe selon la relation qu'ils expriment.",
        "La cause (pourquoi ?) : car, parce que, en effet, puisque. « Lisez, car la lecture ouvre l'esprit. »",
        "La conséquence (avec quel résultat ?) : donc, ainsi, c'est pourquoi, par conséquent. « Il a plu ; donc le match est reporté. »",
        "L'opposition : mais, or, cependant, pourtant, au contraire. Elle confronte deux idées contraires. « Ce jeu est amusant, mais il fait perdre du temps. »",
        "La concession : certes, bien que, il est vrai que… mais. On reconnaît d'abord une part de vérité à l'adversaire, avant de maintenir sa propre thèse. « Certes, le sport fatigue, mais il fortifie. »",
      ],
      example: [
        "« En effet » annonce une cause, une justification.",
        "« C'est pourquoi » annonce une conséquence, une conclusion.",
        "« Certes… mais » : j'accorde un point, puis je reprends l'avantage.",
      ],
      tip: "La concession est l'arme des bons argumentateurs : accorder un petit point à l'adversaire (« certes… ») rend le « mais » qui suit beaucoup plus fort.",
    },
    {
      title: "Convaincre ou persuader ?",
      paragraphs: [
        "Convaincre, c'est s'adresser à la raison du destinataire : on empile des arguments logiques, des faits, des chiffres, des raisonnements. Le lecteur adhère parce que c'est démontré.",
        "Persuader, c'est s'adresser aux émotions : on touche le cœur par des images frappantes, des interpellations (« imaginez… »), des appels à la pitié, à la peur ou à l'enthousiasme. Le lecteur adhère parce qu'il est ému.",
        "Les deux stratégies se combinent souvent dans un même texte : une publicité, un discours politique ou une campagne de sécurité routière mêlent chiffres et émotions.",
      ],
      example: [
        "Convaincre : « Le casque réduit de 70 % le risque de blessure grave à vélo. »",
        "Persuader : « Imagine le chagrin de tes parents si tu ne rentrais pas ce soir… »",
      ],
      tip: "Convaincre = cerveau (arguments, preuves). Persuader = cœur (émotions, images). Demande-toi ce que le texte vise : ma logique ou mes sentiments ?",
    },
    {
      title: "Repérer la thèse d'un texte",
      paragraphs: [
        "La thèse n'est pas toujours en première phrase : elle peut ouvrir le texte, le conclure, ou rester implicite (sous-entendue).",
        "Méthode : demande-toi « de quoi parle le texte ? » (le thème), puis « qu'en pense l'auteur ? » (la thèse). La thèse est une opinion, pas un fait : on peut la discuter.",
        "Attention à la thèse adverse : l'auteur cite parfois d'abord l'opinion qu'il combat, avant de la réfuter. Les connecteurs d'opposition (mais, pourtant, or) signalent souvent le passage à sa véritable thèse.",
      ],
      example: [
        "« Beaucoup pensent que le brouillon fait perdre du temps. Pourtant, il structure la pensée et évite bien des ratures. » → thèse adverse d'abord, puis « pourtant » introduit la thèse de l'auteur : le brouillon est utile.",
      ],
      tip: "Quand un texte commence par « certains pensent que… » ou « on dit souvent que… », méfie-toi : c'est presque toujours la thèse adverse. La vraie thèse arrive après le « mais ».",
    },
    {
      title: "Construire un paragraphe argumenté",
      paragraphs: [
        "Un paragraphe argumenté développe un seul argument, en trois temps.",
        "1) L'argument : une phrase claire qui énonce l'idée, souvent introduite par un connecteur (d'abord, ensuite, enfin). 2) L'explication : une ou deux phrases qui développent l'idée, la justifient. 3) L'exemple : un cas précis introduit par « par exemple » ou « ainsi ».",
        "Les paragraphes s'enchaînent ensuite avec des connecteurs d'addition (d'abord, de plus, enfin) pour construire l'argumentation complète, du début à la conclusion.",
      ],
      example: [
        "« D'abord, le vélo est bon pour la santé (argument). Pédaler chaque jour muscle le cœur et améliore le souffle (explication). Par exemple, les collégiens qui viennent à vélo sont moins essoufflés en cours d'EPS (exemple). »",
      ],
      tip: "Un paragraphe = un argument. Si tu énonces deux idées différentes, ouvre un deuxième paragraphe avec un nouveau connecteur.",
    },
  ],
  exercises: [
    {
      id: "f4arg-1",
      level: 1,
      type: "qcm",
      question: "Dans un texte argumentatif, la thèse est…",
      choices: [
        "l'opinion défendue par l'auteur",
        "un cas concret qui illustre une idée",
        "un mot de liaison entre deux phrases",
      ],
      answer: 0,
      explanation:
        "La thèse est l'opinion générale que l'auteur veut faire admettre ; elle coiffe tout le texte. Le piège : le cas concret est l'exemple, et le mot de liaison est le connecteur ; ni l'un ni l'autre n'exprime l'opinion défendue.",
      hint: "C'est l'idée qu'on pourrait résumer en une phrase commençant par « Selon l'auteur,… ».",
    },
    {
      id: "f4arg-2",
      level: 1,
      type: "qcm",
      question: "Quelle relation logique le connecteur « donc » exprime-t-il ?",
      choices: ["la cause", "la conséquence", "l'opposition"],
      answer: 1,
      explanation:
        "« Donc » introduit la conséquence, le résultat : « il pleut, donc le match est reporté ». Le piège : la cause s'exprime avec « car » ou « parce que » ; cause et conséquence décrivent le même lien, mais lu dans un sens différent.",
      hint: "« Je pense, donc je suis » : la deuxième idée découle-t-elle de la première ?",
    },
    {
      id: "f4arg-3",
      level: 1,
      type: "truefalse",
      question: "Un exemple suffit à lui seul à prouver une thèse.",
      answer: false,
      explanation:
        "Faux ! Un exemple illustre un argument, il ne prouve rien tout seul : un seul cas particulier peut toujours être une exception. La règle : exemple au service d'un argument, argument au service de la thèse. Le piège : un texte rempli d'exemples sans arguments n'argumente pas vraiment.",
      hint: "Si un élève a réussi sans réviser, cela prouve-t-il que réviser est inutile ?",
    },
    {
      id: "f4arg-4",
      level: 1,
      type: "input",
      question: "Quel mot désigne l'opinion générale que l'auteur défend dans un texte argumentatif ?",
      answer: "thèse",
      accept: ["la thèse", "these", "la these"],
      explanation:
        "C'est la thèse : l'idée que l'auteur veut faire admettre à son destinataire. Le piège : ne pas confondre avec le thème, qui est le sujet dont parle le texte ; le thème « les écrans » peut porter des thèses opposées.",
      hint: "Le mot commence comme « thème », mais désigne l'opinion, pas le sujet.",
    },
    {
      id: "f4arg-5",
      level: 2,
      type: "qcm",
      question: "Quelle relation logique le connecteur « car » exprime-t-il ?",
      choices: ["la conséquence", "la concession", "la cause"],
      answer: 2,
      explanation:
        "« Car » introduit la cause, la justification : « Mets ton casque, car la route est glissante. » Le piège : « car » et « donc » relient les mêmes idées, mais en sens inverse ; « la route est glissante, donc mets ton casque » inverse la présentation.",
      hint: "Ce qui suit « car » répond à la question « pourquoi ? ».",
    },
    {
      id: "f4arg-6",
      level: 2,
      type: "qcm",
      question: "Convaincre, c'est chercher l'adhésion du destinataire en s'adressant à…",
      choices: ["ses émotions", "sa raison", "son imagination"],
      answer: 1,
      explanation:
        "Convaincre passe par la raison : arguments logiques, faits, chiffres, démonstrations. Le piège : persuader, au contraire, joue sur les émotions et l'imagination (peur, pitié, rêve) ; les deux stratégies se combinent souvent, mais on doit savoir les distinguer.",
      hint: "Convaincre = cerveau ; persuader = cœur.",
    },
    {
      id: "f4arg-7",
      level: 2,
      type: "input",
      question: "Complète avec le connecteur de concession qui convient : « ..., le téléphone peut distraire en classe, mais c'est aussi un formidable outil de recherche. »",
      answer: "certes",
      accept: ["il est vrai que", "bien sûr", "évidemment", "evidemment"],
      explanation:
        "« Certes » ouvre la concession : on accorde un point à l'adversaire (le téléphone distrait) avant de le renverser avec « mais ». La règle : concession = « certes… mais ». Le piège : « pourtant » ou « cependant » marquent l'opposition seule, sans ce mouvement en deux temps.",
      hint: "C'est le mot classique qui précède un « mais » dans le duo concessif.",
    },
    {
      id: "f4arg-8",
      level: 2,
      type: "truefalse",
      question: "« Cependant » est un connecteur d'opposition.",
      answer: true,
      explanation:
        "Vrai ! « Cependant », comme « mais », « pourtant » ou « or », confronte deux idées contraires : « Ce film est célèbre ; cependant, je m'y suis ennuyé. » Le piège : ne pas le confondre avec « pendant », qui exprime le temps ; malgré son origine, « cependant » ne marque plus la simultanéité aujourd'hui.",
      hint: "Essaie de le remplacer par « pourtant » dans une phrase.",
    },
    {
      id: "f4arg-9",
      level: 3,
      type: "qcm",
      question: "« Beaucoup affirment que les jeux vidéo isolent les jeunes. Pourtant, bien choisis, ils créent du lien : on coopère, on échange, on se fait des amis. » Quelle est la thèse de l'auteur ?",
      choices: [
        "Les jeux vidéo isolent les jeunes.",
        "Les jeux vidéo, bien choisis, créent du lien.",
        "Il faut interdire les jeux vidéo.",
      ],
      answer: 1,
      explanation:
        "La première phrase rapporte la thèse adverse (« beaucoup affirment que… ») ; le connecteur d'opposition « pourtant » signale le passage à la véritable thèse de l'auteur : les jeux vidéo créent du lien. Le piège : prendre la première opinion citée pour celle de l'auteur ; repère toujours qui parle et où se trouve le « pourtant ».",
      hint: "Que signale le connecteur « pourtant » au début de la deuxième phrase ?",
    },
    {
      id: "f4arg-10",
      level: 3,
      type: "qcm",
      question: "« Adopte un chaton : imagine ce petit être abandonné, tremblant de froid, qui n'attend que ta tendresse… » Ce texte cherche surtout à…",
      choices: [
        "convaincre par des arguments logiques",
        "persuader en touchant les émotions",
        "informer avec des chiffres précis",
      ],
      answer: 1,
      explanation:
        "Le texte interpelle (« imagine »), peint une image attendrissante et joue sur la pitié : il persuade en visant le cœur. Le piège : aucun fait ni chiffre, aucun raisonnement ; pour convaincre, il aurait fallu des arguments du type « adopter réduit le nombre d'animaux euthanasiés ».",
      hint: "Le texte s'adresse-t-il à ta logique ou à tes sentiments ?",
    },
    {
      id: "f4arg-11",
      level: 3,
      type: "input",
      question: "Complète avec un connecteur de conséquence : « Il a neigé toute la nuit, ... les routes sont impraticables ce matin. »",
      answer: "donc",
      accept: ["c'est pourquoi", "par conséquent", "ainsi", "alors", "des lors", "dès lors"],
      explanation:
        "L'état des routes est le résultat de la neige : il faut un connecteur de conséquence comme « donc », « c'est pourquoi » ou « par conséquent ». Le piège : « car » inverserait la logique en présentant la neige comme une justification ; vérifie toujours le sens du lien avant de choisir le connecteur.",
      hint: "La deuxième idée est le résultat de la première.",
    },
    {
      id: "f4arg-12",
      level: 3,
      type: "qcm",
      question: "Dans un paragraphe argumenté bien construit, l'ordre habituel est…",
      choices: [
        "l'argument, puis son explication, puis un exemple",
        "un exemple, puis la thèse, puis un connecteur",
        "la conclusion, puis l'argument, puis la thèse",
      ],
      answer: 0,
      explanation:
        "Le paragraphe va du général au particulier : on énonce l'argument, on l'explique, puis on l'illustre par un exemple introduit par « par exemple » ou « ainsi ». Le piège : commencer par l'exemple laisse le lecteur sans idée directrice ; l'exemple vient toujours au service d'un argument déjà posé.",
      hint: "On va de l'idée générale vers le cas concret.",
    },
  ],
};
