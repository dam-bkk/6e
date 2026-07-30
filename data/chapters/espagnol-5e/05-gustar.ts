import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "es5-gustar",
  subject: "espagnol",
  grade: "5e",
  num: 5,
  title: "Me gusta : parler de ses goûts",
  domain: "donnees",
  domainLabel: "Gramática",
  icon: "Heart",
  teaser: "Dire ce que tu aimes (et ce que tu détestes) avec me gusta et me gustan.",
  objectives: [
    "Je sais dire ce que j'aime avec me gusta et me gustan",
    "Je sais accorder gusta / gustan avec la chose aimée",
    "Je sais parler des goûts des autres : te gusta, le gusta",
    "Je sais dire ce que je n'aime pas avec no me gusta",
    "Je sais réagir avec también (aussi) et tampoco (non plus)",
  ],
  lesson: [
    {
      title: "Me gusta : j'aime",
      paragraphs: [
        "Pour dire « j'aime » en espagnol, on n'utilise pas un verbe qui se conjugue comme en français. On dit me gusta, qui signifie mot à mot « cela me plaît ».",
        "Me gusta s'utilise devant un nom singulier ou devant un verbe à l'infinitif : me gusta el fútbol (j'aime le foot), me gusta bailar (j'aime danser).",
        "Attention : après me gusta, on met presque toujours l'article devant le nom : me gusta LA música, me gusta EL chocolate.",
      ],
      example: [
        "Me gusta el fútbol. → J'aime le football.",
        "Me gusta la música. → J'aime la musique.",
        "Me gusta leer. → J'aime lire.",
      ],
      tip: "Prononciation : gusta se dit « gousta ». Le u espagnol se prononce toujours « ou », jamais « u » à la française.",
    },
    {
      title: "Me gusta ou me gustan ? LE piège",
      paragraphs: [
        "C'est LE piège du chapitre : gustar s'accorde avec la chose aimée, pas avec la personne qui aime !",
        "Si la chose aimée est au singulier (ou si c'est un verbe), on dit me gusta. Si la chose aimée est au pluriel, on dit me gustan.",
        "Mot à mot : me gustan los perros = « les chiens me plaisent ». Comme « les chiens » est pluriel, le verbe se met au pluriel : gustan.",
      ],
      example: [
        "Me gusta el deporte. → J'aime le sport. (singulier)",
        "Me gustan los deportes. → J'aime les sports. (pluriel)",
        "Me gustan las matemáticas. → J'aime les maths.",
      ],
      tip: "Réflexe à prendre : regarde le mot qui vient APRÈS. S'il finit par -s (pluriel), c'est gustan. Sinon, c'est gusta.",
    },
    {
      title: "Te gusta, le gusta : les goûts des autres",
      paragraphs: [
        "Pour changer de personne, on ne touche pas à gusta / gustan : on change seulement le petit mot placé devant.",
        "Me gusta = j'aime. Te gusta = tu aimes. Le gusta = il aime ou elle aime.",
        "Pour poser une question, c'est très simple : ¿Te gusta el fútbol? = Est-ce que tu aimes le foot ? N'oublie pas le point d'interrogation à l'envers ¿ au début !",
      ],
      example: [
        "¿Te gusta la música? → Tu aimes la musique ?",
        "Le gusta bailar. → Il/Elle aime danser.",
        "¿Te gustan los animales? → Tu aimes les animaux ?",
      ],
      tip: "Le gusta veut dire « il aime » ET « elle aime » : c'est le même mot pour les deux. Le contexte fait la différence.",
    },
    {
      title: "Dire qu'on n'aime pas",
      paragraphs: [
        "Pour dire qu'on n'aime pas, on ajoute simplement no devant : no me gusta (je n'aime pas), no me gustan (avec un pluriel).",
        "En espagnol, la négation est plus simple qu'en français : un seul mot, no, toujours placé devant. Pas de « ne… pas » en deux morceaux !",
      ],
      example: [
        "No me gusta el tenis. → Je n'aime pas le tennis.",
        "No me gustan las verduras. → Je n'aime pas les légumes.",
      ],
      tip: "L'accord reste le même avec no : no me gustaN los lunes (je n'aime pas les lundis), car los lunes est pluriel.",
    },
    {
      title: "También et tampoco : aussi / non plus",
      paragraphs: [
        "Pour réagir aux goûts de quelqu'un, deux mots magiques : también (aussi) et tampoco (non plus).",
        "Si ton ami dit « Me gusta el fútbol » et que tu es d'accord, tu réponds : ¡A mí también! (Moi aussi !).",
        "S'il dit « No me gusta el tenis » et que toi non plus, tu réponds : ¡A mí tampoco! (Moi non plus !).",
        "Retiens les loisirs les plus utiles : el fútbol (le foot), el baloncesto (le basket), la música (la musique), bailar (danser), leer (lire), cantar (chanter), nadar (nager), ver la tele (regarder la télé).",
      ],
      example: [
        "— Me gusta la música. — ¡A mí también! → Moi aussi !",
        "— No me gusta nadar. — A mí tampoco. → Moi non plus.",
      ],
      tip: "También va avec une phrase positive, tampoco avec une phrase négative. Si tu entends no, réponds tampoco.",
    },
  ],
  exercises: [
    {
      id: "es5-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « j'aime le football » en espagnol ?",
      choices: [
        "Me gusta el fútbol",
        "Me gustan el fútbol",
        "Yo gusta el fútbol",
        "Me gusto el fútbol",
      ],
      answer: 0,
      explanation:
        "El fútbol est singulier, donc on dit me gusta el fútbol. Piège : on ne dit jamais « yo gusta », car gustar signifie « plaire » : c'est le foot qui plaît, pas moi qui aime !",
      hint: "El fútbol est-il singulier ou pluriel ?",
    },
    {
      id: "es5-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « me gusta bailar » ?",
      choices: [
        "J'aime chanter",
        "J'aime danser",
        "J'aime nager",
        "Je n'aime pas danser",
      ],
      answer: 1,
      explanation:
        "Bailar signifie « danser ». Me gusta bailar = j'aime danser. Ne confonds pas bailar (danser) et cantar (chanter) : ils se ressemblent mais ce n'est pas pareil !",
      hint: "Bailar ressemble un peu au mot français « bal »…",
    },
    {
      id: "es5-3",
      level: 1,
      type: "truefalse",
      question: "« No me gusta el tenis » signifie « je n'aime pas le tennis ».",
      answer: true,
      explanation:
        "Vrai ! En espagnol, la négation se fait avec un seul mot, no, placé devant : no me gusta = je n'aime pas. Pas besoin de « ne… pas » en deux morceaux comme en français.",
    },
    {
      id: "es5-4",
      level: 1,
      type: "input",
      question: "Complète avec un seul mot : « Me ... la música » (j'aime la musique).",
      answer: "gusta",
      explanation:
        "La música est un nom singulier, donc on utilise gusta : me gusta la música. On n'utiliserait gustan que si la chose aimée était au pluriel.",
      hint: "La música : singulier ou pluriel ?",
    },
    {
      id: "es5-5",
      level: 2,
      type: "qcm",
      question: "Choisis la phrase correcte pour dire « j'aime les animaux » :",
      choices: [
        "Me gusta los animales",
        "Me gustan los animales",
        "Me gustas los animales",
        "Me gustan el animal",
      ],
      answer: 1,
      explanation:
        "Los animales est pluriel, donc le verbe s'accorde : me gustaN los animales. C'est LE piège de gustar : il s'accorde avec la chose aimée (les animaux), pas avec la personne qui aime.",
      hint: "Regarde le mot qui vient après : finit-il par -s ?",
    },
    {
      id: "es5-6",
      level: 2,
      type: "input",
      question: "Complète avec un seul mot : « Me ... las matemáticas » (j'aime les maths).",
      answer: "gustan",
      explanation:
        "Las matemáticas est un pluriel (il finit par -s), donc on écrit me gustan. Mot à mot : « les maths me plaisent ». Gustar s'accorde toujours avec la chose aimée.",
      hint: "Las matemáticas est au pluriel : le verbe doit s'accorder.",
    },
    {
      id: "es5-7",
      level: 2,
      type: "qcm",
      question: "Comment demander à un ami « est-ce que tu aimes la musique ? » ?",
      choices: [
        "¿Me gusta la música?",
        "¿Le gusta la música?",
        "¿Te gusta la música?",
        "¿Te gustan la música?",
      ],
      answer: 2,
      explanation:
        "Pour « tu », on utilise te : ¿Te gusta la música? La música est singulier, donc gusta et pas gustan. Me = je, te = tu, le = il/elle : seul le petit mot devant change.",
      hint: "J'aime = ME gusta. Tu aimes = ... gusta ?",
    },
    {
      id: "es5-8",
      level: 2,
      type: "truefalse",
      question: "Dans « me gustan los deportes », le verbe gustan est au pluriel parce que « me » désigne plusieurs personnes.",
      answer: false,
      explanation:
        "Faux ! Gustan est au pluriel parce que los deportes (les sports) est pluriel. Gustar s'accorde avec la chose aimée, jamais avec la personne qui aime. Me signifie toujours « me/à moi », une seule personne.",
      hint: "Avec quoi s'accorde gustar : la personne ou la chose aimée ?",
    },
    {
      id: "es5-9",
      level: 3,
      type: "qcm",
      question: "Ton amie dit : « No me gusta nadar ». Toi non plus, tu n'aimes pas nager. Que réponds-tu ?",
      choices: [
        "¡A mí también!",
        "¡A mí tampoco!",
        "¡Me gusta!",
        "¡No también!",
      ],
      answer: 1,
      explanation:
        "Sa phrase est négative (no me gusta), donc on répond avec tampoco (non plus) : ¡A mí tampoco! También (aussi) ne s'utilise qu'après une phrase positive.",
      hint: "Sa phrase contient « no » : il faut répondre « non plus ».",
    },
    {
      id: "es5-10",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « il aime chanter » (2 mots + infinitif).",
      answer: "le gusta cantar",
      explanation:
        "Il aime = le gusta (le = à lui). Chanter = cantar. Devant un infinitif, gustar reste toujours au singulier : le gusta cantar. Piège : ne confonds pas cantar (chanter) et bailar (danser).",
      hint: "Il aime = LE gusta. Chanter = can...",
    },
    {
      id: "es5-11",
      level: 3,
      type: "input",
      question: "Traduis en espagnol : « je n'aime pas les lundis » (no + 2 mots + los lunes).",
      answer: "no me gustan los lunes",
      explanation:
        "La négation no se place devant : no me... Los lunes (les lundis) est pluriel, donc le verbe s'accorde : no me gustaN los lunes. L'accord se fait même dans une phrase négative !",
      hint: "Los lunes est pluriel : gusta ou gustan ?",
    },
    {
      id: "es5-12",
      level: 3,
      type: "truefalse",
      question: "« Le gusta leer » peut signifier « il aime lire » ou « elle aime lire ».",
      answer: true,
      explanation:
        "Vrai ! Le = « à lui » ou « à elle » : c'est le même mot pour les deux. Seul le contexte (ou l'ajout de a él / a ella) permet de savoir de qui on parle. Et leer signifie « lire ».",
    },
  ],
  videos: [
    {
      title: "Dire 😍J'AIME en ESPAGNOL 🇪🇦🇪🇸 avec le verbe GUSTAR",
      youtubeId: "YlhSYQD1ns8",
      channel: "Holamigo - apprendre l'espagnol",
    },
  ],
};
