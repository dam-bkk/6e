import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-present",
  subject: "francais",
  num: 3,
  title: "Le présent de l'indicatif",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "Clock",
  teaser: "Maîtrise les terminaisons du présent et déjoue les pièges des verbes irréguliers.",
  objectives: [
    "Je sais reconnaître le groupe d'un verbe à partir de son infinitif",
    "Je connais les terminaisons du présent pour les trois groupes",
    "Je sais conjuguer les verbes fréquents : être, avoir, aller, faire, dire, prendre, venir, pouvoir, vouloir",
    "Je connais les pièges des verbes en -cer, -ger et -yer",
  ],
  lesson: [
    {
      title: "Les trois groupes de verbes",
      paragraphs: [
        "On classe les verbes en trois groupes selon leur infinitif. 1er groupe : infinitif en -er (chanter, jouer) — sauf aller ! 2e groupe : infinitif en -ir avec « -issons » à la 1re personne du pluriel (finir → nous finissons). 3e groupe : tous les autres (prendre, venir, pouvoir, aller…).",
        "Connaître le groupe d'un verbe est indispensable : chaque groupe a ses terminaisons. Les verbes du 3e groupe sont les plus irréguliers, il faut les apprendre par cœur.",
      ],
      example: [
        "• chanter → 1er groupe • finir (nous finissons) → 2e groupe",
        "• partir (nous partons, pas « partissons ») → 3e groupe • aller → 3e groupe.",
      ],
      tip: "Pour distinguer 2e et 3e groupe, teste avec « nous » : nous finissons (2e groupe), mais nous partons (3e groupe). Le « -issons » est la signature du 2e groupe.",
      figure: "fr-trois-groupes",
    },
    {
      title: "Les terminaisons du présent",
      paragraphs: [
        "1er groupe : -e, -es, -e, -ons, -ez, -ent. Je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent.",
        "2e groupe : -is, -is, -it, -issons, -issez, -issent. Je finis, tu finis, elle finit, nous finissons, vous finissez, elles finissent.",
        "3e groupe : le plus souvent -s, -s, -t (ou -d), -ons, -ez, -ent. Je pars, tu pars, il part ; je prends, tu prends, il prend.",
      ],
      example: [
        "tu chantes (1er groupe : -es) mais tu finis, tu pars (2e et 3e groupes : -s).",
        "ils chantent, ils finissent, ils partent : la terminaison -ent ne se prononce pas !",
      ],
      tip: "Avec « tu », il y a toujours un s au présent : tu chantes, tu finis, tu peux. Aucune exception à retenir en 6e.",
    },
    {
      title: "Les verbes irréguliers à connaître par cœur",
      paragraphs: [
        "Les verbes les plus utilisés du français sont aussi les plus irréguliers. Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont. Avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont. Aller : je vais, tu vas, il va, nous allons, vous allez, ils vont.",
        "Faire : nous faisons, vous faites, ils font. Dire : vous dites (et non « vous disez » !). Prendre : il prend, ils prennent. Venir : il vient, ils viennent. Pouvoir et vouloir : je peux, tu peux, il peut ; je veux, tu veux, il veut.",
      ],
      example: [
        "« Vous faites vos devoirs et vous dites la vérité. »",
        "Faire, dire et être sont les trois seuls verbes en -tes avec vous : vous faites, vous dites, vous êtes.",
      ],
      tip: "Pouvoir et vouloir prennent un x (et non un s) avec je et tu : je peux, tu veux. Ce sont des exceptions à mémoriser.",
    },
    {
      title: "Les pièges d'orthographe : -cer, -ger, -yer",
      paragraphs: [
        "Verbes en -cer : le c devient ç devant o pour garder le son [s] : nous lançons, nous avançons. Sans cédille, « lancons » se lirait « lan-kon » !",
        "Verbes en -ger : on garde le e devant o pour conserver le son [j] : nous mangeons, nous nageons. Sans lui, « mangons » se lirait « man-gon ».",
        "Verbes en -yer : le y devient i devant un e muet : je paie, tu essuies, il nettoie ; mais nous payons, vous essuyez (le y revient quand la terminaison s'entend).",
      ],
      example: [
        "lancer → nous lançons • manger → nous mangeons",
        "essuyer → tu essuies, mais vous essuyez.",
      ],
      tip: "La cédille et le e ne sont pas des caprices : ils servent à garder le bon son devant o. Prononce le mot à voix haute pour vérifier.",
    },
    {
      title: "Quand utilise-t-on le présent ?",
      paragraphs: [
        "Le présent d'énonciation exprime ce qui se passe au moment où l'on parle : « Je te téléphone de la gare. »",
        "Le présent d'habitude exprime une action qui se répète : « Tous les mardis, elle va à la piscine. » Le présent de vérité générale énonce ce qui est toujours vrai : « L'eau bout à 100 °C. »",
        "Le présent de narration rend un récit au passé plus vivant : « Hier, je marchais tranquillement quand soudain un chien surgit devant moi ! »",
      ],
      example: [
        "« La Terre tourne autour du Soleil. » → vérité générale.",
        "« Chaque matin, je prends le bus. » → habitude.",
      ],
      tip: "Un proverbe est toujours au présent de vérité générale : « Qui vole un œuf vole un bœuf. »",
    },
  ],
  exercises: [
    {
      id: "fpre-1",
      level: 1,
      type: "qcm",
      question: "Complète au présent : « Nous (finir) nos exercices. »",
      choices: ["finons", "finissons", "finisons", "finissont"],
      answer: 1,
      explanation:
        "« Finir » est un verbe du 2e groupe : avec nous, la terminaison est -issons → nous finissons. C'est justement ce « -issons » qui prouve qu'un verbe en -ir appartient au 2e groupe.",
      hint: "« Finir » est un verbe du 2e groupe.",
    },
    {
      id: "fpre-2",
      level: 1,
      type: "qcm",
      question: "Complète au présent : « Tu (chanter) dans la chorale. »",
      choices: ["chante", "chantes", "chants", "chantent"],
      answer: 1,
      explanation:
        "« Chanter » est un verbe du 1er groupe : avec tu, la terminaison est -es → tu chantes. Retiens qu'avec « tu », il y a toujours un s au présent.",
      hint: "Avec « tu », il y a toujours une lettre finale bien précise…",
    },
    {
      id: "fpre-3",
      level: 1,
      type: "input",
      question: "Conjugue le verbe être au présent : « Nous ... en classe. » (écris seulement le verbe)",
      answer: "sommes",
      accept: ["nous sommes"],
      explanation:
        "Être est un verbe très irrégulier qu'il faut connaître par cœur : je suis, tu es, il est, nous sommes, vous êtes, ils sont. Avec nous → sommes.",
      hint: "Je suis, tu es, il est, nous…",
    },
    {
      id: "fpre-4",
      level: 1,
      type: "truefalse",
      question: "« Aller » est un verbe du 1er groupe car son infinitif se termine par -er.",
      answer: false,
      explanation:
        "Faux ! C'est LA grande exception : malgré son infinitif en -er, « aller » est un verbe du 3e groupe, car sa conjugaison est complètement irrégulière : je vais, tu vas, il va, nous allons, ils vont.",
    },
    {
      id: "fpre-5",
      level: 2,
      type: "qcm",
      question: "Complète au présent : « Nous (manger) à la cantine. »",
      choices: ["mangons", "mangeons", "manjons", "mangeont"],
      answer: 1,
      explanation:
        "Pour les verbes en -ger, on garde le e devant la terminaison -ons afin de conserver le son [j] : nous mangeons. Sans ce e, « mangons » se prononcerait « man-gon ». Même règle pour nager, ranger, voyager…",
      hint: "Prononce « mangons » à voix haute : entends-tu le problème ?",
    },
    {
      id: "fpre-6",
      level: 2,
      type: "input",
      question: "Conjugue au présent : « Nous (lancer) le ballon. » (écris seulement le verbe)",
      answer: "lançons",
      accept: ["lancons", "nous lançons", "nous lancons"],
      explanation:
        "Pour les verbes en -cer, le c prend une cédille devant o pour garder le son [s] : nous lançons. Sans cédille, on lirait « lan-kon ». Même règle pour avancer, placer, commencer…",
      hint: "Attention au son [s] devant la terminaison -ons.",
    },
    {
      id: "fpre-7",
      level: 2,
      type: "qcm",
      question: "Complète au présent : « Ils (prendre) le train. »",
      choices: ["prendent", "prennent", "prenent", "prends"],
      answer: 1,
      explanation:
        "« Prendre » (3e groupe) double le n aux personnes du pluriel en -ent : ils prennent. Attention au piège « prendent » : le d de l'infinitif disparaît au pluriel (nous prenons, vous prenez, ils prennent).",
      hint: "Une consonne se double à cette personne.",
    },
    {
      id: "fpre-8",
      level: 2,
      type: "truefalse",
      question: "On écrit : « Vous dites la vérité. »",
      answer: true,
      explanation:
        "Vrai ! « Dire » fait « vous dites » et non « vous disez ». Seuls trois verbes se terminent en -tes avec vous : vous êtes, vous faites, vous dites. Tous les autres prennent -ez.",
    },
    {
      id: "fpre-9",
      level: 3,
      type: "qcm",
      question: "Complète au présent : « Tu (essuyer) la table. »",
      choices: ["essuye", "essuies", "essuyes", "essuis"],
      answer: 1,
      explanation:
        "Pour les verbes en -uyer, le y devient i devant un e muet : tu essuies (comme j'essuie, il essuie). Le y ne revient que lorsque la terminaison s'entend : nous essuyons, vous essuyez. Et n'oublie pas le s obligatoire avec tu !",
      hint: "Le y se transforme devant un e muet.",
    },
    {
      id: "fpre-10",
      level: 3,
      type: "input",
      question: "Conjugue au présent : « Tu (pouvoir) venir demain. » (écris seulement le verbe)",
      answer: "peux",
      accept: ["tu peux"],
      explanation:
        "« Pouvoir » et « vouloir » sont des exceptions : avec je et tu, ils prennent un x et non un s → je peux, tu peux, je veux, tu veux. À la 3e personne : il peut, il veut (avec un t).",
      hint: "La terminaison n'est ni -s ni -t : c'est une lettre plus rare.",
    },
    {
      id: "fpre-11",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est au présent de vérité générale ?",
      choices: [
        "Je te téléphone de la gare.",
        "Chaque samedi, il joue au foot.",
        "L'eau bout à 100 °C.",
        "Soudain, le chien surgit devant moi !",
      ],
      answer: 2,
      explanation:
        "« L'eau bout à 100 °C » est vrai en tout temps et en tout lieu : c'est le présent de vérité générale. Les autres sont : un présent d'énonciation (au moment où l'on parle), un présent d'habitude (répétition) et un présent de narration (récit rendu vivant).",
      hint: "Cherche la phrase qui est vraie hier, aujourd'hui et demain.",
    },
    {
      id: "fpre-12",
      level: 3,
      type: "truefalse",
      question: "Au présent, on écrit : « J'appelle mon chien » avec deux l.",
      answer: true,
      explanation:
        "Vrai ! « Appeler » double le l devant un e muet : j'appelle, tu appelles, ils appellent. Mais le l reste seul quand la terminaison s'entend : nous appelons, vous appelez. C'est le même mécanisme que pour « jeter » (je jette / nous jetons).",
      hint: "Écoute la fin du verbe : la terminaison s'entend-elle ?",
    },
  ],
  videos: [
    { title: "Le présent de l'indicatif - Français - Collège - Les Bons Profs", youtubeId: "1XG6A8G-Yac", channel: "Les Bons Profs" },
  ],
};
