import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-proportionnalite-vitesse",
  subject: "maths",
  grade: "4e",
  num: 6,
  title: "Proportionnalité et vitesse",
  domain: "donnees",
  icon: "Gauge",
  teaser: "Produit en croix, pourcentages, vitesse moyenne : la proportionnalité passe à la vitesse supérieure.",
  objectives: [
    "Je sais calculer une quatrième proportionnelle, notamment avec le produit en croix",
    "Je sais appliquer un pourcentage, une augmentation ou une diminution",
    "Je sais calculer une vitesse moyenne avec v = d/t et convertir des km/h en m/s",
    "Je sais utiliser une échelle de carte ou de plan",
  ],
  lesson: [
    {
      title: "La quatrième proportionnelle et le produit en croix",
      paragraphs: [
        "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant par un même nombre, le coefficient de proportionnalité.",
        "Quand trois valeurs d'un tableau de proportionnalité sont connues, la quatrième s'appelle la quatrième proportionnelle. Nouveauté de 4e : le produit en croix. Dans un tableau de proportionnalité, les produits en diagonale sont égaux : si a/b = c/d, alors a × d = b × c.",
        "Pour trouver la valeur manquante, on multiplie les deux nombres de la diagonale complète, puis on divise par le troisième nombre.",
      ],
      example: [
        "7 cahiers coûtent 10,50 €. Prix de 5 cahiers ? Produit en croix : (5 × 10,50) ÷ 7 = 52,50 ÷ 7 = 7,50 €.",
        "3 kg de pommes coûtent 6 €, donc le coefficient est 6 ÷ 3 = 2 €/kg : 5 kg coûtent 5 × 2 = 10 €.",
      ],
      tip: "Le produit en croix marche toujours, mais garde l'œil ouvert : quand le coefficient est évident (comme 2 €/kg), le calcul direct est plus rapide.",
    },
    {
      title: "Pourcentages : appliquer, augmenter, diminuer",
      paragraphs: [
        "Appliquer un pourcentage, c'est multiplier par la fraction correspondante : prendre 20 % d'une quantité, c'est la multiplier par 20/100 = 0,20.",
        "Pour une augmentation, on calcule la hausse puis on l'ajoute au prix de départ. Pour une diminution, on calcule la baisse puis on la soustrait.",
        "Attention, un pourcentage porte toujours sur la valeur de départ : « +20 % puis −20 % » ne ramène pas au prix initial, car les 20 % ne portent pas sur le même nombre.",
      ],
      example: [
        "20 % de 60 € : 60 × 20/100 = 12 €.",
        "Un article à 45 € augmente de 20 % : hausse de 45 × 0,20 = 9 €, nouveau prix 45 + 9 = 54 €.",
        "Un jean à 80 € est soldé à −30 % : baisse de 80 × 0,30 = 24 €, prix soldé 80 − 24 = 56 €.",
      ],
      tip: "50 % = la moitié, 25 % = le quart, 10 % = un dixième : ces repères permettent de vérifier mentalement presque tous les calculs de pourcentages.",
    },
    {
      title: "La vitesse moyenne",
      paragraphs: [
        "La vitesse moyenne est le quotient de la distance parcourue par la durée du trajet : v = d/t. Si d est en kilomètres et t en heures, v s'exprime en kilomètres par heure (km/h).",
        "La formule se retourne dans tous les sens : d = v × t pour trouver une distance, et t = d/v pour trouver une durée.",
        "Piège des durées : 1 h 30 min n'est pas 1,30 h ! Il faut convertir les minutes en fraction d'heure : 30 min = 0,5 h, donc 1 h 30 min = 1,5 h.",
      ],
      example: [
        "150 km parcourus en 3 h : v = 150 ÷ 3 = 50 km/h.",
        "À 90 km/h pendant 2 h 30 min (= 2,5 h) : d = 90 × 2,5 = 225 km.",
        "Un cycliste roule à 45 km en 1 h 30 min (= 1,5 h) : v = 45 ÷ 1,5 = 30 km/h.",
      ],
      tip: "Convertis TOUJOURS la durée en heures décimales avant de calculer : 15 min = 0,25 h ; 30 min = 0,5 h ; 45 min = 0,75 h.",
    },
    {
      title: "Convertir les vitesses : km/h et m/s",
      paragraphs: [
        "En sciences, les vitesses s'expriment souvent en mètres par seconde (m/s). Pour convertir, reviens aux définitions : 1 km = 1 000 m et 1 h = 3 600 s.",
        "De km/h vers m/s : on multiplie par 1 000 puis on divise par 3 600, ce qui revient à diviser par 3,6.",
        "De m/s vers km/h : on fait l'inverse, on multiplie par 3,6.",
      ],
      example: [
        "72 km/h = 72 000 m / 3 600 s = 20 m/s.",
        "25 m/s = 25 × 3,6 = 90 km/h.",
        "Un sprinteur à 10 m/s court à 36 km/h.",
      ],
      tip: "Retiens le nombre magique 3,6 : km/h → m/s on divise par 3,6 ; m/s → km/h on multiplie par 3,6. Le m/s est la « grande » unité : à nombre égal, 10 m/s est bien plus rapide que 10 km/h.",
    },
    {
      title: "Les échelles",
      paragraphs: [
        "Sur une carte ou un plan, les distances sont proportionnelles aux distances réelles. L'échelle est le coefficient : échelle = distance sur la carte ÷ distance réelle, les deux dans la MÊME unité.",
        "Une échelle de 1/25 000 signifie que 1 cm sur la carte représente 25 000 cm dans la réalité, soit 250 m.",
        "Pour passer de la carte à la réalité, on multiplie par le dénominateur de l'échelle ; pour passer de la réalité à la carte, on divise.",
      ],
      example: [
        "Carte au 1/25 000 : 4 cm sur la carte représentent 4 × 25 000 = 100 000 cm = 1 km.",
        "Plan au 1/200 : un mur de 6 m (600 cm) est dessiné avec 600 ÷ 200 = 3 cm.",
      ],
      tip: "Travaille d'abord tout en centimètres, puis convertis à la fin : 100 000 cm → 1 000 m → 1 km. Les conversions en chaîne évitent les erreurs de zéros.",
    },
  ],
  exercises: [
    {
      id: "m4pro-1",
      level: 1,
      type: "qcm",
      question: "3 kg de pommes coûtent 6 €. Combien coûtent 5 kg de ces pommes ?",
      choices: ["10 €", "9 €", "12 €", "8 €"],
      answer: 0,
      explanation:
        "Le prix est proportionnel à la masse. Coefficient : 6 ÷ 3 = 2 €/kg. Donc 5 kg coûtent 5 × 2 = 10 €. On peut aussi faire le produit en croix : (5 × 6) ÷ 3 = 10. Piège : 8 € viendrait d'un raisonnement additif (5 = 3 + 2 donc 6 + 2), qui est faux en proportionnalité.",
      hint: "Trouve d'abord le prix d'un seul kilogramme.",
    },
    {
      id: "m4pro-2",
      level: 1,
      type: "input",
      question: "Calcule 20 % de 60.",
      answer: "12",
      accept: [],
      explanation:
        "Prendre 20 %, c'est multiplier par 20/100 = 0,20 : 60 × 0,20 = 12. Autre méthode : 10 % de 60 vaut 6, donc 20 % vaut le double, 12.",
      hint: "20 % = 20/100. Multiplie 60 par cette fraction.",
    },
    {
      id: "m4pro-3",
      level: 1,
      type: "truefalse",
      question: "Dans un tableau de proportionnalité, on passe de la première ligne à la seconde en multipliant toujours par le même nombre.",
      answer: true,
      explanation:
        "Vrai ! C'est la définition même de la proportionnalité : un coefficient unique relie les deux lignes. Si une seule colonne ne respecte pas ce coefficient, le tableau n'est pas un tableau de proportionnalité.",
    },
    {
      id: "m4pro-4",
      level: 1,
      type: "qcm",
      question: "Une voiture parcourt 150 km en 3 h. Quelle est sa vitesse moyenne ?",
      choices: ["50 km/h", "450 km/h", "147 km/h", "45 km/h"],
      answer: 0,
      explanation:
        "La vitesse moyenne est le quotient de la distance par la durée : v = d/t = 150 ÷ 3 = 50 km/h. Piège : 450 correspond à une multiplication et 147 à une soustraction ; la vitesse est toujours une DIVISION.",
      hint: "v = distance ÷ durée.",
    },
    {
      id: "m4pro-5",
      level: 2,
      type: "input",
      question: "7 cahiers identiques coûtent 10,50 €. Combien coûtent 5 de ces cahiers, en € ?",
      answer: "7,5",
      accept: ["7,50", "7,50 €", "7,5 €"],
      explanation:
        "Produit en croix : prix de 5 cahiers = (5 × 10,50) ÷ 7 = 52,50 ÷ 7 = 7,50 €. Autre chemin : un cahier coûte 10,50 ÷ 7 = 1,50 €, donc 5 cahiers coûtent 5 × 1,50 = 7,50 €. Les deux méthodes se valent, choisis la plus confortable.",
      hint: "Multiplie en diagonale, puis divise par le troisième nombre.",
    },
    {
      id: "m4pro-6",
      level: 2,
      type: "input",
      question: "Un jeu vidéo coûte 45 €. Son prix augmente de 20 %. Quel est le nouveau prix, en € ?",
      answer: "54",
      accept: ["54 €"],
      explanation:
        "Étape 1 : la hausse. 20 % de 45 € : 45 × 0,20 = 9 €. Étape 2 : on ajoute au prix de départ : 45 + 9 = 54 €. Piège : la réponse n'est pas 9 € ! L'énoncé demande le NOUVEAU prix, pas le montant de l'augmentation.",
      hint: "Calcule d'abord le montant de la hausse, puis ajoute-le au prix initial.",
    },
    {
      id: "m4pro-7",
      level: 2,
      type: "qcm",
      question: "Un jean coûte 80 €. Pendant les soldes, il est remisé de 30 %. Quel est son prix soldé ?",
      choices: ["56 €", "50 €", "24 €", "110 €"],
      answer: 0,
      explanation:
        "La remise vaut 30 % de 80 € : 80 × 0,30 = 24 €. Le prix soldé est 80 − 24 = 56 €. Piège : 24 € est le montant de la remise, pas le prix payé ; et 50 € viendrait de la soustraction directe 80 − 30, qui mélange euros et pourcentages.",
      hint: "Une remise se calcule sur le prix de départ, puis se soustrait.",
    },
    {
      id: "m4pro-8",
      level: 2,
      type: "input",
      question: "Une voiture roule à la vitesse moyenne de 90 km/h pendant 2 h 30 min. Quelle distance parcourt-elle, en km ?",
      answer: "225",
      accept: ["225 km"],
      explanation:
        "On convertit d'abord la durée : 2 h 30 min = 2,5 h (30 min = 0,5 h). Puis d = v × t = 90 × 2,5 = 225 km. Piège : calculer avec 2,30 au lieu de 2,5 est l'erreur la plus fréquente ; 30 minutes, c'est la moitié d'une heure.",
      hint: "Convertis 2 h 30 min en heures décimales avant de multiplier.",
    },
    {
      id: "m4pro-9",
      level: 3,
      type: "input",
      question: "Convertis 72 km/h en m/s.",
      answer: "20",
      accept: ["20 m/s"],
      explanation:
        "72 km/h, c'est 72 000 m parcourus en 3 600 s : 72 000 ÷ 3 600 = 20 m/s. Raccourci : diviser par 3,6, et 72 ÷ 3,6 = 20. Piège : ne divise pas par 3,6 dans le mauvais sens ; le nombre en m/s est toujours PLUS PETIT que le nombre en km/h.",
      hint: "1 km = 1 000 m et 1 h = 3 600 s, ou plus vite : divise par 3,6.",
    },
    {
      id: "m4pro-10",
      level: 3,
      type: "qcm",
      question: "Un guépard court à 25 m/s. Quelle est sa vitesse en km/h ?",
      choices: ["90 km/h", "25 km/h", "250 km/h", "6,9 km/h"],
      answer: 0,
      explanation:
        "De m/s vers km/h, on multiplie par 3,6 : 25 × 3,6 = 90 km/h. Vérification par le sens : en une heure (3 600 s), le guépard parcourt 25 × 3 600 = 90 000 m = 90 km. Piège : 6,9 correspond à une division par 3,6, c'est la conversion dans le mauvais sens.",
      hint: "De m/s vers km/h : multiplie par 3,6.",
    },
    {
      id: "m4pro-11",
      level: 3,
      type: "input",
      question:
        "Sur une carte à l'échelle 1/25 000, deux villages sont distants de 4 cm. Quelle est la distance réelle entre eux, en km ?",
      answer: "1",
      accept: ["1 km"],
      explanation:
        "1 cm sur la carte représente 25 000 cm dans la réalité. Distance réelle : 4 × 25 000 = 100 000 cm. On convertit : 100 000 cm = 1 000 m = 1 km. Piège : la conversion finale ! Beaucoup s'arrêtent à 100 000 cm sans passer aux kilomètres demandés.",
      hint: "Multiplie par 25 000, puis convertis les centimètres en kilomètres.",
    },
    {
      id: "m4pro-12",
      level: 3,
      type: "input",
      question:
        "Une cycliste parcourt 45 km en 1 h 30 min. Quelle est sa vitesse moyenne, en km/h ?",
      answer: "30",
      accept: ["30 km/h"],
      explanation:
        "On convertit la durée : 1 h 30 min = 1,5 h. Puis v = d/t = 45 ÷ 1,5 = 30 km/h. Vérification : à 30 km/h, elle fait 30 km en 1 h puis 15 km en 30 min, soit bien 45 km. Piège : diviser par 1,30 donnerait un résultat faux ; la conversion de la durée est l'étape décisive.",
      hint: "1 h 30 min = 1,5 h, puis divise la distance par la durée.",
    },
  ],
};
