import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-presente",
  subject: "espagnol",
  grade: "5e",
  num: 3,
  title: "Le présent des verbes réguliers",
  domain: "geometrie",
  domainLabel: "Gramática",
  icon: "Repeat",
  teaser: "Hablar, comer, vivir : trois modèles pour conjuguer presque tous les verbes.",
  objectives: [
    "Je connais les 3 groupes de verbes : -ar, -er, -ir",
    "Je sais conjuguer hablar, comer et vivir au présent",
    "Je sais que le pronom sujet est souvent omis en espagnol",
    "Je sais poser une question simple : ¿dónde vives?",
    "Je sais construire une phrase négative avec no",
  ],
  lesson: [
    {
      title: "Trois groupes : -ar, -er, -ir",
      paragraphs: [
        "En espagnol, tous les verbes à l'infinitif se terminent par -ar, -er ou -ir. C'est la terminaison qui indique le groupe : hablar (parler), comer (manger), vivir (vivre).",
        "Pour conjuguer un verbe régulier, on enlève la terminaison de l'infinitif (le radical reste : habl-, com-, viv-) et on ajoute les terminaisons du groupe.",
        "Bonne nouvelle : la grande majorité des verbes du premier groupe (-ar) sont réguliers. Si tu sais conjuguer hablar, tu sais en conjuguer des centaines !",
      ],
      example: [
        "hablar → parler (groupe -ar)",
        "comer → manger (groupe -er)",
        "vivir → vivre (groupe -ir)",
        "cantar (chanter), bailar (danser), estudiar (étudier) → tous sur le modèle de hablar",
      ],
      tip: "Réflexe à prendre : devant un verbe nouveau, regarde ses deux dernières lettres. -ar, -er ou -ir ? C'est sa carte d'identité.",
    },
    {
      title: "Le modèle -ar : hablar",
      paragraphs: [
        "Hablar au présent : hablo, hablas, habla, hablamos, habláis, hablan.",
        "En détail : (yo) hablo = je parle, (tú) hablas = tu parles, (él/ella) habla = il/elle parle, (nosotros) hablamos = nous parlons, (vosotros) habláis = vous parlez, (ellos/ellas) hablan = ils/elles parlent.",
        "Le h de hablar est muet, comme tous les h espagnols : on prononce « ablar ».",
      ],
      example: [
        "Hablo francés y español. → Je parle français et espagnol.",
        "María canta muy bien. → María chante très bien.",
        "Estudiamos en el colegio. → Nous étudions au collège.",
      ],
      tip: "Les terminaisons -ar à mémoriser : -o, -as, -a, -amos, -áis, -an. La voyelle A du groupe revient presque partout.",
    },
    {
      title: "Les modèles -er et -ir : comer et vivir",
      paragraphs: [
        "Comer au présent : como, comes, come, comemos, coméis, comen. La voyelle du groupe est le E.",
        "Vivir au présent : vivo, vives, vive, vivimos, vivís, viven.",
        "Compare bien -er et -ir : les terminaisons sont identiques SAUF pour nosotros et vosotros : comemos/coméis mais vivimos/vivís. C'est la seule différence !",
      ],
      example: [
        "Como en la cantina. → Je mange à la cantine.",
        "¿Comes chocolate? → Tu manges du chocolat ?",
        "Vivimos en Francia. → Nous vivons en France.",
        "Mis abuelos viven en España. → Mes grands-parents vivent en Espagne.",
      ],
      tip: "Quel que soit le groupe, la 1re personne finit toujours en -o : hablo, como, vivo. Facile à retenir : « yo » → -o !",
    },
    {
      title: "Le pronom sujet ? Souvent inutile !",
      paragraphs: [
        "En français, on doit dire « je parle », « tu manges ». En espagnol, le pronom est presque toujours omis : « Hablo », « Comes » suffisent, car la terminaison indique déjà qui fait l'action.",
        "On garde le pronom seulement pour insister ou comparer : « Yo hablo francés y tú hablas español » (moi je parle français et toi tu parles espagnol).",
        "Donc quand tu lis une phrase espagnole sans pronom, regarde la fin du verbe pour savoir qui agit : -o → je, -as/-es → tu, etc.",
      ],
      example: [
        "Vivo en París. → J'habite à Paris. (pas besoin de « yo »)",
        "¿Hablas inglés? → Est-ce que tu parles anglais ?",
        "Cantan en el coro. → Ils chantent dans la chorale.",
      ],
      tip: "Traduire « je », « tu », « il » mot à mot est un réflexe de francophone. En espagnol, fais confiance à la terminaison du verbe.",
    },
    {
      title: "Questions simples et négation avec no",
      paragraphs: [
        "Pour poser une question, pas besoin d'inversion : on garde l'ordre de la phrase et on encadre de ¿ … ? à l'écrit. À l'oral, seule l'intonation monte : ¿Hablas español?",
        "Avec un mot interrogatif : ¿Dónde vives? (où habites-tu ?), ¿Qué comes? (que manges-tu ?). Les mots interrogatifs portent toujours un accent écrit : dónde, qué, cómo, cuántos.",
        "La négation est très simple : on place « no » juste devant le verbe. Hablo → No hablo (je ne parle pas). Un seul mot, pas de « ne… pas » en deux morceaux comme en français !",
      ],
      example: [
        "¿Dónde vives? — Vivo en Lyon. → Où habites-tu ? — J'habite à Lyon.",
        "No hablo chino. → Je ne parle pas chinois.",
        "Elena no come carne. → Elena ne mange pas de viande.",
      ],
      tip: "Piège du francophone : ne cherche pas à traduire « pas ». « No » tout seul, devant le verbe, suffit : no como, no vivo, no hablan.",
    },
  ],
  exercises: [
    {
      id: "es3-1",
      level: 1,
      type: "qcm",
      question: "À quel groupe appartient le verbe « comer » (manger) ?",
      choices: ["Le groupe -ar", "Le groupe -er", "Le groupe -ir", "Il est irrégulier"],
      answer: 1,
      explanation:
        "Le groupe se lit dans les deux dernières lettres de l'infinitif : comER → groupe -er. Ses terminaisons au présent : como, comes, come, comemos, coméis, comen.",
      hint: "Regarde les deux dernières lettres de l'infinitif.",
    },
    {
      id: "es3-2",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « je parle » en espagnol ?",
      choices: ["hablas", "habla", "hablo", "hablan"],
      answer: 2,
      explanation:
        "La 1re personne du singulier se termine toujours en -o au présent : hablo = je parle. « Hablas » = tu parles, « habla » = il/elle parle, « hablan » = ils/elles parlent.",
      hint: "« Yo » → la terminaison est un -o.",
    },
    {
      id: "es3-3",
      level: 1,
      type: "truefalse",
      question: "En espagnol, on est obligé de mettre le pronom sujet : « yo hablo », jamais « hablo » tout seul.",
      answer: false,
      explanation:
        "Faux ! C'est même l'inverse : le pronom est presque toujours omis, car la terminaison du verbe suffit à indiquer la personne. « Hablo » = je parle. On n'ajoute « yo » que pour insister.",
    },
    {
      id: "es3-4",
      level: 1,
      type: "input",
      question: "Complète avec le verbe vivir : « (yo) … en Francia » (j'habite en France).",
      answer: "vivo",
      explanation:
        "Vivo en Francia = j'habite en France. Vivir est régulier : vivo, vives, vive, vivimos, vivís, viven. À la 1re personne, tous les verbes réguliers finissent en -o.",
      hint: "Radical viv- + la terminaison de « yo ».",
    },
    {
      id: "es3-5",
      level: 2,
      type: "qcm",
      question: "Quelle est la forme correcte : « nosotros … en la cantina » (nous mangeons à la cantine) ?",
      choices: ["comemos", "comimos", "comen", "comes"],
      answer: 0,
      explanation:
        "Nosotros + comer → comemos (terminaison -emos pour le groupe -er). « Comen » = ils mangent, « comes » = tu manges. Attention au piège « comimos » qui n'est pas le présent.",
      hint: "La terminaison de « nosotros » contient -mos.",
    },
    {
      id: "es3-6",
      level: 2,
      type: "input",
      question: "Mets à la forme négative : « hablo inglés » → « … hablo inglés » (un seul mot).",
      answer: "no",
      explanation:
        "La négation espagnole se fait avec « no » placé juste devant le verbe : No hablo inglés = je ne parle pas anglais. Pas de « ne… pas » en deux morceaux : « no » tout seul suffit.",
      hint: "Un seul petit mot, placé devant le verbe.",
    },
    {
      id: "es3-7",
      level: 2,
      type: "qcm",
      question: "Que signifie la question « ¿Dónde vives? » ?",
      choices: ["Que manges-tu ?", "Où habites-tu ?", "Comment t'appelles-tu ?", "Quand vis-tu ?"],
      answer: 1,
      explanation:
        "¿Dónde? = où, vives = tu habites (vivir, 2e personne) → « Où habites-tu ? ». On répond : « Vivo en… ». Rappelle-toi que les mots interrogatifs portent un accent écrit : dónde, qué, cómo.",
      hint: "« Vivir » veut dire vivre/habiter.",
    },
    {
      id: "es3-8",
      level: 2,
      type: "input",
      question: "Complète avec le verbe cantar (chanter, régulier en -ar) : « ellos … en el coro » (ils chantent dans la chorale).",
      answer: "cantan",
      explanation:
        "Cantar se conjugue comme hablar : la 3e personne du pluriel est cantan (terminaison -an). Ellos cantan = ils chantent. Pour le groupe -ar : -o, -as, -a, -amos, -áis, -an.",
      hint: "Conjugue comme « hablan », mais avec le radical cant-.",
    },
    {
      id: "es3-9",
      level: 3,
      type: "qcm",
      question: "« Coméis » et « vivís » : à quelle personne correspondent ces deux formes ?",
      choices: ["nosotros (nous)", "vosotros (vous)", "ellos (ils)", "tú (tu)"],
      answer: 1,
      explanation:
        "Coméis (comer) et vivís (vivir) sont les formes de vosotros = vous : vous mangez, vous vivez. C'est justement à nosotros/vosotros que les groupes -er et -ir se distinguent : coméis mais vivís.",
      hint: "Les terminaisons -éis / -ís avec accent sont typiques d'une seule personne.",
    },
    {
      id: "es3-10",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « Elena ne mange pas » (3 mots).",
      answer: "elena no come",
      explanation:
        "Elena no come : « no » se place juste devant le verbe, et comer à la 3e personne du singulier donne « come ». Ordre fixe : sujet + no + verbe. Jamais « Elena come no » !",
      hint: "Sujet + no + verbe conjugué à la 3e personne.",
    },
    {
      id: "es3-11",
      level: 3,
      type: "truefalse",
      question: "Dans la phrase « Estudiamos español », c'est « nous » qui étudions, même sans pronom.",
      answer: true,
      explanation:
        "Vrai ! La terminaison -amos est celle de nosotros : estudiamos = nous étudions. Le pronom est omis car la terminaison suffit. C'est le grand réflexe espagnol : lire la personne dans la fin du verbe.",
    },
    {
      id: "es3-12",
      level: 3,
      type: "input",
      question: "Réponds en espagnol à « ¿Dónde vives? » si tu habites à Madrid : « … en madrid » (un seul mot).",
      answer: "vivo",
      explanation:
        "Vivo en Madrid = j'habite à Madrid. La question est à « tu » (vives), la réponse passe à « je » : vivo. Piège classique : répéter « vives » dans la réponse — non, il faut changer de personne !",
      hint: "La question dit « vives » (tu) ; toi, tu réponds avec la forme de « je ».",
    },
  ],
};
