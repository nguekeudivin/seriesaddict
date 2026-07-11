import React from "react";
import {
  Play,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Zap,
  Sparkles,
  Users,
  Heart,
  Tv,
  Calendar,
  ArrowRight,
  Target,
} from "lucide-react";

/**
 * EpisodesToWatchPageVariantD.jsx — Mix Carousel (B) + Bento (C)
 * Hero visuel + bento carousel integre + rangées de carrousels thematiques.
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
  friend: { label: "Ami", icon: Users, color: "text-brand-cyan" },
  highlyRated: { label: "Note", icon: Star, color: "text-yellow-500" },
  trending: { label: "Trend", icon: Zap, color: "text-brand-primary" },
  new: { label: "Nouveau", icon: Sparkles, color: "text-white" },
  favorite: { label: "Favori", icon: Heart, color: "text-red-400" },
};

const TODAY_EPISODES = [
  { id: "ep-1", series: "The Bear", episodeCode: "S03E04", title: "Violet", synopsis: "Carmy pousse son equipe a se depasser avant l'ouverture.", duration: 42, image: "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", importanceText: "Votre ami Marc lui a donne 5 etoiles.", platform: "FX / Disney+", rating: 4.9 },
  { id: "ep-2", series: "Stranger Things", episodeCode: "S05E02", title: "The Crawl", synopsis: "Le groupe retrouve des indices sur le Upside Down.", duration: 58, image: "https://images.pexels.com/photos/10005543/pexels-photo-10005543.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "highlyRated", importanceText: "Note communautaire 4.8/5.", platform: "Netflix", rating: 4.8 },
  { id: "ep-3", series: "One Piece", episodeCode: "S02E01", title: "Le debut de l'aventure", synopsis: "Luffy et son equipage affrontent de nouveaux ennemis.", duration: 50, image: "https://images.pexels.com/photos/7513468/pexels-photo-7513468.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "trending", importanceText: "Tendance cette semaine.", platform: "Netflix", rating: 4.6 },
];

const CAROUSEL_SECTIONS = [
  {
    key: "friends",
    title: "Amis recommandent",
    episodes: [
      { id: "ep-4", series: "Silo", episodeCode: "S02E06", title: "The Dive", duration: 48, image: "https://images.pexels.com/photos/8107200/pexels-photo-8107200.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", platform: "Apple TV+", rating: 4.5 },
      { id: "ep-5", series: "The Boys", episodeCode: "S05E02", title: "Payback", duration: 55, image: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", platform: "Prime Video", rating: 4.7 },
      { id: "ep-6", series: "Dark", episodeCode: "S01E03", title: "Past and Present", duration: 52, image: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", platform: "Netflix", rating: 4.9 },
    ],
  },
  {
    key: "trending",
    title: "Tendance",
    episodes: [
      { id: "ep-7", series: "House of the Dragon", episodeCode: "S02E08", title: "Fin de saison", duration: 62, image: "https://images.pexels.com/photos/1523598455533-144bae1f0b14?auto=compress&cs=tinysrgb&w=900", importance: "trending", platform: "HBO / Max", rating: 4.6 },
      { id: "ep-8", series: "Severance", episodeCode: "S02E10", title: "Cold Harbor", duration: 45, image: "https://images.pexels.com/photos/1497215728101-856f4ea42174?auto=compress&cs=tinysrgb&w=900", importance: "trending", platform: "Apple TV+", rating: 4.8 },
      { id: "ep-9", series: "The Bear", episodeCode: "S03E04", title: "Violet", duration: 42, image: "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "trending", platform: "FX / Disney+", rating: 4.9 },
    ],
  },
];

function formatDuration(min) { return `${min} min`; }

function GradientRing({ radiusClass = "rounded-2xl", thickness = 2, glow = false, hoverGlow = false, className = "" }) {
  return (
    <div className={["pointer-events-none absolute inset-0", radiusClass, glow ? "blur-md" : "", hoverGlow ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70" : "", className].join(" ")}
      style={{ background: GRADIENT, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: `${thickness}px` }} />
  );
}

function BentoTile({ children, className = "", glow = false }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow={glow} hoverGlow />
      <div className="relative h-full rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
        {children}
      </div>
    </div>
  );
}

function HeroEpisode({ episode }) {
  const meta = IMPORTANCE_META[episode.importance] || IMPORTANCE_META.new;
  const Icon = meta.icon;
  return (
    <BentoTile className="col-span-1 row-span-2 min-h-[420px] md:col-span-2" glow>
      <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-2xl">
        <img src={episode.image} alt={episode.series} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-brand-cyan/20" />
        <div className="relative p-5 md:p-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            <Icon className={`h-3.5 w-3.5 ${meta.color}`} /> {meta.label}
          </div>
          <h2 className="mt-3 text-2xl font-black uppercase tracking-wide text-white md:text-4xl">{episode.series} <span className="text-brand-cyan">{episode.episodeCode}</span></h2>
          <p className="mt-2 max-w-xl text-sm text-white/80">{episode.synopsis}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-brand-cyan" /> {formatDuration(episode.duration)}</span>
            <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {episode.rating}</span>
            <span className="inline-flex items-center gap-1"><Tv className="h-4 w-4" /> {episode.platform}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"><Play className="h-4 w-4 fill-black" /> Regarder</button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"><ArrowRight className="h-4 w-4" /> Details</button>
          </div>
        </div>
      </div>
    </BentoTile>
  );
}

function MiniEpisodeTile({ episode }) {
  const meta = IMPORTANCE_META[episode.importance] || IMPORTANCE_META.new;
  const Icon = meta.icon;
  return (
    <BentoTile className="col-span-1 row-span-1 min-h-[180px]">
      <div className="relative h-full">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <img src={episode.image} alt={episode.series} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase text-white backdrop-blur">
            <Icon className={`h-3 w-3 ${meta.color}`} /> {meta.label}
          </div>
        </div>
        <h4 className="mt-3 truncate text-sm font-bold text-white">{episode.series} <span className="text-brand-cyan">{episode.episodeCode}</span></h4>
        <p className="truncate text-xs text-white/60">{episode.title}</p>
        <div className="mt-2 flex items-center gap-2 text-[10px] text-white/50">
          <Clock className="h-3 w-3" /> {formatDuration(episode.duration)}
          <span>•</span>
          <Star className="h-3 w-3 text-yellow-500" /> {episode.rating}
        </div>
      </div>
    </BentoTile>
  );
}

function BentoCarouselTile({ title, episodes }) {
  const scrollRef = React.useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <BentoTile className="col-span-1 row-span-2 md:col-span-2" glow>
      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">{title}</h3>
          <div className="flex gap-1">
            <button onClick={() => scroll("left")} className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-white/60 hover:bg-white/10"><ChevronLeft className="h-3.5 w-3.5" /></button>
            <button onClick={() => scroll("right")} className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-white/60 hover:bg-white/10"><ChevronRight className="h-3.5 w-3.5" /></button>
          </div>
        </div>
        <div ref={scrollRef} className="flex flex-1 gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {episodes.map((ep) => {
            const meta = IMPORTANCE_META[ep.importance] || IMPORTANCE_META.new;
            const Icon = meta.icon;
            return (
              <div key={ep.id} className="group/card relative w-[200px] shrink-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/5 transition group-hover/card:bg-white/10" />
                <div className="relative p-3">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={ep.image} alt={ep.series} className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white backdrop-blur">
                      <Icon className={`h-2.5 w-2.5 ${meta.color}`} /> {meta.label}
                    </div>
                  </div>
                  <h4 className="mt-2 truncate text-xs font-bold text-white">{ep.series}</h4>
                  <p className="truncate text-[10px] text-brand-cyan">{ep.episodeCode}</p>
                  <div className="mt-1 flex items-center gap-2 text-[9px] text-white/50">
                    <Clock className="h-2.5 w-2.5" /> {formatDuration(ep.duration)}
                    <Star className="h-2.5 w-2.5 text-yellow-500" /> {ep.rating}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BentoTile>
  );
}

function CarouselRow({ section }) {
  const scrollRef = React.useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">{section.title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
          <button onClick={() => scroll("right")} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
        {section.episodes.map((ep) => {
          const meta = IMPORTANCE_META[ep.importance] || IMPORTANCE_META.new;
          const Icon = meta.icon;
          return (
            <div key={ep.id} className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl">
              <GradientRing radiusClass="rounded-2xl" thickness={2} hoverGlow />
              <div className="relative rounded-2xl bg-brand-dark/55 backdrop-blur">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <img src={ep.image} alt={ep.series} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase text-white backdrop-blur">
                    <Icon className={`h-3 w-3 ${meta.color}`} /> {meta.label}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="grid h-12 w-12 place-items-center rounded-full text-white shadow-2xl" style={{ background: GRADIENT }}>
                      <Play className="ml-0.5 h-5 w-5 fill-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="truncate text-sm font-extrabold text-white">{ep.series} <span className="text-brand-cyan">{ep.episodeCode}</span></h3>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-white/60">
                    <Clock className="h-3 w-3" /> {formatDuration(ep.duration)}
                    <Star className="h-3 w-3 text-yellow-500" /> {ep.rating}
                    <Tv className="h-3 w-3" /> {ep.platform}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function EpisodesToWatchPageVariantD() {
  const hero = TODAY_EPISODES[0];
  const others = TODAY_EPISODES.slice(1);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15"><span className="text-sm font-semibold">Menu</span></button>
          <div className="select-none text-center">
            <div className="text-xl font-black tracking-widest"><span className="text-white">SERIE</span><span className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}>ADDICT</span></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-brand-cyan/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white/75 hover:text-white md:inline-flex">Devenez VIP</button>
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35 bg-black/25" />
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Inbox de contenu</p>
          <h1 className="mt-1 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Episodes a voir</h1>
          <p className="mt-2 max-w-xl text-sm text-white/60">Hero Bento + Carrousels : le meilleur des deux mondes.</p>
        </section>

        {/* Bento mix */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
          <HeroEpisode episode={hero} />

          <BentoTile className="md:col-span-1 md:row-span-1">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary/20"><Target className="h-5 w-5 text-brand-primary" /></div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Objectif</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">3/5</p>
                <p className="text-sm text-white/60">episodes cette semaine</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan" style={{ width: "60%" }} /></div>
              </div>
            </div>
          </BentoTile>

          <BentoTile className="md:col-span-1 md:row-span-1">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-cyan/20"><Clock className="h-5 w-5 text-brand-cyan" /></div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Temps total</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">{formatDuration(TODAY_EPISODES.reduce((a, b) => a + b.duration, 0))}</p>
                <p className="text-sm text-white/60">pour aujourd'hui</p>
              </div>
            </div>
          </BentoTile>

          {others.map((ep) => <MiniEpisodeTile key={ep.id} episode={ep} />)}

          <BentoCarouselTile title="Carrousel integre" episodes={TODAY_EPISODES} />
        </section>

        {/* Carrousels thematiques */}
        {CAROUSEL_SECTIONS.map((section) => (
          <CarouselRow key={section.key} section={section} />
        ))}

        <div className="mt-16 h-px w-full bg-brand-cyan/25" />
      </main>

      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <div className="select-none text-2xl font-black tracking-widest"><span className="text-white">SERIE</span><span className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}>ADDICT</span></div>
          <p className="mt-1 text-[11px] tracking-wide text-white/60">LE SPECIALISTE DES SERIES</p>
          <p className="mt-2 text-[10px] text-white/40">© 2010–2026 • Series Addict • Tous droits reserves.</p>
        </div>
      </footer>
    </div>
  );
}
