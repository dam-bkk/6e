import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci-vivant-classification",
  subject: "sciences",
  num: 3,
  title: "Le vivant et sa classification",
  domain: "grandeurs",
  domainLabel: "Le vivant",
  icon: "Leaf",
  teaser: "Cellules, espèces et groupes emboîtés : classer les êtres vivants sans se faire piéger.",
  objectives: [
    "Je sais reconnaître ce qui distingue un être vivant d'un objet non vivant",
    "Je sais que tous les êtres vivants sont formés de cellules, observables au microscope",
    "Je sais expliquer ce qu'est une espèce",
    "Je sais classer des êtres vivants d'après les attributs qu'ils possèdent, en groupes emboîtés",
    "Je sais expliquer ce qu'est la biodiversité et pourquoi il faut la préserver",
  ],
  lesson: [
    {
      title: "Qu'est-ce qu'un être vivant ?",
      paragraphs: [
        "Un être vivant naît, se nourrit, respire, grandit, se reproduit, puis meurt. Un caillou, une voiture ou un cristal de sel ne font rien de tout cela : ils ne sont pas vivants, même si un cristal peut grossir.",
        "Les animaux et les végétaux sont donc tous des êtres vivants, malgré leurs différences. Un chêne se nourrit (il puise l'eau et les sels minéraux du sol, il fabrique sa matière grâce à la lumière), il respire, il grandit et il se reproduit par ses graines.",
        "Un être vivant fabrique sa propre matière : il grandit à partir de ce qu'il prélève dans son milieu. C'est ce qu'on appelle la production de matière, et c'est ce qui explique qu'un veau de 40 kg devienne une vache de 600 kg.",
      ],
      example: [
        "Vivant : une fourmi, un pissenlit, un champignon, une bactérie.",
        "Non vivant : une pierre, une flaque d'eau, un tas de sable, un robot, même s'il bouge.",
      ],
      tip: "Un piège classique : bouger n'est pas un critère du vivant. Une voiture bouge sans être vivante, un arbre est vivant sans se déplacer.",
    },
    {
      title: "La cellule, unité du vivant",
      paragraphs: [
        "Si on observe au microscope un morceau de feuille, un peu de peau ou une goutte d'eau de mare, on découvre que tout est fait de minuscules compartiments : les cellules. Elles sont beaucoup trop petites pour être vues à l'œil nu, souvent quelques centièmes de millimètre.",
        "Tous les êtres vivants sont formés de cellules : c'est ce qui les rassemble tous. Certains n'en possèdent qu'une seule, comme les bactéries ou la paramécie : ils sont unicellulaires. D'autres en comptent des milliards : ils sont pluricellulaires, comme toi.",
        "Une cellule est délimitée par une membrane et contient un liquide, le cytoplasme, ainsi que, le plus souvent, un noyau. Les cellules végétales ont en plus une paroi rigide et des grains verts, les chloroplastes, qui donnent leur couleur aux feuilles.",
      ],
      example: [
        "Le corps humain compte environ 30 000 milliards de cellules.",
        "Au microscope, avec un grossissement de 400 fois, les cellules d'une feuille d'élodée apparaissent comme un mur de briques vertes.",
      ],
      tip: "Le microscope grossit, la loupe aussi mais bien moins : pour voir une cellule, la loupe ne suffit pas.",
    },
    {
      title: "L'espèce",
      paragraphs: [
        "Une espèce regroupe des êtres vivants qui se ressemblent beaucoup et qui peuvent se reproduire entre eux, en donnant des petits capables eux aussi de se reproduire.",
        "Les individus d'une même espèce ne sont pas identiques : un labrador et un caniche appartiennent tous deux à l'espèce du chien, un enfant blond et un enfant brun à l'espèce humaine. Ce sont des variations à l'intérieur d'une même espèce.",
        "Chaque espèce reçoit un nom scientifique en deux mots, valable dans le monde entier, ce qui évite les confusions entre langues et entre noms populaires. Cela évite par exemple de confondre deux animaux très différents qu'on appellerait « chat sauvage » dans deux pays.",
      ],
      example: [
        "Le lion et le tigre sont deux espèces différentes.",
        "Le chihuahua et le berger allemand appartiennent pourtant à la même espèce : le chien.",
      ],
      tip: "Le test de l'espèce : « peuvent-ils avoir des petits, qui pourront à leur tour avoir des petits ? » Si oui, même espèce.",
    },
    {
      title: "Classer d'après les attributs",
      paragraphs: [
        "Pour classer les êtres vivants, les scientifiques regardent uniquement ce que les êtres POSSÈDENT : un squelette interne avec des vertèbres, quatre membres, des poils, des mamelles, des plumes, une coquille… Ces caractéristiques s'appellent des attributs.",
        "On regroupe alors ceux qui partagent les mêmes attributs dans des groupes emboîtés, comme des boîtes rangées les unes dans les autres. Tous les êtres qui ont des poils et des mamelles sont dans la boîte « mammifères », et cette boîte est rangée à l'intérieur de la plus grande boîte « vertébrés », car tous les mammifères ont aussi un squelette interne avec des vertèbres.",
        "Attention au piège le plus courant : on ne classe pas selon ce que les êtres FONT, ni selon l'endroit où ils vivent. Le dauphin nage dans la mer, mais il a des poils, il allaite ses petits et il respire de l'air avec des poumons : c'est un mammifère, pas un poisson. De la même façon, la chauve-souris vole sans être un oiseau, car elle n'a pas de plumes mais des poils et des mamelles.",
      ],
      example: [
        "Boîte « vertébrés » (squelette interne) → contient la boîte « mammifères » (poils, mamelles) → contient la boîte « chats » (l'espèce).",
        "Un aigle et une autruche sont dans la même boîte « oiseaux » : tous deux ont des plumes et un bec, même si l'autruche ne vole pas.",
      ],
      tip: "La bonne question n'est jamais « où vit-il ? » ni « comment se déplace-t-il ? », mais toujours « qu'est-ce qu'il a ? ».",
    },
    {
      title: "La biodiversité et sa préservation",
      paragraphs: [
        "La biodiversité, c'est la diversité de tout ce qui vit : la variété des espèces, la variété des individus au sein d'une espèce, et la variété des milieux de vie, de la forêt tropicale à la mare du quartier.",
        "Dans un milieu, les êtres vivants dépendent les uns des autres : les abeilles pollinisent les fleurs, les plantes nourrissent les herbivores, les vers de terre enrichissent le sol. Faire disparaître une espèce fragilise donc tout le réseau, un peu comme retirer une pièce d'une construction.",
        "Les activités humaines menacent la biodiversité : destruction des milieux naturels, pollution, chasse et pêche excessives, changement climatique. Chacun peut agir : ne pas jeter de déchets dans la nature, économiser l'eau et l'énergie, laisser des coins de jardin en herbe, respecter les espèces protégées.",
      ],
      example: [
        "Environ 80 % des plantes à fleurs cultivées dépendent des insectes pollinisateurs.",
        "Une seule mare de village peut abriter grenouilles, libellules, tritons et dizaines d'espèces de plantes.",
      ],
      tip: "Bio = la vie, diversité = la variété. Biodiversité = toute la variété du vivant, y compris dans ta cour d'école.",
    },
  ],
  exercises: [
    {
      id: "sviv-1",
      level: 1,
      type: "qcm",
      question: "Parmi ces éléments, lequel n'est PAS un être vivant ?",
      choices: ["Un pissenlit", "Une bactérie", "Un cristal de sel", "Un champignon"],
      answer: 2,
      explanation:
        "Un cristal de sel peut grossir, mais il ne se nourrit pas, ne respire pas et ne se reproduit pas : il n'est pas vivant. Le pissenlit, la bactérie et le champignon, eux, se nourrissent, grandissent et se reproduisent.",
      hint: "Cherche celui qui ne se nourrit pas et ne se reproduit pas.",
    },
    {
      id: "sviv-2",
      level: 1,
      type: "input",
      question:
        "Comment s'appelle l'élément microscopique qui constitue tous les êtres vivants ? (un seul mot, au singulier, en minuscules)",
      answer: "cellule",
      accept: ["la cellule"],
      explanation:
        "Tous les êtres vivants sont formés de cellules : c'est le point commun de tout le vivant. Certains êtres n'en ont qu'une (bactérie, paramécie), d'autres des milliards, comme l'être humain.",
      hint: "On l'observe au microscope ; le mot vient du latin « petite chambre ».",
    },
    {
      id: "sviv-3",
      level: 1,
      type: "truefalse",
      question: "Le dauphin est un poisson, parce qu'il vit dans la mer et qu'il nage.",
      answer: false,
      explanation:
        "Faux. On ne classe pas les êtres vivants d'après leur milieu de vie ni d'après leur façon de se déplacer, mais d'après les attributs qu'ils possèdent. Le dauphin a des poils, il allaite ses petits et il respire l'air avec des poumons : c'est un mammifère. Les poissons, eux, ont des nageoires et respirent par des branchies.",
    },
    {
      id: "sviv-4",
      level: 1,
      type: "qcm",
      question: "Quels attributs caractérisent les mammifères ?",
      choices: [
        "Des plumes et un bec",
        "Des poils et des mamelles",
        "Le fait de vivre sur la terre ferme",
        "Le fait d'avoir quatre pattes",
      ],
      answer: 1,
      explanation:
        "Les mammifères possèdent des poils et des mamelles qui produisent du lait pour leurs petits. Les plumes et le bec caractérisent les oiseaux. Vivre sur terre n'est pas un attribut, et bien des animaux à quatre pattes ne sont pas des mammifères, comme le lézard.",
      hint: "Que possèdent tous les mammifères pour nourrir leurs petits ?",
    },
    {
      id: "sviv-5",
      level: 2,
      type: "qcm",
      question:
        "Un chihuahua et un berger allemand sont très différents d'aspect. Que peut-on en conclure ?",
      choices: [
        "Ce sont deux espèces différentes",
        "Ce sont deux individus de la même espèce, le chien",
        "Le chihuahua n'est pas un mammifère",
        "Ils appartiennent à deux groupes emboîtés séparés",
      ],
      answer: 1,
      explanation:
        "Ils peuvent se reproduire entre eux et donner des chiots capables eux aussi de se reproduire : ils appartiennent donc à la même espèce. Les différences d'aspect ne sont que des variations à l'intérieur de l'espèce, comme la couleur des cheveux chez les humains.",
      hint: "Peuvent-ils avoir des petits ensemble, capables eux aussi d'avoir des petits ?",
    },
    {
      id: "sviv-6",
      level: 2,
      type: "truefalse",
      question: "La chauve-souris est un oiseau car elle vole.",
      answer: false,
      explanation:
        "Faux. Voler n'est pas un attribut de classification : c'est un comportement. La chauve-souris n'a pas de plumes mais des poils, et elle allaite ses petits : c'est un mammifère. À l'inverse, l'autruche est bien un oiseau alors qu'elle ne vole pas, car elle a des plumes et un bec.",
      hint: "Regarde ce que l'animal a sur le corps, pas ce qu'il sait faire.",
    },
    {
      id: "sviv-7",
      level: 2,
      type: "input",
      question:
        "Un être vivant formé d'une seule cellule, comme une bactérie, est dit… (un mot, en minuscules)",
      answer: "unicellulaire",
      explanation:
        "« Uni » signifie un : un être unicellulaire est constitué d'une seule cellule. Un être formé de nombreuses cellules, comme un arbre ou un être humain, est pluricellulaire (ou multicellulaire).",
      hint: "Le préfixe « uni- » veut dire « un ».",
    },
    {
      id: "sviv-8",
      level: 2,
      type: "qcm",
      question:
        "Dans la classification en groupes emboîtés, où se trouve la boîte « mammifères » ?",
      choices: [
        "À l'intérieur de la boîte « vertébrés »",
        "À l'extérieur de la boîte « vertébrés », séparée d'elle",
        "Elle contient la boîte « vertébrés »",
        "Elle est à l'intérieur de la boîte « oiseaux »",
      ],
      answer: 0,
      explanation:
        "Tous les mammifères possèdent un squelette interne avec des vertèbres : la boîte « mammifères » est donc rangée à l'intérieur de la plus grande boîte « vertébrés ». Les oiseaux forment une autre boîte, également à l'intérieur des vertébrés, mais à côté des mammifères.",
      hint: "Un chien a-t-il des vertèbres ?",
    },
    {
      id: "sviv-9",
      level: 3,
      type: "qcm",
      question:
        "Trois animaux : un requin, un dauphin, une truite. Lequel n'appartient pas au même groupe que les deux autres, et pourquoi ?",
      choices: [
        "Le requin, car il est dangereux",
        "La truite, car elle vit en eau douce",
        "Le dauphin, car il a des poils et des mamelles",
        "Aucun, ils vivent tous dans l'eau donc ils sont tous du même groupe",
      ],
      answer: 2,
      explanation:
        "Le requin et la truite ont des nageoires et respirent par des branchies. Le dauphin, lui, a des poils, des mamelles et des poumons : c'est un mammifère. Le milieu de vie commun (l'eau) ne sert jamais à classer, et « être dangereux » ou « vivre en eau douce » ne sont pas des attributs.",
      hint: "Ce qui compte, ce sont les attributs possédés, pas le milieu de vie.",
    },
    {
      id: "sviv-10",
      level: 3,
      type: "truefalse",
      question:
        "Un arbre est un être vivant, même s'il ne se déplace pas et ne mange pas comme un animal.",
      answer: true,
      explanation:
        "Vrai. Un arbre se nourrit (il prélève eau et sels minéraux dans le sol et fabrique sa matière grâce à la lumière), il respire, il grandit, il se reproduit par ses graines et il finit par mourir : il remplit tous les critères du vivant. Se déplacer n'a jamais été un critère.",
    },
    {
      id: "sviv-11",
      level: 3,
      type: "input",
      question:
        "Comment appelle-t-on la variété de toutes les formes de vie sur Terre ? (un seul mot, en minuscules)",
      answer: "biodiversite",
      accept: ["biodiversité", "la biodiversité", "la biodiversite"],
      explanation:
        "La biodiversité désigne la variété du vivant : diversité des espèces, diversité des individus dans une même espèce, diversité des milieux de vie. Elle est aujourd'hui menacée par la destruction des milieux, la pollution et le changement climatique.",
      hint: "« bio » = la vie, et le mot contient « diversité ».",
    },
    {
      id: "sviv-12",
      level: 3,
      type: "qcm",
      question:
        "Dans une mare, les libellules disparaissent après une pollution. Quelle conséquence est la plus probable ?",
      choices: [
        "Aucune, chaque espèce vit indépendamment des autres",
        "Le nombre de moustiques dont elles se nourrissaient risque d'augmenter",
        "Les plantes de la mare vont pousser plus vite grâce à la place libérée",
        "Toutes les autres espèces de la mare disparaîtront immédiatement",
      ],
      answer: 1,
      explanation:
        "Dans un milieu, les espèces dépendent les unes des autres. Les libellules et leurs larves se nourrissent d'insectes, dont des moustiques : sans elles, ces proies deviennent plus nombreuses. La disparition d'une seule espèce déséquilibre donc tout le réseau, sans pour autant faire disparaître tout le monde d'un coup.",
      hint: "Que devient une proie quand son prédateur disparaît ?",
    },
  ],
};
