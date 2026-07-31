import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "fr4-subjonctif",
  subject: "francais",
  grade: "4e",
  num: 3,
  title: "Le subjonctif présent",
  domain: "geometrie",
  domainLabel: "Conjugaison",
  icon: "Sparkle",
  teaser: "Que je sois, que tu fasses, qu'il aille : former et employer le mode de l'envisagé.",
  objectives: [
    "Je sais à quoi sert le subjonctif et ce qui le distingue de l'indicatif",
    "Je sais former le subjonctif présent des verbes réguliers",
    "Je connais les subjonctifs irréguliers fréquents : être, avoir, faire, aller, pouvoir, vouloir",
    "Je sais employer le subjonctif après il faut que, vouloir que, bien que, pour que…",
    "Je sais choisir entre indicatif et subjonctif selon l'expression qui précède",
  ],
  lesson: [
    {
      title: "À quoi sert le subjonctif ?",
      paragraphs: [
        "L'indicatif présente une action comme réelle, certaine : « Tu viens demain. » Le subjonctif la présente comme envisagée : souhaitée, exigée, redoutée, incertaine.",
        "Le subjonctif apparaît presque toujours dans une proposition subordonnée introduite par « que » : « Je veux que tu viennes. »",
        "On ne choisit pas le subjonctif au hasard : c'est l'expression de la principale (il faut que, je veux que, bien que…) qui l'impose.",
      ],
      example: [
        "Indicatif : « Je sais que tu viens. » → fait présenté comme certain.",
        "Subjonctif : « Je veux que tu viennes. » → fait seulement souhaité.",
      ],
      tip: "Pour repérer un subjonctif, dis la conjugaison avec « que » devant : que je sois, que tu fasses… C'est sa marque de fabrique.",
    },
    {
      title: "La formation régulière",
      paragraphs: [
        "Radical : on part de la 3e personne du pluriel du présent de l'indicatif (ils chantent → chant-, ils finissent → finiss-, ils prennent → prenn-).",
        "Terminaisons pour tous les verbes : -e, -es, -e, -ions, -iez, -ent.",
        "Résultat : que je chante, que tu chantes, qu'il chante, que nous chantions, que vous chantiez, qu'ils chantent. Pour un verbe du 2e groupe : que je finisse, que nous finissions.",
        "Aux personnes « nous » et « vous », le subjonctif présent ressemble à l'imparfait de l'indicatif : que nous finissions, que vous finissiez.",
      ],
      example: [
        "Ils finissent → radical finiss- → il faut que je finisse, que nous finissions.",
        "Ils prennent → radical prenn- → il faut que tu prennes, que vous preniez.",
      ],
      tip: "Pour les verbes en -er, le subjonctif ressemble au présent de l'indicatif (que je chante / je chante) : c'est aux autres groupes et aux irréguliers qu'on le voit vraiment.",
    },
    {
      title: "Les irréguliers à connaître par cœur",
      paragraphs: [
        "Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient.",
        "Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient.",
        "Faire : que je fasse… ; aller : que j'aille, que nous allions ; pouvoir : que je puisse ; vouloir : que je veuille, que nous voulions.",
        "Attention aux formes en -ions et -iez d'aller et vouloir : que nous allions, que vous vouliez (elles reprennent le radical de « nous » du présent).",
      ],
      example: [
        "Il faut que je sois à l'heure. / Je veux que tu aies confiance.",
        "Bien qu'il fasse froid, nous sortons. / Il faut que vous alliez au CDI.",
      ],
      tip: "Piège d'orthographe : « qu'il ait » (avoir, avec t) et non « qu'il est » (être à l'indicatif). Si tu peux remplacer par « soit », c'est bien le subjonctif d'avoir qu'il te faut : « ait ».",
    },
    {
      title: "Les emplois du subjonctif",
      paragraphs: [
        "Après les expressions de nécessité ou d'obligation : il faut que, il est nécessaire que… « Il faut que tu partes. »",
        "Après les verbes de volonté, de souhait ou de sentiment : vouloir que, souhaiter que, avoir peur que, être content que… « Je souhaite que tu réussisses. »",
        "Après certaines conjonctions : bien que, quoique (concession), pour que, afin que (but), avant que (temps). « Bien qu'il pleuve, nous jouons dehors. »",
      ],
      example: [
        "Il faut que nous soyons prudents. → nécessité.",
        "Elle travaille pour que ses projets aboutissent. → but.",
      ],
      tip: "Retiens la liste des déclencheurs : il faut que, vouloir que, souhaiter que, bien que, pour que, avant que. Dès que tu en vois un, subjonctif obligatoire !",
    },
    {
      title: "Indicatif ou subjonctif ?",
      paragraphs: [
        "Les verbes qui expriment une certitude ou une déclaration sont suivis de l'indicatif : je pense que, je sais que, je crois que, il affirme que… « Je pense qu'il viendra. »",
        "Les expressions de volonté, de nécessité, de doute ou de sentiment sont suivies du subjonctif : je veux que, il faut que, je doute que… « Je doute qu'il vienne. »",
        "Cas piège : « espérer que » est suivi de l'indicatif, même si c'est un souhait ! On écrit « J'espère qu'il viendra », jamais « qu'il vienne ».",
      ],
      example: [
        "Je sais qu'il est là. → indicatif (certitude).",
        "Il faut qu'il soit là. → subjonctif (nécessité).",
      ],
      tip: "En cas de doute, teste avec « faire » : si tu dis naturellement « que tu fasses », c'est le subjonctif ; si tu dis « que tu fais », c'est l'indicatif.",
    },
  ],
  exercises: [
    {
      id: "f4sbj-1",
      level: 1,
      type: "qcm",
      question: "« Il faut que tu (finir) tes devoirs. » Quelle est la forme correcte ?",
      choices: ["finis", "finiras", "finisses", "finissais"],
      answer: 2,
      explanation:
        "« Il faut que » impose le subjonctif : radical finiss- (de « ils finissent ») + terminaison -es → « que tu finisses ». Le piège : « finis » est l'indicatif présent ; après « il faut que », il est incorrect.",
      hint: "« Il faut que » est un déclencheur automatique de subjonctif.",
    },
    {
      id: "f4sbj-2",
      level: 1,
      type: "input",
      question: "Conjugue « être » au subjonctif présent : « Il faut que je ... à l'heure. »",
      answer: "sois",
      explanation:
        "Être est irrégulier au subjonctif : que je sois, que tu sois, qu'il soit… La règle : après « il faut que », subjonctif obligatoire. Le piège : ne pas écrire « suis », qui est l'indicatif présent.",
      hint: "La série commence par : que je s…, que tu s…, qu'il s…",
    },
    {
      id: "f4sbj-3",
      level: 1,
      type: "truefalse",
      question: "Après « il faut que », on emploie le subjonctif.",
      answer: true,
      explanation:
        "Vrai ! « Il faut que » exprime la nécessité : c'est l'un des déclencheurs automatiques du subjonctif (« il faut que tu viennes »). La règle générale : nécessité, volonté, souhait, doute et sentiment appellent le subjonctif.",
      hint: "Dirais-tu « il faut que tu fais » ou « il faut que tu fasses » ?",
    },
    {
      id: "f4sbj-4",
      level: 1,
      type: "qcm",
      question: "Quelle est la terminaison du subjonctif présent avec « nous » : « que nous chant... » ?",
      choices: ["-ons", "-ions", "-ions pas, -ons si le verbe est en -er", "-âmes"],
      answer: 1,
      explanation:
        "Les terminaisons du subjonctif présent sont -e, -es, -e, -ions, -iez, -ent pour tous les verbes : « que nous chantions ». Le piège : ne pas confondre avec l'indicatif présent « nous chantons » ; avec « que » devant, il faut le i de -ions.",
      hint: "Au subjonctif, « nous » et « vous » ressemblent à l'imparfait.",
    },
    {
      id: "f4sbj-5",
      level: 2,
      type: "input",
      question: "Conjugue « faire » au subjonctif présent : « Je veux que tu ... un effort. »",
      answer: "fasses",
      explanation:
        "« Vouloir que » impose le subjonctif, et « faire » est irrégulier : que je fasse, que tu fasses, qu'il fasse… Le piège : n'oublie pas le s de la 2e personne du singulier (« que tu fasses »), et n'emploie surtout pas « fais », qui est l'indicatif.",
      hint: "Le radical irrégulier de « faire » au subjonctif est fass-.",
    },
    {
      id: "f4sbj-6",
      level: 2,
      type: "qcm",
      question: "« Il faut qu'il ... chez le médecin. » (aller) Quelle est la forme correcte ?",
      choices: ["va", "ira", "aille", "allait"],
      answer: 2,
      explanation:
        "« Aller » est irrégulier au subjonctif : que j'aille, que tu ailles, qu'il aille (mais que nous allions, que vous alliez). Le piège : « va » est l'indicatif présent, impossible après « il faut que ».",
      hint: "C'est une forme irrégulière qui commence par « ai- ».",
    },
    {
      id: "f4sbj-7",
      level: 2,
      type: "truefalse",
      question: "« Bien que » est suivi de l'indicatif.",
      answer: false,
      explanation:
        "Faux ! « Bien que » (comme « quoique ») exprime la concession et impose toujours le subjonctif : « Bien qu'il fasse froid, nous sortons. » Le piège : on entend souvent « bien qu'il fait froid » à l'oral, mais c'est incorrect à l'écrit.",
      hint: "Dit-on « bien qu'il soit malade » ou « bien qu'il est malade » ?",
    },
    {
      id: "f4sbj-8",
      level: 2,
      type: "qcm",
      question: "Quelle phrase contient un verbe au subjonctif ?",
      choices: [
        "Je sais que tu viens ce soir.",
        "Il faut que nous soyons courageux.",
        "Elle affirme que le bus est parti.",
        "Je crois que tu as raison.",
      ],
      answer: 1,
      explanation:
        "« Soyons » est le subjonctif présent d'être, imposé par « il faut que ». Les trois autres phrases emploient l'indicatif car savoir, affirmer et croire expriment une certitude ou une déclaration. La règle : c'est l'expression de la principale qui décide du mode.",
      hint: "Cherche le déclencheur de nécessité parmi les débuts de phrases.",
    },
    {
      id: "f4sbj-9",
      level: 3,
      type: "qcm",
      question: "« Il est important que je ... répondre à toutes les questions. » (pouvoir) Quelle est la forme correcte ?",
      choices: ["peux", "pourrai", "puisse", "pouvais"],
      answer: 2,
      explanation:
        "« Il est important que » exprime la nécessité → subjonctif. « Pouvoir » est irrégulier : que je puisse, que tu puisses… Le piège : « peux » (indicatif) est la faute la plus fréquente ; le radical du subjonctif est puiss-.",
      hint: "Le radical irrégulier est puiss-.",
    },
    {
      id: "f4sbj-10",
      level: 3,
      type: "input",
      question: "Conjugue « avoir » au subjonctif présent : « Je souhaite que vous ... de bons résultats. »",
      answer: "ayez",
      explanation:
        "« Souhaiter que » impose le subjonctif ; « avoir » est irrégulier : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient. Le piège : « avez » est l'indicatif ; au subjonctif, le radical devient ay-.",
      hint: "La série est : que nous ayons, que vous ay…",
    },
    {
      id: "f4sbj-11",
      level: 3,
      type: "truefalse",
      question: "La phrase « J'espère qu'il vienne demain » est correcte.",
      answer: false,
      explanation:
        "Faux ! C'est le piège du chapitre : « espérer que » est suivi de l'indicatif, même s'il exprime un souhait. On écrit « J'espère qu'il viendra demain ». Retiens l'exception : souhaiter que + subjonctif, mais espérer que + indicatif.",
      hint: "« Espérer que » est une exception célèbre parmi les verbes de souhait.",
    },
    {
      id: "f4sbj-12",
      level: 3,
      type: "qcm",
      question: "Quelle expression est suivie de l'indicatif (et non du subjonctif) ?",
      choices: ["Il faut que", "Je pense que", "Bien que", "Avant que"],
      answer: 1,
      explanation:
        "« Je pense que » exprime une opinion présentée comme certaine → indicatif : « Je pense qu'il viendra. » Les trois autres imposent le subjonctif : il faut que (nécessité), bien que (concession), avant que (temps). Le piège : à la forme négative, « je ne pense pas que » peut, lui, appeler le subjonctif.",
      hint: "Teste chaque expression avec « faire » : laquelle accepte « que tu fais » ?",
    },
  ],
};
