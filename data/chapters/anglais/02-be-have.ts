import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-be-have",
  subject: "anglais",
  num: 2,
  title: "Be & have got",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "Anchor",
  teaser: "Les deux verbes stars de l'anglais : être et avoir, sans les pièges du français.",
  objectives: [
    "Je connais toutes les formes de be au présent (pleines et contractées)",
    "Je sais faire une phrase négative et une question avec be",
    "Je sais utiliser have got pour dire ce que je possède",
    "Je sais choisir entre be et have got sans calquer le français",
  ],
  lesson: [
    {
      title: "Be au présent : les formes",
      figure: "en-be-map",
      paragraphs: [
        "Be (être) est le verbe le plus utilisé de l'anglais. Au présent, il a trois formes : am (avec I), is (avec he, she, it) et are (avec you, we, they).",
        "À l'oral et dans les messages, on utilise presque toujours les formes contractées : I'm, you're, he's, she's, it's, we're, they're. L'apostrophe remplace la ou les lettres supprimées.",
        "Attention : it's (= it is) et its (= son, sa) sont deux mots différents ! Le premier a une apostrophe, pas le second.",
      ],
      example: [
        "I am French. = I'm French. → Je suis français(e).",
        "She is my friend. = She's my friend. → C'est mon amie.",
        "They are in the classroom. = They're in the classroom. → Ils sont dans la salle de classe.",
      ],
      tip: "Trois formes seulement à retenir : I AM / he-she-it IS / you-we-they ARE. Répète-les comme une petite chanson : am, is, are !",
    },
    {
      title: "Be : négation et questions",
      paragraphs: [
        "Pour la négation, on ajoute not après be : I am not, he is not, they are not. Formes contractées : isn't et aren't (am not ne se contracte pas en « amn't » !).",
        "Pour poser une question, on inverse simplement le sujet et le verbe : You are ready. → Are you ready? Pas besoin de do avec be !",
        "Les réponses courtes reprennent be : Yes, I am. / No, he isn't. / Yes, they are.",
      ],
      example: [
        "I'm not tired. → Je ne suis pas fatigué(e).",
        "She isn't at school today. → Elle n'est pas à l'école aujourd'hui.",
        "Are you eleven? – Yes, I am. → As-tu onze ans ? – Oui.",
        "Is he your brother? – No, he isn't. → C'est ton frère ? – Non.",
      ],
      tip: "Avec be, JAMAIS de do : on ne dit pas « Do you are ready? » mais Are you ready? On inverse, c'est tout.",
    },
    {
      title: "Have got : dire ce qu'on possède",
      paragraphs: [
        "Pour parler de ce qu'on possède, de sa famille ou de son apparence, l'anglais britannique utilise have got : I have got (I've got) avec I, you, we, they, et has got (he's got, she's got) avec he, she, it.",
        "Négation : haven't got / hasn't got. Question : on inverse have/has et le sujet : Have you got a pet? Has she got blue eyes?",
        "Attention au piège : she's peut vouloir dire she is OU she has (dans she's got). C'est le mot qui suit qui te renseigne : she's got = she has got.",
      ],
      example: [
        "I've got a dog and two cats. → J'ai un chien et deux chats.",
        "She's got long hair. → Elle a les cheveux longs.",
        "We haven't got a garden. → Nous n'avons pas de jardin.",
        "Have you got a pen? – Yes, I have. → As-tu un stylo ? – Oui.",
      ],
      tip: "He, she, it → HAS got (avec un s, comme le -s de la 3e personne). Tous les autres → HAVE got.",
    },
    {
      title: "Be ou have got ? Les pièges du français",
      paragraphs: [
        "Plusieurs expressions françaises avec « avoir » se disent avec BE en anglais. C'est LA source d'erreurs numéro un des francophones !",
        "L'âge : I am eleven (j'ai 11 ans). La faim et la soif : I am hungry, I am thirsty (j'ai faim, j'ai soif). La peur : I am scared ou I am afraid (j'ai peur). On dit aussi I am hot / I am cold (j'ai chaud / j'ai froid) et he is right (il a raison).",
        "En revanche, have got sert bien pour la possession et la famille : I've got a bike, she's got two sisters. Et pour dire qu'on a mal : I've got a headache (j'ai mal à la tête).",
      ],
      example: [
        "I'm hungry! → J'ai faim !",
        "Are you cold? → As-tu froid ?",
        "He's scared of spiders. → Il a peur des araignées.",
        "You're right! → Tu as raison !",
      ],
      tip: "Astuce : hungry, thirsty, scared, hot, cold sont des ADJECTIFS en anglais (affamé, assoiffé, effrayé…). Or, devant un adjectif, on utilise être : I AM hungry = « je suis affamé ».",
    },
    {
      title: "Récapitulatif : les tableaux à connaître par cœur",
      paragraphs: [
        "BE : I am / you are / he, she, it is / we are / they are. Négation : add not (isn't, aren't). Question : inversion (Am I…? Is she…? Are they…?).",
        "HAVE GOT : I, you, we, they have got / he, she, it has got. Négation : haven't got, hasn't got. Question : Have you got…? Has he got…?",
        "Réponses courtes : avec be → Yes, I am / No, she isn't. Avec have got → Yes, I have / No, he hasn't. On ne répète jamais got dans la réponse courte.",
      ],
      example: [
        "Is it cold today? – Yes, it is. → Il fait froid aujourd'hui ? – Oui.",
        "Has your sister got a phone? – No, she hasn't. → Ta sœur a-t-elle un téléphone ? – Non.",
      ],
      tip: "Dans une réponse courte, on s'arrête au petit mot : Yes, I am. / Yes, I have. On ne dit pas « Yes, I am eleven » ni « Yes, I have got ».",
    },
  ],
  exercises: [
    {
      id: "ebe-1",
      level: 1,
      type: "qcm",
      question: "Complète : « My friends ... in the playground. »",
      choices: ["is", "am", "are", "be"],
      answer: 2,
      explanation:
        "My friends = they (pluriel), donc on utilise are : My friends are in the playground. Rappel : I am / he, she, it is / you, we, they are.",
      hint: "My friends, c'est comme « they ».",
    },
    {
      id: "ebe-2",
      level: 1,
      type: "qcm",
      question: "Que signifie la contraction dans « She's my sister » ?",
      choices: ["She has", "She is", "She was", "Shes"],
      answer: 1,
      explanation:
        "Ici, she's = she is : « C'est ma sœur. » La contraction 's peut vouloir dire is ou has (dans she's got), mais sans got derrière, c'est is.",
      hint: "Y a-t-il un « got » après ?",
    },
    {
      id: "ebe-3",
      level: 1,
      type: "input",
      question: "Écris la forme contractée de « I am » (avec l'apostrophe).",
      answer: "i'm",
      explanation:
        "I am se contracte en I'm : l'apostrophe remplace le a de am. Exemple : I'm eleven, I'm French. C'est la forme qu'on utilise presque tout le temps à l'oral.",
    },
    {
      id: "ebe-4",
      level: 1,
      type: "truefalse",
      question: "Pour poser une question avec be, on ajoute do : « Do you are ready? »",
      answer: false,
      explanation:
        "Faux ! Avec be, on n'utilise jamais do. On inverse simplement le sujet et le verbe : You are ready. → Are you ready? Le do sert pour les autres verbes (Do you like…?), pas pour be.",
      hint: "Be est un verbe spécial : il se débrouille tout seul.",
    },
    {
      id: "ebe-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « Elle a les yeux bleus » ? (anglais britannique)",
      choices: ["She has got blue eyes.", "She have got blue eyes.", "She is blue eyes.", "She got blue eyes."],
      answer: 0,
      explanation:
        "Avec she (3e personne du singulier), on utilise has got : She has got blue eyes (contracté : She's got blue eyes). « She have got » est faux : have est réservé à I, you, we, they.",
      hint: "He, she, it → ha... got.",
    },
    {
      id: "ebe-6",
      level: 2,
      type: "input",
      question: "Traduis : « J'ai faim. » (2 mots, forme contractée avec apostrophe)",
      answer: "i'm hungry",
      accept: ["i am hungry"],
      explanation:
        "« Avoir faim » se dit avec BE en anglais, car hungry est un adjectif (« affamé ») : I'm hungry = « je suis affamé ». Dire « I have hungry » est le calque classique du français — à bannir !",
      hint: "Attention au piège : en anglais, on EST affamé.",
    },
    {
      id: "ebe-7",
      level: 2,
      type: "qcm",
      question: "Mets à la forme négative : « They are at home. »",
      choices: ["They isn't at home.", "They aren't at home.", "They don't at home.", "They aren't got at home."],
      answer: 1,
      explanation:
        "La négation de are est are not, contracté en aren't : They aren't at home. « They isn't » mélange les personnes, et « don't » ne s'utilise pas avec be.",
      hint: "are + not = ?",
    },
    {
      id: "ebe-8",
      level: 2,
      type: "truefalse",
      question: "« Have you got a pet? – Yes, I have. » est une réponse courte correcte.",
      answer: true,
      explanation:
        "Vrai ! Dans la réponse courte, on reprend have (ou has) mais jamais got : Yes, I have. / No, I haven't. On ne dit pas « Yes, I have got » ni « Yes, I got ».",
      hint: "Dans une réponse courte, got disparaît.",
    },
    {
      id: "ebe-9",
      level: 3,
      type: "input",
      question: "Traduis : « Il a onze ans. » (3 mots, formes pleines, âge en lettres)",
      answer: "he is eleven",
      accept: ["he's eleven", "he is eleven years old", "he's eleven years old"],
      explanation:
        "L'âge se dit toujours avec be : He is eleven (ou He's eleven years old). Le calque « He has eleven years » est LA faute typique du francophone : en anglais, on EST son âge.",
      hint: "Le piège de l'âge, encore lui !",
    },
    {
      id: "ebe-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correcte pour dire « Ma sœur n'a pas de vélo » ?",
      choices: [
        "My sister hasn't got a bike.",
        "My sister haven't got a bike.",
        "My sister isn't got a bike.",
        "My sister hasn't a got bike.",
      ],
      answer: 0,
      explanation:
        "Avec my sister (= she), la négation de has got est hasn't got : My sister hasn't got a bike. « Haven't » est réservé à I, you, we, they ; « isn't got » mélange be et have got.",
      hint: "My sister = she → has → négation ?",
    },
    {
      id: "ebe-11",
      level: 3,
      type: "input",
      question: "Remets dans l'ordre pour poser la question : « got / a / has / dog / she » (sans point d'interrogation)",
      answer: "has she got a dog",
      explanation:
        "Pour une question avec have got, on inverse have/has et le sujet : Has she got a dog? (« A-t-elle un chien ? »). Ordre : has + sujet + got + complément.",
      hint: "La question commence par has, et got vient juste après le sujet.",
    },
    {
      id: "ebe-12",
      level: 3,
      type: "qcm",
      question: "Ton ami tremble devant une araignée. Que dis-tu ?",
      choices: ["He has scared.", "He's scared.", "He has got scared of.", "He does scared."],
      answer: 1,
      explanation:
        "« Avoir peur » se dit be scared (ou be afraid) : He's scared = He is scared. Scared est un adjectif (« effrayé »), donc on utilise be, comme pour hungry, thirsty, hot, cold. « He has scared » est un calque du français.",
      hint: "Peur, faim, soif, chaud, froid : même famille de pièges.",
    },
  ],
};
