import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-accords-difficiles",
  subject: "francais",
  grade: "4e",
  num: 5,
  title: "Les accords difficiles",
  domain: "grandeurs",
  domainLabel: "Orthographe",
  icon: "Link2",
  teaser: "Participe passé avec avoir, tout, demi, cent : maîtriser les accords qui piègent même les adultes.",
  objectives: [
    "Je sais accorder le participe passé employé avec avoir quand le COD est placé avant le verbe",
    "Je sais que « fait » et « laissé » restent invariables devant un infinitif",
    "Je sais accorder ou non tout, même et quelque selon leur nature",
    "Je sais écrire demi et nu avant ou après le nom",
    "Je sais quand cent et vingt prennent un s, et que mille est toujours invariable",
  ],
  lesson: [
    {
      title: "Participe passé avec avoir : la règle du COD antéposé",
      paragraphs: [
        "Avec l'auxiliaire avoir, le participe passé ne s'accorde jamais avec le sujet. C'est le premier réflexe à installer : « Elles ont mangé », sans accord.",
        "Mais il s'accorde avec le COD si celui-ci est placé avant le verbe : on dit que le COD est antéposé.",
        "La méthode en trois temps : 1) trouve le COD en posant la question « quoi ? » après le verbe ; 2) regarde s'il est placé avant ou après le participe ; 3) s'il est avant, accorde le participe en genre et en nombre avec lui.",
        "Le COD antéposé prend trois formes : un pronom relatif « que » (« les fleurs que j'ai cueillies »), un pronom personnel (« ces fleurs, je les ai cueillies ») ou un mot interrogatif (« Quelles fleurs as-tu cueillies ? »).",
      ],
      example: [
        "« J'ai rangé mes affaires. » → COD « mes affaires » après le verbe → pas d'accord.",
        "« Les affaires que j'ai rangées. » → COD « que » (= les affaires) avant le verbe → accord au féminin pluriel.",
      ],
      tip: "Demande-toi toujours : « il/elle a … quoi ? ». Si la réponse est déjà écrite avant le verbe, accorde ; sinon, n'accorde pas.",
    },
    {
      title: "Participe passé suivi d'un infinitif",
      paragraphs: [
        "Quand le participe passé est suivi d'un infinitif (entendre chanter, voir tomber…), on regarde qui fait l'action de l'infinitif.",
        "Si le COD placé avant fait l'action de l'infinitif, on accorde : « les chanteuses que j'ai entendues chanter » (ce sont les chanteuses qui chantent).",
        "Si le COD placé avant subit l'action, on n'accorde pas : « la chanson que j'ai entendu chanter » (la chanson ne chante pas, elle est chantée).",
        "Deux participes échappent à toute hésitation : « fait » est toujours invariable devant un infinitif (« elle les a fait réparer »), et selon la règle actuelle « laissé » l'est aussi (« elle les a laissé partir »).",
      ],
      example: [
        "« Les acrobates que j'ai vus sauter. » → les acrobates sautent → accord.",
        "« Elle s'est fait couper les cheveux. » → « fait » devant l'infinitif « couper » → invariable.",
      ],
      tip: "Retiens le duo tranquille : fait + infinitif et laissé + infinitif ne s'accordent jamais. Pour les autres, demande-toi : « le COD fait-il l'action de l'infinitif ? »",
    },
    {
      title: "Tout, même, quelque",
      paragraphs: [
        "« Tout » est déterminant ou pronom quand il accompagne ou remplace un nom : il s'accorde (« tous les jours », « toutes sont venues »). Il est adverbe quand il signifie « tout à fait » devant un adjectif : il reste alors invariable (« ils sont tout étonnés »).",
        "Exception d'euphonie : l'adverbe « tout » s'accorde quand même devant un adjectif féminin commençant par une consonne ou un h aspiré : « elles sont toutes contentes », « toute honteuse ».",
        "« Même » s'accorde quand il est adjectif (« les mêmes erreurs », « eux-mêmes ») ; il est invariable quand il est adverbe et signifie « aussi, y compris » (« même les adultes se trompent »).",
        "« Quelque » s'accorde quand il est déterminant (« quelques amis » = plusieurs) ; il est invariable quand il est adverbe et signifie « environ » devant un nombre (« quelque cent personnes »).",
      ],
      example: [
        "« Ils sont tout tristes » → adverbe (= tout à fait), invariable devant « tristes » masculin.",
        "« Elles sont toutes tristes » → devant un adjectif féminin à consonne, accord par euphonie.",
        "« Il a quelque vingt ans » → environ vingt ans : « quelque » invariable.",
      ],
      tip: "Pour « même » et « quelque », remplace : si « aussi » ou « environ » fonctionne, le mot est adverbe → invariable.",
    },
    {
      title: "Demi et nu",
      paragraphs: [
        "Placés avant le nom, « demi » et « nu » sont invariables et se rattachent au nom par un trait d'union : « une demi-heure », « des demi-journées », « nu-pieds », « nu-tête ».",
        "Placés après le nom, ils s'accordent : « nu » s'accorde en genre et en nombre (« les pieds nus », « la tête nue »), mais « demi » ne s'accorde qu'en genre, jamais en nombre (« deux heures et demie », « trois jours et demi »).",
      ],
      example: [
        "« Une demi-heure » → avant le nom : invariable + trait d'union.",
        "« Deux heures et demie » → après le nom : accord en genre (féminin) seulement, pas de pluriel.",
      ],
      tip: "« Demi » après le nom : le genre oui, le nombre jamais. On n'écrira donc jamais « demies » après un nom.",
    },
    {
      title: "Cent, vingt, mille",
      paragraphs: [
        "« Vingt » et « cent » prennent un s quand ils sont multipliés et qu'aucun autre nombre ne les suit : « quatre-vingts », « trois cents ».",
        "Dès qu'un autre nombre les suit, le s disparaît : « quatre-vingt-deux », « trois cent dix ».",
        "« Mille » est toujours invariable : « dix mille euros ». Attention à ne pas le confondre avec « millier », « million » et « milliard », qui sont des noms et s'accordent normalement : « des milliers de spectateurs », « deux millions ».",
      ],
      example: [
        "« Quatre-vingts élèves » → 4 × 20, rien ne suit → s.",
        "« Quatre-vingt-trois élèves » → un nombre suit → pas de s.",
        "« Cinq mille habitants » → « mille » invariable.",
      ],
      tip: "Pose-toi deux questions : est-il multiplié ? est-il suivi d'un autre nombre ? Deux oui → pas de s ; multiplié et rien derrière → s. « Mille », lui, ne bouge jamais.",
    },
  ],
  exercises: [
    {
      id: "f4acc-1",
      level: 1,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Les pommes que nous avons ... au marché. »",
      choices: ["acheté", "achetés", "achetées"],
      answer: 2,
      explanation:
        "Le COD « que » (= les pommes, féminin pluriel) est placé avant le verbe : le participe s'accorde donc avec lui → « achetées ». Le piège : croire qu'avec avoir on n'accorde jamais ; c'est vrai seulement quand le COD est après le verbe.",
      hint: "Nous avons acheté quoi ? La réponse est-elle placée avant ou après le verbe ?",
    },
    {
      id: "f4acc-2",
      level: 1,
      type: "truefalse",
      question: "Avec l'auxiliaire avoir, le participe passé s'accorde toujours avec le sujet.",
      answer: false,
      explanation:
        "Faux ! Avec avoir, le participe ne s'accorde jamais avec le sujet : « elles ont mangé ». Il s'accorde uniquement avec le COD, et seulement si celui-ci est placé avant le verbe. Le piège : c'est avec l'auxiliaire être que l'accord se fait avec le sujet.",
      hint: "Compare « elles sont parties » et « elles ont mangé » : où se fait l'accord ?",
    },
    {
      id: "f4acc-3",
      level: 1,
      type: "input",
      question: "Complète avec le participe passé du verbe « écrire » : « Voici la lettre qu'elle a ... hier. »",
      answer: "écrite",
      accept: ["ecrite"],
      explanation:
        "Le COD « qu' » reprend « la lettre » (féminin singulier) et se trouve avant le verbe : accord → « écrite ». Le piège : dans « elle a écrit une lettre », le même COD est après le verbe et l'accord disparaît.",
      hint: "Elle a écrit quoi ? « La lettre », déjà nommée avant le verbe : accorde au féminin.",
    },
    {
      id: "f4acc-4",
      level: 1,
      type: "qcm",
      question: "Comment s'écrit « demi » dans « une ...-heure » ?",
      choices: ["demie", "demi", "demis"],
      answer: 1,
      explanation:
        "Placé avant le nom et relié par un trait d'union, « demi » est invariable : « une demi-heure ». Le piège : le nom « heure » est féminin, mais cela ne change rien tant que « demi » est devant ; l'accord en genre n'apparaît qu'après le nom (« une heure et demie »).",
      hint: "« Demi » est-il placé avant ou après le nom ?",
    },
    {
      id: "f4acc-5",
      level: 2,
      type: "input",
      question: "Complète avec le participe passé du verbe « perdre » : « Elles ont ... leurs clés dans le parc. »",
      answer: "perdu",
      explanation:
        "Le COD « leurs clés » est placé après le verbe : pas d'accord → « perdu ». Le piège : le sujet « elles » est féminin pluriel, mais avec avoir le sujet ne commande jamais l'accord ; seule la position du COD compte.",
      hint: "Elles ont perdu quoi ? La réponse vient-elle avant ou après le verbe ?",
    },
    {
      id: "f4acc-6",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Elle s'est ... couper les cheveux. »",
      choices: ["faite", "faits", "fait"],
      answer: 2,
      explanation:
        "« Fait » suivi d'un infinitif est toujours invariable : « elle s'est fait couper les cheveux ». Le piège : on est tenté d'accorder avec « elle », mais la règle du « fait + infinitif » l'emporte dans tous les cas, sans exception.",
      hint: "Quel mot suit directement le participe ? C'est un infinitif : applique la règle spéciale.",
    },
    {
      id: "f4acc-7",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Elles sont ... étonnées par la nouvelle. »",
      choices: ["toutes", "tout", "toute"],
      answer: 1,
      explanation:
        "Ici « tout » signifie « tout à fait » : c'est un adverbe, donc invariable → « tout étonnées ». L'accord d'euphonie n'existe que devant un adjectif féminin commençant par une consonne ou un h aspiré ; « étonnées » commence par une voyelle. Le piège : « elles sont toutes étonnées » existe aussi, mais signifie alors « toutes sans exception ».",
      hint: "Remplace par « tout à fait » : ça fonctionne. Et « étonnées » commence-t-il par une voyelle ou une consonne ?",
    },
    {
      id: "f4acc-8",
      level: 2,
      type: "truefalse",
      question: "Dans « quatre-vingts élèves », « vingt » prend un s.",
      answer: true,
      explanation:
        "Vrai ! « Vingt » est multiplié (4 × 20) et aucun autre nombre ne le suit : il prend un s. Le piège : dès qu'un nombre suit, le s disparaît → « quatre-vingt-deux élèves ».",
      hint: "Deux questions : « vingt » est-il multiplié ? Un autre nombre le suit-il ?",
    },
    {
      id: "f4acc-9",
      level: 3,
      type: "input",
      question: "Complète avec le participe passé du verbe « entendre » : « Les musiciennes que j'ai ... jouer étaient remarquables. »",
      answer: "entendues",
      explanation:
        "Le COD « que » (= les musiciennes) est avant le verbe et il fait l'action de l'infinitif : ce sont les musiciennes qui jouent → accord → « entendues ». Le piège : dans « la mélodie que j'ai entendu jouer », la mélodie ne joue pas, elle est jouée → pas d'accord.",
      hint: "Qui fait l'action de jouer : les musiciennes ou quelqu'un d'autre ?",
    },
    {
      id: "f4acc-10",
      level: 3,
      type: "qcm",
      question: "Selon la règle actuelle, comment écrit-on : « Elle les a ... partir sans rien dire » ?",
      choices: ["laissés", "laissé", "laissées"],
      answer: 1,
      explanation:
        "Comme « fait », « laissé » suivi d'un infinitif est invariable selon la règle actuelle : « elle les a laissé partir ». Le piège : l'ancienne règle demandait l'accord quand le COD faisait l'action ; les rectifications orthographiques ont aligné « laissé » sur « fait » pour simplifier.",
      hint: "« Laissé » est directement suivi de l'infinitif « partir » : même règle que pour « fait ».",
    },
    {
      id: "f4acc-11",
      level: 3,
      type: "input",
      question: "Complète en toutes lettres : « Cette salle peut accueillir deux ... spectateurs. » (2 × 100)",
      answer: "cents",
      explanation:
        "« Cent » est multiplié (2 × 100) et aucun nombre ne le suit : il prend un s → « deux cents spectateurs ». Le piège : « deux cent cinquante spectateurs » perd le s, car « cinquante » suit. Remarque : « deux cent » sans s n'est correct que si un nombre suit.",
      hint: "« Cent » est multiplié par deux. Y a-t-il un autre nombre derrière lui ?",
    },
    {
      id: "f4acc-12",
      level: 3,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Ce château a ... cinq cents ans. » (= environ)",
      choices: ["quelques", "quelque"],
      answer: 1,
      explanation:
        "Devant un nombre, quand il signifie « environ », « quelque » est adverbe et reste invariable : « quelque cinq cents ans ». Le piège : « quelques » avec s est un déterminant qui signifie « plusieurs » (« quelques amis ») ; ici on ne peut pas dire « plusieurs cinq cents ans ».",
      hint: "Remplace par « environ » : si la phrase garde son sens, le mot est adverbe.",
    },
  ],
};
