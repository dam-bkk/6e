import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "inter-olympie",
  subject: "inter",
  grade: "6e",
  num: 2,
  title: "Mission Jeux d'Olympie",
  domain: "geometrie",
  domainLabel: "Mission",
  icon: "Medal",
  teaser: "Deviens reporter aux Jeux, des athlètes grecs de 776 av. J.-C. aux champions d'aujourd'hui.",
  objectives: [
    "Je sais calculer une moyenne simple, lire un tableau et convertir des minutes en secondes",
    "Je connais les repères des Jeux antiques (776 av. J.-C., Olympie, Zeus) et modernes (1896)",
    "Je sais utiliser « can » et le vocabulaire des sports en anglais",
    "Je sais expliquer les valeurs du sport avec un vocabulaire précis",
  ],
  lesson: [
    {
      title: "Reporter dans le temps",
      paragraphs: [
        "Ta rédaction t'offre une mission de rêve : couvrir les Jeux olympiques… à deux époques différentes. Premier arrêt : Olympie, en Grèce, en 776 av. J.-C., date des premiers Jeux connus.",
        "Là-bas, les cités grecques — de petits États indépendants, souvent rivaux — envoient leurs meilleurs athlètes concourir en l'honneur de Zeus, le roi des dieux. Pendant les Jeux, une trêve sacrée suspend les guerres.",
      ],
      example: [
        "Premiers Jeux connus : 776 av. J.-C., au sanctuaire d'Olympie.",
        "Ils sont organisés en l'honneur de Zeus, tous les 4 ans.",
      ],
      tip: "Une cité grecque, ce n'est pas qu'une ville : c'est un petit État avec sa ville, ses campagnes et ses propres lois.",
      figure: "int-olympie",
    },
    {
      title: "Des Jeux antiques aux Jeux modernes",
      paragraphs: [
        "Deuxième arrêt : Athènes, 1896. Le Français Pierre de Coubertin vient de relancer les Jeux, disparus depuis l'Antiquité. Depuis, ils ont lieu tous les 4 ans et rassemblent le monde entier.",
        "Pour ton article, retiens les valeurs olympiques : l'excellence (donner le meilleur de soi), l'amitié entre les peuples et le respect des règles et des adversaires — ce qu'on appelle la loyauté.",
      ],
      example: [
        "Jeux modernes relancés en 1896 à Athènes par Pierre de Coubertin.",
        "Un sportif loyal respecte les règles et ses adversaires, même dans la défaite.",
      ],
      tip: "Entre 776 av. J.-C. et 1896, il s'écoule environ 776 + 1896 ≈ 2 670 ans : additionne les deux nombres quand on traverse la naissance de J.-C.",
    },
    {
      title: "Les chiffres du reporter",
      paragraphs: [
        "Un bon reporter sportif jongle avec les nombres : temps de course, tableaux de médailles, records.",
        "Pour comparer des performances, tu utiliseras la moyenne : on additionne toutes les valeurs, puis on divise par le nombre de valeurs. Et pour les temps, souviens-toi : 1 minute = 60 secondes, 1 heure = 60 minutes.",
      ],
      example: [
        "Moyenne de 10 s, 12 s et 14 s : (10 + 12 + 14) ÷ 3 = 36 ÷ 3 = 12 s.",
        "2 min 30 s = 120 s + 30 s = 150 s.",
      ],
      tip: "Dans un tableau de médailles, vérifie toujours si on te demande une colonne (l'or) ou le total de la ligne.",
    },
    {
      title: "Interview in English",
      paragraphs: [
        "Aux Jeux modernes, tes interviews se font en anglais. Pour dire ce qu'on sait faire, on utilise « can » suivi du verbe : il ne change jamais, quelle que soit la personne.",
      ],
      example: [
        "I can run = je sais courir ; she can swim = elle sait nager",
        "He can jump very high. = Il sait sauter très haut.",
        "run = courir ; swim = nager ; jump = sauter ; ride = monter (à cheval, à vélo)",
      ],
      tip: "« Can » est identique à toutes les personnes : I can, you can, she can — jamais de « s » ni de « to » après.",
    },
  ],
  exercises: [
    {
      id: "iolm-1",
      level: 1,
      type: "qcm",
      question:
        "[Histoire] Ton premier article commence par cette question : en l'honneur de quel dieu les Jeux d'Olympie étaient-ils organisés en 776 av. J.-C. ?",
      choices: ["Zeus", "Poséidon", "Apollon", "Arès"],
      answer: 0,
      explanation:
        "Les Jeux d'Olympie étaient organisés en l'honneur de Zeus, le roi des dieux grecs. Le sanctuaire d'Olympie abritait d'ailleurs une statue géante de Zeus, l'une des sept merveilles du monde antique.",
    },
    {
      id: "iolm-2",
      level: 1,
      type: "input",
      question:
        "[Maths] Le chronométreur t'annonce qu'une course a duré exactement 2 minutes. Combien cela fait-il de secondes ?",
      answer: "120",
      explanation:
        "1 minute = 60 secondes. Donc 2 minutes = 2 × 60 = 120 secondes.",
      hint: "1 min = 60 s.",
    },
    {
      id: "iolm-3",
      level: 1,
      type: "qcm",
      question:
        "[Anglais] Pendant ton interview, un athlète te dit fièrement : « I can swim. » Que veut-il dire ?",
      choices: ["Je sais nager", "J'aime l'eau", "Je vais gagner", "Je suis fatigué"],
      answer: 0,
      explanation:
        "« Can » exprime la capacité (savoir / pouvoir faire quelque chose) et « swim » signifie « nager ». « I can swim » = « Je sais nager ».",
    },
    {
      id: "iolm-4",
      level: 1,
      type: "qcm",
      question:
        "[Français] Pour ton article sur les valeurs du sport, tu veux employer le mot juste. Un sportif « loyal », c'est un sportif…",
      choices: [
        "qui respecte les règles et ses adversaires",
        "qui gagne toutes ses courses",
        "qui court très vite",
        "qui parle plusieurs langues",
      ],
      answer: 0,
      explanation:
        "« Loyal » signifie honnête et fidèle aux règles : un sportif loyal ne triche pas et respecte ses adversaires, qu'il gagne ou qu'il perde. C'est le contraire de « déloyal ».",
    },
    {
      id: "iolm-5",
      level: 2,
      type: "input",
      question:
        "[Maths] Tu chronomètres trois sprinteurs à l'entraînement : 12 s, 14 s et 13 s. Quelle est la moyenne de leurs temps, en secondes ?",
      answer: "13",
      explanation:
        "On additionne les trois temps : 12 + 14 + 13 = 39. Puis on divise par le nombre de coureurs : 39 ÷ 3 = 13. La moyenne est de 13 secondes.",
      hint: "Additionne les trois temps, puis divise par 3.",
    },
    {
      id: "iolm-6",
      level: 2,
      type: "truefalse",
      question:
        "[Histoire] Les Jeux antiques commencent en 776 av. J.-C. et les Jeux modernes sont relancés en 1896 à Athènes : plus de 2 500 ans séparent donc ces deux dates.",
      answer: true,
      explanation:
        "Vrai ! Quand on traverse la naissance de J.-C., on additionne : 776 + 1896 ≈ 2 670 ans. C'est bien plus de 2 500 ans entre les premiers Jeux et leur renaissance par Pierre de Coubertin.",
      hint: "Pour une durée qui traverse la naissance de J.-C., additionne les deux nombres.",
    },
    {
      id: "iolm-7",
      level: 2,
      type: "qcm",
      question:
        "[Maths] Ton tableau des médailles indique — Pays A : 12 médailles d'or et 8 d'argent ; Pays B : 9 d'or et 15 d'argent. Quel pays a remporté le plus de médailles au total ?",
      choices: [
        "Le pays B, avec 24 médailles",
        "Le pays A, avec 20 médailles",
        "Égalité : 20 médailles chacun",
        "Le pays A, avec 24 médailles",
      ],
      answer: 0,
      explanation:
        "Pays A : 12 + 8 = 20 médailles. Pays B : 9 + 15 = 24 médailles. Le pays B en a le plus, même s'il a moins de médailles d'or : tout dépend de ce qu'on compte !",
      hint: "Additionne l'or et l'argent pour chaque pays.",
    },
    {
      id: "iolm-8",
      level: 2,
      type: "input",
      question:
        "[Anglais] Complète la phrase de ton interview : « She … ride a horse » (elle sait monter à cheval). Écris le mot manquant en minuscules.",
      answer: "can",
      explanation:
        "Pour exprimer une capacité, on utilise « can » : « She can ride a horse. » Attention : « can » ne prend jamais de « s », même avec he ou she.",
      hint: "C'est le même mot qu'on emploie dans « I can swim ».",
    },
    {
      id: "iolm-9",
      level: 3,
      type: "input",
      question:
        "[Maths] Le vainqueur du marathon a couru pendant 2 h 15 min. Combien cela fait-il de minutes en tout ?",
      answer: "135",
      explanation:
        "1 heure = 60 minutes, donc 2 h = 2 × 60 = 120 min. On ajoute les 15 minutes restantes : 120 + 15 = 135 minutes.",
      hint: "Convertis d'abord les 2 heures en minutes, puis ajoute 15.",
    },
    {
      id: "iolm-10",
      level: 3,
      type: "input",
      question:
        "[Maths] Aux Jeux modernes, une course de 4 800 m se dispute sur une piste de 400 m. Combien de tours complets les coureurs effectuent-ils ?",
      answer: "12",
      explanation:
        "On cherche combien de fois 400 m tient dans 4 800 m : 4 800 ÷ 400 = 12. Les coureurs font 12 tours complets de piste.",
      hint: "Combien de fois 400 tient-il dans 4 800 ?",
    },
    {
      id: "iolm-11",
      level: 3,
      type: "qcm",
      question:
        "[Histoire] Pour présenter les concurrents antiques à tes lecteurs, tu dois expliquer d'où ils viennent. Dans la Grèce antique, qu'est-ce qu'une cité ?",
      choices: [
        "Un petit État indépendant, avec sa ville, ses campagnes et ses propres lois",
        "Un simple village de pêcheurs",
        "Une province de l'Empire romain",
        "Un quartier réservé aux athlètes",
      ],
      answer: 0,
      explanation:
        "Une cité grecque (polis) est un petit État indépendant : une ville, les campagnes qui l'entourent, ses lois, sa monnaie et ses dieux protecteurs. Athènes et Sparte sont les plus célèbres — souvent rivales, sauf pendant la trêve sacrée des Jeux.",
    },
    {
      id: "iolm-12",
      level: 3,
      type: "input",
      question:
        "[Français] Relis la phrase de ton article : « Les athlètes concourent pour la gloire de leur cité. » Relève le verbe conjugué.",
      answer: "concourent",
      explanation:
        "Le verbe conjugué est « concourent » : c'est le verbe « concourir » au présent, à la 3e personne du pluriel, accordé avec le sujet « les athlètes ». « Gloire » et « cité » sont des noms, pas des verbes.",
      hint: "Cherche le mot qui changerait si le sujet devenait « l'athlète ».",
    },
  ],
  videos: [
    { title: "L'histoire des jeux Olympiques | C'est toujours pas sorcier + | Lumni", youtubeId: "sp1YNLbSd3I", channel: "Lumni" },
  ],
};
