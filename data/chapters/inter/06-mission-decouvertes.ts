import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "inter-decouvertes",
  subject: "inter",
  grade: "5e",
  num: 3,
  title: "Mission grandes découvertes",
  domain: "donnees",
  domainLabel: "Mission",
  icon: "Compass",
  teaser: "Embarque en 1519 avec Magellan pour le premier tour du monde de l'Histoire.",
  objectives: [
    "Je sais utiliser une échelle de carte, des fractions et des durées longues",
    "Je connais les repères des grandes découvertes : 1492, Magellan, le premier tour du monde",
    "Je sais expliquer comment on se repère en mer avec une boussole et les étoiles",
    "Je sais utiliser les directions et le prétérit simple en anglais",
  ],
  lesson: [
    {
      title: "Embarque avec Magellan",
      paragraphs: [
        "Le 20 septembre 1519, cinq navires et environ 240 marins quittent l'Espagne sous les ordres de Magellan. Objectif : atteindre les îles aux épices en passant par l'ouest. Tu embarques comme cartographe de l'expédition.",
        "Le voyage sera terrible : Magellan meurt aux Philippines en 1521, et c'est Juan Sebastián Elcano qui ramène l'unique navire rescapé, la Victoria, le 6 septembre 1522, avec seulement 18 marins à bord. C'est le premier tour du monde de l'Histoire — 27 ans après qu'un autre marin, Christophe Colomb, a atteint l'Amérique en 1492.",
      ],
      example: [
        "1492 : Colomb atteint l'Amérique.",
        "1519-1522 : expédition de Magellan, achevée par Elcano — premier tour du monde.",
      ],
      tip: "Retiens le trio : 5 navires au départ, 1 seul à l'arrivée, 18 survivants.",
    },
    {
      title: "Lire les cartes marines",
      paragraphs: [
        "Ton métier de cartographe repose sur l'échelle : elle indique ce que représente 1 cm de la carte dans la réalité. Si 1 cm représente 500 km, alors 6 cm représentent 6 × 500 = 3 000 km.",
        "C'est de la proportionnalité pure : pour passer de la carte à la réalité, on multiplie ; pour passer de la réalité à la carte, on divise.",
      ],
      example: [
        "Échelle « 1 cm pour 500 km » : 6 cm sur la carte → 3 000 km réels.",
        "À l'inverse : 300 km réels avec « 1 cm pour 20 km » → 300 ÷ 20 = 15 cm sur la carte.",
      ],
      tip: "Carte → réalité : on multiplie. Réalité → carte : on divise.",
    },
    {
      title: "Se repérer sans GPS",
      paragraphs: [
        "Pas de satellite en 1519 ! Pour garder le cap, les marins utilisent la boussole : son aiguille aimantée indique toujours le nord. La nuit, ils s'orientent aussi grâce aux étoiles.",
        "Petit vertige scientifique : la lumière des étoiles voyage très vite, mais les distances sont si immenses qu'elle met parfois des années à nous parvenir. En regardant une étoile, tu vois donc la lumière qu'elle a émise… dans le passé.",
      ],
      example: [
        "La boussole indique le nord ; on en déduit le sud, l'est et l'ouest.",
        "La lumière d'une étoile située à 100 années-lumière a quitté l'étoile il y a 100 ans.",
      ],
      tip: "Boussole = le nord. Une fois le nord trouvé, les trois autres directions suivent.",
    },
    {
      title: "English on board",
      paragraphs: [
        "À bord, tu tiens ton journal en anglais. Pour raconter des faits passés, on emploie le prétérit simple : pour les verbes réguliers, on ajoute -ed au verbe.",
      ],
      example: [
        "sail → sailed : « The ship sailed west. » = « Le navire a navigué vers l'ouest. »",
        "discover → discovered : « They discovered a new ocean. »",
        "north = nord ; south = sud ; east = est ; west = ouest",
      ],
      tip: "Prétérit régulier = verbe + -ed, identique à toutes les personnes.",
    },
  ],
  exercises: [
    {
      id: "idec-1",
      level: 1,
      type: "qcm",
      question:
        "[Histoire] Avant le départ, le capitaine te fait réviser : en quelle année Christophe Colomb a-t-il atteint l'Amérique ?",
      choices: ["1492", "1519", "1789", "1096"],
      answer: 0,
      explanation:
        "Christophe Colomb atteint l'Amérique en 1492, en cherchant une route vers l'Asie par l'ouest. C'est LA date repère des grandes découvertes — 1519 est l'année du départ de Magellan.",
    },
    {
      id: "idec-2",
      level: 1,
      type: "input",
      question:
        "[Maths] Sur ta carte, 1 cm représente 500 km. Deux ports sont séparés de 6 cm sur la carte. Quelle est la distance réelle entre eux, en kilomètres ?",
      answer: "3000",
      explanation:
        "Chaque centimètre de la carte vaut 500 km dans la réalité. Pour 6 cm : 6 × 500 = 3 000. Les deux ports sont distants de 3 000 km.",
      hint: "Carte → réalité : on multiplie par 500.",
    },
    {
      id: "idec-3",
      level: 1,
      type: "qcm",
      question:
        "[Sciences] En pleine nuit, sans aucun repère visible, tu sors ta boussole. Quelle direction son aiguille aimantée indique-t-elle ?",
      choices: ["Le nord", "Le sud", "L'étoile la plus brillante", "La direction du vent"],
      answer: 0,
      explanation:
        "L'aiguille aimantée d'une boussole s'aligne sur le champ magnétique terrestre et indique le nord. Une fois le nord connu, on en déduit le sud, l'est et l'ouest — de quoi garder le cap sans GPS.",
    },
    {
      id: "idec-4",
      level: 1,
      type: "qcm",
      question:
        "[Anglais] Dans ton journal de bord, tu écris : « The ship sailed west. » Que signifie cette phrase ?",
      choices: [
        "Le navire a navigué vers l'ouest",
        "Le navire a coulé à l'ouest",
        "Le navire naviguera vers l'est",
        "Le navire est resté au port",
      ],
      answer: 0,
      explanation:
        "« Sailed » est le prétérit de « sail » (naviguer) et « west » signifie « ouest ». La phrase raconte un fait passé : « Le navire a navigué vers l'ouest. »",
    },
    {
      id: "idec-5",
      level: 2,
      type: "input",
      question:
        "[Maths] L'expédition part le 20 septembre 1519 et s'achève le 6 septembre 1522, soit presque 3 années complètes de voyage. Combien de mois cela représente-t-il, environ ?",
      answer: "36",
      explanation:
        "Une année compte 12 mois, donc 3 ans : 3 × 12 = 36. Le tour du monde a duré environ 36 mois — à comparer aux quelques heures d'un vol d'avion aujourd'hui !",
      hint: "1 an = 12 mois.",
    },
    {
      id: "idec-6",
      level: 2,
      type: "qcm",
      question:
        "[Histoire] Magellan meurt aux Philippines en 1521, avant la fin du voyage. Quel capitaine ramène la Victoria en Espagne en 1522, achevant le premier tour du monde ?",
      choices: [
        "Juan Sebastián Elcano",
        "Christophe Colomb",
        "Vasco de Gama",
        "Marco Polo",
      ],
      answer: 0,
      explanation:
        "C'est Juan Sebastián Elcano qui prend le commandement après la mort de Magellan et ramène la Victoria en Espagne en 1522. Colomb était mort depuis 1506, et Marco Polo était un voyageur… du Moyen Âge.",
      hint: "Ce n'est ni le découvreur de l'Amérique, ni un explorateur du Moyen Âge.",
    },
    {
      id: "idec-7",
      level: 2,
      type: "input",
      question:
        "[Maths] Cinq navires quittent l'Espagne en 1519 ; un seul, la Victoria, termine le tour du monde. Quelle fraction de la flotte a réussi ? (réponds sous la forme a/b)",
      answer: "1/5",
      explanation:
        "1 navire sur 5 est revenu : la fraction est 1/5, soit un cinquième de la flotte. Autrement dit, 4 navires sur 5 ont été perdus en route.",
      hint: "Nombre de navires revenus « sur » nombre de navires partis.",
    },
    {
      id: "idec-8",
      level: 2,
      type: "input",
      question:
        "[Anglais] Mets la phrase de ton journal au prétérit : « They discover a new ocean. » → « They … a new ocean. » Écris le mot manquant en minuscules.",
      answer: "discovered",
      explanation:
        "« Discover » est un verbe régulier : au prétérit, on ajoute -ed → « discovered ». « They discovered a new ocean » : ils découvrirent un nouvel océan — le Pacifique, baptisé ainsi par Magellan.",
      hint: "Verbe régulier : ajoute simplement -ed.",
    },
    {
      id: "idec-9",
      level: 3,
      type: "input",
      question:
        "[Maths] Tu prépares une nouvelle carte où 1 cm représente 20 km. Quelle longueur, en centimètres, faut-il tracer pour représenter une distance réelle de 300 km ?",
      answer: "15",
      explanation:
        "Réalité → carte : on divise par la valeur d'un centimètre. 300 ÷ 20 = 15. Il faut tracer 15 cm sur la carte.",
      hint: "Réalité → carte : on divise. Combien de fois 20 km dans 300 km ?",
    },
    {
      id: "idec-10",
      level: 3,
      type: "input",
      question:
        "[Maths] L'équipage compte 240 marins au départ. Pendant l'interminable traversée du Pacifique, les 3/4 tombent malades du scorbut. Combien de marins sont malades ?",
      answer: "180",
      explanation:
        "Pour prendre les 3/4 de 240 : on divise par 4 (240 ÷ 4 = 60), puis on multiplie par 3 (60 × 3 = 180). 180 marins sont touchés par le scorbut, une maladie due au manque de fruits et légumes frais.",
      hint: "Divise 240 par 4, puis multiplie le résultat par 3.",
    },
    {
      id: "idec-11",
      level: 3,
      type: "truefalse",
      question:
        "[Sciences] La lumière des étoiles met parfois des années à nous parvenir : quand tu observes une étoile depuis le pont du navire, tu vois donc la lumière qu'elle a émise dans le passé.",
      answer: true,
      explanation:
        "Vrai ! La lumière voyage très vite (environ 300 000 km par seconde), mais les étoiles sont si lointaines que leur lumière met des années à nous atteindre. Observer le ciel, c'est littéralement regarder dans le passé.",
    },
    {
      id: "idec-12",
      level: 3,
      type: "truefalse",
      question:
        "[Histoire] Colomb atteint l'Amérique en 1492 et le tour du monde de l'expédition de Magellan s'achève en 1522 : exactement 30 ans séparent ces deux exploits.",
      answer: true,
      explanation:
        "Vrai ! 1522 − 1492 = 30. En trente ans seulement, les Européens passent de la découverte d'un continent inconnu au premier tour du monde : les grandes découvertes bouleversent leur vision de la planète à une vitesse record.",
      hint: "Calcule 1522 − 1492.",
    },
  ],
};
