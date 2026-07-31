import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "it5-famiglia",
  subject: "italien",
  grade: "5e",
  num: 5,
  title: "La famiglia",
  domain: "nombres",
  domainLabel: "Vocabolario",
  icon: "House",
  teaser: "Présenter sa famille : madre, padre, fratelli… et le piège des possessifs mio, tuo, suo.",
  objectives: [
    "Je connais le vocabulaire de la famille : madre, padre, fratello, sorella, nonni…",
    "Je sais utiliser les possessifs mio, tuo, suo avec l'article : il mio cane",
    "Je connais LE piège : pas d'article avec la famille au singulier (mia madre)",
    "Je sais décrire quelqu'un : alto / alta, et accorder l'adjectif",
  ],
  lesson: [
    {
      title: "La famiglia : le vocabulaire",
      figure: "it-famiglia",
      paragraphs: [
        "Les parents : la madre (la mère), il padre (le père) — ensemble, i genitori (les parents ; attention, « i parenti » veut dire « les membres de la famille » en général, pas papa et maman !).",
        "Frères et soeurs : il fratello (le frère), la sorella (la soeur). « I fratelli » peut vouloir dire « les frères » ou « les frères et soeurs ».",
        "Les grands-parents : il nonno (le grand-père), la nonna (la grand-mère), i nonni (les grands-parents). Oncles, tantes et cousins : lo zio, la zia, il cugino, la cugina.",
        "Les enfants : il figlio (le fils), la figlia (la fille). Remarque le « gli » de figlio : prononciation « fiyo », avec le l mouillé.",
      ],
      example: [
        "la madre → la mère, il padre → le père",
        "il fratello → le frère, la sorella → la soeur",
        "i nonni → les grands-parents",
        "lo zio → l'oncle (article lo : le z !)",
      ],
      tip: "Faux ami : « i parenti » ne veut pas dire « les parents » (papa et maman = i genitori) mais « la parenté, la famille au sens large » : oncles, cousins, etc.",
    },
    {
      title: "Les possessifs : il mio, la mia…",
      paragraphs: [
        "Mon, ton, son se disent mio, tuo, suo au masculin et mia, tua, sua au féminin. Le possessif s'accorde avec la chose possédée, pas avec le possesseur.",
        "Grande différence avec le français : en italien, le possessif est normalement précédé de l'article ! On dit « il mio cane » (littéralement « le mon chien »), « la mia bici » (mon vélo), « i miei libri » (mes livres).",
        "Au pluriel : miei / mie, tuoi / tue, suoi / sue. Il mio libro → i miei libri ; la mia amica → le mie amiche.",
      ],
      example: [
        "il mio cane → mon chien",
        "la mia scuola → mon école",
        "i miei libri → mes livres",
        "il tuo zaino → ton sac à dos",
        "la sua penna → son stylo",
      ],
      tip: "Réflexe : article + possessif + nom. IL mio cane, LA tua casa. Si tu oublies l'article, un Italien te comprendra, mais la phrase sonnera fausse.",
    },
    {
      title: "LE piège : mia madre, sans article !",
      paragraphs: [
        "Voici l'exception la plus célèbre de la grammaire italienne : avec les noms de famille au SINGULIER, on supprime l'article devant le possessif. On dit « mia madre » (pas « la mia madre »), « mio padre », « tuo fratello », « sua sorella ».",
        "Mais l'article revient dès que le nom est au pluriel : « i miei fratelli » (mes frères), « le mie sorelle » (mes soeurs), « i miei nonni ».",
        "L'article revient aussi avec un mot affectueux ou modifié : « la mia mamma » (ma maman), « la mia sorellina » (ma petite soeur), « il mio fratello maggiore » (mon grand frère).",
      ],
      example: [
        "mia madre → ma mère (pas d'article !)",
        "mio fratello → mon frère",
        "MAIS i miei fratelli → mes frères (pluriel : article)",
        "MAIS la mia mamma → ma maman (mot affectueux : article)",
      ],
      tip: "Retiens la formule : famille + singulier = pas d'article. Mia madre, tuo padre, sua sorella. Partout ailleurs (pluriel, animaux, objets), l'article est là : il mio cane, i miei cugini.",
    },
    {
      title: "Décrire quelqu'un : alto, alta…",
      paragraphs: [
        "Pour décrire, on utilise essere + un adjectif : Mio padre è alto (mon père est grand). L'adjectif s'accorde avec la personne : alto (masculin) / alta (féminin), alti / alte au pluriel.",
        "Adjectifs utiles : alto (grand), basso (petit), biondo (blond), bruno (brun), magro (mince), simpatico (sympa), gentile (gentil — même forme au masculin et au féminin), giovane (jeune), sportivo (sportif).",
        "Pour les cheveux et les yeux : Ha i capelli neri (il / elle a les cheveux noirs), Ha gli occhi verdi (il / elle a les yeux verts). Remarque : avec avere + article, comme en français.",
      ],
      example: [
        "Mia sorella è alta e bionda. → Ma soeur est grande et blonde.",
        "Mio nonno è simpatico. → Mon grand-père est sympa.",
        "I miei cugini sono sportivi. → Mes cousins sont sportifs.",
        "Mia madre ha gli occhi verdi. → Ma mère a les yeux verts.",
      ],
      tip: "L'accord marche comme les noms : -o → masculin, -a → féminin, -i / -e au pluriel. Les adjectifs en -e (gentile, giovane) ne changent pas au féminin : mia madre è gentile.",
    },
  ],
  exercises: [
    {
      id: "it5f-1",
      level: 1,
      type: "qcm",
      question: "Comment dit-on « la soeur » en italien ?",
      choices: ["la madre", "la sorella", "la zia", "la nonna"],
      answer: 1,
      explanation:
        "« La sorella » = la soeur. « La madre » = la mère, « la zia » = la tante, « la nonna » = la grand-mère. Le frère se dit « il fratello ».",
      hint: "Son « frère » de vocabulaire est « il fratello ».",
    },
    {
      id: "it5f-2",
      level: 1,
      type: "qcm",
      question: "Que veut dire « i nonni » ?",
      choices: ["Les parents", "Les oncles", "Les grands-parents", "Les cousins"],
      answer: 2,
      explanation:
        "« I nonni » = les grands-parents (il nonno + la nonna). Les parents = i genitori, les oncles = gli zii, les cousins = i cugini.",
      hint: "Il nonno, c'est le grand-père…",
    },
    {
      id: "it5f-3",
      level: 1,
      type: "truefalse",
      question: "En italien, « i parenti » veut dire « les parents » (le père et la mère).",
      answer: false,
      explanation:
        "Faux ! C'est un faux ami : « i parenti » désigne la famille au sens large (oncles, tantes, cousins…). Le père et la mère se disent « i genitori ». Mio padre e mia madre sono i miei genitori.",
      hint: "C'est un faux ami : papa et maman se disent autrement.",
    },
    {
      id: "it5f-4",
      level: 1,
      type: "input",
      question: "Complète : « il … cane » (MON chien). Un seul mot.",
      answer: "mio",
      explanation:
        "« Il mio cane » = mon chien. En italien, le possessif est précédé de l'article : article (il) + possessif (mio) + nom (cane). « Cane » est masculin, donc mio et pas mia.",
      hint: "Le possessif de « je », au masculin singulier.",
    },
    {
      id: "it5f-5",
      level: 2,
      type: "qcm",
      question: "Comment dit-on correctement « ma mère » en italien ?",
      choices: ["la mia madre", "mia madre", "mia la madre", "la madre mia"],
      answer: 1,
      explanation:
        "« Mia madre », SANS article ! C'est le grand piège : avec les noms de famille au singulier (madre, padre, fratello…), on supprime l'article devant le possessif. « La mia madre » est la faute typique du francophone qui applique la règle générale.",
      hint: "Famille + singulier = une exception célèbre…",
    },
    {
      id: "it5f-6",
      level: 2,
      type: "input",
      question: "Complète avec le bon possessif : « … fratello ha dieci anni » (MON frère a dix ans). Un seul mot.",
      answer: "mio",
      explanation:
        "« Mio fratello ha dieci anni » : fratello est un nom de famille au singulier, donc pas d'article, juste le possessif « mio » (masculin, car fratello est masculin). Et l'âge avec avere : ha dieci anni.",
      hint: "Pas d'article ici : un seul mot suffit devant « fratello ».",
    },
    {
      id: "it5f-7",
      level: 2,
      type: "qcm",
      question: "Quelle phrase est correcte pour dire « mes frères » ?",
      choices: ["miei fratelli", "i miei fratelli", "mio fratelli", "i mio fratelli"],
      answer: 1,
      explanation:
        "« I miei fratelli » : au PLURIEL, l'article revient, même pour la famille ! L'exception « pas d'article » ne vaut qu'au singulier (mio fratello). Au pluriel : i miei fratelli, le mie sorelle, i miei nonni.",
      hint: "L'exception du singulier ne s'applique plus au pluriel.",
    },
    {
      id: "it5f-8",
      level: 2,
      type: "truefalse",
      question: "Dans « figlio » (fils), le groupe « gli » se prononce comme un l mouillé : « fiyo ».",
      answer: true,
      explanation:
        "Vrai ! Comme dans famiglia, le « gli » de figlio est un l mouillé : « fiyo ». On n'entend pas le g. Figlio (fils), figlia (fille), famiglia (famille) : même son partout.",
    },
    {
      id: "it5f-9",
      level: 3,
      type: "input",
      question: "Accorde l'adjectif : « mia sorella è … » (ma soeur est grande). Un seul mot, adjectif alto.",
      answer: "alta",
      explanation:
        "« Mia sorella è alta » : l'adjectif s'accorde avec la personne décrite. Sorella est féminin, donc alto → alta. Pour un frère : mio fratello è alto. Au pluriel : le mie sorelle sono alte.",
      hint: "Sorella est féminin : la finale -o de l'adjectif devient…",
    },
    {
      id: "it5f-10",
      level: 3,
      type: "qcm",
      question: "Pourquoi dit-on « la mia mamma » avec article, alors qu'on dit « mia madre » sans article ?",
      choices: [
        "Parce que mamma est un mot pluriel",
        "Parce que mamma est un mot affectueux, et l'exception ne s'applique plus",
        "C'est une erreur : il faut dire « mia mamma »",
        "Parce que mamma est masculin",
      ],
      answer: 1,
      explanation:
        "L'exception « pas d'article » ne vaut que pour les noms de famille simples au singulier (madre, padre…). Avec un mot affectueux ou modifié (mamma, papà, sorellina, fratello maggiore), l'article revient : la mia mamma, il mio papà.",
      hint: "Mamma est à madre ce que « maman » est à « mère »…",
    },
    {
      id: "it5f-11",
      level: 3,
      type: "input",
      question: "Traduis en italien : « son frère » (le frère de Marco, 2 mots).",
      answer: "suo fratello",
      explanation:
        "« Suo fratello » = son frère : nom de famille au singulier, donc pas d'article. « Suo » s'accorde avec fratello (masculin), peu importe que le possesseur soit un garçon ou une fille : le possessif s'accorde avec la chose possédée.",
      hint: "Possessif de « il / elle » au masculin + le nom, sans article.",
    },
    {
      id: "it5f-12",
      level: 3,
      type: "truefalse",
      question: "Dans « i miei cugini sono sportivi », tous les accords sont corrects.",
      answer: true,
      explanation:
        "Vrai ! « I miei cugini sono sportivi » = mes cousins sont sportifs. Article pluriel i + possessif pluriel miei + nom pluriel cugini, verbe sono (ils sont) et adjectif accordé au masculin pluriel : sportivi. Toute la chaîne est au masculin pluriel.",
      hint: "Vérifie chaque maillon : article, possessif, nom, verbe, adjectif.",
    },
  ],
  videos: [
    {
      title: "LA FAMILLE EN ITALIEN avec texte et traduction en français",
      youtubeId: "hd2klFOSrCw",
      channel: "ABC Languages",
    },
  ],
};
