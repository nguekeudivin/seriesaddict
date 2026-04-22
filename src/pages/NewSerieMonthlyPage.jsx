import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Star,
  Play,
  Plus,
  TrendingUp,
  Sparkles,
  Eye,
  Info,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT = "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const MONTH = "Fevrier 2026";

const NEW_SERIES = [
  {
    id: 1,
    title: "The Last Frontier",
    description: "Dans un futur proche ou l'humanite a colonise Mars, une enqueteur terrien doit resoudre un meurtre qui pourrait declencher une guerre interplanetaire.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    releaseDate: "5 fev",
    platform: "Netflix",
    rating: null,
    episodes: 8,
    type: "Original",
    genre: "Science-Fiction",
    trending: true,
  },
  {
    id: 2,
    title: "The Silent Witness",
    description: "Une adolescente mutique devient la seule temoin d'un crime. Sa capacite a lire sur les levres va la transformer en detective involontaire.",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=900&q=80",
    releaseDate: "12 fev",
    platform: "HBO Max",
    rating: 4.2,
    episodes: 10,
    type: "Exclusivite",
    genre: "Thriller",
    trending: false,
  },
  {
    id: 3,
    title: "Kitchen Confidential",
    description: "Les coulisses d'un restaurant etoile ou la passion, la trahison et l'ambition s'entremelent dans un ballet choregraphie de tensions.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    releaseDate: "19 fev",
    platform: "Apple TV+",
    rating: null,
    episodes: 6,
    type: "Original",
    genre: "Drame",
    trending: true,
  },
  {
    id: 4,
    title: "Echoes of the Past",
    description: "Un archéologue decouvre un artefact qui lui permet de revivre les souvenirs de ses ancetres, revelant des secrets familiaux enfouis.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",
    releaseDate: "26 fev",
    platform: "Prime Video",
    rating: null,
    episodes: 12,
    type: "Original",
    genre: "Fantasy",
    trending: false,
  },
];

const RETURNING_SERIES = [
  {
    id: 5,
    title: "The Crown",
    season: 7,
    description: "La saga royale continue avec l'ere post-Diana et l'emergence d'une nouvelle generation de Windsor.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80",
    releaseDate: "8 fev",
    platform: "Netflix",
    rating: 4.8,
    episodes: 10,
    trending: true,
  },
  {
    id: 6,
    title: "Succession",
    season: 5,
    description: "Les Roys sont de retour, et les luttes de pouvoir familiales n'ont jamais ete aussi feroces.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    releaseDate: "15 fev",
    platform: "HBO Max",
    rating: 4.9,
    episodes: 9,
    trending: true,
  },
];

function GradientRing({ radiusClass = "rounded-2xl", thickness = 2, glow = false, hoverGlow = false, className = "" }) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        radiusClass,
        glow ? "blur-md" : "",
        hoverGlow ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70" : "",
        className,
      ].join(" ")}
      style={{
        background: GRADIENT,
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: `${thickness}px`,
      }}
    />
  );
}

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">{title}</h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function NewSeriesCard({ series, featured = false }) {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-[32px]">
        <GradientRing radiusClass="rounded-[32px]" thickness={3} glow hoverGlow />
        <div className="relative rounded-[32px] bg-brand-dark/55 backdrop-blur">
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-[32px]">
            <img
              src={series.image}
              alt={series.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            
            {series.trending && (
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-black/50 px-3 py-1.5 text-xs font-semibold text-brand-cyan backdrop-blur">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Tendance
                </span>
              </div>
            )}

            <div className="absolute right-5 top-5 flex gap-2">
              <span className="rounded-full bg-brand-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {series.type}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
                    {series.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/60">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-brand-cyan" />
                      {series.releaseDate}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="h-4 w-4 text-brand-primary" />
                      {series.platform}
                    </span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">{series.genre}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                    {series.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/60">{series.episodes} episodes</span>
            </div>
            <div className="flex gap-2">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5 hover:text-white">
                <Info className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                <Plus className="h-4 w-4" />
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
          <img
            src={series.image}
            alt={series.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {series.trending && (
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-1 rounded-full border border-brand-cyan/30 bg-black/40 px-2 py-1 text-[10px] font-semibold text-brand-cyan backdrop-blur">
                <TrendingUp className="h-3 w-3" />
                Tendance
              </span>
            </div>
          )}

          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
              {series.platform}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-white">{series.title}</h3>
              {series.season && (
                <span className="text-xs text-brand-cyan">Saison {series.season}</span>
              )}
            </div>
            <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/70">{series.genre || "Drame"}</span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-white/60">{series.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-white/50">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {series.releaseDate}
              </span>
              <span>{series.episodes} ep</span>
            </div>
            {series.rating ? (
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
                <span className="text-sm font-medium text-white">{series.rating}</span>
              </div>
            ) : (
              <span className="rounded-full bg-brand-cyan/20 px-2 py-1 text-xs text-brand-cyan">Nouveau</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function NewSerieMonthlyPage() {
  const [selectedMonth, setSelectedMonth] = useState("fevrier");

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
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Agenda</p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">Nouveautes du mois</h1>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-4 overflow-x-auto pb-2">
          {["Janvier", "Fevrier", "Mars", "Avril", "Mai"].map((month) => (
            <button
              key={month.toLowerCase()}
              onClick={() => setSelectedMonth(month.toLowerCase())}
              className={[
                "whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all",
                selectedMonth === month.toLowerCase()
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10",
              ].join(" ")}
            >
              {month}
            </button>
          ))}
        </div>

        <div className="mb-10">
          <NewSeriesCard series={NEW_SERIES[0]} featured />
        </div>

        <SectionHeader title={`Series inedites - ${MONTH}`} />
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEW_SERIES.slice(1).map((series) => (
            <NewSeriesCard key={series.id} series={series} />
          ))}
        </div>

        <SectionHeader title={`Series de retour - ${MONTH}`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RETURNING_SERIES.map((series) => (
            <NewSeriesCard key={series.id} series={series} />
          ))}
        </div>

        <div className="group relative mt-12 overflow-hidden rounded-[28px]">
          <GradientRing radiusClass="rounded-[28px]" thickness={2} glow />
          <div className="relative rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
            <div className="flex flex-col items-center gap-4 text-center">
              <Calendar className="h-10 w-10 text-brand-cyan" />
              <h3 className="text-xl font-bold text-white">Ne manquez aucune nouveaute</h3>
              <p className="max-w-md text-sm text-white/70">
                Activez les notifications pour etre alerte des que vos series preferees arrivent.
              </p>
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Activer les alertes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
