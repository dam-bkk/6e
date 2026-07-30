import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg5-feodalite",
  subject: "histoire-geo",
  grade: "5e",
  num: 3,
  title: "Seigneurs, chevaliers et paysans",
  domain: "nombres",
  domainLabel: "Histoire",
  icon: "Swords",
  teaser:
    "Château fort, corvées et adoubement : plonge dans la société féodale du Moyen Âge.",
  objectives: [
    "Je sais décrire une seigneurie : le château, la réserve et les tenures",
    "Je peux raconter la vie quotidienne des paysans, leurs corvées et leurs redevances",
    "Je sais qui sont les chevaliers et ce qu'est l'adoubement",
    "Je comprends les liens féodaux entre seigneurs et vassaux : hommage et fief",
  ],
  lesson: [
    {
      title: "La seigneurie, le cadre de vie du Moyen Âge",
      paragraphs: [
        "Entre le XIe et le XVe siècle, la grande majorité des habitants d'Occident vivent à la campagne, dans le cadre de la seigneurie : un vaste domaine dirigé par un seigneur, qui peut être un noble ou un établissement religieux comme une abbaye.",
        "La seigneurie est divisée en deux parties. La réserve est la partie que le seigneur garde pour lui : ses terres, sa forêt, ses prés. Les tenures sont les parcelles qu'il concède aux paysans : en échange, ceux-ci lui doivent des redevances (paiements en argent ou en nature) et des corvées (journées de travail gratuit).",
        "Au cœur de la seigneurie se dresse le château fort. D'abord simple tour de bois sur une butte (la motte), il devient à partir du XIe siècle une forteresse de pierre, avec donjon, remparts et pont-levis. C'est à la fois la résidence du seigneur, un refuge pour les habitants en cas d'attaque et le symbole de sa puissance.",
        "Le seigneur exerce des pouvoirs étendus sur les habitants : il rend la justice, perçoit des taxes et oblige les paysans à utiliser, contre paiement, son moulin, son four et son pressoir : ce sont les banalités.",
      ],
      example: [
        "Dans une seigneurie, un paysan peut devoir : plusieurs jours de corvée pour labourer la réserve, une partie de sa récolte comme redevance, et une taxe chaque fois qu'il fait moudre son grain au moulin du seigneur.",
      ],
      tip: "Réserve = la part du seigneur ; tenures = les terres confiées aux paysans contre redevances et corvées.",
      figure: "hg5-seigneurie",
    },
    {
      title: "La vie des paysans",
      paragraphs: [
        "Les paysans représentent environ neuf habitants sur dix. On distingue les vilains, qui sont libres, et les serfs, attachés à la terre du seigneur : un serf ne peut ni quitter la seigneurie ni se marier hors de celle-ci sans autorisation.",
        "Le travail suit le rythme des saisons : labours et semailles à l'automne, moissons en été, vendanges au début de l'automne. Les outils sont simples et les rendements faibles : une mauvaise récolte peut provoquer une famine.",
        "Entre le XIe et le XIIIe siècle, la situation s'améliore pourtant : le climat se réchauffe, des techniques progressent (charrue à roues, collier d'épaule pour les chevaux, moulins) et les paysans gagnent de nouvelles terres sur les forêts et les marais : ce sont les grands défrichements. La population d'Europe augmente fortement.",
      ],
      example: [
        "La rotation des cultures sur trois ans, appelée assolement triennal, se répand : une partie du terroir porte des céréales d'hiver, une autre des céréales de printemps, la troisième se repose (la jachère). Résultat : moins de terres perdues chaque année et de meilleures récoltes.",
      ],
      tip: "Ne confonds pas : le vilain est un paysan libre ; le serf est attaché à la terre de son seigneur.",
    },
    {
      title: "Les chevaliers, des guerriers professionnels",
      paragraphs: [
        "Le chevalier est un guerrier qui combat à cheval, protégé par une cotte de mailles puis, plus tard, par une armure. Son équipement (cheval de guerre, épée, lance, écu) coûte très cher : la plupart des chevaliers appartiennent donc à la noblesse.",
        "On ne naît pas chevalier, on le devient. Le jeune noble commence comme page, puis comme écuyer au service d'un chevalier. Vers 18 ans, il est armé chevalier lors d'une cérémonie appelée l'adoubement : il reçoit ses armes, souvent après une veillée de prière, et promet de respecter des règles de conduite.",
        "En temps de paix, les chevaliers s'entraînent lors des tournois, des combats spectaculaires organisés devant un public. L'Église cherche à encadrer leur violence : elle leur demande de protéger les faibles, les femmes et les gens d'Église. Cet idéal du chevalier généreux et loyal est célébré dans les romans de chevalerie, comme ceux des chevaliers de la Table ronde.",
      ],
      example: [
        "Lors de l'adoubement, le parrain remet au jeune homme son épée et ses éperons, puis lui donne la colée : un coup du plat de la main ou de l'épée sur l'épaule ou la nuque. Le nouveau chevalier montre ensuite son adresse à cheval.",
      ],
      tip: "Adoubement = la cérémonie qui fait d'un écuyer un chevalier.",
    },
    {
      title: "Les liens féodaux : seigneurs et vassaux",
      paragraphs: [
        "Les seigneurs sont eux-mêmes liés entre eux par des relations de fidélité : c'est ce qu'on appelle la féodalité. Un seigneur puissant, le suzerain, prend sous sa protection un seigneur moins puissant, qui devient son vassal.",
        "Ce lien se noue lors de la cérémonie de l'hommage : le vassal, à genoux, place ses mains dans celles de son seigneur et se déclare « son homme », puis prête serment de fidélité sur la Bible ou sur des reliques. En échange, le seigneur lui remet un fief : le plus souvent une terre, avec les revenus qu'elle rapporte.",
        "Chacun a ensuite des devoirs. Le vassal doit le conseil (aider son seigneur à rendre la justice, participer à ses assemblées) et l'aide, notamment militaire : il combat pour son seigneur un certain nombre de jours par an. Le seigneur, lui, doit protection et entretien à son vassal. Si l'un des deux trahit ses engagements, le contrat est rompu : un vassal félon peut perdre son fief.",
        "Ce système crée une véritable pyramide de fidélités : un même seigneur peut être le vassal d'un plus puissant que lui et le suzerain de plusieurs autres. Au sommet se trouve le roi, qui n'est le vassal de personne.",
      ],
      example: [
        "Cérémonie de l'hommage, étape par étape : 1) le vassal s'agenouille et met ses mains dans celles du seigneur ; 2) il prête serment de fidélité ; 3) le seigneur lui remet un objet (rameau, motte de terre, bâton) qui symbolise le fief.",
      ],
      tip: "Retiens l'échange féodal : le vassal donne fidélité, aide et conseil ; le seigneur donne protection et un fief.",
    },
  ],
  exercises: [
    {
      id: "h5feo-1",
      level: 1,
      type: "qcm",
      question:
        "Dans une seigneurie du Moyen Âge, comment s'appelle la partie des terres que le seigneur garde pour lui ?",
      choices: ["La tenure", "La réserve", "La banalité", "La jachère"],
      answer: 1,
      explanation:
        "La réserve est la partie de la seigneurie que le seigneur se réserve : ses champs, ses prés, sa forêt. Les tenures sont au contraire les parcelles confiées aux paysans contre redevances et corvées. Repère à retenir : réserve = au seigneur, tenures = aux paysans.",
      hint: "Le nom de cette partie indique que le seigneur se la « garde ».",
    },
    {
      id: "h5feo-2",
      level: 1,
      type: "qcm",
      question: "Comment s'appelle la cérémonie au cours de laquelle un jeune noble devient chevalier ?",
      choices: ["L'hommage", "Le tournoi", "L'adoubement", "La colée seule"],
      answer: 2,
      explanation:
        "C'est l'adoubement : le jeune écuyer reçoit ses armes (épée, éperons) et la colée, un coup du plat de la main ou de l'épée. L'hommage est une autre cérémonie, celle qui lie un vassal à son seigneur, et le tournoi est un combat d'entraînement. Repère à retenir : adoubement = devenir chevalier ; hommage = devenir vassal.",
      hint: "Ce n'est pas la cérémonie du vassal, mais celle du guerrier.",
    },
    {
      id: "h5feo-3",
      level: 1,
      type: "truefalse",
      question: "Au Moyen Âge, la grande majorité de la population vit à la campagne.",
      answer: true,
      explanation:
        "Vrai. Environ neuf habitants sur dix sont des paysans qui vivent et travaillent dans le cadre des seigneuries. Les villes existent et grandissent, mais elles ne rassemblent qu'une petite partie de la population. Repère à retenir : le Moyen Âge est un monde surtout rural.",
    },
    {
      id: "h5feo-4",
      level: 1,
      type: "input",
      question:
        "Comment appelle-t-on les journées de travail gratuit que les paysans doivent à leur seigneur ? (un mot au pluriel, en minuscules)",
      answer: "corvees",
      accept: ["corvées", "les corvées", "corvee", "corvée"],
      explanation:
        "Ce sont les corvées : des journées de travail gratuit sur la réserve du seigneur (labourer, faucher, entretenir les chemins ou le château). Elles s'ajoutent aux redevances, payées en argent ou en nature. Repère à retenir : corvées = travail gratuit dû au seigneur.",
      hint: "Aujourd'hui encore, ce mot désigne une tâche pénible et obligatoire.",
    },
    {
      id: "h5feo-5",
      level: 2,
      type: "qcm",
      question: "Qu'est-ce qu'un fief ?",
      choices: [
        "Une taxe payée pour utiliser le moulin du seigneur",
        "Le bien, le plus souvent une terre, qu'un seigneur remet à son vassal",
        "Le tribunal du seigneur",
        "La tour principale du château fort",
      ],
      answer: 1,
      explanation:
        "Le fief est le bien que le seigneur remet à son vassal lors de l'hommage, en échange de sa fidélité et de son aide. C'est le plus souvent une terre avec ses revenus. La taxe pour le moulin fait partie des banalités, et la tour principale du château est le donjon. Repère à retenir : hommage du vassal, fief du seigneur : c'est un échange.",
      hint: "C'est ce que reçoit le vassal en échange de sa fidélité.",
    },
    {
      id: "h5feo-6",
      level: 2,
      type: "truefalse",
      question: "Un serf est un paysan libre de quitter la seigneurie quand il le souhaite.",
      answer: false,
      explanation:
        "Faux. Le serf est justement attaché à la terre du seigneur : il ne peut ni partir ni se marier hors de la seigneurie sans autorisation. Le paysan libre, lui, s'appelle un vilain. Repère à retenir : serf = non libre, vilain = libre.",
      hint: "C'est le vilain qui est libre, pas lui.",
    },
    {
      id: "h5feo-7",
      level: 2,
      type: "qcm",
      question:
        "Que sont les banalités dans une seigneurie ?",
      choices: [
        "Des fêtes organisées par le seigneur",
        "Les taxes payées pour utiliser obligatoirement le four, le moulin et le pressoir du seigneur",
        "Les terres cultivées par les moines",
        "Les impôts payés au roi",
      ],
      answer: 1,
      explanation:
        "Les banalités sont les taxes que les paysans paient pour utiliser les équipements du seigneur, dont l'usage est obligatoire : le moulin pour moudre le grain, le four pour cuire le pain, le pressoir pour le raisin. C'est une source de revenus importante pour le seigneur. Repère à retenir : banalités = moulin, four, pressoir.",
      hint: "Pense aux trois équipements : moulin, four, pressoir.",
    },
    {
      id: "h5feo-8",
      level: 2,
      type: "input",
      question:
        "Comment appelle-t-on la cérémonie où un vassal, à genoux, met ses mains dans celles de son seigneur et lui jure fidélité ? (un mot, en minuscules)",
      answer: "hommage",
      accept: ["l'hommage", "la ceremonie de l'hommage", "la cérémonie de l'hommage"],
      explanation:
        "C'est l'hommage : le vassal se déclare « l'homme » de son seigneur, prête serment de fidélité, puis reçoit son fief. Ce rituel crée le lien féodal entre les deux hommes. Repère à retenir : hommage + serment + remise du fief = naissance du lien féodal.",
      hint: "Le mot vient de « homme » : le vassal devient « l'homme » de son seigneur.",
    },
    {
      id: "h5feo-9",
      level: 3,
      type: "qcm",
      question:
        "Entre le XIe et le XIIIe siècle, qu'appelle-t-on les grands défrichements ?",
      choices: [
        "La destruction des châteaux forts par les rois",
        "La conquête de nouvelles terres cultivables sur les forêts et les marais",
        "L'abandon des campagnes par les paysans",
        "Le partage des seigneuries entre les fils du seigneur",
      ],
      answer: 1,
      explanation:
        "Les grands défrichements désignent la conquête de nouvelles terres agricoles : les paysans abattent des forêts et assèchent des marais pour créer des champs. Combinés aux progrès techniques (charrue à roues, collier d'épaule, moulins, assolement triennal), ils permettent de nourrir une population en forte croissance. Repère à retenir : XIe-XIIIe siècle = défrichements, progrès techniques, essor de la population.",
      hint: "« Défricher », c'est transformer un espace sauvage en terre cultivable.",
    },
    {
      id: "h5feo-10",
      level: 3,
      type: "truefalse",
      question:
        "Dans le système féodal, un même seigneur peut être à la fois vassal d'un seigneur plus puissant et suzerain d'autres seigneurs.",
      answer: true,
      explanation:
        "Vrai. La féodalité forme une pyramide : un comte peut être le vassal du roi tout en étant le suzerain de nombreux petits seigneurs qui lui ont prêté hommage. Chacun occupe donc souvent les deux positions à la fois, sauf le roi, au sommet, qui n'est le vassal de personne. Repère à retenir : la féodalité est une pyramide de fidélités dont le roi occupe le sommet.",
      hint: "Pense à la pyramide : que se passe-t-il aux étages intermédiaires ?",
    },
    {
      id: "h5feo-11",
      level: 3,
      type: "input",
      question:
        "Comment appelle-t-on le seigneur qui a reçu l'hommage d'un vassal et qui lui doit protection ? (un mot, en minuscules)",
      answer: "suzerain",
      accept: ["le suzerain", "seigneur"],
      explanation:
        "C'est le suzerain : le seigneur qui reçoit l'hommage d'un vassal. Il lui remet un fief et lui doit protection ; en retour, le vassal lui doit fidélité, aide militaire et conseil. Repère à retenir : suzerain au-dessus, vassal en dessous, le fief entre les deux.",
      hint: "Le mot commence comme « sur » : c'est celui qui est au-dessus du vassal.",
    },
    {
      id: "h5feo-12",
      level: 3,
      type: "qcm",
      question:
        "Quel rôle l'Église joue-t-elle vis-à-vis des chevaliers ?",
      choices: [
        "Elle leur interdit totalement de combattre",
        "Elle cherche à encadrer leur violence en leur imposant de protéger les faibles",
        "Elle leur demande de détruire les châteaux",
        "Elle n'a aucune influence sur eux",
      ],
      answer: 1,
      explanation:
        "L'Église ne supprime pas la guerre, mais elle tente de la limiter : elle impose des trêves, condamne les violences contre les paysans et les clercs, et diffuse un idéal du chevalier protecteur des faibles, des femmes et des gens d'Église. Cet idéal chevaleresque est célébré dans les romans de chevalerie. Repère à retenir : l'Église encadre la violence des chevaliers, elle ne l'interdit pas.",
      hint: "Entre « tout interdire » et « ne rien faire », il existe une voie intermédiaire.",
    },
  ],
  videos: [
    { title: "La société féodale - Histoire-Géographie - Cinquième - Les Bons Profs", youtubeId: "mf6bsUU48s8", channel: "Les Bons Profs" },
  ],
};
