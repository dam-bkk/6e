import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-translation-rotation",
  subject: "maths",
  grade: "4e",
  num: 9,
  title: "Translation et rotation",
  domain: "geometrie",
  icon: "Move",
  teaser:
    "Faire glisser ou tourner une figure sans la déformer : deux nouvelles transformations.",
  objectives: [
    "Je sais décrire une translation par sa direction, son sens et sa longueur",
    "Je sais construire l'image d'une figure par une translation sur quadrillage",
    "Je sais décrire une rotation par son centre, son angle et son sens",
    "Je sais construire l'image d'un point ou d'une figure simple par une rotation",
    "Je sais utiliser la conservation des longueurs, des angles et des aires",
    "Je sais reconnaître des translations et des rotations dans un pavage",
  ],
  lesson: [
    {
      title: "La translation : un glissement",
      paragraphs: [
        "Une translation est un glissement de toute la figure, sans la tourner ni la retourner. Elle est définie par trois informations : une direction (par exemple horizontale, ou oblique le long d'une droite), un sens (vers la droite, vers le haut…) et une longueur.",
        "On décrit souvent une translation à l'aide de deux points : la translation qui transforme A en B fait glisser chaque point de la figure de la même façon que A glisse vers B. Tous les points se déplacent de la même distance, dans la même direction et le même sens.",
      ],
      example: [
        "La translation qui transforme A en B fait glisser chaque point « comme de A vers B ».",
        "Sur un quadrillage, si B est situé 4 carreaux à droite et 2 carreaux plus haut que A, alors CHAQUE point de la figure se déplace de 4 carreaux vers la droite et 2 carreaux vers le haut.",
      ],
      tip: "Pense au tapis roulant d'un aéroport : tout le monde avance de la même distance, dans la même direction, sans tourner. C'est exactement une translation.",
    },
    {
      title: "Construire une image par translation sur quadrillage",
      paragraphs: [
        "Sur un quadrillage, la méthode est simple : compte le déplacement (par exemple 5 carreaux à droite et 1 carreau en bas), puis applique ce même déplacement à chaque sommet de la figure. Relie ensuite les images des sommets dans le même ordre.",
        "L'image d'une figure par une translation est une figure superposable à la figure de départ : même forme, même taille, même orientation. Seule sa position change.",
      ],
      example: [
        "Le triangle RST doit glisser de 3 carreaux à droite et 2 carreaux vers le haut.",
        "1. R se déplace de 3 carreaux à droite et 2 vers le haut : on obtient R'.",
        "2. On fait pareil pour S et T : on obtient S' et T'.",
        "3. On relie R', S' et T' : le triangle R'S'T' est l'image de RST.",
      ],
      tip: "Déplace les sommets un par un, jamais la figure « à l'œil ». Un seul sommet mal compté et toute l'image est fausse.",
    },
    {
      title: "La rotation : centre, angle et sens",
      paragraphs: [
        "Une rotation fait tourner la figure autour d'un point fixe appelé le centre de la rotation. Elle est définie par trois informations : le centre, l'angle de rotation (en degrés) et le sens.",
        "Il y a deux sens possibles : le sens des aiguilles d'une montre, et le sens inverse des aiguilles d'une montre (appelé aussi sens direct). Le centre de la rotation est le seul point qui ne bouge pas.",
        "L'image d'un point M par la rotation de centre O est le point M' tel que OM' = OM et tel que l'angle MOM' est égal à l'angle de la rotation, dans le sens indiqué.",
      ],
      example: [
        "Rotation de centre O, d'angle 90°, dans le sens des aiguilles d'une montre.",
        "L'image d'un point M est le point M' tel que OM' = OM et que l'angle MOM' mesure 90°.",
        "Le point M' est obtenu en tournant d'un quart de tour autour de O, comme l'aiguille d'une montre.",
      ],
      tip: "Repères utiles : 90° = quart de tour, 180° = demi-tour, 360° = tour complet. Une rotation de 180° est exactement la symétrie centrale que tu as vue en 5e.",
    },
    {
      title: "Rotations sur quadrillage",
      paragraphs: [
        "Sur un quadrillage, les rotations de 90° et de 180° se construisent sans rapporteur. Pour un quart de tour de centre O, repère le chemin qui mène de O au point : par exemple 3 carreaux à droite et 1 carreau en haut.",
        "Pour un quart de tour dans le sens des aiguilles d'une montre, ce chemin « tourne » : 3 carreaux à droite et 1 en haut devient 1 carreau à droite et 3 en bas. Pour un demi-tour (180°), c'est plus simple : le chemin s'inverse complètement, 3 à droite et 1 en haut devient 3 à gauche et 1 en bas.",
      ],
      example: [
        "M est situé 2 carreaux à droite de O.",
        "Rotation de centre O et d'angle 90° dans le sens inverse des aiguilles d'une montre : M' est situé 2 carreaux au-dessus de O.",
        "Rotation de centre O et d'angle 180° : M'' est situé 2 carreaux à gauche de O.",
      ],
      tip: "Vérifie toujours que l'image reste à la même distance du centre : OM' = OM. Si l'image s'éloigne ou se rapproche du centre, c'est faux.",
    },
    {
      title: "Conservation et pavages",
      paragraphs: [
        "La translation et la rotation conservent les longueurs, les angles, les aires et les milieux. Autrement dit, l'image d'une figure est une figure superposable : rien n'est déformé, ni agrandi, ni rétréci.",
        "Conséquence pratique : l'image d'un segment est un segment de même longueur, l'image d'un cercle est un cercle de même rayon, l'image d'un triangle est un triangle de même aire.",
        "Ces transformations expliquent les pavages : des motifs qui se répètent pour recouvrir tout le plan sans trou ni chevauchement, comme un carrelage. Dans beaucoup de pavages (mosaïques, œuvres de l'artiste Escher), chaque motif est l'image d'un autre par une translation ou une rotation.",
      ],
      example: [
        "Un triangle d'aire 12 cm² glisse par une translation de 5 cm vers la droite.",
        "Son image est un triangle superposable : son aire vaut toujours 12 cm², ses angles et ses côtés n'ont pas changé.",
      ],
      tip: "Pour reconnaître la transformation dans un pavage : si le motif a simplement glissé sans tourner, c'est une translation ; s'il a pivoté autour d'un point, c'est une rotation.",
    },
  ],
  exercises: [
    {
      id: "m4tra-1",
      level: 1,
      type: "qcm",
      question: "Quelles informations définissent une translation ?",
      choices: [
        "Une direction, un sens et une longueur",
        "Un centre et un angle",
        "Un axe de symétrie",
        "Un centre uniquement",
      ],
      answer: 0,
      explanation:
        "Une translation est un glissement : il faut savoir dans quelle direction on glisse, dans quel sens, et sur quelle longueur. Le centre et l'angle définissent une rotation, et l'axe définit une symétrie axiale : ne mélange pas les trois transformations.",
      hint: "Une translation est un glissement : que faut-il connaître pour décrire un glissement ?",
    },
    {
      id: "m4tra-2",
      level: 1,
      type: "qcm",
      question: "Quelles informations définissent une rotation ?",
      choices: [
        "Un centre, un angle et un sens",
        "Une direction et une longueur",
        "Deux points quelconques",
        "Un axe et un angle",
      ],
      answer: 0,
      explanation:
        "Une rotation fait tourner la figure autour d'un point fixe : il faut connaître ce centre, l'angle de rotation en degrés, et le sens (celui des aiguilles d'une montre ou le sens inverse). Sans le sens, deux images différentes seraient possibles.",
      hint: "Pour faire tourner une figure, il faut savoir autour de quoi, de combien, et dans quel sens.",
    },
    {
      id: "m4tra-3",
      level: 1,
      type: "truefalse",
      question:
        "Une translation peut changer la taille d'une figure.",
      answer: false,
      explanation:
        "Faux ! Une translation fait seulement glisser la figure : elle conserve les longueurs, les angles et les aires. L'image est superposable à la figure de départ, seule sa position change. Aucune transformation vue en 4e n'agrandit ni ne rétrécit les figures.",
      hint: "Une translation est un simple glissement : qu'est-ce qui change vraiment ?",
    },
    {
      id: "m4tra-4",
      level: 1,
      type: "input",
      question:
        "Une rotation de 360° ramène chaque point à sa position de départ. Combien de degrés mesure une rotation d'un demi-tour ?",
      answer: "180",
      explanation:
        "Un tour complet mesure 360°, donc un demi-tour mesure 360 ÷ 2 = 180°. À retenir : la rotation de 180° autour d'un point est exactement la symétrie centrale vue en 5e. Piège : ne confonds pas avec le quart de tour, qui mesure 90°.",
      hint: "Un demi-tour, c'est la moitié d'un tour complet de 360°.",
    },
    {
      id: "m4tra-5",
      level: 2,
      type: "qcm",
      question:
        "Sur un quadrillage, le point B est situé 4 carreaux à droite et 3 carreaux au-dessus de A. Par la translation qui transforme A en B, comment se déplace chaque point de la figure ?",
      choices: [
        "4 carreaux à droite et 3 carreaux vers le haut",
        "3 carreaux à droite et 4 carreaux vers le haut",
        "4 carreaux à gauche et 3 carreaux vers le bas",
        "Cela dépend du point considéré",
      ],
      answer: 0,
      explanation:
        "Dans une translation, TOUS les points se déplacent exactement de la même façon que A se déplace vers B : ici 4 carreaux à droite et 3 vers le haut. C'est justement la définition d'une translation : le déplacement est identique pour chaque point, il ne dépend pas du point considéré.",
      hint: "Tous les points glissent « comme de A vers B », sans exception.",
    },
    {
      id: "m4tra-6",
      level: 2,
      type: "truefalse",
      question:
        "Dans une rotation, le centre est le seul point qui ne bouge pas.",
      answer: true,
      explanation:
        "Vrai ! Tous les points tournent autour du centre, sauf le centre lui-même qui reste immobile : son image est lui-même. C'est ce qui distingue la rotation de la translation, où AUCUN point ne reste en place (dès que la longueur du glissement n'est pas nulle).",
      hint: "Imagine une aiguille de montre : quel point de l'aiguille reste fixe ?",
    },
    {
      id: "m4tra-7",
      level: 2,
      type: "input",
      question:
        "Un triangle a une aire de 15 cm². Quelle est l'aire de son image par une rotation de 90°, en cm² ?",
      answer: "15",
      explanation:
        "La rotation conserve les longueurs, les angles et les aires : l'image est un triangle superposable au triangle de départ. Son aire vaut donc toujours 15 cm². Piège : l'angle de 90° concerne la rotation de la figure, il ne modifie en rien ses mesures.",
      hint: "La rotation déforme-t-elle la figure ?",
    },
    {
      id: "m4tra-8",
      level: 2,
      type: "qcm",
      question:
        "Le point M est situé 3 carreaux à droite du centre O. Où est son image M' par la rotation de centre O, d'angle 180° ?",
      choices: [
        "3 carreaux à gauche de O",
        "3 carreaux au-dessus de O",
        "3 carreaux en dessous de O",
        "Sur le point O",
      ],
      answer: 0,
      explanation:
        "Une rotation de 180° est un demi-tour : le point passe exactement de l'autre côté du centre, à la même distance. M était 3 carreaux à droite de O, donc M' est 3 carreaux à gauche de O. On retrouve la symétrie centrale de 5e. Piège : M' n'est jamais sur O, car OM' = OM = 3 carreaux.",
      hint: "Un demi-tour envoie le point de l'autre côté du centre, à la même distance.",
    },
    {
      id: "m4tra-9",
      level: 3,
      type: "qcm",
      question:
        "Dans un pavage, un motif se retrouve plus loin, simplement décalé, sans avoir tourné ni changé de taille. Quelle transformation fait passer du premier motif au second ?",
      choices: [
        "Une translation",
        "Une rotation de 90°",
        "Une symétrie axiale",
        "Un agrandissement",
      ],
      answer: 0,
      explanation:
        "Le motif a glissé sans tourner ni se retourner : c'est la définition même d'une translation. Une rotation l'aurait fait pivoter, une symétrie axiale l'aurait retourné comme dans un miroir, et un agrandissement aurait changé sa taille, ce qui est impossible dans un pavage régulier.",
      hint: "Le motif a-t-il tourné ? S'est-il retourné ? Ou a-t-il seulement glissé ?",
    },
    {
      id: "m4tra-10",
      level: 3,
      type: "input",
      question:
        "L'aiguille des heures d'une horloge tourne autour du centre du cadran. De combien de degrés tourne-t-elle entre 12 h et 15 h ?",
      answer: "90",
      explanation:
        "L'aiguille des heures fait un tour complet (360°) en 12 heures, donc elle tourne de 360 ÷ 12 = 30° par heure. Entre 12 h et 15 h, il s'écoule 3 heures : elle tourne donc de 3 × 30 = 90°, soit un quart de tour dans le sens des aiguilles d'une montre. Piège : ne confonds pas avec l'aiguille des minutes, qui fait un tour complet en une heure.",
      hint: "L'aiguille des heures fait 360° en 12 heures. Combien de degrés par heure ?",
    },
    {
      id: "m4tra-11",
      level: 3,
      type: "truefalse",
      question:
        "L'image d'un cercle de rayon 4 cm par une translation est un cercle de rayon 4 cm.",
      answer: true,
      explanation:
        "Vrai ! La translation conserve les longueurs : l'image d'un cercle est donc un cercle de même rayon, 4 cm. Seul son centre a glissé : l'image du centre est le centre de l'image. Rien d'autre ne change, ni la forme ni la taille.",
      hint: "La translation conserve les longueurs, donc aussi le rayon.",
    },
    {
      id: "m4tra-12",
      level: 3,
      type: "qcm",
      question:
        "Le point M est situé 2 carreaux à droite et 1 carreau au-dessus de O. Par la rotation de centre O, d'angle 90°, dans le sens inverse des aiguilles d'une montre, son image M' est située…",
      choices: [
        "1 carreau à gauche et 2 carreaux au-dessus de O",
        "2 carreaux à gauche et 1 carreau en dessous de O",
        "1 carreau à droite et 2 carreaux en dessous de O",
        "2 carreaux à droite et 1 carreau en dessous de O",
      ],
      answer: 0,
      explanation:
        "Pour un quart de tour dans le sens inverse des aiguilles d'une montre, le chemin (2 à droite, 1 en haut) devient (1 à gauche, 2 en haut) : ce qui allait vers la droite part vers le haut, et ce qui allait vers le haut part vers la gauche. On vérifie que la distance au centre est conservée : le chemin utilise toujours les nombres 2 et 1. Piège : la réponse « 2 à gauche, 1 en dessous » correspond au demi-tour (180°), pas au quart de tour.",
      hint: "Fais tourner le chemin « 2 à droite puis 1 en haut » d'un quart de tour vers la gauche.",
    },
  ],
};
