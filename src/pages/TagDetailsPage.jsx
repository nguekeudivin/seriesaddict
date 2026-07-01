import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Play,
  Heart,
  Bookmark,
  MessageCircle,
  Search,
  Filter,
  Grid3X3,
  List,
  Calendar,
  Clock,
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
const BRAND_GRADIENT_TEXT =
  "bg-gradient-to-r from-brand-primary to-brand-cyan";

const TAGS = [
  { id: 1, name: "Netflix Original", seriesCount: 456, description: "Les series produites exclusivement pour Netflix." },
  { id: 2, name: "Base sur un livre", seriesCount: 342, description: "Adaptations litteraires et series inspirees d'oeuvres ecrites." },
  { id: 3, name: "Adolescents", seriesCount: 289, description: "Series jeunesse et dramas teen." },
  { id: 4, name: "Annee 80", seriesCount: 156, description: "Series situees dans les annees 80 ou capturees par leur esthetique." },
  { id: 5, name: "Super-pouvoirs", seriesCount: 198, description: "Heros, super-heros et pouvoirs surnaturels." },
  { id: 6, name: "Psychologique", seriesCount: 267, description: "Thrillers mentaux, manipulations et profondeurs psychologiques." },
  { id: 7, name: "Famille", seriesCount: 423, description: "Series a regarder en famille." },
  { id: 8, name: "Enquete", seriesCount: 312, description: "Investigations, detectives et mysteres a resoudre." },
  { id: 9, name: "Post-apo", seriesCount: 134, description: "Survie apres une catastrophe mondiale." },
  { id: 10, name: "Voyage temporel", seriesCount: 89, description: "Sauts dans le temps, paradoxes et temporalites." },
  { id: 11, name: "Monstres", seriesCount: 145, description: "Creatures, monstres et etres surnaturels." },
  { id: 12, name: "Ecole", seriesCount: 378, description: "Series situees dans un cadre scolaire ou universitaire." },
];

const SERIES_WITH_TAG = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80",
    tags: ["Annee 80", "Super-pouvoirs", "Monstres"],
    rating: 4.7,
    year: 2016,
    platform: "Netflix",
    episodes: 34,
  },
  {
    id: 2,
    title: "The Last of Us",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    tags: ["Post-apo", "Monstres", "Base sur un livre"],
    rating: 4.8,
    year: 2023,
    platform: "HBO",
    episodes: 9,
  },
  {
    id: 3,
    title: "The Boys",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    tags: ["Super-pouvoirs", "Psychologique", "Netflix Original"],
    rating: 4.6,
    year: 2019,
    platform: "Prime Video",
    episodes: 32,
  },
  {
    id: 4,
    title: "Dark",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
    tags: ["Voyage temporel", "Psychologique", "Famille"],
    rating: 4.8,
    year: 2017,
    platform: "Netflix",
    episodes: 26,
  },
  {
    id: 5,
    title: "Sex Education",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    tags: ["Adolescents", "Ecole", "Famille"],
    rating: 4.5,
    year: 2019,
    platform: "Netflix",
    episodes: 32,
  },
  {
    id: 6,
    title: "Wednesday",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    tags: ["Monstres", "Ecole", "Adolescents"],
    rating: 4.4,
    year: 2022,
    platform: "Netflix",
    episodes: 8,
  },
  {
    id: 7,
    title: "Mindhunter",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    tags: ["Psychologique", "Enquete", "Base sur un livre"],
    rating: 4.7,
    year: 2017,
    platform: "Netflix",
    episodes: 19,
  },
  {
    id: 8,
    title: "The Walking Dead",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80",
    tags: ["Post-apo", "Monstres", "Famille"],
    rating: 4.2,
    year: 2010,
    platform: "AMC",
    episodes: 177,
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
          <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group/btn relative inline-flex items-center gap-2 rounded-full text-sm font-semibold text-white"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: GRADIENT,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-black/35 px-5 py-3 backdrop-blur-sm transition-colors duration-300 group-hover/btn:bg-black/50">
        {children}
      </span>
    </button>
  );
}

function SolidButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(132,29,79,.25)] transition-all duration-300 hover:scale-[1.02]"
    >
      {children}
    </button>
  );
}

function IconButton({ children, title }) {
  return (
    <button
      title={title}
      className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-black/35 hover:ring-white/25"
    >
      {children}
    </button>
  );
}

function SeriesCard({ series }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] text-left">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur transition-all duration-300 group-hover:bg-brand-dark/70">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
          <img
            src={series.image}
            alt={series.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-1">
            <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
            <span className="text-sm font-bold text-white">{series.rating}</span>
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur">
            {series.platform}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-white transition-colors duration-300 group-hover:text-brand-cyan">
            {series.title}
          </h3>
          <div className="mt-2 flex items-center justify-between text-xs text-white/60">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {series.year}
            </span>
            <span className="inline-flex items-center gap-1">
              <Play className="h-3.5 w-3.5" />
              {series.episodes} ep.
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {series.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function RelatedTagChip({ tag, active }) {
  return (
    <span
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
        active
          ? "bg-white text-black"
          : "border border-white/10 bg-white/5 text-white/80 hover:border-brand-cyan/30 hover:bg-brand-cyan/10 hover:text-white",
      ].join(" ")}
    >
      {tag}
    </span>
  );
}

export default function TagDetailsPage() {
  const { tagName } = useParams();
  const navigate = useNavigate();

  const tag =
    TAGS.find(
      (t) =>
        t.name.toLowerCase().replace(/\s+/g, "-") ===
        tagName?.toLowerCase(),
    ) ||
    TAGS.find(
      (t) => t.name.toLowerCase() === decodeURIComponent(tagName || "").toLowerCase(),
    ) ||
    TAGS[0];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => navigate("/tags")}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Tag
            </p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              {tag.name}
            </h1>
          </div>
        </div>

        {/* Header tag */}
        <div className="group relative mb-8 overflow-hidden rounded-[28px]">
          <GradientRing radiusClass="rounded-[28px]" thickness={2} />
          <GradientRing
            radiusClass="rounded-[28px]"
            thickness={2}
            glow
            hoverGlow
          />
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-brand-cyan" />
                  Tag tendance
                </div>
                <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
                  {tag.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                  {tag.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                    <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
                    {tag.seriesCount.toLocaleString()} series
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                    +{Math.floor(tag.seriesCount / 50)} cette semaine
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <SolidButton>
                  <Play className="h-5 w-5 fill-current" />
                  Explorer
                </SolidButton>
                <OutlineButton>
                  <Heart className="h-5 w-5" />
                  Suivre
                </OutlineButton>
                <IconButton title="Partager">
                  <Bookmark className="h-5 w-5" style={{ color: BRAND.primary }} />
                </IconButton>
                <IconButton title="Commenter">
                  <MessageCircle className="h-5 w-5" style={{ color: BRAND.primary }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        {/* Related tags */}
        <div className="mb-8">
          <SectionHeader title="Tags associes" />
          <div className="flex flex-wrap gap-3">
            {TAGS.filter((t) => t.id !== tag.id)
              .slice(0, 8)
              .map((t) => (
                <button
                  key={t.id}
                  onClick={() =>
                    navigate(`/tag/${t.name.toLowerCase().replace(/\s+/g, "-")}`)
                  }
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-brand-cyan/10"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">
                    {t.name}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/50">
                    {t.seriesCount}
                  </span>
                </button>
              ))}
          </div>
        </div>

        {/* Search & filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1 rounded-full p-[1px]">
            <div
              className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`}
            />
            <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/80 px-4 py-3 backdrop-blur">
              <Search className="h-5 w-5 text-brand-cyan" />
              <input
                type="text"
                placeholder={`Rechercher dans #${tag.name}...`}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20">
                <Filter className="h-4 w-4" />
              </button>
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

        {/* Series grid */}
        <SectionHeader
          title={`Series avec #${tag.name}`}
          rightLabel="Toutes les series"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERIES_WITH_TAG.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>

        {/* CTA */}
        <div className="group relative mt-10 overflow-hidden rounded-[28px]">
          <GradientRing
            radiusClass="rounded-[28px]"
            thickness={2}
            glow
            hoverGlow
          />
          <div className="relative rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  D'autres tags a explorer ?
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Decouvrez toutes les etiquettes et trouvez vos series preferees.
                </p>
              </div>
              <button
                onClick={() => navigate("/tags")}
                className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Voir tous les tags
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
