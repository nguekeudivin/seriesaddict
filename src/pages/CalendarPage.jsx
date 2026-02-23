import SectionTitle from '../components/ui/SectionTitle'
import { DAYS, SERIES } from '../data/mockData'

function CalendarPage() {
  return (
    <div className="space-y-7">
      <section className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
        <h1 className="mb-4 text-xl font-semibold text-white md:text-2xl">Calendrier Series</h1>
        <div className="grid gap-2 md:grid-cols-7">
          {DAYS.map((day) => (
            <div
              key={day}
              className="rounded-xl border border-white/10 bg-black/30 p-3 text-center text-xs uppercase tracking-[0.15em] text-white/70"
            >
              {day}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 lg:col-span-2">
          <SectionTitle title="Sorties de la semaine" />
          <div className="space-y-3">
            {SERIES.slice(0, 6).map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 p-3">
                <span className="w-16 text-xs uppercase tracking-[0.16em] text-[#1E6C86]">J+{index}</span>
                <span className="flex-1 text-sm text-white">{item}</span>
                <span className="rounded-full border border-[#841D4F]/40 px-3 py-1 text-xs text-[#841D4F]">
                  Episode {index + 1}
                </span>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <SectionTitle title="A venir ce mois" />
          <div className="space-y-2 text-sm text-white/75">
            <p>12 Mars • The Last Of Us S02E05</p>
            <p>14 Mars • Severance S01E09</p>
            <p>19 Mars • Dark Matter S02E01</p>
            <p>22 Mars • The Boys S05E02</p>
            <p>27 Mars • House Of The Dragon S03E01</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default CalendarPage
