import {
  ChevronLeft,
  Check,
  Clock,
  Star,
  Trophy,
  HeartCrack,
  Sparkles,
  CalendarDays,
  Play,
  TrendingUp,
  Tv,
  Clapperboard,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.cyan}, ${BRAND.primary})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-wine";

const MEMBER = {
  name: "Alexandre Martin",
  avatar: "AM",
};

const WATCH_HISTORY = [
  {
    date: "10 juillet 2026",
    day: "Vendredi",
    items: [
      {
        id: 1,
        title: "Breaking Bad",
        episode: "S03E07",
        time: "22h15",
        rating: 5,
        progress: 100,
        platform: "Netflix",
        image:
          "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    date: "9 juillet 2026",
    day: "Jeudi",
    items: [
      {
        id: 2,
        title: "The Bear",
        episode: "S02E05",
        time: "21h40",
        rating: 4,
        progress: 100,
        platform: "Disney+",
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    date: "8 juillet 2026",
    day: "Mercredi",
    items: [
      {
        id: 3,
        title: "Dark",
        episode: "S01E03",
        time: "20h00",
        rating: 5,
        progress: 100,
        platform: "Netflix",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: 4,
        title: "Severance",
        episode: "S01E08",
        time: "23h00",
        rating: null,
        progress: 68,
        platform: "Apple TV+",
        image:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    date: "7 juillet 2026",
    day: "Mardi",
    items: [
      {
        id: 5,
        title: "The Last Of Us",
        episode: "S01E06",
        time: "21h00",
        rating: 4,
        progress: 100,
        platform: "Prime Video",
        image:
          "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  {
    date: "6 juillet 2026",
    day: "Lundi",
    items: [
      {
        id: 6,
        title: "Stranger Things",
        episode: "S04E09",
        time: "19h30",
        rating: 4,
        progress: 100,
        platform: "Netflix",
        image:
          "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: 7,
        title: "House Of The Dragon",
        episode: "S02E04",
        time: "22h30",
        rating: null,
        progress: 45,
        platform: "HBO Max",
        image:
          "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
];

const PERSONAL_STATS = {
  year: "2026",
  episodesWatched: 156,
  hoursWatched: 89,
  streakDays: 12,
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

function SectionHeader({ title, icon: Icon }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {Icon && (
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
          <Icon className="h-4 w-4 text-brand-cyan" />
        </div>
      )}
      <h2 className="text-lg font-semibold tracking-wide text-white">
        {title}
      </h2>
    </div>
  );
}

function StatPill({ label, value, sublabel, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px]">
      <GradientRing radiusClass="rounded-[20px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[20px] bg-brand-dark/55 p-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
            <Icon className="h-5 w-5 text-brand-cyan" />
          </div>
          <div>
            <p className="text-2xl font-extrabold leading-none text-white">
              {value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/50">
              {label}
            </p>
          </div>
        </div>
        {sublabel && <p className="mt-2 text-xs text-white/60">{sublabel}</p>}
      </div>
    </div>
  );
}

function MemoryRow({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-[20px]">
      <GradientRing radiusClass="rounded-[20px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[20px] bg-brand-dark/55 p-4 backdrop-blur transition-colors duration-300 group-hover:bg-brand-dark/65">
        <div className="flex items-center gap-4">
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              item.bg,
            ].join(" ")}
          >
            <Icon className={["h-5 w-5", item.accent].join(" ")} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              {item.label}
            </p>
            <p className="truncate text-base font-bold text-white">
              {item.value}
            </p>
            <p className="truncate text-xs text-white/60">{item.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WatchHistoryPageB() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[-8%] h-[420px] w-[420px] rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] h-[320px] w-[320px] rounded-full bg-brand-primary/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-6 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-primary text-xl font-bold text-white">
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

        <section className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className={`h-5 w-[3px] ${ACCENT_GRADIENT} rounded-full`} />
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Profil du spectateur
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatPill
              label="Épisodes"
              value={PERSONAL_STATS.episodesWatched}
              sublabel="cette année"
              icon={Check}
            />
            <StatPill
              label="Heures"
              value={PERSONAL_STATS.hoursWatched}
              sublabel="devant l'écran"
              icon={Clock}
            />
            <StatPill
              label="Série"
              value={PERSONAL_STATS.favoriteSeries}
              sublabel="favorite"
              icon={Tv}
            />
            <StatPill
              label="Genre"
              value={PERSONAL_STATS.favoriteGenre}
              sublabel="préféré"
              icon={Clapperboard}
            />
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section>
            <SectionHeader title="Activité récente" icon={CalendarDays} />
            <div className="space-y-6">
              {WATCH_HISTORY.map((day) => (
                <div key={day.date}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-brand-primary/15 px-3 py-1 text-xs font-bold text-brand-primary">
                      {day.day}
                    </span>
                    <span className="text-sm text-white/50">{day.date}</span>
                    <div className="flex-1 border-b border-white/10" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {day.items.map((item) => (
                      <div
                        key={item.id}
                        className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/[0.07]"
                      >
                        <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-lg bg-brand-dark">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="truncate font-bold text-white">
                              {item.title}
                            </p>
                            <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/70">
                              {item.platform}
                            </span>
                          </div>
                          <p className="text-sm text-brand-cyan">
                            {item.episode}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-xs text-white/40">
                              {item.time}
                            </span>
                            {item.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />
                                <span className="text-xs text-white/60">
                                  {item.rating}
                                </span>
                              </div>
                            )}
                            {item.progress < 100 && (
                              <span className="text-xs text-yellow-400">
                                {item.progress} % vu
                              </span>
                            )}
                          </div>
                          {item.progress < 100 && (
                            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-yellow-400"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-8">
            <section>
              <SectionHeader title="Tendance" icon={TrendingUp} />
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-white/70">Rythme actuel</span>
                  <span className="text-2xl font-extrabold text-brand-cyan">
                    {PERSONAL_STATS.streakDays}
                  </span>
                </div>
                <p className="mb-4 text-sm text-white/50">
                  jours consécutifs avec au moins un épisode regardé
                </p>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-primary"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
            </section>

            <section>
              <SectionHeader title="Souvenirs" icon={Sparkles} />
              <div className="space-y-3">
                {MEMORIES.map((memory) => (
                  <MemoryRow key={memory.key} item={memory} />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
