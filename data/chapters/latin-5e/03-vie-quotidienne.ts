import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "lat5-vie-quotidienne",
  subject: "latin",
  grade: "5e",
  num: 3,
  title: "Vivre à Rome",
  domain: "grandeurs",
  domainLabel: "Latin",
  icon: "Home",
  teaser: "École, thermes, gladiateurs : une journée dans la peau d'un jeune Romain.",
  objectives: [
    "Je connais les deux types d'habitation : la domus et l'insula",
    "Je sais ce qu'est la familia romaine et le rôle du pater familias",
    "Je sais raconter la journée d'un écolier romain",
    "Je connais les repas, la toge et les thermes",
    "Je sais corriger quelques idées reçues sur les gladiateurs",
  ],
  lesson: [
    {
      title: "Domus ou insula : dis-moi où tu habites…",
      paragraphs: [
        "À Rome, ton adresse dit tout de ta fortune. Les familles riches vivent dans une domus : une grande maison individuelle organisée autour de l'atrium, une cour intérieure dont le toit ouvert laisse la pluie tomber dans un bassin, l'impluvium. Au fond, un jardin à colonnades ; sur les murs, des fresques ; au sol, des mosaïques.",
        "La grande majorité des Romains, elle, s'entasse dans des insulae : des immeubles de rapport de plusieurs étages, souvent mal construits. Pas d'eau courante dans les étages, pas de cuisine digne de ce nom : on mange chaud dans les thermopolia, les « fast-foods » de la rue ! Les incendies et les effondrements y sont fréquents.",
        "Détail amusant : plus on monte dans les étages d'une insula, moins le loyer est cher — exactement l'inverse d'aujourd'hui, car sans ascenseur et loin de l'eau, les derniers étages étaient les pires.",
      ],
      example: [
        "domus = la maison (riche) → « domicile », « domestique »",
        "insula = l'île… et l'immeuble ! Un immeuble entouré de rues ressemble à une île.",
        "atrium et impluvium : deux mots latins que les architectes emploient encore.",
      ],
      tip: "Domus = riche demeure, insula = immeuble du peuple. Pour t'en souvenir : la domus est un « domaine », l'insula une « île » cernée par les rues bruyantes.",
    },
    {
      title: "La familia et le pater familias",
      paragraphs: [
        "Attention, faux ami ! La familia romaine ne désigne pas seulement les parents et les enfants : elle comprend toutes les personnes vivant sous l'autorité du chef de famille, y compris les esclaves de la maison.",
        "Ce chef, c'est le pater familias, « le père de famille ». Son autorité est immense : il dirige les biens, arrange les mariages de ses enfants et rend le culte aux dieux du foyer. À la naissance d'un bébé, c'est lui qui le reconnaît en le soulevant dans ses bras.",
        "Les esclaves (servi) n'ont aucun droit : ils appartiennent à leur maître, qui peut toutefois les libérer. Un esclave libéré devient un affranchi (libertus) : il reste lié à son ancien maître, mais ses enfants naîtront libres. Certains affranchis sont devenus très riches !",
      ],
      example: [
        "pater = le père → « paternel »",
        "servus = l'esclave → « servile », « serviteur »",
        "libertus = l'affranchi → pense à liber, « libre », qui a donné « liberté »",
      ],
      tip: "Familia ≠ famille ! Range dans la familia tous ceux qui vivent sous le toit et l'autorité du pater familias, esclaves compris.",
    },
    {
      title: "Sur les bancs du ludus",
      paragraphs: [
        "Debout avant l'aube ! L'écolier romain part en classe au chant du coq, accompagné d'un esclave, le paedagogus, qui porte ses affaires. L'école primaire s'appelle le ludus : on y entre vers sept ans pour apprendre à lire, écrire et compter auprès du magister.",
        "Pas de cahiers : on écrit sur des tablettes de cire avec un stylet, une tige pointue en métal ou en os. Une bêtise ? On retourne le stylet et on efface en lissant la cire avec l'extrémité plate. Pratique, réutilisable… et écologique avant l'heure.",
        "La discipline est rude : le magister punit les étourdis de coups de férule (une baguette). Les cours ont lieu le matin, souvent dans une simple boutique ouverte sur la rue bruyante. Et il faut aussi compter… en chiffres romains, sans le zéro !",
      ],
      example: [
        "ludus = l'école primaire (le mot signifie aussi « le jeu » !)",
        "magister = le maître d'école → « magistral », et même « maestro » en italien",
        "stilus = le stylet → notre mot « stylo »",
      ],
      tip: "Ludus veut dire à la fois « école » et « jeu » : les Romains voyaient-ils l'école comme un jeu ? En tout cas, le mot « ludique » (amusant) vient de là.",
    },
    {
      title: "À table et aux thermes",
      paragraphs: [
        "Les Romains font trois repas : le jentaculum (petit déjeuner rapide, du pain et du fromage), le prandium (déjeuner léger, souvent debout) et le grand repas du soir, la cena. Chez les riches, la cena se prend allongé sur des lits disposés autour de la table, dans la salle à manger appelée triclinium. On mange avec les doigts !",
        "Côté vêtements : tout le monde porte la tunique. La toge, grand drap de laine savamment drapé, est réservée aux citoyens romains ; lourde et compliquée à enfiler, on la porte pour les grandes occasions. Vers seize ans, le jeune Romain reçoit la toge virile : il devient officiellement un homme.",
        "L'après-midi, direction les thermes : des bains publics ouverts à tous pour un prix modique. On passe de la salle tiède (tepidarium) à la salle chaude (caldarium), puis au bain froid (frigidarium). On y fait aussi du sport, on discute, on retrouve ses amis : les thermes sont le grand lieu de rencontre des Romains.",
      ],
      example: [
        "cena = le dîner ; triclinium = la salle à manger aux trois lits",
        "caldarium (salle chaude) : retrouve ce sens dans « chaudière » ; frigidarium (salle froide) : pense à « frigo » !",
        "toga = la toge, réservée aux citoyens",
      ],
      tip: "Aux thermes, l'ordre des salles suit la température : tepidarium (tiède) → caldarium (chaud) → frigidarium (froid). Les noms latins te donnent la réponse : tiède, chaud, froid !",
    },
    {
      title: "Panem et circenses : jeux du cirque et gladiateurs",
      paragraphs: [
        "« Du pain et des jeux » (panem et circenses) : selon le poète Juvénal, voilà ce que réclame le peuple romain. Les jours de fête, la ville entière se presse aux spectacles gratuits offerts par les puissants.",
        "Au Circus Maximus, gigantesque piste pouvant accueillir environ 150 000 spectateurs, on vibre pour les courses de chars : quatre écuries (les Bleus, les Verts, les Rouges, les Blancs) s'affrontent dans des virages serrés où les accidents sont spectaculaires. À l'amphithéâtre, comme le Colisée, place aux combats de gladiateurs.",
        "Halte aux idées reçues ! Les combats ne finissaient pas toujours par la mort : un gladiateur coûtait très cher à former, et son propriétaire n'avait aucune envie de le perdre. Beaucoup de combats s'arrêtaient à la première blessure sérieuse, et un gladiateur vaincu pouvait être gracié s'il s'était bien battu. Certains champions étaient de vraies stars, et des hommes libres s'engageaient même volontairement pour la gloire ! Quant au fameux « pouce baissé = mort », aucun texte antique ne décrit précisément ce geste : c'est surtout une image popularisée par un tableau du XIXe siècle.",
      ],
      example: [
        "gladiator vient de gladius, « l'épée » → le glaïeul, fleur en forme de lame, vient du même mot !",
        "circus = le cirque (d'abord une piste de courses, pas un chapiteau)",
        "panem et circenses = « du pain et des jeux »",
      ],
      tip: "Réflexe anti-cliché : un gladiateur est un investissement. Demande-toi toujours « qui paie ? » : celui qui a payé la formation ne veut pas voir mourir son champion à chaque combat.",
    },
  ],
  exercises: [
    {
      id: "l5vie-1",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle la grande maison individuelle des riches Romains ?",
      choices: ["l'insula", "la domus", "le ludus", "le triclinium"],
      answer: 1,
      explanation:
        "La domus est la maison des familles riches, organisée autour de l'atrium et de son bassin, l'impluvium. L'insula est au contraire l'immeuble collectif où vit la majorité des Romains. Le mot domus a donné « domicile » en français.",
      hint: "Ce mot latin a donné « domicile ».",
    },
    {
      id: "l5vie-2",
      level: 1,
      type: "qcm",
      question: "Avec quoi l'écolier romain écrit-il au ludus ?",
      choices: [
        "une plume d'oie et du parchemin",
        "un stylet sur une tablette de cire",
        "un pinceau et du papyrus uniquement",
        "une craie sur une ardoise",
      ],
      answer: 1,
      explanation:
        "L'écolier grave ses lettres avec un stylet (stilus) sur une tablette enduite de cire. Pour effacer, il retourne le stylet et lisse la cire avec le bout plat. Notre mot « stylo » vient directement de stilus !",
      hint: "Notre mot « stylo » vient du nom de cet objet.",
    },
    {
      id: "l5vie-3",
      level: 1,
      type: "truefalse",
      question: "La familia romaine comprend uniquement les parents et les enfants, comme notre mot « famille ».",
      answer: false,
      explanation:
        "Faux ! C'est un faux ami : la familia comprend toutes les personnes vivant sous l'autorité du pater familias, y compris les esclaves de la maison. Elle est donc bien plus large que notre « famille » actuelle.",
      hint: "Méfie-toi des faux amis : familia est plus large que « famille ».",
    },
    {
      id: "l5vie-4",
      level: 1,
      type: "input",
      question: "Comment s'appelle en latin le chef de famille romain, qui a autorité sur toute la maisonnée ? (deux mots latins)",
      answer: "pater familias",
      accept: ["le pater familias", "paterfamilias"],
      explanation:
        "Le pater familias, « père de famille », détient l'autorité sur toute la maisonnée : il gère les biens, arrange les mariages et rend le culte aux dieux du foyer. Pater a donné « paternel » en français.",
      hint: "Littéralement : « le père de la famille ».",
    },
    {
      id: "l5vie-5",
      level: 2,
      type: "qcm",
      question: "Dans une insula romaine, quels étages étaient les moins chers à louer ?",
      choices: [
        "les étages du haut, sans eau et dangereux en cas d'incendie",
        "le rez-de-chaussée, trop bruyant",
        "tous les étages coûtaient pareil",
        "les étages du milieu, trop sombres",
      ],
      answer: 0,
      explanation:
        "C'est l'inverse d'aujourd'hui : sans ascenseur, sans eau courante dans les étages et avec un risque d'incendie ou d'effondrement, plus on montait, moins c'était cher. Les plus pauvres logeaient donc tout en haut des insulae.",
      hint: "Pas d'ascenseur, pas d'eau courante là-haut…",
    },
    {
      id: "l5vie-6",
      level: 2,
      type: "qcm",
      question: "Aux thermes, dans quel ordre un Romain passe-t-il généralement d'une salle à l'autre ?",
      choices: [
        "frigidarium → caldarium → tepidarium",
        "tepidarium → caldarium → frigidarium",
        "caldarium → tepidarium → frigidarium",
        "il n'y a qu'une seule salle dans les thermes",
      ],
      answer: 1,
      explanation:
        "Le parcours classique suit la température : d'abord la salle tiède (tepidarium), puis la salle chaude (caldarium), et pour finir le bain froid du frigidarium. Les noms latins sont transparents : tiède, chaud (pense à « chaudière »), froid (pense à « frigo »).",
      hint: "Tiède, puis chaud, puis froid : traduis les noms des salles.",
    },
    {
      id: "l5vie-7",
      level: 2,
      type: "input",
      question: "Comment s'appelle le grand repas du soir des Romains, pris allongé dans le triclinium chez les riches ? (mot latin)",
      answer: "cena",
      accept: ["la cena"],
      explanation:
        "La cena est le repas principal, pris en fin de journée. Chez les riches, on le prend allongé sur des lits dans le triclinium, la salle à manger « aux trois lits », et on mange avec les doigts. Les deux autres repas sont le jentaculum (matin) et le prandium (midi).",
      hint: "En italien, le dîner se dit encore cena.",
    },
    {
      id: "l5vie-8",
      level: 2,
      type: "truefalse",
      question: "À Rome, n'importe qui pouvait porter la toge, y compris les esclaves.",
      answer: false,
      explanation:
        "Faux ! La toge était réservée aux citoyens romains : c'était le signe visible de la citoyenneté. Les esclaves et les étrangers portaient la tunique. Vers seize ans, le jeune citoyen recevait la toge virile, marque de son passage à l'âge adulte.",
      hint: "La toge est un signe de citoyenneté.",
    },
    {
      id: "l5vie-9",
      level: 3,
      type: "qcm",
      question: "Pourquoi les combats de gladiateurs ne finissaient-ils PAS toujours par la mort ?",
      choices: [
        "parce que les épées étaient en bois",
        "parce qu'un gladiateur coûtait cher à former et que son propriétaire ne voulait pas le perdre",
        "parce que la loi romaine interdisait de blesser un gladiateur",
        "parce que les spectateurs détestaient la violence",
      ],
      answer: 1,
      explanation:
        "Un gladiateur représentait un gros investissement : des années d'entraînement, de nourriture et de soins. Son propriétaire n'avait donc aucun intérêt à le voir mourir. Beaucoup de combats s'arrêtaient à la première blessure sérieuse, et un vaincu courageux pouvait être gracié. Certains champions étaient de véritables vedettes.",
      hint: "Pose-toi la question : qui a payé la formation du gladiateur ?",
    },
    {
      id: "l5vie-10",
      level: 3,
      type: "input",
      question: "Un esclave romain libéré par son maître reçoit un statut particulier. Comment appelle-t-on cet ancien esclave en français ?",
      answer: "un affranchi",
      accept: ["affranchi", "l'affranchi", "affranchis"],
      explanation:
        "L'esclave libéré devient un affranchi (libertus en latin). Il reste lié à son ancien maître, mais ses enfants naîtront libres. Certains affranchis ont fait fortune dans le commerce. Le mot vient de « franc », qui signifie « libre » : affranchir, c'est rendre libre.",
      hint: "Le verbe correspondant signifie « rendre libre ».",
    },
    {
      id: "l5vie-11",
      level: 3,
      type: "truefalse",
      question: "Le geste du « pouce baissé » ordonnant la mort d'un gladiateur est décrit avec précision dans les textes antiques.",
      answer: false,
      explanation:
        "Faux ! Aucun texte antique ne décrit précisément ce geste : on sait qu'un signe du pouce existait, mais pas lequel signifiait la grâce ou la mort. L'image du « pouce baissé = mort » a surtout été popularisée par un tableau du XIXe siècle, puis par le cinéma. Encore une idée reçue à manier avec prudence !",
      hint: "D'où vient vraiment cette image : de l'Antiquité ou d'une époque plus récente ?",
    },
    {
      id: "l5vie-12",
      level: 3,
      type: "qcm",
      question: "Que signifie l'expression panem et circenses, employée par le poète Juvénal à propos du peuple romain ?",
      choices: [
        "« du pain et des jeux »",
        "« le pain et le cirque coûtent cher »",
        "« ni pain ni jeux »",
        "« du pain pour les gladiateurs »",
      ],
      answer: 0,
      explanation:
        "Panem et circenses signifie « du pain et des jeux (du cirque) ». Juvénal critiquait ainsi le peuple de Rome, qui selon lui ne réclamait plus que des distributions de nourriture et des spectacles gratuits. L'expression s'emploie encore aujourd'hui pour dénoncer les divertissements qui détournent des vrais problèmes.",
      hint: "Panem ressemble à « pain »… et circenses à « cirque ».",
    },
  ],
};
