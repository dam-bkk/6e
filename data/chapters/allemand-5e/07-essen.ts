import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-essen",
  subject: "allemand",
  grade: "5e",
  num: 7,
  title: "Essen und Trinken",
  domain: "grandeurs",
  domainLabel: "Wortschatz",
  icon: "Apple",
  teaser: "Parle de ce que tu manges et bois, dis ce que tu aimes, commande poliment — et compte jusqu'à 100.",
  objectives: [
    "Je connais les trois repas : Frühstück, Mittagessen, Abendessen",
    "Je sais dire ce que j'aime manger et boire : Ich esse gern…, Ich trinke gern…",
    "Je sais utiliser mögen : Ich mag Pizza",
    "Je sais compter de 20 à 100 (avec l'ordre inversé : einundzwanzig !)",
    "Je sais commander poliment : Ich möchte…",
  ],
  lesson: [
    {
      title: "Les trois repas de la journée",
      paragraphs: [
        "Das Frühstück (le petit-déjeuner), das Mittagessen (le déjeuner, littéralement « le repas de midi ») et das Abendessen (le dîner, « le repas du soir »). Encore des mots composés : Mittag + Essen, Abend + Essen.",
        "Au petit-déjeuner allemand, on trouve souvent : das Brot (le pain), das Brötchen (le petit pain), die Butter, die Marmelade (la confiture), das Müsli, die Milch (le lait).",
        "Les verbes clés : essen (manger — attention, verbe fort : du isst, er isst) et trinken (boire, régulier : ich trinke, du trinkst).",
      ],
      example: [
        "Zum Frühstück esse ich Brot mit Marmelade. → Au petit-déjeuner, je mange du pain avec de la confiture.",
        "Was isst du zum Mittagessen? → Que manges-tu au déjeuner ?",
        "Ich trinke Milch. → Je bois du lait.",
      ],
      tip: "« Frühstück » se prononce « fru-chtuk » avec le ü de « lune » — littéralement le « morceau du matin » (früh = tôt, Stück = morceau). Joli, non ?",
    },
    {
      title: "Dire ce qu'on aime : essen gern, trinken gern",
      paragraphs: [
        "Tu connais déjà la formule magique verbe + gern : elle marche parfaitement pour la nourriture. « Ich esse gern Pizza » = j'aime manger de la pizza. « Ich trinke gern Orangensaft » = j'aime boire du jus d'orange.",
        "Vocabulaire utile : der Käse (le fromage), das Fleisch (la viande), der Fisch (le poisson), das Obst (les fruits), das Gemüse (les légumes), der Apfel (la pomme), die Banane, der Saft (le jus), das Wasser (l'eau).",
        "Pour ce qu'on n'aime pas : « Ich esse nicht gern Fisch » (je n'aime pas manger de poisson).",
      ],
      example: [
        "Ich esse gern Käse. → J'aime manger du fromage.",
        "Ich trinke gern Wasser. → J'aime boire de l'eau.",
        "Er isst nicht gern Gemüse. → Il n'aime pas manger de légumes.",
      ],
      tip: "Remarque qu'il n'y a pas de « du/de la » : Ich esse Brot, ich trinke Milch — le nom vient tout seul, sans article partitif. Plus simple que le français !",
    },
    {
      title: "Le verbe mögen : Ich mag…",
      paragraphs: [
        "Pour dire qu'on aime une CHOSE (et pas une action), on utilise le verbe « mögen » : « Ich mag Pizza » = j'aime la pizza. « Magst du Schokolade? » = tu aimes le chocolat ?",
        "Sa conjugaison est irrégulière au singulier : ich mag, du magst, er/sie/es mag (sans -t !), wir mögen, ihr mögt, sie mögen.",
        "Résumé des deux outils : une chose → mögen (Ich mag Käse), une action → verbe + gern (Ich esse gern Käse). Les deux phrases sont correctes et veulent presque dire la même chose.",
      ],
      example: [
        "Ich mag Schokolade. → J'aime le chocolat.",
        "Magst du Bananen? → Tu aimes les bananes ?",
        "Sie mag kein Gemüse. → Elle n'aime pas les légumes.",
      ],
      tip: "Attention à la 3e personne : « er mag » sans -t (comme ich mag). C'est une bizarrerie des verbes de ce type — ich et er ont la même forme.",
    },
    {
      title: "Les nombres de 20 à 100",
      paragraphs: [
        "Les dizaines : zwanzig (20), dreißig (30), vierzig (40), fünfzig (50), sechzig (60), siebzig (70), achtzig (80), neunzig (90), hundert (100). Remarque dreißig avec ß, et les formes courtes sechzig/siebzig.",
        "Le grand piège : entre les dizaines, l'allemand dit les nombres À L'ENVERS ! 21 = einundzwanzig, littéralement « un-et-vingt ». 35 = fünfunddreißig (« cinq-et-trente »).",
        "La recette : unité + und + dizaine, le tout collé en un seul mot. 47 = siebenundvierzig, 68 = achtundsechzig, 99 = neunundneunzig.",
      ],
      example: [
        "21 → einundzwanzig (un-et-vingt)",
        "35 → fünfunddreißig (cinq-et-trente)",
        "47 → siebenundvierzig",
        "100 → hundert",
      ],
      tip: "Quand tu entends un nombre allemand, note d'abord le DERNIER morceau (la dizaine), puis le premier (l'unité) : « vierundzwanzig » → zwanzig (20)… vier (4)… = 24. Avec l'habitude, ça devient un réflexe.",
    },
    {
      title: "Commander poliment : Ich möchte…",
      paragraphs: [
        "Pour commander au café ou à la boulangerie, on utilise la forme polie « Ich möchte… » (je voudrais…) : « Ich möchte eine Pizza, bitte » (je voudrais une pizza, s'il vous plaît).",
        "Les mots magiques : bitte (s'il vous plaît / je vous en prie) et danke (merci). On répond souvent « Bitte schön! » (je vous en prie) à un « Danke schön! » (merci beaucoup).",
        "Le serveur peut demander : « Was möchtest du? » (que voudrais-tu ?) ou poliment « Was möchten Sie? » (que voudriez-vous ? — Sie majuscule = vous de politesse).",
      ],
      example: [
        "Ich möchte ein Wasser, bitte. → Je voudrais une eau, s'il vous plaît.",
        "Ich möchte ein Brötchen und einen Saft. → Je voudrais un petit pain et un jus.",
        "Danke schön! — Bitte schön! → Merci beaucoup ! — Je vous en prie !",
      ],
      tip: "« Ich möchte » est plus poli que « ich will » (je veux) — exactement comme « je voudrais » face à « je veux » en français. Au restaurant, toujours möchte + bitte !",
    },
  ],
  exercises: [
    {
      id: "de7-1",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle le petit-déjeuner en allemand ?",
      choices: ["das Mittagessen", "das Abendessen", "das Frühstück", "die Pause"],
      answer: 2,
      explanation:
        "Das Frühstück = le petit-déjeuner (littéralement « le morceau du matin » : früh = tôt, Stück = morceau). Das Mittagessen = le déjeuner, das Abendessen = le dîner.",
      hint: "« Früh » veut dire « tôt » — c'est le repas du matin.",
    },
    {
      id: "de7-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « Ich trinke Milch » ?",
      choices: ["Je mange du pain", "Je bois du lait", "J'aime le lait", "Je voudrais du lait"],
      answer: 1,
      explanation:
        "« Ich trinke Milch » = je bois du lait. Trinken = boire, die Milch = le lait. Remarque : pas d'article « du » en allemand — le nom vient tout seul.",
      hint: "Trinken ressemble à l'anglais « to drink ».",
    },
    {
      id: "de7-3",
      level: 1,
      type: "input",
      question: "Quel est le mot magique allemand pour dire « s'il vous plaît » ?",
      answer: "bitte",
      explanation:
        "« Bitte » = s'il vous plaît, et aussi « je vous en prie » en réponse à danke (merci). « Ich möchte ein Wasser, bitte » = je voudrais une eau, s'il vous plaît.",
      hint: "Il sert aussi à répondre à « danke ».",
    },
    {
      id: "de7-4",
      level: 1,
      type: "truefalse",
      question: "« Das Mittagessen » désigne le repas de midi.",
      answer: true,
      explanation:
        "Vrai ! Mittag (midi) + Essen (repas) = das Mittagessen, le déjeuner. Même construction pour das Abendessen (Abend = soir), le dîner. Les mots composés se lisent à l'envers : « repas de midi ».",
    },
    {
      id: "de7-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'aime la pizza » avec le verbe mögen ?",
      choices: ["Ich möchte Pizza", "Ich mag Pizza", "Ich esse Pizza", "Ich bin Pizza"],
      answer: 1,
      explanation:
        "« Ich mag Pizza » = j'aime la pizza (mögen pour aimer une chose). Attention : « Ich möchte Pizza » veut dire « je VOUDRAIS une pizza » (commande), et « Ich esse Pizza » = je mange une pizza. Trois sens différents !",
      hint: "Mag = j'aime ; möchte = je voudrais. Ne les confonds pas.",
    },
    {
      id: "de7-6",
      level: 2,
      type: "input",
      question: "Écris en allemand le nombre 30 (en lettres).",
      answer: "dreißig",
      accept: ["dreissig"],
      explanation:
        "30 = dreißig, avec un ß (prononcé ss). C'est la seule dizaine en -ßig ; les autres finissent en -zig : zwanzig, vierzig, fünfzig…",
      hint: "Drei (3) + la terminaison des dizaines, avec un ß.",
    },
    {
      id: "de7-7",
      level: 2,
      type: "qcm",
      question: "Comment se dit 21 en allemand ?",
      choices: ["zwanzigeins", "zweiundzwanzig", "einundzwanzig", "zwanzigundeins"],
      answer: 2,
      explanation:
        "21 = einundzwanzig, littéralement « un-et-vingt » : l'allemand dit l'unité AVANT la dizaine, le tout collé en un mot. « Zweiundzwanzig » existe aussi… mais c'est 22 !",
      hint: "L'unité se dit en premier : « un-et-vingt ».",
    },
    {
      id: "de7-8",
      level: 2,
      type: "truefalse",
      question: "À la 3e personne du singulier, mögen donne « er magt ».",
      answer: false,
      explanation:
        "Faux ! On dit « er mag », sans -t : ich mag, du magst, er mag. C'est la bizarrerie de ce type de verbe — la 1re et la 3e personne du singulier sont identiques.",
      hint: "Ich mag, du magst, er … — la 3e personne copie la 1re.",
    },
    {
      id: "de7-9",
      level: 3,
      type: "input",
      question: "Complète la commande polie : « ich … eine Pizza, bitte » (je voudrais une pizza, s'il vous plaît).",
      answer: "möchte",
      accept: ["moechte"],
      explanation:
        "« Ich möchte eine Pizza, bitte » : möchte = je voudrais, la forme polie pour commander. Plus courtois que « ich will » (je veux), exactement comme en français.",
      hint: "La forme polie de « vouloir », avec un ö.",
    },
    {
      id: "de7-10",
      level: 3,
      type: "qcm",
      question: "Quel nombre est « siebenundvierzig » ?",
      choices: ["74", "47", "67", "77"],
      answer: 1,
      explanation:
        "Siebenundvierzig = sieben (7) + und + vierzig (40) = 47. Lis à l'envers : la dizaine est à la fin, l'unité au début. 74 se dirait vierundsiebzig.",
      hint: "Repère d'abord la dizaine, à la FIN du mot : vierzig = 40.",
    },
    {
      id: "de7-11",
      level: 3,
      type: "input",
      question: "Traduis : « j'aime manger du fromage » → « ich esse … käse » (un seul mot à placer).",
      answer: "gern",
      explanation:
        "« Ich esse gern Käse » : verbe + gern = aimer faire. Pour une action (manger), c'est gern ; pour la chose seule, on dirait « Ich mag Käse ». Les deux sont corrects.",
      hint: "Le petit mot « volontiers », déjà vu au chapitre sur l'école.",
    },
    {
      id: "de7-12",
      level: 3,
      type: "input",
      question: "Écris en allemand le nombre 99 (en lettres, un seul mot).",
      answer: "neunundneunzig",
      explanation:
        "99 = neunundneunzig : neun (9) + und + neunzig (90), collés en un seul mot. La recette marche de 21 à 99 : unité + und + dizaine.",
      hint: "Neuf-et-quatre-vingt-dix, à l'allemande : unité + und + dizaine.",
    },
  ],
};
