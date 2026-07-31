import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-verbi",
  subject: "italien",
  grade: "5e",
  num: 4,
  title: "Le présent des verbes en -are, -ere, -ire",
  domain: "geometrie",
  domainLabel: "Grammatica",
  icon: "Repeat",
  teaser: "Parlare, prendere, dormire : conjuguer les trois groupes au présent et poser des questions.",
  objectives: [
    "Je sais conjuguer un verbe en -are au présent : parlo, parli, parla…",
    "Je sais conjuguer un verbe en -ere : prendo, prendi, prende…",
    "Je sais conjuguer un verbe en -ire : dormo, dormi, dorme…",
    "Je connais le groupe en -isc- : finire → finisco",
    "Je sais poser des questions simples : Dove abiti? Cosa mangi?",
  ],
  lesson: [
    {
      title: "Les trois groupes : -are, -ere, -ire",
      figure: "it-verbi",
      paragraphs: [
        "Tous les verbes italiens réguliers se rangent en trois groupes, selon la fin de leur infinitif : -are (parlare, parler), -ere (prendere, prendre), -ire (dormire, dormir).",
        "Pour conjuguer, on enlève la terminaison de l'infinitif et on garde le radical : parl-, prend-, dorm-. Puis on ajoute les terminaisons du présent.",
        "Bonne nouvelle : trois personnes ont les MÊMES terminaisons dans les trois groupes : tu → -i, noi → -iamo, voi → -te (avec la voyelle du groupe : -ate, -ete, -ite).",
      ],
      example: [
        "parlare → parl- (radical)",
        "prendere → prend-",
        "dormire → dorm-",
      ],
      tip: "Repère le groupe d'un verbe en regardant les 3 dernières lettres de l'infinitif : -ARE, -ERE ou -IRE. C'est la première chose à faire avant de conjuguer.",
    },
    {
      title: "Le groupe -are : parlare",
      paragraphs: [
        "Parlare (parler) au présent : parlo, parli, parla, parliamo, parlate, parlano.",
        "C'est le groupe le plus nombreux : abitare (habiter), mangiare (manger), ascoltare (écouter), giocare (jouer), studiare (étudier), amare (aimer)…",
        "Attention à l'accent tonique de « parlano » (ils parlent) : on appuie sur PAR, pas sur la fin. On dit « PARlano », jamais « parlAno ».",
      ],
      example: [
        "Parlo italiano e francese. → Je parle italien et français.",
        "Marco abita a Milano. → Marco habite à Milan.",
        "Mangiamo la pizza. → Nous mangeons la pizza.",
        "I ragazzi giocano a calcio. → Les garçons jouent au foot.",
      ],
      tip: "La 3e personne du pluriel (-ano) ne porte jamais l'accent de la voix sur sa terminaison : PARlano, ABitano, MANgiano. C'est LE piège de prononciation des débutants.",
    },
    {
      title: "Les groupes -ere et -ire : prendere, dormire",
      paragraphs: [
        "Prendere (prendre) : prendo, prendi, prende, prendiamo, prendete, prendono. Autres verbes : vedere (voir), leggere (lire), scrivere (écrire), vivere (vivre).",
        "Dormire (dormir) : dormo, dormi, dorme, dormiamo, dormite, dormono. Autres verbes : aprire (ouvrir), partire (partir), sentire (entendre).",
        "Compare les trois groupes à la 3e personne du singulier : parlA / prendE / dormE. Le -are donne -a, les deux autres donnent -e. C'est la principale différence !",
      ],
      example: [
        "Prendo l'autobus. → Je prends le bus.",
        "Leggi un libro? → Tu lis un livre ?",
        "Il gatto dorme. → Le chat dort.",
        "Apriamo la finestra. → Nous ouvrons la fenêtre.",
      ],
      tip: "Pour t'y retrouver : lui / lei = -a pour les verbes en -ARE (parla), -e pour les autres (prende, dorme). Si tu hésites, regarde d'abord l'infinitif.",
    },
    {
      title: "Le groupe en -isc- : finire → finisco",
      paragraphs: [
        "Certains verbes en -ire ajoutent « -isc- » entre le radical et la terminaison, à toutes les personnes SAUF noi et voi. Le modèle : finire (finir) → finisco, finisci, finisce, finiamo, finite, finiscono.",
        "Autres verbes de cette famille : capire (comprendre) → capisco ; preferire (préférer) → preferisco ; pulire (nettoyer) → pulisco.",
        "Prononciation : « sc » devant i ou e se prononce « ch » comme dans « chat ». Finisce = « finiché », capisci = « capichi ». Mais dans finiscono, sc + o = son dur « sk » : « finiskono ».",
      ],
      example: [
        "Finisco i compiti. → Je finis mes devoirs.",
        "Non capisco! → Je ne comprends pas !",
        "Preferisci la pizza o la pasta? → Tu préfères la pizza ou les pâtes ?",
        "Finiamo alle quattro. → Nous finissons à quatre heures.",
      ],
      tip: "« Non capisco » (je ne comprends pas) est LA phrase de survie à connaître par coeur. Et souviens-toi : noi et voi n'ont jamais de -isc- (finiamo, finite).",
    },
    {
      title: "Poser des questions : dove, cosa, quando…",
      paragraphs: [
        "Poser une question en italien est très simple : on garde la phrase telle quelle et on monte la voix à la fin (à l'écrit, un simple point d'interrogation). Parli italiano? = tu parles italien ?",
        "Les mots interrogatifs à connaître : dove (où), cosa / che cosa (que, quoi), quando (quand), come (comment), perché (pourquoi), chi (qui), quanto (combien).",
        "La question type : « Dove abiti? » (où habites-tu ?) → « Abito a Torino » (j'habite à Turin). Remarque le « a » devant le nom de ville.",
      ],
      example: [
        "Dove abiti? → Où habites-tu ?",
        "Cosa mangi? → Qu'est-ce que tu manges ?",
        "Quando parte il treno? → Quand part le train ?",
        "Perché studi l'italiano? → Pourquoi étudies-tu l'italien ?",
      ],
      tip: "« Perché » veut dire à la fois « pourquoi » ET « parce que » ! Perché studi? Perché mi piace. = Pourquoi tu étudies ? Parce que ça me plaît. Note son accent : perché.",
    },
  ],
  exercises: [
    {
      id: "it4-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « je parle » en italien (verbe parlare) ?",
      choices: ["parli", "parla", "parlo", "parliamo"],
      answer: 2,
      explanation:
        "« Parlo » = je parle. Au présent des verbes en -are : parlo (je), parli (tu), parla (il / elle), parliamo (nous), parlate (vous), parlano (ils / elles). La 1re personne finit toujours en -o.",
      hint: "La terminaison de « je » au présent est toujours -o.",
    },
    {
      id: "it4-2",
      level: 1,
      type: "qcm",
      question: "À quel groupe appartient le verbe « dormire » ?",
      choices: ["Le groupe -are", "Le groupe -ere", "Le groupe -ire", "C'est un verbe irrégulier"],
      answer: 2,
      explanation:
        "« Dormire » finit en -ire : c'est le 3e groupe. On regarde toujours les trois dernières lettres de l'infinitif : parlARE (1er), prendERE (2e), dormIRE (3e). Dormire est parfaitement régulier : dormo, dormi, dorme…",
      hint: "Regarde les trois dernières lettres de l'infinitif.",
    },
    {
      id: "it4-3",
      level: 1,
      type: "truefalse",
      question: "Pour poser une question en italien, il suffit d'ajouter un point d'interrogation, sans changer l'ordre des mots.",
      answer: true,
      explanation:
        "Vrai ! « Parli italiano. » devient « Parli italiano? » : mêmes mots, même ordre, seule l'intonation monte (et le point devient un point d'interrogation). Pas d'inversion comme dans « parles-tu ? ».",
    },
    {
      id: "it4-4",
      level: 1,
      type: "input",
      question: "Complète avec le verbe abitare : « Marco … a Milano » (il habite). Un seul mot.",
      answer: "abita",
      explanation:
        "« Marco abita a Milano » = Marco habite à Milan. Abitare est un verbe en -are : à la 3e personne du singulier, la terminaison est -a (abita), comme parla, mangia, gioca.",
      hint: "Verbe en -are : la terminaison de « il / elle » est -a.",
    },
    {
      id: "it4-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « nous mangeons » (verbe mangiare) ?",
      choices: ["mangiate", "mangiamo", "mangiano", "mangio"],
      answer: 1,
      explanation:
        "« Mangiamo » = nous mangeons. La terminaison de « noi » est -iamo pour TOUS les groupes : parliamo, prendiamo, dormiamo, finiamo. « Mangiate » = vous mangez, « mangiano » = ils mangent, « mangio » = je mange.",
      hint: "La forme « nous » finit toujours en -iamo, dans tous les groupes.",
    },
    {
      id: "it4-6",
      level: 2,
      type: "input",
      question: "Complète avec le verbe finire : « non … i compiti » (je ne finis pas mes devoirs). Un seul mot.",
      answer: "finisco",
      explanation:
        "« Non finisco i compiti » = je ne finis pas mes devoirs. Finire fait partie des verbes en -ire qui prennent -isc- : finisco, finisci, finisce, finiamo, finite, finiscono. À la 1re personne : fin + isc + o.",
      hint: "Finire ajoute -isc- entre le radical et la terminaison -o.",
    },
    {
      id: "it4-7",
      level: 2,
      type: "qcm",
      question: "Que signifie la question « Dove abiti? » ?",
      choices: ["Qu'est-ce que tu manges ?", "Où habites-tu ?", "Quand arrives-tu ?", "Pourquoi étudies-tu ?"],
      answer: 1,
      explanation:
        "« Dove abiti? » = où habites-tu ? « Dove » = où, « abiti » = tu habites (abitare). On répond : « Abito a + ville » (Abito a Parigi). Cosa = quoi, quando = quand, perché = pourquoi.",
      hint: "« Dove » est le mot interrogatif du lieu.",
    },
    {
      id: "it4-8",
      level: 2,
      type: "truefalse",
      question: "Dans « finisce » (il finit), le groupe « sc » se prononce « sk ».",
      answer: false,
      explanation:
        "Faux ! Devant e ou i, « sc » se prononce « ch » comme dans « chat » : finisce = « finiché », capisci = « capichi ». Le son « sk » n'apparaît que devant a, o, u ou h : finiscono = « finiskono », scuola = « skouola ».",
      hint: "Même logique que c et g : doux devant e / i, dur devant a / o / u.",
    },
    {
      id: "it4-9",
      level: 3,
      type: "input",
      question: "Complète avec le verbe capire : « scusa, non … » (excuse-moi, je ne comprends pas). Un seul mot.",
      answer: "capisco",
      explanation:
        "« Non capisco » = je ne comprends pas, LA phrase de survie en cours d'italien ! Capire se conjugue comme finire, avec -isc- : capisco, capisci, capisce… Prononciation : « capisko » (sc + o = son dur).",
      hint: "Capire se conjugue exactement comme finire → finisco.",
    },
    {
      id: "it4-10",
      level: 3,
      type: "qcm",
      question: "Quelle forme est correcte pour « ils dorment » (verbe dormire) ?",
      choices: ["dormano", "dormono", "dormiscono", "dormente"],
      answer: 1,
      explanation:
        "« Dormono » = ils dorment. Les verbes en -ere et -ire font leur 3e personne du pluriel en -ono (prendono, dormono) ; seuls les verbes en -are font -ano (parlano). Et dormire ne prend jamais -isc- : « dormiscono » n'existe pas.",
      hint: "-ano est réservé aux verbes en -are ; dormire n'en fait pas partie.",
    },
    {
      id: "it4-11",
      level: 3,
      type: "input",
      question: "Traduis en italien : « tu lis » (verbe leggere, un seul mot).",
      answer: "leggi",
      explanation:
        "« Leggi » = tu lis. La terminaison de « tu » est -i dans tous les groupes : parli, prendi, dormi, leggi. Remarque la prononciation : g + i = son doux, « lèdji », et le double g s'appuie bien.",
      hint: "Radical legg- + la terminaison de « tu », identique dans les trois groupes.",
    },
    {
      id: "it4-12",
      level: 3,
      type: "truefalse",
      question: "Le mot « perché » peut signifier « pourquoi » dans une question et « parce que » dans une réponse.",
      answer: true,
      explanation:
        "Vrai ! « Perché mangi? » = pourquoi manges-tu ? et « Perché ho fame » = parce que j'ai faim. Un seul mot italien pour les deux sens français. N'oublie pas son accent aigu sur le é final : perché.",
      hint: "Perché studi l'italiano? Perché mi piace!",
    },
  ],
  videos: [
    {
      title: "🇮🇹 La conjugaison des verbes réguliers au présent de l’indicatif : Cours italien pour débutants 3/14",
      youtubeId: "cd9tVgCe8mk",
      channel: "L'italien avec Silvia",
    },
  ],
};
