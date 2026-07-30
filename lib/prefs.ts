"use client";

import { useCallback, useEffect, useState } from "react";
import type { Grade } from "@/lib/types";

const NAME_KEY = "zeste.name";
const GRADE_KEY = "zeste.grade";
const AVATAR_KEY = "zeste.avatar";
const OPTIONS_KEY = "zeste.options";

function emit() {
  window.dispatchEvent(new CustomEvent("zeste-prefs"));
}

export function setStudentName(name: string) {
  try {
    window.localStorage.setItem(NAME_KEY, name.trim());
    emit();
  } catch {
    // stockage indisponible
  }
}

export function setGrade(grade: Grade) {
  try {
    window.localStorage.setItem(GRADE_KEY, grade);
    emit();
  } catch {
    // stockage indisponible
  }
}

export function setAvatar(accessory: string) {
  try {
    window.localStorage.setItem(AVATAR_KEY, accessory);
    emit();
  } catch {
    // stockage indisponible
  }
}

/** Matières optionnelles choisies (ids de Subject). */
export function setOptions(ids: string[]) {
  try {
    window.localStorage.setItem(OPTIONS_KEY, JSON.stringify(ids));
    emit();
  } catch {
    // stockage indisponible
  }
}

/** Prénom + niveau + avatar choisis, réactifs (null tant que non hydraté ou non défini). */
export function usePrefs(): {
  name: string | null;
  grade: Grade;
  avatar: string;
  /** null = jamais configuré (on montre alors toutes les options) */
  options: string[] | null;
  hydrated: boolean;
} {
  const [name, setName] = useState<string | null>(null);
  const [grade, setGradeState] = useState<Grade>("6e");
  const [avatar, setAvatarState] = useState<string>("aucun");
  const [options, setOptionsState] = useState<string[] | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    try {
      setName(window.localStorage.getItem(NAME_KEY));
      setGradeState((window.localStorage.getItem(GRADE_KEY) as Grade) || "6e");
      setAvatarState(window.localStorage.getItem(AVATAR_KEY) || "aucun");
      const raw = window.localStorage.getItem(OPTIONS_KEY);
      setOptionsState(raw ? (JSON.parse(raw) as string[]) : null);
    } catch {
      // valeurs par défaut
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener("zeste-prefs", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("zeste-prefs", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  return { name, grade, avatar, options, hydrated };
}
