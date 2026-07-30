import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "operations",
  num: 3,
  title: "Additionner, soustraire, multiplier",
  domain: "nombres",
  icon: "Calculator",
  teaser: "Poser, calculer vite et vérifier tes résultats comme un pro.",
  objectives: [
    "Je connais le vocabulaire : somme, différence, produit, termes, facteurs",
    "Je sais poser une addition et une soustraction de nombres décimaux",
    "Je sais poser une multiplication avec des nombres décimaux",
    "Je sais multiplier et diviser par 10, 100, 1 000",
    "Je sais utiliser un ordre de grandeur pour vérifier un résultat",
  ],
  lesson: [
    {
      title: "Le vocabulaire des opérations",
      paragraphs: [
        "Chaque opération a son vocabulaire, et il faut le connaître : le résultat d'une addition est une somme, celui d'une soustraction est une différence, celui d'une multiplication est un produit.",
        "Les nombres que l'on additionne ou que l'on soustrait s'appellent les termes. Les nombres que l'on multiplie s'appellent les facteurs.",
      ],
      example: [
        "Dans 12,5 + 3,8 = 16,3 : la somme est 16,3, les termes sont 12,5 et 3,8.",
        "Dans 7 × 8 = 56 : le produit est 56, les facteurs sont 7 et 8.",
      ],
      tip: "FACteurs → multipliCATION : les deux mots contiennent un « c » de « multiplication ». Termes → addition et soustraction.",
    },
    {
      title: "Poser une addition ou une soustraction de décimaux",
      figure: "mx-addition-posee",
      paragraphs: [
        "Règle d'or : on aligne les virgules ! Ainsi, les unités sont sous les unités, les dixièmes sous les dixièmes, les centièmes sous les centièmes. Ensuite, on calcule comme avec des entiers, et la virgule du résultat se place dans l'alignement.",
        "Si les nombres n'ont pas autant de chiffres après la virgule, on peut compléter avec des zéros : pour calculer 15 − 6,35, on écrit 15,00 − 6,35.",
      ],
      example: [
        "4,7 + 2,58 : on pose 4,70 + 2,58, virgules alignées → 7,28.",
        "15 − 6,35 : on pose 15,00 − 6,35 → 8,65.",
      ],
      tip: "Un nombre entier a une virgule invisible : 15 = 15,00. Écris-la avant de poser l'opération, tu éviteras le piège le plus fréquent.",
    },
    {
      title: "La multiplication posée avec des décimaux",
      paragraphs: [
        "Pour multiplier des décimaux, on fait comme s'il n'y avait pas de virgule, puis on la replace à la fin : le résultat doit avoir autant de chiffres après la virgule que les deux facteurs réunis.",
        "Ici, pas question d'aligner les virgules : c'est la règle de l'addition, pas celle de la multiplication !",
      ],
      example: [
        "2,3 × 1,4 : on calcule 23 × 14 = 322.",
        "2,3 a 1 chiffre après la virgule, 1,4 en a 1 aussi : 1 + 1 = 2 chiffres.",
        "Donc 2,3 × 1,4 = 3,22.",
      ],
      tip: "Compte les chiffres après la virgule dans les DEUX facteurs, additionne, et replace la virgule dans le résultat. Vérifie ensuite avec un ordre de grandeur : 2,3 × 1,4 ≈ 2 × 1,5 = 3. Le résultat 3,22 est cohérent.",
    },
    {
      title: "Multiplier ou diviser par 10, 100, 1 000",
      paragraphs: [
        "Multiplier par 10, 100 ou 1 000 rend le nombre plus grand : chaque chiffre monte de 1, 2 ou 3 rangs, ce qui revient à décaler la virgule vers la droite d'autant de rangs.",
        "Diviser par 10, 100 ou 1 000 rend le nombre plus petit : la virgule se décale vers la gauche. Si des rangs manquent, on complète avec des zéros.",
      ],
      example: [
        "3,6 × 100 = 360 (la virgule se décale de 2 rangs vers la droite).",
        "45,8 ÷ 10 = 4,58.",
        "7,2 ÷ 1 000 = 0,0072 (on ajoute des zéros pour combler).",
      ],
      tip: "Multiplier agrandit → la virgule va vers la droite. Diviser réduit → elle va vers la gauche. Le nombre de zéros te dit de combien de rangs.",
    },
    {
      title: "Ordre de grandeur et calcul malin",
      paragraphs: [
        "Un ordre de grandeur est un résultat approché obtenu en remplaçant les nombres par des valeurs rondes proches. C'est ton meilleur outil pour vérifier un calcul : si ton résultat posé est très loin de l'ordre de grandeur, il y a une erreur quelque part.",
        "En calcul mental, on a le droit de changer l'ordre des facteurs et de les regrouper astucieusement. Certains couples sont magiques : 2,5 × 4 = 10, 1,25 × 8 = 10, 25 × 4 = 100, 5 × 2 = 10.",
      ],
      example: [
        "19,90 × 32 ≈ 20 × 30 = 600 : le prix total sera d'environ 600 €.",
        "2,5 × 13 × 4 = (2,5 × 4) × 13 = 10 × 13 = 130.",
      ],
      tip: "Avant de poser un calcul, fais toujours une estimation de tête. Après le calcul, compare : c'est ton détecteur d'erreurs gratuit.",
    },
  ],
  exercises: [
    {
      id: "op-1",
      level: 1,
      type: "qcm",
      question: "Dans l'égalité 7 × 8 = 56, comment appelle-t-on les nombres 7 et 8 ?",
      choices: ["Les termes", "Les facteurs", "Les quotients", "Les sommes"],
      answer: 1,
      explanation:
        "Dans une multiplication, les nombres que l'on multiplie sont les facteurs, et le résultat (56) est le produit. Les termes, ce sont les nombres d'une addition ou d'une soustraction. Quotient et somme sont les résultats d'une division et d'une addition.",
      hint: "Termes → addition. Et pour la multiplication ?",
    },
    {
      id: "op-2",
      level: 1,
      type: "input",
      question: "Calcule : 4,7 + 2,58",
      answer: "7,28",
      explanation:
        "On aligne les virgules et on complète : 4,70 + 2,58. Centièmes : 0 + 8 = 8. Dixièmes : 7 + 5 = 12, on pose 2 et on retient 1. Unités : 4 + 2 + 1 = 7. Résultat : 7,28. Le piège serait d'aligner les nombres à droite comme des entiers : on obtiendrait un résultat absurde.",
      hint: "Écris 4,7 sous la forme 4,70, puis aligne les virgules.",
    },
    {
      id: "op-3",
      level: 1,
      type: "input",
      question: "Calcule : 3,6 × 100",
      answer: "360",
      explanation:
        "Multiplier par 100 décale la virgule de 2 rangs vers la droite : 3,6 → 36 → 360 (on complète avec un zéro). Vérification par le sens : multiplier par 100 doit donner un nombre 100 fois plus grand, et 360 est bien 100 fois plus grand que 3,6.",
      hint: "Combien de zéros dans 100 ? La virgule se décale d'autant de rangs.",
    },
    {
      id: "op-4",
      level: 1,
      type: "truefalse",
      question: "Pour poser une addition de nombres décimaux, on doit aligner les virgules.",
      answer: true,
      explanation:
        "Vrai ! Aligner les virgules garantit que chaque chiffre est additionné avec un chiffre du même rang : unités avec unités, dixièmes avec dixièmes… C'est la même règle pour la soustraction. Attention : pour la multiplication posée, cette règle ne s'applique pas.",
    },
    {
      id: "op-5",
      level: 2,
      type: "input",
      question: "Calcule : 15 − 6,35",
      answer: "8,65",
      explanation:
        "Le piège : 15 est un entier, mais il a une virgule invisible. On pose 15,00 − 6,35 avec les virgules alignées. Centièmes : 0 − 5 impossible, on emprunte → 10 − 5 = 5. Dixièmes : 9 − 3 = 6 (après l'emprunt). Unités : 14 − 6 = 8. Résultat : 8,65. Vérification : 8,65 + 6,35 = 15.",
      hint: "Écris 15 sous la forme 15,00 avant de poser.",
    },
    {
      id: "op-6",
      level: 2,
      type: "qcm",
      question: "Combien vaut 0,4 × 0,3 ?",
      choices: ["1,2", "0,12", "0,012", "12"],
      answer: 1,
      explanation:
        "On calcule sans les virgules : 4 × 3 = 12. Puis on compte les chiffres après la virgule : 1 dans 0,4 et 1 dans 0,3, soit 2 en tout. On replace la virgule : 0,12. Remarque étonnante mais logique : le produit est plus petit que chacun des facteurs, car on prend « 4 dixièmes de 3 dixièmes ».",
      hint: "4 × 3 = 12, puis compte les chiffres après la virgule dans les deux facteurs.",
    },
    {
      id: "op-7",
      level: 2,
      type: "input",
      question: "Calcule : 45,8 ÷ 10",
      answer: "4,58",
      explanation:
        "Diviser par 10 rend le nombre 10 fois plus petit : la virgule se décale de 1 rang vers la gauche. 45,8 → 4,58. Chaque chiffre a simplement perdu un rang : les 4 dizaines deviennent 4 unités, les 5 unités deviennent 5 dixièmes, les 8 dixièmes deviennent 8 centièmes.",
      hint: "Diviser rend plus petit : dans quel sens part la virgule ?",
    },
    {
      id: "op-8",
      level: 2,
      type: "qcm",
      question: "Calcule de tête, sans poser : 2,5 × 13 × 4",
      choices: ["120", "130", "125", "100"],
      answer: 1,
      explanation:
        "Dans une multiplication, on peut regrouper les facteurs dans l'ordre qui nous arrange : 2,5 × 4 = 10, puis 10 × 13 = 130. Calculer dans l'ordre (2,5 × 13 d'abord) donnerait le même résultat, mais serait beaucoup plus pénible. Repère toujours les couples qui donnent 10 ou 100 !",
      hint: "Commence par le couple de facteurs qui donne un nombre rond.",
    },
    {
      id: "op-9",
      level: 3,
      type: "qcm",
      question:
        "Une place de concert coûte 19,90 €. Quel est le meilleur ordre de grandeur du prix de 32 places ?",
      choices: ["60 €", "600 €", "6 000 €", "300 €"],
      answer: 1,
      explanation:
        "On remplace par des valeurs rondes : 19,90 ≈ 20 et 32 ≈ 30. Ordre de grandeur : 20 × 30 = 600 €. (Le prix exact est 636,80 €, bien proche de 600.) Le piège : 60 € oublie un zéro, 6 000 € en ajoute un. C'est exactement le genre d'erreur que l'ordre de grandeur permet de repérer.",
      hint: "Remplace 19,90 par 20 et 32 par 30.",
    },
    {
      id: "op-10",
      level: 3,
      type: "input",
      question:
        "Maya achète un livre à 12,90 € et un cahier à 3,45 €. Elle paye avec un billet de 20 €. Combien la caissière doit-elle lui rendre (en €) ?",
      answer: "3,65",
      explanation:
        "Étape 1 : le total des achats. 12,90 + 3,45 = 16,35 € (virgules alignées). Étape 2 : la monnaie rendue. 20,00 − 16,35 = 3,65 €. Vérification par ordre de grandeur : les achats font environ 13 + 3 = 16 €, et 20 − 16 = 4 € ; le résultat 3,65 € est cohérent.",
      hint: "Calcule d'abord le total des deux achats, puis soustrais-le de 20 €.",
    },
    {
      id: "op-11",
      level: 3,
      type: "truefalse",
      question: "Le produit de deux nombres est toujours plus grand que chacun des deux facteurs.",
      answer: false,
      explanation:
        "Faux ! C'est vrai pour les entiers plus grands que 1, mais pas en général : 0,4 × 0,3 = 0,12, qui est plus petit que 0,4 et que 0,3. Multiplier par un nombre plus petit que 1, c'est prendre une partie du nombre, donc le résultat diminue. « Multiplier agrandit toujours » est une idée fausse à abandonner en 6e.",
      hint: "Essaie avec deux nombres plus petits que 1.",
    },
    {
      id: "op-12",
      level: 3,
      type: "input",
      question: "Calcule de tête, sans poser : 1,25 × 7 × 8",
      answer: "70",
      explanation:
        "On regroupe astucieusement : 1,25 × 8 = 10 (c'est un couple magique à connaître, comme 2,5 × 4 = 10 et 25 × 4 = 100). Il reste 10 × 7 = 70. Sans le regroupement, 1,25 × 7 = 8,75 puis 8,75 × 8 : faisable, mais tellement plus long ! L'ordre des facteurs ne change jamais le produit.",
      hint: "Quel couple de facteurs donne exactement 10 ?",
    },
  ],
  videos: [
    { title: "Poser une addition - Sixième", youtubeId: "ytLe8aUq2ZM", channel: "Yvan Monka" },
    { title: "Poser une multiplication - Sixième", youtubeId: "4YQi_icWTTI", channel: "Yvan Monka" },
  ],
};
