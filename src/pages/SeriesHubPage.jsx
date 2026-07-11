import { useState } from "react";
import {
  Play,
  Plus,
  Check,
  Eye,
  Heart,
  Star,
  MessageCircle,
  Trophy,
  Clock,
  Calendar,
  Tv,
  Users,
  TrendingUp,
  Share2,
  ChevronRight,
  Flame,
  Quote,
  Sparkles,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;

const SERIES = {
  title: "STRANGER THINGS",
  originalTitle: "Stranger Things",
  years: "2016 - 2025",
  platform: "Netflix",
  age: "16+",
  runtime: "50 min",
  status: "En cours",
  seasons: 4,
  episodes: 34,
  avgEpisodeDuration: "52 min",
  genres: ["Science-fiction", "Drame", "Horreur", "Mystère"],
  synopsis:
    "À Hawkins, dans l'Indiana, un jeune garçon de 12 ans disparaît mystérieusement. Ses amis, sa famille et le chef de police vont vivre une enquête haletante qui les mène vers des expériences gouvernementales secrètes, des forces surnaturelles terrifiantes et une petite fille aux pouvoirs extraordinaires.",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  backdrop:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920&q=80",
  trailerUrl: "https://www.youtube.com/embed/b9EkMc79Z3U",
  communityScore: 9.2,
  fanCount: "145K",
  platforms: ["Netflix", "Prime Video", "Apple TV+"],
};

const PERSONAL_STATUS = [
  { key: "watching", label: "Je regarde", icon: Play },
  { key: "completed", label: "J'ai terminé", icon: Check },
  { key: "want", label: "Je veux voir", icon: Plus },
  { key: "dropped", label: "Abandonnée", icon: Eye },
];

const PROGRESS = {
  season: 3,
  episode: 5,
  totalEpisodes: 10,
  percentage: 80,
  nextEpisode: {
    code: "S03E06",
    title: "Le Bain de Eleven",
  },
};

const COMMUNITY = {
  discussions: [
    {
      id: 1,
      title: "Théorie : qui est le véritable méchant ?",
      author: "HawkinsFan",
      replies: 342,
      likes: 128,
    },
    {
      id: 2,
      title: "Les références aux années 80 les plus cool",
      author: "RetroKid",
      replies: 215,
      likes: 89,
    },
    {
      id: 3,
      title: "Steve Harrington : le babysitter héroïque",
      author: "MomSteve",
      replies: 567,
      likes: 234,
    },
  ],
  theories: [
    { id: 1, title: "Le Monde à l'envers est une dimension parallèle" },
    { id: 2, title: "Eleven est la sœur d'un autre personnage" },
    { id: 3, title: "Hopper n'est pas mort dans la saison 3" },
  ],
  quotes: [
    { id: 1, text: "Les amis ne mentent pas.", character: "Eleven" },
    { id: 2, text: "Mouth-breather.", character: "Eleven" },
  ],
  moments: [
    { id: 1, title: "La fête foraine de la saison 3" },
    { id: 2, title: "Le premier face-à-face avec le Démogorgon" },
    { id: 3, title: "Le retour de Hopper" },
  ],
  characters: [
    { id: 1, name: "Eleven", rank: 1 },
    { id: 2, name: "Steve Harrington", rank: 2 },
    { id: 3, name: "Dustin Henderson", rank: 3 },
    { id: 4, name: "Jim Hopper", rank: 4 },
    { id: 5, name: "Mike Wheeler", rank: 5 },
  ],
  episodes: [
    { id: 1, code: "S03E08", title: "La Bataille de Starcourt", score: 9.8 },
    { id: 2, code: "S01E08", title: "Le Monde à l'envers", score: 9.6 },
    { id: 3, code: "S04E09", title: "Le Pigeonnier", score: 9.5 },
    { id: 4, code: "S02E09", title: "La Porte", score: 9.3 },
  ],
};

const TIMELINE = [
  { year: 2016, season: 1, label: "Saison 1", episodes: 8 },
  { year: 2017, season: 2, label: "Saison 2", episodes: 9 },
  { year: 2019, season: 3, label: "Saison 3", episodes: 8 },
  { year: 2022, season: 4, label: "Saison 4", episodes: 9 },
  { year: 2025, season: 5, label: "Saison 5", episodes: 8, upcoming: true },
];

const RECOMMENDATIONS = {
  similar: [
    { title: "Dark", reason: "Mêmes thèmes de mystère et de voyage temporel" },
    { title: "The OA", reason: "Univers étrange et personnages attachants" },
    { title: "Yellowjackets", reason: "Suspense et survie entre adolescents" },
    { title: "From", reason: "Horreur rurale et secrets de petite ville" },
  ],
  friends: [
    { title: "Severance", friend: "Marc", note: "5 étoiles" },
    { title: "The Last of Us", friend: "Sarah", note: "4.5 étoiles" },
    { title: "Silo", friend: "Lucas", note: "4 étoiles" },
  ],
  profiles: [
    { title: "The Bear", match: "94%" },
    { title: "Silo", match: "91%" },
    { title: "For All Mankind", match: "88%" },
  ],
};

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

function GlassPanel({
  children,
  className = "",
  radius = "rounded-[28px]",
  bodyClassName = "",
  glow = false,
}) {
  return (
    <div className={["group relative overflow-hidden", radius, className].join(" ")}>
      <GradientRing radiusClass={radius} thickness={1.5} glow={glow} hoverGlow />
      <div
        className={[
          "relative bg-brand-dark/55 backdrop-blur",
          radius,
          bodyClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="h-4 w-[2px] rounded-full bg-gradient-to-b from-brand-primary to-brand-cyan" />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function StatusButton({ status, isActive, onClick }) {
  const Icon = status.icon;
  return (
    <button
      onClick={onClick}
      className={[
        "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
        isActive
          ? "bg-gradient-to-r from-brand-primary to-brand-cyan text-white shadow-[0_0_20px_rgba(132,29,79,.4)]"
          : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
      {status.label}
    </button>
  );
}

function ScoreBadge({ value, label, sublabel }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/30 p-4 text-center backdrop-blur">
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/70">
        {label}
      </span>
      {sublabel && (
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">
          {sublabel}
        </span>
      )}
    </div>
  );
}

function PosterCard({ series }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/40">
        <img
          src={series.poster || series.image}
          alt={series.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {series.match && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-primary/90 px-2 py-1 text-[10px] font-bold text-white">
            {series.match} match
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm font-bold text-white">{series.title}</h3>
          {series.reason && (
            <p className="mt-1 text-[10px] leading-tight text-white/60">{series.reason}</p>
          )}
          {series.friend && (
            <p className="mt-1 text-[10px] text-white/60">
              Recommandé par {series.friend} · {series.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function EpisodeRankRow({ item, index }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-brand-cyan/30 hover:bg-white/[0.05]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary/20 text-sm font-black text-white">
        {index + 1}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-white">{item.title}</p>
        <p className="text-xs text-white/50">{item.code}</p>
      </div>
      <div className="flex items-center gap-1 text-sm font-bold text-brand-cyan">
        <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
        {item.score}
      </div>
    </div>
  );
}

export default function SeriesHubPage() {
  const [activeStatus, setActiveStatus] = useState("watching");
  const [showTrailer, setShowTrailer] = useState(false);

  const filledBlocks = Math.round(PROGRESS.percentage / 10);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background ambiant */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${SERIES.backdrop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        {/* Hero section immersive */}
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${SERIES.backdrop})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          <div className="relative grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Affiche + actions */}
            <div className="space-y-6">
              <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.5)] lg:mx-0">
                <GradientRing radiusClass="rounded-3xl" thickness={2} glow hoverGlow />
                <img
                  src={SERIES.poster}
                  alt={SERIES.title}
                  className="relative aspect-[2/3] w-full object-cover"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {PERSONAL_STATUS.map((status) => (
                  <StatusButton
                    key={status.key}
                    status={status}
                    isActive={activeStatus === status.key}
                    onClick={() => setActiveStatus(status.key)}
                  />
                ))}
              </div>
            </div>

            {/* Contenu hero */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan backdrop-blur">
                  {SERIES.status}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/70">
                  {SERIES.platform}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/70">
                  {SERIES.age}
                </span>
              </div>

              <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                {SERIES.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <ScoreBadge
                  value={SERIES.communityScore}
                  label="Note communauté"
                  sublabel={`${SERIES.fanCount} fans`}
                />
                <ScoreBadge
                  value={SERIES.seasons}
                  label="Saisons"
                  sublabel={`${SERIES.episodes} épisodes`}
                />
                <ScoreBadge value={SERIES.avgEpisodeDuration} label="Par épisode" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowTrailer(!showTrailer)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02]"
                >
                  <Play className="h-4 w-4 fill-black" />
                  Bande-annonce
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Heart className="h-4 w-4" />
                  Favori
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Share2 className="h-4 w-4" />
                  Partager
                </button>
              </div>
            </div>
          </div>

          {/* Bande-annonce intégrée */}
          {showTrailer && (
            <div className="relative border-t border-white/10 px-6 pb-6 md:px-10">
              <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                <iframe
                  src={SERIES.trailerUrl}
                  title="Bande-annonce"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </section>

        {/* Résumé intelligent + Progression personnelle */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8">
            <SectionHeader title="Résumé intelligent" />
            <p className="text-sm leading-7 text-white/80 md:text-base md:leading-8">
              {SERIES.synopsis}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <Clock className="h-5 w-5 text-brand-cyan" />
                <p className="mt-2 text-xs text-white/50">Durée moyenne</p>
                <p className="font-bold text-white">{SERIES.avgEpisodeDuration}</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <Calendar className="h-5 w-5 text-brand-cyan" />
                <p className="mt-2 text-xs text-white/50">Années</p>
                <p className="font-bold text-white">{SERIES.years}</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <Tv className="h-5 w-5 text-brand-cyan" />
                <p className="mt-2 text-xs text-white/50">Saisons</p>
                <p className="font-bold text-white">{SERIES.seasons}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {SERIES.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Disponible sur
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERIES.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 px-4 py-2 text-xs font-semibold text-white"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </GlassPanel>

          <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8" glow>
            <SectionHeader title="Progression personnelle" />
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Vous avez regardé
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  Saison {PROGRESS.season} - Episode {PROGRESS.episode} /{" "}
                  {PROGRESS.totalEpisodes}
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Progression
                  </span>
                  <span className="text-sm font-bold text-white">{PROGRESS.percentage}%</span>
                </div>
                <div className="flex h-6 items-center gap-1 font-mono text-lg leading-none text-white">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < filledBlocks ? "text-brand-cyan" : "text-white/20"}
                    >
                      █
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-brand-primary/10 to-brand-cyan/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Prochain épisode
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  {PROGRESS.nextEpisode.code} - "{PROGRESS.nextEpisode.title}"
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:scale-[1.02]">
                  <Play className="h-4 w-4 fill-black" />
                  Reprendre
                </button>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* Zone communauté */}
        <section className="mt-16">
          <SectionHeader title="Zone communauté" rightLabel="Voir tout" />
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Discussions populaires */}
            <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
              <div className="mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-brand-cyan" />
                <h3 className="font-bold uppercase tracking-wide text-white">Discussions</h3>
              </div>
              <div className="space-y-3">
                {COMMUNITY.discussions.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-brand-cyan/30 hover:bg-white/[0.05]"
                  >
                    <p className="font-semibold text-white">{item.title}</p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
                      <span>par {item.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {item.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {item.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Théories + Citations + Moments */}
            <div className="space-y-6">
              <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-bold uppercase tracking-wide text-white">Théories</h3>
                </div>
                <div className="space-y-3">
                  {COMMUNITY.theories.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                      <p className="text-sm text-white/80">{item.title}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Quote className="h-5 w-5 text-brand-cyan" />
                  <h3 className="font-bold uppercase tracking-wide text-white">Citations cultes</h3>
                </div>
                <div className="space-y-3">
                  {COMMUNITY.quotes.map((item) => (
                    <blockquote
                      key={item.id}
                      className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <p className="text-sm italic text-white/80">« {item.text} »</p>
                      <p className="mt-2 text-xs font-semibold text-brand-cyan">
                        — {item.character}
                      </p>
                    </blockquote>
                  ))}
                </div>
              </GlassPanel>
            </div>

            {/* Personnages + Meilleurs épisodes */}
            <div className="space-y-6">
              <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-primary" />
                  <h3 className="font-bold uppercase tracking-wide text-white">
                    Personnages favoris
                  </h3>
                </div>
                <div className="space-y-2">
                  {COMMUNITY.characters.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="font-semibold text-white">
                        #{item.rank} {item.name}
                      </span>
                      <TrendingUp className="h-4 w-4 text-brand-cyan" />
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-brand-cyan" />
                  <h3 className="font-bold uppercase tracking-wide text-white">
                    Meilleurs épisodes
                  </h3>
                </div>
                <div className="space-y-3">
                  {COMMUNITY.episodes.map((item, index) => (
                    <EpisodeRankRow key={item.id} item={item} index={index} />
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* Moments préférés */}
          <div className="mt-6">
            <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Flame className="h-5 w-5 text-brand-primary" />
                <h3 className="font-bold uppercase tracking-wide text-white">Moments préférés</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {COMMUNITY.moments.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/5 bg-gradient-to-r from-brand-primary/10 to-brand-cyan/10 p-5"
                  >
                    <p className="font-semibold text-white">{item.title}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </section>

        {/* Timeline de la série */}
        <section className="mt-16">
          <SectionHeader title="Timeline de la série" />
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-cyan to-transparent md:left-1/2 md:-translate-x-px" />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div
                  key={item.year}
                  className="relative grid items-center gap-6 md:grid-cols-2"
                >
                  <div
                    className={[
                      "md:text-right",
                      item.season % 2 === 0 ? "md:order-2 md:text-left" : "",
                    ].join(" ")}
                  >
                    <GlassPanel radius="rounded-[24px]" bodyClassName="p-5 inline-block w-full md:w-auto">
                      <p className="text-lg font-black text-white">{item.year}</p>
                      <p className="text-sm font-semibold text-brand-cyan">
                        {item.label} · {item.episodes} épisodes
                      </p>
                      {item.upcoming && (
                        <span className="mt-2 inline-block rounded-full bg-brand-primary/20 px-2 py-1 text-[10px] font-bold text-white">
                          À venir
                        </span>
                      )}
                    </GlassPanel>
                  </div>
                  <div
                    className={[
                      "absolute left-6 top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-brand-cyan bg-brand-primary md:left-1/2 md:-translate-x-1/2",
                    ].join(" ")}
                  />
                  <div className={item.season % 2 === 0 ? "md:order-1" : ""} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommandations personnalisées */}
        <section className="mt-16">
          <SectionHeader title="Recommandations pour vous" />
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
              <h3 className="mb-4 font-bold uppercase tracking-wide text-white">
                Séries similaires
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {RECOMMENDATIONS.similar.map((item) => (
                  <PosterCard key={item.title} series={item} />
                ))}
              </div>
            </GlassPanel>

            <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
              <h3 className="mb-4 font-bold uppercase tracking-wide text-white">
                Vos amis regardent
              </h3>
              <div className="space-y-4">
                {RECOMMENDATIONS.friends.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-brand-cyan/30"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white">
                      {item.friend[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-white/50">
                        Recommandé par {item.friend} · {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel radius="rounded-[28px]" bodyClassName="p-6">
              <h3 className="mb-4 font-bold uppercase tracking-wide text-white">
                Profils similaires aiment
              </h3>
              <div className="space-y-4">
                {RECOMMENDATIONS.profiles.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                  >
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="rounded-full bg-brand-cyan/20 px-3 py-1 text-xs font-bold text-brand-cyan">
                      {item.match}
                    </span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-16 rounded-[32px] border border-white/10 bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 p-8 text-center md:p-12">
          <h2 className="text-2xl font-black uppercase text-white md:text-3xl">
            Rejoignez la communauté de fans
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
            Échangez sur les théories, partagez vos moments préférés et découvrez des séries
            adaptées à vos goûts.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
            <Users className="h-4 w-4" />
            Rejoindre la communauté
          </button>
        </section>
      </main>
    </div>
  );
}
