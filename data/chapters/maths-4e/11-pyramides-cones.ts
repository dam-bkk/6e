import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-pyramides-cones",
  subject: "maths",
  grade: "4e",
  num: 11,
  title: "Pyramides et cônes",
  domain: "grandeurs",
  icon: "Pyramid",
  teaser:
    "Deux solides pointus, une même formule de volume : aire de la base fois hauteur, divisé par 3.",
  objectives: [
    "Je sais décrire une pyramide et un cône (sommet, base, hauteur, apothème)",
    "Je sais reconnaître le patron d'une pyramide ou d'un cône",
    "Je sais calculer le volume d'une pyramide et d'un cône",
    "Je sais convertir des unités de volume (m³, dm³, cm³, litres)",
    "Je sais résoudre des problèmes concrets de volumes",
  ],
  lesson: [
    {
      title: "Décrire une pyramide",
      paragraphs: [
        "Une pyramide est un solide dont la base est un polygone (triangle, carré, rectangle…) et dont les faces latérales sont des triangles qui se rejoignent en un même point : le sommet de la pyramide.",
        "La hauteur de la pyramide est le segment qui joint le sommet à la base en lui étant perpendiculaire. Attention : la hauteur n'est pas une arête ! Dans la plupart des pyramides, elle passe à l'intérieur du solide.",
        "On nomme une pyramide d'après sa base : pyramide à base carrée (comme les pyramides d'Égypte), pyramide à base triangulaire (appelée aussi tétraèdre), etc.",
      ],
      example: [
        "Une pyramide à base carrée possède : 1 base carrée, 4 faces latérales triangulaires, 5 sommets, 8 arêtes.",
        "Son sommet principal est le point où se rejoignent les 4 triangles.",
      ],
      tip: "Pour compter les faces d'une pyramide : nombre de côtés de la base + 1 (la base elle-même). Base carrée : 4 + 1 = 5 faces.",
    },
    {
      title: "Décrire un cône de révolution",
      paragraphs: [
        "Un cône de révolution est le solide obtenu en faisant tourner un triangle rectangle autour d'un des côtés de son angle droit. Sa base est un disque, et son sommet est le point situé à la verticale du centre de la base.",
        "La hauteur du cône est le segment qui joint le sommet au centre du disque de base : elle est perpendiculaire à la base. Le segment qui joint le sommet à un point du cercle de base s'appelle une génératrice.",
      ],
      example: [
        "Un cornet de glace est un cône : la boule se pose sur le disque de base (en haut) et la pointe du cornet est le sommet.",
        "Si le cornet a une hauteur de 12 cm et un disque de base de rayon 3 cm, sa génératrice est plus longue que 12 cm, car elle est « en biais ».",
      ],
      tip: "Ne confonds pas la hauteur (verticale, jusqu'au CENTRE de la base) et la génératrice (en biais, jusqu'au BORD de la base). La génératrice est toujours plus longue que la hauteur.",
    },
    {
      title: "Les patrons",
      paragraphs: [
        "Le patron d'un solide est un dessin à plat qui, une fois plié, reconstitue le solide. Le patron d'une pyramide contient sa base (le polygone) entourée de ses faces latérales triangulaires.",
        "Le patron d'un cône est plus surprenant : il se compose d'un disque (la base) et d'une portion de disque (un secteur angulaire) qui, une fois enroulée, forme la surface latérale du cône.",
        "Pour vérifier un patron de pyramide : les triangles doivent avoir des côtés qui coïncident deux à deux lors du pliage, et il doit y avoir exactement une base.",
      ],
      example: [
        "Patron d'une pyramide à base carrée : un carré central et 4 triangles isocèles attachés aux 4 côtés du carré.",
        "Patron d'un cône : un disque de rayon 3 cm (la base) et un secteur de disque dont le rayon est la génératrice du cône.",
      ],
      tip: "Sur le patron d'un cône, le rayon du secteur n'est PAS le rayon de la base : c'est la longueur de la génératrice. Deux rayons différents cohabitent sur le même patron.",
    },
    {
      title: "Le volume : la formule du tiers",
      paragraphs: [
        "Le volume d'une pyramide et celui d'un cône se calculent avec la même formule : volume = (aire de la base × hauteur) ÷ 3.",
        "Pour une pyramide, l'aire de la base est celle du polygone (carré : côté × côté ; rectangle : longueur × largeur ; triangle : base × hauteur ÷ 2). Pour un cône, la base est un disque : son aire vaut π × rayon × rayon, soit π × rayon².",
        "D'où vient ce ÷ 3 ? Une pyramide occupe exactement le tiers du volume du prisme de même base et de même hauteur : trois pyramides identiques bien choisies remplissent le prisme. De même, un cône remplit le tiers du cylindre de même base et de même hauteur.",
      ],
      example: [
        "Pyramide à base carrée de côté 6 cm et de hauteur 10 cm :",
        "aire de la base = 6 × 6 = 36 cm².",
        "volume = (36 × 10) ÷ 3 = 360 ÷ 3 = 120 cm³.",
        "Cône de rayon 3 cm et de hauteur 7 cm : volume = (π × 3² × 7) ÷ 3 = 21π ≈ 66 cm³ (arrondi à l'unité).",
      ],
      tip: "Le piège numéro 1 du chapitre : oublier le ÷ 3 et calculer le volume du prisme ou du cylindre à la place. Écris la formule complète AVANT de remplacer les valeurs.",
    },
    {
      title: "Conversions de volumes et problèmes",
      paragraphs: [
        "Les unités de volume vont de 1 000 en 1 000 : 1 m³ = 1 000 dm³, et 1 dm³ = 1 000 cm³. C'est différent des longueurs (de 10 en 10) et des aires (de 100 en 100) : à chaque changement d'unité, on multiplie ou on divise par 1 000.",
        "Le lien avec les contenances est essentiel : 1 L = 1 dm³ et 1 mL = 1 cm³. Pour savoir combien de litres contient un récipient, calcule son volume en dm³ : le nombre est le même.",
        "Dans un problème concret, la démarche est toujours la même : identifier le solide, calculer l'aire de la base, appliquer la formule du volume, puis convertir dans l'unité demandée.",
      ],
      example: [
        "Un verre conique a un volume de 150 cm³.",
        "150 cm³ = 150 mL = 0,15 L.",
        "Autre conversion : 2,5 m³ = 2 500 dm³ = 2 500 L.",
      ],
      tip: "Pour les volumes, chaque saut d'unité vaut × 1 000 ou ÷ 1 000. Retiens le duo magique : 1 L = 1 dm³ et 1 mL = 1 cm³.",
    },
  ],
  exercises: [
    {
      id: "m4pyr-1",
      level: 1,
      type: "qcm",
      question:
        "Combien de faces possède une pyramide à base carrée (base comprise) ?",
      choices: ["5", "4", "6", "8"],
      answer: 0,
      explanation:
        "Une pyramide à base carrée possède sa base (1 carré) et une face triangulaire par côté de la base, soit 4 triangles. Au total : 4 + 1 = 5 faces. Piège : 8 est le nombre d'arêtes, pas de faces.",
      hint: "Compte la base, puis un triangle pour chaque côté du carré.",
    },
    {
      id: "m4pyr-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la formule du volume d'une pyramide ?",
      choices: [
        "(aire de la base × hauteur) ÷ 3",
        "aire de la base × hauteur",
        "(aire de la base + hauteur) ÷ 3",
        "périmètre de la base × hauteur",
      ],
      answer: 0,
      explanation:
        "Le volume d'une pyramide vaut le TIERS du volume du prisme de même base et de même hauteur : volume = (aire de la base × hauteur) ÷ 3. La formule sans le ÷ 3 est celle du prisme droit : c'est l'erreur la plus fréquente du chapitre.",
      hint: "Une pyramide remplit le tiers du prisme de même base et de même hauteur.",
    },
    {
      id: "m4pyr-3",
      level: 1,
      type: "input",
      question:
        "Une pyramide a une base d'aire 24 cm² et une hauteur de 5 cm. Calcule son volume, en cm³.",
      answer: "40",
      explanation:
        "On applique la formule : volume = (aire de la base × hauteur) ÷ 3 = (24 × 5) ÷ 3 = 120 ÷ 3 = 40 cm³. Piège : sans le ÷ 3, on obtient 120 cm³, qui est le volume du prisme, pas celui de la pyramide.",
      hint: "Multiplie l'aire de la base par la hauteur, puis divise par 3.",
    },
    {
      id: "m4pyr-4",
      level: 1,
      type: "truefalse",
      question: "La base d'un cône de révolution est un disque.",
      answer: true,
      explanation:
        "Vrai ! Un cône de révolution est obtenu en faisant tourner un triangle rectangle autour d'un côté de son angle droit : la base engendrée est un disque, et l'aire de ce disque vaut π × rayon². C'est ce qui distingue le cône de la pyramide, dont la base est un polygone.",
      hint: "Pense à un cornet de glace : quelle est la forme de son ouverture ?",
    },
    {
      id: "m4pyr-5",
      level: 2,
      type: "input",
      question:
        "Une pyramide a une base carrée de côté 9 cm et une hauteur de 8 cm. Calcule son volume, en cm³.",
      answer: "216",
      explanation:
        "Étape 1 : aire de la base = 9 × 9 = 81 cm². Étape 2 : volume = (81 × 8) ÷ 3 = 648 ÷ 3 = 216 cm³. Piège : ne confonds pas le côté du carré (9 cm) avec son aire — il faut d'abord calculer 9 × 9.",
      hint: "Calcule d'abord l'aire du carré de base, puis applique la formule du tiers.",
    },
    {
      id: "m4pyr-6",
      level: 2,
      type: "input",
      question:
        "Un cône a un disque de base de rayon 5 cm et une hauteur de 12 cm. Calcule son volume, en cm³, arrondi à l'unité (prends π ≈ 3,14159).",
      answer: "314",
      accept: ["314,16", "314.16"],
      explanation:
        "Étape 1 : aire de la base = π × 5² = 25π cm². Étape 2 : volume = (25π × 12) ÷ 3 = 300π ÷ 3 = 100π ≈ 314 cm³. Piège : le rayon doit être élevé au carré (5² = 25), pas multiplié par 2.",
      hint: "Aire du disque : π × rayon². Puis multiplie par la hauteur et divise par 3.",
    },
    {
      id: "m4pyr-7",
      level: 2,
      type: "qcm",
      question: "Le patron d'un cône de révolution est composé…",
      choices: [
        "d'un disque et d'un secteur de disque",
        "d'un disque et d'un triangle",
        "de deux disques identiques",
        "d'un disque et d'un rectangle",
      ],
      answer: 0,
      explanation:
        "Le patron d'un cône contient le disque de base et un secteur de disque (une « part de tarte ») qui, une fois enroulé, forme la surface latérale. Le disque + rectangle est le patron du cylindre, et les deux disques appartiennent aussi au cylindre : ne les confonds pas.",
      hint: "Enroule mentalement une part de tarte en papier : quelle forme obtiens-tu ?",
    },
    {
      id: "m4pyr-8",
      level: 2,
      type: "input",
      question: "Convertis 3,2 dm³ en cm³.",
      answer: "3200",
      accept: ["3 200"],
      explanation:
        "Les unités de volume vont de 1 000 en 1 000 : 1 dm³ = 1 000 cm³. Donc 3,2 dm³ = 3,2 × 1 000 = 3 200 cm³. Piège : ne multiplie pas par 10 (règle des longueurs) ni par 100 (règle des aires) — pour les volumes, chaque saut vaut × 1 000.",
      hint: "1 dm³ = 1 000 cm³.",
    },
    {
      id: "m4pyr-9",
      level: 3,
      type: "input",
      question:
        "Un verre a la forme d'un cône de rayon 4 cm et de hauteur 9 cm. Combien de centilitres contient-il quand il est plein ? Arrondis à l'unité (prends π ≈ 3,14159).",
      answer: "15",
      explanation:
        "Étape 1 : volume = (π × 4² × 9) ÷ 3 = (16π × 9) ÷ 3 = 48π ≈ 150,8 cm³. Étape 2 : conversion — 1 cm³ = 1 mL, donc 150,8 cm³ ≈ 150,8 mL = 15,08 cL, soit 15 cL arrondi à l'unité. Piège : la question demande des CENTILITRES, pas des millilitres — 10 mL = 1 cL.",
      hint: "Calcule le volume en cm³ (= mL), puis divise par 10 pour obtenir des cL.",
    },
    {
      id: "m4pyr-10",
      level: 3,
      type: "qcm",
      question:
        "La pyramide du Louvre a une base carrée de 35 m de côté et une hauteur d'environ 21 m. Quel est son volume approximatif ?",
      choices: ["8 575 m³", "25 725 m³", "735 m³", "2 858 m³"],
      answer: 0,
      explanation:
        "Aire de la base : 35 × 35 = 1 225 m². Volume = (1 225 × 21) ÷ 3 = 25 725 ÷ 3 = 8 575 m³. Piège : 25 725 m³ est le résultat SANS le ÷ 3 (volume du prisme), l'erreur classique. Et 735 m³ viendrait de 35 × 21, qui n'a aucun sens ici.",
      hint: "Aire du carré de base, fois la hauteur, divisé par 3.",
    },
    {
      id: "m4pyr-11",
      level: 3,
      type: "truefalse",
      question:
        "Un cône et un cylindre ont le même disque de base et la même hauteur. Alors le volume du cylindre est trois fois celui du cône.",
      answer: true,
      explanation:
        "Vrai ! Le volume du cylindre vaut aire de la base × hauteur, et celui du cône vaut (aire de la base × hauteur) ÷ 3 : le cône remplit exactement le tiers du cylindre. On peut le vérifier avec de l'eau : il faut verser trois cônes pleins pour remplir le cylindre.",
      hint: "Compare les deux formules : laquelle contient un ÷ 3 ?",
    },
    {
      id: "m4pyr-12",
      level: 3,
      type: "input",
      question:
        "Un tas de sable a la forme d'un cône de rayon 1,5 m et de hauteur 2 m. Quel est son volume, en m³, arrondi au dixième (prends π ≈ 3,14159) ?",
      answer: "4,7",
      accept: ["4.7"],
      explanation:
        "Étape 1 : aire de la base = π × 1,5² = 2,25π m². Étape 2 : volume = (2,25π × 2) ÷ 3 = 4,5π ÷ 3 = 1,5π ≈ 4,712 m³, soit 4,7 m³ arrondi au dixième. Piège : 1,5² = 2,25 et non 3 — élever au carré n'est pas multiplier par 2.",
      hint: "Commence par 1,5² = 2,25, puis applique la formule (aire × hauteur) ÷ 3.",
    },
  ],
};
