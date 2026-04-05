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
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

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
    meta: "S3 E8 - DIFFUSÉ LE 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E7 - DIFFUSÉ LE 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E6 - DIFFUSÉ LE 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E5 - DIFFUSÉ LE 26/12/2025",
  },
];

const UPCOMING_EPISODES = [
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E9",
    date: "DIFFUSION LE 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E10",
    date: "DIFFUSION LE 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E11",
    date: "DIFFUSION LE 26/12/2025",
  },
  {
    network: "HBO",
    title: "BUILD BACK BETTER",
    meta: "S3 E12",
    date: "DIFFUSION LE 26/12/2025",
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

const SERIES_COMMENTS = [
  {
    id: 1,
    author: "Charlotte",
    avatar: "C",
    time: "Il y a 2 jours",
    reaction: "4.8/5",
    content:
      "La série garde une énergie feuilletonnante rare. Même quand l'univers grandit, le coeur émotionnel du groupe reste lisible et c'est ce qui porte vraiment la fiche.",
    likes: 14,
  },
  {
    id: 2,
    author: "Nadia",
    avatar: "N",
    time: "Il y a 5 jours",
    reaction: "4.4/5",
    content:
      "Saison 4 très généreuse visuellement, avec une ambiance bien plus noire. J'attends surtout que la dernière salve revienne à quelque chose de plus resserré.",
    likes: 9,
  },
  {
    id: 3,
    author: "Luca",
    avatar: "L",
    time: "La semaine dernière",
    reaction: "4.6/5",
    content:
      "Le mélange pop culture, horreur et coming-of-age reste redoutable. Peu de séries grand public tiennent aussi bien la mythologie et l'attachement aux personnages.",
    likes: 17,
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

function GlassPanel({
  children,
  className = "",
  radius = "rounded-[28px]",
  bodyClassName = "",
}) {
  return (
    <div
      className={["group relative overflow-hidden", radius, className].join(
        " ",
      )}
    >
      <GradientRing radiusClass={radius} thickness={1.5} />
      <GradientRing radiusClass={radius} thickness={1.5} glow hoverGlow />
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

function GradientFrame({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] p-[1px] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(132,29,79,.38), rgba(30,108,134,.24), rgba(255,255,255,.06))",
      }}
    >
      <div className="rounded-[27px] border border-white/8 bg-[rgba(1,25,33,.68)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-white">
          {title}
        </h2>
      </div>

      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-primary transition hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 text-brand-cyan" />
        </button>
      ) : null}
    </div>
  );
}

function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01]",
        className,
      ].join(" ")}
      style={{ background: GRADIENT }}
    >
      {children}
    </button>
  );
}

function HeroScoreCard({ value, label, sublabel, accent = "primary" }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={[
          "grid h-13 w-13 place-items-center rounded-[16px] border text-[28px] font-black text-white shadow-[0_12px_24px_rgba(0,0,0,.16)]",
          accent === "cyan"
            ? "border-brand-cyan/45 bg-brand-cyan/50"
            : "border-brand-primary/45 bg-brand-primary/55",
        ].join(" ")}
      >
        {value}
      </div>
      <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
        {label}
      </p>
      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/82">
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
      <div className="absolute left-[46%] top-[30%] hidden h-[360px] w-[360px] -translate-x-1/2 lg:block">
        <div className="absolute inset-[16px] rounded-full border border-[#f7e69e]/35" />
        <div className="absolute left-[36%] top-[39%] h-5 w-5 rounded-full bg-[#d2b04a]/75 shadow-[0_0_12px_rgba(0,0,0,.08)]" />
        <div className="absolute left-[58%] top-[39%] h-5 w-5 rounded-full bg-[#d2b04a]/75 shadow-[0_0_12px_rgba(0,0,0,.08)]" />
        <div className="absolute left-[30%] top-[55%] h-[74px] w-[136px] rounded-full border-b-[12px] border-[#c4912a]/70 border-l-[10px] border-r-[10px] border-t-0 opacity-80" />
      </div>

      <div
        className="absolute right-[-5%] top-[16%] hidden h-[320px] w-[520px] rounded-[180px] bg-[radial-gradient(circle_at_28%_35%,rgba(242,220,182,.96),rgba(182,120,66,.92)_55%,rgba(88,48,18,.92)_100%)] shadow-[0_20px_70px_rgba(0,0,0,.24)] lg:block"
        style={{ transform: "rotate(-12deg)" }}
      />
      <div
        className="absolute right-[28%] top-[16%] hidden h-[18px] w-[330px] rounded-full bg-[#6d5633] shadow-[0_0_0_3px_rgba(209,186,144,.25)] lg:block"
        style={{ transform: "rotate(-52deg)" }}
      />
      <div
        className="absolute right-[34%] top-[42%] hidden h-[36px] w-[84px] rounded-full bg-[#efe0c8] ring-1 ring-[#c7aa80]/80 lg:block"
        style={{ transform: "rotate(-46deg)" }}
      />
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

function SectionBandTitle({ title, className = "" }) {
  return (
    <div className={className}>
      <h2 className="text-[26px] font-black uppercase tracking-[0.03em] text-white lg:text-[28px]">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-white/28" />
    </div>
  );
}

function SectionNavButton({ direction = "right" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button className="grid h-14 w-14 place-items-center rounded-full border border-brand-primary/45 bg-black/92 text-white/88 shadow-[0_0_0_1px_rgba(30,108,134,.18)] transition hover:border-brand-cyan/70 hover:text-brand-cyan">
      <Icon className="h-7 w-7" />
    </button>
  );
}

function SeasonFeaturePanel() {
  return (
    <div className="relative flex flex-col items-center pt-1 xl:px-4">
      <SectionBandTitle
        title={`${SEASON_FEATURE.totalSeasons} SAISONS - ${SEASON_FEATURE.totalEpisodes} ÉPISODES`}
        className="w-full"
      />

      <div className="mt-10 grid w-full items-center gap-5 xl:grid-cols-[72px_minmax(0,380px)_72px]">
        <div className="hidden justify-center xl:flex">
          <SectionNavButton direction="left" />
        </div>

        <div className="mx-auto w-full max-w-[380px]">
          <div className="relative overflow-hidden rounded-[18px] border border-brand-cyan/65 bg-black/10 shadow-[0_18px_48px_rgba(0,0,0,.26)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
            <div className="absolute left-4 top-4 rounded-md bg-[#7c1c1f] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
              Terminée
            </div>
            <div className="absolute right-4 top-6 rounded-[16px] border border-white/55 bg-white/[0.03] px-4 py-4 text-center text-white backdrop-blur-[2px]">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em]">
                {SEASON_FEATURE.badge}
              </div>
            </div>
            <img
              src={SEASON_FEATURE.image}
              alt={SEASON_FEATURE.currentSeasonLabel}
              className="aspect-[0.68] w-full object-cover"
            />
          </div>

          <p className="mt-5 text-center text-[20px] font-black uppercase tracking-[0.04em] text-white lg:text-[22px]">
            {SEASON_FEATURE.currentSeasonLabel}
          </p>

          <div className="mt-5 flex items-center justify-center gap-4 xl:hidden">
            <SectionNavButton direction="left" />
            <SectionNavButton direction="right" />
          </div>
        </div>

        <div className="hidden justify-center xl:flex">
          <SectionNavButton direction="right" />
        </div>
      </div>
    </div>
  );
}

function EpisodeRow({ item, upcoming = false }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/18 py-4">
      <div className="flex min-w-0 items-center gap-3.5">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-primary/38 text-[15px] font-medium text-white shadow-[0_0_0_1px_rgba(30,108,134,.12)]">
          {item.network}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[16px] font-black uppercase tracking-[0.015em] text-white lg:text-[17px]">
            {item.title}
          </p>
          <p className="mt-0.5 text-[13px] font-medium uppercase text-white/78 lg:text-[14px]">
            {item.meta}
          </p>
        </div>
      </div>

      {upcoming ? (
        <p className="shrink-0 text-right text-[13px] font-medium uppercase tracking-[0.02em] text-white/82 lg:text-[14px]">
          {item.date}
        </p>
      ) : (
        <div className="flex shrink-0 items-center gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-brand-primary/38 bg-[#112637] text-brand-primary shadow-[0_0_0_1px_rgba(30,108,134,.15)] transition hover:text-white">
            <Play className="ml-0.5 h-5 w-5" />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-white/38 text-white transition hover:border-brand-cyan hover:text-brand-cyan">
            <Eye className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

function EpisodeColumn({ title, items, upcoming = false }) {
  return (
    <div className="pt-1">
      <SectionBandTitle title={title} />
      <div className="mt-3">
        {items.map((item, index) => (
          <EpisodeRow
            key={`${item.title}-${item.meta}-${index}`}
            item={item}
            upcoming={upcoming}
          />
        ))}
      </div>
    </div>
  );
}

function CastRail() {
  return (
    <div className="pt-10">
      <SectionBandTitle title="CASTING DE STRANGER THINGS" />
      <div className="relative mt-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {CAST.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex items-center gap-4 xl:gap-5"
            >
              <div className="h-22 w-22 shrink-0 overflow-hidden rounded-full border border-brand-primary/40 shadow-[0_0_0_3px_rgba(30,108,134,.18)] lg:h-24 lg:w-24">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[16px] font-black uppercase leading-tight text-white lg:text-[17px]">
                  {member.name}
                </p>
                <p className="mt-1 text-[14px] uppercase text-white/76 lg:text-[15px]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 xl:block">
          <SectionNavButton direction="right" />
        </div>
      </div>
    </div>
  );
}

function AdvertisementBlock() {
  return (
    <div className="rounded-sm bg-white px-4 py-5 text-center text-3xl font-black uppercase tracking-[0.2em] text-black">
      PUB
    </div>
  );
}

function MediaCard({ item, tall = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-[24px] text-left"
    >
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div
          className={[
            "relative overflow-hidden rounded-[24px]",
            tall ? "aspect-[16/12]" : "aspect-[16/9]",
          ].join(" ")}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-black/45 ring-1 ring-white/10 backdrop-blur">
              <Play className="ml-0.5 h-4.5 w-4.5 fill-white text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-white">
              {item.title}
            </p>
            <p className="mt-1 text-[12px] text-white/60">{item.subtitle}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function NewsCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[24px] text-left"
    >
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} />
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} glow hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-4 backdrop-blur">
        <div className="overflow-hidden rounded-[18px]">
          <img
            src={item.image}
            alt={item.title}
            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="px-1 pb-1 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-primary">
            {item.meta}
          </p>
          <h3 className="mt-2 text-[15px] font-bold leading-6 text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] leading-6 text-white/60">
            {item.excerpt}
          </p>
        </div>
      </div>
    </button>
  );
}

function ShopCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[24px] text-left"
    >
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-4 backdrop-blur">
        <div className="overflow-hidden rounded-[18px] bg-black/20">
          <img
            src={item.image}
            alt={item.title}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>
        <div className="px-1 pb-1 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            {item.type}
          </p>
          <h3 className="mt-2 text-[14px] font-semibold text-white">
            {item.title}
          </h3>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-[14px] font-extrabold text-white">
              {item.price}
            </span>
            <span className="rounded-full border border-brand-cyan/20 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-cyan">
              série dérivée
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function SimilarSeriesCard({ item, onClick }) {
  return (
    <button onClick={onClick} className="group text-left">
      <div className="overflow-hidden rounded-[20px] border border-white/10 bg-black/20 shadow-[0_14px_30px_rgba(0,0,0,.18)]">
        <img
          src={item.image}
          alt={item.title}
          className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/75 group-hover:text-white">
        {item.title}
      </p>
    </button>
  );
}

function SeriesCommentItem({ comment }) {
  return (
    <GradientFrame>
      <div className="p-6">
        <div className="flex gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(132,29,79,.95), rgba(30,108,134,.95))",
            }}
          >
            {comment.avatar}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-white">{comment.author}</p>
              <span className="text-white/25">•</span>
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                {comment.time}
              </p>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-white/70">
                {comment.reaction}
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-white/72">
              {comment.content}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white">
                J’aime ({comment.likes})
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white">
                Répondre
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white">
                Signaler
              </button>
            </div>
          </div>
        </div>
      </div>
    </GradientFrame>
  );
}

function SeriesCommentsComposer() {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        {SERIES_COMMENTS.map((comment) => (
          <SeriesCommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <GradientFrame>
        <div className="p-6">
          <div className="rounded-[22px] border border-[#841D4F]/18 bg-[linear-gradient(90deg,rgba(132,29,79,.10),rgba(30,108,134,.04))] px-5 py-4 text-sm text-white/60">
            Rejoignez la discussion ou partagez votre avis sur cette série.
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/45">
                Pseudo
              </label>
              <input
                placeholder="Saisir un pseudo"
                className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/45">
                Email
              </label>
              <input
                placeholder="Vous pouvez aussi ajouter un email"
                className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03]">
            <div className="flex flex-wrap items-center gap-4 border-b border-white/10 px-4 py-3 text-sm text-white/55">
              <span className="font-semibold text-white/70">H1</span>
              <span>H2</span>
              <span>B</span>
              <span>I</span>
              <span>U</span>
              <span>•</span>
              <span>Liste</span>
            </div>

            <textarea
              rows="8"
              placeholder="Ajoutez votre commentaire ici..."
              className="w-full resize-none bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/40"
            />
          </div>

          <div className="mt-5 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex h-20 w-[300px] items-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white/60">
              Captcha
            </div>

            <PrimaryButton>
              <Send className="h-4 w-4" />
              Commenter
            </PrimaryButton>
          </div>
        </div>
      </GradientFrame>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/75 transition hover:bg-white/[0.06] hover:text-white">
          <Menu className="h-4 w-4" />
        </button>

        <button className="shrink-0">
          <img src={logo} alt="Series Addict" className="h-8 w-auto sm:h-10" />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
              Hello Charlotte
            </p>
            <p className="text-sm font-semibold text-white">Rédactrice</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
            alt="Charlotte"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
          />
        </div>
      </div>
    </header>
  );
}

export default function SeriesDetailsPage() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    if (!id) return;
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-[8%] h-[360px] w-[360px] rounded-full bg-brand-primary/15 blur-3xl" />
        <div className="absolute right-[-8%] top-[18%] h-[320px] w-[320px] rounded-full bg-brand-cyan/12 blur-3xl" />
        <div className="absolute bottom-[10%] left-[28%] h-[280px] w-[280px] rounded-full bg-brand-wine/14 blur-3xl" />
      </div>

      <main className="relative z-10">
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-[1450px] px-4 pb-8 pt-4 sm:px-5">
            <div className="relative overflow-hidden rounded-[32px] border border-brand-primary/30 shadow-[0_24px_80px_rgba(0,0,0,.25)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-primary/70" />
              <HeroBackdropArtwork />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.06)_0%,rgba(0,0,0,.12)_38%,rgba(0,0,0,.46)_82%,rgba(0,0,0,.76)_100%)]" />

              <div className="relative flex min-h-[700px] flex-col">
                <div className="grid flex-1 gap-10 px-6 py-9 sm:px-8 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-16 lg:px-14 lg:py-12">
                  <div className="lg:col-span-2 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-[720px]">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h1 className="text-[38px] font-black uppercase tracking-[0.045em] text-white lg:text-[46px]">
                          {SERIES.title}
                        </h1>
                        <span className="pt-1 text-[12px] font-bold uppercase tracking-[0.16em] text-white/78">
                          {SERIES.years}
                        </span>
                      </div>
                      <p className="mt-1 text-lg italic text-white/88">
                        ({SERIES.originalTitle})
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {[SERIES.platform, SERIES.runtime, SERIES.age].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-full bg-black/38 px-3.5 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.06)]"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="w-full max-w-[610px]">
                      <div className="flex flex-col gap-5 lg:items-end">
                        <HeroMeter />
                        <div className="flex flex-wrap justify-end gap-4">
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
                    </div>
                  </div>

                  <div className="flex flex-col gap-7">
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
                      <span className="relative flex items-center justify-center gap-3 rounded-full bg-black/78 px-6 py-4 text-lg font-medium text-white/88 backdrop-blur transition group-hover:bg-black/88">
                        <Play className="h-5 w-5 text-brand-primary" />
                        <span>Regarder la série</span>
                      </span>
                    </button>
                  </div>

                  <div className="flex items-end">
                    <div className="w-full max-w-[920px] pt-6 lg:pt-0">
                      <div className="flex flex-wrap items-center gap-4">
                        <HeroActionButton icon={Plus} />
                        <HeroActionButton icon={CalendarDays} accent="primary" />
                        <HeroActionButton icon={MessageCircle} accent="primary" />
                        <HeroActionButton icon={Eye} />
                        <HeroActionButton icon={Pencil} />
                        <HeroAudienceStack />
                      </div>

                      <p className="mt-7 text-[15px] font-extrabold uppercase tracking-[0.08em] text-white">
                        {SERIES.genres.join(" - ")}
                      </p>

                      <div className="mt-4 space-y-1.5 text-[16px] text-white/88 lg:text-[17px]">
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

                      <p className="mt-7 max-w-[980px] text-[15px] leading-7 text-white/90 lg:text-[16px]">
                        {SERIES.synopsis}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-[12px] font-medium text-white/84">
                        {HERO_HASHTAGS.map((tag) => (
                          <span key={tag}>{tag}</span>
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
          </div>
        </section>

        <section className="mx-auto max-w-[1450px] space-y-14 px-4 py-12 sm:px-5 lg:py-14">
          <div
            id="series-seasons"
            className="grid gap-x-14 gap-y-12 xl:grid-cols-[minmax(430px,.82fr)_1fr_1fr]"
          >
            <div className="xl:row-span-2">
              <SeasonFeaturePanel />
            </div>

            <EpisodeColumn
              title="Derniers épisodes diffusés"
              items={LAST_EPISODES}
            />

            <EpisodeColumn
              title="Prochains épisodes diffusés"
              items={UPCOMING_EPISODES}
              upcoming
            />

            <div className="xl:col-span-2">
              <CastRail />
            </div>
          </div>

          <AdvertisementBlock />

          <div
            id="series-trailers"
            className="grid gap-8 lg:grid-cols-[1.4fr_.8fr]"
          >
            <div>
              <SectionHeader
                title="Vidéos de la série"
                rightLabel="Tous les trailers"
                onRightClick={() => navigate("/trailers")}
              />
              <div className="grid gap-6 md:grid-cols-2">
                {VIDEOS.map((item) => (
                  <MediaCard
                    key={item.title}
                    item={item}
                    onClick={() => navigate("/trailers")}
                  />
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                title="Collections"
                rightLabel="Voir les collections"
                onRightClick={() => navigate("/collections")}
              />
              {COLLECTIONS.map((item) => (
                <MediaCard
                  key={item.title}
                  item={item}
                  tall
                  onClick={() => navigate("/collections")}
                />
              ))}
            </div>
          </div>

          <div id="series-news">
            <SectionHeader
              title="Dernières actus de la série"
              rightLabel="Toutes les actus"
              onRightClick={() => navigate("/news")}
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {NEWS.map((item) => (
                <NewsCard
                  key={item.title}
                  item={item}
                  onClick={() => navigate("/article")}
                />
              ))}
            </div>
          </div>

          <AdvertisementBlock />

          <div id="series-shop">
            <SectionHeader
              title="Shopping"
              rightLabel="Tout le shop"
              onRightClick={() => navigate("/shop")}
            />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {SHOP_ITEMS.map((item) => (
                <ShopCard
                  key={item.title}
                  item={item}
                  onClick={() => navigate("/shop")}
                />
              ))}
            </div>
          </div>

          <div id="series-similaires">
            <SectionHeader
              title="Séries similaires à la série"
              rightLabel="Toutes les recos"
              onRightClick={() => navigate("/series")}
            />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {SIMILAR_SERIES.map((item) => (
                <SimilarSeriesCard
                  key={item.title}
                  item={item}
                  onClick={() => navigate("/series")}
                />
              ))}
            </div>
          </div>

          <div id="series-avis">
            <SectionHeader
              title="Avis des seriesaddict"
              rightLabel="Tous les avis"
              onRightClick={() => navigate("/user-space")}
            />
            <SeriesCommentsComposer />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-4 py-10 sm:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <img src={logo} alt="Series Addict" className="h-10 w-auto opacity-90" />
        </div>
      </footer>
    </div>
  );
}
