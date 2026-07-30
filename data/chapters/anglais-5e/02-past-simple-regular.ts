import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-past-simple-regular",
  subject: "anglais",
  grade: "5e",
  num: 2,
  title: "Le prétérit des verbes réguliers",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "Rewind",
  teaser: "Ajouter -ed et raconter le passé : le temps star de la 5e.",
  objectives: [
    "Je sais former le prétérit des verbes réguliers en ajoutant -ed",
    "Je connais les règles d'orthographe : stop → stopped, study → studied",
    "Je sais prononcer la terminaison -ed : /t/, /d/ ou /id/",
    "Je sais construire la négation avec didn't + base verbale",
    "Je sais poser des questions au prétérit avec did",
  ],
  lesson: [
    {
      title: "La formation : base verbale + -ed",
      figure: "en5-ed-machine",
      paragraphs: [
        "Le prétérit (past simple) est LE temps du passé en anglais : il sert à raconter des actions terminées. Pour les verbes réguliers, la recette est simple : base verbale + -ed, et c'est la même forme pour toutes les personnes !",
        "Play → played, watch → watched, work → worked. Pas de -s à la 3e personne, pas d'exception selon le sujet : I played, she played, they played.",
        "Le prétérit s'utilise avec les expressions de temps du passé que tu connais : yesterday, last week, two days ago, in 2020...",
      ],
      example: [
        "I watched a film last night. → J'ai regardé un film hier soir.",
        "She played tennis yesterday. → Elle a joué au tennis hier.",
        "We visited our grandparents last Sunday. → Nous avons rendu visite à nos grands-parents dimanche dernier.",
      ],
      tip: "Contrairement au présent simple, le prétérit ne prend JAMAIS de -s à la 3e personne : she plays (présent) mais she played (prétérit), pas « she playeds ».",
    },
    {
      title: "Les règles d'orthographe",
      paragraphs: [
        "Trois cas particuliers à connaître. Cas 1 : le verbe se termine déjà par -e → on ajoute juste -d : like → liked, dance → danced, live → lived.",
        "Cas 2 : le verbe se termine par consonne + y → le y devient i : study → studied, try → tried, carry → carried. Mais si c'est voyelle + y, on garde le y : play → played, stay → stayed.",
        "Cas 3 : verbe court en consonne-voyelle-consonne → on double la consonne finale : stop → stopped, plan → planned, travel → travelled (en anglais britannique).",
      ],
      example: [
        "like → liked (le -e était déjà là)",
        "study → studied (consonne + y → i)",
        "play → played (voyelle + y → on garde le y)",
        "stop → stopped (on double le p)",
      ],
      tip: "Pour le doublement, regarde les trois dernières lettres : consonne-voyelle-consonne comme dans stop (t-o-p) → on double. Deux voyelles comme dans rain → on ne double pas : rained.",
    },
    {
      title: "La prononciation de -ed",
      paragraphs: [
        "La terminaison -ed ne se prononce pas toujours pareil ! Il y a trois prononciations possibles : /t/, /d/ ou /id/.",
        "Règle d'or : -ed se prononce /id/ (comme une syllabe en plus) UNIQUEMENT quand le verbe se termine par le son /t/ ou /d/ : wanted, needed, decided, visited.",
        "Dans tous les autres cas, -ed ne rajoute PAS de syllabe : il se prononce /t/ après un son sourd (watched, stopped, liked) ou /d/ après un son sonore (played, lived, listened). L'essentiel en 5e : ne pas prononcer « playeud » avec une syllabe en trop !",
      ],
      example: [
        "wanted → 2 syllabes : want-ed /id/",
        "played → 1 syllabe : /pleid/ (pas « play-eud »)",
        "watched → 1 syllabe : /wotcht/",
      ],
      tip: "Compte les syllabes : played, watched, liked se prononcent en UNE syllabe. Seuls les verbes en -t ou -d finaux gagnent une syllabe : wanted, needed. C'est l'erreur de prononciation n°1 des francophones.",
    },
    {
      title: "La négation : didn't + base verbale",
      paragraphs: [
        "Pour dire qu'une action n'a pas eu lieu, on utilise l'auxiliaire did (le passé de do) + not, presque toujours contracté en didn't, suivi de la base verbale SANS -ed.",
        "C'est la règle capitale : did porte déjà la marque du passé, donc le verbe revient à sa forme de base. I didn't watch (et surtout pas « I didn't watched »).",
        "Comme au présent avec don't/doesn't, la structure est : sujet + didn't + base verbale + complément.",
      ],
      example: [
        "I didn't watch TV yesterday. → Je n'ai pas regardé la télé hier.",
        "She didn't play football last week. → Elle n'a pas joué au foot la semaine dernière.",
        "They didn't visit the museum. → Ils n'ont pas visité le musée.",
      ],
      tip: "Un seul passé par phrase ! Si tu écris didn't, le verbe redevient tout nu : didn't watch, didn't play. « Didn't watched » = deux marques de passé = erreur classique.",
    },
    {
      title: "Les questions : Did... + base verbale ?",
      paragraphs: [
        "Pour poser une question au prétérit, on place Did devant le sujet, et le verbe reste à la base verbale : Did you watch the film?",
        "Avec un mot interrogatif, il passe devant did : What did you do? Where did she go? La structure est : mot interrogatif + did + sujet + base verbale.",
        "Les réponses courtes reprennent did : Yes, I did. / No, I didn't. On ne répète pas le verbe.",
      ],
      example: [
        "Did you finish your homework? – Yes, I did. → As-tu fini tes devoirs ? – Oui.",
        "Did they like the film? – No, they didn't. → Ont-ils aimé le film ? – Non.",
        "What did you watch last night? → Qu'est-ce que tu as regardé hier soir ?",
      ],
      tip: "Did est le même pour toutes les personnes : Did I...? Did she...? Did they...? Pas de « dids » ni de « does » au passé. Simple, non ?",
    },
  ],
  exercises: [
    {
      id: "e5reg-1",
      level: 1,
      type: "qcm",
      question: "Quel est le prétérit du verbe play ?",
      choices: ["plaied", "played", "playd", "plays"],
      answer: 1,
      explanation:
        "Play se termine par voyelle + y (a + y), donc on garde le y et on ajoute -ed : played. Le y ne devient i qu'après une consonne (study → studied).",
      hint: "Regarde la lettre juste avant le y : voyelle ou consonne ?",
    },
    {
      id: "e5reg-2",
      level: 1,
      type: "qcm",
      question: "Complète : « She ___ a film last night. »",
      choices: ["watchs", "watch", "watched", "watches"],
      answer: 2,
      explanation:
        "Last night indique le passé → prétérit : watched. Attention, watches est le présent simple à la 3e personne : ici le contexte passé impose le -ed.",
      hint: "Last night = hier soir : quel temps faut-il ?",
    },
    {
      id: "e5reg-3",
      level: 1,
      type: "input",
      question: "Écris le prétérit du verbe like.",
      answer: "liked",
      explanation:
        "Like se termine déjà par -e, donc on ajoute simplement -d : liked. Pas de double e : « likeed » n'existe pas.",
      hint: "Le verbe finit déjà par -e...",
    },
    {
      id: "e5reg-4",
      level: 1,
      type: "truefalse",
      question: "Au prétérit, le verbe prend un -s à la 3e personne du singulier : « she playeds ».",
      answer: false,
      explanation:
        "Faux ! Le -s de la 3e personne n'existe qu'au présent simple (she plays). Au prétérit, la forme est identique pour tout le monde : I played, she played, they played.",
    },
    {
      id: "e5reg-5",
      level: 2,
      type: "input",
      question: "Écris le prétérit du verbe stop.",
      answer: "stopped",
      explanation:
        "Stop est un verbe court qui se termine par consonne-voyelle-consonne (t-o-p) : on double la consonne finale avant -ed → stopped. Avec un seul p, « stoped » est une faute d'orthographe.",
      hint: "Consonne-voyelle-consonne à la fin : que fait-on avant d'ajouter -ed ?",
    },
    {
      id: "e5reg-6",
      level: 2,
      type: "input",
      question: "Écris le prétérit du verbe study.",
      answer: "studied",
      explanation:
        "Study se termine par consonne + y (d + y) : le y devient i, puis on ajoute -ed → studied. Compare avec play → played, où le y suit une voyelle et ne change pas.",
      hint: "Consonne + y : le y se transforme.",
    },
    {
      id: "e5reg-7",
      level: 2,
      type: "qcm",
      question: "Dans quel verbe la terminaison -ed se prononce-t-elle /id/, avec une syllabe en plus ?",
      choices: ["played", "watched", "wanted", "liked"],
      answer: 2,
      explanation:
        "La prononciation /id/ (syllabe supplémentaire) n'apparaît que si le verbe se termine par le son /t/ ou /d/ : wanted → want-ed, 2 syllabes. Played, watched et liked se prononcent en une seule syllabe.",
      hint: "Cherche le verbe dont la base se termine par le son /t/ ou /d/.",
    },
    {
      id: "e5reg-8",
      level: 2,
      type: "qcm",
      question: "Choisis la phrase négative correcte :",
      choices: [
        "I didn't watched the match.",
        "I didn't watch the match.",
        "I don't watched the match.",
        "I not watched the match.",
      ],
      answer: 1,
      explanation:
        "Après didn't, le verbe revient à sa base verbale sans -ed : I didn't watch. C'est didn't qui porte le passé ; « didn't watched » mettrait deux marques de passé dans la même phrase, c'est l'erreur classique.",
      hint: "Une seule marque de passé par phrase : qui la porte, did ou le verbe ?",
    },
    {
      id: "e5reg-9",
      level: 3,
      type: "input",
      question: "Mets à la forme négative contractée : « They visited the castle. » → « They ___ the castle. » (deux mots)",
      answer: "didn't visit",
      accept: ["did not visit"],
      explanation:
        "On introduit l'auxiliaire didn't et le verbe perd son -ed : They didn't visit the castle. Règle : didn't + base verbale, toujours.",
      hint: "Didn't + le verbe à sa forme de base.",
    },
    {
      id: "e5reg-10",
      level: 3,
      type: "input",
      question: "Remets la question dans l'ordre : « you / did / what / watch / last night / ? » (sans point d'interrogation)",
      answer: "what did you watch last night",
      explanation:
        "Structure de la question au prétérit : mot interrogatif + did + sujet + base verbale + complément → What did you watch last night? Le verbe watch reste à la base : c'est did qui exprime le passé.",
      hint: "Mot interrogatif d'abord, puis did, puis le sujet.",
    },
    {
      id: "e5reg-11",
      level: 3,
      type: "truefalse",
      question: "Dans la question « Did she liked the film? », la forme liked est correcte.",
      answer: false,
      explanation:
        "Faux ! Après did, le verbe reste à la base verbale : Did she like the film? Comme pour la négation, did porte déjà la marque du passé ; le verbe ne doit pas la porter une deuxième fois.",
    },
    {
      id: "e5reg-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Nous n'avons pas joué au tennis hier. » (utilise la forme contractée et yesterday)",
      answer: "we didn't play tennis yesterday",
      accept: ["we did not play tennis yesterday"],
      explanation:
        "We didn't play tennis yesterday. Trois points à vérifier : didn't + base verbale (play, sans -ed), pas d'article devant tennis (play tennis, sans « the » ni « at the »), et yesterday en fin de phrase.",
      hint: "En anglais, on dit play tennis, sans article.",
    },
  ],
  videos: [
    {
      title: "Le preterit simple - Anglais - Sixième - Les Bons Profs",
      youtubeId: "NwDkEWFhILk",
      channel: "Les Bons Profs",
    },
  ],
};
