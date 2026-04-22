import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Grid3X3,
  List,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT = "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const GENRES = [
  { id: 1, name: "Science-Fiction", icon: "", seriesCount: 1247, trending: true },
  { id: 2, name: "Horreur", icon: "", seriesCount: 892, trending: true },
  { id: 3, name: "Drame", icon: "", seriesCount: 2156, trending: false },
  { id: 4, name: "Thriller", icon: "", seriesCount: 1089, trending: true },
  { id: 5, name: "Mystere", icon: "", seriesCount: 756, trending: false },
  { id: 6, name: "Comedie", icon: "", seriesCount: 1834, trending: false },
  { id: 7, name: "Action", icon: "", seriesCount: 1432, trending: false },
  { id: 8, name: "Romance", icon: "", seriesCount: 967, trending: false },
  { id: 9, name: "Fantasy", icon: "", seriesCount: 623, trending: true },
  { id: 10, name: "Documentaire", icon: "", seriesCount: 445, trending: false },
  { id: 11, name: "Anime", icon: "", seriesCount: 889, trending: true },
  { id: 12, name: "Crime", icon: "", seriesCount: 1123, trending: false },
];

const TAGS = [
  { id: 1, name: "Netflix Original", seriesCount: 456 },
  { id: 2, name: "Base sur un livre", seriesCount: 342 },
  { id: 3, name: "Adolescents", seriesCount: 289 },
  { id: 4, name: "Annee 80", seriesCount: 156 },
  { id: 5, name: "Super-pouvoirs", seriesCount: 198 },
  { id: 6, name: "Psychologique", seriesCount: 267 },
  { id: 7, name: "Famille", seriesCount: 423 },
  { id: 8, name: "Enquete", seriesCount: 312 },
  { id: 9, name: "Post-apo", seriesCount: 134 },
  { id: 10, name: "Voyage temporel", seriesCount: 89 },
  { id: 11, name: "Monstres", seriesCount: 145 },
  { id: 12, name: "Ecole", seriesCount: 378 },
];

const FEATURED_IN_GENRE = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Horreur", "Mystere"],
    rating: 4.7,
    year: 2016,
  },
  {
    id: 2,
    title: "The X-Files",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Mystere", "Thriller"],
    rating: 4.5,
    year: 1993,
  },
  {
    id: 3,
    title: "Black Mirror",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Thriller", "Drame"],
    rating: 4.6,
    year: 2011,
  },
  {
    id: 4,
    title: "Westworld",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Western", "Thriller"],
    rating: 4.3,
    year: 2016,
  },
];

function GradientRing({ radiusClass = "rounded-2xl", thickness = 2, glow = false, hoverGlow = false, className = "" }) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        radiusClass,
        glow ? "blur-md" : "",
        hoverGlow ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70" : "",
        className,
      ].join(" ")}
      style={{
        background: GRADIENT,
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
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
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">{title}</h2>
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

function GenreCard({ genre }) {
  return (
    <button className="group relative overflow-hidden rounded-[24px] text-left">
      <GradientRing radiusClass="rounded-[24px]" thickness={2} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur transition-all duration-300 group-hover:bg-brand-dark/70">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-white">{genre.name}</h3>
            <p className="mt-1 text-sm text-white/60">{genre.seriesCount.toLocaleString()} series</p>
          </div>
          {genre.trending && (
            <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-primary/20 text-brand-primary">
              <TrendingUp className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-6 w-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 ring-2 ring-brand-dark"
              />
            ))}
          </div>
          <span className="text-xs text-white/40">+{Math.floor(genre.seriesCount / 100)} nouveautes</span>
        </div>
      </div>
    </button>
  );
}

function TagChip({ tag }) {
  return (
    <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-brand-cyan/10">
      <span className="text-sm font-medium text-white/80 group-hover:text-white">{tag.name}</span>
      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/50">{tag.seriesCount}</span>
    </button>
  );
}

function FeaturedSeriesCard({ series }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
          <img
            src={series.image}
            alt={series.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-1">
            <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
            <span className="text-sm font-bold text-white">{series.rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-white">{series.title}</h3>
          <div className="mt-2 flex flex-wrap gap-1">
            {series.genres.map((genre) => (
              <span key={genre} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TagsAndGenrePage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explorer</p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">Genres & Tags</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative rounded-full p-[1px]">
            <div className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`} />
            <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/80 px-4 py-3 backdrop-blur">
              <Search className="h-5 w-5 text-brand-cyan" />
              <input
                type="text"
                placeholder="Rechercher un genre ou un tag..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <SectionHeader title="Genres populaires" rightLabel="Tous les genres" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {GENRES.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>

        <div className="mt-10">
          <SectionHeader title="Tags tendance" />
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <TagChip key={tag.id} tag={tag} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <SectionHeader title="Science-Fiction : A decouvrir" rightLabel="Voir tout" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_IN_GENRE.map((series) => (
              <FeaturedSeriesCard key={series.id} series={series} />
            ))}
          </div>
        </div>

        <div className="group relative mt-10 overflow-hidden rounded-[28px]">
          <GradientRing radiusClass="rounded-[28px]" thickness={2} glow hoverGlow />
          <div className="relative rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-cyan" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Nouveau</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-white">Trouvez votre prochaine serie preferee</h3>
                <p className="mt-1 text-sm text-white/70">
                  Utilisez notre outil de recommandation base sur vos gouts et votre historique.
                </p>
              </div>
              <button className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Decouvrir
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
