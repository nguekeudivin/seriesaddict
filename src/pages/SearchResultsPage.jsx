import Chips from '../components/ui/Chips'
import SectionTitle from '../components/ui/SectionTitle'
import { POSTER_IMAGES, SERIES } from '../data/mockData'

function SearchResultsPage() {
  return (
    <div className="space-y-7">
      <section className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
        <h1 className="mb-4 text-xl font-semibold text-white md:text-2xl">Resultats de recherche: Arrow</h1>
        <div className="flex flex-wrap items-center gap-3">
          <input
            defaultValue="arrow"
            className="min-w-56 flex-1 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none"
          />
          <Chips values={['Series', 'Stars', 'News', 'Trailers', 'Sa Daily']} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[300px,1fr]">
        <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <SectionTitle title="Filtres" />
          <div className="space-y-4 text-sm text-white/80">
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">Genres: Action, Sci-Fi</div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">Annees: 2010-2026</div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">Plateformes: Netflix, HBO</div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">Note min: 7.0</div>
          </div>
        </article>
        <div className="space-y-3">
          {[0, 1, 2].map((value) => (
            <article
              key={value}
              className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 md:grid-cols-[170px,1fr,240px]"
            >
              <img
                src={POSTER_IMAGES[value]}
                alt="resultat serie"
                className="h-48 w-full rounded-xl object-cover md:h-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{SERIES[value]}</h3>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#1E6C86]">Serie • Action/Aventure</p>
                <p className="text-sm text-white/75">
                  Resume placeholder detaille pour afficher la hierarchie de lecture et les CTA de recherche multi-contenus.
                </p>
              </div>
              <div className="aspect-video rounded-xl border border-white/10 bg-black/60" />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SearchResultsPage
