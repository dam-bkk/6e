import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci4-corps-humain",
  subject: "sciences",
  grade: "4e",
  num: 4,
  title: "Nutrition et système nerveux",
  domain: "grandeurs",
  domainLabel: "SVT",
  icon: "Brain",
  teaser: "De l'assiette au muscle, et du muscle au cerveau : comment le corps se procure ce dont il a besoin et comment il commande.",
  objectives: [
    "Je sais décrire le trajet des aliments et le rôle des sucs digestifs",
    "Je sais expliquer comment les nutriments passent dans le sang au niveau de l'intestin grêle",
    "Je sais que les organes ont besoin en permanence de glucose et de dioxygène",
    "Je sais décrire le trajet d'un message nerveux, du récepteur à l'effecteur",
    "Je sais expliquer pourquoi le sommeil, les écrans et certaines substances agissent sur le cerveau",
  ],
  lesson: [
    {
      title: "Le trajet des aliments",
      paragraphs: [
        "Les aliments que tu avales suivent toujours le même chemin, appelé tube digestif : la bouche, l'œsophage, l'estomac, l'intestin grêle, puis le gros intestin. Ce qui n'a pas été absorbé est éliminé par l'anus. Le tube digestif est un long tuyau : tant qu'un aliment y circule, il n'est pas encore entré dans le corps.",
        "Tout au long de ce trajet, les aliments sont d'abord transformés mécaniquement : les dents les broyent, la langue les malaxe, l'estomac les brasse. Cette action ne fait que réduire les morceaux, comme un mixeur ; elle ne change pas la nature des aliments.",
        "L'intestin grêle est de très loin l'organe le plus long du tube digestif : environ 6 mètres chez un adulte, contre 1,5 mètre pour le gros intestin. C'est là que se termine la digestion et que se fait l'essentiel du passage dans le sang.",
      ],
      example: [
        "Ordre du trajet : bouche → œsophage → estomac → intestin grêle → gros intestin.",
        "Un repas reste environ 3 à 4 heures dans l'estomac, puis plusieurs heures dans l'intestin grêle.",
        "Le foie et le pancréas ne font pas partie du tuyau : ce sont des glandes qui déversent leurs sucs dans l'intestin grêle.",
      ],
      tip: "Ne confonds pas intestin grêle (fin et très long, où se fait l'absorption) et gros intestin (large et court, où l'eau est récupérée avant l'élimination). « Grêle » veut dire mince, pas petit.",
    },
    {
      title: "Les sucs digestifs et la digestion chimique",
      paragraphs: [
        "La transformation mécanique ne suffit pas : les molécules des aliments sont bien trop grosses pour traverser la paroi de l'intestin. Il faut les découper chimiquement. Ce travail est réalisé par les sucs digestifs, des liquides contenant des enzymes.",
        "Une enzyme est une molécule qui découpe une catégorie d'aliment bien précise, et une seule. Il existe donc plusieurs enzymes différentes : les unes agissent sur l'amidon, d'autres sur les protéines, d'autres sur les graisses. La salive contient déjà une enzyme qui attaque l'amidon dès la bouche.",
        "Les sucs digestifs sont fabriqués par les glandes digestives : glandes salivaires, paroi de l'estomac, pancréas, et le foie qui produit la bile. Le suc gastrique de l'estomac est très acide, ce qui aide la digestion et détruit une partie des microbes avalés.",
        "Résultat de toute cette digestion : des nutriments, c'est-à-dire de petites molécules solubles comme le glucose, les acides aminés ou les acides gras. Les nutriments sont le produit final de la digestion, pas son point de départ.",
      ],
      example: [
        "Amidon (pain, pâtes, riz) → glucose sous l'action des enzymes.",
        "Protéines (viande, œuf, lentilles) → acides aminés.",
        "Si tu mâches longuement un morceau de pain sans le sucrer, il finit par prendre un goût sucré : l'enzyme de la salive a déjà libéré du glucose.",
      ],
      tip: "Une enzyme n'est pas un microbe et n'est pas vivante : c'est une molécule spécialisée, une sorte de paire de ciseaux moléculaire qui ne coupe qu'un seul type de molécule.",
    },
    {
      title: "L'absorption intestinale",
      paragraphs: [
        "Les nutriments traversent la fine paroi de l'intestin grêle et passent dans le sang : c'est l'absorption intestinale. C'est à ce moment précis que les aliments entrent véritablement dans le corps.",
        "La paroi de l'intestin grêle est repliée en des milliers de minuscules replis, les villosités, elles-mêmes couvertes de replis encore plus fins. Cela multiplie énormément la surface d'échange : déplié, l'intestin grêle offrirait une surface de plusieurs dizaines de mètres carrés, alors que le tube ne mesure que quelques centimètres de diamètre.",
        "Sous cette paroi circulent de très nombreux petits vaisseaux sanguins. Le sang chargé de nutriments quitte l'intestin, passe par le foie, puis est distribué à tout l'organisme. Ce qui n'est pas absorbé (fibres, restes non digestibles) poursuit sa route vers le gros intestin.",
      ],
      example: [
        "Trois conditions rendent l'absorption efficace : une grande surface (villosités), une paroi très fine, et beaucoup de vaisseaux sanguins juste dessous.",
        "Les fibres des légumes ne sont pas digérées : elles ne passent pas dans le sang mais facilitent le transit.",
      ],
      tip: "Retiens le mot-clé « surface d'échange ». C'est le même principe que dans les poumons avec les alvéoles : partout où le corps doit faire passer quelque chose dans le sang, il déplie une immense surface dans un petit volume.",
    },
    {
      title: "Ce dont les organes ont besoin",
      paragraphs: [
        "Tous les organes, en permanence, prélèvent dans le sang deux choses indispensables : du glucose, apporté par la digestion, et du dioxygène, apporté par la respiration au niveau des poumons. En les utilisant, ils libèrent l'énergie dont ils ont besoin pour fonctionner.",
        "Cette utilisation produit des déchets, notamment du dioxyde de carbone, qui repart dans le sang et sera éliminé par les poumons. On peut le vérifier expérimentalement : le sang qui sort d'un organe contient moins de glucose et de dioxygène, et plus de dioxyde de carbone, que celui qui y entre.",
        "Quand un organe travaille davantage, ses besoins augmentent. Pendant un effort, les muscles consomment beaucoup plus de glucose et de dioxygène : c'est pourquoi le cœur bat plus vite et la respiration s'accélère, afin d'amener plus de sang, donc plus d'approvisionnement.",
        "Le cerveau est un cas particulier : il ne représente qu'environ 2 % de la masse du corps mais consomme à lui seul près de 20 % du glucose et du dioxygène de l'organisme, et cela même au repos. Il ne fait jamais de pause, même la nuit.",
      ],
      example: [
        "Au repos, un cœur bat environ 60 à 80 fois par minute ; pendant un effort intense, il peut dépasser 180 battements par minute.",
        "Un muscle privé de dioxygène pendant quelques minutes ne peut plus fonctionner correctement ; un cerveau privé de dioxygène subit des dégâts en quelques minutes seulement.",
      ],
      tip: "Ne dis pas que les organes « respirent de l'air ». Ils prélèvent du dioxygène dissous dans le sang. Ce sont les poumons qui font le lien entre l'air et le sang.",
    },
    {
      title: "Le système nerveux et le message nerveux",
      paragraphs: [
        "Le système nerveux comprend les centres nerveux — l'encéphale (dont le cerveau) et la moelle épinière, protégés par le crâne et la colonne vertébrale — et les nerfs, qui les relient au reste du corps.",
        "Il est constitué de cellules très particulières : les neurones. Un neurone possède un corps cellulaire et de longs prolongements qui peuvent atteindre plusieurs dizaines de centimètres. Le cerveau humain en contient environ 86 milliards, reliés entre eux par des milliers de milliards de connexions.",
        "Le circuit d'une réaction est toujours le même. Un organe sensoriel (œil, oreille, peau) capte une information et crée un message nerveux sensitif, transporté par un nerf jusqu'au centre nerveux. Le centre nerveux traite l'information et émet un message nerveux moteur qui repart par un autre nerf vers un effecteur, en général un muscle, qui exécute la réponse.",
        "Le message nerveux circule vite, mais pas instantanément : le traitement par le cerveau prend du temps. C'est pourquoi le temps de réaction d'un être humain à un signal visuel est d'environ 0,2 seconde, soit 200 millisecondes. À 90 km/h, une voiture parcourt environ 5 mètres pendant ce seul temps de réaction, avant même que le pied n'appuie sur le frein.",
      ],
      example: [
        "Trajet complet : peau (récepteur) → nerf sensitif → moelle épinière et cerveau (centre nerveux) → nerf moteur → muscle (effecteur).",
        "Test de la règle qui tombe : on rattrape la règle après environ 20 cm de chute, ce qui correspond à un temps de réaction d'à peu près 0,2 s.",
        "Fatigue, alcool ou téléphone allongent nettement ce temps de réaction, parfois du simple au double.",
      ],
      tip: "Un nerf n'est pas un centre nerveux : c'est un câble, il transporte le message sans le décider. La décision se prend toujours dans un centre nerveux. Et un message nerveux circule dans un seul sens à la fois.",
    },
    {
      title: "Écrans, substances et sommeil",
      paragraphs: [
        "Le cerveau est un organe fragile qui a besoin de conditions correctes pour fonctionner. Toute substance qui passe dans le sang finit par l'atteindre et modifier son fonctionnement.",
        "L'alcool ralentit la transmission des messages nerveux : les réflexes sont plus lents, la coordination et le jugement sont diminués. Le cannabis perturbe la mémoire et l'attention, en particulier chez l'adolescent dont le cerveau est encore en développement. Le tabac agit surtout sur la nicotine, qui crée une dépendance très rapide. Ces effets ne relèvent pas de la volonté : ils sont biologiques.",
        "Les écrans, eux, n'introduisent aucune substance, mais agissent de deux façons : ils captent l'attention par des sollicitations répétées, et leur lumière le soir retarde l'endormissement en trompant l'horloge interne du corps.",
        "Le sommeil n'est pas une pause inutile. C'est pendant le sommeil que le cerveau consolide les apprentissages de la journée et élimine certains déchets accumulés. Un adolescent a besoin d'environ 9 heures de sommeil par nuit. Un manque de sommeil dégrade la mémoire, l'humeur et le temps de réaction, exactement comme le ferait une fatigue extrême.",
      ],
      example: [
        "Réviser puis bien dormir est plus efficace que réviser plus longtemps en dormant moins : la mémorisation se joue en grande partie pendant la nuit.",
        "Une nuit de 5 heures dégrade le temps de réaction dans des proportions comparables à une consommation d'alcool.",
      ],
      tip: "Le cerveau d'un adolescent n'est pas un cerveau d'adulte en plus petit : il est en pleine réorganisation jusque vers 20-25 ans, ce qui le rend particulièrement sensible aux substances et au manque de sommeil.",
    },
  ],
  exercises: [
    {
      id: "s4cor-1",
      level: 1,
      type: "qcm",
      question: "Quel est l'ordre correct du trajet des aliments dans le tube digestif ?",
      choices: [
        "bouche → estomac → œsophage → intestin grêle → gros intestin",
        "bouche → œsophage → estomac → intestin grêle → gros intestin",
        "bouche → œsophage → intestin grêle → estomac → gros intestin",
        "bouche → estomac → intestin grêle → œsophage → gros intestin",
      ],
      answer: 1,
      explanation:
        "L'œsophage est le tuyau qui descend de la bouche jusqu'à l'estomac : il vient donc forcément AVANT l'estomac. Ensuite viennent l'intestin grêle, où se fait l'absorption, puis le gros intestin. Erreur fréquente : placer le gros intestin avant l'intestin grêle parce qu'il est plus large — mais « grêle » signifie mince, pas petit, et l'intestin grêle est en réalité bien plus long.",
      hint: "Demande-toi ce que traverse un aliment juste après avoir été avalé : quel organe relie la bouche à l'estomac ?",
    },
    {
      id: "s4cor-2",
      level: 1,
      type: "input",
      question: "Dans quel organe du tube digestif la plus grande partie des nutriments passe-t-elle dans le sang ? (deux mots)",
      answer: "intestin grele",
      accept: ["intestin grêle", "l'intestin grêle", "l'intestin grele", "le grele", "le grêle"],
      explanation:
        "L'absorption intestinale se fait presque entièrement dans l'intestin grêle : sa paroi est très fine, repliée en villosités qui multiplient la surface d'échange, et richement irriguée par des vaisseaux sanguins. L'estomac, lui, brasse et digère mais absorbe très peu ; le gros intestin récupère surtout de l'eau.",
      hint: "C'est l'organe le plus long du tube digestif, environ 6 mètres, dont la paroi est couverte de villosités.",
    },
    {
      id: "s4cor-3",
      level: 1,
      type: "truefalse",
      question: "Les organes du corps prélèvent en permanence du glucose et du dioxygène dans le sang.",
      answer: true,
      explanation:
        "Vrai. Tous les organes ont besoin en continu de ces deux éléments pour libérer de l'énergie et fonctionner, et ils rejettent du dioxyde de carbone. Le mot important est « en permanence » : même au repos et même la nuit, le cœur, les reins et surtout le cerveau continuent de consommer. Idée reçue à corriger : ce n'est pas seulement pendant un effort que le corps consomme.",
      hint: "Pense à ce qui se passe la nuit, quand tu dors : le cœur et le cerveau s'arrêtent-ils de fonctionner ?",
    },
    {
      id: "s4cor-4",
      level: 1,
      type: "qcm",
      question: "Quels organes forment les centres nerveux ?",
      choices: [
        "les nerfs et les muscles",
        "l'encéphale et la moelle épinière",
        "les yeux et les oreilles",
        "le cœur et les poumons",
      ],
      answer: 1,
      explanation:
        "Les centres nerveux sont l'encéphale (dont le cerveau), protégé par le crâne, et la moelle épinière, protégée par la colonne vertébrale. Ce sont eux qui traitent l'information et décident de la réponse. Les nerfs ne sont pas des centres nerveux : ce sont de simples câbles de transport. Les yeux et les oreilles sont des organes sensoriels, en début de circuit.",
      hint: "Cherche les deux organes du système nerveux qui sont protégés par des os, parce qu'ils prennent les décisions.",
    },
    {
      id: "s4cor-5",
      level: 2,
      type: "qcm",
      question: "Pourquoi les aliments doivent-ils être digérés chimiquement par des enzymes ?",
      choices: [
        "Pour être réchauffés à la température du corps",
        "Parce que leurs molécules sont trop grosses pour traverser la paroi de l'intestin",
        "Pour tuer tous les microbes qu'ils contiennent",
        "Pour qu'ils descendent plus vite dans le tube digestif",
      ],
      answer: 1,
      explanation:
        "La mastication ne fait que réduire la taille des morceaux ; les molécules, elles, restent identiques et bien trop grosses pour franchir la paroi intestinale. Les enzymes des sucs digestifs les découpent en petites molécules solubles, les nutriments, seules capables de passer dans le sang. Idée reçue : bien mâcher ne remplace pas la digestion chimique, cela ne fait que la faciliter.",
      hint: "Compare ce que fait un mixeur (taille des morceaux) et ce que doit faire la digestion pour qu'une molécule puisse traverser une paroi.",
    },
    {
      id: "s4cor-6",
      level: 2,
      type: "truefalse",
      question: "Une même enzyme digestive peut découper aussi bien l'amidon que les protéines.",
      answer: false,
      explanation:
        "Faux : chaque enzyme est spécifique, elle n'agit que sur un seul type de molécule. C'est pour cela que l'organisme fabrique plusieurs sucs digestifs contenant des enzymes différentes. L'enzyme de la salive attaque l'amidon mais reste sans effet sur les protéines, qui sont digérées par d'autres enzymes, notamment dans l'estomac et l'intestin.",
      hint: "Pense à une clé et à une serrure : une enzyme reconnaît-elle n'importe quelle molécule, ou une seule sorte ?",
    },
    {
      id: "s4cor-7",
      level: 2,
      type: "input",
      question:
        "Quel est le temps de réaction moyen d'un être humain à un signal visuel, en secondes ? (nombre avec une virgule)",
      answer: "0,2",
      accept: ["0.2", "0,2 s", "0.2 s", "0,20", "0.20"],
      explanation:
        "Il faut environ 0,2 seconde, soit 200 millisecondes, entre la perception d'un signal et le début de la réponse musculaire. Ce délai vient surtout du traitement de l'information par le centre nerveux, pas de la vitesse du message dans les nerfs. C'est ce que mesure le test de la règle qui tombe : elle chute d'environ 20 cm avant d'être rattrapée.",
      hint: "C'est de l'ordre de deux dixièmes de seconde ; à 90 km/h une voiture parcourt environ 5 m pendant ce temps.",
    },
    {
      id: "s4cor-8",
      level: 2,
      type: "qcm",
      question:
        "Tu poses la main sur un objet brûlant et tu la retires. Quel est le trajet correct du message nerveux ?",
      choices: [
        "muscle → nerf → cerveau → nerf → peau",
        "peau → nerf sensitif → centre nerveux → nerf moteur → muscle",
        "cerveau → peau → muscle → nerf",
        "peau → muscle directement, sans passer par un nerf",
      ],
      answer: 1,
      explanation:
        "Le circuit va toujours du récepteur vers l'effecteur : la peau capte l'information, un nerf sensitif la conduit au centre nerveux, celui-ci élabore la réponse, et un nerf moteur la transmet au muscle qui retire la main. Idée reçue à corriger : même pour un réflexe très rapide, le message passe obligatoirement par un centre nerveux — c'est la moelle épinière, ce qui explique la rapidité.",
      hint: "Commence par l'organe qui capte l'information et termine par celui qui exécute le mouvement ; entre les deux, il faut forcément un centre qui décide.",
    },
    {
      id: "s4cor-9",
      level: 3,
      type: "qcm",
      question:
        "On mesure la composition du sang à l'entrée et à la sortie d'un muscle en plein effort. Quel résultat attend-on à la sortie ?",
      choices: [
        "plus de glucose, plus de dioxygène, moins de dioxyde de carbone",
        "moins de glucose, moins de dioxygène, plus de dioxyde de carbone",
        "une composition strictement identique à l'entrée",
        "moins de glucose, plus de dioxygène, moins de dioxyde de carbone",
      ],
      answer: 1,
      explanation:
        "Le muscle prélève du glucose et du dioxygène pour libérer de l'énergie : le sang qui ressort en contient donc moins. En échange, il y rejette le dioxyde de carbone produit, qui est donc plus abondant à la sortie. Cette différence entrée-sortie est la preuve expérimentale que l'organe a consommé. Elle est d'autant plus marquée que l'effort est intense.",
      hint: "Raisonne comme un bilan : ce que l'organe prélève diminue dans le sang, ce qu'il rejette y augmente.",
    },
    {
      id: "s4cor-10",
      level: 3,
      type: "truefalse",
      question: "Le cerveau ne consomme presque plus de glucose pendant le sommeil, puisqu'il est au repos.",
      answer: false,
      explanation:
        "Faux : le cerveau ne se met jamais au repos. Il représente environ 2 % de la masse du corps mais consomme à lui seul près de 20 % du glucose et du dioxygène de l'organisme, y compris la nuit. Pendant le sommeil il travaille activement : il consolide les apprentissages de la journée et élimine des déchets accumulés. Dormir n'est donc pas « ne rien faire », c'est une activité biologique indispensable.",
      hint: "Demande-toi ce que fait le cerveau pendant la nuit avec ce que tu as appris dans la journée.",
    },
    {
      id: "s4cor-11",
      level: 3,
      type: "input",
      question:
        "Une voiture roule à 20 m/s. Quelle distance, en mètres, parcourt-elle pendant le temps de réaction de 0,2 s du conducteur ? (nombre seul)",
      answer: "4",
      accept: ["4 m", "4m", "4,0", "4.0"],
      explanation:
        "Distance = vitesse × durée = 20 × 0,2 = 4 mètres. Ces 4 mètres sont parcourus AVANT que le pied ne touche la pédale : ils s'ajoutent à la distance de freinage proprement dite. C'est pourquoi la fatigue, l'alcool ou un téléphone, qui allongent le temps de réaction, augmentent directement la distance d'arrêt, même avec de très bons freins.",
      hint: "Utilise la relation distance = vitesse × durée, avec la vitesse en m/s et la durée en secondes : aucune conversion n'est nécessaire ici.",
    },
    {
      id: "s4cor-12",
      level: 3,
      type: "qcm",
      question:
        "Pourquoi conseille-t-on d'arrêter les écrans au moins une heure avant de se coucher ?",
      choices: [
        "Parce que les écrans introduisent une substance chimique dans le sang",
        "Parce que leur lumière et les sollicitations retardent l'endormissement en perturbant l'horloge interne",
        "Parce qu'ils font baisser le taux de glucose du cerveau",
        "Parce que les ondes des écrans détruisent des neurones",
      ],
      answer: 1,
      explanation:
        "Un écran n'introduit aucune substance dans le sang et ne détruit pas de neurones : son effet est double et indirect. Sa lumière, le soir, trompe l'horloge interne du corps et retarde le signal d'endormissement ; et les contenus, conçus pour capter l'attention, maintiennent le cerveau en éveil. Le résultat est un sommeil plus court, donc une mémoire et un temps de réaction dégradés le lendemain. C'est bien le manque de sommeil qui fait les dégâts, pas l'écran lui-même.",
      hint: "Élimine d'abord les réponses qui supposent qu'un écran agit chimiquement ou détruit des cellules, puis cherche par quel mécanisme il agit sur l'heure d'endormissement.",
    },
  ],
};
