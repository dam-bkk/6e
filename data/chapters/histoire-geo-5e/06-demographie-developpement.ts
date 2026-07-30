import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "hg5-demographie-developpement",
  subject: "histoire-geo",
  grade: "5e",
  num: 6,
  title: "Démographie et développement",
  domain: "grandeurs",
  domainLabel: "Géographie",
  icon: "Users",
  teaser:
    "8 milliards d'humains sur Terre : où vivent-ils, et pourquoi ne vivent-ils pas tous aussi bien ?",
  objectives: [
    "Je sais que la Terre compte environ 8 milliards d'habitants depuis 2022 et où se concentre la population",
    "Je comprends ce qu'est la transition démographique et pourquoi la croissance ralentit",
    "Je sais mesurer le développement d'un pays avec des indicateurs comme l'IDH",
    "Je comprends que les inégalités existent à toutes les échelles : entre pays, dans un pays, dans une ville",
    "Je peux expliquer ce qu'est le développement durable et ses trois piliers",
  ],
  lesson: [
    {
      title: "8 milliards d'humains sur la Terre",
      paragraphs: [
        "En novembre 2022, la population mondiale a franchi le cap des 8 milliards d'habitants. La croissance a été fulgurante : nous étions environ 1 milliard vers 1800, 2,5 milliards en 1950 et 6 milliards en 2000. Jamais l'humanité n'avait grandi aussi vite qu'au XXe siècle.",
        "Cette population est très inégalement répartie. Près de 60 % des humains vivent en Asie : l'Inde, devenue le pays le plus peuplé du monde en 2023, et la Chine dépassent chacune 1,4 milliard d'habitants. Les grands foyers de peuplement sont l'Asie du Sud, l'Asie de l'Est et l'Europe ; à l'inverse, les déserts chauds ou froids, les hautes montagnes et les grandes forêts denses restent presque vides.",
        "Aujourd'hui, la croissance mondiale ralentit, mais elle reste forte en Afrique : c'est le continent le plus jeune, et sa population devrait presque doubler d'ici 2050. Selon les projections de l'ONU, la population mondiale devrait culminer à un peu plus de 10 milliards vers la fin du XXIe siècle, avant de se stabiliser.",
      ],
      example: [
        "Le Nigeria, pays le plus peuplé d'Afrique avec plus de 220 millions d'habitants, pourrait dépasser les États-Unis avant 2050.",
        "À l'inverse, le Japon perd des habitants chaque année : sa population vieillit et les naissances y sont peu nombreuses.",
      ],
      tip: "Trois chiffres à retenir : 1 milliard vers 1800, 8 milliards en 2022, environ 10 milliards attendus à la fin du siècle. La croissance continue, mais elle ralentit.",
    },
    {
      title: "La transition démographique",
      paragraphs: [
        "Pourquoi la population mondiale a-t-elle explosé, puis ralenti ? Les géographes expliquent ce phénomène par la transition démographique : le passage d'un régime où natalité et mortalité sont toutes les deux élevées à un régime où elles sont toutes les deux faibles.",
        "Tout commence par la baisse de la mortalité : grâce aux progrès de la médecine, des vaccins, de l'hygiène et de l'alimentation, on meurt beaucoup moins jeune. Mais la natalité, elle, reste d'abord élevée : pendant cette période, les naissances dépassent largement les décès et la population augmente très vite. C'est l'explosion démographique.",
        "Dans un second temps, la natalité baisse à son tour : les familles ont moins d'enfants, notamment quand les filles sont scolarisées plus longtemps et que la vie en ville se développe. La croissance ralentit alors, jusqu'à devenir très faible. Les pays du monde n'en sont pas tous au même stade : l'Europe et l'Asie de l'Est ont achevé leur transition, tandis que plusieurs pays d'Afrique, comme le Niger, sont encore en pleine croissance.",
      ],
      example: [
        "Au Niger, une femme a en moyenne plus de 6 enfants : la population du pays augmente très rapidement.",
        "En Europe, la moyenne est inférieure à 2 enfants par femme : sans immigration, la population de nombreux pays diminuerait.",
      ],
      tip: "Retiens l'ordre : la mortalité baisse D'ABORD, la natalité baisse ENSUITE. C'est ce décalage entre les deux qui provoque l'explosion démographique.",
    },
    {
      title: "Mesurer le développement : l'IDH",
      paragraphs: [
        "Le développement, c'est l'amélioration des conditions de vie d'une population : se nourrir, se soigner, s'instruire, se loger. Pour le mesurer, la richesse ne suffit pas : un pays peut être riche grâce à son pétrole sans que tous ses habitants vivent bien.",
        "C'est pourquoi l'ONU utilise l'IDH, l'indice de développement humain. Il combine trois éléments : la santé (mesurée par l'espérance de vie), l'éducation (la durée des études) et le niveau de vie (le revenu moyen par habitant). L'IDH est un nombre compris entre 0 et 1 : plus il est proche de 1, plus le pays est développé.",
        "La carte mondiale de l'IDH révèle de fortes inégalités : les pays d'Europe, d'Amérique du Nord, le Japon ou l'Australie ont un IDH très élevé, souvent supérieur à 0,9, comme la Norvège ou la Suisse. À l'opposé, plusieurs pays d'Afrique subsaharienne, comme le Niger ou le Tchad, ont un IDH inférieur à 0,5. Entre les deux, des pays émergents comme la Chine ou le Brésil progressent rapidement.",
      ],
      example: [
        "La Norvège a un IDH supérieur à 0,95 : espérance de vie de plus de 83 ans, études longues, revenus élevés.",
        "Le Niger a un IDH d'environ 0,4 : l'espérance de vie y est plus courte et beaucoup d'enfants quittent tôt l'école.",
      ],
      tip: "IDH = santé + éducation + niveau de vie, une note entre 0 et 1. Astuce : trois lettres, trois critères.",
    },
    {
      title: "Des inégalités à toutes les échelles",
      paragraphs: [
        "Les inégalités de développement ne séparent pas seulement les pays riches des pays pauvres : on les retrouve à toutes les échelles, c'est-à-dire à tous les niveaux de zoom de la carte.",
        "À l'échelle mondiale, l'écart est immense entre un habitant de la Norvège et un habitant du Niger. Mais à l'échelle d'un pays, il existe aussi des régions favorisées et des régions en difficulté : au Brésil, le Sud-Est autour de São Paulo concentre les richesses, tandis que le Nordeste reste plus pauvre.",
        "À l'échelle d'une ville enfin, des quartiers très riches côtoient parfois des quartiers très pauvres. Dans certaines métropoles comme Mumbai en Inde ou Rio de Janeiro au Brésil, des immeubles modernes se dressent à quelques centaines de mètres de bidonvilles, ces quartiers d'habitations précaires construites par leurs habitants. Même dans les pays riches, des écarts importants existent entre quartiers d'une même agglomération.",
      ],
      example: [
        "À Mumbai, le quartier de Dharavi, l'un des plus grands bidonvilles d'Asie, se trouve à proximité de tours de bureaux ultramodernes.",
        "Environ un milliard de personnes dans le monde vivent aujourd'hui dans des bidonvilles.",
      ],
      tip: "Pour analyser une inégalité en géographie, demande-toi toujours : à quelle échelle ? Monde, pays, région ou quartier — les contrastes existent partout.",
    },
    {
      title: "Le développement durable : répondre aux besoins sans épuiser la planète",
      paragraphs: [
        "Nourrir, loger, transporter et équiper 8 milliards d'humains, et bientôt 10, exerce une pression énorme sur la planète : ressources épuisées, pollutions, déforestation, réchauffement climatique. Comment améliorer la vie de tous sans détruire la Terre ? C'est tout l'enjeu du développement durable.",
        "Le développement durable est un développement qui répond aux besoins des générations présentes sans empêcher les générations futures de répondre aux leurs. Il repose sur trois piliers à concilier : l'économie (produire des richesses et des emplois), le social (réduire la pauvreté et les inégalités) et l'environnement (préserver les ressources et les milieux naturels).",
        "Chacun peut agir à son échelle : les États signent des accords internationaux, les villes développent transports en commun et espaces verts, les entreprises inventent des produits moins polluants, et chaque habitant peut limiter ses déchets ou ses gaspillages. Les objectifs de développement durable adoptés par l'ONU en 2015 fixent le cap pour l'ensemble des pays.",
      ],
      example: [
        "Interdire les sacs plastiques à usage unique, comme l'ont fait le Rwanda puis de nombreux pays, protège l'environnement sans empêcher l'économie de fonctionner.",
        "Installer des lampadaires solaires dans des villages non reliés à l'électricité améliore la vie des habitants tout en utilisant une énergie propre.",
      ],
      tip: "Les trois piliers du développement durable : Économie, Social, Environnement. Un projet vraiment durable doit tenir compte des trois à la fois, pas d'un seul.",
    },
  ],
  exercises: [
    {
      id: "h5dem-1",
      level: 1,
      type: "qcm",
      question:
        "Quel cap la population mondiale a-t-elle franchi en novembre 2022 ?",
      choices: [
        "5 milliards d'habitants",
        "6 milliards d'habitants",
        "8 milliards d'habitants",
        "12 milliards d'habitants",
      ],
      answer: 2,
      explanation:
        "En novembre 2022, selon l'ONU, la population mondiale a atteint 8 milliards d'habitants. Pour mémoire : 1 milliard vers 1800, 6 milliards en 2000. La croissance continue, mais elle ralentit, et le pic attendu est d'un peu plus de 10 milliards vers la fin du XXIe siècle.",
      hint: "C'est un chiffre rond, entre 6 et 10.",
    },
    {
      id: "h5dem-2",
      level: 1,
      type: "qcm",
      question:
        "Sur quel continent vit la majorité de la population mondiale ?",
      choices: ["L'Afrique", "L'Asie", "L'Europe", "L'Amérique"],
      answer: 1,
      explanation:
        "Près de 60 % des humains vivent en Asie. Ce continent abrite les deux pays les plus peuplés du monde, l'Inde et la Chine, qui dépassent chacune 1,4 milliard d'habitants, ainsi que de grands foyers de peuplement comme l'Asie du Sud et l'Asie de l'Est.",
      hint: "C'est le continent de l'Inde et de la Chine.",
    },
    {
      id: "h5dem-3",
      level: 1,
      type: "truefalse",
      question:
        "La population mondiale est répartie de façon égale sur toute la surface de la Terre.",
      answer: false,
      explanation:
        "Faux ! La répartition est très inégale : les grands foyers de peuplement (Asie du Sud, Asie de l'Est, Europe) concentrent la majorité des humains, tandis que les déserts, les hautes montagnes et les forêts denses sont presque vides. Le climat, le relief et l'histoire expliquent ces contrastes.",
    },
    {
      id: "h5dem-4",
      level: 1,
      type: "input",
      question:
        "Comment s'appelle l'indice utilisé par l'ONU pour mesurer le développement d'un pays, en combinant santé, éducation et niveau de vie ? (sigle de 3 lettres, en minuscules)",
      answer: "idh",
      explanation:
        "L'IDH, indice de développement humain, combine trois critères : l'espérance de vie (santé), la durée des études (éducation) et le revenu moyen par habitant (niveau de vie). C'est un nombre entre 0 et 1 : plus il est proche de 1, plus le pays est développé.",
      hint: "I comme indice, D comme développement, H comme…",
    },
    {
      id: "h5dem-5",
      level: 2,
      type: "qcm",
      question:
        "Pendant la transition démographique, qu'est-ce qui provoque l'explosion de la population ?",
      choices: [
        "La natalité augmente fortement",
        "La mortalité baisse alors que la natalité reste élevée",
        "La mortalité et la natalité baissent en même temps",
        "Les migrations vers les villes",
      ],
      answer: 1,
      explanation:
        "Grâce aux progrès de la médecine, de l'hygiène et de l'alimentation, la mortalité baisse en premier. Mais la natalité reste d'abord élevée : les naissances dépassent alors largement les décès, et la population augmente très vite. La natalité ne baisse que dans un second temps, ce qui ralentit ensuite la croissance.",
      hint: "C'est un décalage : l'une des deux courbes baisse avant l'autre.",
    },
    {
      id: "h5dem-6",
      level: 2,
      type: "qcm",
      question:
        "Quel continent connaîtra la plus forte croissance démographique d'ici 2050 ?",
      choices: ["L'Europe", "L'Amérique du Nord", "L'Afrique", "L'Océanie"],
      answer: 2,
      explanation:
        "L'Afrique est le continent le plus jeune et sa transition démographique n'est pas achevée dans de nombreux pays : sa population devrait presque doubler d'ici 2050. Le Nigeria, déjà le pays le plus peuplé du continent, pourrait dépasser les États-Unis. À l'inverse, l'Europe vieillit et sa population stagne.",
      hint: "C'est le continent le plus jeune du monde.",
    },
    {
      id: "h5dem-7",
      level: 2,
      type: "truefalse",
      question:
        "Un IDH proche de 0 indique qu'un pays est très développé.",
      answer: false,
      explanation:
        "Faux, c'est l'inverse ! L'IDH est un nombre compris entre 0 et 1, et plus il est PROCHE DE 1, plus le pays est développé. La Norvège dépasse 0,95, tandis que des pays comme le Niger sont autour de 0,4. Un IDH proche de 0 signalerait des conditions de vie extrêmement difficiles.",
      hint: "Vers quelle borne (0 ou 1) se trouvent la Norvège et la Suisse ?",
    },
    {
      id: "h5dem-8",
      level: 2,
      type: "input",
      question:
        "Depuis 2023, quel pays est le plus peuplé du monde ? (en minuscules)",
      answer: "inde",
      accept: ["l'inde", "linde"],
      explanation:
        "En 2023, l'Inde a dépassé la Chine et est devenue le pays le plus peuplé du monde, avec plus de 1,4 milliard d'habitants. La population chinoise, elle, a commencé à diminuer, conséquence d'une natalité devenue très faible.",
      hint: "Ce pays d'Asie du Sud a dépassé la Chine.",
    },
    {
      id: "h5dem-9",
      level: 3,
      type: "qcm",
      question:
        "Pourquoi dit-on que les inégalités de développement existent « à toutes les échelles » ?",
      choices: [
        "Parce qu'elles ne concernent que les pays pauvres",
        "Parce qu'on les observe entre pays, mais aussi entre régions d'un même pays et entre quartiers d'une même ville",
        "Parce qu'elles augmentent chaque année partout dans le monde",
        "Parce qu'elles se mesurent avec une échelle graduée",
      ],
      answer: 1,
      explanation:
        "En géographie, « échelle » désigne le niveau d'observation. Les inégalités apparaissent à l'échelle mondiale (Norvège contre Niger), à l'échelle nationale (le Sud-Est du Brésil contre le Nordeste) et à l'échelle locale (à Mumbai, des tours modernes voisinent avec le bidonville de Dharavi). Changer d'échelle révèle à chaque fois de nouveaux contrastes.",
      hint: "Pense aux niveaux de zoom d'une carte : monde, pays, ville.",
    },
    {
      id: "h5dem-10",
      level: 3,
      type: "input",
      question:
        "Comment appelle-t-on un quartier d'habitations précaires, construites par leurs habitants avec des matériaux de récupération, dans certaines grandes villes ? (un mot, en minuscules)",
      answer: "bidonville",
      accept: ["un bidonville", "bidonvilles"],
      explanation:
        "Un bidonville est un quartier d'habitat précaire, construit sans autorisation par ses habitants, souvent sans eau courante ni tout-à-l'égout. Environ un milliard de personnes dans le monde vivent dans des bidonvilles, comme Dharavi à Mumbai. Leur existence au cœur de métropoles modernes illustre les inégalités à l'échelle locale.",
      hint: "Son nom vient des bidons de métal utilisés autrefois pour construire les cabanes.",
    },
    {
      id: "h5dem-11",
      level: 3,
      type: "qcm",
      question:
        "Une ville remplace ses vieux bus diesel par des trams électriques accessibles à tous pour un tarif réduit, ce qui crée aussi des emplois locaux. Pourquoi ce projet illustre-t-il bien le développement durable ?",
      choices: [
        "Parce qu'il ne coûte rien à la ville",
        "Parce qu'il concilie les trois piliers : environnement, social et économie",
        "Parce qu'il concerne uniquement la protection de la nature",
        "Parce qu'il fait augmenter la population de la ville",
      ],
      answer: 1,
      explanation:
        "Ce projet réunit les trois piliers du développement durable : environnemental (moins de pollution grâce à l'électrique), social (un transport accessible à tous à tarif réduit) et économique (des emplois créés). Un projet vraiment durable cherche cet équilibre, au lieu de sacrifier un pilier aux deux autres.",
      hint: "Compte les piliers concernés : nature, habitants, emplois.",
    },
    {
      id: "h5dem-12",
      level: 3,
      type: "truefalse",
      question:
        "Selon les projections de l'ONU, la population mondiale devrait continuer d'augmenter sans jamais s'arrêter.",
      answer: false,
      explanation:
        "Faux ! La croissance mondiale ralentit déjà : de plus en plus de pays achèvent leur transition démographique et la natalité baisse presque partout. L'ONU prévoit un pic d'un peu plus de 10 milliards d'habitants vers la fin du XXIe siècle, suivi d'une stabilisation, voire d'une lente diminution.",
      hint: "Que se passe-t-il quand la natalité baisse partout dans le monde ?",
    },
  ],
};
