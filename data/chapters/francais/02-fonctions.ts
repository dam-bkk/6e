import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-fonctions",
  subject: "francais",
  num: 2,
  title: "Les fonctions dans la phrase",
  domain: "nombres",
  domainLabel: "Grammaire",
  icon: "Network",
  teaser: "Sujet, COD, compléments… découvre le rôle de chaque groupe dans la phrase.",
  objectives: [
    "Je sais trouver le sujet et le verbe conjugué d'une phrase",
    "Je sais reconnaître un COD, un COI et un attribut du sujet",
    "Je sais identifier les compléments circonstanciels de temps, de lieu et de manière",
    "Je connais les types et les formes de phrases",
  ],
  lesson: [
    {
      title: "Le sujet et le verbe conjugué",
      paragraphs: [
        "La fonction d'un mot, c'est le rôle qu'il joue dans la phrase. Contrairement à la classe, la fonction change d'une phrase à l'autre : « le chat » peut être sujet dans une phrase et COD dans une autre.",
        "Le verbe conjugué est le cœur de la phrase. Pour trouver son sujet, pose la question « Qui est-ce qui… ? » (ou « Qu'est-ce qui… ? ») devant le verbe. Le sujet commande l'accord du verbe.",
      ],
      example: [
        "« Les élèves de la classe préparent un exposé. »",
        "Qui est-ce qui prépare ? → « Les élèves de la classe » : sujet du verbe « préparent ».",
      ],
      tip: "Tu peux aussi encadrer le sujet par « C'est … qui » : « Ce sont les élèves qui préparent ». Si ça fonctionne, tu as trouvé le sujet.",
    },
    {
      title: "Le COD et le COI",
      paragraphs: [
        "Le complément d'objet désigne ce sur quoi porte l'action du verbe. On ne peut généralement ni le supprimer ni le déplacer.",
        "Le COD (complément d'objet direct) répond à la question « quoi ? » ou « qui ? » posée après le verbe, sans préposition : « Le chien poursuit le facteur » → il poursuit qui ? le facteur.",
        "Le COI (complément d'objet indirect) est relié au verbe par une préposition (à, de) : « Elle parle à sa sœur » → elle parle à qui ? à sa sœur.",
      ],
      example: [
        "« Tom écrit une lettre à sa grand-mère. »",
        "• « une lettre » : COD (il écrit quoi ?) • « à sa grand-mère » : COI (il écrit à qui ?).",
      ],
      tip: "Direct = le complément est branché directement au verbe. Indirect = il y a un intermédiaire, la préposition « à » ou « de ».",
    },
    {
      title: "Les compléments circonstanciels",
      figure: "fr-phrase-fonctions",
      paragraphs: [
        "Les compléments circonstanciels (CC) précisent les circonstances de l'action : quand (CC de temps), où (CC de lieu), comment (CC de manière).",
        "À la différence du COD, un complément circonstanciel peut souvent être supprimé ou déplacé sans rendre la phrase incorrecte : « Demain, nous partirons » / « Nous partirons demain » / « Nous partirons ».",
      ],
      example: [
        "« Ce soir, Zoé lira tranquillement dans sa chambre. »",
        "• « ce soir » : CC de temps • « tranquillement » : CC de manière • « dans sa chambre » : CC de lieu.",
      ],
      tip: "Test du complément circonstanciel : si tu peux le déplacer en tête de phrase ET le supprimer, c'est un CC. Un COD, lui, refuse de bouger.",
    },
    {
      title: "L'attribut du sujet",
      paragraphs: [
        "Avec le verbe être (et les verbes d'état : sembler, paraître, devenir, rester, demeurer, avoir l'air), le mot placé après le verbe ne subit pas l'action : il donne une information sur le sujet. C'est l'attribut du sujet.",
        "L'attribut du sujet s'accorde avec le sujet : « Les joueurs semblent fatigués », « Cette histoire est étrange ». Attention : après le verbe être, ce n'est jamais un COD !",
      ],
      example: [
        "« Sophie est médecin. » → « médecin » est attribut du sujet « Sophie ».",
        "« Sophie appelle un médecin. » → « un médecin » est COD du verbe « appelle ».",
      ],
      tip: "Verbe d'état (être, sembler, devenir…) → attribut du sujet. Verbe d'action → COD possible. Repère d'abord le verbe !",
    },
    {
      title: "Types et formes de phrases",
      paragraphs: [
        "On distingue quatre types de phrases : déclarative (elle donne une information : « Il pleut. »), interrogative (elle pose une question : « Pleut-il ? »), exclamative (elle exprime une émotion : « Quelle pluie ! ») et impérative (elle donne un ordre ou un conseil : « Prends ton parapluie. »).",
        "Chaque phrase a aussi une forme : affirmative ou négative. La négation s'exprime avec deux mots qui encadrent le verbe : ne… pas, ne… plus, ne… jamais, ne… rien.",
      ],
      example: [
        "« Range ta chambre ! » : phrase impérative (le sujet n'est pas exprimé).",
        "« Je ne regarde jamais cette émission. » : phrase déclarative, à la forme négative.",
      ],
      tip: "À l'oral, le « ne » disparaît souvent (« je sais pas ») ; à l'écrit, la négation garde toujours ses deux mots : « je ne sais pas ».",
    },
  ],
  exercises: [
    {
      id: "ffon-1",
      level: 1,
      type: "qcm",
      question: "Dans « Les élèves écoutent la leçon. », quel est le sujet du verbe « écoutent » ?",
      choices: ["la leçon", "Les élèves", "écoutent", "la"],
      answer: 1,
      explanation:
        "Qui est-ce qui écoute ? → « Les élèves ». C'est le sujet, et c'est lui qui commande l'accord du verbe : « écoutent » est au pluriel. « La leçon » répond à la question « quoi ? » : c'est le COD.",
      hint: "Pose la question « Qui est-ce qui écoute ? »",
    },
    {
      id: "ffon-2",
      level: 1,
      type: "qcm",
      question: "« Range ta chambre ! » Quel est le type de cette phrase ?",
      choices: ["Déclarative", "Interrogative", "Impérative", "Exclamative"],
      answer: 2,
      explanation:
        "Cette phrase donne un ordre et son sujet n'est pas exprimé (on ne dit pas « tu ranges ») : c'est une phrase impérative. Ne te fie pas seulement au point d'exclamation : une phrase exclamative exprime une émotion (« Quelle belle chambre ! »), pas un ordre.",
      hint: "Cette phrase donne-t-elle une information, une question, un ordre ou une émotion ?",
    },
    {
      id: "ffon-3",
      level: 1,
      type: "truefalse",
      question: "Dans « Marie mange une pomme. », le groupe « une pomme » est le sujet de la phrase.",
      answer: false,
      explanation:
        "Faux ! Qui est-ce qui mange ? → Marie : c'est elle le sujet. « Une pomme » répond à « Marie mange quoi ? » : c'est le COD. Le sujet fait l'action, le COD la subit.",
    },
    {
      id: "ffon-4",
      level: 1,
      type: "input",
      question: "Dans « Demain, nous partirons en vacances. », quel mot est complément circonstanciel de temps ?",
      answer: "demain",
      explanation:
        "« Demain » répond à la question « quand ? » : c'est un complément circonstanciel de temps. On peut le déplacer (« Nous partirons demain en vacances ») ou le supprimer : la phrase reste correcte. C'est la marque des CC.",
      hint: "Quel mot répond à la question « quand ? » ?",
    },
    {
      id: "ffon-5",
      level: 2,
      type: "qcm",
      question: "Dans « Le chien poursuit le facteur. », quelle est la fonction de « le facteur » ?",
      choices: ["Sujet", "COD", "COI", "CC de lieu"],
      answer: 1,
      explanation:
        "Le chien poursuit qui ? → le facteur, sans préposition : c'est un COD. Ce n'est pas le sujet (ce n'est pas lui qui poursuit !) ni un COI (pas de « à » ni de « de » devant).",
      hint: "Pose la question « poursuit qui ? » après le verbe.",
    },
    {
      id: "ffon-6",
      level: 2,
      type: "qcm",
      question: "Dans « Elle parle à sa sœur. », quelle est la fonction de « à sa sœur » ?",
      choices: ["COD", "COI", "Attribut du sujet", "CC de manière"],
      answer: 1,
      explanation:
        "Elle parle à qui ? → à sa sœur. Le complément est relié au verbe par la préposition « à » : c'est un COI (complément d'objet indirect). S'il n'y avait pas de préposition, ce serait un COD.",
      hint: "Y a-t-il une préposition entre le verbe et le complément ?",
    },
    {
      id: "ffon-7",
      level: 2,
      type: "input",
      question: "Dans « Les joueurs semblent fatigués. », quelle est la fonction du mot « fatigués » ? (deux ou trois mots)",
      answer: "attribut du sujet",
      accept: ["attribut", "attribut du sujet les joueurs"],
      explanation:
        "« Sembler » est un verbe d'état, comme être, paraître ou devenir. Le mot qui suit donne une information sur le sujet : « fatigués » est attribut du sujet « les joueurs ». La preuve : il s'accorde avec le sujet (masculin pluriel).",
      hint: "« Sembler » est un verbe d'état, comme « être ».",
    },
    {
      id: "ffon-8",
      level: 2,
      type: "truefalse",
      question: "Une phrase interrogative se termine toujours par un point d'exclamation.",
      answer: false,
      explanation:
        "Faux ! Une phrase interrogative pose une question et se termine par un point d'interrogation ( ? ). Le point d'exclamation ( ! ) termine les phrases exclamatives et souvent les phrases impératives.",
    },
    {
      id: "ffon-9",
      level: 3,
      type: "qcm",
      question: "Dans « Dans le jardin chantent les oiseaux. », quel est le sujet du verbe « chantent » ?",
      choices: ["Dans le jardin", "le jardin", "les oiseaux", "chantent"],
      answer: 2,
      explanation:
        "Qui est-ce qui chante ? → les oiseaux. Ici le sujet est placé APRÈS le verbe : on dit qu'il est inversé. Piège classique : le sujet n'est pas toujours devant le verbe ! « Dans le jardin » est un CC de lieu, il ne commande pas l'accord.",
      hint: "Le sujet n'est pas toujours placé avant le verbe…",
    },
    {
      id: "ffon-10",
      level: 3,
      type: "qcm",
      question: "Dans « Sophie est médecin. », quelle est la fonction de « médecin » ?",
      choices: ["COD", "Sujet", "Attribut du sujet", "COI"],
      answer: 2,
      explanation:
        "Après le verbe être, le mot ne subit aucune action : il dit ce qu'EST le sujet. « Médecin » est donc attribut du sujet « Sophie ». Règle d'or : après un verbe d'état (être, sembler, devenir…), il n'y a jamais de COD.",
      hint: "Quel est le verbe de cette phrase ? Est-ce un verbe d'action ?",
    },
    {
      id: "ffon-11",
      level: 3,
      type: "input",
      question: "« Le soir, il lit un roman dans son lit. » Combien cette phrase contient-elle de compléments circonstanciels ? (réponds par un chiffre)",
      answer: "2",
      accept: ["deux"],
      explanation:
        "« Le soir » (quand ? → CC de temps) et « dans son lit » (où ? → CC de lieu) sont déplaçables et supprimables : ce sont 2 compléments circonstanciels. Attention au piège : « un roman » répond à « il lit quoi ? » et ne peut pas être déplacé : c'est un COD, pas un CC.",
      hint: "Teste chaque groupe : peux-tu le déplacer en début de phrase ?",
    },
    {
      id: "ffon-12",
      level: 3,
      type: "truefalse",
      question: "Dans « La nuit tombe. », le groupe « La nuit » est un complément circonstanciel de temps.",
      answer: false,
      explanation:
        "Faux, et c'est un piège redoutable ! Qui est-ce qui tombe ? → la nuit : c'est le SUJET du verbe « tombe ». Un groupe comme « la nuit » est souvent CC de temps (« La nuit, il dort »), mais pas toujours : la fonction dépend de la phrase. Pose toujours la question « qui est-ce qui ? » avant de conclure.",
      hint: "Pose la question « Qu'est-ce qui tombe ? »",
    },
  ],
};
