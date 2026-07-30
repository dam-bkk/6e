import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-expansions-nom",
  subject: "francais",
  grade: "5e",
  num: 2,
  title: "Les expansions du nom",
  domain: "nombres",
  domainLabel: "Grammaire",
  icon: "TreeDeciduous",
  teaser: "Enrichir un nom avec des adjectifs, des compléments et des relatives.",
  objectives: [
    "Je sais reconnaître les trois expansions du nom : adjectif épithète, complément du nom, proposition subordonnée relative",
    "Je sais identifier le nom noyau d'un groupe nominal",
    "Je sais enrichir une description avec des expansions variées",
    "Je sais alléger une phrase en supprimant ou en remplaçant des expansions",
  ],
  lesson: [
    {
      title: "Le groupe nominal et son noyau",
      figure: "fr5-expansions-nom",
      paragraphs: [
        "Un groupe nominal (GN) est construit autour d'un nom principal, appelé le nom noyau. Autour de lui gravitent le déterminant et, parfois, des expansions.",
        "Les expansions du nom apportent des précisions sur le noyau : couleur, matière, appartenance, action… On peut toujours les supprimer sans rendre la phrase incorrecte.",
      ],
      example: [
        "« un vieux château de pierre qui domine la vallée »",
        "Nom noyau : château. Expansions : « vieux », « de pierre », « qui domine la vallée ».",
      ],
      tip: "Pour trouver le noyau, réduis le GN au minimum : « un vieux château de pierre qui domine la vallée » → « un château ». Ce qui reste obligatoire, c'est le noyau et son déterminant.",
    },
    {
      title: "L'adjectif épithète",
      paragraphs: [
        "L'adjectif épithète est directement accroché au nom, avant ou après lui, sans verbe entre les deux. Il s'accorde en genre et en nombre avec le nom qu'il qualifie.",
        "Ne le confonds pas avec l'adjectif attribut, qui est séparé du nom par un verbe d'état : « La mer est calme » (attribut) / « la mer calme » (épithète).",
      ],
      example: [
        "« une immense forêt sombre » : « immense » et « sombre » sont épithètes de « forêt ».",
        "Accord : « des forêts sombres », « un bois sombre ».",
      ],
      tip: "Épithète = collé au nom (avant ou après). Attribut = relié au nom par un verbe comme être, sembler, paraître, devenir.",
    },
    {
      title: "Le complément du nom",
      paragraphs: [
        "Le complément du nom est un mot ou un groupe de mots relié au nom par une préposition : de, à, en, sans, pour, avec…",
        "Il précise souvent la matière (un pull en laine), l'appartenance (le vélo de Léa), l'usage (une brosse à dents) ou le contenu (une tasse de thé).",
      ],
      example: [
        "« la porte du jardin » → préposition « de » (du = de + le).",
        "« un sac sans poches » → préposition « sans ».",
      ],
      tip: "Repère la petite préposition juste après le nom : c'est la signature du complément du nom. « Du », « au » et « des » cachent souvent « de » ou « à » !",
    },
    {
      title: "La proposition subordonnée relative",
      paragraphs: [
        "La proposition subordonnée relative est une expansion qui contient un verbe conjugué. Elle est introduite par un pronom relatif : qui, que, où, dont…",
        "Le pronom relatif reprend le nom qu'il complète, appelé l'antécédent : dans « le livre que je lis », « que » reprend « livre ».",
        "Chaque pronom a son rôle : « qui » est sujet du verbe de la relative, « que » est COD, « où » exprime le lieu ou le temps, « dont » remplace un complément introduit par « de ».",
      ],
      example: [
        "« le voisin qui jardine » → « qui » est sujet de « jardine ».",
        "« la ville où je suis né » → « où » exprime le lieu.",
        "« le film dont tu parles » → on parle DE ce film → « dont ».",
      ],
      tip: "Hésitation entre « qui » et « que » ? Regarde le mot juste après : si c'est le verbe, écris « qui » (sujet) ; si c'est un sujet, écris « que » (COD).",
    },
    {
      title: "Enrichir ou alléger une description",
      paragraphs: [
        "Pour rendre une description vivante, varie les trois expansions au lieu d'empiler les adjectifs : « une maison ancienne, aux volets bleus, qui surplombe la mer » est plus riche que « une vieille grande belle maison ».",
        "À l'inverse, pour alléger une phrase trop lourde, supprime les expansions les moins utiles ou remplace une relative par un adjectif : « un ciel qui menace » → « un ciel menaçant ».",
      ],
      example: [
        "Phrase pauvre : « Le chien traverse la rue. »",
        "Phrase enrichie : « Le vieux chien du boulanger, qui boite légèrement, traverse la rue déserte. »",
      ],
      tip: "Règle d'or d'un bon écrivain : chaque expansion doit apporter une information nouvelle. Si elle ne dit rien de plus, supprime-la.",
    },
  ],
  exercises: [
    {
      id: "f5exp-1",
      level: 1,
      type: "qcm",
      question: "Dans le groupe nominal « une tarte aux pommes délicieuse », quel est le nom noyau ?",
      choices: ["une", "tarte", "pommes", "délicieuse"],
      answer: 1,
      explanation:
        "Le noyau est le nom principal autour duquel tout s'organise : « tarte ». « Aux pommes » est un complément du nom et « délicieuse » un adjectif épithète. Test : on peut réduire le GN à « une tarte ».",
      hint: "Réduis le groupe nominal au strict minimum : que reste-t-il ?",
    },
    {
      id: "f5exp-2",
      level: 1,
      type: "qcm",
      question: "Dans « un pull en laine », quelle est la nature de l'expansion « en laine » ?",
      choices: ["adjectif épithète", "complément du nom", "proposition subordonnée relative"],
      answer: 1,
      explanation:
        "« En laine » est relié au nom « pull » par la préposition « en » : c'est un complément du nom, qui précise ici la matière. Un adjectif n'a pas de préposition, et une relative contient un verbe conjugué.",
      hint: "Y a-t-il une préposition ? Un verbe conjugué ?",
    },
    {
      id: "f5exp-3",
      level: 1,
      type: "truefalse",
      question: "Dans « la rivière qui traverse le village », « qui traverse le village » est une proposition subordonnée relative.",
      answer: true,
      explanation:
        "Vrai ! L'expansion contient un verbe conjugué (« traverse ») et elle est introduite par le pronom relatif « qui », dont l'antécédent est « rivière ». C'est la définition exacte de la relative.",
    },
    {
      id: "f5exp-4",
      level: 1,
      type: "input",
      question: "Relève l'adjectif épithète dans : « Les enfants observaient le ciel étoilé. »",
      answer: "étoilé",
      accept: ["etoile", "étoile"],
      explanation:
        "« Étoilé » est directement accroché au nom « ciel », sans verbe entre les deux : c'est un adjectif épithète. S'il y avait un verbe d'état (« le ciel est étoilé »), il serait attribut.",
      hint: "Cherche le mot qui qualifie « ciel » et qui lui est collé.",
    },
    {
      id: "f5exp-5",
      level: 2,
      type: "qcm",
      question: "Quelle phrase contient un adjectif ATTRIBUT et non épithète ?",
      choices: [
        "La mer calme brillait au soleil.",
        "La mer semblait calme ce matin-là.",
        "Une mer calme est idéale pour nager.",
        "Ils naviguaient sur une mer calme.",
      ],
      answer: 1,
      explanation:
        "Dans « La mer semblait calme », l'adjectif est séparé du nom par le verbe d'état « semblait » : c'est un attribut du sujet. Dans les trois autres phrases, « calme » est collé au nom « mer » : épithète. Le piège : l'attribut n'est PAS une expansion du nom.",
      hint: "Cherche un verbe d'état : être, sembler, paraître, devenir…",
    },
    {
      id: "f5exp-6",
      level: 2,
      type: "input",
      question: "Complète avec le pronom relatif qui convient : « Voici le stylo ... j'ai perdu hier. »",
      answer: "que",
      explanation:
        "Après le pronom vient « j'ai perdu » : un sujet (j') puis un verbe. Le pronom est donc COD → « que ». On écrit « qui » seulement quand le pronom est lui-même sujet du verbe qui suit : « le stylo qui écrit bien ».",
      hint: "Regarde le mot juste après : est-ce un verbe ou un sujet ?",
    },
    {
      id: "f5exp-7",
      level: 2,
      type: "qcm",
      question: "« Le village dont je t'ai parlé se trouve en montagne. » Pourquoi utilise-t-on « dont » ?",
      choices: [
        "parce que « dont » exprime le lieu",
        "parce qu'on parle DE ce village",
        "parce que « dont » est sujet du verbe",
        "parce que « village » est masculin",
      ],
      answer: 1,
      explanation:
        "« Dont » remplace un complément introduit par « de » : on parle DE ce village → le village dont je parle. C'est le réflexe à avoir : si le verbe se construit avec « de » (parler de, rêver de, avoir besoin de), le pronom relatif est « dont ».",
      hint: "Reconstruis la phrase : « je t'ai parlé ... ce village ». Quelle préposition manque ?",
    },
    {
      id: "f5exp-8",
      level: 2,
      type: "truefalse",
      question: "Dans « une brosse à dents », « à dents » est un adjectif épithète.",
      answer: false,
      explanation:
        "Faux ! « À dents » commence par la préposition « à » : c'est un complément du nom, qui précise l'usage de la brosse. Un adjectif épithète est un seul mot variable, jamais introduit par une préposition.",
      hint: "« À » est une préposition. Quelle expansion commence par une préposition ?",
    },
    {
      id: "f5exp-9",
      level: 3,
      type: "qcm",
      question: "« La vieille horloge de la gare, qui sonnait chaque heure, fascinait les voyageurs. » Combien d'expansions complètent le nom « horloge » ?",
      choices: ["1", "2", "3", "4"],
      answer: 2,
      explanation:
        "Trois expansions : l'adjectif épithète « vieille », le complément du nom « de la gare » et la relative « qui sonnait chaque heure ». Un même nom peut cumuler les trois types : c'est même la marque d'une description riche.",
      hint: "Cherche un adjectif, un groupe avec préposition et une proposition avec verbe conjugué.",
    },
    {
      id: "f5exp-10",
      level: 3,
      type: "input",
      question: "Allège la phrase en remplaçant la relative par un adjectif épithète de la même famille : « Ils avancèrent sous un ciel qui menaçait. » → « Ils avancèrent sous un ciel ... »",
      answer: "menaçant",
      accept: ["menacant"],
      explanation:
        "« Qui menaçait » peut se condenser en un adjectif dérivé du même verbe : « menaçant ». Remplacer une relative par un adjectif est le moyen le plus simple d'alléger une phrase sans perdre l'information.",
      hint: "Transforme le verbe « menacer » en adjectif.",
    },
    {
      id: "f5exp-11",
      level: 3,
      type: "qcm",
      question: "Quelle phrase enrichit « Le chat dort » avec un complément du nom ET une relative ?",
      choices: [
        "Le petit chat noir dort.",
        "Le chat de la voisine, qui ronronne doucement, dort.",
        "Le chat qui ronronne doucement dort.",
        "Le chat de la voisine dort paisiblement.",
      ],
      answer: 1,
      explanation:
        "« De la voisine » est un complément du nom (préposition « de ») et « qui ronronne doucement » est une relative (pronom « qui » + verbe conjugué). La phrase 1 n'a que des adjectifs, la 3 n'a que la relative, la 4 n'a que le complément du nom (« paisiblement » est un adverbe, pas une expansion).",
      hint: "Il te faut à la fois une préposition et un pronom relatif.",
    },
    {
      id: "f5exp-12",
      level: 3,
      type: "input",
      question: "Complète avec le pronom relatif qui convient : « L'été ... nous avons déménagé, il faisait très chaud. »",
      answer: "où",
      accept: ["ou"],
      explanation:
        "« Où » n'exprime pas seulement le lieu : il exprime aussi le temps. Ici, l'antécédent « l'été » est un moment → « l'été où nous avons déménagé ». Piège fréquent : on est tenté d'écrire « que », mais avec un antécédent de temps, c'est bien « où ».",
      hint: "L'antécédent « l'été » désigne-t-il un lieu, un objet ou un moment ?",
    },
  ],
  videos: [
    {
      title: "Le groupe nominal et ses expansions - Français - Collège - Les Bons Profs",
      youtubeId: "e_2Q53AjDoE",
      channel: "Les Bons Profs",
    },
  ],
};
