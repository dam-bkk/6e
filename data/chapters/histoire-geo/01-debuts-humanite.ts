import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg-debuts-humanite",
  subject: "histoire-geo",
  num: 1,
  title: "Les débuts de l'humanité",
  domain: "nombres",
  domainLabel: "Histoire",
  icon: "Footprints",
  teaser: "De Lucy aux grottes peintes : la très longue histoire des premiers humains.",
  objectives: [
    "Je sais que les premiers humains sont apparus en Afrique il y a plusieurs millions d'années",
    "Je connais les grandes étapes : australopithèques, Homo habilis, Homo erectus, Homo sapiens",
    "Je sais décrire la vie nomade des chasseurs-cueilleurs du Paléolithique",
    "Je peux citer des exemples d'art préhistorique comme Lascaux et Chauvet",
    "Je comprends comment l'archéologue reconstitue un passé sans écriture",
  ],
  lesson: [
    {
      title: "L'Afrique, berceau de l'humanité",
      paragraphs: [
        "L'histoire des humains commence en Afrique, il y a plusieurs millions d'années. Les plus anciens de nos lointains cousins connus sont les australopithèques : ils marchent debout sur leurs deux jambes, mais leur cerveau reste petit et ils grimpent encore beaucoup aux arbres.",
        "Ensuite apparaissent les premiers représentants du genre humain, appelés « Homo » (« homme » en latin) : Homo habilis, « l'homme habile », fabrique les premiers outils en pierre taillée il y a environ 2,5 millions d'années. Puis Homo erectus, « l'homme dressé », plus grand et plus robuste, invente des outils plus perfectionnés comme le biface.",
        "Notre espèce, Homo sapiens (« l'homme qui sait »), apparaît en Afrique il y a environ 300 000 ans. C'est la seule espèce humaine qui existe encore aujourd'hui : tous les habitants de la Terre en font partie.",
      ],
      example: [
        "En 1974, en Éthiopie, des chercheurs découvrent le squelette d'une jeune australopithèque vieille d'environ 3,2 millions d'années.",
        "Ils l'appellent Lucy, car ils écoutaient ce jour-là une chanson des Beatles, « Lucy in the Sky with Diamonds ».",
        "Lucy est devenue le fossile le plus célèbre du monde.",
      ],
      tip: "Retiens la chaîne dans l'ordre : Australopithèque, puis HABILIS (habile, premiers outils), ERECTUS (dressé, marche loin), SAPIENS (qui sait, c'est nous).",
    },
    {
      title: "Le peuplement de la Terre : les grandes migrations",
      paragraphs: [
        "Les premiers humains ne sont pas restés en Afrique. Homo erectus est le premier à en sortir, il y a environ 2 millions d'années : il atteint le Proche-Orient, l'Asie puis l'Europe, en marchant sur des dizaines de milliers d'années, génération après génération.",
        "Bien plus tard, Homo sapiens quitte à son tour l'Afrique, il y a environ 100 000 ans. Petit à petit, il peuple tous les continents : l'Asie, l'Europe, l'Australie, et enfin l'Amérique.",
        "Ces déplacements très lents s'appellent des migrations. Personne ne « décidait » de traverser le monde : les groupes se déplaçaient simplement de quelques kilomètres à chaque génération, en suivant le gibier et les ressources.",
      ],
      example: [
        "Pour atteindre l'Amérique, des groupes d'Homo sapiens ont traversé à pied la Béringie, une bande de terre qui reliait alors la Sibérie à l'Alaska.",
        "Aujourd'hui, cette zone est recouverte par la mer : c'est le détroit de Béring.",
      ],
      tip: "Deux grandes sorties d'Afrique à retenir : Homo erectus il y a environ 2 millions d'années, Homo sapiens il y a environ 100 000 ans.",
    },
    {
      title: "La vie au Paléolithique : des nomades chasseurs-cueilleurs",
      paragraphs: [
        "Le Paléolithique, ou « âge de la pierre ancienne », est la plus longue période de l'histoire humaine : elle commence avec les premiers outils, il y a environ 3 millions d'années. Les humains y vivent en petits groupes et sont nomades : ils se déplacent sans cesse pour suivre les troupeaux et trouver de la nourriture.",
        "Ils ne produisent pas leur nourriture : ils la prélèvent dans la nature. On dit qu'ils sont chasseurs-cueilleurs : ils chassent le gibier (rennes, chevaux, bisons...), pêchent et ramassent fruits, graines et racines.",
        "La maîtrise du feu, acquise il y a environ 400 000 ans, change leur vie : le feu réchauffe, éclaire, éloigne les animaux sauvages et permet de cuire les aliments. Le soir, autour du foyer, les groupes se rassemblent : c'est aussi un lieu de vie sociale.",
      ],
      example: [
        "Un campement paléolithique typique : des tentes en peaux de bêtes tendues sur des branches ou des os de mammouth, un foyer central, des outils en silex taillé.",
        "Quand le gibier se fait rare, on démonte tout et on repart : voilà la vie nomade.",
      ],
      tip: "PALÉOlithique = pierre ANCIENNE (taillée) + vie NOMADE + chasse-cueillette. Trois mots qui vont toujours ensemble.",
    },
    {
      title: "Les premiers artistes : Chauvet et Lascaux",
      paragraphs: [
        "Homo sapiens n'est pas seulement un chasseur : c'est aussi un artiste. Au fond de certaines grottes, il peint et grave des animaux avec un talent extraordinaire : chevaux, bisons, lions, rhinocéros, mammouths...",
        "En France, deux grottes sont mondialement célèbres. La grotte Chauvet, en Ardèche, contient des peintures vieilles d'environ 36 000 ans, parmi les plus anciennes connues. La grotte de Lascaux, en Dordogne, a été décorée il y a environ 18 000 ans : on la surnomme la « chapelle Sixtine de la Préhistoire ».",
        "Pourquoi peignaient-ils ? On ne le sait pas avec certitude : rites de chasse, cérémonies, croyances... Ces œuvres montrent en tout cas que les humains du Paléolithique avaient déjà une vie spirituelle et le sens de la beauté.",
      ],
      example: [
        "Lascaux a été découverte par hasard en 1940 par quatre adolescents partis chercher leur chien tombé dans un trou.",
        "La vraie grotte est aujourd'hui fermée au public pour protéger les peintures : on visite une copie fidèle, Lascaux IV.",
      ],
      tip: "Pour ne pas confondre : CHauvet est la plus anCienne (environ 36 000 ans), Lascaux est plus récente (environ 18 000 ans).",
    },
    {
      title: "L'archéologue, détective du passé",
      paragraphs: [
        "La Préhistoire est la période d'avant l'écriture : aucun texte ne la raconte. Pour la connaître, on dépend entièrement des traces matérielles laissées par les humains : ossements, outils, foyers, peintures. C'est le travail de l'archéologue.",
        "Sur un chantier de fouilles, l'archéologue creuse avec une grande précaution, couche par couche, au pinceau et à la truelle. Chaque objet est photographié, mesuré et localisé avant d'être déplacé : un objet sorti de son contexte perd une grande partie de son intérêt.",
        "Au laboratoire, des spécialistes datent les vestiges, par exemple grâce au carbone 14, et les étudient : un simple silex taillé ou une dent peuvent révéler ce que mangeaient les humains, comment ils vivaient et depuis quand.",
      ],
      example: [
        "Règle d'or de la fouille : plus une couche de terre est profonde, plus elle est ancienne.",
        "En fouillant de haut en bas, l'archéologue remonte donc le temps, comme s'il feuilletait un livre à l'envers.",
      ],
      tip: "Préhistoire = avant l'écriture, donc pas de textes : seules les traces matérielles parlent. C'est pour cela que l'archéologie est la clé de cette période.",
    },
  ],
  exercises: [
    {
      id: "hhum-1",
      level: 1,
      type: "qcm",
      question: "Sur quel continent les premiers humains sont-ils apparus ?",
      choices: ["En Europe", "En Afrique", "En Asie", "En Amérique"],
      answer: 1,
      explanation:
        "Tous les plus anciens fossiles d'australopithèques et des premiers Homo ont été découverts en Afrique (Éthiopie, Kenya, Tchad, Afrique du Sud...). C'est pourquoi on surnomme l'Afrique le « berceau de l'humanité ».",
      hint: "C'est le continent où Lucy a été découverte.",
    },
    {
      id: "hhum-2",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle le célèbre squelette d'australopithèque découvert en Éthiopie en 1974 ?",
      choices: ["Toumaï", "Lucy", "Néandertal", "Ardi"],
      answer: 1,
      explanation:
        "Lucy est une jeune australopithèque vieille d'environ 3,2 millions d'années, découverte en Éthiopie en 1974. Son nom vient d'une chanson des Beatles que les chercheurs écoutaient ce jour-là.",
      hint: "Son nom vient d'une chanson des Beatles.",
    },
    {
      id: "hhum-3",
      level: 1,
      type: "truefalse",
      question: "Au Paléolithique, les humains étaient nomades : ils se déplaçaient pour trouver leur nourriture.",
      answer: true,
      explanation:
        "Vrai. Les humains du Paléolithique ne cultivaient rien et n'élevaient pas d'animaux : ils chassaient, pêchaient et cueillaient. Quand les ressources manquaient, ils déplaçaient leur campement. C'est la définition même du nomadisme.",
    },
    {
      id: "hhum-4",
      level: 1,
      type: "input",
      question: "Comment appelle-t-on le scientifique qui fouille le sol pour retrouver les traces du passé ? (un mot)",
      answer: "archeologue",
      accept: ["archéologue", "un archéologue", "l'archéologue", "un archeologue"],
      explanation:
        "L'archéologue fouille le sol couche par couche pour retrouver ossements, outils et objets anciens. Pour la Préhistoire, période sans écriture, son travail est notre seule source d'information.",
      hint: "Son métier commence par « archéo- », qui veut dire « ancien » en grec.",
    },
    {
      id: "hhum-5",
      level: 2,
      type: "qcm",
      question: "Quelle espèce humaine est la première à avoir fabriqué des outils en pierre taillée ?",
      choices: ["Homo sapiens", "Homo erectus", "Homo habilis", "Les australopithèques"],
      answer: 2,
      explanation:
        "Homo habilis, « l'homme habile », fabrique les premiers outils en pierre taillée il y a environ 2,5 millions d'années. Son nom rappelle justement cette habileté. Homo erectus perfectionnera ensuite les outils (biface), et Homo sapiens viendra bien plus tard.",
      hint: "Son nom latin veut dire « l'homme habile ».",
    },
    {
      id: "hhum-6",
      level: 2,
      type: "qcm",
      question: "Dans quel ordre ces espèces sont-elles apparues ?",
      choices: [
        "Homo sapiens, Homo erectus, Homo habilis",
        "Homo habilis, Homo erectus, Homo sapiens",
        "Homo erectus, Homo sapiens, Homo habilis",
        "Homo habilis, Homo sapiens, Homo erectus",
      ],
      answer: 1,
      explanation:
        "L'ordre chronologique est : Homo habilis (environ 2,5 millions d'années, premiers outils), puis Homo erectus (environ 2 millions d'années, sort d'Afrique, maîtrisera le feu), et enfin Homo sapiens (environ 300 000 ans, notre espèce).",
      hint: "Habile d'abord, dressé ensuite, savant enfin.",
    },
    {
      id: "hhum-7",
      level: 2,
      type: "input",
      question:
        "Depuis combien de milliers d'années environ les humains maîtrisent-ils le feu ? (réponse : le nombre seul, en milliers d'années)",
      answer: "400",
      accept: ["400000", "400 000", "environ 400"],
      explanation:
        "La maîtrise du feu date d'environ 400 000 ans, à l'époque d'Homo erectus. Le feu réchauffe, éclaire, protège des animaux et permet de cuire les aliments : c'est une révolution dans la vie quotidienne.",
      hint: "C'est Homo erectus qui y est parvenu, bien avant l'apparition d'Homo sapiens.",
    },
    {
      id: "hhum-8",
      level: 2,
      type: "truefalse",
      question: "Les peintures de la grotte Chauvet sont plus récentes que celles de Lascaux.",
      answer: false,
      explanation:
        "Faux, c'est l'inverse ! Chauvet (Ardèche) a été peinte il y a environ 36 000 ans : ses œuvres comptent parmi les plus anciennes du monde. Lascaux (Dordogne) est plus récente : environ 18 000 ans. Astuce : CHauvet, la plus anCienne.",
      hint: "Souviens-toi : CHauvet, la plus anCienne.",
    },
    {
      id: "hhum-9",
      level: 3,
      type: "qcm",
      question: "Pourquoi la Préhistoire ne peut-elle être connue que grâce à l'archéologie ?",
      choices: [
        "Parce que c'est trop ancien pour intéresser les historiens",
        "Parce qu'aucun texte n'existe : l'écriture n'était pas encore inventée",
        "Parce que tous les livres de cette époque ont brûlé",
        "Parce que les humains ne savaient pas parler",
      ],
      answer: 1,
      explanation:
        "La Préhistoire est, par définition, la période d'avant l'invention de l'écriture. Aucun texte ne la raconte : il n'y a jamais eu de livres à cette époque. Seules les traces matérielles (ossements, outils, peintures, foyers) permettent de la reconstituer, et c'est le travail de l'archéologue. Les humains parlaient sans doute, mais la parole ne laisse pas de trace.",
    },
    {
      id: "hhum-10",
      level: 3,
      type: "input",
      question:
        "En quelle année la grotte de Lascaux a-t-elle été découverte par quatre adolescents ? (réponse : l'année seule)",
      answer: "1940",
      accept: ["en 1940"],
      explanation:
        "En 1940, en Dordogne, quatre adolescents partis chercher leur chien découvrent par hasard l'entrée de la grotte de Lascaux. Ses peintures, vieilles d'environ 18 000 ans, sont si belles qu'on la surnomme la « chapelle Sixtine de la Préhistoire ».",
      hint: "C'était pendant la Seconde Guerre mondiale.",
    },
    {
      id: "hhum-11",
      level: 3,
      type: "truefalse",
      question:
        "Sur un chantier de fouilles, les objets trouvés dans les couches les plus profondes sont en général les plus anciens.",
      answer: true,
      explanation:
        "Vrai. Les couches de terre s'accumulent au fil du temps : les plus récentes recouvrent les plus anciennes. En creusant de haut en bas, l'archéologue remonte donc le temps. C'est pour cela qu'il note précisément la couche où chaque objet est découvert.",
      hint: "Imagine une pile de journaux : lequel est en dessous, le plus vieux ou le plus récent ?",
    },
    {
      id: "hhum-12",
      level: 3,
      type: "qcm",
      question:
        "Il y a environ 100 000 ans, une espèce humaine quitte l'Afrique et finit par peupler tous les continents. Laquelle ?",
      choices: ["Homo habilis", "Les australopithèques", "Homo sapiens", "Homo erectus"],
      answer: 2,
      explanation:
        "C'est Homo sapiens, notre espèce, qui sort d'Afrique il y a environ 100 000 ans et peuple peu à peu toute la Terre : Asie, Europe, Australie, puis Amérique (en passant à pied par la Béringie). Homo erectus était sorti d'Afrique bien avant (environ 2 millions d'années), mais n'a pas atteint tous les continents ; habilis et les australopithèques ne sont jamais sortis d'Afrique.",
      hint: "C'est la seule espèce humaine encore vivante aujourd'hui.",
    },
  ],
};
