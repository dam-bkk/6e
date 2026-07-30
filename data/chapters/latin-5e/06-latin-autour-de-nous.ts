import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "lat5-latin-autour-de-nous",
  subject: "latin",
  grade: "5e",
  num: 6,
  title: "Le latin autour de nous",
  domain: "donnees",
  domainLabel: "Latin",
  icon: "Search",
  teaser: "Étymologie, devises, chiffres romains : pars à la chasse au latin caché.",
  objectives: [
    "Je sais retrouver le radical latin caché dans des mots français",
    "Je sais ce qu'est un doublet (hôpital/hôtel)",
    "Je connais des locutions latines vivantes : carpe diem, veni vidi vici…",
    "Je sais lire et écrire les chiffres romains, pièges compris (IV, IX, XL)",
    "Je sais repérer le latin des inscriptions et des devises",
  ],
  lesson: [
    {
      title: "L'étymologie : la carte d'identité des mots",
      paragraphs: [
        "L'étymologie, c'est la science de l'origine des mots. Connaître le radical latin d'un mot, c'est posséder une clé qui ouvre des dizaines de mots français d'un coup !",
        "Exemples : aqua (l'eau) se cache dans aquarium, aquatique, aqueduc ; terra (la terre) dans terrain, territoire, atterrir, enterrer ; schola (l'école) dans scolaire, scolarité. Ajoute liber (le livre) → librairie ; mare (la mer) → marin, maritime ; nox, noctis (la nuit) → nocturne ; caput, capitis (la tête) → capitale, capitaine.",
        "L'étymologie est aussi une alliée en orthographe : « terre » prend deux r comme terra, et « temps » garde un p muet en souvenir de tempus. Quand tu hésites, le latin vole à ton secours.",
      ],
      example: [
        "aqua → aquarium, aquatique, aqueduc",
        "terra → terrain, territoire, atterrir",
        "schola → scolaire ; nox → nocturne ; caput → capitaine",
      ],
      tip: "Devant un mot savant inconnu, découpe-le et cherche le radical latin : un « aqueduc » ? aqua (eau) + ducere (conduire) = qui conduit l'eau. Élémentaire !",
    },
    {
      title: "Les doublets : deux mots pour un seul ancêtre",
      paragraphs: [
        "Parfois, un même mot latin a donné DEUX mots français : c'est ce qu'on appelle un doublet. Comment est-ce possible ? Le premier mot a voyagé par la voie populaire : transmis de bouche en bouche depuis les Gaulois, il s'est usé et transformé. Le second est arrivé par la voie savante : recopié directement du latin par les lettrés du Moyen Âge, il est resté proche de l'original.",
        "Le champion des doublets : hospitalem a donné « hôtel » (voie populaire, très transformé) et « hôpital » (voie savante, proche du latin). Même origine, deux métiers différents !",
        "Autres beaux doublets : fragilem → « frêle » (populaire) et « fragile » (savant) ; auscultare → « écouter » et « ausculter » ; capitalem → « cheptel » et « capital ». À chaque fois, le mot populaire est court et usé, le mot savant est long et fidèle au latin.",
      ],
      example: [
        "hospitalem → hôtel (populaire) / hôpital (savant)",
        "fragilem → frêle (populaire) / fragile (savant)",
        "auscultare → écouter (populaire) / ausculter (savant)",
      ],
      tip: "Dans un doublet, le mot le plus proche du latin est toujours le mot savant : « fragile » ressemble à fragilem, « frêle » a été raboté par des siècles d'usage oral.",
    },
    {
      title: "Des locutions latines bien vivantes",
      paragraphs: [
        "Le français adore citer le latin ! Carpe diem, « cueille le jour » : ce conseil du poète Horace invite à profiter du moment présent. Alea jacta est, « les dés sont jetés » : mots attribués à Jules César franchissant le Rubicon en 49 av. J.-C., quand il n'était plus possible de reculer. Veni, vidi, vici, « je suis venu, j'ai vu, j'ai vaincu » : le message éclair de César après sa victoire ultra-rapide à Zéla, en 47 av. J.-C.",
        "D'autres s'emploient tous les jours sans qu'on y pense : ad hoc (fait exprès pour cela), a priori (au premier abord), grosso modo (en gros), in extremis (au tout dernier moment), illico (sur-le-champ), vice versa (inversement), idem (la même chose).",
        "Utiliser ces expressions à bon escient, c'est montrer que tu comprends vraiment ce qu'elles disent : voilà un savoir qui impressionne… et qui sert !",
      ],
      example: [
        "carpe diem = « cueille le jour » : profite du présent (Horace)",
        "alea jacta est = « les dés sont jetés » : plus moyen de reculer (César, 49 av. J.-C.)",
        "veni, vidi, vici = « je suis venu, j'ai vu, j'ai vaincu » (César, 47 av. J.-C.)",
        "in extremis = au tout dernier moment ; idem = pareil",
      ],
      tip: "Veni, vidi, vici : trois verbes, trois v, dans l'ordre de l'action : j'arrive, j'observe, je gagne. Impossible à mélanger !",
    },
    {
      title: "Les chiffres romains : règles et pièges",
      figure: "lat-chiffres-romains",
      paragraphs: [
        "Sept lettres suffisent aux Romains pour écrire tous les nombres : I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
        "Règle de base : on additionne les valeurs de gauche à droite (VI = 5 + 1 = 6 ; XV = 15 ; MMXXVI = 2026). Mais attention au piège : quand un chiffre plus petit est placé AVANT un plus grand, on le soustrait ! IV = 5 − 1 = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.",
        "Deux garde-fous : on ne répète jamais une lettre plus de trois fois (4 s'écrit IV, pas IIII) et on ne soustrait qu'un seul chiffre à la fois. Dernier détail qui change tout : les Romains n'avaient pas de zéro ! Tu croises encore ces chiffres sur les horloges, les siècles (le XXIe siècle), les rois (Louis XIV) et les génériques de films.",
      ],
      example: [
        "XVII = 10 + 5 + 1 + 1 = 17",
        "IX = 10 − 1 = 9, mais XI = 10 + 1 = 11 : l'ordre change tout !",
        "MCMXCIX = 1000 + 900 + 90 + 9 = 1999",
        "Louis XIV = Louis 14 ; XXIe siècle = 21e siècle",
      ],
      tip: "Petit chiffre AVANT un grand = on enlève ; petit chiffre APRÈS un grand = on ajoute. IV = 4 mais VI = 6. Vérifie toujours le sens de lecture !",
    },
    {
      title: "Inscriptions et devises : le latin grave dans la pierre",
      paragraphs: [
        "Depuis les Romains, quand on veut écrire quelque chose d'important « pour toujours », on l'écrit en latin. Les monuments, les mairies, les universités, les pièces de monnaie portent des inscriptions et des devises latines.",
        "Quelques célèbres : E pluribus unum, « de plusieurs, un seul », devise inscrite sur le sceau des États-Unis (plusieurs États, une seule nation). Fluctuat nec mergitur, « il est battu par les flots mais ne sombre pas » : la fière devise de la ville de Paris, dont l'emblème est un navire.",
        "Le latin reste aussi la langue internationale de la science : les espèces animales et végétales portent des noms latins (l'être humain est Homo sapiens, « l'homme sage »), et la médecine comme le droit regorgent de termes latins. Deux mille ans après, le latin grave, nomme et classe toujours notre monde. Il est vraiment partout : la boucle est bouclée !",
      ],
      example: [
        "E pluribus unum = « de plusieurs, un seul » (devise des États-Unis)",
        "Fluctuat nec mergitur = « battu par les flots, il ne sombre pas » (devise de Paris)",
        "Homo sapiens = « l'homme sage » : c'est toi !",
      ],
      tip: "Quand tu croises une inscription en majuscules avec des V à la place des U, tu sais désormais la déchiffrer : lis le V « ou », prononce tous les sons, et cherche les mots transparents.",
    },
  ],
  exercises: [
    {
      id: "l5aut-1",
      level: 1,
      type: "qcm",
      question: "Quel radical latin se cache dans les mots « aquarium », « aquatique » et « aqueduc » ?",
      choices: ["terra, la terre", "aqua, l'eau", "schola, l'école", "mare, la mer"],
      answer: 1,
      explanation:
        "Ces trois mots viennent de aqua, « l'eau » : l'aquarium contient de l'eau, un animal aquatique vit dans l'eau, et l'aqueduc conduit l'eau (aqua + ducere, conduire).",
      hint: "Que trouve-t-on dans un aquarium ?",
    },
    {
      id: "l5aut-2",
      level: 1,
      type: "qcm",
      question: "Que signifie la locution latine carpe diem, tirée du poète Horace ?",
      choices: [
        "« les dés sont jetés »",
        "« cueille le jour » : profite du présent",
        "« je suis venu, j'ai vu, j'ai vaincu »",
        "« au tout dernier moment »",
      ],
      answer: 1,
      explanation:
        "Carpe diem signifie littéralement « cueille le jour » : le poète Horace invite à profiter du moment présent sans trop s'inquiéter du lendemain. « Les dés sont jetés » traduit alea jacta est, et « je suis venu, j'ai vu, j'ai vaincu » traduit veni, vidi, vici.",
      hint: "On cueille une fleur… ou une journée.",
    },
    {
      id: "l5aut-3",
      level: 1,
      type: "truefalse",
      question: "En chiffres romains, IV s'écrit avec un I avant le V parce qu'on soustrait : IV = 4.",
      answer: true,
      explanation:
        "Vrai ! Quand un chiffre plus petit est placé avant un plus grand, on le soustrait : IV = 5 − 1 = 4. Placé après, on l'ajoute : VI = 5 + 1 = 6. Cette règle vaut aussi pour IX (9), XL (40), XC (90), CD (400) et CM (900).",
    },
    {
      id: "l5aut-4",
      level: 1,
      type: "input",
      question: "Écris le nombre 17 en chiffres romains.",
      answer: "xvii",
      accept: ["XVII"],
      explanation:
        "17 = 10 + 5 + 1 + 1 : on écrit X (10), puis V (5), puis II (2), soit XVII. Ici, tout s'additionne car les valeurs vont en décroissant de gauche à droite.",
      hint: "10 + 5 + 1 + 1.",
    },
    {
      id: "l5aut-5",
      level: 2,
      type: "qcm",
      question: "« Hôtel » et « hôpital » viennent du même mot latin hospitalem. Comment appelle-t-on ce phénomène ?",
      choices: ["un doublet", "un synonyme", "un homophone", "une déclinaison"],
      answer: 0,
      explanation:
        "C'est un doublet : un même mot latin a donné deux mots français. « Hôtel » est arrivé par la voie populaire (transmis oralement et transformé au fil des siècles), « hôpital » par la voie savante (recopié directement du latin par les lettrés). Autres doublets : frêle/fragile, écouter/ausculter.",
      hint: "Deux mots issus d'un seul : le nom du phénomène évoque une paire.",
    },
    {
      id: "l5aut-6",
      level: 2,
      type: "qcm",
      question: "Dans quelle situation Jules César aurait-il prononcé alea jacta est (« les dés sont jetés ») ?",
      choices: [
        "en franchissant le Rubicon en 49 av. J.-C.",
        "après sa victoire éclair à Zéla",
        "en fondant la ville de Rome",
        "en jouant aux dés aux thermes",
      ],
      answer: 0,
      explanation:
        "César aurait prononcé ces mots en 49 av. J.-C. en franchissant le Rubicon, la petite rivière qu'un général en armes n'avait pas le droit de traverser avec ses troupes : décision irréversible, comme des dés déjà lancés. Après Zéla (47 av. J.-C.), il a envoyé un autre message resté célèbre : veni, vidi, vici.",
      hint: "Il s'agit du franchissement interdit d'une rivière.",
    },
    {
      id: "l5aut-7",
      level: 2,
      type: "input",
      question: "Écris en chiffres romains le nombre 40 (attention au piège de la soustraction !).",
      answer: "xl",
      accept: ["XL"],
      explanation:
        "40 s'écrit XL : X (10) placé avant L (50) se soustrait, donc 50 − 10 = 40. On n'écrit jamais XXXX : une lettre ne se répète pas plus de trois fois. Même logique que IV (4) et IX (9).",
      hint: "50 moins 10 : le petit se place avant le grand.",
    },
    {
      id: "l5aut-8",
      level: 2,
      type: "truefalse",
      question: "Dans le doublet frêle/fragile, c'est « frêle » qui est le mot savant, le plus proche du latin fragilem.",
      answer: false,
      explanation:
        "Faux, c'est l'inverse ! « Fragile » est le mot savant : recopié directement sur fragilem, il lui ressemble beaucoup. « Frêle » est le mot populaire, transformé et raccourci par des siècles de transmission orale. Dans un doublet, le mot le plus proche du latin est toujours le mot savant.",
      hint: "Compare les deux mots à fragilem : lequel lui ressemble le plus ?",
    },
    {
      id: "l5aut-9",
      level: 3,
      type: "qcm",
      question: "Que signifie E pluribus unum, la devise inscrite sur le sceau des États-Unis ?",
      choices: [
        "« de plusieurs, un seul »",
        "« battu par les flots, il ne sombre pas »",
        "« la liberté ou la mort »",
        "« cueille le jour »",
      ],
      answer: 0,
      explanation:
        "E pluribus unum signifie « de plusieurs, un seul » : plusieurs États unis en une seule nation. « Battu par les flots, il ne sombre pas » traduit Fluctuat nec mergitur, la devise de Paris, dont l'emblème est un navire.",
      hint: "Pense à la construction des États-Unis : plusieurs États…",
    },
    {
      id: "l5aut-10",
      level: 3,
      type: "input",
      question: "Convertis en chiffres arabes le nombre romain MCMXCIX.",
      answer: "1999",
      explanation:
        "Découpe le nombre : M = 1000, CM = 1000 − 100 = 900, XC = 100 − 10 = 90, IX = 10 − 1 = 9. Total : 1000 + 900 + 90 + 9 = 1999. Trois soustractions dans un seul nombre : c'est le grand classique des pièges !",
      hint: "Découpe en M / CM / XC / IX et additionne.",
    },
    {
      id: "l5aut-11",
      level: 3,
      type: "input",
      question: "Le nom scientifique de l'être humain est Homo sapiens. Que signifie sapiens en français ? (un adjectif)",
      answer: "sage",
      accept: ["l'homme sage", "savant", "intelligent"],
      explanation:
        "Homo sapiens signifie « l'homme sage » (ou « savant ») : sapiens veut dire « sage, qui sait ». Le latin est resté la langue internationale de la science : toutes les espèces animales et végétales portent un nom latin, compris par les chercheurs du monde entier.",
      hint: "La même racine se trouve dans « savoir ».",
    },
    {
      id: "l5aut-12",
      level: 3,
      type: "qcm",
      question: "Un élève écrit le nombre 9 en chiffres romains : VIIII. Qu'en penses-tu ?",
      choices: [
        "C'est faux : on écrit IX, car une lettre ne se répète pas plus de trois fois",
        "C'est correct : VIIII = 5 + 4 = 9",
        "C'est faux : 9 s'écrit XI",
        "C'est correct, mais seulement sur les horloges",
      ],
      answer: 0,
      explanation:
        "9 s'écrit IX (10 − 1) : la règle interdit de répéter une lettre plus de trois fois, donc VIIII est incorrect. Attention aussi à ne pas confondre IX (9, on soustrait) et XI (11, on additionne) : le sens de lecture change tout !",
      hint: "Combien de fois au maximum peut-on répéter une même lettre ?",
    },
  ],
  videos: [
    {
      title: "10 expressions latines très utilisées en français",
      youtubeId: "LpAOJMYEOsM",
      channel: "podcast francais facile",
    },
  ],
};
