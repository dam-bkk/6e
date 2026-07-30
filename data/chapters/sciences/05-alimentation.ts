import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci-alimentation",
  subject: "sciences",
  num: 5,
  title: "Nutrition et alimentation",
  domain: "nombres",
  domainLabel: "Le corps",
  icon: "Utensils",
  teaser: "Pourquoi on mange, comment équilibrer ses repas et pourquoi le froid conserve.",
  objectives: [
    "Je sais expliquer à quoi servent les aliments pour mon organisme",
    "Je connais les familles d'aliments et je sais composer un repas équilibré",
    "Je sais reconnaître l'origine animale ou végétale d'un aliment et repérer une transformation",
    "Je sais expliquer pourquoi le froid, la cuisson, le sel ou le sucre conservent les aliments",
    "Je connais les règles d'hygiène alimentaire essentielles",
  ],
  lesson: [
    {
      title: "Pourquoi les êtres vivants se nourrissent",
      paragraphs: [
        "Les aliments apportent deux choses indispensables. D'abord de l'énergie : elle sert à bouger, mais aussi, en permanence, à faire battre le cœur, respirer, réfléchir et maintenir la température du corps autour de 37 °C. C'est pour cela qu'on consomme de l'énergie même en dormant.",
        "Ensuite de la matière : elle permet de construire le corps pendant la croissance et de le réparer sans arrêt. Ta peau, tes cheveux, tes muscles se renouvellent grâce à ce que tu manges.",
        "Les besoins ne sont pas les mêmes pour tout le monde : ils dépendent de l'âge, de la taille et surtout de l'activité physique. Un enfant de 11 ans a besoin d'environ 2 000 kcal par jour, un adulte très sportif peut dépasser 3 500 kcal. Manger nettement plus que ses besoins, sur une longue durée, déséquilibre l'organisme, tout comme manger nettement moins.",
      ],
      example: [
        "Une heure de basket dépense environ 400 kcal, une heure passée assise à lire environ 80 kcal.",
        "Le corps a aussi besoin d'eau en grande quantité : environ 1,5 L de boisson par jour, davantage quand il fait chaud ou après le sport.",
      ],
      tip: "Deux rôles à retenir : de l'énergie pour fonctionner, de la matière pour grandir et se réparer.",
    },
    {
      title: "Les familles d'aliments et l'équilibre",
      paragraphs: [
        "On classe les aliments en familles selon ce qu'ils apportent : les boissons, les produits laitiers, les viandes-poissons-œufs, les féculents (pain, pâtes, riz, pommes de terre, lentilles), les fruits et légumes, les matières grasses et les produits sucrés.",
        "Aucun aliment n'apporte à lui seul tout ce dont le corps a besoin : l'équilibre alimentaire consiste donc à varier. On recommande au moins 5 fruits et légumes par jour, des féculents à chaque repas, des produits laitiers pour le calcium, et de limiter les matières grasses et les produits sucrés, qui apportent beaucoup d'énergie mais peu de matière utile.",
        "Une seule boisson est indispensable : l'eau. Les sodas et les jus sucrés ne sont pas nécessaires ; un verre de soda de 33 cL contient environ 35 g de sucre, soit à peu près 7 morceaux. Enfin, aucun aliment n'est interdit : c'est la fréquence et la quantité qui comptent.",
      ],
      example: [
        "Repas équilibré : carottes râpées, poisson, riz, yaourt, une pomme, de l'eau.",
        "Repas déséquilibré : frites, soda, barre chocolatée. Beaucoup d'énergie, presque aucun légume, aucun produit laitier, et une boisson sucrée à la place de l'eau.",
      ],
      tip: "Un repas équilibré tient dans une phrase : un légume, un féculent, une source de protéines, un produit laitier, un fruit, et de l'eau.",
    },
    {
      title: "D'où viennent les aliments",
      paragraphs: [
        "Un aliment est d'origine animale s'il provient d'un animal : viande, poisson, œuf, lait, fromage, miel. Il est d'origine végétale s'il provient d'une plante : fruits, légumes, céréales, légumes secs, huile de tournesol, cacao.",
        "Beaucoup d'aliments ne sont pas consommés tels qu'ils sortent de la ferme : ils sont transformés. Le blé est moulu en farine, puis la farine, l'eau, le sel et la levure donnent la pâte à pain, qui gonfle et est cuite au four.",
        "Certaines transformations font appel à des micro-organismes, des êtres vivants microscopiques. La levure fait gonfler le pain, des bactéries transforment le lait en yaourt et en fromage. Les micro-organismes ne sont donc pas tous nuisibles : beaucoup sont utiles, et même indispensables.",
      ],
      example: [
        "Lait + bactéries lactiques, maintenus vers 45 °C → yaourt.",
        "Blé → farine → pain. Betterave ou canne à sucre → sucre. Olives → huile d'olive.",
      ],
      tip: "Pour trouver l'origine d'un aliment transformé, remonte à sa matière première : le beurre vient du lait, donc d'un animal.",
    },
    {
      title: "Conserver les aliments",
      paragraphs: [
        "Un aliment s'abîme parce que des micro-organismes (bactéries, moisissures) s'y développent et s'y multiplient. Ils ont besoin de chaleur, d'humidité et de nourriture. Toutes les techniques de conservation consistent à leur retirer au moins une de ces conditions.",
        "Le froid ralentit fortement leur multiplication : au réfrigérateur, vers 4 °C, un yaourt se garde quelques semaines. Au congélateur, à −18 °C, la multiplication est pratiquement arrêtée. Attention, le froid ne tue pas les micro-organismes : dès que l'aliment se réchauffe, ils repartent de plus belle, et c'est pourquoi on ne recongèle jamais un produit décongelé.",
        "La chaleur, elle, détruit les micro-organismes : c'est le rôle de la cuisson, de la pasteurisation et de la stérilisation des conserves. Le sel et le sucre, en très grande quantité, privent les micro-organismes de l'eau dont ils ont besoin : c'est le principe du jambon salé, de la confiture et du poisson séché. Le sous-vide, lui, prive d'air les micro-organismes qui en ont besoin.",
      ],
      example: [
        "Une conserve stérilisée se garde plusieurs années à température ambiante ; une fois ouverte, elle doit passer au réfrigérateur et être consommée en 2 ou 3 jours.",
        "La confiture contient presque autant de sucre que de fruits : c'est ce sucre qui la conserve.",
      ],
      tip: "Le froid met les micro-organismes en pause, la chaleur les détruit. Ce n'est pas du tout la même chose.",
    },
    {
      title: "L'hygiène alimentaire",
      paragraphs: [
        "Se laver les mains avec du savon avant de cuisiner et avant de manger est le geste le plus efficace pour éviter d'apporter des micro-organismes dans les aliments. On lave aussi les fruits et les légumes avant de les consommer.",
        "Il faut respecter la chaîne du froid : ranger rapidement les produits frais au réfrigérateur en rentrant des courses, et ne pas laisser un plat cuisiné refroidir des heures sur le plan de travail. Les dates indiquées sur les emballages doivent être lues : « à consommer jusqu'au » est une limite à ne pas dépasser, tandis que « à consommer de préférence avant » signale seulement une perte de qualité.",
        "Enfin, on évite de mettre en contact les aliments crus et les aliments cuits, et on utilise une planche et un couteau propres pour chacun. C'est ainsi qu'on limite les intoxications alimentaires, qui provoquent maux de ventre, vomissements et fièvre.",
      ],
      example: [
        "Une viande hachée crue laissée 3 heures à 25 °C sur la table peut devenir dangereuse : la température ambiante est idéale pour la multiplication des bactéries.",
        "Se laver les mains 30 secondes au savon élimine la grande majorité des micro-organismes présents sur la peau.",
      ],
      tip: "Trois réflexes : mains propres, froid respecté, dates vérifiées.",
    },
  ],
  exercises: [
    {
      id: "sali-1",
      level: 1,
      type: "qcm",
      question: "À quoi servent principalement les aliments pour notre organisme ?",
      choices: [
        "Uniquement à nous faire plaisir",
        "À fournir de l'énergie et de la matière pour grandir et se réparer",
        "À nous réchauffer seulement quand il fait froid",
        "À remplacer l'eau que nous buvons",
      ],
      answer: 1,
      explanation:
        "Les aliments apportent de l'énergie (pour bouger, respirer, faire battre le cœur, maintenir le corps à 37 °C) et de la matière (pour construire et renouveler le corps). Le plaisir de manger existe bien, mais ce n'est pas le rôle biologique des aliments, et rien ne remplace l'eau.",
      hint: "Il y a deux rôles, pas un seul.",
    },
    {
      id: "sali-2",
      level: 1,
      type: "input",
      question:
        "Quelle est la seule boisson vraiment indispensable à l'organisme ? (un mot, en minuscules)",
      answer: "eau",
      accept: ["l'eau", "de l'eau"],
      explanation:
        "L'eau est la seule boisson indispensable : le corps en perd en permanence par la respiration, la transpiration et l'urine, et il faut la remplacer. Les sodas et les jus sucrés ne sont jamais nécessaires : ils apportent surtout du sucre.",
    },
    {
      id: "sali-3",
      level: 1,
      type: "truefalse",
      question: "Le lait, le beurre et le fromage sont des aliments d'origine animale.",
      answer: true,
      explanation:
        "Vrai. Ces trois aliments sont fabriqués à partir du lait, produit par un animal : ils sont donc tous d'origine animale, même après transformation. Pour trouver l'origine d'un aliment transformé, il faut toujours remonter à sa matière première.",
      hint: "De quoi le beurre est-il fabriqué ?",
    },
    {
      id: "sali-4",
      level: 1,
      type: "qcm",
      question: "Pourquoi met-on le yaourt au réfrigérateur ?",
      choices: [
        "Pour qu'il ait meilleur goût uniquement",
        "Pour ralentir la multiplication des micro-organismes",
        "Pour tuer tous les micro-organismes qu'il contient",
        "Pour qu'il devienne plus nourrissant",
      ],
      answer: 1,
      explanation:
        "Le froid ralentit très fortement la multiplication des micro-organismes, ce qui empêche l'aliment de s'abîmer vite. Attention : le froid ne les tue pas, il les met en pause. Dès que l'aliment se réchauffe, ils recommencent à se multiplier.",
      hint: "Le froid tue-t-il les microbes, ou les ralentit-il ?",
    },
    {
      id: "sali-5",
      level: 2,
      type: "qcm",
      question:
        "Quel micro-organisme utilise-t-on pour transformer le lait en yaourt ?",
      choices: [
        "Des bactéries lactiques",
        "Des moisissures du pain",
        "Aucun, il suffit de chauffer le lait",
        "Des insectes microscopiques",
      ],
      answer: 0,
      explanation:
        "Le yaourt s'obtient en ajoutant au lait des bactéries lactiques, puis en le maintenant au chaud, vers 45 °C : elles transforment le lait, qui devient épais et légèrement acide. C'est un bel exemple de micro-organismes utiles, car tous ne sont pas nuisibles.",
      hint: "Ce sont des êtres microscopiques utiles, dont le nom vient du lait.",
    },
    {
      id: "sali-6",
      level: 2,
      type: "truefalse",
      question:
        "Un aliment sorti du congélateur et décongelé peut être recongelé sans problème.",
      answer: false,
      explanation:
        "Faux, et c'est important. Le congélateur n'a pas tué les micro-organismes, il a seulement arrêté leur multiplication. Pendant la décongélation, ils se remettent à se multiplier ; recongeler ne les élimine pas et l'aliment peut devenir dangereux. On cuisine un produit décongelé, puis on le consomme.",
      hint: "Le froid tue-t-il les micro-organismes ?",
    },
    {
      id: "sali-7",
      level: 2,
      type: "input",
      question:
        "Un enfant a besoin d'environ 2 000 kcal par jour. S'il consomme 650 kcal au petit-déjeuner et au déjeuner réunis, combien de kcal lui reste-t-il pour la fin de la journée ?",
      answer: "1350",
      accept: ["1 350"],
      explanation:
        "2 000 − 650 = 1 350 kcal. Ce calcul n'est bien sûr qu'un ordre de grandeur : les besoins réels dépendent de l'âge, de la taille et surtout de l'activité physique de la journée.",
      hint: "Il s'agit d'une simple soustraction.",
    },
    {
      id: "sali-8",
      level: 2,
      type: "qcm",
      question: "Pourquoi la confiture se conserve-t-elle très longtemps ?",
      choices: [
        "Parce que les fruits cuits ne s'abîment jamais",
        "Parce que la très grande quantité de sucre empêche les micro-organismes de se développer",
        "Parce qu'elle est toujours conservée au congélateur",
        "Parce que le sucre apporte beaucoup d'énergie",
      ],
      answer: 1,
      explanation:
        "Le sucre, en très grande quantité, retient l'eau et prive les micro-organismes de l'eau dont ils ont besoin pour se multiplier. Le sel joue le même rôle dans le jambon sec ou le poisson salé. Que le sucre soit énergétique n'a rien à voir avec la conservation.",
      hint: "De quoi les micro-organismes ont-ils besoin, en plus de la chaleur ?",
    },
    {
      id: "sali-9",
      level: 3,
      type: "qcm",
      question:
        "Un élève propose ce déjeuner : frites, soda, glace au chocolat. Quel est le principal problème ?",
      choices: [
        "Il manque des légumes et un produit laitier, et la boisson est sucrée",
        "Il n'y a pas assez d'énergie pour l'après-midi",
        "Il ne faut jamais manger de frites",
        "Il n'y a aucun problème, le repas est varié",
      ],
      answer: 0,
      explanation:
        "Ce repas apporte beaucoup d'énergie (matières grasses et produits sucrés) mais aucun légume, aucun fruit, presque pas de protéines, et le soda remplace l'eau. Il n'est pas question d'interdire les frites : ce sont la fréquence et la quantité qui comptent, et un repas doit rester varié.",
      hint: "Compare avec la règle du repas équilibré : légume, féculent, protéines, laitier, fruit, eau.",
    },
    {
      id: "sali-10",
      level: 3,
      type: "input",
      question:
        "Une canette de soda de 33 cL contient environ 35 g de sucre. Un morceau de sucre pèse 5 g. À combien de morceaux de sucre cela correspond-il ?",
      answer: "7",
      accept: ["sept"],
      explanation:
        "35 ÷ 5 = 7 morceaux de sucre dans une seule canette. C'est pour cela que les boissons sucrées ne remplacent pas l'eau : on avale beaucoup de sucre sans s'en rendre compte, parce qu'il est dissous et qu'on ne le voit pas.",
      hint: "Divise la masse totale de sucre par la masse d'un morceau.",
    },
    {
      id: "sali-11",
      level: 3,
      type: "truefalse",
      question:
        "Une viande hachée crue laissée 3 heures sur la table à 25 °C peut devenir dangereuse à consommer.",
      answer: true,
      explanation:
        "Vrai. Autour de 25 °C, les bactéries se multiplient très rapidement dans un aliment humide et riche comme la viande hachée : quelques heures suffisent pour atteindre des quantités dangereuses. C'est pourquoi on respecte la chaîne du froid et qu'on ne laisse pas les produits frais à température ambiante.",
      hint: "Quelles conditions font se multiplier les micro-organismes ?",
    },
    {
      id: "sali-12",
      level: 3,
      type: "qcm",
      question:
        "Deux sportifs mangent la même chose. L'un court 2 heures par jour, l'autre ne fait pas de sport. Que peut-on dire de leurs besoins ?",
      choices: [
        "Leurs besoins en énergie sont identiques",
        "Le coureur a besoin de plus d'énergie, car il en dépense davantage",
        "Celui qui ne fait pas de sport a besoin de plus d'énergie pour se réchauffer",
        "Les besoins ne dépendent que de la taille",
      ],
      answer: 1,
      explanation:
        "Les besoins en énergie dépendent de l'âge, de la taille et surtout de l'activité physique. Courir 2 heures dépense beaucoup d'énergie : le coureur a donc besoin d'apports plus importants. Attention, cela ne veut pas dire manger n'importe quoi : l'alimentation doit rester variée et équilibrée.",
      hint: "Qui dépense le plus d'énergie dans la journée ?",
    },
  ],
  videos: [
    { title: "Comment avoir une alimentation saine ! - C'est pas sorcier", youtubeId: "GMr1WAT7OZ8", channel: "C'est pas sorcier" },
  ],
};
