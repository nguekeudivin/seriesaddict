import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  Menu,
  MessageCircle,
  Pencil,
  Play,
  Plus,
  Send,
} from "lucide-react";
import logo from "../assets/logo.png";
import mediaThumbA from "../assets/serieaddict-3.webp";
import mediaThumbB from "../assets/serieaddict-4.webp";

const BRAND = { primary: "#841D4F", cyan: "#1E6C86" };
const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;

const SERIES = {
  title: "STRANGER THINGS",
  years: "2024 - 2025",
  originalTitle: "Stranger Things",
  platform: "HBO",
  age: "16+",
  runtime: "50 min",
  status: "Terminée",
  publicScore: "9",
  myScore: "3",
  saScore: "7",
  votes: "3 456 votes",
  country: "Série Américaine",
  creator: "Dan Erickson",
  genres: ["Science-fiction", "Drame", "Thriller", "Mystère"],
  synopsis:
    "Dans cette proposition rétro-futuriste, le rêve américain hérité des années 1950 se fissure après une catastrophe nucléaire. La série oppose l'idéal d'un monde meilleur à la dureté d'un territoire dévasté.",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
};

const HERO_HASHTAGS = [
  "#Série culte",
  "#Amitié",
  "#Psychologie",
  "#Fantôme",
  "#Sombre",
  "#HBO",
];

const HERO_TABS = [
  { label: "Saisons", target: "series-seasons" },
  { label: "News", target: "series-news" },
  { label: "Trailers", target: "series-trailers" },
  { label: "Shop", target: "series-shop" },
  { label: "Similaires", target: "series-similaires" },
  { label: "Avis", target: "series-avis" },
  { label: "Regarder la série", action: "watch", active: true },
];

const SEASON_FEATURE = {
  totalSeasons: 2,
  totalEpisodes: 19,
  currentSeasonLabel: "Saison 1 - 10 épisodes",
  badge: "Season 1",
  image:
    "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=900&q=80",
};

const LAST_EPISODES = [
  { network: "HBO", title: "BUILD BACK BETTER", meta: "S3 E8 - Diffusé le 26/12/2025" },
  { network: "HBO", title: "BUILD BACK BETTER", meta: "S3 E7 - Diffusé le 26/12/2025" },
  { network: "HBO", title: "BUILD BACK BETTER", meta: "S3 E6 - Diffusé le 26/12/2025" },
];
const UPCOMING_EPISODES = [
  { network: "HBO", title: "BUILD BACK BETTER", meta: "S3 E9", date: "Diffusion le 26/12/2025" },
  { network: "HBO", title: "BUILD BACK BETTER", meta: "S3 E10", date: "Diffusion le 26/12/2025" },
  { network: "HBO", title: "BUILD BACK BETTER", meta: "S3 E11", date: "Diffusion le 26/12/2025" },
];

const CAST = [
  { name: "BRIAN AUSTIN GREEN", role: "BRIAN AUSTIN GREEN", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { name: "JEAN SMART", role: "THE GUY", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
  { name: "MILLIE BOBBY BROWN", role: "ELEVEN", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { name: "GATEN MATARAZZO", role: "DUSTIN", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
];

const VIDEOS = [
  { title: "Teaser final season", subtitle: "Bande-annonce officielle", image: mediaThumbA },
  { title: "Behind the scenes", subtitle: "Featurette cast & production", image: mediaThumbB },
];

const NEWS = [
  {
    title: "La saison 5 boucle son tournage principal",
    excerpt: "Le planning se précise et plusieurs indices laissent penser à une communication plus intense dans les prochaines semaines.",
    meta: "Breaking · 4 min",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Les frères Duffer promettent une fin plus intime",
    excerpt: "La conclusion devrait recentrer l'émotion sur le groupe historique sans perdre l'ampleur du spectacle.",
    meta: "Interview · 5 min",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
  },
];

const SHOP_ITEMS = [
  { title: "Poster collector Upside Down", type: "Poster collector", price: "24,90 €", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80" },
  { title: "Hoodie Hawkins High", type: "Textile", price: "49,90 €", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
  { title: "Mug Hellfire Club", type: "Goodie", price: "16,90 €", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=80" },
  { title: "Carnet édition Vecna", type: "Papeterie", price: "12,90 €", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80" },
];

const SIMILAR_SERIES = [
  { title: "Dark", image: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=700&q=80" },
  { title: "The OA", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=700&q=80" },
  { title: "Locke & Key", image: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=700&q=80" },
  { title: "Yellowjackets", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=700&q=80" },
];

function SectionTitle({ eyebrow = "Section", title, description, actionLabel, onAction }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-3">
          <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-[#841D4F] to-[#1E6C86]" />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/55">{eyebrow}</p>
        </div>
        <h2 className="text-2xl font-black tracking-[-0.03em] text-white md:text-[30px]">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 md:text-[15px]">{description}</p> : null}
      </div>
      {actionLabel ? (
        <button onClick={onAction} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75 transition hover:border-[#1E6C86]/50 hover:text-white">
          {actionLabel}
          <ChevronRight className="h-4 w-4 text-[#1E6C86]" />
        </button>
      ) : null}
    </div>
  );
}

function Card({ children }) {
  return <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-5 py-6 backdrop-blur-xl md:px-7 md:py-7">{children}</div>;
}

function Header({ navigate, scrollToSection }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#021018]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1450px] items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/85 lg:hidden"><Menu className="h-5 w-5" /></button>
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          {[SERIES.platform, SERIES.runtime, SERIES.age].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white/90">{item}</span>)}
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          {HERO_TABS.filter((tab) => !tab.active).map((tab) => (
            <button key={tab.label} onClick={() => scrollToSection(tab.target)} className="text-xs font-semibold uppercase tracking-[0.15em] text-white/65 hover:text-white">{tab.label}</button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/85 transition hover:border-[#1E6C86]/45 hover:text-[#1E6C86]"><Send className="h-5 w-5" /></button>
          <button onClick={() => navigate("/trailers")} className="hidden rounded-full px-5 py-3 text-sm font-semibold text-white sm:inline-flex" style={{ background: GRADIENT }}>Voir les trailers</button>
        </div>
      </div>
    </header>
  );
}

function Hero({ navigate }) {
  return (
    <Card>
      <div className="grid gap-8 lg:grid-cols-[290px_1fr]">
        <div>
          <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-black/25">
            <span className="absolute left-4 top-4 rounded-full bg-[#841D4F]/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">{SERIES.status}</span>
            <img src={SERIES.poster} alt={SERIES.title} className="aspect-[2/3] w-full object-cover" />
          </div>
          <button onClick={() => navigate("/trailers")} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ background: GRADIENT }}>
            <Play className="h-4 w-4" /> Regarder la serie
          </button>
        </div>
        <div>
          <h1 className="text-4xl font-black tracking-[0.02em] text-white">{SERIES.title}</h1>
          <p className="mt-1 text-white/75">({SERIES.originalTitle}) · {SERIES.years}</p>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/88">{SERIES.synopsis}</p>
          <p className="mt-4 text-sm text-white/78"><span className="font-semibold">{SERIES.country}</span> · Creee par <span className="font-semibold">{SERIES.creator}</span></p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-white/85">
            {SERIES.genres.map((genre) => <span key={genre} className="rounded-full border border-white/12 px-3 py-1">{genre}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[Plus, CalendarDays, MessageCircle, Eye, Pencil].map((Icon, i) => (
              <button key={i} className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/12 bg-white/[0.04] text-white/85">
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
            {HERO_HASHTAGS.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="mt-6 flex gap-3">
            <ScoreCard label="Public" value={SERIES.publicScore} sub={SERIES.votes} />
            <ScoreCard label="Ma note" value={SERIES.myScore} sub="" />
            <ScoreCard label="Note SA" value={SERIES.saScore} sub="" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function ScoreCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">{label}</p>
      {sub ? <p className="mt-1 text-[10px] text-white/55">{sub}</p> : null}
    </div>
  );
}

function EpisodeRow({ item, upcoming = false }) {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] border border-white/10 bg-black/18 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-white/12 bg-white/[0.04] text-xs font-extrabold uppercase tracking-[0.08em] text-white/92">{item.network}</div>
        <div className="min-w-0">
          <p className="truncate text-lg font-bold tracking-[-0.02em] text-white md:text-[19px]">{item.title}</p>
          <p className="mt-1 text-sm text-white/65 md:text-[15px]">{item.meta}</p>
          {upcoming ? <p className="mt-1 text-sm font-medium text-[#1E6C86]">{item.date}</p> : null}
        </div>
      </div>
      {upcoming ? (
        <button className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white/85">Me rappeler</button>
      ) : (
        <div className="flex shrink-0 items-center gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-[14px] border border-[#841D4F]/35 bg-[#841D4F]/10 text-[#841D4F]"><Play className="ml-0.5 h-5 w-5" /></button>
          <button className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/12 bg-white/[0.04] text-white/85"><Eye className="h-5 w-5" /></button>
        </div>
      )}
    </div>
  );
}

function SeasonEpisodesSection() {
  return (
    <Card>
      <div id="series-seasons" className="grid gap-8 xl:grid-cols-[360px_1fr_1fr] xl:items-start">
        <div>
          <SectionTitle eyebrow="Univers" title={`${SEASON_FEATURE.totalSeasons} saisons · ${SEASON_FEATURE.totalEpisodes} épisodes`} />
          <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-black/25">
            <div className="absolute left-4 top-4 z-10 rounded-full bg-[#841D4F]/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">Terminée</div>
            <div className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">{SEASON_FEATURE.badge}</div>
            <img src={SEASON_FEATURE.image} alt={SEASON_FEATURE.currentSeasonLabel} className="aspect-[0.72] w-full object-cover" />
          </div>
          <p className="mt-4 text-center text-xl font-black text-white">{SEASON_FEATURE.currentSeasonLabel}</p>
        </div>
        <div>
          <SectionTitle eyebrow="Diffusion" title="Derniers épisodes diffusés" />
          <div className="space-y-3">{LAST_EPISODES.map((item, i) => <EpisodeRow key={i} item={item} />)}</div>
        </div>
        <div>
          <SectionTitle eyebrow="A venir" title="Prochains épisodes diffusés" />
          <div className="space-y-3">{UPCOMING_EPISODES.map((item, i) => <EpisodeRow key={i} item={item} upcoming />)}</div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-8">
        <SectionTitle eyebrow="Casting" title="Les visages clés de Stranger Things" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {CAST.map((member, index) => (
            <div key={index} className="flex items-center gap-4 rounded-[22px] border border-white/8 bg-white/[0.025] p-4">
              <div className="h-20 w-20 overflow-hidden rounded-full border border-white/12"><img src={member.avatar} alt={member.name} className="h-full w-full object-cover" /></div>
              <div className="min-w-0"><p className="truncate text-base font-bold text-white">{member.name}</p><p className="mt-1 text-sm text-white/58">{member.role}</p></div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function MediaGrid({ navigate }) {
  return (
    <div id="series-trailers" className="grid gap-8 lg:grid-cols-[1.4fr_.8fr]">
      <Card>
        <SectionTitle eyebrow="Videos" title="Vidéos de la série" actionLabel="Tous les trailers" onAction={() => navigate("/trailers")} />
        <div className="grid gap-4 md:grid-cols-2">
          {VIDEOS.map((item) => (
            <button key={item.title} onClick={() => navigate("/trailers")} className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] text-left">
              <img src={item.image} alt={item.title} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="p-4"><p className="font-bold text-white">{item.title}</p><p className="text-sm text-white/65">{item.subtitle}</p></div>
            </button>
          ))}
        </div>
      </Card>
      <Card>
        <SectionTitle eyebrow="News" title="Dernières actus" actionLabel="Toutes les actus" onAction={() => navigate("/news")} />
        <div className="space-y-4">
          {NEWS.map((item) => (
            <button key={item.title} onClick={() => navigate("/article")} className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] text-left">
              <img src={item.image} alt={item.title} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#1E6C86]">{item.meta}</p>
                <p className="mt-1 font-bold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-white/65">{item.excerpt}</p>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ShopSection({ navigate }) {
  return (
    <Card>
      <div id="series-shop">
        <SectionTitle eyebrow="Shop" title="Objets et produits dérivés" actionLabel="Toute la boutique" onAction={() => navigate("/shop")} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SHOP_ITEMS.map((item) => (
            <div key={item.title} className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-4">
              <img src={item.image} alt={item.title} className="aspect-[4/5] w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="mt-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/45">{item.type}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-base font-black text-white">{item.price}</p>
                  <button className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/85">Ajouter</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function SimilarSection({ navigate }) {
  return (
    <Card>
      <div id="series-similaires">
        <SectionTitle eyebrow="Découvrir" title="Séries similaires" actionLabel="Toutes les recos" onAction={() => navigate("/series")} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SIMILAR_SERIES.map((item) => (
            <button key={item.title} onClick={() => navigate("/series")} className="group text-left">
              <img src={item.image} alt={item.title} className="aspect-[2/3] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.03]" />
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-white/75">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}

function CommentsSection() {
  return (
    <Card>
      <div id="series-avis">
        <SectionTitle eyebrow="Community" title="Avis des seriesaddict" />
        <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm leading-7 text-white/72">La série garde une énergie feuilletonnante rare. Même quand l'univers grandit, le coeur émotionnel du groupe reste lisible et c'est ce qui porte vraiment la fiche.</p>
          <div className="mt-4 flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65">J'aime (14)</button>
            <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65">Répondre</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function DemoPage() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#010e15] text-white">
      <Header navigate={navigate} scrollToSection={scrollToSection} />
      <main className="pb-20">
        <section className="mx-auto max-w-[1450px] space-y-8 px-4 py-8 sm:px-5">
          <Hero navigate={navigate} />
          <SeasonEpisodesSection />
          <MediaGrid navigate={navigate} />
          <ShopSection navigate={navigate} />
          <SimilarSection navigate={navigate} />
          <CommentsSection />
        </section>
      </main>
      <footer className="border-t border-white/10 px-4 py-10 sm:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <img src={logo} alt="Series Addict" className="h-10 w-auto opacity-90" />
        </div>
      </footer>
    </div>
  );
}
