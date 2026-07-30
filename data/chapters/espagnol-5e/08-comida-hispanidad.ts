import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-comida-hispanidad",
  subject: "espagnol",
  grade: "5e",
  num: 8,
  title: "Comida y mundo hispano",
  domain: "nombres",
  domainLabel: "Cultura",
  icon: "Apple",
  teaser: "La nourriture, les repas à l'espagnole et le tour du monde hispanophone.",
  objectives: [
    "Je connais les repas et des aliments courants en espagnol",
    "Je sais dire ce que je veux et ce que j'aime manger",
    "Je connais les horaires des repas en Espagne",
    "Je sais que l'espagnol se parle dans une vingtaine de pays",
    "Je connais quelques fêtes et traditions du monde hispanophone",
  ],
  lesson: [
    {
      title: "Les repas de la journée",
      paragraphs: [
        "Les trois repas principaux : el desayuno (le petit-déjeuner), la comida (le déjeuner), la cena (le dîner). Beaucoup d'Espagnols ajoutent la merienda, le goûter.",
        "Attention au mot comida : il signifie à la fois « la nourriture » en général ET « le déjeuner ». C'est le contexte qui permet de comprendre.",
        "Grand piège culturel : en Espagne, on mange beaucoup plus tard qu'en France ! La comida se prend vers 14 h - 15 h, et la cena vers 21 h - 22 h. Un restaurant espagnol est souvent vide à 19 h.",
      ],
      example: [
        "El desayuno → le petit-déjeuner (vers 7 h - 8 h)",
        "La comida → le déjeuner (vers 14 h - 15 h)",
        "La cena → le dîner (vers 21 h - 22 h)",
      ],
      tip: "Cena se prononce « théna » en Espagne (le c devant e ou i se dit comme le « th » anglais) et « séna » en Amérique latine. Les deux prononciations sont correctes !",
    },
    {
      title: "Les aliments courants",
      paragraphs: [
        "Les basiques : el pan (le pain), la leche (le lait), el agua (l'eau), el queso (le fromage), la carne (la viande), el pescado (le poisson), el arroz (le riz), los huevos (les œufs).",
        "Les fruits et légumes : la manzana (la pomme), la naranja (l'orange), el plátano (la banane), el tomate (la tomate), las verduras (les légumes).",
        "Et les douceurs : el chocolate, el zumo (le jus de fruit), los churros (beignets allongés qu'on trempe dans le chocolat chaud).",
      ],
      example: [
        "Para el desayuno tomo leche y pan. → Au petit-déjeuner, je prends du lait et du pain.",
        "Me gusta el zumo de naranja. → J'aime le jus d'orange.",
      ],
      tip: "Faux ami : el pescado = le poisson qu'on mange. Le poisson vivant qui nage se dit el pez. Deux mots différents pour le même animal !",
    },
    {
      title: "Commander et dire ce qu'on aime",
      paragraphs: [
        "Pour dire ce que tu veux : quiero (je veux / je voudrais) + nom. Quiero un zumo de naranja, por favor = je voudrais un jus d'orange, s'il vous plaît.",
        "Pour tes goûts, tu connais déjà gustar : me gusta el queso (j'aime le fromage), me gustan los churros (j'aime les churros, pluriel donc gustan !).",
        "Petit dialogue type : — ¿Qué quieres? — Quiero pan con chocolate, por favor. — ¡Gracias!",
      ],
      example: [
        "Quiero agua, por favor. → Je voudrais de l'eau, s'il vous plaît.",
        "Me gustan las naranjas. → J'aime les oranges.",
        "No me gusta el pescado. → Je n'aime pas le poisson.",
      ],
      tip: "Quiero suffit pour commander poliment si tu ajoutes por favor. N'oublie pas l'accord de gustar : me gusta el pan, mais me gustaN los churros.",
    },
    {
      title: "L'espagnol dans le monde",
      paragraphs: [
        "L'espagnol n'est pas parlé qu'en Espagne ! C'est la langue officielle d'une vingtaine de pays (21 avec la Guinée équatoriale), avec près de 500 millions de locuteurs natifs.",
        "La plupart se trouvent en Amérique latine : le Mexique (le pays hispanophone le plus peuplé), l'Argentine, la Colombie, le Pérou, le Chili, Cuba… et beaucoup d'autres.",
        "Attention : au Brésil, on parle portugais, pas espagnol ! C'est le grand piège de la carte d'Amérique du Sud.",
        "Il existe de petites différences entre l'espagnol d'Espagne et celui d'Amérique latine : la prononciation (le c de cena), et quelques mots (le jus se dit el zumo en Espagne mais el jugo en Amérique latine).",
      ],
      example: [
        "México, Argentina, Colombia, Perú, Chile, Cuba… hablan español.",
        "En Brasil se habla portugués. → Au Brésil, on parle portugais.",
      ],
      tip: "Pour retenir : le pays qui compte LE PLUS d'hispanophones n'est pas l'Espagne… c'est le Mexique !",
    },
    {
      title: "Fêtes et traditions",
      paragraphs: [
        "La Tomatina est une fête espagnole célèbre : chaque année en août, à Buñol (près de Valence), des milliers de personnes se lancent des tonnes de tomates dans une gigantesque bataille !",
        "Le Día de los Muertos (jour des Morts) est une grande fête mexicaine, début novembre : les familles honorent joyeusement leurs défunts avec des autels colorés, des fleurs orange et des têtes de mort en sucre. C'est une fête joyeuse, pas triste !",
        "Côté gourmandises, les churros con chocolate sont typiques d'Espagne : on les déguste souvent au petit-déjeuner ou au goûter, trempés dans un chocolat chaud épais.",
      ],
      example: [
        "La Tomatina → bataille de tomates à Buñol, en Espagne (août).",
        "El Día de los Muertos → fête des Morts au Mexique (novembre).",
        "Los churros con chocolate → spécialité espagnole du desayuno ou de la merienda.",
      ],
      tip: "Ne mélange pas les pays : la Tomatina, c'est en Espagne ; le Día de los Muertos, c'est au Mexique.",
    },
  ],
  exercises: [
    {
      id: "es8-1",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle le petit-déjeuner en espagnol ?",
      choices: ["la cena", "la comida", "el desayuno", "la merienda"],
      answer: 2,
      explanation:
        "El desayuno = le petit-déjeuner. La comida = le déjeuner, la merienda = le goûter, la cena = le dîner. C'est le premier repas de la journée.",
      hint: "C'est le repas du matin.",
    },
    {
      id: "es8-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « el pan » ?",
      choices: ["le poisson", "le pain", "le lait", "le fromage"],
      answer: 1,
      explanation:
        "El pan = le pain. Le poisson = el pescado, le lait = la leche, le fromage = el queso. Pan ressemble beaucoup à « pain », facile à retenir !",
      hint: "Un mot très proche du français.",
    },
    {
      id: "es8-3",
      level: 1,
      type: "truefalse",
      question: "Au Brésil, la langue officielle est l'espagnol.",
      answer: false,
      explanation:
        "Faux ! Au Brésil, on parle portugais. C'est LE piège de la carte d'Amérique du Sud : le plus grand pays du continent n'est pas hispanophone, contrairement à ses voisins comme l'Argentine ou la Colombie.",
    },
    {
      id: "es8-4",
      level: 1,
      type: "input",
      question: "Complète : « ... un zumo de naranja, por favor » (je voudrais un jus d'orange, s'il vous plaît). Un seul mot.",
      answer: "quiero",
      explanation:
        "Je veux / je voudrais = quiero. Avec por favor, c'est une façon polie et simple de commander : quiero un zumo de naranja, por favor.",
      hint: "Le verbe querer à la 1re personne : « je veux ».",
    },
    {
      id: "es8-5",
      level: 2,
      type: "qcm",
      question: "En Espagne, à quelle heure dîne-t-on (la cena) le plus souvent ?",
      choices: [
        "Vers 18 h",
        "Vers 19 h",
        "Vers 21 h - 22 h",
        "Vers 16 h",
      ],
      answer: 2,
      explanation:
        "En Espagne, la cena se prend très tard : vers 21 h, voire 22 h. De même, la comida (le déjeuner) se prend vers 14 h - 15 h. C'est un vrai décalage culturel avec la France !",
      hint: "Les Espagnols mangent bien plus tard que les Français.",
    },
    {
      id: "es8-6",
      level: 2,
      type: "qcm",
      question: "Quel pays compte le plus grand nombre d'hispanophones ?",
      choices: ["l'Espagne", "l'Argentine", "le Mexique", "la Colombie"],
      answer: 2,
      explanation:
        "C'est le Mexique, avec environ 130 millions d'habitants : bien plus que l'Espagne (environ 48 millions). L'espagnol est la langue officielle d'une vingtaine de pays, la plupart en Amérique latine.",
      hint: "Ce n'est pas en Europe…",
    },
    {
      id: "es8-7",
      level: 2,
      type: "input",
      question: "Complète avec un seul mot : « Me ... los churros » (j'aime les churros).",
      answer: "gustan",
      explanation:
        "Los churros est un pluriel, donc gustar s'accorde : me gustaN los churros. Rappel du chapitre gustar : le verbe s'accorde avec la chose aimée, pas avec la personne.",
      hint: "Los churros est au pluriel : gusta ou gustan ?",
    },
    {
      id: "es8-8",
      level: 2,
      type: "truefalse",
      question: "Le mot « comida » peut signifier à la fois « la nourriture » et « le déjeuner ».",
      answer: true,
      explanation:
        "Vrai ! La comida désigne la nourriture en général (me gusta la comida española = j'aime la cuisine espagnole) mais aussi le repas de midi. C'est le contexte qui permet de choisir le bon sens.",
    },
    {
      id: "es8-9",
      level: 3,
      type: "qcm",
      question: "Qu'est-ce que la Tomatina ?",
      choices: [
        "Une fête mexicaine en l'honneur des morts",
        "Une bataille de tomates dans une ville d'Espagne",
        "Une recette de soupe froide à la tomate",
        "Une danse traditionnelle d'Argentine",
      ],
      answer: 1,
      explanation:
        "La Tomatina est une gigantesque bataille de tomates qui a lieu chaque mois d'août à Buñol, près de Valence, en Espagne. La fête en l'honneur des morts, c'est le Día de los Muertos… au Mexique !",
      hint: "Son nom contient déjà l'ingrédient principal.",
    },
    {
      id: "es8-10",
      level: 3,
      type: "qcm",
      question: "Dans quel pays fête-t-on principalement le Día de los Muertos ?",
      choices: ["en Espagne", "en Argentine", "au Mexique", "en Colombie"],
      answer: 2,
      explanation:
        "Le Día de los Muertos (jour des Morts) est une grande fête mexicaine de début novembre : autels colorés, fleurs orange, têtes de mort en sucre. C'est une fête joyeuse où l'on honore les défunts. Ne pas confondre avec la Tomatina, qui est espagnole.",
      hint: "Le pays des têtes de mort en sucre et des autels colorés.",
    },
    {
      id: "es8-11",
      level: 3,
      type: "input",
      question: "En Amérique latine, le jus de fruit ne se dit pas « el zumo » mais « el ... ». Complète avec un seul mot.",
      answer: "jugo",
      explanation:
        "En Espagne, on dit el zumo ; en Amérique latine, el jugo. C'est un exemple des petites différences de vocabulaire entre les deux côtés de l'Atlantique, comme les différences de prononciation du c de cena.",
      hint: "Quatre lettres, ça commence par un j (prononcé comme une jota).",
    },
    {
      id: "es8-12",
      level: 3,
      type: "truefalse",
      question: "En espagnol, « el pescado » désigne le poisson dans l'assiette, et « el pez » le poisson vivant qui nage.",
      answer: true,
      explanation:
        "Vrai ! L'espagnol utilise deux mots différents : el pez pour l'animal vivant, el pescado pour le poisson pêché qu'on mange. En français, un seul mot « poisson » couvre les deux sens.",
      hint: "Pescado vient du verbe pescar (pêcher)…",
    },
  ],
  videos: [
    {
      title: "Les Aliments en Espagnol - La nourriture (Vocabulaire de base)  Leçon d'Espagnol",
      youtubeId: "azK_Oc3O3OQ",
      channel: "APRENDEMOS ESPAÑOL",
    },
  ],
};
