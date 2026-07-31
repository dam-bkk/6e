import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-schule",
  subject: "allemand",
  grade: "5e",
  num: 6,
  title: "Die Schule",
  domain: "donnees",
  domainLabel: "Wortschatz",
  icon: "Backpack",
  teaser: "Parle de ton collège : les matières, les affaires de classe, les jours de la semaine et ce que tu aimes faire.",
  objectives: [
    "Je connais les matières : Mathe, Deutsch, Sport, Englisch…",
    "Je connais les objets de la classe : der Bleistift, das Heft, das Buch…",
    "Je connais les jours de la semaine : Montag, Dienstag…",
    "Je sais parler de mon emploi du temps : Am Montag habe ich Mathe",
    "Je sais dire ce que j'aime faire avec gern : Ich spiele gern Fußball",
  ],
  lesson: [
    {
      title: "Les matières scolaires",
      paragraphs: [
        "Les matières principales : Mathe (les maths), Deutsch (l'allemand), Englisch (l'anglais), Französisch (le français), Geschichte (l'histoire), Erdkunde (la géographie), Biologie, Sport, Musik, Kunst (les arts plastiques).",
        "Pour dire ta matière préférée : « Mein Lieblingsfach ist Mathe » (ma matière préférée, c'est les maths). Das Fach = la matière ; Lieblings- devant un nom veut dire « préféré ».",
        "Remarque : les noms de matières prennent une majuscule (ce sont des noms), et on les utilise sans article : Ich habe Mathe (j'ai maths).",
      ],
      example: [
        "Ich habe heute Deutsch und Sport. → J'ai allemand et sport aujourd'hui.",
        "Mein Lieblingsfach ist Englisch. → Ma matière préférée, c'est l'anglais.",
        "Mathe ist super! → Les maths, c'est super !",
      ],
      tip: "« Lieblings- » se colle devant n'importe quel nom : Lieblingsfach (matière préférée), Lieblingstier (animal préféré), Lieblingsfarbe (couleur préférée). Un préfixe magique à réutiliser partout !",
    },
    {
      title: "Dans le cartable : les objets de la classe",
      paragraphs: [
        "Avec leur genre, bien sûr : der Bleistift (le crayon à papier), der Kuli (le stylo bille), das Heft (le cahier), das Buch (le livre), die Schultasche (le cartable), der Radiergummi (la gomme), das Lineal (la règle), die Schere (les ciseaux).",
        "Der Bleistift est un mot composé : Blei (le plomb) + Stift (le bâton) — le « bâton de plomb ». Die Schultasche aussi : Schule + Tasche (le sac d'école).",
        "Pour demander un objet poliment : « Hast du einen Bleistift? » (as-tu un crayon ?).",
      ],
      example: [
        "Das ist mein Heft. → C'est mon cahier.",
        "Ich habe einen Bleistift und einen Kuli. → J'ai un crayon et un stylo.",
        "Wo ist meine Schultasche? → Où est mon cartable ?",
      ],
      tip: "Apprends chaque objet AVEC son article : der Bleistift, das Heft, die Schere. Remarque que « die Schere » (les ciseaux) est un singulier en allemand — une paire = eine Schere.",
    },
    {
      title: "Les jours de la semaine",
      paragraphs: [
        "Montag (lundi), Dienstag (mardi), Mittwoch (mercredi), Donnerstag (jeudi), Freitag (vendredi), Samstag (samedi), Sonntag (dimanche).",
        "Presque tous finissent en -tag (le jour). Mittwoch est l'intrus : littéralement « milieu de semaine » (Mitte + Woche).",
        "Pour dire « le lundi », on utilise am : « Am Montag habe ich Sport » (le lundi, j'ai sport). Et « aujourd'hui » = heute, « demain » = morgen.",
      ],
      example: [
        "Am Montag habe ich Mathe. → Le lundi, j'ai maths.",
        "Am Mittwoch haben wir Sport. → Le mercredi, nous avons sport.",
        "Heute ist Freitag. → Aujourd'hui, c'est vendredi.",
      ],
      tip: "Attention au piège morgen/Morgen : « morgen » (minuscule) = demain, « der Morgen » (majuscule) = le matin. « Morgen früh » = demain matin. La majuscule change le sens !",
    },
    {
      title: "L'emploi du temps",
      paragraphs: [
        "Der Stundenplan = l'emploi du temps (littéralement : le plan des heures). Die Stunde = l'heure de cours, die Pause = la récréation.",
        "Pour décrire ta journée : « Am Dienstag habe ich Deutsch, Mathe und Musik » (le mardi, j'ai allemand, maths et musique).",
        "Rappelle-toi la règle du verbe en 2e position : si tu commences par « Am Dienstag », le verbe vient tout de suite après — « Am Dienstag habe ich… », jamais « Am Dienstag ich habe… ».",
      ],
      example: [
        "Was hast du am Montag? → Qu'est-ce que tu as le lundi ?",
        "Am Montag habe ich Englisch und Kunst. → Le lundi, j'ai anglais et arts plastiques.",
        "Die Pause ist um zehn Uhr. → La récréation est à dix heures.",
      ],
      tip: "Stundenplan, Schultasche, Lieblingsfach : l'école allemande adore les mots composés. Pour les comprendre, lis-les à l'envers : Stunden-plan = plan… des heures.",
    },
    {
      title: "Dire ce qu'on aime faire : gern",
      paragraphs: [
        "Voici LE tournant idiomatique de l'allemand : pour dire qu'on aime FAIRE quelque chose, on n'utilise pas un verbe « aimer » — on ajoute le petit mot « gern » (volontiers) après le verbe.",
        "« Ich spiele gern Fußball » = j'aime jouer au foot (littéralement : je joue volontiers au foot). « Ich lerne gern Deutsch » = j'aime apprendre l'allemand.",
        "Pour dire qu'on n'aime pas : nicht gern. « Ich mache nicht gern Hausaufgaben » = je n'aime pas faire les devoirs (die Hausaufgaben = les devoirs).",
      ],
      example: [
        "Ich spiele gern Fußball. → J'aime jouer au foot.",
        "Ich höre gern Musik. → J'aime écouter de la musique.",
        "Er lernt gern Englisch. → Il aime apprendre l'anglais.",
        "Ich mache nicht gern Hausaufgaben. → Je n'aime pas faire les devoirs.",
      ],
      tip: "Formule magique : verbe + gern = aimer faire. Ne cherche pas à traduire « j'aime jouer » mot à mot — dis « je joue gern ». C'est le réflexe le plus allemand que tu apprendras cette année !",
    },
  ],
  exercises: [
    {
      id: "de6-1",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle la matière « les maths » en allemand ?",
      choices: ["Kunst", "Mathe", "Erdkunde", "Geschichte"],
      answer: 1,
      explanation:
        "Mathe = les maths (abréviation de Mathematik). Kunst = les arts plastiques, Erdkunde = la géographie, Geschichte = l'histoire.",
      hint: "C'est presque le même mot qu'en français.",
    },
    {
      id: "de6-2",
      level: 1,
      type: "qcm",
      question: "Quel jour vient après Montag ?",
      choices: ["Sonntag", "Mittwoch", "Dienstag", "Freitag"],
      answer: 2,
      explanation:
        "Montag (lundi) → Dienstag (mardi). La suite : Mittwoch (mercredi), Donnerstag (jeudi), Freitag (vendredi), Samstag (samedi), Sonntag (dimanche).",
      hint: "C'est le mardi que tu cherches.",
    },
    {
      id: "de6-3",
      level: 1,
      type: "input",
      question: "Comment dit-on « le cahier » en allemand (sans l'article, un seul mot) ?",
      answer: "heft",
      explanation:
        "Das Heft = le cahier. C'est un nom neutre : das Heft, mein Heft. À l'écrit, il prend une majuscule comme tous les noms : Heft.",
      hint: "Un petit mot de 4 lettres qui commence par H.",
    },
    {
      id: "de6-4",
      level: 1,
      type: "truefalse",
      question: "Presque tous les jours de la semaine allemands se terminent par « -tag ».",
      answer: true,
      explanation:
        "Vrai ! Montag, Dienstag, Donnerstag, Freitag, Samstag, Sonntag : tous en -tag (le jour). Le seul intrus est Mittwoch (mercredi), qui veut dire « milieu de semaine ».",
    },
    {
      id: "de6-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « j'aime jouer au foot » en allemand ?",
      choices: [
        "Ich liebe spiele Fußball",
        "Ich spiele gern Fußball",
        "Ich gern spiele Fußball",
        "Ich spiele Fußball gern aime",
      ],
      answer: 1,
      explanation:
        "« Ich spiele gern Fußball » : verbe + gern = aimer faire. C'est LE tournant idiomatique allemand — on ne traduit pas « j'aime jouer » mot à mot, on dit « je joue volontiers ». Et gern se place juste après le verbe.",
      hint: "Le petit mot « gern » vient après le verbe conjugué.",
    },
    {
      id: "de6-6",
      level: 2,
      type: "input",
      question: "Complète : « am … habe ich Sport » pour dire « le mercredi, j'ai sport » (le jour en un mot).",
      answer: "mittwoch",
      explanation:
        "« Am Mittwoch habe ich Sport » : Mittwoch = mercredi, le seul jour qui ne finit pas en -tag. Il signifie « milieu de semaine » (Mitte + Woche). Remarque le verbe en 2e position après « Am Mittwoch ».",
      hint: "C'est le jour « milieu de semaine », le seul sans -tag.",
    },
    {
      id: "de6-7",
      level: 2,
      type: "qcm",
      question: "Que signifie « der Stundenplan » ?",
      choices: ["La salle de classe", "Le carnet de notes", "L'emploi du temps", "La récréation"],
      answer: 2,
      explanation:
        "Der Stundenplan = l'emploi du temps, littéralement le « plan des heures » (Stunden + Plan). La récréation = die Pause. Lire les mots composés à l'envers aide : Stunden-plan = plan des heures.",
      hint: "Découpe le mot : Stunden (heures) + Plan.",
    },
    {
      id: "de6-8",
      level: 2,
      type: "truefalse",
      question: "« Morgen » avec une majuscule veut dire « demain ».",
      answer: false,
      explanation:
        "Faux, c'est l'inverse ! « morgen » en minuscule = demain (c'est un adverbe), « der Morgen » avec majuscule = le matin (c'est un nom). La majuscule change le sens — encore une preuve que la règle des majuscules compte.",
      hint: "La majuscule est réservée aux noms… « demain » est-il un nom ?",
    },
    {
      id: "de6-9",
      level: 3,
      type: "input",
      question: "Traduis : « j'aime écouter de la musique » → « ich höre … musik » (un seul mot à placer).",
      answer: "gern",
      explanation:
        "« Ich höre gern Musik » : hören (écouter) + gern = aimer écouter. La formule verbe + gern remplace notre « j'aime + infinitif ». Musik prend une majuscule : c'est un nom.",
      hint: "Le petit mot qui veut dire « volontiers ».",
    },
    {
      id: "de6-10",
      level: 3,
      type: "qcm",
      question: "Comment dit-on « je n'aime pas faire les devoirs » ?",
      choices: [
        "Ich mache kein gern Hausaufgaben",
        "Ich mache nicht gern Hausaufgaben",
        "Ich nicht mache gern Hausaufgaben",
        "Ich mache gern nicht Hausaufgaben",
      ],
      answer: 1,
      explanation:
        "« Ich mache nicht gern Hausaufgaben » : pour la version négative, on dit nicht gern après le verbe. Die Hausaufgaben = les devoirs (littéralement : les tâches de maison).",
      hint: "On nie « gern » avec nicht, juste devant lui.",
    },
    {
      id: "de6-11",
      level: 3,
      type: "input",
      question: "Complète le mot composé « matière préférée » : « mein Lieblings… ist Mathe » (le nom qui veut dire « matière »).",
      answer: "fach",
      explanation:
        "« Mein Lieblingsfach ist Mathe » : das Fach = la matière, et Lieblings- devant un nom = préféré. Le préfixe marche partout : Lieblingstier (animal préféré), Lieblingsfarbe (couleur préférée).",
      hint: "Das …, c'est le mot allemand pour « la matière » — 4 lettres.",
    },
    {
      id: "de6-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Am Montag ich habe Englisch » est correcte.",
      answer: false,
      explanation:
        "Faux ! Le verbe doit rester en 2e position : « Am Montag habe ich Englisch ». Quand la phrase commence par un complément comme « Am Montag », le sujet passe après le verbe. « Am Montag ich habe » est le calque du français — erreur classique !",
    },
  ],
};
