import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-famille-maison",
  subject: "anglais",
  num: 5,
  title: "Family & home",
  domain: "nombres",
  domainLabel: "Vocabulary",
  icon: "House",
  teaser: "Présenter sa famille, décrire sa maison, et ne plus jamais confondre his et her.",
  objectives: [
    "Je connais le vocabulaire de la famille",
    "Je sais utiliser les adjectifs possessifs, surtout his et her",
    "Je sais employer le génitif : Tom's sister",
    "Je connais les pièces de la maison et les meubles",
    "Je sais utiliser there is / there are et les prépositions de lieu",
  ],
  lesson: [
    {
      title: "La famille",
      paragraphs: [
        "Les mots de base : mother (mère), father (père), parents, sister (sœur), brother (frère), grandmother (grand-mère), grandfather (grand-père), grandparents, aunt (tante), uncle (oncle), cousin (cousin ou cousine).",
        "En famille, on utilise souvent les mots affectueux : mum (maman), dad (papa), granny ou grandma (mamie), grandpa (papi).",
        "Deux mots collectifs utiles : siblings (les frères et sœurs) et children (les enfants — pluriel irrégulier de child).",
      ],
      example: [
        "I've got one brother and two sisters. → J'ai un frère et deux sœurs.",
        "My grandparents live in Brighton. → Mes grands-parents habitent à Brighton.",
        "Have you got any siblings? → As-tu des frères et sœurs ?",
      ],
      tip: "Parents en anglais = uniquement le père et la mère ! Pour « les membres de la famille » en général, on dit relatives.",
    },
    {
      title: "Les adjectifs possessifs : le piège his/her",
      paragraphs: [
        "Les adjectifs possessifs : my (mon, ma, mes), your (ton, ta, tes / votre, vos), his (son, sa, ses — à LUI), her (son, sa, ses — à ELLE), its (à une chose ou un animal), our (notre, nos), their (leur, leurs).",
        "LE grand piège : en français, « son vélo » s'accorde avec le vélo. En anglais, his ou her s'accorde avec le POSSESSEUR : his bike = le vélo d'un garçon, her bike = le vélo d'une fille. Le mot bike n'y change rien !",
        "Les adjectifs possessifs sont invariables : my book, my books (pas de -s à my).",
      ],
      example: [
        "Tom loves his dog. → Tom aime son chien (le chien de Tom).",
        "Lucy loves her dog. → Lucy aime son chien (le chien de Lucy).",
        "This is her brother. → C'est son frère (le frère d'une fille).",
      ],
      tip: "Pose-toi une seule question : « À QUI appartient l'objet ? » Un garçon/un homme → his. Une fille/une femme → her. Oublie le genre du mot français !",
    },
    {
      title: "Le génitif : Tom's sister",
      paragraphs: [
        "Pour dire l'appartenance, l'anglais retourne l'ordre du français : « la sœur de Tom » devient Tom's sister — le possesseur d'abord, avec 's, puis la chose possédée.",
        "On utilise le génitif surtout pour les personnes (et les animaux) : my mother's car (la voiture de ma mère), the cat's basket (le panier du chat).",
        "Au pluriel régulier, l'apostrophe se place après le s : my parents' bedroom (la chambre de mes parents).",
      ],
      example: [
        "Tom's sister is eleven. → La sœur de Tom a onze ans.",
        "This is my father's office. → C'est le bureau de mon père.",
        "Emma's cousins live in Ireland. → Les cousins d'Emma habitent en Irlande.",
      ],
      tip: "Le génitif se lit À L'ENVERS du français : Tom's sister = « de Tom, la sœur ». Repère le 's et pars du nom qui le porte.",
    },
    {
      title: "La maison : pièces et meubles",
      paragraphs: [
        "Les pièces : the kitchen (la cuisine), the living room (le salon), the bedroom (la chambre), the bathroom (la salle de bains), the toilet (les toilettes), the hall (l'entrée), the garden (le jardin), the garage.",
        "Les meubles et objets : a bed (un lit), a table, a chair (une chaise), a sofa (un canapé), a desk (un bureau), a wardrobe (une armoire), a lamp (une lampe), a mirror (un miroir), the stairs (l'escalier).",
        "Deux mots pour « maison » : house désigne le bâtiment, home désigne le chez-soi (at home = à la maison).",
      ],
      example: [
        "My bedroom is next to the bathroom. → Ma chambre est à côté de la salle de bains.",
        "We watch TV in the living room. → Nous regardons la télé dans le salon.",
        "I do my homework at my desk. → Je fais mes devoirs à mon bureau.",
      ],
      tip: "Bedroom, bathroom, living room… beaucoup de pièces finissent par room (« pièce »). Bed + room = la pièce du lit !",
    },
    {
      title: "There is / there are et les prépositions de lieu",
      paragraphs: [
        "Pour dire « il y a » : there is + singulier (There is a sofa), there are + pluriel (There are two chairs). Négation : there isn't / there aren't. Question : Is there…? / Are there…?",
        "Les prépositions de lieu servent à situer : in (dans), on (sur), under (sous), next to (à côté de), behind (derrière), in front of (devant), between (entre).",
        "Le français dit « il y a » au singulier comme au pluriel — l'anglais, lui, accorde : there IS a cat / there ARE two cats. Ne l'oublie pas !",
      ],
      example: [
        "There is a lamp on the desk. → Il y a une lampe sur le bureau.",
        "There are two bedrooms in my house. → Il y a deux chambres dans ma maison.",
        "The cat is under the table. → Le chat est sous la table.",
        "The garage is behind the house. → Le garage est derrière la maison.",
      ],
      tip: "Un truc pour in/on/under : IN = dedans (dans la boîte), ON = posé dessus (sur la table), UNDER = dessous. Mime-les avec ta main pour les mémoriser !",
    },
  ],
  exercises: [
    {
      id: "efam-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « la sœur » en anglais ?",
      choices: ["brother", "sister", "aunt", "cousin"],
      answer: 1,
      explanation:
        "Sister = la sœur. Brother = le frère, aunt = la tante, cousin = le cousin ou la cousine (le même mot pour les deux en anglais !).",
    },
    {
      id: "efam-2",
      level: 1,
      type: "qcm",
      question: "Tom a un vélo. Complète : « This is ... bike. »",
      choices: ["her", "his", "its", "their"],
      answer: 1,
      explanation:
        "Le possesseur est Tom, un garçon, donc his : This is his bike. En anglais, le possessif s'accorde avec le possesseur, pas avec l'objet — même si « bicyclette » est féminin en français !",
      hint: "À qui appartient le vélo : un garçon ou une fille ?",
    },
    {
      id: "efam-3",
      level: 1,
      type: "input",
      question: "Complète : « ... is a sofa in the living room. » (deux mots : « il y a » au singulier)",
      answer: "there is",
      accept: ["there's"],
      explanation:
        "« Il y a » + singulier = there is : There is a sofa in the living room. Avec un pluriel, on dirait there are : There are two sofas.",
      hint: "a sofa : singulier ou pluriel ?",
    },
    {
      id: "efam-4",
      level: 1,
      type: "truefalse",
      question: "« The kitchen » veut dire « la chambre ».",
      answer: false,
      explanation:
        "Faux ! The kitchen = la cuisine. La chambre se dit the bedroom (littéralement « la pièce du lit »). Ne confonds pas non plus avec the bathroom, la salle de bains.",
    },
    {
      id: "efam-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on « la voiture de ma mère » ?",
      choices: ["the car of my mother", "my mother car", "my mother's car", "my car's mother"],
      answer: 2,
      explanation:
        "Avec une personne, on utilise le génitif : possesseur + 's + objet → my mother's car. L'ordre est inversé par rapport au français : « de ma mère, la voiture ». « The car of my mother » est un calque maladroit.",
      hint: "Le possesseur d'abord, avec son 's.",
    },
    {
      id: "efam-6",
      level: 2,
      type: "qcm",
      question: "Lucy cherche son sac. Complète : « Where is ... bag? »",
      choices: ["his", "her", "your", "its"],
      answer: 1,
      explanation:
        "Le possesseur est Lucy, une fille, donc her : Where is her bag? Piège classique : en français « son sac » est masculin, mais l'anglais ne regarde que le possesseur.",
      hint: "Lucy est une fille → his ou her ?",
    },
    {
      id: "efam-7",
      level: 2,
      type: "input",
      question: "Le chat est sous la table. Complète : « The cat is ... the table. » (un mot)",
      answer: "under",
      explanation:
        "« Sous » = under : The cat is under the table. Rappel des prépositions : in = dans, on = sur, under = sous, next to = à côté de, behind = derrière.",
      hint: "in = dans, on = sur, et « sous » alors ?",
    },
    {
      id: "efam-8",
      level: 2,
      type: "truefalse",
      question: "On dit « There is three chairs in the kitchen. »",
      answer: false,
      explanation:
        "Faux ! Three chairs est un pluriel, donc il faut there are : There are three chairs in the kitchen. Contrairement au français où « il y a » ne change jamais, l'anglais accorde : there is + singulier, there are + pluriel.",
      hint: "Compte les chaises : singulier ou pluriel ?",
    },
    {
      id: "efam-9",
      level: 3,
      type: "input",
      question: "Traduis « le frère d'Emma » (3 mots, avec l'apostrophe du génitif).",
      answer: "emma's brother",
      explanation:
        "Génitif : possesseur + 's + nom → Emma's brother. On lit à l'envers du français : « d'Emma, le frère ». Sans l'apostrophe (« emmas brother »), la marque de possession disparaît.",
      hint: "Commence par la possesseuse, ajoute 's.",
    },
    {
      id: "efam-10",
      level: 3,
      type: "qcm",
      question: "« My parents love their garden. » Que signifie their ?",
      choices: ["son, sa (à lui)", "leur, leurs", "notre, nos", "ton, ta, tes"],
      answer: 1,
      explanation:
        "Their = « leur, leurs » (le possessif de they) : mes parents aiment LEUR jardin. Ne confonds pas avec there (là-bas / there is) ni they're (= they are) : les trois se prononcent pareil !",
      hint: "their est le possessif de they.",
    },
    {
      id: "efam-11",
      level: 3,
      type: "qcm",
      question: "Quelle phrase décrit correctement l'image : une lampe posée sur le bureau, entre deux livres ?",
      choices: [
        "There is a lamp under the desk, next to two books.",
        "There is a lamp on the desk, between two books.",
        "There are a lamp on the desk, behind two books.",
        "There is a lamp in the desk, between two books.",
      ],
      answer: 1,
      explanation:
        "Une lampe = singulier → there is. Posée dessus → on the desk. Entre deux livres → between two books. La bonne phrase : There is a lamp on the desk, between two books.",
      hint: "Trois choses à vérifier : is/are, la préposition « sur », et « entre ».",
    },
    {
      id: "efam-12",
      level: 3,
      type: "input",
      question: "Ben parle du chien de sa sœur : « My sister has got a dog. ... dog is very small. » Quel adjectif possessif manque ?",
      answer: "her",
      explanation:
        "Le chien appartient à my sister, une fille → her : Her dog is very small. Piège double : ce n'est pas le chien de Ben (donc pas his au sens « à moi »), et le possessif suit le possesseur (la sœur), pas l'animal.",
      hint: "À qui est le chien ? À la sœur.",
    },
  ],
};
