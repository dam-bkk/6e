export type Subject =
  | "maths"
  | "francais"
  | "histoire-geo"
  | "anglais"
  | "sciences"
  | "espagnol"
  | "latin"
  | "inter";

/**
 * Famille de couleur d'un chapitre (héritée des 4 domaines de maths ;
 * pour les autres matières c'est un simple choix de couleur).
 */
export type Domain = "nombres" | "geometrie" | "grandeurs" | "donnees";

export const DOMAIN_LABELS: Record<Domain, string> = {
  nombres: "Nombres et calculs",
  geometrie: "Espace et géométrie",
  grandeurs: "Grandeurs et mesures",
  donnees: "Données et proportionnalité",
};

/** Un bloc de leçon : paragraphes + exemple + astuce optionnels */
export interface LessonSection {
  title: string;
  /** Paragraphes du cours. Texte brut, symboles unicode autorisés (× ÷ ² ³ ° …). */
  paragraphs: string[];
  /** Encadré exemple (lignes affichées dans un bloc "Exemple") */
  example?: string[];
  /** Astuce / méthode mémorisable, affichée dans un encadré coloré */
  tip?: string;
  /** Id d'une figure du catalogue components/figures.tsx */
  figure?: string;
}

export type ExerciseType = "qcm" | "input" | "truefalse";

export interface Exercise {
  id: string;
  /** 1 = je démarre, 2 = je m'entraîne, 3 = je me dépasse */
  level: 1 | 2 | 3;
  type: ExerciseType;
  question: string;
  /** Pour qcm : les propositions (2 à 4) */
  choices?: string[];
  /**
   * qcm → index de la bonne réponse (number)
   * input → string attendue (comparaison tolérante : espaces, virgule/point)
   * truefalse → boolean
   */
  answer: number | string | boolean;
  /** Réponses alternatives acceptées pour input ("3,5" et "3.5" sont déjà gérés) */
  accept?: string[];
  /** Corrigé détaillé, expliqué pas à pas */
  explanation: string;
  /** Indice affichable avant de répondre */
  hint?: string;
}

export type Grade = "6e" | "5e";

/** Vidéo YouTube associée à un chapitre (id vérifié via oEmbed avant ajout) */
export interface ChapterVideo {
  title: string;
  /** Identifiant YouTube (11 caractères), embarqué via youtube-nocookie.com */
  youtubeId: string;
  /** Chaîne d'origine (ex: "Lumni", "Yvan Monka") */
  channel?: string;
}

export interface Chapter {
  slug: string;
  /** Matière — absent = "maths" (fichiers historiques) */
  subject?: Subject;
  /** Niveau — absent = "6e" (fichiers historiques) */
  grade?: Grade;
  /** Numéro d'ordre dans l'année, PAR matière */
  num: number;
  title: string;
  domain: Domain;
  /** Libellé du domaine affiché sur la carte ; absent = DOMAIN_LABELS[domain] (maths) */
  domainLabel?: string;
  /** Nom d'icône lucide-react (PascalCase, ex: "Calculator") */
  icon: string;
  /** Phrase d'accroche courte pour la carte du chapitre */
  teaser: string;
  /** Objectifs du programme officiel, formulés pour l'élève ("Je sais…") */
  objectives: string[];
  lesson: LessonSection[];
  exercises: Exercise[];
  /** Vidéos ludiques pour réviser (affichées dans l'onglet leçon) */
  videos?: ChapterVideo[];
}
