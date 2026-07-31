import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-discours-rapporte",
  subject: "francais",
  grade: "4e",
  num: 2,
  title: "Le discours rapporté",
  domain: "nombres",
  domainLabel: "Grammaire",
  icon: "MessageSquareQuote",
  teaser: "Rapporter des paroles au discours direct ou indirect, et passer de l'un à l'autre.",
  objectives: [
    "Je sais reconnaître le discours direct et sa ponctuation (deux-points, guillemets, tirets)",
    "Je sais reconnaître le discours indirect et sa construction en subordonnée",
    "Je sais transformer les pronoms et les personnes en passant du direct à l'indirect",
    "Je sais appliquer la concordance des temps quand le verbe de parole est au passé",
    "Je sais transformer les marqueurs de temps et de lieu (demain → le lendemain…)",
  ],
  lesson: [
    {
      title: "Le discours direct",
      paragraphs: [
        "Au discours direct, les paroles sont rapportées telles qu'elles ont été prononcées, sans aucune modification.",
        "La ponctuation le signale : un verbe de parole suivi de deux-points, puis les paroles entre guillemets. Dans un dialogue, un tiret marque chaque changement de locuteur.",
        "Le verbe de parole peut aussi être placé en incise, au milieu ou à la fin des paroles : « Je suis prêt, dit-il. » Varie les verbes de parole : dire, déclarer, répondre, s'exclamer, murmurer, avouer…",
      ],
      example: [
        "Léa déclare : « Je viendrai demain avec mes affaires. »",
        "« Tu es en retard, murmura-t-elle, dépêche-toi. »",
      ],
      tip: "Le discours direct rend un récit vivant : on entend la voix du personnage. Repère-le au premier coup d'œil grâce aux guillemets et aux deux-points.",
    },
    {
      title: "Le discours indirect",
      paragraphs: [
        "Au discours indirect, les paroles sont intégrées au récit dans une proposition subordonnée, le plus souvent une complétive introduite par « que ».",
        "Les guillemets, les deux-points et les tirets disparaissent, ainsi que les marques d'oralité (interjections, points d'exclamation).",
        "Une question directe devient une interrogative indirecte : « Est-ce que tu viens ? » → « Elle demande si je viens. » ; « Que fais-tu ? » → « Elle demande ce que je fais. »",
      ],
      example: [
        "Discours direct : Léa déclare : « Je suis fatiguée. »",
        "Discours indirect : Léa déclare qu'elle est fatiguée.",
      ],
      tip: "Au discours indirect, plus jamais de point d'interrogation à la fin : « Elle demande si je viens. » se termine par un point.",
    },
    {
      title: "Transformer les pronoms et les personnes",
      paragraphs: [
        "En passant au discours indirect, c'est le narrateur qui parle : les pronoms de 1re et de 2e personne (je, tu, nous, vous) deviennent des pronoms de 3e personne (il, elle, ils, elles) quand ils désignent le personnage.",
        "Les déterminants possessifs changent aussi : mon, ma, mes deviennent son, sa, ses ; notre devient leur.",
        "Attention : il faut suivre le sens. « Je » désigne celui qui parle ; au discours indirect, on le remplace par le pronom qui désigne cette même personne vue de l'extérieur.",
      ],
      example: [
        "« Je range mes affaires », dit Paul. → Paul dit qu'il range ses affaires.",
        "« Nous aimons notre quartier », expliquent-ils. → Ils expliquent qu'ils aiment leur quartier.",
      ],
      tip: "Relis toujours la phrase transformée en te demandant : qui fait quoi ? Si le sens a changé, un pronom est mal transformé.",
    },
    {
      title: "Transformer les temps : la concordance",
      paragraphs: [
        "Si le verbe de parole est au présent ou au futur, les temps des paroles ne changent pas : « Il dit : “Je pars.” » → « Il dit qu'il part. »",
        "Si le verbe de parole est au passé, les temps reculent : c'est la concordance des temps.",
        "Présent → imparfait : « Je suis prêt » → il était prêt. Passé composé → plus-que-parfait : « J'ai fini » → il avait fini. Futur → conditionnel présent : « Je viendrai » → il viendrait.",
      ],
      example: [
        "Il a dit : « Je suis malade. » → Il a dit qu'il était malade.",
        "Elle a promis : « Je t'aiderai. » → Elle a promis qu'elle m'aiderait.",
      ],
      tip: "Retiens le trio : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel. Et vérifie d'abord le temps du verbe de parole !",
    },
    {
      title: "Transformer les marqueurs de temps et de lieu",
      paragraphs: [
        "Quand le verbe de parole est au passé, les mots qui situent l'action par rapport au moment où l'on parle changent aussi.",
        "Aujourd'hui → ce jour-là ; demain → le lendemain ; hier → la veille ; en ce moment → à ce moment-là ; ici → là.",
        "Ces transformations sont logiques : le « demain » du personnage n'est plus le « demain » du narrateur qui raconte bien plus tard.",
      ],
      example: [
        "Il a annoncé : « Je pars demain. » → Il a annoncé qu'il partait le lendemain.",
        "Elle a avoué : « J'ai menti hier. » → Elle a avoué qu'elle avait menti la veille.",
      ],
      tip: "Le piège classique : si le verbe de parole est au présent, on ne change rien ! « Il annonce qu'il part demain » est correct.",
    },
  ],
  exercises: [
    {
      id: "f4dis-1",
      level: 1,
      type: "qcm",
      question: "Quel signe de ponctuation encadre les paroles au discours direct ?",
      choices: ["les parenthèses", "les guillemets", "les crochets", "la virgule"],
      answer: 1,
      explanation:
        "Au discours direct, les paroles sont encadrées par des guillemets, après un verbe de parole suivi de deux-points. La règle complète : deux-points + guillemets, et un tiret à chaque changement de locuteur dans un dialogue.",
      hint: "Ce sont les petits chevrons « … » autour des paroles.",
    },
    {
      id: "f4dis-2",
      level: 1,
      type: "truefalse",
      question: "Au discours indirect, on conserve les guillemets autour des paroles rapportées.",
      answer: false,
      explanation:
        "Faux ! Au discours indirect, les paroles sont intégrées au récit dans une subordonnée : guillemets, deux-points et tirets disparaissent. Le piège : garder la ponctuation du direct est l'erreur la plus fréquente dans les copies.",
      hint: "Au discours indirect, les paroles deviennent une subordonnée introduite par « que ».",
    },
    {
      id: "f4dis-3",
      level: 1,
      type: "qcm",
      question: "Quel verbe est un verbe de parole ?",
      choices: ["manger", "déclarer", "courir", "dormir"],
      answer: 1,
      explanation:
        "« Déclarer » introduit des paroles rapportées, comme dire, répondre, s'exclamer, murmurer ou avouer. La règle : le verbe de parole précède les deux-points au discours direct et la subordonnée au discours indirect.",
      hint: "Lequel de ces verbes peut être suivi de deux-points et de guillemets ?",
    },
    {
      id: "f4dis-4",
      level: 1,
      type: "input",
      question: "Transpose au discours indirect en complétant : « Il affirme : “Je suis prêt.” » → « Il affirme qu'... est prêt. »",
      answer: "il",
      explanation:
        "« Je » désigne celui qui parle ; vu par le narrateur, ce personnage devient « il ». La règle : au discours indirect, les pronoms de 1re et 2e personne passent à la 3e personne. Comme le verbe de parole est au présent, « est » ne change pas.",
      hint: "Qui est prêt ? C'est le personnage dont on parle, donc 3e personne.",
    },
    {
      id: "f4dis-5",
      level: 2,
      type: "qcm",
      question: "Quelle est la transposition correcte de : « Paul a dit : “Je viendrai demain.” » ?",
      choices: [
        "Paul a dit qu'il viendra demain.",
        "Paul a dit qu'il viendrait le lendemain.",
        "Paul a dit que je viendrais demain.",
        "Paul a dit qu'il venait la veille.",
      ],
      answer: 1,
      explanation:
        "Le verbe de parole « a dit » est au passé : le futur « viendrai » devient le conditionnel « viendrait », et « demain » devient « le lendemain ». Le piège : il faut faire les trois transformations à la fois — pronom (je → il), temps (futur → conditionnel) et marqueur (demain → le lendemain).",
      hint: "Vérifie trois choses : le pronom, le temps du verbe et le mot « demain ».",
    },
    {
      id: "f4dis-6",
      level: 2,
      type: "input",
      question: "Quand le verbe de parole est au passé, le présent des paroles devient quel temps ? (ex. : « Je suis malade » → il était malade)",
      answer: "imparfait",
      accept: ["l'imparfait", "l imparfait"],
      explanation:
        "C'est la concordance des temps : verbe de parole au passé → le présent recule à l'imparfait. Retiens le trio complet : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent. Le piège : si le verbe de parole est au présent, rien ne change.",
      hint: "« Il a dit qu'il était malade » : quel est le temps de « était » ?",
    },
    {
      id: "f4dis-7",
      level: 2,
      type: "truefalse",
      question: "« Elle a demandé : “Est-ce que tu viens ?” » devient au discours indirect : « Elle a demandé si je venais. »",
      answer: true,
      explanation:
        "Vrai ! Une question totale (réponse oui/non) est introduite par « si » au discours indirect, et le présent « viens » recule à l'imparfait « venais » car le verbe de parole est au passé. Le piège : le point d'interrogation disparaît, la phrase se termine par un point.",
      hint: "« Est-ce que » disparaît toujours au discours indirect : quel petit mot le remplace ?",
    },
    {
      id: "f4dis-8",
      level: 2,
      type: "qcm",
      question: "Avec un verbe de parole au passé, le mot « hier » devient…",
      choices: ["le lendemain", "la veille", "ce jour-là", "il reste « hier »"],
      answer: 1,
      explanation:
        "« Hier » (la journée d'avant pour celui qui parle) devient « la veille » au discours indirect au passé. La série à connaître : hier → la veille, aujourd'hui → ce jour-là, demain → le lendemain. Le piège : ne pas inverser la veille et le lendemain.",
      hint: "« Hier » désigne le jour d'avant : cherche l'expression qui dit la même chose dans un récit.",
    },
    {
      id: "f4dis-9",
      level: 3,
      type: "qcm",
      question: "Quelle est la transposition correcte de : « Il a avoué : “J'ai menti.” » ?",
      choices: [
        "Il a avoué qu'il a menti.",
        "Il a avoué qu'il mentait.",
        "Il a avoué qu'il avait menti.",
        "Il a avoué que j'avais menti.",
      ],
      answer: 2,
      explanation:
        "Verbe de parole au passé : le passé composé « ai menti » recule au plus-que-parfait « avait menti », et « je » devient « il ». Le piège : la réponse 2 (imparfait) correspondrait à un présent dans les paroles (« Je mens »), pas à un passé composé.",
      hint: "Passé composé dans les paroles + verbe de parole au passé → quel temps encore plus ancien ?",
    },
    {
      id: "f4dis-10",
      level: 3,
      type: "input",
      question: "Complète : « Elle annonce : “Je pars demain.” » → « Elle annonce qu'elle part ... »",
      answer: "demain",
      explanation:
        "Le verbe de parole « annonce » est au présent : ni les temps ni les marqueurs ne changent, « demain » reste « demain ». C'est le piège du chapitre : « le lendemain » ne s'emploie que si le verbe de parole est au passé (« Elle a annoncé qu'elle partait le lendemain »).",
      hint: "Regarde d'abord le temps du verbe « annonce » avant de transformer quoi que ce soit.",
    },
    {
      id: "f4dis-11",
      level: 3,
      type: "truefalse",
      question: "Quand le verbe de parole est au passé, le futur des paroles devient le conditionnel présent.",
      answer: true,
      explanation:
        "Vrai ! « Je viendrai » → « il viendrait » : c'est la concordance des temps. Le conditionnel joue ici le rôle de futur dans le passé. Le piège : ne pas confondre avec le futur simple, qui resterait tel quel seulement si le verbe de parole était au présent.",
      hint: "« Elle a promis qu'elle m'aiderait » : quel est le mode de « aiderait » ?",
    },
    {
      id: "f4dis-12",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correctement écrite au discours indirect ?",
      choices: [
        "Il a expliqué : qu'il était en retard.",
        "Il a expliqué qu'il était en retard.",
        "Il a expliqué « qu'il était en retard ».",
        "Il a expliqué qu'il est en retard hier.",
      ],
      answer: 1,
      explanation:
        "Au discours indirect, la subordonnée suit directement le verbe de parole : ni deux-points (phrase 1), ni guillemets (phrase 3). La phrase 4 mélange un présent avec « hier », ce qui est incohérent après un verbe au passé. La règle : discours indirect = aucune ponctuation du direct + concordance des temps.",
      hint: "Élimine d'abord les phrases qui gardent une ponctuation du discours direct.",
    },
  ],
};
