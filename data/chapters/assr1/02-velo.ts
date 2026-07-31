import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "assr1-velo",
  subject: "assr",
  grade: "5e",
  num: 2,
  title: "À vélo",
  domain: "geometrie",
  domainLabel: "Sécurité routière",
  icon: "Bike",
  teaser: "Un vélo équipé, une cycliste visible, une trajectoire annoncée.",
  objectives: [
    "Je connais les équipements obligatoires du vélo",
    "Je sais comment m'équiper : casque, gilet, visibilité",
    "Je sais où j'ai le droit de rouler et où c'est interdit",
    "Je sais annoncer mes changements de direction et me méfier des angles morts",
  ],
  lesson: [
    {
      title: "Un vélo équipé, c'est obligatoire",
      paragraphs: [
        "Le code de la route impose des équipements sur tout vélo qui circule. Deux freins, un à l'avant et un à l'arrière, en bon état. Une sonnette dont le son porte à au moins 50 mètres, pour prévenir de ton arrivée.",
        "Pour être vue : un feu avant blanc ou jaune et un feu arrière rouge, obligatoires la nuit et quand la visibilité est mauvaise (pluie, brouillard). S'y ajoutent les catadioptres, ces petits réflecteurs qui renvoient la lumière des phares : blanc à l'avant, rouge à l'arrière, orange sur les pédales et sur les côtés (souvent dans les rayons).",
        "Un vélo mal équipé n'est pas seulement en infraction : il est invisible la nuit et incapable de s'arrêter court en cas d'urgence.",
      ],
      example: [
        "Avant de partir au collège, contrôle express : les deux freins répondent, la sonnette fonctionne, les feux s'allument, les pneus sont gonflés. Trente secondes qui peuvent tout changer.",
      ],
      tip: "Retiens les 4 familles d'équipements : Freins, Sonnette, Feux, Catadioptres.",
    },
    {
      title: "T'équiper, toi",
      paragraphs: [
        "Le casque est obligatoire pour tout enfant de moins de 12 ans, qu'il conduise le vélo ou qu'il soit passager. À 12 ans passés, il n'est plus imposé par la loi, mais il reste vivement recommandé : en cas de chute, c'est lui qui protège ton cerveau, l'organe qu'on ne répare pas.",
        "Hors agglomération, la nuit ou quand la visibilité est insuffisante, le gilet rétroréfléchissant est obligatoire pour le cycliste et son passager.",
        "Porter des écouteurs, un casque audio ou téléphoner en roulant est interdit à vélo : tu as besoin d'entendre la circulation autant que de la voir.",
      ],
      example: [
        "Ton petit frère de 9 ans t'accompagne à vélo : son casque est obligatoire, attaché. Le tien ne l'est plus, mais tu le portes quand même : une chute n'a pas d'âge.",
      ],
      tip: "Un casque ne sert que bien attaché et bien ajusté : droit sur la tête, sangle sous le menton, pas sur le front ni en arrière.",
    },
    {
      title: "Où rouler ?",
      paragraphs: [
        "À vélo, tu circules sur la chaussée, à droite, comme les autres véhicules : le vélo est un véhicule et doit respecter le code de la route (feux, stops, sens interdits).",
        "Quand une piste ou une bande cyclable existe, emprunte-la ; elle est même obligatoire lorsque le panneau rond bleu avec un vélo l'indique. Le trottoir, lui, est interdit aux cyclistes, sauf aux enfants de moins de 8 ans, à condition de rouler au pas et de ne pas gêner les piétons.",
        "Dans certaines rues à sens unique (souvent en zone 30), un double-sens cyclable autorise les vélos à remonter la rue à contresens des voitures. Un panonceau l'indique. Prudence aux intersections : certains conducteurs ne s'attendent pas à te voir arriver en face.",
      ],
      example: [
        "Sur ton trajet, une rue en sens interdit porte le panonceau « sauf vélos » : tu peux la remonter. Au croisement, tu ralentis et tu cherches le regard du conducteur qui tourne : il ne pense pas toujours à regarder de ton côté.",
      ],
      tip: "À vélo, tu n'es pas une piétonne rapide : tu es une conductrice. Les règles des véhicules s'appliquent à toi.",
    },
    {
      title: "Annoncer, anticiper, éviter les angles morts",
      paragraphs: [
        "Un vélo n'a pas de clignotants : ton bras les remplace. Avant de tourner, tends le bras du côté où tu vas, après avoir jeté un coup d'œil derrière toi pour vérifier que la voie est libre.",
        "Roule à distance des voitures garées : une portière peut s'ouvrir à tout moment. Garde environ un mètre d'écart, c'est l'espace qui te sauve.",
        "L'angle mort est la zone qu'un conducteur ne voit ni dans son pare-brise ni dans ses rétroviseurs. Autour d'un camion ou d'un bus, ces zones sont immenses : juste devant, juste derrière et le long des flancs, surtout à droite. Ne reste jamais à côté d'un camion à un feu : recule ou dépasse franchement, et place-toi là où le conducteur te voit.",
      ],
      example: [
        "Au feu rouge, un camion est arrêté et tu arrives à sa droite. Tu ne te glisses pas le long de son flanc : s'il tourne à droite au vert, il ne peut pas te voir. Tu restes derrière lui, bien visible dans ses rétroviseurs.",
      ],
      tip: "Règle simple pour les angles morts : si tu ne vois pas les rétroviseurs du camion, son conducteur ne te voit pas.",
    },
    {
      title: "Et la trottinette électrique ?",
      paragraphs: [
        "La trottinette électrique appartient à la famille des EDPM (engins de déplacement personnel motorisés). La loi fixe un âge minimum : 14 ans pour avoir le droit d'en conduire une. À 12 ans, tu n'y as donc pas encore droit, même sur un parking ou une piste cyclable.",
        "Pour les conducteurs en âge : un seul par engin (transporter un passager est interdit), circulation interdite sur les trottoirs, vitesse bridée à 25 km/h et assurance obligatoire. La nuit ou par visibilité insuffisante, le gilet rétroréfléchissant s'impose aussi.",
        "Une trottinette non motorisée, elle, se conduit comme un déplacement de piéton : sur le trottoir, à l'allure du pas.",
      ],
      example: [
        "Une amie de 13 ans te propose de monter à deux sur sa trottinette électrique. Double infraction : elle n'a pas l'âge de conduire un EDPM, et le passager y est de toute façon interdit. Tu refuses, et ce n'est pas par excès de prudence : c'est la règle.",
      ],
      tip: "EDPM : 14 ans minimum, 1 seule personne, 0 trottoir.",
    },
  ],
  exercises: [
    {
      id: "as1v-1",
      level: 1,
      type: "qcm",
      question:
        "Quel équipement du vélo est obligatoire pour prévenir les autres de ton arrivée ?",
      choices: ["Un klaxon électrique", "Une sonnette", "Un porte-bagages", "Un rétroviseur"],
      answer: 1,
      explanation:
        "La sonnette est obligatoire sur tout vélo : son signal doit s'entendre à au moins 50 mètres. Elle sert à prévenir un piéton ou un cycliste que tu approches, avant qu'il ne change de trajectoire sans t'avoir vue.",
      hint: "Cet équipement s'adresse aux oreilles des autres usagers.",
    },
    {
      id: "as1v-2",
      level: 1,
      type: "qcm",
      question: "De quelles couleurs sont les feux obligatoires d'un vélo la nuit ?",
      choices: [
        "Blanc ou jaune à l'avant, rouge à l'arrière",
        "Rouge à l'avant, blanc à l'arrière",
        "Orange à l'avant et à l'arrière",
        "Bleu à l'avant, rouge à l'arrière",
      ],
      answer: 0,
      explanation:
        "Comme sur une voiture : blanc ou jaune vers l'avant, rouge vers l'arrière. Ce code couleur permet aux autres usagers de savoir immédiatement dans quel sens tu roules : un feu rouge qui s'éloigne, un feu blanc qui arrive.",
      hint: "C'est le même code couleur que les phares et les feux arrière d'une voiture.",
    },
    {
      id: "as1v-3",
      level: 1,
      type: "qcm",
      question: "Le casque à vélo est obligatoire…",
      choices: [
        "pour tout le monde",
        "pour les moins de 12 ans, conducteur ou passager",
        "seulement la nuit",
        "seulement hors agglomération",
      ],
      answer: 1,
      explanation:
        "La loi impose le casque, attaché, à tout enfant de moins de 12 ans à vélo, qu'il pédale ou qu'il soit passager. Au-delà, il n'est plus obligatoire mais reste le meilleur réflexe : dans une chute, c'est la tête qu'il faut protéger en priorité.",
      hint: "La règle dépend de l'âge, pas du lieu ni de l'heure.",
    },
    {
      id: "as1v-4",
      level: 1,
      type: "truefalse",
      question: "À vélo, j'ai le droit de rouler sur le trottoir puisque je vais doucement.",
      answer: false,
      explanation:
        "Faux. Le trottoir est réservé aux piétons : seuls les enfants de moins de 8 ans peuvent y rouler à vélo, au pas et sans gêner. À ton âge, ta place est sur la chaussée, à droite, ou sur la piste cyclable quand il y en a une.",
      hint: "Une seule catégorie de cyclistes a droit au trottoir, et c'est une question d'âge.",
    },
    {
      id: "as1v-5",
      level: 2,
      type: "qcm",
      question: "Comment annonces-tu que tu vas tourner à gauche ?",
      choices: [
        "Je tourne d'un coup, les voitures doivent me laisser passer",
        "Je sonne deux fois",
        "Je regarde derrière moi, puis je tends le bras gauche avant de tourner",
        "Je freine fort pour prévenir",
      ],
      answer: 2,
      explanation:
        "Le bras tendu remplace le clignotant : il annonce ta direction aux véhicules qui te suivent. Mais avant de le tendre, le coup d'œil derrière toi est indispensable : il vérifie qu'aucune voiture n'est en train de te dépasser. Regarder, annoncer, puis tourner : toujours dans cet ordre.",
      hint: "Deux gestes, dans le bon ordre : l'un vérifie, l'autre annonce.",
    },
    {
      id: "as1v-6",
      level: 2,
      type: "qcm",
      question:
        "Il fait nuit et tu rentres à vélo par une route hors agglomération. Que dois-tu porter obligatoirement ?",
      choices: [
        "Un brassard fluorescent",
        "Un gilet rétroréfléchissant",
        "Des gants",
        "Rien de particulier si mes feux fonctionnent",
      ],
      answer: 1,
      explanation:
        "Hors agglomération, la nuit ou par visibilité insuffisante, le gilet rétroréfléchissant est obligatoire pour le cycliste et son éventuel passager. Les feux signalent ta position par deux points lumineux ; le gilet, lui, renvoie la lumière des phares et dessine ta silhouette entière, bien plus tôt.",
      hint: "Feux allumés ne suffisent pas : la loi ajoute un équipement sur toi.",
    },
    {
      id: "as1v-7",
      level: 2,
      type: "qcm",
      question:
        "Tu roules le long d'une file de voitures garées. Quel danger dois-tu anticiper en priorité ?",
      choices: [
        "Une portière qui s'ouvre brusquement",
        "Une voiture qui klaxonne",
        "Un feu qui passe au rouge",
        "Un piéton sur le trottoir",
      ],
      answer: 0,
      explanation:
        "Une portière s'ouvre sans prévenir, souvent sans que le conducteur ait regardé. Si tu roules collée aux voitures garées, tu la percutes ou tu fais un écart brutal vers la circulation. La parade : garder environ un mètre d'écart avec les véhicules en stationnement.",
      hint: "Le danger vient des voitures à l'arrêt, pas de celles qui roulent.",
    },
    {
      id: "as1v-8",
      level: 2,
      type: "truefalse",
      question:
        "Un double-sens cyclable m'autorise à remonter certaines rues à sens unique à contresens des voitures.",
      answer: true,
      explanation:
        "Vrai. Dans les rues concernées, un panonceau « sauf vélos » sous le sens interdit autorise les cyclistes à circuler dans les deux sens. La vigilance reste de mise aux intersections et face aux piétons qui traversent : beaucoup ne s'attendent pas à voir un vélo arriver de ce côté.",
      hint: "Cherche le panonceau qui accompagne parfois le panneau sens interdit.",
    },
    {
      id: "as1v-9",
      level: 3,
      type: "qcm",
      question:
        "Au feu rouge, un camion est arrêté avec son clignotant à droite. Tu arrives à vélo derrière lui. Où te places-tu ?",
      choices: [
        "Le long de son flanc droit, pour passer dès le vert",
        "Juste devant son pare-chocs, pour qu'il me voie",
        "Derrière lui, à distance, visible dans ses rétroviseurs",
        "Le long de son flanc gauche, entre lui et les voitures d'en face",
      ],
      answer: 2,
      explanation:
        "Le flanc droit d'un camion qui tourne à droite est l'angle mort le plus meurtrier pour les cyclistes : le conducteur ne peut pas t'y voir et ses roues arrière coupent le virage. Juste devant le pare-chocs, tu es également invisible. La seule place sûre : derrière, à distance, là où ses rétroviseurs te montrent.",
      hint: "Si tu ne vois pas ses rétroviseurs, il ne te voit pas.",
    },
    {
      id: "as1v-10",
      level: 3,
      type: "qcm",
      question:
        "Une amie de 13 ans veut t'emmener en passagère sur sa trottinette électrique. Qu'en dit la loi ?",
      choices: [
        "C'est autorisé si vous portez toutes les deux un casque",
        "C'est autorisé sur les pistes cyclables uniquement",
        "C'est doublement interdit : il faut 14 ans pour conduire un EDPM, et le passager est interdit",
        "C'est autorisé si la trottinette ne dépasse pas 25 km/h",
      ],
      answer: 2,
      explanation:
        "Deux règles sont enfreintes : l'âge minimum pour conduire une trottinette électrique est de 14 ans, et un EDPM ne transporte qu'une seule personne, jamais de passager. À deux, l'engin devient instable et le freinage s'allonge : la règle colle au danger réel.",
      hint: "Vérifie deux choses : l'âge de la conductrice et le nombre de personnes sur l'engin.",
    },
    {
      id: "as1v-11",
      level: 3,
      type: "qcm",
      question:
        "Sur ta route, un panneau rond bleu avec un vélo blanc signale une piste cyclable. Que signifie-t-il ?",
      choices: [
        "La piste est conseillée, je choisis où rouler",
        "La piste est obligatoire pour les cyclistes",
        "La piste est réservée aux vélos électriques",
        "La piste est interdite aux vélos",
      ],
      answer: 1,
      explanation:
        "Un panneau rond bleu exprime une obligation : ici, les cyclistes doivent emprunter la piste. Quand la piste n'est signalée que par un panneau carré bleu, elle est simplement conseillée. Rond = obligation, carré = indication : cette logique des formes vaut pour tous les panneaux.",
      hint: "La forme du panneau (rond ou carré) change tout son sens.",
    },
    {
      id: "as1v-12",
      level: 3,
      type: "truefalse",
      question:
        "À vélo, je peux écouter de la musique avec des écouteurs si je roule prudemment.",
      answer: false,
      explanation:
        "Faux. Le port d'écouteurs, d'oreillettes ou d'un casque audio est interdit à vélo, quelle que soit ta prudence, tout comme téléphoner en roulant. À vélo, l'ouïe complète la vue : elle te signale la voiture qui te dépasse ou le klaxon d'alerte avant même que tu les voies.",
      hint: "La règle est la même que pour les conducteurs de voiture, en plus strict.",
    },
  ],
};
