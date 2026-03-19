import { useNavigate } from "react-router-dom";
import {
  Play,
  PlayCircle,
  ChevronRight,
  Bookmark,
  Share2,
  Clock3,
  Flame,
  Volume2,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const BRAND_GRADIENT_TEXT = "bg-gradient-to-r from-brand-primary to-brand-cyan";
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const featuredTrailer = {
  id: 1,
  title: "Dexter: Original Sin",
  subtitle: "Teaser officiel",
  type: "Teaser",
  duration: "1:42",
  thumbnail:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
};

const trailers = [
  {
    id: 2,
    title: "Tracker",
    subtitle: "Extrait officiel",
    type: "Extrait",
    duration: "0:58",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Elsbeth",
    subtitle: "Trailer saison 1",
    type: "Trailer",
    duration: "1:21",
    thumbnail:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Found",
    subtitle: "Teaser officiel",
    type: "Teaser",
    duration: "0:47",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "High Potential",
    subtitle: "Trailer",
    type: "Trailer",
    duration: "1:11",
    thumbnail:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Matlock",
    subtitle: "Bande-annonce",
    type: "Trailer",
    duration: "1:09",
    thumbnail:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Brilliant Minds",
    subtitle: "Extrait",
    type: "Extrait",
    duration: "0:51",
    thumbnail:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
  },
];

function GradientRing({
  radiusClass = "rounded-2xl",
  thickness = 2,
  glow = false,
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

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-5 flex items-end justify-between">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] ${ACCENT_GRADIENT} rounded-full`} />
        <h2 className="text-lg font-semibold tracking-wide text-white">
          {title}
        </h2>
      </div>

      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function QueueCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl text-left"
    >
      <GradientRing radiusClass="rounded-2xl" thickness={1.5} />
      <GradientRing radiusClass="rounded-2xl" thickness={1.5} glow hoverGlow />

      <div className="relative rounded-2xl bg-brand-dark/55 p-3 backdrop-blur">
        <div className="flex gap-3">
          <div className="relative h-22 w-32 shrink-0 overflow-hidden rounded-xl">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-black/40 backdrop-blur">
                <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-brand-cyan/20 bg-black/30 px-2.5 py-1 text-[10px] font-semibold text-white/80">
                {item.type}
              </span>
              <span className="text-[11px] text-white/55">{item.duration}</span>
            </div>

            <h3 className="mt-3 line-clamp-1 text-sm font-bold text-white group-hover:text-brand-cyan">
              {item.title}
            </h3>
            <p className="mt-1 line-clamp-1 text-xs text-white/55">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function VideoCard({ item, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl"
    >
      <GradientRing radiusClass="rounded-3xl" thickness={2} />
      <GradientRing radiusClass="rounded-3xl" thickness={2} glow hoverGlow />

      <div className="relative rounded-3xl bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur">
              {item.type}
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white/70 backdrop-blur">
              {item.duration}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-black/35 ring-1 ring-white/10 backdrop-blur-md transition duration-300 group-hover:scale-110">
              <Play className="ml-1 h-6 w-6 fill-white text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="line-clamp-1 text-base font-extrabold text-white">
              {item.title}
            </h3>
            <p className="mt-1 line-clamp-1 text-xs text-white/60">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TrailersPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[380px] w-[380px] rounded-full bg-brand-wine/20 blur-3xl" />
      </div>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 pt-4 pb-10">
          <div className="grid gap-6 lg:grid-cols-[1.45fr_0.78fr]">
            <div className="group relative overflow-hidden rounded-[30px]">
              <div className="relative rounded-[30px] bg-brand-dark/55 backdrop-blur">
                <div className="relative overflow-hidden rounded-[30px]">
                  <img
                    src={featuredTrailer.thumbnail}
                    alt={featuredTrailer.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/85" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[11px] font-semibold text-white/70 backdrop-blur">
                      <Volume2 className="h-4 w-4 text-brand-cyan" />
                      {featuredTrailer.duration}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group/play relative flex h-24 w-24 items-center justify-center rounded-full bg-black/35 ring-1 ring-white/15 backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-black/45">
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
                      <PlayCircle className="h-10 w-10 text-white transition-transform duration-300 group-hover/play:scale-110" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80">
                        {featuredTrailer.type}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/70">
                        <Clock3 className="h-3.5 w-3.5 text-brand-cyan" />
                        {featuredTrailer.duration}
                      </span>
                    </div>

                    <h1 className="mt-4 text-2xl font-extrabold md:text-4xl">
                      {featuredTrailer.title}
                    </h1>
                    <p className="mt-2 text-sm text-white/65">
                      {featuredTrailer.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="group relative overflow-hidden rounded-[30px]">
              <GradientRing radiusClass="rounded-[30px]" thickness={2} />
              <GradientRing
                radiusClass="rounded-[30px]"
                thickness={2}
                glow
                hoverGlow
              />

              <div className="relative rounded-[30px] bg-brand-dark/55 p-5 backdrop-blur">
                <SectionHeader
                  title="NEXT"
                  rightLabel="ALL"
                  onRightClick={() => navigate("/trailers/all")}
                />

                <div className="space-y-4">
                  {trailers.slice(0, 4).map((item) => (
                    <QueueCard
                      key={item.id}
                      item={item}
                      onClick={() => navigate(`/trailers/${item.id}`)}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <section>
          <SectionHeader
            title="VIDEOS"
            rightLabel="SEE ALL"
            onRightClick={() => navigate("/trailers/all")}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trailers.map((item) => (
              <VideoCard
                key={item.id}
                item={item}
                onClick={() => navigate(`/trailers/${item.id}`)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
