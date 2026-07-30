"use client";

import Link from "next/link";
import { Flame, Star, CheckCircle2, Swords, Lock } from "lucide-react";
import { CHAPTERS, chaptersFor } from "@/lib/chapters";
import { BADGES } from "@/lib/badges";
import { useProgress } from "@/lib/progress";
import { usePrefs } from "@/lib/prefs";
import { SUBJECTS } from "@/lib/subjects";
import { ChapterIcon } from "@/components/chapter-icon";
import { ActivityCalendar } from "@/components/activity-calendar";
import type { Domain } from "@/lib/types";

const BAR_COLOR: Record<Domain, string> = {
  nombres: "bg-nombres-strong",
  geometrie: "bg-geometrie-strong",
  grandeurs: "bg-grandeurs-strong",
  donnees: "bg-donnees-strong",
};

export default function ProgresPage() {
  const progress = useProgress();
  const { grade } = usePrefs();
  const totalEx = CHAPTERS.reduce((n, c) => n + c.exercises.length, 0);
  const doneEx = CHAPTERS.reduce(
    (n, c) => n + c.exercises.filter((e) => progress.exercises[e.id]?.correct).length,
    0
  );
  const dailiesCount = Object.keys(progress.dailies).length;
  const earnedBadges = BADGES.filter((b) => b.earned(progress));

  const stats = [
    { icon: Star, label: "XP au total", value: String(progress.xp), tint: "bg-donnees-tint", strong: "text-donnees-strong" },
    { icon: Flame, label: "Série en cours", value: `${progress.streak.current} j`, tint: "bg-sun-tint", strong: "text-sun-strong" },
    { icon: CheckCircle2, label: "Exercices réussis", value: `${doneEx}/${totalEx}`, tint: "bg-grandeurs-tint", strong: "text-grandeurs-strong" },
    { icon: Swords, label: "Défis relevés", value: String(dailiesCount), tint: "bg-nombres-tint", strong: "text-nombres-strong" },
  ];

  return (
    <div className="rise">
      <h1 className="font-display text-3xl font-extrabold">Mes progrès</h1>
      <p className="mt-0.5 font-semibold text-muted">
        Record de série : {progress.streak.best} jour{progress.streak.best > 1 ? "s" : ""} d&apos;affilée.
      </p>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ icon: Icon, label, value, tint, strong }) => (
          <div key={label} className="card-pop flex items-center gap-3 p-4">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${tint} ${strong}`}>
              <Icon size={22} strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold leading-none">{value}</p>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-wide text-muted">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Calendrier d'activité (suivi parental) */}
      <div className="mt-6">
        <ActivityCalendar progress={progress} />
      </div>

      {/* Par matière puis par chapitre */}
      {SUBJECTS.map((s) => {
        const chapters = chaptersFor(s.id, grade);
        if (chapters.length === 0) return null;
        return (
          <section key={s.id}>
            <h2 className="mt-8 flex items-center gap-2.5 font-display text-2xl font-extrabold">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
              >
                <ChapterIcon name={s.icon} size={20} strokeWidth={2.5} />
              </span>
              {s.label} <span className="text-base font-bold text-muted">({grade})</span>
            </h2>
            <div className="mt-4 space-y-3">
              {chapters.map((ch) => {
                const total = ch.exercises.length;
                const ok = ch.exercises.filter((e) => progress.exercises[e.id]?.correct).length;
                return (
                  <Link key={ch.slug} href={`/chapitre/${ch.slug}`} className="card-pop flex items-center gap-4 p-4 transition-transform hover:-translate-y-0.5">
                    <span className="text-muted">
                      <ChapterIcon name={ch.icon} size={22} strokeWidth={2.25} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate font-bold">
                          <span className="text-muted">{ch.num}.</span> {ch.title}
                        </p>
                        <p className="shrink-0 text-sm font-extrabold text-muted">{ok}/{total}</p>
                      </div>
                      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-line">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${BAR_COLOR[ch.domain]}`}
                          style={{ width: `${total ? (ok / total) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Badges */}
      <h2 className="mt-8 font-display text-2xl font-extrabold">
        Mes badges
        <span className="ml-2 align-middle rounded-full bg-sun-tint px-2.5 py-1 text-sm font-extrabold text-sun-strong">
          {earnedBadges.length}/{BADGES.length}
        </span>
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {BADGES.map((b) => {
          const earned = b.earned(progress);
          return (
            <div
              key={b.id}
              className={`card-pop p-4 text-center ${earned ? "" : "opacity-55 grayscale"}`}
            >
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
                  earned ? "bg-sun-tint text-sun-strong" : "bg-line text-muted"
                }`}
              >
                {earned ? <ChapterIcon name={b.icon} size={24} strokeWidth={2.25} /> : <Lock size={22} />}
              </span>
              <p className="mt-2 font-display font-bold leading-tight">{b.label}</p>
              <p className="mt-0.5 text-xs font-bold text-muted">{b.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
