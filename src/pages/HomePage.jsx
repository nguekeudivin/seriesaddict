/**
 * HomePage (SerieAddict) – React + TailwindCSS
 * Reproduction fidèle du layout/ambiance de la maquette "nouveau-accueil":
 * - Header sombre, logo centré
 * - Hero image + overlay + titre + search bar
 * - Sections: Actus (cards), Séries du moment (posters + numéros), blocs pub,
 *   Nouveautés (feature + side posters), Streaming (modules), Daily (actus), Best rated (posters), Footer
 *
 * ⚠️ Remplace les URLs d'images (bg, posters) par tes assets.
 */

const THEME = {
  primary: "brand-primary",
  secondary: "brand-cyan",
  tertiary: "brand-wine",
  background: "brand-bg",
};

const ACCENT_GRADIENT = `bg-gradient-to-r from-${THEME.primary} via-${THEME.tertiary} to-${THEME.secondary}`;
const BRAND_GRADIENT_TEXT = `bg-gradient-to-r from-${THEME.primary} to-${THEME.secondary}`;

const demoNews = Array.from({ length: 3 }).map((_, i) => ({
  id: i + 1,
  title: "UNE SAISON 5 POUR IT’S ALWAYS SUNNY IN PHILADELPHIA",
  excerpt:
    "La série a été renouvelée pour une nouvelle saison qui se composera de 26 épisodes !",
  img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=60",
}));

const demoPostersMoment = [
  {
    id: 1,
    title: "All Her Fault",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "The Man on the Inside",
    img: "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Derry",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    title: "Stranger Things",
    img: "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    title: "Pluribus",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    title: "The Beast in Me",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    title: "Landman",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=60",
  },
];

const demoPostersSide = [
  {
    id: "s1",
    title: "Landman",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "s2",
    title: "The Beast in Me",
    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "s3",
    title: "Pluribus",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=60",
  },
];

function IconBurger(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionHeader({ title, rightLabel }) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
        <h2 className="text-lg font800 font-semibold tracking-wide text-white">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button className="text-xs font-semibold tracking-wide text-brand-cyan hover:text-white">
          {rightLabel}
        </button>
      ) : null}
    </div>
  );
}
const GRADIENT = "linear-gradient(90deg,var(--color-brand-primary),var(--color-brand-cyan))";

function InnerGradientBorder() {
  return (
    <>
      {/* Ring principal */}
      <div
        className="pointer-events-none absolute inset-4 rounded-2xl"
        style={{
          background: GRADIENT,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />

      {/* Glow subtil au hover */}
      <div
        className="pointer-events-none absolute inset-4 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
        style={{
          background: GRADIENT,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />
    </>
  );
}

export function NewsCard({ item }) {
  return (
    <article className="group relative w-full overflow-hidden rounded-3xl">
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenu principal */}
      <div className="relative rounded-3xl bg-brand-bg/35 backdrop-blur-[2px] p-6 sm:p-8">
        {/* ✅ Cadre intérieur gradient */}
        <InnerGradientBorder />

        <div className="relative flex min-h-[240px] flex-col items-center justify-center text-center">
          <h3 className="max-w-[34rem] text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
            {item.title}
          </h3>

          <div className="my-5 h-px w-56 bg-white/55" />

          <p className="max-w-[36rem] text-sm leading-relaxed text-white/80">
            {item.excerpt}
          </p>

          {/* Bouton */}
          <div className="mt-6 relative inline-flex rounded-full">
            <span
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: GRADIENT,
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1.5px",
              }}
            />
            <button className="relative rounded-full bg-brand-wine/55 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-wine/80">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function PosterCard({ item, index, showIndex }) {
  return (
    <div className="relative w-[132px] shrink-0">
      <div
        className="aspect-[2/3] w-full overflow-hidden rounded-xl border border-brand-cyan/30 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
        title={item.title}
      />
      {showIndex ? (
        <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 select-none">
          <span className={`text-[52px] font-black tracking-tight text-transparent opacity-90 [text-shadow:0_0_18px_rgba(132,29,79,0.45)] bg-clip-text ${BRAND_GRADIENT_TEXT}`}>
            {index}
          </span>
        </div>
      ) : null}
    </div>
  );
}

function AdBlock({ label = "PUB" }) {
  return (
    <div className="rounded-2xl border border-brand-cyan/30 bg-brand-wine/35 px-6 py-14 text-center text-4xl font-black tracking-wide text-white/90">
      {label}
    </div>
  );
}

function FeatureNewRelease() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
      {/* Feature */}
      <div className="relative overflow-hidden rounded-3xl border border-brand-cyan/30 bg-brand-bg/80">
        <div
          className="h-full min-h-[330px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1600&q=60)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 p-6">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/90">
              The Beast in Me
            </p>
            <p className="mt-1 text-xs text-white/75">
              Thriller • Drame • Mini-série • Mystère
            </p>

            <p className="mt-3 text-[12px] leading-relaxed text-white/72">
              Depuis la mort tragique de son jeune fils, l’auteure acclamée
              Aggie Wiggs s’est retirée de la vie publique… (texte placeholder)
            </p>

            <div className="mt-4 flex items-center gap-3 text-[11px] text-white/75">
              <span className="font-semibold">
                Diffusée le 16 novembre sur Netflix
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button className="rounded-full border border-brand-primary/60 bg-brand-wine/40 px-4 py-2 text-xs font-semibold text-white hover:border-brand-primary">
                Regarder la série
              </button>

              <div className="flex items-center gap-2 text-brand-cyan">
                <IconHeart className="h-5 w-5" />
                <IconBookmark className="h-5 w-5" />
                <IconShare className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side posters */}
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
        {demoPostersSide.map((p) => (
          <div
            key={p.id}
            className="relative overflow-hidden rounded-2xl border border-brand-cyan/30 bg-brand-bg/80"
          >
            <div
              className="aspect-[2/3] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${p.img})` }}
              title={p.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
            <div className="absolute bottom-2 left-2 right-2">
              <p className="truncate text-[11px] font-bold uppercase tracking-wide text-white">
                {p.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
function IconBookmark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3h10a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
function IconShare(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 0-2.83-4H12a3 3 0 0 0 0 6h.17A3 3 0 0 0 15 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 14a3 3 0 1 0 2.83 4H9a3 3 0 0 0 0-6h-.17A3 3 0 0 0 6 14Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M18 16a3 3 0 1 0 2.83 4H21a3 3 0 0 0 0-6h-.17A3 3 0 0 0 18 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 12l6-3M9 15l6 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Top bar */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15">
            <IconBurger className="h-6 w-6" />
          </button>

          <div className="select-none text-center">
            <div className="text-xl font-black tracking-widest">
              <span className="text-white">SERIE</span>
              <span className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}>
                ADDICT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-white/85 md:block">
              Hello <span className="font-semibold">Charlotte</span> !
            </span>
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/35">
              <img
                alt="Avatar"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative -mt-16 pt-16">
        <div
          className="h-[420px] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero.png)",
          }}
        />
        <div className="absolute inset-0 absolute inset-0 bg-gradient-to-b from-brand-wine/50 via-black/55 to-brand-bg" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full bg-transparent max-w-6xl flex-col items-center justify-center px-5 text-center">
            <p className="text-xl font-extrabold uppercase tracking-wide md:text-3xl">
              STRANGER THINGS REVIENT AVEC SA SAISON 5 !
            </p>
            <p className="mt-1 text-sm text-white/85">
              Et on a hâte de la voir !
            </p>

            {/* Search bar with neon border */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="relative rounded-full p-[1px]">
                <div
                  className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60 blur-[10px]`}
                />
                <div
                  className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`}
                />
                <div className="relative flex items-center gap-2 rounded-full bg-brand-bg/80 px-5 py-3 backdrop-blur">
                  <input
                    placeholder="Rechercher une série"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/45 focus:outline-none"
                  />
                  <div className="h-6 w-px bg-brand-cyan/35" />
                  <button className="rounded-full p-2 text-brand-cyan hover:bg-brand-cyan/15">
                    <IconSearch className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl space-y-14 px-5 py-10">
        {/* Actus séries */}
        <section>
          <SectionHeader title="ACTUS SÉRIES" rightLabel="TOUTES LES ACTUS" />
          <div className="grid gap-6 md:grid-cols-3">
            {demoNews.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
        </section>

        {/* Les séries du moments */}
        <section className="relative">
          <SectionHeader title="LES SÉRIES DU MOMENTS" />
          <div className="relative overflow-x-auto pb-10">
            <div className="flex gap-4">
              {demoPostersMoment.map((p, idx) => (
                <PosterCard key={p.id} item={p} index={idx + 1} showIndex />
              ))}
            </div>
          </div>
        </section>

        {/* Blocs pub */}
        <section className="space-y-6">
          <AdBlock label="Image + lien" />
          <AdBlock label="PUB" />
        </section>

        {/* Nouveautés séries */}
        <section>
          <SectionHeader
            title="LES NOUVEAUTÉS SÉRIES"
            rightLabel="TOUTES LES NOUVEAUTÉS SÉRIES"
          />
          <FeatureNewRelease />
        </section>

        {/* Streaming séries */}
        <section>
          <SectionHeader
            title="STREAMING SÉRIES"
            rightLabel="TOUTES LES VIDÉOS SÉRIES"
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="rounded-3xl border border-brand-cyan/30 bg-brand-wine/35 px-6 py-20 text-center text-sm font-bold tracking-wide text-white/90">
              MODULE DAILYMOTION ET YOUTUBE
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl border border-brand-cyan/30 bg-brand-wine/35 px-6 py-14 text-center text-sm font-bold text-white/90">
                MODULE
              </div>
              <div className="rounded-3xl border border-brand-cyan/30 bg-brand-wine/35 px-6 py-14 text-center text-sm font-bold text-white/90">
                MODULE
              </div>
            </div>
          </div>
        </section>

        {/* Sa daily */}
        <section>
          <SectionHeader title="SA DAILY" rightLabel="TOUTES LES ACTUS" />
          <div className="grid gap-6 md:grid-cols-3">
            {demoNews.map((n) => (
              <NewsCard key={`daily-${n.id}`} item={n} />
            ))}
          </div>
        </section>

        {/* Best rated tag */}
        <section className="relative">
          <div className="mb-4 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
              <h2 className="text-lg font-semibold tracking-wide text-white">
                LES SÉRIES LES MIEUX NOTÉES AVEC LE TAG{" "}
                <span className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}>
                  AMOUR
                </span>
              </h2>
            </div>
          </div>

          <div className="relative overflow-x-auto pb-2">
            <div className="flex gap-4">
              {demoPostersMoment.slice(0, 6).map((p) => (
                <PosterCard key={`best-${p.id}`} item={p} showIndex={false} />
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-brand-cyan/25" />
      </main>

      {/* Footer */}
      <footer className="pb-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="select-none text-2xl font-black tracking-widest">
            <span className="text-white">SERIE</span>
            <span className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}>
              ADDICT
            </span>
          </div>
          <p className="mt-1 text-[11px] tracking-wide text-white/60">
            LE SPÉCIALISTE DES SÉRIES
          </p>
          <p className="mt-2 text-[10px] text-white/40">
            © 2010–2025 • Series Addict • Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
