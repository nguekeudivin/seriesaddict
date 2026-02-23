import PosterCard from '../components/ui/PosterCard'
import SectionTitle from '../components/ui/SectionTitle'
import { POSTER_IMAGES, SERIES } from '../data/mockData'

function SeriesListPage() {
  return (
    <div className="space-y-7">
      <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:grid-cols-3">
        <input
          placeholder="Rechercher une serie..."
          className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none"
        />
        <select className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none">
          <option>Genre: Tous</option>
          <option>Drama</option>
          <option>Sci-Fi</option>
        </select>
        <select className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none">
          <option>Sortie: Toutes</option>
          <option>2026</option>
          <option>2025</option>
        </select>
      </section>

      <section>
        <SectionTitle title="Series du moment" action="Voir plus" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {SERIES.concat(SERIES).slice(0, 12).map((item, index) => (
            <PosterCard key={`${item}-${index}`} title={item} image={POSTER_IMAGES[index % POSTER_IMAGES.length]} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SeriesListPage
