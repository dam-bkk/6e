// GÉNÉRÉ par scripts/gen-registry.mjs — ne pas éditer à la main.
import type { Chapter, Grade, Subject } from "@/lib/types";
import { chapter as c000 } from "@/data/chapters/01-nombres-entiers";
import { chapter as c001 } from "@/data/chapters/02-nombres-decimaux";
import { chapter as c002 } from "@/data/chapters/03-operations";
import { chapter as c003 } from "@/data/chapters/04-division";
import { chapter as c004 } from "@/data/chapters/05-fractions";
import { chapter as c005 } from "@/data/chapters/06-proportionnalite";
import { chapter as c006 } from "@/data/chapters/07-tableaux-graphiques";
import { chapter as c007 } from "@/data/chapters/08-droites-cercles";
import { chapter as c008 } from "@/data/chapters/09-angles";
import { chapter as c009 } from "@/data/chapters/10-triangles-quadrilateres";
import { chapter as c010 } from "@/data/chapters/11-symetrie-axiale";
import { chapter as c011 } from "@/data/chapters/12-grandeurs-mesures";
import { chapter as c012 } from "@/data/chapters/13-perimetres-aires";
import { chapter as c013 } from "@/data/chapters/14-volumes-solides";
import { chapter as c014 } from "@/data/chapters/15-probabilites";
import { chapter as c015 } from "@/data/chapters/anglais/01-se-presenter";
import { chapter as c016 } from "@/data/chapters/anglais/02-be-have";
import { chapter as c017 } from "@/data/chapters/anglais/03-present-simple";
import { chapter as c018 } from "@/data/chapters/anglais/04-mots-essentiels";
import { chapter as c019 } from "@/data/chapters/anglais/05-famille-maison";
import { chapter as c020 } from "@/data/chapters/anglais/06-ecole-loisirs";
import { chapter as c021 } from "@/data/chapters/anglais/07-nourriture-animaux";
import { chapter as c022 } from "@/data/chapters/anglais/08-questions";
import { chapter as c023 } from "@/data/chapters/anglais-5e/01-past-be-was-were";
import { chapter as c024 } from "@/data/chapters/anglais-5e/02-past-simple-regular";
import { chapter as c025 } from "@/data/chapters/anglais-5e/03-past-simple-irregular";
import { chapter as c026 } from "@/data/chapters/anglais-5e/04-present-continuous";
import { chapter as c027 } from "@/data/chapters/anglais-5e/05-future";
import { chapter as c028 } from "@/data/chapters/anglais-5e/06-comparatives";
import { chapter as c029 } from "@/data/chapters/anglais-5e/07-ville-voyages";
import { chapter as c030 } from "@/data/chapters/anglais-5e/08-descriptions";
import { chapter as c031 } from "@/data/chapters/francais/01-classes-de-mots";
import { chapter as c032 } from "@/data/chapters/francais/02-fonctions";
import { chapter as c033 } from "@/data/chapters/francais/03-present";
import { chapter as c034 } from "@/data/chapters/francais/04-imparfait-passe-simple";
import { chapter as c035 } from "@/data/chapters/francais/05-futur-passe-compose";
import { chapter as c036 } from "@/data/chapters/francais/06-accords";
import { chapter as c037 } from "@/data/chapters/francais/07-homophones";
import { chapter as c038 } from "@/data/chapters/francais/08-vocabulaire";
import { chapter as c039 } from "@/data/chapters/francais-5e/01-phrase-complexe";
import { chapter as c040 } from "@/data/chapters/francais-5e/02-expansions-nom";
import { chapter as c041 } from "@/data/chapters/francais-5e/03-passe-simple";
import { chapter as c042 } from "@/data/chapters/francais-5e/04-temps-composes";
import { chapter as c043 } from "@/data/chapters/francais-5e/05-accord-participe";
import { chapter as c044 } from "@/data/chapters/francais-5e/06-homophones-avances";
import { chapter as c045 } from "@/data/chapters/francais-5e/07-degres-adverbes";
import { chapter as c046 } from "@/data/chapters/francais-5e/08-vocabulaire-figures";
import { chapter as c047 } from "@/data/chapters/histoire-geo/01-debuts-humanite";
import { chapter as c048 } from "@/data/chapters/histoire-geo/02-neolithique-orient";
import { chapter as c049 } from "@/data/chapters/histoire-geo/03-monde-grec";
import { chapter as c050 } from "@/data/chapters/histoire-geo/04-rome";
import { chapter as c051 } from "@/data/chapters/histoire-geo/05-judaisme-christianisme";
import { chapter as c052 } from "@/data/chapters/histoire-geo/06-metropoles";
import { chapter as c053 } from "@/data/chapters/histoire-geo/07-littoraux-campagnes";
import { chapter as c054 } from "@/data/chapters/histoire-geo/08-emc-college";
import { chapter as c055 } from "@/data/chapters/inter/01-mission-pyramides";
import { chapter as c056 } from "@/data/chapters/inter/02-mission-olympie";
import { chapter as c057 } from "@/data/chapters/inter/03-mission-ocean";
import { chapter as c058 } from "@/data/chapters/inter/04-mission-chateau";
import { chapter as c059 } from "@/data/chapters/inter/05-mission-climat";
import { chapter as c060 } from "@/data/chapters/inter/06-mission-decouvertes";
import { chapter as c061 } from "@/data/chapters/maths-5e/01-relatifs";
import { chapter as c062 } from "@/data/chapters/maths-5e/02-priorites";
import { chapter as c063 } from "@/data/chapters/maths-5e/03-fractions-somme";
import { chapter as c064 } from "@/data/chapters/maths-5e/04-fractions-produit";
import { chapter as c065 } from "@/data/chapters/maths-5e/05-calcul-litteral";
import { chapter as c066 } from "@/data/chapters/maths-5e/06-proportionnalite";
import { chapter as c067 } from "@/data/chapters/maths-5e/07-statistiques";
import { chapter as c068 } from "@/data/chapters/maths-5e/08-probabilites";
import { chapter as c069 } from "@/data/chapters/maths-5e/09-symetrie-centrale";
import { chapter as c070 } from "@/data/chapters/maths-5e/10-angles-paralleles";
import { chapter as c071 } from "@/data/chapters/maths-5e/11-triangles";
import { chapter as c072 } from "@/data/chapters/maths-5e/12-parallelogrammes";
import { chapter as c073 } from "@/data/chapters/maths-5e/13-aires";
import { chapter as c074 } from "@/data/chapters/maths-5e/14-prismes-cylindres";
import { chapter as c075 } from "@/data/chapters/sciences/01-terre-systeme-solaire";
import { chapter as c076 } from "@/data/chapters/sciences/02-matiere";
import { chapter as c077 } from "@/data/chapters/sciences/03-vivant-classification";
import { chapter as c078 } from "@/data/chapters/sciences/04-developpement-vivant";
import { chapter as c079 } from "@/data/chapters/sciences/05-alimentation";
import { chapter as c080 } from "@/data/chapters/sciences/06-energie-objets";
import { chapter as c081 } from "@/data/chapters/sciences-5e/01-melanges";
import { chapter as c082 } from "@/data/chapters/sciences-5e/02-circuits";

const RAW: Chapter[] = [
  c000, c001, c002, c003, c004, c005, c006, c007, c008, c009, c010, c011, c012, c013, c014, c015, c016, c017, c018, c019, c020, c021, c022, c023, c024, c025, c026, c027, c028, c029, c030, c031, c032, c033, c034, c035, c036, c037, c038, c039, c040, c041, c042, c043, c044, c045, c046, c047, c048, c049, c050, c051, c052, c053, c054, c055, c056, c057, c058, c059, c060, c061, c062, c063, c064, c065, c066, c067, c068, c069, c070, c071, c072, c073, c074, c075, c076, c077, c078, c079, c080, c081, c082,
];

/** Tous les chapitres, matière/niveau normalisés (défaut maths 6e). */
export const CHAPTERS: Chapter[] = RAW.map((c) => ({
  subject: "maths" as Subject,
  grade: "6e" as Grade,
  ...c,
})).sort((a, b) => a.num - b.num);

export function getChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function chaptersFor(subject: Subject, grade: Grade): Chapter[] {
  return CHAPTERS.filter((c) => c.subject === subject && c.grade === grade);
}
