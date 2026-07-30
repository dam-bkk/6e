import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci-energie-objets",
  subject: "sciences",
  num: 6,
  title: "Énergies et objets techniques",
  domain: "donnees",
  domainLabel: "Technologie",
  icon: "Zap",
  teaser: "Sources d'énergie, circuits électriques et objets techniques : comprendre la technologie.",
  objectives: [
    "Je sais distinguer une source d'énergie renouvelable d'une source non renouvelable",
    "Je sais décrire une conversion d'énergie dans un appareil du quotidien",
    "Je connais des gestes efficaces pour économiser l'énergie",
    "Je sais reconnaître un circuit électrique fermé ou ouvert et je connais les dangers du courant du secteur",
    "Je sais décrire la fonction d'usage d'un objet technique et expliquer son évolution",
  ],
  lesson: [
    {
      title: "Les sources d'énergie",
      paragraphs: [
        "L'énergie est nécessaire dès qu'il y a un mouvement, un éclairage, un chauffage ou un appareil qui fonctionne. Nous la prélevons dans des sources d'énergie, que l'on classe en deux catégories.",
        "Les sources renouvelables se reconstituent naturellement à l'échelle humaine : le Soleil, le vent, l'eau des rivières, le bois, la chaleur du sous-sol. On peut compter dessus indéfiniment, même si elles ne sont pas toujours disponibles au bon moment : la nuit, un panneau solaire ne produit rien.",
        "Les sources non renouvelables existent en quantité limitée et mettent des millions d'années à se former : le pétrole, le charbon et le gaz naturel, appelés énergies fossiles, ainsi que l'uranium des centrales nucléaires. Brûler des énergies fossiles rejette du dioxyde de carbone, un gaz qui contribue au réchauffement climatique.",
      ],
      example: [
        "Renouvelables : soleil, vent, eau, bois, géothermie.",
        "Non renouvelables : pétrole, charbon, gaz naturel, uranium.",
        "Le pétrole utilisé aujourd'hui s'est formé il y a des dizaines de millions d'années : impossible d'en refaire à notre échelle.",
      ],
      tip: "Le test est simple : « la nature en refabrique-t-elle pendant ma vie ? » Le vent, oui. Le pétrole, non.",
    },
    {
      title: "Les conversions d'énergie",
      paragraphs: [
        "L'énergie ne se fabrique pas à partir de rien : elle se transforme d'une forme en une autre. On parle de conversion d'énergie, et tout appareil est un convertisseur.",
        "Une éolienne convertit l'énergie du vent en énergie électrique grâce à ses pales qui entraînent un générateur. Un panneau solaire photovoltaïque convertit l'énergie lumineuse du Soleil en énergie électrique. Un barrage utilise l'eau qui tombe pour faire tourner une turbine et produire de l'électricité.",
        "À l'autre bout de la chaîne, les appareils reconvertissent l'électricité : une lampe la transforme en lumière, un radiateur en chaleur, un ventilateur en mouvement. Il faut savoir qu'une partie de l'énergie se perd toujours sous forme de chaleur : c'est pour cela qu'un chargeur de téléphone ou une vieille ampoule chauffent en fonctionnant.",
      ],
      example: [
        "Éolienne : énergie du vent → énergie électrique.",
        "Lampe de poche : énergie stockée dans la pile → énergie électrique → lumière (et un peu de chaleur).",
        "Une ampoule LED éclaire autant qu'une vieille ampoule en consommant environ 8 fois moins d'électricité, parce qu'elle en perd beaucoup moins en chaleur.",
      ],
      tip: "Écris toujours une conversion avec une flèche : « énergie de départ → énergie d'arrivée ». Cela évite de tout mélanger.",
    },
    {
      title: "Économiser l'énergie",
      paragraphs: [
        "Comme les réserves d'énergies fossiles sont limitées et que leur usage réchauffe le climat, la meilleure énergie est celle qu'on ne consomme pas. Économiser l'énergie, c'est obtenir le même service en en utilisant moins.",
        "Dans un logement, les postes les plus gourmands sont le chauffage et l'eau chaude. Isoler les murs et les fenêtres, baisser le chauffage de 1 °C, fermer les volets la nuit, prendre des douches plutôt que des bains : ces gestes font des économies importantes.",
        "Pour les appareils, on éteint complètement au lieu de laisser en veille, on remplace les ampoules par des LED, on ne fait pas tourner une machine à moitié vide. Pour les déplacements, la marche, le vélo et le train consomment beaucoup moins d'énergie par personne que la voiture individuelle ou l'avion.",
      ],
      example: [
        "Baisser le chauffage de 20 °C à 19 °C fait économiser environ 7 % de l'énergie de chauffage.",
        "Les appareils laissés en veille dans un logement peuvent représenter à eux seuls plusieurs dizaines d'euros d'électricité par an.",
      ],
      tip: "Un geste utile n'est pas forcément spectaculaire : éteindre, isoler, baisser d'un degré. Ce sont les plus efficaces.",
    },
    {
      title: "Le circuit électrique simple",
      paragraphs: [
        "Un circuit électrique simple comporte un générateur (la pile), qui fournit l'énergie électrique, un récepteur (la lampe), qui la consomme, des fils de connexion et souvent un interrupteur, qui permet de commander le circuit.",
        "Pour que la lampe brille, le courant doit pouvoir faire le tour complet : la boucle doit être fermée, sans interruption. On dit que le circuit est fermé. Si l'interrupteur est ouvert, si un fil est débranché ou si la lampe est grillée, la boucle est coupée : le circuit est ouvert et rien ne fonctionne.",
        "Le courant passe dans les matériaux conducteurs, surtout les métaux comme le cuivre, et ne passe pas dans les matériaux isolants comme le plastique, le verre ou le bois sec. C'est pourquoi les fils électriques sont en cuivre, entourés de plastique. Un dernier point n'est pas négociable : on n'expérimente jamais avec une prise murale. Le courant du secteur, à 230 V, peut tuer, alors qu'une pile de 1,5 V est sans danger. Et comme l'eau du robinet est conductrice, on ne touche jamais un appareil électrique avec les mains mouillées.",
      ],
      example: [
        "Circuit fermé : pile → fil → lampe → fil → pile. La lampe brille.",
        "Interrupteur ouvert : la boucle est coupée, la lampe est éteinte, même si la pile est neuve.",
        "Si deux lampes sont branchées l'une après l'autre dans la même boucle et qu'on en dévisse une, l'autre s'éteint aussi : la boucle est interrompue.",
      ],
      tip: "Une seule règle explique presque tous les exercices : pas de boucle complète, pas de courant.",
    },
    {
      title: "L'objet technique et son évolution",
      paragraphs: [
        "Un objet technique est un objet fabriqué par l'être humain pour répondre à un besoin. Sa fonction d'usage est le service qu'il rend : la fonction d'usage d'un parapluie est de protéger de la pluie, celle d'une lampe est d'éclairer. Son apparence, sa couleur ou son style relèvent d'autre chose : la fonction d'estime.",
        "Les objets techniques évoluent au fil du temps, grâce aux progrès des matériaux et des techniques, et parce que les besoins changent. Le téléphone en est l'exemple parfait : fixe et relié par un fil, il ne servait qu'à parler ; le téléphone mobile a ajouté le déplacement ; le smartphone y a ajouté l'appareil photo, la messagerie, la navigation, la musique.",
        "Chaque objet est fait de matériaux choisis pour leurs propriétés : le métal pour la solidité, le plastique pour la légèreté et l'isolation, le verre pour la transparence. En fin de vie, ces matériaux doivent être triés et recyclés, notamment pour les appareils électriques et les piles, qui contiennent des substances polluantes et ne vont jamais à la poubelle ordinaire.",
      ],
      example: [
        "Évolution de l'éclairage : bougie → lampe à huile → ampoule à filament → ampoule LED. La fonction d'usage n'a pas changé (éclairer), mais l'efficacité a été multipliée.",
        "Une pile usagée se dépose dans un bac de collecte, en magasin ou en déchetterie.",
      ],
      tip: "Pour trouver la fonction d'usage, complète la phrase : « cet objet sert à… ». Si tu parles de couleur ou de design, tu décris la fonction d'estime.",
    },
  ],
  exercises: [
    {
      id: "sene-1",
      level: 1,
      type: "qcm",
      question: "Laquelle de ces sources d'énergie est renouvelable ?",
      choices: ["Le pétrole", "Le charbon", "Le vent", "Le gaz naturel"],
      answer: 2,
      explanation:
        "Le vent est une source renouvelable : il se reconstitue en permanence et ne s'épuise pas. Le pétrole, le charbon et le gaz naturel sont des énergies fossiles : elles ont mis des millions d'années à se former et existent en quantité limitée.",
      hint: "Laquelle la nature refabrique-t-elle pendant notre vie ?",
    },
    {
      id: "sene-2",
      level: 1,
      type: "input",
      question:
        "Dans un circuit électrique simple, quel composant fournit l'énergie électrique ? (un mot, en minuscules)",
      answer: "pile",
      accept: ["la pile", "une pile", "generateur", "générateur"],
      explanation:
        "La pile est le générateur du circuit : c'est elle qui fournit l'énergie électrique. La lampe, elle, est un récepteur : elle consomme cette énergie et la convertit en lumière.",
    },
    {
      id: "sene-3",
      level: 1,
      type: "truefalse",
      question: "Quand l'interrupteur est ouvert, la lampe du circuit brille.",
      answer: false,
      explanation:
        "Faux. Un interrupteur ouvert coupe la boucle : le courant ne peut plus circuler et la lampe reste éteinte, même avec une pile neuve. Pour que la lampe brille, il faut un circuit fermé, c'est-à-dire une boucle complète et sans interruption.",
      hint: "« Ouvert » signifie que la boucle est coupée.",
    },
    {
      id: "sene-4",
      level: 1,
      type: "qcm",
      question: "Quelle est la fonction d'usage d'un parapluie ?",
      choices: [
        "Être joli et coloré",
        "Protéger de la pluie",
        "Être léger à transporter",
        "Coûter le moins cher possible",
      ],
      answer: 1,
      explanation:
        "La fonction d'usage est le service que rend l'objet : un parapluie sert à protéger de la pluie. Sa couleur et son motif relèvent de la fonction d'estime, tandis que son poids ou son prix sont des caractéristiques, pas sa raison d'exister.",
      hint: "Complète la phrase « cet objet sert à… ».",
    },
    {
      id: "sene-5",
      level: 2,
      type: "qcm",
      question: "Quelle conversion d'énergie se produit dans une éolienne ?",
      choices: [
        "Énergie électrique → énergie du vent",
        "Énergie du vent → énergie électrique",
        "Énergie lumineuse → énergie électrique",
        "Énergie électrique → chaleur",
      ],
      answer: 1,
      explanation:
        "Le vent fait tourner les pales, qui entraînent un générateur produisant de l'électricité : l'énergie du vent est donc convertie en énergie électrique. L'énergie lumineuse convertie en électricité, c'est le panneau solaire photovoltaïque ; l'électricité convertie en chaleur, c'est le radiateur.",
      hint: "Qu'est-ce qui fait tourner les pales, et qu'obtient-on au bout ?",
    },
    {
      id: "sene-6",
      level: 2,
      type: "truefalse",
      question: "On peut réaliser des expériences d'électricité en branchant des fils sur une prise murale.",
      answer: false,
      explanation:
        "Faux, et c'est absolument interdit. Le courant du secteur est à 230 V : il peut provoquer des brûlures graves et tuer. Les expériences se font uniquement avec des piles de 1,5 V ou 4,5 V, qui sont sans danger. On ne touche pas non plus un appareil électrique avec les mains mouillées, car l'eau conduit le courant.",
    },
    {
      id: "sene-7",
      level: 2,
      type: "input",
      question:
        "Comment appelle-t-on un matériau dans lequel le courant électrique ne passe pas, comme le plastique ? (un mot au singulier, en minuscules)",
      answer: "isolant",
      accept: ["un isolant", "isolant électrique"],
      explanation:
        "Un tel matériau est un isolant : plastique, verre, bois sec, air. À l'inverse, les matériaux dans lesquels le courant passe sont des conducteurs, en particulier les métaux comme le cuivre. Un fil électrique combine les deux : du cuivre à l'intérieur, du plastique isolant autour.",
      hint: "Pense au mot utilisé pour la gaine autour d'un fil électrique.",
    },
    {
      id: "sene-8",
      level: 2,
      type: "qcm",
      question:
        "Parmi ces gestes, lequel permet d'économiser le plus d'énergie dans un logement ?",
      choices: [
        "Baisser le chauffage de 1 °C et mieux isoler les fenêtres",
        "Débrancher une lampe de chevet une nuit par semaine",
        "Utiliser un stylo plutôt qu'un ordinateur pour écrire une phrase",
        "Fermer la porte du réfrigérateur plus vite",
      ],
      answer: 0,
      explanation:
        "Le chauffage est de loin le premier poste de consommation d'un logement : agir dessus, en baissant la température et en isolant, produit les plus grosses économies. Les autres gestes ne sont pas inutiles, mais leurs effets sont bien plus faibles.",
      hint: "Quel usage consomme le plus d'énergie dans une maison ?",
    },
    {
      id: "sene-9",
      level: 3,
      type: "qcm",
      question:
        "Deux lampes sont branchées l'une après l'autre dans la même boucle, avec une pile. On dévisse une des deux lampes. Que se passe-t-il ?",
      choices: [
        "L'autre lampe brille plus fort",
        "L'autre lampe s'éteint aussi",
        "L'autre lampe continue de briller normalement",
        "La pile se décharge instantanément",
      ],
      answer: 1,
      explanation:
        "Les deux lampes sont dans la même boucle : dévisser l'une coupe le circuit. Comme il n'y a plus de boucle complète, le courant ne circule plus du tout et la seconde lampe s'éteint également. Retiens la règle générale : pas de boucle complète, pas de courant.",
      hint: "La boucle est-elle encore complète ?",
    },
    {
      id: "sene-10",
      level: 3,
      type: "truefalse",
      question:
        "Une partie de l'énergie électrique consommée par une ampoule est perdue sous forme de chaleur.",
      answer: true,
      explanation:
        "Vrai. Une ampoule convertit l'électricité en lumière, mais jamais totalement : une partie devient de la chaleur, ce que l'on sent en approchant la main d'une vieille ampoule allumée. Une LED en perd bien moins, c'est justement pourquoi elle consomme beaucoup moins pour le même éclairage.",
      hint: "Que ressent-on près d'une ampoule allumée depuis un moment ?",
    },
    {
      id: "sene-11",
      level: 3,
      type: "input",
      question:
        "Une ampoule LED consomme 8 W alors qu'une ancienne ampoule consomme 64 W pour le même éclairage. Combien de fois consomme-t-elle moins ?",
      answer: "8",
      accept: ["8 fois", "huit"],
      explanation:
        "64 ÷ 8 = 8 : la LED consomme 8 fois moins d'électricité pour éclairer autant. La différence part surtout en chaleur dans l'ancienne ampoule, qui chauffe beaucoup plus qu'elle n'éclaire.",
      hint: "Divise la plus grande valeur par la plus petite.",
    },
    {
      id: "sene-12",
      level: 3,
      type: "qcm",
      question:
        "Du téléphone fixe au smartphone, qu'est-ce qui explique le mieux l'évolution de cet objet technique ?",
      choices: [
        "La fonction d'usage a complètement disparu",
        "Les progrès techniques et l'évolution des besoins ont ajouté de nouvelles fonctions",
        "Les objets techniques changent au hasard, sans raison",
        "Le smartphone n'est plus un objet technique",
      ],
      answer: 1,
      explanation:
        "La fonction d'usage de départ, communiquer, existe toujours : on téléphone encore avec un smartphone. Mais les progrès des composants, des matériaux et des réseaux, ainsi que de nouveaux besoins, ont ajouté l'appareil photo, la messagerie, la navigation ou la musique. Un objet technique évolue toujours pour répondre à des besoins, jamais au hasard.",
      hint: "Peut-on encore téléphoner avec un smartphone ?",
    },
  ],
  videos: [
    { title: "CONVERSIONS D'ÉNERGIE | Physique - Chimie | 6e | Sciences", youtubeId: "ZoJiDjAPPJc", channel: "Paul Olivier" },
  ],
};
