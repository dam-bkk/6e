import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci5-lumiere",
  subject: "sciences",
  grade: "5e",
  num: 3,
  title: "La lumière",
  domain: "donnees",
  domainLabel: "Physique-chimie",
  icon: "Sun",
  teaser: "Sources, rayons, ombres et éclipses : comprends comment la lumière voyage.",
  objectives: [
    "Je sais distinguer une source primaire de lumière d'un objet diffusant",
    "Je sais expliquer pourquoi on voit un objet : de la lumière doit entrer dans mon œil",
    "Je sais que la lumière se propage en ligne droite et je sais utiliser le modèle du rayon",
    "Je sais expliquer la formation d'une ombre propre et d'une ombre portée",
    "Je sais expliquer une éclipse de Soleil et une éclipse de Lune",
    "Je connais la vitesse de la lumière dans le vide : environ 300 000 km/s",
  ],
  lesson: [
    {
      title: "Sources primaires et objets diffusants",
      paragraphs: [
        "Une source primaire de lumière produit elle-même la lumière qu'elle envoie : le Soleil, une étoile, une flamme, une lampe allumée, un écran de téléphone, une luciole.",
        "Un objet diffusant (on dit aussi objet éclairé) ne produit aucune lumière : il reçoit la lumière d'une source et en renvoie une partie dans toutes les directions. Une feuille de papier, un mur, une table, la Lune et toutes les planètes sont des objets diffusants.",
        "C'est le point le plus important du chapitre : la Lune n'émet pas de lumière. Elle nous paraît brillante parce qu'elle est éclairée par le Soleil et qu'elle diffuse une partie de cette lumière vers la Terre. Même chose pour Mars ou Vénus, qui ne sont pas des étoiles.",
      ],
      example: [
        "Sources primaires : Soleil, étoiles, bougie, lampe de poche, ver luisant, écran allumé.",
        "Objets diffusants : Lune, planètes, page d'un livre, vêtements, nuages, miroir (il renvoie la lumière sans en produire).",
      ],
      tip: "Pose-toi la question : « Dans le noir complet, sans aucune autre lumière, est-ce que cet objet brille ? » Oui → source primaire. Non → objet diffusant. La Lune, dans le noir total sans Soleil, serait invisible.",
    },
    {
      title: "Pourquoi on voit un objet",
      paragraphs: [
        "Pour voir un objet, il faut que de la lumière venant de cet objet entre dans notre œil. Cette lumière peut être produite par l'objet lui-même (source primaire) ou seulement diffusée par lui (objet éclairé).",
        "Attention à l'idée reçue : l'œil n'envoie rien du tout. Ce n'est pas un « rayon du regard » qui part de l'œil vers l'objet, c'est la lumière qui va de l'objet vers l'œil. C'est pour cela qu'on ne voit rien dans le noir absolu, même les yeux grands ouverts.",
        "Un faisceau de lumière qui traverse l'espace sans rencontrer d'obstacle est lui-même invisible de côté : on ne voit le pinceau d'une lampe torche dans le noir que s'il y a de la poussière, de la fumée ou des gouttelettes qui diffusent la lumière vers nos yeux.",
      ],
      example: [
        "Je vois ce cahier parce que la lumière de la lampe arrive sur le cahier, puis est diffusée par le papier jusqu'à mon œil : source → objet → œil.",
        "Le faisceau d'un projecteur de cinéma devient visible à cause des poussières en suspension dans la salle.",
      ],
      tip: "Retiens la chaîne dans le bon sens : source → objet diffusant → œil. Jamais œil → objet.",
    },
    {
      title: "La lumière se propage en ligne droite",
      paragraphs: [
        "Dans un milieu transparent et homogène (le vide, l'air, l'eau calme, le verre), la lumière se propage en ligne droite. Pour représenter ce trajet, on utilise le modèle du rayon de lumière : une droite fléchée, la flèche indiquant le sens de propagation. Un faisceau de lumière se représente alors par un ensemble de rayons.",
        "Le rayon de lumière est un modèle, un outil de dessin utile : dans la réalité, la lumière n'est pas découpée en fils séparés.",
        "Cette propagation rectiligne explique beaucoup de choses : on ne voit pas derrière un mur, on peut viser avec une règle, et une chambre noire fabrique une image renversée de l'objet éclairé placé devant son petit trou.",
      ],
      example: [
        "Trois personnes alignées : si la première voit une lampe et que la deuxième se place devant elle, la lumière est bloquée. Elle ne contourne pas les obstacles.",
        "Dans une chambre noire percée d'un petit trou, chaque rayon file tout droit : le haut de l'objet se retrouve en bas de l'image, l'image est donc renversée.",
      ],
      tip: "Quand tu dessines un schéma de lumière, trace toujours des traits parfaitement droits à la règle et n'oublie pas la flèche : sans flèche, ce n'est pas un rayon de lumière.",
    },
    {
      title: "Ombres : ombre propre et ombre portée",
      paragraphs: [
        "Un objet opaque bloque la lumière. Comme la lumière va tout droit, elle ne peut pas passer derrière l'objet : il se crée une zone d'ombre.",
        "L'ombre propre est la partie de l'objet lui-même qui n'est pas éclairée (la face opposée à la source). L'ombre portée est la zone sombre dessinée sur un écran, un mur ou le sol, derrière l'objet. Le cône d'ombre est le volume d'espace non éclairé situé derrière l'objet.",
        "La taille de l'ombre portée dépend des positions : plus l'objet se rapproche de la source (ou plus l'écran s'éloigne de l'objet), plus l'ombre portée est grande. Avec une source ponctuelle, les contours de l'ombre sont nets ; avec une source étendue, ils sont flous.",
      ],
      example: [
        "Une balle éclairée par une lampe : la moitié de la balle tournée vers la lampe est éclairée, l'autre moitié est son ombre propre ; le disque sombre sur le mur derrière est son ombre portée.",
        "Rapproche ta main de la lampe : son ombre sur le mur grandit. Éloigne-la de la lampe : l'ombre rétrécit.",
      ],
      tip: "L'ombre n'est pas une chose noire qui se déplace : c'est simplement un endroit où la lumière n'arrive pas. Et l'ombre portée est toujours du côté opposé à la source.",
      figure: "sx-ombre",
    },
    {
      title: "Éclipses, et la vitesse de la lumière",
      paragraphs: [
        "Une éclipse de Soleil se produit quand la Lune passe entre le Soleil et la Terre : l'ombre de la Lune tombe sur une petite région de la Terre, où l'on voit le Soleil masqué. Une éclipse de Lune se produit quand la Terre passe entre le Soleil et la Lune : la Lune entre dans le cône d'ombre de la Terre et s'assombrit. L'ordre des trois astres est donc différent dans les deux cas.",
        "Les éclipses sont rares car l'orbite de la Lune est légèrement inclinée : la plupart du temps, les trois astres ne sont pas parfaitement alignés.",
        "À découvrir : dans le vide, la lumière parcourt environ 300 000 kilomètres par seconde, soit 300 000 km/s. Rien ne va plus vite. Cette vitesse est énorme mais pas infinie : la lumière du Soleil met environ 8 minutes pour nous atteindre. Pour les distances entre les étoiles, on utilise l'année-lumière : c'est la distance parcourue par la lumière en un an, environ 9 500 milliards de km. Une année-lumière mesure donc une distance, pas une durée.",
      ],
      example: [
        "Éclipse de Soleil : Soleil – Lune – Terre. Éclipse de Lune : Soleil – Terre – Lune.",
        "L'étoile Proxima du Centaure est à 4,2 années-lumière : sa lumière a voyagé 4,2 ans avant d'entrer dans ton œil. Tu la vois telle qu'elle était il y a 4,2 ans.",
      ],
      tip: "Éclipse de Soleil = c'est le Soleil qui est caché, donc la Lune est au milieu. Éclipse de Lune = c'est la Lune qui est cachée dans l'ombre de la Terre, donc la Terre est au milieu.",
    },
  ],
  exercises: [
    {
      id: "s5lum-1",
      level: 1,
      type: "qcm",
      question: "Parmi ces objets, lequel est une source primaire de lumière ?",
      choices: ["la Lune", "un miroir", "une bougie allumée", "une feuille de papier blanche"],
      answer: 2,
      explanation:
        "Une source primaire produit elle-même sa lumière : la flamme de la bougie en fait partie. La Lune, le miroir et la feuille de papier ne produisent rien : ils renvoient la lumière qu'ils reçoivent, ce sont des objets diffusants. Idée reçue fréquente : non, la Lune n'émet pas de lumière, elle est éclairée par le Soleil.",
      hint: "Dans le noir total, sans aucune autre lumière, lequel brillerait encore ?",
    },
    {
      id: "s5lum-2",
      level: 1,
      type: "truefalse",
      question: "La Lune brille parce qu'elle produit sa propre lumière.",
      answer: false,
      explanation:
        "Faux. La Lune est un objet diffusant : elle reçoit la lumière du Soleil et en renvoie une partie vers la Terre. Sans le Soleil, elle serait invisible. Seules les étoiles, comme le Soleil, produisent leur lumière dans le ciel nocturne : les planètes et la Lune se contentent de la diffuser.",
      hint: "Qui éclaire la Lune ?",
    },
    {
      id: "s5lum-3",
      level: 1,
      type: "input",
      question: "Complète avec un seul mot : « Dans l'air, la lumière se propage en ligne ......... . »",
      answer: "droite",
      explanation:
        "Dans un milieu transparent et homogène comme l'air, la lumière se propage en ligne droite. C'est ce qui explique qu'on ne voit pas derrière un mur : la lumière ne contourne pas les obstacles. On modélise ce trajet par un rayon de lumière, une droite fléchée.",
      hint: "Pourquoi ne vois-tu pas derrière un mur ?",
    },
    {
      id: "s5lum-4",
      level: 1,
      type: "qcm",
      question: "Pour voir un ballon posé sur le sol, que faut-il obligatoirement ?",
      choices: [
        "que mon œil envoie de la lumière vers le ballon",
        "que de la lumière partant du ballon entre dans mon œil",
        "que le ballon produise sa propre lumière",
        "que le ballon soit de couleur claire",
      ],
      answer: 1,
      explanation:
        "On voit un objet uniquement si de la lumière venant de cet objet entre dans l'œil. Le ballon, éclairé par une source, diffuse la lumière dans toutes les directions, dont la nôtre. L'œil, lui, n'émet rien : c'est l'idée reçue à corriger. Et un objet sombre reste visible, il diffuse simplement moins de lumière.",
      hint: "Dans quel sens circule la lumière : de l'œil vers l'objet, ou de l'objet vers l'œil ?",
    },
    {
      id: "s5lum-5",
      level: 2,
      type: "qcm",
      question: "Une lampe éclaire une balle placée devant un mur. Comment appelle-t-on la tache sombre dessinée sur le mur ?",
      choices: ["l'ombre propre", "l'ombre portée", "le cône d'ombre", "le faisceau"],
      answer: 1,
      explanation:
        "La tache sombre projetée sur un écran ou un mur est l'ombre portée. L'ombre propre, elle, est la partie de la balle elle-même qui n'est pas éclairée. Le cône d'ombre est le volume d'espace non éclairé entre la balle et le mur. Trois mots différents pour trois choses différentes.",
      hint: "Est-ce une zone sur l'objet, sur le mur, ou dans l'espace ?",
    },
    {
      id: "s5lum-6",
      level: 2,
      type: "truefalse",
      question: "Si on rapproche un objet opaque de la lampe qui l'éclaire, sans bouger le mur derrière, son ombre portée devient plus grande.",
      answer: true,
      explanation:
        "Vrai. Comme les rayons partent de la lampe en s'écartant, un objet plus proche de la source intercepte des rayons plus resserrés, et son ombre s'élargit d'autant plus sur le mur éloigné. Tu peux le vérifier avec ta main et une lampe de poche : plus la main est près de la lampe, plus l'ombre est grande.",
      hint: "Pense à ta main devant une lampe de poche : que se passe-t-il quand tu la rapproches ?",
    },
    {
      id: "s5lum-7",
      level: 2,
      type: "qcm",
      question: "Lors d'une éclipse de Soleil, quel est l'ordre des trois astres ?",
      choices: ["Soleil – Terre – Lune", "Soleil – Lune – Terre", "Lune – Soleil – Terre", "Terre – Soleil – Lune"],
      answer: 1,
      explanation:
        "Lors d'une éclipse de Soleil, la Lune se glisse entre le Soleil et la Terre : son ombre tombe sur une petite région de la Terre, d'où le Soleil paraît masqué. Ne confonds pas avec l'éclipse de Lune, où c'est la Terre qui est au milieu (Soleil – Terre – Lune) et où la Lune entre dans l'ombre de la Terre.",
      hint: "Quel astre doit cacher le Soleil pour qu'on ne le voie plus ?",
    },
    {
      id: "s5lum-8",
      level: 2,
      type: "input",
      question: "Dans le vide, la lumière parcourt environ combien de kilomètres en une seconde ? Réponds par un nombre seul, sans espace.",
      answer: "300000",
      accept: ["300 000", "300000 km", "3 x 10^5"],
      explanation:
        "La vitesse de la lumière dans le vide est d'environ 300 000 km/s (valeur exacte : 299 792 km/s). C'est la vitesse la plus grande qui existe. Elle est immense mais pas infinie : la lumière du Soleil met environ 8 minutes pour arriver jusqu'à nous.",
      hint: "C'est de l'ordre de trois cent mille kilomètres.",
    },
    {
      id: "s5lum-9",
      level: 3,
      type: "truefalse",
      question: "Une année-lumière est une durée : c'est le temps que met la lumière pour traverser une galaxie.",
      answer: false,
      explanation:
        "Faux, malgré le mot « année » ! Une année-lumière est une DISTANCE : celle que parcourt la lumière en un an, soit environ 9 500 milliards de km. C'est une unité pratique pour mesurer les immenses distances entre les étoiles, comme le kilomètre l'est sur Terre.",
      hint: "Regarde ce que l'unité sert à mesurer : un temps ou un espace ?",
    },
    {
      id: "s5lum-10",
      level: 3,
      type: "qcm",
      question: "Dans une salle de cinéma, on voit nettement le pinceau de lumière du projecteur traverser l'air. Pourquoi ?",
      choices: [
        "parce que la lumière est visible de côté quand elle est très intense",
        "parce que des poussières en suspension diffusent la lumière vers nos yeux",
        "parce que l'air est un objet diffusant coloré",
        "parce que la lumière ralentit dans l'air de la salle",
      ],
      answer: 1,
      explanation:
        "Un faisceau de lumière est invisible de côté : pour le voir, il faut que de la lumière entre dans notre œil. Ce sont les poussières (ou la fumée, les gouttelettes) qui, éclairées par le faisceau, diffusent la lumière dans toutes les directions, dont la nôtre. Dans un air parfaitement propre, on ne verrait rien entre le projecteur et l'écran.",
      hint: "Que doit-il se passer pour qu'une lumière parvienne à ton œil ?",
    },
    {
      id: "s5lum-11",
      level: 3,
      type: "input",
      question: "La lumière du Soleil met environ 500 secondes pour atteindre la Terre. Sachant qu'elle parcourt 300 000 km par seconde, quelle distance en millions de kilomètres sépare le Soleil de la Terre ? Réponds par un nombre seul.",
      answer: "150",
      accept: ["150 millions", "150000000", "150 000 000"],
      explanation:
        "On multiplie la vitesse par la durée : 300 000 × 500 = 150 000 000 km, soit 150 millions de km. Cette distance correspond bien à la réalité (environ 150 millions de km). Elle montre que la vitesse de la lumière, même énorme, n'est pas infinie : on voit toujours le Soleil tel qu'il était un peu plus de 8 minutes plus tôt.",
      hint: "Distance = vitesse × durée, puis convertis en millions.",
    },
    {
      id: "s5lum-12",
      level: 3,
      type: "qcm",
      question: "Dans une chambre noire (une boîte fermée percée d'un petit trou), l'image d'une bougie apparaît sur la paroi du fond. Que constate-t-on et pourquoi ?",
      choices: [
        "l'image est droite, car la lumière suit les parois de la boîte",
        "l'image est renversée, car la lumière se propage en ligne droite",
        "il n'y a aucune image, car la lumière ne traverse pas un si petit trou",
        "l'image est renversée, car la lumière rebondit sur le fond de la boîte",
      ],
      answer: 1,
      explanation:
        "Chaque rayon file tout droit à travers le petit trou : ceux qui partent du haut de la flamme arrivent en bas de la paroi, et inversement. L'image est donc renversée. C'est une conséquence directe de la propagation rectiligne de la lumière, et c'est le principe de l'appareil photo le plus simple du monde.",
      hint: "Trace à la règle deux rayons : un depuis le haut de la flamme, un depuis le bas, tous deux passant par le trou.",
    },
  ],
  videos: [
    { title: "Qu'est-ce que la lumière ? - C'est Pas Sorcier", youtubeId: "kI1plg8lV3s", channel: "C'est pas sorcier" },
  ],
};
