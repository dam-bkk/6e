import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-prismes-cylindres",
  subject: "maths",
  grade: "5e",
  num: 14,
  title: "Prismes et cylindres",
  domain: "grandeurs",
  icon: "Cylinder",
  teaser: "Passer en 3D : décrire, déplier et mesurer le volume de ces deux solides.",
  objectives: [
    "Je sais décrire un prisme droit et un cylindre de révolution",
    "Je sais reconnaître et dessiner leurs patrons",
    "Je sais calculer un volume : aire de la base × hauteur",
    "Je connais les unités de volume et de contenance : 1 L = 1 dm³",
    "Je sais résoudre des problèmes concrets de volume",
  ],
  lesson: [
    {
      title: "Le prisme droit",
      paragraphs: [
        "Un prisme droit est un solide qui possède deux bases : deux polygones superposables, situés dans des plans parallèles. Ses faces latérales sont des rectangles.",
        "On nomme un prisme d'après sa base : prisme à base triangulaire, à base pentagonale… Le pavé droit est un cas particulier : un prisme droit dont la base est un rectangle.",
        "La hauteur du prisme est la distance entre les deux bases : c'est aussi la longueur des arêtes latérales.",
      ],
      example: [
        "Un prisme droit à base triangulaire possède : 2 bases triangulaires, 3 faces latérales rectangulaires, 6 sommets et 9 arêtes.",
      ],
      tip: "Pour repérer les bases, cherche les deux faces jumelles et parallèles : ce ne sont pas forcément celles du dessus et du dessous sur le dessin !",
    },
    {
      title: "Le cylindre de révolution",
      paragraphs: [
        "Un cylindre de révolution est le solide engendré par un rectangle qui tourne autour de l'un de ses côtés. Il possède deux bases : deux disques identiques et parallèles.",
        "Sa hauteur est la distance entre les deux disques. Une boîte de conserve, un rouleau d'essuie-tout, un tuyau : les cylindres sont partout.",
      ],
      example: [
        "Une boîte de conserve de rayon 4 cm et de hauteur 12 cm est un cylindre de révolution : ses deux bases sont des disques de rayon 4 cm.",
      ],
      tip: "« De révolution » signifie « obtenu par rotation » : imagine le rectangle qui tourne à toute vitesse autour d'un côté, il dessine le cylindre.",
    },
    {
      title: "Les patrons",
      paragraphs: [
        "Un patron est le dessin à plat du solide, qu'on peut découper et plier pour le reconstruire.",
        "Patron d'un prisme droit : les deux bases (polygones superposables) et les faces latérales rectangulaires mises côte à côte.",
        "Patron d'un cylindre : deux disques et un rectangle. Point crucial : la longueur du rectangle est égale au périmètre du disque de base, c'est-à-dire 2 × π × r.",
      ],
      example: [
        "Pour un cylindre de rayon 3 cm et de hauteur 10 cm, le rectangle du patron mesure 10 cm sur 2 × π × 3 ≈ 18,8 cm.",
      ],
      tip: "Déroule l'étiquette d'une boîte de conserve : tu obtiens exactement le rectangle du patron. Sa longueur fait bien le tour du disque.",
    },
    {
      title: "Le volume : aire de la base × hauteur",
      figure: "m5-prisme-cylindre",
      paragraphs: [
        "Le volume d'un prisme droit et celui d'un cylindre se calculent avec la même formule : volume = aire de la base × hauteur.",
        "Pour un cylindre de rayon r et de hauteur h : volume = π × r² × h, puisque l'aire du disque de base est π × r².",
        "Attention à bien identifier la hauteur du SOLIDE : si la base est un triangle, ne la confonds pas avec la hauteur du triangle de base, qui sert seulement à calculer l'aire de la base.",
      ],
      example: [
        "Prisme droit de base d'aire 12 cm² et de hauteur 5 cm : volume = 12 × 5 = 60 cm³.",
        "Cylindre de rayon 3 cm et de hauteur 10 cm : volume = π × 3² × 10 = 90 × π ≈ 282,6 cm³.",
      ],
      tip: "Une seule formule pour les deux solides : « aire de la base × hauteur ». Retiens-la ainsi et adapte simplement le calcul de l'aire de la base.",
    },
    {
      title: "Unités de volume et contenance",
      paragraphs: [
        "L'unité principale de volume est le mètre cube (m³). Pour les volumes, chaque unité vaut 1 000 fois la suivante : 1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³. Dans un tableau de conversion, chaque unité occupe donc TROIS colonnes.",
        "La contenance se mesure en litres, et le lien avec les volumes est essentiel : 1 L = 1 dm³, et donc 1 mL = 1 cm³ et 1 000 L = 1 m³.",
      ],
      example: [
        "2 500 cm³ = 2,5 dm³ = 2,5 L.",
        "Un aquarium de 30 dm³ contient 30 L d'eau.",
      ],
      tip: "Retiens le trio : longueurs → décalage de 1 chiffre, aires → 2 chiffres, volumes → 3 chiffres par unité. Et grave dans ta mémoire : 1 L = 1 dm³.",
    },
  ],
  exercises: [
    {
      id: "m5vol-1",
      level: 1,
      type: "qcm",
      question: "Que sont les deux bases d'un prisme droit ?",
      choices: [
        "Deux polygones superposables situés dans des plans parallèles",
        "Deux rectangles quelconques",
        "Deux disques identiques",
        "Deux triangles forcément équilatéraux",
      ],
      answer: 0,
      explanation:
        "Les bases d'un prisme droit sont deux polygones superposables et parallèles (triangles, pentagones…). Les deux disques identiques, ce sont les bases du cylindre. Les rectangles, eux, sont les faces LATÉRALES du prisme.",
      hint: "Prisme : bases polygonales. Cylindre : bases circulaires.",
    },
    {
      id: "m5vol-2",
      level: 1,
      type: "qcm",
      question: "De quoi est composé le patron d'un cylindre de révolution ?",
      choices: [
        "Deux disques et un rectangle",
        "Deux rectangles et un disque",
        "Un disque et un triangle",
        "Deux disques et deux rectangles",
      ],
      answer: 0,
      explanation:
        "Le patron d'un cylindre comporte les deux disques de base et un rectangle (la surface latérale déroulée). La longueur de ce rectangle est égale au périmètre du disque : 2 × π × r.",
      hint: "Pense à une boîte de conserve : deux couvercles et une étiquette déroulée.",
    },
    {
      id: "m5vol-3",
      level: 1,
      type: "truefalse",
      question: "Les faces latérales d'un prisme droit sont des rectangles.",
      answer: true,
      explanation:
        "Vrai ! Dans un prisme droit, les faces latérales sont des rectangles perpendiculaires aux deux bases. Leur nombre dépend de la base : 3 pour une base triangulaire, 5 pour une base pentagonale…",
    },
    {
      id: "m5vol-4",
      level: 1,
      type: "input",
      question:
        "Un prisme droit a une base d'aire 12 cm² et une hauteur de 5 cm. Quel est son volume, en cm³ ?",
      answer: "60",
      explanation:
        "Volume du prisme : aire de la base × hauteur = 12 × 5 = 60 cm³. C'est la formule unique du chapitre, valable aussi pour le cylindre.",
      hint: "Volume = aire de la base × hauteur.",
    },
    {
      id: "m5vol-5",
      level: 2,
      type: "input",
      question:
        "Un cylindre a un rayon de 3 cm et une hauteur de 10 cm. Calcule son volume en cm³, en prenant π ≈ 3,14.",
      answer: "282,6",
      explanation:
        "Aire de la base : π × r² = 3,14 × 3² = 3,14 × 9 = 28,26 cm². Volume : 28,26 × 10 = 282,6 cm³. Piège classique : oublier le carré et calculer 3,14 × 3 × 10 = 94,2.",
      hint: "Commence par l'aire du disque de base : π × r².",
    },
    {
      id: "m5vol-6",
      level: 2,
      type: "qcm",
      question: "À quel volume correspond 1 litre ?",
      choices: ["1 dm³", "1 cm³", "1 m³", "10 dm³"],
      answer: 0,
      explanation:
        "1 L = 1 dm³ : c'est LA correspondance à connaître par cœur. On en déduit 1 mL = 1 cm³ et 1 000 L = 1 m³. Un cube de 10 cm d'arête contient exactement 1 litre.",
      hint: "Imagine un cube de 10 cm de côté rempli d'eau.",
    },
    {
      id: "m5vol-7",
      level: 2,
      type: "input",
      question:
        "Un prisme droit a pour base un triangle de base 6 cm et de hauteur 4 cm. La hauteur du prisme est de 8 cm. Quel est le volume du prisme, en cm³ ?",
      answer: "96",
      explanation:
        "Étape 1 : aire de la base triangulaire = 6 × 4 ÷ 2 = 12 cm². Étape 2 : volume = aire de la base × hauteur du prisme = 12 × 8 = 96 cm³. Piège classique : confondre la hauteur du triangle (4 cm, pour l'aire) et la hauteur du prisme (8 cm, pour le volume).",
      hint: "Deux hauteurs différentes ici : celle du triangle, puis celle du prisme.",
    },
    {
      id: "m5vol-8",
      level: 2,
      type: "truefalse",
      question: "Si on double la hauteur d'un cylindre sans changer son rayon, son volume double.",
      answer: true,
      explanation:
        "Vrai ! Volume = aire de la base × hauteur : si la hauteur double et que la base ne change pas, le volume double. Attention, ce n'est pas le cas pour le rayon : doubler le rayon multiplie le volume par 4, à cause du carré dans π × r².",
      hint: "Regarde le rôle de la hauteur dans la formule du volume.",
    },
    {
      id: "m5vol-9",
      level: 3,
      type: "input",
      question: "Convertis 2 500 cm³ en litres.",
      answer: "2,5",
      explanation:
        "2 500 cm³ = 2,5 dm³ (on divise par 1 000 car 1 dm³ = 1 000 cm³). Comme 1 L = 1 dm³, cela fait 2,5 L. Piège classique : diviser par 100 comme pour des longueurs, alors que les volumes se décalent de 3 chiffres par unité.",
      hint: "Passe d'abord en dm³, puis utilise 1 L = 1 dm³.",
    },
    {
      id: "m5vol-10",
      level: 3,
      type: "qcm",
      question:
        "Un aquarium a la forme d'un pavé droit de 40 cm de longueur, 25 cm de largeur et 30 cm de hauteur. Quelle est sa contenance ?",
      choices: ["30 L", "3 L", "300 L", "12 L"],
      answer: 0,
      explanation:
        "Volume : 40 × 25 × 30 = 30 000 cm³. Conversion : 30 000 cm³ = 30 dm³ = 30 L, car 1 L = 1 dm³. La double étape volume puis conversion est typique des problèmes de contenance.",
      hint: "Calcule le volume en cm³, puis convertis en litres (1 000 cm³ = 1 L).",
    },
    {
      id: "m5vol-11",
      level: 3,
      type: "truefalse",
      question:
        "Un cylindre de rayon 2 cm et de hauteur 5 cm a le même volume qu'un cylindre de rayon 5 cm et de hauteur 2 cm.",
      answer: false,
      explanation:
        "Faux ! Premier cylindre : π × 2² × 5 = 20 × π cm³. Second : π × 5² × 2 = 50 × π cm³. Le rayon est au carré dans la formule : échanger rayon et hauteur change donc le volume. Le second cylindre est 2,5 fois plus grand.",
      hint: "Calcule les deux volumes en laissant π dans l'écriture.",
    },
    {
      id: "m5vol-12",
      level: 3,
      type: "input",
      question:
        "Une boîte de conserve cylindrique a un diamètre de 8 cm et une hauteur de 12 cm. Calcule son volume en cm³, en prenant π ≈ 3,14.",
      answer: "602,88",
      accept: ["602,9", "603"],
      explanation:
        "Étape 1 : le rayon vaut 8 ÷ 2 = 4 cm. Étape 2 : aire de la base = 3,14 × 4² = 3,14 × 16 = 50,24 cm². Étape 3 : volume = 50,24 × 12 = 602,88 cm³, soit environ 0,6 L. Piège classique : utiliser le diamètre à la place du rayon, ce qui multiplierait le résultat par 4.",
      hint: "L'énoncé donne le diamètre : commence par trouver le rayon.",
    },
  ],
};
