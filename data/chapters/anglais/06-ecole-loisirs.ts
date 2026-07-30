import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "en-ecole-loisirs",
  subject: "anglais",
  num: 6,
  title: "School & hobbies",
  domain: "donnees",
  domainLabel: "Vocabulary",
  icon: "Backpack",
  teaser: "Parler de son collège, de ses talents et de ses passions : I can, I like, I play…",
  objectives: [
    "Je connais les matières scolaires et les objets de la classe",
    "Je sais dire ce que je sais faire avec can et can't",
    "Je sais parler de mes goûts avec like/love/hate + verbe en -ing",
    "Je sais choisir entre play, do et go pour les sports et loisirs",
  ],
  lesson: [
    {
      title: "Les matières scolaires et l'emploi du temps",
      paragraphs: [
        "Les matières : Maths, English (anglais), French (français), History (histoire), Geography (géographie), Science (SVT/physique), Art (arts plastiques), Music (musique), PE (l'EPS — Physical Education), IT (l'informatique).",
        "Pour parler de l'emploi du temps (the timetable) : I have Maths on Monday (j'ai maths le lundi). Pour donner son avis : My favourite subject is… (ma matière préférée est…).",
        "Attention : les noms de langues et certains noms de matières prennent une majuscule : English, French, Spanish.",
      ],
      example: [
        "My favourite subject is History. → Ma matière préférée est l'histoire.",
        "We have PE on Friday afternoon. → Nous avons EPS le vendredi après-midi.",
        "I'm good at Maths. → Je suis fort(e) en maths.",
      ],
      tip: "Favourite s'écrit avec -our en anglais britannique (les Américains écrivent favorite). Retiens : « la faveur britannique a du cœur : OUR ».",
    },
    {
      title: "Les objets de la classe",
      paragraphs: [
        "Dans le cartable (the schoolbag) : a pen (un stylo), a pencil (un crayon), a rubber (une gomme), a ruler (une règle), a pencil case (une trousse), a book (un livre), an exercise book (un cahier), a copybook aussi.",
        "Dans la classe (the classroom) : the board (le tableau), a desk (un bureau/une table), a chair (une chaise), a computer (un ordinateur), a map (une carte).",
        "Pour demander quelque chose poliment : Can I have a pen, please? Pour demander à qui c'est : Whose pen is this?",
      ],
      example: [
        "There's a rubber in my pencil case. → Il y a une gomme dans ma trousse.",
        "Open your exercise books, please! → Ouvrez vos cahiers, s'il vous plaît !",
        "Look at the board. → Regardez le tableau.",
      ],
      tip: "Faux amis à surveiller : a rubber = une gomme (pas « un rubis »), a ruler = une règle (pour tracer). Et « un cahier » n'est pas « a cahier » mais an exercise book !",
    },
    {
      title: "Can et can't : capacité et permission",
      paragraphs: [
        "Can exprime la capacité (« savoir faire ») : I can swim = je sais nager. La négation est can't (= cannot) : I can't ski = je ne sais pas skier.",
        "Can est un verbe spécial : il ne prend JAMAIS de -s (she can, pas « she cans »), il est toujours suivi de la base verbale sans to (I can swim, pas « I can to swim »), et il forme ses questions par inversion : Can you swim?",
        "Can sert aussi à demander la permission : Can I go to the toilet, please? (Est-ce que je peux aller aux toilettes ?). Réponses courtes : Yes, I can. / No, I can't.",
      ],
      example: [
        "I can ride a bike, but I can't ride a horse. → Je sais faire du vélo, mais pas du cheval.",
        "She can speak three languages. → Elle sait parler trois langues.",
        "Can I open the window, please? – Yes, you can. → Puis-je ouvrir la fenêtre ? – Oui.",
      ],
      tip: "Can est un « super-verbe » qui casse les règles : jamais de -s, jamais de to après lui, jamais de do dans ses questions. Can you…?, tout simplement.",
    },
    {
      title: "Like, love, hate + verbe en -ing",
      paragraphs: [
        "Pour parler de ses goûts avec une activité, l'anglais utilise like / love / hate suivi du verbe en -ING : I like swimming (j'aime nager), I love reading (j'adore lire), I hate dancing (je déteste danser).",
        "C'est LE piège : le français dit « j'aime nager » (infinitif), l'anglais dit I like swimmING. Dire « I like swim » est une erreur très fréquente.",
        "On peut nuancer : I really like (j'aime beaucoup), I don't like (je n'aime pas), I quite like (j'aime bien). Question : Do you like playing football?",
      ],
      example: [
        "I love playing video games. → J'adore jouer aux jeux vidéo.",
        "She likes listening to music. → Elle aime écouter de la musique.",
        "My brother hates getting up early. → Mon frère déteste se lever tôt.",
        "Do you like cooking? – Yes, I do! → Aimes-tu cuisiner ? – Oui !",
      ],
      tip: "Après like, love, hate, le verbe porte son « bonnet -ing » : swimming, reading, playing. Vérifie chaque phrase de goût : y a-t-il le -ing ?",
    },
    {
      title: "Play, do ou go ? Les sports et loisirs",
      paragraphs: [
        "L'anglais répartit les sports en trois familles. PLAY + sports de balle et jeux : play football, play tennis, play basketball, play chess (jouer aux échecs).",
        "DO + activités et arts martiaux : do judo, do karate, do gymnastics, do athletics. GO + activités en -ing : go swimming, go skiing, go cycling, go fishing.",
        "Autres loisirs utiles : watch TV (regarder la télé), listen to music (écouter de la musique), read (lire), draw (dessiner), play the guitar / the piano (jouer d'un instrument — remarque le the pour les instruments, absent pour les sports !).",
      ],
      example: [
        "I play football on Wednesdays. → Je joue au foot le mercredi.",
        "She does judo at the club. → Elle fait du judo au club.",
        "We go swimming in summer. → Nous allons nager l'été.",
        "He plays the guitar. → Il joue de la guitare.",
      ],
      tip: "PLAY = balle ou jeu, DO = arts martiaux et gym, GO = activités en -ing (go swimming, go skiing). Et pour les instruments : play THE guitar, avec the !",
    },
  ],
  exercises: [
    {
      id: "esch-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « une gomme » en anglais ?",
      choices: ["a ruler", "a rubber", "a pencil", "a gum"],
      answer: 1,
      explanation:
        "Une gomme = a rubber (en anglais britannique). A ruler = une règle, a pencil = un crayon. Quant à gum, cela désigne le chewing-gum, pas la gomme !",
      hint: "Attention aux faux amis…",
    },
    {
      id: "esch-2",
      level: 1,
      type: "qcm",
      question: "Complète : « I like ... to music. »",
      choices: ["listen", "listens", "listening", "to listening"],
      answer: 2,
      explanation:
        "Après like, love et hate, le verbe se met en -ing : I like listening to music. « I like listen » est le calque du français « j'aime écouter » — c'est LE piège de ce chapitre.",
      hint: "like + verbe en -...",
    },
    {
      id: "esch-3",
      level: 1,
      type: "truefalse",
      question: "PE est la matière où l'on fait du sport.",
      answer: true,
      explanation:
        "Vrai ! PE = Physical Education, l'équivalent de l'EPS en France. Exemple : We have PE on Friday (nous avons sport le vendredi).",
    },
    {
      id: "esch-4",
      level: 1,
      type: "input",
      question: "Complète avec la négation de can : « I can swim but I ... ski. »",
      answer: "can't",
      accept: ["cannot", "can not"],
      explanation:
        "La négation de can est can't (forme pleine : cannot, en un seul mot) : I can't ski = je ne sais pas skier. On n'utilise jamais don't avec can.",
      hint: "can + not, en version contractée.",
    },
    {
      id: "esch-5",
      level: 2,
      type: "qcm",
      question: "Quel verbe pour le judo ? « She ... judo on Saturdays. »",
      choices: ["plays", "does", "goes", "makes"],
      answer: 1,
      explanation:
        "Les arts martiaux et la gym s'utilisent avec do : she does judo. Play est réservé aux sports de balle et aux jeux (play tennis, play chess), go aux activités en -ing (go swimming).",
      hint: "Judo : balle, art martial ou activité en -ing ?",
    },
    {
      id: "esch-6",
      level: 2,
      type: "qcm",
      question: "Quelle phrase est correcte ?",
      choices: ["She cans speak English.", "She can speaks English.", "She can speak English.", "She can to speak English."],
      answer: 2,
      explanation:
        "Can ne prend jamais de -s, et il est suivi de la base verbale sans to : She can speak English. Les trois autres ajoutent un -s ou un to interdits.",
      hint: "Can casse deux règles : pas de -s, pas de to.",
    },
    {
      id: "esch-7",
      level: 2,
      type: "input",
      question: "Traduis : « Nous allons nager » (avec go + activité en -ing) : « We go ... »",
      answer: "swimming",
      explanation:
        "Les activités comme la natation, le ski ou le vélo s'expriment avec go + verbe en -ing : we go swimming, we go skiing, we go cycling. Remarque le doublement du m : swim → swimming.",
      hint: "swim + -ing, avec une consonne doublée.",
    },
    {
      id: "esch-8",
      level: 2,
      type: "truefalse",
      question: "Pour demander la permission de sortir, on peut dire : « Can I go out, please? »",
      answer: true,
      explanation:
        "Vrai ! Can sert aussi à demander la permission : Can I go out, please? / Can I go to the toilet, please? La réponse : Yes, you can ou No, you can't.",
      hint: "Can a deux emplois : capacité et permission.",
    },
    {
      id: "esch-9",
      level: 3,
      type: "input",
      question: "Traduis : « Il joue de la guitare. » → « He plays ... guitar. » Quel petit mot manque ?",
      answer: "the",
      explanation:
        "Pour les instruments de musique, l'anglais met the : play the guitar, play the piano. C'est l'inverse des sports, qui n'en prennent pas : play football (sans the). He plays the guitar.",
      hint: "Instrument = un petit mot en plus ; sport = rien.",
    },
    {
      id: "esch-10",
      level: 3,
      type: "qcm",
      question: "Quelle phrase traduit « Ma sœur déteste se lever tôt » ?",
      choices: [
        "My sister hates get up early.",
        "My sister hates getting up early.",
        "My sister hate getting up early.",
        "My sister hates to getting up early.",
      ],
      answer: 1,
      explanation:
        "Deux règles à la fois : hate prend un -s avec my sister (3e personne), et le verbe qui suit se met en -ing : My sister hates getting up early. La réponse 1 oublie le -ing, la 3 oublie le -s.",
      hint: "Vérifie le -s de la 3e personne ET le -ing.",
    },
    {
      id: "esch-11",
      level: 3,
      type: "input",
      question: "Remets dans l'ordre pour poser la question : « you / ride / can / a / bike » (sans point d'interrogation)",
      answer: "can you ride a bike",
      explanation:
        "Can forme ses questions par simple inversion, sans do : Can you ride a bike? (« Sais-tu faire du vélo ? »). Ordre : can + sujet + base verbale + complément.",
      hint: "Pas de do : can passe devant le sujet, c'est tout.",
    },
    {
      id: "esch-12",
      level: 3,
      type: "qcm",
      question: "Choisis la série entièrement correcte :",
      choices: [
        "play football, do judo, go swimming",
        "do football, play judo, go swimming",
        "play football, go judo, do swimming",
        "go football, do judo, play swimming",
      ],
      answer: 0,
      explanation:
        "Play + sports de balle (play football), do + arts martiaux (do judo), go + activités en -ing (go swimming). C'est la répartition à connaître par cœur pour parler de ses loisirs.",
      hint: "Balle → play, art martial → do, -ing → go.",
    },
  ],
};
