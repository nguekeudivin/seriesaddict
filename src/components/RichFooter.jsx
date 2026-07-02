const links = {
  navigation: [
    { label: "Accueil", href: "/home" },
    { label: "Séries", href: "/series" },
    { label: "News", href: "/news" },
    { label: "Calendrier", href: "/calendar" },
    { label: "Collections", href: "/collections" },
  ],
  communaute: [
    { label: "Membres", href: "/members" },
    { label: "Discussions", href: "/members" },
    { label: "Listes", href: "/user/listes" },
    { label: "Séritèque", href: "/user/seritheque" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export default function RichFooter() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="select-none text-2xl font-black tracking-[0.15em]">
              <span className="text-white">SERIE</span>
              <span className="bg-gradient-to-r from-brand-primary to-brand-cyan bg-clip-text text-transparent">ADDICT</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Le spécialiste des séries. Découvrez, suivez et partagez vos séries préférées avec une communauté passionnée.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "Instagram", "TikTok", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-xs font-semibold text-white/60 transition hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {links.navigation.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 transition hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Communauté</h4>
            <ul className="mt-4 space-y-3">
              {links.communaute.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 transition hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Légal</h4>
            <ul className="mt-4 space-y-3">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 transition hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-[11px] text-white/40">© 2010–2025 • Series Addict • Tous droits réservés.</p>
          <p className="text-[10px] uppercase tracking-widest text-white/30">Le spécialiste des séries</p>
        </div>
      </div>
    </footer>
  );
}
