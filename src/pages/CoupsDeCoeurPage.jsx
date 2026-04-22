import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Star,
  Bookmark,
  Share2,
  Trophy,
  Crown,
  Gem,
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

const COUPS_DE_COEUR = [
  {
    id: 1,
    title: "Breaking Bad",
    description:
      "Une descente aux enfers magistrale, portee par Bryan Cranston dans un role de composition absolument terrifiant.",
    curator: "Charlotte",
    curatorAvatar: "C",
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=1600&q=80",
    rating: 5.0,
    year: 2008,
    badge: "Chef-d'oeuvre",
    badgeIcon: Crown,
    badgeColor: "text-yellow-500",
    episodes: 62,
    seasons: 5,
  },
  {
    id: 2,
    title: "The Crown",
    description:
      "Une fresque historique d'une rare elegance qui parvient a rendre captivante l'histoire de la monarchie britannique.",
    curator: "Nadia",
    curatorAvatar: "N",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
    rating: 4.8,
    year: 2016,
    badge: "Coup de coeur",
    badgeIcon: Heart,
    badgeColor: "text-brand-primary",
    episodes: 60,
    seasons: 6,
  },
  {
    id: 3,
    title: "Dark",
    description:
      "La science-fiction allemande a son meilleur. Une intrigue temporelle vertigineuse qui recompense l'attention du spectateur.",
    curator: "Luca",
    curatorAvatar: "L",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    rating: 4.9,
    year: 2017,
    badge: "Gemme rare",
    badgeIcon: Gem,
    badgeColor: "text-brand-cyan",
    episodes: 26,
    seasons: 3,
  },
  {
    id: 4,
    title: "Fleabag",
    description:
      "Phoebe Waller-Bridge cree un personnage inoubliable dans cette comedie qui fait pleurer autant qu'elle fait rire.",
    curator: "Marie",
    curatorAvatar: "M",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    rating: 4.7,
    year: 2016,
    badge: "Coup de coeur",
    badgeIcon: Heart,
    badgeColor: "text-brand-primary",
    episodes: 12,
    seasons: 2,
  },
  {
    id: 5,
    title: "Chernobyl",
    description:
      "Un miniseries harrowing qui reconstitue avec une precision terrifiante la catastrophe nucleaire de 1986.",
    curator: "Thomas",
    curatorAvatar: "T",
    image:
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=1600&q=80",
    rating: 4.9,
    year: 2019,
    badge: "Chef-d'oeuvre",
    badgeIcon: Crown,
    badgeColor: "text-yellow-500",
    episodes: 5,
    seasons: 1,
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

function SectionHeader({ title, subtitle, rightLabel, onRightClick }) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-3 inline-flex items-center justify-center gap-2">
        <Sparkles className="h-5 w-5 text-brand-cyan" />
        <span className={`h-1 w-12 rounded-full ${ACCENT_GRADIENT}`} />
        <Sparkles className="h-5 w-5 text-brand-primary" />
      </div>
      <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-white/60">{subtitle}</p>
      )}
    </div>
  );
}

function CoupDeCoeurCard({ item, featured = false }) {
  const BadgeIcon = item.badgeIcon;

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
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-[32px]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            <div className="absolute left-6 top-6">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur`}
              >
                <BadgeIcon className={`h-3.5 w-3.5 ${item.badgeColor}`} />
                {item.badge}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-white/60">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4 text-brand-primary" />
                      {item.rating}/5
                    </span>
                    <span>{item.year}</span>
                    <span>
                      {item.seasons} saisons • {item.episodes} episodes
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
                <div className="hidden shrink-0 flex-col items-center gap-2 md:flex">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-lg font-bold text-white">
                    {item.curatorAvatar}
                  </div>
                  <span className="text-xs text-white/50">
                    Par {item.curator}
                  </span>
                </div>
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
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[24px]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute left-4 top-4">
            <span
              className={`inline-flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur`}
            >
              <BadgeIcon className={`h-3 w-3 ${item.badgeColor}`} />
              {item.badge}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-brand-primary" />
              {item.rating}
            </span>
            <span>•</span>
            <span>{item.year}</span>
          </div>
          <p className="mt-3 line-clamp-2 text-sm text-white/60">
            {item.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-xs font-bold text-white">
                {item.curatorAvatar}
              </div>
              <span className="text-xs text-white/50">Par {item.curator}</span>
            </div>
            <div className="flex gap-2">
              <button className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5 hover:text-white">
                <Heart className="h-4 w-4" />
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5 hover:text-white">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CoupsDeCoeurPage() {
  const [activeCategory, setActiveCategory] = useState("all");

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
              Selection speciale
            </p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              Coups de coeur
            </h1>
          </div>
        </div>

        <SectionHeader
          title="Nos coups de coeur"
          subtitle="Une selection de series exceptionnelles, choisies avec passion par notre equipe et notre communaute"
        />

        <div className="mb-8">
          <CoupDeCoeurCard item={COUPS_DE_COEUR[0]} featured />
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-2">
          {["Tout", "Chef-d'oeuvre", "Coup de coeur", "Gemme rare"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {cat}
              </button>
            ),
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {COUPS_DE_COEUR.slice(1).map((item) => (
            <CoupDeCoeurCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir plus de coups de coeur
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="group relative mt-12 overflow-hidden rounded-[28px]">
          <GradientRing radiusClass="rounded-[28px]" thickness={2} glow />
          <div className="relative rounded-[28px] bg-gradient-to-r from-brand-primary/30 via-brand-wine/20 to-brand-cyan/30 p-8 backdrop-blur">
            <div className="flex flex-col items-center gap-4 text-center">
              <Trophy className="h-10 w-10 text-brand-cyan" />
              <h3 className="text-xl font-bold text-white">
                Proposez vos coups de coeur
              </h3>
              <p className="max-w-md text-sm text-white/70">
                Vous avez une serie qui vous tient a coeur ? Partagez-la avec la
                communaute et faites decouvrir vos perles rares.
              </p>
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Soumettre une serie
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
