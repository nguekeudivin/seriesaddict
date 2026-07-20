import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Eye,
  Calendar,
  Clock,
  Star,
  Info,
  ChevronDown,
  Check,
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

const SERIES = {
  title: "STRANGER THINGS",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  totalSeasons: 4,
  status: "Terminée",
};

const SEASONS = [
  {
    id: 1,
    number: 1,
    title: "Saison 1",
    subtitle: "L'Étrange",
    year: 2016,
    episodes: 8,
    description:
      "La disparition mystérieuse de Will Byers dans la petite ville d'Hawkins, Indiana, révèle une dimension parallèle terrifiante connue sous le nom de l'Upside Down.",
    image:
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80",
    watched: true,
    progress: "8/8",
    rating: 4.7,
    votes: 1240,
    userRating: 5,
  },
  {
    id: 2,
    number: 2,
    title: "Saison 2",
    subtitle: "La Menace",
    year: 2017,
    episodes: 9,
    description:
      "Un an après les événements d'Hawkins, Will retrouve sa vie normale mais est hanté par des visions de l'Upside Down. De nouvelles menaces émergent de l'ombre.",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
    watched: true,
    progress: "9/9",
    rating: 4.5,
    votes: 980,
    userRating: 4,
  },
  {
    id: 3,
    number: 3,
    title: "Saison 3",
    subtitle: "L'Été",
    year: 2019,
    episodes: 8,
    description:
      "L'été 1985 à Hawkins. Le centre commercial Starcourt devient le centre de nouvelles menaces surnaturelles qui menacent la vie des habitants.",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=80",
    watched: false,
    progress: "5/8",
    rating: 4.2,
    votes: 856,
    userRating: 0,
  },
  {
    id: 4,
    number: 4,
    title: "Saison 4",
    subtitle: "L'Éloignement",
    year: 2022,
    episodes: 9,
    description:
      "Six mois après la bataille de Starcourt, nos héros sont séparés pour la première fois. Un nouveau danger surnaturel fait surface à Hawkins.",
    image:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=900&q=80",
    watched: false,
    progress: "0/9",
    rating: 4.6,
    votes: 1124,
    userRating: 0,
  },
];

const EPISODES = [
  {
    id: 1,
    number: 1,
    title: "La Disparition de Will Byers",
    duration: "49 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.5,
    poster:
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    number: 2,
    title: "La Barjot",
    duration: "55 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.8,
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    number: 3,
    title: "Joyeux Noël",
    duration: "51 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.6,
    poster:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    number: 4,
    title: "Le Corps",
    duration: "49 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.7,
    poster:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    number: 5,
    title: "Les Limaces",
    duration: "53 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.9,
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    number: 6,
    title: "Le Monstre",
    duration: "47 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.8,
    poster:
      "https://images.unsplash.com/photo-1519681393798-3828fb4090bb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    number: 7,
    title: "La Baignade",
    duration: "41 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.5,
    poster:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    number: 8,
    title: "Le Monde à l'Envers",
    duration: "48 min",
    airDate: "15 juil. 2016",
    watched: true,
    rating: 4.9,
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80",
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
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function StarRating({ value, onChange, max = 5, size = "h-4 w-4" }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(max)].map((_, i) => {
        const star = i + 1;
        const filled = star <= (hover || value);
        return (
          <button
            key={star}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange?.(star);
            }}
            onMouseEnter={(e) => {
              e.stopPropagation();
              setHover(star);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setHover(0);
            }}
            className="p-0.5 transition hover:scale-110"
          >
            <Star
              className={[
                size,
                filled
                  ? "fill-brand-primary text-brand-primary"
                  : "text-white/20",
              ].join(" ")}
            />
          </button>
        );
      })}
    </div>
  );
}

function SeasonCard({ season, isActive, onClick, onToggleWatched, onRate }) {
  return (
    <button
      onClick={onClick}
      className={[
        "group relative w-full overflow-hidden rounded-[24px] text-left transition-all duration-300",
        isActive ? "ring-2 ring-brand-primary" : "hover:scale-[1.02]",
      ].join(" ")}
    >
      <GradientRing
        radiusClass="rounded-[24px]"
        thickness={isActive ? 3 : 1.5}
        glow={isActive}
        hoverGlow={!isActive}
      />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
          <img
            src={season.image}
            alt={season.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <Calendar className="h-3 w-3 text-brand-cyan" />
              {season.year}
            </span>
          </div>
          {season.watched && (
            <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-brand-primary/80 text-white">
              <Check className="h-4 w-4" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
              {season.title}
            </h3>
            <p className="mt-1 text-sm text-brand-cyan">{season.subtitle}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">
              {season.episodes} épisodes
            </span>
            <span
              className={[
                "text-xs font-semibold",
                season.watched ? "text-brand-cyan" : "text-white/50",
              ].join(" ")}
            >
              {season.watched ? "Terminée" : `En cours · ${season.progress}`}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-sm text-white/90">
                <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
                <span className="font-semibold">{season.rating}</span>
                <span className="text-xs text-white/50">
                  ({season.votes} notes)
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleWatched();
              }}
              className={[
                "grid h-9 w-9 place-items-center rounded-full transition",
                season.watched
                  ? "bg-brand-cyan/20 text-brand-cyan"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white",
              ].join(" ")}
              title={season.watched ? "Marquer non vue" : "Marquer comme vue"}
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan transition-all duration-500"
              style={{
                width: season.watched
                  ? "100%"
                  : `${(parseInt(season.progress) / season.episodes) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </button>
  );
}

function EpisodeRow({ episode, isLast }) {
  return (
    <div
      className={[
        "flex items-center gap-4 py-4",
        !isLast && "border-b border-white/10",
      ].join(" ")}
    >
      <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-white/5">
        <img
          src={episode.poster}
          alt={episode.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h5 className="font-semibold text-brand-cyan"> E{episode.number}</h5>
        <h4 className="truncate font-semibold text-white">{episode.title}</h4>
        <div className="mt-1 flex items-center gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {episode.duration}
          </span>
          <span>{episode.airDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {episode.watched ? (
          <>
            <div className="flex items-center gap-1 text-sm text-brand-cyan">
              <Star className="h-3.5 w-3.5 fill-current" />
              {episode.rating}
            </div>
            <button className="grid h-10 w-10 place-items-center rounded-xl border border-brand-cyan/30 text-brand-cyan transition hover:bg-brand-cyan/10">
              <Eye className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-[1.02]">
            <Play className="h-3.5 w-3.5" />
            Regarder
          </button>
        )}
      </div>
    </div>
  );
}

export default function SerieSeasonsPage() {
  const navigate = useNavigate();
  const [seasons, setSeasons] = useState(SEASONS);
  const [activeSeasonId, setActiveSeasonId] = useState(SEASONS[2].id);
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  const activeSeason = seasons.find((s) => s.id === activeSeasonId);

  const toggleSeasonWatched = (seasonId) => {
    setSeasons((prev) =>
      prev.map((s) =>
        s.id === seasonId
          ? {
              ...s,
              watched: !s.watched,
              progress: s.watched
                ? `0/${s.episodes}`
                : `${s.episodes}/${s.episodes}`,
            }
          : s,
      ),
    );
  };

  const rateSeason = (seasonId, rating) => {
    setSeasons((prev) =>
      prev.map((s) => (s.id === seasonId ? { ...s, userRating: rating } : s)),
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Saisons
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {SERIES.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              {SERIES.totalSeasons} saisons · {SERIES.status}
            </span>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              <Info className="h-4 w-4" />
              Infos série
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <SectionHeader title="Explorer les saisons" />
            <div className="grid gap-4 sm:grid-cols-2">
              {seasons.map((season) => (
                <SeasonCard
                  key={season.id}
                  season={season}
                  isActive={activeSeason.id === season.id}
                  onClick={() => setActiveSeasonId(season.id)}
                  onToggleWatched={() => toggleSeasonWatched(season.id)}
                  onRate={(rating) => rateSeason(season.id, rating)}
                />
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`}
                  />
                  <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
                    {activeSeason.title}
                  </h2>
                </div>
                <button
                  onClick={() => setShowAllEpisodes(!showAllEpisodes)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
                >
                  {showAllEpisodes ? "Voir moins" : "Voir tout"}
                  <ChevronDown
                    className={[
                      "h-4 w-4 transition-transform",
                      showAllEpisodes && "rotate-180",
                    ].join(" ")}
                  />
                </button>
                <button
                  onClick={() =>
                    navigate(`/series/season/${activeSeason.number}`)
                  }
                  className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-primary/15 px-4 py-2 text-xs font-semibold text-brand-cyan transition hover:bg-brand-primary/25"
                >
                  Voir cette saison
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="group relative overflow-hidden rounded-[28px]">
                <GradientRing radiusClass="rounded-[28px]" thickness={2} />
                <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur">
                  <p className="mb-6 text-sm leading-relaxed text-white/70">
                    {activeSeason.description}
                  </p>
                  <div className="space-y-1">
                    {(showAllEpisodes ? EPISODES : EPISODES.slice(0, 4)).map(
                      (episode, idx, arr) => (
                        <EpisodeRow
                          key={episode.id}
                          episode={episode}
                          isLast={
                            idx === (showAllEpisodes ? arr.length - 1 : 3)
                          }
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing
                radiusClass="rounded-[28px]"
                thickness={2}
                glow
                hoverGlow
              />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <div className="relative aspect-[2/3] overflow-hidden rounded-[20px]">
                  <img
                    src={SERIES.poster}
                    alt={SERIES.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                      Continuer la saison 3
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Progression
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Saisons terminées</span>
                    <span className="font-semibold text-brand-cyan">2/4</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Épisodes vus</span>
                    <span className="font-semibold text-brand-cyan">22/34</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
