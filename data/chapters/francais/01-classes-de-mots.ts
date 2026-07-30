import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-classes-de-mots",
  subject: "francais",
  num: 1,
  title: "Les classes de mots",
  domain: "nombres",
  domainLabel: "Grammaire",
  icon: "Shapes",
  teaser: "Nom, verbe, adjectif… apprends à reconnaître la nature de chaque mot.",
  objectives: [
    "Je sais reconnaître un nom commun, un nom propre et un déterminant",
    "Je sais identifier un verbe, un adjectif et un pronom",
    "Je connais les principales classes invariables : adverbe et préposition",
    "Je sais trouver la classe d'un mot en observant son rôle dans la phrase",
  ],
  lesson: [
    {
      title: "Le nom et le déterminant",
      paragraphs: [
        "La classe grammaticale d'un mot, c'est sa « famille » : elle ne change pas selon la phrase (on parle aussi de « nature » du mot). C'est comme sa carte d'identité.",
        "Le nom désigne une personne, un animal, une chose ou une idée. Le nom commun (chat, ville, courage) est presque toujours accompagné d'un déterminant : le, la, les, un, une, des, mon, ta, ces… Le nom propre (Sarah, Paris, la Loire) désigne un être ou un lieu unique et prend une majuscule.",
      ],
      example: [
        "« Le chat de Sarah dort. »",
        "• « le » : déterminant • « chat » : nom commun • « Sarah » : nom propre.",
      ],
      tip: "Pour vérifier qu'un mot est un nom commun, mets « un » ou « une » devant : « une maison » fonctionne, « une dormir » non !",
    },
    {
      title: "L'adjectif, le verbe et le pronom",
      paragraphs: [
        "L'adjectif qualificatif donne une précision sur un nom : « un chat noir », « une histoire passionnante ». Il s'accorde avec le nom qu'il précise.",
        "Le verbe exprime une action (courir, manger) ou un état (être, sembler, paraître). C'est le seul mot qui se conjugue : il change avec la personne et le temps.",
        "Le pronom remplace un nom ou un groupe nominal pour éviter les répétitions : je, tu, il, elle, nous, le, lui, celui-ci… « Léa lit un roman. Elle le trouve génial. » : « elle » remplace Léa, « le » remplace le roman.",
      ],
      example: [
        "« Mes petites sœurs jouent dehors. Elles rient. »",
        "• « petites » : adjectif • « jouent », « rient » : verbes • « Elles » : pronom.",
      ],
      tip: "Pour repérer un verbe, change le temps de la phrase : « Hier, mes sœurs jouaient ». Le mot qui a changé, c'est le verbe !",
    },
    {
      title: "Les classes invariables : adverbe et préposition",
      paragraphs: [
        "Certains mots ne changent jamais de forme : ni de genre, ni de nombre. On dit qu'ils sont invariables.",
        "L'adverbe précise un verbe, un adjectif ou un autre adverbe : « il court vite », « très gentil », « trop souvent ». Beaucoup d'adverbes se terminent par -ment : lentement, doucement.",
        "La préposition est un petit mot qui introduit un complément : à, de, dans, par, pour, en, vers, avec, sans, sous, sur, chez… « Il va à la piscine avec ses amis. »",
      ],
      example: [
        "« Elle marche lentement vers la sortie. »",
        "• « lentement » : adverbe (comment ?) • « vers » : préposition (elle introduit « la sortie »).",
      ],
      tip: "Pour retenir les prépositions les plus courantes, mémorise la phrase : « Adam part pour Anvers avec deux cents sous » (à, dans, par, pour, en, vers, avec, de, sans, sous).",
    },
    {
      title: "Classes variables, classes invariables",
      figure: "fr-classes-mots",
      paragraphs: [
        "Les classes variables regroupent les mots qui changent de forme : le nom, le déterminant, l'adjectif, le pronom (ils varient en genre et en nombre) et le verbe (il se conjugue).",
        "Les classes invariables regroupent les mots qui s'écrivent toujours pareil : l'adverbe, la préposition, ainsi que la conjonction (mais, ou, et, donc, or, ni, car) que tu approfondiras plus tard.",
      ],
      example: [
        "« grand » varie : grand, grande, grands, grandes → classe variable (adjectif).",
        "« souvent » ne varie jamais → classe invariable (adverbe).",
      ],
      tip: "En cas de doute, mets la phrase au pluriel : si le mot change, il est variable ; s'il reste identique, il est invariable.",
    },
    {
      title: "Un même mot peut changer de classe",
      paragraphs: [
        "Attention : un mot n'a pas toujours la même classe ! Tout dépend de son rôle dans la phrase. Il faut donc toujours observer le contexte avant de répondre.",
        "Compare : « La ferme de mon oncle est immense » (ferme = nom commun, précédé du déterminant « la ») et « Il ferme la porte » (ferme = verbe, on peut dire « il fermait la porte »).",
      ],
      example: [
        "« Un sourire éclaire son visage. » → « sourire » est un nom (déterminant « un »).",
        "« J'aime sourire. » → « sourire » est un verbe (à l'infinitif).",
      ],
      tip: "Deux tests imparables : un déterminant devant le mot → c'est un nom ; on peut changer son temps → c'est un verbe.",
    },
  ],
  exercises: [
    {
      id: "fcla-1",
      level: 1,
      type: "qcm",
      question: "Dans la phrase « La maison est ancienne. », quelle est la classe du mot « maison » ?",
      choices: ["Verbe", "Nom commun", "Adjectif", "Adverbe"],
      answer: 1,
      explanation:
        "« Maison » désigne une chose et il est précédé du déterminant « la » : c'est un nom commun. Un nom commun peut presque toujours être précédé de « un », « une » ou « le », « la ».",
      hint: "Quel petit mot se trouve juste devant « maison » ?",
    },
    {
      id: "fcla-2",
      level: 1,
      type: "qcm",
      question: "Dans « Le chat noir dort sur le canapé. », quelle est la classe du mot « noir » ?",
      choices: ["Nom commun", "Verbe", "Adjectif", "Pronom"],
      answer: 2,
      explanation:
        "« Noir » donne une précision sur le nom « chat » : il dit comment est le chat. C'est donc un adjectif qualificatif. La preuve : il s'accorderait avec le nom (« des chattes noires »).",
      hint: "Ce mot donne une précision sur le chat.",
    },
    {
      id: "fcla-3",
      level: 1,
      type: "truefalse",
      question: "« Paris » est un nom propre.",
      answer: true,
      explanation:
        "Vrai ! « Paris » désigne un lieu unique et prend une majuscule : c'est un nom propre. Les prénoms (Sarah), les noms de villes, de pays ou de fleuves sont des noms propres.",
    },
    {
      id: "fcla-4",
      level: 1,
      type: "input",
      question: "Quelle est la classe grammaticale du mot « rapidement » dans « Il court rapidement. » ? (un seul mot)",
      answer: "adverbe",
      accept: ["un adverbe"],
      explanation:
        "« Rapidement » précise le verbe « court » : il dit comment il court. C'est un adverbe. La plupart des mots en -ment sont des adverbes, et ils sont invariables.",
      hint: "Ce mot se termine par -ment et précise le verbe.",
    },
    {
      id: "fcla-5",
      level: 2,
      type: "qcm",
      question: "Dans « Nous mangeons à la cantine. », quelle est la classe du mot « nous » ?",
      choices: ["Déterminant", "Nom", "Pronom", "Préposition"],
      answer: 2,
      explanation:
        "« Nous » désigne les personnes qui parlent sans les nommer : c'est un pronom personnel. Ne le confonds pas avec un déterminant : un déterminant accompagne toujours un nom (« nos repas »), alors qu'un pronom le remplace.",
      hint: "Ce mot remplace les personnes qui parlent.",
    },
    {
      id: "fcla-6",
      level: 2,
      type: "qcm",
      question: "Parmi ces mots, lequel est INVARIABLE ?",
      choices: ["cheval", "souvent", "grande", "elles"],
      answer: 1,
      explanation:
        "« Souvent » est un adverbe : il s'écrit toujours pareil, quel que soit le contexte. Les autres varient : cheval → chevaux, grande → grands/grandes, elles → il/elle/ils. Les adverbes et les prépositions sont invariables.",
      hint: "Essaie de mettre chaque mot au pluriel ou au féminin.",
    },
    {
      id: "fcla-7",
      level: 2,
      type: "input",
      question: "Dans « Il parle à son voisin. », quelle est la classe grammaticale du mot « à » ? (un seul mot)",
      answer: "préposition",
      accept: ["preposition", "une préposition", "une preposition"],
      explanation:
        "« À » introduit le complément « son voisin » : c'est une préposition. Retiens la liste des plus fréquentes : à, dans, par, pour, en, vers, avec, de, sans, sous, sur, chez. Ne confonds pas « à » (préposition, avec accent) et « a » (verbe avoir).",
      hint: "Pense à la phrase « Adam part pour Anvers avec deux cents sous ».",
    },
    {
      id: "fcla-8",
      level: 2,
      type: "truefalse",
      question: "Un adjectif qualificatif est un mot invariable.",
      answer: false,
      explanation:
        "Faux ! L'adjectif s'accorde en genre et en nombre avec le nom qu'il précise : un chat noir, une chatte noire, des chats noirs. Il fait donc partie des classes variables. Les invariables, ce sont l'adverbe et la préposition.",
    },
    {
      id: "fcla-9",
      level: 3,
      type: "qcm",
      question: "Compare : « La ferme est immense. » et « Il ferme la porte. » Quelle est la classe de « ferme » dans la DEUXIÈME phrase ?",
      choices: ["Nom commun", "Adjectif", "Verbe", "Adverbe"],
      answer: 2,
      explanation:
        "Dans « Il ferme la porte », on peut changer le temps : « Il fermait la porte », « Il fermera la porte ». C'est donc le verbe fermer, conjugué. Dans la première phrase, « ferme » était un nom (déterminant « la »). Le même mot peut changer de classe selon la phrase : il faut toujours regarder le contexte !",
      hint: "Essaie de mettre la phrase à un autre temps.",
    },
    {
      id: "fcla-10",
      level: 3,
      type: "qcm",
      question: "Dans « Elle a un rire léger. », quelle est la classe du mot « rire » ?",
      choices: ["Verbe", "Nom commun", "Adjectif", "Adverbe"],
      answer: 1,
      explanation:
        "Piège classique ! « Rire » est souvent un verbe, mais ici il est précédé du déterminant « un » et il est précisé par l'adjectif « léger » : c'est un nom commun. Un déterminant devant un mot est le signe le plus sûr qu'il s'agit d'un nom.",
      hint: "Quel petit mot se trouve juste devant « rire » ?",
    },
    {
      id: "fcla-11",
      level: 3,
      type: "truefalse",
      question: "Dans « Elle est sortie malgré la pluie. », le mot « malgré » est un adverbe.",
      answer: false,
      explanation:
        "Faux ! « Malgré » introduit le groupe « la pluie » : c'est une préposition. Un adverbe peut se déplacer ou se supprimer seul (« elle est vite sortie »), alors qu'une préposition est toujours suivie d'un complément qu'elle introduit.",
      hint: "Ce mot est-il suivi d'un groupe qu'il introduit ?",
    },
    {
      id: "fcla-12",
      level: 3,
      type: "input",
      question: "Dans la phrase « Il faut distinguer le bien du mal. », quelle est la classe grammaticale du mot « bien » ? (un seul mot)",
      answer: "nom",
      accept: ["un nom", "nom commun", "un nom commun"],
      explanation:
        "« Bien » est le plus souvent un adverbe (« il travaille bien »). Mais ici, il est précédé du déterminant « le » : c'est donc un nom commun (« le bien », comme « le mal »). Encore une preuve qu'on ne peut pas donner la classe d'un mot sans lire la phrase entière.",
      hint: "D'habitude « bien » est un adverbe… mais regarde le mot placé juste devant.",
    },
  ],
  videos: [
    { title: "Les natures et les fonctions des mots CM1 - CM2 - 6ème - Cycle 3 - Français, Grammaire", youtubeId: "28GbAcHjrrw", channel: "Maître Lucas" },
  ],
};
