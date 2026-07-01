import { useState } from "react";
import {
  Play,
  Heart,
  Bookmark,
  MessageCircle,
  Search,
  ChevronRight,
  Star,
  Flame,
  Sparkles,
  TrendingUp,
  Clock,
  Calendar,
  ArrowRight,
  Tv,
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
const BRAND_GRADIENT_TEXT = "bg-gradient-to-r from-brand-primary to-brand-cyan";

const HERO_BACKDROP = "/images/hero.png";

const CATEGORIES = [
  "Toutes",
  "Netflix",
  "HBO",
  "Apple TV+",
  "Prime Video",
  "Disney+",
  "Canal+",
];

const demoNews = [
  {
    id: 1,
    category: "Breaking",
    title: "UNE SAISON 5 POUR IT’S ALWAYS SUNNY IN PHILADELPHIA",
    excerpt:
      "La série a été renouvelée pour une nouvelle saison qui se composera de 26 épisodes !",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=60",
    date: "2 juil 2026",
    readTime: "3 min",
  },
  {
    id: 2,
    category: "Tendances",
    title: "STRANGER THINGS 5 : TOUT CE QU’IL FAUT SAVOIR",
    excerpt:
      "Dates, casting, rumeurs et premiers indices sur l’intrigue de la saison finale.",
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=800&q=60",
    date: "1 juil 2026",
    readTime: "5 min",
  },
  {
    id: 3,
    category: "Critique",
    title: "NOTRE AVIS SUR THE BEAST IN ME",
    excerpt:
      "Netflix dévoile un thriller psychologique haletant porté par une performance magistrale.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=60",
    date: "30 juin 2026",
    readTime: "4 min",
  },
];

const demoPostersMoment = [
  {
    id: 1,
    title: "All Her Fault",
    rating: 4.2,
    platform: "Netflix",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "The Man on the Inside",
    rating: 4.5,
    platform: "Apple TV+",
    img: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Derry Girls",
    rating: 4.7,
    platform: "Channel 4",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    title: "Stranger Things",
    rating: 4.8,
    platform: "Netflix",
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    title: "Pluribus",
    rating: 4.1,
    platform: "Prime Video",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    title: "The Beast in Me",
    rating: 4.6,
    platform: "Netflix",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    title: "Landman",
    rating: 4.3,
    platform: "Paramount+",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=60",
  },
];

const demoVideos = [
  {
    id: 1,
    title: "Stranger Things 5 : Teaser officiel",
    subtitle: "Netflix • 2:18",
    type: "Trailer",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "The Last of Us : Saison 2",
    subtitle: "HBO • 1:52",
    type: "Teaser",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Silo : Bande-annonce",
    subtitle: "Apple TV+ • 2:04",
    type: "Trailer",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Black Mirror : Saison 7",
    subtitle: "Netflix • 1:44",
    type: "Teaser",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80",
  },
];

const newReleases = {
  title: "THE BEAST IN ME",
  genres: "Thriller • Drame • Mini-série • Mystère",
  description:
    "Depuis la mort tragique de son jeune fils, l’auteure acclamée Aggie Wiggs s’est retirée de la vie publique. Elle trouve un sujet improbable pour un nouveau livre lorsque la maison voisine est achetée par Nile Sheldon, un magnat de l’immobilier autrefois suspecté de la disparition de sa femme.",
  release: "Diffusée le 16 novembre sur Netflix",
  backdrop: HERO_BACKDROP,
  side: [
    {
      title: "LANDMAN",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "THE BEAST IN ME",
      img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "PLURIBUS",
      img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=60",
    },
  ],
};

function IconBurger(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GradientRing({
  radiusClass = "rounded-[28px]",
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

function SectionHeader({ title, subtitle, rightLabel }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
            {title}
          </h2>
        </div>
        {subtitle ? (
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">
            {subtitle}
          </p>
        ) : null}
      </div>

      {rightLabel ? (
        <button className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-cyan transition-colors duration-300 hover:text-white">
          {rightLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
            <IconBurger className="h-5 w-5" />
            <span className="text-sm font-semibold">Menu</span>
          </button>
        </div>

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
          <button className="hidden rounded-full border border-brand-primary/50 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-cyan/50 hover:bg-white/[0.04] md:inline-flex">
            Devenez VIP
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
            <Search className="h-4 w-4" />
          </button>

          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <div className="relative w-full max-w-3xl">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan opacity-50 blur-[16px]" />
      <div className="relative rounded-full p-[1px]">
        <div
          className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-80`}
        />
        <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/85 px-5 py-3 backdrop-blur-xl">
          <Search className="h-5 w-5 text-brand-cyan" />
          <input
            placeholder="Rechercher une série, un acteur, un genre..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/45 focus:outline-none"
          />
          <div className="h-6 w-px bg-white/10" />
          <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
            Explorer
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterTabs({ current, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIES.map((tab) => {
        const active = current === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
              active
                ? "bg-white text-black"
                : "border border-white/10 bg-white/[0.03] text-white/75 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
            ].join(" ")}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <img
          src={HERO_BACKDROP}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-cyan/15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 md:pb-16 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              <Flame className="h-4 w-4 text-brand-primary" />À la une
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              Stranger Things
              <span
                className={`ml-3 ${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
                Saison 5
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Le phénomène mondial revient pour sa dernière saison. Découvrez
              les premières images, les nouveaux personnages et tout ce qu'il
              faut savoir avant le grand final.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
                4.8 / 5
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                Science-Fiction
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                8 épisodes
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                Netflix
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <SolidButton>
                <Play className="h-5 w-5 fill-current" />
                Voir la bande-annonce
              </SolidButton>
              <OutlineButton>
                <Heart className="h-5 w-5" />
                Suivre la série
              </OutlineButton>
            </div>

            <div className="mt-10">
              <SearchBar />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px]">
            <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
            <GradientRing
              radiusClass="rounded-[28px]"
              thickness={1.5}
              glow
              hoverGlow
            />

            <div className="relative overflow-hidden rounded-[28px] bg-brand-dark/55 backdrop-blur">
              <div className="absolute inset-0">
                <img
                  src={HERO_BACKDROP}
                  alt="Featured"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="relative flex min-h-[360px] flex-col justify-end p-6">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-brand-cyan" />
                  Le moment fort
                </div>

                <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                  Le retour tant attendu
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                  Plongez dans l'ultime chapitre de la série qui a marqué une
                  génération entière.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </button>

                  <div className="text-sm">
                    <p className="font-semibold text-white">Teaser officiel</p>
                    <p className="text-white/60">Trailer • 2:18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative overflow-hidden rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 ring-1 ring-white/10 backdrop-blur">
            <TrendingUp className="h-3.5 w-3.5 text-brand-cyan" />
            {item.category}
          </div>
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-3 text-xs text-white/50">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {item.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {item.readTime}
            </span>
          </div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-brand-cyan">
            {item.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
            {item.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-white/40">
              Par Charlotte
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan transition-colors duration-300 group-hover:text-white">
              Lire
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function PosterCard({ item, compact = false }) {
  return (
    <button
      className="group relative shrink-0 text-left"
      style={{ width: compact ? "160px" : "210px" }}
      onClick={() => (window.location.href = "/series-details")}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <GradientRing
          radiusClass="rounded-2xl"
          thickness={1.5}
          hoverGlow
          className="opacity-0 group-hover:opacity-100"
        />
        <div
          className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
          <span className="text-xs font-bold text-white/80">{item.rating}</span>
          <span className="ml-auto text-[10px] font-semibold text-white/40">
            {item.platform}
          </span>
        </div>
        <h4 className="line-clamp-1 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-brand-cyan">
          {item.title}
        </h4>
      </div>
    </button>
  );
}

function VideoThumb({ item }) {
  return (
    <button
      className="group relative shrink-0 text-left"
      style={{ width: "260px" }}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="aspect-video overflow-hidden rounded-2xl bg-white/5">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

        <div className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur">
          {item.type}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,.18)] transition-all duration-300 group-hover:scale-105">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h4 className="line-clamp-1 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-brand-cyan">
          {item.title}
        </h4>
        <p className="line-clamp-1 text-xs text-white/60">{item.subtitle}</p>
      </div>
    </button>
  );
}

function AvatarStack() {
  const avatars = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60",
  ];

  return (
    <div className="absolute left-5 top-6 z-20 flex items-center">
      <div className="flex -space-x-2">
        {avatars.map((a, i) => (
          <div
            key={i}
            className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-black/60"
          >
            <img src={a} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="-ml-2 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
        +20
      </div>
    </div>
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

function NewReleasesSection() {
  return (
    <section>
      <SectionHeader
        title="Les nouveautés séries"
        subtitle="Les séries fraîchement sorties à ne pas manquer cette semaine."
        rightLabel="Toutes les nouveautés"
      />

      <div className="group relative overflow-hidden rounded-[28px]">
        <GradientRing radiusClass="rounded-[28px]" thickness={2} />
        <GradientRing
          radiusClass="rounded-[28px]"
          thickness={2}
          glow
          hoverGlow
        />

        <div className="relative rounded-[28px] bg-[#011921]/60">
          <div className="absolute inset-0">
            <img
              src={newReleases.backdrop}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="relative grid min-h-[520px] grid-cols-1 lg:grid-cols-[1fr_270px]">
            <div className="relative px-6 pb-6 pt-6 lg:px-10 lg:pb-10 lg:pt-10">
              <AvatarStack />

              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-[320px]">
                <h3 className="text-3xl font-extrabold uppercase tracking-wide lg:text-4xl">
                  {newReleases.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-white/80">
                  {newReleases.genres}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
                  {newReleases.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-white/80">
                  {newReleases.release}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <OutlineButton>
                    <Play
                      className="h-5 w-5"
                      style={{ color: BRAND.primary }}
                    />
                    <span className="text-white/80">Regarder la série</span>
                  </OutlineButton>

                  <div className="flex items-center gap-3">
                    <IconButton title="Ajouter aux favoris">
                      <Heart
                        className="h-5 w-5"
                        style={{ color: BRAND.primary }}
                      />
                    </IconButton>
                    <IconButton title="Enregistrer">
                      <Bookmark
                        className="h-5 w-5"
                        style={{ color: BRAND.primary }}
                      />
                    </IconButton>
                    <IconButton title="Commenter">
                      <MessageCircle
                        className="h-5 w-5"
                        style={{ color: BRAND.primary }}
                      />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />
              <div className="relative flex h-full flex-col gap-5 p-6">
                {newReleases.side.map((s, idx) => (
                  <div key={idx} className="relative flex-1">
                    <div className="relative h-full overflow-hidden rounded-xl">
                      <GradientRing radiusClass="rounded-xl" thickness={2} />
                      <img
                        src={s.img}
                        alt={s.title}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <div className="group relative mt-10 overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={2} glow hoverGlow />
      <div className="relative rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-cyan" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Nouveau
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-white">
              Trouvez votre prochaine série préférée
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Utilisez notre outil de recommandation basé sur vos goûts et votre
              historique.
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
}

function AdPlaceholder({ label = "Espace publicitaire" }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-10 text-center">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>
      <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredPosters =
    activeCategory === "Toutes"
      ? demoPostersMoment
      : demoPostersMoment.filter(
          (p) =>
            p.platform.toLowerCase() === activeCategory.toLowerCase() ||
            (activeCategory === "HBO" && p.platform === "HBO"),
        );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <Topbar />
      <Hero />

      <main className="relative z-10 mx-auto max-w-7xl space-y-16 px-5 py-12">
        {/* Actus séries */}
        <section>
          <SectionHeader
            title="Actus séries"
            subtitle="L'actualité des séries en temps réel : renouvellements, trailers, casting et critiques."
            rightLabel="Toutes les actus"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {demoNews.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
        </section>

        {/* Séries du moment */}
        <section>
          <SectionHeader
            title="Les séries du moment"
            subtitle="Les séries les plus suivies et plébiscitées par la communauté cette semaine."
            rightLabel="Voir tout"
          />
          <div className="mb-6">
            <FilterTabs current={activeCategory} onChange={setActiveCategory} />
          </div>
          <div className="relative overflow-x-auto pb-2">
            <div className="flex gap-5">
              {filteredPosters.map((p) => (
                <PosterCard key={p.id} item={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Streaming */}
        <section>
          <SectionHeader
            title="Streaming séries"
            subtitle="Bandes-annonces, teasers et extraits des séries les plus attendues."
            rightLabel="Toutes les vidéos"
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="relative overflow-hidden rounded-[28px]">
              <div className="relative aspect-video overflow-hidden rounded-[28px]">
                <img
                  src={demoVideos[0].image}
                  alt={demoVideos[0].title}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 ring-1 ring-white/10 backdrop-blur">
                  <Tv className="h-3.5 w-3.5 text-brand-cyan" />
                  {demoVideos[0].type}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="grid h-16 w-16 place-items-center rounded-full bg-white text-black shadow-[0_0_40px_rgba(255,255,255,.2)] transition-transform duration-300 hover:scale-105">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
                    {demoVideos[0].title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    {demoVideos[0].subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-x-auto pb-2 lg:overflow-visible">
              <div className="flex gap-4 lg:flex-col">
                {demoVideos.slice(1).map((v) => (
                  <div key={v.id} className="shrink-0 lg:w-full">
                    <VideoThumb item={v} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publicité */}
        <section>
          <div className="grid gap-6 lg:grid-cols-2">
            <AdPlaceholder label="Espace publicitaire premium" />
            <AdPlaceholder label="Espace partenaire" />
          </div>
        </section>

        {/* Nouveautés */}
        <NewReleasesSection />

        {/* SA Daily */}
        <section>
          <SectionHeader
            title="SA Daily"
            subtitle="Le meilleur de l'actualité quotidienne des séries, sélectionné par la rédaction."
            rightLabel="Toutes les actus"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {demoNews.map((n) => (
              <NewsCard key={`daily-${n.id}`} item={n} />
            ))}
          </div>
        </section>

        {/* Best rated tag */}
        <section>
          <SectionHeader
            title={
              <>
                Les mieux notées avec le tag{" "}
                <span
                  className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
                >
                  Amour
                </span>
              </>
            }
            subtitle="Les séries romantiques les plus appréciées par les membres de Series Addict."
            rightLabel="Explorer le tag"
          />
          <div className="relative overflow-x-auto pb-2">
            <div className="flex gap-5">
              {demoPostersMoment.slice(0, 6).map((p) => (
                <PosterCard key={`best-${p.id}`} item={p} compact />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaBanner />

        <div className="h-px w-full bg-brand-cyan/25" />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/50 pb-10 pt-10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="select-none text-2xl font-black tracking-widest">
              <span className="text-white">SERIE</span>
              <span
                className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
                ADDICT
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
              <a href="/news" className="transition-colors hover:text-white">
                Actualités
              </a>
              <a href="/series" className="transition-colors hover:text-white">
                Séries
              </a>
              <a
                href="/collections"
                className="transition-colors hover:text-white"
              >
                Collections
              </a>
              <a
                href="/calendar"
                className="transition-colors hover:text-white"
              >
                Calendrier
              </a>
              <a href="/members" className="transition-colors hover:text-white">
                Communauté
              </a>
            </div>
            <p className="text-[11px] tracking-wide text-white/60">
              LE SPÉCIALISTE DES SÉRIES
            </p>
            <p className="text-[10px] text-white/40">
              © 2010–2026 • Series Addict • Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
