import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr5-accord-participe",
  subject: "francais",
  grade: "5e",
  num: 5,
  title: "L'accord du participe passé",
  domain: "grandeurs",
  domainLabel: "Orthographe",
  icon: "Link2",
  teaser: "Être, avoir, infinitif : trois situations, trois règles à maîtriser.",
  objectives: [
    "Je sais accorder le participe passé employé avec être",
    "Je sais que le participe passé employé avec avoir ne s'accorde pas avec le sujet",
    "Je découvre l'accord avec le COD placé avant avoir sur des cas simples",
    "Je ne confonds plus le participe en -é et l'infinitif en -er",
  ],
  lesson: [
    {
      title: "Participe en -é ou infinitif en -er ? LE piège",
      paragraphs: [
        "« Manger » et « mangé » se prononcent pareil : c'est l'erreur d'orthographe la plus fréquente en français. Pour choisir, remplace le verbe par un verbe du 3e groupe comme « prendre/pris » ou « vendre/vendu » : eux ne se prononcent pas pareil !",
        "Si tu peux dire « prendre », écris l'infinitif -er. Si tu peux dire « pris », écris le participe -é.",
      ],
      example: [
        "« Il va (manger / mangé ?) » → « il va prendre » → infinitif : « il va manger ».",
        "« Il a (manger / mangé ?) » → « il a pris » → participe : « il a mangé ».",
      ],
      tip: "Après une préposition (à, de, pour, sans…), c'est toujours l'infinitif : « sans manger », « pour gagner ». Après un auxiliaire, toujours le participe.",
    },
    {
      title: "Avec être : accord avec le sujet",
      paragraphs: [
        "Quand le participe passé est employé avec l'auxiliaire être, il s'accorde en genre et en nombre avec le sujet, exactement comme un adjectif.",
        "Cela concerne les verbes qui se conjuguent avec être (aller, venir, partir, arriver, rester, tomber…) et les phrases à la voix passive.",
      ],
      example: [
        "« Léa est arrivée en avance. » (sujet féminin singulier → -e)",
        "« Les invités sont repartis tard. » (masculin pluriel → -s)",
        "« Les portes sont fermées. » (féminin pluriel → -es)",
      ],
      tip: "Avec être, pose la question : QUI est arrivé, parti, tombé… ? La réponse est le sujet, et le participe prend son genre et son nombre.",
    },
    {
      title: "Avec avoir : pas d'accord avec le sujet",
      paragraphs: [
        "Quand le participe passé est employé avec l'auxiliaire avoir, il ne s'accorde JAMAIS avec le sujet. C'est la règle numéro un, celle qui évite le plus d'erreurs.",
        "On écrit donc : « elles ont chanté », « nous avons fini », « les feuilles ont jauni » — participe invariable, quel que soit le sujet.",
      ],
      example: [
        "« Elle a visité Rome. » (pas de -e)",
        "« Ils ont visité Rome. » (pas de -s)",
        "Comparaison : « Ils sont partis » (être → accord) / « Ils ont dormi » (avoir → pas d'accord).",
      ],
      tip: "Réflexe : dès que tu vois l'auxiliaire avoir, bloque ta main ! N'accorde pas avec le sujet, même si le pluriel te démange.",
    },
    {
      title: "Découverte : le COD placé avant avoir",
      paragraphs: [
        "Il existe un cas particulier que tu approfondiras en 4e : avec avoir, le participe s'accorde avec le complément d'objet direct (COD) quand celui-ci est placé AVANT le verbe.",
        "Compare : « Il a offert des fleurs » — le COD « des fleurs » est après, pas d'accord. « Les fleurs qu'il a offertes » — le COD « que » (= les fleurs) est avant, le participe s'accorde : offertes.",
        "Ce cas se rencontre surtout après le pronom relatif « que » et avec les pronoms la, les, l' placés devant le verbe : « ces photos, je les ai triées ».",
      ],
      example: [
        "« Il a rangé ses affaires. » → COD après → rangé.",
        "« Les affaires qu'il a rangées. » → COD avant → rangées.",
      ],
      tip: "Demande-toi : « il a offert QUOI ? ». Si la réponse est déjà écrite AVANT le verbe, accorde avec elle. Si elle vient après (ou n'existe pas), n'accorde pas.",
    },
    {
      title: "La méthode en trois questions",
      paragraphs: [
        "Question 1 : est-ce un infinitif ? (test « prendre ») → -er, terminé. Question 2 : quel auxiliaire ? Être → accord avec le sujet. Question 3 : avoir → pas d'accord avec le sujet ; vérifie seulement si un COD est placé avant.",
        "Avec cette méthode, tu traites 100 % des cas du programme de 5e sans hésiter.",
      ],
      example: [
        "« Elles ont commencé à travailler. »",
        "« commencé » : test → « elles ont pris » → participe ; auxiliaire avoir, COD après → invariable. « travailler » : « à prendre » → infinitif.",
      ],
      tip: "Toujours dans cet ordre : infinitif ? auxiliaire ? COD avant ? Trois questions, zéro faute.",
    },
  ],
  exercises: [
    {
      id: "f5app-1",
      level: 1,
      type: "qcm",
      question: "Quelle phrase est correctement écrite ?",
      choices: [
        "Il faut ranger ta chambre.",
        "Il faut rangé ta chambre.",
        "Il faut rangée ta chambre.",
        "Il faut rangés ta chambre.",
      ],
      answer: 0,
      explanation:
        "Test de remplacement : « il faut prendre ta chambre » — on dit « prendre », pas « pris » → infinitif en -er : ranger. Après « il faut », comme après un verbe conjugué ou une préposition, on emploie l'infinitif.",
      hint: "Remplace par « prendre » ou « pris » : lequel sonne juste ?",
    },
    {
      id: "f5app-2",
      level: 1,
      type: "input",
      question: "Complète avec la bonne terminaison : « Marie est arriv... la première. » Écris la forme complète du participe.",
      answer: "arrivée",
      accept: ["arrivee"],
      explanation:
        "Auxiliaire être → le participe s'accorde avec le sujet « Marie », féminin singulier : arrivée. Avec être, le participe se comporte comme un adjectif.",
      hint: "Quel est l'auxiliaire ? Et qui est le sujet ?",
    },
    {
      id: "f5app-3",
      level: 1,
      type: "truefalse",
      question: "Avec l'auxiliaire avoir, le participe passé s'accorde toujours avec le sujet.",
      answer: false,
      explanation:
        "Faux, et c'est LA règle à retenir : avec avoir, le participe ne s'accorde jamais avec le sujet. « Elles ont chanté », sans accord. (Le seul accord possible avec avoir concerne un COD placé avant le verbe.)",
      hint: "« Elles ont chanté » ou « elles ont chantées » ?",
    },
    {
      id: "f5app-4",
      level: 1,
      type: "qcm",
      question: "« Les enfants sont (rentré / rentrés / rentrées) à cinq heures. » Quelle forme choisir ?",
      choices: ["rentré", "rentrés", "rentrées"],
      answer: 1,
      explanation:
        "Auxiliaire être → accord avec le sujet « les enfants », masculin pluriel → rentrés. « Rentrées » serait pour un sujet féminin pluriel, « rentré » pour un masculin singulier.",
      hint: "« Les enfants » : quel genre, quel nombre ?",
    },
    {
      id: "f5app-5",
      level: 2,
      type: "input",
      question: "Complète : « Elles ont visit... le musée toute la matinée. » Écris la forme complète du verbe visiter.",
      answer: "visité",
      accept: ["visite"],
      explanation:
        "Auxiliaire avoir → pas d'accord avec le sujet « elles ». Le COD « le musée » est placé après le verbe → pas d'accord non plus. On écrit donc « visité », invariable. Le piège : le sujet féminin pluriel donne envie d'écrire « visitées », mais avoir bloque l'accord.",
      hint: "Avoir + COD placé après : que dit la règle ?",
    },
    {
      id: "f5app-6",
      level: 2,
      type: "qcm",
      question: "Quelle phrase contient une erreur ?",
      choices: [
        "Ils sont montés au sommet.",
        "Elles ont fini leurs devoirs.",
        "Elle a tombée dans l'escalier.",
        "Nous sommes restés chez nous.",
      ],
      answer: 2,
      explanation:
        "Double erreur dans « Elle a tombée » : tomber se conjugue avec être, et l'accord suit alors le sujet → « Elle est tombée ». Les trois autres phrases respectent les règles : être → accord, avoir → pas d'accord.",
      hint: "Vérifie d'abord l'auxiliaire de chaque verbe.",
    },
    {
      id: "f5app-7",
      level: 2,
      type: "input",
      question: "Complète avec -er ou -é : « Avant de mang..., ils se sont lavé les mains. » Écris la forme complète du verbe manger.",
      answer: "manger",
      explanation:
        "« Avant de » est une préposition : après une préposition (à, de, pour, sans…), le verbe est toujours à l'infinitif → manger. Test : « avant de prendre » fonctionne, « avant de pris » non.",
      hint: "Que trouve-t-on toujours après une préposition comme « de » ?",
    },
    {
      id: "f5app-8",
      level: 2,
      type: "truefalse",
      question: "Dans « La porte est fermée depuis ce matin », le participe « fermée » est correctement accordé.",
      answer: true,
      explanation:
        "Vrai ! Avec être, le participe s'accorde avec le sujet : « la porte », féminin singulier → fermée. C'est une tournure passive, et la règle de l'auxiliaire être s'applique exactement pareil.",
    },
    {
      id: "f5app-9",
      level: 3,
      type: "qcm",
      question: "« Les photos qu'il a (pris / prise / prises) sont magnifiques. » Quelle forme choisir ?",
      choices: ["pris", "prise", "prises"],
      answer: 2,
      explanation:
        "Auxiliaire avoir, mais le COD « que » (= les photos) est placé AVANT le verbe : le participe s'accorde avec lui → féminin pluriel : prises. C'est le fameux cas du COD antéposé : « il a pris quoi ? » → « que », mis pour « les photos », déjà écrit avant.",
      hint: "« Il a pris QUOI ? » La réponse est-elle placée avant ou après le verbe ?",
    },
    {
      id: "f5app-10",
      level: 3,
      type: "input",
      question: "Complète : « Ces lettres, je les ai relu... hier soir. » Écris la forme complète du participe de relire.",
      answer: "relues",
      explanation:
        "Le COD « les » (= ces lettres, féminin pluriel) est placé avant le verbe : avec avoir, le participe s'accorde alors avec ce COD → relues. Si l'on disait « j'ai relu ces lettres », le COD serait après et le participe resterait invariable.",
      hint: "« J'ai relu QUOI ? » → « les », c'est-à-dire ces lettres. Où est placé ce COD ?",
    },
    {
      id: "f5app-11",
      level: 3,
      type: "qcm",
      question: "Dans quelle phrase TOUS les verbes sont-ils correctement écrits ?",
      choices: [
        "Elle a décidé de participer au concours.",
        "Elle a décider de participé au concours.",
        "Elle a décidé de participé au concours.",
        "Elle a décider de participer au concours.",
      ],
      answer: 0,
      explanation:
        "Après l'auxiliaire avoir → participe : « a décidé » (« a pris » fonctionne). Après la préposition « de » → infinitif : « de participer » (« de prendre » fonctionne). La phrase 1 est la seule qui respecte les deux règles à la fois.",
      hint: "Applique le test « prendre/pris » aux deux verbes, l'un après l'autre.",
    },
    {
      id: "f5app-12",
      level: 3,
      type: "input",
      question: "« Mes cousines sont ven... nous voir et nous avons prépar... un gâteau. » Écris les deux participes, séparés par un espace.",
      answer: "venues préparé",
      accept: ["venues prepare"],
      explanation:
        "Premier verbe : venir avec être → accord avec « mes cousines », féminin pluriel → venues. Second verbe : préparer avec avoir, COD « un gâteau » placé après → invariable → préparé. Une même phrase, deux auxiliaires, deux règles !",
      hint: "Traite chaque verbe séparément : quel auxiliaire pour chacun ?",
    },
  ],
  videos: [
    {
      title: "L'accord du participe passé : être et avoir - Français 3e - Les Bons Profs",
      youtubeId: "PYLSUSeEND0",
      channel: "Les Bons Profs",
    },
  ],
};
