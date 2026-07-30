import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr-homophones",
  subject: "francais",
  num: 7,
  title: "Les homophones",
  domain: "grandeurs",
  domainLabel: "Orthographe",
  icon: "Ear",
  teaser: "a ou à ? son ou sont ? La technique de substitution qui ne trompe jamais.",
  objectives: [
    "Je sais distinguer a/à, est/et grâce à la substitution avait/était",
    "Je sais distinguer son/sont et on/ont",
    "Je sais distinguer ou/où et ces/ses",
    "Je sais distinguer c'est/s'est et la/là/l'a",
  ],
  lesson: [
    {
      title: "a / à et est / et",
      paragraphs: [
        "Les homophones sont des mots qui se prononcent pareil mais s'écrivent différemment. Pour les distinguer, une seule méthode fiable : la substitution. On remplace le mot par un autre ; si la phrase garde son sens, on a trouvé la bonne orthographe.",
        "« a » = verbe avoir → remplaçable par « avait » : « Il a faim » → « Il avait faim » : ça marche. « à » = préposition, avec accent : « Il va à Paris » → « Il va avait Paris » : impossible !",
        "« est » = verbe être → remplaçable par « était » : « Il est parti » → « Il était parti ». « et » = mot de liaison → remplaçable par « et puis » : « du pain et du fromage ».",
      ],
      example: [
        "« Léa a un vélo à sa taille. » → « avait un vélo » fonctionne pour le premier, pas pour le second.",
        "« Le film est long et ennuyeux. » → « était long », « et puis ennuyeux ».",
      ],
      tip: "a → avait ; est → était. Si le remplacement marche, pas d'accent et c'est un verbe. Sinon, c'est à ou et.",
    },
    {
      title: "son / sont et on / ont",
      paragraphs: [
        "« sont » = verbe être → remplaçable par « étaient » : « Ils sont contents » → « Ils étaient contents ». « son » = déterminant possessif → remplaçable par « mon » : « Il prend son cartable » → « mon cartable ».",
        "« ont » = verbe avoir → remplaçable par « avaient » : « Ils ont soif » → « Ils avaient soif ». « on » = pronom (quelqu'un) → remplaçable par « il » : « On arrive » → « Il arrive ».",
      ],
      example: [
        "« Ses parents sont fiers de son travail. » → « étaient fiers » ; « mon travail ».",
        "« On dit qu'ils ont gagné. » → « Il dit » ; « ils avaient gagné ».",
      ],
      tip: "Les verbes se remplacent par leur imparfait : sont → étaient, ont → avaient. Les petits mots (son, on) refusent ce remplacement.",
    },
    {
      title: "ou / où et ces / ses",
      paragraphs: [
        "« ou » (sans accent) exprime un choix → remplaçable par « ou bien » : « Thé ou café ? » → « Thé ou bien café ? ». « où » (avec accent) indique un lieu ou un moment : « Où vas-tu ? », « le village où je suis né ».",
        "« ses » = les siens → au singulier, on dirait « son » ou « sa » : « Il range ses affaires » → « son affaire ». « ces » = ceux qu'on montre → au singulier, on dirait « ce » ou « cette » : « Regarde ces oiseaux ! » → « cet oiseau ».",
      ],
      example: [
        "« Tu préfères la mer ou la montagne ? » → « ou bien » : pas d'accent.",
        "« La ville où j'habite. » → lieu : accent obligatoire.",
      ],
      tip: "ces = on montre (démonstratif) ; ses = ça lui appartient (possessif). Mets le nom au singulier : « cette montre » ou « sa montre » ? Le sens tranche.",
    },
    {
      title: "c'est / s'est",
      paragraphs: [
        "« c'est » = cela est → remplaçable par « cela est » : « C'est une bonne idée » → « Cela est une bonne idée ».",
        "« s'est » fait partie d'un verbe pronominal (se tromper, se lever…) : « Il s'est trompé ». Le test : on peut conjuguer à une autre personne → « Je me suis trompé, tu t'es trompé ». Avec « c'est », impossible !",
      ],
      example: [
        "« C'est l'hiver : le lac s'est gelé. »",
        "→ « Cela est l'hiver » fonctionne ; « le lac cela est gelé » ne fonctionne pas.",
      ],
      tip: "Mets la phrase à la 1re personne : si tu peux dire « je me suis… », alors c'est « s'est ». Sinon, c'est « c'est ».",
    },
    {
      title: "la / là / l'a",
      paragraphs: [
        "« la » = déterminant ou pronom : « la maison », « je la vois ». « là » (avec accent) = indication de lieu → remplaçable par « ici » : « Viens là ! » → « Viens ici ! ».",
        "« l'a » = le/la + verbe avoir → remplaçable par « l'avait » : « Marie l'a appelé » → « Marie l'avait appelé ». Le test de l'imparfait, encore lui !",
      ],
      example: [
        "« La voisine est là ; Paul l'a invitée. »",
        "→ « la voisine » (déterminant), « est ici » (lieu), « l'avait invitée » (verbe avoir).",
      ],
      tip: "là → ici ; l'a → l'avait. Si aucun des deux remplacements ne marche, c'est le simple « la ».",
    },
  ],
  exercises: [
    {
      id: "fhom-1",
      level: 1,
      type: "qcm",
      question: "Complète : « Il ... un chien très joueur. »",
      choices: ["a", "à", "as", "ah"],
      answer: 0,
      explanation:
        "Test de substitution : « Il avait un chien » → la phrase garde son sens, donc c'est le verbe avoir : « a », sans accent. « À » avec accent est une préposition (« il va à l'école ») : elle ne peut jamais être remplacée par « avait ».",
      hint: "Essaie de remplacer par « avait ».",
    },
    {
      id: "fhom-2",
      level: 1,
      type: "qcm",
      question: "Complète : « Mon frère ... parti ce matin. »",
      choices: ["et", "est", "es", "ai"],
      answer: 1,
      explanation:
        "Test : « Mon frère était parti » → ça fonctionne, donc c'est le verbe être : « est ». « Et » est un mot de liaison remplaçable par « et puis » : ici, « Mon frère et puis parti » n'a aucun sens.",
      hint: "Essaie de remplacer par « était ».",
    },
    {
      id: "fhom-3",
      level: 1,
      type: "input",
      question: "Complète avec « son » ou « sont » : « Les invités ... arrivés. »",
      answer: "sont",
      explanation:
        "Test : « Les invités étaient arrivés » → ça marche, donc c'est le verbe être : « sont ». « Son » est un déterminant possessif (« son manteau ») remplaçable par « mon », ce qui serait absurde ici.",
      hint: "Peux-tu remplacer par « étaient » ?",
    },
    {
      id: "fhom-4",
      level: 1,
      type: "truefalse",
      question: "Pour savoir si on écrit « a » sans accent, on peut essayer de le remplacer par « avait ».",
      answer: true,
      explanation:
        "Vrai ! C'est LA technique de ce chapitre : « a » est le verbe avoir, donc il peut se mettre à l'imparfait → « avait ». Si le remplacement rend la phrase absurde, il faut écrire « à » avec accent (préposition).",
    },
    {
      id: "fhom-5",
      level: 2,
      type: "qcm",
      question: "Complète : « ... va au cinéma ce soir. »",
      choices: ["Ont", "On", "Sont", "Son"],
      answer: 1,
      explanation:
        "Test : « Il va au cinéma » → le remplacement par « il » fonctionne, donc c'est le pronom « on ». « Ont » est le verbe avoir (« ils ont faim ») : « Avaient va au cinéma » n'aurait aucun sens.",
      hint: "Essaie de remplacer par « il ».",
    },
    {
      id: "fhom-6",
      level: 2,
      type: "qcm",
      question: "Complète : « Tu veux du thé ... du café ? »",
      choices: ["où", "ou", "hou", "oh"],
      answer: 1,
      explanation:
        "Test : « du thé ou bien du café » → ça fonctionne : c'est « ou » sans accent, qui exprime un choix. « Où » avec accent indique un lieu ou un moment (« Où vas-tu ? ») et ne peut pas être remplacé par « ou bien ».",
      hint: "Essaie de remplacer par « ou bien ».",
    },
    {
      id: "fhom-7",
      level: 2,
      type: "input",
      question: "Complète avec « ces » ou « ses » : « Il range ... affaires dans son sac. »",
      answer: "ses",
      explanation:
        "Ce sont les affaires qui lui appartiennent : possessif → « ses ». Test du singulier : on dirait « son affaire » (possession) et non « cette affaire » (démonstration). « Ces » servirait à montrer : « Regarde ces affaires par terre ! »",
      hint: "Ces affaires lui appartiennent-elles, ou est-ce qu'on les montre ?",
    },
    {
      id: "fhom-8",
      level: 2,
      type: "truefalse",
      question: "Dans « Où habites-tu ? », le mot « où » s'écrit avec un accent.",
      answer: true,
      explanation:
        "Vrai ! Ici « où » interroge sur le lieu : il prend l'accent grave. Le « ou » sans accent exprime un choix et peut se remplacer par « ou bien » — impossible dans cette question. Petit bonus : « où » est le seul mot français avec un ù accent grave sur le u.",
    },
    {
      id: "fhom-9",
      level: 3,
      type: "qcm",
      question: "Complète : « Il ... trompé de chemin. »",
      choices: ["c'est", "s'est", "sait", "ses"],
      answer: 1,
      explanation:
        "Test de la 1re personne : « Je me suis trompé de chemin » → ça fonctionne, donc c'est le verbe pronominal se tromper : « s'est ». « C'est » se remplace par « cela est » : « Cela est trompé de chemin » n'a aucun sens.",
      hint: "Peux-tu dire « je me suis trompé » ?",
    },
    {
      id: "fhom-10",
      level: 3,
      type: "qcm",
      question: "Complète : « Marie ... appelé hier soir. »",
      choices: ["la", "là", "l'a", "las"],
      answer: 2,
      explanation:
        "Test : « Marie l'avait appelé hier soir » → le remplacement par « l'avait » fonctionne : c'est « l'a » (pronom l' + verbe avoir). « La » est un déterminant ou un pronom (« je la vois ») et « là » indique un lieu (« viens là » = « viens ici »).",
      hint: "Essaie de remplacer par « l'avait ».",
    },
    {
      id: "fhom-11",
      level: 3,
      type: "input",
      question: "Complète avec « ou » ou « où » : « Le village ... je suis né est minuscule. »",
      answer: "où",
      accept: ["ou"],
      explanation:
        "« Où » désigne ici le lieu (le village dans lequel je suis né) : accent obligatoire. Le test le confirme : « le village ou bien je suis né » n'a aucun sens. Sans accent, « ou » ne sert qu'à exprimer un choix entre deux possibilités.",
      hint: "Ce mot désigne-t-il un lieu ou un choix ?",
    },
    {
      id: "fhom-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Il est parti a Paris. » est correctement écrite.",
      answer: false,
      explanation:
        "Faux ! Test : « Il est parti avait Paris » → absurde. Ce n'est donc pas le verbe avoir : il faut la préposition « à » avec accent → « Il est parti à Paris. » Devant un nom de lieu, c'est presque toujours la préposition à. Fais le test « avait » à chaque hésitation : il est infaillible.",
      hint: "Remplace par « avait » : la phrase garde-t-elle un sens ?",
    },
  ],
};
