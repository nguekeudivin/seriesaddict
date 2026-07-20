import React from "react";
import {
  Play,
  Clock,
  Star,
  Zap,
  Sparkles,
  Users,
  Heart,
  Tv,
  Calendar,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Flame,
  Target,
  Eye,
  HeartIcon,
  MessageCircle,
  Pencil,
  Check,
  CircleCheck,
} from "lucide-react";

/**
 * EpisodesToWatchPageVariantC.jsx — Bento Grid Moderne
 */

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};
const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";
const BRAND_GRADIENT_TEXT = "bg-gradient-to-r from-brand-primary to-brand-cyan";

const IMPORTANCE_META = {
  friend: {
    label: "Ami",
    icon: Users,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
  },
  highlyRated: {
    label: "Note",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  trending: {
    label: "Trend",
    icon: Zap,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  new: {
    label: "Nouveau",
    icon: Sparkles,
    color: "text-white",
    bg: "bg-white/10",
  },
  favorite: {
    label: "Favori",
    icon: Heart,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
};

const MOCK_EPISODES = [
  {
    id: "ep-1",
    series: "The Bear",
    episodeCode: "S03E04",
    title: "Violet",
    synopsis: "Carmy pousse son equipe a se depasser avant l'ouverture.",
    duration: 42,
    image:
      "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "friend",
    importanceText: "Votre ami Marc lui a donne 5 etoiles.",
    platform: "FX / Disney+",
    rating: 4.9,
    featured: true,
  },
  {
    id: "ep-2",
    series: "Stranger Things",
    episodeCode: "S05E02",
    title: "The Crawl",
    synopsis: "Le groupe retrouve des indices sur le Upside Down.",
    duration: 58,
    image:
      "https://images.pexels.com/photos/10005543/pexels-photo-10005543.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "highlyRated",
    importanceText: "Note communautaire 4.8/5.",
    platform: "Netflix",
    rating: 4.8,
  },
  {
    id: "ep-3",
    series: "One Piece",
    episodeCode: "S02E01",
    title: "Le debut de l'aventure",
    synopsis: "Luffy et son equipage affrontent de nouveaux ennemis.",
    duration: 50,
    image:
      "https://images.pexels.com/photos/7513468/pexels-photo-7513468.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "trending",
    importanceText: "Tendance cette semaine.",
    platform: "Netflix",
    rating: 4.6,
  },
  {
    id: "ep-4",
    series: "The Boys",
    episodeCode: "S05E03",
    title: "Life Among the Spies",
    synopsis: "Homelander affronte une menace naissante au sein de Vought.",
    duration: 55,
    image:
      "https://images.pexels.com/photos/10401595/pexels-photo-10401595.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "trending",
    importanceText: "Tendance cette semaine.",
    platform: "Prime Video",
    rating: 4.7,
  },
  {
    id: "ep-5",
    series: "House of the Dragon",
    episodeCode: "S02E08",
    title: "Fin de saison",
    synopsis: "La guerre des dragons atteint son paroxysme a Port-Real.",
    duration: 62,
    image:
      "https://images.pexels.com/photos/28302796/pexels-photo-28302796/free-photo-of-a-castle-with-a-dragon-flying-over-it.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "highlyRated",
    importanceText: "Note communautaire 4.9/5.",
    platform: "HBO / Max",
    rating: 4.9,
  },
];

function formatDuration(min) {
  return `${min} min`;
}

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

function BentoTile({ children, className = "", glow = false }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <GradientRing
        radiusClass="rounded-2xl"
        thickness={2}
        glow={glow}
        hoverGlow
      />
      <div className="relative h-full rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
        {children}
      </div>
    </div>
  );
}

function MiniEpisodeTile({ episode }) {
  const meta = IMPORTANCE_META[episode.importance] || IMPORTANCE_META.new;
  const Icon = meta.icon;
  return (
    <BentoTile className="col-span-1 row-span-1 min-h-[180px]">
      <div className="relative h-full">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <img
            src={episode.image}
            alt={episode.series}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase text-white backdrop-blur">
            <Icon className={`h-3 w-3 ${meta.color}`} /> {meta.label}
          </div>
        </div>
        <h4 className="mt-3 truncate text-sm font-bold text-white">
          {episode.series}{" "}
          <span className="text-brand-cyan">{episode.episodeCode}</span>
        </h4>
        <p className="truncate text-xs text-white/60">{episode.title}</p>
        <div className="flex items-center gap-2 justify-between">
          <div className="mt-2 flex items-center gap-2 text-[10px] text-white/50">
            <Clock className="h-3 w-3" /> {formatDuration(episode.duration)}
            <span>•</span>
            <Star className="h-3 w-3 text-yellow-500" /> {episode.rating}
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Marquer vu"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <CircleCheck size={14} />
            </button>
            <button
              aria-label="Noter"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <MessageCircle size={14} />
            </button>
            <button
              aria-label="Noter"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <Pencil size={14} />
            </button>
          </div>
        </div>
      </div>
    </BentoTile>
  );
}

export default function EpisodesToWatchPage() {
  const featured = MOCK_EPISODES[0];
  const others = MOCK_EPISODES.slice(1);
  const meta = IMPORTANCE_META[featured.importance] || IMPORTANCE_META.new;
  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15">
            <span className="text-sm font-semibold">Menu</span>
          </button>
          <div className="select-none text-center">
            <div className="text-xl font-black tracking-widest">
              <span className="text-white">SERIE</span>
              <span
                className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
                ADDICT
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white/75 hover:text-white md:inline-flex">
              Devenez VIP
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35 bg-black/25" />
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Inbox de contenu
          </p>
          <h1 className="mt-1 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
            Episodes a voir
          </h1>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3">
          {/* Featured episode — spans 2 cols / 2 rows */}
          <BentoTile className="md:col-span-2 md:row-span-2 min-h-[420px]" glow>
            <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.series}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              <div className="relative p-4 md:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  <Icon className={`h-3.5 w-3.5 ${meta.color}`} /> {meta.label}
                </div>
                <h2 className="mt-3 text-2xl font-black uppercase tracking-wide text-white md:text-4xl">
                  {featured.series}{" "}
                  <span className="text-brand-cyan">
                    {featured.episodeCode}
                  </span>
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/80">
                  {featured.synopsis}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4 text-brand-cyan" />{" "}
                    {formatDuration(featured.duration)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />{" "}
                    {featured.rating}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Tv className="h-4 w-4" /> {featured.platform}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white/90">
                    <Play className="h-4 w-4 fill-black" /> Je regarde
                    maintenant
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                    <CheckCircle2 className="h-4 w-4" /> Marquer vu
                  </button>
                  <button
                    aria-label="Noter"
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/10 hover:text-white"
                  >
                    <MessageCircle size={14} />
                  </button>
                  <button
                    aria-label="Noter"
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/10 hover:text-white"
                  >
                    <Pencil size={14} />
                  </button>
                </div>
              </div>
            </div>
          </BentoTile>

          {/* Upcoming tile */}
          <BentoTile className="md:col-span-1 md:row-span-1">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-cyan/20">
                  <Calendar className="h-5 w-5 text-brand-cyan" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  Prochaine sortie
                </p>
              </div>
              <div>
                <p className="text-base font-bold text-white">
                  House of the Dragon
                </p>
                <p className="text-sm text-brand-cyan">S02E08</p>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-white/50">
                  <span className="rounded-full bg-brand-primary/20 px-2 py-0.5 text-white/70">
                    Demain
                  </span>
                  <span>HBO / Max</span>
                </div>
              </div>
            </div>
          </BentoTile>

          {/* Mini episodes */}
          {others.map((ep) => (
            <MiniEpisodeTile key={ep.id} episode={ep} />
          ))}
          {others.slice(-3).map((ep) => (
            <MiniEpisodeTile key={ep.id} episode={ep} />
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
            <h2 className="text-lg font-semibold tracking-wide text-white">
              A venir
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                series: "House of the Dragon",
                episodeCode: "S02E08",
                title: "Fin de saison",
                platform: "HBO / Max",
                airDate: "Demain",
                poster:
                  "https://images.pexels.com/photos/28302796/pexels-photo-28302796/free-photo-of-a-castle-with-a-dragon-flying-over-it.jpeg?auto=compress&cs=tinysrgb&w=900",
              },
              {
                series: "Silo",
                episodeCode: "S02E05",
                title: "The Engineer",
                platform: "Apple TV+",
                airDate: "Dans 2 jours",
                poster:
                  "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=900",
              },
              {
                series: "Silo",
                episodeCode: "S02E05",
                title: "The Engineer",
                platform: "Apple TV+",
                airDate: "Dans 2 jours",
                poster:
                  "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=900",
              },
              {
                series: "The Boys",
                episodeCode: "S05E03",
                title: "Life Among the Spies",
                platform: "Prime Video",
                airDate: "Dans 3 jours",
                poster:
                  "https://images.pexels.com/photos/10401595/pexels-photo-10401595.jpeg?auto=compress&cs=tinysrgb&w=900",
              },
            ].map((item) => (
              <div
                key={item.series}
                className="group relative overflow-hidden rounded-2xl"
              >
                <GradientRing
                  radiusClass="rounded-2xl"
                  thickness={1}
                  hoverGlow
                />
                <div className="relative rounded-2xl bg-brand-dark/55 p-4 backdrop-blur">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                      src={item.poster}
                      alt={item.series}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <span className="absolute right-2 top-2 shrink-0 rounded-full border border-brand-cyan/20 bg-black/40 px-2 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
                      {item.airDate}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-brand-cyan">
                        {item.episodeCode}
                      </p>
                      <h4 className="mt-0.5 text-base font-bold text-white">
                        {item.series}
                      </h4>
                      <p className="text-sm text-white/70">{item.title}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                    <Calendar className="h-3.5 w-3.5" /> {item.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 h-px w-full bg-brand-cyan/25" />
      </main>
    </div>
  );
}
