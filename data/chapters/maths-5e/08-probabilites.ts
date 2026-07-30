import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m5-probabilites",
  subject: "maths",
  grade: "5e",
  num: 8,
  title: "Probabilités",
  domain: "donnees",
  icon: "Dices",
  teaser: "Mettre un nombre sur le hasard : dés, pièces et tirages n'auront plus de secret.",
  objectives: [
    "Je connais le vocabulaire du hasard : expérience aléatoire, issue, événement",
    "Je sais qu'une probabilité est un nombre compris entre 0 et 1",
    "Je sais calculer une probabilité dans une situation d'équiprobabilité",
    "Je sais utiliser l'événement contraire",
    "Je sais lister les issues d'une expérience à deux étapes simple",
  ],
  lesson: [
    {
      title: "Le vocabulaire du hasard",
      paragraphs: [
        "Une expérience aléatoire est une expérience dont on ne peut pas prévoir le résultat à l'avance : lancer un dé, tirer une carte, lancer une pièce…",
        "Chaque résultat possible s'appelle une issue. Un événement est un ensemble d'issues : il est réalisé quand l'une de ses issues se produit.",
      ],
      example: [
        "On lance un dé à 6 faces. Les issues sont : 1, 2, 3, 4, 5 et 6.",
        "L'événement « obtenir un nombre pair » est réalisé par les issues 2, 4 et 6.",
      ],
      tip: "Pour ne pas les confondre : une issue est UN résultat précis, un événement peut regrouper PLUSIEURS issues.",
    },
    {
      title: "La probabilité : un nombre entre 0 et 1",
      paragraphs: [
        "La probabilité d'un événement mesure ses chances de se produire. C'est toujours un nombre compris entre 0 et 1.",
        "Un événement impossible a une probabilité de 0. Un événement certain a une probabilité de 1. Plus la probabilité est proche de 1, plus l'événement a de chances de se réaliser.",
        "Une probabilité peut s'écrire sous forme de fraction (1/4), d'écriture décimale (0,25) ou de pourcentage (25 %) : ce sont trois écritures du même nombre.",
      ],
      example: [
        "En lançant un dé à 6 faces : « obtenir 7 » est impossible, sa probabilité est 0.",
        "« Obtenir un nombre entre 1 et 6 » est certain, sa probabilité est 1.",
      ],
      tip: "Si ton calcul donne une probabilité plus grande que 1 ou négative, c'est forcément une erreur : vérifie-le tout de suite.",
    },
    {
      title: "L'équiprobabilité",
      figure: "mx-roue-secteurs",
      paragraphs: [
        "Il y a équiprobabilité quand toutes les issues ont exactement les mêmes chances de se produire : dé équilibré, pièce équilibrée, boules indiscernables au toucher…",
        "Dans ce cas, la probabilité d'un événement se calcule ainsi : nombre d'issues favorables ÷ nombre d'issues possibles.",
      ],
      example: [
        "Un sac contient 3 boules rouges et 7 boules bleues, indiscernables au toucher.",
        "Probabilité de tirer une boule rouge : 3/10, car 3 issues favorables sur 10 issues possibles.",
      ],
      tip: "Commence toujours par compter le nombre TOTAL d'issues : c'est le dénominateur de ta fraction.",
    },
    {
      title: "L'événement contraire",
      paragraphs: [
        "L'événement contraire d'un événement est réalisé exactement quand l'événement ne l'est pas. Le contraire de « obtenir un nombre pair » est « obtenir un nombre impair ».",
        "La somme des probabilités d'un événement et de son contraire vaut toujours 1. Si un événement a une probabilité p, son contraire a une probabilité 1 − p.",
      ],
      example: [
        "La probabilité qu'il pleuve demain est estimée à 0,3.",
        "La probabilité qu'il ne pleuve pas est donc 1 − 0,3 = 0,7.",
      ],
      tip: "Quand un événement est compliqué à étudier directement, regarde son contraire : il est souvent beaucoup plus simple.",
    },
    {
      title: "Expériences à deux étapes",
      paragraphs: [
        "Certaines expériences se déroulent en deux étapes : lancer une pièce deux fois, lancer une pièce puis un dé…",
        "Pour ne rien oublier, on liste méthodiquement toutes les issues possibles, par exemple dans un tableau : chaque case correspond à une combinaison.",
      ],
      example: [
        "On lance une pièce deux fois de suite (P = pile, F = face).",
        "Les issues sont : PP, PF, FP et FF, soit 4 issues en tout.",
        "La probabilité d'obtenir deux fois pile est donc 1/4.",
      ],
      tip: "PF et FP sont deux issues différentes : l'ordre compte ! C'est l'oubli le plus fréquent dans les expériences à deux étapes.",
    },
  ],
  exercises: [
    {
      id: "m5prb-1",
      level: 1,
      type: "qcm",
      question: "On lance un dé à 6 faces. Comment appelle-t-on le résultat « obtenir 4 » ?",
      choices: ["Une issue", "Une expérience", "Une probabilité", "Une fréquence"],
      answer: 0,
      explanation:
        "« Obtenir 4 » est un résultat possible de l'expérience : c'est une issue. L'expérience aléatoire, c'est le lancer du dé lui-même. La probabilité, c'est le nombre qui mesure les chances (ici 1/6).",
      hint: "Comment appelle-t-on chaque résultat possible d'une expérience aléatoire ?",
    },
    {
      id: "m5prb-2",
      level: 1,
      type: "qcm",
      question:
        "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir le nombre 3 ?",
      choices: ["1/6", "1/3", "3/6", "1/2"],
      answer: 0,
      explanation:
        "Le dé est équilibré : les 6 issues ont les mêmes chances. Une seule issue est favorable (le 3) sur 6 possibles, donc la probabilité est 1/6. Piège classique : 1/3 ou 3/6 mélangent le numéro de la face avec le nombre d'issues favorables.",
      hint: "Combien y a-t-il d'issues favorables ? Et d'issues possibles en tout ?",
    },
    {
      id: "m5prb-3",
      level: 1,
      type: "truefalse",
      question: "Une probabilité peut être égale à 1,5.",
      answer: false,
      explanation:
        "Faux ! Une probabilité est toujours comprise entre 0 (événement impossible) et 1 (événement certain). Un résultat comme 1,5 signale forcément une erreur de calcul.",
    },
    {
      id: "m5prb-4",
      level: 1,
      type: "input",
      question:
        "Un sac contient 5 boules indiscernables au toucher : 2 rouges et 3 bleues. On tire une boule au hasard. Quelle est la probabilité de tirer une boule rouge ? Donne la réponse sous la forme d'une fraction.",
      answer: "2/5",
      explanation:
        "Les boules sont indiscernables : il y a équiprobabilité. On compte 2 issues favorables (les boules rouges) sur 5 issues possibles (les 5 boules). La probabilité est donc 2/5. Attention à ne pas écrire 2/3 : on divise par le nombre TOTAL de boules, pas par le nombre de bleues.",
      hint: "Nombre de boules rouges divisé par le nombre total de boules.",
    },
    {
      id: "m5prb-5",
      level: 2,
      type: "qcm",
      question:
        "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
      choices: ["1/6", "1/2", "1/3", "2/3"],
      answer: 1,
      explanation:
        "Les nombres pairs du dé sont 2, 4 et 6 : cela fait 3 issues favorables sur 6 possibles. La probabilité est 3/6 = 1/2. Pense à simplifier la fraction quand c'est possible.",
      hint: "Liste d'abord toutes les issues qui réalisent l'événement.",
    },
    {
      id: "m5prb-6",
      level: 2,
      type: "input",
      question:
        "À un jeu, la probabilité de gagner est 0,3. Quelle est la probabilité de perdre ? Donne la réponse en écriture décimale.",
      answer: "0,7",
      accept: ["7/10"],
      explanation:
        "« Perdre » est l'événement contraire de « gagner ». La somme des deux probabilités vaut 1, donc la probabilité de perdre est 1 − 0,3 = 0,7.",
      hint: "Un événement et son contraire ont des probabilités dont la somme vaut 1.",
    },
    {
      id: "m5prb-7",
      level: 2,
      type: "truefalse",
      question:
        "Dans une expérience aléatoire équiprobable à 10 issues, chaque issue a une probabilité de 1/10.",
      answer: true,
      explanation:
        "Vrai ! Équiprobable signifie que toutes les issues ont les mêmes chances. Comme la somme de toutes les probabilités vaut 1, chacune des 10 issues a une probabilité de 1/10.",
    },
    {
      id: "m5prb-8",
      level: 2,
      type: "qcm",
      question:
        "Une roue de loterie est partagée en 8 secteurs identiques : 3 jaunes, 4 verts et 1 rouge. Quelle est la probabilité que la roue s'arrête sur un secteur jaune ?",
      choices: ["3/8", "1/3", "3/5", "1/8"],
      answer: 0,
      explanation:
        "Les 8 secteurs sont identiques : il y a équiprobabilité. On compte 3 secteurs jaunes sur 8 secteurs en tout, donc la probabilité est 3/8. Le piège 1/3 vient d'une confusion avec le nombre de couleurs.",
      hint: "Les 8 secteurs identiques sont les 8 issues possibles.",
    },
    {
      id: "m5prb-9",
      level: 3,
      type: "input",
      question:
        "Un sac contient 12 boules indiscernables au toucher : 5 vertes, 4 rouges et le reste sont noires. Quelle est la probabilité de tirer une boule noire ? Donne la réponse sous la forme d'une fraction simplifiée.",
      answer: "1/4",
      accept: ["3/12", "0,25"],
      explanation:
        "On commence par trouver le nombre de boules noires : 12 − 5 − 4 = 3. La probabilité est donc 3/12, qui se simplifie en 1/4. Piège classique : oublier de calculer d'abord le nombre de boules noires.",
      hint: "Combien y a-t-il de boules noires dans le sac ?",
    },
    {
      id: "m5prb-10",
      level: 3,
      type: "qcm",
      question:
        "On lance une pièce équilibrée deux fois de suite. Combien cette expérience a-t-elle d'issues possibles ?",
      choices: ["2", "3", "4", "6"],
      answer: 2,
      explanation:
        "En notant P pour pile et F pour face, les issues sont : PP, PF, FP et FF, soit 4 issues. Le piège est de répondre 3 en confondant PF et FP : l'ordre des lancers compte, ce sont deux issues différentes.",
      hint: "Note P pour pile et F pour face, puis liste toutes les combinaisons.",
    },
    {
      id: "m5prb-11",
      level: 3,
      type: "truefalse",
      question:
        "On lance une pièce équilibrée deux fois de suite. La probabilité d'obtenir deux fois pile est 1/4.",
      answer: true,
      explanation:
        "Vrai ! Les 4 issues PP, PF, FP et FF ont toutes les mêmes chances. Une seule est favorable (PP), donc la probabilité est 1/4. Beaucoup répondent 1/2 en oubliant de lister toutes les issues.",
      hint: "Combien y a-t-il d'issues possibles en tout ? Combien sont favorables ?",
    },
    {
      id: "m5prb-12",
      level: 3,
      type: "input",
      question:
        "Pour une tombola, 200 tickets sont vendus, tous avec les mêmes chances. Il y a 8 tickets gagnants. Léa achète un ticket. Quelle est la probabilité qu'il soit gagnant ? Donne la réponse en écriture décimale.",
      answer: "0,04",
      accept: ["8/200", "1/25", "4/100"],
      explanation:
        "Il y a équiprobabilité : 8 issues favorables sur 200 possibles, soit 8/200. Pour passer en écriture décimale : 8 ÷ 200 = 0,04. On peut aussi simplifier : 8/200 = 4/100 = 0,04, soit 4 % de chances.",
      hint: "Calcule 8/200, puis transforme la fraction en nombre décimal.",
    },
  ],
  videos: [
    { title: "Effectuer des calculs de probabilités très simples - Sixième - Cinquième", youtubeId: "a9Mb5v7Z4Mw", channel: "Yvan Monka" },
  ],
};
