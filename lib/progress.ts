"use client";

import { useCallback, useEffect, useState } from "react";

export interface ExerciseRecord {
  correct: boolean;
  attempts: number;
  /** ISO date du dernier essai */
  date: string;
}

export interface DailyRecord {
  score: number;
  total: number;
}

export interface Progress {
  xp: number;
  exercises: Record<string, ExerciseRecord>;
  /** clé = YYYY-MM-DD */
  dailies: Record<string, DailyRecord>;
  streak: { current: number; best: number; lastDate: string | null };
  badges: string[];
}

const KEY = "zeste.progress.v1";

const EMPTY: Progress = {
  xp: 0,
  exercises: {},
  dailies: {},
  streak: { current: 0, best: 0, lastDate: null },
  badges: [],
};

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function load(): Progress {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const p = JSON.parse(raw) as Progress;
    return { ...EMPTY, ...p, streak: { ...EMPTY.streak, ...p.streak } };
  } catch {
    return EMPTY;
  }
}

function save(p: Progress) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(p));
    window.dispatchEvent(new CustomEvent("zeste-progress"));
  } catch {
    // stockage indisponible : on continue sans persister
  }
}

/** Toute activité du jour entretient la série (streak). */
function touchStreak(p: Progress): Progress {
  const today = todayKey();
  if (p.streak.lastDate === today) return p;
  const yesterday = todayKey(new Date(Date.now() - 86_400_000));
  const current = p.streak.lastDate === yesterday ? p.streak.current + 1 : 1;
  return {
    ...p,
    streak: { current, best: Math.max(p.streak.best, current), lastDate: today },
  };
}

export function recordExercise(exId: string, correct: boolean, xpGain: number): Progress {
  let p = load();
  const prev = p.exercises[exId];
  const alreadyCorrect = prev?.correct === true;
  p = {
    ...p,
    exercises: {
      ...p.exercises,
      [exId]: {
        correct: alreadyCorrect || correct,
        attempts: (prev?.attempts ?? 0) + 1,
        date: new Date().toISOString(),
      },
    },
    // pas de re-farm : un exercice déjà réussi ne redonne pas d'XP
    xp: p.xp + (correct && !alreadyCorrect ? xpGain : 0),
  };
  p = touchStreak(p);
  save(p);
  return p;
}

export function recordDaily(score: number, total: number): Progress {
  let p = load();
  const today = todayKey();
  const prev = p.dailies[today];
  const best = prev ? Math.max(prev.score, score) : score;
  const firstTime = !prev;
  p = {
    ...p,
    dailies: { ...p.dailies, [today]: { score: best, total } },
    xp: p.xp + (firstTime ? score * 5 : 0),
  };
  p = touchStreak(p);
  save(p);
  return p;
}

export function grantBadges(p: Progress, ids: string[]): Progress {
  const missing = ids.filter((id) => !p.badges.includes(id));
  if (missing.length === 0) return p;
  const next = { ...p, badges: [...p.badges, ...missing] };
  save(next);
  return next;
}

/** Hook réactif : se met à jour à chaque mutation (même depuis un autre composant). */
export function useProgress(): Progress {
  const [p, setP] = useState<Progress>(EMPTY);
  const refresh = useCallback(() => setP(load()), []);
  useEffect(() => {
    refresh();
    window.addEventListener("zeste-progress", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("zeste-progress", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);
  return p;
}
