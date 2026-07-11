import React from "react";
import {
  Play,
  Clock,
  Star,
  ChevronRight,
  Zap,
  Calendar,
  Info,
  X,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Heart,
  Tv,
} from "lucide-react";

/**
 * EpisodesToWatchPage.jsx — Inbox de contenu
 * Vue principale des episodes a voir aujourd'hui + mode session "Je regarde maintenant".
 */

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

const IMPORTANCE_META = {
  friend: {
    label: "Recommande par un ami",
    icon: Users,
    color: "text-brand-cyan",
  },
  highlyRated: {
    label: "Tres bien note",
    icon: Star,
    color: "text-yellow-500",
  },
  trending: { label: "Tendance", icon: Zap, color: "text-brand-primary" },
  new: { label: "Nouveau", icon: Sparkles, color: "text-white" },
  favorite: { label: "Dans vos favoris", icon: Heart, color: "text-red-400" },
};

const MOCK_EPISODES = [
  {
    id: "ep-1",
    series: "The Bear",
    episodeCode: "S03E04",
    title: "Violet",
    synopsis:
      "Carmy pousse son equipe a se depasser alors que le restaurant s'approche de son ouverture officielle. Tensions et emotions au menu.",
    duration: 42,
    image:
      "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "friend",
    importanceText: "Votre ami Marc lui a donne 5 etoiles.",
    platform: "FX / Disney+",
    rating: 4.9,
  },
  {
    id: "ep-2",
    series: "Stranger Things",
    episodeCode: "S05E02",
    title: "The Crawl",
    synopsis:
      "Le groupe retrouve des indices sur les origines du Upside Down et doit affronter une menace plus grande que jamais.",
    duration: 58,
    image:
      "https://images.pexels.com/photos/10005543/pexels-photo-10005543.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "highlyRated",
    importanceText: "Note moyenne de la communaute : 4.8/5.",
    platform: "Netflix",
    rating: 4.8,
  },
  {
    id: "ep-3",
    series: "One Piece",
    episodeCode: "S02E01",
    title: "Le debut de l'aventure",
    synopsis:
      "Luffy et son equipage font route vers de nouvelles iles et affrontent des ennemis redoutables pour trouver le One Piece.",
    duration: 50,
    image:
      "https://images.pexels.com/photos/7513468/pexels-photo-7513468.jpeg?auto=compress&cs=tinysrgb&w=900",
    importance: "trending",
    importanceText: "Tendance cette semaine parmi les fans d'action.",
    platform: "Netflix",
    rating: 4.6,
  },
];

const SESSION_PREP = {
  previousSummary:
    "Dans l'episode precedent, les tensions ont atteint un paroxysme. Le cliffhanger laisse l'equipe face a une decision impossible qui changera la suite de la saison.",
  nextEpisode: {
    series: "The Bear",
    episodeCode: "S03E05",
    title: "Children",
    duration: 45,
    synopsis:
      "Le lendemain de l'ouverture, chaque membre de l'equipe fait le bilan. Les repercussions de la veille s'etendent a toute la brigade.",
  },
};

function formatDuration(min) {
  return `${min} min`;
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

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
        <h2 className="text-lg font-semibold tracking-wide text-white">
          {title}
        </h2>
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

function EpisodeCard({ episode, onWatch }) {
  const meta = IMPORTANCE_META[episode.importance] || IMPORTANCE_META.new;
  const Icon = meta.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl">
      <GradientRing radiusClass="rounded-2xl" thickness={2} hoverGlow />
      <div className="relative rounded-2xl bg-brand-dark/55 backdrop-blur">
        <div className="grid md:grid-cols-[220px_1fr]">
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
            <img
              src={episode.image}
              alt={`${episode.series} ${episode.episodeCode}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/30 md:to-black/80" />
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
                <Icon className={`h-3 w-3 ${meta.color}`} />
                {meta.label}
              </span>
            </div>
          </div>

          <div className="p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand-cyan/20 bg-black/25 px-2 py-0.5 font-semibold text-brand-cyan">
                    {episode.episodeCode}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatDuration(episode.duration)}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Tv className="h-3 w-3" />
                    {episode.platform}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    {episode.rating}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-extrabold text-white md:text-2xl">
                  {episode.series}{" "}
                  <span className="text-brand-cyan">{episode.episodeCode}</span>
                </h3>
                <p className="mt-1 text-sm font-semibold text-white/80">
                  {episode.title}
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                  {episode.synopsis}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/10 px-3 py-1.5 text-xs text-white/80">
                  <Info className="h-3.5 w-3.5 text-brand-primary" />
                  <span>Episode recommande car : {episode.importanceText}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <button
                  onClick={() => onWatch(episode)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all hover:shadow-brand-cyan/30 active:scale-[0.98]"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Je regarde maintenant
                </button>
                <button className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition hover:text-white">
                  <CheckCircle2 className="h-4 w-4" />
                  Marquer comme vu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SessionDrawer({ episode, onClose }) {
  if (!episode) return null;

  const totalRemaining =
    episode.duration + (SESSION_PREP.nextEpisode?.duration || 0);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm md:items-center">
      <div className="relative w-full max-w-3xl rounded-t-3xl bg-brand-dark p-6 md:rounded-3xl md:p-8">
        <GradientRing
          radiusClass="rounded-t-3xl md:rounded-3xl"
          thickness={2}
          glow
        />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-white">
            <Play className="h-5 w-5 fill-current" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Mode session active
            </p>
            <h3 className="text-lg font-extrabold text-white">
              Vous regardez {episode.series} {episode.episodeCode}
            </h3>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              Resume precedent
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {SESSION_PREP.previousSummary}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              Prochain episode
            </p>
            <div className="mt-2">
              <p className="text-base font-bold text-white">
                {SESSION_PREP.nextEpisode.series}{" "}
                <span className="text-brand-cyan">
                  {SESSION_PREP.nextEpisode.episodeCode}
                </span>
              </p>
              <p className="text-sm font-medium text-white/80">
                {SESSION_PREP.nextEpisode.title}
              </p>
              <p className="mt-2 text-sm text-white/60 line-clamp-3">
                {SESSION_PREP.nextEpisode.synopsis}
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-white/70">
                <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                {formatDuration(SESSION_PREP.nextEpisode.duration)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/10 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                Duree restante
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                {formatDuration(totalRemaining)}
              </p>
              <p className="text-xs text-white/60">
                Enchainement automatique active
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10">
                Desactiver le binge
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition hover:bg-white/90">
                Lancer la lecture
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/50">
          <Zap className="h-3.5 w-3.5 text-brand-primary" />
          <span>
            La plateforme a prepare votre session en fonction de votre
            progression.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EpisodesToWatchPage() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header placeholder */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15">
            <span className="text-sm font-semibold">Menu</span>
          </button>

          <div className="select-none text-center">
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
            <button className="hidden rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white/75 hover:text-white md:inline-flex">
              Devenez VIP
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35 bg-black/25" />
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        {/* Intro */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary/25 via-brand-wine/20 to-brand-cyan/20 p-6 md:p-10">
          <GradientRing radiusClass="rounded-3xl" thickness={2} glow />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Inbox de contenu
              </p>
              <h1 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
                Episodes a voir
              </h1>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Votre file d'attente personnalisee des episodes disponibles
                aujourd'hui, classes par importance et recommandations.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-brand-cyan/20 bg-black/25 px-5 py-3 text-center backdrop-blur">
                <p className="text-2xl font-black text-white">
                  {MOCK_EPISODES.length}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                  {MOCK_EPISODES.length === 1
                    ? "episode disponible"
                    : "episodes disponibles"}
                </p>
              </div>
              <div className="rounded-2xl border border-brand-cyan/20 bg-black/25 px-5 py-3 text-center backdrop-blur">
                <p className="text-2xl font-black text-brand-cyan">
                  {formatDuration(
                    MOCK_EPISODES.reduce((acc, ep) => acc + ep.duration, 0),
                  )}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                  Duree totale
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Today highlight */}
        <section className="mt-8">
          <SectionHeader title="Aujourd'hui" />
          <div className="grid gap-4">
            {MOCK_EPISODES.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                onWatch={setSelected}
              />
            ))}
          </div>
        </section>

        {/* Upcoming */}
        <section className="mt-10">
          <SectionHeader
            title="A venir"
            rightLabel="Voir le calendrier"
            onRightClick={() => {}}
          />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                series: "House of the Dragon",
                episodeCode: "S02E08",
                title: "Fin de saison",
                platform: "HBO / Max",
                airDate: "Demain",
              },
              {
                series: "Silo",
                episodeCode: "S02E05",
                title: "The Engineer",
                platform: "Apple TV+",
                airDate: "Dans 2 jours",
              },
              {
                series: "The Boys",
                episodeCode: "S05E03",
                title: "Life Among the Spies",
                platform: "Prime Video",
                airDate: "Dans 3 jours",
              },
            ].map((item) => (
              <div
                key={item.series}
                className="group relative overflow-hidden rounded-2xl"
              >
                <GradientRing
                  radiusClass="rounded-2xl"
                  thickness={1}
                  hoverGlow
                />
                <div className="relative rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-brand-cyan">
                        {item.episodeCode}
                      </p>
                      <h4 className="mt-1 text-base font-bold text-white">
                        {item.series}
                      </h4>
                      <p className="text-sm text-white/70">{item.title}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-brand-cyan/20 bg-black/25 px-2 py-1 text-[10px] font-semibold text-white/75">
                      {item.airDate}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 h-px w-full bg-brand-cyan/25" />
      </main>

      {/* Footer minimal */}
      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <div className="select-none text-2xl font-black tracking-widest">
            <span className="text-white">SERIE</span>
            <span
              className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
            >
              ADDICT
            </span>
          </div>
          <p className="mt-1 text-[11px] tracking-wide text-white/60">
            LE SPECIALISTE DES SERIES
          </p>
          <p className="mt-2 text-[10px] text-white/40">
            © 2010–2026 • Series Addict • Tous droits reserves.
          </p>
        </div>
      </footer>

      <SessionDrawer episode={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
