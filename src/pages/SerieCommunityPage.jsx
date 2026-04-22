import { useState } from "react";
import {
  ChevronLeft,
  Users,
  MessageCircle,
  Heart,
  Share2,
  MoreHorizontal,
  Send,
  TrendingUp,
  Clock,
  Image as ImageIcon,
  Link as LinkIcon,
  Smile,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const SERIES = {
  title: "STRANGER THINGS",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  communitySize: "45.2K",
  onlineNow: "1,247",
};

const DISCUSSIONS = [
  {
    id: 1,
    author: "ElevenFan",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    title: "Theories sur la fin de la saison 5",
    content:
      "Je pense que le personnage de [SPOILER] va jouer un role crucial dans la bataille finale. Les indices dans la saison 4 sont trop importants pour etre ignores.",
    likes: 342,
    comments: 89,
    time: "Il y a 2 heures",
    trending: true,
    tags: ["Theories", "SPOILER", "Saison 5"],
  },
  {
    id: 2,
    author: "Hawkins1986",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    title: "Les references aux annees 80 sont incroyables",
    content:
      "J'adore comment les createurs ont recree l'ambiance des annees 80. Le detail du centre commercial Starcourt est juste parfait !",
    likes: 218,
    comments: 45,
    time: "Il y a 5 heures",
    trending: false,
    tags: ["Annee 80", "Decors"],
  },
  {
    id: 3,
    author: "UpsideDown",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    title: "Vos persos preferes ?",
    content:
      "Pour moi, c'est Steve. Son evolution de l'ado insupportable au babysitter heroique est l'une des meilleures arcs de la serie.",
    likes: 567,
    comments: 234,
    time: "Il y a 8 heures",
    trending: true,
    tags: ["Personnages", "Discussion"],
  },
];

const MEMBERS = [
  {
    id: 1,
    name: "Sarah",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    badge: "VIP",
  },
  {
    id: 2,
    name: "Mike",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    badge: null,
  },
  {
    id: 3,
    name: "Lucas",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    badge: "Moderateur",
  },
  {
    id: 4,
    name: "Dustin",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    badge: null,
  },
  {
    id: 5,
    name: "Will",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80",
    badge: "Expert",
  },
];

function GradientRing({
  radiusClass = "rounded-2xl",
  thickness = 2,
  glow = false,
  hoverGlow = false,
  className = "",
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

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function DiscussionCard({ discussion }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={discussion.avatar}
              alt={discussion.author}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
            />
            {discussion.trending && (
              <div className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-brand-primary text-white">
                <TrendingUp className="h-3 w-3" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">
                {discussion.author}
              </span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/50">{discussion.time}</span>
            </div>
            <h3 className="mt-1 text-base font-bold text-white">
              {discussion.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {discussion.content}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {discussion.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition hover:text-brand-cyan">
                <Heart className="h-4 w-4" />
                {discussion.likes}
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition hover:text-brand-cyan">
                <MessageCircle className="h-4 w-4" />
                {discussion.comments}
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition hover:text-brand-cyan">
                <Share2 className="h-4 w-4" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CreatePost() {
  return (
    <div className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={2} />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
            alt="You"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="min-w-0 flex-1">
            <textarea
              placeholder="Lancer une discussion avec la communaute..."
              className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-brand-cyan/50"
              rows={3}
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="grid h-9 w-9 place-items-center rounded-full text-white/40 transition hover:bg-white/5 hover:text-white">
                  <ImageIcon className="h-4 w-4" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full text-white/40 transition hover:bg-white/5 hover:text-white">
                  <LinkIcon className="h-4 w-4" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full text-white/40 transition hover:bg-white/5 hover:text-white">
                  <Smile className="h-4 w-4" />
                </button>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]">
                <Send className="h-4 w-4" />
                Publier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SerieCommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Communaute
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {SERIES.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-white/70">
                {SERIES.onlineNow} en ligne
              </span>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              <Users className="h-4 w-4" />
              Rejoindre
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <CreatePost />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                  Tout
                </button>
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70">
                  Populaire
                </button>
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70">
                  Recent
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {DISCUSSIONS.map((discussion) => (
                <DiscussionCard key={discussion.id} discussion={discussion} />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing
                radiusClass="rounded-[28px]"
                thickness={2}
                glow
                hoverGlow
              />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <div className="relative aspect-[2/3] overflow-hidden rounded-[20px]">
                  <img
                    src={SERIES.poster}
                    alt={SERIES.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-center">
                      <p className="text-2xl font-black text-white">
                        {SERIES.communitySize}
                      </p>
                      <p className="text-xs text-white/60">membres</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Membres actifs
                </h3>
                <div className="mt-4 flex -space-x-2">
                  {MEMBERS.map((member) => (
                    <div key={member.id} className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-dark"
                      />
                      {member.badge && (
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-brand-cyan" />
                      )}
                    </div>
                  ))}
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white ring-2 ring-brand-dark">
                    +42
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px]">
              <GradientRing radiusClass="rounded-[28px]" thickness={1.5} />
              <div className="relative rounded-[28px] bg-brand-dark/55 p-5 backdrop-blur">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Regles de la communaute
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan">1.</span>
                    Respectez les autres membres
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan">2.</span>
                    Utilisez les balises spoiler
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan">3.</span>
                    Pas de spoilers sans avertissement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan">4.</span>
                    Restez sur le sujet de la serie
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
