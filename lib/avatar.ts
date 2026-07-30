import type { Accessory } from "@/components/logo";

/** Accessoires de la mascotte, débloqués par paliers d'XP */
export const ACCESSORIES: { id: Accessory; label: string; minXp: number }[] = [
  { id: "aucun", label: "Nature", minXp: 0 },
  { id: "lunettes", label: "Lunettes de prof", minXp: 50 },
  { id: "noeud", label: "Nœud chic", minXp: 150 },
  { id: "casquette", label: "Casquette cool", minXp: 300 },
  { id: "etoiles", label: "Poussière d'étoiles", minXp: 600 },
  { id: "couronne", label: "Couronne royale", minXp: 1000 },
];
