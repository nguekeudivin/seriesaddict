import {
  ChevronLeft,
  ChevronRight,
  Play,
  Clock,
  TrendingUp,
  ExternalLink,
  Tv,
  Star,
  MessageCircle,
  Heart,
  Eye,
  Calendar,
  Award,
  Zap,
  Share2,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
  yellow: "#E8C303",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const SERIES = {
  title: "STRANGER THINGS",
  originalTitle: "Stranger Things",
  years: "2016 - 2025",
  platform: "Netflix",
  age: "16+",
  status: "Terminee",
  seasons: 4,
  episodes: 34,
  duration: "42-76 min",
  publicScore: "9.2",
  saScore: "8.7",
  votes: "34 567 votes",
  country: "Serie Americaine",
  creator: "Matt Duffer, Ross Duffer",
  genres: ["Science-fiction", "Drame", "Thriller", "Mystere"],
  synopsis:
    "A Hawkins, dans les annees 80, la disparition d'un jeune garcon revele une dimension parallele terrifiante, des experiments secrets du gouvernement et une jeune fille aux pouvoirs telekinetiques.",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  backdrop:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
};

const NEXT_EPISODE = {
  season: 1,
  episode: 1,
  title: "La Disparition de Will Byers",
  duration: "42 min",
  airDate: "15 juillet 2016",
  synopsis:
    "Will Byers disparait mysterieusement apres une partie de Donjons et Dragons avec ses amis. Sa mere et le sherif Hopper entament les recherches.",
};

const USER_PROGRESS = {
  seasonsWatched: 0,
  episodesWatched: 0,
  totalEpisodes: 34,
  lastWatched: "Jamais commencee",
  timeRemaining: "28 h 14 min",
};

const WHY_WATCH = [
  {
    icon: TrendingUp,
    value: "94%",
    label: "des fans de vos genres preferes aiment cette serie",
  },
  {
    icon: Star,
    value: "9.2",
    label: "note moyenne par la communaute",
  },
  {
    icon: Award,
    value: "39",
    label: "recompenses dont Emmys et SAG Awards",
  },
  {
    icon: Zap,
    value: "Top 10",
    label: "des series les plus maratonees",
  },
];

const WATCHING_FRIENDS = [
  {
    id: 1,
    name: "Sarah",
    status: "En train de regarder S1E3",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Mike",
    status: "A termine la saison 2",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Lucas",
    status: "En train de regarder S1E1",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
];

const PLATFORMS = [
  {
    id: "netflix",
    name: "Netflix",
    color: "#E50914",
    quality: "4K HDR",
    price: "Inclus",
  },
  {
    id: "prime",
    name: "Prime Video",
    color: "#00A8E1",
    quality: "HD",
    price: "Location 2.99 €",
  },
  {
    id: "disney",
    name: "Disney+",
    color: "#113CCF",
    quality: "4K",
    price: "Inclus avec Star",
  },
  {
    id: "canal",
    name: "Canal+",
    color: "#6B1F7C",
    quality: "HD",
    price: "Inclus",
  },
  {
    id: "apple",
    name: "Apple TV+",
    color: "#F5F5F7",
    quality: "4K",
    price: "Location 2.99 €",
  },
  { id: "ocs", name: "OCS", color: "#F9B800", quality: "HD", price: "Inclus" },
];

const CAST = [
  {
    name: "Winona Ryder",
    role: "Joyce Byers",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David Harbour",
    role: "Jim Hopper",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Millie Bobby Brown",
    role: "Eleven",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Finn Wolfhard",
    role: "Mike Wheeler",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
];

const REVIEWS = [
  {
    id: 1,
    author: "Charlotte",
    avatar: "C",
    rating: "4.8/5",
    content:
      "Un pilot parfait. L'ambiance des annees 80, la tension et le mystere sont immediatement presents.",
    likes: 142,
  },
  {
    id: 2,
    author: "Nadia",
    avatar: "N",
    rating: "4.5/5",
    content:
      "Excellent premier episode. Les jeunes acteurs sont incroyables et l'histoire accroche tout de suite.",
    likes: 89,
  },
];

const RELATED_EPISODES = [
  {
    title: "S1E2 — La Barjot",
    duration: "55 min",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "S1E3 — Joyeux Noel",
    duration: "51 min",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "S1E4 — Le Corps",
    duration: "49 min",
    image:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=400&q=80",
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

function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-[32px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${SERIES.backdrop})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative flex flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-end lg:gap-10">
        <div className="relative w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={SERIES.poster}
            alt={SERIES.title}
            className="aspect-[2/3] w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70">
            <span className="rounded-full bg-brand-primary/30 px-2.5 py-1 text-white">
              {SERIES.status}
            </span>
            <span>{SERIES.years}</span>
            <span>•</span>
            <span>{SERIES.country}</span>
            <span>•</span>
            <span>{SERIES.age}</span>
          </div>

          <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SERIES.title}
          </h1>
          <p className="mt-2 text-sm font-medium text-white/60">
            {SERIES.originalTitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {SERIES.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {SERIES.synopsis}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
              style={{ background: GRADIENT }}
            >
              <Play className="h-4 w-4 fill-white" />
              Lancer S1E1
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              <Share2 className="h-4 w-4" />
              Partager
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              <Heart className="h-4 w-4" />
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextEpisodeSection() {
  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={2} glow hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur sm:p-8">
        <SectionHeader
          title="Prochain episode"
          rightLabel="Tous les episodes"
        />

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">
            <img
              src={SERIES.backdrop}
              alt={NEXT_EPISODE.title}
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                className="grid h-16 w-16 place-items-center rounded-full text-white shadow-2xl transition hover:scale-105"
                style={{ background: GRADIENT }}
              >
                <Play className="ml-1 h-7 w-7 fill-white" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-cyan">
                S{NEXT_EPISODE.season} E{NEXT_EPISODE.episode}
              </p>
              <h3 className="mt-1 text-lg font-black text-white">
                {NEXT_EPISODE.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand-cyan" />
                  {NEXT_EPISODE.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-brand-cyan" />
                  {NEXT_EPISODE.airDate}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {NEXT_EPISODE.synopsis}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                style={{ background: GRADIENT }}
              >
                <Play className="h-4 w-4 fill-white" />
                Regarder
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Eye className="h-4 w-4" />
                Vu plus tard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressSection() {
  const progress =
    (USER_PROGRESS.episodesWatched / USER_PROGRESS.totalEpisodes) * 100;

  return <></>;
}

function WhyWatchSection() {
  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur sm:p-8">
        <SectionHeader title="Pourquoi regarder cette serie ?" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_WATCH.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:bg-white/[0.07]"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-cyan/30">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-3 text-2xl font-black text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Parce que vous aimez
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Dark", "The OA", "Yellowjackets", "Doctor Who"].map((show) => (
              <span
                key={show}
                className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/80"
              >
                {show}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-white/60">
            Les utilisateurs qui ont aime ces series ont note Stranger Things en
            moyenne 9.1/10.
          </p>
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ platform }) {
  return (
    <a
      href="#"
      className="group/card relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]"
    >
      <div className="flex items-center gap-3">
        <div
          className="grid h-11 w-11 place-items-center rounded-xl"
          style={{ backgroundColor: `${platform.color}20` }}
        >
          <Tv className="h-5 w-5" style={{ color: platform.color }} />
        </div>
        <div>
          <p className="font-semibold text-white">{platform.name}</p>
          <p className="text-xs text-white/50">
            {platform.quality} · {platform.price}
          </p>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-white/40 transition group-hover/card:text-brand-cyan" />
    </a>
  );
}

function WhereToWatchSection() {
  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur sm:p-8">
        <SectionHeader title="Ou regarder ?" rightLabel="Comparatif complet" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-white/50">
          Disponibilite et tarifs susceptibles de varier selon votre region et
          vos abonnements actuels.
        </p>
      </div>
    </div>
  );
}

function SocialSection() {
  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur sm:p-8">
        <SectionHeader title="Experience sociale" />

        <div className="space-y-4">
          {WATCHING_FRIENDS.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <img
                src={friend.avatar}
                alt={friend.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-dark"
              />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-white">{friend.name}</p>
                <p className="text-sm text-white/60">{friend.status}</p>
              </div>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xl font-black text-white">1.2K</p>
            <p className="text-[10px] uppercase text-white/50">en ligne</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xl font-black text-white">45K</p>
            <p className="text-[10px] uppercase text-white/50">fans</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xl font-black text-white">8.7</p>
            <p className="text-[10px] uppercase text-white/50">note SA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CastSection() {
  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur sm:p-8">
        <SectionHeader title="Casting principal" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAST.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">
                  {member.name}
                </p>
                <p className="truncate text-xs text-white/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="group relative overflow-hidden rounded-[28px]">
      <GradientRing radiusClass="rounded-[28px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur sm:p-8">
        <SectionHeader title="Avis" rightLabel="Tous les avis" />

        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {review.author}
                  </p>
                  <p className="text-xs text-brand-cyan">{review.rating}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {review.content}
              </p>
              <div className="mt-3 flex items-center gap-4">
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition hover:text-brand-cyan">
                  <Heart className="h-3.5 w-3.5" /> {review.likes}
                </button>
                <button className="text-xs font-medium text-white/50 transition hover:text-brand-cyan">
                  Repondre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelatedEpisodesSection() {
  return <></>;
}

export default function SerieWatchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-6 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Regarder la serie
            </p>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              {SERIES.title}
            </h1>
          </div>
        </div>

        <div className="space-y-8">
          <HeroSection />

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-8">
              <NextEpisodeSection />
              <ProgressSection />
              <WhyWatchSection />
              <WhereToWatchSection />
              <CastSection />
              <RelatedEpisodesSection />
              <ReviewsSection />
            </div>

            <aside className="space-y-8">
              <SocialSection />

              <div className="group relative overflow-hidden rounded-[28px]">
                <GradientRing
                  radiusClass="rounded-[28px]"
                  thickness={1.5}
                  hoverGlow
                />
                <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur">
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                    Infos serie
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li className="flex justify-between">
                      <span>Statut</span>
                      <span className="font-medium text-white">
                        {SERIES.status}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saisons</span>
                      <span className="font-medium text-white">
                        {SERIES.seasons}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Episodes</span>
                      <span className="font-medium text-white">
                        {SERIES.episodes}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duree moyenne</span>
                      <span className="font-medium text-white">
                        {SERIES.duration}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Createurs</span>
                      <span className="font-medium text-white">
                        {SERIES.creator}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Note publique</span>
                      <span className="font-medium text-brand-cyan">
                        {SERIES.publicScore}/10
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Note SA</span>
                      <span className="font-medium text-brand-cyan">
                        {SERIES.saScore}/10
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[28px]">
                <GradientRing
                  radiusClass="rounded-[28px]"
                  thickness={1.5}
                  hoverGlow
                />
                <div className="relative rounded-[28px] bg-brand-dark/55 p-6 backdrop-blur">
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                    Commencer maintenant
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    Vous avez 45 minutes devant vous ? Cet episode est le
                    parfait point de depart.
                  </p>
                  <button
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                    style={{ background: GRADIENT }}
                  >
                    <Play className="h-4 w-4 fill-white" />
                    Lancer S1E1 — {NEXT_EPISODE.duration}
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
