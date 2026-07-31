import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en4-culture",
  subject: "anglais",
  grade: "4e",
  num: 8,
  title: "UK & USA: culture",
  domain: "nombres",
  domainLabel: "Culture",
  icon: "Landmark",
  teaser: "Quatre nations, cinquante étoiles, colour ou color : plongée dans la culture anglophone.",
  objectives: [
    "Je connais les quatre nations du Royaume-Uni et leurs capitales",
    "Je connais les principaux monuments de Londres et les symboles des USA",
    "Je connais les grandes fêtes : Thanksgiving, Halloween, Bonfire Night",
    "Je sais décrire l'école anglaise (uniforme, journée type)",
    "Je connais les principales différences entre anglais britannique et américain",
  ],
  lesson: [
    {
      title: "Le Royaume-Uni : quatre nations",
      paragraphs: [
        "Le Royaume-Uni (the United Kingdom, the UK) est composé de QUATRE nations : England (l'Angleterre, capitale London), Scotland (l'Écosse, capitale Edinburgh), Wales (le pays de Galles, capitale Cardiff) et Northern Ireland (l'Irlande du Nord, capitale Belfast).",
        "Attention aux trois noms à ne pas confondre : England = une seule nation. Great Britain (la Grande-Bretagne) = l'île qui regroupe England, Scotland et Wales. The United Kingdom = Great Britain + Northern Ireland.",
        "Le drapeau du Royaume-Uni s'appelle the Union Jack : il superpose les croix de l'Angleterre (croix rouge de St George), de l'Écosse (croix blanche en diagonale de St Andrew) et de l'Irlande (croix rouge en diagonale de St Patrick). Le dragon rouge du pays de Galles n'y figure pas.",
        "La République d'Irlande (Ireland, capitale Dublin) est un pays indépendant : elle ne fait PAS partie du Royaume-Uni.",
      ],
      example: [
        "Edinburgh is the capital of Scotland. → Édimbourg est la capitale de l'Écosse.",
        "Cardiff is in Wales. → Cardiff se trouve au pays de Galles.",
        "The Union Jack combines three crosses. → L'Union Jack combine trois croix.",
      ],
      tip: "Ne dis jamais « England » pour parler du Royaume-Uni entier : un Écossais ou un Gallois n'est pas English, il est Scottish ou Welsh — et tous sont British.",
    },
    {
      title: "Londres, capitale du Royaume-Uni",
      paragraphs: [
        "Londres est traversée par la Tamise (the Thames). Ses monuments les plus célèbres : Big Ben (officiellement la cloche de l'Elizabeth Tower, à côté du Parlement — Houses of Parliament), Buckingham Palace (résidence du roi), Tower Bridge (le pont qui s'ouvre), the Tower of London (ancienne forteresse) et the London Eye (la grande roue).",
        "Symboles de la ville : les bus rouges à deux étages (double-decker buses), les cabines téléphoniques rouges (red phone boxes), les taxis noirs (black cabs) et le métro, surnommé the Tube.",
        "Le quartier de Westminster concentre le pouvoir politique ; la relève de la garde (the Changing of the Guard) devant Buckingham Palace attire les touristes du monde entier.",
      ],
      example: [
        "We crossed Tower Bridge on a double-decker bus. → Nous avons traversé Tower Bridge dans un bus à deux étages.",
        "The Thames flows through London. → La Tamise traverse Londres.",
        "Let's take the Tube to Westminster! → Prenons le métro jusqu'à Westminster !",
      ],
      tip: "Big Ben est à l'origine le nom de la CLOCHE, pas de la tour (Elizabeth Tower). C'est un détail que les guides touristiques adorent — et les professeurs aussi.",
    },
    {
      title: "Les USA : États, capitale et symboles",
      paragraphs: [
        "Les États-Unis (the USA, the United States) sont une fédération de 50 États (states) : California, Texas, Florida, New York... La capitale n'est PAS New York mais Washington D.C. (D.C. = District of Columbia), où se trouvent la Maison-Blanche (the White House) et le Capitole.",
        "Le drapeau américain, the Stars and Stripes (ou the Star-Spangled Banner), porte 50 étoiles (une par État actuel) et 13 bandes (les 13 colonies fondatrices de 1776).",
        "Symboles des USA : the bald eagle (le pygargue à tête blanche, l'aigle national), the Statue of Liberty (offerte par la France en 1886), Uncle Sam (le personnage qui incarne le gouvernement) et l'hymne The Star-Spangled Banner.",
        "Le 4 juillet, Independence Day, commémore la déclaration d'indépendance de 1776 : feux d'artifice, barbecues et drapeaux partout.",
      ],
      example: [
        "Washington D.C. is the capital of the USA. → Washington D.C. est la capitale des États-Unis.",
        "The American flag has 50 stars and 13 stripes. → Le drapeau américain a 50 étoiles et 13 bandes.",
        "France gave the Statue of Liberty to the USA. → La France a offert la statue de la Liberté aux États-Unis.",
      ],
      tip: "50 étoiles = les 50 États d'aujourd'hui ; 13 bandes = les 13 colonies du début. Les étoiles évoluent avec le pays, les bandes racontent son origine.",
    },
    {
      title: "Les fêtes : Halloween, Thanksgiving, Bonfire Night",
      paragraphs: [
        "Halloween, le 31 octobre, vient d'une vieille fête celte. Les enfants se déguisent (dress up), sculptent des citrouilles (carve pumpkins en jack-o'-lanterns) et font du porte-à-porte en disant Trick or treat! (« un sort ou une friandise »).",
        "Thanksgiving est une fête AMÉRICAINE, célébrée le quatrième jeudi de novembre : les familles se réunissent autour d'une dinde (turkey) pour « rendre grâce ». Elle rappelle le repas partagé en 1621 entre les colons (the Pilgrims) et les Amérindiens.",
        "Bonfire Night (ou Guy Fawkes Night), le 5 novembre, est une fête BRITANNIQUE : feux de joie (bonfires) et feux d'artifice rappellent l'échec du Gunpowder Plot de 1605, quand Guy Fawkes tenta de faire exploser le Parlement.",
        "À retenir : Thanksgiving = USA, Bonfire Night = UK, Halloween = les deux (et bien au-delà).",
      ],
      example: [
        "Trick or treat! → Un sort ou une friandise !",
        "Americans eat turkey at Thanksgiving. → Les Américains mangent de la dinde à Thanksgiving.",
        "Remember, remember the fifth of November... → Souviens-toi du 5 novembre... (comptine de Bonfire Night)",
      ],
      tip: "Pour ne pas mélanger les dates : Halloween 31/10, Bonfire Night 5/11 (UK), Thanksgiving 4e jeudi de novembre (USA). Trois fêtes d'automne, trois pays d'origine différents.",
    },
    {
      title: "L'école anglaise",
      paragraphs: [
        "Dans la plupart des écoles britanniques, les élèves portent un uniforme (a school uniform) : blazer aux couleurs de l'école, cravate (tie), jupe ou pantalon gris. Chaque école a son écusson (badge) et sa devise.",
        "La journée commence souvent par l'assembly, un rassemblement de toute l'école. Les cours s'appellent lessons ou periods ; les matières : Maths, Science, English, History, Geography, PE (Physical Education, le sport), Art, ICT (l'informatique).",
        "À midi, les élèves mangent à la cantine (school canteen) ou apportent un packed lunch (repas préparé à la maison). Le chef d'établissement s'appelle the head teacher (ou principal aux USA).",
        "Après les cours, beaucoup d'écoles proposent des clubs (after-school clubs) : football, theatre, chess (échecs), choir (chorale)...",
      ],
      example: [
        "British pupils wear a uniform with a tie. → Les élèves britanniques portent un uniforme avec une cravate.",
        "I have a Maths lesson at 9 o'clock. → J'ai un cours de maths à 9 heures.",
        "She brings a packed lunch to school. → Elle apporte son déjeuner à l'école.",
      ],
      tip: "Piège de vocabulaire : en Angleterre, une « public school » est en réalité une école PRIVÉE très chère (Eton, Harrow). L'école publique gratuite se dit state school.",
    },
    {
      title: "British English vs American English",
      paragraphs: [
        "L'orthographe diffère souvent : le britannique écrit colour, favourite, centre, theatre ; l'américain écrit color, favorite, center, theater. Autre différence : -ise (GB) contre -ize (US) : organise / organize.",
        "Le vocabulaire change aussi : lift (GB) = elevator (US) pour l'ascenseur ; flat (GB) = apartment (US) ; holiday (GB) = vacation (US) ; autumn (GB) = fall (US) ; sweets (GB) = candy (US) ; crisps (GB) = chips (US) — et les frites : chips (GB) = French fries (US).",
        "Le sport aussi : le football se dit football au Royaume-Uni mais soccer aux USA, où football désigne le football américain.",
        "Les deux anglais se comprennent parfaitement : ce sont des variantes d'une même langue. En classe, on apprend plutôt l'anglais britannique, mais il faut savoir reconnaître les formes américaines, très présentes dans les films et les séries.",
      ],
      example: [
        "GB: My favourite colour is blue. / US: My favorite color is blue.",
        "GB: Take the lift to my flat. / US: Take the elevator to my apartment.",
        "GB: We play football in autumn. / US: We play soccer in the fall.",
      ],
      tip: "Astuce mémoire pour l'orthographe : le britannique garde le « u » hérité du français (colour, favour — comme couleur, faveur) ; l'américain l'a supprimé (color, favor).",
    },
  ],
  exercises: [
    {
      id: "e4cul-1",
      level: 1,
      type: "qcm",
      question: "Combien de nations composent le Royaume-Uni ?",
      choices: ["2", "3", "4", "5"],
      answer: 2,
      explanation:
        "Le Royaume-Uni compte quatre nations : England, Scotland, Wales et Northern Ireland. La Grande-Bretagne (Great Britain) n'en regroupe que trois : l'Irlande du Nord n'est pas sur l'île de Grande-Bretagne.",
      hint: "England, Scotland, Wales... et une quatrième.",
    },
    {
      id: "e4cul-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la capitale des États-Unis ?",
      choices: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
      answer: 1,
      explanation:
        "La capitale des USA est Washington D.C. (District of Columbia), où se trouvent la Maison-Blanche et le Capitole. New York est la plus grande ville du pays, mais pas la capitale — c'est un piège classique.",
      hint: "Ce n'est pas la plus grande ville du pays.",
    },
    {
      id: "e4cul-3",
      level: 1,
      type: "truefalse",
      question: "Halloween se fête le 31 octobre.",
      answer: true,
      explanation:
        "Vrai ! Halloween a lieu le 31 octobre : déguisements, citrouilles sculptées (jack-o'-lanterns) et la formule Trick or treat! au porte-à-porte.",
      hint: "La veille du 1er novembre.",
    },
    {
      id: "e4cul-4",
      level: 1,
      type: "input",
      question: "Comment s'appelle le drapeau du Royaume-Uni ? (deux mots)",
      answer: "union jack",
      accept: ["the union jack", "union flag", "the union flag"],
      explanation:
        "Le drapeau du Royaume-Uni s'appelle the Union Jack : il superpose les croix de St George (Angleterre), St Andrew (Écosse) et St Patrick (Irlande).",
      hint: "Union + un prénom anglais très court.",
    },
    {
      id: "e4cul-5",
      level: 2,
      type: "qcm",
      question: "Quelle nation fait partie du Royaume-Uni mais PAS de la Grande-Bretagne ?",
      choices: ["England", "Scotland", "Wales", "Northern Ireland"],
      answer: 3,
      explanation:
        "Great Britain est le nom de l'ÎLE qui regroupe England, Scotland et Wales. Northern Ireland se trouve sur l'île d'Irlande : elle fait partie du Royaume-Uni (UK) mais pas de la Grande-Bretagne. UK = Great Britain + Northern Ireland.",
      hint: "Great Britain est une île : quelle nation n'est pas dessus ?",
    },
    {
      id: "e4cul-6",
      level: 2,
      type: "qcm",
      question: "Quand et où fête-t-on Thanksgiving ?",
      choices: [
        "Le 4e jeudi de novembre, aux USA",
        "Le 5 novembre, au Royaume-Uni",
        "Le 31 octobre, en Irlande",
        "Le 4 juillet, aux USA",
      ],
      answer: 0,
      explanation:
        "Thanksgiving est une fête américaine célébrée le quatrième jeudi de novembre : repas familial autour d'une dinde, en souvenir du repas de 1621 entre les Pilgrims et les Amérindiens. Le 5 novembre est Bonfire Night (UK) et le 4 juillet Independence Day (USA).",
      hint: "La fête de la dinde, côté américain.",
    },
    {
      id: "e4cul-7",
      level: 2,
      type: "input",
      question: "En anglais américain, le mot britannique « colour » s'écrit... (un mot)",
      answer: "color",
      explanation:
        "L'anglais américain supprime le « u » hérité du français : colour (GB) devient color (US). Même logique pour favourite/favorite et neighbour/neighbor.",
      hint: "Retire une seule lettre à « colour ».",
    },
    {
      id: "e4cul-8",
      level: 2,
      type: "input",
      question: "Quel personnage historique est associé à Bonfire Night, le 5 novembre ? (prénom + nom)",
      answer: "guy fawkes",
      explanation:
        "Bonfire Night commémore l'échec du Gunpowder Plot de 1605 : Guy Fawkes avait tenté de faire exploser le Parlement de Londres. Depuis, chaque 5 novembre, les Britanniques allument des feux de joie et des feux d'artifice.",
      hint: "Son prénom se cache dans le mot anglais familier pour « type, gars ».",
    },
    {
      id: "e4cul-9",
      level: 3,
      type: "qcm",
      question: "Comment les Américains appellent-ils le football (celui qui se joue au pied) ?",
      choices: ["soccer", "rugby", "baseball", "football"],
      answer: 0,
      explanation:
        "Aux USA, notre football se dit soccer, car football y désigne le football américain (un sport proche du rugby). Au Royaume-Uni, en revanche, football désigne bien le sport que l'on connaît.",
      hint: "Un mot qui n'existe presque pas au Royaume-Uni.",
    },
    {
      id: "e4cul-10",
      level: 3,
      type: "input",
      question: "Combien y a-t-il d'étoiles sur le drapeau américain ? (nombre en chiffres)",
      answer: "50",
      accept: ["fifty"],
      explanation:
        "Le drapeau américain, the Stars and Stripes, porte 50 étoiles : une par État actuel. Ses 13 bandes, elles, représentent les 13 colonies fondatrices de 1776. Les étoiles racontent le présent, les bandes l'origine.",
      hint: "Autant que d'États aux USA aujourd'hui.",
    },
    {
      id: "e4cul-11",
      level: 3,
      type: "truefalse",
      question: "En anglais britannique, « prendre l'ascenseur » se dit « take the elevator ».",
      answer: false,
      explanation:
        "Faux ! Elevator est le mot AMÉRICAIN. En anglais britannique, l'ascenseur se dit the lift : take the lift. Même logique que flat (GB) / apartment (US) ou holiday (GB) / vacation (US).",
      hint: "Elevator est-il le mot britannique ou américain ?",
    },
    {
      id: "e4cul-12",
      level: 3,
      type: "input",
      question: "Comment dit-on « un appartement » en anglais BRITANNIQUE ? (un mot, sans article)",
      answer: "flat",
      accept: ["a flat"],
      explanation:
        "En anglais britannique, un appartement se dit a flat ; apartment est la version américaine. Le mot flat signifie aussi « plat » : un appartement occupe un seul niveau, tout plat.",
      hint: "Le mot signifie aussi « plat » en anglais.",
    },
  ],
};
