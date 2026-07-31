import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en4-futur-conditionnel",
  subject: "anglais",
  grade: "4e",
  num: 4,
  title: "Futur et premier conditionnel",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "GitBranch",
  teaser: "If it rains, we will stay at home : prédire, promettre et poser des conditions.",
  objectives: [
    "Je sais utiliser will et won't pour parler de l'avenir",
    "Je sais construire le premier conditionnel : If + présent, will",
    "Je sais qu'après if et when, on n'utilise jamais will",
    "Je sais faire des promesses, des prédictions et des décisions spontanées",
    "Je sais utiliser be going to pour un projet déjà décidé",
  ],
  lesson: [
    {
      title: "Will et won't : rappels",
      paragraphs: [
        "Le futur avec will se construit avec will + base verbale, pour toutes les personnes : I will go, she will go. Contraction : 'll → I'll go. Négation : will not, contracté en won't.",
        "Will s'utilise pour les prédictions (In 2050, cars will fly), les promesses (I will help you) et les décisions prises sur le moment (OK, I'll take this one).",
        "Question : on inverse will et le sujet → Will you come to my party? Réponse courte : Yes, I will. / No, I won't.",
      ],
      example: [
        "One day, I will travel around the world. → Un jour, je ferai le tour du monde.",
        "Don't worry, I won't tell anyone. → Ne t'inquiète pas, je ne le dirai à personne.",
        "Will she pass her exam? – Yes, she will. → Réussira-t-elle son examen ? – Oui.",
      ],
      tip: "Will est un modal : donc base verbale sans to (she will come, jamais « she will to come ») et pas de -s à la 3e personne (« she will comes » est impossible).",
    },
    {
      title: "Will ou be going to ?",
      paragraphs: [
        "Be going to + base verbale exprime un projet déjà décidé ou une intention : I'm going to visit my cousins this summer = c'est prévu, décidé avant de parler.",
        "Will exprime plutôt une décision prise à l'instant, une promesse ou une prédiction générale : The phone is ringing – I'll answer! = je décide maintenant.",
        "Be going to sert aussi à prédire à partir d'indices visibles : Look at those clouds! It's going to rain = les nuages sont là, la pluie est imminente.",
      ],
      example: [
        "We're going to move to Bristol next year. → Nous allons déménager à Bristol l'an prochain. (projet)",
        "I'm tired. I think I'll go to bed. → Je suis fatigué. Je crois que je vais aller me coucher. (décision spontanée)",
        "Watch out! You're going to fall! → Attention ! Tu vas tomber ! (indice visible)",
      ],
      tip: "Question à se poser : la décision existait-elle AVANT de parler ? Oui → be going to. Elle se prend en parlant → will.",
    },
    {
      title: "Le premier conditionnel : If + présent, will",
      paragraphs: [
        "Le premier conditionnel exprime une condition réaliste et sa conséquence probable : If it rains, we will stay at home = s'il pleut, nous resterons à la maison.",
        "Structure : If + présent simple dans la subordonnée, will + base verbale dans la principale. If you work hard, you will succeed.",
        "On peut inverser les deux moitiés sans changer le sens : We will stay at home if it rains. Remarque : la virgule disparaît quand if n'est pas en tête de phrase.",
        "La conséquence peut aussi utiliser un modal ou un impératif : If you finish early, you can watch TV. If you see her, tell her!",
      ],
      example: [
        "If it rains, we will stay at home. → S'il pleut, nous resterons à la maison.",
        "If you eat too many sweets, you will be sick. → Si tu manges trop de bonbons, tu seras malade.",
        "You will miss the bus if you don't hurry. → Tu vas rater le bus si tu ne te dépêches pas.",
      ],
      tip: "Le français fait pareil : « si + présent, futur » (si tu viens, je serai content). La structure est donc facile à retenir... tant qu'on ne met pas de will après if !",
    },
    {
      title: "Jamais will après if ni when : LE piège",
      paragraphs: [
        "Règle absolue : dans la subordonnée de condition ou de temps, on utilise le PRÉSENT, jamais will. On dit If it rains (et non « if it will rain »), When I arrive (et non « when I will arrive »).",
        "Le piège vient du sens : la phrase parle bien du futur, alors on est tenté de mettre will partout. Mais après if et when, l'anglais garde le présent simple.",
        "When + présent s'utilise pour une action future certaine : When I get home, I will call you = quand j'arriverai à la maison, je t'appellerai. Même règle avec as soon as (dès que) : As soon as she arrives, we will eat.",
      ],
      example: [
        "When I grow up, I will be a vet. → Quand je serai grand, je serai vétérinaire.",
        "If we win the match, we will celebrate. → Si nous gagnons le match, nous ferons la fête.",
        "I will send you a message as soon as I know. → Je t'enverrai un message dès que je saurai.",
      ],
      tip: "Piège du calque : le français dit « quand je SERAI grand » avec un futur, mais l'anglais dit when I GROW up avec un présent. Will reste dans la principale, jamais après if/when/as soon as.",
    },
    {
      title: "Promesses, menaces et prédictions",
      paragraphs: [
        "Le premier conditionnel sert beaucoup dans la vie courante : promesses (If you help me, I will help you), avertissements (If you touch that, you will burn yourself), négociations (If you tidy your room, you can go out).",
        "À la forme négative, on peut utiliser unless (= if... not, « à moins que ») : Unless you hurry, you will be late = si tu ne te dépêches pas, tu seras en retard.",
        "Pour les prédictions simples sans condition, will suffit : I think our team will win. Avec I think, I hope, I'm sure, probably, will est le temps naturel.",
      ],
      example: [
        "If you lend me your bike, I will wash it. → Si tu me prêtes ton vélo, je le laverai.",
        "You won't understand unless you listen. → Tu ne comprendras pas si tu n'écoutes pas.",
        "I'm sure you will love this film. → Je suis sûr que tu adoreras ce film.",
      ],
      tip: "Unless = if... not. Pour vérifier une phrase avec unless, remplace-le par « if... not » et vois si le sens tient : Unless you hurry = If you don't hurry.",
    },
  ],
  exercises: [
    {
      id: "e4if-1",
      level: 1,
      type: "qcm",
      question: "Complète : « If it rains, we ___ stay at home. »",
      choices: ["will", "would", "are", "did"],
      answer: 0,
      explanation:
        "Premier conditionnel : If + présent (it rains) dans la subordonnée, will + base verbale dans la principale → we will stay at home. C'est la structure « si + présent, futur », comme en français.",
      hint: "If + présent, puis ... + base verbale dans la principale.",
    },
    {
      id: "e4if-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la contraction de « will not » ?",
      choices: ["willn't", "won't", "wan't", "don't"],
      answer: 1,
      explanation:
        "Will not se contracte en won't (forme irrégulière) : I won't tell anyone = je ne le dirai à personne. « Willn't » n'existe pas.",
      hint: "La contraction est irrégulière : elle commence par wo-.",
    },
    {
      id: "e4if-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « When I will arrive, I will call you. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Après when (et après if), on n'utilise jamais will : la subordonnée reste au présent. La phrase correcte est : When I arrive, I will call you. Le français « quand j'arriverai » pousse au calque, mais l'anglais garde le présent après when.",
      hint: "Que met-on après when : présent ou futur ?",
    },
    {
      id: "e4if-4",
      level: 1,
      type: "input",
      question: "Complète avec la forme contractée : « Don't worry, I ___ help you. » (un mot, promesse affirmative)",
      answer: "will",
      accept: ["'ll"],
      explanation:
        "Pour une promesse, on utilise will : I will help you (ou la contraction I'll help you) = je t'aiderai, promis. Will + base verbale, pour toutes les personnes.",
      hint: "Une promesse : quel modal du futur ?",
    },
    {
      id: "e4if-5",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne phrase :",
      choices: [
        "If you will work hard, you will succeed.",
        "If you work hard, you will succeed.",
        "If you work hard, you succeed will.",
        "If you worked hard, you will succeed.",
      ],
      answer: 1,
      explanation:
        "Premier conditionnel : If + présent simple (you work), will dans la principale (you will succeed). Mettre will après if (réponse 1) est LE piège classique : la subordonnée en if reste toujours au présent.",
      hint: "Jamais will juste après if.",
    },
    {
      id: "e4if-6",
      level: 2,
      type: "qcm",
      question: "« Look at those black clouds! It ___ rain. » Quelle forme est la plus naturelle ?",
      choices: ["is going to", "will to", "won't", "is"],
      answer: 0,
      explanation:
        "Les nuages noirs sont un indice visible : on prédit à partir de ce qu'on voit, donc be going to est la forme naturelle → It's going to rain = il va pleuvoir. « Will to » n'existe pas : will n'est jamais suivi de to.",
      hint: "Prédiction à partir d'un indice visible : will ou be going to ?",
    },
    {
      id: "e4if-7",
      level: 2,
      type: "input",
      question: "Complète : « If she ___ (miss) the bus, she will be late. » (présent simple, un mot)",
      answer: "misses",
      explanation:
        "Après if, on utilise le présent simple : she misses (avec le -es de la 3e personne, car miss se termine en -ss). If she misses the bus, she will be late. Le will reste dans la principale.",
      hint: "Présent simple avec she : n'oublie pas la terminaison.",
    },
    {
      id: "e4if-8",
      level: 2,
      type: "input",
      question: "Mets à la forme négative contractée : « She will come. » → « She ___ come. » (un seul mot)",
      answer: "won't",
      accept: ["will not"],
      explanation:
        "Will + not se contracte en won't : She won't come = elle ne viendra pas. La contraction est irrégulière : will not → won't (et pas « willn't »).",
      hint: "La contraction irrégulière de will not.",
    },
    {
      id: "e4if-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase signifie « Si tu ne te dépêches pas, tu seras en retard » ?",
      choices: [
        "Unless you hurry, you will be late.",
        "Unless you don't hurry, you will be late.",
        "If you hurry, you will be late.",
        "When you hurry, you will be late.",
      ],
      answer: 0,
      explanation:
        "Unless = if... not : Unless you hurry = if you don't hurry = si tu ne te dépêches pas. Attention au piège de la réponse 2 : unless contient déjà la négation, donc « unless you don't hurry » ferait une double négation incorrecte.",
      hint: "Unless contient déjà le « ne... pas ».",
    },
    {
      id: "e4if-10",
      level: 3,
      type: "input",
      question: "Traduis : « Quand je serai grand, je serai pilote. » (utilise grow up et a pilot)",
      answer: "when i grow up, i will be a pilot",
      accept: ["when i grow up i will be a pilot", "when i grow up, i'll be a pilot", "when i grow up i'll be a pilot"],
      explanation:
        "When I grow up, I will be a pilot. Le français dit « quand je SERAI grand » au futur, mais l'anglais utilise le présent après when : when I grow up. Le futur (will be) n'apparaît que dans la principale. N'oublie pas l'article : a pilot.",
      hint: "Après when : présent. Will seulement dans la deuxième partie.",
    },
    {
      id: "e4if-11",
      level: 3,
      type: "truefalse",
      question: "Dans « I will call you as soon as I will know the results. », la phrase est correcte.",
      answer: false,
      explanation:
        "Faux ! As soon as (dès que) suit la même règle que when et if : jamais will dans la subordonnée. La phrase correcte est : I will call you as soon as I know the results. Le présent (I know) suffit pour parler du futur après as soon as.",
      hint: "As soon as fonctionne comme when : quel temps derrière ?",
    },
    {
      id: "e4if-12",
      level: 3,
      type: "input",
      question: "Complète le premier conditionnel : « If you lend me your bike, I ___ ___ it. » (laver, deux mots)",
      answer: "will wash",
      accept: ["'ll wash"],
      explanation:
        "La principale du premier conditionnel prend will + base verbale : I will wash it = je le laverai. La subordonnée (if you lend me your bike) reste au présent, et la promesse porte le will.",
      hint: "Dans la principale : will + base verbale.",
    },
  ],
};
