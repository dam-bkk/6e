import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en5-ville-voyages",
  subject: "anglais",
  grade: "5e",
  num: 7,
  title: "In town: directions & travel",
  domain: "grandeurs",
  domainLabel: "Vocabulary",
  icon: "MapPin",
  teaser: "Trouver son chemin, prendre le bus et faire ses achats en anglais.",
  objectives: [
    "Je connais le vocabulaire de la ville : magasins et bâtiments",
    "Je sais demander et indiquer un chemin : turn left, go straight on...",
    "Je sais parler des moyens de transport : by bus, on foot",
    "Je sais parler de la météo : What's the weather like?",
    "Je sais faire un achat simple : How much is it?",
  ],
  lesson: [
    {
      title: "Les lieux de la ville",
      paragraphs: [
        "Les magasins (shops) : the baker's (la boulangerie), the butcher's (la boucherie), the chemist's (la pharmacie, en anglais britannique), the supermarket, the bookshop (la librairie), the sweet shop (la confiserie).",
        "Les bâtiments et lieux publics : the town hall (la mairie), the post office (la poste), the police station (le commissariat), the train station (la gare), the hospital, the library (la bibliothèque, PAS la librairie !), the swimming pool, the cinema, the park, the market (le marché).",
      ],
      example: [
        "You can buy bread at the baker's. → On peut acheter du pain à la boulangerie.",
        "The library is next to the town hall. → La bibliothèque est à côté de la mairie.",
        "Is there a supermarket near here? → Y a-t-il un supermarché près d'ici ?",
      ],
      tip: "Faux ami célèbre : library = bibliothèque (on y emprunte des livres). La librairie, où on les achète, se dit bookshop. Ne les confonds jamais !",
    },
    {
      title: "Demander et indiquer le chemin",
      paragraphs: [
        "Pour demander poliment son chemin : Excuse me, where is the station, please? ou Excuse me, how do I get to the museum? (comment vais-je à... ?).",
        "Pour répondre : go straight on (allez tout droit), turn left (tournez à gauche), turn right (tournez à droite), take the first street on the left (prenez la première rue à gauche), cross the road (traversez la rue), go past the church (passez devant l'église).",
        "Pour situer : next to (à côté de), opposite (en face de), between (entre), behind (derrière), in front of (devant), on the corner (au coin de la rue).",
      ],
      example: [
        "Excuse me, where is the post office? – Go straight on and turn left. It's opposite the bank.",
        "→ Excusez-moi, où est la poste ? – Allez tout droit et tournez à gauche. C'est en face de la banque.",
        "The cinema is between the café and the bookshop. → Le cinéma est entre le café et la librairie.",
      ],
      tip: "Commence toujours par Excuse me pour aborder quelqu'un dans la rue, et termine par Thank you! C'est la politesse britannique de base, et elle ouvre toutes les portes.",
    },
    {
      title: "Les moyens de transport",
      paragraphs: [
        "Pour dire comment on se déplace, on utilise by + moyen de transport, sans article : by bus, by car, by train, by bike, by plane (en avion), by underground (en métro, à Londres).",
        "Grande exception : « à pied » se dit on foot (et pas « by foot »). I go to school on foot = Je vais à l'école à pied. On peut aussi utiliser le verbe walk : I walk to school.",
        "Pour demander : How do you go to school? – I go by bus. / I walk.",
      ],
      example: [
        "She goes to work by train. → Elle va au travail en train.",
        "We travelled to London by plane. → Nous sommes allés à Londres en avion.",
        "I go to school on foot. → Je vais à l'école à pied.",
      ],
      tip: "By bus, by car, by bike... mais ON foot ! Et jamais d'article après by : « by the bus » est une erreur. Retiens la formule toute faite : by + transport tout nu.",
    },
    {
      title: "What's the weather like?",
      paragraphs: [
        "Pour demander le temps qu'il fait : What's the weather like? (mot à mot : « à quoi ressemble le temps ? »). Attention, ce like n'a rien à voir avec le verbe aimer !",
        "Pour répondre, on utilise it : It's sunny (il y a du soleil), It's rainy / It's raining (il pleut), It's cloudy (nuageux), It's windy (venteux), It's foggy (brumeux), It's snowy / It's snowing (il neige), It's hot / warm / cold (chaud / doux / froid).",
        "Le temps est LE sujet de conversation préféré des Britanniques : savoir en parler, c'est déjà être un peu anglais !",
      ],
      example: [
        "What's the weather like today? – It's cold and rainy. → Quel temps fait-il aujourd'hui ? – Il fait froid et pluvieux.",
        "It was sunny yesterday. → Il faisait beau hier.",
        "Take your umbrella, it's raining! → Prends ton parapluie, il pleut !",
      ],
      tip: "Pour la météo, l'anglais utilise it (jamais he) : It's raining, It's hot. Et on répond à What's the weather like? SANS like : « It's sunny », pas « It's like sunny ».",
    },
    {
      title: "Faire ses achats",
      paragraphs: [
        "Pour demander un prix : How much is it? (c'est combien ?) ou How much is this T-shirt? Pour plusieurs objets : How much are the postcards?",
        "Le vendeur (shop assistant) demande : Can I help you? On répond : I'd like... (je voudrais...) ou I'm looking for... (je cherche...). I'd like est la contraction polie de I would like.",
        "La monnaie britannique est la livre sterling : pound (£), et les centimes s'appellent pence (p). £2.50 se dit two pounds fifty.",
      ],
      example: [
        "Can I help you? – Yes, I'd like a map of London, please. → Je peux vous aider ? – Oui, je voudrais un plan de Londres, s'il vous plaît.",
        "How much is it? – It's four pounds. → C'est combien ? – Quatre livres.",
        "Here you are. – Thank you! → Voici. – Merci !",
      ],
      tip: "How much is it? pour UN objet, How much ARE they? pour plusieurs. Et pour être poli, dis I'd like plutôt que I want : « I want » sonne comme un ordre de bébé capricieux.",
    },
  ],
  exercises: [
    {
      id: "e5cit-1",
      level: 1,
      type: "qcm",
      question: "Où peut-on emprunter des livres gratuitement ?",
      choices: ["at the bookshop", "at the library", "at the baker's", "at the town hall"],
      answer: 1,
      explanation:
        "La bibliothèque se dit library : on y emprunte des livres. Le bookshop est la librairie, où on les achète. C'est LE faux ami de ce chapitre : library ≠ librairie.",
      hint: "Attention au faux ami librairie / library...",
    },
    {
      id: "e5cit-2",
      level: 1,
      type: "qcm",
      question: "Complète : « I go to school ___ bus. »",
      choices: ["on", "by", "in", "with"],
      answer: 1,
      explanation:
        "Les moyens de transport s'utilisent avec by, sans article : by bus, by car, by train. La seule exception est on foot (à pied).",
      hint: "By + transport, sauf pour la marche à pied.",
    },
    {
      id: "e5cit-3",
      level: 1,
      type: "input",
      question: "Traduis « tournez à gauche » en anglais (deux mots).",
      answer: "turn left",
      explanation:
        "Turn left = tournez à gauche ; turn right = tournez à droite. Pas de préposition en anglais : on ne dit pas « turn at left ».",
      hint: "Le verbe tourner + la direction, sans petit mot entre les deux.",
    },
    {
      id: "e5cit-4",
      level: 1,
      type: "truefalse",
      question: "Pour demander le temps qu'il fait, on dit : « What's the weather like? »",
      answer: true,
      explanation:
        "Vrai ! What's the weather like? = Quel temps fait-il ? Ce like signifie « ressembler à », pas « aimer ». On répond avec it : It's sunny, It's raining...",
    },
    {
      id: "e5cit-5",
      level: 2,
      type: "qcm",
      question: "Complète : « The cinema is ___ the café and the bookshop. »",
      choices: ["next", "between", "opposite", "behind"],
      answer: 1,
      explanation:
        "Entre deux lieux → between : The cinema is between the café and the bookshop = Le cinéma est entre le café et la librairie. Le and est l'indice : between... and...",
      hint: "Il y a DEUX lieux cités : quel mot dit « entre » ?",
    },
    {
      id: "e5cit-6",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne traduction de « Je vais au collège à pied. » :",
      choices: [
        "I go to school by foot.",
        "I go to school on foot.",
        "I go to school at foot.",
        "I go to school by feet.",
      ],
      answer: 1,
      explanation:
        "« À pied » se dit on foot, c'est LA grande exception de la famille by bus / by car. « By foot » est le piège classique. On peut aussi dire : I walk to school.",
      hint: "La marche à pied n'utilise pas by.",
    },
    {
      id: "e5cit-7",
      level: 2,
      type: "input",
      question: "Complète la question du client : « ___ ___ is this T-shirt? » (deux mots, pour demander le prix)",
      answer: "how much",
      explanation:
        "How much is this T-shirt? = Combien coûte ce tee-shirt ? How much sert à demander un prix. Pour plusieurs objets, on dirait How much are... ?",
      hint: "La question du prix commence par how...",
    },
    {
      id: "e5cit-8",
      level: 2,
      type: "input",
      question: "Complète la réponse météo : « What's the weather like? – ___ sunny. » (contraction en un mot)",
      answer: "it's",
      accept: ["it is"],
      explanation:
        "Pour la météo, on répond toujours avec it : It's sunny = Il y a du soleil. Pas de like dans la réponse, et jamais he ou she pour parler du temps.",
      hint: "Le pronom météo + be, contractés.",
    },
    {
      id: "e5cit-9",
      level: 3,
      type: "qcm",
      question: "Un touriste te demande la poste. Elle est en face de la banque. Que réponds-tu ?",
      choices: [
        "The post office is next to the bank.",
        "The post office is opposite the bank.",
        "The post office is behind the bank.",
        "The post office is between the bank.",
      ],
      answer: 1,
      explanation:
        "« En face de » se dit opposite : The post office is opposite the bank. Next to = à côté de, behind = derrière. Between est impossible ici : il faudrait deux lieux (between... and...).",
      hint: "En face de = de l'autre côté de la rue.",
    },
    {
      id: "e5cit-10",
      level: 3,
      type: "input",
      question: "Remets la question polie dans l'ordre : « is / excuse me / the station / where / ? » (sans point d'interrogation)",
      answer: "excuse me where is the station",
      explanation:
        "Excuse me, where is the station? On aborde quelqu'un avec Excuse me, puis mot interrogatif (where) + verbe (is) + sujet (the station). N'oublie jamais le Excuse me : c'est la clé de la politesse britannique.",
      hint: "La formule de politesse d'abord, puis where + verbe + sujet.",
    },
    {
      id: "e5cit-11",
      level: 3,
      type: "truefalse",
      question: "« I'd like a map of London, please. » est plus poli que « I want a map of London. »",
      answer: true,
      explanation:
        "Vrai ! I'd like (= I would like, je voudrais) est la formule polie pour demander quelque chose dans un magasin. I want (je veux) sonne brutal et enfantin en anglais : à éviter avec un vendeur.",
    },
    {
      id: "e5cit-12",
      level: 3,
      type: "input",
      question: "Traduis en anglais : « Allez tout droit et prenez la première rue à droite. » (commence par go)",
      answer: "go straight on and take the first street on the right",
      accept: [
        "go straight ahead and take the first street on the right",
        "go straight on and take the first street to the right",
      ],
      explanation:
        "Go straight on and take the first street on the right. Deux formules toutes faites : go straight on (allez tout droit, anglais britannique) et take the first street on the right (prenez la première rue à droite). Retiens-les en bloc, elles servent dans tous les dialogues de directions.",
      hint: "Tout droit = straight on ; la première rue à droite = the first street on the right.",
    },
  ],
};
