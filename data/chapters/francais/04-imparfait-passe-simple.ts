import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-imparfait-passe-simple",
  subject: "francais",
  num: 4,
  title: "Imparfait et passé simple",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "History",
  teaser: "Les deux temps du récit : le décor à l'imparfait, l'action au passé simple.",
  objectives: [
    "Je connais les terminaisons de l'imparfait, identiques pour tous les verbes",
    "Je sais conjuguer les verbes au passé simple aux 3es personnes (il, ils)",
    "Je sais choisir entre imparfait et passé simple dans un récit",
    "Je sais éviter le piège des terminaisons -ait et -a",
  ],
  lesson: [
    {
      title: "L'imparfait : des terminaisons toujours régulières",
      paragraphs: [
        "Bonne nouvelle : à l'imparfait, TOUS les verbes, sans exception, prennent les mêmes terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.",
        "Pour former l'imparfait, on part du radical de « nous » au présent : nous finissons → je finissais ; nous prenons → je prenais ; nous faisons → je faisais. Seul « être » a un radical particulier : j'étais, tu étais, il était.",
      ],
      example: [
        "chanter → je chantais, nous chantions, ils chantaient",
        "être → il était • avoir → il avait • faire → il faisait.",
      ],
      tip: "Radical de « nous » au présent + terminaisons -ais, -ais, -ait, -ions, -iez, -aient : cette recette marche pour tous les verbes sauf être.",
    },
    {
      title: "Les emplois de l'imparfait",
      figure: "fr-frise-temps",
      paragraphs: [
        "Dans un récit au passé, l'imparfait sert à décrire : le décor, les personnages, la météo, les sentiments. « La nuit tombait, le vent soufflait doucement. »",
        "Il exprime aussi les habitudes du passé : « Chaque été, nous allions chez ma grand-mère. » L'action n'a pas de limites précises : on ne sait ni quand elle commence, ni quand elle finit.",
      ],
      example: [
        "« Le château dominait la vallée. Ses tours se dressaient vers le ciel. » → description.",
        "« Tous les soirs, il lisait avant de dormir. » → habitude.",
      ],
      tip: "L'imparfait, c'est la caméra qui filme le décor en arrière-plan. Rien ne « se passe » vraiment : on installe la scène.",
    },
    {
      title: "Le passé simple : il et ils",
      paragraphs: [
        "Le passé simple est le temps des actions du récit écrit. En 6e, tu dois surtout maîtriser les 3es personnes : il/elle et ils/elles.",
        "1er groupe : il chanta, ils chantèrent. 2e groupe : il finit, ils finirent. 3e groupe : selon les verbes, il prit / ils prirent, il courut / ils coururent, il vint / ils vinrent.",
        "Quelques verbes essentiels : être → il fut, ils furent ; avoir → il eut, ils eurent ; faire → il fit, ils firent ; voir → il vit, ils virent ; venir → il vint, ils vinrent.",
      ],
      example: [
        "« Le prince entra, salua la reine et prit place. » → trois passés simples en -a et -it.",
        "« Ils arrivèrent à minuit. » → 1er groupe, terminaison -èrent.",
      ],
      tip: "Au passé simple, quatre familles de sons pour « il » : -a (chanta), -it (finit, prit), -ut (courut, fut), -int (vint, tint).",
    },
    {
      title: "Imparfait et passé simple dans le récit",
      paragraphs: [
        "Dans un récit au passé, les deux temps travaillent ensemble : l'imparfait plante le décor (arrière-plan), le passé simple fait avancer l'histoire avec des actions soudaines ou successives (premier plan).",
        "« Il pleuvait depuis des heures (décor). Soudain, la porte s'ouvrit (action). » Les mots comme « soudain », « tout à coup », « alors » annoncent souvent un passé simple.",
      ],
      example: [
        "« La forêt était silencieuse. Les oiseaux dormaient. Tout à coup, une branche craqua. »",
        "→ était, dormaient : décor à l'imparfait • craqua : action au passé simple.",
      ],
      tip: "Pose-toi la question : est-ce que je décris (imparfait) ou est-ce qu'il se passe quelque chose de nouveau (passé simple) ?",
    },
    {
      title: "Le piège -ait / -a",
      paragraphs: [
        "Pour les verbes du 1er groupe, la confusion est fréquente à la 3e personne : « il chantait » (imparfait) et « il chanta » (passé simple) ne racontent pas la même chose !",
        "« Il mangeait quand le téléphone sonna » : l'imparfait (mangeait) décrit l'action en cours, le passé simple (sonna) marque l'événement qui surgit. Inverser les deux changerait complètement le sens.",
      ],
      example: [
        "« Chaque matin, il nageait. » → habitude, imparfait.",
        "« Ce matin-là, il nagea jusqu'à l'île. » → action unique et terminée, passé simple.",
      ],
      tip: "Remplace par un verbe du 3e groupe pour entendre la différence : « il prenait » (imparfait) ou « il prit » (passé simple) ? Ton oreille ne se trompera pas.",
    },
  ],
  exercises: [
    {
      id: "fips-1",
      level: 1,
      type: "qcm",
      question: "Complète à l'imparfait : « Nous (chanter) tous les dimanches. »",
      choices: ["chantons", "chantions", "chantâmes", "chanterons"],
      answer: 1,
      explanation:
        "À l'imparfait, la terminaison de « nous » est -ions, pour tous les verbes : nous chantions. Attention à ne pas confondre avec le présent « nous chantons » : le i fait toute la différence.",
      hint: "La terminaison de l'imparfait avec « nous » contient un i.",
    },
    {
      id: "fips-2",
      level: 1,
      type: "input",
      question: "Conjugue le verbe être à l'imparfait : « Il ... très content. » (écris seulement le verbe)",
      answer: "était",
      accept: ["etait", "il était", "il etait"],
      explanation:
        "Être est le seul verbe au radical particulier à l'imparfait : ét- + terminaisons régulières → j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. N'oublie pas l'accent sur le é.",
      hint: "Le radical commence par « ét- ».",
    },
    {
      id: "fips-3",
      level: 1,
      type: "qcm",
      question: "Quelle est la terminaison de l'imparfait avec « tu » ?",
      choices: ["-ais", "-ait", "-as", "-aient"],
      answer: 0,
      explanation:
        "Avec tu, l'imparfait se termine toujours par -ais : tu chantais, tu finissais, tu prenais. Récite la série complète : -ais, -ais, -ait, -ions, -iez, -aient. Elle est valable pour tous les verbes sans exception.",
      hint: "Avec « tu », il y a toujours un s à la fin.",
    },
    {
      id: "fips-4",
      level: 1,
      type: "truefalse",
      question: "À l'imparfait, tous les verbes ont les mêmes terminaisons.",
      answer: true,
      explanation:
        "Vrai ! C'est ce qui rend l'imparfait si agréable : -ais, -ais, -ait, -ions, -iez, -aient pour absolument tous les verbes, du 1er au 3e groupe. Seul le radical peut varier (être → ét-), jamais la terminaison.",
    },
    {
      id: "fips-5",
      level: 2,
      type: "qcm",
      question: "Complète au passé simple : « Il (finir) son repas en silence. »",
      choices: ["finissait", "finit", "fina", "finira"],
      answer: 1,
      explanation:
        "« Finir » est un verbe du 2e groupe : au passé simple, il fait « il finit » et « ils finirent ». Attention : « il finit » s'écrit pareil au présent ! C'est le contexte du récit au passé qui indique le temps. « Fina » n'existe pas : seul le 1er groupe se termine en -a.",
      hint: "Les verbes du 2e groupe ne se terminent pas en -a au passé simple.",
    },
    {
      id: "fips-6",
      level: 2,
      type: "qcm",
      question: "Complète au passé simple : « Ils (manger) toute la tarte. »",
      choices: ["mangeaient", "mangèrent", "mangeront", "mangent"],
      answer: 1,
      explanation:
        "Au passé simple, les verbes du 1er groupe font -èrent avec ils : ils mangèrent. « Mangeaient » est l'imparfait (description ou habitude), pas le passé simple (action du récit).",
      hint: "Cherche la terminaison du passé simple, pas celle de l'imparfait.",
    },
    {
      id: "fips-7",
      level: 2,
      type: "input",
      question: "Conjugue le verbe avoir au passé simple : « Il ... très peur. » (écris seulement le verbe)",
      answer: "eut",
      accept: ["il eut"],
      explanation:
        "Avoir au passé simple : il eut, ils eurent. À ne pas confondre avec l'imparfait « il avait ». Autres formes à connaître par cœur : être → il fut ; faire → il fit ; voir → il vit ; venir → il vint.",
      hint: "Trois lettres seulement, de la famille des passés simples en -ut.",
    },
    {
      id: "fips-8",
      level: 2,
      type: "truefalse",
      question: "Dans un récit, l'imparfait sert à raconter les actions soudaines qui font avancer l'histoire.",
      answer: false,
      explanation:
        "Faux, c'est l'inverse ! L'imparfait décrit le décor, les habitudes, l'arrière-plan (« il pleuvait »). Ce sont les actions soudaines et successives qui se mettent au passé simple (« soudain, la porte s'ouvrit »).",
    },
    {
      id: "fips-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase exprime une HABITUDE du passé ?",
      choices: [
        "Ce jour-là, il mangea au restaurant.",
        "Tous les midis, il mangeait au restaurant.",
        "Soudain, il sortit du restaurant.",
        "Demain, il mangera au restaurant.",
      ],
      answer: 1,
      explanation:
        "« Tous les midis, il mangeait » : l'imparfait + un indice de répétition (« tous les midis ») expriment l'habitude. « Ce jour-là, il mangea » est une action unique au passé simple ; les deux dernières phrases sont une action soudaine et un futur.",
      hint: "Cherche l'indice de temps qui montre une répétition.",
    },
    {
      id: "fips-10",
      level: 3,
      type: "qcm",
      question: "Comment s'écrit « je (manger) » à l'imparfait ?",
      choices: ["je mangais", "je mangeais", "je mangeai", "je mangea"],
      answer: 1,
      explanation:
        "Verbe en -ger : on garde le e devant les terminaisons qui commencent par a, pour conserver le son [j] → je mangeais, tu mangeais, il mangeait. Mais attention : nous mangions, vous mangiez (pas de e devant i). Ne confonds pas non plus avec « je mangeai », passé simple de 1re personne.",
      hint: "Le son [j] doit se conserver devant le a de la terminaison.",
    },
    {
      id: "fips-11",
      level: 3,
      type: "input",
      question: "Conjugue le verbe venir au passé simple : « Il ... me voir hier soir. » (écris seulement le verbe)",
      answer: "vint",
      accept: ["il vint"],
      explanation:
        "« Venir » appartient à la famille des passés simples en -int : il vint, ils vinrent (comme tenir → il tint). Piège classique : « il venut » et « il vena » n'existent pas ! C'est une forme à apprendre par cœur.",
      hint: "C'est la quatrième famille de sons du passé simple : -int.",
    },
    {
      id: "fips-12",
      level: 3,
      type: "truefalse",
      question: "Dans « Soudain, le téléphone sonnait. », le verbe est conjugué au temps attendu dans un récit.",
      answer: false,
      explanation:
        "Faux ! « Soudain » annonce une action brusque de premier plan : il faut le passé simple → « Soudain, le téléphone sonna. » L'imparfait « sonnait » décrirait une sonnerie en cours ou répétée, ce qui contredit « soudain ». C'est LE piège -ait/-a : vérifie toujours si l'action décrit (imparfait) ou surgit (passé simple).",
      hint: "Que signale le mot « soudain » : un décor ou un événement ?",
    },
  ],
  videos: [
    { title: "L'imparfait de l'indicatif - Français - Collège - Les Bons Profs", youtubeId: "-76mcUvhDkY", channel: "Les Bons Profs" },
    { title: "Le passé simple de l'indicatif - Français - Collège - Les Bons Profs", youtubeId: "tYsSXSx-AOE", channel: "Les Bons Profs" },
  ],
};
