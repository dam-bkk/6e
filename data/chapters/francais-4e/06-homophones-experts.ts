import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-homophones-experts",
  subject: "francais",
  grade: "4e",
  num: 6,
  title: "Homophones : niveau expert",
  domain: "grandeurs",
  domainLabel: "Orthographe",
  icon: "Ear",
  teaser: "Quoique ou quoi que ? Censé ou sensé ? Les paires qui départagent les vrais experts de l'orthographe.",
  objectives: [
    "Je sais distinguer quoique (= bien que) et quoi que (= quelle que soit la chose que)",
    "Je sais distinguer plutôt / plus tôt et près de / prêt à",
    "Je sais distinguer davantage / d'avantage(s) et censé / sensé",
    "Je sais employer voire (= et même) sans le confondre avec le verbe voir",
    "Je sais distinguer le participe présent invariable de l'adjectif verbal (provoquant / provocant)",
  ],
  lesson: [
    {
      title: "Quoique / quoi que",
      paragraphs: [
        "« Quoique », en un seul mot, est une conjonction qui signifie « bien que » : elle introduit une concession. « Quoiqu'il soit jeune, il est très sage. »",
        "« Quoi que », en deux mots, signifie « quelle que soit la chose que » : « Quoi que tu dises, je ne changerai pas d'avis. »",
        "Le test : remplace par « bien que ». Si la phrase garde son sens, écris « quoique » en un mot ; sinon, écris « quoi que » en deux mots.",
        "Les deux expressions sont suivies du subjonctif : ce n'est donc pas le mode du verbe qui les distingue, mais uniquement le sens.",
      ],
      example: [
        "« Quoique fatigué, il sourit. » → bien que fatigué : un seul mot.",
        "« Quoi qu'il arrive, appelle-moi. » → quelle que soit la chose qui arrive : deux mots.",
      ],
      tip: "« Quoi qu'il en soit » s'écrit toujours en deux mots : impossible de dire « bien qu'il en soit ».",
    },
    {
      title: "Plutôt / plus tôt et près de / prêt à",
      paragraphs: [
        "« Plutôt », en un mot, exprime une préférence : « Je prendrai plutôt le train. » « Plus tôt », en deux mots, parle du temps et s'oppose à « plus tard » : « Lève-toi plus tôt. »",
        "Le test : si tu peux remplacer par « plus tard » (en changeant le sens), écris « plus tôt » en deux mots.",
        "« Près de » est une préposition qui indique la proximité (dans l'espace, le temps) ou une quantité approchée : « près de la gare », « près de cent personnes ». Il est invariable.",
        "« Prêt à » est un adjectif qui signifie « préparé à » : il s'accorde avec le nom → « il est prêt à partir », « elles sont prêtes à partir ».",
      ],
      example: [
        "« Le bus est passé plus tôt que prévu. » → contraire de « plus tard ».",
        "« Elle est prête à répondre. » → préparée : accord au féminin.",
        "« Il habite près du collège. » → proximité : invariable.",
      ],
      tip: "Mets la phrase au féminin : si le mot devient « prête », c'est « prêt à » ; si rien ne bouge, c'est « près de ».",
    },
    {
      title: "Davantage / d'avantage(s) et censé / sensé",
      paragraphs: [
        "« Davantage », en un mot, est un adverbe qui signifie « plus » : « Travaille davantage. » Il est invariable.",
        "« D'avantages », en deux mots, c'est la préposition « de » suivie du nom « avantage » (= bénéfice, atout) : « Ce métier offre beaucoup d'avantages. » Le test : remplace par « d'inconvénients » ; si ça fonctionne, c'est le nom.",
        "« Censé » signifie « supposé » : « Il est censé arriver à midi » (on suppose qu'il arrivera). Il est presque toujours suivi d'un infinitif.",
        "« Sensé » signifie « qui a du bon sens, raisonnable » : « une décision sensée ». Il vient de la famille de « sens ».",
      ],
      example: [
        "« Nul n'est censé ignorer la loi. » → supposé ignorer : censé.",
        "« C'est un garçon sensé. » → plein de bon sens : sensé.",
      ],
      tip: "Censé = supposé (les deux finissent par -sé et sont suivis d'un infinitif). Sensé = qui a du sens (même famille que « sens », « sensible »).",
    },
    {
      title: "Voir / voire",
      paragraphs: [
        "« Voir » est le verbe : « Je vais voir ce film. »",
        "« Voire », avec un e final, est un adverbe qui signifie « et même » : il renchérit sur ce qui précède. « Ce trajet prend une heure, voire deux. »",
        "Le test : remplace par « et même ». Si la phrase fonctionne, écris « voire » avec un e.",
      ],
      example: [
        "« Il faudra attendre des semaines, voire des mois. » → et même des mois.",
        "« Va voir qui sonne à la porte. » → verbe voir, pas de e final.",
      ],
      tip: "« Voire même » est un pléonasme à éviter : « voire » contient déjà l'idée de « même ».",
    },
    {
      title: "Participe présent ou adjectif verbal ?",
      paragraphs: [
        "Le participe présent exprime une action en train de se faire : il est invariable et peut avoir un complément. « Les élèves provoquant leurs camarades seront punis. »",
        "L'adjectif verbal exprime une qualité, un état : il s'accorde comme tout adjectif. « Une attitude provocante. »",
        "Certains couples changent aussi d'orthographe : provoquant / provocant, fatiguant / fatigant, convainquant / convaincant, différant / différent, précédant / précédent. Le participe garde la graphie du verbe (-quant, -guant), l'adjectif prend une forme en -cant, -gant ou -ent.",
        "Le test : mets le nom au féminin. Si le mot s'accorde (« une remarque provocante »), c'est l'adjectif verbal ; s'il reste invariable, c'est le participe présent. Après « en » (gérondif), c'est toujours le participe : « en provoquant ».",
      ],
      example: [
        "« Ce travail est fatigant. » → qualité : adjectif verbal, orthographe -gant.",
        "« En se fatiguant trop, il s'est blessé. » → action, après « en » : participe présent, orthographe -guant.",
      ],
      tip: "Après « en », jamais d'hésitation : c'est le participe présent, avec la graphie du verbe (provoquant, fatiguant, convainquant).",
    },
  ],
  exercises: [
    {
      id: "f4hom-1",
      level: 1,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Le facteur est passé ... que d'habitude ce matin. »",
      choices: ["plutôt", "plus tôt"],
      answer: 1,
      explanation:
        "On parle ici du temps : le facteur est passé plus tôt, c'est-à-dire le contraire de « plus tard » → deux mots. Le piège : « plutôt » en un mot exprime une préférence (« je prendrai plutôt un thé ») et ne peut pas s'opposer à « plus tard ».",
      hint: "Peux-tu remplacer par « plus tard » (en inversant le sens) ?",
    },
    {
      id: "f4hom-2",
      level: 1,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Après une heure d'échauffement, l'équipe est ... à jouer. »",
      choices: ["prête", "près"],
      answer: 0,
      explanation:
        "« Prêt à » signifie « préparé à » : c'est un adjectif, qui s'accorde avec « l'équipe » (féminin) → « prête à jouer ». Le piège : « près de » indiquerait la proximité et resterait invariable ; ici, le sens est bien « préparée ».",
      hint: "L'équipe est-elle « préparée à jouer » ou « à proximité de jouer » ?",
    },
    {
      id: "f4hom-3",
      level: 1,
      type: "truefalse",
      question: "« Censé » signifie « qui a du bon sens ».",
      answer: false,
      explanation:
        "Faux ! « Censé » signifie « supposé » : « il est censé venir ». C'est « sensé », de la famille de « sens », qui signifie « raisonnable, qui a du bon sens ». Le piège : les deux se prononcent exactement pareil ; seul le contexte les distingue.",
      hint: "Rapproche « censé » de « supposé » et « sensé » de « sens ».",
    },
    {
      id: "f4hom-4",
      level: 1,
      type: "input",
      question: "Complète avec voir ou voire : « Ce film est long, ... interminable. »",
      answer: "voire",
      explanation:
        "On peut remplacer par « et même » : « long, et même interminable » → « voire » avec un e final. Le piège : sans e, « voir » est le verbe (« va voir dehors ») et n'a aucun sens ici.",
      hint: "Essaie de remplacer le mot par « et même ».",
    },
    {
      id: "f4hom-5",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne orthographe : « ... tu fasses, je te soutiendrai. »",
      choices: ["Quoique", "Quoi que"],
      answer: 1,
      explanation:
        "Le sens est « quelle que soit la chose que tu fasses » → deux mots. Le test : « bien que tu fasses, je te soutiendrai » n'a aucun sens, donc « quoique » en un mot est impossible. Le piège : les deux formes sont suivies du subjonctif, ce qui ne t'aide pas ; seul le remplacement par « bien que » tranche.",
      hint: "Remplace par « bien que » : la phrase garde-t-elle un sens ?",
    },
    {
      id: "f4hom-6",
      level: 2,
      type: "input",
      question: "Complète avec près ou prêt : « La médiathèque se trouve tout ... de la mairie. »",
      answer: "près",
      accept: ["pres"],
      explanation:
        "Le sens est la proximité : la médiathèque est à côté de la mairie → « près de », invariable. Le piège : « prêt » signifierait « préparé » et s'accorderait ; le test du féminin échoue ici, on ne peut pas dire « la médiathèque est prête de la mairie ».",
      hint: "S'agit-il d'être « préparé » ou d'être « à côté » ?",
    },
    {
      id: "f4hom-7",
      level: 2,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Il faudrait lire ... pour enrichir son vocabulaire. »",
      choices: ["d'avantage", "davantage"],
      answer: 1,
      explanation:
        "Le sens est « lire plus » : « davantage » est un adverbe en un seul mot, invariable. Le piège : « d'avantages » en deux mots contient le nom « avantage » (= bénéfice) ; le test : « lire d'inconvénients » n'a aucun sens, donc ce n'est pas le nom.",
      hint: "Peux-tu remplacer le mot par « plus » ?",
    },
    {
      id: "f4hom-8",
      level: 2,
      type: "truefalse",
      question: "« Voire » avec un e final signifie « et même ».",
      answer: true,
      explanation:
        "Vrai ! « Voire » est un adverbe qui renchérit : « des heures, voire des jours » = « et même des jours ». Le piège : ne pas écrire « voire même », qui est un pléonasme, et ne pas confondre avec le verbe « voir » sans e.",
      hint: "Pense à la phrase « des heures, voire des jours ».",
    },
    {
      id: "f4hom-9",
      level: 3,
      type: "qcm",
      question: "Choisis la bonne orthographe : « En ... l'arbitre, ce joueur a écopé d'un carton rouge. »",
      choices: ["provocant", "provoquant"],
      answer: 1,
      explanation:
        "Après « en », on a toujours le participe présent (gérondif), qui garde la graphie du verbe provoquer → « en provoquant ». Le piège : « provocant » avec un c est l'adjectif verbal (« une attitude provocante ») ; il est impossible après « en ».",
      hint: "Quel petit mot précède ? Après « en », la forme est toujours la même.",
    },
    {
      id: "f4hom-10",
      level: 3,
      type: "input",
      question: "Complète avec censé ou sensé : « Nul n'est ... ignorer la loi. »",
      answer: "censé",
      accept: ["cense"],
      explanation:
        "Le sens est « supposé » : personne n'est supposé ignorer la loi → « censé ». Il est d'ailleurs suivi d'un infinitif (« ignorer »), construction typique de « censé ». Le piège : « sensé » (= raisonnable) qualifierait une personne ou une idée, pas une supposition.",
      hint: "Remplace par « supposé » : la phrase fonctionne-t-elle ?",
    },
    {
      id: "f4hom-11",
      level: 3,
      type: "qcm",
      question: "Choisis la bonne orthographe : « Les tarifs ... selon la saison, renseigne-toi avant de réserver. »",
      choices: ["différents", "différant"],
      answer: 1,
      explanation:
        "Ici le mot exprime une action (les tarifs diffèrent selon la saison) et a un complément (« selon la saison ») : c'est le participe présent, invariable, avec la graphie du verbe → « différant ». Le piège : « différents » est l'adjectif (« des goûts différents ») ; il exprimerait une qualité, pas une action en cours.",
      hint: "Le mot exprime-t-il une action (« qui diffèrent ») ou une simple qualité ?",
    },
    {
      id: "f4hom-12",
      level: 3,
      type: "input",
      question: "Complète en un ou deux mots : « ... déçu par le résultat, il a félicité son adversaire. » (= bien que)",
      answer: "quoique",
      explanation:
        "Le sens est « bien que déçu » : concession → « quoique » en un seul mot, directement suivi d'un adjectif. Le piège : « quoi que » en deux mots signifie « quelle que soit la chose que » et se construit avec un verbe (« quoi que tu fasses »), pas avec un adjectif seul.",
      hint: "L'indice entre parenthèses te donne le test du remplacement.",
    },
  ],
};
