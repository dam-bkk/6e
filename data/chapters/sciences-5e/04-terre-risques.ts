import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci5-terre-risques",
  subject: "sciences",
  grade: "5e",
  num: 4,
  title: "Séismes, volcans et risques",
  domain: "grandeurs",
  domainLabel: "SVT",
  icon: "Mountain",
  teaser: "Pourquoi la Terre tremble, pourquoi les volcans crachent, et comment on se protège.",
  objectives: [
    "Je sais décrire un séisme avec les mots foyer, épicentre et magnitude",
    "Je sais distinguer une éruption effusive d'une éruption explosive",
    "Je sais faire la différence entre magma et lave",
    "Je découvre que la surface de la Terre est découpée en plaques qui bougent",
    "Je sais expliquer qu'un risque combine un aléa et des enjeux",
    "Je connais des moyens de prévention et je sais distinguer météo et climat",
  ],
  lesson: [
    {
      title: "Les séismes : quand la Terre tremble",
      paragraphs: [
        "Un séisme, ou tremblement de terre, est une secousse du sol. Il naît en profondeur : des roches soumises à d'énormes forces se déforment lentement pendant des années, puis cassent d'un coup le long d'une faille. Cette rupture brutale libère une grande quantité d'énergie.",
        "Le point en profondeur où se produit la rupture s'appelle le foyer du séisme. Le point de la surface situé juste au-dessus du foyer s'appelle l'épicentre : c'est en général là que les secousses sont les plus fortes. Depuis le foyer, l'énergie se propage dans toutes les directions sous forme d'ondes sismiques, enregistrées par des appareils appelés sismomètres.",
        "La magnitude mesure l'énergie libérée par le séisme. Attention : ce n'est pas une note sur 10. L'échelle est telle qu'un séisme de magnitude 7 libère environ 30 fois plus d'énergie qu'un séisme de magnitude 6. Un même séisme n'a qu'une seule magnitude, mais ses effets ressentis diminuent quand on s'éloigne de l'épicentre.",
      ],
      example: [
        "Foyer : en profondeur, là où la roche casse. Épicentre : à la surface, à la verticale du foyer.",
        "Le séisme du Japon en 2011 avait une magnitude d'environ 9 : l'un des plus puissants jamais enregistrés.",
      ],
      tip: "Pour ne plus confondre : le foyer est enfoui (comme le foyer d'une cheminée, au cœur de la maison), l'épicentre est en surface, « épi » comme épiderme, la surface de la peau.",
    },
    {
      title: "Les volcans : effusif ou explosif",
      paragraphs: [
        "Sous un volcan, à plusieurs kilomètres de profondeur, se trouve un réservoir de roche fondue mélangée à des gaz : le magma. Quand le magma remonte et arrive à la surface, l'éruption commence. Le magma qui coule à l'air libre, en partie dégazé, s'appelle alors la lave. Magma en profondeur, lave en surface : ce sont deux noms pour deux situations différentes.",
        "On distingue deux grands types d'éruptions. Dans une éruption effusive, le magma est fluide : les gaz s'en échappent facilement et la lave s'écoule en longues coulées, avec parfois des fontaines de lave. C'est le cas du Piton de la Fournaise, à La Réunion, ou des volcans d'Hawaï.",
        "Dans une éruption explosive, le magma est visqueux, c'est-à-dire épais et pâteux : les gaz restent piégés, la pression monte, et tout finit par exploser violemment. Le volcan projette des cendres, des blocs et de redoutables nuées ardentes, des avalanches brûlantes de gaz et de cendres qui dévalent les pentes. C'est ce type d'éruption qui a détruit la ville de Saint-Pierre, en Martinique, lors de l'éruption de la montagne Pelée en 1902.",
      ],
      example: [
        "Effusif : magma fluide → coulées de lave. Exemple : Piton de la Fournaise (La Réunion).",
        "Explosif : magma visqueux → explosions, cendres, nuées ardentes. Exemple : montagne Pelée (Martinique), 1902.",
      ],
      tip: "Effusif rime avec « ça fuse et ça coule » ; explosif rime avec « ça bloque puis ça explose ». C'est la fluidité du magma qui décide du type d'éruption.",
    },
    {
      title: "À découvrir : la Terre est un puzzle de plaques",
      paragraphs: [
        "Quand on place sur une carte du monde les épicentres des séismes et les volcans actifs, une surprise apparaît : ils ne sont pas répartis au hasard. Ils s'alignent le long de grandes ceintures, comme la « ceinture de feu » qui entoure l'océan Pacifique.",
        "Ces alignements dessinent les limites de grandes plaques rigides qui recouvrent toute la surface de la Terre : les plaques tectoniques (on dit aussi plaques lithosphériques). Ces plaques bougent très lentement, de quelques centimètres par an, à peu près la vitesse à laquelle poussent tes ongles.",
        "Aux limites des plaques, ça se bouscule : certaines plaques s'écartent, d'autres se rapprochent ou coulissent l'une contre l'autre. Ces mouvements accumulent des forces dans les roches, d'où les séismes, et permettent au magma de remonter, d'où les volcans. Voilà pourquoi le Japon, situé à la rencontre de plusieurs plaques, connaît beaucoup de séismes, alors que le centre de la France en connaît très peu.",
      ],
      example: [
        "La plaque africaine et la plaque sud-américaine s'écartent : l'océan Atlantique s'élargit de quelques centimètres par an.",
        "Le Japon, l'Indonésie, le Chili : tous situés sur la ceinture de feu du Pacifique, tous très exposés aux séismes et aux volcans.",
      ],
      tip: "Retiens l'ordre de grandeur : les plaques avancent de quelques centimètres par an, comme tes ongles. C'est lent, mais en millions d'années, cela déplace des continents entiers.",
    },
    {
      title: "Le risque : un aléa et des enjeux",
      paragraphs: [
        "En sciences, le mot risque a un sens précis. L'aléa, c'est l'événement naturel qui peut se produire à un endroit donné : un séisme, une éruption, une inondation. Les enjeux, ce sont les personnes, les habitations et les activités qui pourraient être touchées. Le risque existe seulement quand un aléa menace des enjeux.",
        "Un séisme de magnitude 7 au milieu d'un désert inhabité : aléa fort, mais presque aucun enjeu, donc risque très faible. Le même séisme sous une grande ville : aléa identique, enjeux énormes, donc risque majeur. Ce n'est donc pas la puissance du phénomène qui fait à elle seule le danger.",
        "La vulnérabilité des enjeux compte aussi : une ville aux immeubles construits pour résister aux secousses subira beaucoup moins de dégâts qu'une ville aux constructions fragiles, pour un séisme identique.",
      ],
      example: [
        "Risque = aléa × enjeux : sans aléa, pas de risque ; sans enjeux, pas de risque non plus.",
        "Une éruption sur une île déserte : spectacle impressionnant, risque quasi nul. La même éruption près d'une ville : risque majeur.",
      ],
      tip: "Pour analyser un risque, pose toujours les deux questions : « Que peut-il se passer ici ? » (l'aléa) et « Qui ou quoi serait touché ? » (les enjeux).",
    },
    {
      title: "Prévention, prévision, et météo ou climat",
      paragraphs: [
        "On ne sait pas empêcher un séisme ni une éruption. En revanche, on peut réduire le risque. La prévision consiste à surveiller pour anticiper : les volcans donnent souvent des signes avant d'entrer en éruption (petits séismes, gonflement du sol, gaz), ce qui permet d'évacuer à temps. Les séismes, eux, restent imprévisibles : on ne sait pas annoncer leur date.",
        "La prévention consiste à limiter les dégâts avant la catastrophe : construire des bâtiments parasismiques qui se déforment sans s'effondrer, interdire de construire dans les zones les plus exposées, préparer des plans d'évacuation et apprendre les bons gestes, comme s'abriter sous une table solide pendant les secousses et ne pas prendre l'ascenseur.",
        "Enfin, ne confonds pas météo et climat. La météo décrit le temps qu'il fait à un endroit sur une courte durée : aujourd'hui, demain, la semaine. Le climat décrit le temps moyen d'une région, calculé sur une longue période, au moins 30 ans. Un jour de gel en hiver ne dit rien sur le climat ; une hausse des températures moyennes sur des dizaines d'années, si.",
      ],
      example: [
        "Prévision : les volcanologues surveillent le Piton de la Fournaise et font évacuer avant l'éruption.",
        "Météo : « Il pleuvra mardi à Brest. » Climat : « La Bretagne a des hivers doux et humides. »",
      ],
      tip: "Météo = courte durée, ce que tu vois par la fenêtre. Climat = moyenne sur au moins 30 ans, ce que racontent les archives. Une journée froide ne contredit pas le réchauffement du climat.",
    },
  ],
  exercises: [
    {
      id: "s5ter-1",
      level: 1,
      type: "qcm",
      question: "Comment appelle-t-on le point de la surface situé juste au-dessus du lieu où la roche a cassé en profondeur ?",
      choices: ["le foyer", "l'épicentre", "la faille", "la magnitude"],
      answer: 1,
      explanation:
        "L'épicentre est le point de la surface situé à la verticale du foyer : c'est là que les secousses sont généralement les plus fortes. Le foyer, lui, est en profondeur, à l'endroit exact de la rupture. Beaucoup d'élèves inversent les deux : retiens « épi » comme épiderme, la surface.",
      hint: "« Épi » comme épiderme : lequel des deux mots parle de la surface ?",
    },
    {
      id: "s5ter-2",
      level: 1,
      type: "truefalse",
      question: "La lave est le nom que prend le magma quand il arrive à la surface.",
      answer: true,
      explanation:
        "Vrai. En profondeur, la roche fondue mélangée à des gaz s'appelle le magma. Quand elle sort du volcan et coule à l'air libre, en partie débarrassée de ses gaz, on l'appelle la lave. Idée reçue à éviter : ce ne sont pas deux matières sans rapport, c'est la même roche fondue à deux étapes de son trajet.",
      hint: "Où se trouve le magma, et où se trouve la lave ?",
    },
    {
      id: "s5ter-3",
      level: 1,
      type: "input",
      question: "Comment appelle-t-on la grandeur qui mesure l'énergie libérée par un séisme ? Réponds par un seul mot.",
      answer: "magnitude",
      accept: ["la magnitude"],
      explanation:
        "La magnitude mesure l'énergie libérée au foyer du séisme. Un même séisme n'a qu'une seule magnitude, alors que les dégâts observés varient selon la distance à l'épicentre et la solidité des constructions. Ce n'est pas une note sur 10 : chaque degré de plus correspond à environ 30 fois plus d'énergie.",
      hint: "Ce mot commence par « magn- », comme dans « magnifique »… mais il n'a rien d'une note sur 10.",
    },
    {
      id: "s5ter-4",
      level: 1,
      type: "qcm",
      question: "Quelle éruption est dite effusive ?",
      choices: [
        "une éruption avec de longues coulées de lave fluide",
        "une éruption avec de violentes explosions et des nuées ardentes",
        "une éruption qui ne produit que des gaz",
        "une éruption sous-marine uniquement",
      ],
      answer: 0,
      explanation:
        "Une éruption effusive se produit quand le magma est fluide : les gaz s'échappent facilement et la lave s'écoule en coulées, comme au Piton de la Fournaise. À l'inverse, un magma visqueux piège les gaz : la pression monte et l'éruption devient explosive, avec cendres et nuées ardentes. C'est la fluidité du magma qui fait la différence.",
      hint: "« Effusif » évoque quelque chose qui se répand, qui coule.",
    },
    {
      id: "s5ter-5",
      level: 2,
      type: "qcm",
      question: "Sur une carte du monde, les épicentres des séismes et les volcans actifs sont surtout situés…",
      choices: [
        "au hasard, un peu partout",
        "uniquement au fond des océans",
        "le long des limites des plaques tectoniques",
        "au centre des continents",
      ],
      answer: 2,
      explanation:
        "Séismes et volcans s'alignent le long de grandes ceintures, comme la ceinture de feu du Pacifique. Ces alignements marquent les limites des plaques tectoniques : c'est là que les plaques s'écartent, se rapprochent ou coulissent, accumulant des forces et laissant remonter le magma. Loin de ces limites, comme au centre de la France, les séismes sont rares. C'est d'ailleurs cette répartition qui a mis les scientifiques sur la piste des plaques.",
      hint: "Pense à la « ceinture de feu » autour du Pacifique : que dessine-t-elle ?",
    },
    {
      id: "s5ter-6",
      level: 2,
      type: "truefalse",
      question: "Les plaques tectoniques se déplacent de plusieurs mètres par an.",
      answer: false,
      explanation:
        "Faux. Les plaques avancent de quelques centimètres par an seulement, environ la vitesse de pousse de tes ongles. Cela paraît insignifiant, mais sur des millions d'années, ces centimètres s'additionnent et déplacent des continents entiers : l'Atlantique s'élargit ainsi peu à peu. L'idée reçue vient des séismes : la secousse est brutale, mais le mouvement de fond des plaques, lui, est très lent.",
      hint: "Compare avec la vitesse à laquelle poussent tes ongles.",
    },
    {
      id: "s5ter-7",
      level: 2,
      type: "input",
      question: "Complète : « Un risque naturel existe quand un aléa menace des ......... . » Réponds par un seul mot.",
      answer: "enjeux",
      accept: ["des enjeux", "les enjeux", "enjeu"],
      explanation:
        "Le risque combine deux ingrédients : l'aléa, c'est-à-dire l'événement naturel possible, et les enjeux, c'est-à-dire les personnes et les biens exposés. Sans enjeux, pas de risque : un séisme puissant dans un désert vide ne met personne en danger. C'est pourquoi on parle de risque majeur surtout dans les zones peuplées.",
      hint: "Ce mot désigne les personnes et les biens qui pourraient être touchés.",
    },
    {
      id: "s5ter-8",
      level: 2,
      type: "qcm",
      question: "« Il fera 24 °C et grand soleil demain à Lyon. » Cette phrase parle…",
      choices: ["du climat", "de la météo", "d'un aléa sismique", "de la tectonique"],
      answer: 1,
      explanation:
        "Cette phrase décrit le temps qu'il fera à un endroit précis, sur une très courte durée : c'est de la météo. Le climat, lui, décrit le temps moyen d'une région calculé sur au moins 30 ans, comme « Lyon a des étés chauds ». Idée reçue fréquente : une journée fraîche ne contredit pas le réchauffement climatique, car le climat se juge sur des moyennes longues, pas sur un jour.",
      hint: "Courte durée ou moyenne sur 30 ans ?",
    },
    {
      id: "s5ter-9",
      level: 3,
      type: "qcm",
      question: "Un séisme de magnitude 7 se produit en plein désert inhabité ; un séisme de magnitude 5 se produit sous une ville aux immeubles fragiles. Lequel présente le risque le plus élevé ?",
      choices: [
        "celui du désert, car sa magnitude est plus grande",
        "celui de la ville, car les enjeux y sont importants",
        "les deux présentent le même risque",
        "aucun des deux, car la magnitude 5 est trop faible pour être dangereuse",
      ],
      answer: 1,
      explanation:
        "Le risque combine l'aléa ET les enjeux. Dans le désert, l'aléa est fort mais il n'y a presque personne : risque très faible. Sous la ville, l'aléa est plus modéré mais les enjeux sont énormes et les bâtiments fragiles aggravent la vulnérabilité : risque élevé. L'idée reçue à corriger : ce n'est pas la magnitude seule qui fait le danger, un séisme modéré peut être meurtrier dans une zone mal préparée.",
      hint: "Rappelle-toi la formule : risque = aléa × enjeux. Que vaut le risque si les enjeux sont presque nuls ?",
    },
    {
      id: "s5ter-10",
      level: 3,
      type: "truefalse",
      question: "Grâce à la surveillance scientifique, on sait aujourd'hui prévoir la date exacte d'un séisme.",
      answer: false,
      explanation:
        "Faux. On sait repérer les zones à risque sismique, mais personne ne sait annoncer la date d'un séisme : la rupture des roches est brutale et sans signe fiable annonciateur. C'est différent pour les volcans, qui donnent souvent des signes avant l'éruption (petits séismes, gonflement du sol, gaz), ce qui permet d'évacuer. Face aux séismes, la meilleure arme reste la prévention : constructions parasismiques et bons gestes.",
      hint: "Compare avec les volcans : lesquels des deux donnent des signes avant de se déclencher ?",
    },
    {
      id: "s5ter-11",
      level: 3,
      type: "input",
      question: "Comment appelle-t-on un bâtiment conçu pour résister aux secousses d'un séisme ? Complète : « un bâtiment ......... ». Réponds par un seul mot.",
      answer: "parasismique",
      accept: ["para-sismique", "antisismique", "anti-sismique"],
      explanation:
        "Un bâtiment parasismique est conçu pour se déformer sans s'effondrer pendant les secousses : fondations adaptées, structure renforcée, matériaux souples. C'est un moyen de prévention, car il agit avant la catastrophe pour réduire les dégâts. Le préfixe « para- » signifie « protéger contre », comme dans parapluie ou parachute.",
      hint: "Même préfixe que parapluie ou parachute : « para- » protège contre quelque chose.",
    },
    {
      id: "s5ter-12",
      level: 3,
      type: "qcm",
      question: "En 1902, la montagne Pelée détruit la ville de Saint-Pierre en Martinique. Le magma de ce volcan était visqueux. Quel phénomène a probablement causé la catastrophe ?",
      choices: [
        "une lente coulée de lave très fluide",
        "une nuée ardente dévalant les pentes",
        "un raz-de-marée venu de l'Atlantique",
        "une pluie ordinaire de cendres froides",
      ],
      answer: 1,
      explanation:
        "Un magma visqueux piège les gaz : la pression monte jusqu'à l'explosion, qui peut libérer une nuée ardente, une avalanche brûlante de gaz et de cendres dévalant les pentes à grande vitesse. C'est ce qui a rasé Saint-Pierre en 1902. L'idée reçue à corriger : le plus meurtrier dans une éruption explosive n'est pas la coulée de lave, souvent lente et contournable, mais bien les nuées ardentes et les cendres.",
      hint: "Magma visqueux = gaz piégés. Que se passe-t-il quand la pression finit par gagner ?",
    },
  ],
};
