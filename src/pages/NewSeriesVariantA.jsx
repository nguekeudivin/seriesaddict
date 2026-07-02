import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Star,
  Plus,
  TrendingUp,
  Clapperboard,
  Clock,
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

const data = {
  fevrier: {
    featured: {
      id: 1,
      title: "The Last Frontier",
      description:
        "Dans un futur proche où l'humanité a colonisé Mars, un enquêteur terrien doit résoudre un meurtre qui pourrait déclencher une guerre interplanétaire.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
      releaseDate: "5 fév",
      platform: "Netflix",
      episodes: 8,
      genre: "Science-Fiction",
    },
    new: [
      {
        id: 2,
        title: "The Silent Witness",
        releaseDate: "12 fév",
        platform: "HBO Max",
        episodes: 10,
        genre: "Thriller",
        image:
          "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
        rating: 4.2,
      },
      {
        id: 3,
        title: "Kitchen Confidential",
        releaseDate: "19 fév",
        platform: "Apple TV+",
        episodes: 6,
        genre: "Drame",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
        trending: true,
      },
      {
        id: 4,
        title: "Echoes of the Past",
        releaseDate: "26 fév",
        platform: "Prime Video",
        episodes: 12,
        genre: "Fantasy",
        image:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80",
      },
    ],
    returning: [
      {
        id: 5,
        title: "The Crown",
        season: 7,
        releaseDate: "8 fév",
        platform: "Netflix",
        episodes: 10,
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
      },
      {
        id: 6,
        title: "Succession",
        season: 5,
        releaseDate: "15 fév",
        platform: "HBO Max",
        episodes: 9,
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
      },
    ],
  },
  mars: {
    featured: {
      id: 7,
      title: "Neon District",
      description:
        "Un détective cybernétique enquête sur une série de meurtres dans un Tokyo futuriste où réalité augmentée et organique se confondent.",
      image:
        "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&w=1200&q=80",
      releaseDate: "3 mars",
      platform: "Apple TV+",
      episodes: 10,
      genre: "Thriller",
    },
    new: [
      {
        id: 8,
        title: "Deep Water",
        releaseDate: "10 mars",
        platform: "Netflix",
        episodes: 8,
        genre: "Mystère",
        image:
          "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 9,
        title: "The Diplomat",
        releaseDate: "17 mars",
        platform: "Prime Video",
        episodes: 6,
        genre: "Politique",
        image:
          "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
      },
    ],
    returning: [
      {
        id: 10,
        title: "Severance",
        season: 2,
        releaseDate: "7 mars",
        platform: "Apple TV+",
        episodes: 10,
        image:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
      },
    ],
  },
  janvier: {
    featured: {
      id: 11,
      title: "Cold Case",
      description:
        "Une journaliste réinvestit une affaire non résolue de 1987 après la découverte d'une nouvelle trace numérique.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      releaseDate: "8 jan",
      platform: "HBO Max",
      episodes: 8,
      genre: "Polar",
    },
    new: [
      {
        id: 12,
        title: "Arctic Blue",
        releaseDate: "15 jan",
        platform: "Netflix",
        episodes: 6,
        genre: "Aventure",
        image:
          "https://images.unsplash.com/photo-1518182170546-0766bc6f9213?auto=format&fit=crop&w=600&q=80",
      },
    ],
    returning: [
      {
        id: 13,
        title: "Slow Horses",
        season: 5,
        releaseDate: "22 jan",
        platform: "Apple TV+",
        episodes: 6,
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
      },
    ],
  },
};

function getMonthData(month, year) {
  const key = month
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const raw = data[key] || { featured: null, new: [], returning: [] };
  const releases = [...raw.new, ...raw.returning].sort((a, b) => {
    const dayA = parseInt(a.releaseDate.match(/\d+/)?.[0] || 0, 10);
    const dayB = parseInt(b.releaseDate.match(/\d+/)?.[0] || 0, 10);
    return dayA - dayB;
  });
  return { ...raw, releases };
}

function FeaturedCard({ series }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-brand-dark/40">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[16/9] lg:aspect-auto">
          <img
            src={series.image}
            alt={series.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/40 lg:to-black" />
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-8">
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan backdrop-blur">
            <TrendingUp className="h-3.5 w-3.5" /> Sortie du mois
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {series.title}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
              <Calendar className="h-3 w-3" /> {series.releaseDate}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
              <Clapperboard className="h-3 w-3" /> {series.platform}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
              <Clock className="h-3 w-3" /> {series.episodes} épisodes
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
              {series.genre}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {series.description}
          </p>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-5 py-2.5 text-sm font-bold text-white transition hover:shadow-[0_0_25px_rgba(132,29,79,.5)]">
              <Plus className="h-4 w-4" /> Ma liste
            </button>
            <button className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan p-[1px] transition hover:shadow-[0_0_25px_rgba(132,29,79,.5)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-dark/60">
                Détails
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeriesCard({ series }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-brand-dark/30 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-brand-dark/50">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={series.image}
          alt={series.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
          {series.platform}
        </span>
        {series.trending && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-primary/80 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
            Tendance
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-white">{series.title}</h3>
            {series.season && (
              <p className="text-xs text-brand-cyan">Saison {series.season}</p>
            )}
          </div>
          {series.rating && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/80">
              <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />{" "}
              {series.rating}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center gap-3 text-xs text-white/50">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {series.releaseDate}
          </span>
          <span>{series.episodes} ép</span>
        </div>
      </div>
    </div>
  );
}

export default function NewSeriesVariantA() {
  const [monthIndex, setMonthIndex] = useState(1);
  const [yearIndex, setYearIndex] = useState(1);

  const currentMonth = MONTHS[monthIndex];
  const currentYear = YEARS[yearIndex];
  const monthData = getMonthData(currentMonth, currentYear);

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
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">
              Agenda
            </p>
            <h1 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Nouveautés du mois
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setYearIndex(Math.max(0, yearIndex - 1))}
                className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[60px] text-center text-sm font-bold text-white">
                {currentYear}
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
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={prevMonth}
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[140px] text-center text-sm font-bold uppercase text-white">
                {currentMonth}
              </span>
              <button
                onClick={nextMonth}
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
          {MONTHS.map((m, idx) => (
            <button
              key={m}
              onClick={() => setMonthIndex(idx)}
              className={[
                "whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all",
                idx === monthIndex
                  ? "bg-gradient-to-r from-brand-primary to-brand-cyan text-white shadow-[0_0_20px_rgba(132,29,79,.4)]"
                  : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {m}
            </button>
          ))}
        </div>

        {monthData.featured && (
          <div className="mb-12">
            <FeaturedCard series={monthData.featured} />
          </div>
        )}

        <div className="mb-6 flex items-center gap-3">
          <span className="h-4 w-[2px] rounded-full bg-gradient-to-b from-brand-primary to-brand-cyan" />
          <h2 className="text-lg font-black uppercase tracking-wide text-white">
            Nouveautés du mois
          </h2>
          <span className="ml-2 rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-white/60">
            {monthData.releases.length} sorties
          </span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {monthData.releases.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </main>
    </div>
  );
}
