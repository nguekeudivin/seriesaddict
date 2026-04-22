import { useState } from "react";
import {
  ChevronLeft,
  Plus,
  Check,
  Bookmark,
  Star,
  Clock,
  Eye,
  Calendar,
  ChevronDown,
  Search,
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
  id: 1,
  title: "STRANGER THINGS",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  totalSeasons: 4,
  episodesPerSeason: [8, 9, 8, 9],
  status: "Terminee",
  rating: 4.7,
};

const STATUSES = [
  { key: "watching", label: "En cours", icon: Eye, color: "text-brand-cyan" },
  { key: "completed", label: "Terminee", icon: Check, color: "text-green-500" },
  { key: "planned", label: "A voir", icon: Bookmark, color: "text-yellow-500" },
  {
    key: "dropped",
    label: "Abandonnee",
    icon: ChevronDown,
    color: "text-red-500",
  },
];

const SEASONS = [1, 2, 3, 4].map((num) => ({
  id: num,
  number: num,
  title: `Saison ${num}`,
  episodes: SERIES.episodesPerSeason[num - 1],
  image: `https://images.unsplash.com/photo-${["1485846234645-a62644f84728", "1524985069026-dd778a71c7b4", "1523598455533-144bae1f0b14", "1518929458119-e5bf444c30f4"][num - 1]}?auto=format&fit=crop&w=600&q=80`,
}));

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

function StatusButton({ status, selected, onClick }) {
  const Icon = status.icon;
  return (
    <button
      onClick={onClick}
      className={[
        "flex flex-col items-center gap-2 rounded-xl border p-4 transition-all duration-300",
        selected
          ? "border-brand-cyan bg-brand-cyan/10"
          : "border-white/10 bg-white/5 hover:border-white/20",
      ].join(" ")}
    >
      <Icon
        className={["h-6 w-6", selected ? status.color : "text-white/50"].join(
          " ",
        )}
      />
      <span
        className={[
          "text-xs font-medium",
          selected ? "text-white" : "text-white/60",
        ].join(" ")}
      >
        {status.label}
      </span>
    </button>
  );
}

function SeasonCard({ season, selected, onClick, progress }) {
  return (
    <button
      onClick={onClick}
      className={[
        "group relative overflow-hidden rounded-[20px] text-left transition-all duration-300",
        selected ? "ring-2 ring-brand-cyan" : "",
      ].join(" ")}
    >
      <GradientRing
        radiusClass="rounded-[20px]"
        thickness={selected ? 3 : 1.5}
        hoverGlow={!selected}
      />
      <div className="relative rounded-[20px] bg-brand-dark/55 p-4 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-12 overflow-hidden rounded-lg">
            <img
              src={season.image}
              alt={season.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white">{season.title}</h3>
            <p className="text-xs text-white/60">{season.episodes} episodes</p>
            {selected && progress > 0 && (
              <div className="mt-2">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan"
                    style={{ width: `${(progress / season.episodes) * 100}%` }}
                  />
                </div>
                <p className="mt-1 text-[10px] text-brand-cyan">
                  {progress}/{season.episodes} episodes
                </p>
              </div>
            )}
          </div>
          {selected && (
            <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-cyan/20 text-brand-cyan">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

export default function AddUserSerithequePage() {
  const [selectedStatus, setSelectedStatus] = useState("watching");
  const [selectedSeasons, setSelectedSeasons] = useState([1]);
  const [seasonProgress, setSeasonProgress] = useState({
    1: 3,
    2: 0,
    3: 0,
    4: 0,
  });
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState("");

  const toggleSeason = (seasonId) => {
    setSelectedSeasons((prev) =>
      prev.includes(seasonId)
        ? prev.filter((id) => id !== seasonId)
        : [...prev, seasonId],
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-3xl px-5 py-8">
        <div className="mb-8 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Ajouter a ma seritheque
            </p>
            <h1 className="text-xl font-extrabold uppercase tracking-wide text-white">
              {SERIES.title}
            </h1>
          </div>
        </div>

        <div className="group relative mb-6 overflow-hidden rounded-[24px]">
          <GradientRing radiusClass="rounded-[24px]" thickness={2} glow />
          <div className="relative rounded-[24px] bg-brand-dark/55 p-6 backdrop-blur">
            <div className="flex items-start gap-5">
              <div className="relative h-32 w-24 overflow-hidden rounded-xl">
                <img
                  src={SERIES.poster}
                  alt={SERIES.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-white">{SERIES.title}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-brand-primary" />
                    {SERIES.rating}/5
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-brand-cyan" />
                    {SERIES.totalSeasons} saisons
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                    Terminee
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  34 episodes au total • Par les freres Duffer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">
            Statut
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATUSES.map((status) => (
              <StatusButton
                key={status.key}
                status={status}
                selected={selectedStatus === status.key}
                onClick={() => setSelectedStatus(status.key)}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">
            Saisons selectionnees
          </h3>
          <div className="space-y-3">
            {SEASONS.map((season) => (
              <SeasonCard
                key={season.id}
                season={season}
                selected={selectedSeasons.includes(season.id)}
                onClick={() => toggleSeason(season.id)}
                progress={seasonProgress[season.id]}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">
            Ma note
          </h3>
          <div className="group relative overflow-hidden rounded-[24px]">
            <GradientRing radiusClass="rounded-[24px]" thickness={1.5} />
            <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur">
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition hover:scale-110"
                  >
                    <Star
                      className={[
                        "h-8 w-8",
                        star <= rating
                          ? "fill-brand-primary text-brand-primary"
                          : "text-white/20",
                      ].join(" ")}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-3 text-center text-sm text-white/60">
                {rating > 0 ? `${rating}/5 - ` : ""}
                {rating === 0
                  ? "Cliquez pour noter"
                  : rating <= 2
                    ? "Pas fan"
                    : rating <= 3
                      ? "Correct"
                      : rating <= 4
                        ? "Tres bien !"
                        : "Chef-d'oeuvre !"}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">
            Notes personnelles
          </h3>
          <div className="relative rounded-[20px] p-[1px]">
            <div
              className={`absolute inset-0 rounded-[20px] ${ACCENT_GRADIENT} opacity-40`}
            />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ajoutez vos notes personnelles sur cette serie..."
              rows={4}
              className="relative w-full resize-none rounded-[20px] bg-brand-dark/80 p-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-full border border-white/20 bg-transparent py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
            Annuler
          </button>
          <button className="flex-1 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
            Ajouter a ma seritheque
          </button>
        </div>
      </main>
    </div>
  );
}
