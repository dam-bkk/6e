import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci4-lumiere-son",
  subject: "sciences",
  grade: "4e",
  num: 3,
  title: "Vitesse de la lumière et du son",
  domain: "donnees",
  domainLabel: "Physique-chimie",
  icon: "Volume2",
  teaser: "300 000 km/s contre 340 m/s : pourquoi l'éclair arrive avant le tonnerre, et pourquoi l'espace est silencieux.",
  objectives: [
    "Je connais l'ordre de grandeur de la vitesse de la lumière et de celle du son",
    "Je sais calculer une distance ou une durée avec la relation d = v × t",
    "Je sais ce qu'est une année-lumière et pourquoi on regarde le passé en regardant le ciel",
    "Je sais que le son a besoin d'un milieu matériel pour se propager",
    "Je sais relier fréquence et hauteur d'un son, et protéger mon audition",
  ],
  lesson: [
    {
      title: "Deux vitesses très différentes",
      paragraphs: [
        "La lumière se propage dans le vide à environ 300 000 km/s, soit 300 000 000 m/s. C'est la vitesse la plus grande qui existe dans l'Univers : rien ne peut aller plus vite. Dans l'air, sa vitesse est presque identique.",
        "Le son, lui, se propage dans l'air à environ 340 m/s, c'est-à-dire environ un million de fois moins vite. Cette valeur dépend du milieu et de la température : le son va plus vite dans l'eau (environ 1500 m/s) et encore plus vite dans les solides comme l'acier.",
        "Pour calculer, on utilise la relation d = v × t, où d est la distance parcourue, v la vitesse et t la durée. On en déduit t = d ÷ v et v = d ÷ t. Attention aux unités : si v est en m/s, alors d doit être en mètres et t en secondes.",
      ],
      example: [
        "En 2 s, le son parcourt d = 340 × 2 = 680 m dans l'air.",
        "La lumière du Soleil met environ 500 s, soit 8 min 20 s, pour parcourir les 150 millions de km qui nous en séparent.",
        "En 1 s, la lumière ferait 7 fois et demie le tour de la Terre.",
      ],
      tip: "Avant tout calcul, convertis : 1 km = 1000 m et 1 min = 60 s. Une réponse de 340 « km/s » pour le son doit immédiatement t'alerter : ce serait plus rapide qu'une fusée !",
    },
    {
      title: "L'éclair et le tonnerre",
      paragraphs: [
        "Un éclair et le tonnerre sont produits au même instant, au même endroit : c'est la décharge électrique qui chauffe brutalement l'air, produisant à la fois un flash lumineux et une onde sonore.",
        "Pourtant, on voit toujours l'éclair avant d'entendre le tonnerre. La raison est simple : la lumière arrive presque instantanément (le retard est de quelques millionièmes de seconde, imperceptible), alors que le son met environ 3 s pour parcourir 1 km.",
        "D'où une méthode pratique : compte les secondes entre l'éclair et le tonnerre, puis divise par 3 : tu obtiens la distance de l'orage en kilomètres. Si le délai est inférieur à 10 s, l'orage est à moins de 3 km : il faut se mettre à l'abri dans un bâtiment ou une voiture.",
      ],
      example: [
        "Délai de 6 s : distance ≈ 340 × 6 = 2040 m, soit environ 2 km (et 6 ÷ 3 = 2, on retrouve bien la même valeur).",
        "Délai de 15 s : l'orage est à environ 5 km.",
        "Délai de 0 s (éclair et tonnerre simultanés) : la foudre est tombée juste à côté.",
      ],
      tip: "La division par 3 n'est qu'une version simplifiée du calcul exact : en 3 s le son parcourt 340 × 3 = 1020 m, soit à peu près 1 km. C'est une approximation, pas une loi différente.",
    },
    {
      title: "L'année-lumière",
      paragraphs: [
        "Les distances dans l'Univers sont si grandes que le kilomètre devient inutilisable. Les astronomes emploient donc l'année-lumière (al) : c'est la distance parcourue par la lumière en un an, soit environ 9 500 milliards de kilomètres.",
        "Attention au piège du vocabulaire : malgré son nom, l'année-lumière est une DISTANCE, pas une durée. Dire « il y a deux années-lumière » pour parler d'un temps est un contresens.",
        "Comme la lumière met du temps à nous parvenir, observer un astre lointain, c'est regarder son passé. L'étoile Proxima du Centaure est à 4,2 al : sa lumière que nous recevons ce soir est partie il y a 4,2 ans. Certaines galaxies visibles au télescope nous montrent une image vieille de millions d'années.",
      ],
      example: [
        "Lune : 1,3 seconde-lumière. Soleil : 8 minutes-lumière environ.",
        "Proxima du Centaure, l'étoile la plus proche du Soleil : 4,2 al.",
        "Galaxie d'Andromède : environ 2,5 millions d'al — nous la voyons telle qu'elle était il y a 2,5 millions d'années.",
      ],
      tip: "Test rapide : une année-lumière peut-elle se convertir en kilomètres ? Oui. En heures ? Non. Une distance ne se convertit qu'en unités de longueur.",
    },
    {
      title: "Le son a besoin de matière",
      paragraphs: [
        "Un son est produit par un objet qui vibre : une corde de guitare, un haut-parleur, tes cordes vocales. Cette vibration met en mouvement les particules du milieu voisin, qui transmettent l'ébranlement de proche en proche jusqu'à ton oreille.",
        "Conséquence essentielle : le son ne peut pas se propager dans le vide, puisqu'il n'y a rien à faire vibrer. Dans l'espace, entre les planètes, le silence est total. Les explosions bruyantes des films de science-fiction sont donc scientifiquement fausses.",
        "La lumière, elle, se propage parfaitement dans le vide : c'est pour cela que nous recevons celle du Soleil et des étoiles à travers l'espace. C'est la grande différence entre les deux.",
        "En laboratoire, on le prouve avec une cloche à vide : un réveil qui sonne à l'intérieur devient inaudible à mesure que l'on pompe l'air, alors qu'on continue parfaitement à le voir vibrer.",
      ],
      example: [
        "Le son se propage dans l'air, l'eau, le bois, le métal — dans les trois états de la matière.",
        "Oreille collée au sol ou au rail : on entend arriver un train bien avant de l'entendre par l'air, car le son va plus vite dans les solides.",
        "Sur la Lune, deux astronautes côte à côte ne s'entendent pas sans radio : il n'y a pas d'atmosphère.",
      ],
      tip: "Ne confonds pas « le vide » et « l'obscurité ». Le vide arrête le son mais laisse passer la lumière ; un mur épais arrête la lumière mais laisse passer une partie du son.",
    },
    {
      title: "Fréquence, hauteur et protection de l'oreille",
      paragraphs: [
        "La fréquence d'un son est le nombre de vibrations par seconde. Elle se mesure en hertz (Hz) : 440 Hz signifie 440 vibrations par seconde. Plus la fréquence est grande, plus le son est aigu ; plus elle est petite, plus le son est grave.",
        "L'oreille humaine perçoit environ de 20 Hz à 20 000 Hz. En dessous, ce sont les infrasons ; au-dessus, les ultrasons, que certains animaux comme les chauves-souris ou les chiens entendent parfaitement.",
        "Le niveau sonore, lui, se mesure en décibels (dB) : c'est l'intensité de ce que l'on perçoit, à ne pas confondre avec la hauteur. Une conversation vaut environ 60 dB, une rue passante 80 dB, un concert 100 dB.",
        "L'exposition à plus de 85 dB de façon prolongée détruit progressivement les cellules ciliées de l'oreille interne. Or ces cellules ne se régénèrent JAMAIS : la perte auditive et les acouphènes sont définitifs. D'où trois règles : baisser le volume, s'éloigner des enceintes, faire des pauses et porter des bouchons en concert.",
      ],
      example: [
        "Le la du diapason : 440 Hz. Une grosse caisse : quelques dizaines de hertz. Un sifflet à chien : plus de 20 000 Hz, inaudible pour nous.",
        "Écouteurs à fort volume : jusqu'à 100 dB, soit un risque réel en moins d'une heure d'écoute quotidienne.",
      ],
      tip: "Aigu/grave, c'est la FRÉQUENCE en hertz. Fort/faible, c'est le NIVEAU SONORE en décibels. Un son très grave peut être assourdissant, un son très aigu peut être à peine audible : les deux notions sont indépendantes.",
    },
  ],
  exercises: [
    {
      id: "s4lum-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la vitesse approximative de la lumière dans le vide ?",
      choices: ["340 m/s", "3 000 km/s", "300 000 km/s", "300 000 km/h"],
      answer: 2,
      explanation:
        "La lumière se propage à environ 300 000 km/s, soit 300 millions de m/s : c'est la vitesse limite de l'Univers. 340 m/s est la vitesse du son dans l'air, à ne pas confondre. Fais aussi attention à l'unité : des km/h au lieu des km/s changerait le résultat d'un facteur 3600.",
      hint: "C'est la plus grande vitesse existante, exprimée en kilomètres par seconde et non par heure.",
    },
    {
      id: "s4lum-2",
      level: 1,
      type: "truefalse",
      question: "Dans l'espace, entre deux planètes, on n'entendrait aucun son.",
      answer: true,
      explanation:
        "Vrai : le son est une vibration transmise par la matière (air, eau, solides). Dans le vide spatial, il n'y a presque aucune particule à faire vibrer, donc aucun son ne peut se propager. En revanche la lumière traverse parfaitement le vide, ce qui explique que l'on voie les étoiles sans jamais les entendre.",
      hint: "Demande-toi ce que le son doit faire vibrer pour se propager, et ce que contient l'espace entre les planètes.",
    },
    {
      id: "s4lum-3",
      level: 1,
      type: "qcm",
      question: "Pendant un orage, pourquoi voit-on l'éclair avant d'entendre le tonnerre ?",
      choices: [
        "Parce que l'éclair est produit avant le tonnerre",
        "Parce que la lumière va beaucoup plus vite que le son",
        "Parce que nos yeux réagissent plus vite que nos oreilles",
        "Parce que le tonnerre vient de plus loin",
      ],
      answer: 1,
      explanation:
        "Les deux phénomènes sont produits au même instant et au même endroit : c'est la même décharge électrique. Mais la lumière arrive quasi instantanément alors que le son met environ 3 s par kilomètre. Le décalage vient donc des vitesses, pas d'un décalage de production ni de nos organes des sens.",
      hint: "L'éclair et le tonnerre naissent au même moment : ce qui diffère, c'est le temps mis par chacun pour t'atteindre.",
    },
    {
      id: "s4lum-4",
      level: 1,
      type: "input",
      question: "Quelle est l'unité de la fréquence d'un son ? (un seul mot)",
      answer: "hertz",
      accept: ["le hertz", "hz"],
      explanation:
        "La fréquence se mesure en hertz (Hz) : elle compte le nombre de vibrations par seconde. Ne la confonds pas avec le décibel (dB), qui mesure le niveau sonore. Les hertz disent si le son est grave ou aigu, les décibels s'il est faible ou fort.",
      hint: "Son symbole est Hz, et l'unité porte le nom du physicien qui a étudié les ondes.",
    },
    {
      id: "s4lum-5",
      level: 2,
      type: "input",
      question:
        "Le son se propage à 340 m/s dans l'air. Quelle distance, en mètres, parcourt-il en 4 s ? (nombre seul)",
      answer: "1360",
      accept: ["1360 m", "1360m", "1 360"],
      explanation:
        "On applique d = v × t = 340 × 4 = 1360 m, soit un peu plus d'un kilomètre. Vérifie toujours la cohérence des unités : v en m/s et t en secondes donnent bien une distance en mètres.",
      hint: "Utilise la relation d = v × t, avec la vitesse en mètres par seconde et la durée en secondes.",
    },
    {
      id: "s4lum-6",
      level: 2,
      type: "input",
      question:
        "Lors d'un orage, tu comptes 9 s entre l'éclair et le tonnerre. À quelle distance approximative, en kilomètres, se trouve l'orage ? (nombre seul)",
      answer: "3",
      accept: ["3 km", "3km"],
      explanation:
        "Le son met environ 3 s pour parcourir 1 km, donc on divise le délai par 3 : 9 ÷ 3 = 3 km. Le calcul exact donne 340 × 9 = 3060 m, soit bien 3 km environ. Le temps de trajet de la lumière est négligeable : il n'entre pas dans le calcul.",
      hint: "Le son parcourt environ 1 km en 3 s : divise donc le nombre de secondes comptées par 3.",
    },
    {
      id: "s4lum-7",
      level: 2,
      type: "truefalse",
      question: "L'année-lumière est une durée : c'est le temps que met la lumière pour parcourir une grande distance.",
      answer: false,
      explanation:
        "Faux, et c'est le piège classique du vocabulaire. L'année-lumière est une DISTANCE : celle que parcourt la lumière en un an, soit environ 9 500 milliards de km. Elle se convertit en kilomètres, jamais en heures. Le mot « année » désigne ici la durée du trajet servant à définir la distance, pas la grandeur mesurée.",
      hint: "Demande-toi en quelle unité on peut convertir une année-lumière : des kilomètres ou des heures ?",
    },
    {
      id: "s4lum-8",
      level: 2,
      type: "qcm",
      question: "Un son de 1000 Hz comparé à un son de 200 Hz est…",
      choices: ["plus grave", "plus aigu", "plus fort", "plus long"],
      answer: 1,
      explanation:
        "La fréquence détermine la hauteur : plus elle est grande, plus le son est aigu. 1000 Hz est donc plus aigu que 200 Hz. Attention à ne pas répondre « plus fort » : le volume dépend du niveau sonore en décibels, une grandeur totalement indépendante de la fréquence.",
      hint: "La fréquence en hertz renseigne sur la hauteur du son (grave ou aigu), pas sur son volume.",
    },
    {
      id: "s4lum-9",
      level: 3,
      type: "input",
      question:
        "La lumière parcourt 300 000 km en 1 s. Combien de secondes met-elle pour parcourir les 384 000 km qui séparent la Terre de la Lune ? Arrondis au dixième. (nombre seul, virgule décimale)",
      answer: "1,3",
      accept: ["1.3", "1,3 s", "1,28", "1.28"],
      explanation:
        "On applique t = d ÷ v = 384 000 ÷ 300 000 = 1,28 s, soit 1,3 s arrondi au dixième. On dit donc que la Lune est à 1,3 seconde-lumière. C'est aussi le délai minimal d'un aller simple pour une communication radio avec un astronaute lunaire, les ondes radio allant à la même vitesse que la lumière.",
      hint: "Pour trouver une durée à partir d'une distance et d'une vitesse, utilise t = d ÷ v ; les deux distances sont déjà en kilomètres.",
    },
    {
      id: "s4lum-10",
      level: 3,
      type: "qcm",
      question: "Proxima du Centaure est à 4,2 années-lumière. Que voit-on réellement en l'observant ce soir ?",
      choices: [
        "L'étoile telle qu'elle est en ce moment précis",
        "L'étoile telle qu'elle était il y a 4,2 ans",
        "L'étoile telle qu'elle sera dans 4,2 ans",
        "Rien de réel, seulement un reflet",
      ],
      answer: 1,
      explanation:
        "La lumière que nous recevons a mis 4,2 ans à nous parvenir : elle est partie de l'étoile il y a 4,2 ans. Observer le ciel, c'est donc regarder le passé, d'autant plus lointain que l'astre est éloigné. Une étoile très lointaine pourrait même avoir cessé d'exister sans que nous le sachions encore.",
      hint: "La lumière n'est pas instantanée : réfléchis au moment où cette lumière a quitté l'étoile.",
    },
    {
      id: "s4lum-11",
      level: 3,
      type: "truefalse",
      question: "Une exposition régulière à un niveau sonore élevé peut provoquer une perte auditive définitive.",
      answer: true,
      explanation:
        "Vrai : au-delà d'environ 85 dB, une exposition prolongée détruit les cellules ciliées de l'oreille interne, qui ne se régénèrent jamais. La perte auditive et les acouphènes sont donc irréversibles. L'idée reçue « l'oreille se repose et récupère » est fausse : le repos limite la fatigue auditive, mais ne répare pas les cellules détruites.",
      hint: "Pense aux cellules ciliées de l'oreille interne et demande-toi si l'organisme sait les remplacer.",
    },
    {
      id: "s4lum-12",
      level: 3,
      type: "qcm",
      question:
        "Un plongeur et son camarade resté sur la plage entendent tous deux un même bruit lointain. Pourquoi le plongeur l'entend-il en premier ?",
      choices: [
        "Parce que l'eau amplifie les sons",
        "Parce que le son se propage plus vite dans l'eau que dans l'air",
        "Parce que le son ne se propage pas dans l'air",
        "Parce que l'eau est plus froide que l'air",
      ],
      answer: 1,
      explanation:
        "La vitesse du son dépend du milieu : environ 340 m/s dans l'air, mais près de 1500 m/s dans l'eau, car ses particules, plus rapprochées, transmettent la vibration bien plus efficacement. Le son arrive donc plus tôt sous l'eau. Il ne s'agit pas d'amplification : le volume perçu et la vitesse de propagation sont deux choses différentes.",
      hint: "Compare la vitesse du son dans l'air et dans l'eau ; les particules y sont beaucoup plus rapprochées.",
    },
  ],
};
