import React, { useMemo, useState } from "react";
import {
  Search,
  Play,
  Heart,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Flame,
  Layers3,
  Grid2x2,
  ArrowRight,
} from "lucide-react";

// ============================================================
// Brand tokens
// ============================================================
const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
  black: "#000000",
};

const GRADIENT =
  "linear-gradient(90deg,var(--color-brand-primary),var(--color-brand-cyan))";
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";
const BRAND_GRADIENT_TEXT = "bg-gradient-to-r from-brand-primary to-brand-cyan";

// ============================================================
// Demo data
// ============================================================
const collectionGroups = [
  {
    id: "spotlight",
    title: "Séries post-apocalyptiques",
    count: 18,
    description:
      "Des mondes en ruine, des sociétés brisées, des survivants en tension permanente.",
    cover:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
    logoTag: "Collection Spotlight",
    items: [
      {
        id: 1,
        title: "Fallout",
        subtitle: "Univers rétro-futuriste",
        duration: "2:18",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 2,
        title: "The Last of Us",
        subtitle: "Survie • Drame",
        duration: "1:52",
        type: "Teaser",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 3,
        title: "Silo",
        subtitle: "Mystère • Sci-fi",
        duration: "2:04",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 4,
        title: "Station Eleven",
        subtitle: "Poétique • Dystopie",
        duration: "1:44",
        type: "Clip",
        image:
          "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "gaming",
    title: "Séries adaptées de jeux vidéo",
    count: 8,
    description:
      "Quand les licences cultes prennent vie à l’écran avec un vrai sens du spectacle.",
    cover:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=80",
    logoTag: "Adaptations",
    items: [
      {
        id: 11,
        title: "Arcane",
        subtitle: "Animation • Action",
        duration: "2:21",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 12,
        title: "Halo",
        subtitle: "Sci-fi • Guerre",
        duration: "2:02",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 13,
        title: "Twisted Metal",
        subtitle: "Road trip • Chaos",
        duration: "1:41",
        type: "Teaser",
        image:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 14,
        title: "The Witcher",
        subtitle: "Fantasy • Monstres",
        duration: "2:30",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "dystopia",
    title: "Séries dystopie",
    count: 12,
    description:
      "Des futurs déformés, autoritaires ou désenchantés, où chaque système étouffe l’humain.",
    cover:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1600&q=80",
    logoTag: "Trending",
    items: [
      {
        id: 21,
        title: "Severance",
        subtitle: "Travail • Aliénation",
        duration: "2:07",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 22,
        title: "Black Mirror",
        subtitle: "Tech • Anthologie",
        duration: "1:34",
        type: "Clip",
        image:
          "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 23,
        title: "3%",
        subtitle: "Sélection • Brésil",
        duration: "2:01",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 24,
        title: "Snowpiercer",
        subtitle: "Train • Classes",
        duration: "2:11",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "power",
    title: "Séries Power",
    count: 4,
    description:
      "Pouvoir, clans, stratégie et affrontements dans des univers intenses.",
    cover:
      "https://images.unsplash.com/photo-1542204625-de293a2f8ff8?auto=format&fit=crop&w=1600&q=80",
    logoTag: "Editorial",
    items: [
      {
        id: 31,
        title: "Power",
        subtitle: "Crime • Empire",
        duration: "2:15",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 32,
        title: "Ghost",
        subtitle: "Spin-off",
        duration: "1:47",
        type: "Teaser",
        image:
          "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 33,
        title: "Force",
        subtitle: "Chicago • Tension",
        duration: "1:58",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "lgbtqia",
    title: "Séries LGBTQIA+",
    count: 51,
    description:
      "Des récits forts, intimes et vibrants portés par des personnages mémorables.",
    cover:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1600&q=80",
    logoTag: "Community Picks",
    items: [
      {
        id: 41,
        title: "Heartstopper",
        subtitle: "Feel good • UK",
        duration: "1:36",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 42,
        title: "Pose",
        subtitle: "Culture ballroom",
        duration: "2:08",
        type: "Clip",
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 43,
        title: "Young Royals",
        subtitle: "Romance • Drame",
        duration: "1:52",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 44,
        title: "Fellow Travelers",
        subtitle: "Historique • Politique",
        duration: "2:12",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    id: "romance",
    title: "Séries Bridgerton",
    count: 2,
    description:
      "Des romances stylisées, de l’élégance visuelle et du drame social à l’anglaise.",
    cover:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
    logoTag: "Romance Focus",
    items: [
      {
        id: 51,
        title: "Bridgerton",
        subtitle: "Romance • Costume",
        duration: "2:03",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 52,
        title: "Queen Charlotte",
        subtitle: "Prequel",
        duration: "1:51",
        type: "Trailer",
        image:
          "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

const categoryTabs = [
  "Toutes",
  "Tendances",
  "Sci-fi",
  "Romance",
  "Action",
  "Adaptations",
  "Édito",
];

// ============================================================
// Helpers
// ============================================================
function GradientRing({
  radiusClass = "rounded-[28px]",
  thickness = 1.5,
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
        <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-cyan transition-colors duration-300 hover:text-white">
          {rightLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

// ============================================================
// Small components
// ============================================================
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

function SearchBar({ value, onChange }) {
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
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Rechercher une collection, un univers, une ambiance..."
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
      {categoryTabs.map((tab) => {
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

function HeroSpotlight({ collection }) {
  if (!collection) return null;

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <img
          src={collection.cover}
          alt={collection.title}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-cyan" />
              {collection.logoTag}
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              Collections
              <span
                className={`ml-3 ${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
                séries
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Explore des univers éditoriaux conçus pour faciliter la
              découverte, suivre tes envies et retrouver rapidement les séries
              qui partagent une même ambiance, un même genre ou une même
              identité.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                {collection.count} séries
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                Focus éditorial
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                Découverte immersive
              </span>
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
                  src={collection.items[0]?.image || collection.cover}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="relative flex min-h-[360px] flex-col justify-end p-6">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur">
                  <Flame className="h-4 w-4 text-brand-primary" />
                  En vedette
                </div>

                <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                  {collection.title}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                  {collection.description}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </button>

                  <div className="text-sm">
                    <p className="font-semibold text-white">
                      {collection.items[0]?.title}
                    </p>
                    <p className="text-white/60">
                      {collection.items[0]?.type} •{" "}
                      {collection.items[0]?.duration}
                    </p>
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

function CollectionPreviewThumb({ item }) {
  return (
    <button className="group relative w-[240px] shrink-0 text-left">
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

        <div className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur">
          {item.duration}
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

function CollectionBand({ collection }) {
  return (
    <section className="group relative overflow-hidden rounded-[30px] border border-white/6 bg-white/[0.025] p-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative grid gap-6 xl:grid-cols-[340px_1fr]">
        <div className="relative overflow-hidden rounded-[26px]">
          <GradientRing radiusClass="rounded-[26px]" thickness={1.5} />
          <div className="relative min-h-[250px] overflow-hidden rounded-[26px] bg-brand-dark/60">
            <img
              src={collection.cover}
              alt={collection.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

            <div className="relative flex h-full min-h-[250px] flex-col justify-end p-5">
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/75 ring-1 ring-white/10 backdrop-blur">
                <Layers3 className="h-4 w-4 text-brand-cyan" />
                {collection.logoTag}
              </div>

              <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {collection.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
                {collection.description}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10">
                  {collection.count} séries
                </span>

                <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan transition-colors duration-300 hover:text-white">
                  Ouvrir
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="mb-4 flex items-center justify-between">
            {/* <div className="hidden items-center gap-2 md:flex">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div> */}
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-4">
              {collection.items.map((item) => (
                <CollectionPreviewThumb key={item.id} item={item} />
              ))}

              <button className="group/more relative flex w-[240px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-cyan/10 opacity-0 transition-opacity duration-300 group-hover/more:opacity-100" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Explorer plus
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">
                    +{Math.max(collection.count - collection.items.length, 0)}{" "}
                    séries
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Découvrir toute la collection
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionMiniCard({ collection }) {
  return (
    <button className="group relative overflow-hidden rounded-[26px] text-left">
      <GradientRing radiusClass="rounded-[26px]" thickness={1.2} />
      <GradientRing
        radiusClass="rounded-[26px]"
        thickness={1.2}
        glow
        hoverGlow
      />

      <div className="relative h-full overflow-hidden rounded-[26px] bg-brand-dark/55 backdrop-blur">
        <div className="absolute inset-0">
          <img
            src={collection.cover}
            alt={collection.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        </div>

        <div className="relative flex min-h-[250px] flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-black/45 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/75 ring-1 ring-white/10 backdrop-blur">
              {collection.logoTag}
            </span>

            <button className="grid h-10 w-10 place-items-center rounded-full bg-black/35 text-white/90 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:scale-105">
              <Heart className="h-4 w-4" />
            </button>
          </div>

          <div>
            <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
              {collection.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-white/65">
              {collection.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                {collection.count} séries
              </span>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-colors duration-300 group-hover:text-white">
                Explorer
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

// ============================================================
// Page
// ============================================================
export default function CollectionsPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Toutes");

  const filteredCollections = useMemo(() => {
    const q = query.trim().toLowerCase();

    let data = [...collectionGroups];

    if (activeTab !== "Toutes") {
      if (activeTab === "Tendances") {
        data = data.filter((item) =>
          ["Trending", "Collection Spotlight", "Editorial"].includes(
            item.logoTag,
          ),
        );
      } else if (activeTab === "Adaptations") {
        data = data.filter((item) => item.id === "gaming");
      } else if (activeTab === "Romance") {
        data = data.filter((item) => item.id === "romance");
      } else if (activeTab === "Sci-fi") {
        data = data.filter((item) =>
          ["spotlight", "gaming", "dystopia"].includes(item.id),
        );
      } else if (activeTab === "Action") {
        data = data.filter((item) => ["power", "gaming"].includes(item.id));
      } else if (activeTab === "Édito") {
        data = data.filter((item) =>
          ["Editorial", "Romance Focus", "Community Picks"].includes(
            item.logoTag,
          ),
        );
      }
    }

    if (!q) return data;

    return data.filter((collection) => {
      const haystack = [
        collection.title,
        collection.description,
        collection.logoTag,
        ...collection.items.map((item) => item.title),
        ...collection.items.map((item) => item.subtitle),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, activeTab]);

  const spotlight = filteredCollections[0] || collectionGroups[0];
  const featuredBands = filteredCollections.slice(0, 4);
  const gridCollections = filteredCollections.slice(1);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSpotlight collection={spotlight} />

      <main className="mx-auto max-w-7xl space-y-16 px-5 py-12">
        <section>
          <SectionHeader
            title="Collections en vedette"
            subtitle="De grandes sections immersives qui mettent l’accent sur la découverte rapide, l’aperçu vidéo et l’exploration par ambiance."
            rightLabel="Voir toutes les collections"
          />

          <div className="space-y-6">
            {featuredBands.map((collection) => (
              <CollectionBand key={collection.id} collection={collection} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            title="Découvrir plus d’univers"
            subtitle="Une vue plus compacte pour parcourir davantage de collections sans casser l’immersion visuelle."
            rightLabel="Parcourir l’archive"
          />

          {filteredCollections.length === 0 ? (
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-lg font-semibold text-white">
                Aucune collection trouvée
              </p>
              <p className="mt-2 text-sm text-white/60">
                Essaie un autre mot-clé ou change de filtre.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {(gridCollections.length
                ? gridCollections
                : filteredCollections
              ).map((collection) => (
                <CollectionMiniCard
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </div>
          )}
        </section>

        <section className="relative overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.025] p-6 md:p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-cyan/10" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                <Grid2x2 className="h-4 w-4 text-brand-cyan" />
                Organisation intelligente
              </div>

              <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
                Retrouve, classe et suis
                <span
                  className={`ml-2 ${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
                >
                  tes séries
                </span>
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
                Les collections ne servent pas seulement à découvrir. Elles
                renforcent aussi l’organisation du catalogue, la navigation
                éditoriale et la progression utilisateur à travers des univers
                cohérents.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <SolidButton>
                <Play className="h-4 w-4 fill-current" />
                Commencer l’exploration
              </SolidButton>

              <OutlineButton>
                <Bookmark className="h-4 w-4 text-brand-cyan" />
                Mes collections
              </OutlineButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
