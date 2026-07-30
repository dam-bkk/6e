import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci5-circuits",
  subject: "sciences",
  grade: "5e",
  num: 2,
  title: "Circuits électriques",
  domain: "donnees",
  domainLabel: "Physique-chimie",
  icon: "Zap",
  teaser: "Série ou dérivation ? Schémas, courant, court-circuit : maîtrise l'électricité sans te faire griller.",
  objectives: [
    "Je sais réaliser et schématiser un circuit électrique simple avec les symboles normalisés",
    "Je sais distinguer un circuit en série d'un circuit en dérivation",
    "Je connais le sens conventionnel du courant électrique",
    "Je sais classer des matériaux en conducteurs et isolants",
    "Je sais reconnaître un court-circuit et expliquer pourquoi il est dangereux",
  ],
  lesson: [
    {
      title: "Un circuit, c'est une boucle fermée",
      paragraphs: [
        "Pour qu'une lampe brille, il faut un circuit électrique : un générateur (une pile, par exemple), des fils de connexion et la lampe, le tout formant une boucle fermée. Si la boucle est ouverte quelque part, le courant ne circule plus et la lampe s'éteint.",
        "C'est exactement le rôle de l'interrupteur : fermé, il laisse passer le courant ; ouvert, il coupe la boucle. Attention au vocabulaire, qui est l'inverse d'une porte : un circuit fermé fonctionne, un circuit ouvert ne fonctionne pas !",
        "Le générateur ne « fabrique » pas le courant à partir de rien : il met en mouvement des charges électriques déjà présentes dans les fils, un peu comme une pompe fait circuler l'eau d'un circuit de chauffage.",
      ],
      example: [
        "Circuit minimal : une pile + deux fils + une lampe. La lampe brille dès que la boucle est complète.",
        "Une lampe dévissée dans son support ouvre le circuit exactement comme un interrupteur ouvert.",
      ],
      tip: "Pour vérifier un circuit qui ne marche pas, suis la boucle avec ton doigt sur le schéma : si tu ne peux pas revenir à ton point de départ sans lever le doigt, la boucle est ouverte quelque part.",
    },
    {
      title: "Les schémas normalisés",
      paragraphs: [
        "Pour représenter un circuit, les scientifiques du monde entier utilisent les mêmes symboles normalisés : ainsi, un schéma fait en France se lit sans problème au Japon.",
        "Les principaux symboles : la pile (un trait long pour la borne +, un trait court pour la borne −), la lampe (un cercle avec une croix), l'interrupteur (un segment qui pivote), le moteur (un cercle avec un M), la DEL ou diode électroluminescente (un triangle avec une barre, et des petites flèches pour la lumière émise). Les fils sont des traits droits, horizontaux ou verticaux.",
        "Un schéma se dessine à la règle, en formant un rectangle : c'est un dessin codé, pas un dessin d'art.",
      ],
      example: [
        "Sur le symbole de la pile, le trait long = borne +, le trait court = borne −. Moyen mnémotechnique : le trait le plus grand est le « plus » grand.",
        "La DEL ne brille que si elle est branchée dans le bon sens : c'est un composant polarisé, comme la pile.",
      ],
      tip: "Apprends les symboles par cœur : pile, lampe, interrupteur, moteur, DEL, fil. Ce sont les six briques de tous les schémas de collège.",
    },
    {
      title: "Le sens conventionnel du courant",
      paragraphs: [
        "Par convention, on dit que le courant électrique circule à l'extérieur du générateur de la borne + vers la borne −. Ce choix a été fait par les scientifiques bien avant la découverte des électrons, et tout le monde l'a gardé.",
        "Ce sens compte pour certains composants : une lampe ou un moteur fonctionnent dans les deux sens, mais une DEL ne laisse passer le courant que dans un seul sens. Le moteur, lui, tourne dans un sens ou dans l'autre selon le branchement.",
      ],
      example: [
        "On inverse la pile d'un circuit : la lampe brille toujours, le moteur tourne à l'envers, la DEL s'éteint.",
        "Sur un schéma, on indique le sens du courant par une flèche rouge sur un fil, partant de la borne +.",
      ],
      tip: "Retiens : « + vers − à l'extérieur du générateur ». Et pour tester le sens du courant dans un circuit mystère, la DEL est ton meilleur détecteur : elle ne brille que dans le bon sens.",
    },
    {
      title: "Conducteurs et isolants",
      paragraphs: [
        "Un matériau conducteur laisse passer le courant électrique : c'est le cas de tous les métaux (cuivre, fer, aluminium, or…) et du graphite (la mine de crayon). Un matériau isolant ne laisse pas passer le courant : plastique, verre, bois sec, caoutchouc, air…",
        "Les deux sont utiles ! Les fils électriques sont en cuivre (conducteur) pour transporter le courant, et entourés de plastique (isolant) pour qu'on puisse les toucher sans danger.",
        "L'eau du robinet et le corps humain conduisent aussi le courant, suffisamment pour être dangereux avec l'électricité de la maison. C'est pourquoi on ne manipule jamais un appareil branché avec les mains mouillées.",
      ],
      example: [
        "Test avec un circuit pile + lampe : on insère l'objet à tester dans la boucle. La lampe brille → conducteur. Elle reste éteinte → isolant.",
        "Une mine de crayon (graphite) fait briller la lampe : c'est le seul conducteur courant qui n'est pas un métal.",
      ],
      tip: "« Tous les métaux sont conducteurs » : cette phrase te sauvera dans presque tous les exercices. Pour le reste (plastique, verre, bois sec…), pense « isolant » par défaut.",
    },
    {
      title: "Série, dérivation et court-circuit",
      paragraphs: [
        "Dans un circuit en série, tous les composants sont sur une seule et même boucle. Conséquence : si une lampe grille, la boucle est coupée et tout s'éteint. Plus on ajoute de lampes en série, moins chacune brille, car elles se partagent l'énergie fournie par le générateur.",
        "Dans un circuit en dérivation, les composants sont répartis sur plusieurs boucles branchées sur le même générateur. Chaque boucle est indépendante : si une lampe grille, les autres continuent de briller. C'est le montage utilisé dans toute la maison : tu peux éteindre la cuisine sans plonger le salon dans le noir.",
        "Un court-circuit se produit quand un fil relie directement les deux bornes du générateur sans passer par un appareil : le courant devient très intense, les fils chauffent fortement et peuvent provoquer un incendie. Dans la maison, des protections (fusibles, disjoncteur) coupent automatiquement le courant en cas de court-circuit.",
      ],
      example: [
        "Vieilles guirlandes de Noël en série : une ampoule grillée = toute la guirlande éteinte… et bon courage pour trouver la coupable !",
        "Court-circuiter une lampe avec un fil : la lampe s'éteint (le courant préfère le raccourci), et dans un circuit en série ses voisines brillent davantage.",
      ],
      tip: "Série = une seule boucle, tout le monde dans la même file. Dérivation = plusieurs boucles, chacun sa file. La maison est TOUJOURS en dérivation.",
      figure: "sx-serie-derivation",
    },
  ],
  exercises: [
    {
      id: "s5cir-1",
      level: 1,
      type: "qcm",
      question: "Pour qu'une lampe branchée à une pile brille, le circuit doit être…",
      choices: ["ouvert", "fermé", "en court-circuit", "sans interrupteur"],
      answer: 1,
      explanation:
        "Le courant ne circule que dans une boucle fermée : circuit fermé = la lampe brille. C'est le contraire d'une porte : un circuit OUVERT ne laisse rien passer. Un interrupteur ne gêne pas le circuit, il sert justement à l'ouvrir ou le fermer à volonté.",
      hint: "En électricité, « fermé » ne veut pas dire « bloqué »…",
    },
    {
      id: "s5cir-2",
      level: 1,
      type: "qcm",
      question: "Sur le symbole normalisé de la pile, comment reconnaît-on la borne + ?",
      choices: [
        "C'est le trait le plus court",
        "C'est le trait le plus long",
        "Elle est marquée d'un cercle",
        "On ne peut pas la reconnaître",
      ],
      answer: 1,
      explanation:
        "Convention internationale : le trait long représente la borne +, le trait court la borne −. Moyen mnémotechnique : le trait le plus grand est le « plus » grand. Ce détail compte, car le sens du courant part de la borne +.",
      hint: "Le « plus » grand des deux traits…",
    },
    {
      id: "s5cir-3",
      level: 1,
      type: "truefalse",
      question: "Le plastique qui entoure les fils électriques est un matériau conducteur.",
      answer: false,
      explanation:
        "Faux ! Le plastique est un isolant : il ne laisse pas passer le courant. C'est justement pour cela qu'il entoure le cuivre (conducteur) des fils : il permet de les toucher sans danger. Un fil électrique combine donc les deux familles de matériaux, chacune pour son rôle.",
    },
    {
      id: "s5cir-4",
      level: 1,
      type: "input",
      question: "Comment appelle-t-on un matériau qui laisse passer le courant électrique ? (un seul mot)",
      answer: "conducteur",
      accept: ["un conducteur", "conducteurs"],
      explanation:
        "Un matériau qui laisse passer le courant est un conducteur : c'est le cas de tous les métaux et du graphite. Un matériau qui ne le laisse pas passer est un isolant. Retiens la règle en or : tous les métaux sont conducteurs.",
      hint: "Comme celui qui « conduit » une voiture, ce matériau « conduit » le courant.",
    },
    {
      id: "s5cir-5",
      level: 2,
      type: "qcm",
      question: "Dans le sens conventionnel, le courant circule à l'extérieur du générateur…",
      choices: [
        "de la borne − vers la borne +",
        "de la borne + vers la borne −",
        "dans les deux sens à la fois",
        "dans un sens qui change sans arrêt",
      ],
      answer: 1,
      explanation:
        "Par convention, le courant sort de la borne + du générateur, traverse le circuit et revient par la borne −. C'est un choix historique des scientifiques, conservé partout dans le monde. Ce sens est vérifiable avec une DEL, qui ne brille que si le courant la traverse dans le bon sens.",
      hint: "Le courant « sort » par la grande borne du symbole de la pile.",
    },
    {
      id: "s5cir-6",
      level: 2,
      type: "qcm",
      question: "Dans une guirlande de trois lampes en série, une lampe grille. Que se passe-t-il ?",
      choices: [
        "Les deux autres brillent plus fort",
        "Les deux autres brillent normalement",
        "Toutes les lampes s'éteignent",
        "Seule la lampe voisine s'éteint",
      ],
      answer: 2,
      explanation:
        "En série, il n'y a qu'une seule boucle : une lampe grillée agit comme un interrupteur ouvert et coupe le courant partout. Toutes les lampes s'éteignent. C'est le grand défaut du montage en série, et la raison pour laquelle la maison est câblée en dérivation.",
      hint: "Combien y a-t-il de boucles dans un circuit en série ?",
    },
    {
      id: "s5cir-7",
      level: 2,
      type: "input",
      question:
        "Dans une maison, on peut éteindre une pièce sans éteindre les autres. Comment s'appelle ce type de circuit, où chaque appareil a sa propre boucle ? (circuit en …)",
      answer: "dérivation",
      accept: ["derivation", "en dérivation", "en derivation", "circuit en dérivation"],
      explanation:
        "C'est un circuit en dérivation : chaque appareil est sur sa propre boucle, branchée sur le même générateur. Les boucles sont indépendantes : en couper une n'affecte pas les autres. Toutes les installations domestiques utilisent ce montage.",
      hint: "Le contraire du montage « en série ».",
    },
    {
      id: "s5cir-8",
      level: 2,
      type: "truefalse",
      question: "Une DEL branchée à l'envers dans un circuit reste éteinte.",
      answer: true,
      explanation:
        "Vrai ! La DEL est un composant polarisé : elle ne laisse passer le courant que dans un seul sens. Branchée à l'envers, elle bloque le courant et reste éteinte. C'est différent d'une lampe classique, qui brille quel que soit le sens du branchement. On utilise d'ailleurs la DEL comme détecteur du sens du courant.",
      hint: "Tous les composants fonctionnent-ils dans les deux sens ?",
    },
    {
      id: "s5cir-9",
      level: 3,
      type: "qcm",
      question: "Un fil relie directement les deux bornes d'une pile, sans aucun appareil sur le trajet. Quelle est la conséquence ?",
      choices: [
        "Rien, le courant ne circule pas",
        "Le courant devient très intense et le fil chauffe : c'est un court-circuit",
        "La pile se recharge",
        "Le courant change de sens",
      ],
      answer: 1,
      explanation:
        "C'est la définition du court-circuit du générateur : le courant emprunte le raccourci sans obstacle, devient très intense, et les fils chauffent au point de pouvoir brûler ou déclencher un incendie. La pile s'use aussi très vite. Dans la maison, fusibles et disjoncteur coupent le courant dès qu'un court-circuit se produit.",
      hint: "Sans appareil pour le « freiner », que devient le courant ?",
    },
    {
      id: "s5cir-10",
      level: 3,
      type: "qcm",
      question:
        "Dans un circuit en série avec deux lampes, on branche un fil directement entre les deux bornes de la lampe A. Que se passe-t-il ?",
      choices: [
        "Les deux lampes s'éteignent",
        "La lampe A s'éteint et la lampe B brille davantage",
        "La lampe A brille davantage et la B s'éteint",
        "Rien ne change",
      ],
      answer: 1,
      explanation:
        "Le fil court-circuite la lampe A : le courant passe presque entièrement par ce raccourci, donc A s'éteint. Le circuit reste fermé par le fil, et B se retrouve seule à recevoir l'énergie du générateur : elle brille davantage. Court-circuiter un appareil ne coupe pas le circuit, il le contourne.",
      hint: "Le courant choisit le chemin sans obstacle. La boucle reste-t-elle fermée ?",
    },
    {
      id: "s5cir-11",
      level: 3,
      type: "truefalse",
      question:
        "Il est dangereux de toucher un appareil branché sur le secteur avec les mains mouillées, car l'eau du robinet conduit le courant.",
      answer: true,
      explanation:
        "Vrai ! L'eau du robinet contient des sels minéraux dissous qui la rendent conductrice, et le corps humain conduit aussi le courant. Mains mouillées + électricité de la maison = risque d'électrisation grave. C'est pourquoi les prises sont interdites trop près des baignoires et qu'on ne manipule jamais un sèche-cheveux avec les mains mouillées.",
    },
    {
      id: "s5cir-12",
      level: 3,
      type: "input",
      question:
        "Un circuit contient une pile, un interrupteur fermé et trois lampes, chacune sur sa propre boucle. La lampe 2 grille. Combien de lampes brillent encore ? (nombre seul)",
      answer: "2",
      accept: ["deux"],
      explanation:
        "« Chacune sur sa propre boucle » = circuit en dérivation. Les boucles sont indépendantes : la lampe 2 grillée n'ouvre que sa propre boucle. Les lampes 1 et 3 continuent de briller normalement, soit 2 lampes. En série, la réponse aurait été 0 : tout le circuit se serait éteint.",
      hint: "Ce circuit est-il en série ou en dérivation ?",
    },
  ],
  videos: [
    { title: "Intensité et lois - Physique-Chimie - Collège - Les Bons Profs", youtubeId: "wUYO82YekjA", channel: "Les Bons Profs" },
  ],
};
