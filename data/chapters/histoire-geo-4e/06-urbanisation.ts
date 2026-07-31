import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg4-urbanisation",
  subject: "histoire-geo",
  grade: "4e",
  num: 6,
  title: "L'urbanisation du monde",
  domain: "grandeurs",
  domainLabel: "Géographie",
  icon: "Building2",
  teaser:
    "Plus d'un humain sur deux vit désormais en ville : bienvenue dans le siècle des mégapoles.",
  objectives: [
    "Je sais que plus de la moitié de l'humanité vit en ville depuis les années 2000",
    "Je sais définir une mégapole et en citer plusieurs : Tokyo, Delhi, Le Caire, Mexico…",
    "Je sais décrire les paysages urbains : centre des affaires, périphéries, bidonvilles, quartiers fermés",
    "Je sais expliquer la différence entre les villes bien connectées à la mondialisation et celles qui en sont à l'écart",
  ],
  lesson: [
    {
      title: "Un monde de plus en plus urbain",
      paragraphs: [
        "Depuis la fin des années 2000, plus de la moitié de l'humanité vit en ville : c'est une première dans l'histoire. Aujourd'hui, plus d'un humain sur deux est un citadin, et l'ONU prévoit que ce sera près de deux sur trois vers 2050.",
        "Cette urbanisation, c'est-à-dire la croissance de la population des villes et l'extension de leurs espaces, ne se fait pas partout au même rythme. Dans les pays riches (Europe, Amérique du Nord, Japon), environ 8 habitants sur 10 vivent déjà en ville : la croissance y est lente.",
        "C'est en Afrique et en Asie que les villes grandissent le plus vite : la population y augmente fortement et beaucoup de ruraux partent chercher du travail en ville, un mouvement appelé exode rural. Des villes comme Lagos au Nigeria ou Dhaka au Bangladesh gagnent des centaines de milliers d'habitants chaque année.",
      ],
      example: [
        "Ordre de grandeur à retenir : plus de 50 % de la population mondiale est urbaine aujourd'hui, contre environ 30 % en 1950.",
      ],
      tip: "Deux idées à associer : le monde est majoritairement urbain, et la croissance urbaine la plus rapide est dans les pays en développement (Afrique, Asie).",
    },
    {
      title: "Les mégapoles, géantes urbaines",
      paragraphs: [
        "Une mégapole est une très grande agglomération de plus de 10 millions d'habitants. On en compte une trentaine dans le monde, et leur nombre augmente : la majorité se trouve désormais en Asie.",
        "Tokyo, au Japon, est la plus peuplée avec environ 37 millions d'habitants. Viennent ensuite des géantes comme Delhi en Inde, Shanghai en Chine, Le Caire en Égypte, Mexico au Mexique, São Paulo au Brésil ou Lagos au Nigeria.",
        "Attention à ne pas confondre taille et richesse : certaines mégapoles appartiennent à des pays développés (Tokyo, New York), mais la plupart des nouvelles mégapoles se trouvent dans des pays en développement, où la croissance est si rapide que les logements, les transports et les réseaux d'eau ne suivent pas toujours.",
      ],
      example: [
        "Une mégapole sur chaque continent habité : Tokyo (Asie), Le Caire (Afrique), Mexico (Amérique), Moscou (Europe). Et la plus peuplée du monde : Tokyo, environ 37 millions d'habitants.",
      ],
      tip: "Mégapole = MÉGA = plus de 10 millions d'habitants. Retiens le seuil de 10 millions et l'exemple champion : Tokyo.",
    },
    {
      title: "Des paysages urbains contrastés",
      paragraphs: [
        "Les grandes villes présentent des paysages très différents selon les quartiers. Au centre, le quartier des affaires, souvent appelé CBD (Central Business District), concentre les gratte-ciel, les sièges des grandes entreprises et les banques : c'est le cœur économique de la ville.",
        "Autour du centre s'étendent les périphéries : quartiers résidentiels, banlieues, zones commerciales et industrielles. Les villes s'étalent de plus en plus loin sur les campagnes environnantes : c'est l'étalement urbain, qui allonge les déplacements quotidiens.",
        "Les inégalités se lisent dans le paysage. Dans les pays en développement, environ un milliard de personnes vivent dans des bidonvilles : des quartiers d'habitat précaire, construits sans autorisation et souvent mal reliés à l'eau et à l'électricité. À l'opposé, les plus riches se regroupent parfois dans des quartiers résidentiels fermés et surveillés, les gated communities.",
      ],
      example: [
        "À Mumbai, en Inde, le bidonville de Dharavi s'étend à quelques kilomètres de tours de luxe : dans une même mégapole, les paysages de la pauvreté et de la richesse se côtoient.",
      ],
      tip: "Quatre mots de vocabulaire à savoir replacer sur un paysage : CBD (centre des affaires), périphéries, bidonville, gated community (quartier fermé).",
    },
    {
      title: "Villes connectées, villes à l'écart",
      paragraphs: [
        "Toutes les villes ne profitent pas de la mondialisation de la même façon. Quelques métropoles concentrent les pouvoirs de commandement : bourses, sièges des multinationales, grands aéroports, universités prestigieuses. On les appelle des villes mondiales : New York, Londres, Tokyo, Paris ou Shanghai en sont les meilleurs exemples.",
        "Ces villes sont très connectées entre elles : elles échangent en permanence des capitaux, des informations, des marchandises et des personnes, formant un véritable réseau mondial appelé archipel des grandes métropoles.",
        "À l'inverse, d'autres villes restent à l'écart de la mondialisation : des villes en déclin dans d'anciennes régions industrielles, comme Detroit aux États-Unis, qui a perdu plus de la moitié de sa population depuis les années 1950, ou de petites villes enclavées de pays pauvres, mal reliées aux réseaux de transport et de communication.",
      ],
      example: [
        "Detroit, capitale américaine de l'automobile au XXe siècle, comptait environ 1,8 million d'habitants en 1950 ; elle en compte moins de 700 000 aujourd'hui : usines fermées, quartiers abandonnés. C'est l'exemple type de la ville en déclin.",
      ],
      tip: "Retiens l'opposition en deux colonnes : villes mondiales connectées (New York, Londres, Tokyo, Paris) contre villes à l'écart ou en déclin (Detroit). Un exemple de chaque suffit au brevet.",
    },
  ],
  exercises: [
    {
      id: "h4urb-1",
      level: 1,
      type: "qcm",
      question: "Quelle part de l'humanité vit aujourd'hui en ville ?",
      choices: [
        "Environ un humain sur dix",
        "Environ un humain sur quatre",
        "Plus d'un humain sur deux",
        "La quasi-totalité de l'humanité",
      ],
      answer: 2,
      explanation:
        "Depuis la fin des années 2000, plus de la moitié de la population mondiale vit en ville, soit plus d'un humain sur deux — contre environ 30 % en 1950. L'ONU prévoit près de deux humains sur trois en ville vers 2050. Repère à retenir : le monde est majoritairement urbain depuis les années 2000.",
      hint: "C'est une première dans l'histoire, franchie à la fin des années 2000.",
    },
    {
      id: "h4urb-2",
      level: 1,
      type: "qcm",
      question: "Qu'est-ce qu'une mégapole ?",
      choices: [
        "Une agglomération de plus de 10 millions d'habitants",
        "Une ville de plus de 100 000 habitants",
        "Une capitale politique",
        "Une ville entourée de remparts",
      ],
      answer: 0,
      explanation:
        "Une mégapole est une très grande agglomération de plus de 10 millions d'habitants. On en compte une trentaine dans le monde, la majorité en Asie : Tokyo, Delhi, Shanghai, mais aussi Le Caire, Mexico ou Lagos. Repère à retenir : mégapole = plus de 10 millions d'habitants.",
      hint: "Le seuil se compte en dizaines de millions d'habitants.",
    },
    {
      id: "h4urb-3",
      level: 1,
      type: "truefalse",
      question: "La croissance urbaine la plus rapide se trouve aujourd'hui en Europe.",
      answer: false,
      explanation:
        "Faux. En Europe et dans les autres pays riches, environ 8 habitants sur 10 vivent déjà en ville : la croissance y est lente. C'est en Afrique et en Asie que les villes grandissent le plus vite, à cause de la forte croissance de la population et de l'exode rural. Repère à retenir : croissance urbaine rapide = Afrique et Asie.",
      hint: "Pense aux villes qui gagnent des centaines de milliers d'habitants par an, comme Lagos ou Dhaka.",
    },
    {
      id: "h4urb-4",
      level: 1,
      type: "input",
      question:
        "Quelle mégapole japonaise est l'agglomération la plus peuplée du monde, avec environ 37 millions d'habitants ? (nom seul, en minuscules)",
      answer: "tokyo",
      accept: ["tokio", "tôkyô"],
      explanation:
        "C'est Tokyo, la capitale du Japon : avec environ 37 millions d'habitants, son agglomération est la plus peuplée du monde. C'est aussi une ville mondiale, très connectée à la mondialisation. Repère à retenir : Tokyo = plus grande agglomération du monde, environ 37 millions d'habitants.",
      hint: "C'est la capitale du Japon.",
    },
    {
      id: "h4urb-5",
      level: 2,
      type: "qcm",
      question: "Que désigne le sigle CBD (Central Business District) dans une grande ville ?",
      choices: [
        "Le quartier des affaires, avec ses gratte-ciel et ses sièges d'entreprises",
        "Un bidonville en périphérie",
        "Une zone agricole protégée",
        "Un quartier résidentiel fermé",
      ],
      answer: 0,
      explanation:
        "Le CBD est le quartier central des affaires : on y trouve les gratte-ciel, les banques et les sièges des grandes entreprises. C'est le cœur économique de la ville, comme Manhattan à New York ou La Défense près de Paris. Repère à retenir : CBD = centre des affaires, cœur économique de la métropole.",
      hint: "Traduis « Business » : c'est le quartier où l'on travaille dans les tours.",
    },
    {
      id: "h4urb-6",
      level: 2,
      type: "input",
      question:
        "Comment appelle-t-on un quartier d'habitat précaire, construit sans autorisation et souvent privé d'eau courante, fréquent dans les mégapoles des pays en développement ? (un mot, en minuscules)",
      answer: "bidonville",
      accept: ["un bidonville", "les bidonvilles", "bidonvilles"],
      explanation:
        "C'est un bidonville : un quartier de logements précaires, construits par les habitants eux-mêmes avec des matériaux de récupération, souvent sans eau courante ni électricité. Environ un milliard de personnes dans le monde vivent en bidonville, comme à Dharavi à Mumbai. Repère à retenir : bidonville = habitat précaire, environ un milliard d'habitants concernés dans le monde.",
      hint: "Le mot vient des « bidons » de récupération utilisés pour construire les premières cabanes.",
    },
    {
      id: "h4urb-7",
      level: 2,
      type: "truefalse",
      question:
        "Une gated community est un quartier résidentiel fermé et surveillé, réservé à des habitants aisés.",
      answer: true,
      explanation:
        "Vrai. Les gated communities sont des quartiers résidentiels clôturés, à l'entrée contrôlée par des gardiens ou des caméras, où se regroupent des habitants aisés. Elles illustrent, à l'opposé des bidonvilles, les fortes inégalités qui se lisent dans les paysages urbains. Repère à retenir : gated community = quartier fermé des riches / bidonville = quartier précaire des pauvres.",
      hint: "« Gated » vient de gate, la grille ou le portail en anglais.",
    },
    {
      id: "h4urb-8",
      level: 2,
      type: "qcm",
      question:
        "Comment appelle-t-on le départ des habitants des campagnes vers les villes, moteur de la croissance urbaine dans les pays en développement ?",
      choices: ["L'étalement urbain", "L'exode rural", "La périurbanisation", "La gentrification"],
      answer: 1,
      explanation:
        "C'est l'exode rural : des ruraux quittent les campagnes pour chercher du travail et de meilleures conditions de vie en ville. Combiné à la forte croissance de la population, il explique la croissance très rapide des villes d'Afrique et d'Asie. L'étalement urbain, lui, désigne l'extension des villes sur les campagnes. Repère à retenir : exode rural = des campagnes vers les villes.",
      hint: "« Exode » signifie départ massif ; ici on part du monde rural.",
    },
    {
      id: "h4urb-9",
      level: 3,
      type: "input",
      question:
        "Comment appelle-t-on les métropoles comme New York, Londres, Tokyo ou Paris, qui concentrent les pouvoirs de commandement de la mondialisation ? (deux mots : villes …)",
      answer: "villes mondiales",
      accept: ["ville mondiale", "les villes mondiales", "des villes mondiales", "villes globales", "ville globale"],
      explanation:
        "Ce sont les villes mondiales : elles concentrent les bourses, les sièges des multinationales, les grands aéroports et les lieux de décision. Très connectées entre elles, elles forment un réseau parfois appelé archipel des grandes métropoles. Repère à retenir : villes mondiales = New York, Londres, Tokyo, Paris, Shanghai.",
      hint: "L'adjectif est de la même famille que « mondialisation ».",
    },
    {
      id: "h4urb-10",
      level: 3,
      type: "qcm",
      question:
        "Quelle ville américaine, ancienne capitale de l'automobile, est l'exemple type d'une ville en déclin, à l'écart de la mondialisation ?",
      choices: ["New York", "Los Angeles", "Detroit", "Miami"],
      answer: 2,
      explanation:
        "C'est Detroit. Grande capitale américaine de l'automobile au XXe siècle, elle a perdu plus de la moitié de sa population depuis les années 1950 (d'environ 1,8 million d'habitants à moins de 700 000) : usines fermées, quartiers abandonnés. Toutes les villes ne profitent donc pas de la mondialisation. Repère à retenir : Detroit = ville en déclin, à l'écart de la mondialisation.",
      hint: "On y fabriquait les voitures Ford ; la ville est surnommée Motor City.",
    },
    {
      id: "h4urb-11",
      level: 3,
      type: "truefalse",
      question: "La majorité des mégapoles du monde se trouve aujourd'hui en Asie.",
      answer: true,
      explanation:
        "Vrai. Sur la trentaine de mégapoles que compte le monde, la majorité se situe en Asie : Tokyo, Delhi, Shanghai, Dhaka, Mumbai, Pékin, Manille… C'est le reflet du poids démographique du continent et de sa croissance urbaine rapide. Repère à retenir : la plupart des mégapoles sont asiatiques ; la plus grande est Tokyo.",
      hint: "Compte les géantes que tu connais : Tokyo, Delhi, Shanghai, Mumbai… sur quel continent sont-elles ?",
    },
    {
      id: "h4urb-12",
      level: 3,
      type: "input",
      question:
        "Comment appelle-t-on l'extension des espaces urbains de plus en plus loin sur les campagnes environnantes ? (deux mots : étalement …)",
      answer: "étalement urbain",
      accept: ["etalement urbain", "l'étalement urbain", "l'etalement urbain"],
      explanation:
        "C'est l'étalement urbain : les villes s'étendent toujours plus loin, avec des lotissements, des zones commerciales et des routes qui grignotent les campagnes. Conséquences : des déplacements quotidiens plus longs et des terres agricoles ou naturelles qui disparaissent. Repère à retenir : étalement urbain = la ville s'étend en surface, souvent plus vite que sa population n'augmente.",
      hint: "On « étale » la ville comme on étale de la pâte : elle prend de plus en plus de place.",
    },
  ],
};
