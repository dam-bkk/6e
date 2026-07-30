import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-futur-passe-compose",
  subject: "francais",
  num: 5,
  title: "Futur et passé composé",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "FastForward",
  teaser: "Demain au futur simple, hier au passé composé : deux temps essentiels à apprivoiser.",
  objectives: [
    "Je connais les terminaisons du futur simple : -rai, -ras, -ra, -rons, -rez, -ront",
    "Je sais former le futur des verbes en -re et des verbes irréguliers fréquents",
    "Je sais former le passé composé : auxiliaire être ou avoir au présent + participe passé",
    "Je connais les participes passés en -é, -i, -u et les pièges en -is et -it",
  ],
  lesson: [
    {
      title: "Le futur simple : la formation",
      paragraphs: [
        "Le futur simple exprime une action à venir : « Demain, nous partirons. » Ses terminaisons sont les mêmes pour tous les verbes : -rai, -ras, -ra, -rons, -rez, -ront. On entend toujours le son [r] !",
        "Pour la plupart des verbes, on ajoute ces terminaisons à l'infinitif : chanter → je chanterai ; finir → tu finiras.",
      ],
      example: [
        "chanter → je chanterai, tu chanteras, il chantera, nous chanterons, vous chanterez, ils chanteront.",
        "finir → elle finira, elles finiront.",
      ],
      tip: "Le futur, c'est l'infinitif + les terminaisons d'avoir (ai, as, a, ons, ez, ont) : je chanter-ai, tu chanter-as…",
    },
    {
      title: "Les pièges du futur",
      paragraphs: [
        "Verbes en -re : l'infinitif perd son e final avant la terminaison : prendre → je prendrai (et non « je prenderai ») ; dire → tu diras ; écrire → il écrira.",
        "Certains verbes très fréquents changent complètement de radical : être → je serai ; avoir → j'aurai ; aller → j'irai ; faire → je ferai ; venir → je viendrai ; voir → je verrai ; pouvoir → je pourrai ; vouloir → je voudrai.",
        "Les verbes comme appeler et jeter doublent leur consonne à toutes les personnes du futur : j'appellerai, je jetterai.",
      ],
      example: [
        "prendre → nous prendrons • voir → tu verras (pas « tu voiras » !)",
        "aller → ils iront • faire → vous ferez.",
      ],
      tip: "Pour les verbes en -re, coupe le e de l'infinitif avant d'ajouter la terminaison : prendr(e) + ai → je prendrai.",
    },
    {
      title: "Le passé composé : auxiliaire + participe passé",
      paragraphs: [
        "Le passé composé raconte une action passée et terminée. Comme son nom l'indique, il est composé de deux mots : un auxiliaire (être ou avoir) conjugué au présent + le participe passé du verbe.",
        "« J'ai mangé » = auxiliaire avoir (ai) + participe passé (mangé). « Elle est partie » = auxiliaire être (est) + participe passé (partie).",
      ],
      example: [
        "« Nous avons visité le musée. » → avons (avoir au présent) + visité (participe passé).",
        "« Ils sont arrivés en retard. » → sont (être au présent) + arrivés.",
      ],
      tip: "Au passé composé, le verbe est TOUJOURS en deux mots. Si tu n'en vois qu'un, ce n'est pas un passé composé !",
      figure: "fr-passe-compose",
    },
    {
      title: "Être ou avoir ? Le choix de l'auxiliaire",
      paragraphs: [
        "La grande majorité des verbes se conjuguent avec avoir : j'ai fini, tu as pris, il a vu, nous avons dit.",
        "Se conjuguent avec être : les verbes de mouvement ou de changement d'état comme aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, naître, mourir… ainsi que tous les verbes pronominaux (se laver → je me suis lavé).",
      ],
      example: [
        "« Elle est tombée dans l'escalier. » → tomber se conjugue avec être.",
        "« Elle a raté une marche. » → rater se conjugue avec avoir.",
      ],
      tip: "Beaucoup de verbes en être vont par paires contraires : arriver/partir, entrer/sortir, monter/descendre, naître/mourir. Les mémoriser en couple aide beaucoup !",
    },
    {
      title: "Les participes passés et leurs pièges",
      paragraphs: [
        "1er groupe : participe passé en -é (chanter → chanté). 2e groupe : en -i (finir → fini). 3e groupe : souvent en -u (voir → vu, courir → couru, vouloir → voulu).",
        "Mais le 3e groupe cache des pièges : certains participes se terminent par -is (prendre → pris, mettre → mis) et d'autres par -it (dire → dit, écrire → écrit, faire → fait).",
        "Pour trouver la lettre finale muette, mets le participe au féminin : prise → pris ; dite → dit ; faite → fait.",
      ],
      example: [
        "prendre → il a pris (pas « prit » ni « prendu » !)",
        "dire → elle a dit • mettre → nous avons mis • faire → ils ont fait.",
      ],
      tip: "Le test du féminin est infaillible : on dit « une décision prise » → donc « pris » avec un s ; « une chose dite » → donc « dit » avec un t.",
    },
  ],
  exercises: [
    {
      id: "ffut-1",
      level: 1,
      type: "qcm",
      question: "Complète au futur simple : « Demain, nous (chanter) au spectacle. »",
      choices: ["chantons", "chanterons", "chantions", "chanteront"],
      answer: 1,
      explanation:
        "Futur simple = infinitif + terminaison. Avec nous : chanter + ons → nous chanterons. Ne confonds pas avec le présent « nous chantons » ni avec « ils chanteront » (3e personne du pluriel). Au futur, on entend toujours le son [r].",
      hint: "Au futur, on entend toujours le son [r] avant la terminaison.",
    },
    {
      id: "ffut-2",
      level: 1,
      type: "input",
      question: "Conjugue au futur simple : « Je (finir) mes devoirs ce soir. » (écris seulement le verbe)",
      answer: "finirai",
      accept: ["je finirai"],
      explanation:
        "Futur simple = infinitif + terminaison : finir + ai → je finirai. La terminaison de la 1re personne du singulier est -ai (comme « j'ai »).",
      hint: "Infinitif + la terminaison -ai.",
    },
    {
      id: "ffut-3",
      level: 1,
      type: "qcm",
      question: "Complète au passé composé : « Hier, j'ai (manger) une glace. »",
      choices: ["mangé", "manger", "mangeais", "mange"],
      answer: 0,
      explanation:
        "Passé composé = auxiliaire + participe passé. Après « j'ai », il faut le participe passé : mangé, avec -é. Piège classique : ne mets jamais l'infinitif « manger » après un auxiliaire. Astuce : remplace par un verbe du 3e groupe → on dit « j'ai pris » (participe), pas « j'ai prendre ».",
      hint: "Remplace par le verbe « prendre » : dirais-tu « j'ai prendre » ou « j'ai pris » ?",
    },
    {
      id: "ffut-4",
      level: 1,
      type: "truefalse",
      question: "Le passé composé se forme avec l'auxiliaire être ou avoir au présent, suivi du participe passé.",
      answer: true,
      explanation:
        "Vrai ! C'est exactement sa définition : « j'ai fini » = avoir au présent + participe passé ; « elle est partie » = être au présent + participe passé. D'où son nom : un temps « composé » de deux mots.",
    },
    {
      id: "ffut-5",
      level: 2,
      type: "qcm",
      question: "Complète au futur simple : « Je (prendre) le bus demain. »",
      choices: ["prenderai", "prendrai", "prendrais", "prends"],
      answer: 1,
      explanation:
        "Pour les verbes en -re, l'infinitif perd son e final avant la terminaison : prendr(e) + ai → je prendrai. « Prenderai » est le piège classique. Quant à « prendrais » (avec un s), c'est du conditionnel, pas du futur.",
      hint: "L'infinitif « prendre » perd une lettre avant la terminaison.",
    },
    {
      id: "ffut-6",
      level: 2,
      type: "qcm",
      question: "Quel auxiliaire faut-il pour conjuguer « tomber » au passé composé ?",
      choices: ["avoir : elle a tombé", "être : elle est tombée", "les deux sont corrects", "aucun auxiliaire"],
      answer: 1,
      explanation:
        "« Tomber » fait partie des verbes de mouvement qui se conjuguent avec être : elle est tombée. Retiens la liste : aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, naître, mourir. La grande majorité des autres verbes prennent avoir.",
      hint: "« Tomber » fait partie de la famille arriver/partir, entrer/sortir…",
    },
    {
      id: "ffut-7",
      level: 2,
      type: "input",
      question: "Quel est le participe passé du verbe « dire » ? (« Il a ... la vérité. »)",
      answer: "dit",
      accept: ["il a dit"],
      explanation:
        "Le participe passé de dire est « dit », avec un t final muet. Preuve par le féminin : « une chose dite ». Même famille : écrire → écrit, faire → fait. Ne confonds pas avec « il dit » au présent : au passé composé, il y a toujours l'auxiliaire devant.",
      hint: "Mets-le au féminin pour entendre la lettre finale : une chose…",
    },
    {
      id: "ffut-8",
      level: 2,
      type: "truefalse",
      question: "« Vous ferez » est le futur simple du verbe faire.",
      answer: true,
      explanation:
        "Vrai ! « Faire » change de radical au futur : je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront. Piège évité : « vous fairez » n'existe pas. D'autres verbes changent aussi de radical : être → serai, avoir → aurai, aller → irai, voir → verrai.",
    },
    {
      id: "ffut-9",
      level: 3,
      type: "qcm",
      question: "Complète au passé composé : « Elle a (prendre) son parapluie. »",
      choices: ["prit", "pris", "prendu", "prend"],
      answer: 1,
      explanation:
        "Le participe passé de prendre est « pris », avec un s : elle a pris. Deux pièges à éviter : « prendu » n'existe pas, et « prit » est le passé simple (« elle prit »), pas le participe passé. Le test du féminin tranche : « une photo prise » → donc pris.",
      hint: "Le test du féminin : on dit « une décision prise ».",
    },
    {
      id: "ffut-10",
      level: 3,
      type: "input",
      question: "Complète au passé composé avec le participe passé de « mettre » : « Il a ... son manteau. » (écris seulement le participe)",
      answer: "mis",
      accept: ["il a mis"],
      explanation:
        "Le participe passé de mettre est « mis », avec un s final muet : preuve par le féminin, « la table est mise ». Même famille que prendre → pris. « Mettu » et « metté » n'existent pas !",
      hint: "Même famille que « prendre → pris ».",
    },
    {
      id: "ffut-11",
      level: 3,
      type: "qcm",
      question: "Complète au futur simple : « Je (jeter) ces vieux papiers. »",
      choices: ["jeterai", "jetterai", "jettrai", "jèterai"],
      answer: 1,
      explanation:
        "« Jeter » double son t à toutes les personnes du futur : je jetterai, tu jetteras, ils jetteront. C'est le même mécanisme que « appeler » → j'appellerai. Le doublement de la consonne permet de prononcer le è ouvert : « je jè-te-rai ».",
      hint: "Une consonne se double, comme dans « j'appellerai ».",
    },
    {
      id: "ffut-12",
      level: 3,
      type: "truefalse",
      question: "« Je verrai » est le futur simple du verbe voir.",
      answer: true,
      explanation:
        "Vrai ! « Voir » change de radical au futur : je verrai, tu verras, il verra, avec deux r. Le piège serait d'écrire « je voirai », qui n'existe pas. Attention aussi à ne pas confondre avec « je verrais » (conditionnel, avec un s final).",
      hint: "Le radical du futur de « voir » ne contient pas le mot « voir »…",
    },
  ],
  videos: [
    { title: "Le futur simple ( CE1 - CE2 - CM1 - CM2 )", youtubeId: "tckyVyMtBsM", channel: "Epopia" },
    { title: "Les temps composés de l'indicatif - Français - Collège - Les Bons Profs", youtubeId: "XGfin5iJMzA", channel: "Les Bons Profs" },
  ],
};
