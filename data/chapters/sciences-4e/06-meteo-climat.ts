import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci4-meteo-climat",
  subject: "sciences",
  grade: "4e",
  num: 6,
  title: "Météo, climat et risques",
  domain: "grandeurs",
  domainLabel: "SVT",
  icon: "CloudLightning",
  teaser: "Masses d'air, courants marins, cyclones et effet de serre : comprendre ce qui fait le temps qu'il fait et le climat qui change.",
  objectives: [
    "Je sais expliquer d'où vient le vent et distinguer anticyclone et dépression",
    "Je sais que les courants océaniques transportent de la chaleur et influencent les climats",
    "Je sais dans quelles conditions se forme un cyclone et quelles précautions prendre",
    "Je sais distinguer la météo du climat",
    "Je sais expliquer l'effet de serre naturel, son renforcement par les activités humaines et ses conséquences",
  ],
  lesson: [
    {
      title: "Les masses d'air et le vent",
      paragraphs: [
        "L'atmosphère n'est pas homogène : elle est formée d'immenses volumes d'air, les masses d'air, qui peuvent s'étendre sur des centaines ou des milliers de kilomètres et qui se distinguent par leur température et leur humidité. Une masse d'air venue du Sahara est chaude et sèche ; une masse venue de l'Atlantique nord est fraîche et humide.",
        "L'air chaud est moins dense que l'air froid : il a donc tendance à s'élever, tandis que l'air froid descend. Ces mouvements verticaux créent des différences de pression atmosphérique à la surface du globe.",
        "Le vent est simplement du déplacement d'air : l'air va toujours des zones de haute pression vers les zones de basse pression. Plus l'écart de pression entre deux zones est grand, plus le vent est fort. Le vent ne « souffle » pas de lui-même : il est le résultat d'un déséquilibre de pression.",
        "Sur les cartes météo, on parle d'anticyclone quand la pression est élevée (souvent au-dessus de 1015 hPa) : l'air y descend, les nuages se dissipent, le temps est calme et sec. On parle de dépression quand la pression est basse : l'air y monte, se refroidit en altitude, la vapeur d'eau s'y condense et forme des nuages — le temps est perturbé, venteux et pluvieux.",
      ],
      example: [
        "La pression atmosphérique moyenne au niveau de la mer vaut environ 1013 hPa (hectopascals).",
        "Anticyclone = pression haute = beau temps. Dépression = pression basse = temps perturbé.",
        "En France, les perturbations arrivent le plus souvent par l'ouest, portées par les vents d'altitude venus de l'Atlantique.",
      ],
      tip: "Ne confonds pas la cause et la conséquence : ce n'est pas le beau temps qui crée l'anticyclone, c'est l'air descendant de l'anticyclone qui empêche les nuages de se former. Retiens aussi qu'« anticyclone » ne veut pas dire « contre les cyclones ».",
    },
    {
      title: "Les courants océaniques",
      paragraphs: [
        "Les océans ne sont pas immobiles : ils sont parcourus par d'énormes courants, à la surface comme en profondeur. Les courants de surface sont surtout mis en mouvement par les vents dominants ; les courants profonds sont dus aux différences de température et de salinité de l'eau.",
        "Ces courants déplacent des quantités colossales d'eau, et donc de chaleur, des régions équatoriales vers les régions polaires et inversement. L'océan est ainsi, avec l'atmosphère, l'un des deux grands moteurs de la répartition de la chaleur sur la planète.",
        "Le Gulf Stream est le courant chaud le plus connu : il part du golfe du Mexique, longe la côte est des États-Unis puis traverse l'Atlantique nord en direction de l'Europe. Il transporte de l'eau chaude vers le nord et adoucit nettement le climat de l'Europe de l'ouest.",
        "C'est pourquoi Brest et Québec, situées à peu près à la même latitude, n'ont pas du tout le même climat : Brest connaît des hivers doux et pluvieux, Québec des hivers longs et très froids. La latitude ne suffit donc pas à expliquer un climat : les courants marins et la proximité de l'océan comptent aussi.",
      ],
      example: [
        "Brest : environ 48° de latitude nord, moyenne d'environ 7 °C en janvier.",
        "Québec : environ 47° de latitude nord, moyenne d'environ −12 °C en janvier.",
        "L'eau a une très grande capacité à stocker de la chaleur : c'est ce qui rend les climats côtiers plus doux et moins contrastés que les climats continentaux.",
      ],
      tip: "Un courant chaud ne « chauffe » pas l'air comme un radiateur allumé : il apporte de l'eau plus chaude que l'eau environnante, et cette eau réchauffe peu à peu l'air qui la survole avant d'atteindre le continent.",
    },
    {
      title: "Les cyclones",
      paragraphs: [
        "Un cyclone est une dépression tropicale extrêmement creuse, c'est-à-dire une zone de très basse pression, accompagnée de vents violents en spirale et de pluies torrentielles. On l'appelle ouragan dans l'Atlantique et le Pacifique est, typhon dans le Pacifique ouest : ce sont exactement les mêmes phénomènes.",
        "Sa formation exige plusieurs conditions simultanées. D'abord une eau de surface chaude, à plus de 26 °C sur une épaisseur d'au moins une cinquantaine de mètres : c'est l'évaporation de cette eau chaude qui fournit l'énergie du système. Ensuite une atmosphère humide et instable. Enfin une position suffisamment éloignée de l'équateur, environ 5° de latitude au minimum, pour que la rotation de la Terre puisse mettre le système en rotation.",
        "Un cyclone mature mesure plusieurs centaines de kilomètres de diamètre. En son centre se trouve l'œil, une zone de quelques dizaines de kilomètres où le vent tombe et le ciel s'éclaircit. C'est un piège redoutable : la traversée de l'œil fait croire à la fin du phénomène, alors que les vents reviennent ensuite en sens inverse, souvent aussi violents.",
        "Les dégâts viennent de trois causes : les vents, qui peuvent dépasser 250 km/h, les pluies, qui provoquent inondations et glissements de terrain, et la submersion marine, une montée brutale du niveau de la mer sur la côte, souvent la plus meurtrière.",
        "Les précautions sont connues : suivre les alertes officielles, protéger les ouvertures et rentrer tout objet susceptible de s'envoler avant l'arrivée, constituer une réserve d'eau potable, de nourriture et de piles, puis se mettre à l'abri dans un bâtiment solide et y rester, sans sortir pendant le passage de l'œil. Un cyclone se prévoit plusieurs jours à l'avance : c'est ce délai qui sauve des vies.",
      ],
      example: [
        "Conditions de formation : eau de surface à plus de 26 °C, air humide, éloignement de l'équateur.",
        "Un cyclone qui passe au-dessus d'une terre ou d'une eau plus froide s'affaiblit rapidement, car il est privé de sa source d'énergie.",
        "Saison cyclonique dans l'Atlantique nord : principalement de juin à novembre, quand l'océan est le plus chaud.",
      ],
      tip: "Le calme de l'œil du cyclone n'annonce jamais la fin : c'est la moitié du phénomène qui reste à venir, avec des vents soufflant dans l'autre sens. Ne jamais sortir pendant cette accalmie.",
    },
    {
      title: "Météo et climat, deux échelles différentes",
      paragraphs: [
        "La météorologie décrit l'état de l'atmosphère à un endroit donné et à un moment donné : température, vent, précipitations, nuages. Elle porte sur des heures ou des jours, et sa prévision fiable ne dépasse guère une semaine.",
        "Le climat, lui, décrit les conditions moyennes observées sur une longue durée, conventionnellement 30 ans, dans une région donnée. Il ne se mesure pas un jour précis : il se calcule à partir de milliers de mesures accumulées.",
        "La différence est donc une différence d'échelle de temps, pas de nature. Une image utile : la météo, c'est l'humeur du jour ; le climat, c'est le caractère. Une seule journée ne dit rien du caractère, mais des années d'observations le révèlent.",
        "Cette distinction est essentielle pour raisonner correctement. Un hiver particulièrement froid ne contredit en rien le réchauffement climatique, tout comme une journée d'excellente humeur ne fait pas d'une personne quelqu'un de joyeux. Ce qui compte pour le climat, ce sont les moyennes sur de longues durées et la fréquence des événements extrêmes.",
      ],
      example: [
        "Météo : « demain, 18 °C et averses à Lyon ».",
        "Climat : « à Lyon, la température moyenne de juillet est d'environ 22 °C ».",
        "La température moyenne à la surface de la Terre a augmenté d'environ 1,1 °C depuis l'époque préindustrielle.",
      ],
      tip: "Un seul événement, canicule ou tempête, ne prouve rien à lui seul. En revanche, l'augmentation de la fréquence et de l'intensité de ces événements sur plusieurs décennies, elle, est un signal climatique.",
    },
    {
      title: "L'effet de serre et son renforcement",
      paragraphs: [
        "Le Soleil envoie de l'énergie lumineuse vers la Terre. Une partie est réfléchie, le reste est absorbé par le sol et les océans, qui se réchauffent et renvoient à leur tour de l'énergie sous forme de rayonnement infrarouge, c'est-à-dire de chaleur.",
        "Certains gaz de l'atmosphère — la vapeur d'eau, le dioxyde de carbone CO₂, le méthane CH₄ — absorbent une partie de ce rayonnement infrarouge et le renvoient en partie vers le sol. Ils jouent le rôle d'une couverture : c'est l'effet de serre. Il est parfaitement naturel et vital : sans lui, la température moyenne de la Terre serait d'environ −18 °C au lieu des +15 °C actuels, et l'eau liquide n'existerait pratiquement pas.",
        "Le problème n'est donc pas l'effet de serre, mais son renforcement. Depuis le milieu du XIXe siècle, les activités humaines — combustion du charbon, du pétrole et du gaz, déforestation, agriculture intensive, industrie — rejettent d'énormes quantités de gaz à effet de serre. La teneur en CO₂ de l'atmosphère est passée d'environ 280 ppm avant l'ère industrielle à plus de 420 ppm aujourd'hui, un niveau inégalé depuis des centaines de milliers d'années. La couverture s'épaissit, la Terre se réchauffe.",
        "Les conséquences déjà mesurées : hausse de la température moyenne d'environ 1,1 °C, fonte des glaciers et de la banquise, élévation du niveau des mers due à la fonte des glaces continentales et à la dilatation de l'eau qui se réchauffe, acidification des océans, événements extrêmes plus fréquents (canicules, sécheresses, pluies intenses), déplacement des aires de répartition des espèces.",
        "Les leviers d'action existent et se classent en deux familles : réduire les émissions (transports moins émetteurs, sobriété énergétique, isolation des bâtiments, électricité bas carbone, moins de gaspillage alimentaire) et préserver ou restaurer les puits de carbone naturels que sont les forêts et les océans. Il ne s'agit pas de « sauver la planète » — elle survivra — mais de préserver les conditions de vie de l'humanité et des écosystèmes.",
      ],
      example: [
        "Sans effet de serre naturel : environ −18 °C de moyenne. Avec : environ +15 °C.",
        "Teneur en CO₂ : environ 280 ppm vers 1850, plus de 420 ppm aujourd'hui.",
        "La fonte de la banquise arctique ne fait pas monter le niveau des mers (elle flotte déjà) ; ce sont les glaciers et les calottes posés sur des terres qui le font monter.",
      ],
      tip: "Deux erreurs classiques à éviter. Première : « il faut supprimer l'effet de serre » — non, sans lui la Terre serait gelée ; c'est son renforcement qui pose problème. Seconde : confondre l'effet de serre avec le trou dans la couche d'ozone, qui est un phénomène différent, dû à d'autres gaz et concernant les ultraviolets.",
    },
  ],
  exercises: [
    {
      id: "s4met-1",
      level: 1,
      type: "qcm",
      question: "Dans quel sens l'air se déplace-t-il pour former le vent ?",
      choices: [
        "des basses pressions vers les hautes pressions",
        "des hautes pressions vers les basses pressions",
        "toujours du nord vers le sud",
        "toujours des régions froides vers les régions chaudes",
      ],
      answer: 1,
      explanation:
        "L'air va des zones de haute pression vers les zones de basse pression, exactement comme un ballon gonflé se vide vers l'extérieur où la pression est plus faible. Plus l'écart de pression est grand, plus le vent est fort. Idée reçue à corriger : le vent n'a pas de direction imposée par les points cardinaux — c'est le déséquilibre de pression qui décide.",
      hint: "Pense à un ballon que l'on perce : dans quel sens l'air s'échappe-t-il par rapport aux pressions ?",
    },
    {
      id: "s4met-2",
      level: 1,
      type: "qcm",
      question: "Un anticyclone est associé à quel type de temps ?",
      choices: [
        "un temps calme et sec",
        "un temps pluvieux et venteux",
        "un temps orageux",
        "un cyclone tropical",
      ],
      answer: 0,
      explanation:
        "Dans un anticyclone, la pression est élevée et l'air descend. En descendant, l'air se réchauffe légèrement et les nuages se dissipent : le temps est calme et sec. C'est l'inverse dans une dépression, où l'air monte, se refroidit, et où la vapeur d'eau se condense en nuages puis en pluie. Malgré son nom, un anticyclone n'a rien à voir avec la lutte contre les cyclones.",
      hint: "Dans un anticyclone la pression est haute et l'air descend : les nuages peuvent-ils se former en descendant ?",
    },
    {
      id: "s4met-3",
      level: 1,
      type: "truefalse",
      question: "La météo et le climat désignent la même chose.",
      answer: false,
      explanation:
        "Faux : la différence est l'échelle de temps. La météo décrit l'état de l'atmosphère à un moment précis, sur des heures ou des jours. Le climat décrit les conditions moyennes sur une longue durée, conventionnellement 30 ans. Conséquence importante : un hiver très froid est un fait météo et ne contredit pas le réchauffement climatique, qui se juge sur des moyennes longues.",
      hint: "Compare la durée sur laquelle on observe : quelques jours dans un cas, plusieurs dizaines d'années dans l'autre.",
    },
    {
      id: "s4met-4",
      level: 1,
      type: "input",
      question:
        "Au-dessus d'une eau de surface à plus de combien de degrés Celsius un cyclone peut-il se former ? (nombre seul)",
      answer: "26",
      accept: ["26 °C", "26°C", "26 c", "26 degrés"],
      explanation:
        "Il faut une eau de surface à plus de 26 °C, sur une épaisseur d'au moins une cinquantaine de mètres. C'est l'évaporation de cette eau chaude qui fournit l'énergie du cyclone. C'est aussi pourquoi un cyclone faiblit rapidement dès qu'il passe au-dessus d'une terre ou d'une eau plus froide : sa source d'énergie est coupée.",
      hint: "C'est une température de l'ordre de celle d'une eau de baignade tropicale, un peu supérieure à 25 °C.",
    },
    {
      id: "s4met-5",
      level: 2,
      type: "qcm",
      question: "Pourquoi Brest a-t-elle des hivers bien plus doux que Québec, à latitude comparable ?",
      choices: [
        "Parce que Brest est beaucoup plus au sud",
        "Parce que le Gulf Stream apporte de l'eau chaude vers l'Europe de l'ouest",
        "Parce que l'effet de serre est plus fort en France",
        "Parce que Brest est en altitude",
      ],
      answer: 1,
      explanation:
        "Les deux villes sont presque à la même latitude, autour de 47-48° nord : ce n'est donc pas la position par rapport à l'équateur qui explique l'écart. Le Gulf Stream, courant chaud venu du golfe du Mexique, transporte de l'eau chaude vers l'Atlantique nord et adoucit l'air qui arrive sur l'Europe de l'ouest. Idée reçue à corriger : la latitude seule ne détermine pas un climat, les courants océaniques et la proximité de l'océan comptent aussi.",
      hint: "Les deux villes sont presque à la même latitude : cherche donc une cause liée à l'océan plutôt qu'à la position nord-sud.",
    },
    {
      id: "s4met-6",
      level: 2,
      type: "truefalse",
      question: "Quand on se trouve dans l'œil d'un cyclone, le danger est passé et on peut sortir.",
      answer: false,
      explanation:
        "Faux, et c'est une des causes de victimes les plus fréquentes. L'œil est le centre calme du cyclone : le vent tombe et le ciel s'éclaircit pendant quelques dizaines de minutes à une heure ou deux. Mais la seconde moitié du cyclone arrive ensuite, avec des vents aussi violents soufflant en sens inverse. Il faut donc rester à l'abri jusqu'à la levée officielle de l'alerte, et non jusqu'au retour du calme.",
      hint: "Demande-toi ce qui reste à passer après le centre d'un système qui tourne sur lui-même.",
    },
    {
      id: "s4met-7",
      level: 2,
      type: "qcm",
      question: "Quel serait l'ordre de grandeur de la température moyenne de la Terre sans effet de serre naturel ?",
      choices: ["environ +15 °C", "environ 0 °C", "environ −18 °C", "environ −100 °C"],
      answer: 2,
      explanation:
        "Sans les gaz à effet de serre naturellement présents dans l'atmosphère, la température moyenne à la surface de la Terre serait d'environ −18 °C, au lieu des +15 °C actuels : l'eau liquide serait presque absente et la vie telle que nous la connaissons impossible. L'effet de serre naturel est donc vital. Ce qui pose problème, c'est son renforcement par les rejets liés aux activités humaines.",
      hint: "L'effet de serre naturel réchauffe la planète d'une trentaine de degrés : pars de +15 °C et retire cet écart.",
    },
    {
      id: "s4met-8",
      level: 2,
      type: "input",
      question: "Quel gaz à effet de serre est produit en grande quantité par la combustion du charbon, du pétrole et du gaz ? (nom en trois mots)",
      answer: "dioxyde de carbone",
      accept: ["le dioxyde de carbone", "co2", "co₂", "gaz carbonique"],
      explanation:
        "Brûler du charbon, du pétrole ou du gaz naturel produit du dioxyde de carbone CO₂, car ces combustibles contiennent du carbone qui se combine au dioxygène de l'air. Ce CO₂ s'accumule dans l'atmosphère, où sa teneur est passée d'environ 280 ppm avant l'ère industrielle à plus de 420 ppm aujourd'hui. Le méthane CH₄ est un autre gaz à effet de serre important, mais il provient surtout de l'élevage, des rizières et des fuites de gaz.",
      hint: "C'est le même gaz que celui produit par toute combustion complète d'un composé carboné, celui qui trouble l'eau de chaux.",
    },
    {
      id: "s4met-9",
      level: 3,
      type: "qcm",
      question: "Pourquoi une dépression amène-t-elle généralement des nuages et de la pluie ?",
      choices: [
        "Parce que l'air y descend et se réchauffe",
        "Parce que l'air y monte, se refroidit en altitude et la vapeur d'eau s'y condense",
        "Parce que la basse pression attire l'eau des océans",
        "Parce que le vent apporte directement des gouttes de pluie",
      ],
      answer: 1,
      explanation:
        "Dans une dépression, l'air monte. En s'élevant il se refroidit, et l'air froid peut contenir beaucoup moins de vapeur d'eau que l'air chaud : la vapeur en excès se condense alors en minuscules gouttelettes qui forment les nuages, puis la pluie. Idée reçue à corriger : ce n'est pas la basse pression qui « aspire » l'eau de la mer, c'est le refroidissement de l'air ascendant qui provoque la condensation.",
      hint: "Raisonne en deux temps : dans quel sens l'air se déplace-t-il verticalement, et que devient la vapeur d'eau quand l'air se refroidit ?",
    },
    {
      id: "s4met-10",
      level: 3,
      type: "truefalse",
      question: "Un hiver exceptionnellement froid en France prouve que le réchauffement climatique n'existe pas.",
      answer: false,
      explanation:
        "Faux : un hiver est un événement météorologique, local et ponctuel, alors que le réchauffement climatique se mesure sur des moyennes mondiales calculées sur des décennies. Un épisode froid ponctuel est parfaitement compatible avec une tendance de fond au réchauffement, tout comme une journée pluvieuse en juillet ne remet pas en cause le fait que l'été soit la saison la plus chaude. Le signal climatique se lit dans les moyennes longues et dans la fréquence croissante des extrêmes.",
      hint: "Repère l'échelle de temps et d'espace dont parle l'affirmation, et compare-la à celle qui définit un climat.",
    },
    {
      id: "s4met-11",
      level: 3,
      type: "qcm",
      question: "Quelle affirmation sur l'élévation du niveau des mers est exacte ?",
      choices: [
        "Elle vient uniquement de la fonte de la banquise arctique",
        "Elle vient de la fonte des glaces posées sur les continents et de la dilatation de l'eau qui se réchauffe",
        "Elle est causée par la pluie qui tombe dans les océans",
        "Elle n'a aucun lien avec la température",
      ],
      answer: 1,
      explanation:
        "Deux causes principales agissent ensemble : la fonte des glaciers et des calottes glaciaires posés sur des terres, qui ajoute de l'eau aux océans, et la dilatation thermique, car l'eau occupe un volume un peu plus grand quand elle se réchauffe. La banquise, elle, flotte déjà : sa fonte ne fait pratiquement pas monter le niveau de la mer, exactement comme un glaçon qui fond dans un verre plein ne le fait pas déborder.",
      hint: "Pense à l'expérience du glaçon qui fond dans un verre d'eau rempli à ras bord, puis à ce qui arrive au volume de l'eau quand on la chauffe.",
    },
    {
      id: "s4met-12",
      level: 3,
      type: "qcm",
      question: "Parmi ces actions, laquelle agit sur un puits de carbone plutôt que sur les émissions ?",
      choices: [
        "Isoler les murs d'une maison",
        "Préférer le train à l'avion",
        "Protéger et restaurer les forêts",
        "Éteindre les appareils en veille",
      ],
      answer: 2,
      explanation:
        "Les trois autres actions réduisent les émissions de gaz à effet de serre, c'est-à-dire ce que l'on rejette. Protéger et restaurer les forêts agit sur l'autre levier : les puits de carbone, ces milieux — forêts, sols, océans — qui absorbent et stockent une partie du CO₂ de l'atmosphère. Les deux leviers sont complémentaires, mais la réduction des émissions reste prioritaire : planter des arbres ne compense pas des rejets illimités, car un puits de carbone a une capacité d'absorption limitée.",
      hint: "Classe chaque action en deux familles : « je rejette moins » ou « j'aide à absorber ce qui a été rejeté ».",
    },
  ],
};
