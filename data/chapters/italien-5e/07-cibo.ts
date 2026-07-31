import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-cibo",
  subject: "italien",
  grade: "5e",
  num: 7,
  title: "Il cibo : à table !",
  domain: "grandeurs",
  domainLabel: "Vocabolario",
  icon: "Pizza",
  teaser: "La pasta, la pizza, il gelato… commander poliment avec vorrei et compter jusqu'à 100.",
  objectives: [
    "Je connais le vocabulaire de la nourriture : la pasta, la pizza, il gelato…",
    "Je connais les repas : colazione, pranzo, merenda, cena",
    "Je sais commander poliment avec vorrei…",
    "Je connais les nombres de 20 à 100",
    "Je me méfie des faux amis gourmands : i confetti, i peperoni…",
  ],
  lesson: [
    {
      title: "Il cibo : le vocabulaire de base",
      paragraphs: [
        "Les stars italiennes : la pasta (les pâtes — au singulier en italien !), la pizza, il gelato (la glace), il pane (le pain), il formaggio (le fromage), il riso (le riz).",
        "Aussi utiles : la carne (la viande), il pesce (le poisson), le verdure (les légumes), la frutta (les fruits), l'acqua (l'eau), il latte (le lait — masculin !), il succo di frutta (le jus de fruits).",
        "Remarque les pièges de genre : il latte (le lait) est masculin, la carne (la viande) est féminin, comme en français, mais « la frutta » est un singulier collectif.",
      ],
      example: [
        "la pasta → les pâtes",
        "il gelato → la glace",
        "il pane e il formaggio → le pain et le fromage",
        "le verdure → les légumes",
      ],
      tip: "Prononciation gourmande : gelato = « djélato » (g + e = doux), spaghetti = « spaguetti » (gh = dur), bruschetta = « brousketta » (ch = dur !). Le h rend toujours le son dur.",
    },
    {
      title: "Les repas de la journée",
      figure: "it-cibo",
      paragraphs: [
        "La colazione (le petit-déjeuner) : en Italie, il est sucré et léger — biscuits, brioche, lait ou cappuccino. Fare colazione = prendre le petit-déjeuner.",
        "Il pranzo (le déjeuner), vers 13 h, et la cena (le dîner), vers 20 h. Le goûter des enfants s'appelle la merenda.",
        "Attention au faux ami : « la colazione » ressemble à « collation » mais désigne bien le petit-déjeuner. Et à table, on se souhaite « Buon appetito! ».",
      ],
      example: [
        "Faccio colazione alle sette. → Je prends le petit-déjeuner à 7 h.",
        "A pranzo mangio la pasta. → Au déjeuner, je mange des pâtes.",
        "La merenda: pane e cioccolato. → Le goûter : pain et chocolat.",
        "Buon appetito! → Bon appétit !",
      ],
      tip: "Ordre de la journée à mémoriser : colazione (matin) → pranzo (midi) → merenda (goûter) → cena (soir). « Cena » se prononce « tchéna » : c + e = son doux.",
    },
    {
      title: "Commander poliment : vorrei…",
      paragraphs: [
        "Pour demander quelque chose poliment (au restaurant, à la gelateria…), on utilise « vorrei » : je voudrais. Vorrei un gelato, per favore = je voudrais une glace, s'il te / vous plaît.",
        "« Vorrei » est plus poli que « voglio » (je veux), exactement comme en français : je voudrais / je veux. Utilise toujours vorrei avec un adulte !",
        "Les mots magiques : per favore (s'il vous plaît), grazie (merci), prego (je vous en prie / de rien). Et pour demander le prix : Quanto costa? (combien ça coûte ?).",
      ],
      example: [
        "Vorrei una pizza margherita, per favore. → Je voudrais une pizza margherita, s'il vous plaît.",
        "Vorrei un gelato al cioccolato. → Je voudrais une glace au chocolat.",
        "— Grazie! — Prego! → — Merci ! — Je vous en prie !",
        "Quanto costa il gelato? → Combien coûte la glace ?",
      ],
      tip: "« Grazie » se prononce « gratsié » : le z italien fait souvent « ts ». Et n'oublie pas de répondre « prego » quand on te dit grazie — c'est un réflexe de politesse très italien.",
    },
    {
      title: "Les nombres de 20 à 100",
      paragraphs: [
        "Les dizaines : venti (20), trenta (30), quaranta (40), cinquanta (50), sessanta (60), settanta (70), ottanta (80), novanta (90), cento (100).",
        "Bonne nouvelle : pas de « soixante-dix » ni de « quatre-vingt-dix » à l'italienne ! Settanta = 70, novanta = 90 : c'est plus simple qu'en français.",
        "On soude la dizaine et l'unité : ventidue (22), trentacinque (35), quarantotto (48). Devant uno et otto (qui commencent par une voyelle), la dizaine perd sa voyelle finale : ventuno (21), ventotto (28), trentuno (31), quarantotto (48).",
      ],
      example: [
        "20 → venti, 30 → trenta, 100 → cento",
        "22 → ventidue, 35 → trentacinque",
        "21 → ventuno (venti + uno : le i tombe)",
        "48 → quarantotto (quaranta + otto : le a tombe)",
      ],
      tip: "La règle du « choc de voyelles » : devant UNO et OTTO, la dizaine perd sa dernière voyelle. Ventuno, ventotto, trentuno, trentotto… Partout ailleurs, on colle simplement les deux mots.",
    },
    {
      title: "Les faux amis gourmands",
      paragraphs: [
        "L'italien de la cuisine est plein de pièges pour les Français ! « I confetti » ne sont pas des confettis en papier, mais… des dragées (les amandes enrobées de sucre des mariages).",
        "« I peperoni » sont des poivrons, pas du saucisson épicé (ça, c'est une invention américaine). « Il latte » veut dire le lait : si tu commandes « un latte » en Italie, on te servira un verre de lait !",
        "« La camera » est la chambre (pas l'appareil photo, qui se dit la macchina fotografica). Et « caldo » veut dire CHAUD, pas froid ! Attention au robinet marqué C en Italie…",
      ],
      example: [
        "i confetti → les dragées (pas les confettis !)",
        "i peperoni → les poivrons",
        "il latte → le lait",
        "caldo → chaud (et freddo → froid)",
      ],
      tip: "Le plus dangereux : CALDO = chaud. Il ressemble à « froid » à cause de l'anglais « cold », mais c'est l'inverse ! Acqua calda = eau chaude. Retiens : freddo = froid (les deux commencent par fr).",
    },
  ],
  exercises: [
    {
      id: "it7-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « la glace » (à manger) en italien ?",
      choices: ["il latte", "il gelato", "il formaggio", "la cena"],
      answer: 1,
      explanation:
        "« Il gelato » = la glace, prononcé « djélato » (g + e = son doux). Il latte = le lait, il formaggio = le fromage, la cena = le dîner.",
      hint: "C'est le mot que tu vois sur les vitrines des « gelaterie ».",
    },
    {
      id: "it7-2",
      level: 1,
      type: "qcm",
      question: "Quel repas est « la colazione » ?",
      choices: ["Le déjeuner", "Le goûter", "Le petit-déjeuner", "Le dîner"],
      answer: 2,
      explanation:
        "« La colazione » = le petit-déjeuner (faux ami : pas une « collation » !). Le déjeuner = il pranzo, le goûter = la merenda, le dîner = la cena. Ordre : colazione, pranzo, merenda, cena.",
      hint: "C'est le premier repas de la journée, sucré et léger en Italie.",
    },
    {
      id: "it7-3",
      level: 1,
      type: "truefalse",
      question: "Pour commander poliment, « vorrei » est plus poli que « voglio ».",
      answer: true,
      explanation:
        "Vrai ! « Vorrei » = je voudrais (poli), « voglio » = je veux (direct, un peu brusque). Au restaurant ou avec un adulte, on dit toujours : Vorrei una pizza, per favore.",
    },
    {
      id: "it7-4",
      level: 1,
      type: "input",
      question: "Écris en italien le nombre 30 (en lettres).",
      answer: "trenta",
      explanation:
        "30 = trenta. Les dizaines : venti (20), trenta (30), quaranta (40), cinquanta (50), sessanta (60), settanta (70), ottanta (80), novanta (90), cento (100).",
      hint: "Il ressemble au français « trente ».",
    },
    {
      id: "it7-5",
      level: 2,
      type: "qcm",
      question: "En Italie, que sont « i confetti » ?",
      choices: [
        "Des confettis en papier",
        "Des dragées (amandes enrobées de sucre)",
        "Des bonbons à la fraise",
        "Des petits gâteaux secs",
      ],
      answer: 1,
      explanation:
        "Faux ami célèbre : « i confetti » sont des dragées, offertes aux mariages et baptêmes. Les confettis en papier se disent « i coriandoli ». À l'origine, on jetait des dragées pendant le carnaval — d'où la confusion !",
      hint: "On les offre aux mariages, et elles croquent sous la dent.",
    },
    {
      id: "it7-6",
      level: 2,
      type: "input",
      question: "Écris en italien le nombre 22 (en lettres, en un seul mot).",
      answer: "ventidue",
      explanation:
        "22 = ventidue : on soude la dizaine (venti) et l'unité (due). Pareil pour ventitré, ventiquattro… Le i ne tombe que devant uno et otto : ventuno (21), ventotto (28).",
      hint: "Venti + due, collés en un seul mot.",
    },
    {
      id: "it7-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on 21 en italien ?",
      choices: ["ventiuno", "ventuno", "ventouno", "unoventi"],
      answer: 1,
      explanation:
        "21 = ventuno : devant « uno », la dizaine perd sa voyelle finale (venti → vent-). Même règle devant otto : ventotto (28). « Ventiuno » avec le i est la faute classique.",
      hint: "Devant uno, la dizaine perd sa dernière voyelle.",
    },
    {
      id: "it7-8",
      level: 2,
      type: "truefalse",
      question: "En Italie, si le robinet est marqué « C », c'est l'eau froide.",
      answer: false,
      explanation:
        "Faux, et c'est le piège le plus dangereux d'Italie ! C = caldo = CHAUD. L'eau froide, c'est F = freddo. Retiens : freddo et froid commencent tous les deux par « fr ».",
      hint: "« Caldo » ressemble à l'anglais « cold »… mais c'est un faux ami.",
    },
    {
      id: "it7-9",
      level: 3,
      type: "input",
      question: "Complète la commande polie : « … un gelato, per favore » (je voudrais). Un seul mot.",
      answer: "vorrei",
      explanation:
        "« Vorrei un gelato, per favore » = je voudrais une glace, s'il vous plaît. Vorrei (avec double r !) est le conditionnel de volere : c'est LA formule magique pour commander poliment.",
      hint: "La forme polie de « je veux », avec un double r.",
    },
    {
      id: "it7-10",
      level: 3,
      type: "qcm",
      question: "Qu'obtiens-tu si tu commandes « un latte » dans un bar italien ?",
      choices: ["Un café au lait", "Un café serré", "Un verre de lait", "Un chocolat chaud"],
      answer: 2,
      explanation:
        "« Il latte » = le lait, tout simplement : on te servira un verre de lait ! Le « latte » des cafés français ou américains se dit en Italie « caffellatte » ou « latte macchiato ». Remarque aussi le genre : IL latte, masculin.",
      hint: "Traduis le mot littéralement, sans penser aux cafés à la mode.",
    },
    {
      id: "it7-11",
      level: 3,
      type: "input",
      question: "Écris en italien le nombre 48 (en lettres, en un seul mot).",
      answer: "quarantotto",
      explanation:
        "48 = quarantotto : quaranta + otto, et le a final de la dizaine tombe devant otto (choc de voyelles). Même règle : trentotto (38), cinquantotto (58). Avec les autres unités, pas de chute : quarantadue (42).",
      hint: "Quaranta + otto… mais deux voyelles se rencontrent : l'une disparaît.",
    },
    {
      id: "it7-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « A cena mangio la pasta con i peperoni » signifie « au dîner, je mange des pâtes avec du saucisson piquant ».",
      answer: false,
      explanation:
        "Faux ! « I peperoni » sont des POIVRONS, pas du saucisson : la phrase veut dire « au dîner, je mange des pâtes aux poivrons ». Le « pepperoni » piquant des pizzas américaines n'existe pas sous ce nom en Italie (on dirait « salame piccante »).",
      hint: "Encore un faux ami gourmand : c'est un légume.",
    },
  ],
  videos: [
    {
      title: "Apprendre l'italien leçon 6 débutant : au restaurant🍝",
      youtubeId: "U1GivnUzPLk",
      channel: "Plaisir d'apprendre l'italien - Sandrine",
    },
  ],
};
