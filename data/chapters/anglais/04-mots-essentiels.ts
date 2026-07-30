import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-mots-essentiels",
  subject: "anglais",
  num: 4,
  title: "Numbers, days & time",
  domain: "grandeurs",
  domainLabel: "Vocabulary",
  icon: "CalendarDays",
  teaser: "Compter jusqu'à 100, donner la date et lire l'heure comme à Londres.",
  objectives: [
    "Je sais compter de 1 à 100 sans confondre thirteen et thirty",
    "Je connais les jours et les mois (et leur majuscule obligatoire)",
    "Je sais dire la date avec les ordinaux : 1st, 2nd, 3rd…",
    "Je sais dire l'heure : o'clock, half past, quarter past, quarter to",
    "Je connais les couleurs et je sais répondre à What time is it?",
  ],
  lesson: [
    {
      title: "Les nombres de 1 à 100",
      paragraphs: [
        "De 1 à 12, chaque nombre a son mot : one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve.",
        "De 13 à 19, les nombres se terminent en -teen : thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Les dizaines se terminent en -ty : twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), et one hundred (100).",
        "LE piège : thirteen (13) et thirty (30) se ressemblent beaucoup ! À l'oral, -teen est long et accentué (« tiiine »), -ty est court (« ti »). Pièges d'orthographe : forty sans u (pas « fourty »), fifteen et fifty avec f (pas « fiveteen »).",
      ],
      example: [
        "13 → thirteen, 30 → thirty.",
        "14 → fourteen, 40 → forty (sans u !).",
        "21 → twenty-one, 35 → thirty-five, 99 → ninety-nine.",
      ],
      tip: "-TEEN = adolescent (13-19, comme les teenagers !) et se prononce long. -TY = les dizaines, prononcé court. Thirteen chante, thirty claque.",
    },
    {
      title: "Les jours et les mois : majuscule obligatoire !",
      paragraphs: [
        "Les jours : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. En anglais, la semaine « commence » souvent le dimanche sur les calendriers, mais à l'école on récite à partir de Monday.",
        "Les mois : January, February, March, April, May, June, July, August, September, October, November, December.",
        "Règle absolue : jours et mois prennent TOUJOURS une majuscule en anglais, contrairement au français (« lundi », « janvier » sans majuscule). On dit on Monday (le lundi) et in July (en juillet).",
      ],
      example: [
        "I play basketball on Wednesday. → Je joue au basket le mercredi.",
        "My birthday is in August. → Mon anniversaire est en août.",
        "Wednesday se prononce « wènz-dei » : le premier d est muet !",
      ],
      tip: "ON + jour (on Friday), IN + mois (in May). Et n'oublie jamais la majuscule : monday ✗ → Monday ✓.",
    },
    {
      title: "La date et les ordinaux",
      paragraphs: [
        "Pour donner la date, l'anglais utilise les nombres ordinaux : first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th)… puis presque tous en -th : sixth, seventh… twentieth (20th), twenty-first (21st), thirtieth (30th).",
        "Les trois premiers sont irréguliers : one → first, two → second, three → third. Ensuite : 21st = twenty-first, 22nd = twenty-second, 23rd = twenty-third (la terminaison suit le dernier chiffre).",
        "La date à la britannique s'écrit jour + mois : 4th May, et se dit the fourth of May. Pour demander : What's the date today? ou When is your birthday?",
      ],
      example: [
        "1st → first, 2nd → second, 3rd → third, 4th → fourth.",
        "My birthday is on the twelfth of March. → Mon anniversaire est le 12 mars.",
        "Today is Tuesday the third of June. → Aujourd'hui, c'est mardi 3 juin.",
      ],
      tip: "Les deux dernières lettres de l'ordinal donnent l'abréviation : first → 1st, second → 2nd, third → 3rd, fourth → 4th.",
    },
    {
      title: "L'heure : What time is it?",
      figure: "en-clock",
      paragraphs: [
        "Pour l'heure pile : It's three o'clock (il est 3 heures). O'clock ne s'utilise QUE pour les heures piles.",
        "Pour la demie : half past → It's half past six (6 h 30, mot à mot « la moitié après six »). Pour le quart : quarter past (et quart) et quarter to (moins le quart) → It's quarter past nine (9 h 15), It's quarter to five (5 h moins le quart, donc 4 h 45).",
        "Pour les autres minutes : past de 1 à 30 (ten past two = 2 h 10), to de 31 à 59 (twenty to eight = 8 h moins 20, donc 7 h 40). Les Anglais utilisent peu les heures de 13 à 24 : ils précisent avec in the morning, in the afternoon, in the evening.",
      ],
      example: [
        "What time is it? – It's seven o'clock. → Quelle heure est-il ? – Il est 7 heures.",
        "It's half past ten. → Il est 10 h 30.",
        "It's quarter to four. → Il est 4 heures moins le quart (3 h 45).",
        "It's twenty past one. → Il est 1 h 20.",
      ],
      tip: "PAST = après l'heure (de :01 à :30), TO = vers l'heure suivante (de :31 à :59). À « to », pense : « il reste X minutes TO (jusqu'à) la prochaine heure ».",
    },
    {
      title: "Les couleurs",
      paragraphs: [
        "Les couleurs essentielles : red (rouge), blue (bleu), green (vert), yellow (jaune), black (noir), white (blanc), orange, pink (rose), purple (violet), brown (marron), grey (gris — orthographe britannique).",
        "En anglais, l'adjectif de couleur se place AVANT le nom, et il est invariable : a red car, two red cars (pas de -s à red !).",
        "Pour demander : What colour is it? (colour avec -our en anglais britannique ; les Américains écrivent color).",
      ],
      example: [
        "The sky is blue. → Le ciel est bleu.",
        "She's got a green schoolbag. → Elle a un cartable vert.",
        "What colour is your bike? – It's black and white. → De quelle couleur est ton vélo ? – Noir et blanc.",
      ],
      tip: "L'adjectif AVANT le nom et JAMAIS de pluriel : two blue pens, pas « two pens blues ». C'est l'inverse du français !",
    },
  ],
  exercises: [
    {
      id: "enum-1",
      level: 1,
      type: "qcm",
      question: "Comment s'écrit le nombre 30 ?",
      choices: ["thirteen", "thirty", "threety", "thirtee"],
      answer: 1,
      explanation:
        "30 = thirty (une dizaine, terminaison -ty, prononcée courte). Thirteen, c'est 13 (terminaison -teen, longue et accentuée). C'est LE piège classique des nombres anglais.",
      hint: "-teen = 13 à 19, -ty = les dizaines.",
    },
    {
      id: "enum-2",
      level: 1,
      type: "qcm",
      question: "Quel jour vient juste après Tuesday ?",
      choices: ["Thursday", "Monday", "Wednesday", "Sunday"],
      answer: 2,
      explanation:
        "L'ordre des jours : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Après Tuesday (mardi) vient Wednesday (mercredi). Attention à ne pas confondre Tuesday et Thursday, qui se ressemblent !",
      hint: "Tuesday = mardi. Quel jour vient après mardi ?",
    },
    {
      id: "enum-3",
      level: 1,
      type: "truefalse",
      question: "En anglais, on écrit les jours avec une majuscule : « Monday », « Friday ».",
      answer: true,
      explanation:
        "Vrai ! Les jours ET les mois prennent toujours une majuscule en anglais : Monday, Friday, January, August. C'est différent du français, où « lundi » et « janvier » s'écrivent en minuscules.",
    },
    {
      id: "enum-4",
      level: 1,
      type: "input",
      question: "It's 8:00. Complète : « It's eight ... » (le mot des heures piles)",
      answer: "o'clock",
      accept: ["oclock", "o clock"],
      explanation:
        "Pour une heure pile, on dit o'clock : It's eight o'clock (il est 8 heures). Ce mot ne s'utilise jamais avec les minutes : on ne dit pas « eight thirty o'clock ».",
      hint: "Un petit mot avec une apostrophe…",
    },
    {
      id: "enum-5",
      level: 2,
      type: "qcm",
      question: "It's half past seven. Quelle heure est-il ?",
      choices: ["6 h 30", "7 h 30", "7 h 15", "7 h 45"],
      answer: 1,
      explanation:
        "Half past seven = la demie APRÈS 7 heures, donc 7 h 30. Half = la moitié (30 minutes), past = après. Attention à ne pas comprendre « la moitié avant » !",
      hint: "past = après l'heure donnée.",
    },
    {
      id: "enum-6",
      level: 2,
      type: "input",
      question: "Écris en lettres l'ordinal de « three » (utilisé dans « the ... of May »).",
      answer: "third",
      accept: ["3rd"],
      explanation:
        "Les trois premiers ordinaux sont irréguliers : first (1st), second (2nd), third (3rd). Ensuite, presque tous se forment en -th : fourth, fifth, sixth… La date du 3 mai se dit the third of May.",
      hint: "1st = first, 2nd = second, 3rd = ?",
    },
    {
      id: "enum-7",
      level: 2,
      type: "qcm",
      question: "Comment s'écrit le nombre 40 ?",
      choices: ["fourty", "fourteen", "forty", "fortey"],
      answer: 2,
      explanation:
        "40 = forty, SANS u ! C'est une exception d'orthographe célèbre : four et fourteen gardent le u, mais forty le perd. Fourteen, c'est 14.",
      hint: "Le u de four disparaît dans la dizaine.",
    },
    {
      id: "enum-8",
      level: 2,
      type: "truefalse",
      question: "« Two red cars » est correct : l'adjectif de couleur ne prend pas de -s au pluriel.",
      answer: true,
      explanation:
        "Vrai ! En anglais, les adjectifs sont invariables : two red cars, three green apples. Pas de pluriel sur l'adjectif, et il se place avant le nom — deux différences avec le français.",
      hint: "Les adjectifs anglais changent-ils au pluriel ?",
    },
    {
      id: "enum-9",
      level: 3,
      type: "input",
      question: "It's 4:45. Complète l'heure à l'anglaise : « It's quarter ... five. » (un seul mot)",
      answer: "to",
      explanation:
        "4 h 45 = 5 heures moins le quart. En anglais, on regarde vers l'heure SUIVANTE avec to : It's quarter to five. Past aurait donné quarter past four = 4 h 15.",
      hint: "Après la demie, on compte vers l'heure suivante.",
    },
    {
      id: "enum-10",
      level: 3,
      type: "qcm",
      question: "Ton anniversaire est le 21 juin. Comment le dis-tu ?",
      choices: [
        "My birthday is on the twenty-one of June.",
        "My birthday is on the twenty-first of June.",
        "My birthday is on June the twenty-oneth.",
        "My birthday is in the twenty-first of June.",
      ],
      answer: 1,
      explanation:
        "Pour la date, on utilise l'ordinal : 21 → twenty-first (la terminaison suit le dernier chiffre : 1 → first). Et pour une date précise, la préposition est on : on the twenty-first of June.",
      hint: "21st : regarde le dernier chiffre pour choisir l'ordinal.",
    },
    {
      id: "enum-11",
      level: 3,
      type: "input",
      question: "Écris en chiffres : « It's twenty to nine » (format h:mm, exemple 7:15).",
      answer: "8:40",
      accept: ["8h40", "08:40", "20:40"],
      explanation:
        "Twenty to nine = 9 heures moins 20 minutes, donc 8 h 40. Avec to, on part de l'heure suivante (nine) et on retire les minutes (twenty).",
      hint: "to nine = avant 9 heures. Retire 20 minutes à 9 h.",
    },
    {
      id: "enum-12",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est entièrement correcte ?",
      choices: [
        "My birthday is in july, on the fiveth.",
        "My birthday is in July, on the fifth.",
        "My birthday is on July, in the fifth.",
        "My birthday is in July, on the five.",
      ],
      answer: 1,
      explanation:
        "Trois règles réunies : majuscule au mois (July), in + mois mais on + date précise, et l'ordinal irrégulier fifth (five → fifth, pas « fiveth »). La bonne phrase : My birthday is in July, on the fifth.",
      hint: "Vérifie la majuscule, les prépositions in/on et l'ordinal de five.",
    },
  ],
  videos: [
    { title: "Days of the Week Song | The Singing Walrus", youtubeId: "mXMofxtDPUQ", channel: "The Singing Walrus - English Songs For Kids" },
    { title: "The Big Numbers Song", youtubeId: "e0dJWfQHF8Y", channel: "KidsTV123" },
  ],
};
