import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "m4-triangle-milieux",
  subject: "maths",
  grade: "4e",
  num: 12,
  title: "Droite des milieux et triangles égaux",
  domain: "geometrie",
  icon: "GitCommitHorizontal",
  teaser:
    "Deux milieux, une droite magique : des théorèmes puissants pour démontrer sans mesurer.",
  objectives: [
    "Je sais énoncer et utiliser le théorème des milieux (les trois énoncés)",
    "Je sais calculer une longueur avec la droite des milieux",
    "Je sais reconnaître des triangles égaux et utiliser les cas d'égalité",
    "Je découvre la configuration des triangles emboîtés (premiers pas vers Thalès)",
    "Je sais rédiger une démonstration pas à pas (données, propriété, conclusion)",
  ],
  lesson: [
    {
      title: "Le théorème des milieux : premier énoncé",
      paragraphs: [
        "Dans un triangle, si une droite passe par les milieux de deux côtés, alors elle est parallèle au troisième côté. C'est le premier énoncé du théorème des milieux.",
        "Autrement dit : dans le triangle ABC, si I est le milieu de [AB] et J le milieu de [AC], alors la droite (IJ) est parallèle à la droite (BC). Ce théorème permet de PROUVER un parallélisme sans équerre ni mesure.",
      ],
      example: [
        "Dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC].",
        "D'après le théorème des milieux, (IJ) est parallèle à (BC).",
      ],
      tip: "Deux milieux dans un triangle ? Réflexe immédiat : pense au théorème des milieux, il y a sûrement un parallélisme ou une longueur à trouver.",
    },
    {
      title: "Deuxième énoncé : la longueur moitié",
      paragraphs: [
        "Le segment qui joint les milieux de deux côtés d'un triangle mesure la moitié du troisième côté. C'est le deuxième énoncé du théorème des milieux.",
        "Dans le triangle ABC, si I est le milieu de [AB] et J le milieu de [AC], alors IJ = BC ÷ 2. Ce résultat marche aussi dans l'autre sens pour les calculs : BC = 2 × IJ.",
      ],
      example: [
        "Dans le triangle ABC, I est le milieu de [AB], J est le milieu de [AC] et BC = 9 cm.",
        "D'après le théorème des milieux, IJ = BC ÷ 2 = 9 ÷ 2 = 4,5 cm.",
        "Inversement, si IJ = 3,2 cm, alors BC = 2 × 3,2 = 6,4 cm.",
      ],
      tip: "Demande-toi toujours dans quel sens tu utilises la formule : le petit segment (entre les milieux) vaut la MOITIÉ du grand côté, jamais l'inverse.",
    },
    {
      title: "Troisième énoncé : la réciproque",
      paragraphs: [
        "Troisième énoncé (la réciproque) : dans un triangle, si une droite passe par le milieu d'un côté et est parallèle à un deuxième côté, alors elle coupe le troisième côté en son milieu.",
        "Dans le triangle ABC, si I est le milieu de [AB] et si la droite qui passe par I est parallèle à (BC), alors cette droite coupe [AC] en son milieu. Ce troisième énoncé sert à PROUVER qu'un point est un milieu.",
        "Résumé des trois énoncés : deux milieux donnent un parallélisme (énoncé 1) et une longueur moitié (énoncé 2) ; un milieu plus une parallèle donnent un autre milieu (énoncé 3).",
      ],
      example: [
        "Dans le triangle ABC, I est le milieu de [AB]. La droite passant par I et parallèle à (BC) coupe [AC] en J.",
        "D'après la réciproque du théorème des milieux, J est le milieu de [AC].",
      ],
      tip: "Choisis le bon énoncé selon ce que tu CHERCHES : un parallélisme → énoncé 1 ; une longueur → énoncé 2 ; un milieu → énoncé 3 (la réciproque).",
    },
    {
      title: "Les triangles égaux",
      paragraphs: [
        "Deux triangles sont égaux (on dit aussi superposables) lorsque leurs côtés sont deux à deux de même longueur et leurs angles deux à deux de même mesure. En pratique, il suffit de vérifier trois éléments bien choisis : ce sont les cas d'égalité, que tu découvres cette année.",
        "Cas 1 : deux triangles qui ont leurs trois côtés deux à deux de même longueur sont égaux. Cas 2 : deux triangles qui ont un angle de même mesure compris entre deux côtés de mêmes longueurs sont égaux. Cas 3 : deux triangles qui ont un côté de même longueur compris entre deux angles de mêmes mesures sont égaux.",
        "Les triangles égaux servent à démontrer que deux longueurs ou deux angles sont égaux : on prouve d'abord que les triangles sont égaux, puis on en déduit l'égalité des éléments qui se correspondent.",
      ],
      example: [
        "Les triangles ABC et DEF vérifient : AB = DE = 5 cm, l'angle BAC égale l'angle EDF (50° chacun), et AC = DF = 4 cm.",
        "L'angle de 50° est compris entre les deux côtés connus : d'après le deuxième cas d'égalité, les triangles ABC et DEF sont égaux.",
        "On peut en déduire que BC = EF, sans mesurer.",
      ],
      tip: "Dans le cas « un angle entre deux côtés », l'angle doit être COMPRIS entre les deux côtés cités, c'est-à-dire formé par ces deux côtés. Vérifie-le sur la figure avant de conclure.",
    },
    {
      title: "Vers Thalès : les triangles emboîtés",
      paragraphs: [
        "La configuration du théorème des milieux cache une idée plus générale que tu approfondiras en 3e avec le théorème de Thalès. Observe les triangles emboîtés : dans le triangle ABC, avec I milieu de [AB] et J milieu de [AC], le petit triangle AIJ est emboîté dans le grand triangle ABC.",
        "Le petit triangle est une réduction du grand : chaque côté du triangle AIJ mesure la moitié du côté correspondant du triangle ABC. On dit que le rapport de réduction vaut un demi : AI ÷ AB = AJ ÷ AC = IJ ÷ BC = 1/2.",
        "En 3e, le théorème de Thalès généralisera cette idée à n'importe quel rapport (un tiers, deux cinquièmes…), pas seulement un demi. Pour l'instant, retiens l'image : un petit triangle emboîté dans un grand, avec des côtés parallèles, est une réduction du grand.",
      ],
      example: [
        "Dans le triangle ABC : AB = 8 cm, AC = 6 cm, BC = 10 cm. I est le milieu de [AB], J celui de [AC].",
        "Le triangle AIJ a pour côtés : AI = 4 cm, AJ = 3 cm et IJ = 5 cm.",
        "Chaque côté du petit triangle vaut la moitié du côté correspondant : le rapport de réduction est 1/2.",
      ],
      tip: "Repère la configuration « triangles emboîtés » : un sommet commun (A), deux points sur les côtés, et deux droites parallèles. C'est elle que tu retrouveras dans le théorème de Thalès en 3e.",
    },
    {
      title: "Démontrer pas à pas",
      paragraphs: [
        "Une démonstration bien rédigée suit toujours le même plan en trois temps : les DONNÉES (ce que dit l'énoncé, ou ce qu'on a déjà démontré), la PROPRIÉTÉ utilisée (citée précisément), et la CONCLUSION.",
        "Exemple de rédaction : « Je sais que I est le milieu de [AB] et que J est le milieu de [AC]. Or, dans un triangle, si une droite passe par les milieux de deux côtés, alors elle est parallèle au troisième côté. Donc (IJ) est parallèle à (BC). » Les trois mots-clés « Je sais que… Or… Donc… » structurent le raisonnement.",
        "Ne mesure jamais sur la figure pour justifier : une figure peut être imprécise ou volontairement fausse. Seules les données de l'énoncé et les propriétés du cours ont le droit d'apparaître dans une démonstration.",
      ],
      example: [
        "Je sais que : I est le milieu de [AB], J est le milieu de [AC] et BC = 7 cm.",
        "Or : dans un triangle, le segment joignant les milieux de deux côtés mesure la moitié du troisième côté.",
        "Donc : IJ = 7 ÷ 2 = 3,5 cm.",
      ],
      tip: "« Je sais que… Or… Donc… » : trois étapes, trois lignes. Si l'une des trois manque, la démonstration est incomplète et perd des points.",
    },
  ],
  exercises: [
    {
      id: "m4mil-1",
      level: 1,
      type: "qcm",
      question:
        "Dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC]. Que peut-on affirmer ?",
      choices: [
        "(IJ) est parallèle à (BC)",
        "(IJ) est perpendiculaire à (BC)",
        "IJ = BC",
        "I est le milieu de [BC]",
      ],
      answer: 0,
      explanation:
        "D'après le théorème des milieux : dans un triangle, la droite qui passe par les milieux de deux côtés est parallèle au troisième côté. Ici les milieux sont sur [AB] et [AC], donc (IJ) est parallèle au troisième côté, (BC). Le théorème ne parle jamais de perpendicularité.",
      hint: "Deux milieux dans un triangle : quel théorème s'applique, et que dit-il ?",
    },
    {
      id: "m4mil-2",
      level: 1,
      type: "input",
      question:
        "Dans le triangle ABC, I est le milieu de [AB], J est le milieu de [AC] et BC = 12 cm. Calcule IJ, en cm.",
      answer: "6",
      explanation:
        "D'après le théorème des milieux, le segment qui joint les milieux de deux côtés mesure la moitié du troisième côté : IJ = BC ÷ 2 = 12 ÷ 2 = 6 cm. Piège : c'est bien le PETIT segment qui vaut la moitié du grand côté, pas l'inverse.",
      hint: "Le segment des milieux mesure la moitié du troisième côté.",
    },
    {
      id: "m4mil-3",
      level: 1,
      type: "truefalse",
      question:
        "Deux triangles dont les trois côtés sont deux à deux de même longueur sont égaux.",
      answer: true,
      explanation:
        "Vrai ! C'est le premier cas d'égalité des triangles : trois côtés deux à deux de même longueur suffisent pour que les deux triangles soient superposables. Leurs angles sont alors automatiquement égaux deux à deux, sans avoir besoin de les mesurer.",
      hint: "C'est l'un des trois cas d'égalité vus dans la leçon.",
    },
    {
      id: "m4mil-4",
      level: 1,
      type: "qcm",
      question:
        "Dans une démonstration, à quoi servent les mots « Je sais que… Or… Donc… » ?",
      choices: [
        "À structurer les données, la propriété et la conclusion",
        "À rendre le texte plus joli",
        "À remplacer les calculs",
        "À décrire la figure en détail",
      ],
      answer: 0,
      explanation:
        "« Je sais que » introduit les données de l'énoncé, « Or » introduit la propriété du cours utilisée, « Donc » introduit la conclusion. Ces trois étapes forment le squelette de toute démonstration : si l'une manque, le raisonnement est incomplet.",
      hint: "Chaque mot correspond à une étape précise du raisonnement.",
    },
    {
      id: "m4mil-5",
      level: 2,
      type: "input",
      question:
        "Dans le triangle ABC, I est le milieu de [AB], J est le milieu de [AC] et IJ = 4,5 cm. Calcule BC, en cm.",
      answer: "9",
      explanation:
        "D'après le théorème des milieux, IJ = BC ÷ 2. Donc BC = 2 × IJ = 2 × 4,5 = 9 cm. Piège : ici on connaît le petit segment et on cherche le grand côté, donc on MULTIPLIE par 2 ; diviser donnerait 2,25 cm, ce qui est absurde car BC doit être plus long que IJ.",
      hint: "Cette fois, c'est le grand côté que tu cherches : dans quel sens va le calcul ?",
    },
    {
      id: "m4mil-6",
      level: 2,
      type: "qcm",
      question:
        "Dans le triangle ABC, I est le milieu de [AB] et la droite passant par I, parallèle à (BC), coupe [AC] en J. Quel énoncé du théorème des milieux permet de conclure que J est le milieu de [AC] ?",
      choices: [
        "La réciproque : un milieu et une parallèle donnent un autre milieu",
        "Le premier énoncé : deux milieux donnent une parallèle",
        "Le deuxième énoncé : le segment des milieux vaut la moitié",
        "Aucun : il faut mesurer sur la figure",
      ],
      answer: 0,
      explanation:
        "On connaît UN milieu (I) et UN parallélisme, et on cherche à prouver qu'un point est un milieu : c'est exactement la réciproque du théorème des milieux. Les deux premiers énoncés partent de DEUX milieux connus, ce qui n'est pas la situation ici. Et on ne justifie jamais en mesurant sur la figure.",
      hint: "Regarde ce qui est connu (un milieu, une parallèle) et ce qui est cherché (un milieu).",
    },
    {
      id: "m4mil-7",
      level: 2,
      type: "qcm",
      question:
        "Les triangles ABC et DEF vérifient AB = DE, AC = DF et l'angle BAC égale l'angle EDF. Pourquoi sont-ils égaux ?",
      choices: [
        "L'angle égal est compris entre les deux paires de côtés égaux",
        "Ils ont trois angles égaux",
        "Ils ont le même périmètre",
        "On ne peut pas conclure",
      ],
      answer: 0,
      explanation:
        "L'angle BAC est formé par les côtés [AB] et [AC], et l'angle EDF par [DE] et [DF] : l'angle égal est bien COMPRIS entre les deux paires de côtés de mêmes longueurs. C'est le deuxième cas d'égalité. Attention : trois angles égaux ne suffisent pas (deux triangles de tailles différentes peuvent avoir les mêmes angles), et le périmètre ne prouve rien.",
      hint: "Repère les côtés qui forment l'angle BAC : sont-ils justement les côtés cités ?",
    },
    {
      id: "m4mil-8",
      level: 2,
      type: "truefalse",
      question:
        "Deux triangles qui ont leurs trois angles deux à deux de même mesure sont forcément égaux.",
      answer: false,
      explanation:
        "Faux ! Deux triangles peuvent avoir exactement les mêmes angles mais des tailles différentes : par exemple deux triangles équilatéraux de côtés 2 cm et 10 cm ont tous leurs angles à 60°, sans être superposables. Les angles fixent la FORME, pas la TAILLE : les cas d'égalité exigent toujours au moins une longueur.",
      hint: "Imagine deux triangles équilatéraux, un petit et un grand.",
    },
    {
      id: "m4mil-9",
      level: 3,
      type: "input",
      question:
        "Dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC]. Le triangle AIJ a un périmètre de 14 cm. Quel est le périmètre du triangle ABC, en cm ?",
      answer: "28",
      explanation:
        "Le triangle AIJ est une réduction du triangle ABC de rapport 1/2 : chacun de ses côtés (AI, AJ et IJ) vaut la moitié du côté correspondant de ABC (AB, AC et BC). Le périmètre du grand triangle vaut donc le double : 2 × 14 = 28 cm. Piège : le rapport 1/2 s'applique à CHAQUE longueur, donc aussi à leur somme, le périmètre.",
      hint: "Chaque côté du petit triangle vaut la moitié d'un côté du grand : que devient la somme ?",
    },
    {
      id: "m4mil-10",
      level: 3,
      type: "qcm",
      question:
        "Un charpentier veut renforcer une ferme triangulaire ABC en fixant une barre entre le milieu I de [AB] et le milieu J de [AC]. Le côté BC mesure 6,40 m. Quelle longueur de barre doit-il prévoir ?",
      choices: ["3,20 m", "6,40 m", "12,80 m", "4,80 m"],
      answer: 0,
      explanation:
        "La barre [IJ] joint les milieux de deux côtés du triangle : d'après le théorème des milieux, IJ = BC ÷ 2 = 6,40 ÷ 2 = 3,20 m. Le théorème garantit aussi que la barre sera parallèle à la base (BC), ce qui est précieux en charpente. Piège : 12,80 m correspond au double, c'est-à-dire à la formule appliquée dans le mauvais sens.",
      hint: "La barre joint deux milieux : applique le théorème des milieux au côté BC.",
    },
    {
      id: "m4mil-11",
      level: 3,
      type: "truefalse",
      question:
        "Dans le triangle ABC, avec I milieu de [AB] et J milieu de [AC], on a AI ÷ AB = AJ ÷ AC = IJ ÷ BC = 1/2.",
      answer: true,
      explanation:
        "Vrai ! Le petit triangle AIJ est une réduction du grand triangle ABC de rapport 1/2 : AI = AB ÷ 2, AJ = AC ÷ 2 et, d'après le théorème des milieux, IJ = BC ÷ 2. Les trois quotients valent donc tous 1/2. C'est exactement l'idée que le théorème de Thalès généralisera en 3e avec d'autres rapports.",
      hint: "Compare chaque côté du triangle AIJ au côté correspondant du triangle ABC.",
    },
    {
      id: "m4mil-12",
      level: 3,
      type: "qcm",
      question:
        "Pour démontrer que (IJ) est parallèle à (BC), un élève écrit : « Sur ma figure, les deux droites ont l'air parallèles, donc elles le sont. » Pourquoi cette justification est-elle refusée ?",
      choices: [
        "Une figure ne prouve rien : il faut citer une propriété du cours",
        "Il fallait utiliser une équerre plus précise",
        "Il fallait écrire la phrase en trois lignes",
        "La conclusion est fausse",
      ],
      answer: 0,
      explanation:
        "En géométrie, une figure sert à comprendre et à conjecturer, jamais à démontrer : elle peut être imprécise ou volontairement trompeuse. La bonne rédaction cite les données (I et J sont les milieux) puis la propriété du cours (le théorème des milieux) avant de conclure. Mesurer avec une équerre, même très précise, reste une constatation, pas une démonstration.",
      hint: "Quelle différence entre constater sur un dessin et démontrer avec une propriété ?",
    },
  ],
};
