import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Search,
  Bell,
  Share2,
  Bookmark,
  Sparkles,
  ChevronDown,
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

const CATEGORIES = [
  { key: "all", label: "Tout" },
  { key: "breaking", label: "Breaking" },
  { key: "interviews", label: "Interviews" },
  { key: "annonces", label: "Annonces" },
  { key: "events", label: "Evenements" },
];

const NEWS = [
  {
    id: 1,
    category: "Breaking",
    title: "La saison 5 boucle son tournage principal",
    excerpt:
      "Le planning se precise et plusieurs indices laissent penser a une communication plus intense dans les prochaines semaines.",
    author: "Charlotte",
    date: "26 fev 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "Interview",
    title: "Les freres Duffer promettent une fin plus intime",
    excerpt:
      "La conclusion devrait recentrer l'emotion sur le groupe historique sans perdre l'ampleur du spectacle.",
    author: "Charlotte",
    date: "25 fev 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: 3,
    category: "Decryptage",
    title: "Pourquoi Hawkins reste un decor aussi fort",
    excerpt:
      "Entre nostalgie americaine et menace invisible, la mise en scene transforme la ville en personnage a part entiere.",
    author: "Charlotte",
    date: "24 fev 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: 4,
    category: "Annonce",
    title: "Nouveau teaser pour la saison 5",
    excerpt:
      "Netflix devoile un premier apercu de la saison finale qui promet d'etre epique.",
    author: "Charlotte",
    date: "23 fev 2026",
    readTime: "3 min",
    image:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
  {
    id: 5,
    category: "Evenement",
    title: "Stranger Things : L'Experience immersive arrive a Paris",
    excerpt:
      "Plongez dans l'univers de la serie avec cette exposition interactive qui va ravir les fans.",
    author: "Charlotte",
    date: "22 fev 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
  {
    id: 6,
    category: "Casting",
    title: "Nouveau personnage majeur annonce pour la saison 5",
    excerpt:
      "Un acteur de renom rejoint le casting pour le dernier chapitre de la saga.",
    author: "Charlotte",
    date: "21 fev 2026",
    readTime: "3 min",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1400&q=80",
    featured: false,
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

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
        active
          ? "bg-white text-black"
          : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function FeaturedNewsCard({ news }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={2} glow hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[28px]">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Sparkles className="h-3 w-3" />
              {news.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
            {news.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {news.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-brand-cyan" />
                {news.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                {news.readTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5 hover:text-white">
                <Bookmark className="h-4 w-4" />
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5 hover:text-white">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function NewsCard({ news }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[24px]">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
              {news.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="line-clamp-2 text-sm font-bold uppercase tracking-wide text-white">
            {news.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/60">
            {news.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-white/50">
              <Calendar className="h-3 w-3" />
              {news.date}
            </div>
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan hover:text-white">
              Lire
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SerieNewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredNews = NEWS.filter((n) => n.featured);
  const regularNews = NEWS.filter((n) => !n.featured);

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
                Actualites
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {SERIES.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <Bell className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              <TrendingUp className="h-4 w-4" />
              S'abonner aux news
            </button>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat.key}
                label={cat.label}
                active={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
              />
            ))}
          </div>
          <div className="relative w-full max-w-sm">
            <div className="relative rounded-full p-[1px]">
              <div
                className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`}
              />
              <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/80 px-4 py-2.5 backdrop-blur">
                <Search className="h-4 w-4 text-brand-cyan" />
                <input
                  type="text"
                  placeholder="Rechercher une actualite..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <SectionHeader title="A la une" />
        <div className="mb-10 grid gap-6 lg:grid-cols-3">
          {featuredNews.map((news) => (
            <FeaturedNewsCard key={news.id} news={news} />
          ))}
        </div>

        <SectionHeader title="Toutes les actualites" rightLabel="Voir tout" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regularNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Charger plus d'actualites
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
