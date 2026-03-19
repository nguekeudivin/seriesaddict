import React, { useMemo, useState } from "react";
import {
  Search,
  Users,
  Flame,
  Eye,
  Play,
  Heart,
  Bookmark,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  UserPlus,
  Sparkles,
  Clock3,
  Star,
  Activity,
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

const GRADIENT = "linear-gradient(90deg, #841D4F, #1E6C86)";
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";
const BRAND_GRADIENT_TEXT = "bg-gradient-to-r from-brand-primary to-brand-cyan";

// ============================================================
// Demo data
// ============================================================
const members = [
  {
    id: 1,
    name: "Sophie Martin",
    username: "@sophiem",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    badge: "Top watcher",
    seriesCount: 184,
    followers: 1280,
    following: 236,
    favoriteGenre: "Drame",
    currentlyWatching: "Severance",
    progress: "S2 • Épisode 4",
    activity: "A noté Fallout 4.5/5",
    cover:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    name: "Maya Johnson",
    username: "@mayaj",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
    badge: "Critique active",
    seriesCount: 96,
    followers: 842,
    following: 120,
    favoriteGenre: "Sci-fi",
    currentlyWatching: "Silo",
    progress: "S1 • Épisode 8",
    activity: "A ajouté The Last of Us à sa liste",
    cover:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    name: "Nathan Cole",
    username: "@nathanc",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    badge: "Binge master",
    seriesCount: 231,
    followers: 460,
    following: 318,
    favoriteGenre: "Thriller",
    currentlyWatching: "Dark Matter",
    progress: "S1 • Épisode 6",
    activity: "A terminé The Bear",
    cover:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    name: "Inès Laurent",
    username: "@ineslaurent",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    badge: "Édito lover",
    seriesCount: 122,
    followers: 1550,
    following: 204,
    favoriteGenre: "Romance",
    currentlyWatching: "Bridgerton",
    progress: "S3 • Épisode 2",
    activity: "A publié une critique sur Bridgerton",
    cover:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    name: "Leo Park",
    username: "@leopark",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    badge: "Community pick",
    seriesCount: 88,
    followers: 392,
    following: 190,
    favoriteGenre: "Fantasy",
    currentlyWatching: "The Witcher",
    progress: "S2 • Épisode 3",
    activity: "Suit maintenant 12 nouveaux membres",
    cover:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    name: "Aya Mendes",
    username: "@ayam",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80",
    badge: "New favorite",
    seriesCount: 65,
    followers: 210,
    following: 144,
    favoriteGenre: "Mystère",
    currentlyWatching: "From",
    progress: "S2 • Épisode 7",
    activity: "A recommandé Yellowjackets",
    cover:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 7,
    name: "Julien Roy",
    username: "@julienroy",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80",
    badge: "Top ratings",
    seriesCount: 140,
    followers: 980,
    following: 265,
    favoriteGenre: "Crime",
    currentlyWatching: "Bosch",
    progress: "S5 • Épisode 1",
    activity: "A mis 5/5 à True Detective",
    cover:
      "https://images.unsplash.com/photo-1542204625-de293a2f8ff8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 8,
    name: "Elena Scott",
    username: "@elena",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    badge: "Rising member",
    seriesCount: 74,
    followers: 305,
    following: 170,
    favoriteGenre: "Action",
    currentlyWatching: "Reacher",
    progress: "S2 • Épisode 5",
    activity: "A partagé sa watchlist du week-end",
    cover:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1600&q=80",
  },
];

const tabs = ["Tous", "Populaires", "Très actifs", "Top critiques", "Nouveaux"];

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

function SolidButton({ children }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(132,29,79,.25)] transition-all duration-300 hover:scale-[1.02]">
      {children}
    </button>
  );
}

function OutlineButton({ children }) {
  return (
    <button className="group/btn relative inline-flex items-center gap-2 rounded-full text-sm font-semibold text-white">
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
          <ChevronRight className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

// ============================================================
// Header
// ============================================================
function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
          <IconBurger className="h-5 w-5" />
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

// ============================================================
// Search + filters
// ============================================================
function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-3xl">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan opacity-40 blur-[16px]" />
      <div className="relative rounded-full p-[1px]">
        <div
          className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-80`}
        />
        <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/85 px-5 py-3 backdrop-blur-xl">
          <Search className="h-5 w-5 text-brand-cyan" />
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Rechercher un membre, un pseudo, un profil..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/45 focus:outline-none"
          />
          <div className="h-6 w-px bg-white/10" />
          <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
            Chercher
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterTabs({ current, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => {
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

// ============================================================
// Hero
// ============================================================
function MemberHero({ featured }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <img
          src={featured.cover}
          alt={featured.name}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-cyan" />
              Espace communauté
            </div>

            <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              Les
              <span
                className={`ml-3 ${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
                membres
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Découvre les profils les plus actifs, suis leur progression,
              retrouve leurs coups de cœur et explore les séries à travers
              l’activité de la communauté.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                +25k membres
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                Activité sociale
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                Progression & listes
              </span>
            </div>

            <div className="mt-10">
              <SearchBar value="" onChange={() => {}} />
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
                  src={featured.cover}
                  alt={featured.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="relative flex min-h-[360px] flex-col justify-end p-6">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur">
                  <Flame className="h-4 w-4 text-brand-primary" />
                  Profil en vedette
                </div>

                <div className="flex items-end gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/20">
                    <img
                      src={featured.avatar}
                      alt={featured.name}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                      {featured.name}
                    </h3>
                    <p className="text-sm text-white/65">{featured.username}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Séries
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {featured.seriesCount}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Abonnés
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {featured.followers}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Genre
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {featured.favoriteGenre}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      En ce moment
                    </p>
                    <p className="mt-1 font-semibold text-white">
                      {featured.currentlyWatching}
                    </p>
                    <p className="text-sm text-white/60">{featured.progress}</p>
                  </div>
                  <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Cards
// ============================================================
function ActivityCard({ member }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.3} />
      <GradientRing
        radiusClass="rounded-[28px]"
        thickness={1.3}
        glow
        hoverGlow
      />

      <div className="relative h-full overflow-hidden rounded-[28px] bg-brand-dark/55 backdrop-blur">
        <div className="absolute inset-0">
          <img
            src={member.cover}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
        </div>

        <div className="relative flex min-h-[340px] flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/75 ring-1 ring-white/10 backdrop-blur">
              <Activity className="h-4 w-4 text-brand-cyan" />
              {member.badge}
            </div>

            <button className="grid h-10 w-10 place-items-center rounded-full bg-black/35 text-white/90 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:scale-105">
              <Heart className="h-4 w-4" />
            </button>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/15">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-white/60">{member.username}</p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Activité
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/75">
                  Live
                </span>
              </div>

              <p className="text-sm font-semibold text-white">
                {member.activity}
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    Séries
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {member.seriesCount}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    Abonnés
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {member.followers}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    Suit
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {member.following}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Regarde
                </p>
                <p className="mt-1 font-semibold text-white">
                  {member.currentlyWatching}
                </p>
                <p className="text-sm text-white/60">{member.progress}</p>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-colors duration-300 hover:text-white">
                Voir le profil
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactMemberCard({ member }) {
  return (
    <button className="group relative overflow-hidden rounded-[24px] text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-cyan/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/15">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-extrabold uppercase tracking-wide text-white">
              {member.name}
            </h3>
            <p className="truncate text-xs text-white/60">{member.username}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/45">Genre favori</span>
            <span className="font-semibold text-white/80">
              {member.favoriteGenre}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/45">En cours</span>
            <span className="font-semibold text-white/80">
              {member.currentlyWatching}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/75">
            {member.badge}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan transition-colors duration-300 group-hover:text-white">
            Profil
            <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

function SocialRail({ title, members }) {
  return (
    <section>
      <SectionHeader
        title={title}
        subtitle="Des profils mis en avant pour leur activité, leurs goûts et leur capacité à faire découvrir de nouvelles séries."
        rightLabel="Tout voir"
      />

      <div className="relative overflow-x-auto pb-2">
        <div className="flex gap-5">
          {members.map((member) => (
            <div key={member.id} className="w-[320px] shrink-0">
              <ActivityCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Page
// ============================================================
export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Tous");

  const featured = members[0];

  const filteredMembers = useMemo(() => {
    let data = [...members];

    if (activeTab === "Populaires") {
      data = [...data].sort((a, b) => b.followers - a.followers);
    } else if (activeTab === "Très actifs") {
      data = [...data].sort((a, b) => b.seriesCount - a.seriesCount);
    } else if (activeTab === "Top critiques") {
      data = data.filter((m) =>
        ["Critique active", "Top ratings", "Édito lover"].includes(m.badge),
      );
    } else if (activeTab === "Nouveaux") {
      data = data.filter((m) =>
        ["New favorite", "Rising member"].includes(m.badge),
      );
    }

    const q = query.trim().toLowerCase();
    if (!q) return data;

    return data.filter((member) =>
      [
        member.name,
        member.username,
        member.favoriteGenre,
        member.currentlyWatching,
        member.badge,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query, activeTab]);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,29,79,.16),transparent_35%),radial-gradient(circle_at_right,rgba(30,108,134,.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-8">
          <MemberHero featured={featured} />
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-5 py-12">
        <SocialRail
          title="Membres à suivre"
          members={filteredMembers.slice(0, 4)}
        />

        <section>
          <SectionHeader
            title="Activité de la communauté"
            subtitle="Une vue plus large pour découvrir les profils récents, les goûts de visionnage et les membres à fort potentiel social."
            rightLabel="Voir toute l’activité"
          />

          {filteredMembers.length === 0 ? (
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-lg font-semibold text-white">
                Aucun membre trouvé
              </p>
              <p className="mt-2 text-sm text-white/60">
                Essaie un autre nom, pseudo ou filtre.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredMembers.map((member) => (
                <CompactMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </section>

        <section className="flex items-center justify-between">
          <div className="flex gap-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={[
                  "grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-all duration-300",
                  n === 1
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.03] text-white/75 hover:border-white/20 hover:bg-white/[0.06]",
                ].join(" ")}
              >
                {n}
              </button>
            ))}
            <button className="grid h-10 min-w-[56px] place-items-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white/75 hover:border-white/20 hover:bg-white/[0.06]">
              331
            </button>
          </div>

          <div className="flex gap-2">
            <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
