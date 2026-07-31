import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-hallo",
  subject: "allemand",
  grade: "5e",
  num: 1,
  title: "Hallo! Saluer et se présenter",
  domain: "donnees",
  domainLabel: "Kommunikation",
  icon: "Hand",
  teaser: "Tes premiers mots en allemand : dire bonjour, ton nom, ton âge et d'où tu viens.",
  objectives: [
    "Je sais saluer et prendre congé : Hallo, Guten Morgen, Guten Tag, Tschüss",
    "Je sais dire mon nom : Ich heiße… et demander Wie heißt du?",
    "Je sais dire mon âge : Ich bin zwölf Jahre alt",
    "Je sais dire d'où je viens : Ich komme aus…",
    "Je connais les sons de l'allemand (ch, sch, ei, eu, ß) et les nombres de 1 à 20",
  ],
  lesson: [
    {
      title: "Saluer : Hallo, Guten Tag…",
      figure: "de-gruesse",
      paragraphs: [
        "Pour dire bonjour, le mot passe-partout est « Hallo ». Il marche à toute heure, entre amis comme en classe.",
        "Selon le moment de la journée, on précise : « Guten Morgen » (le matin), « Guten Tag » (dans la journée) et « Guten Abend » (le soir).",
        "Pour dire au revoir : « Tschüss » (salut, entre amis) ou « Auf Wiedersehen » (au revoir, plus poli). On entend aussi « Bis bald » (à bientôt) et « Bis morgen » (à demain).",
      ],
      example: [
        "Hallo! Wie geht's? → Salut ! Ça va ?",
        "Guten Morgen, Frau Schmidt. → Bonjour, madame Schmidt. (le matin)",
        "Guten Abend. → Bonsoir.",
        "Tschüss, bis morgen! → Salut, à demain !",
      ],
      tip: "Remarque la majuscule : Morgen, Tag et Abend s'écrivent avec une grande lettre. En allemand, TOUS les noms prennent une majuscule, où qu'ils soient dans la phrase. C'est la règle d'or de l'écrit allemand.",
    },
    {
      title: "Dire son nom : Ich heiße…",
      paragraphs: [
        "Pour dire ton nom : « Ich heiße Emma » (je m'appelle Emma). Tu peux aussi dire simplement « Ich bin Emma » (je suis Emma).",
        "Pour demander son nom à un camarade : « Wie heißt du? » (comment tu t'appelles ?).",
        "La lettre ß (« eszett ») se prononce comme un s dur, un double s : « heiße » se dit « haïssé ». Si ton clavier n'a pas de ß, on peut écrire ss à la place (heisse).",
      ],
      example: [
        "— Wie heißt du? → Comment tu t'appelles ?",
        "— Ich heiße Lena. Und du? → Je m'appelle Lena. Et toi ?",
        "— Ich bin Hugo. → Moi, c'est Hugo.",
      ],
      tip: "Le mot interrogatif « wie » veut dire « comment ». Attention au faux ami sonore : « wie » se prononce « vi », car en allemand le w se prononce toujours comme un v français.",
    },
    {
      title: "Dire son âge et son origine",
      paragraphs: [
        "Pour l'âge, l'allemand utilise le verbe être, comme l'anglais : « Ich bin zwölf Jahre alt » (littéralement : je suis vieille de 12 ans). On peut raccourcir en « Ich bin zwölf ».",
        "Pour demander l'âge : « Wie alt bist du? » (littéralement : comment vieux es-tu ?).",
        "Pour dire d'où tu viens : « Ich komme aus Frankreich » (je viens de France). On utilise kommen + aus + le pays. Pour demander : « Woher kommst du? » (d'où viens-tu ?).",
      ],
      example: [
        "— Wie alt bist du? → Quel âge as-tu ?",
        "— Ich bin zwölf Jahre alt. → J'ai 12 ans.",
        "— Woher kommst du? → D'où viens-tu ?",
        "— Ich komme aus Frankreich, aus Paris. → Je viens de France, de Paris.",
      ],
      tip: "Quelques pays : Frankreich (la France), Deutschland (l'Allemagne), Österreich (l'Autriche), die Schweiz (la Suisse), Spanien (l'Espagne). Tous avec une majuscule, bien sûr !",
    },
    {
      title: "Les sons de l'allemand",
      paragraphs: [
        "L'allemand se lit presque comme il s'écrit, une fois que tu connais quelques sons clés.",
        "Le « ch » est un souffle : doux après i/e (ich → « ich » soufflé), raclé après a/o/u (Nacht). Le « sch » se prononce « ch » comme dans « chat » : Schule → « choulé ».",
        "Les voyelles doubles : « ei » se prononce « aïe » (heißen → « haïssen », nein → « naïn ») et « eu » se prononce « oï » (Deutsch → « doïtch »). C'est le contraire de ce qu'on attend : ei = aïe, ie = un long i (wie → « vi »).",
        "Les trémas (Umlaut) changent le son : ä ressemble à un è, ö au « eu » de « peur », ü au u français de « lune ». Et le ß vaut un double s.",
      ],
      example: [
        "ich → « ich » (ch doux) ; Schule → « choulé »",
        "nein → « naïn » ; drei → « draï »",
        "Deutsch → « doïtch » ; neun → « noïn »",
        "fünf → « funf » avec le u de « lune » ; heiße → « haïssé »",
      ],
      tip: "Moyen mnémotechnique pour ei et ie : prononce la DEUXIÈME lettre à la française. ei → son « aïe » (comme un i long à l'anglaise), ie → son « i ». Ainsi « nein » = naïn et « wie » = vi.",
    },
    {
      title: "Les nombres de 1 à 20",
      paragraphs: [
        "De 1 à 12, on apprend par cœur : eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf.",
        "De 13 à 19, on ajoute -zehn : dreizehn (13), vierzehn (14), fünfzehn (15), sechzehn (16), siebzehn (17), achtzehn (18), neunzehn (19). Attention aux formes raccourcies : sechzehn (pas « sechszehn ») et siebzehn (pas « siebenzehn »).",
        "Et 20 se dit zwanzig.",
      ],
      example: [
        "3 → drei, 7 → sieben, 12 → zwölf",
        "13 → dreizehn, 16 → sechzehn, 17 → siebzehn",
        "20 → zwanzig",
      ],
      tip: "Zwölf (12) et zwanzig (20) commencent tous les deux par zw- : ne les confonds pas. Pour ton âge, retiens bien « Ich bin zwölf » = j'ai 12 ans.",
    },
  ],
  exercises: [
    {
      id: "de1-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « bonjour » le matin en allemand ?",
      choices: ["Guten Abend", "Guten Morgen", "Tschüss", "Bis bald"],
      answer: 1,
      explanation:
        "Le matin, on dit « Guten Morgen ». « Guten Abend » = bonsoir, « Tschüss » = salut (pour partir), « Bis bald » = à bientôt. Remarque la majuscule à Morgen : c'est un nom, donc grande lettre obligatoire.",
      hint: "« Morgen » veut dire « matin ».",
    },
    {
      id: "de1-2",
      level: 1,
      type: "qcm",
      question: "Que signifie la question « Wie heißt du? » ?",
      choices: ["Quel âge as-tu ?", "Comment tu t'appelles ?", "D'où viens-tu ?", "Comment vas-tu ?"],
      answer: 1,
      explanation:
        "« Wie heißt du? » signifie « comment tu t'appelles ? ». On y répond par « Ich heiße… ». Ne confonds pas avec « Wie alt bist du? » (quel âge as-tu ?) ni « Woher kommst du? » (d'où viens-tu ?).",
      hint: "La réponse à cette question commence par « Ich heiße… ».",
    },
    {
      id: "de1-3",
      level: 1,
      type: "truefalse",
      question: "En allemand, la lettre ß se prononce comme un double s.",
      answer: true,
      explanation:
        "Vrai ! Le ß (eszett) vaut un s dur, comme ss : « heiße » se prononce « haïssé ». Si le clavier n'a pas de ß, on peut écrire ss à la place.",
    },
    {
      id: "de1-4",
      level: 1,
      type: "input",
      question: "Écris le mot allemand passe-partout pour dire « salut / bonjour » à toute heure.",
      answer: "hallo",
      explanation:
        "« Hallo » marche à toute heure et avec tout le monde, comme « salut » en français. Pour être plus précis : Guten Morgen le matin, Guten Tag la journée, Guten Abend le soir.",
      hint: "Il ressemble beaucoup au « hello » anglais.",
    },
    {
      id: "de1-5",
      level: 2,
      type: "input",
      question: "Complète la phrase pour dire ton nom : « ich … emma » (un seul mot).",
      answer: "heiße",
      accept: ["heisse"],
      explanation:
        "« Ich heiße Emma » = je m'appelle Emma. Le verbe est « heißen » : ich heiße, du heißt… Le ß se prononce comme un double s : « haïssé ».",
      hint: "C'est le verbe de « Wie heißt du? », mais à la 1re personne.",
    },
    {
      id: "de1-6",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'ai 12 ans » en allemand ?",
      choices: ["Ich habe zwölf Jahre", "Ich bin zwölf Jahre alt", "Ich heiße zwölf", "Ich komme zwölf Jahre"],
      answer: 1,
      explanation:
        "Pour l'âge, l'allemand utilise le verbe ÊTRE : « Ich bin zwölf Jahre alt » (littéralement : je suis vieux de 12 ans). C'est comme l'anglais « I am 12 », mais le contraire du français « j'ai 12 ans » !",
      hint: "En allemand, on « est » un âge, comme en anglais.",
    },
    {
      id: "de1-7",
      level: 2,
      type: "input",
      question: "Écris en allemand le nombre 10 (en lettres).",
      answer: "zehn",
      explanation:
        "10 = zehn. C'est aussi la brique des nombres de 13 à 19 : dreizehn (13), vierzehn (14)… On colle l'unité devant -zehn.",
      hint: "On le retrouve à la fin de « dreizehn » (13).",
    },
    {
      id: "de1-8",
      level: 2,
      type: "qcm",
      question: "Comment se prononce le groupe « ei » dans « nein » ou « drei » ?",
      choices: ["Comme « é »", "Comme « aïe »", "Comme « i »", "Comme « oï »"],
      answer: 1,
      explanation:
        "Le « ei » allemand se prononce « aïe » : nein = « naïn », drei = « draï ». Ne le confonds pas avec « ie » qui fait un i long (wie = « vi »), ni avec « eu » qui fait « oï » (neun = « noïn »).",
      hint: "Prononce la deuxième lettre à l'anglaise : le i anglais fait « aïe ».",
    },
    {
      id: "de1-9",
      level: 3,
      type: "input",
      question: "Traduis en allemand : « je viens de France » (4 mots).",
      answer: "ich komme aus frankreich",
      explanation:
        "« Ich komme aus Frankreich » : kommen (je viens) + aus (de) + le pays. C'est la réponse à « Woher kommst du? ». Rappel : Frankreich prend une majuscule, comme tous les noms allemands.",
      hint: "Verbe kommen à la 1re personne + « aus » + le nom allemand du pays.",
    },
    {
      id: "de1-10",
      level: 3,
      type: "input",
      question: "Écris le petit mot allemand pour dire « salut » en partant (entre amis).",
      answer: "tschüss",
      accept: ["tschuess"],
      explanation:
        "« Tschüss » = salut, au revoir (familier). Avec un adulte qu'on ne connaît pas bien, on préfère « Auf Wiedersehen ». Le ü se prononce comme le u français de « lune ».",
      hint: "Il commence par tsch- et contient un ü.",
    },
    {
      id: "de1-11",
      level: 3,
      type: "qcm",
      question: "Comment s'écrit le nombre 17 en allemand ?",
      choices: ["siebenzehn", "siebzehn", "siebzig", "zehnsieben"],
      answer: 1,
      explanation:
        "17 = siebzehn : « sieben » perd son -en devant -zehn. Même piège pour 16 : sechzehn (et non « sechszehn »). « Siebzig », lui, veut dire 70 — attention à la confusion.",
      hint: "Le mot « sieben » (7) se raccourcit devant -zehn.",
    },
    {
      id: "de1-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Guten Abend, Herr Müller! » peut se dire le soir pour saluer quelqu'un.",
      answer: true,
      explanation:
        "Vrai ! « Guten Abend » = bonsoir, c'est la salutation du soir. « Herr » = monsieur (et « Frau » = madame). Remarque encore les majuscules à Abend et Herr : ce sont des noms.",
    },
  ],
  videos: [
    {
      title: "8 questions/réponses pour SE PRESENTER en allemand - niveau DEBUTANT",
      youtubeId: "20YJ242TCxI",
      channel: "Apprendre natur'allemand",
    },
  ],
};
