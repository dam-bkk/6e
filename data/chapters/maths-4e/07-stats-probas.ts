import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-stats-probas",
  subject: "maths",
  grade: "4e",
  num: 7,
  title: "Statistiques et probabilités",
  domain: "donnees",
  icon: "BarChart3",
  teaser: "Résumer une série de nombres et prévoir le hasard : moyenne, médiane et arbres de probabilités.",
  objectives: [
    "Je sais calculer une moyenne pondérée en tenant compte des coefficients",
    "Je sais déterminer la médiane et l'étendue d'une série de données",
    "Je sais calculer la probabilité d'un événement et celle de son contraire",
    "Je sais utiliser un arbre pour une expérience aléatoire à deux épreuves",
  ],
  lesson: [
    {
      title: "La moyenne pondérée",
      paragraphs: [
        "Tu connais la moyenne simple : on additionne toutes les valeurs et on divise par leur nombre. Mais parfois, toutes les valeurs n'ont pas la même importance : un contrôle coefficient 3 compte trois fois plus qu'une interrogation coefficient 1.",
        "Pour calculer une moyenne pondérée, on multiplie chaque valeur par son coefficient, on additionne tous ces produits, puis on divise par la somme des coefficients (et non par le nombre de valeurs !).",
        "Un coefficient peut aussi être un effectif : si 12 élèves ont eu 14 et 8 élèves ont eu 11, la note 14 « pèse » 12 fois et la note 11 « pèse » 8 fois.",
      ],
      example: [
        "Notes : 12 coefficient 2 et 15 coefficient 3.",
        "Somme des produits : 12 × 2 + 15 × 3 = 24 + 45 = 69.",
        "Somme des coefficients : 2 + 3 = 5. Moyenne pondérée : 69 ÷ 5 = 13,8.",
      ],
      tip: "On divise toujours par la somme des coefficients, jamais par le nombre de notes. Vérifie : la moyenne doit se situer entre la plus petite et la plus grande valeur.",
    },
    {
      title: "La médiane d'une série",
      paragraphs: [
        "La médiane est la valeur qui partage une série ordonnée en deux groupes de même effectif : la moitié des valeurs lui sont inférieures ou égales, l'autre moitié supérieures ou égales.",
        "Méthode : range d'abord les valeurs dans l'ordre croissant. Si l'effectif est impair, la médiane est la valeur du milieu. Si l'effectif est pair, on prend n'importe quelle valeur entre les deux valeurs centrales, en général leur moyenne.",
        "La médiane est différente de la moyenne : elle n'est pas influencée par une valeur extrême. Si un élève a 0 et tous les autres 15, la moyenne baisse beaucoup, mais la médiane bouge à peine.",
      ],
      example: [
        "Série : 9 ; 15 ; 8 ; 12 ; 11. Ordonnée : 8 ; 9 ; 11 ; 12 ; 15.",
        "Cinq valeurs (impair) : la médiane est la 3e valeur, soit 11.",
        "Série : 6 ; 8 ; 10 ; 14 (pair) : la médiane est entre 8 et 10, soit 9.",
      ],
      tip: "Toujours ordonner la série avant de chercher la médiane ! C'est l'oubli numéro un dans les copies.",
    },
    {
      title: "L'étendue",
      paragraphs: [
        "L'étendue d'une série est la différence entre la plus grande valeur et la plus petite valeur. Elle mesure la dispersion : plus l'étendue est grande, plus les valeurs sont éparpillées.",
        "Deux séries peuvent avoir la même moyenne mais des étendues très différentes. Des notes 10 ; 10 ; 10 et des notes 0 ; 10 ; 20 ont toutes deux 10 de moyenne, mais l'étendue passe de 0 à 20.",
        "Pour bien résumer une série, on donne donc souvent trois indicateurs ensemble : la moyenne, la médiane et l'étendue.",
      ],
      example: [
        "Températures de la semaine : 5 ; 12 ; 9 ; 20 ; 7 (en °C).",
        "Plus grande valeur : 20. Plus petite valeur : 5.",
        "Étendue : 20 − 5 = 15 °C.",
      ],
      tip: "Étendue = maximum − minimum. C'est un seul calcul, mais repère bien le vrai maximum et le vrai minimum de la série.",
    },
    {
      title: "Probabilités et événement contraire",
      paragraphs: [
        "La probabilité d'un événement mesure ses chances de se produire : c'est un nombre entre 0 (impossible) et 1 (certain). Quand toutes les issues ont les mêmes chances, la probabilité d'un événement vaut : nombre d'issues favorables divisé par nombre d'issues possibles.",
        "L'événement contraire de A est l'événement « A ne se réalise pas ». Comme l'un des deux se produit forcément, leurs probabilités s'ajoutent pour donner 1 : P(contraire de A) = 1 − P(A).",
        "Cette formule est souvent le chemin le plus rapide : plutôt que de compter tous les cas favorables, on compte les cas défavorables et on soustrait de 1.",
      ],
      example: [
        "Un sac contient 3 boules rouges et 2 boules bleues : P(rouge) = 3/5.",
        "L'événement contraire de « tirer une rouge » est « tirer une bleue » : P(bleue) = 1 − 3/5 = 2/5.",
        "Si P(gagner) = 0,15 alors P(ne pas gagner) = 1 − 0,15 = 0,85.",
      ],
      tip: "P(A) + P(contraire de A) = 1, toujours. Si le calcul direct est long, passe par le contraire.",
    },
    {
      title: "Arbre à deux épreuves : la pièce lancée deux fois",
      paragraphs: [
        "Quand une expérience se déroule en deux étapes (lancer une pièce deux fois, tirer deux boules…), un arbre permet de lister toutes les issues sans en oublier.",
        "Pour une pièce lancée deux fois : au premier lancer, deux branches, Pile ou Face. De chacune repartent deux branches pour le deuxième lancer. On obtient 4 chemins : PP, PF, FP et FF.",
        "Si la pièce est équilibrée, ces 4 issues ont les mêmes chances : chacune a une probabilité de 1/4. Attention : « une fois Pile et une fois Face » correspond à DEUX chemins (PF et FP), donc sa probabilité vaut 2/4 = 1/2.",
      ],
      example: [
        "P(deux fois Pile) = P(chemin PP) = 1/4.",
        "P(exactement une fois Pile) = P(PF ou FP) = 2/4 = 1/2.",
        "P(au moins une fois Pile) = 1 − P(FF) = 1 − 1/4 = 3/4 (via le contraire !).",
      ],
      tip: "Un chemin de l'arbre = une issue. Compte les chemins favorables et divise par le nombre total de chemins.",
    },
  ],
  exercises: [
    {
      id: "m4sta-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la moyenne de la série de notes : 8 ; 12 ; 10 ; 14 ?",
      choices: ["11", "10", "12", "44"],
      answer: 0,
      explanation:
        "On additionne les quatre notes : 8 + 12 + 10 + 14 = 44. Puis on divise par le nombre de notes : 44 ÷ 4 = 11. Piège : 44 est la somme, pas la moyenne — il ne faut pas oublier la division.",
      hint: "Additionne les quatre notes, puis divise par 4.",
    },
    {
      id: "m4sta-2",
      level: 1,
      type: "input",
      question: "Calcule l'étendue de la série : 5 ; 12 ; 9 ; 20 ; 7",
      answer: "15",
      explanation:
        "L'étendue est la différence entre la plus grande et la plus petite valeur. Maximum : 20. Minimum : 5. Étendue : 20 − 5 = 15. Piège : on ne soustrait pas les deux premières valeurs de la liste, on cherche d'abord le maximum et le minimum.",
      hint: "Repère la plus grande valeur et la plus petite, puis soustrais.",
    },
    {
      id: "m4sta-3",
      level: 1,
      type: "truefalse",
      question: "La médiane d'une série partage la série ordonnée en deux groupes de même effectif.",
      answer: true,
      explanation:
        "Vrai ! C'est exactement la définition : la moitié des valeurs sont inférieures ou égales à la médiane, l'autre moitié supérieures ou égales. Condition indispensable : la série doit d'abord être rangée dans l'ordre croissant.",
    },
    {
      id: "m4sta-4",
      level: 1,
      type: "qcm",
      question: "Un sac contient 3 boules rouges et 2 boules bleues, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité de tirer une boule rouge ?",
      choices: ["3/5", "1/3", "3/2", "1/5"],
      answer: 0,
      explanation:
        "Il y a 5 boules en tout (issues possibles) et 3 boules rouges (issues favorables). P(rouge) = 3/5. Piège : 3/2 est impossible, une probabilité ne dépasse jamais 1.",
      hint: "Nombre de boules rouges divisé par le nombre total de boules.",
    },
    {
      id: "m4sta-5",
      level: 2,
      type: "input",
      question: "Un devoir est noté 12 avec un coefficient 2, un contrôle est noté 15 avec un coefficient 3. Calcule la moyenne pondérée.",
      answer: "13,8",
      accept: ["13.8"],
      explanation:
        "Somme des produits : 12 × 2 + 15 × 3 = 24 + 45 = 69. Somme des coefficients : 2 + 3 = 5. Moyenne pondérée : 69 ÷ 5 = 13,8. Piège : diviser par 2 (le nombre de notes) donnerait 34,5, ce qui est impossible pour une note sur 20.",
      hint: "Multiplie chaque note par son coefficient, additionne, puis divise par la somme des coefficients.",
    },
    {
      id: "m4sta-6",
      level: 2,
      type: "qcm",
      question: "Quelle est la médiane de la série : 9 ; 12 ; 15 ; 8 ; 11 ?",
      choices: ["11", "15", "12", "9"],
      answer: 0,
      explanation:
        "On ordonne d'abord la série : 8 ; 9 ; 11 ; 12 ; 15. Il y a 5 valeurs (effectif impair), la médiane est donc la 3e valeur : 11. Piège : 15 serait la réponse si on prenait le milieu de la liste NON ordonnée.",
      hint: "Range les valeurs dans l'ordre croissant avant de chercher celle du milieu.",
    },
    {
      id: "m4sta-7",
      level: 2,
      type: "truefalse",
      question: "La moyenne d'une série est toujours égale à sa médiane.",
      answer: false,
      explanation:
        "Faux ! Ce sont deux indicateurs différents. Exemple : série 0 ; 15 ; 15. La médiane est 15, mais la moyenne vaut (0 + 15 + 15) ÷ 3 = 10. La moyenne est sensible aux valeurs extrêmes, la médiane beaucoup moins.",
      hint: "Cherche une série avec une valeur très différente des autres.",
    },
    {
      id: "m4sta-8",
      level: 2,
      type: "truefalse",
      question: "Si la probabilité de gagner à un jeu est 0,3, alors la probabilité de ne pas gagner est 0,7.",
      answer: true,
      explanation:
        "Vrai ! « Ne pas gagner » est l'événement contraire de « gagner ». Leurs probabilités s'ajoutent pour donner 1 : P(ne pas gagner) = 1 − P(gagner) = 1 − 0,3 = 0,7.",
    },
    {
      id: "m4sta-9",
      level: 3,
      type: "qcm",
      question: "On lance deux fois de suite une pièce équilibrée. Quelle est la probabilité d'obtenir deux fois Pile ?",
      choices: ["1/4", "1/2", "1/3", "2/4"],
      answer: 0,
      explanation:
        "L'arbre donne 4 chemins équiprobables : PP, PF, FP, FF. Un seul chemin est favorable (PP), donc P(deux fois Pile) = 1/4. Piège : 1/3 viendrait de l'idée fausse qu'il n'y a que 3 issues (deux Piles, deux Faces, une de chaque) — mais ces issues n'ont pas les mêmes chances.",
      hint: "Dessine l'arbre : combien de chemins en tout, combien de chemins favorables ?",
    },
    {
      id: "m4sta-10",
      level: 3,
      type: "input",
      question: "On lance deux fois de suite une pièce équilibrée. Quelle est la probabilité d'obtenir exactement une fois Pile ? (réponse sous forme de fraction)",
      answer: "1/2",
      accept: ["2/4", "0,5", "0.5"],
      explanation:
        "Sur les 4 chemins de l'arbre (PP, PF, FP, FF), deux contiennent exactement une fois Pile : PF et FP. Donc P = 2/4 = 1/2. Piège : oublier le chemin FP, car « Pile puis Face » et « Face puis Pile » sont deux issues différentes.",
      hint: "« Exactement une fois Pile » correspond à deux chemins différents de l'arbre.",
    },
    {
      id: "m4sta-11",
      level: 3,
      type: "truefalse",
      question: "On lance deux fois une pièce équilibrée. Comme il y a 3 résultats possibles (deux Piles, deux Faces, une de chaque), chacun a une probabilité de 1/3.",
      answer: false,
      explanation:
        "Faux ! Ces 3 résultats ne sont pas équiprobables. L'arbre montre 4 chemins de même probabilité : PP, PF, FP et FF. « Une de chaque » regroupe deux chemins (PF et FP), sa probabilité est donc 2/4 = 1/2, tandis que « deux Piles » et « deux Faces » valent chacune 1/4.",
      hint: "Les chemins de l'arbre sont équiprobables, pas forcément les résultats regroupés.",
    },
    {
      id: "m4sta-12",
      level: 3,
      type: "input",
      question: "Dans une classe, les 12 filles ont une moyenne de 14 et les 8 garçons une moyenne de 11,5. Calcule la moyenne de la classe.",
      answer: "13",
      explanation:
        "C'est une moyenne pondérée par les effectifs. Somme des produits : 12 × 14 + 8 × 11,5 = 168 + 92 = 260. Effectif total : 12 + 8 = 20. Moyenne de la classe : 260 ÷ 20 = 13. Piège : (14 + 11,5) ÷ 2 = 12,75 est faux, car les deux groupes n'ont pas le même effectif.",
      hint: "Les effectifs 12 et 8 jouent le rôle de coefficients : ne fais pas une simple moyenne des deux moyennes.",
    },
  ],
};
