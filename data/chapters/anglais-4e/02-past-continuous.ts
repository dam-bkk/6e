import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en4-past-continuous",
  subject: "anglais",
  grade: "4e",
  num: 2,
  title: "Prétérit simple ou continu ?",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "Waves",
  teaser: "I was reading when he arrived : la toile de fond et l'action qui surgit.",
  objectives: [
    "Je sais former le prétérit continu : was/were + verbe en -ing",
    "Je sais décrire une action en cours dans le passé",
    "Je sais combiner toile de fond (continu) et action ponctuelle (simple)",
    "Je sais utiliser when et while correctement",
    "Je sais poser des questions et faire des négations au prétérit continu",
  ],
  lesson: [
    {
      title: "Former le prétérit continu (past continuous)",
      paragraphs: [
        "Le prétérit continu se construit avec was ou were suivi du verbe en -ing : I was reading, they were playing. Tu connais déjà was/were (le passé de be) : il ne reste qu'à ajouter le -ing.",
        "Was s'utilise avec I, he, she, it ; were avec you, we, they — exactement comme pour le verbe be seul.",
        "Négation : was not / were not, contractés en wasn't / weren't → She wasn't listening. Question : on inverse was/were et le sujet → Were you sleeping?",
      ],
      example: [
        "I was watching TV at 8 o'clock. → Je regardais la télé à 20 h.",
        "They were playing football in the park. → Ils jouaient au foot dans le parc.",
        "She wasn't listening to the teacher. → Elle n'écoutait pas le professeur.",
        "What were you doing at midnight? → Que faisais-tu à minuit ?",
      ],
      tip: "Piège d'orthographe : les verbes en -e final perdent leur e devant -ing (make → making, write → writing), et certains doublent la consonne finale (run → running, sit → sitting, swim → swimming).",
    },
    {
      title: "Une action en cours dans le passé",
      paragraphs: [
        "Le prétérit continu décrit une action en train de se dérouler à un moment donné du passé. Il correspond souvent à l'imparfait français de description : « je lisais », « il pleuvait ».",
        "On l'utilise pour planter le décor d'un récit, décrire ce qui se passait autour : The sun was shining, the birds were singing...",
        "Le prétérit simple, lui, raconte des actions ponctuelles, terminées, qui font avancer l'histoire : he arrived, she opened the door, I fell.",
      ],
      example: [
        "At 7 a.m., I was having breakfast. → À 7 h, j'étais en train de prendre mon petit-déjeuner.",
        "It was raining all morning. → Il pleuvait toute la matinée.",
        "Yesterday at this time, we were flying to Rome. → Hier à cette heure-ci, nous étions en plein vol vers Rome.",
      ],
      tip: "Piège du calque : le français « j'étais en train de lire » aide beaucoup. Si tu peux dire « être en train de » en français, le prétérit continu convient. Mais l'imparfait français ne se traduit pas TOUJOURS par le continu : « je savais » = I knew (les verbes d'état comme know, like, want restent au prétérit simple).",
    },
    {
      title: "Toile de fond + action ponctuelle : la combinaison star",
      paragraphs: [
        "La structure la plus fréquente combine les deux prétérits dans une même phrase : le continu pose la toile de fond (action longue en cours), le simple introduit l'action ponctuelle qui surgit et interrompt.",
        "I was reading when he arrived = j'étais en train de lire (fond) quand il est arrivé (événement soudain).",
        "Imagine une scène de film : le continu, c'est le décor et ce que les personnages étaient en train de faire ; le simple, c'est l'événement qui déclenche la suite.",
      ],
      example: [
        "I was reading when he arrived. → Je lisais quand il est arrivé.",
        "She was crossing the street when she saw the accident. → Elle traversait la rue quand elle a vu l'accident.",
        "They were sleeping when the phone rang. → Ils dormaient quand le téléphone a sonné.",
      ],
      tip: "Méthode : demande-toi quelle action était déjà commencée (→ continu) et quelle action est arrivée d'un coup (→ simple). L'action longue est interrompue par l'action courte.",
    },
    {
      title: "When et while",
      paragraphs: [
        "When (« quand ») introduit le plus souvent l'action ponctuelle au prétérit simple : I was cooking when the doorbell rang.",
        "While (« pendant que ») introduit l'action longue au prétérit continu : While I was cooking, my brother was watching TV.",
        "On peut avoir deux actions longues en parallèle, toutes les deux au continu, reliées par while : While she was reading, he was drawing.",
      ],
      example: [
        "While I was walking to school, I met my cousin. → Pendant que j'allais à l'école, j'ai croisé mon cousin.",
        "The students were chatting while the teacher was writing on the board. → Les élèves bavardaient pendant que le professeur écrivait au tableau.",
        "When the alarm went off, everybody was sleeping. → Quand l'alarme s'est déclenchée, tout le monde dormait.",
      ],
      tip: "Repère simple : while + action en -ing (pendant que...), when + action ponctuelle au prétérit simple (quand, à ce moment-là). Ce n'est pas une loi absolue, mais ça marche presque toujours en 4e.",
    },
  ],
  exercises: [
    {
      id: "e4pc-1",
      level: 1,
      type: "qcm",
      question: "Complète : « They ___ playing video games at 9 p.m. »",
      choices: ["was", "were", "are", "did"],
      answer: 1,
      explanation:
        "They prend were (comme avec le verbe be seul : they were). Le prétérit continu = was/were + verbe en -ing : They were playing video games.",
      hint: "They + le passé de be qui va avec le pluriel.",
    },
    {
      id: "e4pc-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la forme en -ing de « run » ?",
      choices: ["runing", "running", "runeing", "ranning"],
      answer: 1,
      explanation:
        "Run double sa consonne finale devant -ing : running. C'est la règle des verbes courts terminés par consonne-voyelle-consonne : run → running, sit → sitting, swim → swimming.",
      hint: "Verbe court en consonne-voyelle-consonne : que fait la consonne finale ?",
    },
    {
      id: "e4pc-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « I was watching TV when you called. » combine une action longue (continu) et une action ponctuelle (simple).",
      answer: true,
      explanation:
        "Vrai ! I was watching TV est la toile de fond (action en cours), et you called est l'action ponctuelle qui interrompt, au prétérit simple. C'est la combinaison classique des deux prétérits.",
      hint: "Quelle action était déjà commencée ? Laquelle surgit d'un coup ?",
    },
    {
      id: "e4pc-4",
      level: 1,
      type: "input",
      question: "Complète : « She ___ sleeping when the phone rang. » (un mot)",
      answer: "was",
      explanation:
        "She prend was : She was sleeping = elle dormait, elle était en train de dormir. Le prétérit continu se forme avec was/were + verbe en -ing.",
      hint: "She is au présent → she ... au passé.",
    },
    {
      id: "e4pc-5",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne phrase :",
      choices: [
        "I was reading when he was arriving.",
        "I read when he arrived.",
        "I was reading when he arrived.",
        "I was read when he arrived.",
      ],
      answer: 2,
      explanation:
        "L'action longue en cours (lire) se met au continu : I was reading. L'action ponctuelle qui interrompt (arriver) se met au simple : he arrived. Mettre les deux au continu (réponse 1) est le calque à éviter : arriver est un événement bref, pas une toile de fond.",
      hint: "Lire = action longue ; arriver = événement bref.",
    },
    {
      id: "e4pc-6",
      level: 2,
      type: "qcm",
      question: "Complète : « ___ I was doing my homework, my sister was listening to music. »",
      choices: ["When", "While", "Since", "Ago"],
      answer: 1,
      explanation:
        "Deux actions longues en parallèle, toutes les deux au continu : on utilise while (« pendant que ») → While I was doing my homework, my sister was listening to music.",
      hint: "« Pendant que » : when ou while ?",
    },
    {
      id: "e4pc-7",
      level: 2,
      type: "input",
      question: "Mets à la forme négative contractée : « He was listening. » → « He ___ listening. » (un seul mot)",
      answer: "wasn't",
      accept: ["was not"],
      explanation:
        "Was + not = wasn't : He wasn't listening = il n'écoutait pas. Comme avec be seul, pas besoin de did pour la négation du prétérit continu.",
      hint: "Was + not, en un seul mot avec une apostrophe.",
    },
    {
      id: "e4pc-8",
      level: 2,
      type: "input",
      question: "Remets la question dans l'ordre : « doing / what / you / were / at 10 p.m. / ? » (sans le point d'interrogation)",
      answer: "what were you doing at 10 p.m.",
      accept: ["what were you doing at 10 pm", "what were you doing at 10 p.m"],
      explanation:
        "Ordre de la question : mot interrogatif (what) + auxiliaire (were) + sujet (you) + verbe en -ing (doing) → What were you doing at 10 p.m.? C'est la question type pour demander ce que quelqu'un était en train de faire.",
      hint: "Mot interrogatif, puis were AVANT le sujet.",
    },
    {
      id: "e4pc-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correcte pour dire « Je savais la réponse » ?",
      choices: [
        "I was knowing the answer.",
        "I knew the answer.",
        "I was know the answer.",
        "I knowed the answer.",
      ],
      answer: 1,
      explanation:
        "Know est un verbe d'état : il ne s'utilise pas au continu, même si le français emploie l'imparfait (« je savais »). On utilise le prétérit simple du verbe irrégulier know – knew – known : I knew the answer. Même règle pour like, want, need, understand.",
      hint: "Know, like, want... : ces verbes d'état refusent le -ing.",
    },
    {
      id: "e4pc-10",
      level: 3,
      type: "input",
      question: "Traduis : « Ils jouaient au foot quand il a commencé à pleuvoir. » (utilise start et rain : « ... when it started to rain »)",
      answer: "they were playing football when it started to rain",
      accept: ["they were playing soccer when it started to rain"],
      explanation:
        "They were playing football when it started to rain. Jouer = action longue en cours → prétérit continu (were playing). Commencer à pleuvoir = événement ponctuel → prétérit simple (started). When introduit l'action qui interrompt.",
      hint: "Action longue au continu + when + action ponctuelle au simple.",
    },
    {
      id: "e4pc-11",
      level: 3,
      type: "truefalse",
      question: "Dans « While she was cooking, the children played in the garden. », on pourrait aussi dire « the children were playing in the garden ».",
      answer: true,
      explanation:
        "Vrai ! Avec while, on peut présenter les deux actions comme des toiles de fond parallèles : While she was cooking, the children were playing in the garden. Les deux formulations sont possibles ; le continu insiste sur le déroulement simultané des deux actions.",
      hint: "Deux actions longues en parallèle : le continu est-il possible pour les deux ?",
    },
    {
      id: "e4pc-12",
      level: 3,
      type: "input",
      question: "Complète avec le verbe entre parenthèses au bon temps : « I ___ (walk) home when I saw the accident. » (deux mots)",
      answer: "was walking",
      explanation:
        "Marcher est l'action longue en cours (toile de fond), interrompue par l'action ponctuelle saw : I was walking home when I saw the accident. Was + walking : le prétérit continu avec I prend was.",
      hint: "Action en cours interrompue par saw : simple ou continu ?",
    },
  ],
};
