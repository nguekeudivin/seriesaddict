import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Star,
  Plus,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const YEARS = [2025, 2026];

const releases = [
  {
    id: 1,
    title: "The Last Frontier",
    date: "5 fév",
    platform: "Netflix",
    genre: "Science-Fiction",
    episodes: 8,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    featured: true,
    description:
      "Dans un futur proche où l'humanité a colonisé Mars, un enquêteur doit résoudre un meurtre qui pourrait déclencher une guerre interplanétaire.",
  },
  {
    id: 2,
    title: "The Silent Witness",
    date: "12 fév",
    platform: "HBO Max",
    genre: "Thriller",
    episodes: 10,
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Kitchen Confidential",
    date: "19 fév",
    platform: "Apple TV+",
    genre: "Drame",
    episodes: 6,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    trending: true,
  },
  {
    id: 4,
    title: "Echoes of the Past",
    date: "26 fév",
    platform: "Prime Video",
    genre: "Fantasy",
    episodes: 12,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Neon District",
    date: "3 mars",
    platform: "Apple TV+",
    genre: "Thriller",
    episodes: 10,
    image:
      "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Deep Water",
    date: "10 mars",
    platform: "Netflix",
    genre: "Mystère",
    episodes: 8,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=600&q=80",
  },
];

function sortByDate(list) {
  return [...list].sort((a, b) => {
    const dayA = parseInt(a.date.match(/\d+/)?.[0] || 0, 10);
    const dayB = parseInt(b.date.match(/\d+/)?.[0] || 0, 10);
    return dayA - dayB;
  });
}

export default function NewSeriesVariantB() {
  const [monthIndex, setMonthIndex] = useState(1);
  const [yearIndex, setYearIndex] = useState(1);
  const scrollRef = useRef(null);

  const sortedReleases = sortByDate(releases);
  const featured = sortedReleases.find((s) => s.featured) || sortedReleases[0];
  const marked = sortedReleases
    .filter((s) => s.rating && !s.featured)
    .slice(0, 3);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 120, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-brand-primary/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">
              Magazine
            </p>
            <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Nouveautés
            </h1>
            <p className="mt-2 text-sm text-white/50">
              Les sorties séries à ne pas manquer ce mois-ci.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setYearIndex(Math.max(0, yearIndex - 1))}
                className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[60px] text-center text-sm font-bold text-white">
                {YEARS[yearIndex]}
              </span>
              <button
                onClick={() =>
                  setYearIndex(Math.min(YEARS.length - 1, yearIndex + 1))
                }
                className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div
                ref={scrollRef}
                className="flex max-w-[240px] gap-2 overflow-x-auto scrollbar-hide md:max-w-[320px]"
              >
                {MONTHS.map((m, idx) => (
                  <button
                    key={m}
                    onClick={() => setMonthIndex(idx)}
                    className={[
                      "shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase transition-all",
                      idx === monthIndex
                        ? "bg-white text-black"
                        : "border border-white/10 text-white/60 hover:border-white/30 hover:text-white",
                    ].join(" ")}
                  >
                    {m.slice(0, 3)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scroll(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="group relative overflow-hidden rounded-[28px] bg-brand-dark/40">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan backdrop-blur">
                <TrendingUp className="h-3.5 w-3.5" /> Coup de projecteur
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                {featured.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {featured.date}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {featured.platform}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {featured.episodes} épisodes
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  {featured.genre}
                </span>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
                <Plus className="h-4 w-4" /> Ajouter à ma liste
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Sorties marquantes
            </h3>
            {marked.map((series) => (
              <div
                key={series.id}
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-white/5 bg-brand-dark/30 p-3 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-brand-dark/50"
              >
                <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={series.image}
                    alt={series.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-white transition-colors group-hover:text-brand-cyan">
                    {series.title}
                  </h4>
                  {series.season && (
                    <p className="text-xs text-brand-cyan">
                      Saison {series.season}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-3 text-xs text-white/50">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {series.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />{" "}
                      {series.rating}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition group-hover:text-brand-cyan" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-4 w-[2px] rounded-full bg-gradient-to-b from-brand-primary to-brand-cyan" />
          <h2 className="text-lg font-black uppercase tracking-wide text-white">
            Nouveautés du mois
          </h2>
          <span className="ml-2 rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-white/60">
            {sortedReleases.length} sorties
          </span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedReleases
            .filter((s) => s.id !== featured.id)
            .map((series) => (
              <div
                key={series.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-brand-dark/30 transition-all duration-300 hover:border-white/10 hover:bg-brand-dark/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={series.image}
                    alt={series.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  {series.trending && (
                    <span className="absolute left-3 top-3 rounded-full bg-brand-primary/80 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
                      Tendance
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
                    {series.platform}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white">{series.title}</h3>
                  {series.season && (
                    <p className="text-xs text-brand-cyan">
                      Saison {series.season}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-3 text-xs text-white/50">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {series.date}
                    </span>
                    <span>{series.episodes} ép</span>
                  </div>
                  {series.rating && (
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-white/80">
                      <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />{" "}
                      {series.rating}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
