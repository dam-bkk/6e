import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en4-comparaisons",
  subject: "anglais",
  grade: "4e",
  num: 5,
  title: "Comparaisons et quantités",
  domain: "donnees",
  domainLabel: "Grammar",
  icon: "ArrowUpDown",
  teaser: "The most, too, enough, much, many : comparer et doser comme un pro.",
  objectives: [
    "Je sais former le superlatif : the biggest, the most interesting",
    "Je sais utiliser too et enough (et les placer correctement)",
    "Je sais choisir entre much, many et a lot of",
    "Je connais la nuance entre few/little et a few/a little",
    "Je sais utiliser les composés de some, any et no : someone, anything, nowhere...",
  ],
  lesson: [
    {
      title: "Le superlatif : the... -est / the most...",
      paragraphs: [
        "Le superlatif désigne le champion d'un groupe : le plus grand, le plus intéressant. Adjectifs courts (1 syllabe, ou 2 syllabes en -y) : the + adjectif + -est → the tallest, the fastest, the happiest (le -y devient -i).",
        "Adjectifs longs (2 syllabes ou plus) : the most + adjectif → the most interesting, the most expensive.",
        "Trois superlatifs irréguliers à connaître par coeur : good → the best, bad → the worst, far → the furthest.",
        "Après un superlatif, « de » se traduit par in devant un lieu ou un groupe : the tallest boy in the class, the biggest city in England.",
      ],
      example: [
        "Ben is the tallest student in the school. → Ben est l'élève le plus grand de l'école.",
        "This is the most interesting book I know. → C'est le livre le plus intéressant que je connaisse.",
        "She is the best player in the team. → C'est la meilleure joueuse de l'équipe.",
      ],
      tip: "Piège du calque : « le plus intéressant » ne se dit jamais « the most interestingest » ni « the more interesting ». Court → -est, long → the most, jamais les deux à la fois.",
    },
    {
      title: "Too et enough : trop et assez",
      paragraphs: [
        "Too + adjectif = trop : This bag is too heavy = ce sac est trop lourd. Ne confonds pas avec very (très) : too implique un problème, un excès.",
        "Enough = assez, mais sa place change tout : APRÈS un adjectif (old enough = assez âgé) mais AVANT un nom (enough money = assez d'argent).",
        "Too + much/many + nom = trop de : too much noise (indénombrable), too many people (dénombrable).",
        "Structure utile : too... to + verbe : I'm too tired to go out = trop fatigué pour sortir. Et enough... to : She's old enough to drive.",
      ],
      example: [
        "This exercise is too difficult. → Cet exercice est trop difficile.",
        "He isn't old enough to vote. → Il n'est pas assez âgé pour voter.",
        "We don't have enough time. → Nous n'avons pas assez de temps.",
        "There are too many cars in the city. → Il y a trop de voitures en ville.",
      ],
      tip: "Piège de place : enough se met APRÈS l'adjectif (tall enough, jamais « enough tall ») mais AVANT le nom (enough money). C'est l'inverse du français « assez grand / assez d'argent » qui, lui, ne bouge pas.",
    },
    {
      title: "Much, many, a lot of : beaucoup",
      paragraphs: [
        "Many + nom dénombrable pluriel : many books, many friends. Much + nom indénombrable : much time, much money, much water.",
        "A lot of s'utilise avec les deux : a lot of books, a lot of money. Dans les phrases affirmatives, a lot of est la forme la plus naturelle ; much et many apparaissent surtout dans les questions et les négations.",
        "How much...? pour demander une quantité indénombrable (ou un prix : How much is it?), How many...? pour compter : How many brothers have you got?",
      ],
      example: [
        "I don't have much time. → Je n'ai pas beaucoup de temps.",
        "She has a lot of friends. → Elle a beaucoup d'amis.",
        "How many languages do you speak? → Combien de langues parles-tu ?",
        "How much sugar do you want? → Combien de sucre veux-tu ?",
      ],
      tip: "Attention aux indénombrables surprises : money, information, advice, furniture, hair sont indénombrables en anglais → much money (jamais « many moneys »).",
    },
    {
      title: "Few, little, a few, a little : peu ou un peu ?",
      paragraphs: [
        "Few + dénombrable pluriel et little + indénombrable signifient « peu de », avec une idée négative de manque : few friends = peu d'amis (c'est triste), little time = peu de temps (ça va être juste).",
        "A few et a little signifient « quelques / un peu de », avec une idée positive : a few friends = quelques amis (c'est déjà bien), a little time = un peu de temps (on peut faire quelque chose).",
        "Le petit article a change donc complètement le ton de la phrase : I have little money (je suis presque fauché) vs I have a little money (j'ai de quoi faire).",
      ],
      example: [
        "Few people came to the meeting. → Peu de gens sont venus à la réunion.",
        "I have a few questions. → J'ai quelques questions.",
        "There is little hope. → Il y a peu d'espoir.",
        "Add a little salt. → Ajoute un peu de sel.",
      ],
      tip: "Mémo : a few / a little = verre à moitié plein (quelques, un peu). Few / little sans a = verre à moitié vide (trop peu). Et few va avec le comptable, little avec l'incomptable.",
    },
    {
      title: "Someone, anything, nowhere : les composés de some, any, no",
      paragraphs: [
        "Some, any et no se combinent avec -one/-body (personnes), -thing (choses) et -where (lieux) : someone, something, somewhere / anyone, anything, anywhere / no one, nothing, nowhere.",
        "Répartition classique : some- dans les affirmations (I saw someone), any- dans les questions et les négations (Did you see anyone? I didn't see anything), no- pour une négation directe avec un verbe affirmatif (I saw nothing).",
        "Attention : pas de double négation en anglais. « Je n'ai rien vu » = I didn't see anything OU I saw nothing, mais jamais « I didn't see nothing ».",
        "Exception polie : some- dans les questions quand on propose quelque chose : Would you like something to drink?",
      ],
      example: [
        "Someone is knocking at the door. → Quelqu'un frappe à la porte.",
        "Is there anything to eat? → Y a-t-il quelque chose à manger ?",
        "We went nowhere last weekend. → Nous ne sommes allés nulle part le week-end dernier.",
        "I don't know anybody here. → Je ne connais personne ici.",
      ],
      tip: "Une seule négation par phrase : soit l'auxiliaire est négatif (didn't + anything), soit le mot est négatif (nothing) avec un verbe affirmatif. Les deux ensemble, c'est le calque interdit.",
    },
  ],
  exercises: [
    {
      id: "e4cmp-1",
      level: 1,
      type: "qcm",
      question: "Complète : « Mount Everest is ___ mountain in the world. »",
      choices: ["the higher", "the highest", "the most high", "higher"],
      answer: 1,
      explanation:
        "High est un adjectif court : superlatif en the + -est → the highest. Mount Everest is the highest mountain in the world. « The most high » est le calque à éviter avec un adjectif court, et remarque le in après le superlatif (in the world).",
      hint: "High est court : -est ou the most ?",
    },
    {
      id: "e4cmp-2",
      level: 1,
      type: "qcm",
      question: "Complète : « How ___ money do you have? »",
      choices: ["many", "much", "few", "a lot"],
      answer: 1,
      explanation:
        "Money est indénombrable en anglais : on utilise much → How much money do you have? Many s'utilise avec les noms comptables au pluriel (how many books).",
      hint: "Money : dénombrable ou indénombrable ?",
    },
    {
      id: "e4cmp-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « She is enough old to travel alone. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Enough se place APRÈS l'adjectif : She is old enough to travel alone = elle est assez âgée pour voyager seule. « Enough old » est le calque de l'ordre français « assez âgée ».",
      hint: "Où se place enough par rapport à un adjectif ?",
    },
    {
      id: "e4cmp-4",
      level: 1,
      type: "input",
      question: "Quel est le superlatif de « good » ? « She is ___ ___ player in the team. » (deux mots)",
      answer: "the best",
      explanation:
        "Good est irrégulier : good → better (comparatif) → the best (superlatif). She is the best player in the team = c'est la meilleure joueuse de l'équipe. « The goodest » n'existe pas.",
      hint: "Good – better – the ... ?",
    },
    {
      id: "e4cmp-5",
      level: 2,
      type: "qcm",
      question: "Complète : « There are ___ many people on this beach! »",
      choices: ["too", "very", "enough", "much"],
      answer: 0,
      explanation:
        "« Trop de » + dénombrable pluriel = too many : There are too many people = il y a trop de monde. Too exprime l'excès (c'est un problème), alors que very (très) est neutre.",
      hint: "« Trop de gens » : quel mot exprime l'excès ?",
    },
    {
      id: "e4cmp-6",
      level: 2,
      type: "qcm",
      question: "Quelle phrase signifie « J'ai quelques amis ici » (idée positive) ?",
      choices: [
        "I have few friends here.",
        "I have a few friends here.",
        "I have little friends here.",
        "I have a little friends here.",
      ],
      answer: 1,
      explanation:
        "A few = quelques (idée positive) avec un nom comptable pluriel : I have a few friends here. Few sans article = peu d'amis (idée de manque). Little et a little s'utilisent avec les indénombrables, pas avec friends.",
      hint: "Idée positive + nom comptable : quelle combinaison ?",
    },
    {
      id: "e4cmp-7",
      level: 2,
      type: "input",
      question: "Complète avec un composé en some- : « ___ is knocking at the door. » (quelqu'un, un mot)",
      answer: "someone",
      accept: ["somebody"],
      explanation:
        "« Quelqu'un » dans une phrase affirmative = someone (ou somebody) : Someone is knocking at the door. Any- serait pour une question ou une négation, no- pour « personne ».",
      hint: "Phrase affirmative : some-, any- ou no- ?",
    },
    {
      id: "e4cmp-8",
      level: 2,
      type: "input",
      question: "Complète : « This tea is ___ hot, I can't drink it! » (trop, un mot)",
      answer: "too",
      explanation:
        "« Trop chaud » = too hot : l'excès rend l'action impossible (I can't drink it), c'est exactement le sens de too. Very (très) ne marcherait pas ici, car very n'implique pas de problème.",
      hint: "Trop = excès qui pose problème.",
    },
    {
      id: "e4cmp-9",
      level: 3,
      type: "qcm",
      question: "Choisis la phrase correcte pour « Je n'ai rien vu » :",
      choices: [
        "I didn't see nothing.",
        "I didn't see anything.",
        "I don't saw anything.",
        "I saw anything.",
      ],
      answer: 1,
      explanation:
        "Une seule négation par phrase en anglais : auxiliaire négatif + anything → I didn't see anything. On pourrait aussi dire I saw nothing (verbe affirmatif + mot négatif). « I didn't see nothing » cumule deux négations : c'est le calque interdit.",
      hint: "Combien de négations une phrase anglaise peut-elle contenir ?",
    },
    {
      id: "e4cmp-10",
      level: 3,
      type: "input",
      question: "Complète avec le superlatif de « expensive » : « This is ___ ___ ___ restaurant in town. » (trois mots)",
      answer: "the most expensive",
      explanation:
        "Expensive est un adjectif long (3 syllabes) : superlatif avec the most → the most expensive restaurant in town = le restaurant le plus cher de la ville. Pas de -est sur un adjectif long.",
      hint: "Adjectif long : the most + adjectif.",
    },
    {
      id: "e4cmp-11",
      level: 3,
      type: "truefalse",
      question: "« I have little time » et « I have a little time » veulent dire exactement la même chose.",
      answer: false,
      explanation:
        "Faux ! Little time = peu de temps (idée négative : ça manque). A little time = un peu de temps (idée positive : on peut en faire quelque chose). Le petit article a inverse le ton de la phrase, c'est une nuance que le français rend par « peu » vs « un peu ».",
      hint: "Verre à moitié vide ou à moitié plein : que change le a ?",
    },
    {
      id: "e4cmp-12",
      level: 3,
      type: "input",
      question: "Traduis : « Il y a trop de bruit ici. » (utilise noise)",
      answer: "there is too much noise here",
      accept: ["there's too much noise here"],
      explanation:
        "There is too much noise here. Noise est indénombrable : « trop de » se dit donc too much (et pas too many). There is + singulier/indénombrable. Too many s'utiliserait avec un pluriel comptable : too many cars.",
      hint: "Noise est indénombrable : too much ou too many ?",
    },
  ],
};
