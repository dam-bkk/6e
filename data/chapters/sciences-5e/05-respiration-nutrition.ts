import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "sci5-respiration-nutrition",
  subject: "sciences",
  grade: "5e",
  num: 5,
  title: "Respiration et nutrition du vivant",
  domain: "grandeurs",
  domainLabel: "SVT",
  icon: "Wind",
  teaser: "Respirer, manger, transporter : comment les êtres vivants font fonctionner leur corps.",
  objectives: [
    "Je sais que respirer, c'est absorber du dioxygène et rejeter du dioxyde de carbone",
    "Je sais que les animaux aquatiques respirent le dioxygène dissous dans l'eau",
    "Je sais reconnaître un organe respiratoire : poumons, branchies ou trachées",
    "Je sais expliquer le trajet des aliments et le rôle de la digestion",
    "Je découvre la photosynthèse et je sais qu'une plante respire aussi",
    "Je sais que le sang distribue le dioxygène et les nutriments à tous les organes",
  ],
  lesson: [
    {
      title: "Respirer, c'est échanger deux gaz",
      paragraphs: [
        "Respirer ne se réduit pas à gonfler sa poitrine. Pour un scientifique, la respiration est un échange de gaz avec le milieu de vie : l'être vivant absorbe du dioxygène, noté O2, et rejette du dioxyde de carbone, noté CO2. Ces échanges ont lieu en permanence, jour et nuit, chez tous les animaux et aussi chez les plantes.",
        "Pourquoi ce dioxygène ? Parce que chaque organe a besoin d'énergie pour fonctionner. Cette énergie est libérée dans les cellules en utilisant du dioxygène et des nutriments venus des aliments. Le dioxyde de carbone est le déchet produit par cette réaction : il faut donc l'évacuer.",
        "L'air que tu inspires contient environ 21 % de dioxygène et très peu de dioxyde de carbone. L'air que tu expires est plus pauvre en dioxygène (environ 16 %) et bien plus riche en dioxyde de carbone : la différence, c'est ce que ton corps a consommé et produit. Ne confonds pas le dioxygène (O2), le gaz que l'on respire, avec l'air, qui est un mélange contenant surtout du diazote (environ 78 %).",
      ],
      example: [
        "Air inspiré : environ 21 % de dioxygène, 0,04 % de dioxyde de carbone.",
        "Air expiré : environ 16 % de dioxygène, 4 % de dioxyde de carbone. Ton corps a prélevé de l'O2 et rejeté du CO2.",
      ],
      tip: "Retiens le sens des flèches : O2 entre, CO2 sort. Et l'air n'est pas du dioxygène pur : il en contient environ un cinquième.",
    },
    {
      title: "Respirer dans l'eau, respirer dans l'air",
      paragraphs: [
        "Un poisson respire, lui aussi, du dioxygène. Mais il ne casse pas les molécules d'eau : il prélève le dioxygène dissous dans l'eau, comme du sucre dissous dans un sirop. C'est une idée reçue très répandue : un poisson ne « respire pas l'eau », il respire le dioxygène qu'elle contient.",
        "L'eau contient beaucoup moins de dioxygène que l'air : c'est pourquoi les animaux aquatiques doivent faire circuler de grandes quantités d'eau sur leurs organes respiratoires. Une eau chaude, stagnante ou polluée contient encore moins de dioxygène, ce qui peut asphyxier les poissons.",
        "Selon les espèces, les organes respiratoires diffèrent. Les branchies, très fines et repliées, captent le dioxygène dissous dans l'eau : poissons, crevettes, moules. Les poumons captent le dioxygène de l'air : mammifères, oiseaux, reptiles, mais aussi les grenouilles adultes et l'escargot. Les trachées, un réseau de fins tuyaux qui s'ouvrent sur les côtés du corps par de petits orifices, apportent l'air directement aux organes des insectes. Le ver de terre, lui, n'a aucun organe spécialisé : il échange les gaz à travers sa peau humide.",
        "Attention aux pièges : la baleine et le dauphin vivent dans l'eau mais ont des poumons ; ils doivent remonter respirer en surface. À l'inverse, le têtard vit dans l'eau avec des branchies, puis devient une grenouille qui respire avec des poumons.",
      ],
      example: [
        "Branchies : poisson, crevette, moule. Poumons : chien, oiseau, dauphin, grenouille adulte, escargot.",
        "Trachées : criquet, papillon, coccinelle. Peau humide : ver de terre.",
      ],
      tip: "Le milieu de vie ne donne pas l'organe respiratoire. Le dauphin vit dans l'eau et a des poumons ; l'escargot vit sur terre et a un poumon. Cherche toujours quel gaz est prélevé et par quel organe.",
    },
    {
      title: "Se nourrir : de l'aliment au nutriment",
      paragraphs: [
        "Manger n'est que le début de l'histoire. Les aliments sont beaucoup trop gros pour entrer dans le sang : il faut les découper en tout petits morceaux, les nutriments. C'est le rôle de la digestion, qui se déroule tout au long du tube digestif : bouche, œsophage, estomac, intestin grêle, gros intestin.",
        "La digestion combine deux actions. Une action mécanique : les dents broient, l'estomac brasse. Une action chimique : les sucs digestifs, contenant des molécules appelées enzymes, découpent les grosses molécules des aliments en nutriments (sucres simples, acides aminés, etc.).",
        "Les nutriments traversent alors la paroi très fine de l'intestin grêle et passent dans le sang : c'est l'absorption intestinale. Ce qui n'a pas été digéré continue jusqu'au gros intestin et forme les excréments. Selon leur régime, les animaux ont des organes adaptés : dents pointues et tranchantes chez les carnivores, dents plates et longs intestins chez les herbivores, qui doivent digérer des végétaux difficiles à dégrader.",
      ],
      example: [
        "Trajet des aliments : bouche → œsophage → estomac → intestin grêle → gros intestin.",
        "Un morceau de pain est découpé jusqu'à donner du glucose, un nutriment qui passe dans le sang au niveau de l'intestin grêle.",
      ],
      tip: "Aliment = ce que tu mets dans ta bouche. Nutriment = le résultat de la digestion, assez petit pour passer dans le sang. Et rien ne passe dans le sang au niveau de l'estomac : l'absorption se fait dans l'intestin grêle.",
    },
    {
      title: "À découvrir : la photosynthèse des plantes",
      paragraphs: [
        "Les plantes vertes ne mangent pas : elles fabriquent elles-mêmes leur matière organique. Ce processus s'appelle la photosynthèse. À la lumière, la plante utilise du dioxyde de carbone prélevé dans l'air et de l'eau puisée par ses racines, avec les sels minéraux dissous, pour produire de la matière organique et libérer du dioxygène.",
        "La photosynthèse a besoin de lumière : elle ne fonctionne que le jour, et seulement dans les organes verts, surtout les feuilles. Cela explique qu'une plante enfermée dans un placard finisse par jaunir et mourir, même bien arrosée.",
        "Attention à la grande confusion : la photosynthèse n'est PAS la respiration à l'envers de la plante. La plante respire aussi, jour et nuit, comme les animaux : elle absorbe du dioxygène et rejette du dioxyde de carbone. Simplement, le jour, la photosynthèse est si intense qu'elle masque la respiration : au total, la plante rejette alors plus de dioxygène qu'elle n'en consomme. La nuit, sans lumière, il ne reste que la respiration.",
        "On dit que les plantes sont des producteurs primaires : comme elles produisent leur propre matière organique, elles se trouvent au départ de presque toutes les chaînes alimentaires. Tous les animaux, directement ou indirectement, dépendent d'elles.",
      ],
      example: [
        "Photosynthèse (le jour, organes verts) : dioxyde de carbone + eau + lumière → matière organique + dioxygène.",
        "Respiration (jour et nuit, tous les organes) : dioxygène consommé, dioxyde de carbone rejeté.",
      ],
      tip: "Deux phénomènes différents cohabitent dans une plante. La respiration ne s'arrête jamais ; la photosynthèse s'arrête dès qu'il fait nuit.",
    },
    {
      title: "En bref : la circulation, le service de livraison",
      paragraphs: [
        "Le dioxygène entre par les poumons, les nutriments passent dans le sang au niveau de l'intestin grêle. Mais comment atteignent-ils un muscle de la jambe ou le cerveau ? Grâce au sang, qui circule sans arrêt dans les vaisseaux sanguins, poussé par le cœur, un muscle qui joue le rôle de pompe.",
        "Les artères conduisent le sang du cœur vers les organes ; les veines le ramènent des organes vers le cœur ; les capillaires, minuscules vaisseaux, se glissent au plus près des cellules pour y faire les échanges. Chaque organe prélève au passage le dioxygène et les nutriments dont il a besoin, et rejette dans le sang ses déchets, dont le dioxyde de carbone.",
        "Ces déchets sont ensuite éliminés : le dioxyde de carbone est expiré par les poumons, l'urée est filtrée par les reins et évacuée dans l'urine. Un organe qui travaille plus, comme un muscle pendant un effort, a besoin de plus de dioxygène et de nutriments : c'est pourquoi, quand tu cours, ta respiration s'accélère et ton cœur bat plus vite.",
      ],
      example: [
        "Effort physique : les muscles consomment davantage → le cœur accélère et la respiration s'accélère pour livrer plus de dioxygène.",
        "Trajet simplifié : intestin grêle et poumons → sang → organes → sang → poumons et reins pour les déchets.",
      ],
      tip: "Pense au sang comme à un service de livraison en boucle : il apporte le dioxygène et les nutriments, il repart avec les déchets. Le cœur n'est que la pompe du circuit.",
    },
  ],
  exercises: [
    {
      id: "s5res-1",
      level: 1,
      type: "qcm",
      question: "Respirer, pour un être vivant, c'est…",
      choices: [
        "absorber du dioxygène et rejeter du dioxyde de carbone",
        "absorber du dioxyde de carbone et rejeter du dioxygène",
        "absorber de l'air et le rejeter identique",
        "gonfler sa poitrine, sans échange de gaz",
      ],
      answer: 0,
      explanation:
        "La respiration est un échange de gaz : l'être vivant prélève du dioxygène (O2), qui sert à libérer de l'énergie dans ses cellules, et rejette du dioxyde de carbone (CO2), le déchet de cette réaction. L'inverse (absorber du CO2 et rejeter de l'O2) correspond à la photosynthèse des plantes vertes, ce qui n'est pas la même chose.",
      hint: "Quel gaz ton corps consomme-t-il pour produire de l'énergie ?",
    },
    {
      id: "s5res-2",
      level: 1,
      type: "truefalse",
      question: "Un poisson respire l'eau qui entre dans sa bouche.",
      answer: false,
      explanation:
        "Faux. Le poisson respire le dioxygène dissous dans l'eau, comme du sucre dissous dans un sirop. Il fait circuler l'eau sur ses branchies, qui captent ce dioxygène ; l'eau elle-même n'est pas respirée. C'est l'une des idées reçues les plus fréquentes en SVT : tous les animaux respirent le même gaz, le dioxygène, seul le milieu où ils le prélèvent change.",
      hint: "Quel gaz les branchies captent-elles dans l'eau ?",
    },
    {
      id: "s5res-3",
      level: 1,
      type: "input",
      question: "Quel organe respiratoire possède un criquet ? Réponds par un seul mot au pluriel.",
      answer: "trachées",
      accept: ["trachees", "des trachées", "les trachées", "trachée", "trachee"],
      explanation:
        "Les insectes comme le criquet respirent grâce à des trachées : un réseau de fins tuyaux qui s'ouvrent sur les côtés du corps par de petits orifices et amènent l'air directement jusqu'aux organes. Ils n'ont donc ni poumons ni branchies, mais ils prélèvent bien du dioxygène dans l'air, comme nous.",
      hint: "Ce sont de fins tuyaux qui conduisent l'air à l'intérieur du corps des insectes.",
    },
    {
      id: "s5res-4",
      level: 1,
      type: "qcm",
      question: "Comment appelle-t-on les tout petits morceaux issus de la digestion des aliments et capables de passer dans le sang ?",
      choices: ["les aliments", "les nutriments", "les excréments", "les enzymes"],
      answer: 1,
      explanation:
        "Les nutriments sont le résultat de la digestion : assez petits pour traverser la paroi de l'intestin grêle et passer dans le sang. Les aliments, eux, sont ce que tu portes à ta bouche, bien trop gros pour être absorbés. Les enzymes sont les molécules des sucs digestifs qui réalisent ce découpage, et les excréments sont ce qui n'a pas été digéré.",
      hint: "Le mot ressemble à « nutrition ».",
    },
    {
      id: "s5res-5",
      level: 2,
      type: "qcm",
      question: "Le dauphin vit dans l'eau. Avec quel organe respire-t-il ?",
      choices: ["des branchies", "des poumons", "des trachées", "sa peau"],
      answer: 1,
      explanation:
        "Le dauphin est un mammifère : il respire avec des poumons et doit remonter à la surface pour prendre de l'air. Vivre dans l'eau n'impose donc pas d'avoir des branchies. C'est un piège classique : le milieu de vie ne détermine pas l'organe respiratoire. À l'inverse, l'escargot vit sur terre et possède un poumon.",
      hint: "Pourquoi un dauphin doit-il remonter régulièrement à la surface ?",
    },
    {
      id: "s5res-6",
      level: 2,
      type: "truefalse",
      question: "L'air que tu expires ne contient plus du tout de dioxygène.",
      answer: false,
      explanation:
        "Faux. L'air inspiré contient environ 21 % de dioxygène, l'air expiré en contient encore environ 16 % : ton corps n'en prélève qu'une partie. C'est justement pour cela que le bouche-à-bouche fonctionne. En revanche, l'air expiré est bien plus riche en dioxyde de carbone, qui passe d'environ 0,04 % à environ 4 %.",
      hint: "Pourquoi le bouche-à-bouche peut-il sauver quelqu'un ?",
    },
    {
      id: "s5res-7",
      level: 2,
      type: "input",
      question: "Dans quel organe du tube digestif les nutriments passent-ils dans le sang ? Réponds en deux mots.",
      answer: "intestin grêle",
      accept: ["intestin grele", "l'intestin grêle", "l'intestin grele", "le grêle"],
      explanation:
        "L'absorption a lieu dans l'intestin grêle, dont la paroi très fine et très plissée offre une immense surface d'échange avec le sang. Beaucoup d'élèves répondent « l'estomac » : celui-ci brasse et poursuit la digestion chimique, mais il n'absorbe pas les nutriments. Le gros intestin, lui, récupère surtout de l'eau avant la formation des excréments.",
      hint: "C'est l'organe le plus long du tube digestif, juste après l'estomac.",
    },
    {
      id: "s5res-8",
      level: 2,
      type: "qcm",
      question: "De quoi une plante verte a-t-elle besoin pour réaliser la photosynthèse ?",
      choices: [
        "de dioxygène, de sucre et d'obscurité",
        "de dioxyde de carbone, d'eau et de lumière",
        "d'engrais uniquement",
        "de dioxyde de carbone et d'obscurité",
      ],
      answer: 1,
      explanation:
        "La photosynthèse a besoin de dioxyde de carbone prélevé dans l'air, d'eau puisée par les racines avec les sels minéraux, et surtout de lumière. La plante produit alors sa matière organique et libère du dioxygène. Sans lumière, la photosynthèse s'arrête : une plante enfermée dans un placard jaunit puis meurt, même bien arrosée.",
      hint: "Le mot « photo- » dans photosynthèse renvoie à un élément indispensable.",
    },
    {
      id: "s5res-9",
      level: 3,
      type: "truefalse",
      question: "La nuit, une plante verte ne fait plus de photosynthèse mais elle continue de respirer.",
      answer: true,
      explanation:
        "Vrai. La respiration d'une plante ne s'arrête jamais : jour et nuit, elle absorbe du dioxygène et rejette du dioxyde de carbone, comme les animaux. La photosynthèse, elle, exige de la lumière : elle cesse la nuit. Le jour, la photosynthèse est si intense qu'elle masque la respiration, ce qui fait croire à tort que les plantes « respirent à l'envers ». Ce sont deux phénomènes distincts qui cohabitent.",
      hint: "Lequel des deux phénomènes a absolument besoin de lumière ?",
    },
    {
      id: "s5res-10",
      level: 3,
      type: "qcm",
      question: "Pendant une course, ta respiration s'accélère et ton cœur bat plus vite. Pourquoi ?",
      choices: [
        "parce que les muscles fabriquent du dioxygène en travaillant",
        "parce que les muscles consomment plus de dioxygène et de nutriments",
        "parce que le sang cesse de circuler dans les autres organes",
        "parce que le corps doit se débarrasser de son dioxygène en trop",
      ],
      answer: 1,
      explanation:
        "Un muscle qui travaille a besoin de plus d'énergie, donc de plus de dioxygène et de nutriments, et il produit davantage de dioxyde de carbone. La respiration s'accélère pour prélever plus d'O2 et rejeter plus de CO2, et le cœur accélère pour livrer tout cela plus vite par le sang. Aucun organe ne fabrique de dioxygène : le corps ne fait que le prélever dans l'air.",
      hint: "Que réclame un organe qui travaille davantage ?",
    },
    {
      id: "s5res-11",
      level: 3,
      type: "input",
      question: "Un têtard vit dans l'eau et respire avec des branchies. Quel organe respiratoire possède la grenouille adulte ? Réponds par un seul mot au pluriel.",
      answer: "poumons",
      accept: ["des poumons", "les poumons", "poumon"],
      explanation:
        "Au cours de sa métamorphose, le têtard perd ses branchies et développe des poumons : la grenouille adulte respire donc le dioxygène de l'air (sa peau humide participe aussi aux échanges). Un même animal peut ainsi changer d'organe respiratoire au cours de sa vie, ce qui montre bien que l'organe est lié au milieu où le dioxygène est prélevé, et non à l'espèce une fois pour toutes.",
      hint: "Une grenouille adulte peut rester longtemps hors de l'eau : où prélève-t-elle son dioxygène ?",
    },
    {
      id: "s5res-12",
      level: 3,
      type: "qcm",
      question: "En été, dans une mare très chaude et stagnante, on trouve des poissons morts. Quelle explication est la plus juste ?",
      choices: [
        "l'eau chaude contient moins de dioxygène dissous",
        "les poissons ne savent pas respirer l'eau chaude",
        "l'eau chaude contient trop de dioxygène pour eux",
        "les poissons ont besoin de lumière pour respirer",
      ],
      answer: 0,
      explanation:
        "La quantité de dioxygène qu'une eau peut contenir diminue quand sa température augmente, et une eau stagnante ne se recharge pas au contact de l'air. Les poissons manquent alors de dioxygène et s'asphyxient. Cela confirme que ce qui compte pour eux n'est pas l'eau elle-même, mais le dioxygène qui y est dissous : d'où l'utilité des pompes à air dans un aquarium.",
      hint: "Pense à ce que fait la pompe à bulles d'un aquarium.",
    },
  ],
  videos: [
    { title: "La respiration animale - SVT - Collège - Les Bons Profs", youtubeId: "u9pYjODI-A8", channel: "Les Bons Profs" },
  ],
};
