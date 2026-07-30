import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-temps-composes",
  subject: "francais",
  grade: "5e",
  num: 4,
  title: "Les temps composés",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "Layers",
  teaser: "Passé composé, plus-que-parfait, futur antérieur : deux mots, un temps.",
  objectives: [
    "Je sais former un temps composé : auxiliaire conjugué + participe passé",
    "Je sais conjuguer au passé composé, au plus-que-parfait et au futur antérieur",
    "Je sais choisir le bon auxiliaire : être ou avoir",
    "Je comprends que les temps composés expriment l'antériorité",
    "Je connais les participes passés irréguliers fréquents",
  ],
  lesson: [
    {
      title: "La recette des temps composés",
      paragraphs: [
        "Un temps composé s'écrit toujours en deux mots : un auxiliaire (être ou avoir) conjugué à un temps simple, suivi du participe passé du verbe.",
        "C'est le temps de l'auxiliaire qui donne son nom au temps composé : auxiliaire au présent → passé composé ; à l'imparfait → plus-que-parfait ; au futur → futur antérieur.",
      ],
      example: [
        "j'ai mangé → auxiliaire au présent → passé composé.",
        "j'avais mangé → auxiliaire à l'imparfait → plus-que-parfait.",
        "j'aurai mangé → auxiliaire au futur → futur antérieur.",
      ],
      tip: "Même verbe, même participe passé : seul l'auxiliaire change de temps. Apprends la recette, pas trois conjugaisons différentes !",
    },
    {
      title: "Être ou avoir ?",
      paragraphs: [
        "La plupart des verbes se conjuguent avec avoir : j'ai fini, tu as pris, nous avons vu.",
        "Se conjuguent avec être : les verbes pronominaux (se lever → je me suis levé) et une petite famille de verbes de mouvement ou de changement d'état : aller, venir, arriver, partir, entrer, sortir, monter, descendre, rester, tomber, naître, mourir, devenir, retourner, passer.",
        "Avec être, le participe passé s'accorde avec le sujet : « elle est partie », « ils sont arrivés ».",
      ],
      example: [
        "« Elles sont venues à vélo. » (venir → être, accord avec « elles »)",
        "« Elles ont pris le train. » (prendre → avoir)",
      ],
      tip: "Beaucoup de verbes en être vont par paires contraires : arriver/partir, entrer/sortir, monter/descendre, naître/mourir. Retenir les paires, c'est retenir la liste.",
    },
    {
      title: "Les participes passés irréguliers",
      paragraphs: [
        "Les verbes en -er ont un participe passé en -é (mangé), les verbes en -ir du 2e groupe en -i (fini). Mais beaucoup de verbes du 3e groupe sont irréguliers.",
        "À connaître par cœur : faire → fait, dire → dit, écrire → écrit, mettre → mis, prendre → pris, voir → vu, pouvoir → pu, vouloir → voulu, devoir → dû, boire → bu, lire → lu, venir → venu, ouvrir → ouvert, offrir → offert, peindre → peint.",
      ],
      example: [
        "« Il a écrit une lettre, puis il l'a mise à la poste. »",
        "« Nous avons ouvert la fenêtre. »",
      ],
      tip: "Pour trouver la lettre finale muette d'un participe, mets-le au féminin : ouverte → ouvert, mise → mis, dite → dit, peinte → peint.",
    },
    {
      title: "L'antériorité : le rôle des temps composés",
      paragraphs: [
        "Un temps composé exprime une action antérieure, c'est-à-dire terminée AVANT une autre action. Chaque temps composé est le partenaire d'un temps simple.",
        "Le plus-que-parfait marque une action passée avant une autre action passée : « Il avait fini ses devoirs quand je suis arrivé. » Le futur antérieur marque une action qui sera terminée avant une autre action future : « Quand tu auras fini, tu sortiras. »",
        "Le passé composé, lui, sert surtout à raconter au passé à l'oral et dans les écrits courants : il a remplacé le passé simple dans la conversation.",
      ],
      example: [
        "« Elle a raté le bus parce qu'elle s'était réveillée trop tard. »",
        "Le réveil (plus-que-parfait) a lieu AVANT le bus raté (passé composé).",
      ],
      tip: "Sur une flèche du temps, le temps composé se place toujours avant son temps simple partenaire : plus-que-parfait avant imparfait/passé composé, futur antérieur avant futur.",
    },
    {
      title: "Bien construire ses temps composés",
      paragraphs: [
        "Erreur fréquente n° 1 : oublier l'accent ou confondre les auxiliaires (« j'ai allé » au lieu de « je suis allé »).",
        "Erreur fréquente n° 2 : écrire le participe passé comme un infinitif (« il a manger » au lieu de « il a mangé »). Après un auxiliaire, c'est TOUJOURS un participe passé, jamais un infinitif.",
      ],
      example: [
        "Incorrect : « Ils ont retourner chez eux. »",
        "Correct : « Ils sont retournés chez eux. » (auxiliaire être + participe passé accordé)",
      ],
      tip: "Test de l'infinitif : remplace le verbe par « prendre/pris ». « Il a pris » fonctionne, « il a prendre » non → après l'auxiliaire, on entend « pris », donc participe passé.",
    },
  ],
  exercises: [
    {
      id: "f5tco-1",
      level: 1,
      type: "qcm",
      question: "Comment se forme un temps composé ?",
      choices: [
        "radical + terminaison",
        "auxiliaire conjugué + participe passé",
        "auxiliaire conjugué + infinitif",
        "deux verbes conjugués",
      ],
      answer: 1,
      explanation:
        "Un temps composé, c'est toujours deux mots : l'auxiliaire être ou avoir conjugué, puis le participe passé du verbe. Jamais un infinitif après l'auxiliaire : « il a mangé », pas « il a manger ».",
      hint: "Pense à « j'ai mangé » : quels sont les deux mots ?",
    },
    {
      id: "f5tco-2",
      level: 1,
      type: "qcm",
      question: "« Nous avions terminé » : à quel temps ce verbe est-il conjugué ?",
      choices: ["passé composé", "plus-que-parfait", "futur antérieur", "imparfait"],
      answer: 1,
      explanation:
        "L'auxiliaire « avions » est à l'imparfait : auxiliaire à l'imparfait + participe passé = plus-que-parfait. C'est le temps de l'auxiliaire qui donne son nom au temps composé.",
      hint: "À quel temps est conjugué « avions » ?",
    },
    {
      id: "f5tco-3",
      level: 1,
      type: "input",
      question: "Donne le participe passé du verbe « faire ».",
      answer: "fait",
      explanation:
        "Faire a un participe passé irrégulier : fait. Pour vérifier la lettre finale, mets-le au féminin : « faite » → on entend le t, donc « fait » avec un t.",
      hint: "« Une chose bien ... e » : mets le participe au féminin.",
    },
    {
      id: "f5tco-4",
      level: 1,
      type: "truefalse",
      question: "On écrit : « Elle a allé au marché. »",
      answer: false,
      explanation:
        "Faux ! « Aller » fait partie des verbes qui se conjuguent avec l'auxiliaire être : « Elle est allée au marché. » Et avec être, le participe s'accorde avec le sujet : allée.",
      hint: "Aller fait partie de la famille des verbes de mouvement. Quel auxiliaire prennent-ils ?",
    },
    {
      id: "f5tco-5",
      level: 2,
      type: "input",
      question: "Conjugue « partir » au passé composé, 3e personne du pluriel au féminin : « Elles ... très tôt. » (deux mots)",
      answer: "sont parties",
      explanation:
        "Partir se conjugue avec être : « elles sont parties ». Avec l'auxiliaire être, le participe passé s'accorde avec le sujet, ici féminin pluriel : parti + e + s = parties.",
      hint: "Partir prend l'auxiliaire être. Et avec être, on accorde !",
    },
    {
      id: "f5tco-6",
      level: 2,
      type: "qcm",
      question: "Quelle phrase est au futur antérieur ?",
      choices: [
        "Tu finiras ton exposé demain.",
        "Tu as fini ton exposé hier.",
        "Quand tu auras fini ton exposé, tu me le montreras.",
        "Tu avais fini ton exposé avant le cours.",
      ],
      answer: 2,
      explanation:
        "« Tu auras fini » = auxiliaire au futur (auras) + participe passé (fini) = futur antérieur. Il exprime une action qui sera terminée avant une autre action future (« tu me le montreras »).",
      hint: "Cherche un auxiliaire conjugué au futur.",
    },
    {
      id: "f5tco-7",
      level: 2,
      type: "input",
      question: "Donne le participe passé du verbe « mettre ».",
      answer: "mis",
      explanation:
        "Mettre → mis. C'est un irrégulier à connaître. Astuce du féminin : « mise » → on entend le s, donc « mis » se termine par s, pas par t.",
      hint: "Au féminin, on dit « une table bien mise ».",
    },
    {
      id: "f5tco-8",
      level: 2,
      type: "qcm",
      question: "« Le film avait commencé quand nous sommes entrés. » Quelle action a eu lieu EN PREMIER ?",
      choices: [
        "notre entrée dans la salle",
        "le début du film",
        "les deux en même temps",
        "impossible à savoir",
      ],
      answer: 1,
      explanation:
        "« Avait commencé » est au plus-que-parfait : il marque une action antérieure à l'autre action passée (« sommes entrés », passé composé). Le film a donc commencé avant notre entrée. C'est exactement le rôle du plus-que-parfait : dire ce qui s'est passé AVANT.",
      hint: "Le plus-que-parfait signale l'action la plus ancienne.",
    },
    {
      id: "f5tco-9",
      level: 3,
      type: "input",
      question: "Mets le verbe au plus-que-parfait : « Elle retrouva le bracelet qu'elle (perdre) l'été précédent. » (deux mots)",
      answer: "avait perdu",
      explanation:
        "La perte a lieu AVANT les retrouvailles : il faut le plus-que-parfait → auxiliaire avoir à l'imparfait + participe passé : « avait perdu ». Participe irrégulier : perdre → perdu.",
      hint: "Action antérieure à une action passée → auxiliaire à l'imparfait.",
    },
    {
      id: "f5tco-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est correctement écrite ?",
      choices: [
        "Ils ont voulu partir avant la fin.",
        "Ils ont vouloir partir avant la fin.",
        "Ils sont voulu partir avant la fin.",
        "Ils ont voulus partir avant la fin.",
      ],
      answer: 0,
      explanation:
        "Vouloir se conjugue avec avoir et son participe passé est « voulu ». Avec avoir, pas d'accord avec le sujet : « ils ont voulu », sans s. Et jamais d'infinitif après l'auxiliaire : « ont vouloir » est impossible.",
      hint: "Trois vérifications : le bon auxiliaire, le participe (pas l'infinitif), l'accord.",
    },
    {
      id: "f5tco-11",
      level: 3,
      type: "truefalse",
      question: "Dans « Dès que tu auras rangé ta chambre, tu pourras sortir », l'action de ranger sera terminée avant celle de sortir.",
      answer: true,
      explanation:
        "Vrai ! « Auras rangé » est au futur antérieur : il exprime une action future qui sera achevée avant une autre action future (« pourras sortir », futur simple). Le futur antérieur est le partenaire d'antériorité du futur.",
    },
    {
      id: "f5tco-12",
      level: 3,
      type: "input",
      question: "Conjugue « ouvrir » au passé composé, 1re personne du singulier : « J'... la fenêtre pour aérer. » (deux mots)",
      answer: "ai ouvert",
      explanation:
        "Ouvrir se conjugue avec avoir et son participe passé est irrégulier : ouvert (comme offrir → offert). On écrit donc « j'ai ouvert ». Piège classique : « ouvri » ou « ouvrit » sont des erreurs — « ouvrit » est du passé simple, pas un participe.",
      hint: "Le participe d'ouvrir ressemble à celui d'offrir.",
    },
  ],
  videos: [
    {
      title: "Les temps composés de l'indicatif - Français - Collège - Les Bons Profs",
      youtubeId: "XGfin5iJMzA",
      channel: "Les Bons Profs",
    },
  ],
};
