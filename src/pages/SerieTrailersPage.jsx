import { useState } from "react";
import {
  ChevronLeft,
  Play,
  PlayCircle,
  Volume2,
  Clock,
  Share2,
  Bookmark,
  ChevronRight,
  Eye,
  ThumbsUp,
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

const SERIES = {
  title: "STRANGER THINGS",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
};

const FEATURED_VIDEO = {
  id: 1,
  title: "Stranger Things 5 | Teaser Officiel",
  subtitle: "Bande-annonce de la saison finale",
  type: "Teaser",
  duration: "1:42",
  views: "12.5M",
  likes: "485K",
  thumbnail:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
};

const VIDEOS = [
  {
    id: 2,
    title: "Behind the Scenes : Saison 4",
    subtitle: "Immersion dans le tournage",
    type: "Featurette",
    duration: "8:45",
    views: "2.3M",
    likes: "98K",
    thumbnail:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "L'Evolution de Eleven",
    subtitle: "Retrospective du personnage",
    type: "Analyse",
    duration: "12:30",
    views: "1.8M",
    likes: "76K",
    thumbnail:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Teaser Saison 3",
    subtitle: "Starcourt Mall",
    type: "Teaser",
    duration: "0:58",
    views: "8.9M",
    likes: "312K",
    thumbnail:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Les Easter Eggs caches",
    subtitle: "References aux annees 80",
    type: "Decouverte",
    duration: "6:15",
    views: "1.2M",
    likes: "54K",
    thumbnail:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Interview du casting",
    subtitle: "Les acteurs se confient",
    type: "Interview",
    duration: "15:20",
    views: "890K",
    likes: "42K",
    thumbnail:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
  },
];

const CATEGORIES = [
  "Tout",
  "Bandes-annonces",
  "Extraits",
  "Interviews",
  "Behind the scenes",
  "Analyses",
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

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
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

function VideoCard({ video, featured = false }) {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-[30px]">
        <GradientRing
          radiusClass="rounded-[30px]"
          thickness={3}
          glow
          hoverGlow
        />
        <div className="relative rounded-[30px] bg-brand-dark/55 backdrop-blur">
          <div className="relative aspect-video overflow-hidden rounded-[30px]">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

            <div className="absolute left-5 top-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <Volume2 className="h-3.5 w-3.5 text-brand-cyan" />
                {video.duration}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group/play relative flex h-24 w-24 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/20 backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-black/50">
                <GradientRing radiusClass="rounded-full" thickness={2} glow />
                <PlayCircle className="h-12 w-12 text-white transition-transform duration-300 group-hover/play:scale-110" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="rounded-full border border-brand-cyan/30 bg-black/40 px-3 py-1 text-xs font-semibold text-brand-cyan backdrop-blur">
                {video.type}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
                {video.title}
              </h2>
              <p className="mt-1 text-sm text-white/70">{video.subtitle}</p>

              <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="h-4 w-4 text-brand-cyan" />
                  {video.views} vues
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ThumbsUp className="h-4 w-4 text-brand-cyan" />
                  {video.likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group relative cursor-pointer overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-video overflow-hidden rounded-t-[24px]">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-3 top-3">
            <span className="rounded-full border border-white/20 bg-black/40 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
              {video.duration}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-black/50 ring-1 ring-white/20 backdrop-blur-md">
              <Play className="ml-0.5 h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-cyan">
            {video.type}
          </span>
          <h3 className="mt-1 line-clamp-1 text-sm font-bold text-white">
            {video.title}
          </h3>
          <p className="mt-0.5 line-clamp-1 text-xs text-white/50">
            {video.subtitle}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-white/40">
            <span className="inline-flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {video.views}
            </span>
            <span className="inline-flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              {video.likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SerieTrailersPage() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Videos & Trailers
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {SERIES.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
        </div>

        <VideoCard video={FEATURED_VIDEO} featured />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                activeCategory === cat
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <SectionHeader title="Toutes les videos" rightLabel="Voir tout" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Charger plus de videos
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
