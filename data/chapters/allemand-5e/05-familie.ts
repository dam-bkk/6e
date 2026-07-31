import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "de5-familie",
  subject: "allemand",
  grade: "5e",
  num: 5,
  title: "Die Familie",
  domain: "nombres",
  domainLabel: "Wortschatz",
  icon: "House",
  teaser: "Présente ta famille et tes animaux : Mutter, Vater, mein Hund… et décris qui est grand ou petit.",
  objectives: [
    "Je connais le vocabulaire de la famille : Mutter, Vater, Bruder, Schwester…",
    "Je sais utiliser les possessifs mein/dein (et meine/deine au féminin et au pluriel)",
    "Je sais décrire quelqu'un : Er ist groß, sie ist nett",
    "Je connais les animaux domestiques : der Hund, die Katze…",
  ],
  lesson: [
    {
      title: "La famille proche",
      paragraphs: [
        "Les parents : die Mutter (la mère), der Vater (le père). Ensemble : die Eltern (les parents). En version affectueuse : Mama et Papa.",
        "Les frères et sœurs : der Bruder (le frère), die Schwester (la sœur). Le mot qui regroupe les deux : die Geschwister (les frères et sœurs, toujours au pluriel). « Hast du Geschwister? » = as-tu des frères et sœurs ?",
        "Remarque les genres logiques ici : les mots désignant des femmes sont féminins (die Mutter, die Schwester), ceux désignant des hommes sont masculins (der Vater, der Bruder).",
      ],
      example: [
        "Das ist meine Mutter. → C'est ma mère.",
        "Mein Vater heißt Thomas. → Mon père s'appelle Thomas.",
        "Ich habe einen Bruder und eine Schwester. → J'ai un frère et une sœur.",
        "Hast du Geschwister? → As-tu des frères et sœurs ?",
      ],
      tip: "Prononciation : le v de « Vater » se dit « f » → « fater ». Et le mot Geschwister n'a pas d'équivalent simple en français : un seul mot pour « frères et sœurs » !",
    },
    {
      title: "Les grands-parents et le reste de la famille",
      paragraphs: [
        "Les grands-parents : die Großmutter (la grand-mère) et der Großvater (le grand-père), ensemble die Großeltern. En affectueux : Oma (mamie) et Opa (papi) — très utilisés en Allemagne.",
        "On complète la famille avec die Tante (la tante), der Onkel (l'oncle), der Cousin et die Cousine (comme en français).",
        "Remarque la construction : Groß + Mutter = Großmutter. L'allemand adore coller les mots ensemble pour en créer de nouveaux — c'est sa grande spécialité.",
      ],
      example: [
        "Meine Oma wohnt in Berlin. → Ma mamie habite à Berlin.",
        "Mein Opa ist siebzig Jahre alt. → Mon papi a 70 ans.",
        "Meine Tante hat zwei Kinder. → Ma tante a deux enfants.",
      ],
      tip: "« Groß » veut dire « grand » : die Großmutter est littéralement la « grande-mère », comme en français ! Le ß se prononce ss : « grossmoutter ».",
    },
    {
      title: "Les possessifs : mein et dein",
      paragraphs: [
        "Pour dire « mon/ma », on utilise « mein » ; pour « ton/ta », « dein ». Ils se comportent exactement comme ein : mein devant un masculin ou un neutre, meine devant un féminin.",
        "Mein Vater (mon père), mein Haus (ma maison), MAIS meine Mutter (ma mère), meine Schwester (ma sœur). Pareil pour dein : dein Bruder, deine Katze.",
        "Au pluriel, on utilise aussi la forme en -e : meine Eltern (mes parents), deine Geschwister (tes frères et sœurs).",
      ],
      example: [
        "Mein Bruder heißt Max. → Mon frère s'appelle Max.",
        "Meine Schwester ist zehn. → Ma sœur a 10 ans.",
        "Wie heißt deine Mutter? → Comment s'appelle ta mère ?",
        "Meine Eltern kommen aus Frankreich. → Mes parents viennent de France.",
      ],
      tip: "Mein/dein suivent la même règle que ein/eine et kein/keine : masculin et neutre → sans -e, féminin et pluriel → avec -e. Une seule règle pour toute la famille de « ein » !",
    },
    {
      title: "Décrire quelqu'un",
      paragraphs: [
        "Pour décrire, on utilise sein + un adjectif : « Er ist groß » (il est grand), « Sie ist klein » (elle est petite).",
        "Adjectifs utiles : groß (grand), klein (petit), nett (gentil), lustig (drôle), jung (jeune), alt (vieux), sportlich (sportif).",
        "Bonne nouvelle : après sein, l'adjectif est invariable ! Er ist nett, sie ist nett, sie sind nett — pas d'accord à faire, contrairement au français (gentil, gentille, gentils).",
      ],
      example: [
        "Mein Vater ist groß und sportlich. → Mon père est grand et sportif.",
        "Meine Oma ist alt, aber lustig. → Ma mamie est âgée, mais drôle.",
        "Meine Schwester ist klein und nett. → Ma sœur est petite et gentille.",
      ],
      tip: "« Aber » veut dire « mais » : très pratique pour nuancer un portrait. Et souviens-toi : l'adjectif après sein ne s'accorde jamais — un vrai cadeau de l'allemand !",
    },
    {
      title: "Les animaux domestiques",
      paragraphs: [
        "Les stars de la maison : der Hund (le chien), die Katze (le chat), das Kaninchen (le lapin), der Hamster, der Vogel (l'oiseau), der Fisch (le poisson).",
        "Pour dire ton animal : « Ich habe einen Hund » (j'ai un chien), « Meine Katze heißt Minka » (mon chat s'appelle Minka). Et sans animal : « Ich habe kein Haustier » (je n'ai pas d'animal de compagnie).",
        "Das Haustier = l'animal domestique, littéralement « l'animal de maison » (Haus + Tier). Encore un mot composé !",
      ],
      example: [
        "Ich habe einen Hund. Er heißt Rex. → J'ai un chien. Il s'appelle Rex.",
        "Meine Katze ist schwarz. → Mon chat est noir.",
        "Hast du ein Haustier? → As-tu un animal de compagnie ?",
      ],
      tip: "Le u de « Hund » se prononce « ou » : « hount ». Et rappelle-toi le genre surprenant de die Katze : féminin en allemand, même pour un chat mâle !",
    },
  ],
  exercises: [
    {
      id: "de5f-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « la mère » en allemand ?",
      choices: ["der Vater", "die Mutter", "die Schwester", "die Oma"],
      answer: 1,
      explanation:
        "Die Mutter = la mère. Der Vater = le père, die Schwester = la sœur, die Oma = la mamie. En version affectueuse, on dit Mama.",
      hint: "Ce mot ressemble à l'anglais « mother ».",
    },
    {
      id: "de5f-2",
      level: 1,
      type: "qcm",
      question: "Que signifie le mot « Geschwister » ?",
      choices: ["Les grands-parents", "Les frères et sœurs", "Les cousins", "Les parents"],
      answer: 1,
      explanation:
        "Die Geschwister = les frères et sœurs, en un seul mot (toujours au pluriel). Les grands-parents = die Großeltern, les parents = die Eltern. « Hast du Geschwister? » est une question très fréquente.",
      hint: "On y entend presque le mot « Schwester » (sœur).",
    },
    {
      id: "de5f-3",
      level: 1,
      type: "input",
      question: "Comment appelle-t-on affectueusement la grand-mère en allemand (3 lettres) ?",
      answer: "oma",
      explanation:
        "Oma = mamie (et Opa = papi). Les mots complets sont die Großmutter et der Großvater, mais en famille on dit presque toujours Oma et Opa.",
      hint: "Ça commence par O — et « papi » se dit Opa.",
    },
    {
      id: "de5f-4",
      level: 1,
      type: "truefalse",
      question: "« Der Hund » veut dire « le chat ».",
      answer: false,
      explanation:
        "Faux ! Der Hund = le chien. Le chat, c'est die Katze — un mot féminin en allemand. Astuce : Hund ressemble à l'anglais « hound » (chien de chasse).",
    },
    {
      id: "de5f-5",
      level: 2,
      type: "input",
      question: "Complète avec le bon possessif : « … Mutter heißt Anna » (ma mère s'appelle Anna).",
      answer: "meine",
      explanation:
        "« Meine Mutter » : Mutter est féminin (die Mutter), donc le possessif prend un -e, comme eine. Rappel : mein Vater (masculin) mais meine Mutter (féminin).",
      hint: "Die Mutter est féminin : le possessif se termine donc par -e.",
    },
    {
      id: "de5f-6",
      level: 2,
      type: "qcm",
      question: "Quelle est la forme correcte : « … Bruder ist zwölf » (ton frère a 12 ans) ?",
      choices: ["deine", "dein", "meine", "keine"],
      answer: 1,
      explanation:
        "« Dein Bruder » : Bruder est masculin (der Bruder), donc pas de -e — comme ein. « Deine » serait pour un féminin ou un pluriel : deine Schwester, deine Eltern.",
      hint: "Der Bruder est masculin : même règle que « ein Bruder ».",
    },
    {
      id: "de5f-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « il est grand » ?",
      choices: ["Er ist klein", "Er ist groß", "Er hat groß", "Er ist alt"],
      answer: 1,
      explanation:
        "« Er ist groß » = il est grand. On décrit avec sein + adjectif. Klein = petit, alt = vieux. Et « er hat groß » ne veut rien dire : pour décrire, c'est sein, pas haben.",
      hint: "C'est le même mot que dans « Großmutter » (grand-mère).",
    },
    {
      id: "de5f-8",
      level: 2,
      type: "truefalse",
      question: "Après le verbe sein, l'adjectif allemand ne s'accorde pas : « sie ist nett », « sie sind nett ».",
      answer: true,
      explanation:
        "Vrai ! Après sein, l'adjectif est invariable : er ist nett, sie ist nett, wir sind nett. Pas d'accord en genre ni en nombre — plus simple que le français gentil/gentille/gentils.",
      hint: "C'est une des bonnes nouvelles de la grammaire allemande.",
    },
    {
      id: "de5f-9",
      level: 3,
      type: "input",
      question: "Traduis en allemand : « j'ai un chien » (3 mots — pense à la forme einen).",
      answer: "ich habe einen hund",
      explanation:
        "« Ich habe einen Hund » : après haben, le masculin ein devient einen (c'est l'accusatif, tu l'étudieras plus tard — pour l'instant, retiens la formule toute faite). Hund prend une majuscule à l'écrit.",
      hint: "Ich + haben à la 1re personne + einen + l'animal qui aboie.",
    },
    {
      id: "de5f-10",
      level: 3,
      type: "qcm",
      question: "Le mot « Großeltern » est composé de deux mots. Lesquels ?",
      choices: [
        "groß (grand) + Eltern (parents)",
        "Groß (taille) + Altern (vieillir)",
        "grüß (saluer) + Eltern (parents)",
        "groß (grand) + Onkel (oncle)",
      ],
      answer: 0,
      explanation:
        "Großeltern = groß (grand) + Eltern (parents) : les « grands-parents », exactement comme en français. L'allemand construit énormément de mots en collant deux mots ensemble : Haustier (Haus + Tier), Großmutter (groß + Mutter)…",
      hint: "La même logique que le français « grands-parents ».",
    },
    {
      id: "de5f-11",
      level: 3,
      type: "input",
      question: "Complète le portrait : « meine Oma ist alt, … lustig » (ma mamie est âgée, mais drôle).",
      answer: "aber",
      explanation:
        "« Aber » = mais. « Meine Oma ist alt, aber lustig » : très utile pour nuancer une description. Lustig = drôle, alt = vieux/âgé.",
      hint: "Le petit mot allemand pour « mais » commence par a.",
    },
    {
      id: "de5f-12",
      level: 3,
      type: "truefalse",
      question: "Dans « meine Eltern », le possessif prend un -e parce que « Eltern » est un pluriel.",
      answer: true,
      explanation:
        "Vrai ! Au pluriel, mein/dein prennent toujours -e : meine Eltern (mes parents), deine Geschwister (tes frères et sœurs). La règle complète : masculin et neutre → mein/dein, féminin ET pluriel → meine/deine.",
    },
  ],
};
