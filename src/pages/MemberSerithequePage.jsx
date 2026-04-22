import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  Check,
  Clock,
  Filter,
  Grid3X3,
  List,
  Search,
  Bookmark,
  MoreHorizontal,
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
  seriesCount: 127,
  episodesWatched: 2847,
  memberSince: "2022",
};

const SERIES_IN_LIBRARY = [
  {
    id: 1,
    title: "Breaking Bad",
    status: "terminee",
    rating: 5,
    progress: "100%",
    episodesWatched: 62,
    totalEpisodes: 62,
    lastWatched: "Il y a 2 semaines",
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "The Crown",
    status: "en-cours",
    rating: 4,
    progress: "60%",
    episodesWatched: 36,
    totalEpisodes: 60,
    lastWatched: "Hier",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Dark",
    status: "terminee",
    rating: 5,
    progress: "100%",
    episodesWatched: 26,
    totalEpisodes: 26,
    lastWatched: "Il y a 1 mois",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Stranger Things",
    status: "en-cours",
    rating: null,
    progress: "45%",
    episodesWatched: 15,
    totalEpisodes: 34,
    lastWatched: "Aujourd'hui",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Succession",
    status: "a-voir",
    rating: null,
    progress: "0%",
    episodesWatched: 0,
    totalEpisodes: 39,
    lastWatched: "-",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "Fleabag",
    status: "terminee",
    rating: 4,
    progress: "100%",
    episodesWatched: 12,
    totalEpisodes: 12,
    lastWatched: "Il y a 3 mois",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
  },
];

const FILTERS = [
  { key: "all", label: "Tout", count: 127 },
  { key: "en-cours", label: "En cours", count: 34 },
  { key: "terminee", label: "Terminees", count: 67 },
  { key: "a-voir", label: "A voir", count: 26 },
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

function SeriesCard({ series }) {
  const statusColors = {
    terminee: "bg-brand-cyan/20 text-brand-cyan",
    "en-cours": "bg-brand-primary/20 text-brand-primary",
    "a-voir": "bg-white/10 text-white/70",
  };

  const statusLabels = {
    terminee: "Terminee",
    "en-cours": "En cours",
    "a-voir": "A voir",
  };

  return (
    <div className="group relative overflow-hidden rounded-[20px]">
      <GradientRing radiusClass="rounded-[20px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[20px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[2/3] overflow-hidden rounded-t-[20px]">
          <img
            src={series.image}
            alt={series.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-3 top-3">
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusColors[series.status]}`}
            >
              {statusLabels[series.status]}
            </span>
          </div>

          {series.status === "en-cours" && (
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="mb-1 flex items-center justify-between text-xs text-white/70">
                <span>{series.progress}</span>
                <span>
                  {series.episodesWatched}/{series.totalEpisodes}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-brand-cyan"
                  style={{ width: series.progress }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-white">{series.title}</h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {series.rating ? (
                <>
                  <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
                  <span className="text-sm text-white">{series.rating}</span>
                </>
              ) : (
                <span className="text-xs text-white/40">Non note</span>
              )}
            </div>
            <span className="text-xs text-white/40">{series.lastWatched}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemberSerithequePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

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
                Seritheque de
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {MEMBER.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              {MEMBER.seriesCount}
            </p>
            <p className="text-xs text-white/50">Series</p>
          </div>
          <div className="border-x border-white/10 text-center">
            <p className="text-2xl font-bold text-white">
              {MEMBER.episodesWatched}
            </p>
            <p className="text-xs text-white/50">Episodes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              {MEMBER.memberSince}
            </p>
            <p className="text-xs text-white/50">Membre depuis</p>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={[
                  "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all",
                  activeFilter === filter.key
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {filter.label}
                <span
                  className={[
                    "rounded-full px-1.5 py-0.5 text-[10px]",
                    activeFilter === filter.key ? "bg-black/10" : "bg-white/10",
                  ].join(" ")}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5">
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                viewMode === "grid"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                viewMode === "list"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {SERIES_IN_LIBRARY.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir plus de series
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
