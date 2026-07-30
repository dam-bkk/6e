import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci-terre-systeme-solaire",
  subject: "sciences",
  num: 1,
  title: "La Terre et le système solaire",
  domain: "geometrie",
  domainLabel: "La Terre et l'Univers",
  icon: "Orbit",
  teaser: "Le Soleil, les 8 planètes, les saisons et les phases de la Lune expliqués simplement.",
  objectives: [
    "Je sais décrire le système solaire et nommer les 8 planètes dans l'ordre",
    "Je sais expliquer l'alternance du jour et de la nuit par la rotation de la Terre",
    "Je sais expliquer les saisons par l'inclinaison de l'axe de la Terre",
    "Je sais décrire le mouvement de la Lune et l'origine de sa lumière",
    "Je connais les conditions qui rendent la vie possible sur Terre",
  ],
  lesson: [
    {
      title: "Le système solaire",
      figure: "sci-systeme-solaire",
      paragraphs: [
        "Au centre du système solaire se trouve le Soleil. Ce n'est pas une planète : c'est une étoile, c'est-à-dire une énorme boule de gaz très chaude qui produit elle-même sa lumière et sa chaleur. Toutes les autres lumières du système solaire ne sont que de la lumière du Soleil renvoyée.",
        "Huit planètes tournent autour du Soleil, toujours dans le même ordre en partant de lui : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus, Neptune. Elles ne produisent aucune lumière : on les voit parce qu'elles réfléchissent celle du Soleil.",
        "Les quatre planètes les plus proches du Soleil (Mercure, Vénus, la Terre, Mars) sont petites et rocheuses : on les appelle les planètes telluriques. Les quatre plus lointaines (Jupiter, Saturne, Uranus, Neptune) sont énormes et faites surtout de gaz : ce sont les planètes gazeuses. Le système solaire contient aussi des satellites, des astéroïdes et des comètes.",
      ],
      example: [
        "Le Soleil est à environ 150 millions de kilomètres de la Terre.",
        "La lumière voyage à 300 000 km/s : elle met tout de même 8 minutes pour nous parvenir.",
        "Jupiter est si grosse qu'on pourrait y ranger plus de 1 000 planètes comme la Terre.",
      ],
      tip: "Pour retenir l'ordre des planètes : « Me Voici Toute Mouillée, Je Suis Une Nageuse » → Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.",
    },
    {
      title: "Rotation et révolution : le jour et l'année",
      paragraphs: [
        "La Terre tourne sur elle-même autour d'un axe imaginaire qui passe par les deux pôles : c'est la rotation. Elle fait un tour complet en 24 heures environ. La moitié de la Terre tournée vers le Soleil est éclairée (c'est le jour), l'autre moitié est dans l'ombre (c'est la nuit).",
        "En même temps, la Terre parcourt un très grand chemin autour du Soleil : c'est la révolution. Un tour complet dure 365,25 jours, soit une année. C'est pour ce quart de jour en trop qu'on ajoute un 29 février tous les 4 ans, dans les années bissextiles.",
        "Attention : le Soleil ne « se lève » pas et ne « se couche » pas vraiment. C'est la Terre qui tourne, et le paysage avec nous. Le mouvement apparent du Soleil dans le ciel est un effet de notre propre rotation.",
      ],
      example: [
        "Quand il est midi à Paris, il fait nuit à Tokyo : les deux villes ne sont pas du même côté de la Terre.",
        "0,25 jour × 4 = 1 jour entier : voilà le 29 février des années bissextiles (2024, 2028…).",
      ],
      tip: "Rotation = sur soi-même, comme une toupie → le jour. Révolution = autour du Soleil → l'année. « Rotation » et « toupie » vont ensemble.",
    },
    {
      title: "Pourquoi il y a des saisons",
      figure: "sci-saisons",
      paragraphs: [
        "L'axe de rotation de la Terre est incliné d'environ 23° : il n'est pas droit par rapport à son chemin autour du Soleil. Cette inclinaison ne change pas pendant l'année. Résultat : selon le moment de l'année, c'est l'hémisphère nord ou l'hémisphère sud qui est penché vers le Soleil.",
        "L'hémisphère penché vers le Soleil reçoit des rayons plus directs, sur une surface plus petite : il chauffe beaucoup, et les journées y sont longues. C'est l'été. Dans l'autre hémisphère, les rayons arrivent très inclinés, ils s'étalent et chauffent peu, et les journées sont courtes : c'est l'hiver.",
        "Idée reçue à corriger : les saisons ne viennent PAS de la distance entre la Terre et le Soleil. La preuve : la Terre est légèrement plus proche du Soleil début janvier, en plein hiver de l'hémisphère nord. Autre preuve : quand c'est l'hiver en France, c'est l'été en Australie, alors que les deux pays sont à la même distance du Soleil.",
      ],
      example: [
        "21 juin en France : jour le plus long de l'année, début de l'été. Le même jour en Argentine, c'est le jour le plus court et le début de l'hiver.",
        "Au même instant, la Terre entière est à la même distance du Soleil : la distance ne peut donc pas expliquer deux saisons opposées.",
      ],
      tip: "Le mot-clé des saisons, c'est INCLINAISON, jamais DISTANCE. Une lampe de poche tenue bien droite fait une tache lumineuse petite et intense ; inclinée, la même lumière s'étale et éclaire faiblement.",
    },
    {
      title: "La Lune, satellite de la Terre",
      figure: "sci-phases-lune",
      paragraphs: [
        "La Lune est un satellite naturel : elle tourne autour de la Terre, à environ 384 000 km de nous. Elle fait le tour de la Terre en un peu plus de 27 jours. Elle n'a pas d'atmosphère respirable et sa surface est couverte de cratères.",
        "La Lune ne produit aucune lumière : elle est éclairée par le Soleil et nous renvoie une partie de cette lumière. C'est exactement comme un ballon blanc éclairé par une lampe dans une pièce sombre.",
        "Le Soleil éclaire toujours une moitié de la Lune, mais depuis la Terre nous ne voyons pas toujours cette moitié en entier : selon la position de la Lune, on en voit une part plus ou moins grande. Ce sont les phases : nouvelle lune (on ne voit rien), premier quartier, pleine lune, dernier quartier. Le cycle complet dure environ 29,5 jours, ce qui a donné nos mois.",
      ],
      example: [
        "Pleine lune : la Terre est entre le Soleil et la Lune, et on voit toute la face éclairée.",
        "Nouvelle lune : la Lune est entre le Soleil et la Terre, sa face éclairée est tournée de l'autre côté, on ne la voit donc pas.",
      ],
      tip: "La Lune est menteuse : quand elle dessine un D, c'est le premier quartier (elle grossit) ; quand elle dessine un C, c'est le dernier quartier (elle diminue). La lettre dit toujours le contraire de ce qu'on croit.",
    },
    {
      title: "Ce qui rend la vie possible sur Terre",
      paragraphs: [
        "La Terre se trouve à une distance du Soleil qui permet une température moyenne modérée, autour de 15 °C. Grâce à cela, l'eau peut exister à l'état liquide sur presque toute la planète : or l'eau liquide est indispensable à tous les êtres vivants connus.",
        "La Terre possède aussi une atmosphère, la couche de gaz qui l'entoure. Elle contient le dioxygène que respirent de nombreux êtres vivants, elle garde une partie de la chaleur du Soleil et elle nous protège des rayonnements dangereux et de la plupart des petits météorites.",
        "Nos voisines sont bien moins accueillantes : sur Vénus il fait plus de 450 °C, sur Mars la température moyenne est d'environ −60 °C et l'atmosphère est très fine. C'est pour cela que la Terre est, pour l'instant, la seule planète connue où la vie existe.",
      ],
      example: [
        "Température moyenne : Terre environ 15 °C, Vénus environ 465 °C, Mars environ −60 °C.",
        "L'eau liquide couvre environ 70 % de la surface de la Terre.",
      ],
      tip: "Trois conditions à retenir dans l'ordre : la bonne température, l'eau liquide, l'atmosphère. Sans l'une des trois, pas de vie comme la nôtre.",
    },
  ],
  exercises: [
    {
      id: "ster-1",
      level: 1,
      type: "qcm",
      question: "Qu'est-ce que le Soleil ?",
      choices: ["Une planète", "Une étoile", "Un satellite de la Terre", "Une comète"],
      answer: 1,
      explanation:
        "Le Soleil est une étoile : une immense boule de gaz brûlante qui produit sa propre lumière et sa propre chaleur. Les planètes, elles, ne produisent pas de lumière, elles ne font que réfléchir celle du Soleil.",
      hint: "Qui produit sa propre lumière dans le système solaire ?",
    },
    {
      id: "ster-2",
      level: 1,
      type: "input",
      question:
        "Combien de planètes tournent autour du Soleil dans le système solaire ? (réponds par un nombre)",
      answer: "8",
      accept: ["huit"],
      explanation:
        "Il y a 8 planètes : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Pluton a longtemps été comptée comme la neuvième, mais depuis 2006 elle est classée parmi les planètes naines.",
      hint: "Compte de Mercure jusqu'à Neptune.",
    },
    {
      id: "ster-3",
      level: 1,
      type: "truefalse",
      question: "La Lune produit sa propre lumière.",
      answer: false,
      explanation:
        "Faux. La Lune ne produit aucune lumière : elle réfléchit la lumière du Soleil, comme un ballon blanc éclairé par une lampe. Seules les étoiles, comme le Soleil, produisent leur propre lumière.",
    },
    {
      id: "ster-4",
      level: 1,
      type: "qcm",
      question: "Quel mouvement de la Terre explique l'alternance du jour et de la nuit ?",
      choices: [
        "Sa rotation sur elle-même en 24 heures",
        "Sa révolution autour du Soleil en 365,25 jours",
        "Le mouvement de la Lune autour de la Terre",
        "Le déplacement du Soleil dans le ciel",
      ],
      answer: 0,
      explanation:
        "La Terre tourne sur elle-même en 24 h : la face tournée vers le Soleil est éclairée (jour), l'autre est dans l'ombre (nuit). Le Soleil ne se déplace pas autour de nous : son mouvement dans le ciel n'est qu'apparent, c'est nous qui tournons.",
      hint: "Une journée dure 24 heures : quel mouvement dure aussi 24 heures ?",
    },
    {
      id: "ster-5",
      level: 2,
      type: "qcm",
      question: "Pourquoi y a-t-il des saisons sur Terre ?",
      choices: [
        "Parce que la Terre est parfois plus proche, parfois plus loin du Soleil",
        "Parce que l'axe de rotation de la Terre est incliné",
        "Parce que le Soleil chauffe plus fort certains mois",
        "Parce que la Lune cache parfois le Soleil",
      ],
      answer: 1,
      explanation:
        "L'axe de la Terre est incliné d'environ 23°. Selon le moment de l'année, un hémisphère est penché vers le Soleil : il reçoit des rayons plus directs et des journées plus longues, c'est l'été. Les saisons ne viennent donc PAS de la distance : la Terre est même un peu plus proche du Soleil en janvier, en plein hiver européen. Et si la distance comptait, il ne pourrait pas faire l'hiver en France et l'été en Australie au même moment.",
      hint: "Quand c'est l'hiver en France, c'est l'été en Australie : la distance au Soleil peut-elle expliquer cela ?",
    },
    {
      id: "ster-6",
      level: 2,
      type: "input",
      question:
        "Quelle est la quatrième planète en partant du Soleil ? (écris son nom en minuscules)",
      answer: "mars",
      explanation:
        "Dans l'ordre : 1 Mercure, 2 Vénus, 3 la Terre, 4 Mars. Mars est la dernière des quatre planètes telluriques (rocheuses) ; juste après commencent les planètes gazeuses, avec Jupiter.",
      hint: "C'est la planète rouge, juste après la Terre.",
    },
    {
      id: "ster-7",
      level: 2,
      type: "truefalse",
      question: "Jupiter, Saturne, Uranus et Neptune sont des planètes gazeuses.",
      answer: true,
      explanation:
        "Vrai. Les quatre planètes les plus éloignées du Soleil sont très grosses et composées surtout de gaz : ce sont les planètes gazeuses. Les quatre plus proches (Mercure, Vénus, Terre, Mars) sont petites et rocheuses : ce sont les planètes telluriques.",
      hint: "Les grosses planètes sont-elles près ou loin du Soleil ?",
    },
    {
      id: "ster-8",
      level: 2,
      type: "qcm",
      question: "Lors de la pleine lune, comment sont placés le Soleil, la Terre et la Lune ?",
      choices: [
        "La Lune est entre le Soleil et la Terre",
        "La Terre est entre le Soleil et la Lune",
        "Le Soleil est entre la Terre et la Lune",
        "Les trois sont côte à côte dans le même sens",
      ],
      answer: 1,
      explanation:
        "À la pleine lune, la Terre se trouve entre le Soleil et la Lune : depuis la Terre, on voit donc toute la face éclairée de la Lune. Quand c'est la Lune qui est entre le Soleil et la Terre, sa face éclairée nous est cachée : c'est la nouvelle lune.",
      hint: "Pour voir tout le côté éclairé, il faut être derrière la Lune par rapport au Soleil.",
    },
    {
      id: "ster-9",
      level: 3,
      type: "input",
      question:
        "La lumière du Soleil met 8 minutes pour atteindre la Terre. Combien de secondes cela représente-t-il ?",
      answer: "480",
      explanation:
        "1 minute = 60 secondes, donc 8 × 60 = 480 secondes. Cela veut dire que le Soleil que tu regardes (jamais directement !) est en réalité l'image du Soleil telle qu'elle était 480 secondes plus tôt.",
      hint: "1 minute vaut 60 secondes.",
    },
    {
      id: "ster-10",
      level: 3,
      type: "truefalse",
      question: "Quand il est midi en France, il est aussi midi partout ailleurs sur la Terre.",
      answer: false,
      explanation:
        "Faux. Comme la Terre tourne sur elle-même, tous les endroits du globe ne sont pas éclairés en même temps : quand il est midi en France, il fait nuit en Nouvelle-Zélande. C'est justement la rotation de la Terre qui impose des fuseaux horaires différents.",
    },
    {
      id: "ster-11",
      level: 3,
      type: "qcm",
      question:
        "Sur Mars, la température moyenne est d'environ −60 °C. Quelle conséquence cela a-t-il pour l'eau ?",
      choices: [
        "L'eau y bout en permanence",
        "L'eau ne peut pratiquement pas rester liquide, elle est surtout gelée",
        "L'eau y reste liquide comme sur Terre",
        "L'eau y disparaît complètement, elle n'existe pas",
      ],
      answer: 1,
      explanation:
        "En dessous de 0 °C, l'eau est solide : à −60 °C en moyenne, l'eau de Mars est essentiellement de la glace (on en a détecté aux pôles et sous la surface). Or l'eau liquide est indispensable à la vie telle qu'on la connaît : c'est l'une des raisons pour lesquelles Mars est bien moins accueillante que la Terre.",
      hint: "À quelle température l'eau gèle-t-elle ?",
    },
    {
      id: "ster-12",
      level: 3,
      type: "input",
      question:
        "Une année dure 365,25 jours. Combien de jours entiers cela fait-il en 4 ans ? (réponds par un nombre)",
      answer: "1461",
      explanation:
        "365,25 × 4 = 1 461 jours. Comme 365 × 4 = 1 460, il reste 1 jour entier en trop tous les 4 ans : c'est exactement le 29 février des années bissextiles, ajouté pour que notre calendrier reste en accord avec la révolution de la Terre.",
      hint: "Calcule 365,25 × 4, puis compare à 365 × 4.",
    },
  ],
};
