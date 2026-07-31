import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-sein-haben",
  subject: "allemand",
  grade: "5e",
  num: 2,
  title: "Sein et haben",
  domain: "geometrie",
  domainLabel: "Grammatik",
  icon: "Anchor",
  teaser: "Les deux verbes les plus importants de l'allemand : être (sein) et avoir (haben).",
  objectives: [
    "Je sais conjuguer sein au présent : ich bin, du bist, er ist…",
    "Je sais conjuguer haben au présent : ich habe, du hast, er hat…",
    "Je sais dire mon âge avec sein : Ich bin zwölf (et pas « haben » !)",
    "Je sais construire des phrases simples avec sein et haben",
    "Je découvre la négation avec nicht",
  ],
  lesson: [
    {
      title: "Sein (être) au présent",
      paragraphs: [
        "« Sein » veut dire « être ». C'est le verbe le plus utilisé de l'allemand, et il est complètement irrégulier — comme « être » en français d'ailleurs.",
        "Sa conjugaison : ich bin (je suis), du bist (tu es), er/sie/es ist (il/elle est), wir sind (nous sommes), ihr seid (vous êtes), sie sind (ils/elles sont).",
        "Les pronoms à connaître : ich (je), du (tu), er (il), sie (elle), es (le neutre « ça »), wir (nous), ihr (vous, à plusieurs), sie (ils/elles).",
      ],
      example: [
        "Ich bin müde. → Je suis fatigué(e).",
        "Du bist nett. → Tu es gentil(le).",
        "Er ist groß. → Il est grand.",
        "Wir sind Freunde. → Nous sommes amis.",
      ],
      tip: "Apprends la conjugaison en chantonnant par paires : bin-bist, ist, sind-seid-sind. Remarque que wir et sie (pluriel) ont la même forme : sind.",
    },
    {
      title: "Haben (avoir) au présent",
      paragraphs: [
        "« Haben » veut dire « avoir ». On l'utilise pour dire ce qu'on possède : un animal, un frère, un objet.",
        "Sa conjugaison : ich habe (j'ai), du hast (tu as), er/sie/es hat (il/elle a), wir haben (nous avons), ihr habt (vous avez), sie haben (ils/elles ont).",
        "Petit piège : aux 2e et 3e personnes du singulier, le b disparaît : du hast (pas « habst »), er hat (pas « habt » — ça, c'est ihr habt !).",
      ],
      example: [
        "Ich habe einen Hund. → J'ai un chien.",
        "Du hast eine Schwester. → Tu as une sœur.",
        "Sie hat ein Buch. → Elle a un livre.",
        "Wir haben Hunger. → Nous avons faim.",
      ],
      tip: "Du hast, er hat : le b de haben s'envole au singulier. Retiens le duo « hast/hat » — c'est lui qu'on entend le plus souvent.",
    },
    {
      title: "Le piège de l'âge : sein, pas haben !",
      paragraphs: [
        "En français on dit « j'AI 12 ans », et en espagnol aussi (tengo doce años). Mais l'allemand fait comme l'anglais : on utilise le verbe ÊTRE.",
        "On dit « Ich bin zwölf Jahre alt » (littéralement : je suis vieille de 12 ans), ou en version courte « Ich bin zwölf ».",
        "Ne calque donc jamais le français : « Ich habe zwölf Jahre » est une erreur classique de débutant. Pour demander l'âge : « Wie alt bist du? » — là encore avec sein (bist).",
      ],
      example: [
        "Ich bin zwölf Jahre alt. → J'ai 12 ans.",
        "Wie alt bist du? → Quel âge as-tu ?",
        "Mein Bruder ist fünfzehn. → Mon frère a 15 ans.",
      ],
      tip: "Si tu as fait de l'espagnol : attention, c'est l'inverse ! Espagnol « tengo doce años » (avoir), allemand « ich bin zwölf » (être). Pense à l'anglais « I am twelve » pour ne pas te tromper.",
    },
    {
      title: "Construire des phrases simples",
      paragraphs: [
        "Avec sein, on décrit : sujet + forme de sein + adjectif ou nom. « Das ist super » (c'est super), « Sie ist Lehrerin » (elle est professeure).",
        "Avec haben, on possède : sujet + forme de haben + la chose. « Ich habe einen Bruder » (j'ai un frère).",
        "Haben sert aussi dans des expressions où le français dit « avoir » : Hunger haben (avoir faim), Durst haben (avoir soif), Glück haben (avoir de la chance). Remarque les majuscules : Hunger, Durst et Glück sont des noms.",
      ],
      example: [
        "Das ist meine Schule. → C'est mon école.",
        "Ich habe Hunger! → J'ai faim !",
        "Hast du Durst? → As-tu soif ?",
        "Ihr seid zwölf Jahre alt. → Vous avez 12 ans.",
      ],
      tip: "Pour poser une question sans mot interrogatif, on inverse verbe et sujet : « Du hast einen Hund. » devient « Hast du einen Hund? » (as-tu un chien ?). Pas besoin de « est-ce que » !",
    },
    {
      title: "Découverte : la négation avec nicht",
      paragraphs: [
        "Pour dire « ne… pas », l'allemand utilise un seul petit mot : « nicht ». Pas besoin de deux morceaux comme le français ne… pas.",
        "Dans une phrase simple, nicht se place après le verbe : « Ich bin nicht müde » (je ne suis pas fatigué), « Er ist nicht groß » (il n'est pas grand).",
        "Tu verras plus tard une autre négation (kein) pour les noms ; pour l'instant, retiens nicht avec sein et les adjectifs.",
      ],
      example: [
        "Ich bin nicht müde. → Je ne suis pas fatigué(e).",
        "Das ist nicht super. → Ce n'est pas super.",
        "Wir sind nicht dreizehn, wir sind zwölf. → Nous n'avons pas 13 ans, nous avons 12 ans.",
      ],
      tip: "Nicht se prononce avec le ch doux de « ich » : « nicht » ressemble à « ni-cht » soufflé. Un seul mot suffit pour toute la négation.",
    },
  ],
  exercises: [
    {
      id: "de2-1",
      level: 1,
      type: "qcm",
      question: "Quelle est la forme correcte : « du … nett » (tu es gentil) ?",
      choices: ["bin", "bist", "ist", "sind"],
      answer: 1,
      explanation:
        "Avec du (tu), sein donne « bist » : du bist nett. Rappel de la série : ich bin, du bist, er ist, wir sind, ihr seid, sie sind.",
      hint: "Ich bin, du …, er ist.",
    },
    {
      id: "de2-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « Ich habe einen Hund » ?",
      choices: ["Je suis un chien", "J'ai un chien", "J'ai faim", "Je n'ai pas de chien"],
      answer: 1,
      explanation:
        "« Ich habe einen Hund » = j'ai un chien. Haben = avoir (ich habe = j'ai), et der Hund = le chien. « J'ai faim » se dirait « Ich habe Hunger » — Hund et Hunger se ressemblent, mais ce n'est pas pareil !",
      hint: "« Haben » est le verbe avoir, et le Hund aboie.",
    },
    {
      id: "de2-3",
      level: 1,
      type: "truefalse",
      question: "Pour dire son âge en allemand, on utilise le verbe haben, comme en français.",
      answer: false,
      explanation:
        "Faux ! L'allemand utilise le verbe SEIN (être) pour l'âge : « Ich bin zwölf Jahre alt » = j'ai 12 ans. C'est comme l'anglais « I am twelve », et le contraire du français et de l'espagnol.",
    },
    {
      id: "de2-4",
      level: 1,
      type: "input",
      question: "Complète avec la bonne forme de sein : « ich … müde » (je suis fatigué).",
      answer: "bin",
      explanation:
        "« Ich bin müde » = je suis fatigué(e). Avec ich, sein donne toujours « bin ». C'est aussi la forme de « Ich bin zwölf » (j'ai 12 ans).",
      hint: "C'est la même forme que dans « Ich bin Emma ».",
    },
    {
      id: "de2-5",
      level: 2,
      type: "qcm",
      question: "Quelle est la forme correcte : « er … ein Buch » (il a un livre) ?",
      choices: ["habe", "habt", "hat", "hast"],
      answer: 2,
      explanation:
        "Avec er (il), haben donne « hat » : er hat ein Buch. Attention au piège : le b disparaît au singulier (du hast, er hat). « Habt » existe, mais c'est pour ihr : ihr habt.",
      hint: "Le b de haben disparaît : du hast, er …",
    },
    {
      id: "de2-6",
      level: 2,
      type: "input",
      question: "Complète avec la bonne forme de haben : « du … eine Schwester » (tu as une sœur).",
      answer: "hast",
      explanation:
        "« Du hast eine Schwester » = tu as une sœur. Avec du, haben donne « hast » — sans b ! « Du habst » n'existe pas.",
      hint: "Comme « er hat », cette forme perd le b de haben.",
    },
    {
      id: "de2-7",
      level: 2,
      type: "qcm",
      question: "Comment demande-t-on l'âge de quelqu'un en allemand ?",
      choices: ["Wie heißt du?", "Woher kommst du?", "Wie alt bist du?", "Was hast du?"],
      answer: 2,
      explanation:
        "« Wie alt bist du? » = quel âge as-tu ? (littéralement : comment vieux es-tu ?). Remarque le verbe sein (bist) : l'âge se dit toujours avec être. « Wie heißt du? » demande le nom, « Woher kommst du? » l'origine.",
      hint: "« Alt » veut dire « vieux » — et on utilise le verbe être.",
    },
    {
      id: "de2-8",
      level: 2,
      type: "truefalse",
      question: "Dans « Wir sind Freunde », le verbe est correctement conjugué.",
      answer: true,
      explanation:
        "Vrai ! Avec wir (nous), sein donne « sind » : wir sind Freunde = nous sommes amis. Remarque aussi la majuscule à Freunde : c'est un nom, donc grande lettre obligatoire.",
      hint: "Wir sind, ihr seid, sie sind.",
    },
    {
      id: "de2-9",
      level: 3,
      type: "input",
      question: "Traduis en allemand : « j'ai faim » (2 mots — attention, la correction ignore la majuscule).",
      answer: "ich habe hunger",
      accept: ["habe hunger"],
      explanation:
        "« Ich habe Hunger » = j'ai faim (littéralement : j'ai de la faim). Ici l'allemand utilise bien haben, comme le français. Hunger est un nom, il prend donc une majuscule à l'écrit.",
      hint: "Sujet + haben à la 1re personne + le nom Hunger.",
    },
    {
      id: "de2-10",
      level: 3,
      type: "qcm",
      question: "Où se place « nicht » dans la phrase « Ich bin müde » pour dire « je ne suis pas fatigué » ?",
      choices: ["Nicht ich bin müde", "Ich nicht bin müde", "Ich bin nicht müde", "Ich bin müde nicht"],
      answer: 2,
      explanation:
        "« Ich bin nicht müde » : dans une phrase simple, nicht se place après le verbe conjugué. Un seul mot suffit pour la négation — pas de « ne… pas » en deux morceaux comme en français.",
      hint: "Nicht vient juste après le verbe.",
    },
    {
      id: "de2-11",
      level: 3,
      type: "input",
      question: "Complète avec la bonne forme de sein : « ihr … zwölf Jahre alt » (vous avez 12 ans).",
      answer: "seid",
      explanation:
        "« Ihr seid zwölf Jahre alt » = vous avez 12 ans. Avec ihr (vous, à plusieurs), sein donne « seid ». Et rappel du grand piège : l'âge se dit avec sein, jamais avec haben.",
      hint: "C'est la seule forme de sein qui commence par s- et finit par -d… avec un ei au milieu.",
    },
    {
      id: "de2-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Ich habe zwölf Jahre » est la bonne façon de dire « j'ai 12 ans » en allemand.",
      answer: false,
      explanation:
        "Faux ! C'est LE calque à éviter : l'allemand dit « Ich bin zwölf Jahre alt » avec le verbe sein (être), comme l'anglais « I am twelve ». « Ich habe zwölf Jahre » est une erreur typique de francophone.",
    },
  ],
};
