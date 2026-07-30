import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "inter-chateau",
  subject: "inter",
  grade: "5e",
  num: 1,
  title: "Mission château fort",
  domain: "nombres",
  domainLabel: "Mission",
  icon: "Castle",
  teaser: "An 1220 : le seigneur te confie le chantier de son château. À toi de tout calculer.",
  objectives: [
    "Je sais calculer des aires (rectangle, triangle), des périmètres et utiliser une expression littérale simple",
    "Je sais résoudre un problème de proportionnalité sur un chantier",
    "Je connais le vocabulaire de la féodalité : hommage, fief, vassal, seigneur",
    "Je sais employer le vocabulaire du château fort et le passé simple dans un récit",
  ],
  lesson: [
    {
      title: "Maître d'œuvre du seigneur",
      paragraphs: [
        "Nous sommes en 1220. Le seigneur de Hautmont te nomme maître d'œuvre : c'est toi qui diriges la construction de son nouveau château fort. Plans, pierres, ouvriers — tout passe par tes calculs.",
        "Un rappel sur la société féodale s'impose. Lors de la cérémonie de l'hommage, un homme devient le vassal d'un seigneur plus puissant : il jure fidélité et promet de l'aider à la guerre. En échange, le seigneur lui remet un fief, c'est-à-dire une terre. Le seigneur doit aussi protection à ses paysans, qui lui versent des redevances et effectuent des corvées.",
      ],
      example: [
        "Hommage : le vassal jure fidélité → le seigneur donne un fief (une terre).",
        "Ne confonds pas avec l'adoubement, la cérémonie qui fait d'un jeune homme un chevalier.",
      ],
      tip: "Fidélité contre fief : l'échange de l'hommage tient en trois mots.",
    },
    {
      title: "Les plans du château",
      paragraphs: [
        "Sur ta table, les parchemins s'empilent : salles rectangulaires, pignons triangulaires, enceintes à mesurer. Deux formules d'aire te suffisent : celle du rectangle et celle du triangle.",
        "Le périmètre, lui, sert à commander la bonne longueur de muraille : c'est la longueur totale du contour.",
      ],
      example: [
        "Aire d'un rectangle : L × l. Une salle de 10 m sur 6 m : 10 × 6 = 60 m².",
        "Aire d'un triangle : (base × hauteur) ÷ 2. Base 8 m, hauteur 3 m : (8 × 3) ÷ 2 = 12 m².",
      ],
      tip: "Un triangle, c'est la moitié d'un rectangle : voilà pourquoi on divise par 2.",
    },
    {
      title: "Compter pierres et ouvriers",
      paragraphs: [
        "Impossible de connaître à l'avance le nombre exact de blocs pour chaque tour. Les bâtisseurs utilisent alors une lettre : si une tour demande n blocs, alors 4 tours identiques demandent 4 × n, ce qu'on écrit 4n.",
        "Pour organiser les équipes, la proportionnalité est ton alliée : si 2 ouvriers posent 60 pierres par jour, alors 1 ouvrier en pose 30, et 10 ouvriers en posent 300.",
      ],
      example: [
        "n blocs par tour → 4n blocs pour 4 tours ; si n = 500, alors 4n = 2 000.",
        "2 ouvriers → 60 pierres/jour, donc 1 ouvrier → 30, donc 10 ouvriers → 300.",
      ],
      tip: "En calcul littéral, le signe × disparaît devant une lettre : 4 × n s'écrit 4n.",
    },
    {
      title: "La chronique du chantier",
      paragraphs: [
        "Chaque soir, tu rédiges la chronique du chantier. Un récit au passé s'écrit au passé simple : « Le seigneur ordonna, les ouvriers bâtirent, le donjon s'éleva. »",
        "Et emploie les mots exacts du château : le donjon (la grande tour), les douves (le fossé rempli d'eau), le pont-levis (le pont qui se relève), les meurtrières (fentes de tir dans les murs), les créneaux (le sommet dentelé des murailles).",
      ],
      example: [
        "Passé simple, verbes en -ir comme bâtir : il bâtit, ils bâtirent.",
        "« Le maçon finit le mur » (passé simple) — au présent, on écrirait aussi « finit » : c'est le contexte du récit qui tranche.",
      ],
      tip: "Le passé simple est le temps des actions brèves et achevées du récit ; l'imparfait plante le décor.",
    },
  ],
  exercises: [
    {
      id: "icha-1",
      level: 1,
      type: "qcm",
      question:
        "[Histoire] Avant d'ouvrir le chantier, le seigneur de Hautmont jure fidélité à un seigneur plus puissant lors d'une grande cérémonie. Comment s'appelle cette cérémonie ?",
      choices: ["L'hommage", "L'adoubement", "Le tournoi", "La corvée"],
      answer: 0,
      explanation:
        "La cérémonie où le vassal jure fidélité à son seigneur s'appelle l'hommage. L'adoubement, c'est la cérémonie qui fait d'un jeune homme un chevalier ; la corvée est un travail dû par les paysans.",
    },
    {
      id: "icha-2",
      level: 1,
      type: "input",
      question:
        "[Maths] La grande salle du donjon est un rectangle de 12 m de long sur 8 m de large. Quelle est son aire, en m² ?",
      answer: "96",
      explanation:
        "Aire d'un rectangle : longueur × largeur = 12 × 8 = 96. La grande salle mesure 96 m².",
      hint: "Aire du rectangle = longueur × largeur.",
    },
    {
      id: "icha-3",
      level: 1,
      type: "qcm",
      question:
        "[Français] Dans ta chronique, tu décris les défenses du château. Qu'est-ce qu'une « meurtrière » ?",
      choices: [
        "Une fente étroite dans le mur, pour tirer des flèches à l'abri",
        "La grande porte d'entrée du château",
        "La salle des banquets du seigneur",
        "Le fossé qui entoure les murailles",
      ],
      answer: 0,
      explanation:
        "Une meurtrière est une ouverture étroite percée dans la muraille : les archers peuvent tirer vers l'extérieur tout en restant protégés. Le fossé, lui, s'appelle les douves.",
    },
    {
      id: "icha-4",
      level: 1,
      type: "truefalse",
      question:
        "[Sciences] Ton maître maçon compare les matériaux : 1 m³ de pierre calcaire pèse environ 2 000 kg et 1 m³ de bois de chêne environ 700 kg. À volume égal, la pierre est donc presque trois fois plus lourde que le bois.",
      answer: true,
      explanation:
        "Vrai ! On compare les masses pour un même volume : 2 000 ÷ 700 ≈ 2,9, soit presque 3. C'est la masse volumique du matériau qui fait la différence — et qui explique pourquoi transporter la pierre est un tel défi.",
      hint: "Combien de fois 700 tient-il dans 2 000, environ ?",
    },
    {
      id: "icha-5",
      level: 2,
      type: "input",
      question:
        "[Maths] Le pignon triangulaire du toit de la chapelle a une base de 6 m et une hauteur de 4 m. Quelle est son aire, en m² ?",
      answer: "12",
      explanation:
        "Aire d'un triangle : (base × hauteur) ÷ 2 = (6 × 4) ÷ 2 = 24 ÷ 2 = 12. Le pignon mesure 12 m².",
      hint: "Aire du triangle = (base × hauteur) ÷ 2.",
    },
    {
      id: "icha-6",
      level: 2,
      type: "qcm",
      question:
        "[Histoire] Lors de l'hommage, que reçoit le vassal de son seigneur en échange de sa fidélité et de son aide à la guerre ?",
      choices: ["Un fief, c'est-à-dire une terre", "Un salaire en pièces d'or", "Le titre de roi", "Une armure neuve"],
      answer: 0,
      explanation:
        "En échange de sa fidélité, le vassal reçoit un fief : une terre dont il tire ses revenus. C'est le cœur du système féodal : fidélité contre fief.",
      hint: "Fidélité contre… un mot de quatre lettres qui commence par f.",
    },
    {
      id: "icha-7",
      level: 2,
      type: "qcm",
      question:
        "[Maths] Chaque tour du château demande n blocs de pierre. Quelle expression donne le nombre de blocs nécessaires pour 4 tours identiques ?",
      choices: ["4n", "n + 4", "n − 4", "n ÷ 4"],
      answer: 0,
      explanation:
        "4 tours identiques demandent 4 fois n blocs, soit 4 × n, qu'on écrit 4n en calcul littéral. Par exemple, si n = 500, il faut 4 × 500 = 2 000 blocs.",
      hint: "4 tours, c'est 4 fois le nombre de blocs d'une tour.",
    },
    {
      id: "icha-8",
      level: 2,
      type: "input",
      question:
        "[Français] Ta chronique du soir est au passé simple. Complète avec le verbe « bâtir » à la 3e personne du singulier : « Le seigneur … un donjon de pierre. »",
      answer: "bâtit",
      accept: ["batit"],
      explanation:
        "Au passé simple, les verbes du 2e groupe comme « bâtir » font -is, -is, -it : « le seigneur bâtit ». Au pluriel, on écrirait « les seigneurs bâtirent ».",
      hint: "Verbe en -ir, 3e personne du singulier : la terminaison est -it.",
    },
    {
      id: "icha-9",
      level: 3,
      type: "input",
      question:
        "[Maths] Sur ton chantier, 8 tailleurs de pierre posent à eux tous 240 pierres par jour. Combien de pierres 20 tailleurs, travaillant au même rythme, posent-ils par jour ?",
      answer: "600",
      explanation:
        "On passe par un seul ouvrier : 240 ÷ 8 = 30 pierres par tailleur et par jour. Puis 20 × 30 = 600. Les 20 tailleurs posent 600 pierres par jour.",
      hint: "Calcule d'abord combien de pierres pose UN seul tailleur par jour.",
    },
    {
      id: "icha-10",
      level: 3,
      type: "input",
      question:
        "[Maths] L'enceinte du château est un carré de 40 m de côté, percé d'une seule porte large de 4 m. Quelle longueur de muraille dois-tu faire construire, en mètres ?",
      answer: "156",
      explanation:
        "Périmètre du carré : 4 × 40 = 160 m. On retire la largeur de la porte, qui n'est pas maçonnée : 160 − 4 = 156. Il faut construire 156 m de muraille.",
      hint: "Calcule le périmètre complet, puis enlève la largeur de la porte.",
    },
    {
      id: "icha-11",
      level: 3,
      type: "truefalse",
      question:
        "[Histoire] Dans la société féodale, le seigneur doit protection aux paysans de sa seigneurie ; en échange, ceux-ci lui versent des redevances et effectuent des corvées.",
      answer: true,
      explanation:
        "Vrai ! C'est le fonctionnement de la seigneurie : le seigneur protège (son château sert d'ailleurs de refuge en cas d'attaque) et rend la justice ; les paysans paient des redevances et doivent des corvées, comme l'entretien des chemins… ou du château.",
    },
    {
      id: "icha-12",
      level: 3,
      type: "input",
      question:
        "[Français] Dernier mot de vocabulaire pour ta chronique : comment s'appelle le fossé, souvent rempli d'eau, qui entoure les murailles du château ?",
      answer: "les douves",
      accept: ["douves", "douve", "la douve"],
      explanation:
        "Ce fossé s'appelle les douves. Rempli d'eau, il empêche les assaillants d'approcher des murailles ; on le franchit grâce au pont-levis, que l'on relève en cas d'attaque.",
      hint: "C'est l'obstacle que le pont-levis permet de franchir.",
    },
  ],
};
