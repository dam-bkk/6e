import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-familia",
  subject: "espagnol",
  grade: "5e",
  num: 4,
  title: "La familia y las descripciones",
  domain: "nombres",
  domainLabel: "Vocabulario",
  icon: "House",
  teaser: "Présenter sa famille et décrire les gens : mi madre es alta y tiene los ojos verdes.",
  objectives: [
    "Je connais le vocabulaire de la famille : padre, madre, hermano…",
    "Je sais utiliser les possessifs mi/tu/su et mis/tus/sus",
    "Je sais conjuguer tener au présent : tengo, tienes…",
    "Je sais décrire quelqu'un avec ser + adjectif accordé (alto/alta)",
    "Je connais les couleurs et le vocabulaire du visage : el pelo, los ojos",
  ],
  lesson: [
    {
      title: "La familia : le vocabulaire",
      figure: "es-familia",
      paragraphs: [
        "La famille proche : el padre (le père), la madre (la mère), los padres (les parents — attention, pas « les pères » !), el hermano (le frère), la hermana (la sœur), los hermanos (les frères et sœurs).",
        "Les grands-parents : el abuelo, la abuela, los abuelos. Les autres : el tío / la tía (l'oncle / la tante), el primo / la prima (le cousin / la cousine), el hijo / la hija (le fils / la fille).",
        "Astuce de lecture : le masculin pluriel désigne souvent le groupe mixte : los abuelos = les grands-parents (grand-père + grand-mère), los tíos = l'oncle et la tante.",
      ],
      example: [
        "Mi padre se llama Carlos. → Mon père s'appelle Carlos.",
        "Tengo dos hermanos. → J'ai deux frères et sœurs.",
        "Mis abuelos viven en España. → Mes grands-parents vivent en Espagne.",
      ],
      tip: "Piège de traduction : « los padres » = les parents, pas « les pères ». De même, « los hijos » = les enfants (fils + filles).",
    },
    {
      title: "Les possessifs : mi, tu, su…",
      paragraphs: [
        "Les possessifs du singulier : mi (mon/ma), tu (ton/ta), su (son/sa). Bonne nouvelle : pas de différence masculin/féminin ! Mi padre, mi madre : le même mot pour « mon » et « ma ».",
        "Au pluriel, on ajoute simplement un -s : mis (mes), tus (tes), sus (ses). Mis hermanos = mes frères et sœurs.",
        "Attention : « tu » possessif s'écrit SANS accent (tu hermano = ton frère), alors que « tú » avec accent = le pronom « tu » (tú hablas = toi tu parles).",
      ],
      example: [
        "mi casa → ma maison / mi perro → mon chien",
        "tu hermana → ta sœur / tus hermanas → tes sœurs",
        "su madre → sa mère / sus abuelos → ses grands-parents",
      ],
      tip: "Le possessif s'accorde avec la chose possédée, pas avec le possesseur : une seule règle → pluriel = +s (mi → mis).",
    },
    {
      title: "Le verbe tener (avoir)",
      paragraphs: [
        "TENER (avoir) est un verbe clé, un peu irrégulier : tengo, tienes, tiene, tenemos, tenéis, tienen.",
        "Il sert à dire ce qu'on possède (Tengo un perro = j'ai un chien), l'âge (Tengo doce años) et à décrire (Tiene los ojos azules = il/elle a les yeux bleus).",
        "Repère les irrégularités : la 1re personne « tengo » avec son g, et le e qui devient ie dans tienes, tiene, tienen. Seuls tenemos et tenéis sont sages.",
      ],
      example: [
        "Tengo dos hermanas. → J'ai deux sœurs.",
        "¿Tienes mascotas? → Tu as des animaux ?",
        "Mi prima tiene diez años. → Ma cousine a dix ans.",
      ],
      tip: "Mémorise le trio irrégulier en chantant : TENGO, TIENES, TIENE… puis le calme : tenemos, tenéis… et ça repart : TIENEN.",
    },
    {
      title: "Décrire avec ser + adjectif : alto, alta…",
      paragraphs: [
        "Pour décrire le physique ou le caractère, on utilise SER + un adjectif : Mi padre es alto (mon père est grand), Mi madre es alta (ma mère est grande).",
        "L'adjectif s'accorde : masculin en -o → féminin en -a (alto/alta, bajo/baja, guapo/guapa, simpático/simpática). Les adjectifs en -e ne changent pas : inteligente, grande.",
        "Au pluriel, on ajoute -s : Mis hermanos son altos. Quelques adjectifs utiles : alto (grand), bajo (petit), delgado (mince), simpático (sympa), divertido (drôle), tímido (timide).",
      ],
      example: [
        "Mi hermano es divertido. → Mon frère est drôle.",
        "Mi hermana es divertida. → Ma sœur est drôle.",
        "Mis primas son simpáticas. → Mes cousines sont sympas.",
      ],
      tip: "Réflexe accord : qui est décrit ? Un garçon → -o, une fille → -a, plusieurs → +s. Vérifie la fin de l'adjectif AVANT de valider ta phrase.",
    },
    {
      title: "Couleurs, pelo y ojos",
      paragraphs: [
        "Les couleurs principales : rojo (rouge), azul (bleu), verde (vert), amarillo (jaune), negro (noir), blanco (blanc), marrón (marron), naranja (orange), gris (gris), rosa (rose).",
        "Pour les cheveux et les yeux, l'espagnol utilise TENER + article défini : Tengo el pelo castaño (j'ai les cheveux châtains), Tiene los ojos verdes (il/elle a les yeux verts).",
        "Remarque : « el pelo » est un singulier en espagnol (littéralement « le cheveu ») : l'adjectif reste au singulier → el pelo negro. Mais « los ojos » est pluriel → los ojos azules.",
      ],
      example: [
        "Tengo el pelo rubio y los ojos marrones. → J'ai les cheveux blonds et les yeux marron.",
        "Mi madre tiene los ojos verdes. → Ma mère a les yeux verts.",
        "El gato es negro y blanco. → Le chat est noir et blanc.",
      ],
      tip: "Piège : « el pelo » est singulier (pelo castaño, sans -s) alors que le français dit « les cheveux ». À l'inverse, « los ojos » s'accorde bien au pluriel : ojos azules.",
    },
  ],
  exercises: [
    {
      id: "es4-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « la sœur » en espagnol ?",
      choices: ["la abuela", "la hermana", "la tía", "la prima"],
      answer: 1,
      explanation:
        "La hermana = la sœur (et el hermano = le frère). « La abuela » = la grand-mère, « la tía » = la tante, « la prima » = la cousine.",
      hint: "C'est le féminin de « el hermano ».",
    },
    {
      id: "es4-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « los padres » ?",
      choices: ["Les pères", "Les parents", "Les grands-parents", "Les enfants"],
      answer: 1,
      explanation:
        "« Los padres » = les parents (le père + la mère). C'est un piège de traduction : le masculin pluriel désigne le groupe mixte. « Les grands-parents » = los abuelos, « les enfants » = los hijos.",
      hint: "Le masculin pluriel désigne souvent un groupe mixte.",
    },
    {
      id: "es4-3",
      level: 1,
      type: "truefalse",
      question: "En espagnol, on dit « mi madre » ET « mi padre » : le possessif « mi » ne change pas au féminin.",
      answer: true,
      explanation:
        "Vrai ! Contrairement au français (mon/ma), « mi » est le même au masculin et au féminin : mi padre, mi madre. Il ne change qu'au pluriel : mis padres.",
    },
    {
      id: "es4-4",
      level: 1,
      type: "input",
      question: "Complète avec le verbe tener : « (yo) … un perro » (j'ai un chien).",
      answer: "tengo",
      explanation:
        "Tengo un perro = j'ai un chien. Tener est irrégulier à la 1re personne : tengo (avec un g). La suite : tienes, tiene, tenemos, tenéis, tienen.",
      hint: "C'est la même forme que dans « tengo doce años ».",
    },
    {
      id: "es4-5",
      level: 2,
      type: "qcm",
      question: "Choisis la phrase correcte pour décrire une fille grande :",
      choices: ["Mi hermana es alto", "Mi hermana es alta", "Mi hermana está alto", "Mi hermana es altos"],
      answer: 1,
      explanation:
        "On décrit avec SER, et l'adjectif s'accorde avec la personne décrite : hermana (féminin singulier) → alta. « Alto » serait pour un garçon, « altos » pour plusieurs. Mi hermana es alta.",
      hint: "Qui est décrit ? Une fille → l'adjectif finit en -a.",
    },
    {
      id: "es4-6",
      level: 2,
      type: "input",
      question: "Mets le possessif au pluriel : « mi abuelo » → « … abuelos » (un seul mot).",
      answer: "mis",
      explanation:
        "Devant un nom pluriel, le possessif prend un -s : mi → mis. Mis abuelos = mes grands-parents. Même règle pour tu → tus et su → sus : le possessif s'accorde avec la chose possédée.",
      hint: "Le possessif prend la même marque que le nom : un -s.",
    },
    {
      id: "es4-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « il a les yeux bleus » ?",
      choices: ["Es los ojos azules", "Tiene los ojos azules", "Tengo los ojos azules", "Tiene el ojos azul"],
      answer: 1,
      explanation:
        "Pour décrire les yeux ou les cheveux, on utilise TENER + article : (Él) tiene los ojos azules. « Tengo » = j'ai (mauvaise personne), et « es los ojos » est impossible : on ne décrit pas les yeux avec ser.",
      hint: "« Avoir les yeux… » : quel verbe, et à quelle personne ?",
    },
    {
      id: "es4-8",
      level: 2,
      type: "input",
      question: "Complète avec la couleur : « la tomate est rouge » → « el tomate es … » (couleur au masculin).",
      answer: "rojo",
      explanation:
        "Rouge = rojo. « El tomate » est masculin, donc l'adjectif reste en -o : el tomate es rojo. Prononciation : le j espagnol est un son raclé, « ro-Ho ». Au féminin, on dirait roja (la fresa es roja).",
      hint: "Cette couleur commence par r et son j se prononce comme une jota.",
    },
    {
      id: "es4-9",
      level: 3,
      type: "qcm",
      question: "« Mi prima y su madre … el pelo negro » (ma cousine et sa mère ont les cheveux noirs). Quelle forme de tener ?",
      choices: ["tiene", "tienes", "tienen", "tenemos"],
      answer: 2,
      explanation:
        "Le sujet est « mi prima y su madre » = elles (deux personnes) → 3e personne du pluriel : tienen. Remarque aussi : « el pelo negro » reste au singulier en espagnol, même si le français dit « les cheveux noirs ».",
      hint: "Deux personnes = ils/elles → quelle terminaison ?",
    },
    {
      id: "es4-10",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « ma mère est petite » (4 mots ; petit = bajo).",
      answer: "mi madre es baja",
      explanation:
        "Mi madre es baja : possessif mi + madre + ser (es) + adjectif accordé au féminin (bajo → baja). Deux pièges évités : « mi » ne change pas au féminin, mais l'adjectif, lui, s'accorde !",
      hint: "Possessif + nom + verbe ser + adjectif au féminin.",
    },
    {
      id: "es4-11",
      level: 3,
      type: "truefalse",
      question: "Dans « tu hermano tiene tu libro », les deux « tu » s'écrivent sans accent car ce sont des possessifs.",
      answer: true,
      explanation:
        "Vrai ! Le possessif « tu » (ton/ta) s'écrit sans accent : tu hermano = ton frère, tu libro = ton livre. C'est « tú » avec accent qui est le pronom sujet : tú tienes = toi, tu as.",
    },
    {
      id: "es4-12",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « j'ai les cheveux châtains » (4 mots ; châtain = castaño).",
      answer: "tengo el pelo castaño",
      accept: ["tengo el pelo castano"],
      explanation:
        "Tengo el pelo castaño : tener + article défini + pelo au SINGULIER. Piège principal : le français dit « les cheveux » au pluriel, mais l'espagnol dit « el pelo » au singulier — l'adjectif reste donc castaño, sans -s.",
      hint: "En espagnol, « les cheveux » se dit au singulier : el pelo.",
    },
  ],
  videos: [
    {
      title: "CONVERSATION en ESPAGNOL : La famille 👩‍👩‍👦 Vocabulaire + Quiz",
      youtubeId: "CdbAca8Ewvs",
      channel: "Espagnol Passion !",
    },
  ],
};
