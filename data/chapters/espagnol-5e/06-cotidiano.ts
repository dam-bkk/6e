import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-cotidiano",
  subject: "espagnol",
  grade: "5e",
  num: 6,
  title: "La vida cotidiana",
  domain: "grandeurs",
  domainLabel: "Vocabulario",
  icon: "CalendarDays",
  teaser: "Jours, mois, heure, emploi du temps : raconter ta semaine en espagnol.",
  objectives: [
    "Je connais les jours de la semaine, les mois et les saisons",
    "Je sais dire et écrire la date",
    "Je sais dire l'heure : es la una, son las dos y media…",
    "Je sais parler de mon emploi du temps et de mes matières",
    "Je connais les nombres de 31 à 100",
  ],
  lesson: [
    {
      title: "Les jours de la semaine",
      paragraphs: [
        "Les sept jours : lunes (lundi), martes (mardi), miércoles (mercredi), jueves (jeudi), viernes (vendredi), sábado (samedi), domingo (dimanche).",
        "En espagnol, les jours ne prennent JAMAIS de majuscule, contrairement à l'anglais.",
        "Piège important : el lunes signifie « lundi » ou « ce lundi », mais los lunes (au pluriel) signifie « le lundi, tous les lundis ». El lunes voy al cine = lundi je vais au cinéma. Los lunes tengo música = le lundi (chaque semaine) j'ai musique.",
      ],
      example: [
        "Hoy es martes. → Aujourd'hui c'est mardi.",
        "El sábado voy a la piscina. → Samedi, je vais à la piscine.",
        "Los sábados juego al fútbol. → Le samedi (tous les samedis), je joue au foot.",
      ],
      tip: "De lunes à viernes, les jours finissent en -es et ne changent pas au pluriel : el lunes / los lunes. Seuls sábado et domingo prennent un -s : los sábados, los domingos.",
    },
    {
      title: "Les mois et les saisons",
      paragraphs: [
        "Les douze mois : enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. Eux non plus ne prennent pas de majuscule.",
        "Les quatre saisons : la primavera (le printemps), el verano (l'été), el otoño (l'automne), el invierno (l'hiver).",
        "Pour la date, on utilise la formule : Hoy es el + nombre + de + mois. Exemple : Hoy es el 12 de mayo (aujourd'hui, c'est le 12 mai).",
      ],
      example: [
        "Mi cumpleaños es el 3 de abril. → Mon anniversaire est le 3 avril.",
        "En verano voy a la playa. → En été, je vais à la plage.",
      ],
      tip: "Prononciation : le j espagnol de junio et julio est un son raclé dans la gorge, comme la jota de « ¡hola, Juan! ». Et le ñ de otoño se dit « gn » comme dans « montagne ».",
    },
    {
      title: "Quelle heure est-il ?",
      figure: "es-hora",
      paragraphs: [
        "Pour demander l'heure : ¿Qué hora es? Pour répondre, il y a une règle d'accord : es la una (il est une heure) mais son las dos, son las tres… (il est deux heures, trois heures…).",
        "Pourquoi ? Parce que una hora est singulier (es la…) et que dos horas, tres horas… sont pluriels (son las…).",
        "Pour les minutes : y media = et demie, y cuarto = et quart, menos cuarto = moins le quart. Son las dos y media = il est deux heures et demie.",
      ],
      example: [
        "Es la una. → Il est une heure.",
        "Son las tres y cuarto. → Il est trois heures et quart.",
        "Son las cinco menos cuarto. → Il est cinq heures moins le quart.",
      ],
      tip: "Une seule heure où l'on dit ES : la una. Pour toutes les autres, c'est SON. Si tu hésites, demande-toi : une heure (singulier) ou plusieurs (pluriel) ?",
    },
    {
      title: "L'emploi du temps et les matières",
      paragraphs: [
        "Les matières scolaires : las matemáticas (les maths), el español (l'espagnol), el francés (le français), el inglés (l'anglais), la historia (l'histoire), las ciencias (les sciences), el deporte ou la educación física (le sport), la música (la musique), el dibujo (le dessin).",
        "Pour parler de ton emploi du temps (el horario) : Los lunes tengo matemáticas a las nueve = le lundi, j'ai maths à neuf heures.",
        "Pour dire à quelle heure : a la una (à une heure), a las diez (à dix heures).",
      ],
      example: [
        "Mi asignatura favorita es el dibujo. → Ma matière préférée est le dessin.",
        "Los martes tengo inglés a las dos. → Le mardi, j'ai anglais à deux heures.",
      ],
      tip: "« Il est dix heures » = SON las diez, mais « à dix heures » = A las diez. Le a tout seul veut dire « à ».",
    },
    {
      title: "Les nombres de 31 à 100",
      paragraphs: [
        "Les dizaines : treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90), cien (100).",
        "À partir de 31, on écrit en trois mots avec y (et) : treinta y uno (31), cuarenta y cinco (45), sesenta y ocho (68).",
        "Bonne nouvelle : pas de piège comme les « soixante-dix » ou « quatre-vingts » français ! 70 = setenta, 80 = ochenta, 90 = noventa. C'est très régulier.",
      ],
      example: [
        "treinta y dos → 32",
        "cincuenta y siete → 57",
        "noventa y nueve → 99",
        "cien → 100",
      ],
      tip: "Ne confonds pas sesenta (60, avec un e comme sEis, 6) et setenta (70, avec un t comme sieTe, 7).",
    },
  ],
  exercises: [
    {
      id: "es6-1",
      level: 1,
      type: "qcm",
      question: "Quel jour vient juste après « martes » ?",
      choices: ["lunes", "miércoles", "jueves", "viernes"],
      answer: 1,
      explanation:
        "L'ordre est : lunes, martes, miércoles, jueves, viernes, sábado, domingo. Après martes (mardi) vient donc miércoles (mercredi). Piège : martes = mardi, pas mercredi, même si les deux commencent par « m » !",
      hint: "Martes = mardi. Quel jour vient après mardi ?",
    },
    {
      id: "es6-2",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « l'été » en espagnol ?",
      choices: ["el invierno", "la primavera", "el verano", "el otoño"],
      answer: 2,
      explanation:
        "El verano = l'été. Les autres saisons : la primavera (le printemps), el otoño (l'automne), el invierno (l'hiver).",
      hint: "C'est la saison où l'on va a la playa (à la plage)…",
    },
    {
      id: "es6-3",
      level: 1,
      type: "input",
      question: "Écris en espagnol le mois de janvier (en minuscules).",
      answer: "enero",
      explanation:
        "Janvier = enero. Attention : en espagnol, les mois ne prennent jamais de majuscule, et enero ne commence pas par un j comme en français !",
      hint: "Il ne commence pas par un j, mais par un e.",
    },
    {
      id: "es6-4",
      level: 1,
      type: "truefalse",
      question: "En espagnol, les jours de la semaine s'écrivent avec une majuscule.",
      answer: false,
      explanation:
        "Faux ! En espagnol, les jours et les mois s'écrivent en minuscules : lunes, martes, enero, mayo… C'est l'anglais qui met des majuscules (Monday, January), pas l'espagnol.",
    },
    {
      id: "es6-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « il est deux heures et demie » ?",
      choices: [
        "Es la dos y media",
        "Son las dos y media",
        "Son las dos y cuarto",
        "Es la una y media",
      ],
      answer: 1,
      explanation:
        "Deux heures est un pluriel, donc on dit SON las dos. Et demie = y media. Résultat : son las dos y media. On ne dit ES LA que pour une heure : es la una.",
      hint: "Deux heures : singulier ou pluriel ? Es la… ou Son las… ?",
    },
    {
      id: "es6-6",
      level: 2,
      type: "qcm",
      question: "Que signifie la phrase « Los lunes tengo música » ?",
      choices: [
        "Lundi prochain, j'ai musique",
        "Le lundi (tous les lundis), j'ai musique",
        "Les lundis, je n'ai pas musique",
        "Ce lundi, j'écoute de la musique",
      ],
      answer: 1,
      explanation:
        "LOS lunes (au pluriel) = « le lundi » au sens de « tous les lundis » : c'est une habitude. Pour parler d'un lundi précis, on dirait EL lunes : El lunes tengo música = ce lundi, j'ai musique.",
      hint: "Regarde bien : el lunes ou los lunes ?",
    },
    {
      id: "es6-7",
      level: 2,
      type: "input",
      question: "Écris en chiffres le nombre « cuarenta y cinco ».",
      answer: "45",
      explanation:
        "Cuarenta = 40, y = et, cinco = 5. Donc cuarenta y cinco = 45. Ne confonds pas cuarenta (40) et cuatro (4) : ils commencent pareil !",
      hint: "Cuarenta ressemble à cuatro (4)… multiplié par 10.",
    },
    {
      id: "es6-8",
      level: 2,
      type: "truefalse",
      question: "Pour dire « il est une heure », on dit « son las una ».",
      answer: false,
      explanation:
        "Faux ! Una hora est un singulier, donc on dit ES LA una. Son las s'utilise pour toutes les autres heures (son las dos, son las diez…), mais jamais pour une heure.",
      hint: "Une heure, c'est singulier…",
    },
    {
      id: "es6-9",
      level: 3,
      type: "input",
      question: "Écris en toutes lettres (en espagnol, 3 mots) le nombre 68.",
      answer: "sesenta y ocho",
      explanation:
        "68 = 60 + 8 = sesenta y ocho. Piège classique : sesenta = 60 (comme sEis, 6) et setenta = 70 (comme sieTe, 7). Un seul t de différence !",
      hint: "60 = sesenta (avec un e, comme seis).",
    },
    {
      id: "es6-10",
      level: 3,
      type: "qcm",
      question: "« Son las cinco menos cuarto. » Quelle heure est-il ?",
      choices: ["5 h 15", "4 h 45", "5 h 30", "4 h 15"],
      answer: 1,
      explanation:
        "Menos cuarto = moins le quart. Las cinco menos cuarto = cinq heures moins le quart = 4 h 45. Piège : ce n'est pas 5 h 15 (ça, ce serait las cinco y cuarto).",
      hint: "Menos = moins. On enlève un quart d'heure à cinq heures.",
    },
    {
      id: "es6-11",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « aujourd'hui c'est le 12 mai » → « Hoy es el 12 de ... » (complète avec le mois, en minuscules).",
      answer: "mayo",
      explanation:
        "Mai = mayo. La date se construit avec de : el 12 de mayo. Rappel : les mois s'écrivent sans majuscule en espagnol. Ne confonds pas mayo (mai) et marzo (mars).",
      hint: "Ressemble beaucoup à « mai »… avec un yo à la fin.",
    },
    {
      id: "es6-12",
      level: 3,
      type: "truefalse",
      question: "Dans « Los martes tengo inglés a las nueve », la personne a cours d'anglais tous les mardis à neuf heures.",
      answer: true,
      explanation:
        "Vrai ! Los martes (pluriel) = tous les mardis, une habitude. Tengo inglés = j'ai anglais. A las nueve = à neuf heures. La phrase décrit bien un emploi du temps qui se répète chaque semaine.",
    },
  ],
  videos: [
    {
      title: "Les JOURS de la semaine, les MOIS et les SAISONS de l'année en espagnol (+Exercices)",
      youtubeId: "p1WQewwVX6c",
      channel: "¡Aprende español con Saby!",
    },
  ],
};
