import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Flame,
  Sparkles,
  Star,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Heart,
  Bookmark,
  Plus,
} from "lucide-react";

/**
 * SeriesList.jsx — Hub "Séries TV" (sections + éditorial) en identité moderne
 * - max-w-[1700px]
 * - dark + néon + gradient mask rings
 * - sections: du moment, collections mosaic, dernières ajoutées (date/heure), genres, coups de coeur, nouvelles
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
// UI building blocks (same file)
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
        <h2 className="text-lg font800 font-semibold tracking-wide text-white">
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

function NeonSearch({
  value,
  onChange,
  onSubmit,
  placeholder = "Rechercher une série...",
}) {
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

function SeriesPoster({ item, onClick, showMeta = true, topRightBadge }) {
  return (
    <div
      className="group relative w-[230px] shrink-0 cursor-pointer"
      onClick={onClick}
      title={item.title}
    >
      <div className="relative overflow-hidden rounded-2xl border border-brand-cyan/25 bg-black/30">
        <div
          className="aspect-[2/3] w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {topRightBadge ? (
          <div className="absolute right-3 top-3">
            {typeof topRightBadge === "string" ? (
              <div className="rounded-full border border-brand-cyan/20 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
                {topRightBadge}
              </div>
            ) : (
              topRightBadge
            )}
          </div>
        ) : null}
        {showMeta ? (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="line-clamp-1 text-sm font-semibold text-white">
              {item.title}
            </p>
            <p className="mt-1 line-clamp-1 text-xs text-white/70">
              {item.year} • {item.genres?.join(" • ")}
            </p>

            <div className="mt-3 flex items-center justify-between">
              {/* <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/25 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/85">
                <Star className="h-4 w-4 text-brand-primary" />
                {item.rating}
              </span> */}
              <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/70">
                {item.network}
              </span>
            </div>
          </div>
        ) : null}

        {/* Hover ring */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-cyan/45" />
        </div>
      </div>
    </div>
  );
}

function AddedAtBadge({ ts }) {
  const rel = formatRelativeFR(ts);
  const abs = formatAbsFR(ts);

  return (
    <div
      title={abs}
      className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur"
    >
      <Clock className="h-3.5 w-3.5 text-brand-cyan" />
      <span className="text-white/85">{rel}</span>
    </div>
  );
}

function LatestAddedRail({ items, onOpen }) {
  const scrollerRef = React.useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    // largeur approx d’une card + gap
    const delta = dir * (230 + 16) * 2; // 2 cards
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Buttons (desktop) */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="hidden lg:grid absolute -left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 ring-1 ring-white/15 backdrop-blur hover:ring-white/25"
        aria-label="Précédent"
      >
        <ChevronRight className="h-5 w-5 rotate-180 text-brand-cyan" />
      </button>

      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="hidden lg:grid absolute -right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 ring-1 ring-white/15 backdrop-blur hover:ring-white/25"
        aria-label="Suivant"
      >
        <ChevronRight className="h-5 w-5 text-brand-cyan" />
      </button>

      {/* Rail */}
      <div
        ref={scrollerRef}
        className="
          relative overflow-x-auto pb-3
          scroll-smooth
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          snap-x snap-mandatory
        "
      >
        <div className="flex gap-4">
          {items.map((s) => (
            <div key={s.id} className="snap-start">
              <SeriesPoster
                item={s}
                onClick={onOpen}
                // au lieu d’un texte simple, on passe un node premium
                topRightBadge={<AddedAtBadge ts={s.addedAt} />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Rail({ children }) {
  return (
    <div className="relative overflow-x-auto pb-3">
      <div className="flex gap-4">{children}</div>
    </div>
  );
}

function MiniActionBar() {
  // petit set d’actions cohérent “subtil”
  return (
    <div className="flex items-center gap-2">
      <button className="grid h-9 w-9 place-items-center rounded-full bg-black/25 ring-1 ring-white/10 hover:ring-white/20">
        <Plus className="h-4 w-4 text-brand-cyan" />
      </button>
      <button className="grid h-9 w-9 place-items-center rounded-full bg-black/25 ring-1 ring-white/10 hover:ring-white/20">
        <Heart className="h-4 w-4 text-brand-primary" />
      </button>
      <button className="grid h-9 w-9 place-items-center rounded-full bg-black/25 ring-1 ring-white/10 hover:ring-white/20">
        <Bookmark className="h-4 w-4 text-brand-cyan" />
      </button>
    </div>
  );
}

function CollectionTileV3({ item, variant = "small", onClick }) {
  const sizing =
    variant === "featured"
      ? "col-span-12 md:col-span-7 min-h-[500px]"
      : variant === "medium"
        ? "min-h-[200px]"
        : "col-span-12 sm:col-span-6 md:col-span-4 min-h-[155px]";

  const titleSize =
    variant === "featured"
      ? "text-2xl md:text-[28px]"
      : variant === "medium"
        ? "text-base"
        : "text-sm";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        sizing,
      ].join(" ")}
      onClick={onClick}
    >
      {/* Outer glow + ring */}
      <div className="pointer-events-none absolute -inset-10 opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-80">
        <div className="absolute inset-0 bg-brand-cyan/25" />
      </div>

      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative h-full rounded-2xl bg-brand-dark/55 backdrop-blur">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
          style={{ backgroundImage: `url(${item.bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/35 to-black/80" />

        {/* Inner thin ring */}
        <div
          className="pointer-events-none absolute inset-3 rounded-xl opacity-70"
          style={{
            background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        <div className="relative flex h-full flex-col justify-between p-10">
          {/* Top */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80">
                  {item.count} séries
                </span>
              </div>

              <h3
                className={[
                  "mt-2 font-extrabold uppercase tracking-wide text-white",
                  titleSize,
                ].join(" ")}
              >
                {item.title}
              </h3>

              {variant === "featured" ? (
                <p className="mt-2 max-w-[42rem] text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between gap-4">
            {/* Poster stack */}
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

            {/* CTA */}
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Voir
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function CollectionsSeeMoreCard({ links, onClick, navigate }) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <div className="group relative h-full overflow-hidden rounded-2xl">
        <GradientRing radiusClass="rounded-2xl" thickness={2} />
        <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

        <div className="relative h-full rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                Explorer
              </span>
              <h3 className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white">
                Voir plus
              </h3>
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            {links.map((l, i) => (
              <button
                key={i}
                onClick={() => navigate(l.to)}
                className="group/row flex items-center justify-between rounded-xl border border-brand-cyan/15 bg-black/20 px-4 py-3 text-sm text-white/80 hover:text-white"
              >
                <span className="line-clamp-1">{l.label}</span>
                <ChevronRight className="h-4 w-4 text-brand-cyan transition-transform group-hover/row:translate-x-0.5" />
              </button>
            ))}
          </div>

          <button
            onClick={onClick}
            className="mt-5 w-full rounded-full border border-brand-cyan/20 bg-brand-wine/55 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 hover:bg-brand-wine/70"
          >
            Voir toutes les collections
          </button>
        </div>
      </div>
    </div>
  );
}

export function Genres3D({ items, onSelect }) {
  const [active, setActive] = React.useState(5);

  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const move = (dir) => setActive((v) => clamp(v + dir, 0, items.length - 1));

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="relative rounded-2xl">
        {/* Desktop 3D */}
        <div className="hidden md:block py-2">
          <div
            className="relative h-[420px] px-6 py-8 outline-none"
            style={{ perspective: "1200px" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") move(-1);
              if (e.key === "ArrowRight") move(1);
              if (e.key === "Enter") onSelect?.(items[active]);
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {items.map((g, i) => {
                const d = i - active;
                const abs = Math.abs(d);
                const visible = abs <= 3;
                if (!visible) return null;

                // ✅ More visible in back
                const opacity = abs === 0 ? 1 : 0.93 - abs * 0.08;
                const blur = abs === 0 ? 0 : abs * 0.25;

                // Layout / depth
                const scale = i === active ? 1 : 0.92 - abs * 0.05;
                const rotateY = d * -18;
                const translateX = d * 175;

                // ✅ Active more forward, others still visible
                const translateZ = i === active ? 180 : 90 - abs * 60;
                const translateY = i === active ? -8 : 0;

                const zIndex = 100 - abs;

                return (
                  <button
                    key={g.slug}
                    //onMouseEnter={() => setActive(i)}
                    //onFocus={() => setActive(i)}
                    onClick={() => onSelect?.(g)}
                    className="absolute outline-none"
                    style={{
                      zIndex,
                      transform: `
                        translateX(${translateX}px)
                        translateY(${translateY}px)
                        translateZ(${translateZ}px)
                        rotateY(${rotateY}deg)
                        scale(${scale})
                      `,
                      transformStyle: "preserve-3d",
                      transition:
                        "transform 420ms cubic-bezier(.2,.8,.2,1), opacity 420ms cubic-bezier(.2,.8,.2,1), filter 420ms cubic-bezier(.2,.8,.2,1)",
                      opacity,
                      filter: `blur(${blur}px)`,
                    }}
                  >
                    <Genre3DCard g={g} active={i === active} />
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <button
              type="button"
              onClick={() => move(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/35 ring-1 ring-white/12 backdrop-blur hover:ring-white/25"
              aria-label="Précédent"
            >
              <ChevronRight className="h-5 w-5 rotate-180 text-[rgba(30,108,134,1)]" />
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/35 ring-1 ring-white/12 backdrop-blur hover:ring-white/25"
              aria-label="Suivant"
            >
              <ChevronRight className="h-5 w-5 text-[rgba(30,108,134,1)]" />
            </button>
          </div>

          {/* Caption row */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                  Genre sélectionné
                </p>
                <p
                  className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white"
                  style={{ textShadow: "0 8px 18px rgba(0,0,0,0.45)" }}
                >
                  {items[active]?.name}
                </p>
              </div>

              <button
                onClick={() => onSelect?.(items[active])}
                className="relative inline-block rounded-full p-[1.5px]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(132,29,79,1)] to-[rgba(30,108,134,1)]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(132,29,79,1)] to-[rgba(30,108,134,1)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
                <span className="relative rounded-full bg-[rgba(60,10,34,0.55)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 hover:bg-[rgba(60,10,34,0.7)]">
                  Explorer
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile (simple rail) */}
        <div className="md:hidden">
          <div className="relative overflow-x-auto px-4 py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-3">
              {items.map((g) => (
                <button
                  key={g.slug}
                  onClick={() => onSelect?.(g)}
                  className="group/card relative w-[220px] shrink-0 overflow-hidden rounded-2xl border border-[rgba(30,108,134,0.2)] bg-black/25"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-[1.03]"
                    style={{ backgroundImage: `url(${g.img})` }}
                  />
                  {/* ✅ overlay léger et neutre */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="relative p-4 text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                      Genre
                    </p>
                    <p
                      className="mt-1 text-sm font-extrabold uppercase tracking-wide text-white"
                      style={{ textShadow: "0 8px 18px rgba(0,0,0,0.45)" }}
                    >
                      {g.name}
                    </p>
                    <div className="mt-3 inline-flex rounded-full border border-[rgba(30,108,134,0.2)] bg-black/30 px-3 py-1 text-[11px] font-semibold text-white/80">
                      {g.count} séries
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 pb-4">
            <button
              onClick={() => onSelect?.(items[active])}
              className="w-full rounded-full border border-[rgba(30,108,134,0.2)] bg-black/20 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              Explorer le genre sélectionné
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Genre3DCard({ g, active }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border bg-black/15",
        active ? "border-[rgba(30,108,134,0.3)]" : "border-white/10",
      ].join(" ")}
      style={{
        width: active ? 360 : 255,
        height: active ? 320 : 250,
        transition:
          "width 420ms cubic-bezier(.2,.8,.2,1), height 420ms cubic-bezier(.2,.8,.2,1)",
      }}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${g.img})` }}
      />

      {/* ✅ overlay neutre + plus léger (moins de teinte) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* ✅ vignette plus douce */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-140px_140px_rgba(0,0,0,0.35)]" />

      {/* Top chip */}
      <div className="absolute left-4 top-4">
        <span
          className={[
            "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur",
            active
              ? "border-[rgba(30,108,134,0.25)] bg-black/35 text-white/85"
              : "border-white/10 bg-black/25 text-white/70",
          ].join(" ")}
        >
          <Clock className="h-3.5 w-3.5 text-[rgba(30,108,134,1)]" />
          {g.count} séries
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
        <h3
          className={[
            "mt-1 font-extrabold uppercase tracking-wide text-white",
            active ? "text-xl" : "text-base",
          ].join(" ")}
          style={{ textShadow: "0 8px 18px rgba(0,0,0,0.45)" }}
        >
          {g.name}
        </h3>

        <div
          className={[
            "mt-3 transition-all duration-300",
            active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/75">
            <span className="h-px w-10 bg-white/35" />
            Clique pour explorer
          </span>
        </div>
      </div>

      {/* Active ring */}
      {active ? (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-[rgba(30,108,134,0.4)]" />
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------
// Coup de coeur cards (modernisées)
// ---------------------------
function FavoriteCard({ item, onClick }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-2xl bg-brand-dark/55 backdrop-blur">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />

        <div
          className="pointer-events-none absolute inset-2 rounded-xl"
          style={{
            background: GRADIENT,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        <div className="relative p-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="mt-3 text-lg font-extrabold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-white/70">
                {item.year} • {item.genres.join(" • ")}
              </p>
            </div>
          </div>

          <p className="mt-8 line-clamp-3 text-sm leading-relaxed text-white/70">
            {item.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <MiniActionBar />
            <button className="rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Lire la fiche
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------
// Mock content (replace by API)
// ---------------------------
const MOCK_SERIES_MOMENT = Array.from({ length: 10 }).map((_, i) => ({
  id: `m-${i}`,
  title: ["The Bear", "Severance", "Landman", "Pluribus", "Stranger Things"][
    i % 5
  ],
  year: 2015 + (i % 10),
  rating: (7.8 + (i % 10) * 0.1).toFixed(1),
  network: ["Netflix", "HBO", "Apple TV+"][i % 3],
  genres: i % 2 ? ["Drame", "Thriller"] : ["SF", "Mystère"],
  img: [
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=60",
  ][i % 5],
}));

const MOCK_COLLECTIONS = [
  {
    id: "c1",
    title: "Séries Power",
    count: 4,
    description:
      "Personnages charismatiques, jeux de pouvoir et ascensions brutales — une sélection premium.",
    bg: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=60",
    posters: [
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 20,
  },
  {
    id: "c2",
    title: "Post-apocalyptiques",
    count: 18,
    bg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=60",
    posters: [
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 15,
  },
  {
    id: "c3",
    title: "Adaptées de jeux vidéo",
    count: 8,
    bg: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1400&q=60",
    posters: [
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 5,
  },
  {
    id: "c4",
    title: "Dystopie",
    count: 12,
    bg: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=60",
    posters: [
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 9,
  },
  {
    id: "c5",
    title: "LGBTQIA+",
    count: 31,
    bg: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1400&q=60",
    posters: [
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60",
    ],
    extra: 48,
  },
];

const MOCK_GENRES_STRIPES = [
  {
    slug: "western",
    name: "Western",
    count: 142,
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "drame",
    name: "Drame",
    count: 512,
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "mystere",
    name: "Mystère",
    count: 238,
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "medical",
    name: "Médical",
    count: 96,
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "mystere",
    name: "Mystère",
    count: 238,
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "comedie",
    name: "Comédie",
    count: 301,
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "mystere",
    name: "Mystère",
    count: 238,
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "medical",
    name: "Médical",
    count: 96,
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "comedie",
    name: "Comédie",
    count: 301,
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "action",
    name: "Action",
    count: 189,
    img: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1600&q=60",
  },
  {
    slug: "horreur",
    name: "Horreur",
    count: 77,
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1600&q=60",
  },
];

const MOCK_LATEST_ADDED = Array.from({ length: 10 }).map((_, i) => ({
  id: `l-${i}`,
  title: ["CIA", "Rivals", "Rooster", "Strip Law", "Grace House"][i % 5],
  year: 2018 + (i % 7),
  rating: (7.0 + (i % 12) * 0.15).toFixed(1),
  network: ["Netflix", "Prime Video", "HBO"][i % 3],
  genres: i % 2 ? ["Drame"] : ["Thriller", "Mystère"],
  img: [
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=60",
  ][i % 4],
  addedAt: Date.now() - i * 1000 * 60 * 47, // toutes les ~47 minutes
}));

const MOCK_FAVORITES = [
  {
    id: "f1",
    title: "The Boys",
    year: 2019,
    genres: ["Action", "Satire"],
    rating: "8.6",
    excerpt:
      "Des héros corrompus, une équipe prête à tout, et une escalade permanente — ultra efficace.",
    bg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=60",
  },
  {
    id: "f2",
    title: "House of the Dragon",
    year: 2022,
    genres: ["Fantasy", "Drame"],
    rating: "8.4",
    excerpt:
      "Tensions politiques, héritages, et montée en puissance — une fresque sombre et premium.",
    bg: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1600&q=60",
  },
  {
    id: "f3",
    title: "Broad City",
    year: 2014,
    genres: ["Comédie"],
    rating: "8.1",
    excerpt:
      "Énergie, humour, duo iconique — parfait pour respirer entre deux thrillers.",
    bg: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1600&q=60",
  },
];

const MOCK_NEW_SERIES = Array.from({ length: 10 }).map((_, i) => ({
  id: `n-${i}`,
  title: ["Vanished", "56 Days", "Scrubs", "Imperfect Women", "New Arc"][i % 5],
  year: 2021 + (i % 4),
  rating: (7.3 + (i % 10) * 0.1).toFixed(1),
  network: ["Netflix", "Apple TV+", "HBO"][i % 3],
  genres: i % 2 ? ["Drame", "Mystère"] : ["Comédie"],
  img: [
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=60",
  ][i % 4],
}));

function formatAbsFR(ts) {
  const d = new Date(ts);
  const day = d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
  });
  const time = d.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day} • ${time}`;
}

function formatRelativeFR(ts) {
  const now = Date.now();
  const diff = Math.max(0, now - ts);

  const min = Math.floor(diff / 60000);
  if (min < 1) return "à l’instant";
  if (min < 60) return `il y a ${min} min`;

  const h = Math.floor(min / 60);
  if (h < 24) return `il y a ${h} h`;

  const d = Math.floor(h / 24);
  if (d < 7) return `il y a ${d} j`;

  const w = Math.floor(d / 7);
  return `il y a ${w} sem`;
}

// ---------------------------
// Page
// ---------------------------
export default function SeriesList() {
  const navigate = useNavigate();
  const [q, setQ] = React.useState("");
  const [quick, setQuick] = React.useState("trending");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Tu peux remplacer par ton header Home si tu veux */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15">
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
          <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35">
            <img
              alt="Avatar"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60"
            />
          </div>
        </div>
      </header>

      {/* Explorer bar */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                  Séries TV
                </h1>
                <p className="mt-1 text-sm text-white/70">
                  Un hub éditorial moderne: tendances, collections, nouveautés…
                  et exploration rapide.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-dark/60 px-4 py-2 text-xs text-white/70 md:inline-flex">
                <Calendar className="h-4 w-4 text-brand-cyan" />
                Mis à jour en temps réel
              </div>
            </div>

            <NeonSearch
              value={q}
              onChange={setQ}
              onSubmit={() => navigate(`/search?q=${encodeURIComponent(q)}`)}
            />

            <div className="flex flex-wrap items-center gap-2">
              <Chip
                active={quick === "trending"}
                onClick={() => setQuick("trending")}
                icon={Flame}
              >
                Tendances
              </Chip>
              <Chip
                active={quick === "new"}
                onClick={() => setQuick("new")}
                icon={Sparkles}
              >
                Nouveautés
              </Chip>
              <Chip
                active={quick === "top"}
                onClick={() => setQuick("top")}
                icon={Star}
              >
                Mieux notées
              </Chip>
            </div>

            <div className="h-px w-full bg-brand-cyan/25" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-24 px-5 pb-24 mt-8">
        {/* 1) Séries du moment */}
        <section>
          <SectionHeader
            title="SÉRIES DU MOMENT"
            rightLabel="TOUTES LES TENDANCES"
            onRightClick={() => navigate("/series?sort=trending")}
          />
          <Rail>
            {MOCK_SERIES_MOMENT.map((s) => (
              <SeriesPoster
                key={s.id}
                showMeta={false}
                item={s}
                onClick={() => navigate("/series-details")}
                topRightBadge={s.network}
              />
            ))}
          </Rail>
        </section>

        {/* 2) Collections (mosaic asymétrique améliorée) */}
        <section>
          <SectionHeader
            title="COLLECTIONS"
            rightLabel="TOUTES LES COLLECTIONS"
            onRightClick={() => navigate("/collections")}
          />

          <div className="grid grid-cols-12 gap-4">
            {/* Featured (grand bloc) */}
            <CollectionTileV3
              item={MOCK_COLLECTIONS[0]}
              variant="featured"
              onClick={() => navigate("/collections/power")}
            />

            {/* Colonne droite (2 medium) */}
            <div className="col-span-12 md:col-span-5 grid gap-4">
              <CollectionTileV3
                item={MOCK_COLLECTIONS[1]}
                variant="medium"
                onClick={() => navigate("/collections/post-apo")}
              />
              <CollectionTileV3
                item={MOCK_COLLECTIONS[2]}
                variant="medium"
                onClick={() => navigate("/collections/videogame")}
              />
            </div>

            {/* Bas */}
            <CollectionTileV3
              item={MOCK_COLLECTIONS[3]}
              variant="small"
              onClick={() => navigate("/collections/dystopie")}
            />
            <CollectionTileV3
              item={MOCK_COLLECTIONS[4]}
              variant="small"
              onClick={() => navigate("/collections/lgbtq")}
            />

            {/* Bloc "Voir plus" */}
            <CollectionsSeeMoreCard
              onClick={() => navigate("/collections")}
              links={[
                { label: "Collections populaires", to: "/collections" },
                { label: "Sélections thématiques", to: "/collections" },
                { label: "Listes de la communauté", to: "/collections" },
                { label: "Événements & sorties", to: "/collections" },
              ]}
              navigate={navigate}
            />
          </div>
        </section>

        {/* 3) Dernières séries ajoutées (date/heure subtil) */}
        <section>
          <SectionHeader
            title="DERNIÈRES SÉRIES AJOUTÉES"
            rightLabel="TOUTES LES AJOUTS"
            onRightClick={() => navigate("/series?sort=latest")}
          />

          <LatestAddedRail
            items={MOCK_LATEST_ADDED}
            onOpen={() => navigate("/series-details")}
          />

          <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
            <Clock className="h-4 w-4 text-brand-cyan" />
            <span>Horodatage: relatif (survol = date/heure exacte).</span>
          </div>
        </section>

        {/* 4) Genres (grid premium) */}
        <section>
          <SectionHeader
            title="GENRES"
            rightLabel="TOUS LES GENRES"
            onRightClick={() => navigate("/genres")}
          />

          <Genres3D
            items={MOCK_GENRES_STRIPES}
            onSelect={(g) =>
              navigate(`/series?genre=${encodeURIComponent(g.slug)}`)
            }
          />
        </section>

        {/* 5) Coups de coeur */}
        <section>
          <SectionHeader
            title="COUPS DE CŒUR"
            rightLabel="TOUS LES COUPS DE CŒUR"
            onRightClick={() => navigate("/favorites")}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {MOCK_FAVORITES.map((f) => (
              <FavoriteCard
                key={f.id}
                item={f}
                onClick={() => navigate("/series-details")}
              />
            ))}
          </div>
        </section>

        {/* 6) Nouvelles séries */}
        <section>
          <SectionHeader
            title="NOUVELLES SÉRIES"
            rightLabel="TOUTES LES NOUVELLES"
            onRightClick={() => navigate("/series?sort=new")}
          />
          <Rail>
            {MOCK_NEW_SERIES.map((s) => (
              <SeriesPoster
                key={s.id}
                showMeta={false}
                item={s}
                onClick={() => navigate("/series-details")}
              />
            ))}
          </Rail>
        </section>
      </main>

      {/* Footer (minimal, tu peux réutiliser le tien) */}
      <footer className="pb-10">
        <div className="mx-auto max-w-[1700px] px-5 text-center">
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
