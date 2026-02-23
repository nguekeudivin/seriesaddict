import NewsCard from '../components/ui/NewsCard'
import { NEWS, NEWS_IMAGES } from '../data/mockData'

function NewsListPage() {
  return (
    <div className="space-y-7">
      <section className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="mr-auto text-xl font-semibold text-white md:text-2xl">Actus Series</h1>
          <input
            placeholder="Rechercher une news..."
            className="w-full rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none md:w-80"
          />
          <select className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none">
            <option>Tri: plus recentes</option>
            <option>Tri: populaires</option>
          </select>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS.concat(NEWS).map((item, index) => (
          <NewsCard
            key={`${item}-${index}`}
            title={item}
            image={NEWS_IMAGES[index % NEWS_IMAGES.length]}
            summary="Card news placeholder inspiree des nouveaux ecrans: dark cards, bordure douce et CTA discret."
          />
        ))}
      </section>
    </div>
  )
}

export default NewsListPage
