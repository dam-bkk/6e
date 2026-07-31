import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "assr1-regles-dangers",
  subject: "assr",
  grade: "5e",
  num: 4,
  title: "Panneaux, priorités et dangers",
  domain: "donnees",
  domainLabel: "Sécurité routière",
  icon: "TrafficCone",
  teaser: "Lire la route : formes des panneaux, priorités, distances d'arrêt, urgences.",
  objectives: [
    "Je reconnais les quatre grandes familles de panneaux à leur forme et leur couleur",
    "Je connais l'ordre qui s'impose : agent, feux, panneaux",
    "Je comprends la priorité à droite et la distance d'arrêt",
    "Je sais quels dangers diminuent les réflexes et quel numéro d'urgence appeler",
  ],
  lesson: [
    {
      title: "Quatre familles de panneaux",
      figure: "assr-panneaux",
      paragraphs: [
        "Pas besoin de connaître chaque panneau par cœur : leur forme et leur couleur annoncent déjà leur message. Triangle à bord rouge : danger (virage, passage d'animaux, chaussée glissante). Rond à bord rouge : interdiction (sens interdit, vitesse limitée, accès interdit aux piétons).",
        "Rond à fond bleu : obligation (piste cyclable obligatoire, direction obligatoire). Carré ou rectangle à fond bleu : indication, une information utile sans contrainte (passage piéton, parking, impasse).",
        "Un panneau barré de noir ou de gris annonce la fin d'une prescription : fin de limitation de vitesse, fin d'interdiction.",
      ],
      example: [
        "Sur ton trajet : un triangle rouge avec une silhouette d'enfants signale la proximité d'une école (danger, ralentir) ; un rond rouge barré horizontalement est un sens interdit ; un carré bleu avec un piéton indique simplement l'emplacement d'un passage piéton.",
      ],
      tip: "Triangle = danger, rond rouge = interdit, rond bleu = obligé, carré bleu = info. Quatre formes, quatre messages.",
    },
    {
      title: "Feux tricolores et agents",
      paragraphs: [
        "Le feu tricolore organise le passage à tour de rôle. Rouge : arrêt complet avant la ligne. Vert : passage autorisé, en vérifiant que le carrefour est dégagé. Orange : arrêt, sauf si tu es déjà si près que t'arrêter serait dangereux ; l'orange n'est pas un « vert qui se dépêche ».",
        "Quand un agent règle la circulation (policier, gendarme), ses gestes remplacent tout le reste : un agent qui te fait signe de passer prime sur un feu rouge, et un agent qui t'arrête prime sur un feu vert.",
        "L'ordre à retenir : l'agent d'abord, puis les feux, puis les panneaux, puis les règles générales comme la priorité à droite.",
      ],
      example: [
        "Devant le collège, un policier fait la circulation. Le feu piéton est rouge, mais l'agent te fait signe de traverser : tu traverses. C'est lui qui commande, pas le feu.",
      ],
      tip: "Un agent sur la chaussée efface les feux et les panneaux : regarde ses gestes en priorité.",
    },
    {
      title: "La priorité à droite",
      paragraphs: [
        "À une intersection sans panneau, sans feu et sans agent, une règle par défaut s'applique : la priorité à droite. Chaque conducteur cède le passage au véhicule qui arrive par sa droite.",
        "Cette règle te concerne directement à vélo : si une voiture arrive à ta droite dans un carrefour sans signalisation, c'est elle qui passe. Et quand c'est toi qui viens de droite, ta priorité n'existe que si l'autre l'a comprise : on ralentit et on cherche le regard du conducteur.",
        "Le triangle de danger avec une croix noire annonce justement un carrefour où cette règle s'applique.",
      ],
      example: [
        "À vélo, tu arrives à un petit croisement de quartier sans aucun panneau. Une voiture débouche de la rue à ta droite : tu la laisses passer, elle a la priorité. Au croisement suivant, c'est toi qui viens de droite : tu ralentis quand même et tu vérifies que la voiture te cède le passage avant de t'engager.",
      ],
      tip: "Pas de panneau, pas de feu, pas d'agent ? Alors priorité à droite. Et à vélo, une priorité se vérifie toujours avant de s'engager.",
    },
    {
      title: "S'arrêter n'est pas immédiat",
      paragraphs: [
        "Un véhicule ne s'arrête jamais à l'instant où le conducteur voit le danger. Il faut d'abord le temps de réaction, environ une seconde entre le moment où l'œil voit et celui où le pied freine : pendant cette seconde, la voiture continue à pleine vitesse. À 50 km/h, elle parcourt ainsi environ 14 mètres avant même de commencer à freiner.",
        "Vient ensuite la distance de freinage. La distance d'arrêt est la somme des deux : réaction + freinage. À 50 km/h sur route sèche, elle atteint environ 28 mètres, soit la longueur de deux bus.",
        "Sur route mouillée, les pneus adhèrent moins : la distance de freinage est environ doublée. Et plus la vitesse est élevée, plus la violence d'un choc explose : elle grandit beaucoup plus vite que la vitesse. C'est pour cela que quelques km/h de plus changent tout pour un piéton renversé.",
      ],
      example: [
        "Tu t'apprêtes à traverser et une voiture arrive à environ 30 mètres, à 50 km/h. Même si le conducteur te voit immédiatement, il lui faut 28 mètres pour s'arrêter, davantage s'il pleut. Ces 30 mètres ne suffisent pas : tu le laisses passer.",
      ],
      tip: "Distance d'arrêt = réaction + freinage. Pluie = freinage doublé. Ne traverse jamais en te disant « il aura le temps de freiner ».",
    },
    {
      title: "Réflexes diminués et numéros d'urgence",
      paragraphs: [
        "Le temps de réaction d'une seconde suppose un conducteur attentif et en pleine forme. L'alcool, certains médicaments, la fatigue ou un téléphone à la main l'allongent fortement : le danger est vu plus tard, la décision vient plus tard, et chaque dixième de seconde perdu se paie en mètres parcourus. Cela vaut pour les conducteurs, mais aussi pour toi, à pied ou à vélo.",
        "Si tu es témoin d'un accident, la conduite à tenir s'appelle PAS : Protéger (ne pas créer un deuxième accident, s'écarter de la chaussée), Alerter, Secourir si l'on sait le faire.",
        "Pour alerter, quatre numéros gratuits : le 15 (SAMU, urgences médicales), le 17 (police ou gendarmerie), le 18 (pompiers) et le 112, le numéro d'urgence européen qui fonctionne dans toute l'Europe, même depuis un téléphone verrouillé. Le 114, par SMS, est destiné aux personnes sourdes ou malentendantes.",
      ],
      example: [
        "Devant toi, un cycliste chute seul et ne se relève pas. Tu restes sur le trottoir, tu demandes à un adulte de sécuriser les lieux, et tu appelles le 15 en donnant le lieu exact, ce que tu vois et l'état de la victime. Tu ne raccroches que lorsqu'on te le dit.",
      ],
      tip: "Un seul numéro à retenir partout en Europe : le 112. Et l'ordre des gestes : Protéger, Alerter, Secourir.",
    },
  ],
  exercises: [
    {
      id: "as1r-1",
      level: 1,
      type: "qcm",
      question: "Un panneau triangulaire à bord rouge annonce…",
      choices: ["une interdiction", "un danger", "une obligation", "une simple information"],
      answer: 1,
      explanation:
        "Le triangle à bord rouge est la forme des panneaux de danger : virage, école, chaussée glissante, animaux… Il te demande de ralentir et de redoubler d'attention. Interdiction = rond rouge, obligation = rond bleu, information = carré bleu.",
      hint: "Repense aux quatre formes : triangle, rond rouge, rond bleu, carré.",
    },
    {
      id: "as1r-2",
      level: 1,
      type: "qcm",
      question: "Un panneau rond à fond bleu exprime…",
      choices: ["un danger", "une interdiction", "une obligation", "un conseil facultatif"],
      answer: 2,
      explanation:
        "Rond bleu = obligation : tu dois faire ce que le panneau montre (emprunter la piste cyclable, suivre la direction indiquée). À ne pas confondre avec le carré bleu, qui donne une simple indication sans rien imposer.",
      hint: "La forme ronde impose ; la forme carrée informe.",
    },
    {
      id: "as1r-3",
      level: 1,
      type: "qcm",
      question:
        "Le feu passe à l'orange alors qu'une voiture approche du carrefour. Que doit faire le conducteur ?",
      choices: [
        "Accélérer pour passer avant le rouge",
        "S'arrêter, sauf s'il est trop engagé pour le faire sans danger",
        "Klaxonner et passer",
        "Continuer à la même vitesse",
      ],
      answer: 1,
      explanation:
        "L'orange signifie l'arrêt : la seule exception concerne le véhicule déjà si proche que freiner serait dangereux. Accélérer à l'orange, c'est arriver dans le carrefour au moment où l'autre feu passe au vert, exactement quand piétons et véhicules commencent à s'engager.",
      hint: "L'orange est un ordre d'arrêt avec une seule exception.",
    },
    {
      id: "as1r-4",
      level: 1,
      type: "truefalse",
      question: "Le 112 est le numéro d'urgence valable dans toute l'Europe.",
      answer: true,
      explanation:
        "Vrai. Le 112 fonctionne gratuitement dans tous les pays de l'Union européenne, depuis n'importe quel téléphone. En France, tu peux aussi appeler directement le 15 (SAMU), le 17 (police ou gendarmerie) ou le 18 (pompiers) selon la situation.",
      hint: "C'est le numéro à retenir même en vacances à l'étranger.",
    },
    {
      id: "as1r-5",
      level: 2,
      type: "qcm",
      question:
        "Un agent de police fait signe d'avancer alors que le feu est rouge. Que fait-on ?",
      choices: [
        "On respecte le feu : on attend le vert",
        "On suit les gestes de l'agent : il prime sur le feu",
        "On fait ce que fait la voiture de devant",
        "On attend que l'agent et le feu soient d'accord",
      ],
      answer: 1,
      explanation:
        "Quand un agent règle la circulation, ses gestes remplacent les feux et les panneaux : c'est le sommet de la hiérarchie. L'ordre à connaître : agent, puis feux, puis panneaux, puis règles générales. S'il te fait signe de passer, tu passes, même au rouge.",
      hint: "Classe dans l'ordre : agent, feux, panneaux. Qui commande ?",
    },
    {
      id: "as1r-6",
      level: 2,
      type: "qcm",
      question:
        "À un carrefour sans panneau, sans feu et sans agent, qui passe en premier ?",
      choices: [
        "Le véhicule le plus rapide",
        "Le véhicule le plus gros",
        "Le véhicule qui vient de droite",
        "Le véhicule qui klaxonne le premier",
      ],
      answer: 2,
      explanation:
        "Sans aucune signalisation, la règle par défaut est la priorité à droite : chacun cède le passage à celui qui arrive par sa droite. Elle s'applique à tous les véhicules, y compris ton vélo. Mais une priorité ne dispense jamais de vérifier que l'autre te l'accorde vraiment.",
      hint: "C'est une règle qui s'applique quand il n'y a rien d'autre pour décider.",
    },
    {
      id: "as1r-7",
      level: 2,
      type: "qcm",
      question: "La distance d'arrêt d'un véhicule, c'est…",
      choices: [
        "la distance parcourue pendant le freinage uniquement",
        "la distance parcourue pendant le temps de réaction uniquement",
        "la distance de réaction plus la distance de freinage",
        "la longueur des traces de pneus au sol",
      ],
      answer: 2,
      explanation:
        "Entre le moment où le conducteur voit le danger et l'arrêt complet, il se passe deux choses : environ une seconde de réaction (le véhicule file encore à pleine vitesse) puis le freinage lui-même. La distance d'arrêt additionne les deux : à 50 km/h sur sol sec, environ 14 m + 14 m = 28 m.",
      hint: "Avant même de freiner, le conducteur a besoin d'un temps pour réagir.",
    },
    {
      id: "as1r-8",
      level: 2,
      type: "truefalse",
      question: "Sur route mouillée, la distance de freinage est environ doublée.",
      answer: true,
      explanation:
        "Vrai. Sur chaussée mouillée, les pneus adhèrent moins et le freinage demande environ deux fois plus de distance. C'est pourquoi, sous la pluie, tu dois prévoir une marge bien plus grande avant de traverser ou de t'engager à vélo : la voiture que tu vois ne s'arrêtera pas là où tu l'imagines.",
      hint: "Que devient l'adhérence des pneus quand la route est glissante ?",
    },
    {
      id: "as1r-9",
      level: 3,
      type: "qcm",
      question:
        "À 50 km/h, quelle distance une voiture parcourt-elle environ pendant la seule seconde de réaction du conducteur ?",
      choices: ["2 mètres", "14 mètres", "28 mètres", "50 mètres"],
      answer: 1,
      explanation:
        "À 50 km/h, un véhicule parcourt environ 14 mètres par seconde. Pendant la seconde de réaction, il avance donc de 14 mètres sans freiner du tout ; le freinage ajoute encore environ 14 mètres sur sol sec. Voilà pourquoi une voiture « pas si loin » est en réalité déjà trop proche.",
      hint: "Convertis : 50 km en une heure, cela fait combien de mètres en une seconde ?",
    },
    {
      id: "as1r-10",
      level: 3,
      type: "qcm",
      question:
        "Pourquoi l'alcool et le téléphone au volant aggravent-ils les accidents ?",
      choices: [
        "Ils rendent le moteur moins puissant",
        "Ils allongent le temps de réaction : le danger est vu et traité trop tard",
        "Ils usent les freins plus vite",
        "Ils n'ont d'effet que la nuit",
      ],
      answer: 1,
      explanation:
        "L'alcool ralentit le cerveau, rétrécit le champ de vision et fausse l'évaluation des distances ; le téléphone détourne les yeux et l'attention. Dans les deux cas, le temps de réaction s'allonge, et chaque dixième de seconde perdu se traduit en mètres parcourus sans réagir. La distance d'arrêt s'allonge d'autant.",
      hint: "Relie ces distracteurs à la notion de temps de réaction.",
    },
    {
      id: "as1r-11",
      level: 3,
      type: "qcm",
      question:
        "Tu es témoin d'un accident : un cycliste est au sol, blessé. Dans quel ordre agis-tu ?",
      choices: [
        "Secourir, puis alerter, puis protéger",
        "Alerter, puis partir pour ne pas gêner",
        "Protéger les lieux, alerter les secours, puis secourir si je sais le faire",
        "Déplacer le blessé sur le trottoir, puis appeler",
      ],
      answer: 2,
      explanation:
        "L'ordre est Protéger, Alerter, Secourir. Protéger d'abord : éviter un suraccident en se mettant hors de la chaussée et en signalant l'obstacle. Alerter ensuite (15, 18 ou 112) avec le lieu exact et l'état de la victime. Secourir enfin, sans déplacer un blessé : le bouger peut aggraver ses lésions.",
      hint: "Trois lettres à retenir : P, A, S.",
    },
    {
      id: "as1r-12",
      level: 3,
      type: "qcm",
      question:
        "Un piéton doit encore traverser 5 mètres de chaussée. Une voiture arrive à 50 km/h, à 20 mètres, sur route mouillée. Pourquoi la situation est-elle critique ?",
      choices: [
        "Elle ne l'est pas : 20 mètres, c'est largement suffisant",
        "La distance d'arrêt dépasse 28 mètres sous la pluie : la voiture ne peut pas s'arrêter en 20 mètres",
        "Le piéton est prioritaire, la voiture s'arrêtera forcément",
        "La pluie ralentit automatiquement la voiture",
      ],
      answer: 1,
      explanation:
        "À 50 km/h sur sol sec, il faut déjà environ 28 mètres pour s'arrêter (14 m de réaction + 14 m de freinage). Sous la pluie, le freinage double : la distance d'arrêt dépasse 40 mètres. À 20 mètres, l'arrêt est physiquement impossible, quelle que soit la priorité du piéton. La règle de survie : on ne s'engage que si le véhicule a la place de s'arrêter, avec de la marge.",
      hint: "Compare les 20 mètres disponibles à la distance d'arrêt sous la pluie.",
    },
  ],
  videos: [
    {
      title: "Les règles de priorité au Code de la route",
      youtubeId: "KBTd5Vh-smw",
      channel: "Code en poche - Code de la route",
    },
  ],
};
