import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-passe-simple",
  subject: "francais",
  grade: "5e",
  num: 3,
  title: "Le passé simple, toutes personnes",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "History",
  teaser: "Maîtriser les quatre séries de terminaisons, du singulier au pluriel.",
  objectives: [
    "Je connais les quatre séries de terminaisons du passé simple : en -a, en -i, en -u, en -in",
    "Je sais conjuguer au passé simple à toutes les personnes, y compris nous et vous",
    "Je sais conjuguer les verbes fréquents : être, avoir, faire, venir, voir, pouvoir",
    "Je sais choisir entre imparfait et passé simple dans un récit",
  ],
  lesson: [
    {
      title: "Un temps du récit écrit",
      paragraphs: [
        "Le passé simple est le temps des actions principales dans un récit écrit au passé : les événements qui font avancer l'histoire, souvent brefs et achevés.",
        "On le rencontre surtout à l'écrit, dans les romans et les contes. À l'oral, il est presque toujours remplacé par le passé composé.",
      ],
      example: [
        "« Le chevalier saisit son épée, bondit sur son cheval et disparut dans la forêt. »",
        "Trois actions successives, trois passés simples.",
      ],
      tip: "Passé simple = les actions qui se succèdent, comme les images d'une bande dessinée : une case, une action.",
    },
    {
      title: "La série en -a : les verbes en -er",
      paragraphs: [
        "Tous les verbes en -er (dont aller) suivent la série en -a : je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent.",
        "Attention à la 1re personne du singulier : « je chantai » (passé simple) se prononce presque comme « je chantais » (imparfait), mais ne prend pas de s.",
      ],
      example: [
        "Aller : j'allai, tu allas, elle alla, nous allâmes, vous allâtes, ils allèrent.",
        "« Ce jour-là, je marchai deux heures » (action unique) / « chaque jour, je marchais » (habitude).",
      ],
      tip: "Aux personnes nous et vous, l'accent circonflexe est obligatoire : nous chantâmes, vous chantâtes. C'est le chapeau du passé simple !",
    },
    {
      title: "Les séries en -i et en -u",
      paragraphs: [
        "La série en -i concerne les verbes du 2e groupe (finir) et beaucoup de verbes du 3e groupe : je finis, tu finis, il finit, nous finîmes, vous finîtes, ils finirent.",
        "La série en -u concerne d'autres verbes du 3e groupe : je courus, tu courus, il courut, nous courûmes, vous courûtes, ils coururent.",
        "Verbes fréquents en -i : faire (il fit), voir (il vit), prendre (il prit), dire (il dit). Verbes fréquents en -u : être (il fut), avoir (il eut), pouvoir (il put), vouloir (il voulut), lire (il lut).",
      ],
      example: [
        "Faire : je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent.",
        "Être : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent.",
        "Avoir : j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent.",
      ],
      tip: "Le radical du passé simple ressemble souvent au participe passé : pris → il prit, couru → il courut, lu → il lut, pu → il put. Mais pas toujours : fait → il fit, vu → il vit !",
    },
    {
      title: "La série en -in : venir et tenir",
      paragraphs: [
        "Une petite famille de verbes suit la série en -in : venir, tenir et tous leurs composés (devenir, revenir, retenir, obtenir…).",
        "Venir : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent. Tenir se conjugue exactement pareil : je tins, il tint, ils tinrent.",
      ],
      example: [
        "« Elle revint à minuit et tint sa promesse. »",
        "« Ils devinrent inséparables. »",
      ],
      tip: "Ne confonds pas « il vint » (venir, passé simple) et « il vit » (voir, passé simple, ou vivre au présent). Le n fait toute la différence !",
    },
    {
      title: "Imparfait ou passé simple ?",
      paragraphs: [
        "Dans un récit au passé, les deux temps se partagent le travail. L'imparfait plante le décor : descriptions, habitudes, actions en arrière-plan. Le passé simple raconte les événements : actions soudaines, uniques, qui font avancer l'histoire.",
        "On les trouve souvent dans la même phrase : l'imparfait pose la situation, le passé simple fait irruption.",
      ],
      example: [
        "« Il pleuvait depuis des heures (décor, imparfait) quand soudain la porte claqua (événement, passé simple). »",
      ],
      tip: "Pose-toi la question : « pendant que » ou « soudain » ? Pendant que → imparfait. Soudain → passé simple.",
    },
  ],
  exercises: [
    {
      id: "f5pas-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la forme correcte du verbe « chanter » à la 3e personne du pluriel du passé simple ?",
      choices: ["ils chantaient", "ils chantèrent", "ils chantent", "ils chantâmes"],
      answer: 1,
      explanation:
        "Les verbes en -er suivent la série en -a : ils chantèrent. « Ils chantaient » est de l'imparfait, « ils chantent » du présent, et « chantâmes » correspond à « nous », pas à « ils ».",
      hint: "Série en -a : -ai, -as, -a, -âmes, -âtes, -èrent.",
    },
    {
      id: "f5pas-2",
      level: 1,
      type: "input",
      question: "Conjugue « être » à la 3e personne du singulier du passé simple : « Ce jour-là, la fête ... magnifique. » (il/elle ...)",
      answer: "fut",
      explanation:
        "Être suit la série en -u au passé simple : je fus, tu fus, il fut… Ne confonds pas avec « était » (imparfait) : ici, « ce jour-là » signale un événement unique, donc passé simple.",
      hint: "Être appartient à la série en -u : je fus, tu fus…",
    },
    {
      id: "f5pas-3",
      level: 1,
      type: "truefalse",
      question: "Au passé simple, on écrit : « nous arrivâmes ».",
      answer: true,
      explanation:
        "Vrai ! Les verbes en -er prennent -âmes à la 1re personne du pluriel, avec un accent circonflexe obligatoire : nous arrivâmes, vous arrivâtes.",
      hint: "Pense au chapeau des personnes nous et vous.",
    },
    {
      id: "f5pas-4",
      level: 1,
      type: "qcm",
      question: "Dans un récit, quel temps utilise-t-on pour décrire le décor en arrière-plan ?",
      choices: ["le passé simple", "l'imparfait", "le futur", "le présent"],
      answer: 1,
      explanation:
        "L'imparfait sert au décor, aux descriptions et aux habitudes ; le passé simple raconte les actions qui font avancer l'histoire. C'est le duo de base du récit au passé.",
      hint: "« Pendant que » ou « soudain » ?",
    },
    {
      id: "f5pas-5",
      level: 2,
      type: "input",
      question: "Conjugue « faire » à la 3e personne du singulier du passé simple : « Elle ... un pas en arrière. »",
      answer: "fit",
      explanation:
        "Faire suit la série en -i : je fis, tu fis, elle fit, nous fîmes, vous fîtes, ils firent. Piège : le participe passé est « fait », mais le passé simple est « fit », pas « fait » !",
      hint: "Faire appartient à la série en -i.",
    },
    {
      id: "f5pas-6",
      level: 2,
      type: "qcm",
      question: "Quelle est la forme correcte de « venir » à la 3e personne du pluriel du passé simple ?",
      choices: ["ils venaient", "ils vinrent", "ils virent", "ils viendront"],
      answer: 1,
      explanation:
        "Venir suit la série en -in : je vins, il vint, ils vinrent. Attention au piège : « ils virent » est le passé simple de VOIR, pas de venir. Le n de « vinrent » fait la différence.",
      hint: "Venir et tenir forment la série en -in.",
    },
    {
      id: "f5pas-7",
      level: 2,
      type: "input",
      question: "Conjugue « avoir » à la 3e personne du singulier du passé simple : « Soudain, il ... une idée. »",
      answer: "eut",
      explanation:
        "Avoir suit la série en -u : j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent. Ne pas confondre avec « il eût » (accent circonflexe), une forme littéraire qu'on ne te demande pas ici, ni avec « il a eu » (passé composé).",
      hint: "Avoir appartient à la série en -u : j'eus, tu eus…",
    },
    {
      id: "f5pas-8",
      level: 2,
      type: "qcm",
      question: "« Chaque matin, le boulanger (ouvrir) sa boutique à six heures. » Quel temps convient dans un récit au passé ?",
      choices: ["ouvrit (passé simple)", "ouvrait (imparfait)", "ouvre (présent)", "ouvrira (futur)"],
      answer: 1,
      explanation:
        "« Chaque matin » indique une habitude, une action répétée : c'est le domaine de l'imparfait → « ouvrait ». Le passé simple servirait pour un événement unique : « Ce matin-là, il ouvrit plus tôt. »",
      hint: "« Chaque matin » : habitude ou événement unique ?",
    },
    {
      id: "f5pas-9",
      level: 3,
      type: "input",
      question: "Conjugue « voir » à la 3e personne du pluriel du passé simple : « En arrivant au sommet, ils ... toute la vallée. »",
      answer: "virent",
      explanation:
        "Voir suit la série en -i : je vis, tu vis, il vit, nous vîmes, vous vîtes, ils virent. Double piège : « ils virent » ressemble à « ils vinrent » (venir) et « il vit » ressemble au présent de vivre. Le contexte tranche toujours.",
      hint: "Voir est dans la série en -i, malgré son participe passé « vu ».",
    },
    {
      id: "f5pas-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est entièrement correcte au passé simple ?",
      choices: [
        "Nous partîmes à l'aube et nous arrivâmes à midi.",
        "Nous partimes à l'aube et nous arrivâmes à midi.",
        "Nous partîmes à l'aube et nous arrivames à midi.",
        "Nous partions à l'aube et nous arrivâmes à midi.",
      ],
      answer: 0,
      explanation:
        "Aux personnes nous et vous, l'accent circonflexe est obligatoire dans toutes les séries : partîmes (série en -i), arrivâmes (série en -a). La dernière proposition mélange imparfait (« partions ») et passé simple.",
      hint: "Vérifie les accents circonflexes ET le temps de chaque verbe.",
    },
    {
      id: "f5pas-11",
      level: 3,
      type: "truefalse",
      question: "Dans la phrase « Le soleil se couchait quand le navire apparut à l'horizon », les deux temps sont correctement employés.",
      answer: true,
      explanation:
        "Vrai ! L'imparfait « se couchait » plante le décor (action en cours, arrière-plan) et le passé simple « apparut » signale l'événement qui surgit. C'est exactement l'alternance attendue dans un récit au passé.",
    },
    {
      id: "f5pas-12",
      level: 3,
      type: "input",
      question: "Conjugue « pouvoir » à la 3e personne du singulier du passé simple : « Malgré ses efforts, elle ne ... pas ouvrir la porte. »",
      answer: "put",
      explanation:
        "Pouvoir suit la série en -u : je pus, tu pus, elle put, nous pûmes, vous pûtes, ils purent. Le radical vient du participe passé « pu ». Sans accent au singulier : « elle put » (l'accent circonflexe n'apparaît qu'à nous et vous).",
      hint: "Participe passé « pu » → série en -u.",
    },
  ],
};
