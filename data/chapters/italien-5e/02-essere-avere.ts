import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-essere-avere",
  subject: "italien",
  grade: "5e",
  num: 2,
  title: "Essere et avere",
  domain: "geometrie",
  domainLabel: "Grammatica",
  icon: "Anchor",
  teaser: "Les deux verbes les plus importants de l'italien : être et avoir, au présent.",
  objectives: [
    "Je sais conjuguer essere au présent : sono, sei, è, siamo, siete, sono",
    "Je sais conjuguer avere au présent : ho, hai, ha, abbiamo, avete, hanno",
    "Je sais que l'italien omet souvent les pronoms sujets (io, tu…)",
    "Je connais les expressions avec avere : ho fame, ho sete, ho … anni",
    "Je sais faire une phrase négative avec non",
  ],
  lesson: [
    {
      title: "Essere (être) au présent",
      paragraphs: [
        "Le verbe essere (être) est irrégulier, comme en français. Au présent : (io) sono, (tu) sei, (lui / lei) è, (noi) siamo, (voi) siete, (loro) sono.",
        "Remarque une curiosité : « sono » sert à la fois pour « je suis » et « ils / elles sont ». C'est le contexte (ou le sujet) qui fait la différence.",
        "Le « è » (il / elle est) porte un accent grave obligatoire. Sans accent, « e » veut dire « et » ! Sono alta e bruna = je suis grande et brune ; Lei è alta = elle est grande.",
      ],
      example: [
        "Sono francese. → Je suis français(e).",
        "Sei stanco? → Tu es fatigué ?",
        "Marco è simpatico. → Marco est sympa.",
        "Siamo amici. → Nous sommes amis.",
        "I ragazzi sono a scuola. → Les garçons sont à l'école.",
      ],
      tip: "è = il / elle est (avec accent) ; e = et (sans accent). Une seule petite barre change tout le sens de la phrase : ne l'oublie jamais à l'écrit.",
    },
    {
      title: "Avere (avoir) au présent",
      paragraphs: [
        "Le verbe avere (avoir) au présent : (io) ho, (tu) hai, (lui / lei) ha, (noi) abbiamo, (voi) avete, (loro) hanno.",
        "Le h de ho, hai, ha, hanno ne se prononce jamais. Il sert uniquement à distinguer les mots à l'écrit : ho (j'ai) / o (ou), ha (il a) / a (à), hanno (ils ont) / anno (année).",
        "Attention au double n de « hanno » (ils ont) et de « abbiamo » avec son double b : les doubles consonnes s'écrivent ET se prononcent.",
      ],
      example: [
        "Ho un cane. → J'ai un chien.",
        "Hai una sorella? → Tu as une soeur ?",
        "Giulia ha dodici anni. → Giulia a 12 ans.",
        "Abbiamo un esame. → Nous avons un examen.",
        "Hanno una casa a Roma. → Ils ont une maison à Rome.",
      ],
      tip: "« Hanno » (ils ont) et « anno » (année) se prononcent pareil ! Seul le h écrit les distingue : Hanno dodici anni = ils ont 12 ans.",
    },
    {
      title: "Les pronoms sujets ? Souvent inutiles !",
      paragraphs: [
        "Grande différence avec le français : en italien, on ne dit presque jamais les pronoms sujets (io, tu, lui, lei, noi, voi, loro). La terminaison du verbe suffit à savoir qui parle.",
        "On dit donc « Sono italiano » et pas « Io sono italiano ». Le pronom n'apparaît que pour insister ou comparer : « Io sono francese, ma lui è italiano » (moi je suis français, mais lui est italien).",
        "C'est pour cela qu'il faut connaître les conjugaisons par coeur : le verbe porte toute l'information !",
      ],
      example: [
        "Sei pronto? → Tu es prêt ? (pas besoin de « tu »)",
        "Abbiamo fame. → Nous avons faim.",
        "Io ho dieci anni, e tu? → Moi, j'ai 10 ans, et toi ? (insistance)",
      ],
      tip: "Si tu traduis mot à mot depuis le français en gardant tous les pronoms, ton italien sonnera bizarre. Entraîne-toi à faire des phrases qui commencent directement par le verbe.",
    },
    {
      title: "Ho fame, ho sete : les expressions avec avere",
      paragraphs: [
        "L'italien utilise AVERE là où le français utilise parfois être ou d'autres tournures. Il faut apprendre ces expressions telles quelles : ho fame (j'ai faim), ho sete (j'ai soif), ho sonno (j'ai sommeil), ho freddo (j'ai froid), ho caldo (j'ai chaud), ho paura (j'ai peur).",
        "Et bien sûr l'âge : ho dodici anni (j'ai 12 ans). Là, français et italien sont d'accord — c'est l'anglais qui fait autrement.",
        "Le calque à éviter : ne traduis pas « je suis fatigué » par une expression avec avere ! On dit « sono stanco / stanca » avec essere. Fatigué est un adjectif, pas une sensation avec avere.",
      ],
      example: [
        "Ho fame! C'è la pizza? → J'ai faim ! Il y a de la pizza ?",
        "Hai sete? Ecco l'acqua. → Tu as soif ? Voilà de l'eau.",
        "Il bambino ha sonno. → L'enfant a sommeil.",
        "Sono stanca. → Je suis fatiguée.",
      ],
      tip: "Fame, sete, sonno, freddo, caldo, paura, anni : toutes ces expressions marchent avec AVERE, comme en français. Pratique : tu peux presque toujours traduire « j'ai … » par « ho … ».",
    },
    {
      title: "Dire non : la négation",
      paragraphs: [
        "La négation italienne est plus simple que la française : un seul mot, « non », placé juste devant le verbe. Pas de « ne … pas » en deux morceaux !",
        "Non sono italiano = je ne suis pas italien. Non ho fame = je n'ai pas faim.",
        "Pour répondre négativement à une question, on répète souvent : « No, non ho sete » (non, je n'ai pas soif). « No » répond à la question, « non » nie le verbe.",
      ],
      example: [
        "Non sei stanco? → Tu n'es pas fatigué ?",
        "Non abbiamo paura. → Nous n'avons pas peur.",
        "— Hai fame? — No, non ho fame. → — Tu as faim ? — Non, je n'ai pas faim.",
      ],
      tip: "No ou non ? « No » = la réponse « non » toute seule. « Non » = devant un verbe pour le nier. No, non capisco = non, je ne comprends pas.",
    },
  ],
  exercises: [
    {
      id: "it2-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « je suis » en italien ?",
      choices: ["sei", "sono", "siamo", "ho"],
      answer: 1,
      explanation:
        "« Sono » = je suis (et aussi « ils / elles sont »). « Sei » = tu es, « siamo » = nous sommes, « ho » = j'ai (verbe avere, pas essere).",
      hint: "C'est aussi la forme de « ils sont » : elle sert deux fois dans la conjugaison.",
    },
    {
      id: "it2-2",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « il a » en italien ?",
      choices: ["hai", "è", "ha", "hanno"],
      answer: 2,
      explanation:
        "« Ha » = il / elle a. « Hai » = tu as, « hanno » = ils ont, « è » = il / elle est (verbe essere). Le h de ha ne se prononce pas : il distingue seulement « ha » (il a) de « a » (à).",
      hint: "C'est la 3e personne du singulier de avere, avec un h muet.",
    },
    {
      id: "it2-3",
      level: 1,
      type: "truefalse",
      question: "En italien, on est obligé de dire le pronom sujet : « io sono », jamais « sono » tout seul.",
      answer: false,
      explanation:
        "Faux ! C'est l'inverse : l'italien omet presque toujours le pronom sujet. On dit « Sono francese », pas « Io sono francese ». Le pronom ne sert qu'à insister : Io sono francese, ma lui è italiano.",
      hint: "La terminaison du verbe indique déjà la personne… le pronom est-il vraiment utile ?",
    },
    {
      id: "it2-4",
      level: 1,
      type: "input",
      question: "Complète avec essere : « Marco … simpatico » (il est). Un seul mot, avec son accent.",
      answer: "è",
      accept: ["e"],
      explanation:
        "« Marco è simpatico » = Marco est sympa. « È » (il / elle est) porte un accent grave obligatoire : sans accent, « e » signifie « et ». C'est la faute d'orthographe la plus courante en italien !",
      hint: "Une seule lettre… mais n'oublie pas son accent grave.",
    },
    {
      id: "it2-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « nous avons » en italien ?",
      choices: ["avete", "abbiamo", "hanno", "siamo"],
      answer: 1,
      explanation:
        "« Abbiamo » = nous avons, avec un double b. « Avete » = vous avez, « hanno » = ils ont, « siamo » = nous sommes (essere). Toutes les formes « nous » du présent finissent en -iamo : siamo, abbiamo, parliamo.",
      hint: "Les formes « nous » finissent toujours en -iamo.",
    },
    {
      id: "it2-6",
      level: 2,
      type: "input",
      question: "Mets la phrase à la forme négative en ajoutant UN mot : « … ho sete » (je n'ai pas soif).",
      answer: "non",
      explanation:
        "« Non ho sete » = je n'ai pas soif. La négation italienne, c'est un seul mot : « non », placé juste devant le verbe. Pas de « ne … pas » en deux morceaux comme en français.",
      hint: "Un seul mot suffit, placé devant le verbe.",
    },
    {
      id: "it2-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'ai faim » en italien ?",
      choices: ["Sono fame", "Ho fame", "Ho fama", "Sono affamato di fame"],
      answer: 1,
      explanation:
        "« Ho fame » = j'ai faim, avec AVERE, comme en français. « Sono fame » est impossible. Attention aussi à « fama » qui existe mais veut dire « la célébrité » ! Même modèle : ho sete, ho sonno, ho freddo, ho paura.",
      hint: "Comme en français : on « a » faim.",
    },
    {
      id: "it2-8",
      level: 2,
      type: "truefalse",
      question: "« Hanno » (ils ont) et « anno » (année) se prononcent exactement pareil.",
      answer: true,
      explanation:
        "Vrai ! Le h italien est toujours muet : hanno et anno se prononcent tous les deux « an-no » (avec le double n bien appuyé). Seule l'orthographe les distingue : Hanno dodici anni = ils ont 12 ans.",
    },
    {
      id: "it2-9",
      level: 3,
      type: "input",
      question: "Complète avec avere : « i miei amici … paura del buio » (mes amis ont peur du noir). Un seul mot.",
      answer: "hanno",
      explanation:
        "« I miei amici hanno paura » = mes amis ont peur. 3e personne du pluriel de avere : hanno, avec h muet et double n. « Avere paura » = avoir peur, comme en français.",
      hint: "3e personne du pluriel de avere : h + le mot qui veut dire « année ».",
    },
    {
      id: "it2-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correcte pour dire « je suis fatiguée » (une fille parle) ?",
      choices: ["Ho stanca", "Sono stanca", "Ho fatica", "Sono stanco"],
      answer: 1,
      explanation:
        "« Sono stanca » : fatigué est un adjectif, donc verbe essere, et il s'accorde (stancA pour une fille, stancO pour un garçon). « Ho stanca » est un calque impossible : avere sert pour fame, sete, sonno… pas pour les adjectifs.",
      hint: "Fatigué est un adjectif qui s'accorde : ce n'est pas une expression avec avere.",
    },
    {
      id: "it2-11",
      level: 3,
      type: "input",
      question: "Traduis en italien : « nous sommes amis » (2 mots).",
      answer: "siamo amici",
      explanation:
        "« Siamo amici » : essere à la 1re personne du pluriel (siamo) + amici (pluriel de amico). Pas besoin du pronom « noi ». Remarque le pluriel en -i : amico → amici (prononcé « amitchi », car c + i = son doux).",
      hint: "Pas besoin de pronom : commence directement par le verbe en -iamo.",
    },
    {
      id: "it2-12",
      level: 3,
      type: "truefalse",
      question: "Dans la phrase « Lucia è alta e bionda », le premier « è » et le « e » du milieu sont le même mot.",
      answer: false,
      explanation:
        "Faux ! « È » avec accent = « elle est » (verbe essere) ; « e » sans accent = « et ». La phrase signifie « Lucia est grande et blonde ». L'accent grave change complètement le mot : c'est pour cela qu'il est obligatoire.",
      hint: "Compare bien : l'un porte un accent, l'autre non.",
    },
  ],
};
