import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-ser-articulos",
  subject: "espagnol",
  grade: "5e",
  num: 2,
  title: "Ser, estar et les articles",
  domain: "geometrie",
  domainLabel: "Gramática",
  icon: "Anchor",
  teaser: "Deux verbes pour dire « être », et les petits mots el, la, un, una.",
  objectives: [
    "Je sais conjuguer ser au présent : soy, eres, es…",
    "Je découvre estar pour dire où l'on est et comment on se sent",
    "Je sais choisir entre ser et estar dans les cas simples",
    "Je connais les articles définis el/la/los/las et indéfinis un/una/unos/unas",
    "Je sais reconnaître le genre et le nombre d'un nom (et ses pièges)",
  ],
  lesson: [
    {
      title: "Le verbe ser au présent",
      paragraphs: [
        "SER est le verbe « être » de l'identité : il sert à dire qui on est, sa nationalité, son métier, comment on est de caractère.",
        "Conjugaison au présent : yo soy (je suis), tú eres (tu es), él/ella es (il/elle est), nosotros somos (nous sommes), vosotros sois (vous êtes), ellos/ellas son (ils/elles sont).",
        "En espagnol, on n'est pas obligé de dire le pronom : « Soy Emma » suffit, pas besoin de « yo ». La terminaison du verbe indique déjà la personne.",
      ],
      example: [
        "Soy francesa. → Je suis française.",
        "Eres mi amigo. → Tu es mon ami.",
        "Marta es simpática. → Marta est sympathique.",
        "Somos alumnos. → Nous sommes élèves.",
      ],
      tip: "Retiens la chanson : soy, eres, es, somos, sois, son. Six formes, toutes très courtes — répète-les à voix haute trois fois et elles restent !",
    },
    {
      title: "Découverte de estar",
      paragraphs: [
        "ESTAR est le deuxième verbe « être ». On l'utilise pour dire OÙ on se trouve (la localisation) et COMMENT on se sent à un moment donné (l'état).",
        "Conjugaison au présent : estoy, estás, está, estamos, estáis, están.",
        "C'est le verbe de la question très courante « ¿Cómo estás? » (comment vas-tu ?), à laquelle on répond « Estoy bien » (je vais bien).",
      ],
      example: [
        "Estoy en clase. → Je suis en classe. (localisation)",
        "¿Dónde está Madrid? → Où se trouve Madrid ?",
        "Estoy cansada. → Je suis fatiguée. (état du moment)",
      ],
      tip: "Prononciation : estás, está, estáis, están portent un accent écrit sur le a — la voix appuie sur cette syllabe : es-TÁS.",
    },
    {
      title: "Ser ou estar ? La règle simple",
      paragraphs: [
        "Version simple pour débuter : SER = ce qu'on est vraiment, ce qui ne change pas (identité, nationalité, caractère). ESTAR = où l'on est et comment on va en ce moment (lieu, état passager).",
        "Compare : « Soy alegre » (je suis quelqu'un de joyeux, c'est mon caractère) et « Estoy triste » (je suis triste aujourd'hui, ça passera).",
        "Pour le lieu, c'est toujours estar : « El libro está en la mesa » (le livre est sur la table).",
      ],
      example: [
        "Pablo es español. → identité, nationalité → SER",
        "Pablo está en Francia. → localisation → ESTAR",
        "La sopa está fría. → état du moment → ESTAR",
      ],
      tip: "Moyen mnémotechnique : ESTAR comme « ÉTAt » et « où tu es garé » — l'état et le lieu. Tout le reste (identité, caractère), c'est SER.",
    },
    {
      title: "Les articles définis et indéfinis",
      paragraphs: [
        "Les articles définis (le, la, les) : el (masculin singulier), la (féminin singulier), los (masculin pluriel), las (féminin pluriel). El chico, la chica, los chicos, las chicas.",
        "Les articles indéfinis (un, une, des) : un, una, unos, unas. Un libro (un livre), una casa (une maison), unos libros (des livres), unas casas (des maisons).",
        "Contrairement au français, l'espagnol a donc QUATRE formes pour « les » et « des » : il faut accorder en genre ET en nombre.",
      ],
      example: [
        "el profesor / los profesores → le professeur / les professeurs",
        "la amiga / las amigas → l'amie / les amies",
        "un gato / unos gatos → un chat / des chats",
        "una mesa / unas mesas → une table / des tables",
      ],
      tip: "En français, « les » est unique. En espagnol, demande-toi toujours : masculin ou féminin ? → los ou las.",
    },
    {
      title: "Le genre et le nombre des noms",
      paragraphs: [
        "Règle générale : les noms en -o sont masculins (el libro, el bolígrafo), les noms en -a sont féminins (la mesa, la casa).",
        "Mais il y a des pièges célèbres : el problema, el día, el mapa sont MASCULINS malgré leur -a ; et la mano (la main) est FÉMININ malgré son -o.",
        "Le pluriel est facile : on ajoute -s après une voyelle (libro → libros) et -es après une consonne (profesor → profesores).",
      ],
      example: [
        "el problema → le problème (masculin, piège !)",
        "la mano → la main (féminin, piège !)",
        "el día → le jour (masculin, piège !)",
        "la ciudad → las ciudades (pluriel en -es)",
      ],
      tip: "Apprends chaque piège avec son article collé au mot : dis toujours « EL problema », « LA mano », jamais le nom tout seul.",
    },
  ],
  exercises: [
    {
      id: "es2-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la forme du verbe ser pour « yo » (je) ?",
      choices: ["eres", "es", "soy", "son"],
      answer: 2,
      explanation:
        "Yo soy = je suis. La conjugaison complète de ser : soy, eres, es, somos, sois, son. « Eres » = tu es, « es » = il/elle est, « son » = ils/elles sont.",
      hint: "C'est la forme qu'on utilise dans « … de Francia » pour dire son origine.",
    },
    {
      id: "es2-2",
      level: 1,
      type: "qcm",
      question: "Quel article définit correctement le mot « chica » (fille) ?",
      choices: ["el chica", "la chica", "los chica", "un chica"],
      answer: 1,
      explanation:
        "« Chica » se termine en -a : c'est un nom féminin singulier, donc l'article défini est « la » → la chica. « El » est masculin, « los » est pluriel, « un » est masculin.",
      hint: "Le mot se termine en -a : masculin ou féminin ?",
    },
    {
      id: "es2-3",
      level: 1,
      type: "truefalse",
      question: "Pour dire où l'on se trouve, on utilise le verbe estar.",
      answer: true,
      explanation:
        "Vrai ! La localisation, c'est toujours estar : « Estoy en Madrid », « El libro está en la mesa ». Ser sert à l'identité et au caractère, jamais au lieu.",
    },
    {
      id: "es2-4",
      level: 1,
      type: "input",
      question: "Complète avec le verbe ser : « tú … mi amigo » (tu es mon ami).",
      answer: "eres",
      explanation:
        "Tú eres = tu es. Attention à ne pas confondre avec « es » (il/elle est) : la forme de « tú » prend un -res. Série complète : soy, eres, es, somos, sois, son.",
      hint: "C'est la 2e forme de la série soy, …, es.",
    },
    {
      id: "es2-5",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne phrase pour dire « Pablo est en France » :",
      choices: ["Pablo es en Francia", "Pablo está en Francia", "Pablo eres en Francia", "Pablo son en Francia"],
      answer: 1,
      explanation:
        "Être quelque part = localisation = ESTAR : « Pablo está en Francia ». « Pablo es en Francia » est le piège classique : ser ne s'utilise jamais pour dire où l'on se trouve.",
      hint: "« En Francia » indique un lieu : quel verbe pour la localisation ?",
    },
    {
      id: "es2-6",
      level: 2,
      type: "input",
      question: "Mets au pluriel avec son article : « la casa » → « … casas » (un seul mot).",
      answer: "las",
      explanation:
        "Féminin pluriel → las : la casa → las casas. Les quatre articles définis : el, la, los, las. En espagnol, « les » a deux formes selon le genre : los (masculin) et las (féminin).",
      hint: "« La » au pluriel : on ajoute un -s à l'article aussi.",
    },
    {
      id: "es2-7",
      level: 2,
      type: "qcm",
      question: "Quel est le genre du mot « problema » ?",
      choices: ["Féminin : la problema", "Masculin : el problema", "Les deux sont possibles", "Il n'a pas d'article"],
      answer: 1,
      explanation:
        "« Problema » est un piège célèbre : malgré sa terminaison en -a, il est MASCULIN → el problema. Dans la même famille de pièges : el día, el mapa. Et à l'inverse, la mano (féminin en -o).",
      hint: "C'est justement un des pièges de la leçon…",
    },
    {
      id: "es2-8",
      level: 2,
      type: "input",
      question: "Complète avec le verbe estar : « yo … cansada » (je suis fatiguée).",
      answer: "estoy",
      explanation:
        "Estoy cansada = je suis fatiguée. La fatigue est un état passager → estar. Conjugaison : estoy, estás, está, estamos, estáis, están. « Soy cansada » serait faux : ser décrit le caractère permanent.",
      hint: "La 1re personne d'estar se termine en -oy, comme « soy ».",
    },
    {
      id: "es2-9",
      level: 3,
      type: "qcm",
      question: "« La sopa … fría » (la soupe est froide, elle vient de refroidir). Quel verbe ?",
      choices: ["es", "está", "eres", "estás"],
      answer: 1,
      explanation:
        "La soupe EST froide en ce moment : c'est un état passager → estar, 3e personne → está. « Es » décrirait une caractéristique permanente. Et « estás » = tu es : la soupe n'est pas « tu » !",
      hint: "État du moment ou identité permanente ? Et la soupe = il/elle.",
    },
    {
      id: "es2-10",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « des chats » (article indéfini + nom, 2 mots ; chat = gato).",
      answer: "unos gatos",
      explanation:
        "« Des » (masculin pluriel) = unos, et gato prend un -s : unos gatos. La série indéfinie complète : un, una, unos, unas. En français « des » est unique, en espagnol il s'accorde en genre !",
      hint: "« Un gato » au pluriel : les deux mots prennent la marque du pluriel.",
    },
    {
      id: "es2-11",
      level: 3,
      type: "truefalse",
      question: "La phrase « Somos alumnos » signifie « ils sont élèves ».",
      answer: false,
      explanation:
        "Faux ! « Somos » est la forme de nosotros : « Somos alumnos » = NOUS sommes élèves. « Ils sont élèves » se dirait « Son alumnos ». Le pronom est souvent absent : c'est la terminaison du verbe qui dit la personne.",
    },
    {
      id: "es2-12",
      level: 3,
      type: "input",
      question: "Mets au pluriel : « el profesor » → « los … » (un seul mot).",
      answer: "profesores",
      explanation:
        "« Profesor » se termine par une consonne (r) : le pluriel ajoute -es → los profesores. Après une voyelle on ajoute juste -s (libro → libros), après une consonne c'est -es (ciudad → ciudades).",
      hint: "Le mot finit par une consonne : le pluriel n'est pas juste -s.",
    },
  ],
};
