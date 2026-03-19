import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Filter,
  Bookmark,
  CheckCircle2,
  Clock3,
  Heart,
  List,
  Users,
  UserPlus,
  UserCheck,
  Star,
  Pencil,
  Plus,
  Lock,
  Globe2,
  X,
  LayoutGrid,
  Library,
  CalendarDays,
  Crown,
  MessageCircle,
  PlayCircle,
} from "lucide-react";

/* =========================================================
   BRAND / TOKENS
========================================================= */
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

/* =========================================================
   NAV TABS
========================================================= */
const TABS = [
  { key: "feed", label: "Feed", to: "/my/feed", icon: LayoutGrid },
  { key: "library", label: "Sériethèque", to: "/my/series", icon: Library },
  { key: "calendar", label: "Calendrier", to: "/calendar", icon: CalendarDays },
  { key: "watchlist", label: "A voir", to: "/my/watchlist", icon: Bookmark },
  { key: "lists", label: "Listes", to: "/lists", icon: List },
  { key: "friends", label: "Amis", to: "/members", icon: Users },
];

export function MemberTabsNav({ className = "", activeKey, onChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentKey =
    activeKey ??
    (TABS.find((t) => location.pathname.startsWith(t.to))?.key || "feed");

  return (
    <nav className={["w-full", className].join(" ")}>
      <div className="relative overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.key === currentKey;

            return (
              <button
                key={tab.key}
                onClick={() => {
                  onChange?.(tab.key);
                  navigate(tab.to);
                }}
                className={[
                  "group relative shrink-0 rounded-full p-[1.5px] transition-transform duration-300",
                  isActive ? "scale-[1.01]" : "hover:scale-[1.01]",
                ].join(" ")}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(132,29,79,1), rgba(30,108,134,1))",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1.5px",
                  }}
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(132,29,79,1), rgba(30,108,134,1))",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1.5px",
                  }}
                />
                <span
                  className={[
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur",
                    isActive
                      ? "bg-black/45 text-white"
                      : "bg-black/25 text-white/75 hover:text-white",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-4 w-4",
                      isActive ? "text-brand-cyan" : "text-brand-cyan/90",
                    ].join(" ")}
                  />
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-3 h-px w-full bg-brand-cyan/20" />
    </nav>
  );
}

/* =========================================================
   SHARED UI
========================================================= */
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

function SectionHeader({ title, rightLabel, onRightClick, subtitle }) {
  return (
    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
          <h2 className="text-lg font-semibold tracking-wide text-white">
            {title}
          </h2>
        </div>
        {subtitle ? (
          <p className="mt-2 text-sm text-white/65">{subtitle}</p>
        ) : null}
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

function IconButton({ title, children, onClick }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-black/35 hover:ring-white/25"
    >
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={[
        "group/btn relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white",
        className,
      ].join(" ")}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: GRADIENT,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-black/35 px-5 py-2 backdrop-blur-sm transition-colors duration-300 group-hover/btn:bg-black/45">
        {children}
      </span>
    </button>
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

function GlassPanel({ children, className = "", radius = "rounded-[28px]" }) {
  return (
    <div
      className={["group relative overflow-hidden", radius, className].join(
        " ",
      )}
    >
      <GradientRing radiusClass={radius} thickness={2} />
      <GradientRing radiusClass={radius} thickness={2} glow hoverGlow />
      <div
        className={["relative bg-brand-dark/55 backdrop-blur", radius].join(
          " ",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ProgressBar({ value = 0.4 }) {
  const pct = Math.max(0, Math.min(1, value));
  return (
    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full"
        style={{
          width: `${pct * 100}%`,
          background: GRADIENT,
        }}
      />
    </div>
  );
}

function SearchInput({
  value,
  onChange,
  placeholder = "Rechercher…",
  className = "",
}) {
  return (
    <div
      className={[
        "flex h-12 items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 backdrop-blur",
        className,
      ].join(" ")}
    >
      <Search className="h-4 w-4 text-brand-cyan" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
      />
    </div>
  );
}

function FilterChip({ label, active, onClick, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300",
        active
          ? "bg-white text-black"
          : "bg-black/25 text-white/75 ring-1 ring-white/10 hover:text-white",
      ].join(" ")}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{label}</span>
    </button>
  );
}

function StatMini({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-black/20 px-4 py-4 ring-1 ring-white/8">
      <div className="flex items-center justify-between gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/30 ring-1 ring-white/10">
          <Icon className="h-4 w-4 text-brand-cyan" />
        </div>
        <div className="text-2xl font-extrabold text-white">{value}</div>
      </div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/70">
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   MOCK DATA
========================================================= */
const SERIES_LIBRARY = [
  {
    id: "s1",
    title: "Severance",
    year: 2022,
    genres: ["Thriller", "SF"],
    poster:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=800&q=60",
    progress: 0.72,
    status: "En cours",
    seasonsSeen: "S1 • 6 épisodes suivis",
    rating: 4.5,
    favorite: true,
  },
  {
    id: "s2",
    title: "The Bear",
    year: 2022,
    genres: ["Drame", "Cuisine"],
    poster:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=60",
    progress: 0.35,
    status: "En cours",
    seasonsSeen: "S2 • 2 épisodes suivis",
    rating: 4.8,
    favorite: false,
  },
  {
    id: "s3",
    title: "Dark",
    year: 2017,
    genres: ["Mystère", "SF"],
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=60",
    progress: 1,
    status: "Terminée",
    seasonsSeen: "S3 • terminée",
    rating: 5,
    favorite: true,
  },
  {
    id: "s4",
    title: "Silo",
    year: 2023,
    genres: ["SF", "Drame"],
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=60",
    progress: 0.15,
    status: "À reprendre",
    seasonsSeen: "S1 • 1 épisode suivi",
    rating: 4.1,
    favorite: false,
  },
  {
    id: "s5",
    title: "Mindhunter",
    year: 2017,
    genres: ["Crime", "Psychologique"],
    poster:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=60",
    progress: 1,
    status: "Terminée",
    seasonsSeen: "2 saisons",
    rating: 4.7,
    favorite: true,
  },
  {
    id: "s6",
    title: "From",
    year: 2022,
    genres: ["Horreur", "Mystère"],
    poster:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=800&q=60",
    progress: 0.54,
    status: "En cours",
    seasonsSeen: "S2 • progression active",
    rating: 4.2,
    favorite: false,
  },
];

const FRIENDS = [
  {
    id: "f1",
    name: "Nadia M.",
    handle: "@nadia",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    mutual: 8,
    watched: "Regarde Severance",
    status: "friend",
  },
  {
    id: "f2",
    name: "Kevin S.",
    handle: "@kevin",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    mutual: 4,
    watched: "A terminé The Bear",
    status: "friend",
  },
  {
    id: "f3",
    name: "Maya D.",
    handle: "@maya",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
    mutual: 12,
    watched: "A commenté Dark",
    status: "request",
  },
  {
    id: "f4",
    name: "Chris L.",
    handle: "@chris",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    mutual: 2,
    watched: "Suit Silo",
    status: "suggested",
  },
  {
    id: "f5",
    name: "Lina B.",
    handle: "@lina",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=60",
    mutual: 6,
    watched: "A créé une liste mini-séries",
    status: "suggested",
  },
];

const FRIENDS_ACTIVITY = [
  {
    id: "a1",
    who: "Nadia",
    action: "a noté",
    what: "Severance",
    when: "il y a 1 h",
    icon: <Star className="h-5 w-5 text-brand-cyan" />,
  },
  {
    id: "a2",
    who: "Kevin",
    action: "a ajouté à sa liste",
    what: "The Bear",
    when: "hier",
    icon: <List className="h-5 w-5" style={{ color: BRAND.primary }} />,
  },
  {
    id: "a3",
    who: "Maya",
    action: "a commenté",
    what: "Dark",
    when: "il y a 3 j",
    icon: <MessageCircle className="h-5 w-5 text-brand-cyan" />,
  },
];

const MY_LISTS = [
  {
    id: "l1",
    title: "Séries dystopiques à voir absolument",
    description: "Une sélection sombre, futuriste et addictive.",
    count: 12,
    isPrivate: false,
    likes: 86,
    comments: 14,
    posters: [
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
    ],
  },
  {
    id: "l2",
    title: "Mini-séries pour un week-end",
    description: "Courtes, fortes, sans filler.",
    count: 8,
    isPrivate: true,
    likes: 21,
    comments: 5,
    posters: [
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=60",
    ],
  },
  {
    id: "l3",
    title: "Mon top thrillers séries",
    description: "Mes références tension / mystère / noirceur.",
    count: 15,
    isPrivate: false,
    likes: 52,
    comments: 9,
    posters: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=60",
    ],
  },
];

const LIST_CREATION_PICKER = SERIES_LIBRARY.map((item) => ({
  id: item.id,
  title: item.title,
  poster: item.poster,
  year: item.year,
  genres: item.genres,
}));

/* =========================================================
   PAGE SHELL
========================================================= */
function MemberTopBar({ title, subtitle, activeKey }) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden border-b border-white/5 bg-black/50">
      <div className="mx-auto max-w-7xl px-5 py-5">
        <div className="flex items-center justify-between gap-4">
          <button
            className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15"
            onClick={() => navigate("/")}
          >
            <span className="text-sm font-semibold">Menu</span>
          </button>

          <div
            className="cursor-pointer select-none text-center"
            onClick={() => navigate("/")}
          >
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
            <div className="hidden text-right md:block">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-white/55">{subtitle}</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-brand-cyan/30">
              <Crown className="h-4 w-4 text-[rgba(255,215,0,0.95)]" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <MemberTabsNav activeKey={activeKey} />
        </div>
      </div>
    </div>
  );
}

function MemberPageLayout({ title, subtitle, activeKey, hero, children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,29,79,.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(30,108,134,.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-5 py-10">{hero}</div>
      </section>
      <main className="mx-auto max-w-7xl space-y-16 px-5 pb-16">
        {children}
      </main>
    </div>
  );
}

/* =========================================================
   SERIETHEQUE
========================================================= */
function SeriesLibraryHero() {
  return (
    <GlassPanel className="rounded-[32px]">
      <div className="grid gap-6 p-6 lg:grid-cols-2 lg:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
            Ma sériethèque
          </p>
          <h1 className="mt-2 text-1xl font-extrabold uppercase tracking-wide md:text-2xl">
            Toutes mes séries, ma progression, mes favoris
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Un espace pour suivre ce que tu regardes, retrouver tes séries
            terminées, reprendre celles laissées en pause et garder une vue
            claire sur ta progression.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <OutlineButton>
              <Bookmark className="h-4 w-4 text-brand-cyan" />
              <span>Gérer mon suivi</span>
            </OutlineButton>
            <OutlineButton>
              <Heart className="h-4 w-4" style={{ color: BRAND.primary }} />
              <span>Voir mes favoris</span>
            </OutlineButton>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            <StatMini icon={Library} label="Séries suivies" value="86" />
            <StatMini icon={CheckCircle2} label="Terminées" value="24" />
            <StatMini icon={Clock3} label="À reprendre" value="9" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

function SeriesShelfCard({ item, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/8 bg-black/20">
      <div className="grid gap-4 p-4 sm:grid-cols-[120px_1fr]">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="aspect-[2/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${item.poster})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          {item.favorite ? (
            <div className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/45 ring-1 ring-white/10 backdrop-blur">
              <Heart className="h-4 w-4" style={{ color: BRAND.primary }} />
            </div>
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-extrabold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-white/60">
                {item.year} • {item.genres.join(" • ")}
              </p>
            </div>

            <div className="rounded-full border border-brand-cyan/20 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/75">
              {item.status}
            </div>
          </div>

          <p className="mt-4 text-sm text-white/72">{item.seasonsSeen}</p>
          <ProgressBar value={item.progress} />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-brand-cyan" />
                {item.rating}/5
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-brand-cyan" />
                {Math.round(item.progress * 100)}% suivi
              </span>
            </div>

            <div className="flex items-center gap-2">
              <IconButton title="Mettre à jour">
                <Pencil className="h-4 w-4" style={{ color: BRAND.primary }} />
              </IconButton>
              <IconButton title="Marquer vu">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
              </IconButton>
              <OutlineButton onClick={onOpen} className="text-xs">
                <span>Ouvrir</span>
                <ChevronRight className="h-4 w-4 text-brand-cyan" />
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[26px] ring-1 ring-brand-cyan/35" />
      </div>
    </div>
  );
}

export function MemberSeriesLibraryPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return SERIES_LIBRARY.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.genres.join(" ").toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : filter === "watching"
            ? item.status === "En cours"
            : filter === "done"
              ? item.status === "Terminée"
              : filter === "paused"
                ? item.status === "À reprendre"
                : filter === "favorites"
                  ? item.favorite
                  : true;

      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <MemberPageLayout
      title="Sériethèque"
      subtitle="Suivi personnel"
      activeKey="library"
      hero={<SeriesLibraryHero />}
    >
      <section>
        <SectionHeader
          title="EXPLORER MA BIBLIOTHÈQUE"
          subtitle="Retrouve rapidement une série, filtre par statut et garde un espace net."
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Rechercher une série, un genre…"
            className="w-full lg:max-w-xl"
          />

          <div className="flex flex-wrap gap-2">
            <FilterChip
              label="Tout"
              active={filter === "all"}
              onClick={() => setFilter("all")}
              icon={Filter}
            />
            <FilterChip
              label="En cours"
              active={filter === "watching"}
              onClick={() => setFilter("watching")}
            />
            <FilterChip
              label="Terminées"
              active={filter === "done"}
              onClick={() => setFilter("done")}
            />
            <FilterChip
              label="À reprendre"
              active={filter === "paused"}
              onClick={() => setFilter("paused")}
            />
            <FilterChip
              label="Favoris"
              active={filter === "favorites"}
              onClick={() => setFilter("favorites")}
              icon={Heart}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {filtered.map((item) => (
            <SeriesShelfCard
              key={item.id}
              item={item}
              onOpen={() => navigate(`/series/${item.id}`)}
            />
          ))}
        </div>
      </section>
    </MemberPageLayout>
  );
}

/* =========================================================
   AMIS
========================================================= */
function FriendsHero() {
  return (
    <GlassPanel className="rounded-[32px]">
      <div className="grid gap-6 p-6 lg:grid-cols-2 lg:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
            Réseau social séries
          </p>
          <h1 className="mt-2 text-1xl font-extrabold uppercase tracking-wide md:text-2xl">
            Suivre ses amis, comparer ses goûts, découvrir ensemble
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Cette section relie l’activité sociale à la découverte des séries :
            amis, suggestions, interactions, et mouvements récents de la
            communauté.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton>
              <UserPlus className="h-4 w-4" />
              <span>Ajouter un ami</span>
            </PrimaryButton>
            <OutlineButton>
              <Users className="h-4 w-4 text-brand-cyan" />
              <span>Voir mes abonnements</span>
            </OutlineButton>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            <StatMini icon={Users} label="Amis" value="14" />
            <StatMini icon={UserPlus} label="Demandes" value="3" />
            <StatMini icon={MessageCircle} label="Interactions" value="27" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

function FriendCard({ item, onOpen }) {
  const actionLabel =
    item.status === "friend"
      ? "Voir profil"
      : item.status === "request"
        ? "Accepter"
        : "Ajouter";

  const actionIcon = item.status === "friend" ? UserCheck : UserPlus;

  const ActionIcon = actionIcon;

  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/8 bg-black/20 p-4">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
          <img
            src={item.avatar}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute -inset-1 rounded-full opacity-70"
            style={{
              background: GRADIENT,
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1.5px",
            }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-xs text-white/55">{item.handle}</p>
            </div>

            <div className="rounded-full border border-brand-cyan/15 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/75">
              {item.mutual} amis en commun
            </div>
          </div>

          <p className="mt-4 text-sm text-white/70">{item.watched}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <OutlineButton onClick={onOpen} className="text-xs">
              <span>Voir profil</span>
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </OutlineButton>

            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-white/75 hover:text-white">
              <ActionIcon className="h-4 w-4 text-brand-cyan" />
              {actionLabel}
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[26px] ring-1 ring-brand-cyan/35" />
      </div>
    </div>
  );
}

function ActivityRow({ item, onOpenProfile, onOpenSeries }) {
  return (
    <div className="group flex items-start justify-between gap-4 rounded-2xl border border-brand-cyan/15 bg-black/20 px-5 py-4 hover:border-brand-cyan/25">
      <div className="flex min-w-0 items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-black/30 ring-1 ring-white/10">
          {item.icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white/85">
            <button
              className="text-white hover:text-brand-cyan"
              onClick={onOpenProfile}
            >
              {item.who}
            </button>{" "}
            <span className="text-white/70">{item.action}</span>{" "}
            <button
              className="text-white hover:text-brand-cyan"
              onClick={onOpenSeries}
            >
              {item.what}
            </button>
          </p>
          <p className="mt-1 text-xs text-white/55">{item.when}</p>
        </div>
      </div>

      <button
        onClick={onOpenSeries}
        className="shrink-0 inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-black/20 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
      >
        Voir
        <ChevronRight className="h-4 w-4 text-brand-cyan" />
      </button>
    </div>
  );
}

export function MemberFriendsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return FRIENDS.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.handle.toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : filter === "friends"
            ? item.status === "friend"
            : filter === "requests"
              ? item.status === "request"
              : filter === "suggested"
                ? item.status === "suggested"
                : true;

      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <MemberPageLayout
      title="Amis"
      subtitle="Communauté"
      activeKey="friends"
      hero={<FriendsHero />}
    >
      <section>
        <SectionHeader
          title="ACTIVITÉ DES AMIS"
          subtitle="Une timeline simple, utile et orientée découverte."
          rightLabel="VOIR TOUT"
          onRightClick={() => navigate("/members/activity")}
        />
        <div className="grid gap-3">
          {FRIENDS_ACTIVITY.map((item) => (
            <ActivityRow
              key={item.id}
              item={item}
              onOpenProfile={() => navigate("/members/1")}
              onOpenSeries={() => navigate("/series/1")}
            />
          ))}
        </div>
      </section>
    </MemberPageLayout>
  );
}

/* =========================================================
   LISTES
========================================================= */
function ListsHero() {
  return (
    <GlassPanel className="rounded-[32px]">
      <div className="grid gap-6 p-6 grid-cols-1 grid-cols-2 lg:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
            Mes listes
          </p>
          <h1 className="mt-2 text-1xl font-extrabold uppercase tracking-wide md:text-2xl">
            Organiser mes séries par univers, humeur ou usage
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Les listes servent à classer, partager et éditorialiser tes
            découvertes. Elles prolongent la logique du projet en mêlant
            organisation personnelle et partage social.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton>
              <Plus className="h-4 w-4" />
              <span>Créer une liste</span>
            </PrimaryButton>
            <OutlineButton>
              <Globe2 className="h-4 w-4 text-brand-cyan" />
              <span>Explorer les listes publiques</span>
            </OutlineButton>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            <StatMini icon={List} label="Listes créées" value="6" />
            <StatMini icon={Heart} label="Likes reçus" value="159" />
            <StatMini icon={Bookmark} label="Séries classées" value="43" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

function ListCoverStrip({ posters = [] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {posters.slice(0, 4).map((p, i) => (
        <div key={i} className="overflow-hidden rounded-2xl">
          <div
            className="aspect-[2/3] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${p})` }}
          />
        </div>
      ))}
    </div>
  );
}

function ListCard({ item, onOpen, onEdit }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-black/20 p-4">
      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <div>
          <ListCoverStrip posters={item.posters} />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-extrabold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <span className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/65">
                  {item.isPrivate ? (
                    <span className="inline-flex items-center gap-1">
                      <Lock className="h-3.5 w-3.5" />
                      Privée
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Globe2 className="h-3.5 w-3.5" />
                      Publique
                    </span>
                  )}
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>

            <div className="rounded-full border border-brand-cyan/15 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/75">
              {item.count} séries
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Heart className="h-4 w-4" style={{ color: BRAND.primary }} />
              {item.likes} likes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4 text-brand-cyan" />
              {item.comments} commentaires
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <OutlineButton onClick={onOpen} className="text-xs">
              <span>Ouvrir</span>
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </OutlineButton>

            <button
              onClick={onEdit}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
            >
              <Pencil className="h-4 w-4" style={{ color: BRAND.primary }} />
              Modifier
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[28px] ring-1 ring-brand-cyan/35" />
      </div>
    </div>
  );
}

export function MemberListsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return MY_LISTS.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <MemberPageLayout
      title="Listes"
      subtitle="Organisation éditoriale"
      activeKey="lists"
      hero={<ListsHero />}
    >
      <section>
        <SectionHeader
          title="MES LISTES PERSONNALISÉES"
          subtitle="Des listes utiles visuellement, simples à parcourir et faciles à partager."
          rightLabel="CRÉER UNE LISTE"
          onRightClick={() => navigate("/lists/create")}
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Rechercher une liste…"
            className="w-full lg:max-w-xl"
          />

          <PrimaryButton onClick={() => navigate("/lists/create")}>
            <Plus className="h-4 w-4" />
            <span>Nouvelle liste</span>
          </PrimaryButton>
        </div>

        <div className="mt-8 grid gap-4">
          {filtered.map((item) => (
            <ListCard
              key={item.id}
              item={item}
              onOpen={() => navigate(`/lists/${item.id}`)}
              onEdit={() => navigate(`/lists/${item.id}/edit`)}
            />
          ))}
        </div>
      </section>
    </MemberPageLayout>
  );
}

/* =========================================================
   CREER UNE LISTE
========================================================= */
function CreateListHero() {
  return (
    <GlassPanel className="rounded-[32px]">
      <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_.8fr] lg:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
            Création éditoriale
          </p>
          <h1 className="mt-2 text-xl font-extrabold uppercase tracking-wide md:text-2xl">
            Créer une liste lisible, attractive et partageable
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Une bonne liste doit être facile à comprendre, visuellement forte,
            et pouvoir mélanger sélection personnelle et intention éditoriale.
          </p>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            <StatMini icon={List} label="Listes créées" value="6" />
            <StatMini icon={Globe2} label="Publiques" value="4" />
            <StatMini icon={Lock} label="Privées" value="2" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

function PickerSeriesRow({ item, selected, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={[
        "group flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all duration-300",
        selected
          ? "border-brand-cyan/35 bg-brand-cyan/[0.08]"
          : "border-white/8 bg-black/20 hover:border-white/15",
      ].join(" ")}
    >
      <div className="h-16 w-12 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">
          {item.title}
        </p>
        <p className="mt-1 text-xs text-white/55">
          {item.year} • {item.genres.join(" • ")}
        </p>
      </div>

      <div
        className={[
          "grid h-9 w-9 place-items-center rounded-full ring-1 transition-all",
          selected
            ? "bg-black/40 ring-brand-cyan/35"
            : "bg-black/25 ring-white/10",
        ].join(" ")}
      >
        {selected ? (
          <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
        ) : (
          <Plus className="h-4 w-4 text-white/65" />
        )}
      </div>
    </button>
  );
}

function SelectedPosterStrip({ items }) {
  if (!items.length) {
    return (
      <div className="grid place-items-center rounded-[24px] border border-dashed border-white/10 bg-black/20 p-8 text-center">
        <div>
          <List className="mx-auto h-6 w-6 text-brand-cyan" />
          <p className="mt-3 text-sm font-semibold text-white/80">
            Aucune série sélectionnée
          </p>
          <p className="mt-1 text-xs text-white/55">
            Commence à ajouter des séries pour prévisualiser ta liste.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
      {items.slice(0, 8).map((item) => (
        <div key={item.id} className="overflow-hidden rounded-2xl">
          <div
            className="aspect-[2/3] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.poster})` }}
          />
        </div>
      ))}
    </div>
  );
}

export function CreateListPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState(["s1", "s3"]);

  const filtered = useMemo(() => {
    return LIST_CREATION_PICKER.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const selectedItems = useMemo(() => {
    return LIST_CREATION_PICKER.filter((item) => selectedIds.includes(item.id));
  }, [selectedIds]);

  const toggleSeries = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <MemberPageLayout
      title="Créer une liste"
      subtitle="Nouveau contenu"
      activeKey="lists"
      hero={<CreateListHero />}
    >
      <section>
        <SectionHeader
          title="CONFIGURATION DE LA LISTE"
          subtitle="Titre clair, description courte, visibilité simple et sélection rapide."
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
          <GlassPanel className="rounded-[28px]">
            <div className="p-6">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
                    Titre de la liste
                  </label>
                  <div className="flex h-12 items-center rounded-2xl border border-white/10 bg-black/25 px-4">
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ex. Les meilleures mini-séries Netflix"
                      className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
                    Description
                  </label>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <textarea
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Explique l’intention de ta liste en quelques lignes…"
                      className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
                    Visibilité
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <FilterChip
                      label="Publique"
                      active={visibility === "public"}
                      onClick={() => setVisibility("public")}
                      icon={Globe2}
                    />
                    <FilterChip
                      label="Privée"
                      active={visibility === "private"}
                      onClick={() => setVisibility("private")}
                      icon={Lock}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <PrimaryButton onClick={() => navigate("/lists")}>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Créer la liste</span>
                  </PrimaryButton>

                  <button
                    onClick={() => navigate("/lists")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-white/70 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="rounded-[28px]">
            <div className="p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                Aperçu
              </p>
              <h3 className="mt-2 text-lg font-extrabold uppercase tracking-wide text-white">
                {title || "Titre de la future liste"}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {description ||
                  "La description apparaîtra ici pour donner du contexte et renforcer le caractère éditorial de la liste."}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/70">
                  {visibility === "public" ? "Publique" : "Privée"}
                </span>
                <span className="rounded-full border border-brand-cyan/15 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/70">
                  {selectedItems.length} séries
                </span>
              </div>

              <div className="mt-6">
                <SelectedPosterStrip items={selectedItems} />
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section>
        <SectionHeader
          title="AJOUTER DES SÉRIES"
          subtitle="Recherche rapide + sélection visuelle directe."
        />

        <div className="mb-6">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Rechercher une série à ajouter…"
            className="max-w-xl"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((item) => (
            <PickerSeriesRow
              key={item.id}
              item={item}
              selected={selectedIds.includes(item.id)}
              onToggle={() => toggleSeries(item.id)}
            />
          ))}
        </div>
      </section>
    </MemberPageLayout>
  );
}
