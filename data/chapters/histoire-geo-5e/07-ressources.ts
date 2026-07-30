import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg5-ressources",
  subject: "histoire-geo",
  grade: "5e",
  num: 7,
  title: "Ressources : eau, énergie, alimentation",
  domain: "grandeurs",
  domainLabel: "Géographie",
  icon: "Droplets",
  teaser:
    "Eau, énergie, nourriture : comment satisfaire les besoins de 8 milliards d'humains sans épuiser la planète ?",
  objectives: [
    "Je sais que l'eau douce est rare et très inégalement répartie sur la Terre",
    "Je comprends pourquoi l'eau peut être source de tensions entre les hommes et entre les États",
    "Je sais distinguer les énergies fossiles des énergies renouvelables",
    "Je peux expliquer ce qu'est la sécurité alimentaire et pourquoi le gaspillage est un problème",
    "Je connais les grands constats du changement climatique et des exemples d'adaptation",
  ],
  lesson: [
    {
      title: "L'eau douce, une ressource rare et mal répartie",
      paragraphs: [
        "Vue de l'espace, la Terre est une planète bleue : l'eau couvre environ 70 % de sa surface. Pourtant, l'essentiel de cette eau, environ 97 %, est salée. L'eau douce ne représente qu'environ 3 % du total, et la plus grande partie est prisonnière des glaciers et des calottes polaires. L'eau douce facilement utilisable par les humains, celle des lacs, des rivières et des nappes souterraines, est donc très rare.",
        "Cette eau est aussi très mal répartie. Certaines régions en reçoivent en abondance, comme l'Amazonie ou l'Asie des moussons ; d'autres en manquent cruellement, comme le Sahara, le Moyen-Orient ou l'Australie. Et les zones les plus peuplées ne sont pas toujours les mieux arrosées.",
        "Dans le monde, l'agriculture est de loin la première consommatrice d'eau : environ 70 % des prélèvements servent à irriguer les cultures. Or plus de 2 milliards de personnes n'ont toujours pas accès à une eau potable gérée en toute sécurité, ce qui favorise les maladies et oblige, dans certains villages, femmes et enfants à marcher des kilomètres chaque jour pour aller chercher de l'eau.",
      ],
      example: [
        "La mer d'Aral, en Asie centrale, a presque disparu : les fleuves qui l'alimentaient ont été détournés pour irriguer d'immenses champs de coton.",
        "En quelques décennies, des ports se sont retrouvés en plein désert, à des dizaines de kilomètres de l'eau.",
      ],
      tip: "Retiens l'entonnoir de l'eau : 97 % salée, environ 3 % douce, et seulement une petite fraction de cette eau douce est facilement accessible. « Planète bleue » ne veut pas dire « eau à volonté » !",
      figure: "hg5-eau-repartition",
    },
    {
      title: "L'eau, source de tensions",
      paragraphs: [
        "Quand l'eau manque, il faut la partager, et ce partage crée des tensions. À l'échelle locale, agriculteurs, industriels, villes et touristes se disputent parfois la même ressource : qui a la priorité en période de sécheresse ?",
        "À l'échelle internationale, de nombreux fleuves traversent plusieurs pays. Un barrage construit en amont retient l'eau et peut réduire le débit dont disposent les pays situés en aval. Le Nil en offre un exemple célèbre : l'Éthiopie a construit sur le Nil Bleu un immense barrage, la Grande Renaissance, pour produire de l'électricité, ce qui inquiète l'Égypte, dont la population dépend presque entièrement du fleuve.",
        "Des solutions existent pourtant : accords de partage entre États, techniques d'irrigation économes comme le goutte-à-goutte, recyclage des eaux usées, ou encore désalinisation de l'eau de mer, une technique efficace mais coûteuse en énergie, utilisée par exemple dans les pays du Golfe.",
      ],
      example: [
        "Le Nil traverse notamment l'Éthiopie, le Soudan et l'Égypte : chaque décision prise en amont concerne des millions d'habitants en aval.",
        "En Israël et en Espagne, l'irrigation au goutte-à-goutte apporte l'eau directement au pied de chaque plante, avec très peu de gaspillage.",
      ],
      tip: "Pour comprendre une tension autour d'un fleuve, place les acteurs sur la carte : qui est en AMONT (près de la source, avantagé) et qui est en AVAL (près de l'embouchure, dépendant des autres) ?",
    },
    {
      title: "L'énergie : fossiles contre renouvelables",
      paragraphs: [
        "Transports, chauffage, usines, électricité : nos sociétés consomment d'énormes quantités d'énergie, et la demande mondiale augmente avec la population et le développement. Aujourd'hui, environ 80 % de l'énergie consommée dans le monde provient encore des énergies fossiles : le charbon, le pétrole et le gaz naturel.",
        "Ces énergies fossiles se sont formées dans le sous-sol pendant des millions d'années à partir de restes de végétaux et d'organismes : les stocks sont donc limités et ne se reconstituent pas à l'échelle humaine. On dit qu'elles ne sont pas renouvelables. Leur combustion rejette de plus du dioxyde de carbone (CO2), le principal gaz à effet de serre responsable du réchauffement climatique. Autre problème : ces ressources sont concentrées dans certains pays, ce qui crée des dépendances et des rivalités.",
        "Face à cela, les énergies renouvelables se développent rapidement : le soleil (panneaux solaires), le vent (éoliennes), l'eau des fleuves (barrages hydroélectriques), la chaleur de la Terre (géothermie) ou la biomasse. Elles sont inépuisables à notre échelle et émettent très peu de CO2, mais elles dépendent parfois de la météo et demandent de gros investissements. La transition énergétique, c'est le passage progressif des fossiles vers ces énergies plus propres, accompagné d'économies d'énergie.",
      ],
      example: [
        "La Chine est à la fois le premier consommateur mondial de charbon et le premier constructeur de panneaux solaires et d'éoliennes.",
        "En Norvège, presque toute l'électricité provient des barrages hydroélectriques.",
      ],
      tip: "Fossile = stock limité formé en millions d'années (charbon, pétrole, gaz) + rejets de CO2. Renouvelable = flux inépuisable à notre échelle (soleil, vent, eau, chaleur de la Terre). Classe n'importe quelle énergie avec ces deux questions : le stock s'épuise-t-il ? Émet-elle du CO2 ?",
    },
    {
      title: "Nourrir l'humanité",
      paragraphs: [
        "Nourrir 8 milliards d'humains, et bientôt 10, est un défi immense. La sécurité alimentaire est atteinte quand chacun a accès, en permanence, à une nourriture suffisante, saine et équilibrée. Or ce n'est pas le cas partout : selon l'ONU, plus de 700 millions de personnes souffrent encore de la faim, surtout en Afrique subsaharienne et en Asie du Sud.",
        "Le paradoxe, c'est que la planète produit aujourd'hui assez de nourriture pour tous. Le problème est surtout un problème d'accès et de répartition : pauvreté, guerres qui ruinent les récoltes et bloquent les routes, sécheresses, prix trop élevés. Pendant que certains manquent de tout, d'autres pays font face à l'excès inverse : la surnutrition et l'obésité progressent dans le monde entier.",
        "Autre scandale : le gaspillage. Environ un tiers de la nourriture produite dans le monde est perdu ou jeté ! Dans les pays pauvres, les pertes ont lieu surtout après la récolte, faute de moyens de stockage et de transport ; dans les pays riches, on jette surtout à la fin de la chaîne, dans les supermarchés et les cuisines. Réduire ce gaspillage, développer une agriculture plus durable et aider les petits agriculteurs sont des pistes essentielles pour nourrir l'humanité.",
      ],
      example: [
        "En France, une loi oblige depuis 2016 les grands supermarchés à donner leurs invendus alimentaires à des associations plutôt que de les jeter.",
        "Au Sahel, de meilleurs greniers de stockage permettent de sauver une partie des récoltes autrefois perdues à cause de l'humidité et des insectes.",
      ],
      tip: "Le chiffre choc à retenir : environ 1/3 de la nourriture mondiale est gaspillé, alors que plus de 700 millions de personnes ont faim. Le défi alimentaire est d'abord une question de répartition, pas seulement de production.",
    },
    {
      title: "Le changement climatique : constats et adaptation",
      paragraphs: [
        "Les scientifiques du GIEC, le groupe d'experts sur le climat créé par l'ONU, sont formels : la Terre s'est réchauffée d'environ 1,1 °C depuis la fin du XIXe siècle, et ce réchauffement est causé par les activités humaines, principalement la combustion des énergies fossiles qui rejette des gaz à effet de serre.",
        "Les conséquences sont déjà visibles : fonte des glaciers et de la banquise, montée du niveau des mers qui menace les îles basses et les littoraux, canicules et sécheresses plus fréquentes, incendies et pluies extrêmes plus intenses. Les populations les plus pauvres, qui ont pourtant le moins contribué au problème, sont souvent les plus exposées.",
        "Deux stratégies se complètent. L'atténuation consiste à réduire les émissions de gaz à effet de serre : développer les énergies renouvelables, isoler les bâtiments, transformer les transports. L'adaptation consiste à se préparer aux changements devenus inévitables : construire des digues, végétaliser les villes pour les rafraîchir, choisir des cultures qui résistent à la sécheresse, ou même déplacer des habitations menacées par la mer.",
      ],
      example: [
        "Aux Pays-Bas, dont une grande partie du territoire est sous le niveau de la mer, d'immenses digues et barrières mobiles protègent le pays des tempêtes.",
        "À Paris, des « cours oasis » végétalisées remplacent le bitume des écoles pour créer des îlots de fraîcheur lors des canicules.",
      ],
      tip: "Deux mots à ne pas confondre : ATTÉNUER = réduire les émissions pour limiter le réchauffement futur ; S'ADAPTER = se protéger des effets déjà là. Les deux sont nécessaires en même temps.",
    },
  ],
  exercises: [
    {
      id: "h5res-1",
      level: 1,
      type: "qcm",
      question:
        "Quelle part de l'eau présente sur Terre est de l'eau salée ?",
      choices: ["Environ 50 %", "Environ 70 %", "Environ 97 %", "Environ 20 %"],
      answer: 2,
      explanation:
        "Environ 97 % de l'eau de la planète est salée (océans et mers). L'eau douce ne représente qu'environ 3 %, et une grande partie est immobilisée dans les glaciers et les calottes polaires. L'eau douce facilement utilisable est donc très rare. Ne confonds pas avec les 70 %, qui correspondent à la part de la surface terrestre couverte par l'eau.",
      hint: "L'eau douce ne représente qu'environ 3 % du total.",
    },
    {
      id: "h5res-2",
      level: 1,
      type: "qcm",
      question:
        "Parmi ces énergies, laquelle est une énergie renouvelable ?",
      choices: ["Le charbon", "Le pétrole", "Le gaz naturel", "L'énergie solaire"],
      answer: 3,
      explanation:
        "L'énergie solaire est renouvelable : le soleil est une source inépuisable à l'échelle humaine et les panneaux solaires n'émettent pas de CO2 en fonctionnant. Le charbon, le pétrole et le gaz naturel sont les trois énergies fossiles : des stocks limités, formés en millions d'années, dont la combustion rejette du CO2.",
      hint: "Trois de ces énergies sortent du sous-sol et s'épuisent.",
    },
    {
      id: "h5res-3",
      level: 1,
      type: "truefalse",
      question:
        "Dans le monde, l'agriculture est l'activité qui consomme le plus d'eau.",
      answer: true,
      explanation:
        "Vrai ! L'agriculture représente environ 70 % des prélèvements d'eau dans le monde, essentiellement pour l'irrigation des cultures. Viennent ensuite l'industrie, puis les usages domestiques (boisson, cuisine, hygiène), qui ne représentent qu'une petite part du total.",
      hint: "Pense aux immenses champs qu'il faut irriguer.",
    },
    {
      id: "h5res-4",
      level: 1,
      type: "input",
      question:
        "Comment appelle-t-on les énergies formées en millions d'années dans le sous-sol, comme le charbon, le pétrole et le gaz ? Les énergies… (un adjectif, en minuscules)",
      answer: "fossiles",
      accept: ["fossile"],
      explanation:
        "Le charbon, le pétrole et le gaz naturel sont les énergies fossiles : elles proviennent de la transformation très lente, sur des millions d'années, de restes de végétaux et d'organismes enfouis. Leurs stocks sont limités et leur combustion rejette du CO2, le principal gaz à effet de serre.",
      hint: "Le même mot désigne les restes d'animaux préhistoriques conservés dans la roche.",
    },
    {
      id: "h5res-5",
      level: 2,
      type: "qcm",
      question:
        "Pourquoi le grand barrage construit par l'Éthiopie sur le Nil Bleu inquiète-t-il l'Égypte ?",
      choices: [
        "Parce qu'il pollue l'eau du fleuve",
        "Parce que l'Égypte, située en aval, dépend presque entièrement du Nil pour son eau",
        "Parce que le barrage empêche les bateaux égyptiens de naviguer",
        "Parce que l'Égypte voulait construire le même barrage",
      ],
      answer: 1,
      explanation:
        "L'Égypte est située en aval du Nil : l'eau qu'elle reçoit est passée d'abord par l'Éthiopie et le Soudan. Sa population et son agriculture dépendent presque entièrement du fleuve. Elle craint donc qu'en remplissant son barrage, l'Éthiopie réduise le débit du Nil. C'est un exemple typique de tension internationale autour de l'eau.",
      hint: "Repère qui est en amont et qui est en aval du fleuve.",
    },
    {
      id: "h5res-6",
      level: 2,
      type: "qcm",
      question:
        "Quelle part approximative de la nourriture produite dans le monde est perdue ou gaspillée ?",
      choices: ["Environ 5 %", "Environ un tiers", "Environ les trois quarts", "Presque rien"],
      answer: 1,
      explanation:
        "Environ un tiers de la nourriture produite dans le monde est perdu ou jeté. Dans les pays pauvres, les pertes ont lieu surtout après la récolte, faute de stockage et de transport ; dans les pays riches, on jette surtout dans les magasins et à la maison. Réduire ce gaspillage est l'une des clés pour nourrir l'humanité.",
      hint: "C'est une fraction énorme : entre le quart et la moitié.",
    },
    {
      id: "h5res-7",
      level: 2,
      type: "truefalse",
      question:
        "Si plus de 700 millions de personnes souffrent de la faim, c'est parce que la planète ne produit pas assez de nourriture pour tout le monde.",
      answer: false,
      explanation:
        "Faux ! La production mondiale actuelle suffirait à nourrir toute l'humanité. La faim s'explique surtout par des problèmes d'accès et de répartition : pauvreté, guerres, sécheresses, prix trop élevés, gaspillage. C'est tout le paradoxe : on jette environ un tiers de la nourriture pendant que des millions de personnes en manquent.",
      hint: "Compare la production mondiale et le gaspillage.",
    },
    {
      id: "h5res-8",
      level: 2,
      type: "input",
      question:
        "Quel gaz, rejeté par la combustion des énergies fossiles, est le principal responsable de l'effet de serre supplémentaire ? (formule ou nom, en minuscules)",
      answer: "co2",
      accept: ["dioxyde de carbone", "le dioxyde de carbone", "gaz carbonique", "le co2"],
      explanation:
        "La combustion du charbon, du pétrole et du gaz naturel rejette du dioxyde de carbone (CO2). Ce gaz s'accumule dans l'atmosphère et renforce l'effet de serre, ce qui provoque le réchauffement climatique : environ +1,1 °C déjà depuis la fin du XIXe siècle, selon le GIEC.",
      hint: "Sa formule chimique tient en une lettre et un chiffre… fois deux.",
    },
    {
      id: "h5res-9",
      level: 3,
      type: "qcm",
      question:
        "Une ville du littoral construit une digue contre la montée de la mer et plante des arbres pour rafraîchir ses rues en été. Comment appelle-t-on cette stratégie face au changement climatique ?",
      choices: [
        "L'atténuation",
        "L'adaptation",
        "La transition énergétique",
        "La désalinisation",
      ],
      answer: 1,
      explanation:
        "Il s'agit d'adaptation : la ville se prépare aux effets du changement climatique déjà en cours (montée des eaux, canicules) pour en limiter les dégâts. L'atténuation, elle, consiste à réduire les émissions de gaz à effet de serre, par exemple en remplaçant les énergies fossiles par des renouvelables. Les deux stratégies sont complémentaires.",
      hint: "La ville ne réduit pas ses émissions : elle se protège des effets.",
    },
    {
      id: "h5res-10",
      level: 3,
      type: "input",
      question:
        "Quelle mer d'Asie centrale a presque disparu parce que les fleuves qui l'alimentaient ont été détournés pour irriguer des champs de coton ? La mer d'… (un mot, en minuscules)",
      answer: "aral",
      accept: ["mer d'aral", "la mer d'aral"],
      explanation:
        "La mer d'Aral, entre le Kazakhstan et l'Ouzbékistan, était l'un des plus grands lacs du monde. À partir des années 1960, les fleuves qui l'alimentaient ont été détournés pour irriguer d'immenses cultures de coton : la mer a perdu la majeure partie de sa surface, laissant des bateaux échoués en plein désert. C'est un exemple emblématique de mauvaise gestion de l'eau.",
      hint: "Son nom rime avec « oral ».",
    },
    {
      id: "h5res-11",
      level: 3,
      type: "qcm",
      question:
        "Les énergies renouvelables ont beaucoup d'avantages, mais quelle est l'une de leurs limites actuelles ?",
      choices: [
        "Elles rejettent plus de CO2 que le charbon",
        "Leurs stocks s'épuiseront dans quelques années",
        "Certaines dépendent de la météo : sans vent ni soleil, la production baisse",
        "Elles ne peuvent produire aucune électricité",
      ],
      answer: 2,
      explanation:
        "Le solaire et l'éolien sont dits intermittents : la nuit ou sans vent, la production chute, et il faut stocker l'électricité ou disposer d'autres sources en complément. En revanche, les renouvelables n'émettent presque pas de CO2 et sont inépuisables à notre échelle : ce sont les fossiles qui s'épuisent, pas elles.",
      hint: "Que produit une éolienne un jour sans vent ?",
    },
    {
      id: "h5res-12",
      level: 3,
      type: "truefalse",
      question:
        "Selon le GIEC, le réchauffement climatique observé depuis la fin du XIXe siècle est principalement causé par les activités humaines.",
      answer: true,
      explanation:
        "Vrai ! Le GIEC, groupe d'experts sur le climat créé par l'ONU, conclut sans ambiguïté que le réchauffement d'environ 1,1 °C observé depuis la fin du XIXe siècle est causé principalement par les activités humaines, surtout la combustion des énergies fossiles qui rejette des gaz à effet de serre comme le CO2. C'est le consensus de la communauté scientifique mondiale.",
      hint: "Que rejettent nos voitures, nos usines et nos centrales à charbon ?",
    },
  ],
  videos: [
    { title: "L'eau, ressource essentielle - Histoire-Géographie - Seconde - Les Bons Profs", youtubeId: "uW6wJl7oAu4", channel: "Les Bons Profs" },
  ],
};
