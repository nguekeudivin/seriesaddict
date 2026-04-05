import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  Menu,
  MessageCircle,
  Pencil,
  Play,
  Plus,
  Send,
  Star,
} from "lucide-react";
import logo from "../assets/logo.png";
import mediaThumbA from "../assets/serieaddict-3.webp";
import mediaThumbB from "../assets/serieaddict-4.webp";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
  yellow: "#E8C303",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const PANEL_BG =
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]";

const SERIES = {
  title: "STRANGER THINGS",
  years: "2024 - 2025",
  originalTitle: "Stranger Things",
  platform: "HBO",
  age: "16+",
  runtime: "50 min",
  status: "Terminée",
  seasons: "4 saisons",
  episodes: "34 épisodes",
  duration: "48-76 min",
  publicScore: "9",
  myScore: "3",
  saScore: "7",
  votes: "3 456 votes",
  country: "Série Américaine(e)",
  creator: "Dan Erickson",
  genres: ["Science-fiction", "Drame", "Thriller", "Mystère"],
  synopsis:
    "Dans cette proposition rétro-futuriste, le rêve américain hérité des années 1950 se fissure après une catastrophe nucléaire. La série oppose l'idéal d'un monde meilleur à la dureté d'un territoire dévasté, avec une tension permanente entre survie, désir et désillusion.",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
};

const HERO_AUDIENCE = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
];

const HERO_HASHTAGS = [
  "#Conflit familial",
  "#Série culte",
  "#Los Angeles",
  "#Amitié",
  "#Psychologie",
  "#Mort",
  "#Homosexualité",
  "#Fantôme",
  "#Relation familiale",
  "#Humour noir",
  "#PDV amoureux",
  "#Californie",
  "#Sombre",
  "#HBO",
  "#Lieu de travail",
  "#Triangle amoureux",
];

const HERO_TABS = [
  { label: "Saisons", target: "series-seasons" },
  { label: "News", target: "series-news" },
  { label: "Community", target: "series-avis" },
  { label: "Avis", target: "series-avis" },
  { label: "Trailers", target: "series-trailers" },
  { label: "Shop", target: "series-shop" },
  { label: "Similaires", target: "series-similaires" },
  { label: "Regarder la série", action: "watch", active: true },
];

const SEASON_FEATURE = {
  totalSeasons: 2,
  totalEpisodes: 19,
  currentSeasonLabel: "Saison 1 - 10 épisodes",
  badge: "Season 1",
  image:
    "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80",
};

const LAST_EPISODES = [
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E8 - Diffusé le 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E7 - Diffusé le 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E6 - Diffusé le 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E5 - Diffusé le 26/12/2025",
  },
];

const UPCOMING_EPISODES = [
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E9",
    date: "Diffusion le 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E10",
    date: "Diffusion le 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E11",
    date: "Diffusion le 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E12",
    date: "Diffusion le 26/12/2025",
  },
];

const CAST = [
  {
    name: "BRIAN AUSTIN GREEN",
    role: "BRIAN AUSTIN GREEN",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "BRIAN AUSTIN GREEN",
    role: "BRIAN AUSTIN GREEN",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "BRIAN AUSTIN GREEN",
    role: "BRIAN AUSTIN GREEN",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "JEAN SMART",
    role: "THE GUY",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

const VIDEOS = [
  {
    title: "Teaser final season",
    subtitle: "Bande-annonce officielle",
    image: mediaThumbA,
  },
  {
    title: "Behind the scenes",
    subtitle: "Featurette cast & production",
    image: mediaThumbB,
  },
];

const COLLECTIONS = [
  {
    title: "Monstres et mondes parallèles",
    subtitle: "Collection éditoriale",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
  },
];

const NEWS = [
  {
    title: "La saison 5 boucle son tournage principal",
    excerpt:
      "Le planning se précise et plusieurs indices laissent penser à une communication plus intense dans les prochaines semaines.",
    meta: "Breaking · 4 min",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Les frères Duffer promettent une fin plus intime",
    excerpt:
      "La conclusion devrait recentrer l'émotion sur le groupe historique sans perdre l'ampleur du spectacle.",
    meta: "Interview · 5 min",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Pourquoi Hawkins reste un décor aussi fort",
    excerpt:
      "Entre nostalgie américaine et menace invisible, la mise en scène transforme la ville en personnage à part entière.",
    meta: "Décryptage · 6 min",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=80",
  },
];

const SHOP_ITEMS = [
  {
    title: "Poster collector Upside Down",
    type: "Poster collector",
    price: "24,90 €",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hoodie Hawkins High",
    type: "Textile",
    price: "49,90 €",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mug Hellfire Club",
    type: "Goodie",
    price: "16,90 €",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Carnet édition Vecna",
    type: "Papeterie",
    price: "12,90 €",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
  },
];

const SIMILAR_SERIES = [
  {
    title: "Dark",
    image:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "The OA",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Locke & Key",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Yellowjackets",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Bodies",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "From",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
  },
];

const REVIEWS = [
  {
    author: "Charlotte",
    score: "4.8",
    date: "il y a 2 jours",
    text: "La série garde une énergie feuilletonnante rare. Même quand l'univers grandit, le coeur émotionnel du groupe reste lisible et c'est ce qui porte vraiment la fiche.",
  },
  {
    author: "Nadia",
    score: "4.4",
    date: "il y a 5 jours",
    text: "Saison 4 très généreuse visuellement, avec une ambiance bien plus noire. J'attends surtout que la dernière salve revienne à quelque chose de plus resserré.",
  },
  {
    author: "Luca",
    score: "4.6",
    date: "la semaine dernière",
    text: "Le mélange pop culture, horreur et coming-of-age reste redoutable. Peu de séries grand public tiennent aussi bien la mythologie et l'attachement aux personnages.",
  },
];

function GradientRing({
  radiusClass = "rounded-[28px]",
  thickness = 1.25,
  glow = false,
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        radiusClass,
        glow ? "blur-md opacity-30" : "",
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

function Panel({
  children,
  className = "",
  innerClassName = "",
  radius = "rounded-[28px]",
}) {
  return (
    <div
      className={["group relative overflow-hidden", radius, className].join(
        " ",
      )}
    >
      <GradientRing radiusClass={radius} />
      <GradientRing radiusClass={radius} glow />
      <div
        className={[
          "relative border border-white/10 bg-brand-dark/65 backdrop-blur-xl",
          PANEL_BG,
          radius,
          innerClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow = "Section",
  title,
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-3">
          <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-brand-primary to-brand-cyan" />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/55">
            {eyebrow}
          </p>
        </div>
        <h2 className="text-2xl font-black tracking-[-0.03em] text-white md:text-[30px]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 md:text-[15px]">
            {description}
          </p>
        ) : null}
      </div>

      {actionLabel ? (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75 transition hover:border-brand-cyan/50 hover:text-white"
        >
          {actionLabel}
          <ChevronRight className="h-4 w-4 text-brand-cyan" />
        </button>
      ) : null}
    </div>
  );
}

function HeroScoreCard({ value, label, sublabel, accent = "primary" }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={[
          "grid h-14 w-14 place-items-center rounded-[18px] border text-3xl font-black text-white shadow-[0_14px_30px_rgba(0,0,0,.18)]",
          accent === "cyan"
            ? "border-brand-cyan/45 bg-brand-cyan/50"
            : "border-brand-primary/45 bg-brand-primary/55",
        ].join(" ")}
      >
        {value}
      </div>
      <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
        {label}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85">
        {sublabel}
      </p>
    </div>
  );
}

function HeroMeter() {
  return (
    <div className="w-full max-w-[460px]">
      <div className="rounded-full border border-[#2a7590]/70 bg-black/18 p-1 shadow-[inset_0_0_0_1px_rgba(0,0,0,.15)]">
        <div className="grid h-9 grid-cols-9 overflow-hidden rounded-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className={[
                "border-r border-black/15 last:border-r-0",
                index < 4
                  ? "bg-[#3a83ad]"
                  : index < 7
                    ? "bg-[#5f5c97]"
                    : "bg-[#9e2b72]",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroActionButton({ icon: Icon, accent = "cyan" }) {
  return (
    <button
      className={[
        "group relative grid h-12 w-12 place-items-center rounded-[14px] border bg-black/18 text-white/88 backdrop-blur transition hover:bg-black/28",
        accent === "primary"
          ? "border-brand-primary/45 shadow-[0_0_0_1px_rgba(132,29,79,.25)]"
          : "border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,.08)]",
      ].join(" ")}
    >
      <Icon
        className={[
          "h-5 w-5 transition-transform group-hover:scale-110",
          accent === "primary" ? "text-brand-primary" : "text-white/90",
        ].join(" ")}
      />
    </button>
  );
}

function HeroAudienceStack() {
  return (
    <div className="flex items-center -space-x-3">
      {HERO_AUDIENCE.map((avatar, index) => (
        <img
          key={avatar}
          src={avatar}
          alt={`Fan ${index + 1}`}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-black/30"
        />
      ))}
      <div className="grid h-12 w-12 place-items-center rounded-full bg-black/45 text-xs font-extrabold text-white ring-2 ring-black/30">
        +20
      </div>
    </div>
  );
}

function HeroBackdropArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#8d8518_0%,#b7aa23_16%,#e9dc43_48%,#978f1c_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.36)_0%,rgba(0,0,0,.08)_20%,rgba(0,0,0,.06)_72%,rgba(0,0,0,.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_54%,rgba(255,255,255,.22),transparent_16%),radial-gradient(circle_at_67%_23%,rgba(255,255,255,.14),transparent_18%)]" />
      <div className="absolute left-[46%] top-[30%] hidden h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-[#8f6015]/45 bg-[radial-gradient(circle_at_42%_34%,rgba(255,245,190,.95),rgba(234,206,97,.93)_44%,rgba(177,128,25,.88)_76%,rgba(112,78,12,.88)_100%)] shadow-[0_0_0_10px_rgba(255,239,174,.14),0_30px_80px_rgba(0,0,0,.18)] lg:block" />
    </div>
  );
}

function HeroTabsBar({ onNavigateSection, onWatch }) {
  return (
    <div className="border-t border-white/12 bg-black/88 px-5 sm:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
        {HERO_TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() =>
              tab.action === "watch" ? onWatch() : onNavigateSection(tab.target)
            }
            className={[
              "text-sm font-extrabold uppercase tracking-[0.08em] transition",
              tab.active
                ? "bg-gradient-to-r from-brand-primary to-brand-cyan bg-clip-text text-transparent"
                : "text-white hover:text-brand-cyan",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionNavButton({ direction = "right" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-black/65 text-white/85 transition hover:border-brand-cyan/50 hover:text-brand-cyan">
      <Icon className="h-5 w-5" />
    </button>
  );
}

function InfoChip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white/90">
      {children}
    </span>
  );
}

function MediaFrame({ image, alt, className = "aspect-[4/5]" }) {
  return (
    <div
      className={["relative overflow-hidden rounded-[20px]", className].join(
        " ",
      )}
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    </div>
  );
}

function SurfaceCard({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-[24px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function UnifiedSplitSection({
  left,
  right,
  leftClassName = "",
  rightClassName = "",
}) {
  return (
    <Panel innerClassName="p-6 md:p-7">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className={leftClassName}>{left}</div>
        <div className={rightClassName}>{right}</div>
      </div>
    </Panel>
  );
}

function SeasonFeaturePanel() {
  return (
    <Panel innerClassName="p-6 md:p-7 h-full">
      <SectionTitle
        eyebrow="Univers"
        title={`${SEASON_FEATURE.totalSeasons} saisons · ${SEASON_FEATURE.totalEpisodes} épisodes`}
        description="Une lecture plus claire de la saison mise en avant, avec un bloc plus respirant et aligné sur l’esthétique premium de la hero."
      />

      <div className="relative">
        <div className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block">
          <SectionNavButton direction="left" />
        </div>
        <div className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 xl:block">
          <SectionNavButton direction="right" />
        </div>

        <div className="mx-auto max-w-[380px]">
          <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-black/25 shadow-[0_24px_60px_rgba(0,0,0,.28)]">
            <div className="absolute left-4 top-4 z-10 rounded-full bg-brand-primary/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
              Terminée
            </div>
            <div className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              {SEASON_FEATURE.badge}
            </div>
            <img
              src={SEASON_FEATURE.image}
              alt={SEASON_FEATURE.currentSeasonLabel}
              className="aspect-[0.72] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>

          <div className="mt-5 text-center">
            <p className="text-2xl font-black tracking-[-0.03em] text-white">
              {SEASON_FEATURE.currentSeasonLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Une mise en avant plus lisible, avec plus d’espace et moins
              d’agressivité typographique.
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 xl:hidden">
            <SectionNavButton direction="left" />
            <SectionNavButton direction="right" />
          </div>
        </div>
      </div>
    </Panel>
  );
}

function EpisodeRow({ item, upcoming = false }) {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] border border-white/10 bg-black/18 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-white/12 bg-white/[0.04] text-xs font-extrabold uppercase tracking-[0.08em] text-white/92">
          {item.network}
        </div>
        <div className="min-w-0">
          <p className="truncate text-lg font-bold tracking-[-0.02em] text-white md:text-[19px]">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-white/65 md:text-[15px]">
            {item.meta}
          </p>
          {upcoming ? (
            <p className="mt-1 text-sm font-medium text-brand-cyan">
              {item.date}
            </p>
          ) : null}
        </div>
      </div>

      {upcoming ? (
        <button className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white/85 transition hover:border-brand-cyan/45 hover:text-white">
          Me rappeler
        </button>
      ) : (
        <div className="flex shrink-0 items-center gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-[14px] border border-brand-primary/35 bg-brand-primary/10 text-brand-primary transition hover:text-white">
            <Play className="ml-0.5 h-5 w-5" />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/12 bg-white/[0.04] text-white/85 transition hover:border-brand-cyan/45 hover:text-brand-cyan">
            <Eye className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

function EpisodeColumn({ eyebrow, title, items, upcoming = false }) {
  return (
    <Panel innerClassName="p-6 md:p-7 h-full">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="space-y-3">
        {items.map((item, index) => (
          <EpisodeRow
            key={`${item.title}-${item.meta}-${index}`}
            item={item}
            upcoming={upcoming}
          />
        ))}
      </div>
    </Panel>
  );
}

function CastRail() {
  return (
    <Panel innerClassName="p-6 md:p-7">
      <SectionTitle
        eyebrow="Casting"
        title="Les visages clés de Stranger Things"
        actionLabel="Tout le casting"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {CAST.map((member, index) => (
          <SurfaceCard
            key={`${member.name}-${index}`}
            className="flex items-center gap-4 p-4"
          >
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/12">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-bold text-white">
                {member.name}
              </p>
              <p className="mt-1 text-sm text-white/58">{member.role}</p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </Panel>
  );
}

function VideoCard({ item }) {
  return (
    <div className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1">
      <MediaFrame
        image={item.image}
        alt={item.title}
        className="aspect-[16/10]"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-bold tracking-[-0.02em] text-white">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-white/62">{item.subtitle}</p>
        </div>
        <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-primary/35 bg-brand-primary/10 text-brand-primary transition hover:text-white">
          <Play className="ml-0.5 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function CollectionHero({ item }) {
  return (
    <div className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
      <MediaFrame
        image={item.image}
        alt={item.title}
        className="aspect-[16/9]"
      />
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/45">
            Collection
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-white/62">{item.subtitle}</p>
        </div>
        <button className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-brand-cyan/45 hover:text-white">
          Explorer
        </button>
      </div>
    </div>
  );
}

function NewsCard({ item }) {
  return (
    <div className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1">
      <MediaFrame
        image={item.image}
        alt={item.title}
        className="aspect-[4/3]"
      />
      <div className="mt-4">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-cyan">
          {item.meta}
        </p>
        <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/65">{item.excerpt}</p>
      </div>
    </div>
  );
}

function ReviewCard({ item }) {
  return (
    <SurfaceCard className="h-full p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-bold text-white">{item.author}</p>
          <p className="mt-1 text-sm text-white/52">{item.date}</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/35 bg-brand-primary/10 px-3 py-1.5 text-sm font-bold text-white">
          <Star className="h-4 w-4 text-brand-cyan" />
          {item.score}
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-white/72">{item.text}</p>
    </SurfaceCard>
  );
}

function SimilarCard({ item }) {
  return (
    <div className="group rounded-[22px] border border-white/10 bg-white/[0.035] p-3 transition hover:-translate-y-1">
      <MediaFrame
        image={item.image}
        alt={item.title}
        className="aspect-[3/4]"
      />
      <p className="mt-3 text-base font-bold text-white">{item.title}</p>
    </div>
  );
}

function ShopCard({ item }) {
  return (
    <div className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1">
      <MediaFrame
        image={item.image}
        alt={item.title}
        className="aspect-[4/5]"
      />
      <div className="mt-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/45">
          {item.type}
        </p>
        <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-base font-black text-white">{item.price}</p>
          <button className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-brand-cyan/45 hover:text-white">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

function AdPanel() {
  return (
    <Panel innerClassName="p-6 md:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/45">
            Sponsorisé
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">
            Offre partenaire intégrée au design
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
            Cette zone remplace le bloc publicitaire trop brutal visuellement.
            Elle garde sa fonction business, mais adopte désormais le même
            système de panel, de contraste et de densité que le reste de la
            page.
          </p>
        </div>
        <button
          className="rounded-full px-5 py-3 text-sm font-semibold text-white"
          style={{ background: GRADIENT }}
        >
          Découvrir l’offre
        </button>
      </div>
    </Panel>
  );
}

function Header({ navigate }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#021018]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1450px] items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/85 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {[SERIES.platform, SERIES.runtime, SERIES.age].map((item) => (
            <InfoChip key={item}>{item}</InfoChip>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/85 transition hover:border-brand-cyan/45 hover:text-brand-cyan">
            <Send className="h-5 w-5" />
          </button>
          <button
            onClick={() => navigate("/trailers")}
            className="hidden rounded-full px-5 py-3 text-sm font-semibold text-white sm:inline-flex"
            style={{ background: GRADIENT }}
          >
            Voir les trailers
          </button>
        </div>
      </div>
    </header>
  );
}

export default function SeriesShowcaseRefactor() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#010e15] text-white">
      <Header navigate={navigate} />

      <main className="pb-20">
        <section className="px-4 pt-4 sm:px-5">
          <div className="mx-auto max-w-[1450px] overflow-hidden rounded-[34px] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,.45)]">
            <div className="relative">
              <HeroBackdropArtwork />
              <div className="relative px-5 py-8 sm:px-7 md:px-8 lg:px-10 lg:py-10">
                <div className="grid gap-8 xl:grid-cols-[1.2fr_320px_1fr] xl:items-end">
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/78">
                      Série premium · Fiche complète
                    </p>
                    <div className="mt-4 flex flex-wrap items-end gap-4">
                      <h1 className="text-4xl font-black leading-none tracking-[-0.05em] text-white lg:text-[58px]">
                        {SERIES.title}
                      </h1>
                      <span className="pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white/80">
                        {SERIES.years}
                      </span>
                    </div>
                    <p className="mt-2 text-xl italic text-white/92">
                      ({SERIES.originalTitle})
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
                      {[SERIES.platform, SERIES.runtime, SERIES.age].map(
                        (item) => (
                          <InfoChip key={item}>{item}</InfoChip>
                        ),
                      )}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 lg:hidden">
                      <HeroScoreCard
                        value={SERIES.publicScore}
                        label="Sur"
                        sublabel={SERIES.votes}
                      />
                      <HeroScoreCard
                        value={SERIES.myScore}
                        label="Ma note"
                        sublabel=""
                        accent="cyan"
                      />
                      <HeroScoreCard
                        value={SERIES.saScore}
                        label="Note SA"
                        sublabel=""
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="relative mx-auto w-full max-w-[310px] overflow-hidden rounded-[22px] border border-brand-cyan/65 bg-black/20 shadow-[0_25px_70px_rgba(0,0,0,.45)]">
                      <span className="absolute left-4 top-4 z-10 rounded-md bg-[#8F1B1B] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_18px_rgba(0,0,0,.22)]">
                        {SERIES.status}
                      </span>
                      <img
                        src={SERIES.poster}
                        alt={SERIES.title}
                        className="aspect-[2/3] w-full object-cover"
                      />
                    </div>

                    <button
                      onClick={() => navigate("/trailers")}
                      className="group relative mx-auto w-full max-w-[310px] rounded-full p-[1.5px]"
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
                      <span className="relative flex items-center justify-center gap-3 rounded-full bg-black/78 px-6 py-4 text-2xl font-medium text-white/88 backdrop-blur transition group-hover:bg-black/88">
                        <Play className="h-6 w-6 text-brand-primary" />
                        <span>Regarder la série</span>
                      </span>
                    </button>
                  </div>

                  <div className="w-full max-w-[900px] pt-6 xl:pt-0">
                    <div className="flex flex-col gap-5 lg:items-end">
                      <HeroMeter />
                      <div className="hidden flex-wrap justify-end gap-4 lg:flex">
                        <HeroScoreCard
                          value={SERIES.publicScore}
                          label="Sur"
                          sublabel={SERIES.votes}
                        />
                        <HeroScoreCard
                          value={SERIES.myScore}
                          label="Ma note"
                          sublabel=""
                          accent="cyan"
                        />
                        <HeroScoreCard
                          value={SERIES.saScore}
                          label="Note SA"
                          sublabel=""
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <HeroActionButton icon={Plus} />
                      <HeroActionButton icon={CalendarDays} accent="primary" />
                      <HeroActionButton icon={MessageCircle} accent="primary" />
                      <HeroActionButton icon={Eye} />
                      <HeroActionButton icon={Pencil} />
                      <HeroAudienceStack />
                    </div>

                    <p className="mt-6 text-lg font-extrabold uppercase tracking-[0.08em] text-white">
                      {SERIES.genres.join(" · ")}
                    </p>

                    <div className="mt-4 space-y-2 text-lg text-white/92">
                      <p>
                        <span className="font-semibold">{SERIES.country}</span>
                      </p>
                      <p>
                        <span className="font-semibold">Créée par :</span>{" "}
                        <span className="italic text-white/85">
                          {SERIES.creator}
                        </span>
                      </p>
                    </div>

                    <p className="mt-6 max-w-[980px] text-[18px] leading-8 text-white/92">
                      {SERIES.synopsis}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2.5 text-sm font-medium text-white/88">
                      {HERO_HASHTAGS.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <HeroTabsBar
                onNavigateSection={scrollToSection}
                onWatch={() => navigate("/trailers")}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1450px] space-y-8 px-4 py-8 sm:px-5">
          <div id="series-seasons" className="space-y-8">
            <UnifiedSplitSection
              left={
                <div>
                  <SectionTitle
                    eyebrow="Univers"
                    title={`${SEASON_FEATURE.totalSeasons} saisons · ${SEASON_FEATURE.totalEpisodes} épisodes`}
                    description="Une lecture plus claire de la saison mise en avant, avec un bloc plus respirant et aligné sur l’esthétique premium de la hero."
                  />
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block">
                      <SectionNavButton direction="left" />
                    </div>
                    <div className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 xl:block">
                      <SectionNavButton direction="right" />
                    </div>

                    <div className="mx-auto max-w-[380px]">
                      <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-black/25 shadow-[0_24px_60px_rgba(0,0,0,.28)]">
                        <div className="absolute left-4 top-4 z-10 rounded-full bg-brand-primary/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
                          Terminée
                        </div>
                        <div className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                          {SEASON_FEATURE.badge}
                        </div>
                        <img
                          src={SEASON_FEATURE.image}
                          alt={SEASON_FEATURE.currentSeasonLabel}
                          className="aspect-[0.72] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      </div>

                      <div className="mt-5 text-center">
                        <p className="text-2xl font-black tracking-[-0.03em] text-white">
                          {SEASON_FEATURE.currentSeasonLabel}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          Une mise en avant plus lisible, avec plus d’espace et
                          moins d’agressivité typographique.
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-3 xl:hidden">
                        <SectionNavButton direction="left" />
                        <SectionNavButton direction="right" />
                      </div>
                    </div>
                  </div>
                </div>
              }
              right={
                <div className="space-y-6">
                  <div>
                    <SectionTitle
                      eyebrow="Diffusion"
                      title="Derniers épisodes diffusés"
                    />
                    <div className="space-y-3">
                      {LAST_EPISODES.map((item, index) => (
                        <EpisodeRow
                          key={`${item.title}-${item.meta}-${index}`}
                          item={item}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <SectionTitle
                      eyebrow="À venir"
                      title="Prochains épisodes diffusés"
                    />
                    <div className="space-y-3">
                      {UPCOMING_EPISODES.map((item, index) => (
                        <EpisodeRow
                          key={`${item.title}-${item.meta}-${index}`}
                          item={item}
                          upcoming
                        />
                      ))}
                    </div>
                  </div>
                </div>
              }
            />

            <Panel innerClassName="p-6 md:p-7">
              <SectionTitle
                eyebrow="Casting"
                title="Les visages clés de Stranger Things"
                actionLabel="Tout le casting"
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {CAST.map((member, index) => (
                  <SurfaceCard
                    key={`${member.name}-${index}`}
                    className="flex items-center gap-4 p-4"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/12">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-base font-bold text-white">
                        {member.name}
                      </p>
                      <p className="mt-1 text-sm text-white/58">
                        {member.role}
                      </p>
                    </div>
                  </SurfaceCard>
                ))}
              </div>
            </Panel>
          </div>

          <div id="series-trailers">
            <UnifiedSplitSection
              left={
                <div>
                  <SectionTitle
                    eyebrow="Média"
                    title="Trailers et vidéos"
                    description="Même système visuel, mais moins de découpage inutile et une lecture plus fluide."
                    actionLabel="Voir tout"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    {VIDEOS.map((video) => (
                      <VideoCard key={video.title} item={video} />
                    ))}
                  </div>
                </div>
              }
              right={
                <div>
                  <SectionTitle
                    eyebrow="Édito"
                    title="Collection recommandée"
                    description="Un bloc éditorial plus large, pensé comme un chapitre premium et non comme un simple widget latéral."
                  />
                  <CollectionHero item={COLLECTIONS[0]} />
                </div>
              }
            />
          </div>

          <div id="series-news">
            <Panel innerClassName="p-6 md:p-7">
              <SectionTitle
                eyebrow="Actualités"
                title="Dernières news autour de la série"
                description="Les trois news adoptent maintenant exactement le même gabarit pour renforcer la cohérence et le rythme visuel."
                actionLabel="Toutes les news"
              />
              <div className="grid gap-4 md:grid-cols-3">
                {NEWS.map((item) => (
                  <NewsCard key={item.title} item={item} />
                ))}
              </div>
            </Panel>
          </div>

          <div id="series-similaires">
            <UnifiedSplitSection
              left={
                <div>
                  <SectionTitle
                    eyebrow="Découverte"
                    title="Séries similaires à explorer"
                    description="Une galerie plus propre, cohérente avec les autres cartes de la page."
                    actionLabel="Voir plus"
                  />
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SIMILAR_SERIES.slice(0, 6).map((item) => (
                      <SimilarCard key={item.title} item={item} />
                    ))}
                  </div>
                </div>
              }
              right={
                <div className="h-full">
                  <AdPanel />
                </div>
              }
            />
          </div>

          <div id="series-shop">
            <Panel innerClassName="p-6 md:p-7">
              <SectionTitle
                eyebrow="Shop"
                title="Objets et produits dérivés"
                description="La section commerce garde son rôle, mais s’intègre désormais naturellement à l’expérience éditoriale."
                actionLabel="Toute la boutique"
              />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {SHOP_ITEMS.map((item) => (
                  <ShopCard key={item.title} item={item} />
                ))}
              </div>
            </Panel>
          </div>

          <div id="series-avis">
            <Panel innerClassName="p-6 md:p-7">
              <SectionTitle
                eyebrow="Communauté"
                title="Ce que les membres en pensent"
                description="Les avis passent à la fin du parcours pour respecter une lecture plus naturelle de la page."
                actionLabel="Tous les avis"
              />
              <div className="grid gap-4 md:grid-cols-3">
                {REVIEWS.map((review) => (
                  <ReviewCard key={review.author} item={review} />
                ))}
              </div>
            </Panel>
          </div>
        </section>
      </main>
    </div>
  );
}
