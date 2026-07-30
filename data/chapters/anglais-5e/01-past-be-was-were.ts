import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-past-was-were",
  subject: "anglais",
  grade: "5e",
  num: 1,
  title: "Was & were : le passé de be",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "Hourglass",
  teaser: "Raconter hier avec was et were : le premier pas vers le prétérit.",
  objectives: [
    "Je sais conjuguer be au passé : was et were",
    "Je sais construire des phrases négatives avec wasn't et weren't",
    "Je sais poser des questions au passé : Was he...? Were you...?",
    "Je sais utiliser there was et there were",
    "Je connais les expressions de temps du passé : yesterday, last week, ago",
  ],
  lesson: [
    {
      title: "Was ou were ? Le passé du verbe be",
      figure: "en5-was-were",
      paragraphs: [
        "Au présent, le verbe be a trois formes : am, is, are. Au passé, il n'en garde que deux : was et were. C'est le seul verbe anglais qui change selon la personne au passé, donc autant bien le connaître !",
        "On utilise was avec I, he, she, it (les personnes du singulier, sauf you). On utilise were avec you, we, they. Retiens : you prend toujours were, même quand on parle à une seule personne.",
        "Was et were traduisent souvent « était / étais / étaient » : I was tired = j'étais fatigué.",
      ],
      example: [
        "I was at school yesterday. → J'étais à l'école hier.",
        "She was very happy. → Elle était très contente.",
        "We were in London last summer. → Nous étions à Londres l'été dernier.",
        "You were late this morning! → Tu étais en retard ce matin !",
      ],
      tip: "Moyen mnémotechnique : was va avec les mêmes personnes que is (he is → he was), et were va avec les mêmes personnes que are (they are → they were).",
    },
    {
      title: "La négation : wasn't et weren't",
      paragraphs: [
        "Pour dire « n'était pas », on ajoute simplement not après was ou were : was not, were not. À l'oral et dans les textes courants, on utilise presque toujours les formes contractées : wasn't et weren't.",
        "Pas besoin de do ou did ici ! Be se débrouille tout seul pour la négation, comme au présent (I'm not, she isn't).",
      ],
      example: [
        "The film wasn't very good. → Le film n'était pas très bon.",
        "They weren't at home. → Ils n'étaient pas à la maison.",
        "I wasn't afraid of the dark. → Je n'avais pas peur du noir.",
      ],
      tip: "Piège du calque : « je n'étais pas » ne se dit jamais « I didn't was ». Avec be, on n'utilise JAMAIS did : c'est I wasn't, tout simplement.",
    },
    {
      title: "Poser des questions au passé",
      paragraphs: [
        "Pour poser une question avec be au passé, on inverse le sujet et le verbe, exactement comme au présent : She was ill. → Was she ill?",
        "Avec un mot interrogatif (where, when, why, how...), on le place devant : Where were you? = Où étais-tu ?",
        "Pour répondre brièvement, on reprend was ou were : Yes, she was. / No, she wasn't.",
      ],
      example: [
        "Were you at the party? – Yes, I was. → Étais-tu à la fête ? – Oui.",
        "Was the test difficult? – No, it wasn't. → Le contrôle était-il difficile ? – Non.",
        "Where were you yesterday afternoon? → Où étais-tu hier après-midi ?",
      ],
      tip: "Dans une réponse courte, on ne contracte jamais la forme positive : Yes, I was (et pas « Yes, I's »). La contraction n'apparaît que dans la réponse négative : No, I wasn't.",
    },
    {
      title: "There was / there were : il y avait",
      paragraphs: [
        "Tu connais there is (il y a + singulier) et there are (il y a + pluriel). Au passé, ils deviennent there was et there were : il y avait.",
        "There was s'utilise avec un nom singulier ou indénombrable, there were avec un pluriel. Le français dit « il y avait » dans les deux cas : c'est l'anglais qui fait la différence, pas le français !",
      ],
      example: [
        "There was a big park near my house. → Il y avait un grand parc près de chez moi.",
        "There were twenty pupils in the class. → Il y avait vingt élèves dans la classe.",
        "There wasn't any milk in the fridge. → Il n'y avait pas de lait dans le frigo.",
      ],
      tip: "Pose-toi la question : ce qu'il y avait, c'est singulier ou pluriel ? Un seul gâteau → there was a cake. Des gâteaux → there were some cakes.",
    },
    {
      title: "Les expressions de temps du passé",
      paragraphs: [
        "Certaines expressions annoncent que l'on parle du passé : yesterday (hier), last night (hier soir), last week / last year (la semaine dernière / l'année dernière), in 2015 (en 2015).",
        "Le petit mot ago signifie « il y a » (une durée dans le passé), mais attention : il se place APRÈS la durée, à l'inverse du français. Two years ago = il y a deux ans.",
        "Ces expressions se placent généralement en fin de phrase : I was in Spain last summer.",
      ],
      example: [
        "I was born twelve years ago. → Je suis né il y a douze ans.",
        "The weather was terrible last weekend. → Le temps était affreux le week-end dernier.",
        "Yesterday morning, we were at the swimming pool. → Hier matin, nous étions à la piscine.",
      ],
      tip: "Ago se met toujours à la fin : ten minutes ago, a long time ago. Ne dis jamais « ago ten minutes » : c'est le calque inverse du français « il y a dix minutes ».",
    },
  ],
  exercises: [
    {
      id: "e5was-1",
      level: 1,
      type: "qcm",
      question: "Complète : « She ___ at school yesterday. »",
      choices: ["were", "was", "is", "did"],
      answer: 1,
      explanation:
        "Avec she (3e personne du singulier), le passé de be est was : She was at school yesterday. Were s'utilise avec you, we et they.",
      hint: "She is au présent → she ... au passé ?",
    },
    {
      id: "e5was-2",
      level: 1,
      type: "qcm",
      question: "Complète : « They ___ very tired after the match. »",
      choices: ["was", "be", "were", "are"],
      answer: 2,
      explanation:
        "They (pluriel) prend were au passé : They were very tired. Retiens le duo : they are → they were, comme he is → he was. « Are » est du présent, donc impossible avec un contexte passé.",
      hint: "They are au présent → they ... au passé.",
    },
    {
      id: "e5was-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « You was late this morning. » est correcte.",
      answer: false,
      explanation:
        "Faux ! You prend toujours were, même quand on s'adresse à une seule personne : You were late this morning. C'est une erreur très fréquente car le français « tu étais » est un singulier, mais l'anglais ne fait pas la différence.",
    },
    {
      id: "e5was-4",
      level: 1,
      type: "input",
      question: "Traduis « j'étais » en anglais (deux mots).",
      answer: "i was",
      explanation:
        "« J'étais » = I was. Avec I, le passé de be est was (comme avec he, she et it). Rappel : en anglais, le pronom I s'écrit toujours avec une majuscule.",
      hint: "I + le passé de be qui va avec le singulier.",
    },
    {
      id: "e5was-5",
      level: 2,
      type: "qcm",
      question: "Choisis la phrase négative correcte :",
      choices: [
        "The film didn't was good.",
        "The film wasn't good.",
        "The film not was good.",
        "The film wasn't not good.",
      ],
      answer: 1,
      explanation:
        "Avec be, la négation se fait sans did : on ajoute not après was → was not, contracté en wasn't. « Didn't was » est le piège classique du calque : did ne s'utilise jamais avec be.",
      hint: "Be n'a jamais besoin de did pour sa négation.",
    },
    {
      id: "e5was-6",
      level: 2,
      type: "qcm",
      question: "Complète : « ___ a lot of people at the concert last night. »",
      choices: ["There was", "There were", "It was", "They were"],
      answer: 1,
      explanation:
        "« Il y avait beaucoup de gens » : people est un pluriel en anglais (a lot of people = beaucoup de personnes), donc on utilise there were. There was serait pour un singulier : there was a man.",
      hint: "People est un nom pluriel en anglais.",
    },
    {
      id: "e5was-7",
      level: 2,
      type: "input",
      question: "Remets la question dans l'ordre : « you / where / yesterday / were / ? » (écris la question sans le point d'interrogation)",
      answer: "where were you yesterday",
      explanation:
        "Ordre de la question : mot interrogatif + verbe + sujet → Where were you yesterday? Le mot interrogatif where se place en tête, puis on inverse were et you, et l'expression de temps reste à la fin.",
      hint: "Mot interrogatif d'abord, puis le verbe AVANT le sujet.",
    },
    {
      id: "e5was-8",
      level: 2,
      type: "input",
      question: "Mets à la forme négative contractée : « They were at home. » → « They ___ at home. » (un seul mot)",
      answer: "weren't",
      accept: ["were not"],
      explanation:
        "Were + not = weren't (forme contractée). La phrase devient : They weren't at home = Ils n'étaient pas à la maison. Pas de did avec be !",
      hint: "Were + not, en un seul mot avec une apostrophe.",
    },
    {
      id: "e5was-9",
      level: 3,
      type: "qcm",
      question: "Traduis : « Il y a trois ans, nous étions à Dublin. »",
      choices: [
        "Three years ago, we were in Dublin.",
        "Ago three years, we were in Dublin.",
        "There is three years, we was in Dublin.",
        "Three years ago, we was in Dublin.",
      ],
      answer: 0,
      explanation:
        "Deux pièges à la fois : « il y a + durée » se dit avec ago placé APRÈS la durée (three years ago), et we prend were, jamais was. La bonne phrase est : Three years ago, we were in Dublin.",
      hint: "Ago se place après la durée, et we va avec were.",
    },
    {
      id: "e5was-10",
      level: 3,
      type: "input",
      question: "Réponds brièvement à la forme affirmative : « Was the test easy? » → « Yes, ___. » (deux mots)",
      answer: "it was",
      explanation:
        "Réponse courte : Yes, it was. On reprend le sujet sous forme de pronom (the test → it) et l'auxiliaire de la question (was). On ne répète pas easy, et on ne contracte jamais une réponse courte affirmative.",
      hint: "The test est une chose : quel pronom le remplace ?",
    },
    {
      id: "e5was-11",
      level: 3,
      type: "truefalse",
      question: "Dans « There weren't any clouds in the sky. », la forme weren't est correcte.",
      answer: true,
      explanation:
        "Vrai ! Clouds est un pluriel, donc on utilise were → négation weren't : There weren't any clouds = Il n'y avait pas de nuages. Remarque le any, fréquent dans les phrases négatives.",
    },
    {
      id: "e5was-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Où étais-tu hier soir ? » (utilise last night, sans point d'interrogation)",
      answer: "where were you last night",
      explanation:
        "Where were you last night? Ordre : mot interrogatif (where) + verbe (were) + sujet (you) + expression de temps (last night). « Hier soir » se dit last night, pas « yesterday night » : c'est un calque à éviter.",
      hint: "« Hier soir » = last night. Pense à l'inversion verbe-sujet.",
    },
  ],
  videos: [
    {
      title: "Le verbe être en anglais : comment utiliser les formes was, were et been ?",
      youtubeId: "etg0yaO0qUk",
      channel: "ISpeakSpokeSpoken",
    },
  ],
};
