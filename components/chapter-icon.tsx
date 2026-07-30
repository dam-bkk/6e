"use client";

import { icons, Sparkles, type LucideProps } from "lucide-react";

/** Résout une icône lucide par son nom PascalCase, avec repli sûr. */
export function ChapterIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? Sparkles;
  return <Icon {...props} />;
}
