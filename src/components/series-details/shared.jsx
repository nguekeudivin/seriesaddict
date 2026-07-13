import { useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Star,
} from "lucide-react";

export function GlassPanel({
  children,
  className = "",
  radius = "rounded-md",
  bodyClassName = "",
  glow = false,
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden border border-white/10 bg-[#141414]",
        radius,
        className,
      ].join(" ")}
    >
      {glow && (
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/10 blur-3xl" />
      )}
      <div className={["relative", radius, bodyClassName].join(" ")}>
        {children}
      </div>
    </div>
  );
}

export function SectionHeader({ title, rightLabel, onRightClick, icon: Icon }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 text-white/40" />}
        <h2 className="text-sm font-black uppercase tracking-widest text-white">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-1 text-xs font-semibold text-white/50 hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary: "bg-white text-black hover:scale-[1.02] hover:bg-white/90",
    outline:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
    gradient:
      "bg-gradient-to-r from-brand-primary to-brand-cyan text-white shadow-[0_0_30px_rgba(132,29,79,.35)] hover:shadow-[0_0_45px_rgba(132,29,79,.5)] hover:scale-[1.02]",
  };
  return (
    <button
      onClick={onClick}
      className={[base, styles[variant], className].join(" ")}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}

export function PosterCard({ item, showReason = true, className = "" }) {
  return (
    <div className={["group cursor-pointer", className].join(" ")}>
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/40">
        <img
          src={item.poster || item.image}
          alt={item.title || item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {item.match && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-primary/90 px-2 py-1 text-[10px] font-bold text-white">
            {item.match} match
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm font-bold text-white">
            {item.title || item.name}
          </h3>
          {showReason && item.reason && (
            <p className="mt-1 text-[10px] leading-tight text-white/60">
              {item.reason}
            </p>
          )}
          {showReason && item.friend && (
            <p className="mt-1 text-[10px] text-white/60">
              Recommandé par {item.friend} · {item.note}
            </p>
          )}
          {item.status && (
            <p className="mt-1 text-[10px] font-semibold text-brand-cyan">
              {item.status}
            </p>
          )}
          {item.price && (
            <p className="mt-1 text-sm font-bold text-white">{item.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function HorizontalCarousel({ children, gap = "gap-5" }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        className={[
          "flex snap-x snap-mandatory overflow-x-auto pb-4",
          gap,
        ].join(" ")}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/60 to-transparent" />
      <div className="absolute right-0 top-0 flex -translate-y-1/2 gap-2 md:-top-10">
        <button
          onClick={() => scroll("left")}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur transition hover:border-brand-cyan/50 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur transition hover:border-brand-cyan/50 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function SimilarCard({ item }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.01] transition hover:border-brand-cyan/40">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-lg font-black text-white group-hover:text-brand-cyan">
            {item.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-white/60">
            {item.reason}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FriendCard({ item }) {
  return (
    <div className="group flex cursor-pointer gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-brand-cyan/40 hover:bg-white/[0.05]">
      <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-white group-hover:text-brand-cyan">
          {item.title}
        </p>
        <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
          <span className="rounded-full bg-brand-primary/20 px-2 py-0.5 text-[10px] font-bold text-brand-primary">
            {item.friend}
          </span>
          <span>a regardé</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs font-bold text-white/70">
          <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />
          {item.note}
        </div>
      </div>
    </div>
  );
}

export function PersonalizedCard({ item, featured = false }) {
  return (
    <div
      className={[
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition hover:border-brand-cyan/40",
        featured ? "md:col-span-2 md:row-span-2" : "",
      ].join(" ")}
    >
      <img
        src={item.poster}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
        Match {item.match}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className={[
            "font-black text-white group-hover:text-brand-cyan",
            featured ? "text-2xl" : "text-base",
          ].join(" ")}
        >
          {item.title}
        </p>
        {featured && (
          <p className="mt-1 max-w-xs text-sm text-white/70">
            Recommandée spécialement pour vous selon votre historique.
          </p>
        )}
      </div>
    </div>
  );
}
