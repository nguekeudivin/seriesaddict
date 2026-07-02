const week = [
  {
    day: "Lundi",
    date: "14 nov.",
    releases: [
      { id: 1, title: "Dune : Prophecy", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=400&q=60" },
      { id: 2, title: "The Bear", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=60" },
    ],
  },
  {
    day: "Mardi",
    date: "15 nov.",
    releases: [
      { id: 3, title: "Landman", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=60" },
      { id: 4, title: "Silo", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60" },
    ],
  },
  {
    day: "Mercredi",
    date: "16 nov.",
    releases: [
      { id: 5, title: "Wednesday", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=400&q=60" },
      { id: 6, title: "Slow Horses", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60" },
    ],
  },
  {
    day: "Jeudi",
    date: "17 nov.",
    releases: [
      { id: 7, title: "Pluribus", image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=60" },
      { id: 8, title: "The Beast in Me", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60" },
    ],
  },
];

export default function ReleaseCalendar() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan">Planning</span>
        <h2 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">Sorties de cette semaine</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {week.map((day) => (
          <div key={day.day} className="rounded-3xl border border-white/5 bg-brand-dark/30 p-5 backdrop-blur transition hover:border-white/10">
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-lg font-black uppercase text-white">{day.day}</h3>
              <span className="text-xs font-semibold text-white/40">{day.date}</span>
            </div>
            <div className="flex flex-col gap-4">
              {day.releases.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_20px_rgba(30,108,134,.2)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 truncate text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
