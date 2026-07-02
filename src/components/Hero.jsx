import { Play, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const defaultHero = {
  badge: "Tendance de la semaine",
  title: "STRANGER THINGS",
  subtitle: "Saison finale",
  rating: "4.9",
  platform: "Netflix",
  release: "16 Nov. 2026",
  episodes: "8 épisodes",
  genres: "Science-Fiction • Thriller • Drame",
  description:
    "Hawkins sombre dans le chaos. Eleven et ses amis affrontent leur ultime bataille contre Vecna dans une saison finale intense et émotionnelle.",
  background: "/images/hero.png",
};

const trending = [
  { id: 1, title: "Wednesday", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=500&q=60" },
  { id: 2, title: "Landman", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60" },
  { id: 3, title: "The Bear", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=60" },
  { id: 4, title: "Pluribus", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&q=60" },
  { id: 5, title: "The Beast in Me", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&q=60" },
];

export default function Hero({ hero = defaultHero }) {
  const navigate = useNavigate();

  return (
    <section className="relative h-[95vh] min-h-[720px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 animate-[heroZoomSlow_22s_linear_forwards] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.background})` }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_25%,rgba(0,0,0,.85)_80%)]" />
      <div className="absolute bottom-0 left-0 h-[55%] w-[55%] bg-[radial-gradient(circle_at_bottom_left,rgba(132,29,79,.55),transparent_70%)] blur-2xl" />
      <div className="absolute right-0 top-0 h-[40%] w-[40%] bg-[radial-gradient(circle_at_top_right,rgba(30,108,134,.35),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <span className="mb-5 inline-block rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan shadow-[0_0_15px_rgba(30,108,134,.25)] backdrop-blur">
            {hero.badge}
          </span>

          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tight text-white md:text-7xl lg:text-[92px]">
            {hero.title}
          </h1>
          <p className="mt-3 text-lg font-bold uppercase tracking-[0.2em] text-brand-cyan md:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[`★ ${hero.rating}`, hero.platform, hero.release, hero.episodes].map((label) => (
              <span key={label} className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-white/70">
                {label}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold tracking-wide text-white/50">{hero.genres}</p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 line-clamp-3">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-7 py-3.5 text-sm font-bold uppercase text-white shadow-[0_0_40px_rgba(132,29,79,.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(132,29,79,.7)]">
              <Play className="h-5 w-5" />
              Regarder
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-brand-cyan/60 hover:bg-brand-cyan/10 hover:shadow-[0_0_20px_rgba(30,108,134,.2)]">
              <Plus className="h-5 w-5" />
              Ma liste
            </button>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Trending Now</p>
          <div className="flex flex-col gap-5">
            {trending.map((item, i) => (
              <div key={item.id} className="group flex cursor-pointer items-center gap-4">
                <span className="font-anton text-[52px] font-black leading-none text-white/15 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-cyan group-hover:bg-clip-text group-hover:text-transparent">
                  0{i + 1}
                </span>
                <img
                  src={item.image}
                  alt=""
                  className="h-14 w-10 rounded object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-semibold text-white/50 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4">
          {trending.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/series-details")}
              className="group w-[140px] shrink-0 cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-2 truncate text-xs font-semibold text-white/70 transition-colors group-hover:text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
