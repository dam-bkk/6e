"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Dumbbell,
  Lightbulb,
  Target,
  Check,
  PartyPopper,
} from "lucide-react";
import type { Chapter, Domain, Exercise } from "@/lib/types";
import { DOMAIN_LABELS } from "@/lib/types";
import { recordExercise, useProgress } from "@/lib/progress";
import { ChapterIcon } from "@/components/chapter-icon";
import { Figure } from "@/components/figures";
import { Player, ReplayButton, type PlayerItem } from "@/components/player";
import { chaptersFor } from "@/lib/chapters";
import { getSubjectMeta } from "@/lib/subjects";

const DOMAIN_STYLE: Record<Domain, { tint: string; strong: string }> = {
  nombres: { tint: "bg-nombres-tint", strong: "text-nombres-strong" },
  geometrie: { tint: "bg-geometrie-tint", strong: "text-geometrie-strong" },
  grandeurs: { tint: "bg-grandeurs-tint", strong: "text-grandeurs-strong" },
  donnees: { tint: "bg-donnees-tint", strong: "text-donnees-strong" },
};

const LEVEL_LABELS: Record<number, string> = {
  0: "Tout enchaîner",
  1: "Je démarre",
  2: "Je m'entraîne",
  3: "Je me dépasse",
};

const XP_BY_LEVEL: Record<number, number> = { 1: 10, 2: 15, 3: 20 };

function toItems(exercises: Exercise[]): PlayerItem[] {
  return exercises.map((e) => ({
    id: e.id,
    type: e.type,
    question: e.question,
    choices: e.choices,
    answer: e.answer,
    accept: e.accept,
    explanation: e.explanation,
    hint: e.hint,
    xp: XP_BY_LEVEL[e.level],
    tag: `Niveau ${e.level}`,
  }));
}

export function ChapterView({ chapter }: { chapter: Chapter }) {
  const [tab, setTab] = useState<"lecon" | "exos">("lecon");
  const [level, setLevel] = useState<number | null>(null);
  const progress = useProgress();
  const style = DOMAIN_STYLE[chapter.domain];

  const doneCount = chapter.exercises.filter((e) => progress.exercises[e.id]?.correct).length;
  const meta = getSubjectMeta(chapter.subject ?? "maths");
  const siblings = chaptersFor(chapter.subject ?? "maths", chapter.grade ?? "6e");
  const next = siblings.find((c) => c.num === chapter.num + 1);

  const items = useMemo(() => {
    if (level === null) return [];
    const pool = level === 0 ? chapter.exercises : chapter.exercises.filter((e) => e.level === level);
    return toItems(pool);
  }, [level, chapter.exercises]);

  return (
    <div className="rise">
      {/* En-tête */}
      <Link
        href={`/matiere/${chapter.subject ?? "maths"}`}
        className="mb-4 flex w-fit items-center gap-1.5 text-sm font-extrabold text-muted hover:text-ink"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        {meta.label} — tous les chapitres
      </Link>

      <div className="card-pop flex flex-col gap-4 p-6 sm:flex-row sm:items-center md:p-7">
        <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${style.tint} ${style.strong}`}>
          <ChapterIcon name={chapter.icon} size={34} strokeWidth={2.25} />
        </span>
        <div className="flex-1">
          <p className={`text-xs font-extrabold uppercase tracking-wide ${style.strong}`}>
            {meta.label} {chapter.grade ?? "6e"} · Chapitre {chapter.num} ·{" "}
            {chapter.domainLabel ?? DOMAIN_LABELS[chapter.domain]}
          </p>
          <h1 className="font-display text-3xl font-extrabold leading-tight">{chapter.title}</h1>
          <p className="mt-1 font-semibold text-muted">{chapter.teaser}</p>
        </div>
        <div className="shrink-0 rounded-2xl bg-cream px-4 py-3 text-center">
          <p className="font-display text-2xl font-extrabold">
            {doneCount}
            <span className="text-base text-muted">/{chapter.exercises.length}</span>
          </p>
          <p className="text-xs font-extrabold uppercase tracking-wide text-muted">exercices réussis</p>
        </div>
      </div>

      {/* Onglets */}
      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setTab("lecon")}
          className={`btn-pop flex items-center gap-2 px-5 py-2.5 font-extrabold ${
            tab === "lecon" ? "bg-ink text-white" : "bg-card"
          }`}
        >
          <BookOpen size={18} />
          La leçon
        </button>
        <button
          onClick={() => {
            setTab("exos");
            setLevel(null);
          }}
          className={`btn-pop flex items-center gap-2 px-5 py-2.5 font-extrabold ${
            tab === "exos" ? "bg-ink text-white" : "bg-card"
          }`}
        >
          <Dumbbell size={18} />
          Les exercices
        </button>
      </div>

      {tab === "lecon" && (
        <div className="mt-5 space-y-5">
          {/* Objectifs */}
          <div className={`card-pop p-5 md:p-6 ${style.tint}`}>
            <p className={`flex items-center gap-2 font-display text-lg font-extrabold ${style.strong}`}>
              <Target size={20} strokeWidth={2.5} />
              À la fin de ce chapitre…
            </p>
            <ul className="mt-2 space-y-1.5">
              {chapter.objectives.map((o) => (
                <li key={o} className="flex items-start gap-2 font-bold">
                  <Check size={18} strokeWidth={3} className={`mt-0.5 shrink-0 ${style.strong}`} />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {chapter.lesson.map((section, i) => (
            <section key={i} className="card-pop p-5 md:p-7">
              <h2 className="font-display text-2xl font-bold">
                <span className={`mr-2 ${style.strong}`}>{i + 1}.</span>
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="font-semibold leading-relaxed">{p}</p>
                ))}
              </div>
              {section.figure && <Figure id={section.figure} />}
              {section.example && (
                <div className="mt-4 rounded-2xl border-2 border-line bg-cream px-4 py-3">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-muted">Exemple</p>
                  <div className="mt-1 space-y-1">
                    {section.example.map((line, j) => (
                      <p key={j} className="font-semibold leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              )}
              {section.tip && (
                <p className="mt-4 flex items-start gap-2 rounded-2xl bg-sun-tint px-4 py-3 font-bold text-sun-strong">
                  <Lightbulb size={20} className="mt-0.5 shrink-0" />
                  {section.tip}
                </p>
              )}
            </section>
          ))}

          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                setTab("exos");
                setLevel(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="btn-pop flex items-center gap-2 bg-ink px-7 py-3.5 font-display text-lg font-bold text-white"
            >
              <Dumbbell size={20} />
              Je passe aux exercices !
            </button>
          </div>
        </div>
      )}

      {tab === "exos" && level === null && (
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((lv) => {
            const pool = chapter.exercises.filter((e) => e.level === lv);
            const okCount = pool.filter((e) => progress.exercises[e.id]?.correct).length;
            return (
              <button
                key={lv}
                onClick={() => setLevel(lv)}
                className="card-pop p-5 text-left transition-transform hover:-translate-y-0.5"
              >
                <p className="font-display text-4xl font-extrabold text-line" aria-hidden="true">
                  {"★".repeat(lv)}
                </p>
                <p className="mt-2 font-display text-xl font-bold">{LEVEL_LABELS[lv]}</p>
                <p className="mt-0.5 text-sm font-bold text-muted">
                  {pool.length} questions · {okCount} réussie{okCount > 1 ? "s" : ""} · +{XP_BY_LEVEL[lv]} XP chacune
                </p>
              </button>
            );
          })}
          <button
            onClick={() => setLevel(0)}
            className="card-pop bg-donnees-tint p-5 text-left transition-transform hover:-translate-y-0.5 sm:col-span-3"
          >
            <p className="font-display text-xl font-bold text-donnees-strong">{LEVEL_LABELS[0]}</p>
            <p className="mt-0.5 text-sm font-bold text-donnees-strong/80">
              Les {chapter.exercises.length} questions du chapitre, du plus simple au plus costaud.
            </p>
          </button>
        </div>
      )}

      {tab === "exos" && level !== null && (
        <div className="mt-5">
          <button
            onClick={() => setLevel(null)}
            className="mb-4 flex items-center gap-1.5 text-sm font-extrabold text-muted hover:text-ink"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            Choisir un autre niveau
          </button>
          <Player
            key={level}
            items={items}
            onItemResult={(item, correct) => recordExercise(item.id, correct, item.xp)}
            renderEnd={(score, total, replay) => (
              <div className="card-pop rise p-7 text-center">
                <PartyPopper size={44} className="mx-auto text-zest" />
                <p className="mt-3 font-display text-3xl font-extrabold">
                  {score}/{total}
                </p>
                <p className="mt-1 font-bold text-muted">
                  {score === total
                    ? "Sans faute, bravo ! Tu maîtrises."
                    : score >= total / 2
                      ? "Beau travail ! Relis les corrigés des questions ratées et retente."
                      : "Courage ! Relis la leçon puis retente, tu vas y arriver."}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <ReplayButton onClick={replay} label="Rejouer" />
                  {next && (
                    <Link href={`/chapitre/${next.slug}`} className="btn-pop bg-ink px-6 py-3 font-extrabold text-white">
                      Chapitre suivant : {next.title}
                    </Link>
                  )}
                </div>
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
}
