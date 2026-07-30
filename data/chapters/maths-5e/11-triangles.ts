import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-triangles",
  subject: "maths",
  grade: "5e",
  num: 11,
  title: "Triangles : construction et droites remarquables",
  domain: "geometrie",
  icon: "Triangle",
  teaser: "Savoir quand un triangle existe, le construire, et découvrir ses droites secrètes.",
  objectives: [
    "Je sais utiliser l'inégalité triangulaire pour dire si un triangle est constructible",
    "Je sais construire un triangle à la règle, au compas et au rapporteur",
    "Je sais utiliser la somme des angles d'un triangle, y compris dans les triangles particuliers",
    "Je sais tracer les médiatrices d'un triangle et son cercle circonscrit",
    "Je sais tracer les hauteurs d'un triangle",
  ],
  lesson: [
    {
      title: "L'inégalité triangulaire",
      figure: "m5-inegalite-triangulaire",
      paragraphs: [
        "Dans un triangle, la longueur de chaque côté est toujours inférieure à la somme des longueurs des deux autres côtés. C'est l'inégalité triangulaire.",
        "Pour savoir si un triangle est constructible, il suffit de vérifier que le côté le PLUS LONG est inférieur à la somme des deux autres. Si l'égalité est atteinte, les trois points sont alignés : le triangle est « aplati ».",
      ],
      example: [
        "Côtés 4 cm, 6 cm et 8 cm : 8 < 4 + 6, le triangle est constructible.",
        "Côtés 3 cm, 5 cm et 9 cm : 9 > 3 + 5, le triangle est impossible.",
        "Côtés 4 cm, 6 cm et 10 cm : 10 = 4 + 6, les points sont alignés (triangle aplati).",
      ],
      tip: "Un seul test suffit : compare le plus grand côté à la somme des deux autres. Inutile de vérifier les trois inégalités.",
    },
    {
      title: "Construire un triangle aux instruments",
      paragraphs: [
        "Trois côtés donnés : trace un premier côté à la règle, puis les deux autres sommets se trouvent à l'intersection de deux arcs de cercle tracés au compas.",
        "Deux côtés et l'angle entre eux : trace un côté, mesure l'angle au rapporteur, puis reporte la deuxième longueur. Un côté et deux angles : trace le côté, puis un angle à chaque extrémité.",
      ],
      example: [
        "Construire ABC avec AB = 6 cm, AC = 4 cm et BC = 5 cm :",
        "1. Trace [AB] de 6 cm.",
        "2. Trace un arc de cercle de centre A et de rayon 4 cm.",
        "3. Trace un arc de cercle de centre B et de rayon 5 cm.",
        "4. Le point C est à l'intersection des deux arcs.",
      ],
      tip: "Commence toujours par le côté dont tu connais la longueur : c'est la « base » sur laquelle tout le reste s'appuie.",
    },
    {
      title: "La somme des angles d'un triangle",
      paragraphs: [
        "Tu l'as vue en 6e et elle reste essentielle : dans tout triangle, la somme des mesures des trois angles vaut 180°.",
        "Dans les triangles particuliers, cette propriété devient très efficace. Triangle équilatéral : trois angles de 60°. Triangle rectangle : les deux angles aigus sont complémentaires (leur somme vaut 90°). Triangle isocèle : les deux angles à la base sont égaux.",
      ],
      example: [
        "Le triangle ABC est isocèle en A avec l'angle BAC égal à 40°.",
        "Les angles ABC et ACB sont égaux et leur somme vaut 180 − 40 = 140°.",
        "Chacun mesure donc 140 ÷ 2 = 70°.",
      ],
      tip: "Dans un triangle rectangle, gagne du temps : les deux angles aigus se complètent à 90°, pas besoin de repasser par 180.",
    },
    {
      title: "Médiatrices et cercle circonscrit",
      figure: "m5-cercle-circonscrit",
      paragraphs: [
        "La médiatrice d'un segment est la droite perpendiculaire à ce segment passant par son milieu. Chaque point de la médiatrice est à égale distance des deux extrémités du segment.",
        "Les trois médiatrices des côtés d'un triangle se coupent en un même point : le centre du cercle circonscrit, le cercle qui passe par les trois sommets du triangle.",
        "Ce centre n'est pas toujours à l'intérieur du triangle : il est dedans si le triangle a tous ses angles aigus, sur l'hypoténuse si le triangle est rectangle, et à l'extérieur si le triangle a un angle obtus.",
      ],
      example: [
        "Pour tracer le cercle circonscrit de ABC : trace les médiatrices de deux côtés seulement, leur point d'intersection O est le centre, et le rayon est OA (= OB = OC).",
      ],
      tip: "Deux médiatrices suffisent pour trouver le centre : la troisième passe forcément par le même point, elle sert seulement de vérification.",
    },
    {
      title: "Les hauteurs",
      paragraphs: [
        "Une hauteur d'un triangle est la droite qui passe par un sommet et qui est perpendiculaire au côté opposé.",
        "Un triangle possède trois hauteurs, et elles se coupent en un même point appelé l'orthocentre. Dans un triangle avec un angle obtus, certaines hauteurs tombent à l'extérieur du triangle : il faut prolonger le côté opposé pour les tracer.",
      ],
      example: [
        "Dans le triangle ABC, la hauteur issue de A est perpendiculaire à (BC).",
        "Si ABC est rectangle en A, deux hauteurs sont déjà tracées : ce sont les côtés [AB] et [AC] !",
      ],
      tip: "Ne confonds pas : la médiatrice est perpendiculaire à un côté en son MILIEU ; la hauteur est perpendiculaire à un côté en passant par le SOMMET opposé.",
    },
  ],
  exercises: [
    {
      id: "m5tri-1",
      level: 1,
      type: "qcm",
      question:
        "Peut-on construire un triangle dont les côtés mesurent 3 cm, 5 cm et 9 cm ?",
      choices: [
        "Non, car 3 + 5 < 9",
        "Oui, car 9 < 3 × 5",
        "Non, car 9 est un nombre impair",
        "Oui, on peut toujours construire un triangle",
      ],
      answer: 0,
      explanation:
        "On compare le plus grand côté à la somme des deux autres : 3 + 5 = 8 et 8 < 9. Le plus grand côté dépasse la somme des deux autres : l'inégalité triangulaire n'est pas respectée, le triangle est impossible. Au compas, les deux arcs ne se croiseraient jamais.",
      hint: "Compare le plus grand côté à la somme des deux autres.",
    },
    {
      id: "m5tri-2",
      level: 1,
      type: "input",
      question:
        "Dans un triangle, deux angles mesurent 35° et 65°. Combien mesure le troisième angle, en degrés ?",
      answer: "80",
      explanation:
        "La somme des angles d'un triangle vaut 180°. Le troisième angle mesure donc 180 − (35 + 65) = 180 − 100 = 80°.",
      hint: "La somme des trois angles d'un triangle vaut 180°.",
    },
    {
      id: "m5tri-3",
      level: 1,
      type: "truefalse",
      question: "Dans un triangle équilatéral, chaque angle mesure 60°.",
      answer: true,
      explanation:
        "Vrai ! Les trois angles d'un triangle équilatéral sont égaux et leur somme vaut 180°. Chacun mesure donc 180 ÷ 3 = 60°.",
    },
    {
      id: "m5tri-4",
      level: 1,
      type: "qcm",
      question: "Qu'est-ce que la médiatrice d'un segment ?",
      choices: [
        "La droite perpendiculaire au segment passant par son milieu",
        "La droite qui coupe le segment en son milieu",
        "La droite perpendiculaire au segment passant par une extrémité",
        "Le segment qui joint un sommet au milieu du côté opposé",
      ],
      answer: 0,
      explanation:
        "La médiatrice cumule deux conditions : perpendiculaire au segment ET passant par son milieu. Une droite qui coupe le segment en son milieu sans être perpendiculaire n'est pas une médiatrice.",
      hint: "Il y a deux conditions à réunir en même temps.",
    },
    {
      id: "m5tri-5",
      level: 2,
      type: "input",
      question:
        "Le triangle ABC est isocèle en A et l'angle BAC mesure 40°. Combien mesure l'angle ABC, en degrés ?",
      answer: "70",
      explanation:
        "Le triangle est isocèle en A, donc les angles à la base ABC et ACB sont égaux. Leur somme vaut 180 − 40 = 140°, donc chacun mesure 140 ÷ 2 = 70°. Piège classique : oublier de diviser par 2.",
      hint: "Les deux angles à la base sont égaux : partage le reste en deux.",
    },
    {
      id: "m5tri-6",
      level: 2,
      type: "qcm",
      question:
        "Le centre du cercle circonscrit à un triangle est le point d'intersection…",
      choices: [
        "des trois médiatrices des côtés",
        "des trois hauteurs",
        "des trois côtés",
        "des trois angles",
      ],
      answer: 0,
      explanation:
        "Les trois médiatrices d'un triangle se coupent en un même point, à égale distance des trois sommets : c'est le centre du cercle circonscrit. Les hauteurs se coupent en un autre point, l'orthocentre : ne les confonds pas.",
      hint: "Quelle droite regroupe les points à égale distance de deux sommets ?",
    },
    {
      id: "m5tri-7",
      level: 2,
      type: "truefalse",
      question:
        "On peut construire un vrai triangle avec des côtés de 4 cm, 6 cm et 10 cm.",
      answer: false,
      explanation:
        "Faux ! Ici 4 + 6 = 10 exactement : les trois points sont alignés et le « triangle » est aplati, réduit à un segment. Pour un vrai triangle, il faut une inégalité STRICTE : le plus grand côté doit être strictement inférieur à la somme des deux autres.",
      hint: "Calcule 4 + 6 et compare au plus grand côté. Égal, plus petit ou plus grand ?",
    },
    {
      id: "m5tri-8",
      level: 2,
      type: "qcm",
      question: "Dans un triangle, qu'est-ce qu'une hauteur ?",
      choices: [
        "La droite passant par un sommet et perpendiculaire au côté opposé",
        "La droite qui joint un sommet au milieu du côté opposé",
        "La droite perpendiculaire à un côté en son milieu",
        "Le plus grand côté du triangle",
      ],
      answer: 0,
      explanation:
        "Une hauteur passe par un sommet et est perpendiculaire au côté opposé. La droite perpendiculaire à un côté en son milieu est la médiatrice : c'est la confusion la plus fréquente du chapitre.",
      hint: "La hauteur part d'un sommet ; la médiatrice part d'un milieu.",
    },
    {
      id: "m5tri-9",
      level: 3,
      type: "input",
      question:
        "Le triangle ABC est rectangle en A et l'angle ABC mesure 32°. Combien mesure l'angle ACB, en degrés ?",
      answer: "58",
      explanation:
        "Dans un triangle rectangle, les deux angles aigus sont complémentaires : leur somme vaut 90°. Donc l'angle ACB mesure 90 − 32 = 58°. On peut vérifier : 90 + 32 + 58 = 180. Piège : soustraire de 180 en oubliant l'angle droit.",
      hint: "L'angle en A vaut déjà 90°. Que reste-t-il pour les deux autres ?",
    },
    {
      id: "m5tri-10",
      level: 3,
      type: "qcm",
      question:
        "Deux côtés d'un triangle mesurent 5 cm et 8 cm. Parmi ces longueurs, laquelle est possible pour le troisième côté ?",
      choices: ["2 cm", "3 cm", "12 cm", "14 cm"],
      answer: 2,
      explanation:
        "Le troisième côté c doit vérifier deux conditions : c < 5 + 8 = 13, et 8 < 5 + c, donc c > 3. Il faut donc 3 < c < 13. Seul 12 cm convient. 3 cm donnerait un triangle aplati, 2 cm et 14 cm sont impossibles.",
      hint: "Le troisième côté doit être à la fois assez court ET assez long.",
    },
    {
      id: "m5tri-11",
      level: 3,
      type: "truefalse",
      question:
        "Le centre du cercle circonscrit à un triangle est toujours à l'intérieur du triangle.",
      answer: false,
      explanation:
        "Faux ! Il est à l'intérieur seulement si tous les angles sont aigus. Si le triangle est rectangle, le centre est le milieu de l'hypoténuse (donc sur le triangle) ; si le triangle a un angle obtus, le centre est carrément à l'extérieur.",
      hint: "Pense à un triangle très aplati, avec un angle très obtus.",
    },
    {
      id: "m5tri-12",
      level: 3,
      type: "input",
      question:
        "La charpente d'un toit a la forme d'un triangle isocèle : l'angle au sommet mesure 110°. Combien mesure chacun des deux angles à la base, en degrés ?",
      answer: "35",
      explanation:
        "La somme des angles vaut 180°, donc les deux angles à la base se partagent 180 − 110 = 70°. Comme le triangle est isocèle, ils sont égaux : chacun mesure 70 ÷ 2 = 35°. Piège classique : répondre 70 en oubliant la division par 2.",
      hint: "Retire l'angle au sommet de 180°, puis partage équitablement.",
    },
  ],
  videos: [
    { title: "Appliquer l'inégalité triangulaire", youtubeId: "hwCjjX6R2XM", channel: "Yvan Monka" },
  ],
};
