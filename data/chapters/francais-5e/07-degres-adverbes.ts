import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-degres-adverbes",
  subject: "francais",
  grade: "5e",
  num: 7,
  title: "Degrés de l'adjectif et adverbes",
  domain: "donnees",
  domainLabel: "Grammaire",
  icon: "TrendingUp",
  teaser: "Comparer, exagérer, nuancer : les degrés et les adverbes en -ment.",
  objectives: [
    "Je sais employer le comparatif : plus, aussi, moins… que",
    "Je sais employer le superlatif : le plus, le moins",
    "Je connais les formes irrégulières meilleur et pire",
    "Je sais former les adverbes en -ment, y compris -amment et -emment",
    "Je sais reconnaître le rôle d'un adverbe dans la phrase",
  ],
  lesson: [
    {
      title: "Le comparatif : comparer deux éléments",
      paragraphs: [
        "Le comparatif compare deux éléments à l'aide d'un adjectif. Il a trois degrés : la supériorité (plus… que), l'égalité (aussi… que) et l'infériorité (moins… que).",
        "L'adjectif s'accorde normalement avec le nom qu'il qualifie : « Ces montagnes sont plus hautes que les collines. »",
      ],
      example: [
        "« Le guépard est plus rapide que le lion. » (supériorité)",
        "« Léo est aussi grand que son frère. » (égalité)",
        "« Ce film est moins long que le précédent. » (infériorité)",
      ],
      tip: "Un comparatif se repère à sa structure en deux morceaux : l'adverbe (plus/aussi/moins) avant l'adjectif, et « que » qui introduit le deuxième élément comparé.",
    },
    {
      title: "Le superlatif : le champion du groupe",
      paragraphs: [
        "Le superlatif situe un élément au degré extrême dans un groupe : le plus… / le moins… On précise souvent le groupe avec « de » : « le plus rapide des animaux ».",
        "L'article s'accorde avec le nom : LE plus haut sommet, LA plus haute tour, LES plus hauts immeubles.",
      ],
      example: [
        "« Le Nil est l'un des plus longs fleuves du monde. »",
        "« C'est la matière la moins difficile pour moi. »",
      ],
      tip: "Comparatif = duel entre deux éléments (avec « que »). Superlatif = podium dans un groupe (avec « le/la/les » devant « plus » ou « moins »).",
    },
    {
      title: "Meilleur et pire : les irréguliers",
      paragraphs: [
        "« Bon » a un comparatif de supériorité irrégulier : meilleur. On ne dit JAMAIS « plus bon ». Au superlatif : le meilleur, la meilleure, les meilleurs.",
        "« Mauvais » a deux comparatifs possibles : « plus mauvais » (correct) ou « pire » (plus fort, souvent pour les choses abstraites). Superlatif : le pire ou le plus mauvais.",
        "Attention : « moins bon » et « aussi bon » restent réguliers. Seule la supériorité de « bon » est irrégulière.",
      ],
      example: [
        "« Cette tarte est meilleure que la mienne. » (jamais « plus bonne »)",
        "« Sa situation est pire qu'avant. »",
        "« Ce dessert est moins bon que l'autre. » (régulier !)",
      ],
      tip: "« Plus bon » n'existe pas, mais « moins bon » et « aussi bon » sont parfaitement corrects. L'irrégularité ne touche que « plus + bon » → meilleur.",
    },
    {
      title: "Former les adverbes en -ment",
      paragraphs: [
        "Règle générale : on part du féminin de l'adjectif et on ajoute -ment : lent → lente → lentement ; doux → douce → doucement.",
        "Si l'adjectif masculin se termine par une voyelle, on ajoute -ment directement : vrai → vraiment, poli → poliment, absolu → absolument.",
        "Cas particuliers : les adjectifs en -ant donnent -amment (brillant → brillamment) et ceux en -ent donnent -emment (prudent → prudemment). Les deux terminaisons se prononcent [amɑ̃] !",
      ],
      example: [
        "heureux → heureuse → heureusement.",
        "courant → couramment (-ant → -amment).",
        "violent → violemment (-ent → -emment).",
      ],
      tip: "Pour choisir entre -amment et -emment, regarde l'adjectif de départ : constAnt → constAmment, évidEnt → évidEmment. La voyelle de l'adjectif se retrouve dans l'adverbe.",
    },
    {
      title: "La place et le rôle de l'adverbe",
      paragraphs: [
        "L'adverbe est un mot invariable qui modifie le sens d'un verbe (il court vite), d'un adjectif (très grand) ou d'un autre adverbe (trop lentement).",
        "Les adverbes précisent le lieu (ici, là-bas), le temps (hier, bientôt), la manière (doucement, bien), la quantité (beaucoup, trop) ou l'intensité (très, si).",
        "Comme il est invariable, l'adverbe ne prend jamais la marque du pluriel : « des gens très aimables » — « très » ne change pas.",
      ],
      example: [
        "« Elle parle doucement. » (modifie le verbe)",
        "« Un exercice très difficile. » (modifie l'adjectif)",
        "« Ils travaillent trop rapidement. » (modifie un adverbe)",
      ],
      tip: "Adverbe = invariable, toujours. Si le mot s'accorde, ce n'est pas un adverbe. « Vite » est un adverbe (jamais « vites » !).",
    },
  ],
  exercises: [
    {
      id: "f5deg-1",
      level: 1,
      type: "qcm",
      question: "« Le TGV est ... rapide ... le bus. » Quel comparatif de supériorité convient ?",
      choices: ["aussi … que", "plus … que", "moins … que", "le plus … de"],
      answer: 1,
      explanation:
        "La supériorité s'exprime avec « plus… que » : le TGV est plus rapide que le bus. « Aussi… que » marque l'égalité, « moins… que » l'infériorité, et « le plus… de » est un superlatif.",
      hint: "Le TGV est-il au-dessus, à égalité ou en dessous du bus ?",
    },
    {
      id: "f5deg-2",
      level: 1,
      type: "input",
      question: "Complète avec le comparatif de supériorité de « bon » : « Ce chocolat est ... que l'autre. »",
      answer: "meilleur",
      explanation:
        "« Bon » a un comparatif de supériorité irrégulier : meilleur. On ne dit jamais « plus bon ». C'est LE piège du chapitre : plus + bon → meilleur, automatiquement.",
      hint: "« Plus bon » n'existe pas…",
    },
    {
      id: "f5deg-3",
      level: 1,
      type: "qcm",
      question: "Quel est l'adverbe formé sur l'adjectif « lent » ?",
      choices: ["lentment", "lentement", "lamment", "lentemment"],
      answer: 1,
      explanation:
        "Règle générale : féminin de l'adjectif + -ment : lent → lente → lentement. Attention, « lent » se termine par -ent, mais il fait exception à la règle -ent → -emment : son adverbe se forme sur le féminin, comme « présent → présentement ». À connaître par cœur.",
      hint: "Passe par le féminin : lente + …",
    },
    {
      id: "f5deg-4",
      level: 1,
      type: "truefalse",
      question: "Dans « Elle chante très bien », le mot « très » est invariable.",
      answer: true,
      explanation:
        "Vrai ! « Très » est un adverbe d'intensité, et tous les adverbes sont invariables. Même dans « des chanteuses très douées », « très » ne prend jamais de s.",
    },
    {
      id: "f5deg-5",
      level: 2,
      type: "qcm",
      question: "« C'est la ... haute tour de la ville. » Quelle construction est un superlatif correct ?",
      choices: ["plus haute que", "aussi haute", "plus", "la plus haute … de"],
      answer: 3,
      explanation:
        "Le superlatif se construit avec l'article + plus/moins : « la plus haute tour de la ville ». Le groupe de comparaison s'introduit avec « de » (de la ville), pas avec « que » — « que » appartient au comparatif.",
      hint: "Superlatif = article (le/la/les) + plus/moins, et le groupe avec « de ».",
    },
    {
      id: "f5deg-6",
      level: 2,
      type: "input",
      question: "Forme l'adverbe à partir de l'adjectif « prudent » : « Il conduit ... »",
      answer: "prudemment",
      explanation:
        "Les adjectifs en -ent forment leur adverbe en -emment : prudent → prudemment. Ça se prononce [amɑ̃] mais ça s'écrit avec un e : la voyelle de l'adjectif (prudEnt) se retrouve dans l'adverbe (prudEmment).",
      hint: "Adjectif en -ent → adverbe en -e…ment (deux m).",
    },
    {
      id: "f5deg-7",
      level: 2,
      type: "input",
      question: "Forme l'adverbe à partir de l'adjectif « courant » : « Elle parle ... trois langues. »",
      answer: "couramment",
      explanation:
        "Les adjectifs en -ant forment leur adverbe en -amment : courant → couramment. Retiens le duo : -ant → -amment (avec a), -ent → -emment (avec e). Les deux se prononcent pareil, seule l'orthographe change.",
      hint: "Adjectif en -ant → adverbe en -a…ment (deux m).",
    },
    {
      id: "f5deg-8",
      level: 2,
      type: "truefalse",
      question: "La phrase « Cette solution est plus pire que l'autre » est correcte.",
      answer: false,
      explanation:
        "Faux ! « Pire » est déjà un comparatif : il signifie « plus mauvais ». Dire « plus pire », c'est dire « plus plus mauvais » — un double comparatif interdit. On écrit : « Cette solution est pire que l'autre. »",
      hint: "« Pire » contient déjà l'idée de « plus »…",
    },
    {
      id: "f5deg-9",
      level: 3,
      type: "qcm",
      question: "Dans « Ce problème est étonnamment difficile », que modifie l'adverbe « étonnamment » ?",
      choices: ["le verbe « est »", "le nom « problème »", "l'adjectif « difficile »", "toute la phrase"],
      answer: 2,
      explanation:
        "« Étonnamment » précise l'intensité de l'adjectif « difficile » : difficile à quel point ? Étonnamment. Un adverbe peut modifier un verbe, un adjectif ou un autre adverbe — ici, c'est l'adjectif. Au passage : étonnant → étonnamment (-ant → -amment).",
      hint: "Pose la question : « difficile comment ? »",
    },
    {
      id: "f5deg-10",
      level: 3,
      type: "input",
      question: "Forme l'adverbe à partir de l'adjectif « évident ».",
      answer: "évidemment",
      accept: ["evidemment"],
      explanation:
        "Évident se termine par -ent → adverbe en -emment : évidemment. Piège de prononciation : on entend « évidamment », mais on écrit avec un e, hérité de l'adjectif évidEnt.",
      hint: "On l'entend avec un « a », mais on l'écrit avec la voyelle de l'adjectif.",
    },
    {
      id: "f5deg-11",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correcte ?",
      choices: [
        "Cette tarte est plus bonne que la mienne.",
        "Cette tarte est meilleure que la mienne.",
        "Cette tarte est plus meilleure que la mienne.",
        "Cette tarte est la meilleur de toutes.",
      ],
      answer: 1,
      explanation:
        "« Plus bon » n'existe pas et « plus meilleure » est un double comparatif interdit. La forme correcte est « meilleure que », accordée au féminin. La dernière option oublie l'accord : « la meilleurE de toutes ».",
      hint: "Élimine les doubles comparatifs et vérifie les accords.",
    },
    {
      id: "f5deg-12",
      level: 3,
      type: "input",
      question: "« Marc court aussi vite que Paul, mais Sami court plus vite que les deux. » Qui est LE plus rapide des trois ? (un prénom)",
      answer: "sami",
      explanation:
        "Marc et Paul sont à égalité (« aussi vite que »), et Sami les dépasse tous les deux (« plus vite que les deux »). Le superlatif « le plus rapide » désigne donc Sami. Les degrés de l'adjectif servent exactement à cela : classer avec précision.",
      hint: "Traduis chaque comparatif : qui est à égalité ? qui est devant ?",
    },
  ],
  videos: [
    {
      title: "Les degrés de l'adjectif - 5ème, 4ème, 3ème - Cours, Exercices, Evaluations",
      youtubeId: "PzT382jcD-M",
      channel: "Pass Education FR",
    },
  ],
};
