import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg5-emc-egalite",
  subject: "histoire-geo",
  grade: "5e",
  num: 8,
  title: "Égalité et solidarités",
  domain: "donnees",
  domainLabel: "EMC",
  icon: "HeartHandshake",
  teaser:
    "Égaux en droits, différents dans nos vies : comment faire vivre l'égalité et la solidarité, en classe comme en ligne ?",
  objectives: [
    "Je sais que tous les êtres humains sont égaux en droit et je connais les textes qui le proclament",
    "Je sais reconnaître une discrimination et je sais comment réagir",
    "Je comprends ce que sont le handicap et l'inclusion",
    "Je connais les grandes formes de solidarité : associations et sécurité sociale",
    "Je sais comment m'engager à mon échelle et respecter les autres en ligne",
  ],
  lesson: [
    {
      title: "Tous égaux en droit",
      paragraphs: [
        "« Les hommes naissent et demeurent libres et égaux en droits » : c'est l'article premier de la Déclaration des droits de l'homme et du citoyen, adoptée en France en 1789. L'égalité en droit signifie que la loi est la même pour tous : mêmes droits, mêmes devoirs, quels que soient l'origine, le sexe, la religion ou la fortune de chacun.",
        "Ce principe est au cœur de la République française : « Égalité » figure dans sa devise, entre « Liberté » et « Fraternité ». On le retrouve aussi dans la Déclaration universelle des droits de l'homme adoptée par l'ONU en 1948, après les horreurs de la Seconde Guerre mondiale.",
        "Attention : égalité ne veut pas dire uniformité. Nous sommes tous différents par nos goûts, nos talents, nos histoires, et c'est une richesse. L'égalité en droit garantit que ces différences ne donnent à personne plus ou moins de droits qu'aux autres. En revanche, dans les faits, des inégalités persistent : c'est pourquoi la loi et la société agissent pour rapprocher l'égalité réelle de l'égalité proclamée.",
      ],
      example: [
        "En France, les femmes n'ont obtenu le droit de vote qu'en 1944, alors que les hommes l'avaient depuis 1848.",
        "L'égalité en droit a donc progressé par étapes, au fil des combats et des lois.",
      ],
      tip: "Distingue bien : égalité EN DROIT (la loi est la même pour tous, c'est un principe) et égalité DANS LES FAITS (les situations réelles, où des écarts existent encore). L'EMC s'intéresse aux deux.",
      figure: "hg5-balance-egalite",
    },
    {
      title: "Les discriminations : les reconnaître, y réagir",
      paragraphs: [
        "Une discrimination, c'est le fait de traiter une personne moins bien qu'une autre dans une situation comparable, à cause d'un critère interdit par la loi : son origine, son sexe, sa religion, son handicap, son apparence physique, son âge, son orientation sexuelle… La loi française reconnaît plus de 25 critères de discrimination.",
        "La discrimination n'est pas une simple opinion : c'est un délit, puni par la loi, qui peut coûter à son auteur jusqu'à plusieurs années de prison et une lourde amende. Refuser un emploi à quelqu'un à cause de son origine, ou interdire l'entrée d'un magasin à une personne handicapée, est ainsi passible de sanctions.",
        "Si tu es victime ou témoin d'une discrimination, ne reste pas seul : parle à un adulte de confiance (parents, professeur, CPE, infirmière scolaire). Il existe aussi une institution indépendante chargée de défendre les victimes : le Défenseur des droits, que toute personne, même mineure, peut saisir gratuitement. Ne confonds pas discrimination et moquerie : une moquerie répétée est du harcèlement, lui aussi puni, mais la discrimination vise le fait de priver quelqu'un d'un droit ou d'un service à cause de ce qu'il est.",
      ],
      example: [
        "Un propriétaire refuse de louer un appartement à une famille uniquement à cause de son origine : c'est une discrimination, punie par la loi.",
        "Un employeur écarte la candidature d'une femme enceinte uniquement à cause de sa grossesse : c'est aussi une discrimination.",
      ],
      tip: "Pour repérer une discrimination, pose-toi trois questions : 1) La personne est-elle traitée MOINS BIEN qu'une autre ? 2) Dans une situation COMPARABLE ? 3) À cause d'un CRITÈRE interdit (origine, sexe, handicap…) ? Trois oui = discrimination.",
    },
    {
      title: "Handicap et inclusion",
      paragraphs: [
        "Le handicap est une limitation durable des possibilités d'une personne dans sa vie quotidienne, à cause d'une altération physique, sensorielle, mentale ou psychique. Tous les handicaps ne se voient pas : environ 80 % d'entre eux sont invisibles, comme certains troubles « dys » (dyslexie, dyspraxie), l'autisme ou des maladies chroniques.",
        "En France, la loi du 11 février 2005 sur l'égalité des droits et des chances a marqué un tournant : elle impose l'accessibilité des lieux publics (rampes, ascenseurs, feux sonores) et affirme le droit de chaque élève en situation de handicap à être scolarisé, si possible dans l'école de son quartier, avec l'aide d'accompagnants (AESH) si nécessaire.",
        "L'inclusion va plus loin que la simple intégration : ce n'est pas à la personne handicapée de s'adapter seule à un monde conçu sans elle, c'est à la société d'adapter ses bâtiments, ses transports, son école et ses mentalités pour que chacun y ait sa place. Chacun peut y contribuer : ne pas se garer sur une place réservée, proposer son aide sans l'imposer, et surtout regarder la personne avant le handicap.",
      ],
      example: [
        "Dans un collège, un élève dyslexique peut bénéficier de textes agrandis, de temps supplémentaire aux évaluations ou de l'aide d'un AESH.",
        "Les Jeux paralympiques, dont l'édition de Paris en 2024 a rempli les stades, ont changé le regard de millions de spectateurs sur le handicap.",
      ],
      tip: "Retiens la logique de l'inclusion : ce n'est pas la personne qui doit s'adapter à la société, c'est la société qui doit s'adapter pour accueillir tout le monde. Et souviens-toi : 8 handicaps sur 10 sont invisibles.",
    },
    {
      title: "Les solidarités : associations et sécurité sociale",
      paragraphs: [
        "La solidarité, c'est l'entraide entre les membres d'une société : aider ceux qui traversent des difficultés, parce que chacun peut un jour en avoir besoin. Elle prend deux grandes formes : la solidarité choisie, celle des individus et des associations, et la solidarité organisée par l'État.",
        "Les associations regroupent des bénévoles autour d'une cause : les Restos du cœur, fondés par l'humoriste Coluche en 1985, distribuent des millions de repas chaque hiver ; le Secours populaire, la Croix-Rouge ou les banques alimentaires aident les personnes en difficulté. En France, la liberté d'association est garantie par la loi de 1901, et des millions de bénévoles donnent de leur temps.",
        "La solidarité nationale, elle, est organisée par l'État : la Sécurité sociale, créée en 1945 à la Libération, rembourse les soins, verse des allocations aux familles et des pensions aux retraités. Son principe est simple et puissant : chacun cotise selon ses moyens, chacun reçoit selon ses besoins. Un travailleur en bonne santé cotise ainsi pour le malade, le retraité ou le parent qu'il sera peut-être un jour.",
      ],
      example: [
        "Quand tu vas chez le médecin, une grande partie de la consultation est remboursée par la Sécurité sociale : c'est la solidarité nationale en action.",
        "Quand des bénévoles distribuent des repas aux Restos du cœur, c'est la solidarité associative.",
      ],
      tip: "Deux dates faciles à relier : 1945 = création de la Sécurité sociale (solidarité d'État, après la guerre) ; 1985 = création des Restos du cœur par Coluche (solidarité associative), tout juste 40 ans plus tard.",
    },
    {
      title: "S'engager et se respecter, y compris en ligne",
      paragraphs: [
        "Pas besoin d'être adulte pour s'engager ! Au collège, tu peux te présenter comme délégué de classe pour représenter tes camarades, participer au conseil de la vie collégienne, devenir ambassadeur contre le harcèlement, ou rejoindre une association sportive ou solidaire. S'engager, c'est passer de « quelqu'un devrait faire quelque chose » à « je fais ma part ».",
        "Le respect des autres vaut aussi en ligne. Derrière chaque écran, il y a une personne réelle : insulter, se moquer, exclure d'un groupe, partager une photo humiliante ou faire circuler une rumeur sur les réseaux sociaux, c'est du cyberharcèlement. La loi le punit, même quand l'auteur est mineur, et les parents peuvent devoir payer les dommages causés par leur enfant.",
        "Si tu es victime ou témoin de cyberharcèlement : ne réponds pas aux attaques, fais des captures d'écran comme preuves, bloque et signale les comptes, et surtout parle-en à un adulte. Le numéro national 3018, gratuit et anonyme, est dédié aux jeunes victimes de violences numériques ; le 3020 concerne le harcèlement scolaire en général. Être témoin et ne rien dire, c'est laisser faire : alerter un adulte n'est pas « balancer », c'est protéger quelqu'un.",
      ],
      example: [
        "Un groupe de classe se moque d'une élève sur une messagerie et partage une photo retouchée d'elle : c'est du cyberharcèlement, puni par la loi.",
        "Un camarade fait une capture d'écran, prévient le professeur principal et l'élève appelle le 3018 : la situation est prise en main en quelques jours.",
      ],
      tip: "Face au cyberharcèlement, retiens les 4 réflexes : ne pas répondre, garder des preuves (captures), bloquer et signaler, en parler à un adulte. Et le numéro à connaître : 3018.",
    },
  ],
  exercises: [
    {
      id: "h5emc-1",
      level: 1,
      type: "qcm",
      question:
        "Quel texte de 1789 proclame que « les hommes naissent et demeurent libres et égaux en droits » ?",
      choices: [
        "La Constitution de la Ve République",
        "La Déclaration des droits de l'homme et du citoyen",
        "La loi de 1901 sur les associations",
        "La Déclaration universelle des droits de l'homme",
      ],
      answer: 1,
      explanation:
        "C'est l'article premier de la Déclaration des droits de l'homme et du citoyen, adoptée en France en 1789, pendant la Révolution. La Déclaration universelle des droits de l'homme, elle, a été adoptée par l'ONU en 1948, et la loi de 1901 concerne la liberté d'association.",
      hint: "1789, c'est la Révolution française.",
    },
    {
      id: "h5emc-2",
      level: 1,
      type: "qcm",
      question:
        "Un employeur refuse d'embaucher une personne uniquement à cause de son origine. Comment appelle-t-on cet acte ?",
      choices: [
        "Une opinion personnelle",
        "Une discrimination, punie par la loi",
        "Une simple impolitesse",
        "Un droit de l'employeur",
      ],
      answer: 1,
      explanation:
        "Traiter quelqu'un moins bien qu'un autre, dans une situation comparable, à cause d'un critère interdit comme l'origine, c'est une discrimination. Ce n'est pas une opinion mais un délit : la loi française la punit de peines pouvant aller jusqu'à la prison et une lourde amende.",
      hint: "La loi interdit plus de 25 critères de ce type.",
    },
    {
      id: "h5emc-3",
      level: 1,
      type: "truefalse",
      question: "La plupart des handicaps sont invisibles.",
      answer: true,
      explanation:
        "Vrai ! Environ 80 % des handicaps ne se voient pas : troubles « dys » comme la dyslexie, autisme, maladies chroniques, handicaps psychiques… C'est pourquoi il ne faut jamais juger une personne sur les apparences : quelqu'un qui semble « aller bien » peut vivre avec un handicap bien réel.",
      hint: "Pense à la dyslexie : se voit-elle sur le visage de quelqu'un ?",
    },
    {
      id: "h5emc-4",
      level: 1,
      type: "input",
      question:
        "Quel numéro national, gratuit et anonyme, peut appeler un jeune victime de cyberharcèlement ? (4 chiffres)",
      answer: "3018",
      explanation:
        "Le 3018 est le numéro national dédié aux jeunes victimes de violences numériques : cyberharcèlement, photos partagées sans accord, comptes piratés… L'appel est gratuit, anonyme, et des professionnels peuvent même faire supprimer des contenus rapidement. Pour le harcèlement scolaire en général, il existe aussi le 3020.",
      hint: "Il commence par 30, comme le 3020 du harcèlement scolaire.",
    },
    {
      id: "h5emc-5",
      level: 2,
      type: "qcm",
      question:
        "Quelle institution indépendante peut être saisie gratuitement, même par un mineur, en cas de discrimination ?",
      choices: [
        "Le Défenseur des droits",
        "Le Sénat",
        "La Cour des comptes",
        "L'Académie française",
      ],
      answer: 0,
      explanation:
        "Le Défenseur des droits est une autorité indépendante chargée de défendre les personnes victimes de discriminations et, plus largement, de veiller au respect des droits. Toute personne, y compris un mineur, peut le saisir gratuitement, en ligne ou par courrier, sans avoir besoin d'un avocat.",
      hint: "Son nom dit exactement sa mission.",
    },
    {
      id: "h5emc-6",
      level: 2,
      type: "qcm",
      question:
        "Que signifie l'inclusion des personnes en situation de handicap ?",
      choices: [
        "Les personnes handicapées doivent s'adapter seules à la société",
        "La société adapte ses bâtiments, son école et ses mentalités pour que chacun y ait sa place",
        "Les personnes handicapées sont scolarisées dans des lieux séparés",
        "Seuls les handicaps visibles donnent droit à des aménagements",
      ],
      answer: 1,
      explanation:
        "L'inclusion renverse la logique : ce n'est pas à la personne handicapée de s'adapter seule à un monde conçu sans elle, c'est à la société de s'adapter (rampes d'accès, AESH à l'école, transports accessibles…). La loi de 2005 affirme ainsi le droit de chaque élève handicapé à être scolarisé, si possible dans l'école de son quartier.",
      hint: "Qui doit s'adapter à qui ?",
    },
    {
      id: "h5emc-7",
      level: 2,
      type: "input",
      question:
        "En quelle année la Sécurité sociale a-t-elle été créée en France, à la Libération ? (année seule)",
      answer: "1945",
      explanation:
        "La Sécurité sociale a été créée en 1945, juste après la Seconde Guerre mondiale. Elle organise la solidarité nationale : chacun cotise selon ses moyens et reçoit selon ses besoins. Elle rembourse les soins, verse des allocations familiales et des pensions de retraite.",
      hint: "L'année de la fin de la Seconde Guerre mondiale en Europe.",
    },
    {
      id: "h5emc-8",
      level: 2,
      type: "truefalse",
      question:
        "Le cyberharcèlement n'est pas puni par la loi quand son auteur est mineur.",
      answer: false,
      explanation:
        "Faux ! Le cyberharcèlement est un délit, et les mineurs peuvent être poursuivis et sanctionnés (la justice adapte les peines à leur âge). Leurs parents peuvent aussi devoir payer les dommages causés. « C'était pour rire » ou « je n'ai fait que partager » ne sont pas des excuses valables devant la loi.",
      hint: "Un collégien qui harcèle en ligne risque-t-il vraiment zéro conséquence ?",
    },
    {
      id: "h5emc-9",
      level: 3,
      type: "qcm",
      question:
        "Quel est le principe de fonctionnement de la Sécurité sociale ?",
      choices: [
        "Chacun reçoit exactement ce qu'il a versé, comme sur un compte d'épargne",
        "Seuls les plus riches cotisent et seuls les plus pauvres reçoivent",
        "Chacun cotise selon ses moyens et reçoit selon ses besoins",
        "Chacun choisit librement de cotiser ou non",
      ],
      answer: 2,
      explanation:
        "La Sécurité sociale repose sur la solidarité : chacun cotise selon ses moyens (plus on gagne, plus on cotise) et reçoit selon ses besoins (le malade est soigné, le retraité touche une pension, la famille reçoit des allocations). Ce n'est pas une épargne individuelle : le bien-portant d'aujourd'hui finance le malade d'aujourd'hui, et sera aidé à son tour s'il en a besoin.",
      hint: "Ce n'est pas un compte en banque personnel : c'est un pot commun.",
    },
    {
      id: "h5emc-10",
      level: 3,
      type: "input",
      question:
        "Quel humoriste a fondé les Restos du cœur en 1985 ? (son nom de scène, en minuscules)",
      answer: "coluche",
      explanation:
        "L'humoriste Coluche a lancé les Restos du cœur en 1985 avec une idée simple : distribuer des repas gratuits à ceux qui ont faim. Mort en 1986, il n'a vu que le premier hiver de son association, qui distribue aujourd'hui des millions de repas chaque année grâce à des dizaines de milliers de bénévoles. C'est un exemple emblématique de solidarité associative.",
      hint: "« On compte sur vous » : son appel à la radio a lancé la première campagne.",
    },
    {
      id: "h5emc-11",
      level: 3,
      type: "qcm",
      question:
        "Dans un couloir du collège, tu vois des élèves filmer un camarade pour se moquer de lui et partager la vidéo. Quelle est la meilleure réaction ?",
      choices: [
        "Ne rien faire : ce ne sont pas tes affaires",
        "Partager la vidéo pour montrer que tu es au courant",
        "Refuser de diffuser, soutenir le camarade et alerter un adulte du collège",
        "Filmer toi aussi pour avoir une preuve à montrer à tes amis",
      ],
      answer: 2,
      explanation:
        "Le témoin a un rôle décisif : sans public qui partage et qui rit, le harcèlement perd sa force. La bonne réaction : ne pas diffuser, montrer son soutien à la victime et prévenir un adulte (professeur, CPE, direction). Alerter n'est pas « balancer » : c'est protéger quelqu'un. Partager la vidéo, même « pour information », c'est participer au harcèlement et s'exposer soi-même à des sanctions.",
      hint: "Que devient une moquerie si personne ne la partage et qu'un adulte est prévenu ?",
    },
    {
      id: "h5emc-12",
      level: 3,
      type: "truefalse",
      question:
        "Puisque la loi proclame l'égalité en droit depuis 1789, il n'existe plus d'inégalités dans les faits en France.",
      answer: false,
      explanation:
        "Faux ! L'égalité en droit est un principe : la loi est la même pour tous. Mais dans les faits, des inégalités persistent : discriminations à l'embauche ou au logement, écarts de salaires entre femmes et hommes, lieux encore inaccessibles aux personnes handicapées… C'est justement pour réduire cet écart entre le droit et la réalité que la loi punit les discriminations et que la société agit, des associations à l'école.",
      hint: "Distingue le principe écrit dans la loi et la réalité vécue.",
    },
  ],
  videos: [
    { title: "Agir pour l'égalité et refuser les discriminations - EMC - collège - Les Bons Profs", youtubeId: "HJfHK2F5KI0", channel: "Les Bons Profs" },
  ],
};
