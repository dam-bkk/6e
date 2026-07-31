import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-passive",
  subject: "francais",
  grade: "4e",
  num: 4,
  title: "La voix passive",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "ArrowLeftRight",
  teaser: "La souris est mangée par le chat : quand le sujet subit l'action au lieu de la faire.",
  objectives: [
    "Je sais distinguer la voix active et la voix passive",
    "Je sais transformer une phrase active en phrase passive : le COD devient sujet",
    "Je sais repérer le complément d'agent introduit par « par »",
    "Je sais accorder le participe passé avec le sujet (auxiliaire être)",
    "Je sais conjuguer le passif aux temps composés et dire quand employer le passif",
  ],
  lesson: [
    {
      title: "Voix active, voix passive",
      paragraphs: [
        "À la voix active, le sujet fait l'action : « Le chat mange la souris. »",
        "À la voix passive, le sujet subit l'action : « La souris est mangée par le chat. » L'action est la même, mais la phrase est tournée dans l'autre sens.",
        "Dans la transformation, le COD de la phrase active devient le sujet de la phrase passive, et le sujet actif devient le complément d'agent.",
      ],
      example: [
        "Active : « Le jardinier plante un arbre. » → sujet : le jardinier, COD : un arbre.",
        "Passive : « Un arbre est planté par le jardinier. » → sujet : un arbre, complément d'agent : par le jardinier.",
      ],
      tip: "Demande-toi toujours : le sujet fait-il l'action ou la subit-il ? C'est le test le plus sûr pour reconnaître la voix.",
    },
    {
      title: "La formation du passif",
      paragraphs: [
        "Voix passive = auxiliaire être + participe passé du verbe.",
        "L'auxiliaire être se met au temps du verbe actif : présent actif → présent passif (est mangée), imparfait actif → imparfait passif (était mangée), futur actif → futur passif (sera mangée).",
        "Le participe passé s'accorde toujours avec le sujet, puisque l'auxiliaire est être : « Les fleurs sont cueillies. »",
      ],
      example: [
        "« Le maire inaugurera la salle. » (futur) → « La salle sera inaugurée par le maire. » (futur passif)",
        "« Les élèves récitaient le poème. » (imparfait) → « Le poème était récité par les élèves. »",
      ],
      tip: "Pour trouver le temps d'une phrase passive, regarde l'auxiliaire être : « sera inaugurée » → « sera » est au futur → futur passif.",
    },
    {
      title: "Le complément d'agent",
      paragraphs: [
        "Le complément d'agent désigne celui qui fait réellement l'action dans une phrase passive. Il est introduit par la préposition « par » (parfois « de » avec des verbes de sentiment : « Elle est aimée de tous »).",
        "Le complément d'agent n'est pas obligatoire : on peut l'omettre quand l'auteur de l'action est inconnu ou sans importance. « La vitre a été cassée. »",
        "Pour retrouver la phrase active, le complément d'agent redevient le sujet : « La vitre a été cassée par le ballon » → « Le ballon a cassé la vitre. »",
      ],
      example: [
        "« Le record a été battu par une jeune nageuse. » → complément d'agent : « par une jeune nageuse ».",
        "« Le magasin a été cambriolé. » → pas de complément d'agent : on ignore qui a agi.",
      ],
      tip: "Ne confonds pas le complément d'agent avec un complément circonstanciel : « par » + celui qui agit = agent ; « par la fenêtre » = lieu.",
    },
    {
      title: "Le passif aux temps composés",
      paragraphs: [
        "Aux temps composés, le passif utilise deux participes à la suite : l'auxiliaire être se conjugue au temps composé, puis vient le participe du verbe.",
        "Passé composé passif : « La salle a été décorée. » Plus-que-parfait passif : « La salle avait été décorée. »",
        "Les deux participes s'accordent avec le sujet : « Les cabanes ont été détruites par la tempête. » (détruites, avec -es)",
      ],
      example: [
        "« La tempête a détruit les cabanes. » → « Les cabanes ont été détruites par la tempête. »",
        "« On avait repeint les murs. » → « Les murs avaient été repeints. »",
      ],
      tip: "« A été construit », « ont été détruites » : quand tu vois être + deux participes, tu es presque sûrement face à un passif au temps composé.",
    },
    {
      title: "Quand employer le passif ?",
      paragraphs: [
        "Le passif met en valeur celui qui subit l'action, en le plaçant en tête de phrase : « Le château a été construit au XIIe siècle » parle du château, pas des bâtisseurs.",
        "On l'emploie aussi quand l'auteur de l'action est inconnu ou évident : dans les journaux, les consignes, les récits historiques.",
        "Attention : seuls les verbes qui acceptent un COD (verbes transitifs directs) peuvent se mettre au passif. « Dormir » ou « arriver » n'ont pas de COD : pas de passif possible.",
        "Piège : être + participe passé n'est pas toujours un passif ! « Elle est arrivée » est un passé composé actif (arriver se conjugue avec être).",
      ],
      example: [
        "« Le suspect a été interpellé. » → l'auteur de l'action (la police) est évident, on l'omet.",
        "« Elle est tombée. » → passé composé actif de tomber, pas un passif : personne ne la « tombe » !",
      ],
      tip: "Pour démasquer un faux passif, cherche l'agent : si « par quelqu'un » est impossible à ajouter (« Elle est partie par… » ?), ce n'est pas un passif.",
    },
  ],
  exercises: [
    {
      id: "f4pas-1",
      level: 1,
      type: "qcm",
      question: "« La souris est mangée par le chat. » Cette phrase est…",
      choices: ["à la voix active", "à la voix passive", "au discours indirect"],
      answer: 1,
      explanation:
        "Le sujet « la souris » subit l'action au lieu de la faire : c'est la voix passive (être + participe passé, avec le complément d'agent « par le chat »). La règle : actif = le sujet agit, passif = le sujet subit.",
      hint: "Le sujet « la souris » fait-il l'action de manger ?",
    },
    {
      id: "f4pas-2",
      level: 1,
      type: "input",
      question: "Transpose au passif en complétant : « Le chat mange la souris. » → « La souris ... mangée par le chat. »",
      answer: "est",
      explanation:
        "Le verbe actif « mange » est au présent : l'auxiliaire être se met donc au présent → « est mangée ». La règle : au passif, être prend le temps du verbe actif, et le participe s'accorde avec le sujet (mangée, féminin).",
      hint: "« Mange » est au présent : conjugue être au même temps.",
    },
    {
      id: "f4pas-3",
      level: 1,
      type: "truefalse",
      question: "Dans la transformation passive, le COD de la phrase active devient le sujet de la phrase passive.",
      answer: true,
      explanation:
        "Vrai ! C'est le cœur de la transformation : « Le jardinier plante un arbre » → « Un arbre est planté par le jardinier ». Le COD « un arbre » devient sujet, et le sujet actif devient complément d'agent. Conséquence : un verbe sans COD ne peut pas se mettre au passif.",
      hint: "Observe « un arbre » dans : « Le jardinier plante un arbre » → « Un arbre est planté… ».",
    },
    {
      id: "f4pas-4",
      level: 1,
      type: "qcm",
      question: "Par quelle préposition le complément d'agent est-il le plus souvent introduit ?",
      choices: ["à", "par", "pour", "avec"],
      answer: 1,
      explanation:
        "Le complément d'agent est introduit par « par » : « Le record a été battu par une nageuse. » (Parfois « de » avec des verbes de sentiment : « aimée de tous ».) La règle : l'agent désigne celui qui fait réellement l'action dans la phrase passive.",
      hint: "« La souris est mangée ... le chat. »",
    },
    {
      id: "f4pas-5",
      level: 2,
      type: "qcm",
      question: "« Le château a été construit par le roi. » À quel temps cette phrase passive est-elle conjuguée ?",
      choices: ["au présent", "à l'imparfait", "au passé composé", "au futur simple"],
      answer: 2,
      explanation:
        "On regarde l'auxiliaire être : « a été » est le passé composé d'être → la phrase est au passé composé passif. Le piège : ne pas se laisser impressionner par les deux participes qui se suivent (été + construit) ; seul le temps de l'auxiliaire compte.",
      hint: "Conjugue « être » seul : je suis, j'étais, j'ai été… Où ranges-tu « a été » ?",
    },
    {
      id: "f4pas-6",
      level: 2,
      type: "input",
      question: "Accorde le participe passé : « Les fleurs sont ... (cueillir) par la fleuriste. »",
      answer: "cueillies",
      explanation:
        "Au passif, l'auxiliaire est être : le participe passé s'accorde avec le sujet « les fleurs », féminin pluriel → « cueillies ». Le piège : oublier l'accord parce qu'on pense à l'accord avec avoir ; ici, l'accord avec le sujet est systématique.",
      hint: "Le sujet « les fleurs » est féminin pluriel : le participe prend -es.",
    },
    {
      id: "f4pas-7",
      level: 2,
      type: "truefalse",
      question: "Le complément d'agent est obligatoire dans toute phrase passive.",
      answer: false,
      explanation:
        "Faux ! On l'omet souvent, quand l'auteur de l'action est inconnu ou évident : « La vitre a été cassée. » C'est même l'un des grands intérêts du passif. La règle : agent exprimé = « par + qui agit » ; agent absent = phrase passive quand même.",
      hint: "« Le magasin a été cambriolé. » Sait-on par qui ? La phrase est-elle correcte ?",
    },
    {
      id: "f4pas-8",
      level: 2,
      type: "qcm",
      question: "Quelle phrase est à la voix passive ?",
      choices: [
        "Le vase a été cassé.",
        "Elle est arrivée en retard.",
        "Nous avons mangé au restaurant.",
        "Ils sont très contents.",
      ],
      answer: 0,
      explanation:
        "« Le vase a été cassé » : le sujet subit l'action (on peut ajouter « par quelqu'un ») → passif. Le piège : « Elle est arrivée » est un passé composé actif (arriver se conjugue avec être), et « ils sont contents » est être + adjectif attribut, pas un participe d'action.",
      hint: "Teste chaque phrase : peux-tu ajouter « par quelqu'un » sans absurdité ?",
    },
    {
      id: "f4pas-9",
      level: 3,
      type: "qcm",
      question: "Quelle est la transformation passive correcte de : « Le maire inaugurera la salle » ?",
      choices: [
        "La salle est inaugurée par le maire.",
        "La salle sera inaugurée par le maire.",
        "La salle a été inaugurée par le maire.",
        "La salle serait inaugurée par le maire.",
      ],
      answer: 1,
      explanation:
        "« Inaugurera » est au futur simple : l'auxiliaire être doit passer au futur → « sera inaugurée ». La règle : au passif, être prend exactement le temps du verbe actif. Le piège : les réponses 1 et 3 changent le temps (présent, passé composé).",
      hint: "Quel est le temps de « inaugurera » ? Conserve-le pour « être ».",
    },
    {
      id: "f4pas-10",
      level: 3,
      type: "input",
      question: "Transpose au passif en complétant : « La tempête a détruit les cabanes. » → « Les cabanes ... par la tempête. »",
      answer: "ont été détruites",
      accept: ["ont ete detruites", "ont été détruite"],
      explanation:
        "Le verbe actif « a détruit » est au passé composé : être passe au passé composé → « ont été », puis le participe « détruites » s'accorde avec le sujet « les cabanes » (féminin pluriel). Le piège : il faut à la fois le bon temps (ont été) et le bon accord (-es).",
      hint: "Passé composé d'être avec « les cabanes » : elles ont été… + participe accordé.",
    },
    {
      id: "f4pas-11",
      level: 3,
      type: "truefalse",
      question: "« Marie est tombée dans l'escalier » est une phrase à la voix passive.",
      answer: false,
      explanation:
        "Faux ! C'est le piège du chapitre : « tomber » se conjugue avec être au passé composé, mais c'est bien Marie qui fait l'action de tomber. Personne ne la « tombe » : impossible d'ajouter « par quelqu'un ». Être + participe passé n'est un passif que si le sujet subit une action faite par un agent.",
      hint: "Essaie d'ajouter « par quelqu'un » à la phrase. Est-ce possible ?",
    },
    {
      id: "f4pas-12",
      level: 3,
      type: "qcm",
      question: "Quel verbe ne peut pas être mis à la voix passive ?",
      choices: ["construire", "lire", "dormir", "manger"],
      answer: 2,
      explanation:
        "Seuls les verbes qui acceptent un COD (transitifs directs) peuvent se mettre au passif, car c'est le COD qui devient sujet. « Dormir » n'a jamais de COD (on ne « dort » pas quelque chose) : pas de passif possible. Construire, lire et manger acceptent un COD, donc un passif.",
      hint: "Peut-on « dormir quelque chose » ? Cherche le verbe sans COD.",
    },
  ],
};
