import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-cultura",
  subject: "italien",
  grade: "5e",
  num: 8,
  title: "L'Italia e la sua cultura",
  domain: "nombres",
  domainLabel: "Cultura",
  icon: "MapPin",
  teaser: "L'heure, la botte italienne, la musique, le Carnaval de Venise… et tous les mots italiens que tu connais déjà.",
  objectives: [
    "Je sais demander et dire l'heure : Che ore sono? Sono le due",
    "Je connais les grandes villes d'Italie et la forme de la botte",
    "Je sais que l'italien est la langue de la musique : piano, allegro, opera",
    "Je connais des fêtes italiennes : le Carnevale de Venise, la Befana",
    "Je repère les mots italiens passés dans le français de tous les jours",
  ],
  lesson: [
    {
      title: "L'heure : Che ore sono?",
      paragraphs: [
        "Pour demander l'heure : « Che ore sono? » (quelle heure est-il ?, littéralement « quelles heures sont ? »).",
        "On répond avec « sono le » + le nombre : Sono le due (il est deux heures), Sono le dieci (il est dix heures). Le mot « ore » est sous-entendu.",
        "Exception : pour une heure, midi et minuit, on utilise « è » au singulier : È l'una (il est une heure), È mezzogiorno (il est midi), È mezzanotte (il est minuit).",
        "Les minutes s'ajoutent avec « e » : Sono le due e dieci (2 h 10). La demie : e mezza (Sono le tre e mezza, 3 h 30). Le quart : e un quarto.",
      ],
      example: [
        "— Che ore sono? → Quelle heure est-il ?",
        "— Sono le due. → Il est deux heures.",
        "È l'una. → Il est une heure.",
        "Sono le otto e mezza. → Il est huit heures et demie.",
        "È mezzogiorno! → Il est midi !",
      ],
      tip: "Sono le… presque toujours (pluriel, car il y a « plusieurs heures »), sauf trois cas au singulier : è l'una, è mezzogiorno, è mezzanotte. C'est logique : une heure, un midi, un minuit !",
    },
    {
      title: "La botte italienne : villes et géographie",
      paragraphs: [
        "Regarde une carte : l'Italie a la forme d'une botte ! Le « stivale » (la botte) a même un talon (les Pouilles) et une pointe (la Calabre) qui semble shooter dans un ballon : la Sicile. L'autre grande île est la Sardaigne.",
        "Les villes à connaître : Roma (Rome), la capitale, avec le Colisée ; Venezia (Venise) et ses canaux sans voitures ; Firenze (Florence), la ville des artistes ; Milano (Milan), capitale de la mode ; Napoli (Naples), patrie de la pizza, au pied du Vésuve.",
        "Minuscule mais célèbre : au coeur de Rome se trouve le Vaticano, le plus petit État du monde. Et au nord, les Alpes séparent l'Italie de la France et de la Suisse.",
      ],
      example: [
        "Roma è la capitale d'Italia. → Rome est la capitale de l'Italie.",
        "Venezia ha 400 ponti. → Venise a 400 ponts.",
        "Napoli è la città della pizza. → Naples est la ville de la pizza.",
      ],
      tip: "Attention aux noms de villes : Firenze = Florence, Venezia = Venise, Napoli = Naples. Le français a francisé presque tous les noms — apprends les vrais noms italiens !",
    },
    {
      title: "L'italien, langue de l'art et de la musique",
      paragraphs: [
        "Ouvre une partition de musique : tout est en italien ! Piano (doucement), forte (fort), allegro (gai, rapide), adagio (lent), crescendo (de plus en plus fort). Depuis 400 ans, les musiciens du monde entier utilisent ces mots italiens.",
        "L'opera est née en Italie vers 1600. Les grands compositeurs italiens : Vivaldi (Les Quatre Saisons), Rossini, Verdi, Puccini. Et le piano lui-même a été inventé en Italie, par Bartolomeo Cristofori !",
        "Côté art, l'Italie de la Renaissance (il Rinascimento) a donné Léonard de Vinci (Leonardo da Vinci), Michel-Ange (Michelangelo) et Raphaël (Raffaello) — les mêmes noms que les Tortues Ninja, ce n'est pas un hasard !",
      ],
      example: [
        "allegro → gai, rapide (en musique)",
        "piano → doucement (a donné son nom à l'instrument)",
        "l'opera → l'opéra, inventé en Italie",
        "Leonardo da Vinci → Léonard de Vinci",
      ],
      tip: "« Piano » veut dire « doucement » : l'instrument s'appelait « pianoforte » car il pouvait jouer doux ET fort, une révolution à l'époque. On a gardé la moitié du mot… la moitié douce.",
    },
    {
      title: "Les fêtes : il Carnevale et la Befana",
      paragraphs: [
        "Il Carnevale di Venezia est l'un des carnavals les plus célèbres du monde : pendant deux semaines, en février, Venise se remplit de masques (le maschere) et de costumes somptueux du XVIIIe siècle.",
        "La Befana est une tradition unique : dans la nuit du 5 au 6 janvier (l'Épiphanie), une vieille dame sur un balai apporte des bonbons aux enfants sages… et du charbon (en sucre !) aux moins sages. Beaucoup d'enfants italiens reçoivent donc des cadeaux deux fois : à Noël et à la Befana.",
        "Autres rendez-vous : Natale (Noël), Pasqua (Pâques) et son gâteau en forme de colombe (la colomba), et Ferragosto (le 15 août), quand toute l'Italie part à la plage.",
      ],
      example: [
        "il Carnevale di Venezia → le Carnaval de Venise",
        "la maschera → le masque",
        "la Befana porta i dolci. → La Befana apporte des bonbons.",
        "Buon Natale! → Joyeux Noël !",
      ],
      tip: "Prononciation de « maschera » : sch = son dur « sk », donc « maskera ». Souviens-toi de bruschetta = « brousketta » : le h durcit toujours le son.",
    },
    {
      title: "Les mots italiens que tu utilises déjà",
      paragraphs: [
        "Tu parles déjà italien sans le savoir ! En cuisine : pizza, spaghetti, lasagne, tiramisù, cappuccino, mozzarella. En musique : piano, solo, opéra, tempo, maestro.",
        "Dans la vie de tous les jours : graffiti, paparazzi, scénario, fiasco, incognito… et même « ciao » ! Le mot « banque » vient de « banco », le comptoir des marchands italiens.",
        "Certains mots ont changé de sens en voyageant : un « panini » en France est un sandwich grillé, mais en italien « panini » est déjà un pluriel (un panino, due panini). Un Italien sourit quand on dit « un panini » !",
      ],
      example: [
        "tiramisù → littéralement « tire-moi vers le haut » (remonte-moi le moral !)",
        "paparazzi → pluriel de paparazzo, un photographe de célébrités",
        "un panino → UN sandwich ; due panini → deux sandwichs",
        "fiasco → un échec complet",
      ],
      tip: "Piège du pluriel : en italien, panini, spaghetti, paparazzi et graffiti sont DÉJÀ des pluriels (singuliers : panino, spaghetto, paparazzo, graffito). Dire « un panini » revient à dire « un sandwichs » !",
    },
  ],
  exercises: [
    {
      id: "it8-1",
      level: 1,
      type: "qcm",
      question: "Comment demande-t-on l'heure en italien ?",
      choices: ["Quanti anni hai?", "Che ore sono?", "Dove abiti?", "Come stai?"],
      answer: 1,
      explanation:
        "« Che ore sono? » = quelle heure est-il ? On répond « Sono le due » (il est 2 h). « Quanti anni hai? » = quel âge as-tu ?, « Dove abiti? » = où habites-tu ?, « Come stai? » = comment vas-tu ?",
      hint: "« Ore », ce sont les heures.",
    },
    {
      id: "it8-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la capitale de l'Italie ?",
      choices: ["Milano", "Venezia", "Napoli", "Roma"],
      answer: 3,
      explanation:
        "Roma (Rome) est la capitale de l'Italie ; on y trouve le Colisée et, en son coeur, le Vatican, le plus petit État du monde. Milano = capitale de la mode, Venezia = les canaux, Napoli = la pizza.",
      hint: "La ville du Colisée.",
    },
    {
      id: "it8-3",
      level: 1,
      type: "truefalse",
      question: "Sur une carte, l'Italie a la forme d'une botte.",
      answer: true,
      explanation:
        "Vrai ! L'Italie est surnommée « lo stivale » (la botte) : elle a un talon (les Pouilles), une pointe (la Calabre) et semble shooter dans la Sicile, la grande île en face de la pointe.",
    },
    {
      id: "it8-4",
      level: 1,
      type: "input",
      question: "Complète pour dire « il est deux heures » : « sono le … » (le nombre 2 en lettres).",
      answer: "due",
      explanation:
        "« Sono le due » = il est deux heures : sono le + le nombre, le mot « ore » est sous-entendu. Due = 2. Au singulier uniquement pour 1 h, midi et minuit : è l'una, è mezzogiorno, è mezzanotte.",
      hint: "Uno, …, tre : le nombre entre les deux.",
    },
    {
      id: "it8-5",
      level: 2,
      type: "qcm",
      question: "En musique, que signifie le mot italien « allegro » ?",
      choices: ["Très lent", "Gai et rapide", "De plus en plus fort", "Doucement"],
      answer: 1,
      explanation:
        "« Allegro » = gai, rapide : en italien courant, allegro veut dire joyeux ! Adagio = lent, crescendo = de plus en plus fort, piano = doucement. Les partitions du monde entier utilisent l'italien depuis 400 ans.",
      hint: "En italien courant, ce mot veut dire « joyeux ».",
    },
    {
      id: "it8-6",
      level: 2,
      type: "input",
      question: "Quelle vieille dame apporte des bonbons aux enfants italiens dans la nuit du 5 au 6 janvier ? (la …)",
      answer: "befana",
      explanation:
        "La Befana : une vieille dame sur un balai qui, la nuit de l'Épiphanie (5-6 janvier), remplit les chaussettes de bonbons — ou de charbon en sucre pour les enfants pas sages. Une tradition typiquement italienne.",
      hint: "Son nom vient du mot « Epifania » (Épiphanie), déformé.",
    },
    {
      id: "it8-7",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « il est une heure » en italien ?",
      choices: ["Sono le una", "È l'una", "Sono l'una", "È le una"],
      answer: 1,
      explanation:
        "« È l'una » : pour UNE heure, le verbe est au singulier (è) et « una » prend l'article l'. Le pluriel « sono le » sert pour toutes les autres heures : sono le due, sono le dieci. Même logique singulière pour è mezzogiorno et è mezzanotte.",
      hint: "Une seule heure : le verbe se met au singulier.",
    },
    {
      id: "it8-8",
      level: 2,
      type: "truefalse",
      question: "Le Carnaval le plus célèbre d'Italie, avec ses masques, se déroule à Venise.",
      answer: true,
      explanation:
        "Vrai ! Il Carnevale di Venezia, en février, est mondialement célèbre pour ses masques (le maschere, prononcé « maskere ») et ses costumes du XVIIIe siècle, au milieu des canaux de la ville.",
      hint: "La ville des canaux et des gondoles.",
    },
    {
      id: "it8-9",
      level: 3,
      type: "input",
      question: "Le mot « piano » en musique veut dire « doucement ». Quel mot italien, son contraire, veut dire « fort » ?",
      answer: "forte",
      explanation:
        "« Forte » = fort. L'instrument s'appelait à l'origine « pianoforte », car il pouvait jouer à la fois doucement (piano) et fort (forte) — une révolution inventée en Italie par Cristofori. Le nom a ensuite été raccourci en « piano ».",
      hint: "Le nom complet de l'instrument était « piano-… ».",
    },
    {
      id: "it8-10",
      level: 3,
      type: "qcm",
      question: "Pourquoi un Italien sourit-il quand un Français commande « un panini » ?",
      choices: [
        "Parce que le panini n'existe pas en Italie",
        "Parce que « panini » est déjà un pluriel : on dit « un panino »",
        "Parce qu'en Italie, le panini est un dessert",
        "Parce que « panini » veut dire « petit pain » en espagnol",
      ],
      answer: 1,
      explanation:
        "« Panini » est le pluriel de « panino » : dire « un panini » revient à dire « un sandwichs » ! Même piège avec spaghetti (un spaghetto), paparazzi (un paparazzo) et graffiti (un graffito) : ce sont tous des pluriels italiens.",
      hint: "Regarde la dernière lettre : -i est une marque de pluriel en italien.",
    },
    {
      id: "it8-11",
      level: 3,
      type: "input",
      question: "Comment s'appelle la ville de Florence en italien ?",
      answer: "firenze",
      explanation:
        "Florence = Firenze, la ville des artistes de la Renaissance (Leonardo da Vinci, Michelangelo…). Le français a francisé les noms de villes italiennes : Firenze → Florence, Venezia → Venise, Napoli → Naples, Milano → Milan.",
      hint: "Son nom italien commence par Fi- et se termine par -enze.",
    },
    {
      id: "it8-12",
      level: 3,
      type: "truefalse",
      question: "La phrase « Sono le tre e mezza » signifie « il est trois heures et demie ».",
      answer: true,
      explanation:
        "Vrai ! Sono le tre = il est trois heures, e mezza = et demie. On ajoute les minutes avec « e » : sono le tre e dieci (3 h 10), sono le tre e un quarto (3 h et quart), sono le tre e mezza (3 h 30).",
      hint: "« Mezza » est de la famille de mezzogiorno (midi) : la moitié.",
    },
  ],
};
