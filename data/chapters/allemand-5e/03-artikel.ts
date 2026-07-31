import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-artikel",
  subject: "allemand",
  grade: "5e",
  num: 3,
  title: "Der, die, das : les articles",
  domain: "geometrie",
  domainLabel: "Grammatik",
  icon: "Shapes",
  teaser: "Trois genres au lieu de deux : apprends à jongler avec der, die, das et la fameuse majuscule.",
  objectives: [
    "Je sais que l'allemand a 3 genres : der (masculin), die (féminin), das (neutre)",
    "Je sais que « die » sert aussi pour TOUS les pluriels",
    "Je sais utiliser ein/eine (un, une) et kein/keine (pas de)",
    "Je connais la règle d'or : tous les noms prennent une majuscule",
    "Je connais le genre de noms fréquents : der Hund, die Katze, das Haus…",
  ],
  lesson: [
    {
      title: "Trois genres : der, die, das",
      figure: "de-artikel",
      paragraphs: [
        "En français, il y a deux genres : le et la. En allemand, il y en a TROIS : der (masculin), die (féminin) et das (neutre).",
        "Le genre allemand ne correspond pas toujours au genre français : on dit die Sonne (le soleil… féminin !) et der Mond (la lune… masculin !). Il faut donc apprendre chaque nom AVEC son article, comme un tout.",
        "Quelques repères tout de même : les mots en -e sont souvent féminins (die Katze, die Schule), et les diminutifs en -chen sont toujours neutres (das Mädchen, la fille).",
      ],
      example: [
        "der Hund → le chien (masculin)",
        "die Katze → le chat (féminin en allemand !)",
        "das Haus → la maison (neutre)",
        "die Sonne → le soleil / der Mond → la lune (inversés par rapport au français)",
      ],
      tip: "N'apprends jamais un nom tout nu : apprends « der Hund », jamais juste « Hund ». L'article fait partie du mot, comme la couleur d'un vêtement.",
    },
    {
      title: "Au pluriel, tout le monde devient die",
      paragraphs: [
        "Bonne nouvelle : au pluriel, il n'y a plus qu'UN seul article défini, « die », pour les trois genres. Der Hund → die Hunde, das Haus → die Häuser, die Katze → die Katzen.",
        "En revanche, la forme du nom au pluriel change de façon variée : certains prennent -e (Hunde), d'autres -n ou -en (Katzen), d'autres -er avec parfois un Umlaut (Häuser), certains ne changent pas.",
        "Là encore, on apprend le pluriel avec le mot : der Hund, die Hunde ; die Katze, die Katzen ; das Haus, die Häuser.",
      ],
      example: [
        "der Hund → die Hunde (les chiens)",
        "die Katze → die Katzen (les chats)",
        "das Haus → die Häuser (les maisons)",
        "das Buch → die Bücher (les livres)",
      ],
      tip: "Piège de lecture : « die Katze » peut être un singulier (le chat) et « die Katzen » un pluriel (les chats). C'est la fin du nom qui te dit si c'est du pluriel, pas l'article.",
    },
    {
      title: "Ein, eine : dire « un » et « une »",
      paragraphs: [
        "L'article indéfini (un, une) est « ein » pour le masculin ET le neutre, « eine » pour le féminin : ein Hund (un chien), ein Haus (une maison), eine Katze (un chat).",
        "Astuce : ein/eine suit le genre du mot, pas la traduction française. Das Haus est neutre, donc « ein Haus » — même si en français on dit UNE maison.",
        "Il n'y a pas de pluriel pour ein : « des chiens » se dit simplement « Hunde », sans article.",
      ],
      example: [
        "Das ist ein Hund. → C'est un chien.",
        "Das ist eine Katze. → C'est un chat.",
        "Das ist ein Haus. → C'est une maison.",
        "Ich habe Bücher. → J'ai des livres. (pas d'article !)",
      ],
      tip: "Der et das → ein ; die → eine. Si tu connais l'article défini d'un mot, tu connais automatiquement son article indéfini.",
    },
    {
      title: "Kein, keine : dire « pas de »",
      paragraphs: [
        "Pour nier un nom (« pas de chien »), l'allemand n'utilise pas nicht + ein : il a un mot spécial, « kein », qui se décline comme ein : kein Hund, kein Haus, keine Katze.",
        "« Ich habe keinen Hund » = je n'ai pas de chien. « Das ist keine Katze » = ce n'est pas un chat.",
        "Retiens la règle simple : nicht nie un verbe ou un adjectif, kein nie un nom. « Ich bin nicht müde » mais « Ich habe keine Katze ».",
      ],
      example: [
        "Ich habe keinen Hund. → Je n'ai pas de chien.",
        "Das ist keine Katze, das ist ein Hund! → Ce n'est pas un chat, c'est un chien !",
        "Wir haben kein Haus. → Nous n'avons pas de maison.",
      ],
      tip: "Kein = k + ein. Ajoute juste un k à l'article indéfini et tu obtiens sa négation : ein → kein, eine → keine. Facile à retenir !",
    },
    {
      title: "La règle d'or : majuscule à tous les noms",
      paragraphs: [
        "C'est LA règle la plus visible de l'allemand écrit : TOUS les noms communs prennent une majuscule, où qu'ils soient dans la phrase. Der Hund, die Schule, das Buch — toujours avec une grande lettre.",
        "En français, seuls les noms propres ont une majuscule (Paris, Emma). En allemand, « le chien mange » s'écrit « der Hund frisst » : Hund a sa majuscule même au milieu de la phrase.",
        "Cette règle t'aide aussi à lire : dans une phrase allemande, chaque mot à majuscule (hors début de phrase) est un nom. Pratique pour repérer qui fait quoi !",
      ],
      example: [
        "Die Katze und der Hund sind im Haus. → Le chat et le chien sont dans la maison.",
        "Ich habe ein Buch und ein Heft. → J'ai un livre et un cahier.",
      ],
      tip: "Dans tes exercices écrits, la correction ignore la casse — mais prends tout de suite la bonne habitude : un nom allemand sans majuscule est une faute d'orthographe en Allemagne.",
    },
  ],
  exercises: [
    {
      id: "de3-1",
      level: 1,
      type: "qcm",
      question: "Combien de genres possède l'allemand ?",
      choices: ["Un seul", "Deux", "Trois", "Quatre"],
      answer: 2,
      explanation:
        "L'allemand a trois genres : masculin (der), féminin (die) et neutre (das). C'est un de plus que le français, qui n'a que le masculin et le féminin.",
      hint: "Der, die… et il y en a encore un.",
    },
    {
      id: "de3-2",
      level: 1,
      type: "qcm",
      question: "Quel est l'article du mot « Katze » (chat) ?",
      choices: ["der", "die", "das", "den"],
      answer: 1,
      explanation:
        "On dit « die Katze » : le mot est féminin en allemand, même si « le chat » est masculin en français. Beaucoup de noms en -e sont féminins. Le genre allemand ne suit pas le genre français !",
      hint: "Les noms qui finissent en -e sont souvent féminins.",
    },
    {
      id: "de3-3",
      level: 1,
      type: "truefalse",
      question: "En allemand, tous les noms communs s'écrivent avec une majuscule.",
      answer: true,
      explanation:
        "Vrai ! C'est la règle d'or de l'écrit allemand : der Hund, die Schule, das Buch — majuscule obligatoire pour chaque nom, même au milieu d'une phrase. En français, seuls les noms propres en ont une.",
    },
    {
      id: "de3-4",
      level: 1,
      type: "input",
      question: "Écris l'article défini du mot « Haus » (maison), qui est neutre.",
      answer: "das",
      explanation:
        "« Das Haus » = la maison. Das est l'article du neutre, le troisième genre allemand. Attention au sens : en français « maison » est féminin, mais en allemand Haus est neutre.",
      hint: "C'est l'article du troisième genre, celui qui n'existe pas en français.",
    },
    {
      id: "de3-5",
      level: 2,
      type: "qcm",
      question: "Quel est l'article des noms au pluriel, quel que soit leur genre ?",
      choices: ["der", "die", "das", "den"],
      answer: 1,
      explanation:
        "Au pluriel, tous les noms prennent « die » : die Hunde, die Katzen, die Häuser. C'est la bonne nouvelle des articles allemands : un seul article pour tous les pluriels.",
      hint: "C'est le même mot que l'article féminin singulier.",
    },
    {
      id: "de3-6",
      level: 2,
      type: "input",
      question: "Complète avec l'article indéfini : « das ist … Katze » (c'est un chat).",
      answer: "eine",
      explanation:
        "« Das ist eine Katze » : Katze est féminin (die Katze), donc l'article indéfini est « eine ». Rappel : der et das → ein, die → eine.",
      hint: "Die Katze est féminin : quel « un/une » va avec die ?",
    },
    {
      id: "de3-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « je n'ai pas de chien » ?",
      choices: ["Ich habe nicht Hund", "Ich habe keinen Hund", "Ich bin kein Hund", "Ich habe nicht ein Hund"],
      answer: 1,
      explanation:
        "« Ich habe keinen Hund » : pour nier un nom, on utilise kein (ici keinen au masculin après haben), jamais « nicht ein ». Retiens : nicht pour les verbes et adjectifs, kein pour les noms.",
      hint: "Devant un nom, la négation n'est pas « nicht » mais un mot en k-.",
    },
    {
      id: "de3-8",
      level: 2,
      type: "truefalse",
      question: "« Die Sonne » (le soleil) est un mot féminin en allemand.",
      answer: true,
      explanation:
        "Vrai ! Die Sonne est féminin, alors que « le soleil » est masculin en français. Et c'est l'inverse pour la lune : der Mond est masculin. Preuve que le genre allemand doit s'apprendre mot par mot.",
      hint: "L'article « die » te donne la réponse.",
    },
    {
      id: "de3-9",
      level: 3,
      type: "input",
      question: "Écris le pluriel de « der Hund » avec son article : « die … » (un seul mot).",
      answer: "hunde",
      explanation:
        "Der Hund → die Hunde : au pluriel, l'article devient die et le nom prend un -e. Chaque nom a sa façon de former le pluriel (-e, -en, -er…), c'est pourquoi on l'apprend avec le mot.",
      hint: "Ce pluriel se forme en ajoutant simplement -e au nom.",
    },
    {
      id: "de3-10",
      level: 3,
      type: "qcm",
      question: "Dans la phrase « die Katzen spielen », comment sait-on que « Katzen » est un pluriel ?",
      choices: [
        "Grâce à l'article die",
        "Grâce à la terminaison -n du nom",
        "Grâce à la majuscule",
        "On ne peut pas le savoir",
      ],
      answer: 1,
      explanation:
        "C'est la terminaison -n (Katzen et non Katze) qui indique le pluriel. L'article « die » ne suffit pas : il sert aussi au féminin singulier (die Katze = le chat). La majuscule, elle, dit seulement que c'est un nom.",
      hint: "Die Katze (singulier) et die Katzen (pluriel) ont le même article…",
    },
    {
      id: "de3-11",
      level: 3,
      type: "input",
      question: "Complète la négation : « das ist … Katze, das ist ein Hund » (ce n'est pas un chat, c'est un chien).",
      answer: "keine",
      explanation:
        "« Das ist keine Katze » : on nie le nom Katze, donc kein — et comme Katze est féminin (die), on écrit keine. Astuce : kein = k + ein, il se décline exactement comme ein/eine.",
      hint: "Prends « eine » et ajoute un k devant.",
    },
    {
      id: "de3-12",
      level: 3,
      type: "truefalse",
      question: "En allemand, « des livres » (pluriel indéfini) se dit sans aucun article : « Ich habe Bücher ».",
      answer: true,
      explanation:
        "Vrai ! Ein/eine n'a pas de pluriel : « j'ai des livres » se dit « Ich habe Bücher », sans article. C'est différent du français, qui utilise « des ». Remarque aussi l'Umlaut du pluriel : das Buch → die Bücher.",
    },
  ],
  videos: [
    {
      title: "DER, DIE, DAS (1) : mais qu'est ce que c'est ?? - vidéo pour DEBUTANTS en allemand",
      youtubeId: "P3YhH7gyU1Q",
      channel: "Apprendre natur'allemand",
    },
  ],
};
