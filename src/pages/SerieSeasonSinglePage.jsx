import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  Eye,
  EyeOff,
  MessageCircle,
  Play,
  Star,
  Trophy,
  TrendingUp,
  Filter,
} from "lucide-react";
import GradientRing from "../components/GradientRing";

const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const SERIES = {
  title: "STRANGER THINGS",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
};

const SEASON = {
  number: 4,
  title: "L'Éloignement",
  releaseDate: "27 mai 2022",
  episodeCount: 9,
  synopsis:
    "Six mois après la bataille de Starcourt, nos héros sont séparés pour la première fois. Pendant qu'Eleven tente de s'adapter à la vie en Californie, un nouveau danger surnaturel fait surface à Hawkins. Un mystère qui pourrait enfin révéler l'origine du Monde à l'Envers.",
  image:
    "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1200&q=80",
  watchedEpisodes: 6,
  lastActivity: "Épisode 6 regardé hier",
};

const EPISODES = [
  {
    id: 1,
    number: 1,
    title: "The Hellfire Club",
    duration: "76 min",
    airDate: "27 mai 2022",
    watched: true,
    userRating: 4,
    popularity: 92,
    rating: 8.7,
    comments: 156,
    synopsis:
      "Après une tragédie à Hawkins, les enfants tentent de reprendre une vie normale. Eleven et Will déménagent en Californie tandis qu'un nouveau club de jeu vidéo attire l'attention.",
  },
  {
    id: 2,
    number: 2,
    title: "Vecna's Curse",
    duration: "65 min",
    airDate: "27 mai 2022",
    watched: true,
    userRating: 5,
    popularity: 88,
    rating: 8.5,
    comments: 134,
    synopsis:
      "Un étrange meurtre à Hawkins réveille de vieilles peurs. Dustin et ses amis font face à une nouvelle menace dans leurs jeux de rôle.",
  },
  {
    id: 3,
    number: 3,
    title: "The Monster and the Superhero",
    duration: "63 min",
    airDate: "27 mai 2022",
    watched: true,
    userRating: 4,
    popularity: 85,
    rating: 8.3,
    comments: 112,
    synopsis:
      "Eleven est confrontée à son passé à travers des visions troublantes. La police enquête sur les événements surnaturels de Hawkins.",
  },
  {
    id: 4,
    number: 4,
    title: "Dear Billy",
    duration: "78 min",
    airDate: "27 mai 2022",
    watched: true,
    userRating: 5,
    popularity: 96,
    rating: 9.2,
    comments: 245,
    synopsis:
      "Max se retrouve en danger et ses amis doivent affronter leurs pires souvenirs pour la sauver. Un épisode émotionnellement intense.",
  },
  {
    id: 5,
    number: 5,
    title: "The Nina Project",
    duration: "74 min",
    airDate: "27 mai 2022",
    watched: true,
    userRating: 5,
    popularity: 94,
    rating: 9.0,
    comments: 198,
    synopsis:
      "Eleven découvre un projet secret qui pourrait lui permettre de retrouver ses pouvoirs. Joyce et Murray poursuivent leur mission en Russie.",
  },
  {
    id: 6,
    number: 6,
    title: "The Dive",
    duration: "73 min",
    airDate: "27 mai 2022",
    watched: true,
    userRating: 4,
    popularity: 90,
    rating: 8.8,
    comments: 176,
    synopsis:
      "Les amis tentent de comprendre l'origine du Monde à l'Envers. Eleven replonge dans ses souvenirs les plus douloureux.",
  },
  {
    id: 7,
    number: 7,
    title: "The Massacre at Hawkins Lab",
    duration: "98 min",
    airDate: "1 juill. 2022",
    watched: false,
    userRating: 0,
    popularity: 98,
    rating: 9.4,
    comments: 312,
    synopsis:
      "Les secrets du laboratoire d'Hawkins sont enfin révélés. Eleven doit affronter la vérité sur ce qui s'est passé réellement.",
  },
  {
    id: 8,
    number: 8,
    title: "Papa",
    duration: "85 min",
    airDate: "1 juill. 2022",
    watched: false,
    userRating: 0,
    popularity: 89,
    rating: 8.6,
    comments: 203,
    synopsis:
      "Eleven se retrouve face à son créateur et doit choisir son camp. À Hawkins, la bataille finale approche.",
  },
  {
    id: 9,
    number: 9,
    title: "The Piggyback",
    duration: "142 min",
    airDate: "1 juill. 2022",
    watched: false,
    userRating: 0,
    popularity: 99,
    rating: 9.3,
    comments: 428,
    synopsis:
      "La confrontation finale entre Hawkins et le Monde à l'Envers. Tous les personnages principaux unissent leurs forces dans un épisode marathon.",
  },
];

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <svg
            className="h-4 w-4 opacity-70 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={[
            "h-4 w-4",
            star <= rating
              ? "fill-brand-yellow text-brand-yellow"
              : "text-white/25",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function EpisodeCard({ episode, hideSpoilers }) {
  const synopsis =
    hideSpoilers && !episode.watched
      ? "Synopsis masqué pour éviter les spoilers."
      : episode.synopsis;

  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.5} hoverGlow />
      <div className="relative flex flex-col gap-5 rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur sm:flex-row sm:items-start">
        <div className="relative mx-auto w-40 shrink-0 overflow-hidden rounded-2xl shadow-lg sm:mx-0 sm:w-44">
          <div className="aspect-[2/3] w-full">
            <img
              src={SERIES.poster}
              alt={episode.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
            {episode.duration}
          </div>
          <div className="absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-brand-primary text-sm font-bold text-white shadow-md">
            {episode.number}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                Épisode {String(episode.number).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">
                {episode.title}
              </h3>
            </div>
            {episode.watched ? (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-semibold text-brand-cyan">
                <Check className="h-3.5 w-3.5" />
                Vu
              </span>
            ) : (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                <Clock className="h-3.5 w-3.5" />À voir
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {episode.airDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5" />
              Popularité {episode.popularity}%
            </span>
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow" />
              {episode.rating}/10
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" />
              {episode.comments} discussions
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {synopsis}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Note perso
              </span>
              {episode.watched ? (
                <RatingStars rating={episode.userRating} />
              ) : (
                <span className="text-xs text-white/40">Non noté</span>
              )}
            </div>

            {episode.watched ? (
              <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
                <Eye className="h-3.5 w-3.5" />
                Revoir
              </button>
            ) : (
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-[1.02]">
                <Play className="h-3.5 w-3.5" />
                Regarder
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition",
        active
          ? "border-brand-primary bg-brand-primary/20 text-white"
          : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white",
      ].join(" ")}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {label}
    </button>
  );
}

export default function SerieSeasonSinglePage() {
  const navigate = useNavigate();
  const { seasonNumber } = useParams();
  const [hideSpoilers, setHideSpoilers] = useState(false);
  const [filterUnwatched, setFilterUnwatched] = useState(false);
  const [filterPopular, setFilterPopular] = useState(false);
  const [filterTopRated, setFilterTopRated] = useState(false);

  const progress = Math.round(
    (SEASON.watchedEpisodes / SEASON.episodeCount) * 100,
  );

  const filteredEpisodes = useMemo(() => {
    let result = [...EPISODES];

    if (filterUnwatched) {
      result = result.filter((ep) => !ep.watched);
    }

    if (filterPopular) {
      result = result.filter((ep) => ep.popularity >= 90);
    }

    if (filterTopRated) {
      result = result.sort((a, b) => b.rating - a.rating);
    } else if (filterPopular) {
      result = result.sort((a, b) => b.popularity - a.popularity);
    } else {
      result = result.sort((a, b) => a.number - b.number);
    }

    return result;
  }, [filterUnwatched, filterPopular, filterTopRated]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={SEASON.image}
              alt={`${SERIES.title} Saison ${SEASON.number}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 sm:pb-14 sm:pt-12 lg:pb-20 lg:pt-16">
            <button
              onClick={() => navigate("/series/seasons")}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux saisons
            </button>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_380px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {SERIES.title}
                </p>
                <h1 className="mt-2 text-4xl font-black uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
                  Saison {seasonNumber || SEASON.number}
                </h1>
                {SEASON.title && (
                  <p className="mt-2 text-xl font-semibold text-brand-cyan">
                    {SEASON.title}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    <Calendar className="h-4 w-4 text-brand-cyan" />
                    {SEASON.releaseDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    <Play className="h-4 w-4 text-brand-cyan" />
                    {SEASON.episodeCount} épisodes
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    <Clock className="h-4 w-4 text-brand-cyan" />
                    ~75 min/épisode
                  </span>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-[15px]">
                  {SEASON.synopsis}
                </p>
              </div>

              <aside className="space-y-6">
                <div className="group relative overflow-hidden rounded-[28px]">
                  <GradientRing
                    radiusClass="rounded-[28px]"
                    thickness={2}
                    glow
                    hoverGlow
                  />
                  <div className="relative rounded-[28px] bg-brand-dark/60 p-6 backdrop-blur">
                    <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                      Progression personnelle
                    </h3>

                    <div className="mt-5 flex items-end gap-3">
                      <span className="text-5xl font-black text-white">
                        {SEASON.watchedEpisodes}
                      </span>
                      <span className="mb-2 text-lg font-semibold text-white/60">
                        / {SEASON.episodeCount} épisodes
                      </span>
                    </div>

                    <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                        Dernière activité
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {SEASON.lastActivity}
                      </p>
                    </div>

                    <button className="mt-5 w-full rounded-full bg-white py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
                      Continuer la saison
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Episode list */}
        <section className="mx-auto max-w-7xl px-5 py-10 lg:py-14">
          <SectionHeader title="Liste des épisodes" />

          {/* Discovery mode */}
          <div className="mb-8 rounded-[24px] border border-white/10 bg-brand-dark/40 p-5 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-brand-cyan" />
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Mode découverte
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Toggle
                  active={hideSpoilers}
                  onClick={() => setHideSpoilers(!hideSpoilers)}
                  icon={hideSpoilers ? EyeOff : Eye}
                  label="Masquer les spoilers"
                />
                <Toggle
                  active={filterUnwatched}
                  onClick={() => {
                    setFilterUnwatched(!filterUnwatched);
                    if (filterTopRated) setFilterTopRated(false);
                  }}
                  icon={EyeOff}
                  label="Non vus"
                />
                <Toggle
                  active={filterPopular}
                  onClick={() => {
                    setFilterPopular(!filterPopular);
                    if (filterTopRated) setFilterTopRated(false);
                  }}
                  icon={TrendingUp}
                  label="Populaires"
                />
                <Toggle
                  active={filterTopRated}
                  onClick={() => {
                    setFilterTopRated(!filterTopRated);
                    if (filterUnwatched) setFilterUnwatched(false);
                    if (filterPopular) setFilterPopular(false);
                  }}
                  icon={Trophy}
                  label="Mieux notés"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredEpisodes.length === 0 ? (
              <div className="rounded-[28px] border border-white/10 bg-brand-dark/40 p-10 text-center text-white/60">
                Aucun épisode ne correspond à vos filtres.
              </div>
            ) : (
              filteredEpisodes.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  hideSpoilers={hideSpoilers}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
