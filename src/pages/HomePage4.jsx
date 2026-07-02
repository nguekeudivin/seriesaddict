import { Play, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const hero = {
  badge: "Numéro 1 aujourd'hui",
  title: "STRANGER THINGS",
  subtitle: "SAISON FINALE",
  rating: "4.9",
  platform: "NETFLIX",
  release: "16 NOVEMBRE",
  episodes: "8 ÉPISODES",
  genres: "Science-Fiction • Thriller • Drame",
  description:
    "Alors que Hawkins sombre dans le chaos, Eleven et ses amis affrontent leur ultime bataille contre Vecna. Une dernière saison intense et émotionnelle.",
  background: "/images/hero.png",
};

const trending = [
  {
    id: 1,
    title: "Wednesday",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Landman",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "The Bear",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Pluribus",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "The Beast in Me",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&q=60",
  },
];

const today = [
  {
    id: 1,
    title: "All Her Fault",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "The Man on the Inside",
    img: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Derry",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    title: "Stranger Things",
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    title: "Pluribus",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    title: "Landman",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=60",
  },
];

const BRAND_GRADIENT_TEXT = "bg-gradient-to-r from-brand-primary to-brand-cyan";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/85 transition hover:border-brand-cyan/30 hover:bg-brand-cyan/15">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-xl font-black tracking-widest">
          <span className="text-white">SERIE</span>
          <span
            className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
          >
            ADDICT
          </span>
        </div>
        <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35">
          <img
            alt="Avatar"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60"
          />
        </div>
      </div>
    </header>
  );
}

function TrendingPanel() {
  return (
    <div className="flex h-full flex-col justify-center px-8 py-10">
      <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        Trending Now
      </p>
      <div className="flex flex-col gap-6">
        {trending.map((item, i) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <span className="font-anton text-[56px] font-black leading-none text-white/15 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-cyan">
              0{i + 1}
            </span>
            <img
              src={item.image}
              alt=""
              className="h-16 w-11 rounded object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-semibold text-white/50 transition-colors duration-300 group-hover:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TodayCarousel() {
  const navigate = useNavigate();
  return (
    <section className="border-t border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-4 w-[2px] rounded-full bg-gradient-to-b from-brand-primary to-brand-cyan" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            En tendance aujourd'hui
          </h3>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4">
          {today.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/series-details")}
              className="group w-[160px] shrink-0 cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 truncate text-xs font-semibold text-white/70 transition-colors group-hover:text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative h-[95vh] min-h-[720px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center animate-[heroZoomSlow_20s_linear_forwards]"
        style={{ backgroundImage: `url(${hero.background})` }}
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(132,29,79,.35),transparent_60%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl">
        <div className="flex flex-1 flex-col justify-end px-6 pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              {hero.badge}
            </span>

            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl lg:text-[88px]">
              {hero.title}
            </h1>
            <p className="mt-3 text-lg font-bold uppercase tracking-[0.2em] text-white/70 md:text-xl">
              {hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                `★ ${hero.rating}`,
                hero.platform,
                hero.release,
                hero.episodes,
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70"
                >
                  {label}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-semibold tracking-wide text-white/50">
              {hero.genres}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 line-clamp-3">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-7 py-3.5 text-sm font-bold uppercase text-white transition-transform duration-300 hover:scale-[1.02]">
                <Play className="h-5 w-5" />
                Regarder
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/10">
                <Plus className="h-5 w-5" />
                Ma liste
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden w-[360px] bg-gradient-to-l from-black via-black/90 to-transparent lg:block">
          <div className="absolute inset-0 border-l border-white/5" />
          <TrendingPanel />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="text-2xl font-black tracking-widest">
          <span className="text-white">SERIE</span>
          <span
            className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
          >
            ADDICT
          </span>
        </div>
        <p className="mt-4 text-[10px] text-white/40">
          © 2010–2025 • Series Addict • Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default function HomePage4() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <TodayCarousel />
      <Footer />
    </div>
  );
}
