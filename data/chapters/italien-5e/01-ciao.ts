import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-ciao",
  subject: "italien",
  grade: "5e",
  num: 1,
  title: "Ciao! Saluer et se présenter",
  domain: "donnees",
  domainLabel: "Comunicazione",
  icon: "Hand",
  teaser: "Tes premiers mots en italien : dire bonjour, ton nom, ton âge et d'où tu viens.",
  objectives: [
    "Je sais saluer et prendre congé : ciao, buongiorno, buonasera, arrivederci",
    "Je sais dire mon nom : mi chiamo… et demander come ti chiami?",
    "Je sais dire mon âge avec ho … anni",
    "Je sais dire d'où je viens : sono di + ville",
    "Je connais l'alphabet italien (21 lettres), les sons c/g, gli, gn et les nombres de 1 à 20",
  ],
  lesson: [
    {
      title: "Saluer : ciao, buongiorno…",
      figure: "it-saluti",
      paragraphs: [
        "Le mot le plus célèbre d'Italie : « ciao ». Il est magique, car il veut dire à la fois salut ET au revoir ! On l'utilise avec les copains et la famille.",
        "Avec un adulte qu'on ne connaît pas bien, on est plus poli : « buongiorno » (bonjour, la journée) et « buonasera » (bonsoir, à partir de la fin d'après-midi). « Buonanotte » se dit seulement pour aller se coucher.",
        "Pour dire au revoir poliment : « arrivederci ». On entend aussi « a presto » (à bientôt) et « a domani » (à demain).",
      ],
      example: [
        "Ciao, Marco! Come stai? → Salut, Marco ! Comment ça va ?",
        "Buongiorno, signora. → Bonjour, madame.",
        "Buonasera! → Bonsoir !",
        "Arrivederci, a domani! → Au revoir, à demain !",
      ],
      tip: "Prononciation de « ciao » : le c devant i se prononce « tch », donc on dit « tchao ». C'est d'ailleurs de là que vient le « tchao » français !",
    },
    {
      title: "Dire son nom : mi chiamo…",
      paragraphs: [
        "Pour dire ton nom : « Mi chiamo Emma » (je m'appelle Emma). Tu peux aussi dire simplement « Sono Emma » (je suis Emma).",
        "Pour demander son nom à un camarade : « Come ti chiami? » (comment tu t'appelles ?).",
        "Quand on rencontre quelqu'un, on ajoute « Piacere! » (enchanté, littéralement « plaisir »).",
      ],
      example: [
        "— Come ti chiami? → Comment tu t'appelles ?",
        "— Mi chiamo Giulia. E tu? → Je m'appelle Giulia. Et toi ?",
        "— Io sono Luca. Piacere! → Moi, je suis Luca. Enchanté !",
      ],
      tip: "Attention au son : dans « chiamo », le h durcit le c. « Chi » se prononce « ki », jamais « tchi ». On dit donc « mi kiamo ». C'est l'inverse du français !",
    },
    {
      title: "Dire son âge : ho … anni",
      paragraphs: [
        "Gros piège pour les francophones qui pensent à l'anglais : en italien, on n'utilise pas le verbe être pour l'âge, mais le verbe AVERE (avoir). On dit littéralement « j'ai 12 ans » : « Ho dodici anni ».",
        "Pour demander l'âge : « Quanti anni hai? » (quel âge as-tu ?, littéralement « combien d'années as-tu ? »).",
        "Le h de « ho » et « hai » ne se prononce jamais : il sert seulement à distinguer le verbe d'autres mots à l'écrit (ho = j'ai, o = ou).",
      ],
      example: [
        "— Quanti anni hai? → Quel âge as-tu ?",
        "— Ho dodici anni. → J'ai 12 ans.",
        "— Mio fratello ha quindici anni. → Mon frère a 15 ans.",
      ],
      tip: "Le double n de « anni » doit s'entendre : on appuie sur le n, « an-ni ». En italien, les doubles consonnes se prononcent vraiment ! « Anno » (année) ne sonne pas comme « ano »…",
    },
    {
      title: "Dire d'où l'on vient : sono di…",
      paragraphs: [
        "Pour dire ta ville d'origine : « Sono di Parigi » (je suis de Paris). On utilise le verbe essere + di + le nom de la ville.",
        "Pour la nationalité, on utilise un adjectif : « Sono francese » (je suis français / française — ce mot ne change pas au féminin), « Sono italiano / italiana ».",
        "Pour demander : « Di dove sei? » (d'où es-tu ?).",
        "Quelques repères : la Francia (la France), l'Italia (l'Italie), Parigi (Paris), Roma (Rome), Venezia (Venise).",
      ],
      example: [
        "— Di dove sei? → D'où viens-tu ?",
        "— Sono di Lione, sono francese. → Je suis de Lyon, je suis française.",
        "— Matteo è di Roma, è italiano. → Matteo est de Rome, il est italien.",
      ],
      tip: "« Sono di + ville » mais « sono francese » sans di. Et remarque : les adjectifs de nationalité ne prennent pas de majuscule en italien (francese, italiano).",
    },
    {
      title: "L'alphabet, les sons et les nombres de 1 à 20",
      paragraphs: [
        "L'alphabet italien n'a que 21 lettres ! Les lettres j, k, w, x, y n'existent que dans les mots étrangers (jeans, weekend). C'est pour cela que l'italien s'écrit presque comme il se prononce.",
        "Les sons à connaître : c et g sont durs devant a, o, u (casa = « kaza », gatto = « gatto ») mais doux devant e et i (ciao = « tchao », gelato = « djélato »). Pour durcir devant e/i, on ajoute un h : chi = « ki », spaghetti = « spaguetti ».",
        "Deux sons typiques : « gn » se prononce comme dans « montagne » (gnocchi = « gnoki ») et « gli » se prononce comme un l mouillé, proche du « ill » de « famille » (famiglia = « famiya »).",
        "Les nombres de 1 à 10 : uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci. De 11 à 20 : undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti.",
      ],
      example: [
        "3 → tre, 7 → sette, 12 → dodici",
        "15 → quindici, 17 → diciassette, 20 → venti",
        "chiesa → « kiéza » (église), cinema → « tchinéma »",
      ],
      tip: "Le mot « sei » a deux sens : c'est le nombre 6, mais aussi « tu es » (verbe essere). C'est le contexte qui dit lequel : « Ho sei anni » (j'ai 6 ans) / « Sei di Roma? » (tu es de Rome ?).",
    },
  ],
  exercises: [
    {
      id: "it1-1",
      level: 1,
      type: "qcm",
      question: "Quel mot italien veut dire à la fois « salut » et « au revoir » ?",
      choices: ["Buongiorno", "Arrivederci", "Ciao", "Piacere"],
      answer: 2,
      explanation:
        "« Ciao » sert pour dire bonjour ET au revoir, entre copains. « Buongiorno » = bonjour (poli), « arrivederci » = au revoir (poli), « piacere » = enchanté.",
      hint: "C'est le mot italien le plus célèbre du monde… prononcé « tchao ».",
    },
    {
      id: "it1-2",
      level: 1,
      type: "qcm",
      question: "Que signifie la question « Come ti chiami? » ?",
      choices: ["Quel âge as-tu ?", "Comment tu t'appelles ?", "Comment vas-tu ?", "D'où viens-tu ?"],
      answer: 1,
      explanation:
        "« Come ti chiami? » signifie « comment tu t'appelles ? ». On y répond par « Mi chiamo… ». Ne confonds pas avec « Come stai? » (comment vas-tu ?) ni « Di dove sei? » (d'où viens-tu ?).",
      hint: "La réponse à cette question commence par « Mi chiamo… ».",
    },
    {
      id: "it1-3",
      level: 1,
      type: "truefalse",
      question: "En italien, « chi » se prononce « tchi », comme dans « ciao ».",
      answer: false,
      explanation:
        "Faux ! C'est l'inverse : le h durcit le c. « Chi » se prononce « ki » (chiamo = « kiamo »), alors que « ci » sans h se prononce « tchi » (ciao = « tchao »). Retiens : h = son dur.",
      hint: "Dans « mi chiamo », entends-tu « tch » ou « k » ?",
    },
    {
      id: "it1-4",
      level: 1,
      type: "input",
      question: "Complète la phrase pour dire ton nom : « mi … giulia » (un seul mot).",
      answer: "chiamo",
      explanation:
        "« Mi chiamo Giulia » = je m'appelle Giulia. Le verbe est « chiamarsi » : mi chiamo, ti chiami… Rappel de prononciation : chi = « ki », donc « mi kiamo ».",
      hint: "C'est le verbe de « Come ti chiami? », mais à la 1re personne.",
    },
    {
      id: "it1-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'ai 12 ans » en italien ?",
      choices: ["Sono dodici anni", "Ho dodici anni", "Mi chiamo dodici anni", "Sto dodici anni"],
      answer: 1,
      explanation:
        "Pour l'âge, l'italien utilise AVERE (avoir), jamais essere : « Ho dodici anni » = j'ai 12 ans. « Sono dodici anni » est le piège classique de celui qui pense à l'anglais « I am 12 » — en italien c'est faux !",
      hint: "En italien, comme en français, on « a » un âge.",
    },
    {
      id: "it1-6",
      level: 2,
      type: "input",
      question: "Écris en italien le nombre 15 (en lettres).",
      answer: "quindici",
      explanation:
        "15 = quindici. Retiens la série : undici (11), dodici (12), tredici (13), quattordici (14), quindici (15), sedici (16). Jusqu'à 16, les nombres finissent en « -dici ».",
      hint: "Il fait partie de la série undici, dodici, tredici, quattordici…",
    },
    {
      id: "it1-7",
      level: 2,
      type: "qcm",
      question: "Combien de lettres compte l'alphabet italien ?",
      choices: ["26", "21", "24", "28"],
      answer: 1,
      explanation:
        "L'alphabet italien ne compte que 21 lettres : j, k, w, x et y n'existent que dans les mots empruntés aux langues étrangères (jeans, karate, weekend, taxi, yogurt).",
      hint: "C'est moins que les 26 lettres du français : 5 lettres manquent.",
    },
    {
      id: "it1-8",
      level: 2,
      type: "truefalse",
      question: "Dans « famiglia », le groupe « gli » se prononce comme « gli » dans le mot français « glisser ».",
      answer: false,
      explanation:
        "Faux ! Le « gli » italien est un l mouillé : « famiglia » se prononce à peu près « famiya », comme le « ill » de « famille ». On n'entend jamais le g. Même chose dans « gli » (l'article) et « aglio » (l'ail).",
      hint: "Pense au mot français « famille » : le son est presque le même.",
    },
    {
      id: "it1-9",
      level: 3,
      type: "input",
      question: "Réponds en italien à la question « Quanti anni hai? » si tu as 13 ans : « … tredici anni » (un seul mot).",
      answer: "ho",
      explanation:
        "« Ho tredici anni » = j'ai 13 ans. « Quanti anni hai? » demande l'âge, et on répond avec AVERE à la 1re personne : ho. Le h ne se prononce pas, il s'écrit seulement. Jamais « sono » pour l'âge !",
      hint: "Le verbe de la question est « hai » (tu as) : passe-le à « je ».",
    },
    {
      id: "it1-10",
      level: 3,
      type: "qcm",
      question: "Dans quel mot le c se prononce-t-il « k » ?",
      choices: ["cinema", "ciao", "chiesa", "cena"],
      answer: 2,
      explanation:
        "« Chiesa » (église) se prononce « kiéza » : le h rend le c dur. Dans cinema, ciao et cena (dîner), le c est suivi de i ou e sans h, donc il se prononce « tch » : « tchinéma », « tchao », « tchéna ».",
      hint: "Cherche le mot qui contient un h après le c.",
    },
    {
      id: "it1-11",
      level: 3,
      type: "input",
      question: "Écris en italien le nombre 17 (en lettres).",
      answer: "diciassette",
      explanation:
        "17 = diciassette. À partir de 17, l'ordre s'inverse : dici + assette (dix-sept), diciotto (18), diciannove (19). Remarque les doubles consonnes de diciassette : ss et tt, qu'il faut bien écrire et bien prononcer.",
      hint: "Il commence par « dici- » et contient deux doubles consonnes.",
    },
    {
      id: "it1-12",
      level: 3,
      type: "input",
      question: "Traduis en italien : « je suis de Rome » (3 mots, avec la majuscule ou non).",
      answer: "sono di roma",
      explanation:
        "« Sono di Roma » : essere (sono) + di + ville. C'est la formule pour dire son origine, en réponse à « Di dove sei? ». Remarque qu'on ne dit pas le pronom « io » : le verbe suffit, car sa terminaison indique déjà la personne.",
      hint: "Verbe essere à la 1re personne + « di » + le nom italien de la ville.",
    },
  ],
  videos: [
    {
      title: "Leçon pour débutant : Se présenter en italien et parler de soi (discours informel)",
      youtubeId: "6_cJNUIvVJM",
      channel: "Plaisir d'apprendre l'italien - Sandrine",
    },
  ],
};
