import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "volumes-solides",
  num: 14,
  title: "Volumes et solides",
  domain: "grandeurs",
  icon: "Box",
  teaser: "Reconnaître les solides, plier des patrons et calculer combien de cubes tiennent dans une boîte.",
  objectives: [
    "Je sais reconnaître et nommer les solides usuels",
    "Je connais le vocabulaire : face, arête, sommet",
    "Je sais reconnaître un patron de cube ou de pavé droit",
    "Je sais calculer le volume d'un cube et d'un pavé droit, et faire le lien avec les litres",
  ],
  lesson: [
    {
      title: "Reconnaître les solides",
      paragraphs: [
        "Un solide est un objet en trois dimensions : il a une longueur, une largeur et une hauteur. Autour de toi, tout est solide : un dé, une boîte de céréales, un ballon…",
        "Les solides usuels à connaître : le cube (comme un dé), le pavé droit (comme une boîte à chaussures), le cylindre (comme une boîte de conserve), la pyramide (comme celles d'Égypte), le cône (comme un cornet de glace) et la boule (comme un ballon).",
        "On distingue deux familles : les polyèdres, dont toutes les faces sont plates (cube, pavé droit, pyramide), et les solides qui ont des surfaces courbes (cylindre, cône, boule).",
      ],
      example: [
        "Un dé à jouer → cube.",
        "Une brique de lait → pavé droit.",
        "Un rouleau d'essuie-tout → cylindre.",
      ],
      tip: "Pour chaque solide, trouve un objet de ta maison qui a sa forme : c'est le meilleur moyen de les retenir tous.",
    },
    {
      title: "Faces, arêtes et sommets",
      paragraphs: [
        "Pour décrire un polyèdre, on utilise trois mots : une face est une surface plate qui le délimite, une arête est le segment où deux faces se rencontrent, et un sommet est le point où plusieurs arêtes se rejoignent.",
        "Le pavé droit est le solide vedette de la 6e : il possède 6 faces rectangulaires, 12 arêtes et 8 sommets. Ses faces opposées sont identiques deux à deux.",
        "Le cube est un pavé droit particulier : ses 6 faces sont des carrés tous identiques. Il a lui aussi 12 arêtes et 8 sommets.",
      ],
      example: [
        "Sur une boîte à chaussures (pavé droit) :",
        "• le couvercle et le fond sont deux faces identiques,",
        "• chaque bord droit est une arête (il y en a 12),",
        "• chaque coin est un sommet (il y en a 8).",
      ],
      tip: "Retiens le trio du pavé droit : 6 faces, 12 arêtes, 8 sommets. Vérifie-le en comptant sur une vraie boîte !",
      figure: "pave-droit",
    },
    {
      title: "Les patrons",
      paragraphs: [
        "Un patron est un dessin à plat qui, une fois découpé et plié, forme un solide. C'est exactement ce qu'on obtient en dépliant complètement une boîte en carton.",
        "Un patron de cube est formé de 6 carrés identiques, mais attention : toutes les dispositions de 6 carrés ne se plient pas en cube ! Par exemple, 6 carrés alignés ne fonctionnent pas. Pour la culture : il existe exactement 11 patrons de cube différents.",
        "Un patron de pavé droit est formé de 6 rectangles, identiques deux à deux : les faces opposées du pavé doivent se retrouver dans le patron.",
      ],
      example: [
        "La « croix » formée de 4 carrés en colonne et 2 carrés de part et d'autre est le patron de cube le plus connu.",
        "En le pliant mentalement, chaque carré devient une face du cube.",
      ],
      tip: "Pour vérifier un patron, plie-le dans ta tête face par face. Si deux carrés viennent se superposer, ce n'est pas un patron valable.",
    },
    {
      title: "Le volume : compter des cubes",
      paragraphs: [
        "Le volume d'un solide mesure la place qu'il occupe dans l'espace. Pour le mesurer, on choisit un cube unité (par exemple un cube de 1 cm de côté, qui a un volume de 1 cm³) et on compte combien de ces cubes remplissent le solide.",
        "Pour un pavé droit, pas besoin de compter un par un : on compte les cubes d'une couche (longueur × largeur), puis on multiplie par le nombre de couches (la hauteur). D'où les formules : volume du pavé droit = L × l × h et volume du cube = c × c × c.",
      ],
      example: [
        "Un pavé de 5 cm de long, 4 cm de large et 3 cm de haut :",
        "une couche contient 5 × 4 = 20 cubes de 1 cm³,",
        "et il y a 3 couches : V = 20 × 3 = 60 cm³.",
      ],
      tip: "Le petit ³ te rappelle qu'on multiplie 3 longueurs : c'est la marque des volumes, comme le ² est celle des aires.",
    },
    {
      title: "Unités de volume et contenance",
      paragraphs: [
        "Les volumes se mesurent en cm³, dm³, m³… Attention : d'une unité de volume à la suivante, on multiplie par 1 000 (et non par 10) : 1 dm³ = 1 000 cm³ et 1 m³ = 1 000 dm³.",
        "Le lien magique avec les contenances : 1 L = 1 dm³ et 1 mL = 1 cm³. Un litre, c'est exactement le volume d'un cube de 1 dm (10 cm) de côté. C'est ce qui permet de passer d'un volume calculé en cm³ à des litres.",
      ],
      example: [
        "Une brique de 1 L a un volume de 1 dm³ = 1 000 cm³.",
        "Un aquarium de 60 000 cm³ contient 60 000 ÷ 1 000 = 60 L d'eau.",
      ],
      tip: "Retiens l'égalité en trois morceaux : 1 L = 1 dm³ = 1 000 cm³. Elle débloque presque tous les problèmes d'aquarium, de bouteille et de piscine.",
    },
  ],
  exercises: [
    {
      id: "vol-1",
      level: 1,
      type: "qcm",
      question: "Quel solide possède 6 faces carrées toutes identiques ?",
      choices: ["Le pavé droit", "Le cube", "La pyramide", "Le cylindre"],
      answer: 1,
      explanation:
        "C'est le cube : 6 faces carrées identiques, 12 arêtes et 8 sommets. Le pavé droit a aussi 6 faces, mais ce sont des rectangles qui ne sont pas tous identiques. C'est pour cela qu'on dit que le cube est un pavé droit « particulier ».",
      hint: "Pense à un dé à jouer.",
    },
    {
      id: "vol-2",
      level: 1,
      type: "input",
      question: "Combien d'arêtes possède un pavé droit ?",
      answer: "12",
      explanation:
        "Un pavé droit possède 12 arêtes : 4 pour le tour du dessus, 4 pour le tour du dessous, et 4 verticales qui les relient. Retiens le trio : 6 faces, 12 arêtes, 8 sommets.",
      hint: "Compte sur une boîte : le tour du haut, le tour du bas, et les arêtes debout.",
    },
    {
      id: "vol-3",
      level: 1,
      type: "truefalse",
      question: "Un pavé droit possède 8 sommets.",
      answer: true,
      explanation:
        "Vrai ! Les sommets sont les « coins » du pavé : 4 en haut et 4 en bas, soit 8 en tout. Le pavé droit a 6 faces, 12 arêtes et 8 sommets.",
    },
    {
      id: "vol-4",
      level: 1,
      type: "qcm",
      question: "Quel est le volume d'un cube de 3 cm de côté ?",
      choices: ["9 cm³", "12 cm³", "27 cm³", "6 cm³"],
      answer: 2,
      explanation:
        "V = c × c × c = 3 × 3 × 3 = 27 cm³. Le piège 9 cm³ vient de 3 × 3 : ce serait l'aire d'une face (en cm²). Pour un volume, on multiplie bien trois longueurs.",
      hint: "Un volume, c'est côté × côté × côté.",
    },
    {
      id: "vol-5",
      level: 2,
      type: "input",
      question:
        "Un pavé droit mesure 5 cm de long, 4 cm de large et 3 cm de haut. Calcule son volume. Réponse en cm³.",
      answer: "60",
      explanation:
        "V = L × l × h = 5 × 4 × 3 = 60 cm³. On peut le voir comme un empilement : chaque couche contient 5 × 4 = 20 cubes de 1 cm³, et il y a 3 couches, donc 20 × 3 = 60 cubes.",
      hint: "Multiplie les trois dimensions.",
    },
    {
      id: "vol-6",
      level: 2,
      type: "qcm",
      question: "À quel volume correspond exactement 1 L ?",
      choices: ["1 cm³", "1 dm³", "1 m³", "10 cm³"],
      answer: 1,
      explanation:
        "1 L = 1 dm³, c'est-à-dire le volume d'un cube de 1 dm (10 cm) de côté, soit 1 000 cm³. Retiens aussi : 1 mL = 1 cm³. C'est le pont entre les volumes et les contenances.",
      hint: "Un litre tient dans un cube de 10 cm de côté.",
    },
    {
      id: "vol-7",
      level: 2,
      type: "truefalse",
      question: "Il existe exactement 11 patrons de cube différents.",
      answer: true,
      explanation:
        "Vrai ! C'est un résultat de culture mathématique : parmi toutes les façons de disposer 6 carrés à plat, exactement 11 se plient en cube. Par exemple, 6 carrés alignés en ruban ne fonctionnent pas : certaines faces se superposeraient.",
    },
    {
      id: "vol-8",
      level: 2,
      type: "input",
      question:
        "On empile des petits cubes de 1 cm de côté pour former un pavé droit de 4 cubes de long, 3 cubes de large et 2 cubes de haut. Combien de petits cubes utilise-t-on en tout ?",
      answer: "24",
      explanation:
        "Une couche contient 4 × 3 = 12 cubes. Il y a 2 couches : 12 × 2 = 24 cubes. C'est exactement l'idée de la formule du volume : V = L × l × h = 4 × 3 × 2 = 24 cm³.",
      hint: "Compte d'abord les cubes d'une seule couche.",
    },
    {
      id: "vol-9",
      level: 3,
      type: "input",
      question:
        "Un aquarium a la forme d'un pavé droit de 50 cm de long, 30 cm de large et 40 cm de haut. Combien de litres d'eau faut-il pour le remplir entièrement ? Réponse en L.",
      answer: "60",
      explanation:
        "Volume : V = 50 × 30 × 40 = 60 000 cm³. On convertit en litres grâce à 1 L = 1 000 cm³ : 60 000 ÷ 1 000 = 60 L. Le piège serait de diviser par 100 : c'est bien 1 000 cm³ qui font un litre, car 1 L = 1 dm³ = 10 × 10 × 10 cm³.",
      hint: "Calcule le volume en cm³, puis utilise 1 L = 1 000 cm³.",
    },
    {
      id: "vol-10",
      level: 3,
      type: "truefalse",
      question:
        "Dans une boîte cubique de 10 cm d'arête, on peut ranger exactement 8 cubes de 5 cm d'arête.",
      answer: true,
      explanation:
        "Vrai ! Dans chaque direction (longueur, largeur, hauteur), on peut placer 10 ÷ 5 = 2 cubes, soit 2 × 2 × 2 = 8 cubes en tout. Vérification par les volumes : la boîte fait 10 × 10 × 10 = 1 000 cm³, chaque cube fait 5 × 5 × 5 = 125 cm³, et 8 × 125 = 1 000 cm³ : la boîte est remplie exactement. Attention : 8 cubes, pas 2 — on double dans les trois directions !",
      hint: "Combien de cubes tiennent dans chaque direction ?",
    },
    {
      id: "vol-11",
      level: 3,
      type: "qcm",
      question:
        "Un pavé droit a un volume de 72 cm³. Sa longueur mesure 6 cm et sa largeur 4 cm. Quelle est sa hauteur ?",
      choices: ["3 cm", "2 cm", "4 cm", "12 cm"],
      answer: 0,
      explanation:
        "On part de la formule V = L × l × h : 72 = 6 × 4 × h, donc 72 = 24 × h. On cherche le nombre qui, multiplié par 24, donne 72 : h = 72 ÷ 24 = 3 cm. On vérifie : 6 × 4 × 3 = 72 cm³, c'est bon.",
      hint: "Calcule d'abord 6 × 4, puis divise le volume par ce résultat.",
    },
    {
      id: "vol-12",
      level: 3,
      type: "input",
      question:
        "Une brique de jus de fruits a la forme d'un pavé droit de 8 cm de long, 5 cm de large et 25 cm de haut. Calcule son volume. Réponse en cm³.",
      answer: "1000",
      accept: ["1 000"],
      explanation:
        "V = 8 × 5 × 25 = 40 × 25 = 1 000 cm³. Et comme 1 000 cm³ = 1 dm³ = 1 L, cette brique contient exactement 1 litre de jus ! Les fabricants choisissent souvent des dimensions qui tombent juste sur des contenances rondes.",
      hint: "Commence par 8 × 5, puis multiplie par 25.",
    },
  ],
  videos: [
    { title: "Calculer un volume - CM2 / Sixième", youtubeId: "Cf-0bYH7wj0", channel: "Yvan Monka" },
    { title: "Calculer le volume d'un pavé droit - Cinquième", youtubeId: "JqS7YBLtksw", channel: "Yvan Monka" },
  ],
};
