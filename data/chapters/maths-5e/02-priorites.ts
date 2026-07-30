import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-priorites",
  subject: "maths",
  grade: "5e",
  num: 2,
  title: "Priorités de calcul",
  domain: "nombres",
  icon: "ListOrdered",
  teaser: "Dans quel ordre calculer ? Les règles qui mettent tout le monde d'accord.",
  objectives: [
    "Je connais les priorités entre les opérations dans un calcul",
    "Je sais utiliser des parenthèses et calculer ce qu'elles contiennent en premier",
    "Je sais effectuer un enchaînement d'opérations dans le bon ordre",
    "Je sais traduire une phrase en une expression de calcul",
  ],
  lesson: [
    {
      title: "Pourquoi des règles de priorité ?",
      paragraphs: [
        "Que vaut 7 + 3 × 5 ? Si on calcule de gauche à droite, on trouve 50. Si on commence par la multiplication, on trouve 22. Deux réponses pour un même calcul, c'est inacceptable en mathématiques !",
        "Les mathématiciens ont donc fixé des règles de priorité, les mêmes pour le monde entier (et pour ta calculatrice). Grâce à elles, 7 + 3 × 5 vaut 22, et une seule réponse est possible.",
      ],
      example: [
        "7 + 3 × 5 = 7 + 15 = 22 (la multiplication d'abord).",
        "Ta calculatrice connaît ces règles : tape 7 + 3 × 5 et elle affiche 22.",
      ],
      tip: "Une expression de calcul se lit comme une phrase avec sa grammaire : ce n'est pas forcément le premier mot (le premier calcul) qui compte d'abord.",
    },
    {
      title: "Les parenthèses d'abord",
      paragraphs: [
        "Règle numéro 1 : on effectue d'abord les calculs entre parenthèses. Les parenthèses servent justement à forcer un ordre différent de l'ordre habituel.",
        "S'il y a des parenthèses dans des parenthèses, on commence par les plus intérieures, puis on remonte vers l'extérieur.",
      ],
      example: [
        "(7 + 3) × 5 = 10 × 5 = 50.",
        "20 − (2 + 3) = 20 − 5 = 15.",
        "2 × (15 − (4 + 5)) = 2 × (15 − 9) = 2 × 6 = 12.",
      ],
      tip: "Recopie le calcul à chaque étape en ne remplaçant qu'une seule chose à la fois. Une ligne = une étape : c'est plus long à écrire, mais presque impossible de se tromper.",
    },
    {
      title: "× et ÷ avant + et −",
      paragraphs: [
        "Règle numéro 2 : sans parenthèses, les multiplications et les divisions sont prioritaires sur les additions et les soustractions.",
        "Entre opérations de même priorité (par exemple une suite de + et de −, ou une suite de × et de ÷), on calcule de gauche à droite.",
        "Une expression sans parenthèses se lit donc en deux temps : on repère d'abord les × et ÷, on les calcule, puis on termine par les + et − de gauche à droite.",
      ],
      example: [
        "20 − 2 × 3 + 4 = 20 − 6 + 4 = 14 + 4 = 18.",
        "36 ÷ 4 + 5 × 2 = 9 + 10 = 19.",
        "18 − 5 − 3 = 13 − 3 = 10 (même priorité : de gauche à droite).",
      ],
      tip: "Avant de calculer, souligne les multiplications et les divisions : ce sont elles que tu traiteras en premier.",
    },
    {
      title: "Calculer astucieusement",
      paragraphs: [
        "Quand un calcul ne contient que des multiplications, on peut changer l'ordre des facteurs et les regrouper comme on veut : le résultat ne change pas. Même chose pour une suite d'additions.",
        "Cette liberté permet des calculs malins : on regroupe les nombres qui vont bien ensemble, comme 25 × 4 = 100 ou 2 × 50 = 100.",
      ],
      example: [
        "25 × 17 × 4 = (25 × 4) × 17 = 100 × 17 = 1 700.",
        "1,8 + 5,7 + 0,2 = (1,8 + 0,2) + 5,7 = 2 + 5,7 = 7,7.",
      ],
      tip: "Repère les paires magiques : 25 × 4 = 100, 5 × 2 = 10, 50 × 2 = 100. Attention, ce regroupement libre ne marche pas avec les soustractions ni les divisions !",
    },
    {
      title: "Traduire une phrase en calcul",
      paragraphs: [
        "Chaque opération a un nom de résultat : une somme (+), une différence (−), un produit (×), un quotient (÷). « La somme de 8 et de 5 » se traduit par 8 + 5.",
        "Quand la phrase emboîte plusieurs opérations, le premier mot indique l'opération principale, celle qu'on ferait en dernier. « La somme de 8 et du produit de 3 par 4 » s'écrit 8 + 3 × 4 : c'est une somme, dont l'un des termes est un produit.",
        "Inversement, savoir dire un calcul avec des mots aide à vérifier qu'on a bien compris sa structure.",
      ],
      example: [
        "« Le produit de 6 par la somme de 2 et de 7 » : 6 × (2 + 7). Les parenthèses sont indispensables !",
        "« La différence entre 20 et le quotient de 12 par 4 » : 20 − 12 ÷ 4.",
      ],
      tip: "Pose-toi la question : « au final, ce calcul est-il une somme, une différence, un produit ou un quotient ? ». La réponse te donne l'opération principale.",
    },
  ],
  exercises: [
    {
      id: "m5pri-1",
      level: 1,
      type: "qcm",
      question: "Dans le calcul 7 + 3 × 5, quelle opération effectue-t-on en premier ?",
      choices: ["7 + 3", "3 × 5", "Celle qu'on veut", "7 × 5"],
      answer: 1,
      explanation:
        "Sans parenthèses, la multiplication est prioritaire sur l'addition : on calcule d'abord 3 × 5 = 15, puis 7 + 15 = 22. Calculer de gauche à droite donnerait 50, ce qui est faux.",
      hint: "× et ÷ passent avant + et −.",
    },
    {
      id: "m5pri-2",
      level: 1,
      type: "input",
      question: "Calcule : 7 + 3 × 5",
      answer: "22",
      explanation:
        "La multiplication d'abord : 3 × 5 = 15. Puis l'addition : 7 + 15 = 22. Le piège classique est de calculer 7 + 3 = 10 puis 10 × 5 = 50 : c'est l'erreur à éviter absolument.",
      hint: "Commence par la multiplication.",
    },
    {
      id: "m5pri-3",
      level: 1,
      type: "truefalse",
      question:
        "Dans un calcul sans parenthèses, on effectue toujours les opérations de gauche à droite.",
      answer: false,
      explanation:
        "Faux ! On effectue d'abord les multiplications et les divisions, même si elles sont à droite. La lecture de gauche à droite ne s'applique qu'entre opérations de même priorité. Exemple : 10 + 2 × 3 = 10 + 6 = 16, et non 36.",
    },
    {
      id: "m5pri-4",
      level: 1,
      type: "qcm",
      question: "Que vaut (7 + 3) × 5 ?",
      choices: ["22", "50", "38", "15"],
      answer: 1,
      explanation:
        "Les parenthèses sont prioritaires : 7 + 3 = 10, puis 10 × 5 = 50. Compare avec l'exercice précédent : les mêmes nombres, mais les parenthèses changent tout le résultat.",
      hint: "Les parenthèses d'abord, toujours.",
    },
    {
      id: "m5pri-5",
      level: 2,
      type: "input",
      question: "Calcule : 20 − 2 × 3 + 4",
      answer: "18",
      explanation:
        "Étape 1 : la multiplication, 2 × 3 = 6. Le calcul devient 20 − 6 + 4. Étape 2 : de gauche à droite, 20 − 6 = 14, puis 14 + 4 = 18. Piège : ne calcule pas 6 + 4 = 10 en premier ; entre − et +, c'est l'ordre de gauche à droite qui s'applique.",
      hint: "Multiplication d'abord, puis de gauche à droite.",
    },
    {
      id: "m5pri-6",
      level: 2,
      type: "input",
      question: "Calcule : 36 ÷ 4 + 5 × 2",
      answer: "19",
      explanation:
        "Les deux opérations prioritaires se calculent séparément : 36 ÷ 4 = 9 et 5 × 2 = 10. Il reste 9 + 10 = 19.",
      hint: "Repère les deux calculs prioritaires et traite-les chacun de leur côté.",
    },
    {
      id: "m5pri-7",
      level: 2,
      type: "qcm",
      question:
        "Comment traduit-on en calcul : « la somme de 8 et du produit de 3 par 4 » ?",
      choices: ["(8 + 3) × 4", "8 + 3 × 4", "8 × 3 + 4", "8 × (3 + 4)"],
      answer: 1,
      explanation:
        "Le premier mot est « somme » : l'opération principale est une addition. Ses deux termes sont 8 et « le produit de 3 par 4 », c'est-à-dire 3 × 4. On écrit donc 8 + 3 × 4, qui vaut 8 + 12 = 20. Pas besoin de parenthèses ici : la multiplication est déjà prioritaire.",
      hint: "Le premier mot de la phrase donne l'opération principale.",
    },
    {
      id: "m5pri-8",
      level: 2,
      type: "truefalse",
      question: "5 × (8 − 3) = 5 × 8 − 3",
      answer: false,
      explanation:
        "Faux ! À gauche : 5 × (8 − 3) = 5 × 5 = 25. À droite : 5 × 8 − 3 = 40 − 3 = 37. Supprimer des parenthèses change le sens du calcul : 25 ≠ 37.",
    },
    {
      id: "m5pri-9",
      level: 3,
      type: "input",
      question: "Calcule : 2 × (15 − (4 + 5))",
      answer: "12",
      explanation:
        "On part des parenthèses les plus intérieures : 4 + 5 = 9. Le calcul devient 2 × (15 − 9), puis 2 × 6 = 12. Méthode : une étape par ligne, en remplaçant une seule parenthèse à la fois.",
      hint: "Commence par la parenthèse la plus à l'intérieur.",
    },
    {
      id: "m5pri-10",
      level: 3,
      type: "qcm",
      question:
        "Pour calculer 25 × 17 × 4 de tête, quel regroupement est le plus astucieux ?",
      choices: [
        "(25 × 17) × 4",
        "25 × (17 × 4)",
        "(25 × 4) × 17",
        "Impossible de regrouper autrement",
      ],
      answer: 2,
      explanation:
        "Dans une suite de multiplications, on peut regrouper les facteurs librement. Or 25 × 4 = 100, un nombre très pratique : (25 × 4) × 17 = 100 × 17 = 1 700. Les autres regroupements donnent le même résultat, mais avec des calculs bien plus pénibles.",
      hint: "Cherche deux facteurs dont le produit vaut 100.",
    },
    {
      id: "m5pri-11",
      level: 3,
      type: "input",
      question:
        "Léa achète 3 cahiers à 2,50 € l'un et 2 stylos à 1,20 € l'un. Combien paie-t-elle en tout (en €) ?",
      answer: "9,90",
      accept: ["9,9"],
      explanation:
        "Le calcul se traduit par 3 × 2,50 + 2 × 1,20. Les produits d'abord : 3 × 2,50 = 7,50 et 2 × 1,20 = 2,40. Puis la somme : 7,50 + 2,40 = 9,90. Léa paie 9,90 €. Remarque : cette expression sans parenthèses est correcte, car les multiplications sont prioritaires.",
      hint: "Écris le calcul en une seule expression : prix des cahiers + prix des stylos.",
    },
    {
      id: "m5pri-12",
      level: 3,
      type: "truefalse",
      question: "48 − 8 ÷ 4 = 10",
      answer: false,
      explanation:
        "Faux ! La division est prioritaire : 8 ÷ 4 = 2, donc 48 − 8 ÷ 4 = 48 − 2 = 46. Pour obtenir 10, il aurait fallu écrire (48 − 8) ÷ 4 = 40 ÷ 4 = 10. Sans parenthèses, on ne commence jamais par la soustraction.",
      hint: "Qui est prioritaire : la soustraction ou la division ?",
    },
  ],
  videos: [
    { title: "Effectuer des calculs avec des priorités (2) - Cinquième", youtubeId: "kNOR38ZuBRc", channel: "Yvan Monka" },
  ],
};
