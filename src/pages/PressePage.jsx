import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ExternalLink,
  Newspaper,
  TrendingUp,
  Award,
  Calendar,
  Filter,
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

const PRESS_REVIEWS = [
  {
    id: 1,
    series: "Breaking Bad",
    outlet: "The New York Times",
    outletLogo: "NYT",
    quote:
      "Un chef-d'oeuvre de la television moderne qui redefine le storytelling dramatique.",
    excerpt:
      "Bryan Cranston livre une performance qui restera dans l'histoire de la television. La transformation de Walter White est aussi fascinante qu'effrayante.",
    rating: 5,
    date: "15 jan 2026",
    trending: true,
    seriesImage:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    series: "The Crown",
    outlet: "The Guardian",
    outletLogo: "TG",
    quote:
      "Une fresque royale d'une elegance et d'une precision historique remarquables.",
    excerpt:
      "Netflix confirme encore une fois son statut de leader du prestige television avec cette production grandiose.",
    rating: 4.5,
    date: "22 jan 2026",
    trending: false,
    seriesImage:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    series: "Succession",
    outlet: "Variety",
    outletLogo: "V",
    quote: "La meilleure serie de la decennie. Point final.",
    excerpt:
      "Avec sa conclusion magistrale, Succession cimente son statut de serie culte.",
    rating: 5,
    date: "18 fev 2026",
    trending: true,
    seriesImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    series: "Dark",
    outlet: "Le Monde",
    outletLogo: "LM",
    quote: "La science-fiction europeenne n'a jamais ete aussi ambitieuse.",
    excerpt:
      "Cette serie allemande prouve que Netflix sait aussi produire du contenu de qualite.",
    rating: 4.5,
    date: "10 fev 2026",
    trending: false,
    seriesImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    series: "Fleabag",
    outlet: "The Atlantic",
    outletLogo: "TA",
    quote: "Phoebe Waller-Bridge est un genie.",
    excerpt:
      "En seulement deux saisons, Fleabag a reinvente la comedie televisee.",
    rating: 4.5,
    date: "5 fev 2026",
    trending: true,
    seriesImage:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    series: "Chernobyl",
    outlet: "Hollywood Reporter",
    outletLogo: "HR",
    quote: "Un monument de television historique.",
    excerpt:
      "Cette miniseries reconstitue avec une precision terrifiante les evenements de 1986.",
    rating: 5,
    date: "1 fev 2026",
    trending: false,
    seriesImage:
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=800&q=80",
  },
];

const OUTLETS = [
  { key: "all", label: "Tout", count: 142 },
  { key: "us", label: "US/UK", count: 67 },
  { key: "fr", label: "France", count: 45 },
  { key: "awards", label: "Awards", count: 18 },
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

function PressCard({ review, featured = false }) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-[32px]">
        <GradientRing
          radiusClass="rounded-[32px]"
          thickness={3}
          glow
          hoverGlow
        />
        <div className="relative rounded-[32px] bg-brand-dark/55 backdrop-blur">
          <div className="grid md:grid-cols-[1.2fr,1fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-[32px] md:rounded-l-[32px] md:rounded-tr-none">
              <img
                src={review.seriesImage}
                alt={review.series}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />

              <div className="absolute left-5 top-5 flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-bold text-white backdrop-blur">
                  {review.outletLogo}
                </div>
                <span className="text-sm font-medium text-white">
                  {review.outlet}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {review.trending && (
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-brand-cyan">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Tendance
                </span>
              )}

              <div className="mb-4 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(review.rating)
                        ? "fill-brand-primary text-brand-primary"
                        : "text-white/20"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-white">
                  {review.rating}/5
                </span>
              </div>

              <Quote className="mb-3 h-8 w-8 text-brand-cyan/50" />

              <h3 className="text-xl font-bold text-white md:text-2xl">
                "{review.quote}"
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {review.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/50">{review.date}</span>
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition hover:text-white">
                  Lire la critique
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-xs font-bold text-white">
                {review.outletLogo}
              </div>
              <div>
                <p className="font-semibold text-white">{review.outlet}</p>
                <span className="text-xs text-white/50">{review.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
              <span className="text-sm font-medium text-white">
                {review.rating}
              </span>
            </div>
          </div>

          <div className="my-4">
            <Quote className="mb-2 h-5 w-5 text-brand-cyan/50" />
            <p className="font-medium text-white">"{review.quote}"</p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm text-brand-cyan">{review.series}</span>
            <button className="text-white/40 transition hover:text-white">
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PressePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Critiques
            </p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              La presse en parle
            </h1>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-2">
          {OUTLETS.map((outlet) => (
            <button
              key={outlet.key}
              onClick={() => setActiveFilter(outlet.key)}
              className={[
                "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all",
                activeFilter === outlet.key
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {outlet.label}
              <span
                className={[
                  "rounded-full px-1.5 py-0.5 text-[10px]",
                  activeFilter === outlet.key ? "bg-black/10" : "bg-white/10",
                ].join(" ")}
              >
                {outlet.count}
              </span>
            </button>
          ))}
        </div>

        <PressCard review={PRESS_REVIEWS[0]} featured />

        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3">
            <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
              Dernieres critiques
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRESS_REVIEWS.slice(1).map((review) => (
              <PressCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir plus de critiques
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
