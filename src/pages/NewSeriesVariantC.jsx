
import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Star, Plus, Play, TrendingUp } from "lucide-react";

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

const YEARS = [2025, 2026];

const releases = [
  { id: 1, title: "The Last Frontier", date: "5 fév", platform: "Netflix", genre: "Science-Fiction", episodes: 8, image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80", featured: true, description: "Un enquêteur terrien doit résoudre un meurtre sur Mars." },
  { id: 2, title: "The Silent Witness", date: "8 fév", platform: "HBO Max", genre: "Thriller", episodes: 10, image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80", rating: 4.2 },
  { id: 3, title: "The Crown", date: "15 fév", platform: "Netflix", genre: "Drame historique", episodes: 10, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80", season: 7, rating: 4.8 },
  { id: 4, title: "Kitchen Confidential", date: "19 fév", platform: "Apple TV+", genre: "Drame", episodes: 6, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", trending: true },
  { id: 5, title: "Echoes of the Past", date: "26 fév", platform: "Prime Video", genre: "Fantasy", episodes: 12, image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Succession", date: "28 fév", platform: "HBO Max", genre: "Drame", episodes: 9, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", season: 5, rating: 4.9 },
];

function sortByDate(list) {
  return [...list].sort((a, b) => {
    const dayA = parseInt(a.date.match(/\d+/)?.[0] || 0, 10);
    const dayB = parseInt(b.date.match(/\d+/)?.[0] || 0, 10);
    return dayA - dayB;
  });
}

function PosterCard({ series }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/40 group-hover:shadow-[0_0_25px_rgba(30,108,134,.25)]">
        <img src={series.image} alt={series.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
        {series.trending && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-primary/90 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
            <TrendingUp className="mr-1 inline h-3 w-3" />
            Tendance
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:scale-110">
            <Play className="h-5 w-5 fill-current" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur">
            {series.platform}
          </span>
        </div>
      </div>
      <h3 className="mt-3 font-semibold text-white transition-colors group-hover:text-brand-cyan">
        {series.title}
      </h3>
      <div className="mt-1 flex items-center gap-2 text-xs text-white/50">
        <Calendar className="h-3 w-3" /> {series.date}
        {series.rating && (
          <span className="inline-flex items-center gap-1">
            <Star className="h-3 w-3 fill-brand-primary text-brand-primary" /> {series.rating}
          </span>
        )}
      </div>
    </div>
  );
}

export default function NewSeriesVariantC() {
  const [monthIndex, setMonthIndex] = useState(1);
  const [yearIndex, setYearIndex] = useState(1);

  const sortedReleases = sortByDate(releases);
  const featured = sortedReleases.find((s) => s.featured) || sortedReleases[0];
  const currentMonth = MONTHS[monthIndex];
  const currentYear = YEARS[yearIndex];

  const prevMonth = () => {
    if (monthIndex === 0) {
      if (yearIndex > 0) {
        setYearIndex(yearIndex - 1);
        setMonthIndex(11);
      }
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const nextMonth = () => {
    if (monthIndex === 11) {
      if (yearIndex < YEARS.length - 1) {
        setYearIndex(yearIndex + 1);
        setMonthIndex(0);
      }
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-5%] top-[-5%] h-[400px] w-[400px] rounded-full bg-brand-cyan/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex flex-col gap-6 rounded-3xl border border-white/5 bg-brand-dark/30 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Catalogue</p>
            <h1 className="mt-1 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Nouveautés</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1">
              <button onClick={() => setYearIndex(Math.max(0, yearIndex - 1))} className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[60px] text-center text-sm font-bold text-white">{currentYear}</span>
              <button onClick={() => setYearIndex(Math.min(YEARS.length - 1, yearIndex + 1))} className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1.5">
              <button onClick={prevMonth} className="grid h-10 w-10 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[140px] text-center text-sm font-black uppercase text-white">{currentMonth}</span>
              <button onClick={nextMonth} className="grid h-10 w-10 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2">
          {MONTHS.map((m, idx) => (
            <button
              key={m}
              onClick={() => setMonthIndex(idx)}
              className={[
                "shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase transition-all",
                idx === monthIndex
                  ? "bg-white text-black"
                  : "border border-white/10 text-white/50 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="group relative overflow-hidden rounded-3xl bg-brand-dark/40">
            <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="mb-3 inline-block rounded-full bg-brand-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan backdrop-blur">
                Sortie phare
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">{featured.title}</h2>
              <p className="mt-2 max-w-lg text-sm text-white/70">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{featured.date}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{featured.platform}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{featured.genre}</span>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-6 py-3 text-sm font-bold text-white transition hover:shadow-[0_0_30px_rgba(132,29,79,.5)]">
                <Plus className="h-4 w-4" /> Suivre
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-white/5 bg-brand-dark/30 p-6 backdrop-blur">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">En résumé</h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Total des nouveautés</span>
                  <span className="font-bold text-white">{sortedReleases.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Plateformes</span>
                  <span className="font-bold text-white">{new Set(sortedReleases.map((s) => s.platform)).size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Note moyenne</span>
                  <span className="font-bold text-white">4.5</span>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/5 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">Février est chargé</p>
              <p className="mt-1 text-xs text-white/50">Les grandes productions reviennent après les fêtes.</p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-4 w-[2px] rounded-full bg-gradient-to-b from-brand-primary to-brand-cyan" />
          <h2 className="text-xl font-black uppercase tracking-wide text-white">Nouveautés du mois</h2>
          <span className="ml-2 rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-white/60">{sortedReleases.length} sorties</span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sortedReleases.filter((s) => s.id !== featured.id).map((s) => (
            <PosterCard key={s.id} series={s} />
          ))}
        </div>
      </main>
    </div>
  );
}
