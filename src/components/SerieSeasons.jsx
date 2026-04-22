import React from "react";
import { Play, Flame, Clock } from "lucide-react";

// Reuse ton GradientRing existant
import GradientRing from "./GradientRing";
import SectionNavButton from "./SectionNavButton";

function Header({ title }) {
  return (
    <div>
      <h3 className="text-2xl font-extrabold uppercase text-white">{title}</h3>
      <div className="mt-2 h-px w-full bg-white/20" />
    </div>
  );
}

function EpisodeItem({ item, highlight }) {
  return (
    <div className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(132,29,79,.15)]">
      <div className="flex items-center gap-4 min-w-0">
        {/* network */}
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan text-white font-semibold">
          {item.network}
        </div>

        <div className="min-w-0">
          <p className="truncate font-semibold uppercase text-white group-hover:text-brand-cyan">
            {item.title}
          </p>
          <p className="text-sm text-white/60">{item.meta}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {highlight && (
          <span className="text-xs text-brand-primary font-semibold">NEW</span>
        )}

        <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-black transition hover:scale-105">
          <Play className="h-5 w-5 fill-current" />
        </button>
      </div>
    </div>
  );
}

function UpcomingItem({ item }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <div className="flex items-center gap-4 min-w-0">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/10">
          <Clock className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="truncate font-semibold uppercase text-white">
            {item.title}
          </p>
          <p className="text-sm text-white/60">{item.meta}</p>
        </div>
      </div>

      <span className="text-sm text-white/70 font-medium">{item.date}</span>
    </div>
  );
}

function CastCard({ member }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src={member.avatar}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="font-bold text-white group-hover:text-brand-cyan">
            {member.name}
          </p>
          <p className="text-sm text-white/60">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function SeriesSeasonsRefactor({
  SEASON_FEATURE,
  LAST_EPISODES,
  UPCOMING_EPISODES,
  CAST,
}) {
  return (
    <section id="series-seasons" className="space-y-16">
      {/* ========================================================= */}
      {/* 🎬 HERO SAISON */}
      {/* ========================================================= */}
      <div className="grid gap-10 xl:grid-cols-[1fr_1.1fr]">
        {/* HERO CARD */}
        <div className="group relative">
          <GradientRing radiusClass="rounded-[28px]" />
          <GradientRing radiusClass="rounded-[28px]" glow hoverGlow />

          <div className="relative overflow-hidden rounded-[28px] bg-brand-dark/60 backdrop-blur">
            <img
              src={SEASON_FEATURE.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative flex min-h-[420px] flex-col justify-end px-6 pb-6">
              {/* stats */}
              <div className="flex flex-wrap gap-3 text-sm text-white/90">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {SEASON_FEATURE.totalSeasons} saisons
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {SEASON_FEATURE.totalEpisodes} épisodes
                </span>
              </div>

              {/* title */}
              <h2 className="mt-2 text-3xl font-extrabold uppercase text-white">
                {SEASON_FEATURE.currentSeasonLabel}
              </h2>

              {/* badge */}
              <div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
                  <Flame className="h-4 w-4 text-brand-primary" />
                  Saison en cours
                </div>
              </div>

              {/* nav */}
              <div className="mt-6 flex items-center gap-3">
                <SectionNavButton direction="left" />
                <SectionNavButton direction="right" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ⚡ DERNIERS EPISODES */}
        {/* ========================================================= */}
        <div>
          <Header title="Derniers épisodes diffusés" />

          <div className="mt-4 space-y-3">
            {LAST_EPISODES.map((item, i) => (
              <EpisodeItem key={i} item={item} highlight />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ⏳ UPCOMING */}
      {/* ========================================================= */}
      <div>
        <Header title="Prochains épisodes" />

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {UPCOMING_EPISODES.map((item, i) => (
            <UpcomingItem key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 🎭 CAST */}
      {/* ========================================================= */}
      <div>
        <Header title="Casting principal" />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CAST.map((member, i) => (
            <CastCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
