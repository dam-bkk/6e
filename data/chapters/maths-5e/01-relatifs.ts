import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-relatifs",
  subject: "maths",
  grade: "5e",
  num: 1,
  title: "Les nombres relatifs",
  domain: "nombres",
  icon: "Thermometer",
  teaser: "Des températures aux profondeurs marines : apprivoiser les nombres négatifs.",
  objectives: [
    "Je sais repérer un nombre relatif sur une droite graduée et un point dans un repère",
    "Je sais comparer et ranger des nombres relatifs",
    "Je connais la notion d'opposé d'un nombre",
    "Je sais additionner et soustraire des nombres relatifs",
  ],
  lesson: [
    {
      title: "Pourquoi des nombres négatifs ?",
      paragraphs: [
        "Les nombres que tu connais depuis le primaire ne suffisent pas toujours : comment noter une température de 5 degrés en dessous de zéro, ou la profondeur d'un sous-marin ? On invente pour cela les nombres négatifs, précédés du signe −.",
        "L'ensemble des nombres positifs et négatifs forme les nombres relatifs. Un nombre relatif a deux ingrédients : un signe (+ ou −) et une distance à zéro (sa partie numérique). Ainsi (−5) a pour signe − et pour distance à zéro 5.",
        "Le nombre 0 est un cas à part : il est à la fois positif et négatif, et il n'a pas besoin de signe.",
      ],
      example: [
        "Une température de −7 °C se lit « moins sept degrés » : il fait 7 degrés en dessous de zéro.",
        "L'altitude −45 m désigne un point situé 45 mètres sous le niveau de la mer.",
        "(+8) et 8 désignent le même nombre : on peut ne pas écrire le signe +.",
      ],
      tip: "Pense au thermomètre : le zéro est une frontière, pas une fin. En dessous, les nombres continuent avec le signe −.",
    },
    {
      title: "Repérer sur une droite graduée et dans un repère",
      paragraphs: [
        "Sur une droite graduée, le zéro s'appelle l'origine. Les nombres positifs sont à droite, les négatifs à gauche. Chaque point correspond à un nombre relatif : son abscisse.",
        "Dans un repère du plan, on croise deux droites graduées : l'axe des abscisses (horizontal) et l'axe des ordonnées (vertical). Un point est repéré par ses coordonnées, toujours dans l'ordre (abscisse ; ordonnée).",
      ],
      example: [
        "Le point A situé 3 unités à gauche de l'origine a pour abscisse −3.",
        "Le point M(−2 ; 4) se place en partant de l'origine : 2 unités vers la gauche, puis 4 unités vers le haut.",
      ],
      tip: "Pour l'ordre des coordonnées, retiens l'ordre alphabétique : Abscisse avant Ordonnée, comme A avant O. On avance d'abord horizontalement, puis verticalement.",
    },
    {
      title: "Comparer, ranger, opposés",
      figure: "m5-droite-relatifs",
      paragraphs: [
        "Comparer deux relatifs, c'est dire lequel est le plus à droite sur la droite graduée. Tout nombre négatif est plus petit que tout nombre positif. Entre deux négatifs, le plus petit est celui qui a la plus grande distance à zéro : −9 < −2.",
        "Deux nombres sont opposés lorsqu'ils ont la même distance à zéro mais des signes contraires : 6 et −6 sont opposés. Sur la droite graduée, ils sont symétriques par rapport à l'origine. L'opposé de 0 est 0.",
      ],
      example: [
        "−8 < −3 car −8 est plus loin de zéro, donc plus à gauche.",
        "−1 < 0 < 4 : rangement dans l'ordre croissant.",
        "L'opposé de −12 est 12 ; l'opposé de 7 est −7.",
      ],
      tip: "Avec des températures, tout devient concret : −9 °C est bien plus froid que −2 °C, donc −9 < −2. En cas de doute, dessine une petite droite graduée.",
    },
    {
      title: "Additionner deux nombres relatifs",
      paragraphs: [
        "Pour additionner deux nombres de même signe : on additionne les distances à zéro et on garde le signe commun. Exemple : (−3) + (−5) = −8.",
        "Pour additionner deux nombres de signes contraires : on soustrait la plus petite distance à zéro de la plus grande, et on prend le signe de celui qui a la plus grande distance à zéro. Exemple : (−7) + 12 = 5, car 12 « l'emporte » sur 7.",
        "La somme de deux nombres opposés est toujours nulle : (−4) + 4 = 0.",
      ],
      example: [
        "(−6) + (−9) = −15 (même signe : on additionne 6 et 9, signe −).",
        "(+8) + (−3) = 5 (signes contraires : 8 − 3 = 5, le signe + l'emporte).",
        "(−10) + 4 = −6 (signes contraires : 10 − 4 = 6, le signe − l'emporte).",
      ],
      tip: "Imagine un jeu de gains et de pertes : (−7) + 12, c'est perdre 7 € puis gagner 12 €. Au final, tu as gagné 5 €.",
    },
    {
      title: "Soustraire un nombre relatif",
      paragraphs: [
        "Soustraire un nombre relatif, c'est ajouter son opposé. C'est la seule règle à connaître : chaque soustraction se transforme en addition.",
        "Ainsi 5 − (−3) devient 5 + 3 = 8, et (−2) − 7 devient (−2) + (−7) = −9. Une fois la transformation faite, on applique les règles de l'addition.",
      ],
      example: [
        "(−4) − (+6) = (−4) + (−6) = −10.",
        "(−3) − (−8) = (−3) + 8 = 5.",
        "Écart de température entre 4 °C et −5 °C : 4 − (−5) = 4 + 5 = 9 degrés d'écart.",
      ],
      tip: "« Soustraire, c'est ajouter l'opposé » : transforme TOUJOURS la soustraction avant de calculer, tu éviteras la plupart des erreurs de signe.",
    },
  ],
  exercises: [
    {
      id: "m5rel-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la température la plus basse ?",
      choices: ["−7 °C", "−2 °C", "0 °C", "3 °C"],
      answer: 0,
      explanation:
        "Sur un thermomètre, −7 est le plus bas : il est le plus loin de zéro du côté négatif. Ordre croissant : −7 < −2 < 0 < 3. Piège classique : entre deux négatifs, le plus « gros » chiffre donne le plus PETIT nombre.",
      hint: "Imagine les quatre températures sur un thermomètre.",
    },
    {
      id: "m5rel-2",
      level: 1,
      type: "input",
      question: "Quel est l'opposé de −8 ?",
      answer: "8",
      accept: ["+8"],
      explanation:
        "Deux nombres opposés ont la même distance à zéro et des signes contraires. L'opposé de −8 est donc +8, c'est-à-dire 8. Vérification : (−8) + 8 = 0, et la somme de deux opposés vaut toujours 0.",
      hint: "Les opposés sont symétriques par rapport à zéro.",
    },
    {
      id: "m5rel-3",
      level: 1,
      type: "truefalse",
      question: "−5 < −2",
      answer: true,
      explanation:
        "Vrai ! Sur la droite graduée, −5 est plus à gauche que −2, donc plus petit. Ne te fie pas aux distances à zéro : 5 > 2, mais avec le signe −, l'ordre s'inverse : −5 < −2.",
    },
    {
      id: "m5rel-4",
      level: 1,
      type: "qcm",
      question:
        "Sur une droite graduée, le point A est situé 3 unités à gauche de l'origine. Quelle est son abscisse ?",
      choices: ["3", "−3", "0", "−13"],
      answer: 1,
      explanation:
        "L'origine est le point d'abscisse 0. À gauche de l'origine, les abscisses sont négatives : 3 unités à gauche, c'est l'abscisse −3.",
      hint: "À gauche de zéro, quel est le signe des nombres ?",
    },
    {
      id: "m5rel-5",
      level: 2,
      type: "input",
      question: "Calcule : (−5) + (−3)",
      answer: "-8",
      accept: ["−8"],
      explanation:
        "Les deux nombres ont le même signe (−) : on additionne les distances à zéro (5 + 3 = 8) et on garde le signe commun. Résultat : −8. Piège : ne calcule surtout pas 5 − 3 ici, les signes sont identiques !",
      hint: "Même signe : on additionne les distances à zéro et on garde le signe.",
    },
    {
      id: "m5rel-6",
      level: 2,
      type: "input",
      question: "Calcule : (−7) + 12",
      answer: "5",
      accept: ["+5"],
      explanation:
        "Les signes sont contraires : on soustrait les distances à zéro (12 − 7 = 5) et on prend le signe du nombre qui a la plus grande distance à zéro. Ici c'est 12 (positif), donc le résultat est +5. Avec des gains et pertes : perdre 7 puis gagner 12, c'est gagner 5.",
      hint: "Signes contraires : lequel des deux nombres « l'emporte » ?",
    },
    {
      id: "m5rel-7",
      level: 2,
      type: "qcm",
      question: "Que vaut (+4) − (+9) ?",
      choices: ["−5", "5", "13", "−13"],
      answer: 0,
      explanation:
        "Soustraire, c'est ajouter l'opposé : (+4) − (+9) = (+4) + (−9). Signes contraires, 9 − 4 = 5, et le signe − l'emporte car 9 > 4. Résultat : −5.",
      hint: "Transforme d'abord la soustraction en addition de l'opposé.",
    },
    {
      id: "m5rel-8",
      level: 2,
      type: "truefalse",
      question: "La somme de deux nombres relatifs opposés est toujours égale à 0.",
      answer: true,
      explanation:
        "Vrai ! C'est même la définition qui rend les opposés si utiles : (−4) + 4 = 0, (−250) + 250 = 0. Les deux nombres s'annulent exactement.",
    },
    {
      id: "m5rel-9",
      level: 3,
      type: "input",
      question: "Calcule : (−3) − (−8)",
      answer: "5",
      accept: ["+5"],
      explanation:
        "On transforme : soustraire (−8), c'est ajouter son opposé, donc (−3) − (−8) = (−3) + 8. Signes contraires : 8 − 3 = 5, le signe + l'emporte. Résultat : 5. Piège classique : deux signes − qui se suivent donnent un +, mais uniquement grâce à la transformation, pas par magie !",
      hint: "Soustraire (−8), c'est ajouter quel nombre ?",
    },
    {
      id: "m5rel-10",
      level: 3,
      type: "qcm",
      question: "Que vaut la somme (−4) + 9 + (−7) ?",
      choices: ["−2", "2", "−20", "12"],
      answer: 0,
      explanation:
        "On peut regrouper les négatifs : (−4) + (−7) = −11, puis (−11) + 9. Signes contraires : 11 − 9 = 2, le signe − l'emporte. Résultat : −2. Regrouper les nombres de même signe rend le calcul plus sûr.",
      hint: "Additionne d'abord les deux nombres négatifs entre eux.",
    },
    {
      id: "m5rel-11",
      level: 3,
      type: "input",
      question:
        "À Moscou, il faisait −12 °C au lever du jour. La température a ensuite augmenté de 7 °C. Quelle température fait-il maintenant (en °C) ?",
      answer: "-5",
      accept: ["−5"],
      explanation:
        "Augmenter de 7 °C, c'est ajouter 7 : (−12) + 7. Signes contraires : 12 − 7 = 5, et le signe − l'emporte car 12 > 7. Il fait maintenant −5 °C. On reste sous zéro : la hausse ne suffit pas à repasser dans les positifs.",
      hint: "Traduis la situation par une addition partant de −12.",
    },
    {
      id: "m5rel-12",
      level: 3,
      type: "input",
      question:
        "Un sous-marin est à l'altitude −45 m. Il remonte de 28 m, puis redescend de 13 m. Quelle est son altitude finale (en m) ?",
      answer: "-30",
      accept: ["−30"],
      explanation:
        "On enchaîne : (−45) + 28 = −17 (remonter, c'est ajouter), puis (−17) − 13 = (−17) + (−13) = −30 (redescendre, c'est soustraire). Le sous-marin est à −30 m. Méthode sûre : traite les étapes une par une, dans l'ordre.",
      hint: "Remonter = additionner, redescendre = soustraire. Procède étape par étape.",
    },
  ],
};
