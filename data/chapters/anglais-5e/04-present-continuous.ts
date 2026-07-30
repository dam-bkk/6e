import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-present-continuous",
  subject: "anglais",
  grade: "5e",
  num: 4,
  title: "Présent simple ou présent en -ing ?",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "PlayCircle",
  teaser: "I play ou I'm playing ? Choisir le bon présent selon la situation.",
  objectives: [
    "Je sais former le présent en -ing : be + verbe-ing",
    "Je connais les règles d'orthographe : run → running, make → making",
    "Je sais choisir entre présent simple (habitude) et présent en -ing (action en cours)",
    "Je reconnais les marqueurs de temps : now, at the moment / every day, usually",
    "Je sais que certains verbes (like, want, know) s'utilisent rarement en -ing",
  ],
  lesson: [
    {
      title: "La formation : be + verbe-ing",
      paragraphs: [
        "Le présent en -ing (present continuous) se construit avec deux ingrédients obligatoires : le verbe be conjugué au présent (am, is, are) + le verbe avec la terminaison -ing.",
        "I am reading, she is playing, they are watching. Sans be, la phrase est fausse : « I reading » n'existe pas.",
        "Négation et questions se font avec be, comme d'habitude : She isn't listening. Are you working? – Yes, I am.",
      ],
      example: [
        "I'm doing my homework. → Je suis en train de faire mes devoirs.",
        "She's talking to her friend. → Elle est en train de parler à son amie.",
        "Are you listening to me? → Est-ce que tu m'écoutes (là) ?",
      ],
      tip: "Deux morceaux, toujours : BE + V-ing. Si tu oublies le be (« He playing football »), la phrase est incomplète. Vérifie chaque phrase en -ing : où est mon am/is/are ?",
    },
    {
      title: "L'orthographe du -ing",
      paragraphs: [
        "Cas général : on ajoute simplement -ing : play → playing, watch → watching, read → reading.",
        "Cas 1 : le verbe se termine par -e muet → le e disparaît : make → making, write → writing, dance → dancing.",
        "Cas 2 : verbe court en consonne-voyelle-consonne → on double la consonne finale : run → running, swim → swimming, sit → sitting, get → getting. C'est la même logique que stop → stopped au prétérit.",
      ],
      example: [
        "play → playing (rien de spécial)",
        "make → making (le e saute)",
        "run → running (on double le n)",
        "swim → swimming (on double le m)",
      ],
      tip: "Le e muet final saute toujours devant -ing : writing, having, coming. « Writeing » ou « makeing » sont des fautes très visibles : traque les e en trop !",
    },
    {
      title: "Action en cours ou habitude ?",
      figure: "en5-now-vs-everyday",
      paragraphs: [
        "Le présent en -ing décrit une action en train de se dérouler au moment où l'on parle : I'm eating = je suis en train de manger (là, maintenant).",
        "Le présent simple décrit une habitude, une généralité, quelque chose de vrai en permanence : I eat cereal for breakfast = je mange des céréales au petit-déjeuner (en général).",
        "Compare : She plays tennis (elle fait du tennis, c'est son activité) et She's playing tennis (elle est sur le court en ce moment même). Le français dit « elle joue » dans les deux cas : c'est le contexte anglais qui impose le choix.",
      ],
      example: [
        "I usually walk to school, but today I'm taking the bus.",
        "→ D'habitude je vais à l'école à pied, mais aujourd'hui je prends le bus.",
        "Listen! The birds are singing. → Écoute ! Les oiseaux chantent (en ce moment).",
      ],
      tip: "Astuce de traduction : si tu peux ajouter « en train de » en français, c'est le présent en -ing. « Elle joue au tennis (en train de) » → She's playing. Sinon, présent simple.",
    },
    {
      title: "Les marqueurs de temps : tes indices",
      paragraphs: [
        "Certains mots trahissent le présent en -ing : now (maintenant), at the moment (en ce moment), today (aujourd'hui), Look! (regarde !), Listen! (écoute !).",
        "D'autres annoncent le présent simple : every day (tous les jours), usually (d'habitude), often (souvent), always (toujours), never (jamais), on Sundays (le dimanche).",
        "Dans un exercice, cherche d'abord le marqueur : il te donne presque toujours la réponse.",
      ],
      example: [
        "He watches TV every evening. → présent simple (habitude)",
        "He's watching TV at the moment. → présent en -ing (en ce moment)",
        "Look! It's raining! → Regarde ! Il pleut !",
      ],
      tip: "Usually, often, always, never se placent AVANT le verbe au présent simple : She often plays tennis. Ils vont presque toujours avec le présent simple, jamais avec now.",
    },
    {
      title: "Les verbes qui n'aiment pas le -ing",
      paragraphs: [
        "Certains verbes décrivent un état, un sentiment ou une opinion plutôt qu'une action : like, love, hate, want, need, know, understand, prefer. Ces verbes s'utilisent au présent simple, même pour parler de maintenant.",
        "On dit I want an ice cream (et pas « I'm wanting »), I know the answer (et pas « I'm knowing »). En 5e, retiens surtout : like, love, want, know, understand = présent simple.",
      ],
      example: [
        "I like this song. → J'aime cette chanson. (pas « I'm liking »)",
        "She wants a new phone. → Elle veut un nouveau téléphone.",
        "I don't understand this exercise. → Je ne comprends pas cet exercice.",
      ],
      tip: "Un état n'est pas une action : on ne peut pas être « en train de savoir » ou « en train de vouloir ». Si le verbe décrit ce qui se passe dans ta tête ou ton coeur, présent simple.",
    },
  ],
  exercises: [
    {
      id: "e5ing-1",
      level: 1,
      type: "qcm",
      question: "Complète : « Look! It ___ raining. »",
      choices: ["is", "are", "do", "does"],
      answer: 0,
      explanation:
        "Le présent en -ing se forme avec be : avec it, c'est is → It is raining (souvent contracté en It's raining). Look! est un marqueur typique d'une action en cours.",
      hint: "Be + V-ing : quelle forme de be va avec it ?",
    },
    {
      id: "e5ing-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la forme en -ing du verbe run ?",
      choices: ["runing", "runninng", "running", "runeing"],
      answer: 2,
      explanation:
        "Run est un verbe court en consonne-voyelle-consonne (r-u-n) : on double la consonne finale → running. Avec un seul n, « runing » se prononcerait différemment.",
      hint: "Consonne-voyelle-consonne : on double la dernière lettre.",
    },
    {
      id: "e5ing-3",
      level: 1,
      type: "input",
      question: "Écris la forme en -ing du verbe make.",
      answer: "making",
      explanation:
        "Make se termine par un -e muet : il disparaît devant -ing → making. « Makeing » est une faute classique : le e saute toujours.",
      hint: "Que devient le -e final devant -ing ?",
    },
    {
      id: "e5ing-4",
      level: 1,
      type: "truefalse",
      question: "La phrase « He playing football now. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Il manque le verbe be : He IS playing football now. Le présent en -ing a toujours deux morceaux : be (am/is/are) + verbe-ing. Sans be, la phrase est incomplète.",
    },
    {
      id: "e5ing-5",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne forme : « She ___ tennis every Saturday. »",
      choices: ["is playing", "plays", "playing", "play"],
      answer: 1,
      explanation:
        "Every Saturday indique une habitude → présent simple, avec le -s de la 3e personne : She plays tennis every Saturday. Le présent en -ing serait pour une action en cours (now, at the moment).",
      hint: "Every Saturday : habitude ou action en cours ?",
    },
    {
      id: "e5ing-6",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne forme : « Be quiet! The baby ___ at the moment. »",
      choices: ["sleeps", "sleep", "is sleeping", "sleeping"],
      answer: 2,
      explanation:
        "At the moment signale une action en cours → présent en -ing : The baby is sleeping = Le bébé est en train de dormir. « Sleeping » seul ne suffit pas : il faut le be.",
      hint: "At the moment = en ce moment : quel présent ?",
    },
    {
      id: "e5ing-7",
      level: 2,
      type: "input",
      question: "Complète avec le verbe swim au présent en -ing : « They are ___ in the lake. »",
      answer: "swimming",
      explanation:
        "Swim est un verbe court en consonne-voyelle-consonne (w-i-m) : on double le m → swimming. They are swimming = Ils sont en train de nager.",
      hint: "Comme run → running : on double la consonne finale.",
    },
    {
      id: "e5ing-8",
      level: 2,
      type: "truefalse",
      question: "On peut dire : « I'm wanting an ice cream. »",
      answer: false,
      explanation:
        "Faux ! Want est un verbe d'état (il décrit un désir, pas une action) : il s'utilise au présent simple, même pour maintenant → I want an ice cream. Même famille : like, love, know, understand.",
    },
    {
      id: "e5ing-9",
      level: 3,
      type: "qcm",
      question: "Complète : « I usually ___ to school, but today I ___ the bus. »",
      choices: [
        "walk / am taking",
        "am walking / take",
        "walk / take",
        "am walking / am taking",
      ],
      answer: 0,
      explanation:
        "Usually = habitude → présent simple (I walk). Today + situation exceptionnelle = action en cours → présent en -ing (I am taking the bus). C'est le contraste typique entre les deux présents.",
      hint: "Usually annonce une habitude ; today annonce l'exception d'aujourd'hui.",
    },
    {
      id: "e5ing-10",
      level: 3,
      type: "input",
      question: "Mets à la forme négative contractée avec isn't : « She is listening. » → « She ___ listening. » (un seul mot)",
      answer: "isn't",
      accept: ["is not"],
      explanation:
        "La négation du présent en -ing se fait sur be : She isn't listening = Elle n'écoute pas. Pas de don't ni doesn't ici : c'est be qui porte la négation.",
      hint: "La négation porte sur be, pas sur le verbe en -ing.",
    },
    {
      id: "e5ing-11",
      level: 3,
      type: "input",
      question: "Remets la question dans l'ordre : « doing / what / you / are / ? » (sans point d'interrogation)",
      answer: "what are you doing",
      explanation:
        "Question au présent en -ing : mot interrogatif + be + sujet + verbe-ing → What are you doing? = Qu'est-ce que tu fais (en ce moment) ? L'inversion se fait entre are et you.",
      hint: "Mot interrogatif, puis be, puis le sujet.",
    },
    {
      id: "e5ing-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Écoute ! Ils chantent. » (utilise Listen! et la forme contractée they're)",
      answer: "listen! they're singing",
      accept: ["listen they're singing", "listen! they are singing", "listen they are singing"],
      explanation:
        "Listen! They're singing. « Ils chantent » ici = action en cours (on l'entend maintenant) → présent en -ing : they are singing, contracté en they're singing. Le présent simple they sing voudrait dire « ils chantent en général ».",
      hint: "On les entend maintenant : quel présent choisir ?",
    },
  ],
  videos: [
    {
      title: "Present simple VS present be+ing : utilisation - Anglais - 3e - Les Bons Profs",
      youtubeId: "cjH9mZp7Ij4",
      channel: "Les Bons Profs",
    },
  ],
};
