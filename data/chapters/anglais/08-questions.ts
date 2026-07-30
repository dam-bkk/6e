import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-questions",
  subject: "anglais",
  num: 8,
  title: "Asking questions",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "MessageCircleQuestion",
  teaser: "What, where, when, how… poser toutes les questions et y répondre du tac au tac.",
  objectives: [
    "Je connais les mots interrogatifs : what, where, when, who, why, how…",
    "Je sais construire une question avec be, avec do/does et avec can",
    "Je sais faire une réponse courte : Yes, I do. / No, she isn't.",
    "Je connais les questions utiles de la vie de classe",
  ],
  lesson: [
    {
      title: "Les mots interrogatifs",
      paragraphs: [
        "Les mots en WH- (et how) servent à poser des questions ouvertes : what (quoi, quel), where (où), when (quand), who (qui), why (pourquoi), how (comment).",
        "How se combine avec d'autres mots : how old (quel âge), how many (combien — pour ce qui se compte), how much (combien — prix et quantités), how often (à quelle fréquence).",
        "Pour répondre à why, on utilise because (parce que) : Why do you like summer? – Because I love the beach.",
      ],
      example: [
        "What is your name? → Quel est ton nom ?",
        "Where do you live? → Où habites-tu ?",
        "Who is that boy? → Qui est ce garçon ?",
        "How many brothers have you got? → Combien de frères as-tu ?",
      ],
      tip: "Ne confonds pas where (où — pense à « here », ici, caché dedans) et who (qui). Et when = quand : les trois se ressemblent mais changent tout !",
      figure: "en-question-words",
    },
    {
      title: "Questions avec be : l'inversion",
      paragraphs: [
        "Avec le verbe be, la question se forme par simple inversion sujet-verbe : She is English. → Is she English? Pas de do !",
        "Avec un mot interrogatif, il se place devant : Where are you? What is it? How old is your sister?",
        "Le schéma à retenir : (mot interrogatif) + BE + sujet + le reste. Exemple : Why are you late? (Pourquoi es-tu en retard ?)",
      ],
      example: [
        "Are you ready? → Es-tu prêt(e) ?",
        "Is your father a teacher? → Ton père est-il professeur ?",
        "Where are my keys? → Où sont mes clés ?",
        "How old is she? → Quel âge a-t-elle ?",
      ],
      tip: "Avec be, l'ordre s'inverse comme un miroir : You are… → Are you…? Si tu ajoutes do à une question avec be, c'est le signal d'une erreur !",
    },
    {
      title: "Questions avec do/does et avec can",
      paragraphs: [
        "Avec tous les autres verbes au présent simple, il faut l'auxiliaire do (ou does pour he, she, it) : Do you like sport? Does he play tennis? Le verbe reste à la base verbale : jamais de -s après does.",
        "Le schéma complet : (mot interrogatif) + DO/DOES + sujet + base verbale + le reste. Exemple : Where does she live? When do you get up?",
        "Avec can, c'est comme avec be : simple inversion, pas de do : Can you help me? What can he do?",
      ],
      example: [
        "Do you speak English? → Parles-tu anglais ?",
        "Where does your cousin live? → Où habite ton cousin ?",
        "What time do you get up? → À quelle heure te lèves-tu ?",
        "Can I ask a question? → Puis-je poser une question ?",
      ],
      tip: "Trois familles de questions : BE → inversion, CAN → inversion, tous les autres verbes → do/does. Demande-toi d'abord : « quel est le verbe de ma phrase ? »",
    },
    {
      title: "Les réponses courtes",
      paragraphs: [
        "En anglais, répondre juste « yes » ou « no » peut sembler sec. On fait une réponse courte en reprenant l'auxiliaire de la question : Are you French? – Yes, I am. Do you like tea? – No, I don't.",
        "La règle d'or : on répond avec le MÊME auxiliaire que la question. Is she…? → Yes, she is. / No, she isn't. Does he…? → Yes, he does. / No, he doesn't. Can you…? → Yes, I can. / No, I can't.",
        "Attention : dans une réponse courte affirmative, pas de contraction : Yes, I am (pas « Yes, I'm »). Dans la négative, si : No, she isn't.",
      ],
      example: [
        "Are you eleven? – Yes, I am. → As-tu onze ans ? – Oui.",
        "Does she play the piano? – No, she doesn't. → Joue-t-elle du piano ? – Non.",
        "Can they swim? – Yes, they can. → Savent-ils nager ? – Oui.",
        "Have you got a pet? – No, I haven't. → As-tu un animal ? – Non.",
      ],
      tip: "La question te donne la réponse : le premier mot de la question (is, do, can, have…) est celui que tu reprends dans ta réponse courte. Écho garanti !",
    },
    {
      title: "Les questions de la vie de classe",
      paragraphs: [
        "En cours d'anglais, certaines questions et demandes reviennent tous les jours. Pour l'élève : Can you repeat, please? (Pouvez-vous répéter ?), How do you say « cahier » in English? (Comment dit-on…), What does « whale » mean? (Que veut dire…), How do you spell it? (Comment ça s'écrit ?), Can I go to the toilet, please?",
        "Le professeur, lui, dira souvent : Open your books (ouvrez vos livres), Listen and repeat (écoutez et répétez), Come to the board (viens au tableau), Be quiet, please! (silence !).",
        "Remarque le schéma de What does « X » mean? : c'est une question en does + base verbale (mean). On ne dit pas « What means X? » !",
      ],
      example: [
        "How do you say « souris » in English? – Mouse! → Comment dit-on « souris » en anglais ? – Mouse !",
        "What does « rubber » mean? – It means « gomme ». → Que signifie « rubber » ? – Ça veut dire « gomme ».",
        "Can you repeat, please? I don't understand. → Pouvez-vous répéter ? Je ne comprends pas.",
      ],
      tip: "Apprends ces questions par cœur : elles te serviront à CHAQUE cours. Une question bien posée en anglais vaut mieux que dix en français !",
    },
  ],
  exercises: [
    {
      id: "eque-1",
      level: 1,
      type: "qcm",
      question: "Quel mot interrogatif pour demander OÙ quelqu'un habite ?",
      choices: ["When", "Who", "Where", "Why"],
      answer: 2,
      explanation:
        "« Où » = where : Where do you live? Ne confonds pas avec when (quand), who (qui) et why (pourquoi) — quatre mots qui se ressemblent mais posent des questions très différentes.",
      hint: "Dans where, il y a here (ici) : une histoire de lieu.",
    },
    {
      id: "eque-2",
      level: 1,
      type: "qcm",
      question: "Quelle question est correcte avec be ?",
      choices: ["Do you are English?", "Are you English?", "You are English?", "Does you English?"],
      answer: 1,
      explanation:
        "Avec be, la question se forme par simple inversion : You are English. → Are you English? On n'utilise jamais do/does avec be.",
      hint: "be n'a pas besoin d'aide : il s'inverse tout seul.",
    },
    {
      id: "eque-3",
      level: 1,
      type: "input",
      question: "Complète la réponse courte : « Do you like chocolate? – Yes, I ... »",
      answer: "do",
      explanation:
        "On répond avec le même auxiliaire que la question : Do you…? → Yes, I do. On ne répète pas le verbe (« Yes, I like » est maladroit) et on ne dit pas juste « Yes ».",
      hint: "Reprends le premier mot de la question.",
    },
    {
      id: "eque-4",
      level: 1,
      type: "truefalse",
      question: "« How old are you? » sert à demander l'âge de quelqu'un.",
      answer: true,
      explanation:
        "Vrai ! How old = « quel âge » (mot à mot : « comment vieux »). How old are you? – I'm eleven. Rappel : la réponse utilise be, jamais have.",
    },
    {
      id: "eque-5",
      level: 2,
      type: "qcm",
      question: "Complète : « ... does your grandmother live? – In Manchester. »",
      choices: ["Who", "What", "Where", "When"],
      answer: 2,
      explanation:
        "La réponse est un lieu (In Manchester), donc la question demande « où » : Where does your grandmother live? Regarde toujours la réponse pour deviner le bon mot interrogatif.",
      hint: "« In Manchester » : c'est un lieu, une date ou une personne ?",
    },
    {
      id: "eque-6",
      level: 2,
      type: "qcm",
      question: "Quelle question est correcte pour « Où habite ton cousin ? »",
      choices: [
        "Where does your cousin lives?",
        "Where your cousin lives?",
        "Where does your cousin live?",
        "Where do your cousin live?",
      ],
      answer: 2,
      explanation:
        "Your cousin = he → does, et après does le verbe reste à la base verbale : Where does your cousin live? Le -s sur lives (réponse 1) est l'erreur classique : does l'a déjà pris !",
      hint: "does + base verbale sans -s.",
    },
    {
      id: "eque-7",
      level: 2,
      type: "input",
      question: "Complète la réponse courte négative : « Is your sister ten? – No, she ... » (forme contractée)",
      answer: "isn't",
      accept: ["is not", "'s not"],
      explanation:
        "Question avec is → réponse courte avec is : No, she isn't (= is not). On ne répond jamais avec don't à une question posée avec be.",
      hint: "La question commence par is : réponds avec is + négation.",
    },
    {
      id: "eque-8",
      level: 2,
      type: "truefalse",
      question: "Pour demander la traduction d'un mot, on dit : « What means rubber? »",
      answer: false,
      explanation:
        "Faux ! La question correcte est What does « rubber » mean? — avec l'auxiliaire does et le verbe mean à la base verbale. « What means X? » est un calque très fréquent mais incorrect.",
      hint: "mean est un verbe ordinaire : il lui faut son auxiliaire.",
    },
    {
      id: "eque-9",
      level: 3,
      type: "input",
      question: "Remets dans l'ordre : « you / time / get up / do / what » (sans point d'interrogation)",
      answer: "what time do you get up",
      explanation:
        "Schéma de la question : mot interrogatif (what time) + do + sujet (you) + base verbale (get up) : What time do you get up? (« À quelle heure te lèves-tu ? »).",
      hint: "what time reste groupé en tête de question.",
    },
    {
      id: "eque-10",
      level: 3,
      type: "qcm",
      question: "« ... brothers and sisters have you got? – Two. » Quel mot interrogatif ?",
      choices: ["How much", "How many", "How old", "How often"],
      answer: 1,
      explanation:
        "Brothers and sisters se comptent (one, two, three…), donc how many : How many brothers and sisters have you got? How much sert pour ce qui ne se compte pas (milk, money) ; how old = l'âge ; how often = la fréquence.",
      hint: "Des frères et sœurs, ça se compte un par un.",
    },
    {
      id: "eque-11",
      level: 3,
      type: "qcm",
      question: "Associe la bonne réponse courte : « Can your dog swim? »",
      choices: ["Yes, he does.", "Yes, it can.", "Yes, it is.", "Yes, it cans."],
      answer: 1,
      explanation:
        "La question utilise can → la réponse courte reprend can : Yes, it can. (Un animal = it en général.) « It cans » n'existe pas : can ne prend jamais de -s.",
      hint: "Même auxiliaire que la question, et can est invariable.",
    },
    {
      id: "eque-12",
      level: 3,
      type: "input",
      question: "Tu n'as pas compris ton professeur. Complète la demande polie : « Can you ..., please? » (verbe qui veut dire « répéter »)",
      answer: "repeat",
      explanation:
        "La question magique du cours d'anglais : Can you repeat, please? (Pouvez-vous répéter ?). Avec can, le verbe reste à la base verbale : pas de to, pas de -s. Tu peux aussi dire : Can you say that again, please?",
      hint: "Le verbe anglais ressemble beaucoup au mot français « répéter ».",
    },
  ],
  videos: [
    { title: "Les phrases interrogatives - Anglais - Sixième - Les Bons Profs", youtubeId: "UAwq6ibpVdM", channel: "Les Bons Profs" },
  ],
};
