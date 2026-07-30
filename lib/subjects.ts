import type { Grade, Subject } from "@/lib/types";

/**
 * Métadonnées d'affichage des matières — palette "Todo Math" :
 * grandes cartes saturées en dégradé, titres blancs (grands = ≥3:1 vérifié),
 * petits textes blancs UNIQUEMENT sur la variante deep (AA vérifié).
 */
export interface SubjectMeta {
  id: Subject;
  label: string;
  tagline: string;
  /** Icône lucide-react */
  icon: string;
  /** Dégradé de la carte (from → to) */
  from: string;
  to: string;
  /** Variante sombre : fond des chips à petit texte blanc (AA) */
  deep: string;
  /** Fond très clair (pages internes, anneaux) */
  tint: string;
  /** Niveaux où la matière existe (absent = tous) */
  grades?: Grade[];
  /** Matière optionnelle (badge « Option ») */
  optional?: boolean;
}

export const SUBJECTS: SubjectMeta[] = [
  {
    id: "maths",
    label: "Maths",
    tagline: "Nombres, géométrie, problèmes malins",
    icon: "Calculator",
    from: "#5189F8",
    to: "#3D6FE0",
    deep: "#2E5DBE",
    tint: "#EAF1FF",
  },
  {
    id: "francais",
    label: "Français",
    tagline: "Grammaire, conjugaison, vocabulaire",
    icon: "Feather",
    from: "#E85D7A",
    to: "#D14063",
    deep: "#B8344E",
    tint: "#FFE9EE",
  },
  {
    id: "histoire-geo",
    label: "Histoire-Géo",
    tagline: "Des pharaons aux métropoles",
    icon: "Globe2",
    from: "#E0501C",
    to: "#C2410C",
    deep: "#9A3412",
    tint: "#FFEDE4",
  },
  {
    id: "anglais",
    label: "Anglais",
    tagline: "Hello! Grammar, words & questions",
    icon: "Languages",
    from: "#6943C9",
    to: "#54309E",
    deep: "#3A1F7A",
    tint: "#F0EAFF",
  },
  {
    id: "sciences",
    label: "Sciences",
    tagline: "La Terre, le vivant, la matière",
    icon: "FlaskConical",
    from: "#2FA35C",
    to: "#1E8A49",
    deep: "#166B38",
    tint: "#E2F7EA",
  },
  {
    id: "espagnol",
    label: "Espagnol",
    tagline: "¡Hola! LV2 dès la 5e",
    icon: "Sun",
    from: "#C13B7E",
    to: "#A02A66",
    deep: "#7E1F50",
    tint: "#FBE7F1",
    grades: ["5e"],
    optional: true,
  },
  {
    id: "latin",
    label: "Latin",
    tagline: "Culture antique et langue latine",
    icon: "Columns3",
    from: "#8A6A3B",
    to: "#6F5430",
    deep: "#54401F",
    tint: "#F5EDDE",
    grades: ["5e"],
    optional: true,
  },
  {
    id: "inter",
    label: "Défis intermatières",
    tagline: "Des problèmes qui mélangent tout !",
    icon: "Puzzle",
    from: "#3B3B55",
    to: "#2D2D3F",
    deep: "#17172A",
    tint: "#FFF0C2",
  },
];

export function getSubjectMeta(id: Subject): SubjectMeta {
  return SUBJECTS.find((s) => s.id === id) ?? SUBJECTS[0];
}

export const GRADES: Grade[] = ["6e", "5e"];
