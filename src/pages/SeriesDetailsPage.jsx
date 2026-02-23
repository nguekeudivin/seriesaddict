import Chips from '../components/ui/Chips'
import PosterCard from '../components/ui/PosterCard'
import SectionTitle from '../components/ui/SectionTitle'
import { HERO_IMAGES, POSTER_IMAGES, SERIES } from '../data/mockData'

function SeriesDetailsPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <img src={HERO_IMAGES[2]} alt="Serie detail hero" className="h-80 w-full object-cover md:h-[30rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#1E6C86]">Science-fiction • 5 saisons</p>
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Stranger Things</h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Une experience premium autour d’une fiche serie: progression des saisons, contenus relies et actions communautaires.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chips values={['Fiche', 'Saisons', 'News', 'Avis', 'Trailers', 'Shop', 'Similaires']} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <SectionTitle title="A savoir" />
          <ul className="space-y-2 text-sm text-white/75">
            <li>Statut: En production</li>
            <li>Episodes: 42</li>
            <li>Duree: 52 min</li>
            <li>Plateforme: Netflix</li>
          </ul>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/[0.06] p-4 md:col-span-2">
          <SectionTitle title="Synopsis" />
          <p className="text-sm leading-relaxed text-white/75">
            Zone de contenu riche pour la fiche serie. Le style reprend la structure des nouveaux visuels : fonds tres sombres, lisibilite forte et accents colorimétriques magenta/cyan.
          </p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-white/[0.06] p-4 md:col-span-2">
          <SectionTitle title="Videos & trailers" action="Tous les trailers" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[0, 1].map((value) => (
              <div key={value} className="aspect-video rounded-xl border border-white/10 bg-black/60" />
            ))}
          </div>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <SectionTitle title="Collection" />
          <img src={POSTER_IMAGES[5]} alt="collection" className="h-56 w-full rounded-xl object-cover" />
        </article>
      </section>

      <section>
        <SectionTitle title="Series similaires" action="Tout voir" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {SERIES.slice(0, 6).map((item, index) => (
            <PosterCard key={item} title={item} image={POSTER_IMAGES[(index + 1) % POSTER_IMAGES.length]} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SeriesDetailsPage
