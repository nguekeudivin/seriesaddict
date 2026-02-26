import React from "react";
import {
  Search,
  ChevronRight,
  Filter,
  Sparkles,
  Play,
  Clock,
  Calendar,
  ArrowRight,
  Tv,
  Film,
  Newspaper,
  Users,
  BadgeCheck,
} from "lucide-react";

/**
 * SearchResultsPage.jsx — variations d’onglets
 * Layout: Facettes (gauche) + Results (centre)
 * Règle: Trailer fusionné dans la card quand pertinent.
 */

// ---------------------------
// Brand tokens (fallback)
// ---------------------------
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

// ---------------------------
// Tabs
// ---------------------------
const TABS = [
  { key: "series", label: "SERIES", icon: Tv },
  { key: "stars", label: "STARS", icon: Users },
  { key: "news", label: "NEWS", icon: Newspaper },
  { key: "trailers", label: "TRAILERS", icon: Film },
  { key: "daily", label: "SA-DAILY", icon: Sparkles },
];

// ---------------------------
// Mock data (replace by API)
// ---------------------------
const MOCK_SERIES = [
  {
    id: "arrow",
    title: "ARROW",
    country: "Série Américaine",
    network: "CW",
    tags: ["Drame", "Action", "Aventure", "Science-fiction", "Crime"],
    metaTop: "8 saisons 170 épisodes",
    synopsis:
      "La série Arrow est l’adaptation d’un comic américain. On suivra un super héros la nuit, qui est aussi un riche playboy le jour.",
    trailer: {
      hasTrailer: true,
      duration: "1:42",
      thumb:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=60",
      addedAt: "Ajouté récemment",
    },
    poster:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "harrow",
    title: "HARROW",
    country: "Série Australienne",
    network: "ABC",
    tags: ["Drame", "Medical"],
    metaTop: "3 saisons 30 épisodes",
    synopsis:
      "La vie du médecin légiste Dr. Daniel Harrow. Le mépris total de l’autorité et son empathie sans faille pour les morts l’aident à résoudre des cas.",
    trailer: { hasTrailer: false },
    poster:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=60",
  },
];

const MOCK_NEWS = Array.from({ length: 6 }).map((_, i) => ({
  id: `n-${i}`,
  category: ["Breaking", "Tendances", "Interviews", "Critiques"][i % 4],
  title: [
    "Netflix : les nouveautés séries à ne pas rater",
    "Pourquoi ce final divise autant",
    "Interview : écrire une mini-série moderne",
    "Notre avis : un thriller qui surprend",
    "Casting : une arrivée majeure confirmée",
  ][i % 5],
  excerpt:
    "Résumé court, efficace. On conserve une lecture magazine premium avec une hiérarchie claire.",
  author: "Charlotte",
  date: `${18 + i} fév 2026`,
  readTime: `${4 + (i % 5)} min`,
  img: [
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=60",
  ][i % 3],
  // optionnel: un “mini preview” type video/teaser
  media:
    i % 3 === 0
      ? {
          hasVideo: true,
          duration: "0:58",
          thumb:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=60",
        }
      : { hasVideo: false },
}));

const MOCK_TRAILERS = Array.from({ length: 6 }).map((_, i) => ({
  id: `t-${i}`,
  title: [
    "Trailer : Stranger Things S5",
    "Teaser : Severance",
    "Bande-annonce : Industry",
    "Clip : The Bear",
  ][i % 4],
  duration: `${1 + (i % 2)}:${(20 + i).toString().padStart(2, "0")}`,
  date: `${10 + i} fév 2026`,
  source: ["YouTube", "DailyMotion"][i % 2],
  series: ["Stranger Things", "Severance", "Industry", "The Bear"][i % 4],
  thumb: [
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1600&q=60",
  ][i % 3],
}));

const MOCK_STARS = Array.from({ length: 6 }).map((_, i) => ({
  id: `s-${i}`,
  name: ["Stephen Amell", "Ana de Armas", "Idris Elba", "Jeremy Allen White"][
    i % 4
  ],
  role: ["Acteur", "Actrice", "Acteur", "Acteur"][i % 4],
  knownFor: ["Arrow", "Knives Out", "Luther", "The Bear"][i % 4],
  credits: 12 + i * 3,
  img: [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=60",
  ][i % 3],
}));

const MOCK_DAILY = Array.from({ length: 5 }).map((_, i) => ({
  id: `d-${i}`,
  title: [
    "Le récap du jour",
    "Top actus",
    "Sorties à surveiller",
    "Les débats fans",
  ][i % 4],
  date: `${20 + i} fév 2026`,
  bullets: [
    "Une nouvelle saison confirmée",
    "Un trailer surprise est sorti",
    "Une annulation fait polémique",
    "Un casting inattendu",
  ].slice(0, 2 + (i % 3)),
}));

const FACETS = {
  status: ["En cours", "Terminée", "Annulée"],
  years: ["2026", "2025", "2024", "2023", "2022"],
  networks: ["ABC", "FOX", "HBO", "Netflix", "Prime Video", "Apple TV+"],
  tags: ["AppleTV+", "Netflix", "Marvel", "dystopie"],
  genres: ["Drame", "Action", "Thriller", "Comédie", "Animation"],
  nationalities: ["U.S.", "Grande-Bretagne", "Australie", "France", "Canada"],
};

// ---------------------------
// UI blocks
// ---------------------------
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

function NeonSearch({ value, onChange, onSubmit, placeholder }) {
  return (
    <div className="w-full">
      <div className="relative rounded-full p-[1px]">
        <div
          className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60 blur-[10px]`}
        />
        <div
          className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`}
        />
        <div className="relative flex items-center gap-2 rounded-full bg-brand-dark/80 px-5 py-3 backdrop-blur">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-sm text-white placeholder:text-white/45 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && onSubmit?.()}
          />
          <div className="h-6 w-px bg-brand-cyan/35" />
          <button
            onClick={onSubmit}
            className="rounded-full p-2 text-brand-cyan hover:bg-brand-cyan/15"
            aria-label="Rechercher"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function TabBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {TABS.map((t) => {
        const Icon = t.icon;
        const isActive = active === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={[
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all",
              isActive
                ? "bg-brand-wine/70 text-white border border-brand-cyan/35"
                : "border border-brand-cyan/15 bg-black/20 text-white/70 hover:text-white",
            ].join(" ")}
          >
            <Icon
              className={[
                "h-4 w-4",
                isActive ? "text-brand-primary" : "text-brand-cyan",
              ].join(" ")}
            />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

function FacetCard({ title, children }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <div className="relative rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
            {title}
          </p>
          <Filter className="h-4 w-4 text-brand-cyan opacity-70" />
        </div>
        {children}
      </div>
    </div>
  );
}

function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-[11px] font-semibold transition-all",
        active
          ? "border-brand-cyan/35 bg-brand-wine/60 text-white"
          : "border-brand-cyan/15 bg-black/20 text-white/70 hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function MetaLine({ left, right }) {
  return (
    <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
      <span className="inline-flex items-center gap-1.5">{left}</span>
      <span className="inline-flex items-center gap-1.5">{right}</span>
    </div>
  );
}

function TrailerPreviewInline({ trailer }) {
  if (!trailer?.hasTrailer) {
    return (
      <div className="relative grid h-full min-h-[210px] place-items-center rounded-2xl bg-black/20 ring-1 ring-white/10">
        <div className="text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-black/25 ring-1 ring-white/10">
            <span className="text-3xl text-white/25">×</span>
          </div>
          <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-white">
            No trailer
          </p>
          <p className="mt-1 text-xs text-white/55">Aucun trailer disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
      <div
        className="relative h-[210px] bg-cover bg-center"
        style={{ backgroundImage: `url(${trailer.thumb})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
          <Play className="h-3.5 w-3.5 text-brand-primary" />
          Trailer
        </div>

        <button className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-black/45 ring-1 ring-white/10 backdrop-blur">
            <Play className="h-6 w-6 text-brand-cyan" />
          </span>
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-brand-cyan" />
            {trailer.addedAt || "Ajouté récemment"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-cyan" />
            {trailer.duration}
          </span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------
// Result cards (per tab)
// ---------------------------
function SeriesResultMergedCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative grid overflow-hidden rounded-2xl bg-brand-dark/55 backdrop-blur lg:grid-cols-[150px_1fr_320px]">
        <div className="relative">
          <img
            src={item.poster}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
            {item.network}
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-extrabold uppercase tracking-wide text-white">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-white/65">{item.country}</p>
            </div>

            <button className="shrink-0 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Regarder
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.slice(0, 7).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-3 text-xs font-semibold text-brand-primary">
            {item.metaTop}
          </p>
          <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/70">
            {item.synopsis}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Ouvrir la fiche{" "}
              <ArrowRight className="h-4 w-4 text-brand-primary" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-black/15 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white">
              Ajouter à ma liste{" "}
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </button>
          </div>
        </div>

        <div className="p-5 lg:border-l lg:border-white/10">
          <TrailerPreviewInline trailer={item.trailer} />
          <button className="mt-3 w-full rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white">
            Voir tous les trailers
          </button>
        </div>
      </div>
    </div>
  );
}
function TrailerMosaicCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={1} />
      <GradientRing radiusClass="rounded-2xl" thickness={1} glow hoverGlow />

      <div className="relative overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
        {/* Thumbnail */}
        <div
          className="relative aspect-video bg-cover bg-center"
          style={{ backgroundImage: `url(${item.thumb})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Play button */}
          <button className="absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-black/45 backdrop-blur ring-1 ring-white/20 transition-all duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-brand-cyan" />
            </span>
          </button>

          {/* Duration */}
          <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            {item.duration}
          </div>
        </div>

        {/* Meta */}
        <div className="p-4">
          <p className=" text-xs uppercase tracking-wide text-white line-clamp-1">
            {item.title}
          </p>
          <p className="mt-1 text-xs text-white/60 line-clamp-1">
            {item.series} • {item.date}
          </p>
        </div>
      </div>
    </div>
  );
}

function NewsResultMergedCard({ item }) {
  // Ici la “fusion” est plus subtile : article + mini preview vidéo si dispo
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative grid overflow-hidden rounded-2xl bg-brand-dark/55 backdrop-blur lg:grid-cols-[160px_1fr_320px]">
        {/* image */}
        <div className="relative">
          <img
            src={item.img}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
            {item.category}
          </div>
        </div>

        {/* content */}
        <div className="p-5">
          <p className="text-sm font-extrabold uppercase tracking-wide text-white">
            {item.title}
          </p>
          <p className="mt-2 line-clamp-3 text-sm text-white/70">
            {item.excerpt}
          </p>

          <div className="mt-3 flex items-center justify-between text-[11px] text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-brand-cyan" /> {item.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-cyan" /> {item.readTime}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Lire l’article{" "}
              <ArrowRight className="h-4 w-4 text-brand-primary" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-black/15 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white">
              Partager <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </button>
          </div>
        </div>

        {/* mini media */}
        <div className="p-5 lg:border-l lg:border-white/10">
          {item.media?.hasVideo ? (
            <div className="relative overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
              <div
                className="relative h-[210px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.media.thumb})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <button className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-black/45 ring-1 ring-white/10 backdrop-blur">
                    <Play className="h-6 w-6 text-brand-cyan" />
                  </span>
                </button>
              </div>
              <div className="p-4 text-[11px] text-white/70 flex items-center justify-between">
                <span className="inline-flex items-center gap-2">
                  <Play className="h-4 w-4 text-brand-primary" /> Teaser
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-cyan" />{" "}
                  {item.media.duration}
                </span>
              </div>
            </div>
          ) : (
            <div className="grid min-h-[250px] place-items-center rounded-2xl bg-black/20 ring-1 ring-white/10 p-6 text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-black/25 ring-1 ring-white/10">
                  <BadgeCheck className="h-6 w-6 text-brand-cyan" />
                </div>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-white">
                  Article
                </p>
                <p className="mt-1 text-xs text-white/55">
                  Pas de média associé (c’est OK).
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StarResultCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative grid overflow-hidden rounded-2xl bg-brand-dark/55 backdrop-blur lg:grid-cols-[120px_1fr_320px]">
        {/* avatar */}
        <div className="p-5">
          <div className="h-20 w-20 overflow-hidden rounded-full ring-1 ring-brand-cyan/35 bg-black/25">
            <img src={item.img} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-white/55">
            {item.role}
          </p>
        </div>

        {/* content */}
        <div className="p-5">
          <p className="text-sm font-extrabold uppercase tracking-wide text-white">
            {item.name}
          </p>
          <p className="mt-2 text-sm text-white/70">
            Connu(e) pour :{" "}
            <span className="font-semibold text-white/80">{item.knownFor}</span>
          </p>
          <p className="mt-2 text-xs text-white/60">{item.credits} crédits</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Voir le profil{" "}
              <ArrowRight className="h-4 w-4 text-brand-primary" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-black/15 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white">
              Voir filmographie{" "}
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </button>
          </div>
        </div>

        {/* mini panel (top show / highlights) */}
        <div className="p-5 lg:border-l lg:border-white/10">
          <div className="relative overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Highlight
            </p>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-white">
              Top série
            </p>
            <p className="mt-1 text-sm text-white/70">{item.knownFor}</p>
            <button className="mt-4 w-full rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white">
              Ouvrir {item.knownFor}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DailyResultCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative overflow-hidden rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              SA-DAILY
            </p>
            <p className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
              {item.title}
            </p>
            <p className="mt-2 text-xs text-white/60">{item.date}</p>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-white/10">
            <Sparkles className="h-5 w-5 text-brand-cyan" />
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {item.bullets.map((b, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-brand-cyan/15 bg-black/20 px-4 py-3 text-sm text-white/80"
            >
              {b}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
            Lire le récap <ArrowRight className="h-4 w-4 text-brand-primary" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-black/15 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white">
            S’abonner <ChevronRight className="h-4 w-4 text-brand-cyan" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------
// Facets visibility per tab (simple rules)
// ---------------------------
function facetsForTab(tab) {
  if (tab === "trailers") return ["years", "networks", "genres", "tags"];
  if (tab === "news") return ["years", "tags", "genres"];
  if (tab === "stars") return ["nationalities", "tags"];
  if (tab === "daily") return ["years", "tags"];
  return ["status", "years", "networks", "tags", "genres", "nationalities"]; // series
}

// ---------------------------
// Page
// ---------------------------
export default function SearchResultsPage() {
  const [query, setQuery] = React.useState("arrow");
  const [tab, setTab] = React.useState("series");

  const [filters, setFilters] = React.useState({
    status: null,
    year: null,
    network: null,
    tag: null,
    genre: null,
    nationality: null,
  });

  const toggle = (k, v) =>
    setFilters((p) => ({ ...p, [k]: p[k] === v ? null : v }));

  // Demo filtering (query only)
  const q = query.toLowerCase().trim();
  const series = MOCK_SERIES.filter((x) =>
    (x.title + " " + x.synopsis).toLowerCase().includes(q),
  );
  const news = MOCK_NEWS.filter(
    (x) => (x.title + " " + x.excerpt).toLowerCase().includes(q) || !q,
  );
  const trailers = MOCK_TRAILERS.filter(
    (x) => (x.title + " " + x.series).toLowerCase().includes(q) || !q,
  );
  const stars = MOCK_STARS.filter(
    (x) => (x.name + " " + x.knownFor).toLowerCase().includes(q) || !q,
  );
  const daily = MOCK_DAILY.filter(
    (x) =>
      (x.title + " " + x.bullets.join(" ")).toLowerCase().includes(q) || !q,
  );

  const visibleFacets = facetsForTab(tab);

  const facetBlock = (key, title, values) => (
    <FacetCard title={title}>
      <div className="flex flex-wrap gap-2">
        {values.map((v) => (
          <Pill
            key={v}
            active={filters[key] === v}
            onClick={() => toggle(key, v)}
          >
            {v}
          </Pill>
        ))}
      </div>
    </FacetCard>
  );

  const reset = () =>
    setFilters({
      status: null,
      year: null,
      network: null,
      tag: null,
      genre: null,
      nationality: null,
    });

  const count =
    tab === "series"
      ? series.length
      : tab === "news"
        ? news.length
        : tab === "trailers"
          ? trailers.length
          : tab === "stars"
            ? stars.length
            : daily.length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header placeholder */}
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

      {/* Title */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              SERIEADDICT / RECHERCHE
            </p>
            <h1 className="mt-2 text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
              RÉSULTATS DE LA RECHERCHE :{" "}
              <span
                className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
                {query.toUpperCase() || "—"}
              </span>
            </h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 pb-24">
        {/* Top line: search + tabs */}
        <div className="grid gap-4 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="lg:pt-2">
            <NeonSearch
              value={query}
              onChange={setQuery}
              onSubmit={() => {}}
              placeholder="Rechercher..."
            />
          </div>
          <div className="lg:pt-2">
            <TabBar active={tab} onChange={setTab} />
          </div>
        </div>

        {/* Layout: Facets | Results */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          {/* Facets */}
          <aside className="space-y-4">
            {visibleFacets.includes("status") &&
              facetBlock("status", "STATUT", FACETS.status)}
            {visibleFacets.includes("years") &&
              facetBlock("year", "ANNÉE", FACETS.years)}
            {visibleFacets.includes("networks") &&
              facetBlock("network", "CHAÎNE", FACETS.networks)}
            {visibleFacets.includes("tags") &&
              facetBlock("tag", "TAG", FACETS.tags)}
            {visibleFacets.includes("genres") &&
              facetBlock("genre", "GENRE", FACETS.genres)}
            {visibleFacets.includes("nationalities") &&
              facetBlock("nationality", "NATIONALITÉ", FACETS.nationalities)}

            <div className="group relative overflow-hidden rounded-2xl">
              <GradientRing radiusClass="rounded-2xl" thickness={2} />
              <div className="relative rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white"
                >
                  Réinitialiser <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">
                <span className="font-extrabold text-white">{count}</span>{" "}
                résultats
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs text-white/70">
                <Sparkles className="h-4 w-4 text-brand-cyan" />
                Pertinence
              </div>
            </div>

            <div className="h-px w-full bg-brand-cyan/20" />

            {tab === "series" && (
              <div className="grid gap-4">
                {series.map((it) => (
                  <SeriesResultMergedCard key={it.id} item={it} />
                ))}
              </div>
            )}

            {tab === "trailers" && (
              <div className="grid gap-4 grid-cols-3">
                {trailers.map((it) => (
                  <TrailerMosaicCard key={it.id} item={it} />
                ))}
              </div>
            )}

            {tab === "news" && (
              <div className="grid gap-4">
                {news.map((it) => (
                  <NewsResultMergedCard key={it.id} item={it} />
                ))}
              </div>
            )}

            {tab === "stars" && (
              <div className="grid gap-4">
                {stars.map((it) => (
                  <StarResultCard key={it.id} item={it} />
                ))}
              </div>
            )}

            {tab === "daily" && (
              <div className="grid gap-4">
                {daily.map((it) => (
                  <DailyResultCard key={it.id} item={it} />
                ))}
              </div>
            )}

            {/* Pagination simple */}
            <div className="mt-6 flex items-center justify-end gap-2">
              <button className="grid h-9 w-9 place-items-center rounded-full border border-brand-cyan/15 bg-black/20 text-xs font-semibold text-white/70 hover:text-white">
                ‹
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-brand-cyan/35 bg-brand-wine/65 text-xs font-semibold text-white">
                1
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-brand-cyan/15 bg-black/20 text-xs font-semibold text-white/70 hover:text-white">
                2
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-brand-cyan/15 bg-black/20 text-xs font-semibold text-white/70 hover:text-white">
                ›
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimal */}
      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <div className="select-none text-2xl font-black tracking-widest">
            <span className="text-white">SERIE</span>
            <span
              className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
            >
              ADDICT
            </span>
          </div>
          <p className="mt-1 text-[11px] tracking-wide text-white/60">
            LE SPÉCIALISTE DES SÉRIES
          </p>
          <p className="mt-2 text-[10px] text-white/40">
            © 2010–2026 • Series Addict • Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
