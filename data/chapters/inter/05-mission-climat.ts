import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "inter-climat",
  subject: "inter",
  grade: "5e",
  num: 2,
  title: "Mission climat",
  domain: "grandeurs",
  domainLabel: "Mission",
  icon: "CloudSun",
  teaser: "Intègre l'équipe d'enquêteurs du climat : relevés, pourcentages et énergies du futur.",
  objectives: [
    "Je sais utiliser les nombres relatifs, les moyennes et les pourcentages sur des données climatiques",
    "Je sais distinguer la météo du climat et lire un relevé de températures",
    "Je sais différencier énergies renouvelables et énergies fossiles",
    "Je sais employer le comparatif en anglais pour parler du temps qu'il fait",
  ],
  lesson: [
    {
      title: "Enquête au centre climatique",
      paragraphs: [
        "Le Centre d'observation du climat te recrute comme analyste junior. Ta mission : faire parler les données pour comprendre le changement climatique.",
        "Première règle du métier : ne jamais confondre météo et climat. La météo décrit le temps qu'il fait à un endroit, un jour donné. Le climat décrit des moyennes calculées sur une longue période, au moins 30 ans. Un jour de neige ne contredit donc pas le réchauffement du climat.",
      ],
      example: [
        "Météo : « Mardi, il a fait 8 °C à Lyon. »",
        "Climat : « À Lyon, la température moyenne de janvier est d'environ 4 °C. »",
      ],
      tip: "Météo = un instantané. Climat = une moyenne sur au moins 30 ans.",
    },
    {
      title: "Lire les relevés",
      paragraphs: [
        "En hiver, tes relevés passent sous zéro : il te faut les nombres relatifs. Sur la droite graduée, −7 est plus petit que −2, qui est plus petit que 0, qui est plus petit que 3.",
        "Pour mesurer une variation, on calcule l'écart : de −3 °C à 4 °C, la température gagne 3 + 4 = 7 degrés. Et pour résumer une série de relevés, on calcule la moyenne : somme des valeurs divisée par leur nombre.",
      ],
      example: [
        "Ordre croissant : −7 < −2 < 0 < 3.",
        "Moyenne de −2 ; 1 ; 4 ; 5 : la somme vaut 8, et 8 ÷ 4 = 2 °C.",
      ],
      tip: "Entre un nombre négatif et un nombre positif, l'écart s'obtient en additionnant leurs distances à zéro : de −3 à 4, il y a 3 + 4 = 7.",
    },
    {
      title: "Pourcentages et énergies",
      paragraphs: [
        "Tes rapports sont pleins de pourcentages. Pour calculer p % d'un nombre, on le multiplie par p puis on divise par 100 : 20 % de 300, c'est 300 × 20 ÷ 100 = 60.",
        "Côté énergie, distingue bien deux familles. Les énergies fossiles (charbon, pétrole, gaz naturel) libèrent du dioxyde de carbone (CO2) quand on les brûle et leurs réserves s'épuisent. Les énergies renouvelables (soleil, vent, eau) se reconstituent naturellement.",
      ],
      example: [
        "20 % de 300 foyers = 300 × 20 ÷ 100 = 60 foyers.",
        "Renouvelables : solaire, éolien, hydraulique. Fossiles : charbon, pétrole, gaz.",
      ],
      tip: "Une baisse en pourcentage se calcule par rapport à la valeur de DÉPART : passer de 400 à 300, c'est perdre 100 sur 400, soit 25 %.",
    },
    {
      title: "Weather forecast",
      paragraphs: [
        "Le centre échange avec des stations du monde entier, en anglais. Pour comparer deux journées, on utilise le comparatif : avec un adjectif court, on ajoute -er, suivi de « than ».",
      ],
      example: [
        "hot → hotter : « Today is hotter than yesterday. » (plus chaud que)",
        "cold → colder : « Winter is colder than summer. » (plus froid que)",
        "sunny = ensoleillé ; rainy = pluvieux ; warm = doux",
      ],
      tip: "Adjectif court + -er + than : plus simple que le français, qui a besoin de deux mots (« plus… que »).",
    },
  ],
  exercises: [
    {
      id: "icli-1",
      level: 1,
      type: "qcm",
      question:
        "[Sciences] Premier test d'embauche au centre : quelle est la différence entre la météo et le climat ?",
      choices: [
        "La météo décrit le temps d'un jour donné ; le climat, des moyennes sur au moins 30 ans",
        "C'est exactement la même chose",
        "Le climat change chaque jour, la météo jamais",
        "La météo ne concerne que les températures, le climat que la pluie",
      ],
      answer: 0,
      explanation:
        "La météo est un instantané : le temps qu'il fait ici, aujourd'hui. Le climat se mesure sur le temps long : des moyennes calculées sur au moins 30 ans. C'est pourquoi une journée froide ne contredit pas le réchauffement climatique.",
    },
    {
      id: "icli-2",
      level: 1,
      type: "input",
      question:
        "[Maths] À l'aube, ta station affichait −3 °C ; à midi, elle affiche 4 °C. De combien de degrés la température a-t-elle augmenté ?",
      answer: "7",
      explanation:
        "De −3 à 0, la température gagne 3 degrés ; de 0 à 4, elle en gagne 4 de plus. Au total : 3 + 4 = 7 degrés d'augmentation.",
      hint: "Imagine le thermomètre : compte de −3 jusqu'à 0, puis de 0 jusqu'à 4.",
    },
    {
      id: "icli-3",
      level: 1,
      type: "qcm",
      question:
        "[Géographie] Ton rapport recense les ressources énergétiques d'une région. Parmi ces sources d'énergie, laquelle est renouvelable ?",
      choices: ["L'énergie éolienne (le vent)", "Le charbon", "Le pétrole", "Le gaz naturel"],
      answer: 0,
      explanation:
        "Le vent se renouvelle sans cesse : l'énergie éolienne est renouvelable. Charbon, pétrole et gaz naturel sont des énergies fossiles : formées en des millions d'années, leurs réserves s'épuisent et leur combustion rejette du CO2.",
    },
    {
      id: "icli-4",
      level: 1,
      type: "qcm",
      question:
        "[Anglais] La station partenaire de Londres t'écrit : « Today is hotter than yesterday. » Que t'annonce-t-elle ?",
      choices: [
        "Aujourd'hui, il fait plus chaud qu'hier",
        "Aujourd'hui, il fait plus froid qu'hier",
        "Il pleut sans arrêt depuis hier",
        "Il fera très chaud demain",
      ],
      answer: 0,
      explanation:
        "« Hotter than » est le comparatif de « hot » : plus chaud que. La phrase signifie donc : « Aujourd'hui est plus chaud qu'hier. »",
    },
    {
      id: "icli-5",
      level: 2,
      type: "input",
      question:
        "[Maths] Dans un village de 300 foyers, 20 % sont équipés de panneaux solaires. Combien de foyers cela représente-t-il ?",
      answer: "60",
      explanation:
        "20 % de 300 = 300 × 20 ÷ 100 = 6 000 ÷ 100 = 60. Le village compte 60 foyers équipés de panneaux solaires.",
      hint: "Multiplie par 20, puis divise par 100 (ou prends un cinquième).",
    },
    {
      id: "icli-6",
      level: 2,
      type: "qcm",
      question:
        "[Maths] Tes relevés de la semaine : −7 °C ; 3 °C ; −2 °C ; 0 °C. Quel est le bon classement dans l'ordre croissant ?",
      choices: [
        "−7 < −2 < 0 < 3",
        "−2 < −7 < 0 < 3",
        "0 < −2 < 3 < −7",
        "3 < 0 < −2 < −7",
      ],
      answer: 0,
      explanation:
        "Sur la droite graduée, plus un nombre négatif est loin de zéro, plus il est petit : −7 < −2. Viennent ensuite 0, puis 3. Ordre croissant : −7 < −2 < 0 < 3.",
      hint: "Entre deux négatifs, le plus petit est celui qui est le plus loin de zéro.",
    },
    {
      id: "icli-7",
      level: 2,
      type: "truefalse",
      question:
        "[Sciences] Le charbon, le pétrole et le gaz naturel sont des énergies fossiles, et leur combustion rejette du dioxyde de carbone (CO2) dans l'atmosphère.",
      answer: true,
      explanation:
        "Vrai ! Ces énergies proviennent de la décomposition d'êtres vivants pendant des millions d'années — d'où le mot « fossiles ». En brûlant, elles libèrent du CO2, un gaz à effet de serre qui contribue au réchauffement climatique.",
    },
    {
      id: "icli-8",
      level: 2,
      type: "input",
      question:
        "[Anglais] Complète le bulletin pour la station de Londres : « Winter is … than summer » (l'hiver est plus froid que l'été). Écris le mot manquant en minuscules.",
      answer: "colder",
      explanation:
        "Avec un adjectif court comme « cold », le comparatif se forme en ajoutant -er : cold → colder. « Winter is colder than summer. »",
      hint: "Adjectif court : ajoute simplement -er à « cold ».",
    },
    {
      id: "icli-9",
      level: 3,
      type: "input",
      question:
        "[Maths] Tes quatre relevés du matin : −2 °C ; 1 °C ; 4 °C ; 5 °C. Quelle est leur moyenne, en °C ?",
      answer: "2",
      explanation:
        "Somme des relevés : −2 + 1 + 4 + 5 = 8. On divise par le nombre de relevés : 8 ÷ 4 = 2. La moyenne est de 2 °C. Attention au −2 dans la somme : il enlève 2 au lieu d'ajouter !",
      hint: "Additionne les quatre valeurs (attention au signe −), puis divise par 4.",
    },
    {
      id: "icli-10",
      level: 3,
      type: "input",
      question:
        "[Maths] Grâce à une meilleure isolation, la consommation d'électricité du centre passe de 400 kWh à 300 kWh par mois. Quel est le pourcentage de baisse ?",
      answer: "25",
      explanation:
        "La baisse est de 400 − 300 = 100 kWh. On la compare à la valeur de départ : 100 ÷ 400 = 1/4 = 25 %. La consommation a baissé de 25 %.",
      hint: "Compare la baisse (100 kWh) à la consommation de DÉPART (400 kWh).",
    },
    {
      id: "icli-11",
      level: 3,
      type: "qcm",
      question:
        "[Géographie] Ton enquête aborde la ressource la plus précieuse : l'eau. Quelle part environ de toute l'eau de la Terre est de l'eau douce ?",
      choices: ["Environ 3 %", "Environ 30 %", "Environ 50 %", "Environ 97 %"],
      answer: 0,
      explanation:
        "L'eau douce ne représente qu'environ 3 % de l'eau de la Terre — et une grande partie est piégée dans les glaciers. Les 97 % restants sont l'eau salée des mers et des océans : voilà pourquoi l'eau douce est une ressource à protéger.",
      hint: "L'immense majorité de l'eau terrestre est salée.",
    },
    {
      id: "icli-12",
      level: 3,
      type: "qcm",
      question:
        "[Sciences] Dernier graphique de ton rapport : la température moyenne mondiale était d'environ 13,8 °C en 1900 et d'environ 15,0 °C en 2020. Quelle conclusion scientifique peux-tu en tirer ?",
      choices: [
        "Le climat mondial s'est réchauffé d'environ 1,2 °C en un peu plus d'un siècle",
        "Il fera forcément chaud demain partout dans le monde",
        "Les mesures de 1900 étaient fausses",
        "La température mondiale baisse depuis 1900",
      ],
      answer: 0,
      explanation:
        "15,0 − 13,8 = 1,2 : la température moyenne mondiale a augmenté d'environ 1,2 °C. Comme il s'agit de moyennes sur le temps long, c'est bien un signe de changement du CLIMAT — cela ne dit rien de la météo de demain.",
      hint: "Calcule l'écart entre les deux moyennes, et souviens-toi : climat = temps long.",
    },
  ],
  videos: [
    { title: "Comment fonctionne le dérèglement climatique ? - C'est pas sorcier", youtubeId: "Ud24icmLbag", channel: "C'est pas sorcier" },
  ],
};
