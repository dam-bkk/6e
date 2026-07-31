import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-subordonnees",
  subject: "francais",
  grade: "4e",
  num: 1,
  title: "Les propositions subordonnées",
  domain: "nombres",
  domainLabel: "Grammaire",
  icon: "Split",
  teaser: "Relative, complétive, circonstancielle : apprendre à les reconnaître et à les analyser.",
  objectives: [
    "Je sais repérer une proposition subordonnée et son mot subordonnant",
    "Je sais reconnaître une subordonnée relative et retrouver son antécédent",
    "Je sais reconnaître une subordonnée complétive introduite par « que »",
    "Je sais identifier une subordonnée circonstancielle et la circonstance qu'elle exprime (temps, cause, conséquence, but)",
    "Je sais distinguer les trois familles de subordonnées, notamment les deux emplois de « que »",
  ],
  lesson: [
    {
      title: "Rappel : principale et subordonnée",
      paragraphs: [
        "Dans une phrase complexe, une proposition subordonnée dépend d'une autre proposition, la principale : elle ne peut pas exister seule.",
        "Elle est introduite par un mot subordonnant : un pronom relatif (qui, que, dont, où…) ou une conjonction de subordination (que, quand, parce que, si…).",
        "En 4e, tu apprends à classer les subordonnées en trois grandes familles : la relative, la complétive et la circonstancielle. Le classement dépend du mot qui les introduit et de leur fonction dans la phrase.",
      ],
      example: [
        "« Je range le livre que tu m'as offert. »",
        "Principale : « Je range le livre » / Subordonnée : « que tu m'as offert », introduite par le pronom relatif « que ».",
      ],
      tip: "Pour trouver la subordonnée, cherche d'abord le mot subordonnant : la subordonnée commence avec lui.",
    },
    {
      title: "La subordonnée relative",
      paragraphs: [
        "La subordonnée relative est introduite par un pronom relatif : qui, que, dont, où (et aussi lequel, auquel…).",
        "Elle complète un nom ou un pronom placé avant elle, appelé l'antécédent. Sa fonction est complément de l'antécédent.",
        "Le pronom relatif reprend l'antécédent et occupe une fonction dans la subordonnée : « qui » est sujet, « que » est COD, « dont » remplace un complément en « de », « où » indique le lieu ou le temps.",
      ],
      example: [
        "« Le chien qui aboie appartient au voisin. » → antécédent : « le chien » ; « qui » est sujet de « aboie ».",
        "« Voici la maison où je suis né. » → antécédent : « la maison » ; « où » exprime le lieu.",
      ],
      tip: "La relative se glisse souvent au milieu de la principale, juste après son antécédent : « Le film que j'ai vu était long. »",
    },
    {
      title: "La subordonnée complétive",
      paragraphs: [
        "La subordonnée complétive est introduite par la conjonction de subordination « que ». Elle complète un verbe, le plus souvent un verbe de parole, de pensée ou de sentiment : dire, penser, croire, savoir, vouloir, espérer…",
        "Sa fonction est COD du verbe de la principale : elle répond à la question « quoi ? » posée après le verbe.",
        "Contrairement à la relative, la complétive ne complète pas un nom : le mot « que » n'a pas d'antécédent, c'est une simple conjonction.",
      ],
      example: [
        "« Je pense que tu as raison. » → Je pense quoi ? → « que tu as raison » : complétive, COD de « pense ».",
        "« Elle sait que le train est en retard. » → complétive, COD de « sait ».",
      ],
      tip: "La complétive est indispensable : si tu la supprimes, la phrase devient bancale (« Je pense. » ne dit plus rien de complet).",
    },
    {
      title: "La subordonnée circonstancielle",
      paragraphs: [
        "La subordonnée circonstancielle exprime une circonstance de l'action : elle est complément circonstanciel de la principale.",
        "Le temps : quand, lorsque, dès que, avant que… « Quand la cloche sonne, nous sortons. »",
        "La cause : parce que, puisque, comme… « Il reste chez lui parce qu'il est malade. »",
        "La conséquence : si bien que, de sorte que, si… que… « Il a tant couru qu'il est épuisé. »",
        "Le but : pour que, afin que… « Je répète pour que tu comprennes. »",
      ],
      example: [
        "« Dès que le soleil se lève, les oiseaux chantent. » → circonstancielle de temps.",
        "« Elle chuchote afin que le bébé dorme. » → circonstancielle de but.",
      ],
      tip: "La circonstancielle est souvent mobile et supprimable : on peut la déplacer en tête de phrase ou l'enlever sans détruire la principale. Teste-le !",
    },
    {
      title: "Distinguer les trois familles : la méthode",
      paragraphs: [
        "Étape 1 : repère le mot subordonnant. Qui, dont, où → c'est une relative. Quand, parce que, pour que… → c'est une circonstancielle.",
        "Étape 2 : si le mot est « que », regarde ce qui précède. Un nom (ou un pronom) juste avant → « que » est un pronom relatif, la subordonnée est relative. Un verbe de parole, de pensée ou de volonté → « que » est une conjonction, la subordonnée est complétive.",
        "Étape 3 : vérifie avec la fonction. Complément de l'antécédent → relative. COD du verbe → complétive. Complément circonstanciel (déplaçable, supprimable) → circonstancielle.",
      ],
      example: [
        "« La chanson que tu fredonnes me plaît. » → « que » après le nom « chanson » → relative.",
        "« Je vois que tu progresses. » → « que » après le verbe « vois » → complétive.",
      ],
      tip: "Le piège du chapitre, c'est « que » : même mot, deux natures. Demande-toi toujours s'il a un antécédent (un nom qu'il reprend) ou non.",
    },
  ],
  exercises: [
    {
      id: "f4sub-1",
      level: 1,
      type: "qcm",
      question: "Dans « Le livre que tu m'as prêté est passionnant », la subordonnée « que tu m'as prêté » est…",
      choices: ["une relative", "une complétive", "une circonstancielle"],
      answer: 0,
      explanation:
        "« Que » suit le nom « livre », qui est son antécédent : c'est donc un pronom relatif, et la subordonnée est une relative, complément de l'antécédent « livre ». Le piège : « que » n'est une conjonction (complétive) que s'il suit un verbe, pas un nom.",
      hint: "Regarde le mot placé juste avant « que » : est-ce un nom ou un verbe ?",
    },
    {
      id: "f4sub-2",
      level: 1,
      type: "truefalse",
      question: "Une proposition subordonnée peut former une phrase complète toute seule.",
      answer: false,
      explanation:
        "Faux ! La règle : une subordonnée dépend toujours d'une principale ; seule, elle reste en suspens (« … parce qu'il pleuvait » n'est pas une phrase complète). C'est justement le test pour la reconnaître.",
      hint: "Essaie de dire « Quand la nuit tombe. » tout seul : la phrase est-elle finie ?",
    },
    {
      id: "f4sub-3",
      level: 1,
      type: "qcm",
      question: "Dans « J'ai retrouvé le chien qui s'était perdu », quel est l'antécédent du pronom relatif « qui » ?",
      choices: ["j'", "le chien", "perdu", "il n'y en a pas"],
      answer: 1,
      explanation:
        "L'antécédent est le nom que le pronom relatif reprend et complète : ici « le chien » (c'est bien le chien qui s'était perdu). La règle : l'antécédent se trouve juste avant le pronom relatif. Ne le confonds pas avec le sujet de la principale.",
      hint: "Qui s'était perdu ? Le mot qui répond à cette question est l'antécédent.",
    },
    {
      id: "f4sub-4",
      level: 1,
      type: "input",
      question: "Complète avec le pronom relatif qui convient : « La ville ... j'habite est très bruyante. »",
      answer: "où",
      accept: ["ou"],
      explanation:
        "« Où » est le pronom relatif qui exprime le lieu (ou le temps) : « la ville où j'habite ». Le piège : ne pas confondre avec « que », qui serait COD (« la ville que je visite »), ni avec « ou » sans accent, qui exprime un choix.",
      hint: "J'habite dans cette ville : le pronom doit exprimer le lieu.",
    },
    {
      id: "f4sub-5",
      level: 2,
      type: "qcm",
      question: "Dans « Je pense que tu réussiras », la subordonnée « que tu réussiras » est…",
      choices: ["une relative", "une complétive", "une circonstancielle de cause"],
      answer: 1,
      explanation:
        "« Que » suit le verbe de pensée « pense » et n'a aucun antécédent : c'est une conjonction de subordination. La subordonnée est une complétive, COD du verbe (je pense quoi ? → que tu réussiras). Le piège : le même mot « que » serait relatif après un nom.",
      hint: "Pose la question « quoi ? » après le verbe « pense ».",
    },
    {
      id: "f4sub-6",
      level: 2,
      type: "input",
      question: "Dans « Quand la nuit tombe, les chauves-souris sortent », relève le mot subordonnant.",
      answer: "quand",
      explanation:
        "« Quand » est une conjonction de subordination : elle introduit la circonstancielle de temps « Quand la nuit tombe ». La règle : la subordonnée commence toujours par son mot subordonnant. Attention à ne pas confondre avec « quant à », qui signifie « en ce qui concerne ».",
      hint: "C'est le tout premier mot de la phrase.",
    },
    {
      id: "f4sub-7",
      level: 2,
      type: "qcm",
      question: "Quelle circonstance exprime la subordonnée dans « Il révise chaque soir pour que ses résultats s'améliorent » ?",
      choices: ["le temps", "la cause", "la conséquence", "le but"],
      answer: 3,
      explanation:
        "« Pour que » (comme « afin que ») introduit le but : l'objectif visé, ce qu'on cherche à obtenir. Le piège : ne pas confondre avec la conséquence (« si bien que »), qui exprime un résultat déjà produit, alors que le but reste un objectif à atteindre.",
      hint: "Améliorer ses résultats, est-ce déjà arrivé ou est-ce l'objectif visé ?",
    },
    {
      id: "f4sub-8",
      level: 2,
      type: "truefalse",
      question: "Dans « Le film que je regarde est drôle », le mot « que » est une conjonction de subordination.",
      answer: false,
      explanation:
        "Faux ! « Que » suit le nom « film », son antécédent : c'est un pronom relatif, et la subordonnée est une relative. La règle : « que » n'est une conjonction (introduisant une complétive) qu'après un verbe de parole, de pensée ou de volonté, jamais après un nom.",
      hint: "« Que » a-t-il un antécédent, c'est-à-dire un nom qu'il reprend ?",
    },
    {
      id: "f4sub-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase contient une subordonnée relative ?",
      choices: [
        "Je crois que ce joueur gagnera.",
        "Le maillot que porte ce joueur est rouge.",
        "Il s'entraîne pour que son équipe gagne.",
        "Elle affirme que le match est reporté.",
      ],
      answer: 1,
      explanation:
        "Dans « Le maillot que porte ce joueur », « que » reprend le nom « maillot » : pronom relatif, donc relative. Dans les phrases 1 et 4, « que » suit un verbe (crois, affirme) : ce sont des complétives. La phrase 3 contient une circonstancielle de but (« pour que »). Le piège : les quatre phrases contiennent « que », seule la position après un nom fait la relative.",
      hint: "Cherche la phrase où « que » vient juste après un nom.",
    },
    {
      id: "f4sub-10",
      level: 3,
      type: "input",
      question: "« Elle sourit parce qu'elle a gagné la partie. » Quelle circonstance la subordonnée exprime-t-elle ? (un mot)",
      answer: "cause",
      accept: ["la cause"],
      explanation:
        "« Parce que » introduit toujours la cause : la raison pour laquelle elle sourit. La règle : cause = pourquoi ?, conséquence = avec quel résultat ? Le piège : cause et conséquence sont les deux faces du même lien ; c'est la conjonction qui te dit dans quel sens on le lit.",
      hint: "La subordonnée répond à la question « pourquoi sourit-elle ? ».",
    },
    {
      id: "f4sub-11",
      level: 3,
      type: "truefalse",
      question: "Une subordonnée circonstancielle peut généralement être déplacée ou supprimée sans rendre la phrase incorrecte.",
      answer: true,
      explanation:
        "Vrai ! C'est le test de la circonstancielle : « Quand il pleut, je lis » → « Je lis quand il pleut » → « Je lis ». La phrase reste correcte. Le piège : ce test échoue avec une complétive (« Je pense. » est bancal) ou une relative, qui sont indispensables à la construction.",
      hint: "Essaie avec « Je reste ici parce qu'il pleut » : déplace, puis supprime la subordonnée.",
    },
    {
      id: "f4sub-12",
      level: 3,
      type: "qcm",
      question: "Dans « Il est si fatigué qu'il s'endort à table », la subordonnée exprime…",
      choices: ["le but", "la conséquence", "la cause", "le temps"],
      answer: 1,
      explanation:
        "La construction « si… que » exprime la conséquence : le résultat produit par l'intensité de la fatigue. Le piège : ne confonds pas avec la cause (il s'endort parce qu'il est fatigué dit la même chose, mais dans l'autre sens) ni avec le but, qui exprimerait une intention.",
      hint: "Repère la construction en deux morceaux : « si… que ».",
    },
  ],
};
