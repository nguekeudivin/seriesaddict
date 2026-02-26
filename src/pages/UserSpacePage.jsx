import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Pencil,
  Users,
  Star,
  MessageCircle,
  List,
  Bookmark,
  CheckCircle2,
  PlayCircle,
  Clock,
  Heart,
  Plus,
  LayoutGrid,
  Library,
  CalendarDays,
  Crown,
} from "lucide-react";
import { useLocation } from "react-router-dom";

/**
 * MemberSpace.jsx — Espace membre (référencement + communauté)
 * ADN:
 * - Immersif/premium (dark + gradient rings + glow)
 * - Centré "Mes séries" + incitation à interagir (CTA contribution)
 * - Ajout d’une vraie dimension communauté
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

const TABS = [
  { key: "feed", label: "Feed", to: "/my/feed", icon: LayoutGrid },
  { key: "library", label: "Sériethèque", to: "/my/series", icon: Library },
  { key: "calendar", label: "Calendrier", to: "/calendar", icon: CalendarDays },
  { key: "watchlist", label: "A voir", to: "/my/watchlist", icon: Bookmark },
  { key: "lists", label: "Listes", to: "/lists", icon: List },
  { key: "friends", label: "Amis", to: "/members", icon: Users },
];

export function MemberTabsNav({
  className = "",
  // optionnel: si tu veux piloter l’actif manuellement
  activeKey,
  onChange,
}) {
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
                {/* Ring (active / vip / default) */}
                <span
                  className={[
                    "pointer-events-none absolute inset-0 rounded-full opacity-70",
                    tab.accent === "vip" && !isActive ? "opacity-90" : "",
                  ].join(" ")}
                  style={{
                    background:
                      tab.accent === "vip"
                        ? "linear-gradient(90deg, rgba(255,215,0,0.95), rgba(30,108,134,0.95))"
                        : "linear-gradient(90deg, rgba(132,29,79,1), rgba(30,108,134,1))",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1.5px",
                  }}
                />

                {/* Glow on hover (vip a un glow un peu plus visible) */}
                <span
                  className={[
                    "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70",
                    tab.accent === "vip" ? "group-hover:opacity-90" : "",
                  ].join(" ")}
                  style={{
                    background:
                      tab.accent === "vip"
                        ? "linear-gradient(90deg, rgba(255,215,0,0.95), rgba(30,108,134,0.95))"
                        : "linear-gradient(90deg, rgba(132,29,79,1), rgba(30,108,134,1))",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1.5px",
                  }}
                />

                {/* Body */}
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
                      isActive
                        ? tab.accent === "vip"
                          ? "text-[rgba(255,215,0,0.95)]"
                          : "text-brand-cyan"
                        : tab.accent === "vip"
                          ? "text-[rgba(255,215,0,0.85)]"
                          : "text-brand-cyan/90",
                    ].join(" ")}
                  />

                  <span>{tab.label}</span>

                  {tab.accent === "vip" ? (
                    <span className="ml-1 rounded-full bg-black/35 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[rgba(255,215,0,0.95)] ring-1 ring-white/10">
                      VIP
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle divider */}
      <div className="mt-3 h-px w-full bg-brand-cyan/20" />
    </nav>
  );
}

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

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group/btn relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
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

function VipButton() {
  return (
    <button className="group relative shrink-0 rounded-full p-[1.5px] transition-transform duration-300">
      {/* Ring (active / vip / default) */}
      <span
        className={[
          "pointer-events-none absolute inset-0 rounded-full opacity-70",
          "opacity-90",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,215,0,0.95), rgba(30,108,134,0.95))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />

      {/* Glow on hover (vip a un glow un peu plus visible) */}
      <span
        className={[
          "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70",
          "group-hover:opacity-90",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,215,0,0.95), rgba(30,108,134,0.95))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />

      {/* Body */}
      <span
        className={[
          "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur",
          "bg-black/25 text-white/75 hover:text-white",
        ].join(" ")}
      >
        <Crown
          className={["h-4 w-4", "text-[rgba(255,215,0,0.95)]"].join(" ")}
        />
        <span className="ml-1 rounded-full bg-black/35 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[rgba(255,215,0,0.95)] ring-1 ring-white/10">
          VIP
        </span>
      </span>
    </button>
  );
}

function Rail({ children }) {
  return (
    <div className="relative overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4">{children}</div>
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

function ContinueCard({ item, onOpen, onMarkWatched, onUpdateProgress }) {
  return (
    <div className="group relative w-[270px] shrink-0">
      <div className="relative overflow-hidden rounded-2xl border border-brand-cyan/20 bg-black/25">
        <div
          className="aspect-[16/10] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        <div className="absolute right-3 top-3 flex items-center gap-2">
          <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/75 backdrop-blur">
            S{item.season} • E{item.episode}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="line-clamp-1 text-sm font-semibold text-white">
            {item.title}
          </p>
          <p className="mt-1 text-xs text-white/70">Dernier épisode indiqué</p>
          <ProgressBar value={item.progress} />

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white"
            >
              Ouvrir la fiche
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </button>

            <div className="flex items-center gap-2">
              <IconButton title="Marquer vu" onClick={onMarkWatched}>
                <CheckCircle2 className="h-5 w-5 text-brand-cyan" />
              </IconButton>
              <IconButton title="Mettre à jour" onClick={onUpdateProgress}>
                <Pencil className="h-5 w-5" style={{ color: BRAND.primary }} />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Hover ring */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-cyan/45" />
        </div>
      </div>
    </div>
  );
}

function NewsCardCompact({ item, onOpen }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative p-6">
        <div
          className="pointer-events-none absolute inset-4 rounded-2xl"
          style={{
            background: GRADIENT,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px",
          }}
        />
        <div className="relative min-h-[210px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
            <Clock className="h-3.5 w-3.5 text-brand-cyan" />
            {item.when}
          </div>

          <h3 className="mt-4 line-clamp-2 text-base font-extrabold uppercase tracking-wide text-white">
            {item.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/75">
            {item.excerpt}
          </p>

          <div className="mt-5">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/85 hover:text-white"
            >
              Lire
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function VideoCard({ item, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-brand-cyan/20 bg-black/25">
      <div
        className="aspect-[16/10] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/75 backdrop-blur">
        <PlayCircle className="h-4 w-4 text-brand-cyan" />
        {item.tag}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="line-clamp-2 text-sm font-semibold text-white">
          {item.title}
        </p>
        <button
          onClick={onOpen}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white"
        >
          Regarder
          <ChevronRight className="h-4 w-4 text-brand-cyan" />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-cyan/45" />
      </div>
    </div>
  );
}

function SeriesPoster({ item, onOpen, badge }) {
  return (
    <div
      className="group relative w-[230px] shrink-0 cursor-pointer"
      onClick={onOpen}
      title={item.title}
    >
      <div className="relative overflow-hidden rounded-2xl border border-brand-cyan/25 bg-black/30">
        <div
          className="aspect-[2/3] w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {badge ? (
          <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
            {badge}
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="line-clamp-1 text-sm font-semibold text-white">
            {item.title}
          </p>
          <p className="mt-1 line-clamp-1 text-xs text-white/70">
            {item.year} • {item.genres.join(" • ")}
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-cyan/45" />
        </div>
      </div>
    </div>
  );
}

function ContributeTask({ item, onPrimary, onSecondary }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />
      <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="h-16 w-12 overflow-hidden rounded-lg ring-2 ring-black/60">
            <img src={item.img} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Action recommandée
            </p>
            <p className="mt-1 line-clamp-1 text-sm font-extrabold uppercase tracking-wide text-white">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-white/70">{item.reason}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onPrimary}
                className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/85 hover:text-white"
              >
                {item.primaryLabel}
                <ChevronRight className="h-4 w-4 text-brand-cyan" />
              </button>
              {item.secondaryLabel ? (
                <button
                  onClick={onSecondary}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
                >
                  {item.secondaryLabel}
                </button>
              ) : null}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <IconButton title="Ajouter à une liste" onClick={onSecondary}>
              <List className="h-5 w-5 text-brand-cyan" />
            </IconButton>
            <IconButton title="Favori">
              <Heart className="h-5 w-5" style={{ color: BRAND.primary }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({ item, onOpenProfile, onOpenSeries }) {
  return (
    <div className="group flex items-start justify-between gap-4 rounded-2xl border border-brand-cyan/15 bg-black/20 px-5 py-4 hover:border-brand-cyan/25">
      <div className="flex items-start gap-4 min-w-0">
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

function ListTile({ item, onOpen, onCreate }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />
      <div className="relative rounded-2xl bg-brand-dark/55 p-6 backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Liste
            </p>
            <p className="mt-1 line-clamp-1 text-sm font-extrabold uppercase tracking-wide text-white">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-white/70">{item.count} séries</p>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={onOpen}
                className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/85 hover:text-white"
              >
                Ouvrir
                <ChevronRight className="h-4 w-4 text-brand-cyan" />
              </button>

              <button
                onClick={onCreate}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
              >
                Partager
              </button>
            </div>
          </div>

          <div className="flex -space-x-3">
            {item.posters.slice(0, 4).map((p, i) => (
              <div
                key={i}
                className="h-16 w-12 overflow-hidden rounded-lg ring-2 ring-black/60"
              >
                <img src={p} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
            {item.extra ? (
              <div className="grid h-16 w-12 place-items-center rounded-lg bg-black/45 text-xs font-bold text-white ring-2 ring-black/60">
                +{item.extra}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------
// Mock data (replace by API)
// ---------------------------
const USER = {
  name: "Charlotte",
  handle: "@charlotte",
  avatar:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
  badge: "Membre actif",
  memberSince: "2022",
  heroBg:
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=60",
  stats: {
    followed: 86,
    marked: 312, // épisodes marqués vus
    reviews: 19,
    lists: 6,
    friends: 14,
  },
};

const CONTINUE = [
  {
    id: "c1",
    title: "Severance",
    season: 1,
    episode: 6,
    progress: 0.6,
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "c2",
    title: "The Bear",
    season: 2,
    episode: 2,
    progress: 0.3,
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "c3",
    title: "Stranger Things",
    season: 4,
    episode: 4,
    progress: 0.45,
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=60",
  },
];

const CONTRIBUTE = [
  {
    id: "t1",
    title: "House of the Dragon",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
    reason: "Tu l’as marquée comme vue, mais tu n’as pas encore donné de note.",
    primaryLabel: "Donner une note",
    secondaryLabel: "Écrire un avis",
  },
  {
    id: "t2",
    title: "The Boys",
    img: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
    reason:
      "Ta progression n’est pas à jour. Indique le dernier épisode pour garder ton suivi clair.",
    primaryLabel: "Mettre à jour",
    secondaryLabel: "Ajouter à une liste",
  },
];

const MY_NEWS = Array.from({ length: 3 }).map((_, i) => ({
  id: `n-${i}`,
  when: ["il y a 2 h", "hier", "il y a 4 j"][i % 3],
  title: [
    "Une nouvelle saison confirmée pour Severance",
    "The Bear : casting et date de sortie",
    "Stranger Things : teaser et nouvelles infos",
  ][i % 3],
  excerpt:
    "Résumé court et éditorial, orienté fan: l’essentiel à retenir et ce que ça signifie pour la suite.",
  img: [
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=60",
  ][i % 3],
}));

const MY_VIDEOS = [
  {
    id: "v1",
    tag: "Trailer",
    title: "Severance — Bande-annonce (VF)",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "v2",
    tag: "Interview",
    title: "The Bear — Focus casting & coulisses",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "v3",
    tag: "Extrait",
    title: "Stranger Things — Scène culte",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60",
  },
];

const SIMILAR = Array.from({ length: 8 }).map((_, i) => ({
  id: `s-${i}`,
  title: ["Dark", "Silo", "The Night Of", "Mindhunter", "From"][i % 5],
  year: 2016 + (i % 8),
  genres: i % 2 ? ["Thriller", "Mystère"] : ["SF", "Drame"],
  img: [
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=60",
  ][i % 4],
}));

const MY_LISTS = [
  {
    id: "l1",
    title: "Séries dystopiques à voir absolument",
    count: 12,
    posters: [
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 6,
  },
  {
    id: "l2",
    title: "Mini-séries parfaites pour le week-end",
    count: 8,
    posters: [
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 3,
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
    action: "a commenté un avis sur",
    what: "Stranger Things",
    when: "il y a 3 j",
    icon: <MessageCircle className="h-5 w-5 text-brand-cyan" />,
  },
];

function StatCard({ icon: Icon, label, value, hint, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl text-left"
    >
      <div className="relative rounded-2xl bg-brand-dark/55 p-5 backdrop-blur transition-colors duration-300 group-hover:bg-brand-dark/65">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-black/30 ring-1 ring-white/10">
            {Icon ? <Icon className="h-5 w-5 text-brand-cyan" /> : null}
          </div>
          <div className="text-3xl font-extrabold tracking-tight text-white">
            {value}
          </div>
        </div>

        {/* Value */}
        <div className="mt-4">
          <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
            {label}
          </div>
          {hint ? (
            <div className="mt-2 text-sm text-white/60 line-clamp-1">
              {hint}
            </div>
          ) : null}
        </div>

        {/* Subtle bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
    </button>
  );
}

export default function MemberSpace() {
  const navigate = useNavigate();

  const goSeriesDetails = () => navigate("/series-details");
  const goNews = () => navigate("/news");
  const goVideos = () => navigate("/trailers");
  const goLists = () => navigate("/lists");
  const goFriends = () => navigate("/members");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header (same pattern) */}
      <header className="relative z-20 bg-black/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button
            className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15"
            onClick={() => navigate("/")}
          >
            <span className="text-sm font-semibold">Menu</span>
          </button>

          <div
            className="select-none cursor-pointer text-center"
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
            <span className="hidden text-sm text-white/85 md:block">
              Hello <span className="font-semibold">{USER.name}</span> !
            </span>
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35">
              <img
                alt="Avatar"
                className="h-full w-full object-cover"
                src={USER.avatar}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero profil (identité + appartenance + CTA) */}
      <section className="relative -mt-16 pt-16">
        <div className="relative">
          <div
            className="h-[520px] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${USER.heroBg})` }}
          />
          {/* overlays cinematic */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-wine/30 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/65" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
                {/* Left: identity */}
                <div className="relative">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
                          <img
                            src={USER.avatar}
                            alt="Avatar"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div
                          className="pointer-events-none absolute -inset-1 rounded-full opacity-70"
                          style={{
                            background: GRADIENT,
                            WebkitMask:
                              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            padding: "2px",
                          }}
                        />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                          {USER.badge} • Membre depuis {USER.memberSince}
                        </p>
                        <h1 className="mt-1 text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                          {USER.name}{" "}
                          <span className="text-white/60 text-sm font-semibold">
                            {USER.handle}
                          </span>
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm text-white/70">
                          Ton QG séries : suivi, avis, listes… et ce que fait ta
                          communauté.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <VipButton />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                      icon={Bookmark}
                      label="Séries suivies"
                      value={USER.stats.followed}
                      hint="Ta sériethèque"
                      onClick={() => navigate("/my/series")}
                    />
                    <StatCard
                      icon={CheckCircle2}
                      label="Épisodes marqués vus"
                      value={USER.stats.marked}
                      hint="Historique & progression"
                      onClick={() => navigate("/my/history")}
                    />
                    <StatCard
                      icon={MessageCircle}
                      label="Avis"
                      value={USER.stats.reviews}
                      hint="Tes critiques"
                      onClick={() => navigate("/my/reviews")}
                    />
                    {/* <StatCard
                      icon={List}
                      label="Listes"
                      value={USER.stats.lists}
                      hint="Tes collections"
                      onClick={goLists}
                    /> */}
                    <StatCard
                      icon={Users}
                      label="Amis"
                      value={USER.stats.friends}
                      hint="Ton réseau"
                      onClick={goFriends}
                    />
                  </div>

                  <MemberTabsNav className="mt-8" />
                </div>

                {/* Right: mini panel "à faire" */}
                <div className="group relative overflow-hidden rounded-[28px]">
                  <GradientRing radiusClass="rounded-[28px]" thickness={2} />
                  <GradientRing
                    radiusClass="rounded-[28px]"
                    thickness={2}
                    glow
                    hoverGlow
                  />
                  <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                      Boost ton profil
                    </p>
                    <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-white">
                      Actions rapides
                    </p>

                    <div className="mt-4 grid gap-3">
                      <button
                        onClick={() => navigate("/my/contribute?tab=ratings")}
                        className="group/row flex items-center justify-between rounded-xl border border-brand-cyan/15 bg-black/20 px-4 py-3 text-sm text-white/80 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-brand-cyan" />
                          Noter des séries vues
                        </span>
                        <ChevronRight className="h-4 w-4 text-brand-cyan transition-transform group-hover/row:translate-x-0.5" />
                      </button>

                      <button
                        onClick={() =>
                          navigate("/my/contribute?tab=progression")
                        }
                        className="group/row flex items-center justify-between rounded-xl border border-brand-cyan/15 bg-black/20 px-4 py-3 text-sm text-white/80 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <Pencil
                            className="h-4 w-4"
                            style={{ color: BRAND.primary }}
                          />
                          Mettre à jour mes épisodes
                        </span>
                        <ChevronRight className="h-4 w-4 text-brand-cyan transition-transform group-hover/row:translate-x-0.5" />
                      </button>

                      <button
                        onClick={() => navigate("/lists/create")}
                        className="group/row flex items-center justify-between rounded-xl border border-brand-cyan/15 bg-black/20 px-4 py-3 text-sm text-white/80 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <Plus className="h-4 w-4 text-brand-cyan" />
                          Créer une liste
                        </span>
                        <ChevronRight className="h-4 w-4 text-brand-cyan transition-transform group-hover/row:translate-x-0.5" />
                      </button>
                    </div>

                    <div className="mt-5 h-px w-full bg-brand-cyan/20" />
                    <p className="mt-4 text-xs text-white/55">
                      Plus ton profil est complet, plus tes recommandations et
                      comparaisons communauté sont pertinentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subtle separator */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black" />
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-20 px-5 py-12">
        {/* 1) Mes derniers épisodes à voir */}
        <section>
          <SectionHeader
            title="MES DERNIERS ÉPISODES À VOIR"
            rightLabel="VOIR MA SÉRIETHÈQUE"
            onRightClick={() => navigate("/my/series")}
          />
          <Rail>
            {CONTINUE.map((c) => (
              <ContinueCard
                key={c.id}
                item={c}
                onOpen={goSeriesDetails}
                onMarkWatched={() => navigate("/my/history")}
                onUpdateProgress={() => navigate("/my/progression")}
              />
            ))}
          </Rail>
          <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
            <Clock className="h-4 w-4 text-brand-cyan" />
            <span>
              Indique ton dernier épisode pour garder un suivi clair (pas besoin
              de streaming).
            </span>
          </div>
        </section>

        {/* 2) Continuer à contribuer (CTA intelligent) */}
        <section>
          <SectionHeader
            title="CONTINUER À CONTRIBUER"
            rightLabel="TOUTES MES ACTIONS"
            onRightClick={() => navigate("/my/contribute")}
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {CONTRIBUTE.map((t) => (
              <ContributeTask
                key={t.id}
                item={t}
                onPrimary={() => navigate("/my/contribute")}
                onSecondary={() => navigate("/lists")}
              />
            ))}
          </div>
        </section>

        {/* 3) Dernières actus sur mes séries */}
        <section>
          <SectionHeader
            title="DERNIÈRES ACTUS SUR MES SÉRIES"
            rightLabel="TOUTES LES ACTUS"
            onRightClick={goNews}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {MY_NEWS.map((n) => (
              <NewsCardCompact
                key={n.id}
                item={n}
                onOpen={() => navigate("/news/1")}
              />
            ))}
          </div>
        </section>

        {/* 4) Vidéos de mes séries */}
        <section>
          <SectionHeader
            title="VIDÉOS DE MES SÉRIES"
            rightLabel="TOUTES LES VIDÉOS"
            onRightClick={goVideos}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {MY_VIDEOS.map((v) => (
              <VideoCard
                key={v.id}
                item={v}
                onOpen={() => navigate("/trailers/1")}
              />
            ))}
          </div>
        </section>

        {/* 5) Séries similaires à mes séries */}
        <section>
          <SectionHeader
            title="SÉRIES SIMILAIRES À MES SÉRIES"
            rightLabel="VOIR PLUS"
            onRightClick={() => navigate("/recommendations")}
          />
          <Rail>
            {SIMILAR.map((s) => (
              <SeriesPoster
                key={s.id}
                item={s}
                onOpen={goSeriesDetails}
                badge="Recommandé"
              />
            ))}
          </Rail>
        </section>

        {/* 6) Mes derniers épisodes vus (activité perso) */}
        <section>
          <SectionHeader
            title="MON ACTIVITÉ RÉCENTE"
            rightLabel="TOUT MON HISTORIQUE"
            onRightClick={() => navigate("/my/history")}
          />
          <div className="grid gap-3">
            {[
              {
                id: "me1",
                who: "Toi",
                action: "as marqué comme vu",
                what: "Severance • S1E6",
                when: "il y a 40 min",
                icon: <CheckCircle2 className="h-5 w-5 text-brand-cyan" />,
              },
              {
                id: "me2",
                who: "Toi",
                action: "as ajouté à une liste",
                what: "The Bear",
                when: "hier",
                icon: (
                  <List className="h-5 w-5" style={{ color: BRAND.primary }} />
                ),
              },
              {
                id: "me3",
                who: "Toi",
                action: "as mis en favori",
                what: "Stranger Things",
                when: "il y a 5 j",
                icon: (
                  <Heart className="h-5 w-5" style={{ color: BRAND.primary }} />
                ),
              },
            ].map((a) => (
              <ActivityRow
                key={a.id}
                item={a}
                onOpenProfile={() => navigate("/my")}
                onOpenSeries={goSeriesDetails}
              />
            ))}
          </div>
        </section>

        {/* 7) Mes dernières listes */}
        <section>
          <SectionHeader
            title="MES DERNIÈRES LISTES"
            rightLabel="TOUTES MES LISTES"
            onRightClick={goLists}
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {MY_LISTS.map((l) => (
              <ListTile
                key={l.id}
                item={l}
                onOpen={() => navigate(`/lists/${l.id}`)}
                onCreate={() => navigate(`/lists/${l.id}/share`)}
              />
            ))}
          </div>

          <div className="mt-4">
            <OutlineButton onClick={() => navigate("/lists/create")}>
              <Plus className="h-5 w-5 text-brand-cyan" />
              <span className="text-white/80">Créer une nouvelle liste</span>
            </OutlineButton>
          </div>
        </section>

        {/* 8) Communauté (amis) */}
        <section>
          <SectionHeader
            title="CE QUE FONT MES AMIS"
            rightLabel="VOIR LA COMMUNAUTÉ"
            onRightClick={goFriends}
          />
          <div className="grid gap-3">
            {FRIENDS_ACTIVITY.map((a) => (
              <ActivityRow
                key={a.id}
                item={a}
                onOpenProfile={() => navigate("/members/1")}
                onOpenSeries={goSeriesDetails}
              />
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-brand-cyan/25" />
      </main>

      {/* Footer */}
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
