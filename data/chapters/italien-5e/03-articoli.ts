import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-articoli",
  subject: "italien",
  grade: "5e",
  num: 3,
  title: "Les articles : il, la, lo…",
  domain: "geometrie",
  domainLabel: "Grammatica",
  icon: "Shapes",
  teaser: "Il libro, la casa, lo zaino… choisir le bon article et former le pluriel.",
  objectives: [
    "Je sais reconnaître le masculin et le féminin d'un nom italien",
    "Je connais les articles définis : il, la, lo, l', i, le, gli",
    "Je sais quand utiliser lo (devant s + consonne et z)",
    "Je connais les articles indéfinis : un, una, uno, un'",
    "Je sais former le pluriel : il libro → i libri, la casa → le case",
  ],
  lesson: [
    {
      title: "Masculin ou féminin ?",
      paragraphs: [
        "En italien, la fin du mot t'aide énormément : la plupart des noms en -o sont masculins (il libro, il gatto) et la plupart des noms en -a sont féminins (la casa, la scuola).",
        "Les noms en -e peuvent être des deux genres, il faut les apprendre avec leur article : il cane (le chien, masculin), la classe (la classe, féminin).",
        "Attention : le genre italien n'est pas toujours le même qu'en français ! Il mare (la mer, masculin en italien), il fiore (la fleur, masculin).",
      ],
      example: [
        "il libro → le livre (masculin en -o)",
        "la casa → la maison (féminin en -a)",
        "il cane → le chien (masculin en -e)",
        "la notte → la nuit (féminin en -e)",
      ],
      tip: "Réflexe à prendre : apprends toujours un nom AVEC son article (il libro, la casa), jamais tout seul. C'est le seul moyen de retenir le genre sans erreur.",
    },
    {
      title: "Les articles définis au singulier : il, la, lo, l'",
      paragraphs: [
        "Au masculin, l'article normal est « il » : il libro, il gatto, il quaderno.",
        "Mais devant un mot qui commence par s + consonne (st, sp, sc…) ou par z, le masculin prend « lo » : lo studente (l'étudiant), lo zaino (le sac à dos), lo sport, lo specchio (le miroir). C'est le fameux « lo » !",
        "Au féminin, l'article est « la » : la casa, la scuola, la penna.",
        "Devant une voyelle, il et la deviennent tous les deux « l' » : l'amico (l'ami), l'amica (l'amie), l'acqua (l'eau).",
      ],
      example: [
        "il gatto → le chat (masculin normal)",
        "lo zaino → le sac à dos (z : article lo)",
        "lo studente → l'étudiant (s + consonne : article lo)",
        "la pizza → la pizza",
        "l'albero → l'arbre (voyelle : l')",
      ],
      tip: "Pourquoi « lo » ? Essaie de dire « il studente » à voix haute : « il-stu » est dur à prononcer. « Lo studente » glisse tout seul. L'italien choisit toujours ce qui est le plus facile à prononcer !",
    },
    {
      title: "Les articles définis au pluriel : i, le, gli",
      paragraphs: [
        "Au pluriel, « il » devient « i » : il libro → i libri (les livres).",
        "« La » devient « le » : la casa → le case (les maisons).",
        "Et « lo » et « l' » (masculin) deviennent « gli » : lo zaino → gli zaini, l'amico → gli amici. Rappelle-toi la prononciation : gli = l mouillé, comme « ill » dans « famille ».",
        "Au féminin, « l' » devient « le » : l'amica → le amiche.",
      ],
      example: [
        "il quaderno → i quaderni (les cahiers)",
        "la penna → le penne (les stylos)",
        "lo sport → gli sport (les sports)",
        "l'amico → gli amici (les amis)",
      ],
      tip: "Le couple à mémoriser : lo → gli. Là où le singulier prend lo (ou l' au masculin), le pluriel prend gli. Lo zaino → gli zaini, l'albero → gli alberi.",
    },
    {
      title: "Les articles indéfinis : un, una, uno, un'",
      paragraphs: [
        "Un / une suit la même logique que les articles définis. Au masculin : « un » (un libro, un amico — sans apostrophe devant voyelle !).",
        "Devant s + consonne ou z, le masculin prend « uno » : uno studente, uno zaino, uno sport. Même règle que pour « lo ».",
        "Au féminin : « una » (una casa), qui devient « un' » avec apostrophe devant une voyelle : un'amica (une amie).",
        "Petit piège d'orthographe : un amico (masculin, sans apostrophe) mais un'amica (féminin, avec apostrophe). L'apostrophe indique que c'est « una » qui a perdu son a.",
      ],
      example: [
        "un libro → un livre",
        "uno zaino → un sac à dos",
        "una scuola → une école",
        "un amico → un ami (pas d'apostrophe)",
        "un'amica → une amie (apostrophe !)",
      ],
      tip: "Là où tu dirais « lo », dis « uno » : lo zaino → uno zaino, lo studente → uno studente. Les deux règles marchent ensemble.",
    },
    {
      title: "Le pluriel des noms : -i et -e",
      paragraphs: [
        "L'italien ne met jamais de s au pluriel ! Les noms changent leur dernière voyelle.",
        "Les masculins en -o passent à -i : il libro → i libri, il gatto → i gatti.",
        "Les féminins en -a passent à -e : la casa → le case, la pizza → le pizze.",
        "Les noms en -e (masculins ou féminins) passent à -i : il cane → i cani, la classe → le classi.",
      ],
      example: [
        "il libro → i libri",
        "la casa → le case",
        "il cane → i cani",
        "la notte → le notti",
      ],
      tip: "Oublie le s du pluriel français et anglais : en italien, c'est la dernière lettre qui change. « Les pizzas » se dit « le pizze » — écrire « le pizzas » est une faute typique de francophone.",
    },
  ],
  exercises: [
    {
      id: "it3-1",
      level: 1,
      type: "qcm",
      question: "Quel est le bon article défini pour « libro » (livre) ?",
      choices: ["la", "lo", "il", "le"],
      answer: 2,
      explanation:
        "« Il libro » : libro est masculin (finale en -o) et commence par une consonne simple, donc article « il ». « Lo » est réservé aux mots en s + consonne ou z, « la » et « le » sont féminins.",
      hint: "Masculin en -o, qui commence par une consonne ordinaire.",
    },
    {
      id: "it3-2",
      level: 1,
      type: "qcm",
      question: "Quel est le bon article défini pour « zaino » (sac à dos) ?",
      choices: ["il", "lo", "la", "un"],
      answer: 1,
      explanation:
        "« Lo zaino » : devant un mot masculin qui commence par z, l'article est « lo », pas « il ». Même règle devant s + consonne : lo studente, lo sport. « Un » est un article indéfini, pas défini.",
      hint: "Regarde la première lettre du mot : c'est un z…",
    },
    {
      id: "it3-3",
      level: 1,
      type: "truefalse",
      question: "En italien, la plupart des noms qui finissent en -a sont féminins.",
      answer: true,
      explanation:
        "Vrai ! La finale -a est presque toujours féminine (la casa, la scuola, la pizza) et la finale -o presque toujours masculine (il libro, il gatto). Il existe quelques exceptions, mais la règle marche dans la grande majorité des cas.",
    },
    {
      id: "it3-4",
      level: 1,
      type: "input",
      question: "Mets au pluriel : « il libro » → « i … » (un seul mot).",
      answer: "libri",
      explanation:
        "Il libro → i libri : au pluriel, le masculin en -o passe à -i, et l'article « il » devient « i ». Pas de s en italien : jamais « i libros » !",
      hint: "Change la dernière lettre du nom : -o devient…",
    },
    {
      id: "it3-5",
      level: 2,
      type: "qcm",
      question: "Quel est le pluriel de « lo studente » (l'étudiant) ?",
      choices: ["i studenti", "gli studenti", "le studenti", "los studentes"],
      answer: 1,
      explanation:
        "« Gli studenti » : au pluriel, « lo » devient « gli » (prononcé avec un l mouillé, « yi »). « I » est le pluriel de « il » seulement. Et « los studentes »… c'est de l'espagnol !",
      hint: "Le pluriel de « lo » n'est pas « i » : c'est le fameux article en trois lettres.",
    },
    {
      id: "it3-6",
      level: 2,
      type: "input",
      question: "Mets au pluriel : « la casa » → « le … » (un seul mot).",
      answer: "case",
      explanation:
        "La casa → le case : au pluriel, le féminin en -a passe à -e, et « la » devient « le ». Attention au réflexe français : pas de s ! « Le case » = les maisons.",
      hint: "Le féminin en -a change sa dernière lettre en…",
    },
    {
      id: "it3-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « un étudiant » en italien ?",
      choices: ["un studente", "uno studente", "un' studente", "una studente"],
      answer: 1,
      explanation:
        "« Uno studente » : devant s + consonne (st), le masculin prend « uno », comme il prend « lo » pour l'article défini. « Un studente » est la faute classique. « Una » et « un' » sont féminins.",
      hint: "Même logique que « lo studente » : quel indéfini correspond à « lo » ?",
    },
    {
      id: "it3-8",
      level: 2,
      type: "truefalse",
      question: "On écrit « un amico » (un ami) sans apostrophe, mais « un'amica » (une amie) avec apostrophe.",
      answer: true,
      explanation:
        "Vrai ! Au masculin, « un » s'écrit tel quel devant une voyelle (un amico). Au féminin, c'est « una » qui perd son a et le remplace par une apostrophe : un'amica. L'apostrophe est donc la marque du féminin !",
      hint: "Demande-toi quel article a « perdu » une lettre : un… ou una ?",
    },
    {
      id: "it3-9",
      level: 3,
      type: "input",
      question: "Écris l'article défini pluriel qui manque : « … amici » (les amis).",
      answer: "gli",
      explanation:
        "« Gli amici » : au singulier on dit l'amico (masculin devant voyelle), et le pluriel de l' (masculin) est « gli ». Prononciation : « yi amitchi », avec le l mouillé de famiglia.",
      hint: "Singulier : l'amico. Le pluriel du masculin l' est le même que celui de « lo ».",
    },
    {
      id: "it3-10",
      level: 3,
      type: "qcm",
      question: "Quelle liste est entièrement correcte ?",
      choices: [
        "il zaino, i zaini",
        "lo zaino, gli zaini",
        "lo zaino, i zaini",
        "il zaino, gli zaini",
      ],
      answer: 1,
      explanation:
        "« Lo zaino, gli zaini » : devant z, le masculin prend « lo » au singulier et « gli » au pluriel. Les couples d'articles vont toujours ensemble : il → i, la → le, lo / l' (masc.) → gli.",
      hint: "Devant z : quel singulier, et quel est SON pluriel ?",
    },
    {
      id: "it3-11",
      level: 3,
      type: "input",
      question: "Mets au pluriel : « il cane » (le chien) → « i … » (un seul mot).",
      answer: "cani",
      explanation:
        "Il cane → i cani : les noms en -e font leur pluriel en -i, qu'ils soient masculins ou féminins (il cane → i cani, la classe → le classi). Trois finales de singulier (-o, -a, -e), mais seulement deux de pluriel (-i, -e).",
      hint: "Les noms en -e ont le même pluriel que les noms en -o.",
    },
    {
      id: "it3-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Ho due gattos » est une façon correcte de dire « j'ai deux chats ».",
      answer: false,
      explanation:
        "Faux ! L'italien ne forme jamais le pluriel avec un s : il gatto → i gatti. La phrase correcte est « Ho due gatti ». Le s final du pluriel n'existe qu'en français, en anglais ou en espagnol — pas en italien.",
      hint: "Comment l'italien marque-t-il le pluriel : avec un s ou en changeant la voyelle ?",
    },
  ],
};
