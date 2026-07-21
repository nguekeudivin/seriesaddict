import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bookmark,
  CalendarDays,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  Heart,
  Library,
  Plus,
  Search,
  Star,
  TrendingUp,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { MemberTabsNav } from "./UserSpaceElements";

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
   MOCK DATA — MA WISHLIST (25 séries)
========================================================= */
const WISHLIST_SERIES_INITIAL = [
  {
    id: "w1",
    title: "Dark",
    year: 2017,
    genres: ["SF", "Thriller"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w2",
    title: "The Bear",
    year: 2022,
    genres: ["Drame", "Cuisine"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w3",
    title: "Severance",
    year: 2022,
    genres: ["Thriller", "SF"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w4",
    title: "Silo",
    year: 2023,
    genres: ["SF", "Mystère"],
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w5",
    title: "From",
    year: 2022,
    genres: ["Horreur", "Mystère"],
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w6",
    title: "The Last of Us",
    year: 2023,
    genres: ["Drame", "Horreur"],
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w7",
    title: "Slow Horses",
    year: 2022,
    genres: ["Thriller", "Espionnage"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w8",
    title: "For All Mankind",
    year: 2019,
    genres: ["SF", "Drame"],
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w9",
    title: "The White Lotus",
    year: 2021,
    genres: ["Comédie", "Drame"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w10",
    title: "Abbott Elementary",
    year: 2021,
    genres: ["Comédie"],
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w11",
    title: "Pachinko",
    year: 2022,
    genres: ["Drame", "Historique"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w12",
    title: "What We Do in the Shadows",
    year: 2019,
    genres: ["Comédie", "Horreur"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w13",
    title: "Only Murders in the Building",
    year: 2021,
    genres: ["Comédie", "Mystère"],
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w14",
    title: "Station Eleven",
    year: 2021,
    genres: ["Drame", "SF"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w15",
    title: "Reservation Dogs",
    year: 2021,
    genres: ["Comédie", "Drame"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w16",
    title: "Under the Banner of Heaven",
    year: 2022,
    genres: ["Crime", "Drame"],
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w17",
    title: "Better Call Saul",
    year: 2015,
    genres: ["Crime", "Drame"],
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w18",
    title: "Fleabag",
    year: 2016,
    genres: ["Comédie", "Drame"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w19",
    title: "Mr. Robot",
    year: 2015,
    genres: ["Thriller", "Drame"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w20",
    title: "The Leftovers",
    year: 2014,
    genres: ["Drame", "Mystère"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w21",
    title: "Halt and Catch Fire",
    year: 2014,
    genres: ["Drame", "Technologie"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w22",
    title: "Mindhunter",
    year: 2017,
    genres: ["Crime", "Thriller"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w23",
    title: "Devs",
    year: 2020,
    genres: ["SF", "Thriller"],
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w24",
    title: "Patriot",
    year: 2016,
    genres: ["Comédie", "Drame"],
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "w25",
    title: "Counterpart",
    year: 2017,
    genres: ["SF", "Thriller"],
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
  },
];

/* =========================================================
   MOCK DATA — RECOMMANDATIONS DES AMIS
========================================================= */
const FRIEND_RECOMMENDATIONS = [
  {
    id: "r1",
    friend: "Marie",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
    series: {
      title: "Dark",
      year: 2017,
      genres: ["SF", "Thriller"],
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    },
    reason:
      "J'ai pensé à toi en regardant Dark : tu aimes les récits tordus avec des timelines complexes et une atmosphère sombre. Cette série te tiendra en haleine dès le premier épisode et te donnera envie de tout théoriser.",
  },
  {
    id: "r2",
    friend: "Nadia",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
    series: {
      title: "Severance",
      year: 2022,
      genres: ["Thriller", "SF"],
      image:
        "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=80",
    },
    reason:
      "Severance m'a fait penser à ce que tu recherches : une ambiance oppressante, un script chirurgical et une mise en scène millimétrée. C'est une réflexion intelligente sur le travail et l'identité, parfait pour une soirée addictive.",
  },
  {
    id: "r3",
    friend: "Kevin",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
    series: {
      title: "The Bear",
      year: 2022,
      genres: ["Drame", "Cuisine"],
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    },
    reason:
      "The Bear est intense, rapide et terriblement addictive. Si tu aimes les drames humains servis avec une réalité crue et des personnages qui te restent en tête, cette série est faite pour toi. Tu ne verras plus une cuisine de la même façon.",
  },
];

/* =========================================================
   MOCK DATA — TENDANCES POPULAIRES
========================================================= */
const TRENDING_SERIES = [
  {
    id: "t1",
    title: "House of the Dragon",
    year: 2022,
    genres: ["Fantasy", "Drame"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "t2",
    title: "The Witcher",
    year: 2019,
    genres: ["Fantasy", "Action"],
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "t3",
    title: "Wednesday",
    year: 2022,
    genres: ["Comédie", "Fantasy"],
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1502134249126-9f37581a2d5f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "t4",
    title: "The Mandalorian",
    year: 2019,
    genres: ["SF", "Action"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "t5",
    title: "Squid Game",
    year: 2021,
    genres: ["Thriller", "Drame"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "t6",
    title: "Euphoria",
    year: 2019,
    genres: ["Drame", "Adolescent"],
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1514525253440-b393452e3383?auto=format&fit=crop&w=400&q=80",
  },
];

/* =========================================================
   SHARED UI
========================================================= */
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
   SECTION COMPONENTS
========================================================= */
function WishlistHero() {
  return (
    <GlassPanel className="rounded-[32px]">
      <div className="grid gap-6 p-6 lg:grid-cols-2 lg:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
            Ma wishlist
          </p>
          <h1 className="mt-2 text-1xl font-extrabold uppercase tracking-wide md:text-2xl">
            Les séries que je veux découvrir
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Une bibliothèque personnelle de séries désirées : celles que tu as
            repérées, celles que tes amis te conseillent, et celles que tout le
            monde ajoute en ce moment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <OutlineButton>
              <Plus className="h-4 w-4 text-brand-cyan" />
              <span>Ajouter une série</span>
            </OutlineButton>
            <OutlineButton>
              <Users className="h-4 w-4 text-brand-cyan" />
              <span>Voir les recommandations</span>
            </OutlineButton>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            <StatMini icon={Bookmark} label="Séries en wishlist" value="25" />
            <StatMini icon={Heart} label="Favoris potentiels" value="7" />
            <StatMini icon={TrendingUp} label="Tendances vues" value="12" />
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

function QuickActions({ onLibrary, onSchedule, onInvite }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <IconButton title="Ajouter à ma médiathèque" onClick={onLibrary}>
        <Library className="h-4 w-4 text-brand-cyan" />
      </IconButton>
      {onSchedule ? (
        <IconButton title="Programmer un visionnage" onClick={onSchedule}>
          <CalendarDays className="h-4 w-4 text-brand-cyan" />
        </IconButton>
      ) : null}
      {onInvite ? (
        <IconButton title="Inviter un ami à regarder" onClick={onInvite}>
          <UserPlus className="h-4 w-4 text-brand-cyan" />
        </IconButton>
      ) : null}
    </div>
  );
}

function WishlistCard({
  item,
  onOpen,
  onLibrary,
  onSchedule,
  onInvite,
  onRemove,
}) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/8 bg-black/20">
      <div className="relative aspect-[2/3] overflow-hidden">
        <button
          title="Retirer de la wishlist"
          onClick={onRemove}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white/80 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-brand-primary/80 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-1 text-xs text-white/65">
            {item.genres.join(" • ")}
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs text-white/80">
            <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
            <span>{item.rating}/5</span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white/85 hover:text-white"
            >
              Voir la serie
              <ChevronRight className="h-3.5 w-3.5 text-brand-cyan" />
            </button>
            <QuickActions
              onLibrary={onLibrary}
              onSchedule={null}
              onInvite={null}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[26px] ring-1 ring-brand-cyan/35" />
      </div>
    </div>
  );
}

function RecommendationCard({ item, onOpen, onLibrary, onSchedule }) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/8 bg-black/20">
      <div className="grid gap-4 p-4 sm:grid-cols-[180px_1fr]">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="aspect-[2/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${item.series.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="min-w-0">
          <div className="flex items-start gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
              <img
                src={item.avatar}
                alt={item.friend}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                {item.friend} vous recommande
              </p>
              <h3 className="mt-1 text-base font-extrabold uppercase tracking-wide text-white">
                {item.series.title}
              </h3>
              <p className="mt-1 text-xs text-white/60">
                {item.series.genres.join(" • ")}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/8 bg-black/20 p-3">
            <p className="line-clamp-3 text-sm italic text-white/80">
              "{item.reason}"
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <OutlineButton onClick={onOpen} className="text-xs">
              <span>Voir la fiche</span>
              <ChevronRight className="h-4 w-4 text-brand-cyan" />
            </OutlineButton>
            <QuickActions
              onLibrary={onLibrary}
              onSchedule={onSchedule}
              onInvite={null}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[26px] ring-1 ring-brand-cyan/35" />
      </div>
    </div>
  );
}

function TrendingCard({ item, onOpen, onLibrary }) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/8 bg-black/20">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-brand-primary/25 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase text-white/90 backdrop-blur">
          <Flame className="h-3 w-3 text-brand-primary" />
          Tendance
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-1 text-xs text-white/65">
            {item.genres.join(" • ")}
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs text-white/80">
            <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
            <span>{item.rating}/5</span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white/85 hover:text-white"
            >
              Voir la serie
              <ChevronRight className="h-3.5 w-3.5 text-brand-cyan" />
            </button>
            <QuickActions
              onLibrary={onLibrary}
              onSchedule={null}
              onInvite={null}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[26px] ring-1 ring-brand-cyan/35" />
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */
export default function WishlistPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [wishlist, setWishlist] = useState(WISHLIST_SERIES_INITIAL);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredWishlist = useMemo(() => {
    return wishlist.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.genres.join(" ").toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : filter === "top"
            ? item.rating >= 4.7
            : filter === "recent"
              ? item.year >= 2020
              : true;

      return matchesQuery && matchesFilter;
    });
  }, [query, filter, wishlist]);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative z-20 border-b border-white/5 bg-black/50">
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
            <div className="hidden text-right md:block">
              <p className="text-sm font-semibold text-white">Wishlist</p>
              <p className="text-xs text-white/55">Espace membre</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-brand-cyan/30">
              <Crown className="h-4 w-4 text-[rgba(255,215,0,0.95)]" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,29,79,.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(30,108,134,.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-5 py-10">
          <WishlistHero />
          <div className="mt-8">
            <MemberTabsNav activeKey="watchlist" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-5 pb-16">
        {/* 1) Ma wishlist */}
        <section>
          <SectionHeader
            title="MA WISHLIST"
            subtitle={`${wishlist.length} séries enregistrées — prêtes à être ajoutées à ta médiathèque.`}
            rightLabel="GÉRER"
            onRightClick={() => navigate("/my/watchlist/manage")}
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Rechercher dans ma wishlist…"
              className="w-full lg:max-w-xl"
            />

            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="Tout"
                active={filter === "all"}
                onClick={() => setFilter("all")}
              />
              <FilterChip
                label="Mieux notées"
                active={filter === "top"}
                onClick={() => setFilter("top")}
                icon={Star}
              />
              <FilterChip
                label="Récentes"
                active={filter === "recent"}
                onClick={() => setFilter("recent")}
                icon={Clock}
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredWishlist.map((item) => (
              <WishlistCard
                key={item.id}
                item={item}
                onOpen={() => navigate(`/series-details`)}
                onLibrary={() => navigate("/user/add-serie")}
                onSchedule={() => navigate("/calendar")}
                onInvite={() => navigate("/members")}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
        </section>

        {/* 2) Recommandations des amis */}
        <section>
          <SectionHeader
            title="RECOMMANDATIONS DES AMIS"
            subtitle="Ces séries ont été suggérées par les personnes que tu suis."
            rightLabel="TOUTES LES SUGGESTIONS"
            onRightClick={() => navigate("/members")}
          />

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {FRIEND_RECOMMENDATIONS.map((item) => (
              <RecommendationCard
                key={item.id}
                item={item}
                onOpen={() => navigate(`/series-details`)}
                onLibrary={() => navigate("/user/add-serie")}
                onSchedule={() => navigate("/calendar")}
              />
            ))}
          </div>
        </section>

        {/* 3) Tendances populaires */}
        <section>
          <SectionHeader
            title="TENDANCES POPULAIRES"
            subtitle="Les séries que tout le monde ajoute cette semaine."
            rightLabel="VOIR LES TENDANCES"
            onRightClick={() => navigate("/series")}
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {TRENDING_SERIES.map((item) => (
              <TrendingCard
                key={item.id}
                item={item}
                onOpen={() => navigate(`/series-details`)}
                onLibrary={() => navigate("/user/add-serie")}
              />
            ))}
          </div>
        </section>

        {/* CTA bottom */}
        <section>
          <GlassPanel className="rounded-[28px]">
            <div className="flex flex-col items-center justify-between gap-6 p-6 sm:flex-row sm:p-8">
              <div>
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                  Trouver ma prochaine série
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  Explore les recommandations personnalisées, les coups de cœur
                  de la communauté et les nouveautés du moment.
                </p>
              </div>
              <PrimaryButton onClick={() => navigate("/series")}>
                <TrendingUp className="h-4 w-4" />
                <span>Explorer les séries</span>
              </PrimaryButton>
            </div>
          </GlassPanel>
        </section>
      </main>
    </div>
  );
}
