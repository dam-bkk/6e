import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "lat5-premiere-grammaire",
  subject: "latin",
  grade: "5e",
  num: 5,
  title: "Premiers pas en grammaire latine",
  domain: "geometrie",
  domainLabel: "Latin",
  icon: "PenTool",
  teaser: "Rosa, rosam : le mot change de costume selon son rôle dans la phrase.",
  objectives: [
    "Je sais ce qu'est un cas : le nominatif pour le sujet, l'accusatif pour le COD",
    "Je connais rosa/rosam (1re déclinaison) et dominus/dominum (2e déclinaison) au singulier",
    "Je sais que le verbe latin se place souvent en fin de phrase",
    "Je sais traduire de petites phrases comme puella rosam amat",
    "Je sais qu'il n'y a pas d'articles en latin",
  ],
  lesson: [
    {
      title: "Une langue à cas : le mot change selon son rôle",
      paragraphs: [
        "En français, c'est la place du mot qui indique son rôle : « Le chat voit le chien » et « Le chien voit le chat » ne racontent pas la même histoire ! En latin, c'est différent : c'est la terminaison du mot qui indique son rôle dans la phrase. Ces différentes formes s'appellent les cas.",
        "Cette année, tu découvres les deux cas essentiels : le nominatif, le cas du sujet (celui qui fait l'action), et l'accusatif, le cas du COD (ce qui subit l'action).",
        "Conséquence géniale : en latin, on peut déplacer les mots sans changer le sens ! Puella rosam amat et rosam puella amat veulent dire exactement la même chose, car les terminaisons, elles, ne bougent pas.",
      ],
      example: [
        "puella rosam amat = la jeune fille aime la rose",
        "puella (nominatif) = sujet ; rosam (accusatif) = COD",
        "rosam puella amat = même sens ! Les terminaisons commandent, pas l'ordre des mots.",
      ],
      tip: "Nominatif = le cas du NOM du sujet (celui qu'on « nomme »). Accusatif = le cas de celui qu'on « accuse », qui subit l'action : le COD.",
    },
    {
      title: "La 1re déclinaison : rosa, la rose",
      paragraphs: [
        "L'ensemble des formes d'un nom s'appelle sa déclinaison, et décliner un nom, c'est donner toutes ses formes. Les noms latins se rangent en familles : les déclinaisons. La première déclinaison regroupe des noms presque tous féminins, qui se terminent en -a au nominatif.",
        "Au singulier, retiens deux formes : nominatif rosa (la rose, sujet), accusatif rosam (la rose, COD). La règle est limpide : accusatif = nominatif + m.",
        "Beaucoup de mots que tu connais déjà suivent ce modèle : puella (la jeune fille), aqua (l'eau), terra (la terre), lupa (la louve), dea (la déesse)…",
      ],
      example: [
        "rosa est pulchra. = La rose est belle. (rosa : sujet, nominatif)",
        "puella rosam habet. = La jeune fille a une rose. (rosam : COD, accusatif)",
        "lupa aquam amat. = La louve aime l'eau.",
      ],
      tip: "Le -m final, c'est la marque du COD au singulier : quand tu vois rosam, aquam, puellam… cherche le verbe, tu tiens le COD !",
    },
    {
      title: "La 2e déclinaison : dominus, le maître",
      paragraphs: [
        "La deuxième déclinaison regroupe surtout des noms masculins terminés en -us au nominatif. Le modèle : dominus, le maître de maison.",
        "Au singulier : nominatif dominus (sujet), accusatif dominum (COD). Même logique que pour rosa : la terminaison -um signale le COD.",
        "Suivent ce modèle : servus (l'esclave), amicus (l'ami), lupus (le loup), equus (le cheval), deus (le dieu)…",
      ],
      example: [
        "dominus servum vocat. = Le maître appelle l'esclave.",
        "servus dominum timet. = L'esclave craint le maître.",
        "Compare bien : dominus servum / servus dominum : les rôles s'échangent avec les terminaisons !",
      ],
      tip: "Deux familles, deux paires à savoir par coeur : rosa/rosam et dominus/dominum. Sujet en -a ou -us, COD en -am ou -um : le M final = COD.",
    },
    {
      title: "Le verbe à la fin, et pas d'articles !",
      paragraphs: [
        "Deuxième grande surprise du latin : le verbe se place le plus souvent à la FIN de la phrase. Puella rosam amat se lit mot à mot « la jeune fille - la rose - aime ». Pour traduire, commence par repérer le verbe tout au bout, puis remonte chercher le sujet.",
        "Troisième surprise : le latin n'a pas d'articles ! Ni « le », ni « la », ni « un », ni « une ». Rosa peut se traduire par « la rose » ou « une rose » : c'est le contexte qui décide. Quand tu traduis vers le français, c'est toi qui ajoutes l'article qui sonne le mieux.",
        "Ajoutons un verbe indispensable : sum, « je suis », le verbe être. Retiens surtout trois formes : sum (je suis), es (tu es), est (il ou elle est). Avec le verbe être, pas de COD : l'attribut du sujet reste au nominatif : puella pulchra est, « la jeune fille est belle ».",
      ],
      example: [
        "servus laborat. = L'esclave travaille. (verbe à la fin)",
        "romanus sum. = Je suis romain.",
        "dea pulchra est. = La déesse est belle. (pulchra reste au nominatif)",
      ],
      tip: "Méthode de traduction en trois temps : 1. trouve le verbe (souvent à la fin) ; 2. trouve le sujet (nominatif : -a, -us) ; 3. trouve le COD (accusatif : -am, -um). Ensuite seulement, traduis !",
    },
    {
      title: "À toi de traduire !",
      paragraphs: [
        "Tu as maintenant tout ce qu'il faut pour traduire tes premières vraies phrases latines. Applique la méthode : verbe d'abord, puis sujet, puis COD.",
        "Prenons dominus equum spectat. Le verbe : spectat, « il regarde » (pense à « spectateur » !). Le sujet au nominatif : dominus, le maître. Le COD à l'accusatif : equum, le cheval. Traduction : « Le maître regarde le cheval. »",
        "Petit vocabulaire pour tes exercices : amat (il/elle aime), habet (il/elle a), vocat (il/elle appelle), spectat (il/elle regarde), timet (il/elle craint), laborat (il/elle travaille). Et rappelle-toi : l'ordre des mots peut varier, seules les terminaisons font foi !",
      ],
      example: [
        "puella aquam spectat. = La jeune fille regarde l'eau.",
        "lupus puellam timet. = Le loup craint la jeune fille.",
        "rosam dea habet. = La déesse a une rose. (ordre inhabituel, même méthode !)",
      ],
      tip: "Beaucoup de verbes latins sont transparents grâce au français : amat → « aime » (amour), spectat → « regarde » (spectacle), vocat → « appelle » (vocal), laborat → « travaille » (labeur).",
    },
  ],
  exercises: [
    {
      id: "l5gra-1",
      level: 1,
      type: "qcm",
      question: "En latin, quel cas indique le sujet de la phrase ?",
      choices: ["l'accusatif", "le nominatif", "le vocatif", "le génitif"],
      answer: 1,
      explanation:
        "Le nominatif est le cas du sujet : c'est la forme sous laquelle on « nomme » le mot. L'accusatif, lui, est le cas du COD, celui qui subit l'action du verbe.",
      hint: "C'est le cas sous lequel on « nomme » le mot dans le dictionnaire.",
    },
    {
      id: "l5gra-2",
      level: 1,
      type: "qcm",
      question: "Dans la phrase puella rosam amat, quel mot est le COD ?",
      choices: ["puella", "rosam", "amat", "il n'y a pas de COD"],
      answer: 1,
      explanation:
        "Rosam se termine par -m : c'est la marque de l'accusatif, le cas du COD. Puella (en -a) est le sujet au nominatif, et amat est le verbe. Traduction : « La jeune fille aime la rose. »",
      hint: "Cherche la terminaison en -m.",
    },
    {
      id: "l5gra-3",
      level: 1,
      type: "truefalse",
      question: "Le latin possède des articles, comme « le » et « une » en français.",
      answer: false,
      explanation:
        "Faux ! Le latin n'a aucun article : rosa peut se traduire par « la rose » ou « une rose » selon le contexte. C'est toi qui choisis l'article en traduisant vers le français.",
    },
    {
      id: "l5gra-4",
      level: 1,
      type: "input",
      question: "Mets le nom rosa (la rose) à l'accusatif singulier.",
      answer: "rosam",
      explanation:
        "À la première déclinaison, l'accusatif singulier se forme en ajoutant -m au nominatif : rosa devient rosam. C'est la forme que prend le mot quand il est COD : puella rosam habet, « la jeune fille a une rose ».",
      hint: "Ajoute une seule lettre à la fin.",
    },
    {
      id: "l5gra-5",
      level: 2,
      type: "qcm",
      question: "Comment traduit-on servus dominum timet ?",
      choices: [
        "Le maître craint l'esclave.",
        "L'esclave craint le maître.",
        "L'esclave et le maître craignent.",
        "Le maître appelle l'esclave.",
      ],
      answer: 1,
      explanation:
        "Applique la méthode : le verbe timet (il craint) est à la fin ; servus, en -us, est le sujet au nominatif ; dominum, en -um, est le COD à l'accusatif. Donc : « L'esclave craint le maître. » Les terminaisons décident, pas l'ordre qui te paraîtrait logique !",
      hint: "Repère qui est en -us (sujet) et qui est en -um (COD).",
    },
    {
      id: "l5gra-6",
      level: 2,
      type: "qcm",
      question: "Les phrases puella rosam amat et rosam puella amat ont-elles le même sens ?",
      choices: [
        "Oui : les terminaisons indiquent les rôles, l'ordre des mots peut changer",
        "Non : dans la seconde, c'est la rose qui aime la jeune fille",
        "Non : la seconde phrase est incorrecte en latin",
        "Oui, mais seulement dans les poèmes",
      ],
      answer: 0,
      explanation:
        "Les deux phrases signifient « la jeune fille aime la rose ». En latin, ce sont les terminaisons qui indiquent les rôles : puella reste sujet (nominatif) et rosam reste COD (accusatif), quelle que soit leur place. C'est la grande différence avec le français, où l'ordre des mots est décisif.",
      hint: "En latin, qui commande : l'ordre des mots ou les terminaisons ?",
    },
    {
      id: "l5gra-7",
      level: 2,
      type: "input",
      question: "Mets le nom dominus (le maître) à l'accusatif singulier.",
      answer: "dominum",
      explanation:
        "À la deuxième déclinaison, le nominatif -us devient -um à l'accusatif : dominus donne dominum. Exemple : servus dominum vocat, « l'esclave appelle le maître ».",
      hint: "Le -us du sujet devient -um pour le COD.",
    },
    {
      id: "l5gra-8",
      level: 2,
      type: "input",
      question: "Traduis en français : servus laborat. (vocabulaire : laborat = il travaille)",
      answer: "l'esclave travaille",
      accept: ["l esclave travaille", "un esclave travaille"],
      explanation:
        "Servus (nominatif en -us) est le sujet : l'esclave. Laborat est le verbe : il travaille. Pas de COD ici. Traduction : « L'esclave travaille. » Le mot laborat se retrouve dans « labeur » et « laborieux ».",
      hint: "Servus a donné « serviteur » ; laborat a donné « labeur ».",
    },
    {
      id: "l5gra-9",
      level: 3,
      type: "qcm",
      question: "Dans la phrase dea pulchra est (la déesse est belle), pourquoi pulchra n'est-il PAS à l'accusatif ?",
      choices: [
        "parce qu'avec le verbe être, l'attribut du sujet reste au nominatif",
        "parce que pulchra est un verbe",
        "parce que les adjectifs n'existent pas en latin",
        "c'est une erreur : il faudrait écrire pulchram",
      ],
      answer: 0,
      explanation:
        "Avec le verbe être (est), il n'y a pas de COD : « belle » est un attribut du sujet, qui s'accorde avec lui et reste donc au nominatif. Dea pulchra est = « la déesse est belle ». On mettrait l'accusatif seulement avec un verbe d'action : deam spectat, « il regarde la déesse ».",
      hint: "Le verbe être n'a jamais de COD, en latin comme en français.",
    },
    {
      id: "l5gra-10",
      level: 3,
      type: "input",
      question: "Traduis en français : dominus equum spectat. (vocabulaire : equus = le cheval, spectat = il regarde)",
      answer: "le maitre regarde le cheval",
      accept: ["le maître regarde le cheval", "le maitre regarde un cheval", "le maître regarde un cheval"],
      explanation:
        "Méthode : le verbe spectat (il regarde) est à la fin ; dominus (nominatif en -us) est le sujet : le maître ; equum (accusatif en -um) est le COD : le cheval. Traduction : « Le maître regarde le cheval. »",
      hint: "Verbe à la fin, sujet en -us, COD en -um.",
    },
    {
      id: "l5gra-11",
      level: 3,
      type: "truefalse",
      question: "Dans la phrase rosam dea habet, c'est la rose qui possède la déesse.",
      answer: false,
      explanation:
        "Faux ! Même placé en tête de phrase, rosam garde sa terminaison d'accusatif : c'est le COD. Dea, au nominatif, est le sujet. La phrase signifie donc « la déesse a une rose ». Ne te fie jamais à l'ordre des mots en latin : lis les terminaisons !",
      hint: "Regarde les terminaisons, pas la place des mots.",
    },
    {
      id: "l5gra-12",
      level: 3,
      type: "input",
      question: "Traduis en latin : « La jeune fille appelle la louve. » (vocabulaire : puella = la jeune fille, lupa = la louve, vocat = elle appelle ; verbe à la fin !)",
      answer: "puella lupam vocat",
      accept: ["lupam puella vocat"],
      explanation:
        "Le sujet « la jeune fille » se met au nominatif : puella. Le COD « la louve » se met à l'accusatif : lupa + m = lupam. Le verbe vocat se place à la fin. Résultat : puella lupam vocat. Et souviens-toi : pas d'article à traduire, le latin n'en a pas !",
      hint: "Sujet en -a, COD en -am, verbe en dernier.",
    },
  ],
};
