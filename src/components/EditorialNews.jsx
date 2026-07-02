const articles = [
  {
    id: 1,
    category: "Breaking",
    title: "Stranger Things : la saison finale bouleverse déjà les records d'audience",
    excerpt: "Netflix annonce que la dernière saison devient le lancement le plus suivi de l'année sur la plateforme.",
    image: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1200&q=70",
    large: true,
  },
  {
    id: 2,
    category: "Séries",
    title: "The Bear : une saison 4 confirmée",
    excerpt: "FX renouvelle la série dramatique pour une nouvelle saison.",
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    category: "Casting",
    title: "Dune : Prophecy dévoile son casting international",
    excerpt: "Les nouvelles têtes d'affiche de la série HBO dévoilées.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    category: "Streaming",
    title: "Apple TV+ : le planning de novembre",
    excerpt: "Les nouvelles séries et saisons attendues ce mois-ci.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    category: "Communauté",
    title: "Les séries les plus attendues par les membres",
    excerpt: "Notre sondage révèle les nouvelles séries les plus impatientées.",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=60",
  },
];

function Card({ item }) {
  return (
    <article className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-black transition-all duration-300 hover:border-white/10 ${item.large ? "md:col-span-2 md:row-span-2" : ""}`}>
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent ${item.large ? "via-black/50" : ""}`} />
      <div className={`absolute bottom-0 left-0 right-0 p-5 ${item.large ? "p-6 md:p-8" : ""}`}>
        <span className={`mb-2 inline-block rounded-full bg-brand-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan backdrop-blur ${item.large ? "" : "text-[9px] px-2 py-0.5"}`}>
          {item.category}
        </span>
        <h3 className={`font-bold leading-tight text-white ${item.large ? "text-2xl md:text-3xl" : "text-base"}`}>
          {item.title}
        </h3>
        <p className={`mt-2 text-white/60 ${item.large ? "text-sm line-clamp-2" : "text-xs line-clamp-2"}`}>
          {item.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function EditorialNews() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Magazine</span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Actualités</h2>
        </div>
        <a href="/news" className="hidden text-sm font-semibold text-white/60 transition hover:text-brand-cyan md:block">
          Toutes les actus
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
