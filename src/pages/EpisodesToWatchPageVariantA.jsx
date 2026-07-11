import React from "react";
import {
  Play,
  Clock,
  Star,
  ChevronRight,
  Zap,
  Sparkles,
  Users,
  Heart,
  Tv,
  Calendar,
  ArrowRight,
} from "lucide-react";

/**
 * EpisodesToWatchPageVariantA.jsx — Kanban Prioritaire
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
  friend: { label: "Ami", icon: Users, color: "text-brand-cyan", border: "border-brand-cyan/30", bg: "bg-brand-cyan/10" },
  highlyRated: { label: "Note", icon: Star, color: "text-yellow-500", border: "border-yellow-500/30", bg: "bg-yellow-500/10" },
  trending: { label: "Trend", icon: Zap, color: "text-brand-primary", border: "border-brand-primary/30", bg: "bg-brand-primary/10" },
  new: { label: "Nouveau", icon: Sparkles, color: "text-white", border: "border-white/30", bg: "bg-white/10" },
  favorite: { label: "Favori", icon: Heart, color: "text-red-400", border: "border-red-400/30", bg: "bg-red-400/10" },
};

const COLUMNS = [
  { key: "urgent", title: "Urgent", subtitle: "A voir aujourd'hui" },
  { key: "trending", title: "Tendance", subtitle: "Populaire en ce moment" },
  { key: "discovery", title: "Decouverte", subtitle: "A decouvrir" },
  { key: "later", title: "Plus tard", subtitle: "Pas prioritaire" },
];

const MOCK_EPISODES = [
  { id: "ep-1", series: "The Bear", episodeCode: "S03E04", title: "Violet", synopsis: "Carmy pousse son equipe a se depasser avant l'ouverture.", duration: 42, image: "https://images.pexels.com/photos/29935918/pexels-photo-29935918/free-photo-of-restaurant-kitchen-staff-working-at-service-station.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "friend", importanceText: "Votre ami Marc lui a donne 5 etoiles.", platform: "FX / Disney+", rating: 4.9, column: "urgent" },
  { id: "ep-2", series: "Stranger Things", episodeCode: "S05E02", title: "The Crawl", synopsis: "Le groupe retrouve des indices sur le Upside Down.", duration: 58, image: "https://images.pexels.com/photos/10005543/pexels-photo-10005543.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "highlyRated", importanceText: "Note communautaire 4.8/5.", platform: "Netflix", rating: 4.8, column: "urgent" },
  { id: "ep-3", series: "One Piece", episodeCode: "S02E01", title: "Le debut de l'aventure", synopsis: "Luffy et son equipage affrontent de nouveaux ennemis.", duration: 50, image: "https://images.pexels.com/photos/7513468/pexels-photo-7513468.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "trending", importanceText: "Tendance cette semaine.", platform: "Netflix", rating: 4.6, column: "trending" },
  { id: "ep-4", series: "Silo", episodeCode: "S02E06", title: "The Dive", synopsis: "Juliette explore les profondeurs du silo.", duration: 48, image: "https://images.pexels.com/photos/8107200/pexels-photo-8107200.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "new", importanceText: "Nouvel episode disponible.", platform: "Apple TV+", rating: 4.5, column: "discovery" },
  { id: "ep-5", series: "The Boys", episodeCode: "S05E02", title: "Payback", synopsis: "Butcher met en place un plan dangereux.", duration: 55, image: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=900", importance: "favorite", importanceText: "Dans vos series suivies.", platform: "Prime Video", rating: 4.7, column: "later" },
];

function formatDuration(min) { return `${min} min`; }

function GradientRing({ radiusClass = "rounded-2xl", thickness = 2, glow = false, hoverGlow = false, className = "" }) {
  return (
    <div className={["pointer-events-none absolute inset-0", radiusClass, glow ? "blur-md" : "", hoverGlow ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70" : "", className].join(" ")}
      style={{ background: GRADIENT, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: `${thickness}px` }} />
  );
}

function KanbanCard({ episode }) {
  const meta = IMPORTANCE_META[episode.importance] || IMPORTANCE_META.new;
  const Icon = meta.icon;
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className={`absolute inset-0 rounded-xl border ${meta.border} bg-gradient-to-b ${meta.bg} opacity-30 group-hover:opacity-50 transition`} />
      <div className="relative rounded-xl bg-brand-dark/70 p-3 backdrop-blur">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img src={episode.image} alt={episode.series} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase text-white backdrop-blur">
            <Icon className={`h-3 w-3 ${meta.color}`} /> {meta.label}
          </div>
        </div>
        <h4 className="mt-3 truncate text-sm font-extrabold text-white">{episode.series} <span className="text-brand-cyan">{episode.episodeCode}</span></h4>
        <p className="truncate text-xs text-white/60">{episode.title}</p>
        <div className="mt-2 flex items-center gap-2 text-[10px] text-white/50">
          <Clock className="h-3 w-3" /> {formatDuration(episode.duration)}
          <span>•</span>
          <Star className="h-3 w-3 text-yellow-500" /> {episode.rating}
        </div>
        <p className="mt-2 text-[10px] leading-snug text-white/50 line-clamp-2">{episode.importanceText}</p>
        <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-white/10 py-1.5 text-[10px] font-bold text-white transition hover:bg-white/20">
          <Play className="h-3 w-3 fill-current" /> Regarder
        </button>
      </div>
    </div>
  );
}

function KanbanColumn({ col, episodes }) {
  return (
    <div className="flex min-w-[260px] flex-1 flex-col rounded-2xl border border-white/5 bg-brand-dark/30 p-3">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-extrabold text-white">{col.title}</h3>
          <p className="text-[10px] text-white/50">{col.subtitle}</p>
        </div>
        <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-bold text-white/70">{episodes.length}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {episodes.length ? episodes.map((ep) => <KanbanCard key={ep.id} episode={ep} />) : (
          <div className="flex flex-1 items-center justify-center rounded-xl border border-white/5 bg-black/10 px-2 py-8 text-[10px] text-white/40">—</div>
        )}
      </div>
    </div>
  );
}

export default function EpisodesToWatchPageVariantA() {
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
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary/25 via-brand-wine/20 to-brand-cyan/20 p-6 md:p-10">
          <GradientRing radiusClass="rounded-3xl" thickness={2} glow />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Inbox de contenu</p>
              <h1 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Episodes a voir</h1>
              <p className="mt-2 max-w-xl text-sm text-white/70">Vue Kanban par priorite. Deplacez mentalement les episodes entre les colonnes.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-brand-cyan/20 bg-black/25 px-5 py-3 text-center backdrop-blur">
                <p className="text-2xl font-black text-white">{MOCK_EPISODES.length}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">episodes</p>
              </div>
              <div className="rounded-2xl border border-brand-cyan/20 bg-black/25 px-5 py-3 text-center backdrop-blur">
                <p className="text-2xl font-black text-brand-cyan">{formatDuration(MOCK_EPISODES.reduce((a, b) => a + b.duration, 0))}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">total</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center gap-3">
            <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
            <h2 className="text-lg font-semibold tracking-wide text-white">Vue Kanban</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0" style={{ scrollbarWidth: "thin" }}>
            {COLUMNS.map((col) => (
              <KanbanColumn key={col.key} col={col} episodes={MOCK_EPISODES.filter((e) => e.column === col.key)} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
            <h2 className="text-lg font-semibold tracking-wide text-white">Prochaines sorties</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { series: "House of the Dragon", episodeCode: "S02E08", title: "Fin de saison", platform: "HBO / Max", airDate: "Demain" },
              { series: "Silo", episodeCode: "S02E05", title: "The Engineer", platform: "Apple TV+", airDate: "Dans 2 jours" },
              { series: "The Boys", episodeCode: "S05E03", title: "Life Among the Spies", platform: "Prime Video", airDate: "Dans 3 jours" },
            ].map((item) => (
              <div key={item.series} className="group relative overflow-hidden rounded-2xl">
                <GradientRing radiusClass="rounded-2xl" thickness={1} hoverGlow />
                <div className="relative rounded-2xl bg-brand-dark/55 p-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-brand-cyan">{item.episodeCode}</p>
                      <h4 className="mt-1 text-base font-bold text-white">{item.series}</h4>
                      <p className="text-sm text-white/70">{item.title}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-brand-cyan/20 bg-black/25 px-2 py-1 text-[10px] font-semibold text-white/75">{item.airDate}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/60"><Calendar className="h-3.5 w-3.5" /> {item.platform}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
