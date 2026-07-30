import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "inter-pyramides",
  subject: "inter",
  grade: "6e",
  num: 1,
  title: "Mission pyramides",
  domain: "nombres",
  domainLabel: "Mission",
  icon: "Pyramid",
  teaser: "Pars en expédition en Égypte antique : grands nombres, pharaons et secrets du Nil.",
  objectives: [
    "Je sais utiliser les grands nombres, les durées et le périmètre du carré dans une situation concrète",
    "Je connais les repères essentiels de l'Égypte antique : pharaon, hiéroglyphes, pyramide de Khéops",
    "Je sais reconnaître les changements d'état de l'eau autour du Nil",
    "Je connais quelques mots d'anglais indispensables au voyage",
  ],
  lesson: [
    {
      title: "Ta mission en Égypte",
      paragraphs: [
        "Le Bureau des explorations t'envoie sur le chantier le plus célèbre de l'Histoire : la grande pyramide de Khéops, achevée vers 2560 av. J.-C., il y a environ 4 500 ans. Ta mission : tout mesurer, tout compter, tout noter.",
        "Là-bas, le chef suprême est le pharaon : à la fois roi, chef des armées et chef religieux. Ses scribes notent tout à l'aide d'une écriture faite de petits dessins : les hiéroglyphes. Il faudra attendre 1822 pour que le Français Jean-François Champollion parvienne à les déchiffrer.",
      ],
      example: [
        "Repères à retenir : pyramide de Khéops achevée vers 2560 av. J.-C.",
        "Hiéroglyphes déchiffrés par Champollion en 1822.",
      ],
      tip: "Avec les dates « av. J.-C. », on compte à rebours : plus le nombre est grand, plus l'événement est ancien.",
      figure: "int-pyramides",
    },
    {
      title: "Les nombres du chantier",
      paragraphs: [
        "Sur le chantier, tout est géant. La base de la pyramide est un carré de 230 m de côté, et il a fallu environ 2 300 000 blocs de pierre pour la construire, en une vingtaine d'années.",
        "Deux outils de mathématicien te seront utiles : le périmètre d'un carré (P = 4 × côté) et la lecture des grands nombres par tranches de 3 chiffres.",
      ],
      example: [
        "Périmètre d'un carré de 50 m de côté : 4 × 50 = 200 m.",
        "2 300 000 se lit « deux millions trois cent mille ».",
      ],
      tip: "Pour lire un grand nombre, découpe-le en tranches de 3 chiffres en partant de la droite : 2 300 000.",
    },
    {
      title: "Le Nil, fleuve nourricier",
      paragraphs: [
        "Sans le Nil, pas d'Égypte : sa crue annuelle dépose sur les rives un limon fertile qui permet les récoltes.",
        "Autour du fleuve, l'eau change sans cesse d'état. Sous le soleil, l'eau liquide s'évapore et devient de la vapeur (un gaz invisible) : c'est l'évaporation. La nuit, en se refroidissant, la vapeur redevient liquide : c'est la liquéfaction.",
      ],
      example: [
        "Liquide → gaz : évaporation (une flaque qui disparaît au soleil).",
        "Gaz → liquide : liquéfaction (la rosée du matin).",
      ],
      tip: "La vapeur d'eau est invisible : le « nuage » au-dessus d'une casserole, ce sont déjà de fines gouttelettes liquides.",
    },
    {
      title: "Ton carnet d'anglais",
      paragraphs: [
        "L'expédition est internationale et la langue de bord est l'anglais. Note les mots essentiels du voyage avant le départ.",
      ],
      example: [
        "a boat = un bateau ; the river = le fleuve ; the desert = le désert",
        "the sand = le sable ; the sun = le soleil",
        "« You can see the river! » = « Tu peux voir le fleuve ! »",
      ],
      tip: "En anglais, « river » désigne aussi bien une rivière qu'un grand fleuve comme le Nil.",
    },
  ],
  exercises: [
    {
      id: "ipyr-1",
      level: 1,
      type: "qcm",
      question:
        "[Histoire] À ton arrivée, ton guide te présente le chef suprême de l'Égypte antique, à la fois roi, chef des armées et chef religieux. Comment l'appelle-t-on ?",
      choices: ["Un pharaon", "Un empereur", "Un consul", "Un scribe"],
      answer: 0,
      explanation:
        "En Égypte antique, le chef suprême est le pharaon. Il concentre tous les pouvoirs : politique, militaire et religieux. Le scribe, lui, est le spécialiste de l'écriture qui note les récoltes et les impôts.",
    },
    {
      id: "ipyr-2",
      level: 1,
      type: "input",
      question:
        "[Maths] La base de la pyramide de Khéops est un carré de 230 m de côté. Tu décides d'en faire le tour complet à pied : quelle distance vas-tu parcourir, en mètres ?",
      answer: "920",
      explanation:
        "Le périmètre d'un carré se calcule avec P = 4 × côté. Ici : 4 × 230 = 920. Le tour complet mesure donc 920 m, presque un kilomètre !",
      hint: "Le périmètre d'un carré, c'est 4 fois la longueur d'un côté.",
    },
    {
      id: "ipyr-3",
      level: 1,
      type: "input",
      question:
        "[Anglais] Pour remonter le Nil, l'équipe embarque. Comment dit-on « un bateau » en anglais ? (en minuscules, avec l'article)",
      answer: "a boat",
      accept: ["boat"],
      explanation:
        "« Un bateau » se dit « a boat » en anglais. L'article indéfini « a » correspond à « un / une ». On peut aussi croiser « a ship » pour un grand navire.",
    },
    {
      id: "ipyr-4",
      level: 1,
      type: "truefalse",
      question:
        "[Sciences] Sous le soleil brûlant, une flaque d'eau laissée au bord du Nil disparaît peu à peu : l'eau passe de l'état liquide à l'état gazeux.",
      answer: true,
      explanation:
        "Vrai ! C'est l'évaporation : chauffée par le soleil, l'eau liquide se transforme en vapeur d'eau, un gaz invisible qui se mélange à l'air. L'eau n'a pas disparu, elle a changé d'état.",
    },
    {
      id: "ipyr-5",
      level: 2,
      type: "qcm",
      question:
        "[Maths] Le scribe du chantier annonce qu'il faudra « deux millions trois cent mille » blocs de pierre. Comment ce nombre s'écrit-il en chiffres ?",
      choices: ["2 300 000", "2 030 000", "2 000 300", "230 000"],
      answer: 0,
      explanation:
        "On remplit les tranches de 3 chiffres : 2 millions → 2, trois cent mille → 300 dans la tranche des mille, rien dans la tranche des unités → 000. Résultat : 2 300 000.",
      hint: "Découpe le nombre en tranches : millions / mille / unités.",
    },
    {
      id: "ipyr-6",
      level: 2,
      type: "qcm",
      question:
        "[Histoire] De retour au présent, tu veux traduire les hiéroglyphes recopiés dans ton carnet. Quel savant français est parvenu à les déchiffrer en 1822 ?",
      choices: [
        "Jean-François Champollion",
        "Louis Pasteur",
        "Jacques-Yves Cousteau",
        "Gustave Eiffel",
      ],
      answer: 0,
      explanation:
        "C'est Jean-François Champollion qui a percé le secret des hiéroglyphes en 1822, notamment grâce à la pierre de Rosette, qui présente un même texte en trois écritures différentes.",
      hint: "Son nom est associé à la célèbre pierre de Rosette.",
    },
    {
      id: "ipyr-7",
      level: 2,
      type: "input",
      question:
        "[Maths] D'après tes relevés, la construction de la grande pyramide a duré environ 20 ans. Combien cela représente-t-il de mois ?",
      answer: "240",
      explanation:
        "Une année compte 12 mois. Pour 20 ans : 20 × 12 = 240. Le chantier a donc duré environ 240 mois.",
      hint: "1 an = 12 mois.",
    },
    {
      id: "ipyr-8",
      level: 2,
      type: "qcm",
      question:
        "[Sciences] Au petit matin, la vapeur d'eau présente dans l'air se refroidit et redevient liquide en fines gouttelettes de rosée. Comment s'appelle ce changement d'état ?",
      choices: ["La fusion", "La liquéfaction", "La solidification", "L'évaporation"],
      answer: 1,
      explanation:
        "Le passage de l'état gazeux à l'état liquide s'appelle la liquéfaction. La fusion, c'est solide → liquide ; la solidification, liquide → solide ; l'évaporation, liquide → gaz.",
      hint: "Cherche le changement d'état qui va du gaz vers le liquide.",
    },
    {
      id: "ipyr-9",
      level: 3,
      type: "input",
      question:
        "[Maths] Sur le chantier, une équipe hisse 5 blocs de pierre par jour. Aujourd'hui, 30 équipes identiques travaillent pendant 4 jours. Combien de blocs sont hissés en tout ?",
      answer: "600",
      explanation:
        "En un jour, les 30 équipes hissent 30 × 5 = 150 blocs. En 4 jours : 150 × 4 = 600. Au total, 600 blocs sont hissés.",
      hint: "Calcule d'abord ce que font les 30 équipes en un seul jour.",
    },
    {
      id: "ipyr-10",
      level: 3,
      type: "input",
      question:
        "[Maths] Un bloc de la pyramide pèse en moyenne 2 500 kg. Combien pèsent 4 blocs, en tonnes ? (1 tonne = 1 000 kg)",
      answer: "10",
      explanation:
        "Masse des 4 blocs : 4 × 2 500 = 10 000 kg. On convertit en tonnes : 10 000 ÷ 1 000 = 10. Les 4 blocs pèsent 10 tonnes.",
      hint: "Calcule d'abord la masse en kilogrammes, puis convertis en tonnes.",
    },
    {
      id: "ipyr-11",
      level: 3,
      type: "truefalse",
      question:
        "[Histoire] L'écriture apparaît en Égypte vers 3000 av. J.-C. et la pyramide de Khéops est achevée vers 2560 av. J.-C. L'écriture égyptienne est donc plus ancienne que la pyramide.",
      answer: true,
      explanation:
        "Vrai ! Avant Jésus-Christ, on compte à rebours : 3000 av. J.-C. vient AVANT 2560 av. J.-C. Quand les bâtisseurs achèvent la pyramide, les Égyptiens écrivent déjà depuis plus de 400 ans.",
      hint: "Avant J.-C., plus le nombre est grand, plus la date est ancienne.",
    },
    {
      id: "ipyr-12",
      level: 3,
      type: "input",
      question:
        "[Anglais] À bord, le guide s'exclame : « Look, you can see the river! » Quel mot anglais de sa phrase signifie « le fleuve » ? Écris-le en minuscules, sans article.",
      answer: "river",
      explanation:
        "« River » signifie « fleuve » ou « rivière ». La phrase complète veut dire : « Regarde, tu peux voir le fleuve ! » — il s'agit bien sûr du Nil.",
      hint: "C'est le dernier mot de la phrase du guide.",
    },
  ],
  videos: [
    { title: "Les pyramides n'ont pas été construites par les Egyptiens | Chasseurs de Fake | Lumni", youtubeId: "pGe3wLyLEL8", channel: "Lumni" },
  ],
};
