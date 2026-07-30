import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-proportionnalite",
  subject: "maths",
  grade: "5e",
  num: 6,
  title: "Proportionnalité",
  domain: "donnees",
  icon: "Scale",
  teaser: "Prix, recettes, cartes, vitesses : l'outil le plus utile du quotidien.",
  objectives: [
    "Je sais reconnaître une situation de proportionnalité",
    "Je sais utiliser le coefficient de proportionnalité et le passage à l'unité",
    "Je sais appliquer un pourcentage et calculer un taux simple",
    "Je sais utiliser une échelle de carte",
    "Je découvre la vitesse moyenne",
  ],
  lesson: [
    {
      title: "Reconnaître la proportionnalité",
      paragraphs: [
        "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre. Trois baguettes coûtent trois fois le prix d'une baguette : quantité et prix sont proportionnels.",
        "Tout n'est pas proportionnel ! L'âge et la taille d'une personne ne le sont pas : on ne mesure pas 2 fois plus à 20 ans qu'à 10 ans.",
        "Dans un tableau, on vérifie la proportionnalité en testant si tous les quotients (nombre du bas ÷ nombre du haut) sont égaux.",
      ],
      example: [
        "2 kg de pommes coûtent 5 €, 4 kg coûtent 10 €, 6 kg coûtent 15 € : les quotients 5 ÷ 2, 10 ÷ 4 et 15 ÷ 6 valent tous 2,5. C'est proportionnel.",
        "Contre-exemple : un forfait téléphone à 10 € + 1 € par heure. 1 h coûte 11 €, 2 h coûtent 12 € : 12 n'est pas le double de 11, pas de proportionnalité.",
      ],
      tip: "Le test le plus rapide : « si je double l'une, l'autre double-t-elle aussi ? ». Si la réponse est non, inutile d'aller plus loin.",
    },
    {
      title: "Coefficient et passage à l'unité",
      paragraphs: [
        "Le coefficient de proportionnalité est le nombre par lequel on multiplie pour passer de la première grandeur à la seconde. Si 4 kg coûtent 10 €, le coefficient est 10 ÷ 4 = 2,5 : c'est le prix d'un kilogramme.",
        "Le passage à l'unité est la méthode reine en 5e : on calcule d'abord la valeur pour 1 (1 kg, 1 objet, 1 heure), puis on multiplie par la quantité voulue.",
        "Ces deux méthodes sont sœurs : le coefficient EST la valeur à l'unité. Bien les maîtriser rend tous les problèmes de proportionnalité accessibles.",
      ],
      example: [
        "5 croissants coûtent 6 €. Prix d'un croissant : 6 ÷ 5 = 1,20 €. Prix de 8 croissants : 8 × 1,20 = 9,60 €.",
      ],
      tip: "En cas de doute, reviens toujours à 1 : « combien pour UN ? ». C'est la question qui débloque presque tous les énoncés.",
    },
    {
      title: "Les pourcentages",
      paragraphs: [
        "Un pourcentage est une proportion exprimée sur 100 : « 20 % des élèves » signifie « 20 élèves sur 100 ». Appliquer t % à une quantité, c'est la multiplier par t/100.",
        "Ainsi, 20 % de 45 € : 45 × 20/100 = 9 €. Repères utiles : 50 % = la moitié, 25 % = le quart, 10 % = le dixième.",
        "Calculer un taux, c'est le chemin inverse : quelle proportion sur 100 ? Si 12 élèves sur 30 mangent à la cantine, la proportion est 12/30 = 4/10 = 40/100, soit 40 %.",
      ],
      example: [
        "20 % de 45 € = 9 €.",
        "Une remise de 25 % sur 40 € : 40 ÷ 4 = 10 € de remise, prix soldé 30 €.",
        "12 élèves sur 30 : 12/30 = 40/100 = 40 %.",
      ],
      tip: "Combine les repères : 20 % = 10 % × 2. Pour 20 % de 45, calcule 10 % (4,50) puis double (9). Rapide et sans calculatrice.",
    },
    {
      title: "Les échelles",
      paragraphs: [
        "Sur une carte, les distances sont proportionnelles aux distances réelles. L'échelle 1/100 000 signifie : 1 cm sur la carte représente 100 000 cm dans la réalité, soit 1 km.",
        "Pour passer de la carte à la réalité, on multiplie par le nombre de l'échelle ; pour passer de la réalité à la carte, on divise. Attention aux conversions d'unités : le résultat en cm doit souvent être converti en m ou en km.",
      ],
      example: [
        "Échelle 1/100 000 : 3 cm sur la carte représentent 3 × 100 000 = 300 000 cm = 3 000 m = 3 km.",
        "Échelle 1/50 : un plan de maison où 1 cm représente 50 cm réels.",
      ],
      tip: "Retiens la conversion star des cartes : 100 000 cm = 1 km. Avec elle, l'échelle 1/100 000 se lit directement « 1 cm = 1 km ».",
    },
    {
      title: "La vitesse moyenne (découverte)",
      paragraphs: [
        "Quand on roule à allure régulière, la distance parcourue est proportionnelle à la durée du trajet. La vitesse moyenne est le coefficient de proportionnalité : la distance parcourue en 1 heure.",
        "Un cycliste qui parcourt 60 km en 3 heures roule en moyenne à 60 ÷ 3 = 20 km/h. C'est encore un passage à l'unité : combien de kilomètres pour UNE heure ?",
      ],
      example: [
        "150 km en 2 h : vitesse moyenne 150 ÷ 2 = 75 km/h.",
        "À 20 km/h pendant 4 h, on parcourt 20 × 4 = 80 km.",
      ],
      tip: "km/h se lit « kilomètres PAR heure » : le mot « par » te rappelle la division distance ÷ durée.",
    },
  ],
  exercises: [
    {
      id: "m5pro-1",
      level: 1,
      type: "qcm",
      question: "Trois baguettes identiques coûtent 3,60 €. Combien coûte une baguette ?",
      choices: ["1,20 €", "1,60 €", "0,60 €", "1,80 €"],
      answer: 0,
      explanation:
        "Passage à l'unité : 3,60 ÷ 3 = 1,20. Une baguette coûte 1,20 €. Le prix est proportionnel au nombre de baguettes : diviser la quantité par 3 divise le prix par 3.",
      hint: "Divise le prix total par le nombre de baguettes.",
    },
    {
      id: "m5pro-2",
      level: 1,
      type: "truefalse",
      question: "L'âge et la taille d'une personne sont des grandeurs proportionnelles.",
      answer: false,
      explanation:
        "Faux ! Si c'était proportionnel, on serait deux fois plus grand à 20 ans qu'à 10 ans, et un bébé de 1 an mesurerait 20 fois moins qu'un adulte de 20 ans. La taille augmente avec l'âge, mais pas en multipliant par un coefficient fixe.",
    },
    {
      id: "m5pro-3",
      level: 1,
      type: "input",
      question: "Un stylo coûte 2 €. Combien coûtent 7 stylos identiques (en €) ?",
      answer: "14",
      explanation:
        "Le prix est proportionnel au nombre de stylos : 7 × 2 = 14 €. Le coefficient de proportionnalité est ici 2 (le prix d'un stylo).",
      hint: "Multiplie le prix d'un stylo par 7.",
    },
    {
      id: "m5pro-4",
      level: 1,
      type: "qcm",
      question:
        "Dans un tableau de proportionnalité, comment passe-t-on de la première ligne à la seconde ?",
      choices: [
        "En ajoutant toujours le même nombre",
        "En multipliant toujours par le même nombre",
        "En multipliant par un nombre qui change à chaque colonne",
      ],
      answer: 1,
      explanation:
        "C'est la définition : dans un tableau de proportionnalité, on multiplie chaque nombre de la première ligne par le même coefficient pour obtenir la seconde ligne. Une addition constante ne crée pas de proportionnalité (c'est le piège du forfait à prix fixe + supplément).",
      hint: "Que fait le « coefficient de proportionnalité » ?",
    },
    {
      id: "m5pro-5",
      level: 2,
      type: "input",
      question: "Cinq croissants coûtent 6 €. Combien coûtent 8 croissants (en €) ?",
      answer: "9,60",
      accept: ["9,6"],
      explanation:
        "Passage à l'unité : un croissant coûte 6 ÷ 5 = 1,20 €. Puis 8 croissants coûtent 8 × 1,20 = 9,60 €. Deux étapes : diviser pour trouver l'unité, multiplier pour la quantité voulue.",
      hint: "Commence par le prix d'UN croissant.",
    },
    {
      id: "m5pro-6",
      level: 2,
      type: "qcm",
      question: "Que valent 20 % de 45 € ?",
      choices: ["9 €", "20 €", "4,50 €", "25 €"],
      answer: 0,
      explanation:
        "20 % de 45, c'est 45 × 20/100 = 9. Méthode rapide : 10 % de 45 = 4,50 €, et 20 % = 2 × 4,50 = 9 €.",
      hint: "Calcule d'abord 10 % de 45, puis double.",
    },
    {
      id: "m5pro-7",
      level: 2,
      type: "input",
      question:
        "Dans un tableau de proportionnalité, 4 kg de pommes coûtent 10 €. Quel est le coefficient de proportionnalité (le prix d'un kg, en €) ?",
      answer: "2,5",
      accept: ["2,50"],
      explanation:
        "Le coefficient s'obtient en divisant : 10 ÷ 4 = 2,5. Un kilogramme coûte 2,50 €. Ce coefficient permet ensuite de calculer n'importe quel prix : 6 kg coûtent 6 × 2,5 = 15 €.",
      hint: "Coefficient = prix ÷ masse.",
    },
    {
      id: "m5pro-8",
      level: 2,
      type: "truefalse",
      question: "Appliquer 50 % à une quantité, c'est en prendre la moitié.",
      answer: true,
      explanation:
        "Vrai ! 50 % = 50/100 = 1/2. Appliquer 50 %, c'est multiplier par 1/2, donc prendre la moitié. De même, 25 % = le quart et 10 % = le dixième : ces repères permettent de calculer de tête.",
    },
    {
      id: "m5pro-9",
      level: 3,
      type: "input",
      question:
        "Dans une classe, 12 élèves sur 30 mangent à la cantine. Quel pourcentage de la classe cela représente-t-il ? (nombre seul, sans le signe %)",
      answer: "40",
      accept: ["40%", "40 %"],
      explanation:
        "La proportion est 12/30. On la simplifie : 12/30 = 4/10, puis on passe sur 100 : 4/10 = 40/100, soit 40 %. Autre méthode : pour passer de 30 à 100, la fraction 12/30 = 40/100 s'obtient en cherchant combien font 12 « pour 100 ».",
      hint: "Écris la proportion 12/30, puis transforme-la en fraction sur 100.",
    },
    {
      id: "m5pro-10",
      level: 3,
      type: "qcm",
      question:
        "Sur une carte à l'échelle 1/100 000, deux villages sont séparés de 3 cm. Quelle est la distance réelle ?",
      choices: ["3 km", "30 km", "300 m", "100 km"],
      answer: 0,
      explanation:
        "1 cm sur la carte représente 100 000 cm dans la réalité. Donc 3 cm représentent 3 × 100 000 = 300 000 cm. Conversion : 300 000 cm = 3 000 m = 3 km. Retiens : à l'échelle 1/100 000, 1 cm = 1 km.",
      hint: "100 000 cm, ça fait combien en km ?",
    },
    {
      id: "m5pro-11",
      level: 3,
      type: "truefalse",
      question:
        "Un automobiliste qui parcourt 150 km en 2 heures roule à une vitesse moyenne de 75 km/h.",
      answer: true,
      explanation:
        "Vrai ! La vitesse moyenne est la distance parcourue en 1 heure : 150 ÷ 2 = 75 km/h. C'est un passage à l'unité : 2 h → 150 km, donc 1 h → 75 km.",
      hint: "Combien de kilomètres en UNE heure ?",
    },
    {
      id: "m5pro-12",
      level: 3,
      type: "input",
      question:
        "Un blouson coûte 40 €. Pendant les soldes, il est remisé de 25 %. Quel est son nouveau prix (en €) ?",
      answer: "30",
      explanation:
        "Étape 1 : la remise, 25 % de 40 € = 40 ÷ 4 = 10 € (25 % = le quart). Étape 2 : le nouveau prix, 40 − 10 = 30 €. Piège : la question demande le prix APRÈS remise, pas le montant de la remise !",
      hint: "Calcule d'abord le montant de la remise, puis soustrais-le du prix.",
    },
  ],
  videos: [
    { title: "Appliquer la proportionnalité (4 méthodes) - Cinquième", youtubeId: "O91-Dq06k0U", channel: "Yvan Monka" },
  ],
};
