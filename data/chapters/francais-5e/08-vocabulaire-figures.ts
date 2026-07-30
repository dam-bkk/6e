import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-vocabulaire-figures",
  subject: "francais",
  grade: "5e",
  num: 8,
  title: "Vocabulaire et figures de style",
  domain: "donnees",
  domainLabel: "Vocabulaire",
  icon: "Wand2",
  teaser: "Racines latines, champs lexicaux et l'art des images en littérature.",
  objectives: [
    "Je sais utiliser les racines latines et grecques pour deviner le sens d'un mot",
    "Je sais repérer et construire un champ lexical",
    "Je sais distinguer mot générique et mots spécifiques",
    "Je sais reconnaître comparaison, métaphore, personnification, énumération et hyperbole",
    "Je sais produire mes propres figures de style",
  ],
  lesson: [
    {
      title: "L'étymologie : l'histoire des mots",
      paragraphs: [
        "La plupart des mots français viennent du latin, et beaucoup de mots savants viennent du grec. Connaître quelques racines permet de deviner le sens de mots inconnus.",
        "Racines latines fréquentes : aqua (eau) → aquarium, aquatique ; terra (terre) → territoire, atterrir ; dico/dict (dire) → dictée, prédiction. Racines grecques fréquentes : bio (vie) → biologie ; graph (écrire) → graphie, autographe ; phone (son, voix) → téléphone ; chrono (temps) → chronomètre ; poly (plusieurs) → polygone.",
      ],
      example: [
        "« Hydrophobe » = hydro (eau) + phobe (peur) → qui a peur de l'eau.",
        "« Biographie » = bio (vie) + graphie (écriture) → récit d'une vie.",
      ],
      tip: "Devant un mot inconnu, découpe-le : préfixe + racine + suffixe. Chaque morceau est un indice de sens.",
    },
    {
      title: "Le champ lexical",
      figure: "fr5-champ-lexical",
      paragraphs: [
        "Un champ lexical est l'ensemble des mots qui se rapportent à un même thème : noms, verbes, adjectifs, expressions.",
        "Repérer le champ lexical dominant d'un texte aide à comprendre son atmosphère : un texte truffé de mots de la peur crée une ambiance inquiétante, même sans le dire ouvertement.",
      ],
      example: [
        "Champ lexical de la mer : vague, écume, marée, naviguer, salé, horizon, embruns.",
        "Champ lexical de la peur : trembler, frisson, pâlir, terreur, angoisse, sursauter.",
      ],
      tip: "Un champ lexical mélange les classes de mots : cherche des noms, mais aussi des verbes et des adjectifs liés au thème.",
    },
    {
      title: "Mot générique, mots spécifiques",
      paragraphs: [
        "Un mot générique désigne une catégorie générale : fleur, véhicule, émotion. Les mots spécifiques désignent les éléments de cette catégorie : tulipe, rose, jonquille sont des mots spécifiques du générique « fleur ».",
        "En rédaction, les mots spécifiques rendent le texte précis et vivant : « un labrador » dit plus que « un chien », qui dit déjà plus que « un animal ». Le mot générique est utile pour éviter une répétition ou pour définir un mot.",
      ],
      example: [
        "Générique : outil. Spécifiques : marteau, tournevis, scie, pince.",
        "Définition avec générique : « Le marteau est un OUTIL qui sert à frapper. »",
      ],
      tip: "Teste avec « est une sorte de » : « la tulipe est une sorte de fleur » → tulipe est spécifique, fleur est générique.",
    },
    {
      title: "Comparaison, métaphore, personnification",
      paragraphs: [
        "La comparaison rapproche deux éléments à l'aide d'un outil de comparaison : comme, tel que, pareil à, ressembler à… « Ses yeux brillent comme des étoiles. »",
        "La métaphore fait le même rapprochement, mais SANS outil de comparaison : « Ses yeux sont des étoiles. » L'image est plus directe, plus audacieuse.",
        "La personnification attribue un comportement humain à une chose, un animal ou une idée : « Le vent hurle sa colère dans les arbres. »",
      ],
      example: [
        "Comparaison : « La lune, comme un ballon d'argent, flottait dans le ciel. »",
        "Métaphore : « La lune, ballon d'argent, flottait dans le ciel. »",
        "Personnification : « La lune nous surveillait derrière les nuages. »",
      ],
      tip: "Le réflexe : cherche l'outil de comparaison. Présent → comparaison. Absent mais image → métaphore. La chose agit comme un humain → personnification.",
    },
    {
      title: "Énumération et hyperbole",
      paragraphs: [
        "L'énumération aligne une suite de mots de même nature pour créer un effet d'accumulation : « Il rangea les livres, les cahiers, les stylos, les classeurs et les feuilles. »",
        "L'hyperbole exagère volontairement pour frapper l'imagination : « Je meurs de faim », « Cette valise pèse une tonne ». On l'emploie tous les jours sans s'en rendre compte !",
        "Ces figures servent un but : amplifier, impressionner, faire sourire. Quand tu écris, choisis-les pour l'effet qu'elles produisent, pas pour décorer.",
      ],
      example: [
        "Énumération : « Le marché débordait de fruits, de légumes, d'épices, de fleurs et de tissus. »",
        "Hyperbole : « Je te l'ai répété mille fois ! »",
      ],
      tip: "Hyperbole vient du grec « lancer au-delà » : c'est un lancer trop loin, une exagération volontaire que personne ne prend au pied de la lettre.",
    },
  ],
  exercises: [
    {
      id: "f5voc-1",
      level: 1,
      type: "qcm",
      question: "La racine grecque « chrono » signifie…",
      choices: ["la vie", "le temps", "l'écriture", "la voix"],
      answer: 1,
      explanation:
        "Chrono = le temps, comme dans chronomètre (qui mesure le temps) ou chronologie (ordre dans le temps). Bio = vie, graph = écriture, phone = voix.",
      hint: "Pense au chronomètre : que mesure-t-il ?",
    },
    {
      id: "f5voc-2",
      level: 1,
      type: "qcm",
      question: "« Ses cheveux sont blonds comme les blés. » Quelle figure de style reconnais-tu ?",
      choices: ["une métaphore", "une comparaison", "une personnification", "une hyperbole"],
      answer: 1,
      explanation:
        "L'outil de comparaison « comme » est présent : c'est une comparaison. Sans « comme » (« ses cheveux de blé »), ce serait une métaphore. L'outil de comparaison, c'est le critère qui départage les deux figures.",
      hint: "Y a-t-il un mot-outil qui relie les deux images ?",
    },
    {
      id: "f5voc-3",
      level: 1,
      type: "input",
      question: "Quel est le mot générique de la liste : pomme, poire, cerise, abricot ?",
      answer: "fruit",
      accept: ["fruits", "les fruits", "un fruit"],
      explanation:
        "Le mot générique désigne la catégorie qui regroupe tous les autres : pomme, poire, cerise et abricot sont des FRUITS. Test : « la pomme est une sorte de fruit » fonctionne.",
      hint: "Complète : « une pomme est une sorte de… »",
    },
    {
      id: "f5voc-4",
      level: 1,
      type: "truefalse",
      question: "« Cette valise pèse une tonne ! » est une hyperbole.",
      answer: true,
      explanation:
        "Vrai ! La valise ne pèse évidemment pas une tonne : c'est une exagération volontaire pour dire qu'elle est très lourde. L'hyperbole amplifie la réalité pour frapper l'esprit.",
      hint: "La valise pèse-t-elle vraiment 1 000 kg ?",
    },
    {
      id: "f5voc-5",
      level: 2,
      type: "qcm",
      question: "« La vieille maison gémissait sous le vent. » Quelle figure de style reconnais-tu ?",
      choices: ["une comparaison", "une énumération", "une personnification", "une hyperbole"],
      answer: 2,
      explanation:
        "Gémir est un comportement humain, attribué ici à une maison : c'est une personnification. Elle donne vie aux objets et installe souvent une atmosphère inquiétante ou poétique.",
      hint: "Une maison peut-elle vraiment gémir ? Qui gémit, d'habitude ?",
    },
    {
      id: "f5voc-6",
      level: 2,
      type: "input",
      question: "En t'aidant des racines grecques, que signifie « polyglotte » ? Complète : « qui parle plusieurs ... »",
      answer: "langues",
      accept: ["langue"],
      explanation:
        "Poly = plusieurs (comme dans polygone, plusieurs côtés) et glotte = langue en grec. Un polyglotte parle plusieurs langues. Découper un mot savant en racines permet de deviner son sens sans dictionnaire.",
      hint: "Poly = plusieurs. Et « glotte » se cache aussi dans un organe de la gorge…",
    },
    {
      id: "f5voc-7",
      level: 2,
      type: "qcm",
      question: "Quel mot n'appartient PAS au champ lexical de la nuit ?",
      choices: ["obscurité", "étoile", "crépuscule", "averse"],
      answer: 3,
      explanation:
        "« Averse » appartient au champ lexical de la pluie, pas de la nuit. Obscurité, étoile et crépuscule évoquent tous la nuit ou son arrivée. Un intrus dans un champ lexical se repère en vérifiant le thème commun.",
      hint: "Quel mot parle de météo plutôt que de nuit ?",
    },
    {
      id: "f5voc-8",
      level: 2,
      type: "qcm",
      question: "« Ce joueur est un roc en défense. » Quelle figure de style reconnais-tu ?",
      choices: ["une comparaison", "une métaphore", "une énumération", "une personnification"],
      answer: 1,
      explanation:
        "Le joueur est directement identifié à un roc, sans outil de comparaison : c'est une métaphore. Avec « comme » (« il est solide comme un roc »), ce serait une comparaison. La métaphore fusionne les deux images.",
      hint: "« Comme » est-il présent dans la phrase ?",
    },
    {
      id: "f5voc-9",
      level: 3,
      type: "input",
      question: "En t'aidant du latin aqua, complète la définition : « Un aqueduc est un ouvrage qui transporte l'... »",
      answer: "eau",
      accept: ["l'eau", "de l'eau"],
      explanation:
        "Aqua = eau en latin, et ducere = conduire : un aqueduc conduit l'eau. La même racine se cache dans aquarium, aquatique, et même dans « aquarelle », une peinture à l'eau.",
      hint: "Pense à « aquarium » : qu'y trouve-t-on ?",
    },
    {
      id: "f5voc-10",
      level: 3,
      type: "qcm",
      question: "« Il dévora le roman en une soirée : chapitres, notes, préface, remerciements, tout y passa. » Quelles figures se combinent ici ?",
      choices: [
        "métaphore et énumération",
        "comparaison et hyperbole",
        "personnification et comparaison",
        "deux hyperboles",
      ],
      answer: 0,
      explanation:
        "« Dévora » est une métaphore : lire avec avidité, comme si le livre se mangeait. « Chapitres, notes, préface, remerciements » est une énumération qui amplifie l'idée de lecture complète. Les figures se combinent souvent pour renforcer l'effet.",
      hint: "Peut-on vraiment « dévorer » un livre ? Et que fait la liste de mots ?",
    },
    {
      id: "f5voc-11",
      level: 3,
      type: "truefalse",
      question: "Dans une définition de dictionnaire, on utilise souvent un mot générique : « Le marteau est un outil qui… »",
      answer: true,
      explanation:
        "Vrai ! Une définition classe d'abord le mot dans sa catégorie (le générique « outil »), puis précise ce qui le distingue des autres membres de la catégorie. C'est le duo générique + précision qui fait une bonne définition.",
    },
    {
      id: "f5voc-12",
      level: 3,
      type: "input",
      question: "Transforme cette comparaison en métaphore en supprimant l'outil de comparaison : « Cette autoroute est comme un ruban d'asphalte. » → « Cette autoroute est un ... d'asphalte. »",
      answer: "ruban",
      explanation:
        "En supprimant « comme », la comparaison devient une métaphore : « cette autoroute est un ruban d'asphalte ». L'image reste la même, mais elle est affirmée directement au lieu d'être signalée. C'est exactement le geste qui distingue les deux figures.",
      hint: "Garde l'image, enlève seulement le mot-outil.",
    },
  ],
  videos: [
    {
      title: "Les figures de style - Français - Collège - Les Bons Profs",
      youtubeId: "13nS9zxW4oA",
      channel: "Les Bons Profs",
    },
  ],
};
