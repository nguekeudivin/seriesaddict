import { Star, MessageSquare, ArrowUpRight } from "lucide-react";

const testimonial = {
  name: "Charlotte",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
  quote: "Stranger Things a défini une génération. La fin est parfaite, émouvante et maitrisée.",
  rating: 5,
};

const discussions = [
  { id: 1, title: "Théories sur la fin de Stranger Things", replies: 128, author: "Mike" },
  { id: 2, title: "The Bear saison 3 : trop de tension ?", replies: 84, author: "Sarah" },
  { id: 3, title: "Les meilleures séries de novembre", replies: 256, author: "Alex" },
  { id: 4, title: "Dune : Prophecy vaut-elle le détour ?", replies: 63, author: "Tom" },
];

export default function CommunitySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Membres</span>
        <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Communauté</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-white/5 bg-brand-dark/30 p-8 backdrop-blur md:p-10">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-brand-cyan/30">
              <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-white">{testimonial.name}</p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-primary text-brand-primary" />
                ))}
              </div>
            </div>
          </div>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
            « {testimonial.quote} »
          </blockquote>
          <a href="/members" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition hover:text-white">
            Voir la discussion <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-3xl border border-white/5 bg-brand-dark/30 p-6 backdrop-blur md:p-8">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/60">Discussions populaires</h3>
          <div className="flex flex-col gap-4">
            {discussions.map((item) => (
              <a
                key={item.id}
                href="/members"
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 p-4 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-black/40"
              >
                <div className="min-w-0">
                  <h4 className="font-semibold text-white transition-colors group-hover:text-brand-cyan">{item.title}</h4>
                  <p className="mt-1 text-xs text-white/50">par {item.author}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-white/60">
                  <MessageSquare className="h-4 w-4" /> {item.replies}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
