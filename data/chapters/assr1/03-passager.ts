import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "assr1-passager",
  subject: "assr",
  grade: "5e",
  num: 3,
  title: "Passager : voiture, bus, deux-roues",
  domain: "grandeurs",
  domainLabel: "Sécurité routière",
  icon: "Bus",
  teaser: "Être passagère, c'est aussi un rôle actif : ceinture, calme, bons réflexes.",
  objectives: [
    "Je sais pourquoi la ceinture est obligatoire à toutes les places",
    "Je connais les règles pour les enfants en voiture",
    "Je sais monter, voyager et descendre du bus en sécurité",
    "Je connais les obligations du passager d'un deux-roues motorisé",
  ],
  lesson: [
    {
      title: "La ceinture, à chaque trajet",
      figure: "assr-passager",
      paragraphs: [
        "La ceinture de sécurité est obligatoire pour tous les occupants d'une voiture, à l'avant comme à l'arrière, même pour un trajet de deux minutes. La règle : une place, une ceinture, une personne.",
        "Lors d'un choc à 50 km/h, un passager non attaché est projeté avec une force équivalente à une chute du troisième étage. À l'arrière, sans ceinture, tu deviens un projectile qui peut écraser les passagers avant.",
        "Le conducteur est responsable du port de la ceinture de tous ses passagers de moins de 18 ans, mais c'est d'abord ton réflexe à toi : tu t'attaches avant même que la voiture démarre.",
      ],
      example: [
        "Une amie de tes parents te dépose au collège, « juste au bout de la rue ». Tu boucles ta ceinture quand même : la plupart des accidents ont lieu près de chez soi, sur ces petits trajets où l'on croit pouvoir s'en passer.",
      ],
      tip: "La ceinture se porte à plat : sur l'épaule et les hanches, jamais sous le bras ni derrière le dos.",
    },
    {
      title: "Les enfants en voiture",
      paragraphs: [
        "La ceinture est conçue pour un corps d'adulte. Un enfant de moins de 10 ans doit voyager dans un dispositif adapté à sa taille et à son poids : siège bébé, siège enfant, puis rehausseur, en principe à l'arrière.",
        "Le rehausseur n'est pas un gadget : il remonte l'enfant pour que la ceinture passe sur l'épaule et les hanches, les parties solides du corps, et non sur le cou et le ventre, où elle blesserait en cas de choc.",
        "À ton âge, tu n'es plus concernée, mais tu peux vérifier que ton petit frère ou ta petite cousine est bien installé : c'est un vrai geste de sécurité, pas du zèle.",
      ],
      example: [
        "Ta cousine de 6 ans monte dans la voiture familiale : rehausseur à l'arrière, ceinture bien à plat sur son épaule. Tu vérifies le clic avant le départ.",
      ],
      tip: "Moins de 10 ans = dispositif adapté. Le critère qui compte pour bien attacher, c'est la taille de l'enfant, pas son envie de « faire grand ».",
    },
    {
      title: "Monter et descendre du bus",
      paragraphs: [
        "À l'arrêt de bus, tu attends sur le trottoir, en retrait de la bordure, sans bousculade : un croche-pied ou un sac qui déséquilibre, et quelqu'un tombe sur la chaussée au moment où le bus arrive.",
        "Tu montes calmement, sans te précipiter, une fois le bus complètement arrêté et les portes ouvertes. À la descente, attention à la marche et aux vélos ou trottinettes qui longent parfois le bus.",
        "Après la descente, la règle d'or du chapitre piéton s'applique : on ne traverse jamais devant ni derrière le bus. On s'écarte, on attend son départ, et on traverse quand la route est entièrement visible.",
      ],
      example: [
        "Le bus approche et des élèves se poussent pour être devant. Tu restes en retrait : mieux vaut monter trente secondes plus tard que d'être bousculée vers la chaussée au moment où le bus arrive.",
      ],
      tip: "Près d'un bus, le moment le plus dangereux n'est pas le trajet : c'est l'arrivée et la descente.",
    },
    {
      title: "Dans le bus ou le car scolaire",
      paragraphs: [
        "Pendant le trajet, tu restes assise tant qu'il y a des places, et tu attaches ta ceinture dès que le car en est équipé : c'est obligatoire. Debout dans un bus urbain, tiens-toi à une barre : un freinage brusque projette tout ce qui n'est pas tenu.",
        "Ton sac ne traîne pas dans l'allée : c'est le passage d'évacuation en cas d'urgence. Et l'on ne chahute pas, surtout pas avec le conducteur : le distraire, c'est distraire la personne qui tient la sécurité de tout le monde entre ses mains.",
        "Repère les issues de secours et le marteau brise-vitre : en cas d'évacuation, on sort calmement, sans reprendre son sac, et on s'éloigne du véhicule.",
      ],
      example: [
        "Dans le car qui vous emmène en sortie scolaire, chacun boucle sa ceinture, les sacs sont sous les sièges ou dans les porte-bagages, et l'allée reste libre. En cas de freinage d'urgence, personne ne devient un projectile.",
      ],
      tip: "Dans un car équipé de ceintures, s'attacher n'est pas un choix : c'est la même obligation qu'en voiture.",
    },
    {
      title: "Passagère d'un deux-roues motorisé",
      paragraphs: [
        "Sur un scooter ou une moto, le casque homologué et correctement attaché est obligatoire pour le conducteur comme pour le passager. Des gants certifiés sont également obligatoires pour les deux. Sans casque attaché, le véhicule peut être immobilisé.",
        "Le passager doit disposer d'une vraie place : un siège prévu pour lui et des repose-pieds. Pour rappel, conduire un cyclomoteur exige d'avoir au moins 14 ans et le permis AM (ex-BSR) : un élève de 5e n'a donc pas l'âge de conduire, seulement d'être passager bien équipé.",
        "En route, la passagère reste dans l'axe du deux-roues : elle accompagne les mouvements du conducteur sans gigoter ni se pencher du côté opposé dans les virages.",
      ],
      example: [
        "Un voisin propose de te déposer en scooter, mais il n'a qu'un casque, le sien. La réponse est simple : sans casque à ta taille, attaché, et sans gants, tu ne montes pas. Ce n'est pas négociable, même pour 500 mètres.",
      ],
      tip: "Deux-roues motorisé : pas de casque attaché, pas de gants, pas de vraie place passager ? Alors pas de trajet.",
    },
  ],
  exercises: [
    {
      id: "as1a-1",
      level: 1,
      type: "qcm",
      question: "En voiture, qui doit attacher sa ceinture ?",
      choices: [
        "Le conducteur seulement",
        "Les passagers avant seulement",
        "Tous les occupants, à l'avant comme à l'arrière",
        "Seulement sur autoroute",
      ],
      answer: 2,
      explanation:
        "La ceinture est obligatoire pour chaque occupant, à toutes les places et sur tous les trajets. En cas de choc, un passager arrière non attaché est projeté vers l'avant et peut blesser gravement les autres : s'attacher protège tout le monde, pas seulement soi.",
      hint: "Pense à ce que devient un passager arrière non attaché lors d'un choc.",
    },
    {
      id: "as1a-2",
      level: 1,
      type: "qcm",
      question:
        "Le bus arrive à l'arrêt. Où dois-tu attendre ?",
      choices: [
        "Au bord du trottoir, pour monter la première",
        "Sur la chaussée, pour faire signe au conducteur",
        "En retrait sur le trottoir, sans bousculade",
        "Derrière l'arrêt, assise par terre",
      ],
      answer: 2,
      explanation:
        "On attend en retrait de la bordure, calmement. Le danger de l'arrêt de bus, c'est la bousculade : une poussée au mauvais moment et quelqu'un bascule sur la chaussée juste quand le bus arrive. La distance avec la bordure est ta marge de sécurité.",
      hint: "Le risque principal à l'arrêt de bus, c'est de se retrouver sur la chaussée sans le vouloir.",
    },
    {
      id: "as1a-3",
      level: 1,
      type: "qcm",
      question: "Sur un scooter, le casque est obligatoire…",
      choices: [
        "pour le conducteur seulement",
        "pour le conducteur et le passager",
        "pour le passager seulement s'il a moins de 12 ans",
        "seulement hors agglomération",
      ],
      answer: 1,
      explanation:
        "Sur un deux-roues motorisé, le casque homologué et attaché est obligatoire pour tous : conducteur et passager, en ville comme à la campagne. En cas de chute, la tête touche le sol dans la majorité des accidents de deux-roues : le casque est l'équipement vital.",
      hint: "Sur un deux-roues motorisé, la règle ne fait aucune exception de place ni de lieu.",
    },
    {
      id: "as1a-4",
      level: 1,
      type: "truefalse",
      question:
        "Pour un trajet très court, je peux me passer de ceinture.",
      answer: false,
      explanation:
        "Faux. La ceinture est obligatoire dès que la voiture roule, quelle que soit la distance. Et le raisonnement « c'est tout près » est un piège : une grande partie des accidents se produit justement près du domicile, sur ces trajets courts que l'on croit sans risque.",
      hint: "Où se produisent la plupart des accidents : loin de chez soi ou tout près ?",
    },
    {
      id: "as1a-5",
      level: 2,
      type: "qcm",
      question:
        "Pourquoi un enfant de 6 ans doit-il voyager sur un rehausseur ?",
      choices: [
        "Pour mieux voir le paysage",
        "Pour que la ceinture passe sur l'épaule et les hanches, pas sur le cou et le ventre",
        "Parce que les sièges arrière sont trop froids",
        "Pour l'empêcher de détacher sa ceinture",
      ],
      answer: 1,
      explanation:
        "La ceinture est dessinée pour un corps d'adulte. Sans rehausseur, elle barre le cou et le ventre d'un enfant : en cas de choc, c'est là qu'elle blesse. Le rehausseur remonte l'enfant pour que la ceinture appuie sur les parties solides du corps, épaule et bassin. La règle : dispositif adapté jusqu'à 10 ans.",
      hint: "Regarde où passe la ceinture sur un petit corps sans rehausseur.",
    },
    {
      id: "as1a-6",
      level: 2,
      type: "qcm",
      question:
        "Dans le car scolaire équipé de ceintures, que dit la règle ?",
      choices: [
        "La ceinture est facultative dans les cars",
        "Je dois l'attacher, comme en voiture",
        "Seuls les élèves de moins de 10 ans doivent s'attacher",
        "Je l'attache uniquement sur autoroute",
      ],
      answer: 1,
      explanation:
        "Quand un car est équipé de ceintures, les passagers ont l'obligation de les attacher, exactement comme en voiture. Un car freine rarement, mais quand il freine fort, tout ce qui n'est pas attaché est projeté vers l'avant, sur plusieurs mètres.",
      hint: "Un siège de car avec une ceinture suit la même règle qu'un siège de voiture.",
    },
    {
      id: "as1a-7",
      level: 2,
      type: "qcm",
      question:
        "Pendant le trajet en bus, pourquoi ne faut-il pas chahuter près du conducteur ?",
      choices: [
        "Parce qu'il pourrait vous punir",
        "Parce que le distraire met en danger tous les passagers",
        "Parce que cela abîme les sièges",
        "Parce que c'est mal élevé, sans plus",
      ],
      answer: 1,
      explanation:
        "Le conducteur surveille en permanence la route, ses rétroviseurs et ses passagers. Un chahut qui capte son attention, c'est une seconde de conduite en moins, et à 50 km/h, une seconde représente 14 mètres parcourus sans regarder. Le calme à bord est une règle de sécurité, pas de politesse.",
      hint: "Que se passe-t-il sur la route pendant la seconde où le conducteur tourne la tête ?",
    },
    {
      id: "as1a-8",
      level: 2,
      type: "truefalse",
      question:
        "À la descente du bus, le plus sûr est de passer devant le bus pour que le conducteur me voie traverser.",
      answer: false,
      explanation:
        "Faux. Même si le conducteur du bus te voit, les voitures qui doublent ou croisent le bus, elles, ne te voient pas : le bus te cache complètement. On s'écarte, on attend le départ du bus, et on traverse au passage piéton quand toute la route est visible.",
      hint: "Le conducteur du bus n'est pas le seul conducteur sur la route.",
    },
    {
      id: "as1a-9",
      level: 3,
      type: "qcm",
      question:
        "Un choc à 50 km/h sans ceinture équivaut à peu près à…",
      choices: [
        "une chute de sa propre hauteur",
        "une chute du premier étage",
        "une chute du troisième étage",
        "un simple coup de frein brutal",
      ],
      answer: 2,
      explanation:
        "À 50 km/h, un choc contre un obstacle projette les occupants comme une chute d'environ 10 mètres, soit un troisième étage. Personne ne se retient à la force des bras dans ces conditions : seule la ceinture retient le corps. C'est pour cela qu'elle est obligatoire même en ville, où l'on roule justement à 50 km/h.",
      hint: "50 km/h correspond à une chute d'environ 10 mètres.",
    },
    {
      id: "as1a-10",
      level: 3,
      type: "qcm",
      question:
        "Un voisin de 16 ans te propose de monter derrière lui en scooter. Il te tend un casque, mais il n'y a ni repose-pieds ni siège passager. Que fais-tu ?",
      choices: [
        "Je monte, l'essentiel est d'avoir un casque",
        "Je monte, mais je lui demande de rouler doucement",
        "Je refuse : sans siège passager et repose-pieds, je n'ai pas le droit de monter",
        "Je monte en amazone, c'est plus stable",
      ],
      answer: 2,
      explanation:
        "Le casque est nécessaire mais pas suffisant : le passager d'un deux-roues doit disposer d'un siège prévu pour lui et de repose-pieds, et porter des gants certifiés. Sans ces équipements, tu n'as ni le droit ni la stabilité pour monter : les pieds dans le vide, tu déséquilibres l'engin au premier virage.",
      hint: "Compte les équipements obligatoires du passager : il n'y a pas que le casque.",
    },
    {
      id: "as1a-11",
      level: 3,
      type: "qcm",
      question:
        "Le car freine brutalement. Ton sac était posé dans l'allée centrale. Que risque-t-il de se passer ?",
      choices: [
        "Rien, un sac est trop léger pour bouger",
        "Il glisse vers l'avant, peut blesser quelqu'un et bloquer l'évacuation",
        "Il protège les passagers en amortissant le choc",
        "Il déclenche l'ouverture des portes",
      ],
      answer: 1,
      explanation:
        "Lors d'un freinage brutal, tout objet libre continue sa course vers l'avant : un sac de plusieurs kilos devient un projectile. Et l'allée centrale est le chemin d'évacuation du car : un sac qui l'encombre ralentit la sortie de tous en cas d'urgence. Sa place : sous le siège ou dans le porte-bagages.",
      hint: "Deux problèmes en un : pendant le freinage, puis pendant une éventuelle évacuation.",
    },
    {
      id: "as1a-12",
      level: 3,
      type: "truefalse",
      question:
        "Le conducteur est responsable du port de la ceinture de ses passagers de moins de 18 ans.",
      answer: true,
      explanation:
        "Vrai. La loi rend le conducteur responsable de l'attache des passagers mineurs : c'est lui qui est sanctionné si un enfant n'est pas attaché ou mal installé. Mais dans la vraie vie, la sécurité ne se délègue pas : c'est ton réflexe de boucler ta ceinture sans qu'on ait à te le demander.",
      hint: "Pour les mineurs, la loi désigne un responsable dans la voiture.",
    },
  ],
  videos: [
    {
      title: "Le meilleur du Monde de Jamy - Crash test : attachez vos ceintures !",
      youtubeId: "CkYdfu-Z4NE",
      channel: "Le Monde De Jamy - France Télévisions",
    },
  ],
};
