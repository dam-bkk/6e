import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg5-decouvertes-renaissance",
  subject: "histoire-geo",
  grade: "5e",
  num: 5,
  title: "Grandes découvertes et Renaissance",
  domain: "nombres",
  domainLabel: "Histoire",
  icon: "Ship",
  teaser:
    "Des caravelles de Colomb aux châteaux de la Loire : quand les Européens changent leur vision du monde.",
  objectives: [
    "Je sais raconter les grands voyages de découverte (Colomb, Magellan) et expliquer pourquoi ils ont eu lieu",
    "Je comprends comment se forment les premiers empires coloniaux et quelles violences ils entraînent",
    "Je sais décrire la Renaissance artistique à travers Léonard de Vinci, François Ier et Chambord",
    "Je peux expliquer ce qu'est l'humanisme et le rôle de l'imprimerie de Gutenberg",
    "Je connais la rupture religieuse lancée par Luther en 1517",
  ],
  lesson: [
    {
      title: "Les grands voyages de découverte",
      paragraphs: [
        "À la fin du XVe siècle, les Européens rêvent d'atteindre l'Asie par la mer pour se procurer directement les épices, la soie et l'or, sans passer par les marchands du Moyen-Orient. Les progrès techniques rendent ce rêve possible : la caravelle, un navire léger et maniable, la boussole et l'astrolabe permettent de naviguer loin des côtes.",
        "En 1492, le navigateur génois Christophe Colomb, financé par les rois d'Espagne, traverse l'océan Atlantique vers l'ouest. Il pense arriver en Asie… mais il aborde en réalité un continent inconnu des Européens : l'Amérique. Jusqu'à sa mort, Colomb restera persuadé d'avoir atteint les « Indes », c'est pourquoi il appelle les habitants des lieux les « Indiens ».",
        "En 1498, le Portugais Vasco de Gama atteint l'Inde en contournant l'Afrique. Puis l'expédition de Fernand de Magellan, partie en 1519, réalise le premier tour du monde : Magellan meurt en route aux Philippines, mais un de ses navires rentre en Espagne en 1522. La preuve est faite, par l'expérience, que la Terre est ronde et que les océans communiquent.",
      ],
      example: [
        "Colomb quitte l'Espagne le 3 août 1492 avec trois navires : la Santa María, la Pinta et la Niña.",
        "Après cinq semaines sans voir la terre, l'équipage est au bord de la révolte.",
        "Le 12 octobre 1492, une île des Caraïbes est enfin en vue : c'est la « découverte » de l'Amérique.",
      ],
      tip: "Retiens le trio de dates : 1492 Colomb traverse l'Atlantique, 1498 Vasco de Gama atteint l'Inde, 1519-1522 le tour du monde de Magellan.",
      figure: "hg5-grandes-decouvertes",
    },
    {
      title: "Les premiers empires coloniaux et leurs violences",
      paragraphs: [
        "Après les découvertes, l'Espagne et le Portugal se partagent les nouvelles terres par le traité de Tordesillas en 1494, sans demander leur avis aux peuples qui y vivent. Les deux royaumes fondent les premiers empires coloniaux : une colonie est un territoire conquis, dominé et exploité par un pays étranger.",
        "La conquête est d'une grande violence. Des soldats espagnols, les conquistadors, détruisent de puissants empires américains : Hernán Cortés soumet l'Empire aztèque au Mexique en 1521, Francisco Pizarro l'Empire inca au Pérou. Les armes à feu, les chevaux, les alliances avec des peuples révoltés et surtout les maladies apportées d'Europe, comme la variole, expliquent ces victoires : les épidémies tuent une grande partie des Amérindiens, qui n'avaient jamais rencontré ces microbes.",
        "Les colons exploitent les richesses : l'or et l'argent des mines, les plantations de canne à sucre. Les Amérindiens sont contraints au travail forcé. Comme ils meurent en masse, les Européens déportent des millions d'Africains réduits en esclavage vers l'Amérique : c'est le début de la traite atlantique, l'une des plus grandes tragédies de l'histoire.",
      ],
      example: [
        "Le prêtre espagnol Bartolomé de Las Casas dénonce dès le XVIe siècle les cruautés commises contre les Amérindiens.",
        "Son témoignage montre que, déjà à l'époque, certains Européens s'indignaient de ces violences.",
      ],
      tip: "Ne dis pas que Colomb a « découvert » un continent vide : l'Amérique était peuplée de dizaines de millions d'habitants, avec de grandes civilisations comme les Aztèques et les Incas.",
    },
    {
      title: "La Renaissance : un nouvel art de vivre et de créer",
      paragraphs: [
        "Aux XVe et XVIe siècles, un grand mouvement artistique naît en Italie, dans des villes riches comme Florence : la Renaissance. Les artistes redécouvrent les modèles de l'Antiquité grecque et romaine, étudient le corps humain et inventent la perspective, qui donne l'illusion de la profondeur dans un tableau.",
        "Léonard de Vinci est le parfait exemple de ces talents multiples : peintre de La Joconde, mais aussi ingénieur, anatomiste et inventeur, il remplit des carnets de croquis de machines extraordinaires. Les artistes travaillent pour de riches protecteurs, les mécènes : princes, papes ou banquiers qui financent leurs œuvres.",
        "Le roi de France François Ier, monté sur le trône en 1515, fait venir la Renaissance en France. Il invite Léonard de Vinci, qui passe les dernières années de sa vie près d'Amboise, au Clos Lucé. François Ier lance aussi la construction du château de Chambord, dans le Val de Loire : un château de plaisance aux immenses fenêtres et au célèbre escalier à double révolution, bien loin des sombres châteaux forts du Moyen Âge.",
      ],
      example: [
        "La Joconde, peinte par Léonard de Vinci au début du XVIe siècle, est aujourd'hui exposée au musée du Louvre à Paris.",
        "Son sourire mystérieux en a fait le tableau le plus célèbre du monde.",
      ],
      tip: "Château fort = se défendre (tours, remparts, meurtrières). Château de la Renaissance = montrer sa richesse et recevoir (grandes fenêtres, jardins, décors sculptés). Compare Chambord à un donjon médiéval : tout change !",
    },
    {
      title: "L'humanisme et la révolution de l'imprimerie",
      paragraphs: [
        "À la même époque, des savants appelés humanistes placent l'être humain au centre de leurs réflexions. Ils relisent les textes antiques dans leur langue d'origine, croient en l'éducation et osent critiquer les défauts de leur temps, y compris ceux de l'Église. L'humaniste néerlandais Érasme, surnommé le « prince des humanistes », correspond avec des savants de toute l'Europe ; en France, François Rabelais imagine l'éducation idéale du géant Gargantua.",
        "Cette circulation des idées est rendue possible par une invention décisive : l'imprimerie à caractères mobiles, mise au point par l'Allemand Gutenberg vers 1450, à Mayence. Son premier grand livre imprimé est une Bible. Avant, chaque livre était copié à la main pendant des mois par des moines copistes ; désormais, on peut en produire des centaines d'exemplaires rapidement et pour moins cher.",
        "Grâce à l'imprimerie, les livres, les idées humanistes et bientôt les débats religieux se diffusent à grande vitesse dans toute l'Europe. C'est une révolution comparable à l'arrivée d'Internet à notre époque.",
      ],
      example: [
        "Un manuscrit copié à la main demandait parfois plus d'un an de travail.",
        "Vers 1500, à peine cinquante ans après l'invention de Gutenberg, des millions de livres ont déjà été imprimés en Europe.",
      ],
      tip: "Pour relier les idées du chapitre : imprimerie (vers 1450) → diffusion des idées humanistes → diffusion des critiques contre l'Église → succès de la Réforme de Luther. Une invention technique peut changer toute une société.",
    },
    {
      title: "Luther et la rupture religieuse",
      paragraphs: [
        "Au début du XVIe siècle, beaucoup de chrétiens critiquent l'Église catholique : certains prêtres sont jugés ignorants, et surtout l'Église vend des « indulgences », des pardons censés réduire la punition des péchés, notamment pour financer la basilique Saint-Pierre de Rome.",
        "En 1517, le moine allemand Martin Luther publie 95 thèses contre les indulgences. Pour lui, seule la foi sauve le croyant, et chacun doit pouvoir lire la Bible dans sa langue : il la traduit en allemand. Refusant de se soumettre, il est exclu de l'Église catholique par le pape. Ses partisans, qui « protestent », fondent une nouvelle branche du christianisme : le protestantisme. C'est la Réforme.",
        "Diffusées par l'imprimerie, les idées de Luther, puis celles du réformateur français Jean Calvin, gagnent une grande partie de l'Europe. La chrétienté occidentale se divise entre catholiques et protestants, et cette division provoquera en France de terribles guerres de religion dans la seconde moitié du XVIe siècle.",
      ],
      example: [
        "En France, le conflit entre catholiques et protestants culmine avec le massacre de la Saint-Barthélemy à Paris, en 1572, où des milliers de protestants sont tués.",
        "En 1598, le roi Henri IV rétablit la paix par l'édit de Nantes, qui autorise le culte protestant dans le royaume.",
      ],
      tip: "1517 : retiens que Luther « affiche » ses 95 thèses. Un chiffre facile : 15-17, deux nombres qui se suivent presque, au tout début du XVIe siècle.",
    },
  ],
  exercises: [
    {
      id: "h5ren-1",
      level: 1,
      type: "qcm",
      question:
        "En quelle année Christophe Colomb traverse-t-il l'Atlantique et atteint-il l'Amérique ?",
      choices: ["1453", "1492", "1517", "1515"],
      answer: 1,
      explanation:
        "Christophe Colomb quitte l'Espagne en août 1492 et atteint une île des Caraïbes le 12 octobre 1492. C'est la date repère des grandes découvertes. 1453 est la chute de Constantinople, 1515 l'arrivée de François Ier sur le trône, 1517 les 95 thèses de Luther.",
      hint: "C'est la date repère la plus célèbre du chapitre, à la toute fin du XVe siècle.",
    },
    {
      id: "h5ren-2",
      level: 1,
      type: "qcm",
      question:
        "Comment s'appelle le navire léger et maniable utilisé par les explorateurs portugais et espagnols au XVe siècle ?",
      choices: ["La galère", "Le drakkar", "La caravelle", "Le paquebot"],
      answer: 2,
      explanation:
        "La caravelle est un navire léger, rapide et maniable, capable d'affronter la haute mer : c'est le navire des grandes découvertes. La galère est un navire à rames de la Méditerranée, le drakkar celui des Vikings, et le paquebot n'existera qu'au XIXe siècle.",
      hint: "Son nom commence comme « caravane ».",
    },
    {
      id: "h5ren-3",
      level: 1,
      type: "truefalse",
      question:
        "Christophe Colomb savait qu'il avait découvert un nouveau continent, l'Amérique.",
      answer: false,
      explanation:
        "Faux ! Jusqu'à sa mort, Colomb est resté persuadé d'avoir atteint l'Asie, les « Indes ». C'est pourquoi il a appelé les habitants les « Indiens ». Ce sont d'autres Européens qui ont compris ensuite qu'il s'agissait d'un continent inconnu d'eux, bientôt nommé Amérique.",
      hint: "Pourquoi a-t-il appelé les habitants les « Indiens » ?",
    },
    {
      id: "h5ren-4",
      level: 1,
      type: "input",
      question:
        "Quel inventeur allemand met au point l'imprimerie à caractères mobiles vers 1450 ? (nom de famille, en minuscules)",
      answer: "gutenberg",
      explanation:
        "Johannes Gutenberg met au point l'imprimerie à caractères mobiles vers 1450, dans la ville allemande de Mayence. Son premier grand livre imprimé est une Bible. Cette invention permet de produire les livres beaucoup plus vite et moins cher, et de diffuser les idées dans toute l'Europe.",
      hint: "Son nom est resté attaché à sa célèbre Bible imprimée.",
    },
    {
      id: "h5ren-5",
      level: 2,
      type: "qcm",
      question:
        "Quel est le principal objectif des Européens quand ils se lancent dans les grands voyages d'exploration à la fin du XVe siècle ?",
      choices: [
        "Prouver que la Terre est plate",
        "Atteindre l'Asie par la mer pour ses richesses (épices, soie, or)",
        "Fuir une épidémie de peste",
        "Découvrir l'Amérique",
      ],
      answer: 1,
      explanation:
        "Les Européens cherchent une route maritime directe vers l'Asie pour se procurer épices, soie et or sans intermédiaires. Personne ne cherchait l'Amérique : les Européens ignoraient son existence, et Colomb l'a rencontrée « par accident » en voulant rejoindre l'Asie par l'ouest.",
      hint: "Que voulaient rapporter les marchands, et de quel continent ?",
    },
    {
      id: "h5ren-6",
      level: 2,
      type: "qcm",
      question:
        "Qu'a démontré l'expédition de Magellan (1519-1522) ?",
      choices: [
        "Que l'Atlantique est infranchissable",
        "Que l'Afrique est un continent",
        "Qu'on peut faire le tour du monde en bateau, car la Terre est ronde",
        "Que l'Amérique est reliée à l'Asie",
      ],
      answer: 2,
      explanation:
        "Partie d'Espagne en 1519, l'expédition de Magellan boucle le premier tour du monde en 1522. Magellan lui-même meurt en route aux Philippines, mais un navire rentre en Espagne. Ce voyage prouve par l'expérience que la Terre est ronde et que tous les océans communiquent.",
      hint: "L'expédition est revenue à son point de départ… sans faire demi-tour.",
    },
    {
      id: "h5ren-7",
      level: 2,
      type: "input",
      question:
        "En quelle année Martin Luther publie-t-il ses 95 thèses contre les indulgences ? (année seule)",
      answer: "1517",
      explanation:
        "En 1517, le moine allemand Martin Luther publie 95 thèses pour dénoncer la vente des indulgences par l'Église catholique. C'est le point de départ de la Réforme protestante, qui divise la chrétienté occidentale entre catholiques et protestants.",
      hint: "Au tout début du XVIe siècle : 15 puis presque le nombre suivant.",
    },
    {
      id: "h5ren-8",
      level: 2,
      type: "truefalse",
      question:
        "Le château de Chambord, lancé par François Ier, est un château fort construit pour se défendre contre les ennemis.",
      answer: false,
      explanation:
        "Faux ! Chambord est un château de plaisance de la Renaissance : grandes fenêtres, escalier à double révolution, décors raffinés. Il sert à montrer la puissance et le goût du roi, et à recevoir la cour, pas à soutenir un siège comme un château fort du Moyen Âge.",
      hint: "Observe ses immenses fenêtres : pratiques pour se défendre ?",
    },
    {
      id: "h5ren-9",
      level: 3,
      type: "qcm",
      question:
        "Pourquoi les épidémies ont-elles joué un rôle majeur dans la conquête de l'Amérique par les Espagnols ?",
      choices: [
        "Les Européens tombaient malades et repartaient chez eux",
        "Les maladies venues d'Europe, comme la variole, ont décimé les Amérindiens qui n'y avaient jamais été exposés",
        "Les Amérindiens ont contaminé volontairement les conquistadors",
        "Les épidémies n'ont eu aucun rôle : seules les armes ont compté",
      ],
      answer: 1,
      explanation:
        "Les Amérindiens n'avaient jamais rencontré les microbes européens comme la variole : leur corps n'avait aucune défense contre eux. Les épidémies ont tué une très grande partie de la population amérindienne, souvent avant même l'arrivée des soldats. Avec les armes à feu, les chevaux et les alliances locales, c'est l'une des clés des victoires de Cortés et Pizarro.",
      hint: "Que se passe-t-il quand un microbe rencontre une population qui ne l'a jamais croisé ?",
    },
    {
      id: "h5ren-10",
      level: 3,
      type: "input",
      question:
        "Quel conquistador espagnol soumet l'Empire aztèque au Mexique en 1521 ? (nom de famille, en minuscules)",
      answer: "cortes",
      accept: ["cortés", "cortez", "hernan cortes", "hernán cortés"],
      explanation:
        "Hernán Cortés débarque au Mexique en 1519 et s'empare de Tenochtitlan, la capitale aztèque, en 1521. Il s'appuie sur ses armes à feu, ses chevaux, des alliances avec des peuples soumis aux Aztèques et les ravages de la variole. Ne le confonds pas avec Pizarro, qui conquiert l'Empire inca au Pérou.",
      hint: "Pizarro, c'est les Incas ; lui, ce sont les Aztèques.",
    },
    {
      id: "h5ren-11",
      level: 3,
      type: "qcm",
      question:
        "Quel lien peut-on établir entre l'imprimerie de Gutenberg et le succès de la Réforme de Luther ?",
      choices: [
        "Aucun : l'imprimerie a été inventée après Luther",
        "L'imprimerie a permis de diffuser rapidement les idées de Luther dans toute l'Europe",
        "Gutenberg a écrit les 95 thèses avec Luther",
        "L'Église a utilisé l'imprimerie pour interdire les livres de Luther",
      ],
      answer: 1,
      explanation:
        "L'imprimerie, mise au point vers 1450, existe depuis plus de soixante ans quand Luther publie ses 95 thèses en 1517. Grâce à elle, ses textes et sa traduction allemande de la Bible sont reproduits à des milliers d'exemplaires et circulent très vite dans toute l'Europe. Sans l'imprimerie, la Réforme ne se serait sans doute pas répandue aussi rapidement.",
      hint: "Compare les dates : vers 1450 pour l'invention, 1517 pour les thèses.",
    },
    {
      id: "h5ren-12",
      level: 3,
      type: "truefalse",
      question:
        "Les humanistes de la Renaissance refusaient toute critique de l'Église et interdisaient la lecture des textes antiques.",
      answer: false,
      explanation:
        "Faux, et c'est même le contraire deux fois ! Les humanistes, comme Érasme ou Rabelais, redécouvrent et étudient passionnément les textes de l'Antiquité grecque et romaine, dans leur langue d'origine. Et ils osent critiquer les défauts de leur époque, y compris ceux de l'Église, en misant sur l'éducation pour rendre l'être humain meilleur.",
      hint: "Que signifie « placer l'être humain au centre de la réflexion » ?",
    },
  ],
  videos: [
    { title: "Les 4 grandes expéditions maritimes - Nota Bene #14", youtubeId: "0JAIom9NSoo", channel: "Nota Bene" },
  ],
};
