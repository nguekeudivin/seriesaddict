import { ArrowUpRight } from "lucide-react";

const collections = [
  { id: 1, title: "Les meilleures séries Netflix", count: 24, image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=70" },
  { id: 2, title: "Les meilleures mini-séries", count: 18, image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=900&q=70" },
  { id: 3, title: "Les séries à voir absolument", count: 32, image: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=900&q=70" },
  { id: 4, title: "Les séries annulées trop tôt", count: 15, image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=70" },
  { id: 5, title: "Les meilleures séries françaises", count: 21, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=70" },
];

export default function CollectionsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Sélections</span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Collections</h2>
        </div>
        <a href="/collections" className="hidden text-sm font-semibold text-white/60 transition hover:text-brand-cyan md:block">
          Toutes les collections
        </a>
      </div>

      <div className="flex flex-col gap-5">
        {collections.map((item, idx) => (
          <a
            key={item.id}
            href="/collections"
            className="group relative block h-[160px] overflow-hidden rounded-3xl border border-white/5 md:h-[180px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-6 md:px-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-2xl font-black text-white md:text-3xl">{item.title}</h3>
                <p className="mt-1 text-sm text-white/60">{item.count} séries</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 md:h-14 md:w-14">
                <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
