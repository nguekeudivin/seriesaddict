import React from "react";
import {
  Search,
  ChevronRight,
  Calendar as CalIcon,
  Clock,
  Filter,
  TrendingUp,
  Flame,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/**
 * CalendarPage.jsx — Calendrier des sorties (Semaine + Liste)
 * - max-w-7xl
 * - Toolbar premium (recherche, filtres, toggle view)
 * - Week view: colonnes jours (scroll horizontal desktop / stack mobile)
 * - List view: timeline propre + sections par date
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
const PLATFORMS = [
  { key: "all", label: "Toutes plateformes" },
  { key: "netflix", label: "Netflix" },
  { key: "hbo", label: "HBO" },
  { key: "appletv", label: "Apple TV+" },
  { key: "prime", label: "Prime Video" },
];

const weekRangeLabel = "Semaine du 16 au 22 février 2026";

const MOCK_WEEK = [
  {
    dateKey: "2026-02-16",
    dayLabel: "LUN.",
    dayNum: "16",
    items: [
      {
        id: "w1",
        title: "Best Medicine",
        type: "new_episode",
        platform: "fox",
        time: "21:00",
        meta: "S1E1",
      },
      {
        id: "w2",
        title: "School Spirits",
        type: "new_episode",
        platform: "hbo",
        time: "22:00",
        meta: "S2E3",
      },
    ],
  },
  {
    dateKey: "2026-02-17",
    dayLabel: "MAR.",
    dayNum: "17",
    items: [
      {
        id: "w3",
        title: "Will Trent",
        type: "new_episode",
        platform: "abc",
        time: "20:30",
        meta: "S3E7",
      },
    ],
  },
  {
    dateKey: "2026-02-18",
    dayLabel: "MER.",
    dayNum: "18",
    items: [
      {
        id: "w4",
        title: "The Beauty",
        type: "new_episode",
        platform: "fx",
        time: "21:00",
        meta: "S1E2",
      },
      {
        id: "w5",
        title: "Tell Me Lies",
        type: "new_episode",
        platform: "hulu",
        time: "22:00",
        meta: "S2E4",
      },
    ],
  },
  {
    dateKey: "2026-02-19",
    dayLabel: "JEU.",
    dayNum: "19",
    items: [
      {
        id: "w6",
        title: "Love Story",
        type: "new_episode",
        platform: "netflix",
        time: "00:00",
        meta: "S1E1",
      },
      {
        id: "w7",
        title: "The Night Agent",
        type: "new_season",
        platform: "netflix",
        time: "00:00",
        meta: "S2 (complet)",
      },
      {
        id: "w8",
        title: "Strip Law",
        type: "new_season",
        platform: "prime",
        time: "00:00",
        meta: "S1 (complet)",
      },
    ],
  },
  {
    dateKey: "2026-02-20",
    dayLabel: "VEN.",
    dayNum: "20",
    items: [
      {
        id: "w9",
        title: "Stumble",
        type: "new_episode",
        platform: "hbo",
        time: "21:00",
        meta: "S1E6",
      },
      {
        id: "w10",
        title: "Death in Paradise",
        type: "new_episode",
        platform: "bbc",
        time: "20:00",
        meta: "S14E3",
      },
    ],
  },
  {
    dateKey: "2026-02-21",
    dayLabel: "SAM.",
    dayNum: "21",
    items: [
      {
        id: "w11",
        title: "The Pitt",
        type: "new_episode",
        platform: "max",
        time: "21:00",
        meta: "S1E2",
      },
    ],
  },
  {
    dateKey: "2026-02-22",
    dayLabel: "DIM.",
    dayNum: "22",
    items: [
      {
        id: "w12",
        title: "Industry",
        type: "new_episode",
        platform: "hbo",
        time: "21:00",
        meta: "S4E1",
      },
      {
        id: "w13",
        title: "American Dad!",
        type: "new_episode",
        platform: "fox",
        time: "20:30",
        meta: "S22E2",
      },
      {
        id: "w14",
        title: "Vanished (2026)",
        type: "new_show",
        platform: "netflix",
        time: "00:00",
        meta: "Nouvelle série",
      },
    ],
  },
];

const TYPE_META = {
  new_episode: { label: "Nouvel épisode", color: "cyan" },
  new_season: { label: "Nouvelle saison", color: "primary" },
  new_show: { label: "Nouvelle série", color: "mix" },
};

function platformLabel(key) {
  const map = {
    netflix: "Netflix",
    hbo: "HBO",
    appletv: "Apple TV+",
    prime: "Prime Video",
    fox: "FOX",
    bbc: "BBC",
    fx: "FX",
    hulu: "Hulu",
    abc: "ABC",
    max: "Max",
  };
  return map[key] || key?.toUpperCase?.() || "—";
}

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

function ViewToggle({ value, onChange }) {
  const opts = [
    { key: "week", label: "Semaine" },
    { key: "list", label: "Liste" },
  ];

  return (
    <div className="inline-flex rounded-full border border-brand-cyan/20 bg-black/20 p-1">
      {opts.map((o) => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          className={[
            "rounded-full px-4 py-2 text-xs font-semibold transition-all",
            value === o.key
              ? "bg-brand-wine/70 text-white"
              : "text-white/70 hover:text-white",
          ].join(" ")}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function TypePill({ type }) {
  const meta = TYPE_META[type] || { label: "Sortie", color: "cyan" };

  const style =
    meta.color === "primary"
      ? "border-[rgba(132,29,79,0.35)] bg-[rgba(132,29,79,0.22)] text-white/85"
      : meta.color === "mix"
        ? "border-[rgba(30,108,134,0.28)] bg-[rgba(60,10,34,0.22)] text-white/85"
        : "border-[rgba(30,108,134,0.35)] bg-[rgba(30,108,134,0.18)] text-white/85";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur",
        style,
      ].join(" ")}
    >
      {meta.label}
    </span>
  );
}

function EventCard({ it, isToday = false, onOpen }) {
  return (
    <button
      onClick={() => onOpen?.(it)}
      className="group relative w-full overflow-hidden rounded-2xl text-left"
      title={it.title}
    >
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      {isToday ? (
        <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />
      ) : (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      )}

      <div className="relative rounded-2xl bg-brand-dark/55 px-4 py-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="line-clamp-1 text-sm font-extrabold uppercase tracking-wide text-white">
              {it.title}
            </p>
            <p className="mt-1 text-xs text-white/65">
              {platformLabel(it.platform)} • {it.meta || "—"}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-white/70">
              <Clock className="h-3.5 w-3.5 text-brand-cyan" />
              {it.time}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <TypePill type={it.type} />
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
            Voir
            <ArrowRight className="h-4 w-4 text-brand-primary transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

function DayColumn({ day, isToday, onOpen }) {
  return (
    <div className="group relative min-w-[280px] overflow-hidden rounded-2xl">
      {/* ring */}

      <div className="relative rounded-2xl bg-brand-dark/45 backdrop-blur">
        {/* Header day */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              {day.dayLabel}
            </p>
            <p className="mt-1 text-lg font-extrabold tracking-wide text-white">
              {day.dayNum}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-brand-cyan/20 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/75">
              {day.items.length} sorties
            </span>
            {isToday ? (
              <span className="rounded-full border border-brand-cyan/25 bg-[rgba(30,108,134,0.18)] px-3 py-1 text-[11px] font-extrabold text-white/85">
                Today
              </span>
            ) : null}
          </div>
        </div>

        {/* Items */}
        <div className="grid gap-3 p-4">
          {day.items.length ? (
            day.items.map((it) => (
              <EventCard
                key={it.id}
                it={it}
                isToday={isToday}
                onOpen={onOpen}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-10 text-center text-sm text-white/55">
              Rien de prévu
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
          Légende
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <TypePill type="new_show" />
          <TypePill type="new_season" />
          <TypePill type="new_episode" />
        </div>
        <p className="mt-4 text-sm text-white/65">
          Les sorties sont regroupées par jour. Sur mobile, la semaine se lit de
          haut en bas (scroll naturel). Sur desktop, la semaine est scrollable
          horizontalement.
        </p>
      </div>
    </div>
  );
}

function ListGroup({ label, items, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Date
            </p>
            <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
              {label}
            </h3>
          </div>
          <span className="rounded-full border border-brand-cyan/20 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/75">
            {items.length} sorties
          </span>
        </div>

        <div className="mt-4 grid gap-3">
          {items.map((it) => (
            <EventCard key={it.id} it={it} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------
// Page
// ---------------------------
export default function CalendarPage() {
  const [view, setView] = React.useState("week"); // week | list
  const [q, setQ] = React.useState("");
  const [platform, setPlatform] = React.useState("all");
  const [dropdown, setDropdown] = React.useState(false);
  const [quick, setQuick] = React.useState("week"); // week | upcoming | new

  // Simule "today" sur dimanche pour démo (tu peux brancher Date.now)
  const TODAY_KEY = "2026-02-22";

  const openItem = (it) => {
    // navigate(`/series-details`) ou `/news/...` ou un drawer
    console.log("open calendar item:", it?.id);
  };

  const platformFiltered = (items) =>
    platform === "all" ? items : items.filter((x) => x.platform === platform);

  const searchFiltered = (items) => {
    const query = q.trim().toLowerCase();
    if (!query) return items;
    return items.filter((x) =>
      (x.title + " " + (x.meta || "")).toLowerCase().includes(query),
    );
  };

  const weekData = MOCK_WEEK.map((d) => ({
    ...d,
    items: searchFiltered(platformFiltered(d.items)),
  }));

  // List view groups derived from week (simple for MVP)
  const listGroups = weekData
    .filter((d) => d.items.length)
    .map((d) => ({
      key: d.dateKey,
      label: `${d.dayLabel} ${d.dayNum} fév 2026`,
      items: d.items,
    }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header placeholder (réutilise ton header global si besoin) */}
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

      {/* Top / editorial intro */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                  Calendrier des sorties
                </h1>
                <p className="mt-1 text-sm text-white/70">
                  {weekRangeLabel} — épisodes, saisons, nouvelles séries.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-dark/60 px-4 py-2 text-xs text-white/70">
                <TrendingUp className="h-4 w-4 text-brand-cyan" />
                Mis à jour en temps réel
              </div>
            </div>

            {/* Toolbar */}
            <div className="grid gap-3 lg:grid-cols-[1fr_260px_auto] lg:items-center">
              <NeonSearch
                value={q}
                onChange={setQ}
                onSubmit={() => {}}
                placeholder="Rechercher une sortie..."
              />

              {/* Platform dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdown((v) => !v)}
                  className="flex w-full items-center justify-between rounded-full border border-brand-cyan/20 bg-brand-dark/70 px-5 py-3 text-sm text-white/80 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    <Filter className="h-4 w-4 text-brand-cyan" />
                    {PLATFORMS.find((p) => p.key === platform)?.label ||
                      "Toutes plateformes"}
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
                    {PLATFORMS.map((p) => (
                      <button
                        key={p.key}
                        onClick={() => {
                          setPlatform(p.key);
                          setDropdown(false);
                        }}
                        className={[
                          "flex w-full items-center justify-between px-5 py-3 text-sm",
                          platform === p.key
                            ? "bg-brand-wine/55 text-white"
                            : "text-white/75 hover:bg-white/5 hover:text-white",
                        ].join(" ")}
                      >
                        <span>{p.label}</span>
                        {platform === p.key ? (
                          <Sparkles className="h-4 w-4 text-brand-primary" />
                        ) : null}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex justify-start lg:justify-end">
                <ViewToggle value={view} onChange={setView} />
              </div>
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap items-center gap-2">
              <Chip
                active={quick === "week"}
                onClick={() => setQuick("week")}
                icon={CalIcon}
              >
                Cette semaine
              </Chip>
              <Chip
                active={quick === "upcoming"}
                onClick={() => setQuick("upcoming")}
                icon={TrendingUp}
              >
                À venir
              </Chip>
              <Chip
                active={quick === "new"}
                onClick={() => setQuick("new")}
                icon={Flame}
              >
                Nouveautés
              </Chip>

              <button
                onClick={() => {
                  setQ("");
                  setPlatform("all");
                }}
                className="ml-auto text-xs font-semibold tracking-wide text-brand-cyan hover:text-white"
              >
                Réinitialiser
              </button>
            </div>

            <div className="h-px w-full bg-brand-cyan/25" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-5 pb-24">
        {/* WEEK VIEW */}
        {view === "week" ? (
          <>
            <section>
              <SectionHeader
                title="VUE SEMAINE"
                rightLabel={weekRangeLabel}
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
                  {weekData.map((day) => (
                    <DayColumn
                      key={day.dateKey}
                      day={day}
                      isToday={day.dateKey === TODAY_KEY}
                      onOpen={openItem}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
                <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                    Focus
                  </p>
                  <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
                    Aujourd’hui
                  </h3>

                  <div className="mt-4 grid gap-3">
                    {(
                      weekData.find((d) => d.dateKey === TODAY_KEY)?.items || []
                    )
                      .slice(0, 3)
                      .map((it) => (
                        <EventCard
                          key={it.id}
                          it={it}
                          isToday
                          onOpen={openItem}
                        />
                      ))}
                    {!weekData.find((d) => d.dateKey === TODAY_KEY)?.items
                      ?.length ? (
                      <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-8 text-center text-sm text-white/55">
                        Aucune sortie aujourd’hui
                      </div>
                    ) : null}
                  </div>

                  <button
                    onClick={() => setView("list")}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white"
                  >
                    Voir en mode liste
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Right side summary (desktop) */}
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-2xl">
                    <GradientRing radiusClass="rounded-2xl" thickness={1} />
                    <GradientRing
                      radiusClass="rounded-2xl"
                      thickness={1}
                      glow
                      hoverGlow
                    />
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl">
                    <GradientRing radiusClass="rounded-2xl" thickness={2} />
                    <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                        Astuce
                      </p>
                      <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
                        Ajouter à mon agenda
                      </h3>
                      <p className="mt-3 text-sm text-white/70">
                        Action UI uniquement (à brancher plus tard): export iCal
                        / Google Calendar.
                      </p>

                      <button className="mt-4 w-full rounded-full border border-brand-cyan/20 bg-brand-wine/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white/90 hover:bg-brand-wine/75">
                        Ajouter la semaine
                      </button>
                    </div>
                  </div>

                  <Legend />
                </div>
              </div>
            </section>
          </>
        ) : null}

        {/* LIST VIEW */}
        {view === "list" ? (
          <section>
            <SectionHeader
              title="VUE LISTE"
              rightLabel={weekRangeLabel}
              onRightClick={() => {}}
            />

            <div className="grid gap-4">
              {listGroups.length ? (
                listGroups.map((g) => (
                  <ListGroup
                    key={g.key}
                    label={g.label}
                    items={g.items}
                    onOpen={openItem}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/15 px-6 py-16 text-center text-sm text-white/55">
                  Aucun résultat avec ces filtres.
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center justify-center">
              <button className="rounded-full border border-brand-cyan/20 bg-black/20 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white">
                Charger plus
              </button>
            </div>
          </section>
        ) : null}

        <div className="h-px w-full bg-brand-cyan/25" />
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
