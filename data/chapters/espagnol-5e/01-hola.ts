import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-hola",
  subject: "espagnol",
  grade: "5e",
  num: 1,
  title: "¡Hola! Saluer et se présenter",
  domain: "donnees",
  domainLabel: "Comunicación",
  icon: "Hand",
  teaser: "Tes premiers mots en espagnol : dire bonjour, ton nom, ton âge et d'où tu viens.",
  objectives: [
    "Je sais saluer et prendre congé : hola, buenos días, adiós, hasta luego",
    "Je sais dire mon nom : me llamo… et demander ¿cómo te llamas?",
    "Je sais dire mon âge avec tengo … años",
    "Je sais dire d'où je viens : soy de + pays",
    "Je connais les sons de l'espagnol (ñ, ll, rr, j) et les nombres de 1 à 31",
  ],
  lesson: [
    {
      title: "Saluer : hola, buenos días…",
      paragraphs: [
        "Pour dire bonjour, le mot passe-partout est « hola ». Il marche à toute heure, avec tout le monde. Attention : le h ne se prononce jamais en espagnol, on dit « ola ».",
        "Selon le moment de la journée, on précise : « buenos días » (le matin), « buenas tardes » (l'après-midi) et « buenas noches » (le soir, ou pour dire bonne nuit).",
        "Pour dire au revoir : « adiós » (au revoir) ou « hasta luego » (à plus tard). On entend aussi « hasta mañana » (à demain).",
      ],
      example: [
        "¡Hola! ¿Qué tal? → Salut ! Ça va ?",
        "Buenos días, señora. → Bonjour, madame. (le matin)",
        "Buenas tardes. → Bonjour / bon après-midi.",
        "¡Adiós, hasta luego! → Au revoir, à plus tard !",
      ],
      tip: "Remarque le petit détail : buenOs días (avec o) mais buenAs tardes et buenAs noches (avec a). Et à l'écrit, l'espagnol met un point d'exclamation à l'envers au début : ¡Hola!",
    },
    {
      title: "Dire son nom : me llamo…",
      paragraphs: [
        "Pour dire ton nom : « Me llamo Emma » (je m'appelle Emma). Tu peux aussi dire simplement « Soy Emma » (je suis Emma).",
        "Pour demander son nom à un camarade : « ¿Cómo te llamas? » (comment tu t'appelles ?).",
        "À l'écrit, une question espagnole commence par un point d'interrogation à l'envers : ¿ … ?. C'est obligatoire, comme une majuscule en début de phrase.",
      ],
      example: [
        "— ¿Cómo te llamas? → Comment tu t'appelles ?",
        "— Me llamo Lucía. ¿Y tú? → Je m'appelle Lucía. Et toi ?",
        "— Yo soy Hugo. Encantado. → Moi, je suis Hugo. Enchanté.",
      ],
      tip: "Le double l de « llamo » ne se prononce pas « l » : il se prononce comme le y de « yoga ». On dit « mé yamo ».",
    },
    {
      title: "Dire son âge : tengo … años",
      paragraphs: [
        "Gros piège pour les francophones : en espagnol, on n'utilise pas le verbe être pour l'âge, mais le verbe TENER (avoir). On dit littéralement « j'ai 12 ans » : « Tengo doce años ».",
        "Pour demander l'âge : « ¿Cuántos años tienes? » (quel âge as-tu ?).",
        "Attention au mot « años » : le ñ est indispensable. Sans lui, le mot change complètement de sens !",
      ],
      example: [
        "— ¿Cuántos años tienes? → Quel âge as-tu ?",
        "— Tengo doce años. → J'ai 12 ans.",
        "— Mi hermano tiene quince años. → Mon frère a 15 ans.",
      ],
      tip: "Ne dis jamais « soy doce años » : pour l'âge, c'est toujours TENER (tengo, tienes…), jamais ser. Comme en français : on A un âge.",
    },
    {
      title: "Dire d'où l'on vient : soy de…",
      paragraphs: [
        "Pour dire ta nationalité ou ton origine : « Soy de Francia » (je suis de France, je viens de France). On utilise le verbe ser + de + le nom du pays.",
        "Quelques pays en espagnol : Francia (la France), España (l'Espagne), Inglaterra (l'Angleterre), Marruecos (le Maroc), México (le Mexique).",
        "Pour demander : « ¿De dónde eres? » (d'où es-tu ?).",
      ],
      example: [
        "— ¿De dónde eres? → D'où viens-tu ?",
        "— Soy de Francia, de París. → Je viens de France, de Paris.",
        "— Ana es de España. → Ana est d'Espagne.",
      ],
      tip: "« España » se prononce « Espagna » : le ñ fait le son « gn » du français « montagne ».",
    },
    {
      title: "Les sons de l'espagnol et les nombres de 1 à 31",
      paragraphs: [
        "Quatre sons à connaître : le ñ se prononce « gn » (España) ; le ll se prononce comme un y (llamo → « yamo ») ; le rr est un r roulé (perro) ; le j est un son raclé au fond de la gorge, comme une jota (Juan, rojo).",
        "Les nombres de 1 à 15 : uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.",
        "De 16 à 29, on soude les mots : dieciséis (16), diecisiete (17)… veinte (20), veintiuno (21), veintidós (22)… Puis treinta (30) et treinta y uno (31), écrit en trois mots avec « y » (et).",
      ],
      example: [
        "7 → siete, 12 → doce, 15 → quince",
        "16 → dieciséis, 21 → veintiuno, 28 → veintiocho",
        "30 → treinta, 31 → treinta y uno",
      ],
      tip: "Pour donner une date d'anniversaire, les nombres 1 à 31 suffisent : « Mi cumpleaños es el trece de mayo » (mon anniversaire est le 13 mai).",
    },
  ],
  exercises: [
    {
      id: "es1-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « bonjour » le matin en espagnol ?",
      choices: ["Buenas noches", "Buenos días", "Hasta luego", "Adiós"],
      answer: 1,
      explanation:
        "Le matin, on dit « buenos días ». « Buenas noches » = bonsoir/bonne nuit, « adiós » = au revoir, « hasta luego » = à plus tard. Piège d'accord : buenOs días mais buenAs tardes/noches.",
      hint: "« Días » veut dire « jours »… c'est donc pour le début de la journée.",
    },
    {
      id: "es1-2",
      level: 1,
      type: "qcm",
      question: "Que signifie la question « ¿Cómo te llamas? » ?",
      choices: ["Quel âge as-tu ?", "Comment vas-tu ?", "Comment tu t'appelles ?", "D'où viens-tu ?"],
      answer: 2,
      explanation:
        "« ¿Cómo te llamas? » signifie « comment tu t'appelles ? ». On y répond par « Me llamo… ». Ne confonds pas avec « ¿Qué tal? » (comment ça va ?) ni « ¿De dónde eres? » (d'où viens-tu ?).",
      hint: "La réponse à cette question commence par « Me llamo… ».",
    },
    {
      id: "es1-3",
      level: 1,
      type: "truefalse",
      question: "En espagnol, le h de « hola » ne se prononce pas.",
      answer: true,
      explanation:
        "Vrai ! Le h espagnol est toujours muet : « hola » se prononce « ola ». C'est une règle sans exception, contrairement au français où le h peut être aspiré.",
    },
    {
      id: "es1-4",
      level: 1,
      type: "input",
      question: "Complète la phrase pour dire ton nom : « me … lucía » (un seul mot).",
      answer: "llamo",
      explanation:
        "« Me llamo Lucía » = je m'appelle Lucía. Le verbe est « llamarse » : me llamo, te llamas… Rappel de prononciation : le ll se dit comme un y (« mé yamo »).",
      hint: "C'est le verbe de « ¿Cómo te llamas? », mais à la 1re personne.",
    },
    {
      id: "es1-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'ai 12 ans » en espagnol ?",
      choices: ["Soy doce años", "Tengo doce años", "Me llamo doce años", "Estoy doce años"],
      answer: 1,
      explanation:
        "Pour l'âge, l'espagnol utilise TENER (avoir), jamais ser : « Tengo doce años » = j'ai 12 ans. « Soy doce años » est le piège classique du francophone qui pense à l'anglais « I am 12 » — en espagnol c'est faux !",
      hint: "En espagnol, comme en français, on « a » un âge.",
    },
    {
      id: "es1-6",
      level: 2,
      type: "input",
      question: "Écris en espagnol le nombre 15 (en lettres).",
      answer: "quince",
      explanation:
        "15 = quince. Retiens la série irrégulière : once (11), doce (12), trece (13), catorce (14), quince (15). Ce n'est qu'à partir de 16 que l'on soude « dieci- » + unité (dieciséis).",
      hint: "Il fait partie de la série once, doce, trece, catorce…",
    },
    {
      id: "es1-7",
      level: 2,
      type: "qcm",
      question: "Dans le mot « perro » (chien), comment se prononce le rr ?",
      choices: ["Comme un r français normal", "Il est muet", "C'est un r roulé", "Comme un l"],
      answer: 2,
      explanation:
        "Le rr espagnol est un r fortement roulé avec la langue. C'est important : « perro » (rr roulé) = chien, mais « pero » (r simple) = mais. Un seul r de différence change le mot !",
      hint: "Pense au bruit d'un moteur : rrrrr…",
    },
    {
      id: "es1-8",
      level: 2,
      type: "input",
      question: "Complète la question pour demander l'origine : « ¿de … eres? » (un seul mot).",
      answer: "dónde",
      accept: ["donde"],
      explanation:
        "« ¿De dónde eres? » = d'où es-tu ? On répond « Soy de + pays » : Soy de Francia. Remarque l'accent écrit sur « dónde » : les mots interrogatifs espagnols portent un accent (¿cómo?, ¿dónde?, ¿cuántos?).",
      hint: "C'est le mot qui veut dire « où ».",
    },
    {
      id: "es1-9",
      level: 3,
      type: "input",
      question: "Réponds en espagnol à la question « ¿Cuántos años tienes? » si tu as 13 ans : « … trece años » (un seul mot).",
      answer: "tengo",
      explanation:
        "« Tengo trece años » = j'ai 13 ans. « ¿Cuántos años tienes? » demande l'âge, et on répond avec TENER à la 1re personne : tengo. Jamais « soy » pour l'âge !",
      hint: "Le verbe de la question est « tienes » (tu as) : passe-le à « je ».",
    },
    {
      id: "es1-10",
      level: 3,
      type: "qcm",
      question: "Comment s'écrit le nombre 31 en espagnol ?",
      choices: ["treintaiuno", "treinta y uno", "tres y uno", "veintiuno"],
      answer: 1,
      explanation:
        "31 = treinta y uno, en trois mots avec « y » (et). Piège : de 16 à 29 on soude (veintiuno = 21), mais à partir de 31 on sépare : treinta y uno, treinta y dos… « Veintiuno » = 21, pas 31 !",
      hint: "À partir de 30, on n'attache plus les mots.",
    },
    {
      id: "es1-11",
      level: 3,
      type: "truefalse",
      question: "La phrase « ¡Buenas noches, señor García! » peut se dire le soir pour saluer quelqu'un.",
      answer: true,
      explanation:
        "Vrai ! « Buenas noches » sert à la fois à dire bonsoir en arrivant et bonne nuit en partant. Remarque aussi le ¡ à l'envers en début d'exclamation : c'est la règle à l'écrit en espagnol.",
    },
    {
      id: "es1-12",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « je suis de France » (3 mots, avec la majuscule ou non).",
      answer: "soy de francia",
      explanation:
        "« Soy de Francia » : ser (soy) + de + pays. C'est la formule pour dire son origine. On répond ainsi à « ¿De dónde eres? ». Remarque : les noms de pays prennent une majuscule en espagnol (Francia), mais pas les nationalités (francesa).",
      hint: "Verbe ser à la 1re personne + « de » + le nom espagnol du pays.",
    },
  ],
  videos: [
    {
      title: "Comment SE PRÉSENTER en ESPAGNOL ? 🇪🇸 (nom, âge, origine, profession) 👋",
      youtubeId: "2tQHY3fzl0w",
      channel: "Holamigo - apprendre l'espagnol",
    },
  ],
};
