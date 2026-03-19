import React from "react";
import {
  Play,
  Search,
  Heart,
  Bookmark,
  Share2,
  Calendar,
  Star,
  ChevronRight,
  Flame,
  Sparkles,
  Clock3,
  Eye,
  Filter,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const ACCENT_GRADIENT =
  "bg-gradient-to-r from-[#841D4F] via-[#3C0A22] to-[#1E6C86]";
const BRAND_GRADIENT_TEXT =
  "bg-gradient-to-r from-[#841D4F] to-[#1E6C86] bg-clip-text text-transparent";

const GRADIENT = "linear-gradient(90deg, #841D4F 0%, #1E6C86 100%)";

const featuredCollection = {
  title: "Séries post-apocalyptiques",
  eyebrow: "COLLECTION",
  subtitle:
    "Des mondes brisés, des survivants, des civilisations à reconstruire.",
  stats: ["38 séries", "12 trailers", "4 tendances"],
  backdrop:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  highlightedSeries: {
    title: "The Last of Us",
    meta: "Drame • Science-fiction • HBO",
    year: "2023",
    rating: "8.8",
    duration: "2:14",
    description:
      "Une sélection de séries où l’humanité vacille, où les règles changent et où survivre devient une obsession.",
  },
};

const featuredVideos = [
  {
    id: 1,
    title: "The Last of Us",
    label: "Trailer officiel",
    duration: "2:14",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1400&q=80",
    large: true,
  },
  {
    id: 2,
    title: "Fallout",
    label: "Teaser",
    duration: "1:48",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Silo",
    label: "Extrait",
    duration: "1:22",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
  },
];

const collectionEntries = [
  {
    id: 1,
    title: "The Last of Us",
    year: "2023",
    rating: "8.8",
    genres: ["Drame", "Survie"],
    type: "landscape",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80",
    synopsis:
      "Dans un monde ravagé, une mission de survie devient un lien humain inattendu.",
  },
  {
    id: 2,
    title: "Fallout",
    year: "2024",
    rating: "8.3",
    genres: ["Aventure", "SF"],
    type: "portrait",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    synopsis:
      "Un futur irradié, absurde et dangereux où chaque sortie à la surface est un pari.",
  },
  {
    id: 3,
    title: "Silo",
    year: "2023",
    rating: "8.1",
    genres: ["Mystère", "SF"],
    type: "portrait",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    synopsis:
      "Des survivants vivent sous terre, enfermés dans une vérité qu’on leur cache.",
  },
  {
    id: 4,
    title: "Station Eleven",
    year: "2021",
    rating: "7.6",
    genres: ["Drame", "Pandémie"],
    type: "landscape",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1000&q=80",
    synopsis:
      "Après l’effondrement, l’art et la mémoire deviennent des moyens de rester humain.",
  },
  {
    id: 5,
    title: "Jericho",
    year: "2006",
    rating: "7.9",
    genres: ["Thriller", "Survie"],
    type: "portrait",
    image:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=900&q=80",
    synopsis:
      "Une petite ville tente de comprendre le monde après une série d’explosions nucléaires.",
  },
  {
    id: 6,
    title: "The 100",
    year: "2014",
    rating: "7.5",
    genres: ["Young Adult", "SF"],
    type: "portrait",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80",
    synopsis:
      "Des jeunes sont renvoyés sur Terre pour voir si l’humanité peut y renaître.",
  },
  {
    id: 7,
    title: "Sweet Tooth",
    year: "2021",
    rating: "7.7",
    genres: ["Aventure", "Fantastique"],
    type: "landscape",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80",
    synopsis:
      "Dans une nature redevenue sauvage, un enfant hybride cherche sa place.",
  },
  {
    id: 8,
    title: "Black Summer",
    year: "2019",
    rating: "6.6",
    genres: ["Zombie", "Action"],
    type: "portrait",
    image:
      "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=900&q=80",
    synopsis:
      "Une fuite brutale et nerveuse au cœur d’un chaos zombie sans répit.",
  },
];

const continueWatching = [
  {
    id: 1,
    title: "The Last of Us",
    episode: "S01E04",
    progress: 68,
    duration: "54 min",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Silo",
    episode: "S01E07",
    progress: 42,
    duration: "49 min",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Fallout",
    episode: "S01E02",
    progress: 84,
    duration: "58 min",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
];

const recommendationRails = [
  {
    title: "Dans le même univers",
    items: [
      "The Walking Dead",
      "See",
      "12 Monkeys",
      "Snowpiercer",
      "Y: The Last Man",
    ],
  },
  {
    title: "Tendances du moment",
    items: [
      "Fallout",
      "The Last of Us",
      "Silo",
      "Dark Matter",
      "3 Body Problem",
    ],
  },
];

function GradientRing({
  radiusClass = "rounded-[28px]",
  thickness = 1.5,
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

function Pill({ children, active = false }) {
  return (
    <button
      className={[
        "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300",
        active
          ? "bg-white text-black"
          : "bg-white/[0.04] text-white/75 ring-1 ring-white/10 hover:bg-white/[0.07] hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SectionTitle({ icon: Icon, title, action }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-5 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        {Icon ? <Icon className="h-4 w-4 text-white/70" /> : null}
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
          {title}
        </h2>
      </div>
      {action ? (
        <button className="text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-white">
          {action}
        </button>
      ) : null}
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/[0.06]">
          Menu
        </button>

        <div className="text-center text-xl font-black tracking-[0.2em]">
          <span className="text-white">SERIE</span>
          <span className={BRAND_GRADIENT_TEXT}>ADDICT</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-[#841D4F]/40 bg-[#841D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white md:block">
            Devenez VIP
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.06] hover:text-white">
            <Search className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredCollection.backdrop})` }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,29,79,.18),transparent_35%),radial-gradient(circle_at_right,rgba(30,108,134,.16),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-5 pb-16 pt-14">
        <div className="max-w-3xl">
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
              {featuredCollection.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-wide text-white md:text-6xl">
              {featuredCollection.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
              {featuredCollection.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/55">
              {featuredCollection.stats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-2xl rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/55">
              <span className="rounded-full bg-white/[0.06] px-3 py-1.5">
                Série mise en avant
              </span>
              <span>{featuredCollection.highlightedSeries.meta}</span>
              <span>•</span>
              <span>{featuredCollection.highlightedSeries.year}</span>
              <span>•</span>
              <span>{featuredCollection.highlightedSeries.rating}/10</span>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-wide text-white">
              {featuredCollection.highlightedSeries.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/72">
              {featuredCollection.highlightedSeries.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterBar() {
  return (
    <section className="relative z-20 -mt-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="group relative overflow-hidden rounded-[28px] bg-[#011921]/55 p-3 backdrop-blur-xl">
          <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
          <GradientRing
            radiusClass="rounded-[28px]"
            thickness={1.5}
            glow
            hoverGlow
          />

          <div className="relative flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-black/30 px-4 py-3 ring-1 ring-white/8">
              <Search className="h-4 w-4 shrink-0 text-white/45" />
              <input
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="Rechercher une série dans cette collection..."
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Pill active>Popularité</Pill>
              <Pill>Année</Pill>
              <Pill>Note</Pill>
              <Pill>Trailers</Pill>
              <Pill>Streaming</Pill>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-wide text-white/75 transition hover:bg-white/[0.08] hover:text-white">
                <Filter className="h-4 w-4" />
                Filtres
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedVideoCard({ item, compact = false }) {
  return (
    <button
      className={[
        "group relative overflow-hidden text-left",
        compact ? "h-full rounded-[24px]" : "rounded-[30px]",
      ].join(" ")}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.2))]" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
          {item.label}
        </span>
        <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/85 backdrop-blur">
          {item.duration}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-black shadow-[0_0_40px_rgba(255,255,255,.15)] transition duration-300 group-hover:scale-110">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-lg font-extrabold uppercase tracking-wide text-white">
          {item.title}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10" />
    </button>
  );
}

function FeaturedVideosSection() {
  return (
    <section>
      <SectionTitle
        icon={Flame}
        title="Trailers à la une"
        action="Voir tous les trailers"
      />

      <div className="grid gap-5 lg:grid-cols-[1.35fr_.85fr]">
        <div className="min-h-[420px]">
          <FeaturedVideoCard item={featuredVideos[0]} />
        </div>

        <div className="grid gap-5">
          <div className="min-h-[200px]">
            <FeaturedVideoCard item={featuredVideos[1]} compact />
          </div>
          <div className="min-h-[200px]">
            <FeaturedVideoCard item={featuredVideos[2]} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function SeriesOverlayActions() {
  return (
    <div className="mt-4 flex items-center gap-2">
      <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:scale-[1.02]">
        <Play className="h-3.5 w-3.5 fill-current" />
        Voir
      </button>

      <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
        <Heart className="h-4 w-4" />
      </button>

      <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
        <Bookmark className="h-4 w-4" />
      </button>

      <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
        <Share2 className="h-4 w-4" />
      </button>
    </div>
  );
}

function SeriesMosaicItem({ item }) {
  const isLandscape = item.type === "landscape";

  return (
    <button
      className={[
        "group relative overflow-hidden text-left",
        isLandscape
          ? "min-h-[250px] rounded-[28px] lg:col-span-2"
          : "min-h-[420px] rounded-[28px]",
      ].join(" ")}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.05]"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_bottom,rgba(132,29,79,.22),transparent_40%),radial-gradient(circle_at_right,rgba(30,108,134,.18),transparent_35%)]" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
          {item.year}
        </span>
        <span className="rounded-full bg-[#1E6C86]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {item.rating}/10
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-100 transition duration-300 group-hover:scale-110">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-black shadow-[0_0_35px_rgba(255,255,255,.15)]">
          <Play className="ml-1 h-5 w-5 fill-current" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xl font-extrabold uppercase tracking-wide text-white">
          {item.title}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {item.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-white/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/78"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-40 group-hover:opacity-100">
          <p className="max-w-xl text-sm leading-relaxed text-white/72">
            {item.synopsis}
          </p>
          <SeriesOverlayActions />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10" />
    </button>
  );
}

function CollectionGridSection() {
  return (
    <section>
      <SectionTitle
        icon={Sparkles}
        title="Explorer la collection"
        action="38 séries"
      />
      <div></div>
    </section>
  );
}

function ContinueWatchingCard({ item }) {
  return (
    <button className="group min-w-[290px] overflow-hidden rounded-[24px] text-left">
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/85 backdrop-blur">
          {item.episode}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-white/75">
            <span>{item.duration}</span>
            <span>{item.progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full"
              style={{ width: `${item.progress}%`, background: GRADIENT }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white/[0.03] px-4 py-4 ring-1 ring-white/8">
        <p className="text-sm font-extrabold uppercase tracking-wide text-white">
          {item.title}
        </p>
      </div>
    </button>
  );
}

function ContinueWatchingSection() {
  return (
    <section>
      <SectionTitle
        icon={Clock3}
        title="Continuer à regarder"
        action="Reprendre"
      />

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-4">
          {continueWatching.map((item) => (
            <ContinueWatchingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RailSection({ title, items }) {
  return (
    <section>
      <SectionTitle icon={Eye} title={title} action="Voir plus" />

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-3">
          {items.map((item) => (
            <button
              key={item}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
            >
              <span>{item}</span>
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CollectionDetailsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />

      <main className="mx-auto max-w-7xl space-y-16 px-5 py-12 md:space-y-20">
        <CollectionGridSection />
        <ContinueWatchingSection />
      </main>
    </div>
  );
}
