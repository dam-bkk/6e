import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-vocabulaire",
  subject: "francais",
  num: 8,
  title: "Le vocabulaire",
  domain: "donnees",
  domainLabel: "Vocabulaire",
  icon: "BookMarked",
  teaser: "Familles de mots, préfixes, sens figuré : deviens un explorateur de la langue.",
  objectives: [
    "Je sais reconnaître une famille de mots et son radical",
    "Je sais utiliser les préfixes et les suffixes pour former et comprendre des mots",
    "Je sais distinguer synonymes, antonymes et homonymes",
    "Je sais distinguer le sens propre du sens figuré et repérer les niveaux de langue",
  ],
  lesson: [
    {
      title: "Les familles de mots et le radical",
      paragraphs: [
        "Une famille de mots regroupe tous les mots construits à partir d'un même radical (la partie commune) : dent → dentiste, dentaire, dentifrice, édenté.",
        "Attention aux faux frères ! Deux mots qui se ressemblent n'appartiennent pas forcément à la même famille : « terrible » n'est pas de la famille de « terre », malgré ses premières lettres. Le sens doit être commun, pas seulement les lettres.",
      ],
      example: [
        "Famille de « terre » : terrain, terrestre, atterrir, enterrer, souterrain.",
        "Intrus : terrible (aucun rapport de sens avec la terre).",
      ],
      tip: "Pour vérifier qu'un mot appartient à une famille, cherche le lien de SENS avec le radical : « atterrir », c'est revenir sur terre ; « terrible », rien à voir.",
    },
    {
      title: "Préfixes et suffixes",
      paragraphs: [
        "Le préfixe se place AVANT le radical et change le sens du mot : dé- (défaire), re- (relire = lire de nouveau), in-/im- (invisible = qui n'est pas visible), para- (parapluie = qui protège de la pluie).",
        "Le suffixe se place APRÈS le radical et change souvent la classe du mot : -tion fabrique des noms (décorer → décoration), -able des adjectifs (laver → lavable), -ette des diminutifs (maison → maisonnette), -ment des adverbes (lent → lentement).",
      ],
      example: [
        "im + possible → impossible : le préfixe dit le contraire.",
        "fille + ette → fillette : le suffixe dit « petite ».",
      ],
      tip: "Préfixe = devant, suffixe = à la suite. Un mot peut avoir les deux : dé-boise-ment (préfixe + radical + suffixe).",
    },
    {
      title: "Synonymes, antonymes, homonymes",
      paragraphs: [
        "Les synonymes ont un sens proche : content / joyeux / ravi. Ils permettent d'éviter les répétitions et de nuancer : « ravi » est plus fort que « content ».",
        "Les antonymes ont un sens contraire : monter / descendre, grand / petit. On peut souvent former un antonyme avec un préfixe : possible → impossible, faire → défaire.",
        "Les homonymes se prononcent pareil mais n'ont pas le même sens, et souvent pas la même orthographe : verre / vert / ver / vers ; ou la même orthographe : « voler » dans les airs et « voler » un objet.",
      ],
      example: [
        "Synonymes de « peur » : crainte, frayeur, terreur (de plus en plus fort).",
        "Homonymes : le comte (noble), le compte (calcul), le conte (histoire).",
      ],
      tip: "SYN-onyme = sens SEMblable ; ANT-onyme = sens contraire (comme ANTI) ; HOM-onyme = même son (comme HOMme… non ! comme HOMO = pareil).",
    },
    {
      title: "Sens propre et sens figuré",
      paragraphs: [
        "Le sens propre est le sens premier, concret, du mot : « Il a un cœur fragile » (l'organe qui bat dans la poitrine).",
        "Le sens figuré est un sens imagé, construit par comparaison : « Il a un cœur de pierre » (il est insensible : son cœur n'est évidemment pas en pierre !).",
        "Le dictionnaire présente d'abord le sens propre, puis les sens figurés, souvent signalés par l'abréviation « fig. ».",
      ],
      example: [
        "Sens propre : « Le loup dévore un mouton. »",
        "Sens figuré : « Léo dévore les romans. » (il lit énormément, il ne mange pas les livres !)",
      ],
      tip: "Si la phrase prise au pied de la lettre devient absurde ou impossible, c'est du sens figuré : personne ne « tombe » réellement « dans les pommes ».",
    },
    {
      title: "Niveaux de langue et dictionnaire",
      paragraphs: [
        "On distingue trois niveaux de langue : familier (entre copains : bagnole, bouquin, se marrer), courant (à l'école, partout : voiture, livre, rire), soutenu (à l'écrit, dans les textes littéraires : automobile, ouvrage, s'esclaffer).",
        "Un même mot peut avoir plusieurs sens : c'est la polysémie. Dans le dictionnaire, chaque sens est numéroté (1. 2. 3.) et illustré par un exemple. « Une souris » : 1. petit rongeur ; 2. boîtier qui commande l'ordinateur.",
        "Le dictionnaire donne aussi la classe du mot (n. = nom, v. = verbe, adj. = adjectif), son genre (m. ou f.) et son niveau de langue (fam. = familier).",
      ],
      example: [
        "Familier : « J'ai paumé mon bouquin. » • Courant : « J'ai perdu mon livre. » • Soutenu : « J'ai égaré mon ouvrage. »",
      ],
      tip: "Pour choisir le bon sens d'un mot polysémique dans le dictionnaire, remplace chaque définition dans TA phrase : une seule fonctionnera vraiment.",
    },
  ],
  exercises: [
    {
      id: "fvoc-1",
      level: 1,
      type: "qcm",
      question: "Quel est le radical commun aux mots « dentiste, dentaire, édenté » ?",
      choices: ["dent", "den", "dentis", "iste"],
      answer: 0,
      explanation:
        "Ces trois mots parlent tous des dents : leur radical est « dent ». On y ajoute des suffixes (-iste, -aire) ou un préfixe (é-) pour former la famille de mots. Le radical porte le sens commun de toute la famille.",
      hint: "Quelle partie du corps relie tous ces mots ?",
    },
    {
      id: "fvoc-2",
      level: 1,
      type: "qcm",
      question: "Quel mot est un synonyme de « content » ?",
      choices: ["triste", "joyeux", "fatigué", "contenu"],
      answer: 1,
      explanation:
        "« Joyeux » a un sens très proche de « content » : ce sont des synonymes. « Triste » est son antonyme (sens contraire). Attention à « contenu » : il ressemble à « content » mais n'a aucun rapport de sens — la ressemblance des lettres ne suffit pas !",
      hint: "Synonyme = sens proche.",
    },
    {
      id: "fvoc-3",
      level: 1,
      type: "input",
      question: "Donne l'antonyme (le contraire) du verbe « monter ».",
      answer: "descendre",
      explanation:
        "L'antonyme de « monter » est « descendre » : les deux verbes ont des sens exactement contraires. D'autres paires d'antonymes : entrer/sortir, allumer/éteindre, apparaître/disparaître.",
      hint: "Que fais-tu dans l'escalier quand tu ne montes pas ?",
    },
    {
      id: "fvoc-4",
      level: 1,
      type: "truefalse",
      question: "« Voler » (dans les airs) et « voler » (dérober un objet) sont des homonymes.",
      answer: true,
      explanation:
        "Vrai ! Ces deux mots s'écrivent et se prononcent pareil, mais n'ont aucun rapport de sens : ce sont des homonymes. L'avion vole dans le ciel, le voleur vole un portefeuille. Seul le contexte de la phrase permet de savoir de quel « voler » on parle.",
    },
    {
      id: "fvoc-5",
      level: 2,
      type: "qcm",
      question: "Dans le mot « impossible », que signifie le préfixe « im- » ?",
      choices: ["de nouveau", "le contraire", "très", "avant"],
      answer: 1,
      explanation:
        "Le préfixe in-/im- exprime le contraire : impossible = qui n'est PAS possible, invisible = qu'on ne voit pas, imbuvable = qu'on ne peut pas boire. Devant b, m et p, « in- » devient « im- » : c'est pour cela qu'on écrit iMpossible.",
      hint: "Compare : possible / impossible.",
    },
    {
      id: "fvoc-6",
      level: 2,
      type: "qcm",
      question: "Dans « Il a un cœur de pierre. », l'expression est employée…",
      choices: ["au sens propre", "au sens figuré", "au niveau familier", "comme un homonyme"],
      answer: 1,
      explanation:
        "Personne n'a réellement un cœur en pierre ! L'expression est une image : elle signifie « il est insensible, sans pitié ». C'est le sens figuré. Au sens propre, on dirait par exemple « une maison de pierre » (vraiment construite en pierre).",
      hint: "Prends la phrase au pied de la lettre : est-elle possible ?",
    },
    {
      id: "fvoc-7",
      level: 2,
      type: "input",
      question: "Forme un nom à partir du verbe « décorer » avec le suffixe -tion.",
      answer: "décoration",
      accept: ["decoration", "la décoration", "la decoration", "une décoration", "une decoration"],
      explanation:
        "décorer + -tion → décoration. Le suffixe -tion transforme un verbe en nom : inventer → invention, opérer → opération, punir → punition. C'est l'un des suffixes les plus productifs du français.",
      hint: "Remplace la fin du verbe par le suffixe.",
    },
    {
      id: "fvoc-8",
      level: 2,
      type: "truefalse",
      question: "Le mot « bagnole » appartient au niveau de langue soutenu.",
      answer: false,
      explanation:
        "Faux ! « Bagnole » est du langage familier, celui qu'on emploie entre copains. Au niveau courant, on dit « voiture » ; au niveau soutenu, « automobile ». Dans une rédaction, on utilise le niveau courant ou soutenu, jamais le familier.",
    },
    {
      id: "fvoc-9",
      level: 3,
      type: "qcm",
      question: "Quel mot est l'INTRUS dans cette famille : terrain, terrestre, terrible, atterrir ?",
      choices: ["terrain", "terrestre", "terrible", "atterrir"],
      answer: 2,
      explanation:
        "« Terrible » commence par les mêmes lettres, mais il vient de « terreur », pas de « terre » : aucun lien de sens avec le sol ! C'est le piège des familles de mots : il faut vérifier le SENS, pas seulement les lettres. Terrain, terrestre et atterrir parlent tous de la terre.",
      hint: "Lequel de ces mots n'a aucun rapport de sens avec la terre ?",
    },
    {
      id: "fvoc-10",
      level: 3,
      type: "qcm",
      question: "« Après le match, les joueurs vont se restaurer. » À quel niveau de langue appartient « se restaurer » ?",
      choices: ["familier", "courant", "soutenu"],
      answer: 2,
      explanation:
        "« Se restaurer » est la façon soutenue de dire « manger ». La série complète : bouffer (familier), manger (courant), se restaurer (soutenu). Le niveau soutenu s'emploie à l'écrit et dans les situations officielles ; il ne rend pas la phrase « plus fausse », juste plus élégante.",
      hint: "Range la série : bouffer, manger, se restaurer.",
    },
    {
      id: "fvoc-11",
      level: 3,
      type: "input",
      question: "Ajoute un préfixe au verbe « faire » pour obtenir un verbe signifiant « faire de nouveau ».",
      answer: "refaire",
      explanation:
        "re + faire → refaire : le préfixe re- signifie « de nouveau » (relire, revenir, recommencer). Attention : ne le confonds pas avec dé- qui exprime le contraire (défaire = détruire ce qui était fait).",
      hint: "C'est le préfixe de « relire » et « recommencer ».",
    },
    {
      id: "fvoc-12",
      level: 3,
      type: "truefalse",
      question: "Un mot polysémique est un mot qui n'a qu'un seul sens.",
      answer: false,
      explanation:
        "Faux, c'est exactement l'inverse ! Polysémique signifie « qui a plusieurs sens » (poly = plusieurs) : une « souris » est un rongeur ou un accessoire d'ordinateur, une « feuille » pousse sur l'arbre ou sert à écrire. Dans le dictionnaire, chaque sens est numéroté : c'est le signe qu'un mot est polysémique.",
      hint: "Que signifie le préfixe « poly- », comme dans « polygone » ?",
    },
  ],
};
