import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-present-simple",
  subject: "anglais",
  num: 3,
  title: "Le présent simple",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "Repeat",
  teaser: "Parler de ses habitudes… sans jamais oublier le fameux -s de la 3e personne.",
  objectives: [
    "Je sais quand utiliser le présent simple (habitudes, goûts, vérités générales)",
    "Je n'oublie pas le -s à la 3e personne du singulier",
    "Je sais poser une question et faire une négation avec do/does",
    "Je connais les adverbes de fréquence et je sais où les placer",
  ],
  lesson: [
    {
      title: "À quoi sert le présent simple ?",
      paragraphs: [
        "Le présent simple décrit les habitudes (ce qu'on fait tous les jours, toutes les semaines…), les goûts et les vérités générales — pas ce qui se passe en ce moment précis.",
        "Sa forme est très simple : c'est la base verbale (le verbe tout nu, sans to). I play, you play, we play, they play… Une seule exception : la 3e personne du singulier.",
        "Quelques verbes très fréquents à connaître : play (jouer), like (aimer), go (aller), watch (regarder), listen (écouter), eat (manger), speak (parler), live (habiter), get up (se lever), work (travailler).",
      ],
      example: [
        "I play tennis on Saturdays. → Je joue au tennis le samedi.",
        "We speak French at home. → Nous parlons français à la maison.",
        "The sun rises in the east. → Le soleil se lève à l'est. (vérité générale)",
      ],
      tip: "Présent simple = ce qui est vrai en général ou d'habitude. Les mots comme every day, on Sundays, always sont ses meilleurs amis.",
    },
    {
      title: "Le -s de la 3e personne : LE piège n°1",
      paragraphs: [
        "Avec he, she et it, le verbe prend un -s : he plays, she likes, it works. C'est l'erreur la plus fréquente de TOUS les élèves — même les plus grands l'oublient encore !",
        "Cas particuliers d'orthographe : les verbes en -ch, -sh, -ss, -x, -o prennent -es (he watches, she goes, he does). Les verbes en consonne + y changent le y en -ies (study → she studies), mais play → plays (voyelle + y, pas de changement).",
        "Le verbe have est irrégulier : he has (pas « he haves » !).",
      ],
      example: [
        "My brother watches TV every evening. → Mon frère regarde la télé tous les soirs.",
        "She goes to school by bus. → Elle va à l'école en bus.",
        "Tom studies English. → Tom étudie l'anglais.",
        "He has breakfast at 7. → Il prend son petit-déjeuner à 7 h.",
      ],
      tip: "Avant d'écrire une phrase au présent simple, pose-toi LA question : « Le sujet, c'est he, she ou it ? » Si oui → -s au verbe. Fais-en un réflexe !",
    },
    {
      title: "Questions avec do et does",
      paragraphs: [
        "Pour poser une question au présent simple, on utilise l'auxiliaire do (ou does avec he, she, it) devant le sujet : Do you like football? Does she play tennis?",
        "Attention : quand does est là, le verbe perd son -s ! On dit Does she play…? et pas « Does she plays…? ». Le -s est déjà « pris » par does.",
        "Réponses courtes : Yes, I do. / No, I don't. / Yes, she does. / No, she doesn't.",
      ],
      example: [
        "Do you like chocolate? – Yes, I do. → Aimes-tu le chocolat ? – Oui.",
        "Does your dad work on Saturdays? – No, he doesn't. → Ton père travaille-t-il le samedi ? – Non.",
      ],
      tip: "Le -s ne peut être qu'à UN seul endroit : sur does OU sur le verbe, jamais les deux. Does she play ✓ — Does she plays ✗.",
    },
    {
      title: "Négation avec don't et doesn't",
      paragraphs: [
        "Pour la négation, on place don't (= do not) ou doesn't (= does not) devant la base verbale : I don't like coffee. He doesn't play rugby.",
        "Même règle que pour les questions : après doesn't, le verbe reste à la base verbale, sans -s. She doesn't likes ✗ → She doesn't like ✓.",
        "Ne confonds pas avec be : pour dire « je ne suis pas », c'est I'm not (pas « I don't be » !). Don't/doesn't ne s'utilisent qu'avec les autres verbes.",
      ],
      example: [
        "I don't eat meat. → Je ne mange pas de viande.",
        "She doesn't watch TV in the morning. → Elle ne regarde pas la télé le matin.",
        "They don't live in London. → Ils n'habitent pas à Londres.",
      ],
      tip: "don't = do not, doesn't = does not. À l'écrit comme à l'oral, les formes contractées sont les plus naturelles.",
    },
    {
      title: "Les adverbes de fréquence",
      paragraphs: [
        "Pour dire à quelle fréquence on fait quelque chose : always (toujours), usually (d'habitude), often (souvent), sometimes (parfois), never (jamais).",
        "Leur place est stricte : AVANT le verbe ordinaire (I often play football), mais APRÈS le verbe be (She is always late).",
        "Attention : never est déjà négatif, donc pas de don't avec lui ! I never eat fish ✓ — I don't never eat ✗. Pour demander la fréquence : How often do you…? (« Tous les combien… ? »).",
      ],
      example: [
        "I always get up at 7 o'clock. → Je me lève toujours à 7 heures.",
        "He sometimes plays video games. → Il joue parfois aux jeux vidéo.",
        "She is never late. → Elle n'est jamais en retard.",
        "How often do you go swimming? → Tu vas à la piscine tous les combien ?",
      ],
      tip: "Règle de la place : AVANT le verbe normal, APRÈS be. Mémo : « be d'abord, l'adverbe ensuite ».",
    },
  ],
  exercises: [
    {
      id: "eps-1",
      level: 1,
      type: "qcm",
      question: "Complète : « My sister ... football every Sunday. »",
      choices: ["play", "plays", "playes", "is play"],
      answer: 1,
      explanation:
        "My sister = she, donc le verbe prend un -s : plays. C'est LE réflexe du présent simple : he, she, it → verbe + s. « Playes » n'existe pas (le -es est réservé aux verbes en -ch, -sh, -ss, -x, -o).",
      hint: "My sister, c'est he, she ou it ?",
    },
    {
      id: "eps-2",
      level: 1,
      type: "qcm",
      question: "Quelle question est correcte ?",
      choices: ["Like you chocolate?", "Do you like chocolate?", "Does you like chocolate?", "You like chocolate?"],
      answer: 1,
      explanation:
        "Au présent simple, la question se forme avec do + sujet + base verbale : Do you like chocolate? Does est réservé à he, she, it. Sans auxiliaire, la question n'est pas correcte à l'écrit.",
      hint: "Avec you, c'est do ou does ?",
    },
    {
      id: "eps-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « He doesn't likes tennis. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Après doesn't, le verbe reste à la base verbale, sans -s : He doesn't like tennis. Le -s de la 3e personne est déjà porté par does — il ne peut pas être aux deux endroits.",
      hint: "Compte les -s : combien y en a-t-il dans la phrase ?",
    },
    {
      id: "eps-4",
      level: 1,
      type: "input",
      question: "Écris la forme du verbe watch avec she : « She ... TV after dinner. »",
      answer: "watches",
      explanation:
        "Les verbes qui se terminent par -ch prennent -es à la 3e personne : watch → watches. De même : go → goes, wash → washes, kiss → kisses.",
      hint: "watch se termine par -ch : simple -s ou -es ?",
    },
    {
      id: "eps-5",
      level: 2,
      type: "qcm",
      question: "Où placer often ? « She ... late for school. » / « She ... arrives late. »",
      choices: [
        "She often is late. / She often arrives late.",
        "She is often late. / She often arrives late.",
        "She is often late. / She arrives often late.",
        "She often is late. / She arrives often late.",
      ],
      answer: 1,
      explanation:
        "L'adverbe de fréquence se place APRÈS be (she is often late) mais AVANT un verbe ordinaire (she often arrives). C'est la règle de la place : be d'abord, l'adverbe ensuite.",
      hint: "Avant le verbe normal, après be.",
    },
    {
      id: "eps-6",
      level: 2,
      type: "input",
      question: "Mets à la forme négative avec la contraction : « I like coffee. » → « I ... like coffee. »",
      answer: "don't",
      accept: ["do not"],
      explanation:
        "Avec I, la négation du présent simple est don't (= do not) : I don't like coffee. Doesn't est réservé à he, she, it.",
      hint: "I, you, we, they → do... ; he, she, it → does...",
    },
    {
      id: "eps-7",
      level: 2,
      type: "qcm",
      question: "« Does your brother play the guitar? » Quelle est la réponse courte correcte pour dire non ?",
      choices: ["No, he don't.", "No, he doesn't.", "No, he doesn't play.", "No, he isn't."],
      answer: 1,
      explanation:
        "La réponse courte reprend l'auxiliaire de la question : Does…? → No, he doesn't. (ou Yes, he does.) On ne répète pas le verbe, et on ne mélange pas avec be.",
      hint: "On répond avec le même auxiliaire que la question.",
    },
    {
      id: "eps-8",
      level: 2,
      type: "truefalse",
      question: "On peut dire « I don't never eat fish » pour « Je ne mange jamais de poisson ».",
      answer: false,
      explanation:
        "Faux ! Never est déjà négatif : on dit I never eat fish, sans don't. En anglais, une seule négation par phrase — pas de double négation comme le « ne… jamais » français.",
      hint: "Combien de mots négatifs la phrase contient-elle ?",
    },
    {
      id: "eps-9",
      level: 3,
      type: "input",
      question: "Traduis : « Elle va à l'école en bus. » → « She ... to school by bus. » Quel est le verbe correctement conjugué ?",
      answer: "goes",
      explanation:
        "Go se termine par -o, donc il prend -es à la 3e personne : she goes. Comme do → does. Écrire « she gos » ou « she go » est incorrect.",
      hint: "go fait partie des verbes en -o.",
    },
    {
      id: "eps-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase traduit correctement « Tom étudie l'anglais mais il n'étudie pas l'espagnol » ?",
      choices: [
        "Tom studys English but he doesn't study Spanish.",
        "Tom studies English but he doesn't studies Spanish.",
        "Tom studies English but he doesn't study Spanish.",
        "Tom study English but he don't study Spanish.",
      ],
      answer: 2,
      explanation:
        "Study (consonne + y) devient studies à la 3e personne. Dans la négation, doesn't + base verbale sans -s : he doesn't study. La bonne phrase cumule les deux règles : Tom studies… he doesn't study…",
      hint: "Deux règles à vérifier : le y de study, et le verbe après doesn't.",
    },
    {
      id: "eps-11",
      level: 3,
      type: "input",
      question: "Remets dans l'ordre pour former la question : « does / up / when / get / she » (sans point d'interrogation)",
      answer: "when does she get up",
      explanation:
        "Ordre de la question : mot interrogatif (when) + does + sujet (she) + base verbale (get up) : When does she get up? (« À quelle heure se lève-t-elle ? »). Get up reste sans -s car does porte déjà la marque de la 3e personne.",
      hint: "Mot interrogatif d'abord, puis l'auxiliaire, puis le sujet.",
    },
    {
      id: "eps-12",
      level: 3,
      type: "qcm",
      question: "Ton correspondant écrit : « I play never rugby. » Quelle est la correction ?",
      choices: ["I never play rugby.", "Never I play rugby.", "I play rugby never.", "I don't play never rugby."],
      answer: 0,
      explanation:
        "L'adverbe de fréquence se place AVANT le verbe ordinaire : I never play rugby. En fin ou en début de phrase, c'est incorrect ici, et don't + never ferait une double négation.",
      hint: "never suit la même règle de place que always et often.",
    },
  ],
};
