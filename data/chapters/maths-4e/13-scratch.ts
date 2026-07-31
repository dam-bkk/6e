import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-scratch",
  subject: "maths",
  grade: "4e",
  num: 13,
  title: "Programmer : boucles et variables",
  domain: "donnees",
  icon: "Blocks",
  teaser: "Boucles, variables et conditions : apprends à lire un script et à prédire ce qu'il fait, sans même l'exécuter.",
  objectives: [
    "Je sais lire une séquence d'instructions et prédire son résultat",
    "Je sais utiliser une boucle « répéter n fois » pour éviter les répétitions",
    "Je sais suivre l'évolution d'une variable (score, compteur) pas à pas",
    "Je sais utiliser une condition « si… sinon… » dans un script",
    "Je sais tracer un polygone régulier en tournant de 360 ÷ n degrés",
  ],
  lesson: [
    {
      title: "Un programme est une séquence d'instructions",
      paragraphs: [
        "Un programme (ou script) est une liste d'instructions que l'ordinateur exécute dans l'ordre, de haut en bas, sans jamais improviser. Dans Scratch, chaque instruction est un bloc que l'on emboîte avec les autres.",
        "L'ordre des instructions est essentiel : « avancer de 50 puis tourner de 90° » ne donne pas le même dessin que « tourner de 90° puis avancer de 50 ».",
        "Pour prédire ce que fait un script, on joue le rôle de l'ordinateur : on lit les instructions une par une et on note ce qui se passe à chaque étape. C'est ce qu'on appelle « exécuter le script à la main ».",
      ],
      example: [
        "Script : avancer de 100 pas, tourner de 90° à droite, avancer de 100 pas.",
        "Le lutin trace deux segments de même longueur formant un angle droit : un « L » couché.",
        "Si on échange les deux premières instructions, le dessin obtenu est orienté différemment.",
      ],
      tip: "Pour comprendre un script, lis-le comme une recette de cuisine : une étape à la fois, dans l'ordre, sans en sauter.",
    },
    {
      title: "Les boucles : répéter n fois",
      paragraphs: [
        "Quand des instructions se répètent à l'identique, on les place dans une boucle « répéter n fois » : le bloc exécute n fois de suite tout ce qu'il contient.",
        "Une boucle rend le script plus court et plus lisible : au lieu d'écrire 4 fois « avancer de 100, tourner de 90° », on écrit une seule fois ces deux blocs dans « répéter 4 fois ».",
        "Pour prédire l'effet d'une boucle, calcule : (nombre de répétitions) × (effet d'un tour de boucle). Par exemple, répéter 5 fois « avancer de 20 pas » fait avancer de 5 × 20 = 100 pas.",
      ],
      example: [
        "« Répéter 4 fois [avancer de 100, tourner de 90°] » trace un carré de côté 100.",
        "« Répéter 3 fois [avancer de 80, tourner de 120°] » trace un triangle équilatéral.",
        "« Répéter 6 fois [ajouter 10 au score] » augmente le score de 6 × 10 = 60.",
      ],
      tip: "Effet total d'une boucle = nombre de tours × effet d'un tour. Ce simple produit évite de dérouler la boucle à la main.",
    },
    {
      title: "Les variables : mémoriser une valeur",
      paragraphs: [
        "Une variable est une petite boîte avec un nom (score, compteur, vies…) dans laquelle le programme range un nombre. On peut lire cette valeur, la remplacer ou la modifier à tout moment.",
        "Deux blocs à ne pas confondre : « mettre score à 5 » remplace le contenu de la boîte par 5, tandis que « ajouter 5 à score » augmente le contenu actuel de 5.",
        "Pour suivre une variable, fais un tableau d'évolution : une ligne par instruction, avec la valeur de la variable après chaque étape. C'est la méthode la plus sûre pour prédire le résultat final.",
      ],
      example: [
        "score ← 10, puis « ajouter 5 à score » : score vaut 15.",
        "Encore « ajouter 5 à score » : score vaut 20.",
        "Puis « mettre score à 3 » : score vaut 3 (l'ancienne valeur est effacée).",
      ],
      tip: "« Mettre à » écrase, « ajouter » cumule. Trace un tableau pas à pas dès que le script dépasse trois instructions.",
    },
    {
      title: "Les conditions : si… sinon…",
      paragraphs: [
        "Le bloc « si… alors… sinon… » permet au programme de choisir entre deux chemins selon qu'une condition est vraie ou fausse.",
        "La condition est un test qui répond par vrai ou faux : « score > 10 », « compteur = 5 », « réponse < 0 »… Si le test est vrai, on exécute les instructions du « alors » ; sinon, celles du « sinon ».",
        "Une condition placée dans une boucle est testée à chaque tour : elle peut donc être vraie à certains tours et fausse à d'autres.",
      ],
      example: [
        "n vaut 7. Script : si n > 5, dire « grand », sinon dire « petit ».",
        "Le test « 7 > 5 » est vrai, donc le lutin dit « grand ».",
        "Si n valait 3, le test serait faux et le lutin dirait « petit ».",
      ],
      tip: "Remplace la variable par sa valeur du moment, puis pose-toi la question : le test est-il vrai ou faux ? Un seul des deux chemins est exécuté, jamais les deux.",
    },
    {
      title: "Tracer des polygones réguliers : l'angle 360 ÷ n",
      paragraphs: [
        "Pour tracer un polygone régulier à n côtés, le lutin répète n fois : « avancer de la longueur du côté, puis tourner de 360 ÷ n degrés ».",
        "Pourquoi 360 ÷ n ? En faisant le tour complet de la figure, le lutin revient dans sa position de départ : il a tourné de 360° en tout. Comme il tourne n fois du même angle, chaque rotation vaut 360 ÷ n.",
        "Attention : l'angle de rotation du lutin est l'angle extérieur du polygone, pas l'angle intérieur. Pour un triangle équilatéral, le lutin tourne de 120°, alors que les angles intérieurs mesurent 60°.",
      ],
      example: [
        "Carré (n = 4) : tourner de 360 ÷ 4 = 90° à chaque sommet.",
        "Hexagone régulier (n = 6) : tourner de 360 ÷ 6 = 60°.",
        "À l'inverse, si le lutin tourne de 24° à chaque sommet : n = 360 ÷ 24 = 15 côtés.",
      ],
      tip: "Angle de rotation = 360 ÷ nombre de côtés. Et dans l'autre sens : nombre de côtés = 360 ÷ angle de rotation.",
    },
  ],
  exercises: [
    {
      id: "m4scr-1",
      level: 1,
      type: "qcm",
      question: "Que trace le script « répéter 4 fois [avancer de 100 pas, tourner de 90°] » ?",
      choices: ["Un carré", "Un triangle", "Un rectangle non carré", "Une ligne droite"],
      answer: 0,
      explanation:
        "Le lutin trace 4 côtés de même longueur (100 pas) en tournant de 90° à chaque sommet : c'est un carré. On vérifie l'angle : 360 ÷ 4 = 90°, le lutin fait bien un tour complet. Un rectangle non carré demanderait deux longueurs différentes.",
      hint: "Compte le nombre de côtés tracés et regarde l'angle entre eux.",
    },
    {
      id: "m4scr-2",
      level: 1,
      type: "input",
      question: "Un script contient « répéter 5 fois [avancer de 20 pas] ». De combien de pas le lutin avance-t-il en tout ?",
      answer: "100",
      explanation:
        "La boucle exécute 5 fois l'instruction « avancer de 20 pas ». Effet total : 5 × 20 = 100 pas. Une boucle « répéter n fois » multiplie l'effet d'un tour par n.",
      hint: "Effet total = nombre de répétitions × avancée d'un tour.",
    },
    {
      id: "m4scr-3",
      level: 1,
      type: "truefalse",
      question: "Dans un programme, l'ordre des instructions n'a pas d'importance.",
      answer: false,
      explanation:
        "Faux ! L'ordinateur exécute les instructions dans l'ordre, de haut en bas. « Avancer de 50 puis tourner de 90° » ne donne pas le même résultat que « tourner de 90° puis avancer de 50 » : dans le premier cas le lutin avance dans sa direction de départ, dans le second il avance dans une nouvelle direction.",
    },
    {
      id: "m4scr-4",
      level: 1,
      type: "qcm",
      question: "La variable score vaut 10. On exécute « ajouter 5 à score » puis encore « ajouter 5 à score ». Que vaut score à la fin ?",
      choices: ["20", "15", "5", "10"],
      answer: 0,
      explanation:
        "On suit la variable pas à pas : score vaut 10, puis 10 + 5 = 15, puis 15 + 5 = 20. Le bloc « ajouter » cumule les valeurs, il n'écrase pas l'ancienne. Piège : 5 serait la réponse si le bloc était « mettre score à 5 ».",
      hint: "Fais un tableau : valeur de score après chaque instruction.",
    },
    {
      id: "m4scr-5",
      level: 2,
      type: "input",
      question: "Pour tracer un hexagone régulier (6 côtés), de combien de degrés le lutin doit-il tourner à chaque sommet ?",
      answer: "60",
      accept: ["60°"],
      explanation:
        "En traçant le polygone complet, le lutin tourne de 360° en tout, réparti sur 6 rotations égales : 360 ÷ 6 = 60°. Piège : 120° est l'angle intérieur de l'hexagone, mais le lutin tourne de l'angle extérieur.",
      hint: "L'angle de rotation d'un polygone régulier à n côtés vaut 360 ÷ n.",
    },
    {
      id: "m4scr-6",
      level: 2,
      type: "qcm",
      question: "Script : « mettre score à 0 » puis « répéter 3 fois [ajouter 4 à score, retirer 1 à score] ». Que vaut score à la fin ?",
      choices: ["9", "12", "3", "11"],
      answer: 0,
      explanation:
        "Un tour de boucle fait gagner 4 puis perdre 1, soit + 3 au total. La boucle tourne 3 fois : 3 × 3 = 9. Vérification pas à pas : 0 → 4 → 3 → 7 → 6 → 10 → 9. Piège : 12 oublie le « retirer 1 » de chaque tour.",
      hint: "Calcule d'abord l'effet d'UN tour de boucle, puis multiplie par 3.",
    },
    {
      id: "m4scr-7",
      level: 2,
      type: "truefalse",
      question: "Le bloc « répéter 10 fois » exécute une seule fois les instructions qu'il contient, puis s'arrête.",
      answer: false,
      explanation:
        "Faux ! C'est tout l'intérêt de la boucle : les instructions placées à l'intérieur sont exécutées 10 fois de suite, l'une après l'autre. C'est seulement après le 10e tour que le programme passe aux instructions situées après la boucle.",
      hint: "À quoi servirait une boucle qui n'exécute son contenu qu'une seule fois ?",
    },
    {
      id: "m4scr-8",
      level: 2,
      type: "truefalse",
      question: "La variable n vaut 7. Le script « si n > 5 alors dire « grand » sinon dire « petit » » fait dire « petit » au lutin.",
      answer: false,
      explanation:
        "Faux ! On remplace n par sa valeur : le test devient « 7 > 5 », qui est vrai. Le programme exécute donc la branche « alors » et le lutin dit « grand ». La branche « sinon » n'est exécutée que lorsque le test est faux, c'est-à-dire pour n inférieur ou égal à 5.",
      hint: "Remplace n par 7 dans le test : est-il vrai ou faux ?",
    },
    {
      id: "m4scr-9",
      level: 3,
      type: "qcm",
      question: "Que trace le script « répéter 8 fois [avancer de 40 pas, tourner de 45°] » ?",
      choices: ["Un octogone régulier", "Un carré", "Un hexagone régulier", "Une étoile à 8 branches"],
      answer: 0,
      explanation:
        "Le lutin trace 8 côtés égaux de 40 pas en tournant de 45° à chaque sommet. On vérifie : 8 × 45 = 360°, le lutin fait exactement un tour complet, la figure se referme. C'est donc un polygone régulier à 8 côtés : un octogone régulier.",
      hint: "Combien de côtés sont tracés ? Vérifie que 8 × 45 = 360.",
    },
    {
      id: "m4scr-10",
      level: 3,
      type: "input",
      question: "Un lutin trace un polygone régulier en tournant de 24° à chaque sommet. Combien ce polygone a-t-il de côtés ?",
      answer: "15",
      explanation:
        "Pour un polygone régulier à n côtés, l'angle de rotation vaut 360 ÷ n. Ici on connaît l'angle et on cherche n : n = 360 ÷ 24 = 15. Le polygone a 15 côtés. Vérification : 15 × 24 = 360°, le tour complet.",
      hint: "C'est la formule 360 ÷ n à l'envers : divise 360 par l'angle de rotation.",
    },
    {
      id: "m4scr-11",
      level: 3,
      type: "truefalse",
      question: "Script : « mettre compteur à 1 » puis « répéter 4 fois [mettre compteur à compteur × 2] ». À la fin, compteur vaut 8.",
      answer: false,
      explanation:
        "Faux ! On suit la variable tour par tour : 1 → 2 → 4 → 8 → 16. La boucle double le compteur 4 fois, donc compteur vaut 16 à la fin. La valeur 8 est celle obtenue après seulement 3 tours : c'est le piège classique du décompte des tours de boucle.",
      hint: "Déroule les 4 tours un par un en partant de 1.",
    },
    {
      id: "m4scr-12",
      level: 3,
      type: "input",
      question: "Script : « mettre score à 0 », « mettre compteur à 0 », puis « répéter 6 fois [ajouter 1 à compteur, si compteur est pair alors ajouter 2 à score] ». Que vaut score à la fin ?",
      answer: "6",
      explanation:
        "On déroule la boucle : compteur prend les valeurs 1, 2, 3, 4, 5, 6. La condition « compteur est pair » est vraie aux tours où compteur vaut 2, 4 et 6, soit 3 fois. Le score augmente donc de 3 × 2 = 6. Piège : la condition est testée à chaque tour, mais elle n'est vraie qu'un tour sur deux.",
      hint: "Liste les valeurs successives du compteur et repère celles qui sont paires.",
    },
  ],
};
