"use client";

import { useCallback, useEffect, useState } from "react";
import type { Grade } from "@/lib/types";

const NAME_KEY = "zeste.name";
const GRADE_KEY = "zeste.grade";

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

/** Prénom + niveau choisis, réactifs (null tant que non hydraté ou non défini). */
export function usePrefs(): { name: string | null; grade: Grade; hydrated: boolean } {
  const [name, setName] = useState<string | null>(null);
  const [grade, setGradeState] = useState<Grade>("6e");
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    try {
      setName(window.localStorage.getItem(NAME_KEY));
      setGradeState((window.localStorage.getItem(GRADE_KEY) as Grade) || "6e");
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

  return { name, grade, hydrated };
}
