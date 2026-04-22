import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ThumbsUp,
  MessageCircle,
  MoreHorizontal,
  Filter,
  SortAsc,
  Edit3,
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
  averageRating: 4.7,
  totalReviews: 3456,
  distribution: [5, 4, 3, 2, 1],
};

const REVIEWS = [
  {
    id: 1,
    author: "Charlotte",
    avatar: "C",
    rating: 4.8,
    date: "Il y a 2 jours",
    content:
      "La serie garde une energie feuilletonnante rare. Meme quand l'univers grandit, le coeur emotionnel du groupe reste lisible et c'est ce qui porte vraiment la fiche.",
    likes: 14,
    replies: 3,
    verified: true,
  },
  {
    id: 2,
    author: "Nadia",
    avatar: "N",
    rating: 4.4,
    date: "Il y a 5 jours",
    content:
      "Saison 4 tres genereuse visuellement, avec une ambiance bien plus noire. J'attends surtout que la derniere salve revienne a quelque chose de plus resserre.",
    likes: 9,
    replies: 1,
    verified: false,
  },
  {
    id: 3,
    author: "Luca",
    avatar: "L",
    rating: 4.6,
    date: "La semaine derniere",
    content:
      "Le melange pop culture, horreur et coming-of-age reste redoutable. Peu de series grand public tiennent aussi bien la mythologie et l'attachement aux personnages.",
    likes: 17,
    replies: 5,
    verified: true,
  },
  {
    id: 4,
    author: "Marie",
    avatar: "M",
    rating: 5.0,
    date: "Il y a 1 semaine",
    content:
      "Une pure merveille ! Les freres Duffer ont cree quelque chose d'unique. Chaque saison apporte sa touche tout en conservant l'essence de ce qui fait le succes de la serie.",
    likes: 42,
    replies: 8,
    verified: true,
  },
  {
    id: 5,
    author: "Thomas",
    avatar: "T",
    rating: 3.5,
    date: "Il y a 2 semaines",
    content:
      "J'ai adore les 2 premieres saisons mais la 3eme m'a semble un peu moins reussie. Trop de personnages, certains arcs sont bancals. La saison 4 remonte le niveau heureusement.",
    likes: 23,
    replies: 12,
    verified: false,
  },
];

const CRITERIA = [
  { name: "Scénario", score: 4.8 },
  { name: "Jeu d'acteurs", score: 4.9 },
  { name: "Ambiance", score: 4.7 },
  { name: "Bande-son", score: 4.9 },
  { name: "Effets spéciaux", score: 4.5 },
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

function StarRating({ rating, maxStars = 5, size = "md" }) {
  const stars = Array.from({ length: maxStars }, (_, i) => i + 1);
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
  };

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((star) => (
        <Star
          key={star}
          className={[
            sizeClasses[size],
            star <= rating
              ? "fill-brand-primary text-brand-primary"
              : "text-white/20",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white">
              {review.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">
                  {review.author}
                </span>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-cyan/20 px-2 py-0.5 text-[10px] font-semibold text-brand-cyan">
                    <Check className="h-3 w-3" />
                    Verifie
                  </span>
                )}
              </div>
              <span className="text-xs text-white/50">{review.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-primary">
              {review.rating}
            </span>
            <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/80">
          {review.content}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition hover:text-brand-cyan">
              <ThumbsUp className="h-4 w-4" />
              {review.likes}
            </button>
            <button className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition hover:text-brand-cyan">
              <MessageCircle className="h-4 w-4" />
              {review.replies}
            </button>
          </div>
          <button className="text-white/40 transition hover:text-white">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

function RatingBar({ rating, percentage }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-3 text-sm font-medium text-white/70">{rating}</span>
      <Star className="h-3.5 w-3.5 text-white/40" />
      <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-8 text-right text-xs text-white/50">
        {percentage}%
      </span>
    </div>
  );
}

export default function SerieAvisPage() {
  const [sortBy, setSortBy] = useState("recent");
  const [filterRating, setFilterRating] = useState(null);

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
                Avis & Notes
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {SERIES.title}
              </h1>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
            <Edit3 className="h-4 w-4" />
            Donner mon avis
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <SectionHeader title="Avis des membres" />
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10">
                  <Filter className="h-4 w-4" />
                  Filtrer
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10">
                  <SortAsc className="h-4 w-4" />
                  Trier
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {REVIEWS.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Charger plus d'avis
                <ChevronDown className="h-4 w-4" />
              </button>
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
              <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-5xl font-black text-white">
                      {SERIES.averageRating}
                    </span>
                    <Star className="h-8 w-8 fill-brand-primary text-brand-primary" />
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    {SERIES.totalReviews.toLocaleString()} avis
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <RatingBar
                      key={rating}
                      rating={rating}
                      percentage={[58, 28, 8, 4, 2][5 - rating]}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Details des notes
                </h3>
                <div className="mt-4 space-y-3">
                  {CRITERIA.map((criterion) => (
                    <div
                      key={criterion.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-white/70">
                        {criterion.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan"
                            style={{ width: `${(criterion.score / 5) * 100}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-sm font-semibold text-white">
                          {criterion.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Votre avis
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Vous n'avez pas encore note cette serie.
                </p>
                <button className="mt-4 w-full rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                  Rediger un avis
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
