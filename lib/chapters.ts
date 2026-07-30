import type { Chapter, Grade, Subject } from "@/lib/types";
import { chapter as c01 } from "@/data/chapters/01-nombres-entiers";
import { chapter as c02 } from "@/data/chapters/02-nombres-decimaux";
import { chapter as c03 } from "@/data/chapters/03-operations";
import { chapter as c04 } from "@/data/chapters/04-division";
import { chapter as c05 } from "@/data/chapters/05-fractions";
import { chapter as c06 } from "@/data/chapters/06-proportionnalite";
import { chapter as c07 } from "@/data/chapters/07-tableaux-graphiques";
import { chapter as c08 } from "@/data/chapters/08-droites-cercles";
import { chapter as c09 } from "@/data/chapters/09-angles";
import { chapter as c10 } from "@/data/chapters/10-triangles-quadrilateres";
import { chapter as c11 } from "@/data/chapters/11-symetrie-axiale";
import { chapter as c12 } from "@/data/chapters/12-grandeurs-mesures";
import { chapter as c13 } from "@/data/chapters/13-perimetres-aires";
import { chapter as c14 } from "@/data/chapters/14-volumes-solides";
import { chapter as c15 } from "@/data/chapters/15-probabilites";

const RAW: Chapter[] = [
  c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15,
];

/** Tous les chapitres, avec matière/niveau normalisés (défaut maths 6e). */
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
