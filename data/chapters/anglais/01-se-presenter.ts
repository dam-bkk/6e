import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-se-presenter",
  subject: "anglais",
  num: 1,
  title: "Hello! Se présenter",
  domain: "donnees",
  domainLabel: "Communication",
  icon: "Hand",
  teaser: "Saluer, dire son nom, son âge et son pays comme un vrai British.",
  objectives: [
    "Je sais saluer et prendre congé selon le moment de la journée",
    "Je sais me présenter : nom, âge, ville et pays",
    "Je connais des pays et des nationalités en anglais",
    "Je sais épeler un mot avec l'alphabet anglais",
    "Je sais utiliser les formules de politesse : please, thank you, sorry",
  ],
  lesson: [
    {
      title: "Saluer : hello, hi, good morning…",
      paragraphs: [
        "Pour dire bonjour, l'anglais a plusieurs mots selon la situation. Hello convient partout, hi est plus familier (entre copains). Selon le moment de la journée, on dit good morning (le matin), good afternoon (l'après-midi) et good evening (le soir).",
        "Attention : good night ne veut pas dire « bonsoir » ! On le dit uniquement au moment d'aller se coucher, comme « bonne nuit ». Pour dire au revoir : goodbye, bye, ou see you (« à bientôt »).",
        "Pour demander comment ça va : How are you? On répond souvent : I'm fine, thank you. And you?",
      ],
      example: [
        "Hello! I'm Emma. → Bonjour ! Je suis Emma.",
        "Good morning, Mr Smith! → Bonjour, monsieur Smith ! (le matin)",
        "How are you? – I'm fine, thanks. And you? → Comment vas-tu ? – Ça va bien, merci. Et toi ?",
        "Goodbye! See you tomorrow! → Au revoir ! À demain !",
      ],
      tip: "Good night = bonne nuit (au coucher seulement). Le soir, pour saluer quelqu'un, dis good evening.",
    },
    {
      title: "Dire son nom et son âge",
      paragraphs: [
        "Pour donner son nom : My name is Tom ou plus simplement I'm Tom. Pour demander : What's your name?",
        "Pour l'âge, c'est LE grand piège des francophones : en français on dit « j'ai 11 ans » avec le verbe avoir, mais en anglais on utilise le verbe être : I am eleven ou I am eleven years old. Jamais « I have eleven » !",
        "Pour demander l'âge : How old are you? (mot à mot : « quel âge es-tu ? »).",
      ],
      example: [
        "What's your name? – My name is Lily. → Comment t'appelles-tu ? – Je m'appelle Lily.",
        "How old are you? – I'm eleven years old. → Quel âge as-tu ? – J'ai onze ans.",
        "My brother is nine. → Mon frère a neuf ans.",
      ],
      tip: "L'âge en anglais, c'est toujours avec BE : I AM eleven. Si tu dis « I have eleven », un Anglais te demandera : « eleven quoi ? Onze chats ? »",
    },
    {
      title: "Dire d'où l'on vient : pays et nationalités",
      paragraphs: [
        "Pour demander l'origine de quelqu'un : Where are you from? On répond avec from + pays : I'm from France.",
        "On peut aussi utiliser l'adjectif de nationalité : I'm French. Attention, en anglais, les nationalités prennent TOUJOURS une majuscule : French, English, Spanish…",
        "Quelques pays et nationalités à connaître : France → French, England → English, Spain → Spanish, Italy → Italian, Germany → German, the United States → American, Ireland → Irish, Scotland → Scottish.",
      ],
      example: [
        "Where are you from? – I'm from Spain. I'm Spanish. → D'où viens-tu ? – Je viens d'Espagne. Je suis espagnole.",
        "Harry is from London. He's English. → Harry vient de Londres. Il est anglais.",
        "We live in Paris, in France. → Nous habitons à Paris, en France.",
      ],
      tip: "En anglais, pays ET nationalités prennent une majuscule : France, French. En français, seulement le pays : la France, mais « je suis française ».",
    },
    {
      title: "L'alphabet : épeler son nom",
      paragraphs: [
        "Savoir épeler (to spell) est très utile : au téléphone, pour un nom compliqué… La question est : How do you spell it? ou Can you spell your name, please?",
        "Certaines lettres se prononcent très différemment du français : A se dit « éï », E se dit « i », I se dit « aï », G se dit « dji », J se dit « djéï », R se dit « ar », W se dit « double you », Y se dit « waï ».",
        "Les paires piégeuses : E (« i ») et I (« aï ») s'échangent presque par rapport au français ; G (« dji ») et J (« djéï ») aussi !",
      ],
      example: [
        "How do you spell your name? – L-I-L-Y. → Comment épelles-tu ton prénom ? – L-I-L-Y.",
        "My surname is Brown: B-R-O-W-N. → Mon nom de famille est Brown : B-R-O-W-N.",
      ],
      tip: "Retiens les paires qui s'inversent : le E anglais se prononce comme notre « i », et le I anglais comme notre « aï ». Pareil pour G (« dji ») et J (« djéï »).",
    },
    {
      title: "La politesse : please, thank you, sorry",
      paragraphs: [
        "Les Britanniques sont très attachés à la politesse. Please (s'il te plaît) se place en général à la fin de la demande : Sit down, please.",
        "Pour remercier : thank you, ou plus familier thanks. On peut renforcer : thank you very much. Pour répondre à un merci : you're welcome (« de rien »).",
        "Pour s'excuser : sorry (pardon, désolé). Pour attirer l'attention de quelqu'un poliment ou demander de répéter : excuse me (« excusez-moi »).",
      ],
      example: [
        "Can I have a pen, please? → Est-ce que je peux avoir un stylo, s'il vous plaît ?",
        "Thank you very much! – You're welcome. → Merci beaucoup ! – De rien.",
        "Sorry, I'm late! → Désolé, je suis en retard !",
        "Excuse me, where is the library? → Excusez-moi, où est la bibliothèque ?",
      ],
      tip: "Sorry = je m'excuse d'une faute. Excuse me = j'attire poliment ton attention AVANT de déranger. On dit « Excuse me? » aussi pour faire répéter.",
    },
  ],
  exercises: [
    {
      id: "epre-1",
      level: 1,
      type: "qcm",
      question: "Il est 9 heures du matin. Comment salues-tu ton professeur ?",
      choices: ["Good night", "Good morning", "Good evening", "Goodbye"],
      answer: 1,
      explanation:
        "Le matin, on dit good morning. Good evening, c'est le soir ; good night se dit seulement au coucher (« bonne nuit ») ; goodbye veut dire « au revoir », pas « bonjour ».",
      hint: "Morning = le matin.",
    },
    {
      id: "epre-2",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « J'ai onze ans » en anglais ?",
      choices: ["I have eleven years.", "I am eleven years old.", "I have eleven years old.", "I am eleven ages."],
      answer: 1,
      explanation:
        "En anglais, l'âge se dit avec le verbe BE (être), pas HAVE : I am eleven (years old). « I have eleven years » est un calque du français, c'est une erreur classique !",
      hint: "En anglais, on EST son âge, on ne l'a pas.",
    },
    {
      id: "epre-3",
      level: 1,
      type: "truefalse",
      question: "En anglais, les nationalités s'écrivent avec une majuscule : « She is French. »",
      answer: true,
      explanation:
        "Vrai ! En anglais, les pays ET les adjectifs de nationalité prennent toujours une majuscule : French, English, Spanish. C'est différent du français, où l'on écrit « elle est française » sans majuscule.",
    },
    {
      id: "epre-4",
      level: 1,
      type: "input",
      question: "Complète la réponse : « How are you? – I'm ..., thank you. » (l'adjectif qui veut dire « bien »)",
      answer: "fine",
      explanation:
        "La réponse classique à How are you? est I'm fine, thank you (ou I'm fine, thanks). Fine signifie « bien », « en forme ». Tu peux aussi entendre I'm OK ou I'm very well.",
      hint: "I'm f..., thank you.",
    },
    {
      id: "epre-5",
      level: 2,
      type: "qcm",
      question: "Quelle question pose-t-on pour connaître l'âge de quelqu'un ?",
      choices: ["What age have you?", "How many years are you?", "How old are you?", "What old are you?"],
      answer: 2,
      explanation:
        "La question correcte est How old are you? (mot à mot : « quel âge es-tu ? »). Les autres propositions sont des calques du français qui n'existent pas en anglais.",
      hint: "Mot à mot, l'anglais demande « comment vieux es-tu ? ».",
    },
    {
      id: "epre-6",
      level: 2,
      type: "input",
      question: "Traduis en anglais : « Je viens de France. » (commence par « I »)",
      answer: "i am from france",
      accept: ["i'm from france", "i come from france"],
      explanation:
        "On dit I'm from France (ou I come from France). C'est la réponse à la question Where are you from? N'oublie pas la majuscule à France quand tu écris un vrai texte !",
      hint: "I'm ... France (deux petits mots au milieu… ou un seul !).",
    },
    {
      id: "epre-7",
      level: 2,
      type: "qcm",
      question: "Ton camarade te dit « Thank you very much! ». Que réponds-tu ?",
      choices: ["Please.", "You're welcome.", "Excuse me.", "Good night."],
      answer: 1,
      explanation:
        "Pour répondre à un merci, on dit You're welcome (« de rien », « je t'en prie »). Please sert à demander poliment, excuse me à attirer l'attention, et good night à souhaiter bonne nuit.",
      hint: "En français, on répondrait « de rien ».",
    },
    {
      id: "epre-8",
      level: 2,
      type: "truefalse",
      question: "La lettre E, en anglais, se prononce comme le « i » français.",
      answer: true,
      explanation:
        "Vrai ! Le E anglais se prononce « i », et le I anglais se prononce « aï ». Ces deux lettres sont le piège classique quand on épelle : si un Anglais te dit « E », écris bien E, pas I !",
      hint: "Pense aux paires de lettres qui « s'échangent » entre français et anglais.",
    },
    {
      id: "epre-9",
      level: 3,
      type: "input",
      question: "Ta correspondante s'appelle Kate. Traduis sa phrase : « Je m'appelle Kate et j'ai douze ans. » → « My name is Kate and I ... twelve. » Quel mot manque ?",
      answer: "am",
      accept: ["'m"],
      explanation:
        "L'âge se construit avec BE : I am twelve (ou I'm twelve). La phrase complète : My name is Kate and I am twelve. Surtout pas « I have twelve » : c'est le calque du français « j'ai douze ans ».",
      hint: "Encore le piège de l'âge : être ou avoir ?",
    },
    {
      id: "epre-10",
      level: 3,
      type: "qcm",
      question: "Tu veux demander ton chemin à un passant dans la rue à Londres. Comment commences-tu poliment ?",
      choices: ["Sorry, where is the station?", "Excuse me, where is the station, please?", "Hey! The station!", "Good night, where is the station?"],
      answer: 1,
      explanation:
        "Pour aborder poliment un inconnu, on commence par Excuse me, et on ajoute please à la demande : Excuse me, where is the station, please? Sorry sert plutôt à s'excuser d'une faute déjà commise.",
      hint: "Quel mot utilise-t-on pour attirer poliment l'attention AVANT de déranger ?",
    },
    {
      id: "epre-11",
      level: 3,
      type: "qcm",
      question: "Paolo is from Italy. Complète : « He is ... »",
      choices: ["Italy", "italian", "Italian", "Italish"],
      answer: 2,
      explanation:
        "Le pays est Italy, l'adjectif de nationalité est Italian — avec une majuscule obligatoire en anglais ! « italian » sans majuscule est donc faux, et « Italish » n'existe pas.",
      hint: "Deux choses à vérifier : le bon mot… et sa majuscule.",
    },
    {
      id: "epre-12",
      level: 3,
      type: "input",
      question: "Remets les mots dans l'ordre pour former la question : « from / are / where / you » (sans point d'interrogation)",
      answer: "where are you from",
      explanation:
        "La question est Where are you from? (« D'où viens-tu ? »). Ordre : mot interrogatif (where) + verbe be (are) + sujet (you) + from à la fin. Cette petite préposition en fin de question est très typique de l'anglais !",
      hint: "Commence par le mot interrogatif, et garde from pour la fin.",
    },
  ],
};
