import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "inter-ocean",
  subject: "inter",
  grade: "6e",
  num: 3,
  title: "Mission océan",
  domain: "grandeurs",
  domainLabel: "Mission",
  icon: "Ship",
  teaser: "Embarque pour une traversée scientifique de l'Atlantique, du Havre à New York.",
  objectives: [
    "Je sais calculer une distance, une durée et un volume dans une situation de voyage",
    "Je sais expliquer ce qu'est un littoral et pourquoi les marchandises voyagent par mer",
    "Je sais décrire l'eau de mer comme un mélange et citer une étape du cycle de l'eau",
    "Je comprends la météo et les directions en anglais",
  ],
  lesson: [
    {
      title: "Embarquement immédiat",
      paragraphs: [
        "Tu es le scientifique de bord d'une expédition qui traverse l'océan Atlantique : départ du Havre, en France, arrivée à New York, soit environ 5 800 km de navigation.",
        "Ton navire suit la route des grands porte-conteneurs. Pour tes calculs de bord, retiens la formule du voyageur : distance = vitesse × temps. Et à l'envers : durée = distance ÷ vitesse.",
      ],
      example: [
        "À 20 km/h pendant 3 h, on parcourt 20 × 3 = 60 km.",
        "Pour parcourir 60 km à 20 km/h, il faut 60 ÷ 20 = 3 h.",
      ],
      tip: "Vérifie toujours les unités : des km/h avec des heures donnent des kilomètres.",
      figure: "int-ocean",
    },
    {
      title: "Ports, littoraux et conteneurs",
      paragraphs: [
        "Le littoral, c'est la zone de contact entre la terre et la mer. C'est là que se trouvent les grands ports, véritables portes d'entrée des marchandises.",
        "Environ 8 marchandises sur 10 échangées dans le monde voyagent par bateau, rangées dans des conteneurs : de grandes boîtes métalliques toutes identiques, faciles à empiler et à transporter.",
      ],
      example: [
        "Un conteneur standard mesure environ 6 m de long, 2,5 m de large et 2,5 m de haut.",
        "Un grand porte-conteneurs peut en transporter plus de 20 000 !",
      ],
      tip: "Volume d'un pavé droit : V = longueur × largeur × hauteur, en m³.",
    },
    {
      title: "Le labo d'eau de mer",
      paragraphs: [
        "Première expérience à bord : l'eau de mer est un mélange. Chaque litre contient environ 35 g de sels dissous, invisibles à l'œil nu. Pour récupérer ce sel, on laisse l'eau s'évaporer, comme dans les marais salants.",
        "L'océan est aussi le moteur du cycle de l'eau : l'eau s'évapore, la vapeur monte, se refroidit et se condense en gouttelettes qui forment les nuages, puis retombe en pluie. Et sous la surface, le plancton — des êtres vivants minuscules — nourrit presque toute la vie marine.",
      ],
      example: [
        "1 L d'eau de mer → environ 35 g de sel après évaporation complète.",
        "Cycle de l'eau : évaporation → nuages → précipitations → retour à l'océan.",
      ],
      tip: "La filtration ne retire pas un solide dissous : pour séparer le sel de l'eau, il faut faire évaporer l'eau.",
    },
    {
      title: "Weather report",
      paragraphs: [
        "Chaque matin, la radio de bord annonce la météo en anglais et le cap suivi par le navire. Apprends le vocabulaire avant de prendre ton quart.",
      ],
      example: [
        "sunny = ensoleillé ; windy = venteux ; cloudy = nuageux ; rainy = pluvieux",
        "north = nord ; south = sud ; east = est ; west = ouest",
        "« We are sailing west. » = « Nous naviguons vers l'ouest. »",
      ],
      tip: "Pour retenir les points cardinaux en anglais, pense à la boussole : N, S, E, W — seul « west » change vraiment du français.",
    },
  ],
  exercises: [
    {
      id: "ioce-1",
      level: 1,
      type: "input",
      question:
        "[Maths] Le navire avance à 25 km/h pendant 4 heures. Quelle distance parcourt-il, en kilomètres ?",
      answer: "100",
      explanation:
        "Distance = vitesse × temps. Ici : 25 × 4 = 100. Le navire parcourt 100 km.",
      hint: "Distance = vitesse × temps.",
    },
    {
      id: "ioce-2",
      level: 1,
      type: "qcm",
      question:
        "[Géographie] Avant le départ, tu survoles la carte du Havre. Qu'appelle-t-on le « littoral » ?",
      choices: [
        "La zone de contact entre la terre et la mer",
        "Le centre d'un continent",
        "Une chaîne de montagnes sous-marine",
        "Le point le plus profond de l'océan",
      ],
      answer: 0,
      explanation:
        "Le littoral est la zone de contact entre la terre et la mer. C'est un espace très attractif : on y trouve les ports, les stations balnéaires et une grande partie de la population mondiale.",
    },
    {
      id: "ioce-3",
      level: 1,
      type: "truefalse",
      question:
        "[Sciences] Première analyse au labo de bord : l'eau de mer est un mélange, composé d'eau et de sels dissous invisibles à l'œil nu.",
      answer: true,
      explanation:
        "Vrai ! L'eau de mer n'est pas un corps pur : c'est un mélange homogène. Les sels y sont dissous, donc invisibles, mais bien présents — environ 35 g par litre.",
    },
    {
      id: "ioce-4",
      level: 1,
      type: "qcm",
      question:
        "[Anglais] La radio de bord annonce : « It is windy today. » Quel temps fait-il ?",
      choices: ["Il y a du vent", "Il neige", "Il fait très chaud", "Le ciel est parfaitement dégagé"],
      answer: 0,
      explanation:
        "« Windy » vient de « wind », le vent : « It is windy » signifie « Il y a du vent ». Bonne nouvelle pour un voilier, moins pour ton mal de mer.",
    },
    {
      id: "ioce-5",
      level: 2,
      type: "input",
      question:
        "[Maths] Chaque litre d'eau de mer contient environ 35 g de sel. Combien de grammes de sel y a-t-il dans 10 litres ?",
      answer: "350",
      explanation:
        "C'est une situation de proportionnalité : 10 fois plus d'eau, donc 10 fois plus de sel. 35 × 10 = 350 g de sel dans 10 L.",
      hint: "10 fois plus d'eau, c'est 10 fois plus de sel.",
    },
    {
      id: "ioce-6",
      level: 2,
      type: "qcm",
      question:
        "[Sciences] Tu veux récupérer le sel dissous dans ton échantillon d'eau de mer, comme dans les marais salants. Quelle technique utilises-tu ?",
      choices: ["L'évaporation", "La filtration", "La congélation", "La décantation"],
      answer: 0,
      explanation:
        "Le sel est dissous : la filtration et la décantation ne peuvent pas le séparer de l'eau. En laissant l'eau s'évaporer (grâce au soleil et au vent dans les marais salants), seul le sel reste au fond.",
      hint: "Que reste-t-il au fond du récipient quand toute l'eau est partie dans l'air ?",
    },
    {
      id: "ioce-7",
      level: 2,
      type: "qcm",
      question:
        "[Maths] Le navire quitte le quai à 6 h 45 et navigue pendant 8 h 30 min avant une escale technique. À quelle heure s'arrête-t-il ?",
      choices: ["15 h 15", "14 h 15", "15 h 45", "14 h 75"],
      answer: 0,
      explanation:
        "On avance d'abord de 8 h : 6 h 45 + 8 h = 14 h 45. Puis de 30 min : 14 h 45 + 30 min = 15 h 15. (14 h 75 n'existe pas : au-delà de 60 minutes, on change d'heure !)",
      hint: "Ajoute d'abord les heures, puis les minutes.",
    },
    {
      id: "ioce-8",
      level: 2,
      type: "truefalse",
      question:
        "[Géographie] En route, tu croises des dizaines de porte-conteneurs. La grande majorité des marchandises échangées dans le monde — environ 8 sur 10 — voyage par bateau.",
      answer: true,
      explanation:
        "Vrai ! Le transport maritime est le moins cher pour déplacer d'énormes quantités : environ 80 % des marchandises échangées dans le monde passent par la mer, d'où l'importance des grands ports et des littoraux.",
    },
    {
      id: "ioce-9",
      level: 3,
      type: "input",
      question:
        "[Maths] La traversée complète fait 5 800 km et le navire avance à la vitesse moyenne de 29 km/h. Combien d'heures dure la traversée ?",
      answer: "200",
      explanation:
        "Durée = distance ÷ vitesse. Ici : 5 800 ÷ 29 = 200. La traversée dure 200 heures, soit un peu plus de 8 jours.",
      hint: "Durée = distance ÷ vitesse.",
    },
    {
      id: "ioce-10",
      level: 3,
      type: "input",
      question:
        "[Maths] Un conteneur mesure 6 m de long, 2,5 m de large et 2,5 m de haut. Quel est son volume, en m³ ? (nombre à virgule)",
      answer: "37,5",
      explanation:
        "Volume d'un pavé droit : V = L × l × h = 6 × 2,5 × 2,5. On calcule par étapes : 6 × 2,5 = 15, puis 15 × 2,5 = 37,5. Le conteneur a un volume de 37,5 m³.",
      hint: "V = longueur × largeur × hauteur. Calcule en deux étapes.",
    },
    {
      id: "ioce-11",
      level: 3,
      type: "qcm",
      question:
        "[Sciences] Au microscope, tu observes le plancton prélevé dans tes filets. Pourquoi ces êtres vivants minuscules sont-ils si importants pour l'océan ?",
      choices: [
        "Ils sont à la base des chaînes alimentaires marines",
        "Ils rendent l'eau de mer salée",
        "Ils provoquent les marées",
        "Ils réchauffent l'eau des océans",
      ],
      answer: 0,
      explanation:
        "Le plancton est à la base des chaînes alimentaires marines : il nourrit les petits animaux, qui nourrissent les poissons, qui nourrissent les grands prédateurs… Sans plancton, presque toute la vie océanique disparaîtrait. (Le sel et les marées ont d'autres causes.)",
    },
    {
      id: "ioce-12",
      level: 3,
      type: "input",
      question:
        "[Anglais] Le capitaine annonce au micro : « We are sailing west. » Dans quelle direction navigue le navire ? Réponds en français.",
      answer: "ouest",
      accept: ["l'ouest", "vers l'ouest", "a l'ouest", "à l'ouest"],
      explanation:
        "« West » signifie « ouest » : le navire navigue vers l'ouest — logique, puisque New York se trouve à l'ouest du Havre, de l'autre côté de l'Atlantique.",
      hint: "Rappelle-toi la boussole anglaise : north, south, east… et le dernier ?",
    },
  ],
  videos: [
    { title: "Les incroyables secrets des ports marchands ! - C'est pas sorcier", youtubeId: "7PARXFkCbts", channel: "C'est pas sorcier" },
  ],
};
