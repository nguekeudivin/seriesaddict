import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  UserPlus,
  MoreHorizontal,
  MessageCircle,
  Eye,
  Users,
  Filter,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const MEMBER = {
  name: "Alexandre Martin",
  avatar: "AM",
  friendsCount: 47,
};

const FRIENDS = [
  {
    id: 1,
    name: "Charlotte Dubois",
    avatar: "CD",
    seriesInCommon: 12,
    lastActive: "En ligne",
    isOnline: true,
    favoriteSeries: "Breaking Bad",
  },
  {
    id: 2,
    name: "Lucas Moreau",
    avatar: "LM",
    seriesInCommon: 8,
    lastActive: "Il y a 5 min",
    isOnline: false,
    favoriteSeries: "Dark",
  },
  {
    id: 3,
    name: "Emma Bernard",
    avatar: "EB",
    seriesInCommon: 15,
    lastActive: "En ligne",
    isOnline: true,
    favoriteSeries: "The Crown",
  },
  {
    id: 4,
    name: "Thomas Petit",
    avatar: "TP",
    seriesInCommon: 5,
    lastActive: "Il y a 1 heure",
    isOnline: false,
    favoriteSeries: "Succession",
  },
  {
    id: 5,
    name: "Marie Leroy",
    avatar: "ML",
    seriesInCommon: 9,
    lastActive: "Il y a 30 min",
    isOnline: false,
    favoriteSeries: "Fleabag",
  },
  {
    id: 6,
    name: "Nadia Gauthier",
    avatar: "NG",
    seriesInCommon: 11,
    lastActive: "En ligne",
    isOnline: true,
    favoriteSeries: "Stranger Things",
  },
];

const FILTERS = [
  { key: "all", label: "Tous", count: 47 },
  { key: "online", label: "En ligne", count: 12 },
  { key: "recent", label: "Recents", count: 8 },
];

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

function FriendCard({ friend }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-lg font-bold text-white">
              {friend.avatar}
            </div>
            {friend.isOnline && (
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-brand-dark bg-green-500" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-white">{friend.name}</h3>
                <p
                  className={`text-xs ${friend.isOnline ? "text-brand-cyan" : "text-white/50"}`}
                >
                  {friend.lastActive}
                </p>
              </div>
              <button className="text-white/40 transition hover:text-white">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs text-white/60">
              <span>{friend.seriesInCommon} series en commun</span>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-white/50">
              <span>Coup de coeur :</span>
              <span className="text-brand-primary">
                {friend.favoriteSeries}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-full border border-white/10 bg-white/5 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
            <span className="flex items-center justify-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              Message
            </span>
          </button>
          <button className="flex-1 rounded-full border border-white/10 bg-white/5 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
            <span className="flex items-center justify-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              Profil
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SuggestedFriendCard({ friend }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px]">
      <GradientRing radiusClass="rounded-[20px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[20px] bg-brand-dark/55 p-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white">
            {friend.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="truncate font-medium text-white">{friend.name}</h4>
            <p className="text-xs text-white/50">
              {friend.seriesInCommon} series en commun
            </p>
          </div>
          <button className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-brand-cyan transition hover:bg-brand-cyan/20">
            <UserPlus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MemberFriendsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-xl font-bold text-white">
              {MEMBER.avatar}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Amis de
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {MEMBER.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 rounded-[24px] border border-white/10 bg-white/5 p-6 md:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              {MEMBER.friendsCount}
            </p>
            <p className="text-xs text-white/50">Amis</p>
          </div>
          <div className="border-l border-white/10 text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-xs text-white/50">En ligne</p>
          </div>
          <div className="border-l border-white/10 text-center">
            <p className="text-2xl font-bold text-white">5</p>
            <p className="text-xs text-white/50">Demandes</p>
          </div>
          <div className="border-l border-white/10 text-center">
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-xs text-white/50">Suggestions</p>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={[
                  "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all",
                  activeFilter === filter.key
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {filter.label}
                <span
                  className={[
                    "rounded-full px-1.5 py-0.5 text-[10px]",
                    activeFilter === filter.key ? "bg-black/10" : "bg-white/10",
                  ].join(" ")}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Rechercher un ami..."
                className="h-10 w-48 rounded-full border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-white placeholder:text-white/40 focus:border-brand-cyan/50 focus:outline-none"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              <UserPlus className="h-4 w-4" />
              Ajouter
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr,320px]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
              <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                Mes amis
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {FRIENDS.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Voir plus d'amis
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
              <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                Suggestions
              </h2>
            </div>
            <div className="space-y-3">
              {FRIENDS.slice(0, 4).map((friend) => (
                <SuggestedFriendCard
                  key={`suggested-${friend.id}`}
                  friend={friend}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
