import PosterCard from '../components/ui/PosterCard'
import SectionTitle from '../components/ui/SectionTitle'
import { HERO_IMAGES, POSTER_IMAGES, SERIES } from '../data/mockData'

function UserSpacePage() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <img src={HERO_IMAGES[3]} alt="cover user profile" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/30" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#841D4F] text-white">
            DJ
          </div>
          <h1 className="text-2xl font-semibold text-white">Hello Divinjordan</h1>
          <p className="text-sm text-white/70">Espace personnel: activite, serie-theque, a voir, listes et notifications.</p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-white/[0.06] p-4 lg:col-span-2">
          <SectionTitle title="Feed d'activite" action="Tout voir" />
          <div className="space-y-3 text-sm text-white/75">
            <div className="rounded-lg border border-white/10 bg-black/30 p-3">Vous avez note The Bear: 8.5/10</div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-3">Nouveau trailer ajoute pour Silo</div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-3">Votre liste Weekend Binge a ete partagee</div>
          </div>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <SectionTitle title="Notifications" />
          <div className="space-y-2 text-sm text-white/75">
            <p>3 sorties cette semaine</p>
            <p>2 commentaires sur votre avis</p>
            <p>1 ami vous a ajoute</p>
          </div>
        </article>
      </section>

      <section>
        <SectionTitle title="Serie-theque" action="Voir toute la collection" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {SERIES.slice(0, 6).map((item, index) => (
            <PosterCard key={item} title={item} image={POSTER_IMAGES[(index + 2) % POSTER_IMAGES.length]} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default UserSpacePage
