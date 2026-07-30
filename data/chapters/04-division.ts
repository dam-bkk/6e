import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "division",
  num: 4,
  title: "La division",
  domain: "nombres",
  icon: "Divide",
  teaser: "Partager, encadrer, et repérer d'un coup d'œil qui divise qui.",
  objectives: [
    "Je sais poser une division euclidienne et écrire l'égalité dividende = diviseur × quotient + reste",
    "Je sais reconnaître les multiples et les diviseurs d'un nombre",
    "Je connais les critères de divisibilité par 2, 3, 5, 9 et 10",
    "Je sais calculer un quotient décimal",
    "Je sais choisir la bonne division pour résoudre un problème de partage",
  ],
  lesson: [
    {
      title: "La division euclidienne",
      figure: "mx-division-posee",
      paragraphs: [
        "Faire la division euclidienne de 47 par 6, c'est chercher combien de fois 6 « rentre » dans 47, sans dépasser. On trouve 7 fois (6 × 7 = 42) et il reste 5.",
        "On résume tout par une égalité : dividende = diviseur × quotient + reste. Ici : 47 = 6 × 7 + 5. Règle essentielle : le reste doit toujours être strictement plus petit que le diviseur, sinon le quotient peut encore grandir !",
      ],
      example: [
        "Division euclidienne de 47 par 6 :",
        "47 = 6 × 7 + 5, avec 5 < 6.",
        "Quotient : 7. Reste : 5.",
      ],
      tip: "Vérifie toujours deux choses : diviseur × quotient + reste redonne bien le dividende, ET le reste est plus petit que le diviseur. Si l'une des deux échoue, la division est fausse.",
    },
    {
      title: "Multiples et diviseurs",
      paragraphs: [
        "Quand la division tombe juste (reste 0), on peut le dire de deux façons. Comme 35 = 5 × 7 : on dit que 35 est un multiple de 5 (et de 7), et que 5 et 7 sont des diviseurs de 35.",
        "Un multiple de 5, c'est un nombre de la table de 5 « prolongée » : 0, 5, 10, 15… Un nombre a toujours une infinité de multiples, mais un nombre limité de diviseurs.",
      ],
      example: [
        "18 = 3 × 6, donc 18 est un multiple de 3 et de 6.",
        "Les diviseurs de 18 sont : 1, 2, 3, 6, 9 et 18.",
        "Les multiples de 18 sont : 0, 18, 36, 54… (la liste ne s'arrête jamais).",
      ],
      tip: "Multiple = « plus grand ou égal » (il contient le nombre plusieurs fois). Diviseur = « plus petit ou égal » (il rentre dans le nombre). Si tu hésites, écris l'égalité en produit : elle dit tout.",
    },
    {
      title: "Les critères de divisibilité",
      paragraphs: [
        "Pour savoir si un nombre est divisible par 2, 5 ou 10, il suffit de regarder son dernier chiffre : par 2 s'il finit par 0, 2, 4, 6 ou 8 ; par 5 s'il finit par 0 ou 5 ; par 10 s'il finit par 0.",
        "Pour 3 et 9, on additionne tous les chiffres du nombre : si la somme est divisible par 3, le nombre l'est ; si la somme est divisible par 9, le nombre l'est aussi.",
      ],
      example: [
        "4 725 : il finit par 5 → divisible par 5, pas par 2 ni 10.",
        "Somme des chiffres : 4 + 7 + 2 + 5 = 18. Comme 18 est divisible par 9 (et par 3), 4 725 est divisible par 9 et par 3.",
      ],
      tip: "Deux familles de critères : 2, 5, 10 → regarde le DERNIER chiffre ; 3, 9 → additionne TOUS les chiffres. Ne mélange pas les deux !",
    },
    {
      title: "La division décimale",
      paragraphs: [
        "Parfois on ne veut pas de reste : on cherche un quotient décimal exact ou approché. Pour cela, on continue la division après la virgule en abaissant des zéros.",
        "Quand on dépasse la virgule du dividende, on place la virgule au quotient, puis on poursuit le calcul normalement.",
      ],
      example: [
        "9 ÷ 4 : 9 = 4 × 2 + 1. On place la virgule au quotient et on abaisse un 0 : 10 ÷ 4 → 2, reste 2. On abaisse encore un 0 : 20 ÷ 4 → 5, reste 0.",
        "Donc 9 ÷ 4 = 2,25.",
      ],
      tip: "Vérifie avec la multiplication : 4 × 2,25 = 9. Et garde un ordre de grandeur en tête : 9 ÷ 4, c'est un peu plus que 8 ÷ 4 = 2, donc un quotient proche de 2 est cohérent.",
    },
    {
      title: "Choisir la bonne division dans un problème",
      paragraphs: [
        "Face à un problème de partage, demande-toi quelle division a du sens. Pour partager une somme d'argent, un quotient décimal convient : 9 € pour 4 enfants, chacun reçoit 2,25 €.",
        "Mais pour des objets qu'on ne peut pas couper (cars, boîtes, personnes), c'est la division euclidienne qui s'impose, et il faut interpréter le reste : parfois on garde le quotient, parfois il faut ajouter 1.",
      ],
      example: [
        "130 élèves, des cars de 55 places : 130 = 55 × 2 + 20.",
        "Deux cars ne transportent que 110 élèves : il en reste 20 sur le trottoir !",
        "Il faut donc 3 cars.",
      ],
      tip: "Après une division dans un problème, pose-toi toujours la question : « que représente le reste ? ». C'est lui qui décide de la réponse finale.",
    },
  ],
  exercises: [
    {
      id: "div-1",
      level: 1,
      type: "qcm",
      question: "Dans la division euclidienne de 47 par 6, quel est le quotient ?",
      choices: ["6", "7", "8", "5"],
      answer: 1,
      explanation:
        "On cherche combien de fois 6 rentre dans 47 sans dépasser : 6 × 7 = 42 (ça passe) mais 6 × 8 = 48 (trop grand). Le quotient est donc 7, et le reste est 47 − 42 = 5. On vérifie : 47 = 6 × 7 + 5, avec 5 < 6.",
      hint: "Récite la table de 6 : quel est le dernier résultat qui ne dépasse pas 47 ?",
    },
    {
      id: "div-2",
      level: 1,
      type: "input",
      question: "Quel est le reste de la division euclidienne de 53 par 8 ?",
      answer: "5",
      explanation:
        "8 × 6 = 48 et 8 × 7 = 56 : trop grand. Le quotient est donc 6, et le reste est 53 − 48 = 5. On vérifie l'égalité : 53 = 8 × 6 + 5, et le reste 5 est bien plus petit que le diviseur 8.",
      hint: "Trouve d'abord le quotient avec la table de 8.",
    },
    {
      id: "div-3",
      level: 1,
      type: "truefalse",
      question: "18 est un multiple de 3.",
      answer: true,
      explanation:
        "Vrai ! 18 = 3 × 6 : la division de 18 par 3 tombe juste (reste 0). On peut le dire dans les deux sens : 18 est un multiple de 3, et 3 est un diviseur de 18. On le retrouve aussi avec le critère : 1 + 8 = 9, divisible par 3.",
    },
    {
      id: "div-4",
      level: 1,
      type: "qcm",
      question: "Lequel de ces nombres est divisible par 5 ?",
      choices: ["452", "505", "553", "351"],
      answer: 1,
      explanation:
        "Un nombre est divisible par 5 si son dernier chiffre est 0 ou 5. Seul 505 se termine par 5 : c'est lui (505 = 5 × 101). Attention au piège de 553 et 351 : ils contiennent un 5, mais ce qui compte, c'est uniquement le DERNIER chiffre.",
      hint: "Regarde seulement le chiffre des unités de chaque nombre.",
    },
    {
      id: "div-5",
      level: 2,
      type: "qcm",
      question: "Le nombre 4 725 est divisible par…",
      choices: ["2", "9", "10"],
      answer: 1,
      explanation:
        "4 725 finit par 5 : il n'est divisible ni par 2 (il faudrait 0, 2, 4, 6 ou 8) ni par 10 (il faudrait 0). Pour 9, on additionne les chiffres : 4 + 7 + 2 + 5 = 18, et 18 est divisible par 9. Donc 4 725 est divisible par 9 (et aussi par 3 et par 5, au passage).",
      hint: "Pour 2 et 10, regarde le dernier chiffre. Pour 9, additionne tous les chiffres.",
    },
    {
      id: "div-6",
      level: 2,
      type: "input",
      question:
        "Dans une division euclidienne par 7, le quotient est 12 et le reste est 4. Quel est le dividende ?",
      answer: "88",
      explanation:
        "On utilise l'égalité de la division euclidienne : dividende = diviseur × quotient + reste = 7 × 12 + 4 = 84 + 4 = 88. On vérifie que le reste est valable : 4 < 7, c'est bon. Cette égalité permet de retrouver n'importe lequel des quatre nombres quand on connaît les trois autres.",
      hint: "Dividende = diviseur × quotient + reste.",
    },
    {
      id: "div-7",
      level: 2,
      type: "input",
      question: "Calcule le quotient décimal : 37,5 ÷ 5",
      answer: "7,5",
      explanation:
        "On peut découper : 37,5 = 35 + 2,5. Or 35 ÷ 5 = 7 et 2,5 ÷ 5 = 0,5. Donc 37,5 ÷ 5 = 7,5. Vérification par la multiplication : 5 × 7,5 = 37,5. Et l'ordre de grandeur confirme : 37,5 ÷ 5 est proche de 35 ÷ 5 = 7.",
      hint: "Découpe 37,5 en 35 + 2,5 et divise chaque morceau par 5.",
    },
    {
      id: "div-8",
      level: 2,
      type: "truefalse",
      question: "Dans une division euclidienne, le reste peut être égal au diviseur.",
      answer: false,
      explanation:
        "Faux ! Le reste doit toujours être STRICTEMENT plus petit que le diviseur. Si le reste était égal au diviseur, on pourrait encore le diviser une fois : par exemple écrire 20 = 6 × 2 + 8 est faux comme division euclidienne, car 8 > 6 ; on peut faire mieux : 20 = 6 × 3 + 2. C'est la vérification à faire à chaque division.",
      hint: "Si le reste vaut le diviseur, que peut-on encore faire ?",
    },
    {
      id: "div-9",
      level: 3,
      type: "qcm",
      question:
        "On remplace le ? par un chiffre dans le nombre 5?4. Quel chiffre faut-il choisir pour que ce nombre soit divisible par 3 ?",
      choices: ["1", "2", "3", "4"],
      answer: 2,
      explanation:
        "Un nombre est divisible par 3 quand la somme de ses chiffres l'est. Ici : 5 + ? + 4 = 9 + ?. Il faut que 9 + ? soit divisible par 3, donc que ? soit 0, 3, 6 ou 9. Parmi les choix proposés, seul 3 convient : 534 = 3 × 178. Remarque : comme 9 est déjà un multiple de 3, tout se joue sur le chiffre manquant.",
      hint: "Calcule 5 + ? + 4 et cherche quand cette somme est dans la table de 3.",
    },
    {
      id: "div-10",
      level: 3,
      type: "input",
      question:
        "Pour une sortie scolaire, 130 élèves doivent monter dans des cars de 55 places. Combien de cars faut-il réserver ?",
      answer: "3",
      explanation:
        "Division euclidienne : 130 = 55 × 2 + 20. Avec 2 cars, on ne transporte que 110 élèves : il en reste 20 ! Comme on ne laisse personne sur le trottoir, il faut un car de plus pour eux : 3 cars. C'est le grand classique du reste : la réponse n'est pas le quotient (2), mais le quotient + 1, parce que le reste représente des élèves bien réels.",
      hint: "Combien d'élèves montent dans 2 cars ? Et que fait-on des autres ?",
    },
    {
      id: "div-11",
      level: 3,
      type: "input",
      question:
        "On partage équitablement 9 € entre 4 enfants. Combien chaque enfant reçoit-il (en €) ?",
      answer: "2,25",
      explanation:
        "Ici on peut « couper » les euros en centimes, donc on cherche un quotient décimal, pas une division euclidienne. 9 ÷ 4 : chacun reçoit 2 €, il reste 1 € = 100 centimes, soit 25 centimes chacun. Donc 9 ÷ 4 = 2,25 €. Vérification : 4 × 2,25 = 9. Compare avec l'exercice des cars : le contexte décide du type de division !",
      hint: "Continue la division après la virgule : 1 € restant, c'est 100 centimes à partager en 4.",
    },
    {
      id: "div-12",
      level: 3,
      type: "truefalse",
      question: "Un nombre divisible par 9 est toujours divisible par 3.",
      answer: true,
      explanation:
        "Vrai ! Si un nombre est divisible par 9, il s'écrit 9 × quelque chose, donc 3 × 3 × quelque chose : il est forcément divisible par 3. On le voit aussi avec les critères : une somme de chiffres divisible par 9 (comme 18) est toujours divisible par 3. Attention, l'inverse est faux : 12 est divisible par 3 mais pas par 9.",
      hint: "9, c'est 3 × 3…",
    },
  ],
  videos: [
    { title: "Poser une division euclidienne (avec reste) - Sixième", youtubeId: "2Ocfhucc58g", channel: "Yvan Monka" },
    { title: "Poser une division - CM2 / Sixième", youtubeId: "ZIwmQ3KSMH0", channel: "Yvan Monka" },
  ],
};
