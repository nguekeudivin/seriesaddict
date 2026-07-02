import { Play } from "lucide-react";

const main = {
  title: "Stranger Things : saison finale",
  duration: "2:34",
  image: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1200&q=70",
};

const playlist = [
  { id: 1, title: "The Bear : bande-annonce", duration: "1:45", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=60" },
  { id: 2, title: "Dune : Prophecy", duration: "2:10", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=400&q=60" },
  { id: 3, title: "Wednesday : saison 2", duration: "1:58", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60" },
  { id: 4, title: "Landman : trailer", duration: "2:22", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=60" },
];

export default function StreamingSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Vidéos</span>
        <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Streaming</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/5 bg-black">
          <img
            src={main.image}
            alt={main.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="grid h-16 w-16 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/20">
              <Play className="h-7 w-7 fill-current" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white md:text-3xl">{main.title}</h3>
            <p className="mt-1 text-sm text-white/60">{main.duration}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {playlist.map((item) => (
            <div
              key={item.id}
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-white/5 bg-brand-dark/30 p-3 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-brand-dark/50"
            >
              <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Play className="h-5 w-5 fill-current text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="truncate font-semibold text-white transition-colors group-hover:text-brand-cyan">{item.title}</h4>
                <p className="mt-1 text-xs text-white/50">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
