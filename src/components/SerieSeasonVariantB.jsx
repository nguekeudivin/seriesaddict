import { useState } from "react";
import { Play, Flame, Clock } from "lucide-react";

// Reuse ton GradientRing existant
import GradientRing from "./GradientRing";
import SectionNavButton from "./SectionNavButton";

function UpcomingCard({ item }) {
  return (
    <div className="min-w-[220px] rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="font-semibold text-white">{item.title}</p>
      <p className="text-sm text-white/60 mt-1">{item.meta}</p>

      <p className="mt-3 text-xs text-brand-cyan">{item.date}</p>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
      {title}
    </h3>
  );
}

function EpisodeCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-brand-cyan font-semibold">
          {item.network}
        </span>

        <button className="opacity-70 group-hover:opacity-100 transition">
          <Play className="h-5 w-5 text-white" />
        </button>
      </div>

      <p className="font-semibold text-white group-hover:text-brand-cyan">
        {item.title}
      </p>

      <p className="text-sm text-white/60 mt-1">{item.meta}</p>
    </div>
  );
}

function CastAvatar({ member }) {
  return (
    <div className="w-[120px] shrink-0 text-center group">
      <div className="h-20 w-20 mx-auto rounded-full overflow-hidden">
        <img src={member.avatar} className="h-full w-full object-cover" />
      </div>

      <p className="mt-2 text-sm text-white group-hover:text-brand-cyan">
        {member.name}
      </p>

      <p className="text-xs text-white/50">{member.role}</p>
    </div>
  );
}

export default function SeriesSeasonsVariantB({
  SEASON_FEATURE,
  SEASONS,
  LAST_EPISODES,
  UPCOMING_EPISODES,
  CAST,
}) {
  const [activeSeason, setActiveSeason] = useState(SEASONS[0]);

  return (
    <section className="grid gap-10 xl:grid-cols-[260px_1fr]">
      {/* ========================================================= */}
      {/* 🧭 SEASONS SIDEBAR */}
      {/* ========================================================= */}
      <div className="relative">
        <div className="sticky top-24 space-y-4">
          <h3 className="text-sm font-bold uppercase text-white/60 tracking-widest">
            Saisons
          </h3>

          <div className="space-y-3">
            {SEASONS.map((season) => {
              const active = season.id === activeSeason.id;

              return (
                <button
                  key={season.id}
                  onClick={() => setActiveSeason(season)}
                  className={`relative w-full text-left rounded-xl px-4 py-3 transition
        ${
          active
            ? "bg-white text-black"
            : "bg-white/[0.03] text-white hover:bg-white/[0.06]"
        }`}
                >
                  <div className="flex justify-between">
                    <span>Saison {season.number}</span>
                    <span className="text-xs opacity-60">
                      {season.episodes} ep
                    </span>
                  </div>

                  {active && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-primary to-brand-cyan" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 📺 CONTENT */}
      {/* ========================================================= */}
      <div className="space-y-12">
        {/* ===================================================== */}
        {/* 🎬 CURRENT SEASON HEADER */}
        {/* ===================================================== */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              {SEASON_FEATURE.currentSeasonLabel}
            </h2>
            <p className="text-white/60 mt-1">
              {SEASON_FEATURE.totalEpisodes} épisodes
            </p>
          </div>

          <div className="flex gap-2">
            <SectionNavButton direction="left" />
            <SectionNavButton direction="right" />
          </div>
        </div>

        {/* ===================================================== */}
        {/* ⚡ EPISODES GRID */}
        {/* ===================================================== */}
        <div>
          <SectionTitle title="Derniers épisodes" />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {LAST_EPISODES.map((item, i) => (
              <EpisodeCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* ⏳ UPCOMING STRIP */}
        {/* ===================================================== */}
        <div>
          <SectionTitle title="À venir" />

          <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
            {UPCOMING_EPISODES.map((item, i) => (
              <UpcomingCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* 🎭 CAST STRIP */}
        {/* ===================================================== */}
        <div>
          <SectionTitle title="Casting" />

          <div className="mt-4 flex gap-6 overflow-x-auto pb-2">
            {CAST.map((member, i) => (
              <CastAvatar key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
