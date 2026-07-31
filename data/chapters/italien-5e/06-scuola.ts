import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-scuola",
  subject: "italien",
  grade: "5e",
  num: 6,
  title: "La scuola",
  domain: "donnees",
  domainLabel: "Vocabolario",
  icon: "Backpack",
  teaser: "Matières, affaires de classe, jours de la semaine… et dire ce que tu aimes avec mi piace.",
  objectives: [
    "Je connais les matières : matematica, storia, italiano, scienze…",
    "Je connais les objets de la classe : il quaderno, la penna, lo zaino…",
    "Je sais dire les jours de la semaine : lunedì, martedì…",
    "Je sais utiliser mi piace / mi piacciono (accord avec la chose aimée)",
    "Je sais parler de mes sports et loisirs préférés",
  ],
  lesson: [
    {
      title: "Les matières scolaires",
      paragraphs: [
        "Les matières se reconnaissent facilement : la matematica (les maths), la storia (l'histoire), la geografia (la géographie), le scienze (les sciences), l'italiano, il francese, l'inglese (l'anglais), la musica, l'arte (les arts plastiques), l'educazione fisica (l'EPS, souvent appelée « ginnastica »).",
        "Remarque : la matematica est au singulier en italien (« la » mathématique), et le scienze au pluriel.",
        "Pour donner son avis : La mia materia preferita è la storia (ma matière préférée est l'histoire).",
      ],
      example: [
        "la matematica → les maths",
        "la storia → l'histoire",
        "le scienze → les sciences",
        "l'educazione fisica → l'EPS",
      ],
      tip: "Prononciation de « scienze » : sc + i = son « ch », donc « chièntsé ». Et « storia » se dit « stôria » avec l'accent sur le o. Les noms de matières ne prennent pas de majuscule (l'italiano, le français…).",
    },
    {
      title: "Dans le sac : les objets de la classe",
      paragraphs: [
        "Dans lo zaino (le sac à dos — souviens-toi : article lo devant z !), on trouve : il libro (le livre), il quaderno (le cahier), la penna (le stylo), la matita (le crayon), la gomma (la gomme), il righello (la règle), l'astuccio (la trousse), il diario (l'agenda).",
        "Dans la classe : la lavagna (le tableau), il banco (le bureau de l'élève), la cattedra (le bureau du professeur), il professore / la professoressa.",
        "Phrases utiles : Ho dimenticato il quaderno (j'ai oublié mon cahier), Posso avere una penna? (je peux avoir un stylo ?).",
      ],
      example: [
        "lo zaino → le sac à dos",
        "il quaderno → le cahier",
        "la matita → le crayon",
        "l'astuccio → la trousse",
      ],
      tip: "Faux ami : « la gomma » veut dire la gomme… mais aussi le chewing-gum et le pneu ! Et « il banco » est le bureau de l'élève, pas la banque (la banque = la banca).",
    },
    {
      title: "Les jours de la semaine",
      paragraphs: [
        "I giorni della settimana : lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica. Les cinq premiers portent un accent grave sur le ì final : ne l'oublie pas !",
        "Comme en français, les jours ne prennent pas de majuscule. La semaine italienne commence le lundi.",
        "« Il weekend » se dit aussi « il fine settimana » (la fin de semaine). Pour dire « le lundi » (tous les lundis), on met l'article : il lunedì ho matematica (le lundi, j'ai maths).",
      ],
      example: [
        "lunedì → lundi, martedì → mardi",
        "mercoledì → mercredi, giovedì → jeudi",
        "venerdì → vendredi, sabato → samedi, domenica → dimanche",
        "Il sabato non ho scuola. → Le samedi, je n'ai pas école.",
      ],
      tip: "Cinq jours sur sept finissent en -dì (du latin « dies », le jour) avec un accent : lunedì, martedì, mercoledì, giovedì, venerdì. Seuls sabato et domenica échappent à la règle.",
    },
    {
      title: "Mi piace / mi piacciono : dire ce qu'on aime",
      figure: "it-piace",
      paragraphs: [
        "Pour dire « j'aime », l'italien dit littéralement « ça me plaît » : mi piace. Mi piace la musica = j'aime la musique (la musique me plaît).",
        "LE point important : le verbe s'accorde avec la chose aimée, pas avec toi ! Une seule chose → mi piace ; plusieurs choses → mi piacciono. Mi piace la pizza, MAIS mi piacciono le scienze.",
        "Devant un verbe, toujours le singulier : mi piace giocare a calcio (j'aime jouer au foot).",
        "Pour dire qu'on n'aime pas : non mi piace / non mi piacciono. Et pour demander à un ami : ti piace…? (tu aimes… ?).",
      ],
      example: [
        "Mi piace la matematica. → J'aime les maths.",
        "Mi piacciono i libri. → J'aime les livres.",
        "Non mi piace la storia. → Je n'aime pas l'histoire.",
        "Ti piace leggere? → Tu aimes lire ?",
      ],
      tip: "Demande-toi toujours : la chose aimée est-elle au singulier ou au pluriel ? Une pizza → mi piace. Des livres → mi piacciono. Exactement comme « gustar » en espagnol, si tu connais.",
    },
    {
      title: "Sports et loisirs",
      paragraphs: [
        "Les sports : il calcio (le foot — le sport roi en Italie !), il nuoto (la natation), la pallacanestro (le basket, dit aussi « il basket »), la pallavolo (le volley), la danza (la danse), il tennis.",
        "Pour dire qu'on pratique : giocare a + sport de ballon (gioco a calcio, je joue au foot) ; faire de : fare (faccio nuoto, je fais de la natation ; faccio danza).",
        "Les loisirs : leggere (lire), disegnare (dessiner), ascoltare la musica (écouter de la musique), guardare la TV (regarder la télé), i videogiochi (les jeux vidéo).",
      ],
      example: [
        "Gioco a calcio il mercoledì. → Je joue au foot le mercredi.",
        "Faccio nuoto. → Je fais de la natation.",
        "Mi piacciono i videogiochi. → J'aime les jeux vidéo.",
        "Mi piace disegnare. → J'aime dessiner.",
      ],
      tip: "« Calcio » veut dire le foot… mais aussi « le coup de pied » (et le calcium !). Prononciation : « kaltcho » — c devant i = « tch », et le i ne s'entend presque pas.",
    },
  ],
  exercises: [
    {
      id: "it6-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « le cahier » en italien ?",
      choices: ["la penna", "il quaderno", "lo zaino", "la matita"],
      answer: 1,
      explanation:
        "« Il quaderno » = le cahier. « La penna » = le stylo, « lo zaino » = le sac à dos, « la matita » = le crayon. Prononciation : « kouaderno », le qu italien se dit « kou ».",
      hint: "Les trois autres sont le stylo, le sac à dos et le crayon.",
    },
    {
      id: "it6-2",
      level: 1,
      type: "qcm",
      question: "Quel jour vient juste après « lunedì » ?",
      choices: ["mercoledì", "domenica", "martedì", "sabato"],
      answer: 2,
      explanation:
        "Après lunedì (lundi) vient martedì (mardi). L'ordre : lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica. Les cinq premiers finissent en -dì accentué.",
      hint: "Lundi… puis ? Les jours italiens ressemblent beaucoup aux jours français.",
    },
    {
      id: "it6-3",
      level: 1,
      type: "truefalse",
      question: "En italien, « la matematica » s'écrit au singulier, alors que le français dit « les mathématiques ».",
      answer: true,
      explanation:
        "Vrai ! L'italien dit « la matematica », au singulier. Mi piace la matematica = j'aime les maths. À l'inverse, « le scienze » (les sciences) est bien au pluriel.",
    },
    {
      id: "it6-4",
      level: 1,
      type: "input",
      question: "Complète : « mi … la musica » (j'aime la musique). Un seul mot.",
      answer: "piace",
      explanation:
        "« Mi piace la musica » = j'aime la musique, littéralement « la musique me plaît ». La chose aimée (la musica) est au singulier, donc « piace ». Avec un pluriel, ce serait « piacciono ».",
      hint: "La musica est au singulier : verbe au singulier aussi.",
    },
    {
      id: "it6-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'aime les livres » ?",
      choices: ["Mi piace i libri", "Mi piacciono i libri", "Amo il libri", "Mi piaccio i libri"],
      answer: 1,
      explanation:
        "« Mi piacciono i libri » : la chose aimée (i libri) est au pluriel, donc le verbe se met au pluriel : piacciono. « Mi piace i libri » est LA faute classique — le verbe s'accorde avec la chose aimée, pas avec « je ».",
      hint: "I libri est au pluriel : quel est le verbe au pluriel ?",
    },
    {
      id: "it6-6",
      level: 2,
      type: "input",
      question: "Écris en italien le jour « mercredi » (avec son accent).",
      answer: "mercoledì",
      accept: ["mercoledi"],
      explanation:
        "Mercredi = mercoledì, avec l'accent grave sur le ì final, comme lunedì, martedì, giovedì et venerdì. Seuls sabato et domenica n'ont pas cette finale en -dì.",
      hint: "Il finit en -dì accentué, comme la plupart des jours.",
    },
    {
      id: "it6-7",
      level: 2,
      type: "qcm",
      question: "Que signifie « Gioco a calcio il sabato » ?",
      choices: [
        "Je regarde le foot samedi soir",
        "Je joue au foot le samedi",
        "J'aime le calcul le samedi",
        "Je vais au match samedi",
      ],
      answer: 1,
      explanation:
        "« Gioco a calcio il sabato » = je joue au foot le samedi. Giocare a + sport (gioco a calcio), et l'article devant le jour (il sabato) donne le sens de « tous les samedis ». Il calcio = le foot, pas le calcul !",
      hint: "Giocare = jouer, il calcio = le sport roi en Italie.",
    },
    {
      id: "it6-8",
      level: 2,
      type: "truefalse",
      question: "« Ho dimenticato la gomma » peut vouloir dire « j'ai oublié ma gomme ».",
      answer: true,
      explanation:
        "Vrai ! « La gomma » = la gomme (et aussi le chewing-gum ou le pneu, selon le contexte — en classe, c'est la gomme). « Ho dimenticato » = j'ai oublié. En italien, l'article suffit souvent là où le français met « ma ».",
      hint: "Pense au contexte de la classe.",
    },
    {
      id: "it6-9",
      level: 3,
      type: "input",
      question: "Complète : « mi … le scienze » (j'aime les sciences). Un seul mot.",
      answer: "piacciono",
      explanation:
        "« Mi piacciono le scienze » : le scienze est au pluriel, donc piacciono. Attention à l'orthographe : i-a-c-c-i, avec le double c. Piace pour une chose, piacciono pour plusieurs — toujours accordé à la chose aimée.",
      hint: "Le scienze est pluriel : c'est la forme longue du verbe, avec un double c.",
    },
    {
      id: "it6-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correcte ?",
      choices: [
        "Mi piacciono giocare a calcio",
        "Mi piace giocare a calcio",
        "Mi piaccio giocare a calcio",
        "Piacciono mi giocare a calcio",
      ],
      answer: 1,
      explanation:
        "« Mi piace giocare a calcio » = j'aime jouer au foot. Devant un verbe à l'infinitif (giocare), on utilise toujours le singulier « piace », jamais « piacciono ». Le pluriel n'est que pour plusieurs choses : mi piacciono i libri.",
      hint: "Devant un infinitif, piace reste-t-il au singulier ou passe-t-il au pluriel ?",
    },
    {
      id: "it6-11",
      level: 3,
      type: "input",
      question: "Traduis en italien : « je fais de la natation » (2 mots, verbe fare).",
      answer: "faccio nuoto",
      explanation:
        "« Faccio nuoto » = je fais de la natation. Fare (faire) est irrégulier : faccio (je fais), fai, fa… Pour les sports sans ballon, on utilise fare : faccio nuoto, faccio danza. Pour les sports de ballon : giocare a (gioco a calcio).",
      hint: "Fare à la 1re personne (irrégulier, avec double c) + le nom du sport.",
    },
    {
      id: "it6-12",
      level: 3,
      type: "truefalse",
      question: "Dans « scienze », le groupe « sci » se prononce « ski ».",
      answer: false,
      explanation:
        "Faux ! Devant e ou i, « sc » se prononce « ch » : scienze = « chièntsé ». Le son « sk » n'existe que devant a, o, u ou h : scuola = « skouola », schermo = « skermo ». Même règle que pour c et g : doux devant e / i, dur ailleurs.",
      hint: "Rappelle-toi finisce, capisci… quel son fait « sc » devant i ?",
    },
  ],
  videos: [
    {
      title: "🇮🇹 J'aime / je n'aime pas en italien - Mi piace/ Non mi piace (LEZIONE 22)",
      youtubeId: "3EtygUJ6q24",
      channel: "L'italien avec Silvia",
    },
  ],
};
