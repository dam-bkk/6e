import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-homophones-avances",
  subject: "francais",
  grade: "5e",
  num: 6,
  title: "Homophones : niveau supérieur",
  domain: "grandeurs",
  domainLabel: "Orthographe",
  icon: "Ear",
  teaser: "Quel/qu'elle, leur/leurs, tout/tous… la substitution qui sauve.",
  objectives: [
    "Je sais distinguer quel(s)/quelle(s) et qu'elle(s)",
    "Je sais choisir entre leur et leurs, tout, tous et toute(s)",
    "Je sais distinguer si/s'y, ni/n'y, sans/s'en, dans/d'en",
    "Je sais distinguer quand, quant à et qu'en",
    "Je connais une technique de substitution pour chaque paire",
  ],
  lesson: [
    {
      title: "Quel(s), quelle(s) ou qu'elle(s) ?",
      paragraphs: [
        "« Quel » (et ses formes quels, quelle, quelles) est un déterminant : il accompagne un nom et s'accorde avec lui. « Qu'elle(s) » est la contraction de « que + elle(s) » : il y a un pronom sujet caché.",
        "La substitution : remplace par « qu'il ». Si la phrase reste correcte, écris « qu'elle » (en deux morceaux). Sinon, c'est « quel/quelle ».",
      ],
      example: [
        "« Quelle heure est-il ? » → « qu'il heure est-il ? » impossible → quelle.",
        "« Je crois qu'elle dort. » → « je crois qu'il dort » correct → qu'elle.",
      ],
      tip: "Le test « qu'il » marche à tous les coups : c'est le premier réflexe à avoir devant [kɛl].",
    },
    {
      title: "Leur ou leurs ?",
      paragraphs: [
        "Devant un nom, « leur » est un déterminant possessif : il s'accorde avec le nom → « leur maison », « leurs maisons ».",
        "Devant un verbe, « leur » est un pronom, l'équivalent pluriel de « lui » : il est TOUJOURS invariable → « je leur parle », jamais « je leurs parle ».",
        "La substitution : remplace par « lui ». Si ça fonctionne, c'est le pronom → toujours « leur » sans s.",
      ],
      example: [
        "« Je leur ai téléphoné. » → « je lui ai téléphoné » correct → leur invariable.",
        "« Ils rangent leurs cahiers. » → plusieurs cahiers → leurs.",
      ],
      tip: "Leur + verbe = jamais de s. Leur + nom = accord avec le nom.",
    },
    {
      title: "Tout, tous, toute(s) ?",
      paragraphs: [
        "Devant un groupe nominal, « tout » s'accorde avec le nom : tout le village, toute la classe, tous les élèves, toutes les filles.",
        "« Tous » se prononce [tus] quand il est pronom (« ils sont tous là ») et [tu] quand il est déterminant (« tous les jours »).",
        "La substitution : mets le groupe au singulier. « Tous les élèves » → « tout l'élève » : si le singulier est « tout », le pluriel masculin est « tous ».",
      ],
      example: [
        "« Toutes les fenêtres sont ouvertes. » (fenêtres : féminin pluriel)",
        "« Ils ont tous réussi. » (pronom, prononcé [tus])",
      ],
      tip: "Accorde « tout » comme un déterminant : regarde le nom qui suit, son genre et son nombre décident.",
    },
    {
      title: "Si/s'y, ni/n'y, sans/s'en, dans/d'en",
      paragraphs: [
        "Ces quatre paires cachent le même piège : la deuxième forme contient un pronom (s', n', d') suivi de « y » ou « en ». Elle apparaît donc toujours devant un verbe.",
        "« S'y » = se + y (« il s'y habitue »), « n'y » = ne + y (« je n'y vais pas »), « s'en » = se + en (« elle s'en souvient »), « d'en » = de + en (« il vient d'en parler »).",
        "La substitution : mets la phrase à la 1re personne. « Il s'y rend » → « je m'y rends » : si tu entends « m' », c'est la forme en deux mots.",
      ],
      example: [
        "« Si tu viens, préviens-moi. » (condition → si)",
        "« Il ne s'y attendait pas. » → « je ne m'y attendais pas » → s'y.",
        "« Elle est partie sans rien dire. » / « Elle s'en va. » → « je m'en vais » → s'en.",
      ],
      tip: "Sans = préposition (suivie d'un nom ou d'un infinitif). S'en, s'y, n'y, d'en = toujours collés à un verbe conjugué.",
    },
    {
      title: "Quand, quant à ou qu'en ?",
      paragraphs: [
        "« Quand » exprime le temps : remplace-le par « lorsque » ou « à quel moment ». « Quant à » signifie « en ce qui concerne » et est toujours suivi de à, au ou aux. « Qu'en » = que + en : « qu'en penses-tu ? » = « que penses-tu de cela ? ».",
        "Trois orthographes, trois sens : le moment, le sujet dont on parle, la contraction que + en.",
      ],
      example: [
        "« Quand pars-tu ? » → « à quel moment pars-tu ? » → quand.",
        "« Quant à moi, je reste. » → « en ce qui me concerne » → quant à.",
        "« Qu'en dis-tu ? » → « que dis-tu de cela ? » → qu'en.",
      ],
      tip: "« Quant » n'existe jamais seul : il est toujours suivi de à, au ou aux. Si tu ne peux pas dire « en ce qui concerne », ce n'est pas lui.",
    },
  ],
  exercises: [
    {
      id: "f5hom-1",
      level: 1,
      type: "qcm",
      question: "« ... surprise de te voir ici ! » Quelle forme convient ?",
      choices: ["Quel", "Quelle", "Qu'elle", "Quels"],
      answer: 1,
      explanation:
        "Test : « qu'il surprise » est impossible → ce n'est pas la contraction. C'est donc le déterminant, accordé avec « surprise », féminin singulier → quelle.",
      hint: "Essaie de remplacer par « qu'il ». Ça fonctionne ?",
    },
    {
      id: "f5hom-2",
      level: 1,
      type: "input",
      question: "Complète avec leur ou leurs : « Le professeur ... rend les copies. »",
      answer: "leur",
      explanation:
        "Ici, le mot est placé devant un verbe (« rend ») : c'est le pronom, équivalent de « lui » → « le professeur lui rend les copies » fonctionne. Le pronom « leur » est toujours invariable : jamais de s devant un verbe.",
      hint: "Remplace par « lui » : la phrase reste-t-elle correcte ?",
    },
    {
      id: "f5hom-3",
      level: 1,
      type: "qcm",
      question: "« ... les élèves sont arrivés à l'heure. » Quelle forme convient ?",
      choices: ["Tout", "Tous", "Toute", "Toutes"],
      answer: 1,
      explanation:
        "« Tout » s'accorde avec le nom qui suit : « les élèves », masculin pluriel → tous. Vérification par le singulier : « tout l'élève » → au pluriel masculin, c'est « tous ».",
      hint: "Quel est le genre et le nombre de « les élèves » ?",
    },
    {
      id: "f5hom-4",
      level: 1,
      type: "truefalse",
      question: "On écrit : « Je ne sais pas si il viendra » (sans apostrophe).",
      answer: false,
      explanation:
        "Faux ! Devant « il », « si » s'élide : « je ne sais pas s'il viendra ». Attention, cette élision ne se fait que devant il et ils : on écrit « si elle viendra », sans apostrophe.",
      hint: "Que devient « si » devant « il » ?",
    },
    {
      id: "f5hom-5",
      level: 2,
      type: "input",
      question: "Complète avec s'y ou si : « Ce parc est magnifique : on ... promène avec plaisir. »",
      answer: "s'y",
      accept: ["s y", "sy"],
      explanation:
        "Test de la 1re personne : « je m'y promène » → on entend « m' » → c'est la forme en deux mots : s'y (= se + y, où « y » remplace « dans ce parc »). « Si » exprimerait une condition, ce qui n'a pas de sens ici.",
      hint: "Mets la phrase à la 1re personne : « je ... promène ».",
    },
    {
      id: "f5hom-6",
      level: 2,
      type: "qcm",
      question: "« ... à ta sœur, elle est déjà au courant. » Quelle forme convient ?",
      choices: ["Quand", "Quant", "Qu'en"],
      answer: 1,
      explanation:
        "On peut remplacer par « en ce qui concerne ta sœur » → c'est « quant à ». Rappel : « quant » est toujours suivi de à, au ou aux. « Quand » (temps) et « qu'en » (que + en) n'ont pas de sens ici.",
      hint: "Peux-tu remplacer par « en ce qui concerne » ?",
    },
    {
      id: "f5hom-7",
      level: 2,
      type: "input",
      question: "Complète avec sans ou s'en : « Elle a réussi ... aucune aide. »",
      answer: "sans",
      explanation:
        "« Sans » est une préposition qui exprime l'absence, suivie ici du groupe nominal « aucune aide ». « S'en » ne s'emploie que collé à un verbe (« elle s'en souvient » → « je m'en souviens »). Ici, pas de verbe après → sans.",
      hint: "Le mot est-il suivi d'un verbe conjugué ou d'un groupe nominal ?",
    },
    {
      id: "f5hom-8",
      level: 2,
      type: "qcm",
      question: "« Je crois ... viendront demain. » Quelle forme convient ?",
      choices: ["quelles", "qu'elles", "quels", "qu'elle"],
      answer: 1,
      explanation:
        "Test : « je crois qu'ils viendront » fonctionne → c'est la contraction que + elles → qu'elles. Le verbe « viendront » est au pluriel, donc « qu'elles » avec s, pas « qu'elle ».",
      hint: "Remplace par « qu'ils » : la phrase tient-elle debout ?",
    },
    {
      id: "f5hom-9",
      level: 3,
      type: "input",
      question: "Complète avec ni ou n'y : « Ce restaurant ne sert ... viande ... poisson, et je ... retournerai pas. » Écris les trois mots dans l'ordre, séparés par des espaces.",
      answer: "ni ni n'y",
      accept: ["ni ni n y", "ni ni ny"],
      explanation:
        "« Ni… ni » relie deux éléments dans une négation double : ni viande ni poisson. Le troisième trou est devant un verbe et « y » remplace un lieu (« dans ce restaurant ») : ne + y → n'y (« je n'y retournerai pas »). La clé : « n'y » contient toujours le petit mot « y » qui remplace un lieu ou une chose.",
      hint: "« Ni » va souvent par deux ; « n'y » cache un « y » qui remplace un lieu.",
    },
    {
      id: "f5hom-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase est entièrement correcte ?",
      choices: [
        "Ils ont rangé leur affaires dans leurs casier.",
        "Ils ont rangé leurs affaires dans leur casier.",
        "Ils ont rangé leurs affaires dans leurs casier.",
        "Ils ont rangé leur affaires dans leur casier.",
      ],
      answer: 1,
      explanation:
        "« Leurs affaires » : plusieurs affaires → s. « Leur casier » : un seul casier chacun → singulier. Devant un nom, « leur » s'accorde avec ce nom ; il faut donc examiner chaque nom séparément.",
      hint: "Combien d'affaires ? Combien de casiers ?",
    },
    {
      id: "f5hom-11",
      level: 3,
      type: "input",
      question: "Complète avec quand, quant ou qu'en : « ... penses-tu de ce projet ? Dis-le-moi ... tu seras décidé. » Écris les deux mots dans l'ordre, séparés par un espace.",
      answer: "qu'en quand",
      accept: ["qu en quand", "quen quand"],
      explanation:
        "Premier trou : « que penses-tu de ce projet ? » → que + en → qu'en. Second trou : « lorsque tu seras décidé » fonctionne → quand (temps). « Quant » est exclu : il exige « à » derrière lui.",
      hint: "Premier trou : « que… de cela ». Second trou : remplaçable par « lorsque ».",
    },
    {
      id: "f5hom-12",
      level: 3,
      type: "truefalse",
      question: "Dans « Elles sont toutes venues d'en bas », les mots « toutes » et « d'en » sont correctement écrits.",
      answer: true,
      explanation:
        "Vrai ! « Toutes » s'accorde avec « elles » (féminin pluriel). « D'en bas » = de + en bas : la contraction est correcte (« dans bas » n'aurait aucun sens). Deux homophones délicats, deux bonnes réponses.",
      hint: "Essaie de remplacer « d'en » par « dans » : la phrase garde-t-elle son sens ?",
    },
  ],
};
