import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-accords",
  subject: "francais",
  num: 6,
  title: "Les accords",
  domain: "grandeurs",
  domainLabel: "Orthographe",
  icon: "Link2",
  teaser: "Sujet-verbe, groupe nominal, participe passé : fais chanter les accords juste.",
  objectives: [
    "Je sais accorder le verbe avec son sujet, même inversé ou éloigné",
    "Je sais accorder le déterminant, le nom et l'adjectif dans le groupe nominal",
    "Je connais les pluriels particuliers en -aux, -eux et -oux",
    "Je sais accorder le participe passé avec être, et ne pas l'accorder avec avoir",
  ],
  lesson: [
    {
      title: "L'accord sujet-verbe",
      paragraphs: [
        "Le verbe s'accorde toujours avec son sujet, en personne et en nombre : « Le chien aboie » mais « Les chiens aboient ».",
        "Quand il y a plusieurs sujets, le verbe se met au pluriel : « Pierre et Marie arrivent. » Et si les sujets sont « toi et moi », le verbe se met à la 1re personne du pluriel : « Toi et moi partons demain » (toi et moi = nous).",
      ],
      example: [
        "« Mon frère joue au tennis. » → un seul sujet, verbe au singulier.",
        "« Mon frère et ma sœur jouent au tennis. » → deux sujets, verbe au pluriel.",
      ],
      tip: "Avant d'écrire un verbe, pose systématiquement la question « Qui est-ce qui… ? ». La réponse te donne le sujet, donc l'accord.",
    },
    {
      title: "Sujet inversé, sujet éloigné : les pièges",
      paragraphs: [
        "Le sujet n'est pas toujours juste avant le verbe ! Il peut être inversé (placé après) : « Dans le ciel volent les hirondelles. » C'est bien « les hirondelles » qui volent : verbe au pluriel.",
        "Le sujet peut aussi être éloigné du verbe par un complément : « Le chien des voisins aboie. » Qui est-ce qui aboie ? Le chien (singulier), pas les voisins ! Ne te laisse pas piéger par le nom le plus proche du verbe.",
      ],
      example: [
        "« Le paquet de bonbons coûte deux euros. » → c'est le paquet qui coûte, pas les bonbons.",
        "« Sous les feuilles se cachent des champignons. » → sujet inversé : des champignons.",
      ],
      tip: "Le nom placé juste avant le verbe n'est pas forcément le sujet. Seule la question « Qui est-ce qui… ? » te donne la bonne réponse.",
    },
    {
      title: "Les accords dans le groupe nominal",
      figure: "fr-accord-gn",
      paragraphs: [
        "Dans le groupe nominal, le déterminant et l'adjectif s'accordent en genre et en nombre avec le nom : « une grande maison blanche », « de grands jardins fleuris ».",
        "Le pluriel se marque en général par un s, mais certains noms font autrement : les noms en -al font -aux (un cheval → des chevaux, un journal → des journaux) ; les noms en -eau et -eu prennent un x (des gâteaux, des jeux) ; et sept noms en -ou prennent un x : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.",
      ],
      example: [
        "un journal régional → des journaux régionaux",
        "un bijou, des bijoux MAIS un trou, des trous (avec un s).",
      ],
      tip: "Récite la liste magique des sept -oux : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux. Tous les autres noms en -ou prennent un s.",
    },
    {
      title: "L'adjectif attribut s'accorde aussi",
      paragraphs: [
        "Même séparé du nom par le verbe être (ou sembler, paraître, devenir…), l'adjectif attribut s'accorde avec le sujet : « Cette histoire est passionnante », « Les rues sont désertes ».",
        "La distance ne supprime pas l'accord ! « Les joueuses de l'équipe semblent très motivées » : « motivées » s'accorde avec « les joueuses » (féminin pluriel).",
      ],
      example: [
        "« Le ciel est gris. » → masculin singulier.",
        "« Les montagnes sont grises. » → féminin pluriel : l'attribut suit le sujet.",
      ],
      tip: "Attribut = pont entre le sujet et l'adjectif. Trouve le sujet, et l'accord suit : sujet féminin pluriel → attribut féminin pluriel.",
    },
    {
      title: "Le participe passé : être ou avoir, deux règles opposées",
      paragraphs: [
        "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet : « Elle est partie », « Ils sont arrivés », « Elles sont venues ».",
        "Avec l'auxiliaire avoir, le participe passé ne s'accorde PAS avec le sujet : « Elle a mangé », « Ils ont fini », « Elles ont chanté ». Même si le sujet est féminin ou pluriel, le participe reste invariable.",
      ],
      example: [
        "« Les filles sont rentrées tôt. » → être : accord avec le sujet (féminin pluriel).",
        "« Les filles ont rentré les vélos. » → avoir : pas d'accord avec le sujet.",
      ],
      tip: "Mémorise le duo : ÊTRE s'accorde avec le sujet, AVOIR ne s'accorde pas avec le sujet. Repère d'abord l'auxiliaire, la règle en découle.",
    },
  ],
  exercises: [
    {
      id: "facc-1",
      level: 1,
      type: "qcm",
      question: "Complète : « Les chiens ... toute la nuit. »",
      choices: ["aboie", "aboient", "aboies", "aboyent"],
      answer: 1,
      explanation:
        "Le sujet « les chiens » est au pluriel : le verbe se met au pluriel → aboient. La terminaison du pluriel de la 3e personne est -ent (elle ne s'entend pas, mais elle s'écrit !). « Aboyent » n'existe pas : le y devient i devant un e muet.",
      hint: "Qui est-ce qui aboie ? Un ou plusieurs chiens ?",
    },
    {
      id: "facc-2",
      level: 1,
      type: "qcm",
      question: "Quel est le pluriel de « un cheval » ?",
      choices: ["des chevals", "des chevaux", "des chevaus", "des chevault"],
      answer: 1,
      explanation:
        "Les noms en -al font leur pluriel en -aux : un cheval → des chevaux, un journal → des journaux, un animal → des animaux. « Chevals » est le piège classique. (Il existe quelques exceptions comme des bals ou des carnavals, que tu croiseras plus tard.)",
      hint: "Les noms en -al changent de terminaison au pluriel.",
    },
    {
      id: "facc-3",
      level: 1,
      type: "input",
      question: "Accorde l'adjectif : « une histoire (amusant) ». Écris l'adjectif accordé.",
      answer: "amusante",
      accept: ["une histoire amusante"],
      explanation:
        "« Histoire » est un nom féminin singulier : l'adjectif s'accorde → amusante, avec un e final. Dans le groupe nominal, l'adjectif prend toujours le genre et le nombre du nom qu'il précise.",
      hint: "« Histoire » est un nom féminin.",
    },
    {
      id: "facc-4",
      level: 1,
      type: "truefalse",
      question: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet.",
      answer: true,
      explanation:
        "Vrai ! Avec être, le participe passé s'accorde en genre et en nombre avec le sujet : il est parti, elle est partie, ils sont partis, elles sont parties. C'est avec l'auxiliaire avoir que le participe ne s'accorde pas avec le sujet.",
    },
    {
      id: "facc-5",
      level: 2,
      type: "qcm",
      question: "Complète : « Le chien des voisins ... chaque soir. »",
      choices: ["aboient", "aboie", "aboies", "aboyons"],
      answer: 1,
      explanation:
        "Qui est-ce qui aboie ? Le chien (singulier), pas les voisins ! « Des voisins » est un complément du nom qui éloigne le sujet du verbe : c'est le piège du sujet éloigné. Le verbe s'accorde avec « le chien » → aboie.",
      hint: "Ce ne sont pas les voisins qui aboient…",
    },
    {
      id: "facc-6",
      level: 2,
      type: "qcm",
      question: "Complète : « Elles sont ... en avance. » (verbe partir)",
      choices: ["parti", "partie", "partis", "parties"],
      answer: 3,
      explanation:
        "Auxiliaire être → le participe s'accorde avec le sujet « elles » : féminin pluriel → parties, avec -es. Vérifie toujours les deux marques : le e du féminin ET le s du pluriel.",
      hint: "« Elles » : quel genre, quel nombre ?",
    },
    {
      id: "facc-7",
      level: 2,
      type: "input",
      question: "Quel est le pluriel du nom « bijou » ? (avec ou sans « des »)",
      answer: "bijoux",
      accept: ["des bijoux"],
      explanation:
        "« Bijou » fait partie des sept noms en -ou qui prennent un x au pluriel : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux. Tous les autres noms en -ou prennent un s (des trous, des clous).",
      hint: "Ce nom fait partie d'une liste de sept exceptions.",
    },
    {
      id: "facc-8",
      level: 2,
      type: "truefalse",
      question: "La phrase « Elles ont mangées une pomme. » est correctement accordée.",
      answer: false,
      explanation:
        "Faux ! Avec l'auxiliaire avoir, le participe passé ne s'accorde pas avec le sujet : il faut écrire « Elles ont mangé une pomme ». Le piège consiste à accorder avec « elles » comme on le ferait avec être. Retiens : avoir → pas d'accord avec le sujet.",
    },
    {
      id: "facc-9",
      level: 3,
      type: "qcm",
      question: "Complète : « Dans le ciel ... les hirondelles. »",
      choices: ["vole", "volent", "voles", "volez"],
      answer: 1,
      explanation:
        "Qui est-ce qui vole ? Les hirondelles ! Le sujet est inversé : il est placé après le verbe. « Dans le ciel » n'est qu'un complément circonstanciel de lieu, il ne commande aucun accord. Sujet pluriel → volent.",
      hint: "Le sujet est placé après le verbe.",
    },
    {
      id: "facc-10",
      level: 3,
      type: "qcm",
      question: "Complète : « Pierre et Marie sont ... ce matin. » (verbe arriver)",
      choices: ["arrivé", "arrivée", "arrivés", "arrivées"],
      answer: 2,
      explanation:
        "Le sujet est double : Pierre (masculin) + Marie (féminin). Quand les genres sont mélangés, l'accord se fait au masculin pluriel → arrivés. Avec être, le participe s'accorde toujours avec le sujet, ici masculin pluriel.",
      hint: "Masculin + féminin : quel genre l'emporte au pluriel ?",
    },
    {
      id: "facc-11",
      level: 3,
      type: "input",
      question: "Quel est le pluriel du nom « pneu » ? (avec ou sans « des »)",
      answer: "pneus",
      accept: ["des pneus"],
      explanation:
        "Piège ! Les noms en -eu prennent normalement un x (des jeux, des cheveux)… mais « pneu » est une exception : des pneus, avec un s (comme « des bleus »). Les listes d'exceptions se travaillent dans les deux sens : connaître la règle ET ses contre-exemples.",
      hint: "C'est une exception à la règle des noms en -eu.",
    },
    {
      id: "facc-12",
      level: 3,
      type: "truefalse",
      question: "Dans « Toi et moi partons demain. », le verbe « partons » est correctement accordé.",
      answer: true,
      explanation:
        "Vrai ! « Toi et moi » équivaut à « nous » : le verbe se met à la 1re personne du pluriel → partons. Règle des sujets multiples : dès que « moi » fait partie du sujet, l'accord se fait avec nous ; « toi et lui » donnerait « vous partez ».",
      hint: "Remplace « toi et moi » par un pronom personnel.",
    },
  ],
};
