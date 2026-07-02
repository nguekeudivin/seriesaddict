import { ArrowUpRight } from "lucide-react";

const items = [
  { id: 1, rank: 1, title: "The Bear", subtitle: "Saison 3", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=70", large: true },
  { id: 2, rank: 2, title: "Wednesday", subtitle: "Nouvelle saison", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=70" },
  { id: 3, rank: 3, title: "Landman", subtitle: "Billy Bob Thornton", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=70" },
  { id: 4, rank: 4, title: "Pluribus", subtitle: "Mini-série", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=70" },
];

function Card({ item }) {
  const isLarge = item.large;
  return (
    <div className={`group relative cursor-pointer ${isLarge ? "row-span-2" : ""}`}>
      <div className={`relative overflow-hidden rounded-2xl border border-white/5 bg-black transition-all duration-300 group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_30px_rgba(30,108,134,.2)] ${isLarge ? "h-full min-h-[420px] md:min-h-[520px]" : "aspect-[3/4]"}`}>
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <span className={`absolute font-anton font-black leading-none text-white/10 transition-all duration-300 group-hover:text-white/20 ${isLarge ? "left-2 top-2 text-[120px] md:text-[160px]" : "left-2 top-1 text-[72px] md:text-[90px]"}`}>
          {String(item.rank).padStart(2, "0")}
        </span>
        <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-6 ${isLarge ? "md:p-8" : ""}`}>
          <h3 className={`font-bold text-white ${isLarge ? "text-2xl md:text-3xl" : "text-lg"}`}>{item.title}</h3>
          <p className={`mt-1 text-white/60 ${isLarge ? "text-sm" : "text-xs"}`}>{item.subtitle}</p>
        </div>
        <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function TrendingToday() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Aujourd'hui</span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Trending Today</h2>
        </div>
        <a href="/series" className="hidden text-sm font-semibold text-white/60 transition hover:text-brand-cyan md:block">
          Voir tout
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 lg:row-span-2">
          <Card item={items[0]} />
        </div>
        {items.slice(1).map((item) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
