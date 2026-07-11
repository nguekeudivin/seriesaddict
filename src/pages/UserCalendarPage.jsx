import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Sparkles,
  Popcorn,
  User,
  CheckCircle2,
  Play,
  Bell,
  CalendarCheck,
  Timer,
} from "lucide-react";

/**
 * UserCalendarPage.jsx — Calendrier personnel de l'utilisateur
 * - Vue semaine simple et lisible
 * - Prochain épisode mis en avant
 * - Mode binge watching : suggestions de session selon le temps libre
 */

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
// Helpers dates
// ---------------------------
function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDateKey(date) {
  return date.toISOString().split("T")[0];
}

function formatShortMonth(date) {
  return [
    "janv.",
    "fév.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ][date.getMonth()];
}

function formatDayLabel(date) {
  return ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."][
    date.getDay()
  ];
}

function weekRangeLabel(start) {
  const end = addDays(start, 6);
  return `Semaine du ${start.getDate()} ${formatShortMonth(start)} au ${end.getDate()} ${formatShortMonth(end)} ${end.getFullYear()}`;
}

// ---------------------------
// Mock data — utilisateur et séries
// ---------------------------
const USER = {
  name: "Charlotte",
  avatar:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
  habits: {
    preferredEveningTime: "21:00",
    favoriteDays: ["Lundi", "Mercredi", "Samedi"],
    avgEpisodeMinutes: 45,
    weekendFreeHours: 3,
    weeklyWatchGoal: 5,
  },
  stats: {
    watchedThisWeek: 4,
    toCatchUp: 7,
    upcomingReleases: 6,
    streakDays: 12,
  },
  currentSeries: {
    title: "The Last Of Us",
    season: 2,
    nextEpisode: 3,
    totalEpisodesInSeason: 7,
    platform: "HBO",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60",
  },
};

const FOLLOWED_SERIES = [
  {
    id: "s1",
    title: "The Last Of Us",
    platform: "HBO",
    isFavorite: true,
    releaseWeekday: 1,
    releaseTime: "20:00",
    season: 2,
    episode: 3,
    durationMin: 55,
    episodeType: "episode",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "s2",
    title: "House Of The Dragon",
    platform: "HBO",
    isFavorite: true,
    releaseWeekday: 3,
    releaseTime: "21:00",
    season: 3,
    episode: 1,
    durationMin: 60,
    episodeType: "premiere",
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "s3",
    title: "Severance",
    platform: "Apple TV+",
    isFavorite: false,
    releaseWeekday: 5,
    releaseTime: "00:00",
    season: 2,
    episode: 8,
    durationMin: 45,
    episodeType: "episode",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "s4",
    title: "The Bear",
    platform: "Disney+",
    isFavorite: false,
    releaseWeekday: 2,
    releaseTime: "20:30",
    season: 3,
    episode: 5,
    durationMin: 35,
    episodeType: "episode",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "s5",
    title: "Silo",
    platform: "Apple TV+",
    isFavorite: true,
    releaseWeekday: 5,
    releaseTime: "00:00",
    season: 2,
    episode: 6,
    durationMin: 50,
    episodeType: "episode",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "s6",
    title: "The Boys",
    platform: "Prime Video",
    isFavorite: false,
    releaseWeekday: 0,
    releaseTime: "22:00",
    season: 5,
    episode: 2,
    durationMin: 50,
    episodeType: "episode",
    img: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "s7",
    title: "Andor",
    platform: "Disney+",
    isFavorite: true,
    releaseWeekday: 6,
    releaseTime: "18:00",
    season: 2,
    episode: 10,
    durationMin: 55,
    episodeType: "finale",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=60",
  },
];

// ---------------------------
// UI primitives
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

function IconButton({ onClick, title, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-cyan/25 bg-brand-dark/70 text-white/80 transition-all hover:border-brand-cyan/50 hover:bg-brand-cyan/15 hover:text-white"
    >
      {children}
    </button>
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

function EventCard({ it, isToday = false, onOpen }) {
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
          {it.isFavorite ? (
            <Heart
              className="h-3.5 w-3.5 shrink-0 text-brand-primary"
              fill={BRAND.primary}
            />
          ) : null}
        </div>
        <p className="mt-1 text-[11px] text-white/65">
          {it.platform} • S{it.season}E{it.episode.toString().padStart(2, "0")}
        </p>
        <p className="mt-2 text-[10px] text-white/50">{it.releaseTime}</p>
      </div>
    </button>
  );
}

function DayColumn({ day, isToday, onOpen }) {
  const habitHere = USER.habits.favoriteDays.includes(day.dayName);

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
          {habitHere ? (
            <span className="rounded-full border border-brand-primary/25 bg-[rgba(132,29,79,0.18)] px-2 py-0.5 text-[10px] font-semibold text-white/75">
              Habitude
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
            {habitHere ? (
              <span className="text-[10px] text-white/40">
                Créneau habituel
              </span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

function CountdownBadge({ targetDate }) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white/80">
      <Timer className="h-3.5 w-3.5 text-brand-cyan" />
      {days === 0
        ? "Aujourd’hui"
        : days === 1
          ? "Dans 1 jour"
          : `Dans ${days} jours`}
    </span>
  );
}

function HeroCard({ nextEpisode, onOpen }) {
  const releaseDate = new Date();
  releaseDate.setDate(
    releaseDate.getDate() +
      ((nextEpisode.releaseWeekday - releaseDate.getDay() + 7) % 7),
  );

  return (
    <div className="group relative overflow-hidden rounded-3xl">
      <GradientRing radiusClass="rounded-3xl" thickness={2} glow />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${nextEpisode.img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-brand-cyan/20" />

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Prochain épisode
              </span>
              <CountdownBadge targetDate={releaseDate} />
              {nextEpisode.isFavorite ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white/80">
                  <Heart
                    className="h-3 w-3 text-brand-primary"
                    fill={BRAND.primary}
                  />{" "}
                  Favori
                </span>
              ) : null}
            </div>

            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-4xl">
              {nextEpisode.title}
            </h2>
            <p className="mt-2 text-lg font-semibold text-white/90 md:text-xl">
              Saison {nextEpisode.season} · Épisode{" "}
              {nextEpisode.episode.toString().padStart(2, "0")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Disponible {nextEpisode.releaseTime} sur{" "}
              <span className="font-semibold text-white">
                {nextEpisode.platform}
              </span>
              . Durée estimée : {nextEpisode.durationMin} min.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpen?.(nextEpisode)}
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
            <div
              className="h-48 w-32 overflow-hidden rounded-2xl bg-cover bg-center shadow-2xl ring-1 ring-white/20"
              style={{ backgroundImage: `url(${nextEpisode.img})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BingeCard({ freeHours, currentSeries, avgDuration, alternatives }) {
  const episodes = Math.max(
    1,
    Math.floor(
      (freeHours * 60) / (avgDuration || currentSeries.durationMin || 45),
    ),
  );

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-primary/20 ring-1 ring-brand-primary/30">
            <Popcorn className="h-6 w-6 text-brand-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Mode binge watching
            </p>
            <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
              Suggestion du week-end
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Vous avez{" "}
              <strong className="text-white">{freeHours} heures</strong> libres
              samedi. Voici comment en profiter.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-brand-cyan/20 bg-black/20 p-4">
                <p className="text-xs font-semibold text-brand-cyan">
                  Série en cours
                </p>
                <p className="mt-1 text-sm text-white">
                  <strong>{episodes} épisodes</strong> de{" "}
                  <span className="text-white">{currentSeries.title}</span>
                </p>
                <p className="mt-1 text-xs text-white/50">
                  S{currentSeries.season} · Ép.{currentSeries.nextEpisode} à{" "}
                  {Math.min(
                    currentSeries.nextEpisode + episodes - 1,
                    currentSeries.totalEpisodesInSeason,
                  )}
                </p>
              </div>

              {alternatives?.[0] ? (
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold text-white/60">
                    Alternative
                  </p>
                  <p className="mt-1 text-sm text-white">
                    <strong>{alternatives[0].title}</strong>
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    S{alternatives[0].season}E
                    {alternatives[0].episode.toString().padStart(2, "0")} ·{" "}
                    {alternatives[0].durationMin} min
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {}}
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-primary/80"
              >
                <CheckCircle2 className="h-4 w-4" />
                Marquer comme vu
              </button>
              <button
                onClick={() => {}}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Planifier
              </button>
            </div>
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
            {items.length} épisodes
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
export default function UserCalendarPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState("all"); // all | followed | favorites
  const [view, setView] = React.useState("week"); // week | list
  const [weekStart, setWeekStart] = React.useState(() =>
    startOfWeek(new Date()),
  );

  const TODAY_KEY = formatDateKey(new Date());

  const goToday = () => setWeekStart(startOfWeek(new Date()));
  const prevWeek = () => setWeekStart((s) => addDays(s, -7));
  const nextWeek = () => setWeekStart((s) => addDays(s, 7));

  const generateWeekData = React.useCallback((start) => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = addDays(start, i);
      const dateKey = formatDateKey(d);
      const dayName = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
      ][d.getDay()];

      const items = FOLLOWED_SERIES.filter(
        (s) => s.releaseWeekday === d.getDay(),
      ).map((s) => ({
        ...s,
        id: `${s.id}-${dateKey}`,
        dateKey,
      }));

      return {
        dateKey,
        dayName,
        dayLabel: formatDayLabel(d),
        dayNum: String(d.getDate()),
        items,
      };
    });
  }, []);

  const rawWeekData = generateWeekData(weekStart);

  const filteredWeekData = rawWeekData.map((d) => ({
    ...d,
    items: d.items.filter((it) => {
      if (filter === "favorites") return it.isFavorite;
      if (filter === "followed") return !it.isFavorite;
      return true;
    }),
  }));

  const listGroups = filteredWeekData
    .filter((d) => d.items.length)
    .map((d) => ({
      key: d.dateKey,
      label: `${d.dayLabel} ${d.dayNum}`,
      items: d.items,
    }));

  const allWeekItems = filteredWeekData.flatMap((d) => d.items);
  const nextEpisode = allWeekItems.find((it) => it.dateKey >= TODAY_KEY) ||
    allWeekItems[0] || {
      ...USER.currentSeries,
      releaseWeekday: new Date().getDay(),
      releaseTime: USER.habits.preferredEveningTime,
      durationMin: USER.habits.avgEpisodeMinutes,
      episodeType: "episode",
      episode: USER.currentSeries.nextEpisode,
      isFavorite: true,
    };
  const bingeAlternative = FOLLOWED_SERIES.find(
    (s) => s.title !== USER.currentSeries.title,
  );

  const openItem = (it) => {
    navigate("/series-details", { state: { id: it.id, title: it.title } });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button
            onClick={() => navigate("/user-space")}
            className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15"
          >
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
            <button
              onClick={() => navigate("/user-space")}
              className="hidden rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white/75 hover:text-white md:inline-flex"
            >
              Espace membre
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35 bg-black/25">
              <img
                src={USER.avatar}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                  Mon calendrier
                </h1>
                <p className="mt-1 text-sm text-white/70">
                  {weekRangeLabel(weekStart)} — vos sorties, vos habitudes,
                  votre rythme.
                </p>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2">
              <Chip
                active={filter === "all"}
                onClick={() => setFilter("all")}
                icon={Eye}
              >
                Tout
              </Chip>
              <Chip
                active={filter === "followed"}
                onClick={() => setFilter("followed")}
                icon={User}
              >
                Suivies
              </Chip>
              <Chip
                active={filter === "favorites"}
                onClick={() => setFilter("favorites")}
                icon={Heart}
              >
                Favoris
              </Chip>
            </div>

            <div className="h-px w-full bg-brand-cyan/25" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-10 px-5 pb-24">
        {/* Hero — prochain épisode */}
        <section>
          <HeroCard nextEpisode={nextEpisode} onOpen={openItem} />
        </section>

        {view === "week" ? (
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
                  onClick={goToday}
                  className="rounded-full flex items-center gap-2 border border-brand-cyan/25 bg-brand-dark/70 px-4 py-2 text-xs font-semibold text-white/90 transition-all hover:border-brand-cyan/50 hover:bg-brand-cyan/15 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span> Semaine précédente</span>
                </button>
                <button
                  type="button"
                  onClick={goToday}
                  className="rounded-full flex items-center gap-2 border border-brand-cyan/25 bg-brand-dark/70 px-4 py-2 text-xs font-semibold text-white/90 transition-all hover:border-brand-cyan/50 hover:bg-brand-cyan/15 hover:text-white"
                >
                  <span> Semaine suivante</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-7">
              {filteredWeekData.map((day) => (
                <DayColumn
                  key={day.dateKey}
                  day={day}
                  isToday={day.dateKey === TODAY_KEY}
                  onOpen={openItem}
                />
              ))}
            </div>
          </section>
        ) : (
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
                  Aucun épisode correspondant à ce filtre.
                </div>
              )}
            </div>
          </section>
        )}

        {/* Binge watching */}
        <section>
          <BingeCard
            freeHours={USER.habits.weekendFreeHours}
            currentSeries={USER.currentSeries}
            avgDuration={USER.habits.avgEpisodeMinutes}
            alternatives={bingeAlternative ? [bingeAlternative] : []}
          />
        </section>

        <div className="h-px w-full bg-brand-cyan/25" />
      </main>
    </div>
  );
}
