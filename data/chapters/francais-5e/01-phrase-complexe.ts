import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-phrase-complexe",
  subject: "francais",
  grade: "5e",
  num: 1,
  title: "La phrase complexe",
  domain: "nombres",
  domainLabel: "Grammaire",
  icon: "Split",
  teaser: "Repérer les propositions et comprendre comment elles s'assemblent.",
  objectives: [
    "Je sais distinguer une phrase simple d'une phrase complexe en comptant les verbes conjugués",
    "Je sais découper une phrase complexe en propositions",
    "Je sais reconnaître la juxtaposition, la coordination et la subordination",
    "Je connais les conjonctions de coordination : mais, ou, et, donc, or, ni, car",
  ],
  lesson: [
    {
      title: "Phrase simple, phrase complexe",
      figure: "fr5-phrase-complexe",
      paragraphs: [
        "Une phrase simple contient un seul verbe conjugué. Une phrase complexe en contient au moins deux. Pour le savoir, il suffit donc de compter les verbes conjugués !",
        "Chaque verbe conjugué est le cœur d'une proposition : une phrase complexe contient autant de propositions que de verbes conjugués.",
      ],
      example: [
        "« Le vent souffle. » → 1 verbe conjugué (souffle) → phrase simple.",
        "« Le vent souffle et la pluie tombe. » → 2 verbes conjugués → phrase complexe, 2 propositions.",
      ],
      tip: "Attention : un infinitif ou un participe n'est pas un verbe conjugué. « Il aime lire » est une phrase simple : seul « aime » est conjugué.",
    },
    {
      title: "La juxtaposition",
      paragraphs: [
        "Deux propositions sont juxtaposées quand elles sont simplement posées l'une à côté de l'autre, séparées par un signe de ponctuation : une virgule, un point-virgule ou deux-points.",
        "Aucun mot de liaison ne les relie : c'est la ponctuation seule qui fait le lien.",
      ],
      example: [
        "« La nuit tombait, les lampadaires s'allumaient. »",
        "Deux propositions séparées par une virgule : elles sont juxtaposées.",
      ],
      tip: "Juxtaposer vient du latin juxta, « à côté » : les propositions sont côte à côte, sans mot-lien.",
    },
    {
      title: "La coordination",
      paragraphs: [
        "Deux propositions sont coordonnées quand elles sont reliées par une conjonction de coordination : mais, ou, et, donc, or, ni, car.",
        "Chaque conjonction exprime une nuance : « mais » l'opposition, « car » la cause, « donc » la conséquence, « ou » le choix, « et » l'addition.",
        "Les propositions coordonnées, comme les juxtaposées, restent indépendantes : chacune pourrait former une phrase toute seule.",
      ],
      example: [
        "« Je voulais sortir mais il pleuvait. » → opposition.",
        "« Il fait froid donc je prends un manteau. » → conséquence.",
      ],
      tip: "Pour retenir les sept conjonctions de coordination : « Mais où est donc Ornicar ? » (mais, ou, et, donc, or, ni, car).",
    },
    {
      title: "La subordination",
      paragraphs: [
        "Une proposition subordonnée dépend d'une autre proposition, appelée proposition principale : elle ne peut pas exister seule.",
        "Elle est introduite par un mot subordonnant : une conjonction de subordination (parce que, quand, si, comme, lorsque…) ou un pronom relatif (qui, que, où, dont…).",
        "Si tu supprimes la principale, la subordonnée reste en suspens : « … parce que j'étais fatigué » n'est pas une phrase complète.",
      ],
      example: [
        "« Je suis rentré parce que j'étais fatigué. »",
        "Principale : « Je suis rentré » / Subordonnée : « parce que j'étais fatigué ».",
      ],
      tip: "Ne confonds pas « car » (coordination) et « parce que » (subordination) : ils expriment tous les deux la cause, mais « car » relie deux propositions indépendantes.",
    },
    {
      title: "Analyser une phrase complexe : la méthode",
      paragraphs: [
        "Étape 1 : souligne tous les verbes conjugués. Étape 2 : découpe la phrase en propositions (une par verbe). Étape 3 : observe comment elles sont reliées.",
        "Ponctuation seule → juxtaposition. Mais, ou, et, donc, or, ni, car → coordination. Mot subordonnant (parce que, quand, qui, que…) → subordination.",
      ],
      example: [
        "« Quand la cloche sonna, les élèves sortirent et la cour se remplit. »",
        "3 verbes → 3 propositions : une subordonnée (« Quand la cloche sonna »), puis deux propositions coordonnées par « et ».",
      ],
      tip: "Une même phrase peut mélanger les trois liens : commence toujours par compter les verbes conjugués, le reste suit.",
    },
  ],
  exercises: [
    {
      id: "f5phr-1",
      level: 1,
      type: "qcm",
      question: "Combien de propositions contient la phrase : « Le chat dort, le chien veille et la souris danse » ?",
      choices: ["1", "2", "3", "4"],
      answer: 2,
      explanation:
        "On compte les verbes conjugués : dort, veille, danse → 3 verbes, donc 3 propositions. La règle : une phrase complexe contient autant de propositions que de verbes conjugués.",
      hint: "Souligne d'abord tous les verbes conjugués.",
    },
    {
      id: "f5phr-2",
      level: 1,
      type: "truefalse",
      question: "« Elle adore nager le matin » est une phrase complexe.",
      answer: false,
      explanation:
        "Faux ! Il n'y a qu'un seul verbe conjugué : « adore ». « Nager » est un infinitif, il ne compte pas. C'est le piège classique : seuls les verbes conjugués délimitent les propositions.",
      hint: "« Nager » est-il un verbe conjugué ?",
    },
    {
      id: "f5phr-3",
      level: 1,
      type: "qcm",
      question: "Dans « Il pleut, nous restons à la maison », les deux propositions sont…",
      choices: ["juxtaposées", "coordonnées", "subordonnées"],
      answer: 0,
      explanation:
        "Les deux propositions sont séparées par une simple virgule, sans mot de liaison : c'est une juxtaposition. Pour une coordination, il faudrait mais, ou, et, donc, or, ni ou car.",
      hint: "Y a-t-il un mot de liaison entre les deux propositions ?",
    },
    {
      id: "f5phr-4",
      level: 1,
      type: "input",
      question: "Complète avec la conjonction de coordination qui exprime la cause : « Je mets un bonnet ... il fait froid. »",
      answer: "car",
      explanation:
        "« Car » est la conjonction de coordination qui exprime la cause. Attention : « parce que » exprime aussi la cause, mais c'est une conjonction de subordination, pas de coordination.",
      hint: "Pense à la liste : mais, ou, et, donc, or, ni, car.",
    },
    {
      id: "f5phr-5",
      level: 2,
      type: "qcm",
      question: "Dans « Je reprendrai du gâteau car il est délicieux », quelle nuance exprime « car » ?",
      choices: ["l'opposition", "la conséquence", "la cause", "le choix"],
      answer: 2,
      explanation:
        "« Car » introduit la cause : la raison pour laquelle je reprends du gâteau. Ne confonds pas avec « donc », qui exprime la conséquence : « Il est délicieux donc j'en reprends. »",
      hint: "La deuxième proposition explique-t-elle une raison ou un résultat ?",
    },
    {
      id: "f5phr-6",
      level: 2,
      type: "qcm",
      question: "Quelle phrase contient une proposition subordonnée ?",
      choices: [
        "Le film commence et les lumières s'éteignent.",
        "Le film commence, les lumières s'éteignent.",
        "Quand le film commence, les lumières s'éteignent.",
        "Le film commence donc les lumières s'éteignent.",
      ],
      answer: 2,
      explanation:
        "« Quand » est une conjonction de subordination : « Quand le film commence » dépend de la principale « les lumières s'éteignent ». Les autres phrases utilisent la coordination (et, donc) ou la juxtaposition (virgule).",
      hint: "Cherche un mot subordonnant : quand, parce que, si, qui, que…",
    },
    {
      id: "f5phr-7",
      level: 2,
      type: "input",
      question: "Dans « Le spectacle que nous avons vu était magnifique », relève le mot qui introduit la proposition subordonnée.",
      answer: "que",
      explanation:
        "« Que » est un pronom relatif : il introduit la subordonnée « que nous avons vu », qui complète le nom « spectacle ». La principale est « Le spectacle était magnifique » : la subordonnée est glissée à l'intérieur !",
      hint: "Le petit mot se trouve juste après « spectacle ».",
    },
    {
      id: "f5phr-8",
      level: 2,
      type: "truefalse",
      question: "Dans « Je suis resté parce que le match était passionnant », la proposition « parce que le match était passionnant » pourrait former une phrase toute seule.",
      answer: false,
      explanation:
        "Faux ! C'est une proposition subordonnée : elle dépend de la principale « Je suis resté ». Seule, « Parce que le match était passionnant. » laisse l'auditeur en attente : ce n'est pas une phrase complète. C'est justement le test pour reconnaître une subordonnée.",
      hint: "Lis la proposition à voix haute, toute seule. Est-elle complète ?",
    },
    {
      id: "f5phr-9",
      level: 3,
      type: "qcm",
      question: "« La cloche sonna, les élèves rangèrent leurs affaires car le cours était fini. » Quels liens relient les trois propositions ?",
      choices: [
        "juxtaposition puis coordination",
        "coordination puis subordination",
        "juxtaposition puis subordination",
        "deux coordinations",
      ],
      answer: 0,
      explanation:
        "Propositions 1 et 2 : séparées par une virgule → juxtaposition. Propositions 2 et 3 : reliées par « car » → coordination. Piège : « car » exprime la cause comme « parce que », mais il reste une conjonction de coordination.",
      hint: "Examine chaque lien l'un après l'autre : virgule ? conjonction ? mot subordonnant ?",
    },
    {
      id: "f5phr-10",
      level: 3,
      type: "input",
      question: "« Lorsque l'orage éclata, les promeneurs coururent vers l'abri. » Recopie la proposition principale.",
      answer: "les promeneurs coururent vers l'abri",
      accept: [
        "les promeneurs coururent vers l'abri.",
        "les promeneurs coururent vers l abri",
      ],
      explanation:
        "La principale est la proposition qui ne dépend d'aucune autre : « les promeneurs coururent vers l'abri ». « Lorsque l'orage éclata » est la subordonnée, introduite par la conjonction « lorsque ». La principale n'est pas forcément en premier dans la phrase !",
      hint: "La principale est celle qui pourrait presque vivre seule, sans mot subordonnant devant elle.",
    },
    {
      id: "f5phr-11",
      level: 3,
      type: "truefalse",
      question: "Une phrase complexe peut contenir à la fois une coordination et une subordination.",
      answer: true,
      explanation:
        "Vrai ! Exemple : « Je pense que tu as raison, mais je vérifierai. » On y trouve une subordonnée introduite par « que » et une coordination avec « mais ». Dès qu'il y a trois propositions ou plus, les liens se combinent souvent.",
    },
    {
      id: "f5phr-12",
      level: 3,
      type: "qcm",
      question: "Combien de verbes conjugués contient la phrase : « Espérant gagner, il s'entraînait chaque soir quand la salle fermait » ?",
      choices: ["1", "2", "3", "4"],
      answer: 1,
      explanation:
        "Seuls « s'entraînait » et « fermait » sont conjugués : 2 verbes, donc 2 propositions. « Espérant » est un participe présent et « gagner » un infinitif : aucun des deux ne compte. Ne te laisse pas piéger par les formes verbales non conjuguées !",
      hint: "Un participe présent en -ant n'est pas un verbe conjugué.",
    },
  ],
  videos: [
    {
      title: "Les propositions - Français - Collège - Les Bons Profs",
      youtubeId: "bnHoA9jDF30",
      channel: "Les Bons Profs",
    },
  ],
};
