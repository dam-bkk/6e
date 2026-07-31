import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-verben",
  subject: "allemand",
  grade: "5e",
  num: 4,
  title: "Le présent des verbes",
  domain: "geometrie",
  domainLabel: "Grammatik",
  icon: "Repeat",
  teaser: "Une seule série de terminaisons pour presque tous les verbes — et une règle en or : le verbe en 2e position.",
  objectives: [
    "Je sais conjuguer un verbe régulier au présent : wohnen, spielen, lernen",
    "Je connais les terminaisons : -e, -st, -t, -en, -t, -en",
    "Je sais que le verbe conjugué est toujours en 2e position dans la phrase",
    "Je découvre les verbes à changement de voyelle : sprechen → du sprichst",
  ],
  lesson: [
    {
      title: "Le radical et les terminaisons",
      paragraphs: [
        "Un verbe allemand à l'infinitif finit presque toujours en -en : wohnen (habiter), spielen (jouer), lernen (apprendre).",
        "Pour conjuguer, on enlève le -en pour trouver le radical (wohn-, spiel-, lern-), puis on ajoute la terminaison de chaque personne.",
        "Les terminaisons du présent : ich → -e, du → -st, er/sie/es → -t, wir → -en, ihr → -t, sie → -en. Une seule série à apprendre pour presque tous les verbes !",
      ],
      example: [
        "wohnen → radical wohn-",
        "ich wohne, du wohnst, er wohnt",
        "wir wohnen, ihr wohnt, sie wohnen",
      ],
      tip: "Moyen mnémotechnique : e, st, t / en, t, en. Remarque que wir et sie (pluriel) reprennent l'infinitif complet : wir wohnen = wohnen tel quel.",
    },
    {
      title: "Trois verbes modèles : wohnen, spielen, lernen",
      paragraphs: [
        "« Wohnen » (habiter) : Ich wohne in Paris = j'habite à Paris. Pour demander : Wo wohnst du? (où habites-tu ?).",
        "« Spielen » (jouer) : Ich spiele Fußball = je joue au foot. Er spielt Tennis = il joue au tennis.",
        "« Lernen » (apprendre) : Wir lernen Deutsch = nous apprenons l'allemand. Ces trois verbes se conjuguent exactement pareil — comme des centaines d'autres (machen, kommen, hören…).",
      ],
      example: [
        "Ich wohne in Paris. → J'habite à Paris.",
        "Du spielst gut! → Tu joues bien !",
        "Sie lernt Deutsch. → Elle apprend l'allemand.",
        "Wo wohnt ihr? → Où habitez-vous ?",
      ],
      tip: "Attention à la prononciation de « wohnen » : le w se dit « v » et le h allonge le o → « vô-nen ». Et Fußball se dit « fouss-bal » (ß = ss).",
    },
    {
      title: "La règle en or : le verbe en 2e position",
      figure: "de-verb-2",
      paragraphs: [
        "Dans une phrase déclarative allemande, le verbe conjugué occupe TOUJOURS la 2e position. C'est la règle de construction la plus importante de l'allemand.",
        "« 2e position » ne veut pas dire « 2e mot », mais 2e bloc d'idée. Si la phrase commence par un complément, le sujet passe APRÈS le verbe : « Heute spiele ich Fußball » (aujourd'hui je joue au foot) — et pas « Heute ich spiele ».",
        "Compare : « Ich spiele heute Fußball » et « Heute spiele ich Fußball ». Les deux sont correctes : le verbe « spiele » reste en 2e position dans les deux cas.",
      ],
      example: [
        "Ich spiele heute Fußball. → Je joue au foot aujourd'hui.",
        "Heute spiele ich Fußball. → Aujourd'hui, je joue au foot.",
        "In Berlin wohnt meine Tante. → À Berlin habite ma tante.",
      ],
      tip: "Pense au verbe comme au pilier n°2 d'un pont : quoi qu'on mette en position 1 (le sujet, « aujourd'hui », « à Berlin »…), le verbe ne bouge jamais de la place 2.",
    },
    {
      title: "Découverte : les verbes qui changent de voyelle",
      paragraphs: [
        "Quelques verbes très fréquents changent leur voyelle aux 2e et 3e personnes du singulier (du et er/sie/es). On les appelle « verbes forts ».",
        "« Sprechen » (parler) : ich spreche, mais du sprichst, er spricht — le e devient i. De même « lesen » (lire) : du liest, er liest ; « essen » (manger) : du isst, er isst.",
        "D'autres prennent un Umlaut : « fahren » (aller en véhicule) → du fährst, er fährt. Aux autres personnes (ich, wir, ihr, sie), rien ne change : les terminaisons restent les mêmes.",
      ],
      example: [
        "Ich spreche Französisch. → Je parle français.",
        "Du sprichst Deutsch. → Tu parles allemand.",
        "Er isst eine Pizza. → Il mange une pizza.",
        "Sie fährt nach Berlin. → Elle va à Berlin.",
      ],
      tip: "Le changement ne touche QUE du et er/sie/es. Si tu vois « ich sprich- » quelque part, c'est faux : à la 1re personne on garde toujours la voyelle de l'infinitif (ich spreche).",
    },
  ],
  exercises: [
    {
      id: "de4-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la terminaison du verbe avec « ich » (je) au présent ?",
      choices: ["-st", "-e", "-t", "-en"],
      answer: 1,
      explanation:
        "Avec ich, on ajoute -e au radical : ich wohne, ich spiele, ich lerne. La série complète : ich -e, du -st, er -t, wir -en, ihr -t, sie -en.",
      hint: "Ich wohn…, ich spiel…",
    },
    {
      id: "de4-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la forme correcte : « du … Fußball » (tu joues au foot) ?",
      choices: ["spiele", "spielt", "spielst", "spielen"],
      answer: 2,
      explanation:
        "Avec du, la terminaison est -st : du spielst. « Spielt » c'est pour er/sie/es ou ihr, « spiele » pour ich, « spielen » pour wir/sie.",
      hint: "La terminaison de « du » est la seule qui contient un s.",
    },
    {
      id: "de4-3",
      level: 1,
      type: "input",
      question: "Complète : « ich … in Paris » (j'habite à Paris) — verbe wohnen.",
      answer: "wohne",
      explanation:
        "« Ich wohne in Paris » : radical wohn- + terminaison -e de la 1re personne. Rappel de prononciation : « vô-né », car le w allemand se prononce v.",
      hint: "Radical wohn- + la terminaison de « ich ».",
    },
    {
      id: "de4-4",
      level: 1,
      type: "truefalse",
      question: "Presque tous les verbes allemands à l'infinitif se terminent par -en.",
      answer: true,
      explanation:
        "Vrai ! Wohnen, spielen, lernen, machen, kommen… L'infinitif en -en est la norme. Pour conjuguer, on enlève ce -en et on ajoute les terminaisons au radical.",
    },
    {
      id: "de4-5",
      level: 2,
      type: "input",
      question: "Complète : « er … Deutsch » (il apprend l'allemand) — verbe lernen.",
      answer: "lernt",
      explanation:
        "« Er lernt Deutsch » : radical lern- + terminaison -t de la 3e personne du singulier. Même terminaison pour sie (elle) et es : sie lernt, es lernt.",
      hint: "Er/sie/es prend la terminaison -t.",
    },
    {
      id: "de4-6",
      level: 2,
      type: "qcm",
      question: "Quelle phrase est correcte ?",
      choices: [
        "Heute ich spiele Fußball.",
        "Heute spiele ich Fußball.",
        "Heute Fußball ich spiele.",
        "Ich heute spiele Fußball.",
      ],
      answer: 1,
      explanation:
        "« Heute spiele ich Fußball » : le verbe conjugué doit rester en 2e position. Comme « heute » occupe la 1re place, le sujet « ich » passe après le verbe. « Heute ich spiele » est le calque du français — c'est faux en allemand.",
      hint: "Le verbe doit être le 2e bloc de la phrase, quoi qu'il arrive.",
    },
    {
      id: "de4-7",
      level: 2,
      type: "qcm",
      question: "Quelle est la forme correcte : « wir … Deutsch » (nous apprenons l'allemand) ?",
      choices: ["lernt", "lernst", "lerne", "lernen"],
      answer: 3,
      explanation:
        "Avec wir, la terminaison est -en : wir lernen. Astuce : pour wir et sie (pluriel), le verbe est identique à l'infinitif — wir lernen = lernen tel quel.",
      hint: "Avec « wir », le verbe ressemble à son infinitif.",
    },
    {
      id: "de4-8",
      level: 2,
      type: "truefalse",
      question: "Dans « In Berlin wohnt meine Tante », le verbe est bien placé.",
      answer: true,
      explanation:
        "Vrai ! « In Berlin » occupe la 1re position (un seul bloc d'idée), donc le verbe « wohnt » est bien en 2e position et le sujet « meine Tante » vient après. La règle du verbe en 2e position compte les blocs, pas les mots.",
      hint: "« In Berlin » compte comme UN seul bloc.",
    },
    {
      id: "de4-9",
      level: 3,
      type: "input",
      question: "Complète avec le verbe sprechen : « du … Deutsch » (tu parles allemand).",
      answer: "sprichst",
      explanation:
        "« Du sprichst Deutsch » : sprechen est un verbe fort, son e devient i aux 2e et 3e personnes du singulier — du sprichst, er spricht. Aux autres personnes, rien ne change : ich spreche, wir sprechen.",
      hint: "Le e de sprechen se transforme en i avec « du ».",
    },
    {
      id: "de4-10",
      level: 3,
      type: "qcm",
      question: "Pour quelles personnes les verbes forts comme sprechen changent-ils de voyelle ?",
      choices: [
        "ich et wir",
        "du et er/sie/es",
        "ihr et sie (pluriel)",
        "Toutes les personnes",
      ],
      answer: 1,
      explanation:
        "Le changement de voyelle ne touche que du et er/sie/es : du sprichst, er spricht — mais ich spreche, wir sprechen, ihr sprecht. C'est la signature des verbes forts au présent.",
      hint: "Uniquement les 2e et 3e personnes du singulier.",
    },
    {
      id: "de4-11",
      level: 3,
      type: "input",
      question: "Complète avec le verbe essen (manger) : « er … eine Pizza » (il mange une pizza).",
      answer: "isst",
      explanation:
        "« Er isst eine Pizza » : essen change son e en i — du isst, er isst. Amusant : « er isst » (il mange) se prononce exactement comme « er ist » (il est). Seul le contexte, ou l'orthographe, les distingue !",
      hint: "Le e de essen devient i, et la terminaison -t s'ajoute.",
    },
    {
      id: "de4-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Ich spriche Französisch » est correcte.",
      answer: false,
      explanation:
        "Faux ! Le changement de voyelle ne concerne jamais ich : on dit « Ich spreche Französisch », avec le e de l'infinitif. Le i n'apparaît qu'avec du (sprichst) et er/sie/es (spricht).",
    },
  ],
  videos: [
    {
      title: "Le présent de l’indicatif - Allemand - Collège - Les Bons Profs",
      youtubeId: "jbUYj145R5s",
      channel: "Les Bons Profs",
    },
  ],
};
