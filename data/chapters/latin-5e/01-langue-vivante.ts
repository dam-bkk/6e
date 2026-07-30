import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "lat5-langue-vivante",
  subject: "latin",
  grade: "5e",
  num: 1,
  title: "Le latin est partout !",
  domain: "nombres",
  domainLabel: "Latin",
  icon: "Sparkles",
  teaser: "Tu parles déjà latin sans le savoir : la preuve en quelques mots.",
  objectives: [
    "Je sais pourquoi on apprend encore le latin aujourd'hui",
    "Je sais prononcer le latin avec la prononciation restituée",
    "Je sais que le français vient du latin et je reconnais des mots transparents",
    "Je connais les principales langues romanes",
    "Je repère des mots et expressions latins utilisés en français",
  ],
  lesson: [
    {
      title: "Pourquoi apprendre une langue « morte » ?",
      paragraphs: [
        "Le latin était la langue de Rome, une petite cité d'Italie devenue un empire immense : au IIe siècle après J.-C., on parlait latin de la Bretagne (l'Angleterre actuelle) jusqu'en Afrique du Nord et au Proche-Orient !",
        "On dit que le latin est une langue « morte » parce que plus personne ne l'apprend comme langue maternelle. Mais c'est très mal dit : le latin n'est pas mort, il s'est transformé. Le français que tu parles tous les jours, c'est du latin qui a évolué pendant deux mille ans.",
        "Apprendre le latin, c'est donc un peu remonter le temps : mieux comprendre le français et son orthographe, découvrir la vie des Romains, leurs dieux, leurs légendes… et se donner un sérieux coup de pouce pour apprendre l'espagnol ou l'italien plus tard.",
      ],
      example: [
        "Le mot « école » vient du latin schola.",
        "Le mot « table » vient du latin tabula.",
        "Le mot « mur » vient du latin murus.",
      ],
      tip: "Quand tu hésites sur l'orthographe d'un mot français, le latin aide souvent : « temps » prend un p… parce qu'il vient de tempus !",
    },
    {
      title: "L'alphabet latin : tu le connais déjà",
      paragraphs: [
        "Bonne nouvelle : l'alphabet latin, c'est le nôtre ! Ce sont les Romains qui nous l'ont transmis. Le latin classique s'écrivait avec 23 lettres : pas de J, pas de U (remplacé par V), et le W n'existait pas.",
        "Sur les inscriptions romaines, tout était gravé en majuscules : ROMA, SENATVS… Le V se lisait comme la voyelle « ou » ou comme la consonne [w]. C'est pour cela qu'on écrit aujourd'hui IVLIVS pour Julius.",
      ],
      example: [
        "SENATVS se lit « sénatous » : c'est le mot senatus, le sénat.",
        "ROMA se lit tout simplement « roma » : Rome !",
      ],
      tip: "Si tu vois un V au milieu d'un mot latin gravé dans la pierre, essaie de le lire « ou » : AVGVSTVS = Augustus = « Aougoustous ».",
    },
    {
      title: "La prononciation restituée",
      paragraphs: [
        "Comment parlaient les Romains ? Les savants ont reconstitué leur prononciation : on l'appelle la prononciation restituée. Elle suit des règles simples, et surtout : toutes les lettres se prononcent !",
        "Les règles essentielles : u se prononce « ou » (lupus = « loupous ») ; c se prononce toujours [k], même devant e et i (Cicero = « Kikéro ») ; g est toujours dur comme dans « gare » ; e se prononce « é », jamais muet.",
        "Les groupes de voyelles se prononcent aussi : ae se dit « aé » (presque « aï ») comme dans rosae, et oe se dit « oé » comme dans poena.",
      ],
      example: [
        "Caesar se prononce « Kaésar » : c'est de là que viennent les mots Kaiser (en allemand) et tsar (en russe) !",
        "civis (le citoyen) se prononce « kiouis ».",
        "aqua (l'eau) se prononce « akoua ».",
      ],
      tip: "Trois réflexes à graver dans ta tête : U = OU, C = K, tout se prononce. Avec ça, tu peux lire n'importe quel mot latin à voix haute.",
    },
    {
      title: "Le français, fils du latin",
      figure: "lat-langues-romanes",
      paragraphs: [
        "Quand les Romains ont conquis la Gaule (victoire de Jules César en 52 av. J.-C.), les Gaulois se sont mis peu à peu à parler latin. Ce latin parlé, déformé au fil des siècles, est devenu… le français. Environ 80 % des mots du français viennent du latin !",
        "Le latin ne s'est pas transformé qu'en français : il a donné naissance à toute une famille de langues, les langues romanes : le français, l'espagnol, l'italien, le portugais, le roumain, et d'autres encore comme le catalan ou l'occitan. Ce sont des langues sœurs.",
        "Résultat : beaucoup de mots latins sont transparents, c'est-à-dire qu'on les comprend sans les avoir appris. Et connaître le latin te donnera une longueur d'avance dans toutes les langues romanes.",
      ],
      example: [
        "villa → une villa ; rosa → une rose ; insula → une île.",
        "Le mot latin mare (la mer) a donné : mer (français), mar (espagnol et portugais), mare (italien et roumain).",
        "luna (la lune) → luna en espagnol et en italien : presque rien n'a changé en deux mille ans !",
      ],
      tip: "Devant un mot latin inconnu, cherche un mot français qui lui ressemble : neuf fois sur dix, tu tiens le sens. Terra ? Pense à « terre », « terrain », « territoire »…",
    },
    {
      title: "Du latin dans ta journée",
      paragraphs: [
        "Sans t'en rendre compte, tu utilises du latin pur tous les jours. L'abréviation « etc. » ? C'est et cetera, « et toutes les autres choses ». Le « P.-S. » à la fin d'un message ? C'est post-scriptum, « écrit après ».",
        "Ton agenda porte un nom latin qui signifie « les choses qui doivent être faites ». Et la liste est longue : un album (« objet blanc », car on écrivait sur des tablettes blanchies), un lavabo (« je laverai »), un aquarium, un maximum, un duo, un visa…",
        "Ces mots sont passés tels quels du latin au français : on ne les traduit même plus, on les vit.",
      ],
      example: [
        "et cetera (etc.) = « et toutes les autres choses »",
        "post-scriptum (P.-S.) = « écrit après »",
        "agenda = « les choses à faire »",
        "aquarium = « réservoir d'eau » (de aqua, l'eau)",
      ],
      tip: "Ouvre ton sac de cours : agenda, album, stylo (de stilus)… Le latin est déjà dedans !",
    },
  ],
  exercises: [
    {
      id: "l5lan-1",
      level: 1,
      type: "qcm",
      question: "En prononciation restituée, comment se prononce la lettre u dans le mot latin lupus (le loup) ?",
      choices: ["« u » comme dans « lune »", "« ou » comme dans « loup »", "« o » comme dans « pomme »", "elle ne se prononce pas"],
      answer: 1,
      explanation:
        "En latin, la lettre u se prononce toujours « ou » : lupus se dit « loupous ». Le son « u » du français (comme dans « lune ») n'existait pas en latin classique.",
      hint: "Souviens-toi du réflexe : U = OU.",
    },
    {
      id: "l5lan-2",
      level: 1,
      type: "qcm",
      question: "Comment se prononce le c du nom latin Cicero (l'écrivain Cicéron) en prononciation restituée ?",
      choices: ["[s] comme dans « ciel »", "[ch] comme dans « chat »", "[k] comme dans « cadeau »", "[g] comme dans « gare »"],
      answer: 2,
      explanation:
        "En latin, le c se prononce toujours [k], même devant e et i : Cicero se dit « Kikéro ». C'est plus tard, dans les langues romanes, que le c s'est adouci devant e et i.",
      hint: "En latin, le c n'a qu'une seule prononciation possible.",
    },
    {
      id: "l5lan-3",
      level: 1,
      type: "truefalse",
      question: "Le français fait partie des langues romanes, c'est-à-dire des langues issues du latin.",
      answer: true,
      explanation:
        "Vrai ! Le français est né du latin parlé en Gaule, transformé au fil des siècles. Les langues romanes forment une famille de langues sœurs : français, espagnol, italien, portugais, roumain…",
    },
    {
      id: "l5lan-4",
      level: 1,
      type: "input",
      question: "Le mot latin rosa est transparent : quel mot français (une fleur) en vient directement ?",
      answer: "rose",
      accept: ["la rose", "une rose"],
      explanation:
        "Rosa a donné « rose » en français. C'est un mot transparent : on le comprend sans l'avoir appris. Tu retrouveras rosa dans le chapitre de grammaire : c'est le mot modèle de la première déclinaison !",
      hint: "Enlève simplement le -a final et écoute le mot.",
    },
    {
      id: "l5lan-5",
      level: 2,
      type: "qcm",
      question: "Que signifie l'abréviation « etc. », du latin et cetera ?",
      choices: ["« et c'est terminé »", "« et toutes les autres choses »", "« écrit après »", "« à refaire »"],
      answer: 1,
      explanation:
        "Et cetera signifie « et toutes les autres choses » : on l'emploie pour couper une liste trop longue. « Écrit après », c'est la traduction de post-scriptum (P.-S.), une autre expression latine courante.",
      hint: "On met « etc. » à la fin d'une liste qu'on ne veut pas terminer.",
    },
    {
      id: "l5lan-6",
      level: 2,
      type: "qcm",
      question: "Parmi ces langues, laquelle n'est PAS une langue romane ?",
      choices: ["l'espagnol", "l'italien", "l'allemand", "le portugais"],
      answer: 2,
      explanation:
        "L'allemand est une langue germanique, comme l'anglais : elle ne descend pas du latin. L'espagnol, l'italien et le portugais sont bien des langues romanes, issues du latin, comme le français et le roumain.",
      hint: "Trois de ces langues sont des « sœurs » du français.",
    },
    {
      id: "l5lan-7",
      level: 2,
      type: "truefalse",
      question: "Environ 80 % des mots du français viennent du latin.",
      answer: true,
      explanation:
        "Vrai ! La très grande majorité du vocabulaire français est d'origine latine, environ 80 %. Le reste vient du gaulois, du francique (la langue des Francs), du grec, de l'arabe, de l'anglais…",
    },
    {
      id: "l5lan-8",
      level: 2,
      type: "input",
      question: "Sur une inscription romaine, tu lis le mot AQVA. Écris ce mot en latin tel qu'on l'écrit aujourd'hui dans les livres (en minuscules).",
      answer: "aqua",
      explanation:
        "Sur les inscriptions, les Romains gravaient V pour la lettre u : AQVA s'écrit donc aqua dans nos livres. Ce mot signifie « l'eau » et se prononce « akoua ». Tu le retrouves dans aquarium, aquatique…",
      hint: "Le V des inscriptions cache une autre lettre.",
    },
    {
      id: "l5lan-9",
      level: 3,
      type: "qcm",
      question: "Le nom Caesar se prononce « Kaésar » en prononciation restituée. Quel mot allemand vient directement de cette prononciation ?",
      choices: ["Kindergarten", "Kaiser", "Kirsche", "Kanzler"],
      answer: 1,
      explanation:
        "Le mot allemand Kaiser (« empereur ») vient de Caesar prononcé « Kaésar » : il a gardé le son [k] d'origine. Le russe tsar vient lui aussi de Caesar. En français, « César » a adouci le c en [s], comme souvent devant e et i.",
      hint: "Cherche le mot qui désigne un empereur.",
    },
    {
      id: "l5lan-10",
      level: 3,
      type: "input",
      question: "Le mot latin agenda est passé tel quel en français. Que signifie-t-il littéralement en latin ? (réponse en quatre mots : les choses ... ...)",
      answer: "les choses a faire",
      accept: ["les choses à faire", "choses a faire", "choses à faire", "ce qu'il faut faire", "les choses qui doivent etre faites"],
      explanation:
        "Agenda signifie littéralement « les choses qui doivent être faites », autrement dit « les choses à faire ». C'est exactement l'usage qu'on en fait aujourd'hui : on y note ce qu'on doit faire ! De même, lavabo signifie « je laverai ».",
      hint: "Pense à ce que tu écris dans ton agenda.",
    },
    {
      id: "l5lan-11",
      level: 3,
      type: "truefalse",
      question: "L'alphabet du latin classique comptait 26 lettres, exactement comme le nôtre.",
      answer: false,
      explanation:
        "Faux ! L'alphabet latin classique comptait 23 lettres : il n'avait ni J, ni U (on écrivait V), ni W. Ces lettres ont été ajoutées bien plus tard. C'est pourquoi on trouve IVLIVS pour Julius sur les inscriptions.",
      hint: "Trois de nos lettres n'existaient pas chez les Romains.",
    },
    {
      id: "l5lan-12",
      level: 3,
      type: "qcm",
      question: "Le mot latin mare (la mer) a donné mar en espagnol, mare en italien et « mer » en français. Comment appelle-t-on ce phénomène ?",
      choices: [
        "Ce sont des langues romanes, héritières du latin",
        "C'est un hasard : ces langues n'ont aucun lien",
        "L'espagnol et l'italien ont copié le français",
        "Le latin a copié ces trois langues",
      ],
      answer: 0,
      explanation:
        "Ces ressemblances ne doivent rien au hasard : le français, l'espagnol et l'italien sont des langues romanes, c'est-à-dire des évolutions du latin parlé dans différentes régions de l'Empire romain. Le même mot latin mare a évolué un peu différemment dans chaque région.",
    },
  ],
  videos: [
    {
      title: "à quoi sert le latin ?",
      youtubeId: "2nRkKVaB7as",
      channel: "mythoman",
    },
  ],
};
