import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "assr1-pieton",
  subject: "assr",
  grade: "5e",
  num: 1,
  title: "Piéton : circuler et traverser",
  domain: "nombres",
  domainLabel: "Sécurité routière",
  icon: "Footprints",
  teaser: "Marcher, traverser, être vue : les bons réflexes du trajet quotidien.",
  objectives: [
    "Je sais où marcher, en ville comme à la campagne",
    "Je sais traverser au bon endroit et au bon moment",
    "Je sais me rendre visible, de jour comme de nuit",
    "Je connais les pièges du téléphone, des écouteurs et de la sortie du bus",
  ],
  lesson: [
    {
      title: "Où marcher : trottoir et accotement",
      paragraphs: [
        "En agglomération, le piéton circule sur le trottoir. C'est son espace réservé : les voitures n'ont pas le droit d'y rouler, et toi, tu n'as pas à marcher sur la chaussée quand un trottoir existe.",
        "Sur le trottoir, tu partages parfois l'espace avec des poussettes, des personnes âgées ou des enfants à vélo. Marche sans courir ni bousculer, et évite de t'attarder au bord, près de la chaussée.",
        "Quand il n'y a pas de trottoir, tu marches sur l'accotement, c'est-à-dire le bord de la route, en restant le plus loin possible des véhicules.",
      ],
      example: [
        "Sur le chemin du collège, une camionnette est garée en travers du trottoir. Plutôt que de la contourner en surgissant sur la chaussée, tu t'arrêtes, tu regardes si la voie est libre, puis tu la contournes en restant attentive.",
      ],
      tip: "Le bord du trottoir n'est pas une zone de jeu : un ballon qui roule ou une bousculade, et tu te retrouves sur la chaussée en une seconde.",
    },
    {
      title: "Traverser : le bon endroit",
      paragraphs: [
        "La règle est simple : s'il existe un passage piéton à moins de 50 mètres, tu as l'obligation de l'utiliser. 50 mètres, c'est court : à peine une demi-minute de marche.",
        "Sur le passage piéton, les conducteurs doivent te céder le passage, mais cette priorité ne te protège que si le conducteur t'a vue. Avant de t'engager, regarde à gauche, à droite, puis encore à gauche, et cherche le regard du conducteur qui approche.",
        "Traverse perpendiculairement à la chaussée, c'est-à-dire tout droit : c'est le chemin le plus court, donc le moins de temps passé exposée aux véhicules.",
      ],
      example: [
        "Tu sors de la boulangerie et ton arrêt de bus est juste en face. Le passage piéton est à 30 mètres sur ta droite : tu dois faire ce détour. Traverser en diagonale pour gagner dix secondes, c'est t'exposer bien plus longtemps.",
      ],
      tip: "Regarde à gauche d'abord : c'est de là que vient le premier véhicule qui peut te toucher.",
    },
    {
      title: "Traverser : le bon moment",
      paragraphs: [
        "Quand le passage piéton est équipé de feux, tu traverses uniquement quand la silhouette du piéton est verte. Même au vert, jette un coup d'œil : un véhicule peut griller son feu ou tourner sans t'avoir vue.",
        "Si le bonhomme passe au rouge alors que tu es déjà engagée, ne fais pas demi-tour : termine ta traversée d'un pas rapide et régulier.",
        "Ne t'engage jamais entre deux voitures à l'arrêt ou derrière un véhicule haut (bus, camionnette) : les conducteurs ne peuvent pas te voir surgir, et toi, tu ne les vois pas non plus.",
      ],
      example: [
        "Le feu piéton est vert, mais une voiture arrive vite et ne ralentit pas. Tu attends qu'elle soit passée : avoir la priorité ne sert à rien si le conducteur ne s'arrête pas.",
      ],
      tip: "Vert = « je peux traverser », pas « je peux foncer sans regarder ». La priorité se vérifie, elle ne se devine pas.",
    },
    {
      title: "Hors agglomération et de nuit",
      paragraphs: [
        "À la campagne, sans trottoir, la règle change : tu marches sur le côté gauche de la route, face aux véhicules. Ainsi, tu vois arriver les voitures qui te croisent au plus près et tu peux t'écarter si besoin.",
        "La nuit ou par mauvais temps, un piéton en vêtements sombres n'est visible qu'à une trentaine de mètres dans les phares : trop tard pour qu'une voiture s'arrête. Avec des vêtements clairs et des éléments rétroréfléchissants, tu es visible à plus de 150 mètres.",
        "En groupe, marchez en file indienne, pas de front : une rangée de trois personnes déborde sur la chaussée.",
      ],
      example: [
        "Tu rentres de chez ta grand-mère par une route de campagne à la tombée de la nuit. Tu marches à gauche, tu portes ta veste claire et tu as accroché une bande rétroréfléchissante à ton sac : les conducteurs te repèrent de loin.",
      ],
      tip: "Pour retenir le côté : à pied, à gauche, je fais FACE au danger et je le vois venir.",
    },
    {
      title: "Distracteurs et sortie de bus",
      paragraphs: [
        "Un message qui arrive, une story à regarder : les yeux sur l'écran, tu ne vois plus rien de la rue. Les écouteurs, eux, coupent le son de la circulation : tu n'entends ni le moteur, ni le klaxon, ni le vélo qui arrive. Près d'une chaussée, range le téléphone et libère au moins une oreille.",
        "À la descente du bus, le piège est connu : traverser tout de suite, devant ou derrière le bus. Le bus te cache les voitures, et il te cache aussi aux conducteurs. Attends que le bus soit reparti : la route devient entièrement visible, dans les deux sens.",
      ],
      example: [
        "Tu descends du bus et tu vois ta copine de l'autre côté de la rue. Tu lui fais signe, tu attends que le bus démarre et s'éloigne, puis tu traverses au passage piéton avec une vue dégagée.",
      ],
      tip: "Un bus à l'arrêt = un mur qui cache la route. On ne traverse jamais ce qu'on ne voit pas.",
    },
  ],
  exercises: [
    {
      id: "as1p-1",
      level: 1,
      type: "qcm",
      question: "En ville, où dois-tu marcher ?",
      choices: [
        "Sur le trottoir",
        "Sur le bord de la chaussée",
        "Sur la piste cyclable",
        "Où je veux, si je fais attention",
      ],
      answer: 0,
      explanation:
        "En agglomération, le trottoir est l'espace réservé aux piétons : c'est là que tu dois circuler dès qu'il en existe un. La chaussée est l'espace des véhicules et la piste cyclable celui des vélos : y marcher, c'est se mettre sur leur trajectoire.",
      hint: "Chaque usager a son espace : lequel est réservé aux piétons ?",
    },
    {
      id: "as1p-2",
      level: 1,
      type: "qcm",
      question:
        "Un passage piéton se trouve à 30 mètres de toi. Que dit la règle ?",
      choices: [
        "Je peux traverser où je veux, il est trop loin",
        "Je dois l'utiliser, car il est à moins de 50 mètres",
        "Je dois l'utiliser seulement s'il y a des feux",
        "Je dois l'utiliser seulement s'il y a beaucoup de circulation",
      ],
      answer: 1,
      explanation:
        "Le code de la route t'oblige à emprunter le passage piéton dès qu'il en existe un à moins de 50 mètres. C'est l'endroit où les conducteurs s'attendent à voir des piétons et doivent leur céder le passage : traverser ailleurs, c'est les surprendre.",
      hint: "Il existe une distance limite en dessous de laquelle le passage piéton est obligatoire.",
    },
    {
      id: "as1p-3",
      level: 1,
      type: "qcm",
      question:
        "Le bonhomme piéton est vert. Que fais-tu avant de t'engager ?",
      choices: [
        "Je traverse directement, j'ai la priorité",
        "Je vérifie quand même que les véhicules s'arrêtent",
        "J'attends que le bonhomme repasse au rouge",
        "Je traverse en courant pour aller plus vite",
      ],
      answer: 1,
      explanation:
        "Le feu vert piéton t'autorise à traverser, mais il ne t'assure pas que tous les conducteurs t'ont vue : l'un d'eux peut griller son feu ou tourner sans regarder. La règle de survie du piéton : vérifier avant de s'engager, même quand on a la priorité.",
      hint: "La priorité ne protège que si le conducteur t'a vue.",
    },
    {
      id: "as1p-4",
      level: 1,
      type: "truefalse",
      question:
        "À la descente du bus, il faut attendre que le bus soit reparti avant de traverser.",
      answer: true,
      explanation:
        "Vrai. Tant que le bus est à l'arrêt, il masque la route : tu ne vois pas les véhicules qui arrivent, et eux ne te voient pas surgir. Une fois le bus parti, la chaussée est visible dans les deux sens et tu peux traverser en sécurité, au passage piéton.",
      hint: "Que voit un conducteur qui double un bus à l'arrêt ?",
    },
    {
      id: "as1p-5",
      level: 2,
      type: "qcm",
      question:
        "Tu rentres à pied par une route de campagne sans trottoir. De quel côté marches-tu ?",
      choices: [
        "À droite, comme les vélos",
        "À gauche, face aux véhicules",
        "Au milieu, pour être bien visible",
        "Peu importe, du moment que je reste sur le bord",
      ],
      answer: 1,
      explanation:
        "Hors agglomération, le piéton marche à gauche de la chaussée, face aux véhicules qui arrivent. Tu vois ainsi venir les voitures qui te croisent au plus près et tu peux réagir. Dos à la circulation, tu ne sais jamais ce qui arrive derrière toi.",
      hint: "Vaut-il mieux voir les voitures arriver ou les avoir dans le dos ?",
    },
    {
      id: "as1p-6",
      level: 2,
      type: "qcm",
      question:
        "Pourquoi est-il dangereux de traverser entre deux voitures garées ?",
      choices: [
        "C'est plus long que par le passage piéton",
        "Les voitures garées peuvent démarrer",
        "Les conducteurs qui circulent ne peuvent pas me voir arriver",
        "C'est interdit uniquement la nuit",
      ],
      answer: 2,
      explanation:
        "Cachée entre deux voitures garées, tu es invisible pour les conducteurs qui circulent : tu surgis d'un coup sur la chaussée, sans leur laisser le temps de freiner. Et toi non plus, tu ne vois pas bien la route. La règle : traverser là où l'on voit et où l'on est vue.",
      hint: "Pense aux deux points de vue : le tien et celui du conducteur.",
    },
    {
      id: "as1p-7",
      level: 2,
      type: "qcm",
      question:
        "Tu marches le long d'une rue en écoutant de la musique avec tes deux écouteurs. Quel est le risque principal ?",
      choices: [
        "Abîmer mon audition",
        "Ne pas entendre les véhicules, les klaxons ou les vélos",
        "Marcher moins vite",
        "Décharger mon téléphone",
      ],
      answer: 1,
      explanation:
        "Les écouteurs coupent les sons de la circulation : le moteur qui approche, le klaxon d'alerte, la sonnette d'un vélo. Or l'ouïe est le sens qui te prévient d'un danger que tu ne vois pas encore. Près d'une chaussée, garde au moins une oreille libre et le volume bas.",
      hint: "Quel sens te prévient d'un danger qui arrive dans ton dos ?",
    },
    {
      id: "as1p-8",
      level: 2,
      type: "truefalse",
      question:
        "Si le bonhomme piéton passe au rouge pendant que je traverse, je dois faire demi-tour.",
      answer: false,
      explanation:
        "Faux. Une fois engagée, la règle est de terminer ta traversée d'un pas rapide et régulier. Faire demi-tour au milieu de la chaussée te fait rester plus longtemps dans la zone dangereuse et rend ta trajectoire imprévisible pour les conducteurs.",
      hint: "Le plus sûr, c'est de passer le moins de temps possible sur la chaussée.",
    },
    {
      id: "as1p-9",
      level: 3,
      type: "qcm",
      question:
        "Il fait nuit, il pleut, et tu marches le long d'une route. Quelle tenue te rend visible le plus tôt dans les phares d'une voiture ?",
      choices: [
        "Un manteau noir, c'est élégant",
        "Un jean et un sweat gris foncé",
        "Des vêtements clairs avec des éléments rétroréfléchissants",
        "La couleur ne change rien, les phares éclairent tout",
      ],
      answer: 2,
      explanation:
        "En vêtements sombres, un piéton n'apparaît dans les phares qu'à une trentaine de mètres : à 80 km/h, la voiture ne peut plus s'arrêter à temps. En clair avec du rétroréfléchissant, tu es visible à plus de 150 mètres : le conducteur a le temps de te voir, de ralentir et de s'écarter.",
      hint: "Compare la distance à laquelle on te voit avec la distance qu'il faut à une voiture pour s'arrêter.",
    },
    {
      id: "as1p-10",
      level: 3,
      type: "qcm",
      question:
        "Tu descends du bus et ta maison est juste en face. Le bus est encore à l'arrêt. Quel est le bon enchaînement ?",
      choices: [
        "Je passe devant le bus : le conducteur me voit, il ne démarrera pas",
        "Je passe derrière le bus : personne ne me gêne",
        "Je m'éloigne de la chaussée, j'attends le départ du bus, puis je traverse au passage piéton",
        "Je cours pour traverser avant que d'autres voitures arrivent",
      ],
      answer: 2,
      explanation:
        "Devant ou derrière le bus, c'est le même piège : le bus te cache les véhicules qui le doublent ou le croisent, et il te cache à leurs yeux. La seule situation sûre, c'est une route entièrement visible : tu t'écartes, tu laisses partir le bus, puis tu traverses au passage piéton.",
      hint: "Le danger ne vient pas du bus lui-même, mais de ce qu'il cache.",
    },
    {
      id: "as1p-11",
      level: 3,
      type: "qcm",
      question:
        "Vous rentrez à trois amies par une route de campagne sans accotement. Comment marchez-vous ?",
      choices: [
        "De front, pour discuter plus facilement",
        "En file indienne, à gauche de la chaussée",
        "En file indienne, à droite de la chaussée",
        "Deux à gauche et une à droite, pour surveiller les deux sens",
      ],
      answer: 1,
      explanation:
        "Deux règles se combinent : hors agglomération, on marche à gauche, face aux véhicules ; et en groupe, on marche en file indienne, car trois personnes de front débordent sur la chaussée. Chacune voit ainsi arriver les voitures et peut s'écarter.",
      hint: "Combine la règle du côté et celle de la place occupée sur la route.",
    },
    {
      id: "as1p-12",
      level: 3,
      type: "truefalse",
      question:
        "Sur un passage piéton sans feux, les conducteurs doivent me céder le passage : je peux donc m'engager sans regarder.",
      answer: false,
      explanation:
        "Faux. La loi oblige bien les conducteurs à céder le passage au piéton engagé ou qui manifeste l'intention de traverser. Mais une règle n'arrête pas une voiture : si le conducteur ne t'a pas vue, la priorité ne te protège pas. On regarde, on cherche le regard du conducteur, puis on s'engage.",
      hint: "Une règle protège-t-elle si l'autre ne l'applique pas ?",
    },
  ],
};
