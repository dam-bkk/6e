import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-future",
  subject: "anglais",
  grade: "5e",
  num: 5,
  title: "Parler du futur : will & be going to",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "FastForward",
  teaser: "Prédictions, promesses et projets : deux façons de parler de demain.",
  objectives: [
    "Je sais utiliser will pour les prédictions et les décisions spontanées",
    "Je sais utiliser be going to pour les projets et les intentions",
    "Je sais construire la négation avec won't et les questions avec Will... ?",
    "Je sais choisir entre will et be going to selon la situation",
    "Je découvre le présent en -ing pour un futur déjà programmé",
  ],
  lesson: [
    {
      title: "Will : prédictions et décisions spontanées",
      paragraphs: [
        "Pour parler du futur, l'anglais utilise souvent will + base verbale. Will est le même pour toutes les personnes et le verbe qui suit reste tout nu : I will help, she will come, they will win.",
        "Will sert d'abord pour les prédictions, ce qu'on pense de l'avenir : It will rain tomorrow = Il pleuvra demain. On l'utilise souvent après I think : I think our team will win.",
        "Will sert aussi pour les décisions prises à l'instant, au moment où l'on parle : le téléphone sonne → I'll answer it! (Je vais répondre !). À l'oral, will se contracte en 'll : I'll, you'll, she'll.",
      ],
      example: [
        "One day, people will live on Mars. → Un jour, les gens vivront sur Mars.",
        "I think it will be sunny tomorrow. → Je pense qu'il fera beau demain.",
        "It's cold... I'll close the window. → Il fait froid... je vais fermer la fenêtre. (décision immédiate)",
      ],
      tip: "Après will, le verbe reste à la base verbale : she will come (jamais « she will comes » ni « she will to come »). Will est un modal : pas de -s, pas de to.",
    },
    {
      title: "La négation won't et les questions",
      paragraphs: [
        "La négation de will est will not, presque toujours contractée en won't (attention à l'orthographe surprenante : w-o-n-'-t) : I won't forget = Je n'oublierai pas.",
        "Pour les questions, on inverse will et le sujet : Will you come to my party? Réponses courtes : Yes, I will. / No, I won't.",
      ],
      example: [
        "Don't worry, I won't tell anyone. → Ne t'inquiète pas, je ne le dirai à personne.",
        "Will you help me? – Yes, I will. → Tu m'aideras ? – Oui.",
        "She won't be at school tomorrow. → Elle ne sera pas à l'école demain.",
      ],
      tip: "Won't se prononce comme « wone-t » et n'a pas de rapport avec want ! Ne confonds pas : I won't go = je n'irai pas / I want to go = je veux y aller.",
    },
    {
      title: "Be going to : projets et intentions",
      paragraphs: [
        "Quand on a déjà décidé quelque chose AVANT de parler (un projet, une intention), on utilise be going to + base verbale : I'm going to visit my cousins this weekend = Je vais rendre visite à mes cousins ce week-end (c'est prévu).",
        "La structure complète : sujet + am/is/are + going to + base verbale. Négation avec be : I'm not going to watch this film. Questions avec inversion : Are you going to play?",
        "On utilise aussi be going to quand des indices montrent que quelque chose va se produire : Look at those black clouds! It's going to rain! (les nuages sont la preuve).",
      ],
      example: [
        "We're going to visit London next month. → Nous allons visiter Londres le mois prochain. (projet)",
        "She's going to be a doctor. → Elle va devenir médecin. (intention)",
        "Watch out! You're going to fall! → Attention ! Tu vas tomber ! (indices visibles)",
      ],
      tip: "Question à te poser : la décision existait-elle AVANT de parler ? Oui (projet) → be going to. Non (je décide à l'instant) → will. « J'ai prévu » → going to ; « tiens, je vais... » → will.",
    },
    {
      title: "Will ou be going to ? Le match",
      figure: "en5-will-goingto",
      paragraphs: [
        "Résumons le duel. Will : prédiction générale (I think it will rain), décision spontanée (I'll help you!), promesse (I will always be there).",
        "Be going to : projet déjà décidé (I'm going to buy a new bike), intention (I'm going to work harder), événement imminent avec indices (It's going to rain, look at the clouds).",
        "Les expressions de temps du futur accompagnent les deux : tomorrow (demain), next week / next year (la semaine / l'année prochaine), soon (bientôt), tonight (ce soir).",
      ],
      example: [
        "What are you going to do next summer? – We're going to travel to Ireland. (projet)",
        "The phone is ringing. – I'll get it! (décision à l'instant)",
        "I think robots will do our homework one day. (prédiction)",
      ],
      tip: "En 5e, retiens la version simple : projet préparé = going to, décision ou prédiction sur le moment = will. Si les deux semblent possibles, l'exercice donne toujours un indice (I think..., next week + projet, Look!...).",
    },
    {
      title: "Découverte : le présent en -ing pour un futur programmé",
      paragraphs: [
        "Surprise : l'anglais utilise aussi le présent en -ing pour parler d'un futur déjà organisé, avec une date ou une heure fixée, souvent avec d'autres personnes : I'm seeing the dentist on Monday = J'ai rendez-vous chez le dentiste lundi.",
        "C'est fréquent pour les rendez-vous, les sorties et les voyages déjà réservés : We're flying to Rome next Friday (les billets sont achetés). En 5e, contente-toi de le reconnaître quand tu le croises : le marqueur de futur (on Monday, tonight, next week) montre qu'on ne parle pas de maintenant.",
      ],
      example: [
        "I'm playing basketball with Tom tonight. → Je joue au basket avec Tom ce soir. (c'est organisé)",
        "She's leaving tomorrow morning. → Elle part demain matin. (billet réservé)",
      ],
      tip: "Le français fait pareil ! « Je pars demain » est un présent qui parle du futur. Quand tu vois un présent en -ing + une date future, pense « c'est dans l'agenda ».",
    },
  ],
  exercises: [
    {
      id: "e5fut-1",
      level: 1,
      type: "qcm",
      question: "Complète la prédiction : « I think it ___ rain tomorrow. »",
      choices: ["will", "wills", "is", "going to"],
      answer: 0,
      explanation:
        "I think + prédiction → will : I think it will rain tomorrow. Will ne prend jamais de -s, même avec it. « Going to » seul est incomplet : il faudrait is going to.",
      hint: "Après I think, on prédit l'avenir : quel petit mot ?",
    },
    {
      id: "e5fut-2",
      level: 1,
      type: "qcm",
      question: "Complète le projet : « Next summer, we ___ visit Scotland. »",
      choices: ["will going to", "are going to", "going to", "is going to"],
      answer: 1,
      explanation:
        "Un projet déjà décidé → be going to. Avec we, be devient are : We are going to visit Scotland. « Will going to » mélange les deux structures : c'est l'une ou l'autre, jamais les deux.",
      hint: "C'est un projet prévu, et le sujet est we.",
    },
    {
      id: "e5fut-3",
      level: 1,
      type: "input",
      question: "Écris la forme contractée de will not (un seul mot).",
      answer: "won't",
      accept: ["wont"],
      explanation:
        "Will not se contracte en won't, avec un o surprenant : I won't forget = Je n'oublierai pas. À ne pas confondre avec want (vouloir) !",
      hint: "La contraction change le i en o.",
    },
    {
      id: "e5fut-4",
      level: 1,
      type: "truefalse",
      question: "La phrase « She will comes tomorrow. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Après will, le verbe reste à la base verbale, sans -s : She will come tomorrow. Will est un modal : le verbe qui le suit est toujours tout nu, à toutes les personnes.",
    },
    {
      id: "e5fut-5",
      level: 2,
      type: "qcm",
      question: "Le téléphone sonne. Tu décides à l'instant de répondre. Que dis-tu ?",
      choices: [
        "I'm going to answer it!",
        "I'll answer it!",
        "I answer it!",
        "I answering it!",
      ],
      answer: 1,
      explanation:
        "Une décision prise au moment où l'on parle → will (contracté en 'll) : I'll answer it! Be going to servirait si tu avais prévu de répondre depuis ce matin, ce qui n'a pas de sens ici.",
      hint: "La décision vient d'être prise, à la seconde même.",
    },
    {
      id: "e5fut-6",
      level: 2,
      type: "qcm",
      question: "Complète : « Look at those black clouds! It ___ rain! »",
      choices: ["will", "is going to", "won't", "is"],
      answer: 1,
      explanation:
        "Les nuages noirs sont des indices visibles qu'il va pleuvoir → be going to : It's going to rain! Quand on voit la preuve sous ses yeux, l'anglais préfère going to à will.",
      hint: "On voit des indices (les nuages) : quelle structure ?",
    },
    {
      id: "e5fut-7",
      level: 2,
      type: "input",
      question: "Complète avec la négation contractée de will : « Don't worry, I ___ tell anyone. » (un seul mot)",
      answer: "won't",
      accept: ["will not"],
      explanation:
        "Une promesse négative → won't : I won't tell anyone = Je ne le dirai à personne. Won't = will not, à toutes les personnes.",
      hint: "Will + not, en version contractée.",
    },
    {
      id: "e5fut-8",
      level: 2,
      type: "input",
      question: "Remets la question dans l'ordre : « you / will / me / help / ? » (sans point d'interrogation)",
      answer: "will you help me",
      explanation:
        "Question avec will : on inverse will et le sujet → Will you help me? = Est-ce que tu m'aideras ? Pas besoin de do/does/did : will se débrouille seul.",
      hint: "Will passe devant le sujet.",
    },
    {
      id: "e5fut-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase exprime un projet déjà décidé ?",
      choices: [
        "I think she will win the race.",
        "I'll open the door!",
        "I'm going to learn the guitar this year.",
        "It will be cold tomorrow.",
      ],
      answer: 2,
      explanation:
        "I'm going to learn the guitar this year = une intention réfléchie, décidée avant de parler → be going to. Les phrases avec will sont une prédiction (a et d) et une décision spontanée (b).",
      hint: "Cherche la phrase où la décision existait avant de parler.",
    },
    {
      id: "e5fut-10",
      level: 3,
      type: "input",
      question: "Mets à la forme négative : « She is going to watch the film. » → « She ___ going to watch the film. » (un seul mot, forme contractée)",
      answer: "isn't",
      accept: ["is not", "'s not"],
      explanation:
        "Dans be going to, c'est be qui porte la négation : She isn't going to watch the film = Elle ne va pas regarder le film. Pas de don't ni de won't ici.",
      hint: "La négation se fait sur be, comme au présent en -ing.",
    },
    {
      id: "e5fut-11",
      level: 3,
      type: "truefalse",
      question: "Dans « I'm seeing the dentist on Monday », on parle du futur.",
      answer: true,
      explanation:
        "Vrai ! C'est le présent en -ing utilisé pour un futur déjà programmé : le rendez-vous est pris, il est dans l'agenda. Le marqueur on Monday montre bien qu'on ne parle pas de maintenant. Le français fait pareil : « je vois le dentiste lundi ».",
    },
    {
      id: "e5fut-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Nous allons acheter un cadeau demain. » (c'est prévu ; utilise we're et tomorrow)",
      answer: "we're going to buy a present tomorrow",
      accept: [
        "we are going to buy a present tomorrow",
        "we're going to buy a gift tomorrow",
        "we are going to buy a gift tomorrow",
      ],
      explanation:
        "Un projet prévu → be going to : We're going to buy a present tomorrow. Structure complète : we're (be) + going to + buy (base verbale) + a present + tomorrow. Will serait moins adapté puisque la décision est déjà prise.",
      hint: "Projet décidé à l'avance : be + going to + base verbale.",
    },
  ],
  videos: [
    {
      title: "L'expression du futur - Anglais 3e - Les Bons Profs",
      youtubeId: "MWhqC77CAiQ",
      channel: "Les Bons Profs",
    },
  ],
};
