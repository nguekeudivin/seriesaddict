import { Calendar, Star, Clapperboard } from "lucide-react";

const featured = {
  title: "Dune : Prophecy",
  subtitle: "HBO • 6 épisodes",
  description:
    "Des milliers d'années avant la montée de Paul Atreides, deux sœurs Harkonnen affrontent les forces qui menacent l'avenir de l'humanité.",
  image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=900&q=70",
};

const mini = [
  { id: 1, title: "The Last of Us", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&q=60" },
  { id: 2, title: "Silo", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=60" },
  { id: 3, title: "Slow Horses", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60" },
];

export default function NewReleases() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Cette semaine</span>
        <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Les nouveautés</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black">
          <img
            src={featured.image}
            alt={featured.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="mb-3 inline-block rounded-full bg-brand-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur">
              À ne pas manquer
            </span>
            <h3 className="text-3xl font-black text-white md:text-4xl">{featured.title}</h3>
            <p className="mt-1 text-sm font-semibold text-white/60">{featured.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/5 bg-brand-dark/40 p-6 backdrop-blur md:p-8">
            <h3 className="text-2xl font-black text-white">{featured.title}</h3>
            <p className="mt-2 text-sm font-semibold text-brand-cyan">{featured.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{featured.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70">
                <Star className="h-3.5 w-3.5 text-brand-primary" /> 4.7
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70">
                <Calendar className="h-3.5 w-3.5 text-brand-cyan" /> 14 nov.
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70">
                <Clapperboard className="h-3.5 w-3.5 text-white/50" /> Drame
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {mini.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_20px_rgba(30,108,134,.2)]">
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
      </div>
    </section>
  );
}
