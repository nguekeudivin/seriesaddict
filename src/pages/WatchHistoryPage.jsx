import {
  ChevronLeft,
  Check,
  Clock,
  Star,
  Trophy,
  HeartCrack,
  Sparkles,
  Calendar,
  Play,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const MEMBER = {
  name: "Alexandre Martin",
  avatar: "AM",
};

const WATCH_HISTORY = [
  {
    date: "10 juillet 2026",
    items: [{ id: 1, title: "Breaking Bad", episode: "S03E07" }],
  },
  {
    date: "9 juillet 2026",
    items: [{ id: 2, title: "The Bear", episode: "S02E05" }],
  },
  {
    date: "8 juillet 2026",
    items: [
      { id: 3, title: "Dark", episode: "S01E03" },
      { id: 4, title: "Severance", episode: "S01E08" },
    ],
  },
  {
    date: "7 juillet 2026",
    items: [{ id: 5, title: "The Last Of Us", episode: "S01E06" }],
  },
  {
    date: "6 juillet 2026",
    items: [
      { id: 6, title: "Stranger Things", episode: "S04E09" },
      { id: 7, title: "House Of The Dragon", episode: "S02E04" },
    ],
  },
];

const PERSONAL_STATS = {
  year: "2026",
  episodesWatched: 156,
  hoursWatched: 89,
  favoriteGenre: "Science-fiction",
  favoriteSeries: "Dark",
};

const MEMORIES = [
  {
    key: "bestEpisode",
    label: "Meilleur épisode vu",
    value: "Ozymandias",
    detail: "Breaking Bad — S05E14",
    icon: Trophy,
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    key: "highestRated",
    label: "Épisode le plus noté",
    value: "The Bicameral Mind",
    detail: "Westworld — S01E10",
    icon: Star,
    accent: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    key: "firstFinished",
    label: "Première série terminée",
    value: "Friends",
    detail: "Saison 10 — 236 épisodes",
    icon: Sparkles,
    accent: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
  },
  {
    key: "dropped",
    label: "Série abandonnée",
    value: "The Walking Dead",
    detail: "Arrêtée après la saison 8",
    icon: HeartCrack,
    accent: "text-red-400",
    bg: "bg-red-400/10",
  },
];

function GradientRing({
  radiusClass = "rounded-2xl",
  thickness = 2,
  glow = false,
  hoverGlow = false,
  className = "",
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        radiusClass,
        glow ? "blur-md" : "",
        hoverGlow
          ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70"
          : "",
        className,
      ].join(" ")}
      style={{
        background: GRADIENT,
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: `${thickness}px`,
      }}
    />
  );
}

function SectionHeader({ title }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className={`h-5 w-[3px] ${ACCENT_GRADIENT} rounded-full`} />
      <h2 className="text-lg font-semibold tracking-wide text-white">
        {title}
      </h2>
    </div>
  );
}

function StatCard({ label, value, sublabel, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px]">
      <GradientRing radiusClass="rounded-[20px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[20px] bg-brand-dark/55 p-6 backdrop-blur">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Icon className="h-5 w-5 text-brand-cyan" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
          {label}
        </p>
        <p className="mt-1 text-2xl font-extrabold text-white">{value}</p>
        {sublabel && <p className="mt-1 text-sm text-white/60">{sublabel}</p>}
      </div>
    </div>
  );
}

function MemoryCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-[20px]">
      <GradientRing radiusClass="rounded-[20px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[20px] bg-brand-dark/55 p-5 backdrop-blur transition-colors duration-300 group-hover:bg-brand-dark/65">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
            <p className="mt-1 text-sm text-white/60">{item.detail}</p>
          </div>
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              item.bg,
            ].join(" ")}
          >
            <Icon className={["h-5 w-5", item.accent].join(" ")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WatchHistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-xl font-bold text-white">
              {MEMBER.avatar}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Historique de
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {MEMBER.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section>
            <SectionHeader title="Timeline" />
            <div className="relative">
              <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-brand-primary via-brand-cyan to-transparent" />
              <ul className="space-y-8">
                {WATCH_HISTORY.map((day) => (
                  <li key={day.date} className="relative pl-14">
                    <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/50 backdrop-blur">
                      <Calendar className="h-4 w-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-semibold text-white/80">
                        {day.date}
                      </p>
                      <div className="space-y-3">
                        {day.items.map((item) => (
                          <div
                            key={item.id}
                            className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/[0.07]"
                          >
                            <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-primary/15 text-brand-primary">
                              <Check className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-white">
                                {item.title}
                              </p>
                              <p className="text-sm text-white/60">
                                {item.episode}
                              </p>
                            </div>
                            <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition hover:bg-white/10 hover:text-white">
                              <Play className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="space-y-8">
            <section>
              <SectionHeader title="Statistiques personnelles" />
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="mb-6 text-sm font-semibold text-white/70">
                  Cette année :
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard
                    label="Épisodes"
                    value={PERSONAL_STATS.episodesWatched}
                    sublabel="regardés"
                    icon={Check}
                  />
                  <StatCard
                    label="Heures"
                    value={PERSONAL_STATS.hoursWatched}
                    sublabel="passées"
                    icon={Clock}
                  />
                </div>
                <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">Genre préféré</span>
                    <span className="font-semibold text-brand-cyan">
                      {PERSONAL_STATS.favoriteGenre}
                    </span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      Série favorite
                    </span>
                    <span className="font-semibold text-white">
                      {PERSONAL_STATS.favoriteSeries}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <SectionHeader title="Souvenirs" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {MEMORIES.map((memory) => (
                  <MemoryCard key={memory.key} item={memory} />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
