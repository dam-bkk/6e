import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fractions",
  num: 5,
  title: "Les fractions",
  domain: "nombres",
  icon: "PieChart",
  teaser: "Partager, comparer et calculer avec des parts : les fractions n'auront plus de secret.",
  objectives: [
    "Je sais ce que représentent le numérateur et le dénominateur d'une fraction",
    "Je sais calculer une fraction d'une quantité (les 3/4 de 20)",
    "Je sais reconnaître des fractions égales et simplifier une fraction simple",
    "Je sais comparer des fractions de même dénominateur et les comparer à 1",
    "Je sais placer une fraction simple sur une droite graduée",
    "Je connais l'écriture décimale des fractions usuelles (1/2 = 0,5 ; 1/4 = 0,25)",
  ],
  lesson: [
    {
      title: "Une fraction, c'est un partage",
      paragraphs: [
        "Quand on partage une chose en parts ÉGALES et qu'on en prend quelques-unes, on obtient une fraction. Dans la fraction 3/4, le nombre du bas, le dénominateur, indique en combien de parts égales on a coupé. Le nombre du haut, le numérateur, indique combien de parts on prend.",
        "Le vocabulaire courant vient de là : 1/2 se dit « un demi », 1/3 « un tiers », 1/4 « un quart ». Ensuite, on lit simplement le dénominateur avec la terminaison -ième : 2/5 se dit « deux cinquièmes ».",
        "Attention : le partage doit être équitable ! Une pizza coupée en 4 morceaux de tailles différentes ne donne pas des quarts.",
      ],
      example: [
        "Une tarte est coupée en 8 parts égales. Tu en manges 3.",
        "Tu as mangé 3/8 de la tarte (« trois huitièmes »).",
        "Il en reste 5/8.",
      ],
      tip: "Le DÉnominateur DÉnomme la fraction : c'est lui qui lui donne son nom (quart, cinquième, huitième…). Le nUMérateur nUMérote les parts que tu prends.",
      figure: "fraction-disque",
    },
    {
      title: "Prendre une fraction d'une quantité",
      paragraphs: [
        "Pour calculer une fraction d'une quantité, la méthode est toujours la même : on divise la quantité par le dénominateur (pour connaître la valeur d'une part), puis on multiplie par le numérateur (pour prendre le bon nombre de parts).",
        "L'ordre peut se choisir : pour les 3/4 de 20, tu peux faire (20 ÷ 4) × 3 ou (20 × 3) ÷ 4. Le résultat est le même, mais commencer par la division donne souvent des calculs plus simples.",
      ],
      example: [
        "Les 3/4 de 20 :",
        "20 ÷ 4 = 5 (une part vaut 5),",
        "5 × 3 = 15. Donc les 3/4 de 20, c'est 15.",
      ],
      tip: "« Divise par le bas, multiplie par le haut. » Cette petite phrase te sauvera à chaque fois.",
    },
    {
      title: "Des fractions égales",
      paragraphs: [
        "Deux fractions peuvent avoir l'air différentes et représenter exactement la même part : 1/2, 2/4 et 4/8, c'est toujours la moitié !",
        "La règle : si on multiplie (ou si on divise) le numérateur ET le dénominateur par le même nombre, la fraction ne change pas de valeur.",
        "Simplifier une fraction, c'est utiliser cette règle dans le sens de la division, pour obtenir une écriture avec des nombres plus petits.",
      ],
      example: [
        "6/8 = 3/4 (on a divisé le haut et le bas par 2).",
        "10/15 = 2/3 (on a divisé le haut et le bas par 5).",
      ],
      tip: "Pour simplifier, cherche un nombre qui divise à la fois le haut et le bas : 2 si les deux sont pairs, 5 s'ils finissent par 0 ou 5.",
    },
    {
      title: "Comparer des fractions",
      paragraphs: [
        "Quand deux fractions ont le MÊME dénominateur, les parts ont la même taille : la plus grande fraction est celle qui a le plus grand numérateur. Par exemple, 5/7 > 3/7.",
        "On peut aussi comparer une fraction à 1. Si le numérateur est plus petit que le dénominateur, la fraction est plus petite que 1 (on prend moins que le tout). S'il est plus grand, la fraction dépasse 1. Et si les deux sont égaux, la fraction vaut exactement 1 : 4/4 = 1.",
      ],
      example: [
        "2/9 < 7/9 (même dénominateur, on compare les numérateurs).",
        "3/5 < 1 car 3 < 5, mais 7/5 > 1 car 7 > 5.",
      ],
      tip: "Une fraction plus grande que 1, ça existe ! 7/4, c'est 7 quarts : une tarte entière (4 quarts) plus 3 quarts d'une deuxième tarte.",
    },
    {
      title: "Sur la droite graduée, et en écriture décimale",
      paragraphs: [
        "Pour placer une fraction sur une droite graduée, on partage l'unité (l'écart entre 0 et 1) en autant de parts égales que l'indique le dénominateur. Puis on avance d'autant de graduations que l'indique le numérateur.",
        "Certaines fractions ont aussi une écriture décimale à connaître par cœur : 1/2 = 0,5 ; 1/4 = 0,25 ; 3/4 = 0,75 ; 1/10 = 0,1. Ce sont deux écritures différentes du même nombre.",
      ],
      example: [
        "Pour placer 3/5 : on partage l'unité en 5 parts égales, et on avance de 3 graduations après 0.",
        "Pour placer 7/4 : on partage chaque unité en 4, et on avance de 7 graduations : 7/4 est entre 1 et 2.",
      ],
      tip: "1/4 = 0,25 comme un quart d'euro = 25 centimes. Penser à la monnaie aide à retenir les écritures décimales.",
      figure: "droite-graduee",
    },
  ],
  exercises: [
    {
      id: "fra-1",
      level: 1,
      type: "qcm",
      question: "Dans la fraction 3/4, que représente le nombre 4 ?",
      choices: [
        "Le nombre de parts que l'on prend",
        "Le nombre de parts égales du partage",
        "Le résultat de la division",
        "Le nombre de tartes",
      ],
      answer: 1,
      explanation:
        "Le 4 est le dénominateur : il indique en combien de parts ÉGALES on a partagé le tout. Le 3 (numérateur) indique combien de parts on prend. Piège classique : ne pas inverser les deux rôles !",
      hint: "Le nombre du bas donne son nom à la fraction : ici, des « quarts ».",
    },
    {
      id: "fra-2",
      level: 1,
      type: "input",
      question:
        "Un gâteau est partagé en 8 parts égales. Léa en mange 3. Quelle fraction du gâteau a-t-elle mangée ? (réponse au format a/b)",
      answer: "3/8",
      explanation:
        "Le gâteau est coupé en 8 parts égales : le dénominateur est 8. Léa prend 3 parts : le numérateur est 3. Elle a donc mangé 3/8 du gâteau. Le nombre de parts prises se place en haut, le nombre total de parts en bas.",
      hint: "Combien de parts prises ? Combien de parts en tout ?",
    },
    {
      id: "fra-3",
      level: 1,
      type: "truefalse",
      question: "Trois tiers d'une tarte, c'est la tarte entière.",
      answer: true,
      explanation:
        "Vrai ! 3/3 = 1. Quand le numérateur est égal au dénominateur, on prend TOUTES les parts du partage : on a donc le tout. De même, 4/4 = 1 et 8/8 = 1.",
    },
    {
      id: "fra-4",
      level: 1,
      type: "qcm",
      question: "Quelle est l'écriture décimale de 1/2 ?",
      choices: ["0,2", "0,5", "1,2", "2"],
      answer: 1,
      explanation:
        "1/2, c'est la moitié de 1, donc 1 ÷ 2 = 0,5. Piège classique : 1/2 ne s'écrit pas 0,2 ! Le 2 du dénominateur ne se recopie pas après la virgule : il faut vraiment faire la division.",
      hint: "1/2, c'est la moitié de 1.",
    },
    {
      id: "fra-5",
      level: 2,
      type: "input",
      question: "Calcule les 3/4 de 20.",
      answer: "15",
      explanation:
        "On divise par le dénominateur : 20 ÷ 4 = 5, donc un quart de 20 vaut 5. On multiplie par le numérateur : 5 × 3 = 15. Les 3/4 de 20, c'est donc 15. Retiens : divise par le bas, multiplie par le haut.",
      hint: "Commence par calculer un quart de 20.",
    },
    {
      id: "fra-6",
      level: 2,
      type: "input",
      question: "Simplifie la fraction 6/8. (réponse au format a/b)",
      answer: "3/4",
      explanation:
        "6 et 8 sont tous les deux pairs : on peut les diviser par 2. On obtient 6 ÷ 2 = 3 et 8 ÷ 2 = 4, donc 6/8 = 3/4. La fraction garde exactement la même valeur : on a juste divisé le haut ET le bas par le même nombre.",
      hint: "6 et 8 sont tous les deux dans la table de 2.",
    },
    {
      id: "fra-7",
      level: 2,
      type: "qcm",
      question: "Quelle fraction est égale à 1/2 ?",
      choices: ["2/6", "3/6", "3/4", "2/3"],
      answer: 1,
      explanation:
        "Pour passer de 1/2 à une fraction en sixièmes, on multiplie le haut et le bas par 3 : 1 × 3 = 3 et 2 × 3 = 6. Donc 1/2 = 3/6. Vérification : 3, c'est bien la moitié de 6. Les autres propositions ne valent pas la moitié : 2/6 en vaut moins, 3/4 et 2/3 en valent plus.",
      hint: "Dans une fraction égale à 1/2, le numérateur est la moitié du dénominateur.",
    },
    {
      id: "fra-8",
      level: 2,
      type: "truefalse",
      question: "La fraction 5/4 est plus petite que 1.",
      answer: false,
      explanation:
        "Faux ! 5/4, c'est 5 quarts. Or il ne faut que 4 quarts pour faire une unité entière (4/4 = 1). Avec 5 quarts, on dépasse : 5/4 > 1. Règle : quand le numérateur est plus grand que le dénominateur, la fraction est plus grande que 1.",
      hint: "Combien de quarts faut-il pour faire une unité entière ?",
    },
    {
      id: "fra-9",
      level: 3,
      type: "qcm",
      question:
        "Léo a mangé 2/8 d'une pizza et Zoé a mangé 1/4 de la même pizza. Qui a mangé le plus ?",
      choices: ["Léo", "Zoé", "Ils ont mangé autant l'un que l'autre"],
      answer: 2,
      explanation:
        "On simplifie 2/8 en divisant le haut et le bas par 2 : 2/8 = 1/4. Léo et Zoé ont donc mangé exactement la même part de pizza ! Piège classique : croire que 2/8 > 1/4 parce que 2 > 1. On ne peut pas comparer les numérateurs quand les dénominateurs sont différents.",
      hint: "Essaie de simplifier 2/8.",
    },
    {
      id: "fra-10",
      level: 3,
      type: "input",
      question:
        "Une bouteille contient 60 cL de jus d'orange. Nina en boit les 2/3. Combien de centilitres de jus reste-t-il dans la bouteille ?",
      answer: "20",
      explanation:
        "D'abord, ce que Nina a bu : 60 ÷ 3 = 20, puis 20 × 2 = 40. Elle a bu 40 cL. Ensuite, ce qui reste : 60 − 40 = 20 cL. Autre chemin plus rapide : s'il ne reste que 1/3 de la bouteille, alors il reste 60 ÷ 3 = 20 cL. Piège : la question demande ce qui RESTE, pas ce qui a été bu !",
      hint: "Si Nina boit les 2/3, quelle fraction de la bouteille reste-t-il ?",
    },
    {
      id: "fra-11",
      level: 3,
      type: "truefalse",
      question: "L'écriture décimale de 3/4 est 0,34.",
      answer: false,
      explanation:
        "Faux ! On ne recopie jamais les chiffres d'une fraction après une virgule. 3/4, c'est 3 ÷ 4 = 0,75. Vérification avec la monnaie : trois quarts d'euro, c'est 75 centimes, pas 34. C'est l'un des pièges les plus fréquents du chapitre.",
    },
    {
      id: "fra-12",
      level: 3,
      type: "input",
      question:
        "Sur une droite graduée, chaque unité est partagée en 4 parts égales. Un point est placé sur la 7e graduation après 0. Quelle est son abscisse, écrite en fraction ? (format a/b)",
      answer: "7/4",
      explanation:
        "Chaque graduation vaut 1/4, puisque l'unité est coupée en 4. Le point est 7 graduations après 0 : son abscisse est donc 7/4. Remarque : 7/4 est plus grand que 1 (car 7 > 4), le point se trouve entre 1 et 2, exactement à 1 + 3/4. Une fraction peut tout à fait dépasser 1 !",
      hint: "Que vaut une seule graduation quand l'unité est coupée en 4 ?",
    },
  ],
  videos: [
    { title: "Représenter un partage à l'aide d'une fraction - Sixième", youtubeId: "_xZkeQM8tm4", channel: "Yvan Monka" },
    { title: "Reconnaître une fraction - CM2 / Sixième", youtubeId: "bpMepmTl4Ww", channel: "Yvan Monka" },
  ],
};
