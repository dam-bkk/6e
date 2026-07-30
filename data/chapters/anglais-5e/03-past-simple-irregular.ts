import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-past-simple-irregular",
  subject: "anglais",
  grade: "5e",
  num: 3,
  title: "Le prétérit des verbes irréguliers",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "Shuffle",
  teaser: "Go → went, see → saw : apprivoiser les verbes qui ne suivent pas la règle.",
  objectives: [
    "Je connais le prétérit des verbes irréguliers les plus fréquents",
    "Je sais raconter une histoire au passé avec des verbes irréguliers",
    "Je sais que la négation et les questions utilisent didn't / did + base verbale",
    "J'évite le piège n°1 : « I didn't went » n'existe pas",
  ],
  lesson: [
    {
      title: "C'est quoi, un verbe irrégulier ?",
      paragraphs: [
        "Certains verbes anglais, souvent les plus utilisés, refusent la règle du -ed : leur prétérit a une forme spéciale qu'il faut apprendre par coeur. Go devient went, see devient saw, have devient had.",
        "Bonne nouvelle : comme pour les verbes réguliers, la forme est la même à toutes les personnes. I went, she went, they went.",
        "Il y a environ 200 verbes irréguliers, mais une trentaine suffit pour raconter presque tout. Ce sont les verbes du quotidien : ils reviennent sans arrêt, donc tu les retiendras vite en lisant et en écoutant.",
      ],
      example: [
        "Yesterday I went to the cinema. → Hier je suis allé au cinéma.",
        "She saw her friends at the park. → Elle a vu ses amis au parc.",
        "We had pizza for dinner. → Nous avons mangé une pizza au dîner.",
      ],
      tip: "Impossible de deviner un prétérit irrégulier : « goed » et « seed » n'existent pas. Quand tu apprends un nouveau verbe, apprends tout de suite son prétérit avec lui : go-went, see-saw, comme un duo inséparable.",
    },
    {
      title: "Les indispensables à connaître",
      paragraphs: [
        "Les verbes de mouvement et d'action : go → went (aller), come → came (venir), get → got (obtenir, devenir), take → took (prendre), give → gave (donner), put → put (mettre), run → ran (courir), leave → left (partir).",
        "Les verbes de la vie quotidienne : have → had (avoir), eat → ate (manger), drink → drank (boire), make → made (faire, fabriquer), do → did (faire), buy → bought (acheter), wear → wore (porter un vêtement), sleep → slept (dormir).",
        "Les verbes de perception et de parole : see → saw (voir), hear → heard (entendre), say → said (dire), tell → told (raconter), speak → spoke (parler), read → read (lire), write → wrote (écrire), know → knew (savoir), think → thought (penser), find → found (trouver), meet → met (rencontrer), win → lost... non ! win → won (gagner) et lose → lost (perdre).",
      ],
      example: [
        "go → went, see → saw, have → had, eat → ate",
        "make → made, take → took, come → came, get → got",
        "say → said, think → thought, buy → bought, know → knew",
      ],
      tip: "Certains se ressemblent : buy → bought, think → thought, teach → taught. Repère ces familles en « -ought / -aught » : apprendre par paquets est bien plus facile qu'un par un.",
    },
    {
      title: "Raconter au passé",
      paragraphs: [
        "Pour raconter une journée, un week-end ou une histoire, on enchaîne les verbes au prétérit, reliés par des mots comme first (d'abord), then (ensuite), after that (après ça), finally (enfin).",
        "Dans un récit, verbes réguliers et irréguliers se mélangent naturellement : Last Saturday, I woke up late, watched TV, then went to town and bought a T-shirt.",
      ],
      example: [
        "Last summer, we went to Scotland. We saw amazing castles and ate fish and chips.",
        "→ L'été dernier, nous sommes allés en Écosse. Nous avons vu des châteaux magnifiques et mangé du fish and chips.",
        "First I did my homework, then I played video games. → D'abord j'ai fait mes devoirs, puis j'ai joué aux jeux vidéo.",
      ],
      tip: "Le prétérit anglais traduit deux temps français : le passé composé (je suis allé) ET l'imparfait de récit (j'allais). Ne cherche pas deux temps en anglais : went suffit.",
    },
    {
      title: "Négation et questions : retour à la base verbale",
      paragraphs: [
        "Voici LE piège n°1 de l'année. À la forme négative, on utilise didn't + base verbale, même pour un verbe irrégulier : I didn't go (et jamais « I didn't went »).",
        "Même chose pour les questions : Did you see the match? (et jamais « Did you saw »). La forme irrégulière (went, saw, ate...) n'apparaît QUE dans les phrases affirmatives.",
        "Exception que tu connais déjà : be n'utilise pas did. On dit I wasn't, Were you...?",
      ],
      example: [
        "I went to the party. / I didn't go to the party. / Did you go to the party?",
        "She saw the film. / She didn't see the film. / Did she see the film?",
        "They ate sushi. / They didn't eat sushi. / Did they eat sushi?",
      ],
      tip: "Retiens la formule : la marque du passé ne peut apparaître qu'UNE fois. Si did (ou didn't) est là, le verbe redevient tout nu : didn't go, didn't see, didn't eat. « I didn't went » = double passé = erreur n°1 des copies de 5e !",
    },
  ],
  exercises: [
    {
      id: "e5irr-1",
      level: 1,
      type: "qcm",
      question: "Quel est le prétérit du verbe go ?",
      choices: ["goed", "gone", "went", "goes"],
      answer: 2,
      explanation:
        "Go est irrégulier : son prétérit est went. « Goed » n'existe pas, et gone est le participe passé (utilisé plus tard avec have). Au prétérit, on dit : I went, she went, they went.",
      hint: "C'est une forme complètement différente de go.",
    },
    {
      id: "e5irr-2",
      level: 1,
      type: "qcm",
      question: "Complète : « Yesterday, she ___ her grandmother. »",
      choices: ["sees", "saw", "seed", "see"],
      answer: 1,
      explanation:
        "Yesterday impose le prétérit. See est irrégulier : see → saw. « Seed » (le -ed collé à un irrégulier) n'existe pas, c'est le réflexe à perdre.",
      hint: "See est un verbe irrégulier : pas de -ed !",
    },
    {
      id: "e5irr-3",
      level: 1,
      type: "input",
      question: "Écris le prétérit du verbe have.",
      answer: "had",
      explanation:
        "Have → had, pour toutes les personnes : I had, she had, we had. C'est l'un des verbes les plus fréquents de l'anglais, à connaître sans hésiter.",
      hint: "Trois lettres, ça commence par ha-.",
    },
    {
      id: "e5irr-4",
      level: 1,
      type: "truefalse",
      question: "Le prétérit de eat est ate.",
      answer: true,
      explanation:
        "Vrai ! Eat → ate : We ate pizza last night = Nous avons mangé une pizza hier soir. À ne pas confondre avec eaten, le participe passé que tu verras plus tard.",
    },
    {
      id: "e5irr-5",
      level: 2,
      type: "qcm",
      question: "Quelle phrase est correcte ?",
      choices: [
        "I didn't went to school.",
        "I didn't go to school.",
        "I don't went to school.",
        "I didn't goed to school.",
      ],
      answer: 1,
      explanation:
        "Après didn't, le verbe revient à la base verbale : I didn't go. « I didn't went » est LE piège n°1 : didn't porte déjà le passé, went ne doit pas le porter une deuxième fois.",
      hint: "Didn't + base verbale, même pour les irréguliers.",
    },
    {
      id: "e5irr-6",
      level: 2,
      type: "input",
      question: "Complète avec le verbe buy au prétérit : « He ___ a new bike last week. »",
      answer: "bought",
      explanation:
        "Buy → bought : He bought a new bike = Il a acheté un nouveau vélo. Bought fait partie de la famille en -ought, comme think → thought et teach → taught.",
      hint: "Même famille que think → thought.",
    },
    {
      id: "e5irr-7",
      level: 2,
      type: "input",
      question: "Complète avec le verbe take au prétérit : « She ___ the bus this morning. »",
      answer: "took",
      explanation:
        "Take → took : She took the bus = Elle a pris le bus. Le a de take devient oo, comme dans shake → shook.",
      hint: "Le a du verbe se transforme en double o.",
    },
    {
      id: "e5irr-8",
      level: 2,
      type: "qcm",
      question: "Choisis la question correcte :",
      choices: [
        "Did you saw the match?",
        "Did you see the match?",
        "Do you saw the match?",
        "Saw you the match?",
      ],
      answer: 1,
      explanation:
        "Dans une question au prétérit, did + sujet + base verbale : Did you see the match? La forme irrégulière saw n'apparaît que dans les affirmations (I saw the match), jamais après did.",
      hint: "Après did, le verbe redevient tout nu.",
    },
    {
      id: "e5irr-9",
      level: 3,
      type: "input",
      question: "Mets à la forme négative contractée : « They ate all the cake. » → « They ___ all the cake. » (deux mots)",
      answer: "didn't eat",
      accept: ["did not eat"],
      explanation:
        "Ate redevient eat après didn't : They didn't eat all the cake = Ils n'ont pas mangé tout le gâteau. La forme irrégulière disparaît dès que didn't apparaît.",
      hint: "Ate est la forme passée : quelle est la base verbale ?",
    },
    {
      id: "e5irr-10",
      level: 3,
      type: "qcm",
      question: "Complète le récit : « Last Sunday, I ___ up late, ___ breakfast and ___ to the park. »",
      choices: [
        "woke / had / went",
        "waked / haved / goed",
        "woke / had / gone",
        "wake / have / went",
      ],
      answer: 0,
      explanation:
        "Trois irréguliers d'affilée : wake → woke, have → had, go → went. « Gone » est le participe passé, pas le prétérit : on ne peut pas dire « I gone to the park ».",
      hint: "Les trois verbes sont irréguliers : wake, have, go.",
    },
    {
      id: "e5irr-11",
      level: 3,
      type: "truefalse",
      question: "Dans « We didn't wasn't happy », il y a deux erreurs.",
      answer: true,
      explanation:
        "Vrai, cette phrase est doublement fausse ! D'abord, be n'utilise jamais did pour sa négation. Ensuite, on ne cumule pas deux négations. La phrase correcte est simplement : We weren't happy (avec were car le sujet est we).",
    },
    {
      id: "e5irr-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Elle n'a pas vu le film. » (forme contractée)",
      answer: "she didn't see the film",
      accept: ["she did not see the film", "she didn't see the movie", "she did not see the movie"],
      explanation:
        "She didn't see the film. Deux vérifications : didn't (et pas doesn't, car on parle du passé) + base verbale see (et surtout pas saw : « she didn't saw » est le piège n°1 du chapitre).",
      hint: "Didn't + base verbale, jamais didn't + saw.",
    },
  ],
};
