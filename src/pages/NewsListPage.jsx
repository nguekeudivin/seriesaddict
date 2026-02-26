import React from "react";
import {
  Search,
  ChevronRight,
  Flame,
  Sparkles,
  BadgeCheck,
  Clock,
  Calendar,
  ArrowRight,
  TrendingUp,
  Filter,
} from "lucide-react";

/**
 * NewsListPage.jsx — Page "magazine" News & Articles
 * - max-w-7xl
 * - Hero éditorial + colonne "Trending"
 * - Rail "À la une"
 * - Grille principale 2 colonnes (desktop)
 * - Barre de recherche + filtres premium
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
// Mock data (replace by API)
// ---------------------------
const CATEGORIES = [
  { key: "all", label: "Tout" },
  { key: "breaking", label: "Breaking" },
  { key: "tendances", label: "Tendances" },
  { key: "interviews", label: "Interviews" },
  { key: "critiques", label: "Critiques" },
];

const MOCK_FEATURED = {
  id: "f-1",
  category: "Breaking",
  title: "STRANGER THINGS : LA SAISON 5 SE DÉVOILE ENFIN",
  excerpt:
    "Dates, casting, rumeurs et premiers indices sur l’intrigue. On fait le point sur tout ce qu’il faut savoir.",
  author: "Charlotte",
  date: "26 fév 2026",
  readTime: "6 min",
  img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=2200&q=60",
};

const MOCK_SIDE = [
  {
    id: "s-1",
    category: "Tendances",
    title: "Apple TV+ : les retours de saison les plus attendus",
    author: "Charlotte",
    date: "25 fév 2026",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "s-2",
    category: "Interviews",
    title: "Showrunner talk : écrire une mini-série en 8 épisodes",
    author: "Charlotte",
    date: "24 fév 2026",
    readTime: "7 min",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "s-3",
    category: "Critiques",
    title: "Notre avis : le thriller qui retourne tout en 3 épisodes",
    author: "Charlotte",
    date: "23 fév 2026",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1400&q=60",
  },
];

const MOCK_TOP = Array.from({ length: 8 }).map((_, i) => ({
  id: `top-${i}`,
  category: i % 2 ? "Tendances" : "Breaking",
  title: [
    "Netflix : les nouveautés séries du mois",
    "HBO : un teaser mystérieux pour la prochaine production",
    "Top 10 : les fins de saison les plus folles",
    "Prime Video : la série surprise qui cartonne",
    "Casting : une actrice majeure rejoint un projet SF",
  ][i % 5],
  author: "Charlotte",
  date: `${22 + i} fév 2026`,
  readTime: `${3 + (i % 5)} min`,
  img: [
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=60",
  ][i % 4],
}));

const MOCK_GRID = Array.from({ length: 12 }).map((_, i) => ({
  id: `g-${i}`,
  category: ["Breaking", "Tendances", "Interviews", "Critiques"][i % 4],
  title: [
    "Une saison 2 confirmée plus tôt que prévu",
    "Le calendrier séries de la semaine : quoi regarder ?",
    "Pourquoi ce final divise autant les fans",
    "Le retour d’un duo culte annoncé",
    "Un trailer qui met tout le monde d’accord",
  ][i % 5],
  excerpt:
    "Résumé court, clair, punchy. On garde une lecture rapide et efficace, sans saturer la carte.",
  author: "Charlotte",
  date: `${10 + i} fév 2026`,
  readTime: `${4 + (i % 6)} min`,
  img: [
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=60",
  ][i % 4],
}));

// ---------------------------
// UI building blocks
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

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
        <h2 className="text-lg font-semibold tracking-wide text-white">
          {title}
        </h2>
      </div>

      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
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

function Chip({ active, icon: Icon, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all",
        active
          ? "bg-brand-wine/70 text-white border border-brand-cyan/35"
          : "bg-brand-dark/70 text-white/75 border border-brand-cyan/20 hover:text-white hover:bg-brand-dark/80",
      ].join(" ")}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

function MetaRow({ date, readTime, compact = false }) {
  return (
    <div
      className={[
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-white/70",
        compact ? "text-[11px]" : "text-xs",
      ].join(" ")}
    >
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-4 w-4 text-brand-cyan" />
        {date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4 text-brand-cyan" />
        {readTime}
      </span>
    </div>
  );
}

function CategoryPill({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
      <BadgeCheck className="h-3.5 w-3.5 text-brand-primary" />
      {label}
    </span>
  );
}

function OutlineCTA({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
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
      <span className="relative inline-flex items-center gap-2 rounded-full bg-black/35 px-5 py-2 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/45">
        {children}
      </span>
    </button>
  );
}

function FeaturedHero({ item, side, onOpen }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_340px]">
      {/* Hero */}
      <article className="group relative overflow-hidden rounded-[28px]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#011921]/60">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={item.img}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/25" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div
            className="pointer-events-none absolute inset-4 rounded-xl"
            style={{
              background: GRADIENT,
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-end p-7 sm:p-10">
            <div className="flex items-center justify-between gap-3">
              <CategoryPill label={item.category} />
              <div className="hidden items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/35 px-4 py-2 text-xs text-white/70 md:inline-flex">
                <TrendingUp className="h-4 w-4 text-brand-cyan" />
                Mis à jour en temps réel
              </div>
            </div>

            <h3 className="mt-5 max-w-3xl text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
              {item.title}
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
              {item.excerpt}
            </p>

            <div className="mt-5">
              <MetaRow date={item.date} readTime={item.readTime} />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <OutlineCTA onClick={() => onOpen?.(item)}>
                <span className="text-white/85">Lire l’article</span>
                <ArrowRight className="h-4 w-4 text-brand-primary transition-transform duration-300 group-hover:translate-x-0.5" />
              </OutlineCTA>

              <button
                className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-5 py-2 text-sm font-semibold text-white/75 hover:text-white"
                onClick={() => {}}
              >
                Sauvegarder
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
        </div>
      </article>

      {/* Side stack */}
      <aside className="grid gap-4">
        {side.map((s) => (
          <button
            key={s.id}
            onClick={() => onOpen?.(s)}
            className="group relative overflow-hidden rounded-2xl text-left"
          >
            <div className="relative overflow-hidden rounded-2xl bg-brand-dark/55 backdrop-blur">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/75" />

              <div className="relative p-5">
                <CategoryPill label={s.category} />
                <h4 className="mt-3 line-clamp-2 text-sm font-extrabold uppercase tracking-wide text-white">
                  {s.title}
                </h4>
                <div className="mt-3">
                  <MetaRow date={s.date} readTime={s.readTime} compact />
                </div>
              </div>
            </div>
          </button>
        ))}
      </aside>
    </div>
  );
}

function CompactHeadlineCard({ item, onOpen }) {
  return (
    <button
      onClick={() => onOpen?.(item)}
      className="group relative w-[320px] shrink-0 overflow-hidden rounded-2xl text-left"
      title={item.title}
    >
      <div className="relative h-full rounded-2xl bg-brand-dark/55 backdrop-blur">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="relative flex h-full flex-col justify-end p-6">
          <p className="line-clamp-2 text-sm font-extrabold uppercase tracking-wide text-white">
            {item.title}
          </p>
          <div className="mt-4">
            <MetaRow date={item.date} readTime={item.readTime} compact />
          </div>
        </div>
      </div>
    </button>
  );
}

function ArticleCard({ item, variant = "normal", onOpen }) {
  const isLarge = variant === "large";

  return (
    <button
      onClick={() => onOpen?.(item)}
      className={[
        "group relative overflow-hidden rounded-2xl text-left",
        isLarge ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-dark/55 backdrop-blur">
        <div
          className={[
            "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]",
          ].join(" ")}
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-140px_140px_rgba(0,0,0,0.35)]" />

        <div className={["relative", isLarge ? "p-8" : "p-6"].join(" ")}>
          {isLarge && (
            <div
              className="pointer-events-none absolute inset-4 rounded-xl"
              style={{
                background: GRADIENT,
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />
          )}

          <div className="flex items-center justify-between gap-3">
            <CategoryPill label={item.category} />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/70">
              <Clock className="h-3.5 w-3.5 text-brand-cyan" />
              {item.readTime}
            </span>
          </div>

          <h3
            className={[
              "mt-4 font-extrabold uppercase tracking-wide text-white",
              isLarge ? "text-xl md:text-2xl" : "text-sm",
            ].join(" ")}
          >
            {item.title}
          </h3>

          <p
            className={[
              "mt-2 text-sm leading-relaxed text-white/70",
              isLarge ? "line-clamp-3" : "line-clamp-2 text-[13px]",
            ].join(" ")}
          >
            {item.excerpt}
          </p>

          <div className="mt-4">
            <MetaRow
              date={item.date}
              readTime={item.readTime}
              compact={!isLarge}
            />
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/75">
            <span className="h-px w-10 bg-white/35" />
            Lire
            <ArrowRight className="h-4 w-4 text-brand-primary transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </button>
  );
}

function TrendingList({ items, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="relative rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Le plus lu
            </p>
            <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
              Trending
            </h3>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-white/10">
            <TrendingUp className="h-5 w-5 text-brand-cyan" />
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {items.slice(0, 5).map((it, idx) => (
            <button
              key={it.id}
              onClick={() => onOpen?.(it)}
              className="group/row flex items-start gap-3 rounded-xl border border-brand-cyan/15 bg-black/20 px-4 py-3 text-left hover:text-white"
            >
              <div className="min-w-[28px] select-none text-center font-extrabold text-white/35">
                {idx + 1}
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-semibold text-white/80 group-hover/row:text-white">
                  {it.title}
                </p>
                <p className="mt-1 text-[11px] text-white/55">
                  {it.date} • {it.readTime}
                </p>
              </div>
              <ChevronRight className="ml-auto mt-0.5 h-4 w-4 text-brand-cyan opacity-70 transition-transform group-hover/row:translate-x-0.5 group-hover/row:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pagination({ page, total, onPage }) {
  const pages = Array.from({ length: total }).map((_, i) => i + 1);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={[
            "grid h-9 w-9 place-items-center rounded-full border text-xs font-semibold transition-all",
            p === page
              ? "border-brand-cyan/35 bg-brand-wine/65 text-white"
              : "border-brand-cyan/15 bg-black/20 text-white/70 hover:text-white",
          ].join(" ")}
        >
          {p}
        </button>
      ))}
      <button className="ml-2 rounded-full border border-brand-cyan/20 bg-black/20 px-5 py-2 text-xs font-semibold text-white/75 hover:text-white">
        Charger plus
      </button>
    </div>
  );
}

// ---------------------------
// Page
// ---------------------------
export default function NewsListPage() {
  const [q, setQ] = React.useState("");
  const [activeCat, setActiveCat] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const [dropdown, setDropdown] = React.useState(false);

  const openArticle = (item) => {
    // Branche ta vraie navigation ici
    // navigate(`/news/${item.id}`)
    console.log("open article:", item?.id);
  };

  const filteredGrid =
    activeCat === "all"
      ? MOCK_GRID
      : MOCK_GRID.filter((a) => a.category.toLowerCase() === activeCat);

  const searchedGrid = q.trim()
    ? filteredGrid.filter((a) =>
        (a.title + " " + a.excerpt).toLowerCase().includes(q.toLowerCase()),
      )
    : filteredGrid;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header placeholder (réutilise ton header si besoin) */}
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

      {/* Intro / editorial top */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                  News & Articles
                </h1>
                <p className="mt-1 text-sm text-white/70">
                  Dernières news, analyses, interviews… une lecture magazine
                  premium.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-dark/60 px-4 py-2 text-xs text-white/70">
                <TrendingUp className="h-4 w-4 text-brand-cyan" />
                Mis à jour en temps réel
              </div>
            </div>

            {/* Tools bar */}
            <div className="grid gap-3 lg:grid-cols-[1fr_260px] lg:items-center">
              <NeonSearch
                value={q}
                onChange={setQ}
                onSubmit={() => {}}
                placeholder="Rechercher un article..."
              />

              {/* Dropdown category (premium dark) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdown((v) => !v)}
                  className="flex w-full items-center justify-between rounded-full border border-brand-cyan/20 bg-brand-dark/70 px-5 py-3 text-sm text-white/80 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <Filter className="h-4 w-4 text-brand-cyan" />
                    Catégorie :{" "}
                    <span className="font-semibold">
                      {CATEGORIES.find((c) => c.key === activeCat)?.label ||
                        "Tout"}
                    </span>
                  </span>
                  <ChevronRight
                    className={[
                      "h-4 w-4 text-brand-cyan transition-transform",
                      dropdown ? "rotate-90" : "",
                    ].join(" ")}
                  />
                </button>

                {dropdown ? (
                  <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-brand-cyan/20 bg-black/70 backdrop-blur">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.key}
                        onClick={() => {
                          setActiveCat(c.key);
                          setDropdown(false);
                        }}
                        className={[
                          "flex w-full items-center justify-between px-5 py-3 text-sm",
                          activeCat === c.key
                            ? "bg-brand-wine/55 text-white"
                            : "text-white/75 hover:bg-white/5 hover:text-white",
                        ].join(" ")}
                      >
                        <span>{c.label}</span>
                        {activeCat === c.key ? (
                          <Sparkles className="h-4 w-4 text-brand-primary" />
                        ) : null}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap items-center gap-2">
              <Chip
                active={activeCat === "breaking"}
                onClick={() => setActiveCat("breaking")}
                icon={Flame}
              >
                Breaking
              </Chip>
              <Chip
                active={activeCat === "tendances"}
                onClick={() => setActiveCat("tendances")}
                icon={TrendingUp}
              >
                Tendances
              </Chip>
              <Chip
                active={activeCat === "interviews"}
                onClick={() => setActiveCat("interviews")}
                icon={Sparkles}
              >
                Interviews
              </Chip>
              <Chip
                active={activeCat === "critiques"}
                onClick={() => setActiveCat("critiques")}
                icon={BadgeCheck}
              >
                Critiques
              </Chip>

              <button
                onClick={() => setActiveCat("all")}
                className="ml-auto text-xs font-semibold tracking-wide text-brand-cyan hover:text-white"
              >
                Réinitialiser
              </button>
            </div>

            <div className="h-px w-full bg-brand-cyan/25" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-24 mt-4 px-5 pb-24">
        {/* HERO magazine */}
        <section>
          <SectionHeader
            title="À LA UNE"
            rightLabel="TOUTES LES NEWS"
            onRightClick={() => {}}
          />
          <FeaturedHero
            item={MOCK_FEATURED}
            side={MOCK_SIDE}
            onOpen={openArticle}
          />
        </section>

        {/* Rail headlines */}
        <section>
          <SectionHeader
            title="EN CE MOMENT"
            rightLabel="VOIR PLUS"
            onRightClick={() => {}}
          />
          <div
            className="
              relative overflow-x-auto pb-3
              scroll-smooth
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div className="flex gap-4">
              {MOCK_TOP.slice(0, 8).map((it) => (
                <CompactHeadlineCard
                  key={it.id}
                  item={it}
                  onOpen={openArticle}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Main grid + trending */}
        <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeader
              title="DERNIERS ARTICLES"
              rightLabel={`${searchedGrid.length} résultats`}
              onRightClick={() => {}}
            />

            <div className="grid gap-8 md:grid-cols-2">
              {searchedGrid.map((it, idx) => {
                // rythme magazine : une grande carte toutes les 6
                const isLarge = idx !== 0 && idx % 6 === 0;
                return (
                  <ArticleCard
                    key={it.id}
                    item={it}
                    variant={isLarge ? "large" : "normal"}
                    onOpen={openArticle}
                  />
                );
              })}
            </div>

            <div className="mt-8">
              <Pagination page={page} total={5} onPage={setPage} />
            </div>
          </div>

          <div className="space-y-6">
            <TrendingList items={MOCK_TOP} onOpen={openArticle} />

            {/* Small promo block */}
            <div className="group relative overflow-hidden rounded-2xl">
              <GradientRing radiusClass="rounded-2xl" thickness={2} />
              <GradientRing
                radiusClass="rounded-2xl"
                thickness={2}
                glow
                hoverGlow
              />
              <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                  Newsletter
                </p>
                <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
                  La sélection de la semaine
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Reçois les meilleures news et recommandations, sans spam.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <input
                    className="w-full rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
                    placeholder="Votre email"
                  />
                  <button className="rounded-full border border-brand-cyan/20 bg-brand-wine/60 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-brand-wine/75">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-brand-cyan/25" />
      </main>

      {/* Footer minimal (réutilise ton footer si besoin) */}
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
