import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en4-present-perfect",
  subject: "anglais",
  grade: "4e",
  num: 1,
  title: "Le present perfect",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "CheckCheck",
  teaser: "Have you ever...? Le temps du bilan, celui que le francais traduit mal.",
  objectives: [
    "Je sais former le present perfect : have/has + participe passé",
    "Je sais choisir entre present perfect (bilan) et prétérit (passé daté)",
    "Je sais utiliser ever, never, just, already et yet",
    "Je sais faire la différence entre for (durée) et since (point de départ)",
    "Je connais les participes passés des verbes irréguliers les plus courants",
  ],
  lesson: [
    {
      title: "Former le present perfect",
      paragraphs: [
        "Le present perfect se construit avec have (ou has à la 3e personne du singulier) suivi du participe passé du verbe : I have finished, she has finished.",
        "Pour les verbes réguliers, le participe passé est identique au prétérit : base verbale + -ed (worked, played, visited). Pour les verbes irréguliers, c'est la troisième colonne de la liste : see – saw – seen, go – went – gone, eat – ate – eaten.",
        "À l'oral et à l'écrit courant, on contracte : I have → I've, she has → she's, they have → they've. La négation se contracte aussi : haven't, hasn't.",
        "Question : on inverse have/has et le sujet → Have you finished? Has she arrived?",
      ],
      example: [
        "I've finished my homework. → J'ai fini mes devoirs.",
        "She has visited London twice. → Elle a visité Londres deux fois.",
        "They haven't seen this film. → Ils n'ont pas vu ce film.",
        "Have you done the exercise? → As-tu fait l'exercice ?",
      ],
      tip: "Piège du calque : « she's » peut vouloir dire she is OU she has. Devant un participe passé (she's gone), c'est toujours has. Devant un adjectif ou un nom (she's happy), c'est is.",
    },
    {
      title: "Present perfect ou prétérit ? LE piège pour un francophone",
      paragraphs: [
        "En français, « j'ai vu » sert à tout. En anglais, il faut choisir : si l'action a un lien avec le présent (bilan, résultat visible, expérience de vie), on utilise le present perfect. Si l'action est datée et terminée, coupée du présent, on utilise le prétérit.",
        "Le present perfect fait le bilan : I have visited three countries = à ce jour, voilà mon expérience. On ne dit pas quand.",
        "Le prétérit raconte un fait passé et daté : I visited Spain last year = c'est fini, c'est daté, on utilise le prétérit.",
        "Règle d'or : dès qu'il y a une date ou un moment précis du passé (yesterday, last week, in 2020, two days ago, when I was six), le present perfect est IMPOSSIBLE. C'est le prétérit, obligatoirement.",
      ],
      example: [
        "I have lost my keys. → J'ai perdu mes clés (résultat : je ne peux pas rentrer maintenant).",
        "I lost my keys yesterday. → J'ai perdu mes clés hier (fait daté → prétérit).",
        "She has read this book. → Elle a (déjà) lu ce livre (expérience, pas de date).",
        "She read this book in 2023. → Elle a lu ce livre en 2023 (date → prétérit).",
      ],
      tip: "Piège du calque : « J'ai vu ce film hier » ne se traduit JAMAIS par « I have seen this film yesterday ». Yesterday impose le prétérit : I saw this film yesterday.",
    },
    {
      title: "Ever, never, just, already, yet",
      paragraphs: [
        "Ces petits mots accompagnent très souvent le present perfect. Ever (« déjà, une fois dans ta vie ») s'utilise dans les questions : Have you ever been to London?",
        "Never (« jamais ») exprime une expérience nulle : I have never eaten sushi. Attention : never est déjà négatif, donc le verbe reste affirmatif (pas de haven't avec never).",
        "Just (« viens de ») indique une action toute récente : I have just finished = je viens de finir. Already (« déjà ») marque qu'une action est faite plus tôt que prévu : She has already left.",
        "Yet s'utilise en fin de phrase, dans les négations (« pas encore ») et les questions (« déjà ») : I haven't finished yet. Have you finished yet?",
      ],
      example: [
        "Have you ever ridden a horse? → Es-tu déjà monté à cheval ?",
        "I have never been to the USA. → Je ne suis jamais allé aux USA.",
        "We have just arrived. → Nous venons d'arriver.",
        "He hasn't answered yet. → Il n'a pas encore répondu.",
      ],
      tip: "Place des adverbes : ever, never, just et already se glissent ENTRE have et le participe passé (I have just seen...). Yet, lui, va toujours en fin de phrase.",
    },
    {
      title: "For et since : depuis",
      paragraphs: [
        "Le français dit « depuis » dans tous les cas ; l'anglais distingue deux mots. For + une durée : for two years (depuis deux ans), for ten minutes, for a long time.",
        "Since + un point de départ : since 2020 (depuis 2020), since Monday, since my birthday.",
        "Avec for et since, l'anglais utilise le present perfect là où le français utilise le présent : I have lived here for five years = j'habite ici depuis cinq ans. L'action a commencé dans le passé et continue maintenant.",
      ],
      example: [
        "I have known him for ten years. → Je le connais depuis dix ans.",
        "She has been ill since Monday. → Elle est malade depuis lundi.",
        "We have lived in Lyon since 2019. → Nous habitons à Lyon depuis 2019.",
      ],
      tip: "Test rapide : peux-tu répondre à la question « pendant combien de temps ? » avec l'expression ? Two years, a week → durée → for. Un moment précis sur le calendrier (2020, Christmas, Monday) → since.",
    },
    {
      title: "Les participes passés irréguliers à connaître",
      paragraphs: [
        "Pour utiliser le present perfect, il faut connaître la 3e colonne des verbes irréguliers. Les plus fréquents : be – was/were – been, go – went – gone, see – saw – seen, do – did – done, have – had – had, make – made – made, take – took – taken, eat – ate – eaten, write – wrote – written, break – broke – broken.",
        "Attention au duo gone / been : She has gone to Rome = elle est partie à Rome (elle y est encore). She has been to Rome = elle est allée à Rome (elle en est revenue, c'est une expérience).",
      ],
      example: [
        "I have done my best. → J'ai fait de mon mieux.",
        "He has broken his arm. → Il s'est cassé le bras.",
        "They have gone to the beach. → Ils sont partis à la plage (ils y sont).",
        "I have been to Ireland twice. → Je suis allé en Irlande deux fois (expérience).",
      ],
      tip: "Pour parler d'un voyage terminé, d'une expérience, utilise been, pas gone : Have you ever BEEN to Scotland? Gone signifierait que la personne y est toujours.",
    },
  ],
  exercises: [
    {
      id: "e4pp-1",
      level: 1,
      type: "qcm",
      question: "Complète : « She ___ finished her homework. »",
      choices: ["have", "has", "is", "was"],
      answer: 1,
      explanation:
        "Au present perfect, la 3e personne du singulier (she, he, it) prend has : She has finished her homework. Have s'utilise avec I, you, we, they.",
      hint: "She est une 3e personne du singulier : have ou has ?",
    },
    {
      id: "e4pp-2",
      level: 1,
      type: "qcm",
      question: "Quel est le participe passé de « see » ?",
      choices: ["saw", "seed", "seen", "sawn"],
      answer: 2,
      explanation:
        "See est un verbe irrégulier : see – saw – seen. Le participe passé (3e colonne) est seen : I have seen this film. Saw est le prétérit (2e colonne).",
      hint: "See – saw – ... ? C'est la 3e colonne qu'il faut.",
    },
    {
      id: "e4pp-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « I have visited London last year. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Last year est une date du passé : elle impose le prétérit, jamais le present perfect. La phrase correcte est : I visited London last year. C'est LE piège classique pour un francophone, car le français dit « j'ai visité » dans les deux cas.",
      hint: "Y a-t-il une indication de temps passé dans la phrase ?",
    },
    {
      id: "e4pp-4",
      level: 1,
      type: "input",
      question: "Complète avec le participe passé de « go » : « They have ___ to the cinema. » (un mot)",
      answer: "gone",
      explanation:
        "Go est irrégulier : go – went – gone. Après have, on utilise le participe passé gone : They have gone to the cinema = ils sont partis au cinéma (ils y sont encore).",
      hint: "Go – went – ... ?",
    },
    {
      id: "e4pp-5",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne phrase :",
      choices: [
        "I have seen this film yesterday.",
        "I saw this film yesterday.",
        "I see this film yesterday.",
        "I has seen this film yesterday.",
      ],
      answer: 1,
      explanation:
        "Yesterday date l'action dans le passé : le present perfect est donc impossible, il faut le prétérit → I saw this film yesterday. Le français « j'ai vu ce film hier » pousse au calque « I have seen... yesterday », mais c'est une faute en anglais.",
      hint: "Date précise du passé = quel temps obligatoire ?",
    },
    {
      id: "e4pp-6",
      level: 2,
      type: "qcm",
      question: "Complète : « I have lived in Paris ___ 2020. »",
      choices: ["for", "since", "ago", "during"],
      answer: 1,
      explanation:
        "2020 est un point de départ précis (une date sur le calendrier), donc on utilise since : I have lived in Paris since 2020 = j'habite à Paris depuis 2020. For s'utiliserait avec une durée : for six years.",
      hint: "2020, c'est une durée ou un point de départ ?",
    },
    {
      id: "e4pp-7",
      level: 2,
      type: "input",
      question: "Mets à la forme négative contractée : « She has been to Spain. » → « She ___ been to Spain. » (un seul mot)",
      answer: "hasn't",
      accept: ["has not"],
      explanation:
        "Has + not = hasn't : She hasn't been to Spain = elle n'est jamais allée en Espagne. La négation du present perfect se fait directement sur have/has, sans do ni did.",
      hint: "Has + not, contracté avec une apostrophe.",
    },
    {
      id: "e4pp-8",
      level: 2,
      type: "input",
      question: "Traduis « je viens de finir » en anglais (quatre mots, avec just).",
      answer: "i have just finished",
      accept: ["i've just finished"],
      explanation:
        "« Venir de faire quelque chose » se traduit par le present perfect avec just : I have just finished. Just se place entre have et le participe passé. Le français « venir de » n'existe pas mot à mot en anglais : « I come to finish » serait un contresens.",
      hint: "Present perfect + just entre have et le participe passé.",
    },
    {
      id: "e4pp-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase signifie « Elle est allée à Rome (et elle en est revenue) » ?",
      choices: [
        "She has gone to Rome.",
        "She has been to Rome.",
        "She is gone to Rome.",
        "She was been to Rome.",
      ],
      answer: 1,
      explanation:
        "Been = expérience de voyage terminée (elle y est allée et elle est revenue) : She has been to Rome. Gone signifierait qu'elle est partie et qu'elle y est toujours : She has gone to Rome = elle est en route ou sur place.",
      hint: "Been = aller-retour accompli ; gone = toujours là-bas.",
    },
    {
      id: "e4pp-10",
      level: 3,
      type: "input",
      question: "Traduis : « As-tu déjà mangé des sushis ? » (utilise ever et le verbe eat, sans point d'interrogation)",
      answer: "have you ever eaten sushi",
      explanation:
        "Have you ever eaten sushi? Ordre : auxiliaire (have) + sujet (you) + ever + participe passé (eaten). Ever exprime « déjà, au moins une fois dans ta vie » et se place avant le participe passé. Eat est irrégulier : eat – ate – eaten.",
      hint: "Have + you + ever + participe passé de eat.",
    },
    {
      id: "e4pp-11",
      level: 3,
      type: "truefalse",
      question: "Dans « I have known her for five years. », l'emploi de for est correct.",
      answer: true,
      explanation:
        "Vrai ! Five years est une durée, donc for est le bon choix : I have known her for five years = je la connais depuis cinq ans. Remarque aussi que l'anglais utilise le present perfect là où le français utilise le présent (« je la connais »).",
      hint: "Five years : durée ou point de départ ?",
    },
    {
      id: "e4pp-12",
      level: 3,
      type: "input",
      question: "Complète avec yet ou already : « I haven't done the washing-up ___. » (un mot)",
      answer: "yet",
      explanation:
        "Dans une phrase négative, « pas encore » se dit avec yet placé en fin de phrase : I haven't done the washing-up yet. Already s'utilise dans les phrases affirmatives (I have already done it) et se place avant le participe passé.",
      hint: "Phrase négative + fin de phrase : lequel des deux ?",
    },
  ],
};
