function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-white/10 py-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 text-sm text-white/65 md:grid-cols-4 md:px-6">
        <div>
          <p className="mb-2 text-base font-semibold text-white">SERIEADDICT</p>
          <p>Le specialiste des series TV.</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-white">A propos</p>
          <p>Equipe</p>
          <p>Contact</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-white">Decouvrir</p>
          <p>Calendrier</p>
          <p>Nouvelles series</p>
        </div>
        <div>
          <p className="mb-2 font-medium text-white">Newsletter</p>
          <div className="flex gap-2">
            <input
              className="w-full rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs text-white outline-none"
              placeholder="Votre email"
            />
            <button className="rounded-full bg-[#841D4F] px-4 py-2 text-xs font-semibold text-white">OK</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
