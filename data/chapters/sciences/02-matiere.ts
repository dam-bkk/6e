import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci-matiere",
  subject: "sciences",
  num: 2,
  title: "La matière et l'eau",
  domain: "donnees",
  domainLabel: "Matière",
  icon: "FlaskConical",
  teaser: "Solide, liquide, gaz : comprendre l'eau, les mélanges et la conservation de la masse.",
  objectives: [
    "Je sais reconnaître les trois états de la matière et décrire leurs propriétés",
    "Je connais les changements d'état de l'eau et leurs températures",
    "Je sais expliquer le cycle de l'eau",
    "Je sais distinguer un mélange homogène d'un mélange hétérogène et choisir une technique de séparation",
    "Je sais mesurer une masse et un volume avec les bonnes unités",
  ],
  lesson: [
    {
      title: "Les trois états de la matière",
      paragraphs: [
        "La matière peut se présenter sous trois états. Un solide a sa propre forme : il ne s'écoule pas et on peut le saisir. Un liquide s'écoule, il prend la forme du récipient qui le contient, et au repos sa surface libre est toujours plane et horizontale. Un gaz occupe tout l'espace qu'on lui laisse : il n'a ni forme ni volume propre, et on peut le comprimer.",
        "Les gaz sont souvent invisibles, mais ils sont bien de la matière : l'air a une masse, et un ballon gonflé est plus lourd que le même ballon dégonflé.",
        "Un même corps peut exister dans les trois états. L'eau en est le meilleur exemple : glace (solide), eau liquide, vapeur d'eau (gaz). Attention, la buée et les nuages ne sont pas de la vapeur : ce sont de minuscules gouttelettes d'eau liquide, et c'est bien pour cela qu'on les voit.",
      ],
      example: [
        "Verse 200 mL d'eau dans un verre, puis dans une assiette : la forme change, le volume reste 200 mL.",
        "Un ballon de football gonflé pèse environ 10 g de plus que dégonflé : c'est la masse de l'air comprimé à l'intérieur.",
      ],
      tip: "Solide = forme fixe. Liquide = volume fixe mais forme libre. Gaz = ni forme, ni volume fixe.",
    },
    {
      title: "Les changements d'état de l'eau",
      paragraphs: [
        "Quand on chauffe de la glace, elle devient liquide à 0 °C : c'est la fusion. À l'inverse, l'eau liquide refroidie devient glace à 0 °C : c'est la solidification. Ces deux changements se font à la même température.",
        "Si on continue de chauffer l'eau liquide, elle se met à bouillir à 100 °C : c'est l'ébullition, elle se transforme en vapeur d'eau (état gazeux). L'eau peut aussi passer à l'état gazeux sans bouillir, lentement et à sa surface, à n'importe quelle température : c'est l'évaporation, celle qui fait sécher le linge.",
        "Le passage inverse, du gaz au liquide, est la condensation (ou liquéfaction) : la vapeur d'eau de l'air se transforme en gouttelettes en touchant une surface froide. Point essentiel : pendant un changement d'état, la masse ne change pas. 100 g de glace donnent 100 g d'eau liquide. La matière se transforme, elle ne disparaît jamais.",
      ],
      example: [
        "Sors une bouteille froide du réfrigérateur : de la buée apparaît sur le verre. Ce n'est pas la bouteille qui fuit, c'est la vapeur d'eau de l'air qui se condense au contact du froid.",
        "1 L d'eau liquide qui gèle occupe un peu plus de place (la glace flotte !), mais sa masse reste exactement la même.",
      ],
      tip: "Deux repères à connaître par cœur pour l'eau : 0 °C = fusion et solidification, 100 °C = ébullition.",
    },
    {
      title: "Le cycle de l'eau",
      paragraphs: [
        "Chauffée par le Soleil, l'eau des océans, des lacs et des rivières s'évapore : elle monte dans l'atmosphère sous forme de vapeur d'eau invisible.",
        "En altitude, l'air est plus froid : la vapeur se condense en minuscules gouttelettes ou en cristaux de glace qui forment les nuages. Quand ces gouttelettes grossissent, elles tombent : ce sont les précipitations, pluie, neige ou grêle.",
        "Sur le sol, une partie de l'eau ruisselle vers les rivières puis vers la mer, une autre s'infiltre dans le sol et alimente les nappes souterraines. Puis tout recommence : c'est un cycle, l'eau de la Terre est toujours la même, elle change simplement d'état et d'endroit.",
      ],
      example: [
        "L'eau que tu bois aujourd'hui a peut-être déjà été un nuage au-dessus de l'océan et une rivière il y a des milliers d'années.",
        "Le moteur du cycle de l'eau, c'est l'énergie du Soleil : sans lui, pas d'évaporation.",
      ],
      tip: "Retiens l'ordre en quatre mots : évaporation → condensation → précipitation → ruissellement (ou infiltration).",
    },
    {
      title: "Mélanges, dissolution et séparations",
      paragraphs: [
        "Un mélange est hétérogène quand on distingue au moins deux constituants à l'œil nu : eau et sable, eau et huile, jus d'orange avec pulpe. Il est homogène quand on ne voit plus qu'une seule chose : eau salée, eau sucrée, sirop bien mélangé, ou encore l'air, qui est un mélange de gaz.",
        "Quand on mélange du sucre à l'eau, le sucre se dissout : il devient invisible, mais il n'a pas disparu. La preuve : l'eau a un goût sucré, et si l'on pèse, 100 g d'eau plus 20 g de sucre donnent 120 g de solution. C'est la conservation de la masse. Si on ajoute trop de sucre, le surplus ne se dissout plus et tombe au fond : la solution est saturée.",
        "Pour séparer un mélange, on choisit la technique adaptée. La filtration retient les particules solides qui ne sont pas dissoutes (eau boueuse → eau claire). La décantation consiste à laisser reposer : le sable se dépose au fond, l'huile remonte au-dessus de l'eau. L'évaporation permet de récupérer un solide dissous : quand l'eau salée s'évapore, il reste le sel, comme dans les marais salants.",
      ],
      example: [
        "Un filtre à café retient le marc (non dissous) mais laisse passer tout ce qui est dissous : c'est pour cela que le café est brun et amer.",
        "Filtrer de l'eau salée ne sert à rien : le sel est dissous, il traverse le filtre. Il faut évaporer l'eau.",
      ],
      tip: "Filtration = pour ce qui n'est pas dissous. Évaporation = pour ce qui est dissous. Décantation = quand il suffit d'attendre.",
    },
    {
      title: "Mesurer une masse et un volume",
      paragraphs: [
        "La masse indique la quantité de matière d'un objet. On la mesure avec une balance, en kilogrammes (kg) ou en grammes (g) : 1 kg = 1 000 g. Quand on pèse un liquide, il faut penser à retirer la masse du récipient vide, sinon on mesure aussi le verre.",
        "Le volume est la place qu'occupe la matière. On le mesure en litres (L) et millilitres (mL), ou en cm³ : 1 L = 1 000 mL et 1 mL = 1 cm³. Pour mesurer le volume d'un liquide, on utilise une éprouvette graduée posée sur une table, et on lit la graduation en plaçant l'œil au niveau de la surface du liquide.",
        "Masse et volume sont deux grandeurs différentes : 1 L d'huile et 1 L d'eau ont le même volume mais pas la même masse. Pour l'eau, il existe un repère bien pratique : 1 L d'eau a une masse d'environ 1 kg.",
      ],
      example: [
        "Un pack de 6 bouteilles de 1,5 L contient 9 L d'eau, soit environ 9 kg.",
        "50 mL de sirop versés dans une éprouvette occupent 50 cm³.",
      ],
      tip: "Ne confonds pas les unités : les grammes pour la masse, les litres ou les cm³ pour le volume. Une balance ne mesure jamais un volume.",
    },
  ],
  exercises: [
    {
      id: "smat-1",
      level: 1,
      type: "qcm",
      question: "À quelle température la glace fond-elle ?",
      choices: ["−10 °C", "0 °C", "50 °C", "100 °C"],
      answer: 1,
      explanation:
        "La fusion de la glace se produit à 0 °C. C'est aussi la température de solidification de l'eau liquide : le même changement d'état, dans les deux sens, à la même température.",
      hint: "C'est aussi la température à laquelle l'eau gèle.",
    },
    {
      id: "smat-2",
      level: 1,
      type: "input",
      question:
        "Comment appelle-t-on le passage de l'état liquide à l'état solide ? (un seul mot, en minuscules)",
      answer: "solidification",
      explanation:
        "Le passage du liquide au solide s'appelle la solidification : pour l'eau, elle a lieu à 0 °C. Le passage inverse, du solide au liquide, est la fusion.",
      hint: "Le mot ressemble à « solide ».",
    },
    {
      id: "smat-3",
      level: 1,
      type: "truefalse",
      question: "Un mélange d'eau et d'huile est un mélange homogène.",
      answer: false,
      explanation:
        "Faux. L'eau et l'huile ne se mélangent pas : on distingue nettement deux couches, l'huile flottant au-dessus de l'eau. C'est donc un mélange hétérogène. L'eau salée, au contraire, est homogène car on ne voit qu'un seul liquide.",
    },
    {
      id: "smat-4",
      level: 1,
      type: "qcm",
      question: "Quelle propriété est caractéristique d'un gaz ?",
      choices: [
        "Il a une forme propre qu'on peut saisir",
        "Il occupe tout le volume qu'on lui offre",
        "Sa surface au repos est plane et horizontale",
        "Il ne possède aucune masse",
      ],
      answer: 1,
      explanation:
        "Un gaz occupe tout l'espace disponible et se comprime facilement. Attention à la dernière proposition : un gaz possède bien une masse, même invisible. Un ballon gonflé est plus lourd que le même ballon dégonflé.",
      hint: "Que se passe-t-il quand on ouvre un flacon de parfum dans une pièce ?",
    },
    {
      id: "smat-5",
      level: 2,
      type: "input",
      question:
        "On dissout 20 g de sucre dans 250 g d'eau. Quelle est la masse de la solution obtenue, en grammes ?",
      answer: "270",
      explanation:
        "250 + 20 = 270 g. Le sucre devient invisible parce qu'il est dissous, mais il n'a pas disparu : sa matière est toujours là. C'est la conservation de la masse, et c'est aussi pourquoi l'eau a désormais un goût sucré.",
      hint: "Le sucre dissous a-t-il vraiment disparu ?",
    },
    {
      id: "smat-6",
      level: 2,
      type: "qcm",
      question:
        "On veut récupérer le sel contenu dans de l'eau salée. Quelle technique faut-il utiliser ?",
      choices: [
        "La filtration",
        "La décantation",
        "L'évaporation de l'eau",
        "Aucune, c'est impossible",
      ],
      answer: 2,
      explanation:
        "Le sel est dissous : il traverse le filtre, et il ne se dépose pas au fond même si on attend. Il faut faire évaporer l'eau : le sel reste alors au fond du récipient. C'est exactement le principe des marais salants.",
      hint: "Le sel dissous passe-t-il à travers un filtre ?",
    },
    {
      id: "smat-7",
      level: 2,
      type: "truefalse",
      question: "Les nuages et la buée sont de la vapeur d'eau, donc de l'eau à l'état gazeux.",
      answer: false,
      explanation:
        "Faux, et c'est un piège classique. La vapeur d'eau est un gaz : elle est totalement invisible. Les nuages, la buée et le brouillard sont visibles justement parce qu'ils sont formés de minuscules gouttelettes d'eau liquide (ou de cristaux de glace) en suspension dans l'air.",
      hint: "Si on le voit, est-ce encore un gaz ?",
    },
    {
      id: "smat-8",
      level: 2,
      type: "input",
      question: "Combien de millilitres y a-t-il dans 2,5 L ? (réponds par un nombre)",
      answer: "2500",
      accept: ["2 500"],
      explanation:
        "1 L = 1 000 mL, donc 2,5 × 1 000 = 2 500 mL. Comme 1 mL = 1 cm³, cela correspond aussi à 2 500 cm³.",
      hint: "1 L vaut 1 000 mL.",
    },
    {
      id: "smat-9",
      level: 3,
      type: "qcm",
      question:
        "Dans le cycle de l'eau, quelle est la source d'énergie qui permet l'évaporation de l'eau des océans ?",
      choices: ["Le Soleil", "Le vent seul", "La Lune et les marées", "La chaleur du sol"],
      answer: 0,
      explanation:
        "C'est l'énergie du Soleil qui chauffe l'eau de surface et provoque son évaporation. Le vent aide à disperser la vapeur, et les marées viennent bien de la Lune, mais sans le Soleil il n'y aurait ni évaporation, ni nuages, ni pluie.",
      hint: "Qu'est-ce qui chauffe la surface des océans ?",
    },
    {
      id: "smat-10",
      level: 3,
      type: "input",
      question:
        "Une bouteille vide a une masse de 30 g. Remplie d'eau, l'ensemble a une masse de 1 530 g. Quelle est la masse de l'eau, en grammes ?",
      answer: "1500",
      accept: ["1 500"],
      explanation:
        "On soustrait la masse du récipient vide : 1 530 − 30 = 1 500 g, soit 1,5 kg. Cela correspond bien à 1,5 L d'eau, puisque 1 L d'eau a une masse d'environ 1 kg. Oublier de retirer la masse du récipient est l'erreur la plus fréquente.",
      hint: "Il faut retirer la masse de la bouteille vide.",
    },
    {
      id: "smat-11",
      level: 3,
      type: "truefalse",
      question:
        "On place 500 g d'eau liquide dans un congélateur. Une fois gelée, la glace obtenue a une masse de 500 g.",
      answer: true,
      explanation:
        "Vrai. Lors d'un changement d'état, la matière se réorganise mais rien ne se perd : la masse est conservée. Attention toutefois, le volume augmente légèrement en gelant, c'est pourquoi la glace flotte et pourquoi une bouteille pleine peut éclater au congélateur.",
      hint: "Qu'est-ce qui se conserve toujours lors d'un changement d'état ?",
    },
    {
      id: "smat-12",
      level: 3,
      type: "qcm",
      question:
        "On chauffe de l'eau salée jusqu'à ébullition et on recueille la vapeur, qu'on refroidit pour la retransformer en liquide. Que contient l'eau recueillie ?",
      choices: [
        "De l'eau salée, aussi salée qu'au départ",
        "De l'eau sans sel",
        "Du sel seulement",
        "Rien du tout, la vapeur disparaît",
      ],
      answer: 1,
      explanation:
        "Seule l'eau passe à l'état gazeux : le sel, lui, reste dans la casserole. En condensant la vapeur, on obtient donc de l'eau sans sel. C'est le principe de la distillation, utilisé pour dessaler l'eau de mer.",
      hint: "Le sel s'évapore-t-il avec l'eau ?",
    },
  ],
};
