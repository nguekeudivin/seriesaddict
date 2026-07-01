import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  TrendingUp,
  Flame,
  Clock,
  Calendar,
  ArrowRight,
  Play,
  Heart,
  Bookmark,
  MessageCircle,
  Search,
  Filter,
  Grid3X3,
  List,
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

const GENRES = [
  { id: 1, name: "Science-Fiction", seriesCount: 1247, trending: true, description: "Voyages dans l'espace, futurs dystopiques, technologies avancées et mondes extraordinaires." },
  { id: 2, name: "Horreur", seriesCount: 892, trending: true, description: "Frissons, suspense et créatures cauchemardesques." },
  { id: 3, name: "Drame", seriesCount: 2156, trending: false, description: "Histoires intenses, émotions fortes et relations humaines." },
  { id: 4, name: "Thriller", seriesCount: 1089, trending: true, description: "Tension, mystères et courses contre la montre." },
  { id: 5, name: "Mystere", seriesCount: 756, trending: false, description: "Enquêtes, secrets et révélations inattendues." },
  { id: 6, name: "Comedie", seriesCount: 1834, trending: false, description: "Rires, satires et comédies de situation." },
  { id: 7, name: "Action", seriesCount: 1432, trending: false, description: "Explosions, poursuites et héros intrépides." },
  { id: 8, name: "Romance", seriesCount: 967, trending: false, description: "Histoires d'amour, passions et relations." },
  { id: 9, name: "Fantasy", seriesCount: 623, trending: true, description: "Magie, créatures mythiques et mondes imaginaires." },
  { id: 10, name: "Documentaire", seriesCount: 445, trending: false, description: "Faits réels, investigations et documentaires." },
  { id: 11, name: "Anime", seriesCount: 889, trending: true, description: "Séries animées japonaises et animations." },
  { id: 12, name: "Crime", seriesCount: 1123, trending: false, description: "Policier, criminels et enquêtes judiciaires." },
];

const SERIES_IN_GENRE = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Horreur", "Mystere"],
    rating: 4.7,
    year: 2016,
    platform: "Netflix",
    episodes: 34,
  },
  {
    id: 2,
    title: "The X-Files",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Mystere", "Thriller"],
    rating: 4.5,
    year: 1993,
    platform: "Disney+",
    episodes: 218,
  },
  {
    id: 3,
    title: "Black Mirror",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Thriller", "Drame"],
    rating: 4.6,
    year: 2011,
    platform: "Netflix",
    episodes: 27,
  },
  {
    id: 4,
    title: "Westworld",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Western", "Thriller"],
    rating: 4.3,
    year: 2016,
    platform: "HBO",
    episodes: 36,
  },
  {
    id: 5,
    title: "The Expanse",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Drame", "Thriller"],
    rating: 4.8,
    year: 2015,
    platform: "Prime Video",
    episodes: 62,
  },
  {
    id: 6,
    title: "Doctor Who",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Aventure", "Drame"],
    rating: 4.4,
    year: 2005,
    platform: "BBC",
    episodes: 152,
  },
  {
    id: 7,
    title: "Altered Carbon",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Action", "Thriller"],
    rating: 4.2,
    year: 2018,
    platform: "Netflix",
    episodes: 18,
  },
  {
    id: 8,
    title: "Firefly",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80",
    genres: ["Science-Fiction", "Western", "Aventure"],
    rating: 4.6,
    year: 2002,
    platform: "Disney+",
    episodes: 14,
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
            {series.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function TrendingCard({ title, change, index }) {
  return (
    <div className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <span className="text-2xl font-black text-white/20">{index}</span>
      <div className="flex-1">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-xs text-white/60">
          <span className="text-brand-cyan">+{change}%</span> cette semaine
        </p>
      </div>
      <TrendingUp className="h-4 w-4 text-brand-cyan" />
    </div>
  );
}

export default function GenreDetailsPage() {
  const { genreName } = useParams();
  const navigate = useNavigate();

  const genre =
    GENRES.find(
      (g) => g.name.toLowerCase() === genreName?.toLowerCase(),
    ) || GENRES[0];

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
              Genre
            </p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              {genre.name}
            </h1>
          </div>
        </div>

        {/* Hero genre */}
        <div className="group relative mb-10 overflow-hidden rounded-[28px]">
          <GradientRing radiusClass="rounded-[28px]" thickness={2} />
          <GradientRing
            radiusClass="rounded-[28px]"
            thickness={2}
            glow
            hoverGlow
          />
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#011921]/60 lg:min-h-[320px]">
            <div className="absolute inset-0">
              <img
                src={SERIES_IN_GENRE[0].image}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-cyan/15" />
            </div>

            <div className="relative grid min-h-[360px] grid-cols-1 gap-8 p-6 lg:min-h-[320px] lg:grid-cols-[1fr_340px] lg:items-center lg:p-10">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
                  <Flame className="h-4 w-4 text-brand-primary" />
                  {genre.trending ? "Tendance" : "Populaire"}
                </div>

                <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
                  {genre.name}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                  {genre.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                    <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
                    {genre.seriesCount.toLocaleString()} series
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                    Note moyenne 4.3
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                    +{Math.floor(genre.seriesCount / 100)} nouveautes
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/80">
                    <TrendingUp className="h-4 w-4 text-brand-cyan" />
                    Tendances du genre
                  </div>
                  <div className="space-y-2">
                    <TrendingCard title="Stranger Things" change={24} index={1} />
                    <TrendingCard title="Black Mirror" change={18} index={2} />
                    <TrendingCard title="The Expanse" change={12} index={3} />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <SolidButton>
                    <Play className="h-5 w-5 fill-current" />
                    Decouvrir
                  </SolidButton>
                  <OutlineButton>
                    <Heart className="h-5 w-5" />
                    Suivre le genre
                  </OutlineButton>
                  <div className="flex items-center gap-3">
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
                placeholder={`Rechercher dans ${genre.name}...`}
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
          title={`Series ${genre.name}`}
          rightLabel="Toutes les series"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERIES_IN_GENRE.map((series) => (
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
                  Vous ne trouvez pas votre serie ?
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Explorez les collections ou utilisez la recherche avancee.
                </p>
              </div>
              <button
                onClick={() => navigate("/collections")}
                className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Explorer les collections
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
