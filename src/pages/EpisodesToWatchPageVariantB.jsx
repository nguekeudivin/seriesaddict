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
  Info,
  ArrowRight,
} from "lucide-react";

/**
 * EpisodesToWatchPageVariantB.jsx — Carousel Visuel (style Netflix)
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
  friend: { label: "Ami recommande", icon: Users, color: "text-brand-cyan" },
  highlyRated: { label: "Tres bien note", icon: Star, color: "text-yellow-500" },
  trending: { label: "Tendance", icon: Zap, color: "text-brand-primary" },
  new: { label: "Nouveau", icon: Sparkles, color: "text-white" },
  favorite: { label: "Favori", icon: Heart, color: "text-red-400" },
};

const SECTIONS = [
  {
    key: "today",
    title: "Aujourd'hui",
    subtitle: "3 episodes disponibles",
    episodes: [
      { id: "ep-1", series: "The Bear", episodeCode: "S03E04", title: "Violet", synopsis: "Carmy pousse son equipe a se depasser avant l'ouverture.", duration: 42, image: "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", importanceText: "Votre ami Marc lui a donne 5 etoiles.", platform: "FX / Disney+", rating: 4.9 },
      { id: "ep-2", series: "Stranger Things", episodeCode: "S05E02", title: "The Crawl", synopsis: "Le groupe retrouve des indices sur le Upside Down.", duration: 58, image: "https://images.pexels.com/photos/10005543/pexels-photo-10005543.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "highlyRated", importanceText: "Note communautaire 4.8/5.", platform: "Netflix", rating: 4.8 },
      { id: "ep-3", series: "One Piece", episodeCode: "S02E01", title: "Le debut de l'aventure", synopsis: "Luffy et son equipage affrontent de nouveaux ennemis.", duration: 50, image: "https://images.pexels.com/photos/7513468/pexels-photo-7513468.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "trending", importanceText: "Tendance cette semaine.", platform: "Netflix", rating: 4.6 },
    ],
  },
  {
    key: "friends",
    title: "Recommande par vos amis",
    subtitle: "Ils ont aime",
    episodes: [
      { id: "ep-4", series: "Silo", episodeCode: "S02E06", title: "The Dive", synopsis: "Juliette explore les profondeurs du silo.", duration: 48, image: "https://images.pexels.com/photos/8107200/pexels-photo-8107200.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", importanceText: "Sarah a donne 5 etoiles.", platform: "Apple TV+", rating: 4.5 },
      { id: "ep-5", series: "The Boys", episodeCode: "S05E02", title: "Payback", synopsis: "Butcher met en place un plan dangereux.", duration: 55, image: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", importanceText: "Luca vous recommande cette serie.", platform: "Prime Video", rating: 4.7 },
    ],
  },
  {
    key: "trending",
    title: "Tendance cette semaine",
    subtitle: "Ne manquez pas",
    episodes: [
      { id: "ep-6", series: "House of the Dragon", episodeCode: "S02E08", title: "Fin de saison", synopsis: "La saison 2 s'acheve sur un conflit de plus en plus intense.", duration: 62, image: "https://images.pexels.com/photos/153590555533-144bae1f0b14?auto=compress&cs=tinysrgb&w=900", importance: "trending", importanceText: "Top 10 des series les plus vues.", platform: "HBO / Max", rating: 4.6 },
      { id: "ep-7", series: "The Bear", episodeCode: "S03E04", title: "Violet", synopsis: "Carmy pousse son equipe a se depasser avant l'ouverture.", duration: 42, image: "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "trending", importanceText: "Tendance sur les reseaux.", platform: "FX / Disney+", rating: 4.9 },
    ],
  },
];

const HERO_EPISODE = SECTIONS[0].episodes[0];

function formatDuration(min) { return `${min} min`; }

function GradientRing({ radiusClass = "rounded-2xl", thickness = 2, glow = false, hoverGlow = false, className = "" }) {
  return (
    <div className={["pointer-events-none absolute inset-0", radiusClass, glow ? "blur-md" : "", hoverGlow ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70" : "", className].join(" ")}
      style={{ background: GRADIENT, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: `${thickness}px` }} />
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
        <div>
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">{section.title}</h2>
          <p className="text-sm text-white/60">{section.subtitle}</p>
        </div>
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
            <div key={ep.id} className="group relative w-[280px] shrink-0 overflow-hidden rounded-2xl">
              <GradientRing radiusClass="rounded-2xl" thickness={2} hoverGlow />
              <div className="relative rounded-2xl bg-brand-dark/55 backdrop-blur">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <img src={ep.image} alt={ep.series} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase text-white backdrop-blur">
                    <Icon className={`h-3 w-3 ${meta.color}`} /> {meta.label}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="grid h-14 w-14 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:scale-105" style={{ background: GRADIENT }}>
                      <Play className="ml-1 h-6 w-6 fill-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="truncate text-base font-extrabold text-white">{ep.series} <span className="text-brand-cyan">{ep.episodeCode}</span></h3>
                  <p className="truncate text-xs text-white/70">{ep.title}</p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-white/60">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {formatDuration(ep.duration)}</span>
                    <span className="inline-flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500" /> {ep.rating}</span>
                    <span className="inline-flex items-center gap-1"><Tv className="h-3 w-3" /> {ep.platform}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-[11px] leading-snug text-white/50">{ep.importanceText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function EpisodesToWatchPageVariantB() {
  const hero = IMPORTANCE_META[HERO_EPISODE.importance] || IMPORTANCE_META.new;
  const HeroIcon = hero.icon;

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
        <section className="relative overflow-hidden rounded-3xl">
          <GradientRing radiusClass="rounded-3xl" thickness={2} glow />
          <div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[360px]">
            <img src={HERO_EPISODE.image} alt={HERO_EPISODE.series} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                <HeroIcon className={`h-3.5 w-3.5 ${hero.color}`} /> {hero.label}
              </div>
              <h1 className="mt-3 text-3xl font-black uppercase tracking-wide text-white md:text-5xl">{HERO_EPISODE.series} <span className="text-brand-cyan">{HERO_EPISODE.episodeCode}</span></h1>
              <p className="mt-2 max-w-xl text-sm text-white/80 md:text-base">{HERO_EPISODE.synopsis}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-brand-cyan" /> {formatDuration(HERO_EPISODE.duration)}</span>
                <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {HERO_EPISODE.rating}</span>
                <span className="inline-flex items-center gap-1"><Tv className="h-4 w-4" /> {HERO_EPISODE.platform}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"><Play className="h-4 w-4 fill-black" /> Je regarde maintenant</button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"><Info className="h-4 w-4" /> Plus d'infos</button>
              </div>
            </div>
          </div>
        </section>

        {SECTIONS.map((section) => (
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
