import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Star,
  Bookmark,
  Shuffle,
  History,
  UserCircle,
  Check,
  ArrowRight,
  RefreshCw,
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

const BECAUSE_YOU_LIKED = [
  {
    id: 1,
    liked: {
      title: "Breaking Bad",
      image:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80",
    },
    recommended: {
      title: "Better Call Saul",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      year: 2015,
      seasons: 6,
      description:
        "L'avocat Jimmy McGill se transforme en Saul Goodman dans ce prequel aussi implacable que son ainee.",
    },
    reasons: [
      "Même univers",
      "Même créateur",
      "Personnage similaire",
      "Même ambiance dramatique",
    ],
  },
  {
    id: 2,
    liked: {
      title: "Stranger Things",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    },
    recommended: {
      title: "Dark",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      year: 2017,
      seasons: 3,
      description:
        "Mystere, enfants disparus et boucles temporelles dans une Allemagne aussi sombre qu'envoutante.",
    },
    reasons: [
      "Mystere adolescent",
      "Science-fiction retro",
      "Ambiance oppressante",
      "Intrigue familiale",
    ],
  },
];

const FRIENDS_RECOMMENDATIONS = [
  {
    id: 1,
    friend: {
      name: "Marc",
      avatar: "M",
    },
    series: {
      title: "The Bear",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      year: 2022,
      reason: "Parce que tu as adore Succession.",
    },
  },
  {
    id: 2,
    friend: {
      name: "Nadia",
      avatar: "N",
    },
    series: {
      title: "Severance",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      year: 2022,
      reason: "Pour le cote distopique et visuel.",
    },
  },
  {
    id: 3,
    friend: {
      name: "Luca",
      avatar: "L",
    },
    series: {
      title: "Slow Horses",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      year: 2022,
      reason: "Espionnage britannique au rythme parfait.",
    },
  },
  {
    id: 4,
    friend: {
      name: "Emma",
      avatar: "E",
    },
    series: {
      title: "Only Murders in the Building",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      year: 2021,
      reason: "Mystere et humour New-Yorkais au top.",
    },
  },
  {
    id: 5,
    friend: {
      name: "Karim",
      avatar: "K",
    },
    series: {
      title: "The Bear",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      year: 2022,
      reason: "Pour l'intensite et les personnages brules.",
    },
  },
  {
    id: 6,
    friend: {
      name: "Sofia",
      avatar: "S",
    },
    series: {
      title: "For All Mankind",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
      year: 2019,
      reason: "Science-fiction realiste et passionnante.",
    },
  },
];

const HISTORY_RECOMMENDATIONS = [
  {
    id: 1,
    title: "The Last of Us",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    year: 2023,
    episodeProgress: "Saison 1 terminee",
    reason: "Vous suivez les adaptations de jeux video ?",
  },
  {
    id: 2,
    title: "House of the Dragon",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    year: 2022,
    episodeProgress: "Saison 2 en cours",
    reason: "Fantasy epique et politique royale.",
  },
  {
    id: 3,
    title: "Shogun",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d9012356fa?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    year: 2024,
    episodeProgress: "Non commence",
    reason: "Histoire ambitieuse et production grand spectacle.",
  },
  {
    id: 4,
    title: "Yellowjackets",
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    year: 2021,
    episodeProgress: "Saison 2 terminee",
    reason: "Survie, mysteres et psychologie sombre.",
  },
  {
    id: 5,
    title: "Silo",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    year: 2023,
    episodeProgress: "Saison 1 en cours",
    reason: "Distopie haletante a la construction implacable.",
  },
  {
    id: 5,
    title: "Silo",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    year: 2023,
    episodeProgress: "Saison 1 en cours",
    reason: "Distopie haletante a la construction implacable.",
  },
  {
    id: 5,
    title: "Silo",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    year: 2023,
    episodeProgress: "Saison 1 en cours",
    reason: "Distopie haletante a la construction implacable.",
  },
  {
    id: 5,
    title: "Silo",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    year: 2023,
    episodeProgress: "Saison 1 en cours",
    reason: "Distopie haletante a la construction implacable.",
  },
];

const SURPRISE_PICK = {
  title: "Abbott Elementary",
  image:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
  rating: 4.6,
  year: 2021,
  seasons: 4,
  description:
    "Une serie eloignee de vos habitudes, mais compatible avec votre gout pour les personnages bien ecrits et l'humour caustique.",
  matchScore: 78,
  tags: ["Comedie", "Mockumentaire", "Feel-good"],
};

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

function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  rightLabel,
  onRightClick,
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-brand-cyan" />}
          <span className={`h-1 w-12 rounded-full ${ACCENT_GRADIENT}`} />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm text-white/60">{subtitle}</p>
        )}
      </div>
      {rightLabel && (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-cyan hover:text-white sm:self-auto"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      )}
    </div>
  );
}

function BecauseYouLikedCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={2} glow hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 backdrop-blur">
        <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
          <div className="relative">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              <Heart className="h-4 w-4 text-brand-primary" />
              Vous aimez
            </div>
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src={item.liked.image}
                alt={item.liked.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-extrabold text-white">
                  {item.liked.title}
                </h3>
              </div>
            </div>
            <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-primary/20 transition hover:opacity-90">
              Voir la serie
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              <Sparkles className="h-4 w-4 text-brand-cyan" />
              Nous avons trouvé
            </div>
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src={item.recommended.image}
                alt={item.recommended.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
                {item.recommended.rating}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-extrabold text-white md:text-2xl">
                  {item.recommended.title}
                </h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-white/60">
                  <span>{item.recommended.year}</span>
                  <span>•</span>
                  <span>{item.recommended.seasons} saisons</span>
                </div>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">
                  {item.recommended.description}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-white/10 bg-white/5 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
                Pourquoi ?
              </p>
              <div className="flex flex-wrap gap-2">
                {item.reasons.map((reason) => (
                  <span
                    key={reason}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    <Check className="h-3 w-3 text-brand-cyan" />
                    {reason}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function FriendRecommendationCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[2/3] overflow-hidden rounded-[24px]">
          <img
            src={item.series.image}
            alt={item.series.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
            {item.series.rating}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white ring-2 ring-black/30">
                {item.friend.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {item.friend.name}
                </p>
                <p className="text-xs text-white/70">Votre ami</p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white">
              {item.series.title}
            </h3>
            <p className="mt-1 text-xs text-white/60">{item.series.year}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {item.series.reason}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function HistoryCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative overflow-hidden rounded-[24px] h-[400px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
            {item.rating}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-white">{item.title}</h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
                <span>{item.year}</span>
                <span>•</span>
                <span className="font-medium text-brand-cyan">
                  {item.episodeProgress}
                </span>
              </div>
            </div>
            <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5 hover:text-white">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm text-white/70">{item.reason}</p>
        </div>
      </div>
    </article>
  );
}

function SurpriseCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={3} glow hoverGlow />
      <div className="relative rounded-[28px] bg-gradient-to-br from-brand-primary/20 via-brand-wine/20 to-brand-cyan/20 p-1 backdrop-blur">
        <div className="relative overflow-hidden rounded-[24px] bg-brand-dark/60">
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="relative aspect-[16/10] md:aspect-auto">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-cyan/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-cyan">
                <Shuffle className="h-3.5 w-3.5" />
                Decouverte surprise
              </div>

              <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                {item.title}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
                  {item.rating}
                </span>
                <span>{item.year}</span>
                <span>{item.seasons} saisons</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1">
                  <div className="mb-1 flex justify-between text-xs text-white/60">
                    <span>Compatibilite</span>
                    <span className="font-bold text-white">
                      {item.matchScore}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan"
                      style={{ width: `${item.matchScore}%` }}
                    />
                  </div>
                </div>
                <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-[1.05]">
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4  items-center gap-3">
                <button className="inline-flex  items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-primary/20 transition hover:opacity-90">
                  Voir la serie
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SimilarTastePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Pour vous
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                Series similaires a vos gouts
              </h1>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:self-auto">
            <RefreshCw className="h-4 w-4" />
            Raffraichir
          </button>
        </div>

        <section className="mb-16">
          <SectionHeader
            title="Parce que vous aimez..."
            subtitle="Des recommandations construites a partir de vos series preferees."
            icon={Heart}
          />
          <div className="grid gap-6">
            {BECAUSE_YOU_LIKED.map((item) => (
              <BecauseYouLikedCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeader
            title="Base sur votre historique"
            subtitle="Poursuivez avec des series en lien avec votre activite recente."
            icon={History}
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {HISTORY_RECOMMENDATIONS.map((item) => (
              <HistoryCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeader
            title="Decouverte surprise"
            subtitle="Une serie eloignee de vos habitudes, mais qui pourrait vous surprendre."
            icon={Sparkles}
          />
          <SurpriseCard item={SURPRISE_PICK} />
        </section>

        <div className="group relative mt-12 overflow-hidden rounded-[28px]">
          <GradientRing radiusClass="rounded-[28px]" thickness={2} glow />
          <div className="relative rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
            <div className="flex flex-col items-center gap-4 text-center">
              <UserCircle className="h-10 w-10 text-brand-cyan" />
              <h3 className="text-xl font-bold text-white">
                Affinez vos recommandations
              </h3>
              <p className="max-w-md text-sm text-white/70">
                Plus vous notez et suivez de series, plus nos suggestions
                deviennent precises.
              </p>
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Noter mes series
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
