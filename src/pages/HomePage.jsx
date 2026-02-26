import { Calendar, HeartPlus } from "lucide-react";
import { lerpColor } from "../libs/utils";
import { Play, Heart, Bookmark, MessageCircle } from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const ACCENT_GRADIENT = `bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan`;
const BRAND_GRADIENT_TEXT = `bg-gradient-to-r from-brand-primary to-brand-cyan`;

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
    showTitle: true,
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
const GRADIENT =
  "linear-gradient(90deg,var(--color-brand-primary),var(--color-brand-cyan))";

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
      <div className="relative rounded-3xl bg-brand-dark/35 backdrop-blur-[2px] p-6 sm:p-8">
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

function PosterCard({ item }) {
  return (
    <div
      className="relative w-[230px] shrink-0"
      onClick={() => {
        window.location.assign("/series-details");
      }}
    >
      <div
        className="aspect-[2/3] w-full overflow-hidden rounded-xl border border-brand-cyan/30 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
        title={item.title}
      >
        {item.showTitle && (
          <div className="p-4">
            <h3 className="font-semibold"> THE MAN OF THE INSIDE</h3>
            <div className="mt-4">
              <HeartPlus className="text-brand-cyan" />
            </div>
            <div className="mt-2">
              <Calendar className="text-brand-cyan" />
            </div>
          </div>
        )}
      </div>
      {item.showTitle && (
        <>
          <div
            className="pointer-events-none absolute inset-2 rounded-xl"
            style={{
              background: GRADIENT,
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />
        </>
      )}
    </div>
  );
}
function PosterNumbers({ total }) {
  const START = "#841D4F";
  const END = "#1E6C86";
  return Array.from({ length: total }).map((_, i) => {
    const t = total <= 1 ? 0 : i / (total - 1);
    const color = lerpColor(START, END, t);
    return (
      <div
        key={i}
        className="relative w-[240px] shrink-0 pointer-events-none select-none"
      >
        <span
          className="font-anton text-[64px] font-black tracking-tight"
          style={{
            WebkitTextStroke: `4px ${color}`,
            color: "transparent",
          }}
        >
          {i + 1}
        </span>
      </div>
    );
  });
}

function AdBlock({ label = "PUB" }) {
  return (
    <div className="rounded-2xl border border-brand-cyan/30 bg-brand-wine/50 px-6 py-14 text-center text-4xl font-black tracking-wide text-white/90">
      {label}
    </div>
  );
}

function GradientRing({
  radiusClass = "rounded-[28px]",
  thickness = 2,
  glow = false,
  className = "",
  hoverGlow = false,
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        radiusClass,
        glow ? "blur-md" : "",
        hoverGlow
          ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70"
          : "",
        className,
      ].join(" ")}
      style={{
        background: GRADIENT,
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: `${thickness}px`,
      }}
    />
  );
}

function PosterThumb({ src, title, accent = "cyan" }) {
  const border =
    accent === "primary"
      ? "border-[#841D4F]/70"
      : accent === "mix"
        ? "border-[#1E6C86]/60"
        : "border-[#1E6C86]/70";

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: GRADIENT,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}

function AvatarStack() {
  // mini stack + badge "+20" (top-left)
  const avatars = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60",
  ];

  return (
    <div className="absolute left-5 top-6 z-20 flex items-center">
      <div className="flex -space-x-2">
        {avatars.map((a, i) => (
          <div
            key={i}
            className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-black/60"
          >
            <img src={a} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="-ml-2 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
        +20
      </div>
    </div>
  );
}

function OutlineButton({ children }) {
  return (
    <button className="group/btn relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white">
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
      <span className="relative inline-flex items-center gap-2 rounded-full bg-black/35 px-5 py-2 backdrop-blur-sm transition-colors duration-300 group-hover/btn:bg-black/45">
        {children}
      </span>
    </button>
  );
}

function IconButton({ children, title }) {
  return (
    <button
      title={title}
      className="grid h-10 w-10 place-items-center rounded-full bg-black/25 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-black/35 hover:ring-white/25"
    >
      {children}
    </button>
  );
}

function NewReleasesSection() {
  const data = {
    title: "THE BEAST IN ME",
    genres: "Thriller - Drame - Mini série - Mystère",
    description:
      "Depuis la mort tragique de son jeune fils, l’auteure acclamée Aggie Wiggs s’est retirée de la vie publique, incapable d’écrire, n’étant plus qu’un fantôme d’elle-même. Mais elle trouve un sujet improbable pour un nouveau livre lorsque la maison voisine est achetée par Nile Sheldon, un célèbre et redoutable magnat de l’immobilier qui était autrefois le principal suspect de la disparition de sa femme. À la fois horrifiée et fascinée par cet homme, Aggie se retrouve compulsivement à la recherche de la vérité — chassant ses démons tout en fuyant les siens — dans un jeu du chat et de la souris qui pourrait devenir mortel.",
    release: "Diffusée le 16 novembre sur Netflix",
    backdrop: "/images/hero.png",
    side: [
      {
        title: "LANDMAN",
        img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=60",
        accent: "primary",
      },
      {
        title: "THE BEAST IN ME",
        img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=60",
        accent: "mix",
      },
      {
        title: "PLURIBUS",
        img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=60",
        accent: "cyan",
      },
    ],
  };

  return (
    <section className="bg-black  py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-4 w-[2px] rounded-full bg-white/80" />
            <h2 className="text-xl font-extrabold uppercase tracking-wide">
              LES NOUVEAUTÉS SÉRIES
            </h2>
          </div>

          <button
            className="text-sm font-extrabold uppercase tracking-wide"
            style={{ color: BRAND.cyan }}
          >
            TOUTES LES NOUVEAUTÉS SÉRIES
          </button>
        </div>

        {/* Card */}
        <div className="group relative overflow-hidden rounded-[28px]">
          {/* Gradient ring (only border) */}
          <GradientRing radiusClass="rounded-[28px]" thickness={2} />
          <GradientRing
            radiusClass="rounded-[28px]"
            thickness={2}
            glow
            hoverGlow
          />

          {/* Background image */}
          <div className="relative rounded-[28px] bg-[#011921]/60">
            <div className="absolute inset-0">
              <img
                src={data.backdrop}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
              {/* Dark overlay like the design */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/25" />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Layout: main + right column */}
            <div className="relative grid min-h-[520px] grid-cols-1 lg:grid-cols-[1fr_270px]">
              {/* Left content */}
              <div className="relative px-6 pb-6 pt-6 lg:px-10 lg:pb-10 lg:pt-10">
                {/* Top-left avatar stack */}
                <AvatarStack />

                {/* Text block bottom-left */}
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-[320px]">
                  <h3 className="text-3xl font-extrabold uppercase tracking-wide lg:text-4xl">
                    {data.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-white/80">
                    {data.genres}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
                    {data.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-white/80">
                    {data.release}
                  </p>

                  {/* Actions row */}
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <OutlineButton>
                      <Play
                        className="h-5 w-5"
                        style={{ color: BRAND.primary }}
                      />
                      <span className="text-white/80">Regarder la série</span>
                    </OutlineButton>

                    <div className="flex items-center gap-3">
                      <IconButton title="Ajouter aux favoris">
                        <Heart
                          className="h-5 w-5"
                          style={{ color: BRAND.primary }}
                        />
                      </IconButton>
                      <IconButton title="Enregistrer">
                        <Bookmark
                          className="h-5 w-5"
                          style={{ color: BRAND.primary }}
                        />
                      </IconButton>
                      <IconButton title="Commenter">
                        <MessageCircle
                          className="h-5 w-5"
                          style={{ color: BRAND.primary }}
                        />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column posters */}
              <div className="relative hidden lg:block">
                {/* subtle patterned dark bg */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                />
                <div className="relative flex h-full flex-col gap-5 p-6">
                  {/* posters */}
                  <div className="relative h-[160px]">
                    <PosterThumb
                      src={data.side[0].img}
                      title={data.side[0].title}
                      accent={data.side[0].accent}
                    />
                  </div>
                  <div className="h-[170px]">
                    <PosterThumb
                      src={data.side[1].img}
                      title={data.side[1].title}
                      accent={data.side[1].accent}
                    />
                  </div>
                  <div className="h-[170px]">
                    <PosterThumb
                      src={data.side[2].img}
                      title={data.side[2].title}
                      accent={data.side[2].accent}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rounded corners mask */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
          </div>
        </div>
      </div>
    </section>
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
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="relative z-20 bg-black/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button className="rounded-full p-2 text-white/85 hover:bg-brand-cyan/15">
            <IconBurger className="h-6 w-6" />
          </button>

          <div className="select-none text-center">
            <div className="text-xl font-black tracking-widest">
              <span className="text-white">SERIE</span>
              <span
                className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
              >
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
          className="h-[500px] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero.png)",
          }}
        />
        <div className="absolute inset-0 absolute inset-0 bg-gradient-to-b from-brand-wine/30 via-black/30 to-black" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full bg-transparent max-w-7xl flex-col items-center justify-center px-5 text-center">
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
                <div className="relative flex items-center gap-2 rounded-full bg-brand-dark/80 px-5 py-3 backdrop-blur">
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
      <main className="mx-auto max-w-7xl space-y-14 px-5 py-10">
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
                <PosterCard
                  total={demoPostersMoment.length}
                  key={p.id}
                  item={p}
                  index={idx + 1}
                  showIndex
                />
              ))}
            </div>
            <div className="-translate-y-10 flex gap-4 bg-gradient-to-b from-black/10 via-black/50 to-black">
              <PosterNumbers total={demoPostersMoment.length} />
            </div>
          </div>
        </section>

        {/* Blocs pub */}
        <section className="space-y-6">
          <AdBlock label="Image + lien" />
          <AdBlock label="PUB" />
        </section>

        {/* Nouveautés séries */}
        <NewReleasesSection />
        {/* <section>
          <SectionHeader
            title="LES NOUVEAUTÉS SÉRIES"
            rightLabel="TOUTES LES NOUVEAUTÉS SÉRIES"
          />
          <FeatureNewRelease />
        </section> */}

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
                <span
                  className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
                >
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
        <div className="mx-auto max-w-7xl px-5 text-center">
          <div className="select-none text-2xl font-black tracking-widest">
            <span className="text-white">SERIE</span>
            <span
              className={`${BRAND_GRADIENT_TEXT} bg-clip-text text-transparent`}
            >
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
