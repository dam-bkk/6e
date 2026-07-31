/**
 * Journal des versions (semantic versioning).
 * RÈGLE DE RELEASE : chaque push qui modifie l'app ajoute une entrée ici —
 * major = rupture (données/URL), minor = nouvelle fonctionnalité ou contenu,
 * patch = correction. Trié du plus récent au plus ancien.
 */

export interface ChangelogEntry {
  version: string;
  /** YYYY-MM-DD */
  date: string;
  kind: "major" | "minor" | "patch";
  changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "1.5.0",
    date: "2026-07-31",
    kind: "minor",
    changes: [
      "Réglages : journal d'activité détaillé (horodatage, élève, action, catégorie, IP)",
      "Journal des versions consultable dans l'app",
      "Tests unitaires bloquants : le build échoue si la logique ou le contenu est invalide",
    ],
  },
  {
    version: "1.4.0",
    date: "2026-07-31",
    kind: "minor",
    changes: [
      "Nouvelles options 5e : allemand et italien LV2 (192 exercices), ASSR 1 (48 exercices)",
      "Leçons : panneau visuel à droite de chaque étape (desktop)",
      "Bandeau de chapitre compact, sélecteur de classe sur l'accueil",
      "20 nouvelles figures et 20 vidéos vérifiées",
    ],
  },
  {
    version: "1.3.0",
    date: "2026-07-30",
    kind: "minor",
    changes: [
      "Profil élève : prénom, classe (6e → Terminale), choix des options",
      "Révision espacée : les exercices ratés reviennent à J+1, J+3, J+7",
      "Mode contrôle : 10 questions chronométrées, note sur 20, corrections à la fin",
      "Avatar personnalisable (6 accessoires débloqués à l'XP), sons et vibrations",
      "Chaque chapitre illustré (129/129)",
    ],
  },
  {
    version: "1.2.0",
    date: "2026-07-30",
    kind: "minor",
    changes: [
      "Leçons en étapes courtes (stepper) — fin des murs de texte",
      "Vidéos YouTube vérifiées sur tous les chapitres",
      "Fiches mémo imprimables en PDF",
      "Calendrier d'activité mensuel pour les parents",
      "Logo orange 3D, design Todo Math, largeur 1250 px",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-07-30",
    kind: "minor",
    changes: [
      "Niveau 5e complet (maths, français, histoire-géo, anglais, sciences)",
      "Options espagnol LV2 et latin, 6 défis intermatières",
      "Relecture systématique : chaque exercice vérifié par un agent correcteur",
    ],
  },
  {
    version: "1.0.0",
    date: "2026-07-30",
    kind: "major",
    changes: [
      "Lancement sur 6e.damien.asia : 6e complète (maths, français, histoire-géo, anglais, sciences)",
      "Défi du jour, XP, séries, badges, suivi de progression",
    ],
  },
];

export const APP_VERSION = CHANGELOG[0].version;
