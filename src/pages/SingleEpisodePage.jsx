import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Calendar,
  Play,
  Heart,
  MessageSquare,
  Smile,
  Image as ImageIcon,
  Quote,
  Clapperboard,
  Flame,
  Eye,
  Send,
  ThumbsUp,
  Share2,
  AlertTriangle,
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

const EPISODE = {
  series: "Stranger Things",
  season: 4,
  number: 5,
  code: "S04E05",
  title: "The Nina Project",
  duration: "75 min",
  airDate: "27 mai 2022",
  image:
    "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=1400&q=80",
  rating: 4.8,
  votes: 1243,
  userRating: 0,
  synopsisNoSpoiler:
    "Eleven tente de retrouver ses pouvoirs avec l'aide d'une ancienne figure de son passé, pendant qu'à Hawkins le groupe d'amis enquête sur une série d'événements troublants.",
  synopsisSpoiler:
    "Eleven est emmenée dans un complexe secret où elle revit ses expériences du laboratoire et découvre le véritable rôle du Dr. Brenner. Max se retrouve en proie à Vecna et ses amis mettent en place un plan désespéré pour la sauver.",
  watched: false,
};

const DISCUSSION = {
  title: "Discussion Episode S04E05",
  hotTheory:
    "Le personnage de Henry Creel serait-il finalement le vrai instigateur de tout ce qui arrive à Hawkins depuis la saison 1 ?",
  commentsCount: 542,
};

const MOMENTS = [
  {
    id: 1,
    type: "quote",
    author: "Lucas",
    content: "« Elle ne répond plus. »",
    likes: 89,
  },
  {
    id: 2,
    type: "scene",
    author: "Nadia",
    content: "La scène du diner vers la fin.",
    likes: 134,
  },
  {
    id: 3,
    type: "capture",
    author: "Marc",
    content: "Le flashback au labo.",
    likes: 67,
  },
  {
    id: 4,
    type: "reaction",
    author: "Sarah",
    content: "J'ai hurlé devant mon écran.",
    likes: 215,
  },
];

const REACTIONS = ["🔥", "😱", "😭", "❤️", "🤯", "👏"];

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

function GlassPanel({
  children,
  className = "",
  radius = "rounded-[28px]",
  bodyClassName = "",
  border = true,
}) {
  return (
    <div
      className={["group relative overflow-hidden", radius, className].join(
        " ",
      )}
    >
      {border && <GradientRing radiusClass={radius} thickness={1.5} />}
      <GradientRing radiusClass={radius} thickness={1.5} glow hoverGlow />
      <div
        className={[
          "relative bg-brand-dark/55 backdrop-blur",
          radius,
          bodyClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
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
          className="text-sm font-semibold text-brand-cyan transition hover:text-white"
        >
          {rightLabel}
        </button>
      ) : null}
    </div>
  );
}

function StarRating({ value, onChange, max = 5, size = "h-5 w-5" }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, i) => {
        const star = i + 1;
        const filled = star <= (hover || value);
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange?.(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
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

function MomentIcon({ type }) {
  const className = "h-4 w-4 text-brand-cyan";
  switch (type) {
    case "quote":
      return <Quote className={className} />;
    case "scene":
      return <Clapperboard className={className} />;
    case "capture":
      return <ImageIcon className={className} />;
    case "reaction":
      return <Smile className={className} />;
    default:
      return <Flame className={className} />;
  }
}

function MomentLabel({ type }) {
  switch (type) {
    case "quote":
      return "Citation";
    case "scene":
      return "Scène favorite";
    case "capture":
      return "Capture";
    case "reaction":
      return "Réaction";
    default:
      return "Moment";
  }
}

export default function SingleEpisodePage() {
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [rating, setRating] = useState(EPISODE.userRating);
  const [favorite, setFavorite] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [comment, setComment] = useState("");
  const [moments, setMoments] = useState(MOMENTS);
  const [newMoment, setNewMoment] = useState("");
  const [newMomentType, setNewMomentType] = useState("reaction");

  const handleAddMoment = () => {
    if (!newMoment.trim()) return;
    setMoments([
      {
        id: Date.now(),
        type: newMomentType,
        author: "Vous",
        content: newMoment,
        likes: 0,
      },
      ...moments,
    ]);
    setNewMoment("");
  };

  const handleLikeMoment = (id) => {
    setMoments(
      moments.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m)),
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-[6%] h-[360px] w-[360px] rounded-full bg-brand-primary/15 blur-3xl" />
        <div className="absolute right-[-8%] top-[14%] h-[320px] w-[320px] rounded-full bg-brand-cyan/12 blur-3xl" />
        <div className="absolute bottom-[8%] left-[20%] h-[280px] w-[280px] rounded-full bg-brand-wine/14 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:py-10">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              {EPISODE.series} · Saison {EPISODE.season}
            </p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white lg:text-3xl">
              {EPISODE.title}
            </h1>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            {/* Présentation épisode */}
            <section className="relative overflow-hidden rounded-[28px]">
              <GradientRing radiusClass="rounded-[28px]" thickness={2} glow />
              <div className="relative overflow-hidden rounded-[28px] bg-brand-dark/55 backdrop-blur">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={EPISODE.image}
                    alt={EPISODE.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                          {EPISODE.code}
                        </span>
                        <h2 className="mt-3 text-2xl font-extrabold uppercase text-white lg:text-3xl">
                          {EPISODE.title}
                        </h2>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/70">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-brand-cyan" />
                            {EPISODE.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-brand-cyan" />
                            {EPISODE.airDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
                            {EPISODE.rating}/5 · {EPISODE.votes} votes
                          </span>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                        <Play className="h-4 w-4 fill-current" />
                        Regarder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Synopsis */}
            <GlassPanel bodyClassName="p-6">
              <SectionHeader title="Synopsis" />
              <div className="space-y-4">
                <p className="text-sm leading-7 text-white/80">
                  {showSpoiler
                    ? EPISODE.synopsisSpoiler
                    : EPISODE.synopsisNoSpoiler}
                </p>
                <button
                  onClick={() => setShowSpoiler(!showSpoiler)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/70 transition hover:text-white"
                >
                  <AlertTriangle className="h-3.5 w-3.5 text-brand-primary" />
                  {showSpoiler
                    ? "Masquer les spoilers"
                    : "Afficher les spoilers"}
                </button>
              </div>
            </GlassPanel>

            {/* Expérience après visionnage */}
            <GlassPanel bodyClassName="p-6">
              <SectionHeader title="Après le visionnage" />
              <div className="space-y-5">
                <p className="text-lg font-semibold text-white">
                  Que pensez-vous de cet épisode ?
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                      Votre note
                    </p>
                    <StarRating value={rating} onChange={setRating} />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                      Réaction
                    </p>
                    <div className="flex items-center gap-2">
                      {REACTIONS.map((reaction) => (
                        <button
                          key={reaction}
                          onClick={() =>
                            setSelectedReaction(
                              selectedReaction === reaction ? null : reaction,
                            )
                          }
                          className={[
                            "grid h-9 w-9 place-items-center rounded-full text-lg transition",
                            selectedReaction === reaction
                              ? "bg-brand-primary text-white"
                              : "bg-white/[0.05] hover:bg-white/10",
                          ].join(" ")}
                        >
                          {reaction}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setFavorite(!favorite)}
                    className={[
                      "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition",
                      favorite
                        ? "bg-brand-primary text-white"
                        : "border border-white/10 bg-white/[0.03] text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    <Heart
                      className={["h-4 w-4", favorite && "fill-current"].join(
                        " ",
                      )}
                    />
                    {favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                  </button>
                </div>

                <div className="space-y-3">
                  <textarea
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Écrivez votre commentaire ici..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={() => setComment("")}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                    >
                      <Send className="h-4 w-4" />
                      Commenter
                    </button>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Discussion épisode */}
            <GlassPanel bodyClassName="p-6">
              <SectionHeader title={DISCUSSION.title} />
              <div className="rounded-2xl border border-brand-primary/20 bg-gradient-to-r from-brand-primary/10 to-brand-cyan/5 p-5">
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-brand-primary" />
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
                    Théorie populaire
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-white/90">
                  "{DISCUSSION.hotTheory}"
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MessageSquare className="h-4 w-4 text-brand-cyan" />
                  {DISCUSSION.commentsCount} commentaires
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/80 transition hover:text-white">
                  Rejoindre la discussion
                </button>
              </div>
            </GlassPanel>

            {/* Moments mémorables */}
            <GlassPanel bodyClassName="p-6">
              <SectionHeader title="Moments mémorables" />
              <div className="mb-5 flex flex-col gap-3 sm:flex-row">
                <select
                  value={newMomentType}
                  onChange={(e) => setNewMomentType(e.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none focus:border-white/25"
                >
                  <option value="quote" className="bg-brand-dark">
                    Citation
                  </option>
                  <option value="scene" className="bg-brand-dark">
                    Scène favorite
                  </option>
                  <option value="capture" className="bg-brand-dark">
                    Capture
                  </option>
                  <option value="reaction" className="bg-brand-dark">
                    Réaction
                  </option>
                </select>
                <input
                  type="text"
                  value={newMoment}
                  onChange={(e) => setNewMoment(e.target.value)}
                  placeholder="Partagez un moment mémorable..."
                  className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                />
                <button
                  onClick={handleAddMoment}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Ajouter
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {moments.map((moment) => (
                  <div
                    key={moment.id}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/40 ring-1 ring-white/10">
                      <MomentIcon type={moment.type} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-brand-cyan">
                          {MomentLabel(moment.type)}
                        </span>
                        <span className="text-xs text-white/40">
                          par {moment.author}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-white/90">
                        {moment.content}
                      </p>
                      <button
                        onClick={() => handleLikeMoment(moment.id)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 transition hover:text-white"
                      >
                        <ThumbsUp className="h-3.5 w-3.5" />
                        {moment.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <GlassPanel bodyClassName="p-5">
              <div className="relative aspect-video overflow-hidden rounded-[20px]">
                <img
                  src={EPISODE.image}
                  alt={EPISODE.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                    <Play className="h-4 w-4 fill-current" />
                    Lancer l'épisode
                  </button>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Statut</span>
                  <span className="font-semibold text-brand-cyan">
                    {EPISODE.watched ? "Vu" : "Non vu"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Note communauté</span>
                  <span className="font-semibold text-brand-cyan">
                    {EPISODE.rating}/5
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Votre note</span>
                  <span className="font-semibold text-brand-cyan">
                    {rating > 0 ? `${rating}/5` : "—"}
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-2.5 text-sm font-semibold text-white/80 transition hover:text-white">
                  <Eye className="h-4 w-4" />
                  Marquer vu
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-2.5 text-sm font-semibold text-white/80 transition hover:text-white">
                  <Share2 className="h-4 w-4" />
                  Partager
                </button>
              </div>
            </GlassPanel>

            <GlassPanel bodyClassName="p-5">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                Navigation
              </h3>
              <div className="mt-4 space-y-2">
                <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/80 transition hover:text-white">
                  <ChevronLeft className="h-4 w-4" />
                  Épisode précédent
                </button>
                <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/80 transition hover:text-white">
                  Épisode suivant
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </GlassPanel>
          </aside>
        </div>
      </main>
    </div>
  );
}
