"use client";

import Link from "next/link";
import { useState } from "react";
import { Swords, ChevronRight, CheckCircle2, Pencil, Flame } from "lucide-react";
import { chaptersFor } from "@/lib/chapters";
import type { Grade } from "@/lib/types";
import { useProgress, todayKey } from "@/lib/progress";
import { usePrefs, setStudentName, setGrade } from "@/lib/prefs";
import { SUBJECTS } from "@/lib/subjects";
import { ChapterIcon } from "@/components/chapter-icon";
import { ZesteLogo } from "@/components/logo";
import { DAILY_SIZE } from "@/lib/daily";
import { GRADES } from "@/lib/subjects";

function WelcomeCard() {
  const { name, grade, hydrated } = usePrefs();
  const progress = useProgress();
  const [editing, setEditing] = useState(false);
  const [typed, setTyped] = useState("");

  if (!hydrated) return <div className="card-pop h-40 animate-pulse" />;

  const askName = !name || editing;

  return (
    <div className="card-pop flex flex-col gap-4 p-5 sm:flex-row sm:items-center md:p-6">
      <div className="hidden sm:block">
        <ZesteLogo size={64} />
      </div>
      <div className="flex-1">
        {askName ? (
          <>
            <h1 className="font-display text-2xl font-extrabold leading-tight md:text-3xl">
              Bienvenue sur Zeste !
            </h1>
            <p className="mt-1 font-semibold text-muted">Comment tu t&apos;appelles ?</p>
            <form
              className="mt-3 flex max-w-sm gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (typed.trim()) {
                  setStudentName(typed);
                  setEditing(false);
                  setTyped("");
                }
              }}
            >
              <input
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                autoFocus
                placeholder="Ton prénom…"
                className="btn-pop flex-1 bg-card px-4 py-2.5 font-bold outline-none placeholder:text-muted"
              />
              <button type="submit" className="btn-pop whitespace-nowrap bg-ink px-5 py-2.5 font-extrabold text-white">
                C&apos;est moi !
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="font-display text-2xl font-extrabold leading-tight md:text-3xl">
              Salut, {name} !
              <button
                onClick={() => {
                  setEditing(true);
                  setTyped(name);
                }}
                className="ml-2 inline-flex align-middle text-muted hover:text-ink"
                aria-label="Changer de prénom"
              >
                <Pencil size={18} />
              </button>
            </h1>
            <p className="mt-1 font-semibold text-muted">
              Prête pour ta dose de {grade} du jour ? Choisis ta matière !
            </p>
          </>
        )}

        {/* Sélecteur de niveau */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wide text-muted">Mon niveau :</span>
          {GRADES.map((g: Grade) => (
            <button
              key={g}
              onClick={() => setGrade(g)}
              className={`btn-pop px-4 py-1.5 text-sm font-extrabold ${
                grade === g ? "bg-ink text-white" : "bg-card text-muted"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
      <div className="hidden shrink-0 items-center gap-2 rounded-2xl bg-sun-tint px-4 py-3 md:flex">
        <Flame size={22} strokeWidth={2.5} className="text-sun-strong" />
        <div>
          <p className="font-display text-xl font-extrabold leading-none text-sun-strong">
            {progress.streak.current} jour{progress.streak.current > 1 ? "s" : ""}
          </p>
          <p className="text-xs font-bold text-sun-strong/80">de série, continue !</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const progress = useProgress();
  const { grade } = usePrefs();
  const daily = progress.dailies[todayKey()];

  return (
    <div className="rise space-y-4">
      {/* Rangée haute : bienvenue + défi du jour */}
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <WelcomeCard />
        <Link
          href="/defi"
          className={`hero-card group flex items-center justify-between gap-3 bg-gradient-to-br from-[#FFD166] to-[#F5B93E] p-5 ${
            daily ? "" : "daily-glow"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sun-strong text-white">
              <Swords size={24} strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-xl font-extrabold text-sun-strong">Défi du jour</p>
              <p className="text-sm font-bold leading-tight text-sun-strong">
                {daily
                  ? `Fait ! ${daily.score}/${daily.total} — reviens demain.`
                  : `${DAILY_SIZE} questions rapides pour ta série !`}
              </p>
            </div>
          </div>
          {daily ? (
            <CheckCircle2 size={30} className="shrink-0 text-sun-strong" />
          ) : (
            <ChevronRight size={28} className="shrink-0 text-sun-strong transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </div>

      {/* Matières */}
      <section className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SUBJECTS.filter((s) => !s.grades || s.grades.includes(grade)).map((s, i) => {
          const chapters = chaptersFor(s.id, grade);
          const total = chapters.reduce((n, c) => n + c.exercises.length, 0);
          const done = chapters.reduce(
            (n, c) => n + c.exercises.filter((e) => progress.exercises[e.id]?.correct).length,
            0
          );
          const available = chapters.length > 0;
          const inner = (
            <>
              <div className="flex items-start justify-between">
                <span className="card-icon flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white">
                  <ChapterIcon name={s.icon} size={24} strokeWidth={2.25} />
                </span>
                {available ? (
                  <span className="flex items-center gap-1.5">
                    {s.optional && (
                      <span className="rounded-full bg-white/25 px-2.5 py-1.5 text-xs font-extrabold text-white">
                        Option
                      </span>
                    )}
                    <span
                      className="rounded-full px-3 py-1.5 text-xs font-extrabold text-white"
                      style={{ background: s.deep }}
                    >
                      {done}/{total} réussis
                    </span>
                  </span>
                ) : (
                  <span className="rounded-full bg-white/25 px-3 py-1.5 text-xs font-extrabold text-white">
                    Bientôt !
                  </span>
                )}
              </div>
              <p className="mt-2.5 font-display text-xl font-extrabold text-white md:text-2xl">{s.label}</p>
              <p
                className="mt-1 w-fit rounded-lg px-2 py-0.5 text-xs font-bold text-white"
                style={{ background: "rgba(0,0,0,0.22)" }}
              >
                {s.tagline}
              </p>
              {available && (
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/25">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-500"
                    style={{ width: `${total ? Math.max(2, (done / total) * 100) : 0}%` }}
                  />
                </div>
              )}
            </>
          );
          const style = { background: `linear-gradient(135deg, ${s.from} 0%, ${s.to} 100%)` };
          void i;
          const cls = "hero-card block p-5";
          return available ? (
            <Link key={s.id} href={`/matiere/${s.id}`} className={cls} style={style}>
              {inner}
            </Link>
          ) : (
            <div key={s.id} className={`${cls} opacity-80`} style={style}>
              {inner}
            </div>
          );
        })}
      </section>
    </div>
  );
}
