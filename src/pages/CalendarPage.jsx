import React from "react";
import {
  startOfWeek,
  addDays,
  formatDateKey,
  formatDayLabel,
  weekRangeLabel,
} from "../utils/date.js";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalIcon,
  Filter,
  TrendingUp,
  Flame,
  Sparkles,
  Eye,
  Play,
  Bell,
} from "lucide-react";

/**
 * CalendarPage.jsx — Calendrier des sorties (Semaine + Liste)
 * - max-w-7xl
 * - Toolbar premium (recherche, filtres, toggle view)
 * - Week view: grille 7 jours visibles d'un coup (1 colonne mobile)
 * - Navigation rapide semaine/mois + retour à aujourd'hui
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

const MOCK_WEEK_TEMPLATE = [
  {
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

function generateWeekData(weekStart) {
  return Array.from({ length: 7 }, (_, i) => {
    const d = addDays(weekStart, i);
    const template = MOCK_WEEK_TEMPLATE[i];
    const dateKey = formatDateKey(d);
    return {
      dateKey,
      dayLabel: formatDayLabel(d),
      dayNum: String(d.getDate()),
      items: template.items.map((it) => ({ ...it, id: `${it.id}-${dateKey}` })),
    };
  });
}

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

function EventCard({ it, onOpen }) {
  return (
    <button
      onClick={() => onOpen?.(it)}
      className="group relative w-full overflow-hidden rounded-xl text-left"
      title={it.title}
    >
      <div className="relative rounded-xl bg-brand-dark/55 px-3 py-3 backdrop-blur">
        <div className="flex items-start justify-between gap-2">
          <p className="line-clamp-1 text-xs font-extrabold uppercase tracking-wide text-white">
            {it.title}
          </p>
        </div>
        <p className="mt-1 text-[11px] text-white/65">
          {platformLabel(it.platform)} • {it.meta || "—"}
        </p>
        <p className="mt-2 text-[10px] text-white/50">{it.time}</p>
      </div>
    </button>
  );
}

function DayColumn({ day, isToday, onOpen }) {
  return (
    <div
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl backdrop-blur",
        isToday
          ? "bg-gradient-to-b from-brand-cyan/15 to-brand-dark/45 ring-1 ring-brand-cyan/40"
          : "bg-brand-dark/45",
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 md:px-4 md:py-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-white/55">
            {day.dayLabel}
          </p>
          <p
            className={[
              "mt-0.5 text-base font-extrabold tracking-wide md:text-lg",
              isToday ? "text-brand-cyan" : "text-white",
            ].join(" ")}
          >
            {day.dayNum}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          {isToday ? (
            <span className="rounded-full border border-brand-cyan/25 bg-brand-cyan/20 px-2 py-0.5 text-[10px] font-extrabold text-white">
              Auj.
            </span>
          ) : null}
          <span className="rounded-full border border-brand-cyan/20 bg-black/25 px-2 py-0.5 text-[10px] font-semibold text-white/75">
            {day.items.length}
          </span>
        </div>
      </div>

      <div className="grid flex-1 gap-2 p-2 md:p-3">
        {day.items.length ? (
          day.items.map((it) => (
            <EventCard key={it.id} it={it} isToday={isToday} onOpen={onOpen} />
          ))
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-black/15 px-2 py-6 text-center">
            <span className="text-xs text-white/55">—</span>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroReleaseCard({ release, onOpen }) {
  if (!release) return null;
  return (
    <div className="group relative mb-8 overflow-hidden rounded-3xl">
      <GradientRing radiusClass="rounded-3xl" thickness={2} glow />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-brand-wine/20 to-brand-cyan/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-primary/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              <Sparkles className="h-3.5 w-3.5" />
              Prochaine sortie
            </div>

            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-4xl">
              {release.title}
            </h2>
            <p className="mt-2 text-lg font-semibold text-white/90 md:text-xl">
              {platformLabel(release.platform)} • {release.meta || "—"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Disponible {release.time} cette semaine.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpen?.(release)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-white/90"
              >
                <Play className="h-4 w-4 fill-black" />
                Voir la fiche
              </button>
              <button
                onClick={() => {}}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Bell className="h-4 w-4" />
                Rappel
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid h-48 w-32 place-items-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-cyan shadow-2xl ring-1 ring-white/20">
              <CalIcon className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeekSummaryCard({ weekData }) {
  const total = weekData.reduce((sum, d) => sum + d.items.length, 0);
  const platforms = new Set(
    weekData.flatMap((d) => d.items.map((i) => i.platform)),
  ).size;

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-primary/20 ring-1 ring-brand-primary/30">
            <TrendingUp className="h-6 w-6 text-brand-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Cette semaine
            </p>
            <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
              Résumé des sorties
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              <strong className="text-white">{total} sorties</strong>{" "}
              programmées sur{" "}
              <strong className="text-white">{platforms} plateformes</strong>.
            </p>
          </div>
        </div>
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
  const [platform, setPlatform] = React.useState("all");
  const [weekStart, setWeekStart] = React.useState(() =>
    startOfWeek(new Date()),
  );

  const TODAY_KEY = formatDateKey(new Date());

  const openItem = (it) => {
    // navigate(`/series-details`) ou `/news/...` ou un drawer
    console.log("open calendar item:", it?.id);
  };

  const platformFiltered = (items) =>
    platform === "all" ? items : items.filter((x) => x.platform === platform);

  const prevWeek = () => setWeekStart((s) => addDays(s, -7));
  const nextWeek = () => setWeekStart((s) => addDays(s, 7));

  const weekData = generateWeekData(weekStart).map((d) => ({
    ...d,
    items: platformFiltered(d.items),
  }));

  // List view groups derived from week (simple for MVP)
  const listGroups = weekData
    .filter((d) => d.items.length)
    .map((d) => ({
      key: d.dateKey,
      label: `${d.dayLabel} ${d.dayNum}`,
      items: d.items,
    }));

  const nextRelease = weekData
    .flatMap((d) => d.items.map((it) => ({ ...it, dateKey: d.dateKey })))
    .find((it) => it.dateKey >= TODAY_KEY);

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
                  {weekRangeLabel(weekStart)} — épisodes, saisons, nouvelles
                  séries.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-dark/60 px-4 py-2 text-xs text-white/70">
                <TrendingUp className="h-4 w-4 text-brand-cyan" />
                Mis à jour en temps réel
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2">
              {PLATFORMS.map((p) => (
                <Chip
                  key={p.key}
                  active={platform === p.key}
                  onClick={() => setPlatform(p.key)}
                  icon={p.key === "all" ? Eye : Filter}
                >
                  {p.label}
                </Chip>
              ))}
              <div className="ml-auto flex items-center gap-2">
                <ViewToggle value={view} onChange={setView} />
              </div>
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
              <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-brand-cyan/20 bg-brand-dark/55 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                    Vue semaine
                  </p>
                  <p className="mt-1 text-sm font-bold text-white md:text-base">
                    {weekRangeLabel(weekStart)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={prevWeek}
                    className="rounded-full flex items-center gap-2 border border-brand-cyan/25 bg-brand-dark/70 px-4 py-2 text-xs font-semibold text-white/90 transition-all hover:border-brand-cyan/50 hover:bg-brand-cyan/15 hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Semaine précédente</span>
                  </button>
                  <button
                    type="button"
                    onClick={nextWeek}
                    className="rounded-full flex items-center gap-2 border border-brand-cyan/25 bg-brand-dark/70 px-4 py-2 text-xs font-semibold text-white/90 transition-all hover:border-brand-cyan/50 hover:bg-brand-cyan/15 hover:text-white"
                  >
                    <span>Semaine suivante</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {nextRelease ? (
                <HeroReleaseCard release={nextRelease} onOpen={openItem} />
              ) : null}

              <div className="grid grid-cols-1 gap-3 md:grid-cols-7">
                {weekData.map((day) => (
                  <DayColumn
                    key={day.dateKey}
                    day={day}
                    isToday={day.dateKey === TODAY_KEY}
                    onOpen={openItem}
                  />
                ))}
              </div>

              <div className="mt-8">
                <WeekSummaryCard weekData={weekData} />
              </div>
            </section>
          </>
        ) : null}

        {/* LIST VIEW */}
        {view === "list" ? (
          <section>
            <SectionHeader
              title="VUE LISTE"
              rightLabel={weekRangeLabel(weekStart)}
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
    </div>
  );
}
