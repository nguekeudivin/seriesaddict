import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  User,
  TrendingUp,
  Bookmark,
  Share2,
  Eye,
  Sparkles,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT = "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const FEATURED_ARTICLE = {
  id: 1,
  title: "Stranger Things : La fin d'une ere",
  excerpt: "Avec la saison 5 qui marquera la conclusion de la serie, revenons sur ce qui a fait de Stranger Things un phenomene culturel sans precedent dans l'histoire de Netflix.",
  author: "Charlotte Martin",
  authorAvatar: "C",
  date: "26 fevrier 2026",
  readTime: "8 min",
  image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  category: "Edito",
  featured: true,
};

const ARTICLES = [
  {
    id: 2,
    title: "Les series qui ont marque 2025",
    excerpt: "Retour sur les productions qui ont fait parler d'elles cette annee.",
    author: "Nadia B.",
    authorAvatar: "N",
    date: "24 fev 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    category: "Best of",
  },
  {
    id: 3,
    title: "Interview : Les createurs de Dark",
    title: "Interview : Les createurs de Dark",
    excerpt: "Les freres Jantje Friese et Baran bo Odar se confient sur leur prochain projet.",
    author: "Luca T.",
    authorAvatar: "L",
    date: "22 fev 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    category: "Interview",
  },
  {
    id: 4,
    title: "Le renouveau des sitcoms",
    excerpt: "Comment les comedies de situation se reinventent pour les nouvelles generations.",
    author: "Marie D.",
    authorAvatar: "M",
    date: "20 fev 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    category: "Analyse",
  },
  {
    id: 5,
    title: "Les series a ne pas manquer en mars",
    excerpt: "Notre selection des nouveautes et des retours attendus ce mois-ci.",
    author: "Thomas L.",
    authorAvatar: "T",
    date: "18 fev 2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    category: "Guide",
  },
  {
    id: 6,
    title: "Les effets speciaux revolutionnaires",
    excerpt: "Plongee dans les coulisses de la creation visuelle des plus grandes series.",
    author: "Sarah P.",
    authorAvatar: "S",
    date: "16 fev 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=80",
    category: "Technique",
  },
  {
    id: 7,
    title: "Les musiques de series cultes",
    excerpt: "Quand les bandes-son deviennent des hits a part entiere.",
    author: "Alex R.",
    authorAvatar: "A",
    date: "14 fev 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    category: "Musique",
  },
];

const CATEGORIES = [
  { key: "all", label: "Tout", count: 142 },
  { key: "edito", label: "Edito", count: 23 },
  { key: "interview", label: "Interview", count: 18 },
  { key: "analyse", label: "Analyse", count: 31 },
  { key: "guide", label: "Guide", count: 27 },
  { key: "news", label: "News", count: 43 },
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

function ArticleCard({ article, featured = false }) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-[32px]">
        <GradientRing radiusClass="rounded-[32px]" thickness={3} glow hoverGlow />
        <div className="relative rounded-[32px] bg-brand-dark/55 backdrop-blur">
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-[32px]">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            
            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-brand-primary/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl lg:text-3xl">
              {article.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {article.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white">
                  {article.authorAvatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{article.author}</p>
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan transition hover:text-white">
                Lire l'article
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[24px]">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase text-white/90 backdrop-blur">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="line-clamp-2 text-base font-bold text-white">{article.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/60">{article.excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-xs font-bold text-white">
                {article.authorAvatar}
              </div>
              <div>
                <p className="text-xs font-medium text-white">{article.author}</p>
                <p className="text-[10px] text-white/50">{article.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/40">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function DailyPage() {
  const [activeCategory, setActiveCategory] = useState("all");

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
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Le Daily</p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">Actualites & Articles</h1>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={[
                "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                activeCategory === cat.key
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {cat.label}
              <span className={[
                "rounded-full px-1.5 py-0.5 text-[10px]",
                activeCategory === cat.key ? "bg-black/10" : "bg-white/10",
              ].join(" ")}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <ArticleCard article={FEATURED_ARTICLE} featured />

        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">Articles recents</h2>
            </div>
            <button className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white">
              Voir tout
              <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Charger plus d'articles
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
