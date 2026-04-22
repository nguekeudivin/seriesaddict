import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Heart,
  Bookmark,
  Lock,
  Globe,
  Edit3,
  Trash2,
  Grid3X3,
  List,
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
};

const LISTS = [
  {
    id: 1,
    title: "Coups de coeur",
    description: "Mes series preferees, celles qui m'ont marque a vie.",
    seriesCount: 12,
    isPublic: true,
    coverImages: [
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=200&q=80",
    ],
    likes: 45,
  },
  {
    id: 2,
    title: "A voir absolument",
    description: "Les series que je dois regarder prochainement.",
    seriesCount: 28,
    isPublic: true,
    coverImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=200&q=80",
    ],
    likes: 23,
  },
  {
    id: 3,
    title: "Science-Fiction",
    description: "Toutes mes series de SF regroupees ici.",
    seriesCount: 15,
    isPublic: false,
    coverImages: [
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=200&q=80",
    ],
    likes: 0,
  },
  {
    id: 4,
    title: "Drames historiques",
    description: "Les plus belles fresques historiques.",
    seriesCount: 8,
    isPublic: true,
    coverImages: [
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=200&q=80",
    ],
    likes: 18,
  },
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

function ListCard({ list }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative h-32 overflow-hidden rounded-t-[24px]">
          <div className="flex h-full">
            {list.coverImages.map((img, idx) => (
              <div
                key={idx}
                className="relative flex-1 overflow-hidden"
                style={{
                  clipPath:
                    idx === 1
                      ? "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
                      : undefined,
                }}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            {list.isPublic ? (
              <Globe className="h-4 w-4 text-brand-cyan" />
            ) : (
              <Lock className="h-4 w-4 text-white/50" />
            )}
          </div>

          <div className="absolute right-4 top-4">
            <button className="grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white/70 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-black/60">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-white">{list.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/60">
            {list.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-white/50">
              {list.seriesCount} series
            </span>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Heart className="h-3.5 w-3.5" />
              {list.likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemberListesPage() {
  const [viewMode, setViewMode] = useState("grid");

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
                Listes de
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {MEMBER.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
              {LISTS.length} listes
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              <Plus className="h-4 w-4" />
              Nouvelle liste
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                viewMode === "grid"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                viewMode === "list"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LISTS.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}

          <button className="group relative flex h-full min-h-[200px] flex-col items-center justify-center gap-3 overflow-hidden rounded-[24px] border border-dashed border-white/20 bg-white/5 transition hover:border-white/40 hover:bg-white/10">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <span className="font-semibold text-white">Creer une liste</span>
          </button>
        </div>
      </main>
    </div>
  );
}
