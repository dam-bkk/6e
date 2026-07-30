import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "grandeurs-mesures",
  num: 12,
  title: "Longueurs, masses et durées",
  domain: "grandeurs",
  icon: "Ruler",
  teaser: "Convertir des longueurs, des masses, des contenances et calculer des durées sans se piéger.",
  objectives: [
    "Je connais les unités de longueur, de masse et de contenance",
    "Je sais convertir une mesure d'une unité à une autre",
    "Je sais lire l'heure et calculer une durée",
    "Je sais résoudre des problèmes concrets avec des mesures",
  ],
  lesson: [
    {
      title: "Les unités de longueur",
      paragraphs: [
        "L'unité principale de longueur est le mètre (m). Pour mesurer de grandes distances, on utilise le kilomètre (km) ; pour de petites longueurs, le centimètre (cm) ou le millimètre (mm).",
        "Les unités se suivent dans cet ordre : km, hm, dam, m, dm, cm, mm. D'une unité à sa voisine de droite, on multiplie par 10. Pour convertir, on peut utiliser un tableau : on place un chiffre par colonne, et on complète avec des zéros jusqu'à l'unité demandée.",
      ],
      example: [
        "3 km = 3 000 m (on descend de 3 colonnes, donc × 1 000).",
        "250 cm = 2,5 m (on remonte de 2 colonnes, donc ÷ 100).",
        "4,7 m = 470 cm.",
      ],
      tip: "Pour retenir l'ordre des unités : « Kangourou Habile Dansant Mieux Depuis Ce Matin » → km, hm, dam, m, dm, cm, mm.",
    },
    {
      title: "Les unités de masse",
      paragraphs: [
        "L'unité principale de masse est le gramme (g). On utilise aussi le kilogramme (kg) pour les objets du quotidien, le milligramme (mg) pour les très petites masses, et la tonne (t) pour les très grosses : 1 t = 1 000 kg.",
        "Le tableau de conversion fonctionne exactement comme pour les longueurs : kg, hg, dag, g, dg, cg, mg. Chaque colonne vaut 10 fois la suivante.",
      ],
      example: [
        "2 kg = 2 000 g.",
        "3 t = 3 000 kg.",
        "500 mg = 0,5 g.",
      ],
      tip: "Repères utiles : une pomme pèse environ 150 g, un élève de 6e environ 40 kg, une voiture environ 1,2 t.",
    },
    {
      title: "Les unités de contenance",
      paragraphs: [
        "La contenance mesure la quantité de liquide qu'un récipient peut contenir. L'unité principale est le litre (L). On utilise souvent le centilitre (cL) et le millilitre (mL).",
        "Retiens les deux conversions clés : 1 L = 100 cL et 1 L = 1 000 mL. Donc 1 cL = 10 mL.",
      ],
      example: [
        "1,5 L = 150 cL (une grande bouteille d'eau).",
        "25 cL = 250 mL (un verre bien rempli).",
        "0,5 L = 50 cL (une petite bouteille).",
      ],
      tip: "Regarde les étiquettes à la maison : une canette fait 33 cL, une brique de lait 1 L, une cuillère à soupe environ 15 mL. Ces repères t'éviteront des réponses absurdes.",
    },
    {
      title: "Lire l'heure et calculer une durée",
      paragraphs: [
        "Attention, les heures ne fonctionnent pas comme les autres unités : 1 h = 60 min et 1 min = 60 s. Surtout pas 100 ! C'est LE piège du chapitre : on ne peut pas poser une soustraction d'heures comme une soustraction de nombres.",
        "Pour calculer une durée, la méthode la plus sûre est la méthode par sauts : on avance d'abord jusqu'à l'heure ronde suivante, puis d'heure en heure, puis on ajoute les minutes qui restent.",
        "Enfin, on additionne tous les sauts. Si le total de minutes dépasse 60, on convertit : 75 min = 1 h 15 min.",
      ],
      example: [
        "Durée de 9 h 40 à 11 h 15 :",
        "• de 9 h 40 à 10 h : 20 min,",
        "• de 10 h à 11 h : 1 h,",
        "• de 11 h à 11 h 15 : 15 min.",
        "Total : 1 h + 20 min + 15 min = 1 h 35 min.",
      ],
      tip: "Ne calcule jamais 11 h 15 − 9 h 40 en posant la soustraction comme avec des nombres : 115 − 940 n'a aucun sens ! Passe toujours par les sauts.",
    },
    {
      title: "Des mesures dans la vie de tous les jours",
      paragraphs: [
        "Les conversions servent partout : lire un horaire de train, adapter une recette, comparer des prix au kilogramme, vérifier qu'une valise ne dépasse pas le poids autorisé…",
        "Dans un problème, commence toujours par vérifier que toutes les mesures sont dans la même unité. Si ce n'est pas le cas, convertis d'abord, calcule ensuite.",
      ],
      example: [
        "Une recette demande 25 cL de lait. La bouteille contient 1 L = 100 cL.",
        "100 ÷ 25 = 4 : la bouteille permet de faire la recette 4 fois.",
      ],
      tip: "Avant de répondre, demande-toi si ton résultat est vraisemblable : un TGV qui met 3 min pour faire Paris–Lyon, c'est forcément une erreur de conversion !",
    },
  ],
  exercises: [
    {
      id: "mes-1",
      level: 1,
      type: "qcm",
      question: "Combien de mètres y a-t-il dans 3 km ?",
      choices: ["30 m", "300 m", "3 000 m", "30 000 m"],
      answer: 2,
      explanation:
        "Du kilomètre au mètre, on descend de 3 colonnes dans le tableau (km → hm → dam → m), donc on multiplie par 1 000 : 3 km = 3 × 1 000 = 3 000 m. Piège classique : croire que km → m, c'est × 100.",
      hint: "km, hm, dam, m : compte les colonnes du tableau.",
    },
    {
      id: "mes-2",
      level: 1,
      type: "input",
      question: "Convertis : 250 cm = ? Réponse en m.",
      answer: "2,5",
      explanation:
        "Du centimètre au mètre, on remonte de 2 colonnes, donc on divise par 100 : 250 ÷ 100 = 2,5. Donc 250 cm = 2,5 m. La virgule se décale de 2 rangs vers la gauche.",
      hint: "1 m = 100 cm, donc pour passer des cm aux m, on divise par 100.",
    },
    {
      id: "mes-3",
      level: 1,
      type: "truefalse",
      question: "1 h = 100 min.",
      answer: false,
      explanation:
        "Faux ! 1 h = 60 min. Les heures et les minutes ne suivent pas le système décimal : c'est le piège numéro un de ce chapitre. De même, 1 min = 60 s.",
    },
    {
      id: "mes-4",
      level: 1,
      type: "qcm",
      question: "Un sac de farine pèse 2 kg. Quelle est sa masse en grammes ?",
      choices: ["20 g", "200 g", "2 000 g", "20 000 g"],
      answer: 2,
      explanation:
        "1 kg = 1 000 g, donc 2 kg = 2 × 1 000 = 2 000 g. Comme pour les longueurs, du kg au g on descend de 3 colonnes dans le tableau (kg → hg → dag → g).",
      hint: "1 kg = 1 000 g.",
    },
    {
      id: "mes-5",
      level: 2,
      type: "input",
      question: "Une bouteille contient 1,5 L d'eau. Convertis cette contenance en cL. Réponse en cL.",
      answer: "150",
      explanation:
        "1 L = 100 cL, donc 1,5 L = 1,5 × 100 = 150 cL. Pour multiplier par 100, la virgule se décale de 2 rangs vers la droite : 1,5 → 150.",
      hint: "1 L = 100 cL.",
    },
    {
      id: "mes-6",
      level: 2,
      type: "qcm",
      question: "Un cours commence à 9 h 40 et se termine à 11 h 15. Combien de temps dure-t-il ?",
      choices: ["1 h 35 min", "2 h 25 min", "1 h 75 min", "1 h 25 min"],
      answer: 0,
      explanation:
        "Méthode par sauts : de 9 h 40 à 10 h il y a 20 min, de 10 h à 11 h il y a 1 h, de 11 h à 11 h 15 il y a 15 min. Total : 1 h + 20 min + 15 min = 1 h 35 min. Le piège « 1 h 75 min » vient d'une soustraction posée comme avec des nombres : ça ne marche pas avec les heures !",
      hint: "Avance par sauts : jusqu'à 10 h, puis jusqu'à 11 h, puis jusqu'à 11 h 15.",
    },
    {
      id: "mes-7",
      level: 2,
      type: "input",
      question: "Un camion transporte 3 t de sable. Convertis cette masse en kg. Réponse en kg.",
      answer: "3000",
      accept: ["3 000"],
      explanation:
        "1 t = 1 000 kg, donc 3 t = 3 × 1 000 = 3 000 kg. La tonne est l'unité des très grosses masses : camions, éléphants, conteneurs…",
      hint: "1 t = 1 000 kg.",
    },
    {
      id: "mes-8",
      level: 2,
      type: "truefalse",
      question: "500 mL, c'est la même chose que 0,5 L.",
      answer: true,
      explanation:
        "Vrai ! 1 L = 1 000 mL, donc 500 mL = 500 ÷ 1 000 = 0,5 L. C'est la contenance d'une petite bouteille d'eau.",
    },
    {
      id: "mes-9",
      level: 3,
      type: "input",
      question:
        "Un train part de la gare à 8 h 47 et arrive à 10 h 12. Combien de temps dure le trajet ? Réponse en min.",
      answer: "85",
      explanation:
        "Méthode par sauts : de 8 h 47 à 9 h il y a 13 min, de 9 h à 10 h il y a 60 min, de 10 h à 10 h 12 il y a 12 min. Total : 13 + 60 + 12 = 85 min (c'est-à-dire 1 h 25 min). Surtout ne pose pas 1 012 − 847 : les heures ne se soustraient pas comme des nombres !",
      hint: "Saute d'abord jusqu'à 9 h, puis jusqu'à 10 h, puis jusqu'à 10 h 12, et additionne les minutes.",
    },
    {
      id: "mes-10",
      level: 3,
      type: "qcm",
      question:
        "Une recette de crêpes demande 25 cL de lait. Combien de fois peut-on faire cette recette avec une bouteille de 1 L ?",
      choices: ["2 fois", "4 fois", "5 fois", "40 fois"],
      answer: 1,
      explanation:
        "On convertit d'abord dans la même unité : 1 L = 100 cL. Puis on divise : 100 ÷ 25 = 4. On peut donc faire la recette 4 fois. La réponse « 40 fois » vient d'une confusion entre 1 L = 100 cL et 1 L = 1 000 cL.",
      hint: "Convertis 1 L en cL avant de diviser.",
    },
    {
      id: "mes-11",
      level: 3,
      type: "input",
      question: "Un colis pèse 2 kg et 350 g. Quelle est sa masse totale en grammes ? Réponse en g.",
      answer: "2350",
      accept: ["2 350"],
      explanation:
        "On convertit les kilogrammes : 2 kg = 2 000 g. Puis on ajoute les grammes : 2 000 + 350 = 2 350 g. Il faut tout mettre dans la même unité avant d'additionner : 2 + 350 = 352 n'aurait aucun sens !",
      hint: "Convertis d'abord 2 kg en g, puis additionne.",
    },
    {
      id: "mes-12",
      level: 3,
      type: "qcm",
      question: "Un film commence à 20 h 55 et dure 1 h 50 min. À quelle heure se termine-t-il ?",
      choices: ["22 h 45", "22 h 05", "21 h 45", "22 h 55"],
      answer: 0,
      explanation:
        "On ajoute par étapes : 20 h 55 + 1 h = 21 h 55, puis 21 h 55 + 50 min. De 21 h 55 à 22 h il y a 5 min, il reste 45 min à ajouter : on arrive à 22 h 45. Piège : 55 + 50 = 105 min, et 105 min = 1 h 45 min, pas « 1 h 05 » !",
      hint: "Ajoute d'abord l'heure entière, puis les minutes en passant par 22 h.",
    },
  ],
};
