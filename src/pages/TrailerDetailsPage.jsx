import React from "react";
import {
  Play,
  Volume2,
  Heart,
  Bookmark,
  Share2,
  Plus,
  ChevronRight,
  Send,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
  black: "#000000",
};

const mainTrailer = {
  title: "Tracker",
  subtitle: "Trailer Saison 2",
  meta: "CBS • 2:14",
  image:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
};

const sameUniverse = [
  {
    id: 1,
    title: "Official Trailer",
    type: "Trailer",
    duration: "2:14",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
    active: true,
  },
  {
    id: 2,
    title: "Teaser",
    type: "Teaser",
    duration: "0:49",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Sneak Peek",
    type: "Preview",
    duration: "1:07",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000&q=80",
  },
];

const related = [
  {
    id: 1,
    title: "The Boys",
    subtitle: "New trailer",
    duration: "2:02",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Severance",
    subtitle: "Season preview",
    duration: "1:44",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Reacher",
    subtitle: "Official trailer",
    duration: "2:21",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Silo",
    subtitle: "New footage",
    duration: "1:16",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

const comments = [
  {
    id: 1,
    user: "Lucas",
    time: "2h",
    text: "The cinematography looks insane this season.",
  },
  {
    id: 2,
    user: "Emma",
    time: "4h",
    text: "Tracker keeps getting better every year.",
  },
  {
    id: 3,
    user: "Nina",
    time: "7h",
    text: "The soundtrack already sold me.",
  },
];

function Badge({ children, active = false }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]",
        active
          ? "border-white/20 bg-white/10 text-white"
          : "border-white/10 bg-white/[0.04] text-white/60",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function SectionHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span
          className="h-[2px] w-8 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`,
          }}
        />
        <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-white">
          {title}
        </h2>
      </div>

      {action ? (
        <button className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition hover:text-white">
          {action}
          <ChevronRight className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

function GradientFrame({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] p-[1px] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(132,29,79,.45), rgba(30,108,134,.28), rgba(255,255,255,.06))",
      }}
    >
      <div className="rounded-[27px] border border-white/8 bg-[rgba(1,25,33,.68)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

function QueueItem({ item }) {
  return (
    <button className="group w-full text-left">
      <div
        className={[
          "flex gap-4 rounded-[22px] px-0 py-3 transition duration-300",
          item.active ? "bg-transparent" : "bg-transparent",
        ].join(" ")}
      >
        <div className="relative w-36 shrink-0 overflow-hidden rounded-2xl">
          <div className="aspect-video">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition duration-300 group-hover:scale-105">
              <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 py-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge active={item.active}>
              {item.active ? "Now" : item.type}
            </Badge>
            <span className="text-xs text-white/60">{item.duration}</span>
          </div>

          <h3 className="line-clamp-2 text-base font-bold text-white">
            {item.title}
          </h3>
        </div>
      </div>
    </button>
  );
}

function VideoTile({ item }) {
  return (
    <button className="group block w-full text-left">
      <div className="relative overflow-hidden rounded-[24px]">
        <div className="aspect-[16/10]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.04)_0%,rgba(0,0,0,.18)_45%,rgba(0,0,0,.88)_100%)]" />

        <div className="absolute left-4 top-4">
          <Badge>{item.subtitle}</Badge>
        </div>

        <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {item.duration}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:opacity-100">
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-base font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-white/60">{item.subtitle}</p>
        </div>
      </div>
    </button>
  );
}

function Avatar({ letter }) {
  return (
    <div
      className="shrink-0 rounded-full p-[1px]"
      style={{
        background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.cyan})`,
      }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03070F] text-xs font-bold text-white">
        {letter}
      </div>
    </div>
  );
}

function CommentRow({ item }) {
  return (
    <div className="flex gap-4">
      <Avatar letter={item.user.charAt(0)} />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="font-semibold text-white">{item.user}</span>
          <span>•</span>
          <span>{item.time}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default function TrailerDetailsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(circle at 8% 10%, rgba(132,29,79,.18), transparent 22%),
            radial-gradient(circle at 88% 14%, rgba(30,108,134,.16), transparent 24%),
            radial-gradient(circle at 70% 76%, rgba(60,10,34,.16), transparent 22%),
            linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,0) 100%)
          `,
        }}
      />

      <main className="relative mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 xl:px-8">
        <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-6">
            <GradientFrame>
              <div className="relative overflow-hidden rounded-[27px]">
                <div className="relative aspect-[16/9]">
                  <img
                    src={mainTrailer.image}
                    alt={mainTrailer.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.22)_35%,rgba(0,0,0,.88)_100%)]" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,.12) 45%, rgba(0,0,0,.38) 100%)",
                    }}
                  />

                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition hover:scale-105">
                      <Volume2 className="h-4.5 w-4.5" />
                    </button>
                    <Badge active>Featured</Badge>
                  </div>

                  <div className="absolute right-5 top-5 hidden items-center gap-2 md:flex">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="group relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 hover:scale-105"
                      style={{
                        boxShadow: "0 0 40px rgba(30,108,134,.18)",
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          boxShadow:
                            "0 0 0 1px rgba(132,29,79,.30), 0 0 30px rgba(30,108,134,.22)",
                        }}
                      />
                      <Play className="ml-1 h-10 w-10 fill-white text-white transition duration-300 group-hover:scale-110" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 lg:p-8">
                    <div className="max-w-3xl">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <Badge active>New Drop</Badge>
                        <Badge>Saison 2</Badge>
                        <Badge>CBS</Badge>
                      </div>

                      <h1 className="text-3xl font-extrabold uppercase tracking-[0.04em] text-white sm:text-5xl">
                        {mainTrailer.title}
                      </h1>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                        <span>{mainTrailer.subtitle}</span>
                        <span className="text-white/30">•</span>
                        <span>{mainTrailer.meta}</span>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button
                          className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition hover:scale-[1.02]"
                          style={{
                            background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`,
                            boxShadow: "0 14px 34px rgba(30,108,134,.22)",
                          }}
                        >
                          <Play className="h-4 w-4 fill-white text-white" />
                          Watch now
                        </button>

                        <button className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm text-white/80 transition hover:bg-white/[0.08]">
                          <Plus className="h-4 w-4" />
                          Queue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GradientFrame>
          </div>

          <aside className="xl:sticky xl:top-6 xl:self-start">
            <div className="px-1">
              <SectionHeader title="Watch Queue" />
            </div>

            <div className="mt-4 space-y-1 border-l border-white/10 pl-4">
              {sameUniverse.map((item, index) => (
                <div key={item.id} className="relative">
                  <div
                    className="absolute -left-[21px] top-8 h-2.5 w-2.5 rounded-full border border-white/20 bg-black"
                    style={{
                      boxShadow: item.active
                        ? `0 0 0 3px rgba(30,108,134,.18), 0 0 18px rgba(30,108,134,.28)`
                        : "none",
                      backgroundColor: item.active ? BRAND.cyan : "#0B1220",
                    }}
                  />
                  <QueueItem item={item} />
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-12 space-y-5">
          <SectionHeader title="Watch Also" action="More" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <VideoTile key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-5">
          <SectionHeader title="Comments" />

          <GradientFrame>
            <div className="p-6">
              <div className="border-b border-white/10 pb-6">
                <div className="flex gap-4">
                  <div>
                    <Avatar letter="Y" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <textarea
                      rows="3"
                      placeholder="Add a public comment..."
                      className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-white/25"
                    />

                    <div className="flex justify-end">
                      <button
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
                        style={{
                          background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`,
                        }}
                      >
                        <Send className="h-4 w-4" />
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {comments.map((item) => (
                  <CommentRow key={item.id} item={item} />
                ))}
              </div>
            </div>
          </GradientFrame>
        </section>
      </main>
    </div>
  );
}
