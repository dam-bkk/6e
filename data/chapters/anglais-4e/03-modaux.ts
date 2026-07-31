import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en4-modaux",
  subject: "anglais",
  grade: "4e",
  num: 3,
  title: "Les modaux",
  domain: "geometrie",
  domainLabel: "Grammar",
  icon: "KeyRound",
  teaser: "Can, must, should, might : les petits mots qui changent tout le sens de la phrase.",
  objectives: [
    "Je connais les règles communes aux modaux : base verbale, pas de -s, pas de do",
    "Je sais utiliser can et could pour la capacité et la permission",
    "Je sais distinguer mustn't (interdiction) et don't have to (absence d'obligation)",
    "Je sais donner un conseil avec should",
    "Je sais exprimer une probabilité avec may et might",
  ],
  lesson: [
    {
      title: "Les règles d'or des modaux",
      paragraphs: [
        "Can, could, must, should, may, might... Les modaux sont des auxiliaires un peu spéciaux qui ajoutent une nuance au verbe : capacité, obligation, conseil, probabilité.",
        "Trois règles valables pour TOUS les modaux : ils sont suivis de la base verbale sans to (she can swim, jamais « she can to swim ») ; ils ne prennent jamais de -s à la 3e personne (he must, jamais « he musts ») ; ils forment la négation et la question sans do (Can you...? She can't...).",
        "Un modal ne se conjugue pas : il n'a ni -ing ni participe passé. Pour les temps qui manquent, on utilise des équivalents : be able to pour can, have to pour must.",
      ],
      example: [
        "She can swim very well. → Elle sait très bien nager.",
        "He must wear a uniform. → Il doit porter un uniforme.",
        "Can I open the window? → Est-ce que je peux ouvrir la fenêtre ?",
        "You shouldn't eat so many sweets. → Tu ne devrais pas manger autant de bonbons.",
      ],
      tip: "Piège du calque : le français dit « il doit porter » avec un infinitif complet, donc on est tenté d'écrire « he must TO wear ». Jamais de to après un modal : must wear, can swim, should go.",
    },
    {
      title: "Can et could : capacité et permission",
      paragraphs: [
        "Can exprime la capacité (« savoir faire, pouvoir ») : I can play the guitar. Il sert aussi à demander ou donner la permission : Can I go out?",
        "Could est le passé de can : When I was five, I could already read = à cinq ans, je savais déjà lire. Négation : couldn't.",
        "Could sert aussi à faire une demande polie, plus douce que can : Could you help me, please? = pourriez-vous m'aider ?",
        "Pour la permission de façon plus formelle, on utilise be allowed to : We are not allowed to use our phones at school = nous n'avons pas le droit d'utiliser nos téléphones au collège.",
      ],
      example: [
        "My little brother can ride a bike now. → Mon petit frère sait faire du vélo maintenant.",
        "She could speak English at the age of six. → Elle savait parler anglais à six ans.",
        "Could you close the door, please? → Pourriez-vous fermer la porte, s'il vous plaît ?",
        "Students are not allowed to run in the corridors. → Les élèves n'ont pas le droit de courir dans les couloirs.",
      ],
      tip: "« Savoir nager, savoir conduire » : le français utilise « savoir », mais l'anglais utilise can, pas know : I can swim (et non « I know to swim »).",
    },
    {
      title: "Must, mustn't et don't have to : LE piège",
      paragraphs: [
        "Must exprime une obligation forte : You must do your homework = tu dois faire tes devoirs. Have to exprime aussi l'obligation, souvent imposée de l'extérieur (règlement) : I have to wear a uniform.",
        "À la forme négative, tout change ! Mustn't = interdiction : You mustn't smoke here = il est interdit de fumer ici.",
        "Don't have to = absence d'obligation : You don't have to come = tu n'es pas obligé de venir (tu peux, mais rien ne t'y oblige).",
        "C'est LE piège pour un francophone : « tu ne dois pas » peut vouloir dire les deux en français, mais mustn't et don't have to sont presque contraires en anglais. Confondre les deux peut transformer une simple dispense en interdiction !",
      ],
      example: [
        "You mustn't use your phone during the test. → Tu n'as pas le droit d'utiliser ton téléphone pendant le contrôle. (interdiction)",
        "You don't have to bring your book, I have two. → Tu n'es pas obligé d'apporter ton livre, j'en ai deux. (pas d'obligation)",
        "Pupils must be on time. → Les élèves doivent être à l'heure.",
        "She doesn't have to work on Sundays. → Elle n'est pas obligée de travailler le dimanche.",
      ],
      tip: "Mémo : mustn't = INTERDIT (panneau rouge). Don't have to = PAS OBLIGÉ (c'est facultatif). Demande-toi : est-ce un interdit ou juste quelque chose de non obligatoire ?",
    },
    {
      title: "Should : le conseil",
      paragraphs: [
        "Should sert à donner un conseil ou exprimer ce qui serait bien de faire : You should sleep more = tu devrais dormir davantage. Négation : shouldn't = tu ne devrais pas.",
        "Should est plus doux que must : must impose, should recommande. Compare : You must stop (obligation) / You should stop (conseil).",
        "Pour demander un conseil : Should I tell her the truth? = est-ce que je devrais lui dire la vérité ?",
      ],
      example: [
        "You should revise before the test. → Tu devrais réviser avant le contrôle.",
        "He shouldn't spend so much time on his phone. → Il ne devrait pas passer autant de temps sur son téléphone.",
        "What should I do? → Que devrais-je faire ?",
      ],
      tip: "Should se traduit presque toujours par le conditionnel français « devrais / devrait ». Si tu peux dire « tu devrais » en français, should est le bon choix.",
    },
    {
      title: "May et might : la probabilité",
      paragraphs: [
        "May et might expriment une possibilité, quelque chose qui arrivera peut-être : It may rain tomorrow = il pleuvra peut-être demain.",
        "Might suggère une probabilité un peu plus faible que may, mais en pratique les deux sont très proches : She might come to the party = il se peut qu'elle vienne.",
        "May sert aussi à demander une permission de façon très polie : May I come in? = puis-je entrer ?",
        "Récapitulatif des certitudes : will (sûr) > may (probable) > might (possible). It will rain / it may rain / it might rain.",
      ],
      example: [
        "It may snow tonight. → Il se peut qu'il neige cette nuit.",
        "I might go to the cinema, I'm not sure. → J'irai peut-être au cinéma, je ne suis pas sûr.",
        "May I ask you a question? → Puis-je vous poser une question ?",
      ],
      tip: "Pour traduire « peut-être », pense modal plutôt qu'adverbe : « il viendra peut-être » = he may come / he might come, plus naturel que « maybe he will come » à l'écrit.",
    },
  ],
  exercises: [
    {
      id: "e4mod-1",
      level: 1,
      type: "qcm",
      question: "Complète : « She can ___ very fast. »",
      choices: ["to run", "runs", "run", "running"],
      answer: 2,
      explanation:
        "Après un modal, on utilise toujours la base verbale sans to et sans -s : She can run very fast. « Can to run » et « can runs » sont les deux calques classiques à éviter.",
      hint: "Après un modal : base verbale, rien d'autre.",
    },
    {
      id: "e4mod-2",
      level: 1,
      type: "qcm",
      question: "Que signifie « You mustn't touch this. » ?",
      choices: [
        "Tu n'es pas obligé de toucher ça.",
        "Il est interdit de toucher ça.",
        "Tu devrais toucher ça.",
        "Tu peux toucher ça.",
      ],
      answer: 1,
      explanation:
        "Mustn't exprime une interdiction : You mustn't touch this = il est interdit de toucher ça, tu ne dois surtout pas. « Tu n'es pas obligé » se dirait don't have to : c'est le grand piège de ce chapitre.",
      hint: "Mustn't = panneau d'interdiction.",
    },
    {
      id: "e4mod-3",
      level: 1,
      type: "truefalse",
      question: "La phrase « He musts go home. » est correcte.",
      answer: false,
      explanation:
        "Faux ! Un modal ne prend jamais de -s, même à la 3e personne du singulier : He must go home. C'est l'une des trois règles d'or des modaux (pas de -s, pas de to, pas de do).",
      hint: "Les modaux prennent-ils un -s à la 3e personne ?",
    },
    {
      id: "e4mod-4",
      level: 1,
      type: "input",
      question: "Complète avec le modal du conseil : « You ___ drink more water. » (un mot)",
      answer: "should",
      explanation:
        "Pour donner un conseil (« tu devrais »), on utilise should : You should drink more water = tu devrais boire plus d'eau. Must serait une obligation, beaucoup plus fort qu'un conseil.",
      hint: "« Tu devrais » : quel modal recommande sans imposer ?",
    },
    {
      id: "e4mod-5",
      level: 2,
      type: "qcm",
      question: "Complète : « The museum is free, you ___ pay. »",
      choices: ["mustn't", "don't have to", "shouldn't", "can't"],
      answer: 1,
      explanation:
        "Le musée est gratuit : payer n'est pas interdit, c'est simplement inutile. Absence d'obligation = don't have to : you don't have to pay = tu n'as pas besoin de payer. Mustn't voudrait dire qu'il est interdit de payer, ce qui n'a pas de sens ici.",
      hint: "Est-ce interdit de payer, ou juste pas obligatoire ?",
    },
    {
      id: "e4mod-6",
      level: 2,
      type: "qcm",
      question: "Complète : « When my grandfather was young, he ___ swim across the lake. »",
      choices: ["can", "could", "must", "may"],
      answer: 1,
      explanation:
        "Le contexte est au passé (when he was young) : le passé de can est could → he could swim across the lake = il pouvait traverser le lac à la nage. Can ne s'utilise qu'au présent.",
      hint: "Contexte passé : quel est le passé de can ?",
    },
    {
      id: "e4mod-7",
      level: 2,
      type: "input",
      question: "Complète avec la forme négative contractée de can : « I ___ hear you. » (un seul mot)",
      answer: "can't",
      accept: ["cannot"],
      explanation:
        "La négation de can est cannot, contractée en can't : I can't hear you = je ne t'entends pas. Attention, la forme longue s'écrit en un seul mot : cannot (et pas « can not »).",
      hint: "Can + not, contracté avec une apostrophe.",
    },
    {
      id: "e4mod-8",
      level: 2,
      type: "input",
      question: "Traduis « Puis-je entrer ? » avec may (trois mots, sans point d'interrogation).",
      answer: "may i come in",
      accept: ["may i enter"],
      explanation:
        "May I come in? est la formule polie pour demander la permission d'entrer. May + sujet + base verbale : pas de do, pas de to. C'est plus formel que Can I come in?",
      hint: "May + I + le verbe « entrer » (come in).",
    },
    {
      id: "e4mod-9",
      level: 3,
      type: "qcm",
      question: "Quelle phrase exprime une possibilité (peut-être) ?",
      choices: [
        "She must be at home.",
        "She might be at home.",
        "She has to be at home.",
        "She can't be at home.",
      ],
      answer: 1,
      explanation:
        "Might exprime la possibilité : She might be at home = elle est peut-être chez elle. Must be exprime au contraire une quasi-certitude (« elle est forcément chez elle ») et can't be une impossibilité (« elle ne peut pas être chez elle »).",
      hint: "« Peut-être » : may/might, must ou can't ?",
    },
    {
      id: "e4mod-10",
      level: 3,
      type: "input",
      question: "Complète avec deux mots : « In my school, we are not ___ ___ wear caps in class. » (avoir le droit de)",
      answer: "allowed to",
      explanation:
        "« Avoir le droit de » se dit be allowed to : we are not allowed to wear caps = nous n'avons pas le droit de porter des casquettes. C'est l'équivalent de la permission, utilisable à tous les temps, contrairement à can/may.",
      hint: "Be ___ to : la permission version « règlement ».",
    },
    {
      id: "e4mod-11",
      level: 3,
      type: "truefalse",
      question: "« You don't have to shout » et « You mustn't shout » ont le même sens.",
      answer: false,
      explanation:
        "Faux ! You don't have to shout = tu n'as pas besoin de crier (pas d'obligation, je t'entends très bien). You mustn't shout = il est interdit de crier. La négation de l'obligation et l'interdiction sont deux idées très différentes : c'est LE piège des modaux pour un francophone.",
      hint: "Absence d'obligation ou interdiction : est-ce pareil ?",
    },
    {
      id: "e4mod-12",
      level: 3,
      type: "input",
      question: "Traduis : « Tu devrais lui demander. » (utilise ask her, quatre mots)",
      answer: "you should ask her",
      explanation:
        "You should ask her = tu devrais lui demander. Should + base verbale (ask), sans to. Remarque l'ordre : ask her (demander à elle) — l'anglais n'ajoute pas de préposition, on ne dit pas « ask to her ».",
      hint: "Conseil = should + base verbale ; « demander à quelqu'un » = ask someone, sans to.",
    },
  ],
};
