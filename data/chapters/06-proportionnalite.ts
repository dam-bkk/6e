import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "proportionnalite",
  num: 6,
  title: "La proportionnalité",
  domain: "donnees",
  icon: "Scale",
  teaser: "Recettes, prix, vitesses : apprends à raisonner « en proportion » comme un pro.",
  objectives: [
    "Je sais reconnaître une situation de proportionnalité (et repérer celles qui n'en sont pas)",
    "Je sais compléter un tableau de proportionnalité avec son coefficient",
    "Je sais utiliser le passage par l'unité",
    "Je sais utiliser les propriétés de linéarité (ajouter, multiplier)",
    "Je connais les pourcentages simples : 50 %, 25 %, 10 %",
    "Je sais résoudre des problèmes concrets de proportionnalité",
  ],
  lesson: [
    {
      title: "Proportionnel ou pas ?",
      paragraphs: [
        "Deux grandeurs sont proportionnelles quand, si l'une est multipliée par un nombre, l'autre est multipliée par le même nombre. Exemple : si une baguette coûte 1,20 €, alors 2 baguettes coûtent 2 fois plus, 5 baguettes coûtent 5 fois plus. Le prix est proportionnel au nombre de baguettes.",
        "Beaucoup de situations ne sont PAS proportionnelles ! La taille n'est pas proportionnelle à l'âge : à 10 ans on ne mesure pas 2 fois plus qu'à 5 ans, et à 40 ans on ne mesure pas 4 fois plus qu'à 10 ans. Avant de calculer, demande-toi toujours si le raisonnement « fois 2, fois 3… » a du sens.",
      ],
      example: [
        "Proportionnel : le prix de l'essence selon le nombre de litres.",
        "Pas proportionnel : la taille d'une personne selon son âge, ou la note d'un contrôle selon le temps passé à réviser.",
      ],
      tip: "Le test de la double dose : « si je prends 2 fois plus de l'un, est-ce que j'obtiens forcément 2 fois plus de l'autre ? ». Si la réponse est non, ce n'est pas de la proportionnalité.",
    },
    {
      title: "Le tableau de proportionnalité et son coefficient",
      paragraphs: [
        "On range souvent une situation de proportionnalité dans un tableau à deux lignes. S'il y a proportionnalité, on passe de la première ligne à la seconde en multipliant toujours par le MÊME nombre : le coefficient de proportionnalité.",
        "Ce coefficient a souvent un sens concret : si on passe du nombre de kilos au prix en multipliant par 3, c'est que le kilo coûte 3 €.",
      ],
      example: [
        "Nombre de cahiers :  2 | 5 | 8",
        "Prix en € :          5 | 12,50 | 20",
        "Le coefficient est 2,5 : chaque prix est le nombre de cahiers × 2,5. Un cahier coûte donc 2,50 €.",
      ],
      tip: "Pour trouver le coefficient, divise un nombre de la deuxième ligne par le nombre juste au-dessus. Vérifie ensuite avec une autre colonne : le résultat doit être le même !",
    },
    {
      title: "Le passage par l'unité",
      paragraphs: [
        "C'est la méthode la plus naturelle : on commence par calculer la valeur pour UNE unité (1 stylo, 1 kg, 1 personne…), puis on multiplie par le nombre voulu.",
        "Cette méthode marche dans toutes les situations de proportionnalité, même quand les nombres ne s'arrangent pas bien entre eux.",
      ],
      example: [
        "4 stylos coûtent 6 €. Combien coûtent 7 stylos ?",
        "1 stylo : 6 ÷ 4 = 1,50 €.",
        "7 stylos : 1,50 × 7 = 10,50 €.",
      ],
      tip: "Passage par l'unité = « d'abord pour 1, ensuite pour tous ». Deux étapes : une division, puis une multiplication.",
    },
    {
      title: "Les propriétés de linéarité",
      paragraphs: [
        "Dans un tableau de proportionnalité, on peut aussi raisonner de colonne en colonne, sans calculer le coefficient.",
        "Multiplication : si 5 kg de pommes coûtent 8 €, alors 10 kg (2 fois plus) coûtent 16 € (2 fois plus).",
        "Addition : on peut aussi additionner deux colonnes. Si 5 kg coûtent 8 € et 10 kg coûtent 16 €, alors 15 kg (c'est 5 + 10) coûtent 8 + 16 = 24 €.",
      ],
      example: [
        "Pour 4 personnes, une recette demande 300 g de riz.",
        "Pour 2 personnes (÷ 2) : 150 g.",
        "Pour 6 personnes (4 + 2) : 300 + 150 = 450 g.",
      ],
      tip: "Regarde toujours les nombres de l'énoncé avant de te lancer : souvent, un simple « fois 2 », « moitié » ou une addition de colonnes suffit, sans aucune division compliquée.",
    },
    {
      title: "Les pourcentages simples",
      paragraphs: [
        "« Pour cent » signifie « sur 100 ». Prendre 50 % d'une quantité, c'est en prendre 50 sur 100, c'est-à-dire la moitié. De même, 25 % c'est le quart, 10 % c'est le dixième, et 100 % c'est la totalité.",
        "Ces pourcentages-là se calculent de tête : 50 % de 18, c'est 18 ÷ 2 = 9. Et 10 % de 250, c'est 250 ÷ 10 = 25.",
      ],
      example: [
        "50 % de 40 € = 20 € (la moitié).",
        "25 % de 40 € = 10 € (le quart).",
        "10 % de 40 € = 4 € (le dixième).",
      ],
      tip: "Mémorise le trio magique : 50 % = ÷ 2, 25 % = ÷ 4, 10 % = ÷ 10. Avec ces trois-là, tu peux déjà résoudre presque tous les problèmes de 6e.",
    },
  ],
  exercises: [
    {
      id: "pro-1",
      level: 1,
      type: "qcm",
      question: "Laquelle de ces situations est une situation de proportionnalité ?",
      choices: [
        "Le prix payé selon le nombre de baguettes achetées",
        "La taille d'un enfant selon son âge",
        "La note d'un contrôle selon le temps de révision",
      ],
      answer: 0,
      explanation:
        "Si une baguette coûte 1,20 €, deux baguettes coûtent exactement 2 fois plus : le prix est proportionnel au nombre de baguettes. En revanche, un enfant de 12 ans ne mesure pas 2 fois plus qu'à 6 ans, et réviser 2 fois plus longtemps ne garantit pas une note 2 fois meilleure. Ces deux situations ne suivent pas la règle « fois 2 → fois 2 ».",
      hint: "Teste chaque situation avec la question : « 2 fois plus de l'un, est-ce forcément 2 fois plus de l'autre ? »",
    },
    {
      id: "pro-2",
      level: 1,
      type: "input",
      question: "Un croissant coûte 1,20 €. Combien coûtent 5 croissants, en euros ?",
      answer: "6",
      explanation:
        "Le prix est proportionnel au nombre de croissants : 5 croissants coûtent 5 fois le prix d'un croissant. Calcul : 1,20 × 5 = 6. Les 5 croissants coûtent 6 €. Astuce de calcul : 1,20 × 5 = 1 × 5 + 0,20 × 5 = 5 + 1 = 6.",
      hint: "5 croissants coûtent 5 fois plus qu'un seul.",
    },
    {
      id: "pro-3",
      level: 1,
      type: "truefalse",
      question: "Si 2 kg de pommes coûtent 5 €, alors 4 kg de pommes coûtent 10 €.",
      answer: true,
      explanation:
        "Vrai ! Le prix est proportionnel à la masse achetée. 4 kg, c'est 2 fois plus que 2 kg, donc le prix est aussi multiplié par 2 : 5 × 2 = 10 €. C'est la propriété de multiplication de la proportionnalité.",
    },
    {
      id: "pro-4",
      level: 1,
      type: "qcm",
      question: "Combien font 50 % de 18 ?",
      choices: ["9", "5", "36", "8"],
      answer: 0,
      explanation:
        "50 %, c'est 50 sur 100, autrement dit la moitié. La moitié de 18 est 18 ÷ 2 = 9. Piège : 50 % de 18 n'est pas 5 ! Le pourcentage n'est pas un nombre à recopier, c'est une fraction du total.",
      hint: "50 %, c'est la moitié.",
    },
    {
      id: "pro-5",
      level: 2,
      type: "input",
      question:
        "3 cahiers identiques coûtent 7,50 €. Quel est le coefficient de proportionnalité qui fait passer du nombre de cahiers au prix en euros ?",
      answer: "2,5",
      accept: ["2,50"],
      explanation:
        "Le coefficient s'obtient en divisant le prix par le nombre de cahiers : 7,50 ÷ 3 = 2,5. Ce coefficient a un sens concret : c'est le prix d'UN cahier, 2,50 €. Pour n'importe quel nombre de cahiers, il suffira ensuite de multiplier par 2,5.",
      hint: "Divise le prix par le nombre de cahiers.",
    },
    {
      id: "pro-6",
      level: 2,
      type: "input",
      question: "4 stylos coûtent 6 €. Combien coûtent 7 stylos, en euros ?",
      answer: "10,50",
      accept: ["10,5"],
      explanation:
        "On passe par l'unité. Prix d'un stylo : 6 ÷ 4 = 1,50 €. Prix de 7 stylos : 1,50 × 7 = 10,50 €. Le passage par l'unité fonctionne toujours, même quand on ne peut pas passer directement de 4 à 7 par une multiplication simple.",
      hint: "Commence par calculer le prix d'un seul stylo.",
    },
    {
      id: "pro-7",
      level: 2,
      type: "qcm",
      question:
        "Au marché, 5 kg de pommes de terre coûtent 8 € et 10 kg coûtent 16 €. Combien coûtent 15 kg ?",
      choices: ["20 €", "24 €", "26 €", "32 €"],
      answer: 1,
      explanation:
        "15 kg = 5 kg + 10 kg. Dans une situation de proportionnalité, on peut additionner les colonnes : le prix de 15 kg est donc 8 + 16 = 24 €. C'est la propriété d'additivité, qui évite ici tout calcul de coefficient. Vérification : le kilo coûte 8 ÷ 5 = 1,60 €, et 1,60 × 15 = 24 €.",
      hint: "15, c'est 5 + 10. Que peux-tu faire avec les prix ?",
    },
    {
      id: "pro-8",
      level: 2,
      type: "truefalse",
      question: "Prendre 25 % d'une quantité, c'est la même chose que prendre le quart de cette quantité.",
      answer: true,
      explanation:
        "Vrai ! 25 %, c'est 25 sur 100, soit 25/100. En simplifiant par 25, on obtient 1/4. Prendre 25 %, c'est donc bien diviser par 4. Exemple : 25 % de 80 = 80 ÷ 4 = 20.",
    },
    {
      id: "pro-9",
      level: 3,
      type: "input",
      question:
        "Une recette de gâteau pour 4 personnes demande 300 g de riz. Quelle masse de riz, en grammes, faut-il pour 6 personnes ?",
      answer: "450",
      explanation:
        "6 n'est pas un multiple de 4, mais on peut décomposer : 6 = 4 + 2. Pour 4 personnes : 300 g. Pour 2 personnes (2 fois moins que 4) : 300 ÷ 2 = 150 g. Pour 6 personnes : 300 + 150 = 450 g. Piège classique : ne surtout pas répondre 300 + 2 ou 300 × 6 ! On combine une moitié et une addition de colonnes.",
      hint: "6 personnes, c'est 4 personnes + 2 personnes. Et 2, c'est la moitié de 4.",
    },
    {
      id: "pro-10",
      level: 3,
      type: "qcm",
      question:
        "Paul mesure 140 cm à 10 ans. Peut-on en déduire qu'il mesurera 280 cm à 20 ans ?",
      choices: [
        "Oui, car 20 ans = 10 ans × 2, donc 140 × 2 = 280 cm",
        "Non, car la taille n'est pas proportionnelle à l'âge",
        "Oui, à condition qu'il grandisse régulièrement",
      ],
      answer: 1,
      explanation:
        "La taille d'une personne n'est PAS proportionnelle à son âge : la croissance ralentit puis s'arrête. 280 cm, ce serait plus grand que tous les humains ayant jamais existé ! C'est LE contre-exemple à retenir : avant d'appliquer un « fois 2 », vérifie toujours que la situation est bien proportionnelle. Ici, le calcul est juste, mais le raisonnement est faux dès le départ.",
      hint: "Connais-tu des adultes qui mesurent 2 fois plus qu'un enfant de 10 ans ?",
    },
    {
      id: "pro-11",
      level: 3,
      type: "input",
      question:
        "Un jeu vidéo coûte 40 €. Le magasin fait une réduction de 25 %. Quel est le nouveau prix, en euros ?",
      answer: "30",
      explanation:
        "25 % = un quart. La réduction vaut donc 40 ÷ 4 = 10 €. Nouveau prix : 40 − 10 = 30 €. Piège classique : la question demande le nouveau PRIX, pas le montant de la réduction ! Répondre 10 serait s'arrêter en chemin.",
      hint: "Calcule d'abord le montant de la réduction, puis enlève-le du prix.",
    },
    {
      id: "pro-12",
      level: 3,
      type: "truefalse",
      question:
        "Un cycliste roule à allure régulière : il parcourt 24 km en 2 heures. On peut affirmer qu'il parcourt 36 km en 3 heures.",
      answer: true,
      explanation:
        "Vrai, mais uniquement parce que l'allure est régulière : la distance est alors proportionnelle à la durée. En 1 heure : 24 ÷ 2 = 12 km. En 3 heures : 12 × 3 = 36 km. Attention : sans la précision « allure régulière », on ne pourrait rien affirmer, car un vrai cycliste accélère, ralentit et s'arrête !",
      hint: "Commence par la distance parcourue en 1 heure.",
    },
  ],
  videos: [
    { title: "Reconnaitre la proportionnalité (1) - Sixième", youtubeId: "QgjbpX_kciA", channel: "Yvan Monka" },
    { title: "Appliquer une situation de proportionnalité (2) - Sixième", youtubeId: "H2WLKZ3VNqc", channel: "Yvan Monka" },
  ],
};
