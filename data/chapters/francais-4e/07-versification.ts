import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-versification",
  subject: "francais",
  grade: "4e",
  num: 7,
  title: "La poésie et la versification",
  domain: "donnees",
  domainLabel: "Littérature",
  icon: "Feather",
  teaser: "Alexandrins, rimes embrassées, sonnets : comprendre la musique des vers et le lyrisme des poètes.",
  objectives: [
    "Je sais compter les syllabes d'un vers en tenant compte du e muet",
    "Je sais nommer les mètres principaux : octosyllabe, décasyllabe, alexandrin",
    "Je sais identifier la disposition des rimes : suivies, croisées, embrassées",
    "Je sais évaluer la qualité d'une rime (pauvre, suffisante, riche) et nommer les strophes",
    "Je sais reconnaître un sonnet et les caractéristiques de la poésie lyrique",
  ],
  lesson: [
    {
      title: "Compter les syllabes : le cas du e muet",
      paragraphs: [
        "En poésie, chaque vers se mesure en syllabes. Pour bien compter, il faut connaître la règle du e muet, ce e final qu'on n'entend presque pas (« porte », « lune »).",
        "Le e muet se prononce, donc se compte, quand le mot suivant commence par une consonne : « une porte fermée » → u-ne-por-te-fer-mée (6 syllabes).",
        "Il ne se compte pas quand le mot suivant commence par une voyelle ou un h muet (il s'élide), ni à la fin du vers : « une porte ouverte » → u-ne-por-t'ou-ver-te.",
        "Résumé : e muet + consonne → compté ; e muet + voyelle → effacé ; e muet en fin de vers → jamais compté.",
      ],
      example: [
        "« Ma chambre est une cage » : Ma-cham-br(e) est-u-ne-ca-ge → « chambre » s'élide devant « est », le e final de « cage » ne compte pas.",
      ],
      tip: "Lis le vers à voix haute en articulant comme un comédien : les e muets comptés se prononcent « eu » (por-teu-fer-mée). C'est la diction qui donne le compte.",
    },
    {
      title: "Les mètres : octosyllabe, décasyllabe, alexandrin",
      paragraphs: [
        "Le mètre est le nombre de syllabes d'un vers. Trois mètres dominent la poésie française.",
        "L'octosyllabe compte 8 syllabes : c'est un vers vif, souvent utilisé dans les chansons et les fables.",
        "Le décasyllabe compte 10 syllabes : c'est le grand vers du Moyen Âge et de la Renaissance.",
        "L'alexandrin compte 12 syllabes : c'est le vers noble du théâtre classique et de la grande poésie. Il se coupe souvent en son milieu par une pause, la césure, qui le partage en deux hémistiches de 6 syllabes.",
      ],
      example: [
        "« Demain, dès l'aube, à l'heure où blanchit la campagne » (Victor Hugo) → 12 syllabes : un alexandrin.",
      ],
      tip: "Retiens la famille des mètres pairs : 8, 10, 12. Compte toujours sur tes doigts en lisant à voix haute avant de nommer le mètre.",
    },
    {
      title: "La disposition des rimes",
      paragraphs: [
        "La rime est le retour du même son à la fin des vers. On note chaque son par une lettre pour repérer le schéma.",
        "Les rimes suivies (ou plates) se succèdent deux par deux : AABB.",
        "Les rimes croisées s'entrelacent : ABAB.",
        "Les rimes embrassées s'enveloppent : ABBA, comme si la rime A « embrassait » la rime B.",
      ],
      example: [
        "nuit (A) / ennui (A) / sombre (B) / ombre (B) → AABB : rimes suivies.",
        "nuit (A) / sombre (B) / ennui (A) / ombre (B) → ABAB : rimes croisées.",
        "nuit (A) / sombre (B) / ombre (B) / ennui (A) → ABBA : rimes embrassées.",
      ],
      tip: "Écris les lettres dans la marge, un son = une lettre : le schéma saute aux yeux. ABBA = embrassées, pense au groupe qui « enlace ».",
    },
    {
      title: "Qualité des rimes et strophes",
      paragraphs: [
        "On mesure la richesse d'une rime au nombre de sons communs à la fin des vers.",
        "Rime pauvre : un seul son commun (« beau » / « château » → [o]). Rime suffisante : deux sons communs (« chanson » / « maison » → [z] + [on]). Rime riche : trois sons communs ou plus (« rivage » / « virage » → [r] + [a] + [ge]).",
        "Les vers se regroupent en strophes, séparées par un blanc. Les principales : le distique (2 vers), le tercet (3 vers), le quatrain (4 vers) et le quintil (5 vers).",
      ],
      example: [
        "« fleur » / « bonheur » → sons communs [eu] + [r] : rime suffisante.",
        "Un poème de trois strophes de quatre vers = trois quatrains.",
      ],
      tip: "Compte les sons, pas les lettres : « beau » et « château » partagent quatre lettres mais un seul son. C'est l'oreille qui juge la richesse d'une rime.",
    },
    {
      title: "Le sonnet et la poésie lyrique",
      paragraphs: [
        "Le sonnet est une forme fixe de 14 vers : deux quatrains suivis de deux tercets. Venu d'Italie à la Renaissance, il a été illustré par Ronsard et Du Bellay, puis par Baudelaire. Le dernier vers, souvent frappant, s'appelle la chute.",
        "La poésie lyrique exprime les sentiments personnels du poète : amour, joie, tristesse, nostalgie, révolte. Le mot vient de la lyre, l'instrument dont le poète mythologique Orphée accompagnait ses chants.",
        "Ses marques d'écriture : la première personne (je, me, mon), le vocabulaire des émotions, les figures de style (comparaisons, métaphores) et des thèmes favoris comme l'amour, la nature ou la fuite du temps.",
      ],
      example: [
        "« Demain, dès l'aube… » de Victor Hugo est un poème lyrique : le poète y dit à la première personne le deuil de sa fille Léopoldine.",
      ],
      tip: "Sonnet = 4 + 4 + 3 + 3 = 14 vers, toujours. Si le compte ou le découpage diffère, ce n'est pas un sonnet.",
    },
  ],
  exercises: [
    {
      id: "f4ver-1",
      level: 1,
      type: "qcm",
      question: "Combien de syllabes compte un alexandrin ?",
      choices: ["8", "10", "12"],
      answer: 2,
      explanation:
        "L'alexandrin est le vers de 12 syllabes, souvent coupé par la césure en deux hémistiches de 6. Le piège : ne pas le confondre avec le décasyllabe (10 syllabes), le grand vers de la Renaissance.",
      hint: "C'est le vers du théâtre classique, divisible en deux moitiés de 6.",
    },
    {
      id: "f4ver-2",
      level: 1,
      type: "input",
      question: "Comment appelle-t-on un vers de huit syllabes ?",
      answer: "octosyllabe",
      accept: ["un octosyllabe", "l'octosyllabe"],
      explanation:
        "Le vers de 8 syllabes est l'octosyllabe : « octo » signifie huit en latin, comme dans « octogone » ou « octobre » (le huitième mois du calendrier romain). Le piège : ne pas inventer « huitisyllabe » ; les noms de mètres sont formés sur les préfixes savants.",
      hint: "Pense au préfixe de « octogone », la figure à huit côtés.",
    },
    {
      id: "f4ver-3",
      level: 1,
      type: "qcm",
      question: "Des rimes disposées selon le schéma AABB sont des rimes…",
      choices: ["suivies", "croisées", "embrassées"],
      answer: 0,
      explanation:
        "AABB : les rimes vont deux par deux, l'une derrière l'autre → rimes suivies (on dit aussi « plates »). Le piège : croisées = ABAB (elles s'entrelacent), embrassées = ABBA (la rime A entoure la rime B).",
      hint: "Les deux A se suivent, puis les deux B se suivent.",
    },
    {
      id: "f4ver-4",
      level: 1,
      type: "truefalse",
      question: "Un quatrain est une strophe de quatre vers.",
      answer: true,
      explanation:
        "Vrai ! Quatrain vient de « quatre » : c'est la strophe de 4 vers, la plus fréquente en poésie française. Le piège : ne pas confondre la strophe (groupe de vers séparé par un blanc) et le vers (une seule ligne).",
      hint: "Le nom de la strophe contient presque le nombre de ses vers.",
    },
    {
      id: "f4ver-5",
      level: 2,
      type: "qcm",
      question: "Dans un vers, le e muet final d'un mot se compte comme une syllabe quand…",
      choices: [
        "le mot suivant commence par une voyelle",
        "le mot suivant commence par une consonne",
        "il se trouve à la fin du vers",
      ],
      answer: 1,
      explanation:
        "Le e muet se prononce, donc se compte, devant une consonne : « une porte fermée » → por-te-fer-mée. Le piège : devant une voyelle il s'élide (« port'ouverte »), et en fin de vers il ne compte jamais, même devant un silence.",
      hint: "Lis à voix haute « une porte fermée » puis « une porte ouverte » : où entends-tu le « eu » ?",
    },
    {
      id: "f4ver-6",
      level: 2,
      type: "input",
      question: "Compte les syllabes du vers de Victor Hugo : « Demain, dès l'aube, à l'heure où blanchit la campagne » (réponds par un nombre)",
      answer: "12",
      accept: ["douze"],
      explanation:
        "De-main-dès-l'au-b(e)à-l'heu-r(e)où-blan-chit-la-cam-pa-gne : 12 syllabes, c'est un alexandrin. Le piège : les e muets de « aube » et « heure » s'élident devant les voyelles qui suivent, et le e final de « campagne » ne compte pas en fin de vers.",
      hint: "Attention aux e muets devant voyelle : ils s'effacent. C'est le vers noble par excellence…",
    },
    {
      id: "f4ver-7",
      level: 2,
      type: "qcm",
      question: "Des rimes disposées selon le schéma ABAB sont des rimes…",
      choices: ["suivies", "croisées", "embrassées"],
      answer: 1,
      explanation:
        "ABAB : les deux sons alternent, ils se croisent → rimes croisées. Le piège : dans les rimes embrassées (ABBA), le son A ne revient qu'au quatrième vers, il « enlace » les deux B.",
      hint: "A et B alternent comme les doigts de deux mains qui se croisent.",
    },
    {
      id: "f4ver-8",
      level: 2,
      type: "truefalse",
      question: "Une strophe de trois vers s'appelle un tercet.",
      answer: true,
      explanation:
        "Vrai ! Le tercet est la strophe de 3 vers ; on le retrouve deux fois à la fin du sonnet. Le piège : le distique compte 2 vers, le quatrain 4, le quintil 5 ; ne mélange pas la famille des noms de strophes.",
      hint: "« Ter » signifie trois fois, comme dans « tiercé ».",
    },
    {
      id: "f4ver-9",
      level: 3,
      type: "qcm",
      question: "La rime « beau » / « château » est une rime…",
      choices: ["pauvre", "suffisante", "riche"],
      answer: 0,
      explanation:
        "Les deux mots n'ont qu'un seul son commun, la voyelle [o] : c'est une rime pauvre. Le piège : les lettres « eau » sont communes, mais on compte les sons, pas les lettres ; « beau » se termine par [bo] et « château » par [to], seuls les [o] coïncident.",
      hint: "Prononce la fin des deux mots : combien de sons identiques entends-tu ?",
    },
    {
      id: "f4ver-10",
      level: 3,
      type: "input",
      question: "Comment appelle-t-on un poème à forme fixe de quatorze vers, composé de deux quatrains et de deux tercets ?",
      answer: "sonnet",
      accept: ["un sonnet", "le sonnet"],
      explanation:
        "C'est le sonnet : 4 + 4 + 3 + 3 = 14 vers. Venu d'Italie, il a été illustré par Ronsard et Du Bellay à la Renaissance. Le piège : deux n et un seul t ; et ne pas confondre avec la « sonate », qui est une forme musicale.",
      hint: "Ronsard en a écrit des centaines pour Cassandre et Hélène.",
    },
    {
      id: "f4ver-11",
      level: 3,
      type: "qcm",
      question: "Un quatrain se termine par les mots : nuit / sombre / ombre / ennui. Quelle est la disposition des rimes ?",
      choices: ["suivies", "croisées", "embrassées"],
      answer: 2,
      explanation:
        "On note les sons : nuit (A), sombre (B), ombre (B), ennui (A) → schéma ABBA, rimes embrassées : la rime A enveloppe les deux B. Le piège : repère les sons finaux avant de conclure ; ici [ui] revient aux vers 1 et 4, [ombre] aux vers 2 et 3.",
      hint: "Attribue une lettre à chaque son final, dans l'ordre : que donne le schéma ?",
    },
    {
      id: "f4ver-12",
      level: 3,
      type: "qcm",
      question: "La poésie lyrique exprime avant tout…",
      choices: [
        "les sentiments personnels du poète",
        "les exploits guerriers des héros",
        "des connaissances scientifiques",
      ],
      answer: 0,
      explanation:
        "Le lyrisme, c'est l'expression des émotions personnelles (amour, deuil, nostalgie…), à la première personne. Le mot vient de la lyre d'Orphée, qui accompagnait les chants. Le piège : le récit des exploits guerriers relève de la poésie épique, pas lyrique.",
      hint: "Pense à l'instrument de musique qui a donné son nom au genre.",
    },
  ],
};
