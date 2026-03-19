import React from "react";
import {
  Menu,
  Search,
  Bell,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
  ChevronRight,
  Play,
  Clock3,
  Tag,
  Send,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
  black: "#000000",
};

const GRADIENT = "linear-gradient(90deg, #841D4F 0%, #1E6C86 100%)";
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-[#841D4F] via-[#3C0A22] to-[#1E6C86]";
const BRAND_GRADIENT_TEXT =
  "bg-gradient-to-r from-[#841D4F] to-[#1E6C86] bg-clip-text text-transparent";

const article = {
  breadcrumb: [
    "SeriesAddict",
    "News séries",
    "Apple TV annule Palm Royale après deux saisons",
  ],
  title: "APPLE TV ANNULE PALM ROYALE APRÈS DEUX SAISONS",
  image:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  author: "Charlotte Pappel",
  date: "5 mars 2026 à 17:43",
  source: "TV Line",
  copyright: "Copyright 2025 - Apple TV",
  category: "ANNULATION",
  linkedSeries: "Palm Royale",
  intro:
    "La série Palm Royale, portée par l’actrice Kristen Wiig, ne reviendra pas pour une troisième saison. Apple TV a décidé de mettre fin à la comédie dramatique après seulement deux saisons, mettant ainsi un terme à l’histoire située dans la haute société de Palm Beach.",
  paragraphs: [
    "Créée par Abe Sylvia, la série se déroule à la fin des années 1960 et suit Maxine Dellacorte-Simmons, une femme déterminée à intégrer le cercle très fermé de l’élite de Palm Beach et son prestigieux club, le Palm Royale. La série était librement adaptée du roman Mr. & Mrs. American Pie de Juliet McDaniel.",
    "Diffusée pour la première fois en mars 2024, la série avait été renouvelée pour une deuxième saison en 2024, dont la diffusion a débuté en novembre 2025. Malgré son casting prestigieux — incluant notamment Laura Dern, Allison Janney, Ricky Martin, Josh Lucas et Leslie Bibb — Apple TV a finalement choisi de ne pas poursuivre l’aventure.",
    "Heureusement, le finale de la saison 2 offre une conclusion relativement satisfaisante, ce qui permet à la série de se terminer sans cliffhanger majeur malgré son annulation.",
    "Au total, Palm Royale comptera 20 épisodes répartis sur deux saisons, désormais disponibles sur Apple TV.",
  ],
};

const impressions = [
  { id: 1, emoji: "😍", count: 6, active: true },
  { id: 2, emoji: "😮", count: 3 },
  { id: 3, emoji: "😂", count: 2 },
  { id: 4, emoji: "😢", count: 1 },
  { id: 5, emoji: "😡", count: 0 },
  { id: 6, emoji: "👏", count: 4 },
  { id: 7, emoji: "🔥", count: 2 },
  { id: 8, emoji: "🤯", count: 1 },
];

const sameCategory = {
  title: "Toutes les séries renouvelées en 2024",
  author: "Charlotte",
  image:
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
};

const readAlso = [
  {
    id: 1,
    title:
      "Vague de renouvellements : Dark Winds, Happy’s Place, St. Denis Medical et A Man on the Inside prolongées",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    author: "Charlotte",
  },
  {
    id: 2,
    title: "Apple TV annonce les dates de Sugar saison 2, Cape Fear et Lucky",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80",
    author: "Charlotte",
  },
  {
    id: 3,
    title:
      "Apple TV fixe le retour de Criminal Record, Prime Video dévoile Elle, le préquel de Legally Blonde",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
    author: "Charlotte",
  },
  {
    id: 4,
    title:
      "Love Story, The Testaments et Something Very Bad Is Going to Happen : trois nouvelles séries",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
    author: "Charlotte",
  },
];

const postedComments = [
  {
    id: 1,
    author: "Nadia",
    avatar: "N",
    time: "Il y a 2 heures",
    reaction: "😢",
    content:
      "Franchement dommage. La série n’était pas parfaite, mais elle avait une vraie personnalité visuelle et un ton différent de ce qu’on voit d’habitude.",
    likes: 12,
  },
  {
    id: 2,
    author: "Kévin",
    avatar: "K",
    time: "Il y a 5 heures",
    reaction: "😮",
    content:
      "Je pensais vraiment qu’Apple TV allait lui laisser une saison de plus. Avec ce casting, je suis surpris qu’ils arrêtent maintenant.",
    likes: 7,
  },
  {
    id: 3,
    author: "Sonia",
    avatar: "S",
    time: "Hier à 21:14",
    reaction: "👏",
    content:
      "Au moins la saison 2 donne une vraie conclusion. C’est frustrant, mais pire aurait été une annulation avec un énorme cliffhanger.",
    likes: 18,
  },
];

function Badge({ children, active = false }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]",
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
          style={{ background: GRADIENT }}
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
          "linear-gradient(135deg, rgba(132,29,79,.42), rgba(30,108,134,.28), rgba(255,255,255,.06))",
      }}
    >
      <div className="rounded-[27px] border border-white/8 bg-[rgba(1,25,33,.68)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 xl:px-8">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/[0.06]">
            <Menu className="h-4 w-4" />
            Menu
          </button>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
            <Bell className="h-4 w-4 text-[#1E6C86]" />
            <span>Notifications</span>
          </div>
        </div>

        <div className="text-center text-xl font-black tracking-[0.2em]">
          <span className="text-white">SERIE</span>
          <span className={BRAND_GRADIENT_TEXT}>ADDICT</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-[#841D4F]/40 bg-[#841D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white md:block">
            Devenez VIP
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.06] hover:text-white">
            <Search className="h-4 w-4" />
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 xl:px-8">
      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/35">
        {article.breadcrumb.map((item, index) => (
          <React.Fragment key={item}>
            <span
              className={
                index === article.breadcrumb.length - 1
                  ? "text-[#d86b8c]"
                  : "text-white/35"
              }
            >
              {item}
            </span>
            {index < article.breadcrumb.length - 1 && (
              <ChevronRight className="h-3.5 w-3.5 opacity-40" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function HeroArticle() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 xl:px-8">
      <div className="relative overflow-hidden rounded-[34px] border border-white/8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.15)_0%,rgba(0,0,0,.40)_40%,rgba(0,0,0,.92)_100%)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(132,29,79,.16), transparent 28%), radial-gradient(circle at top right, rgba(30,108,134,.14), transparent 24%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl flex-col justify-end px-6 pb-8 pt-10 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge active>News séries</Badge>
              <Badge>{article.category}</Badge>
              <Badge>Apple TV</Badge>
            </div>

            <h1 className="text-3xl font-extrabold uppercase tracking-[0.03em] text-white sm:text-4xl xl:text-6xl">
              {article.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm">
              <span>{article.author}</span>
              <span className="text-white/30">•</span>
              <span>{article.date}</span>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
              {article.intro}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition hover:scale-[1.02]"
              style={{
                background: GRADIENT,
                boxShadow: "0 14px 34px rgba(30,108,134,.22)",
              }}
            >
              <Play className="h-4 w-4 fill-white text-white" />
              Voir la série liée
            </button>

            <button className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm text-white/80 transition hover:bg-white/[0.08]">
              <Heart className="h-4 w-4" />
              J’aime
            </button>

            <button className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm text-white/80 transition hover:bg-white/[0.08]">
              <Bookmark className="h-4 w-4" />
              Sauvegarder
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-white/45">
        <span>{article.copyright}</span>
        <span>
          Source : <span className="text-[#d86b8c]">{article.source}</span>
        </span>
      </div>
    </section>
  );
}

function ReactionPanel() {
  return (
    <GradientFrame>
      <div className="p-5">
        <SectionHeader title="Votre impression" />
        <p className="mt-3 text-sm leading-6 text-white/60">
          Réagissez rapidement à cette news.
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {impressions.map((item) => (
            <button
              key={item.id}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition duration-300",
                item.active
                  ? "border-white/18 bg-white/10 text-white"
                  : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/18 hover:bg-white/[0.08]",
              ].join(" ")}
            >
              <span className="text-base">{item.emoji}</span>
              <span className="text-xs font-semibold">{item.count}</span>
            </button>
          ))}
        </div>
      </div>
    </GradientFrame>
  );
}

function AboutNewsPanel() {
  return (
    <GradientFrame>
      <div className="p-5">
        <SectionHeader title="À propos de cette news" />

        <div className="mt-5 space-y-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full border border-white/10 bg-white/[0.04] p-2">
              <Clock3 className="h-4 w-4 text-[#1E6C86]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {article.author}
              </p>
              <p className="mt-1 text-xs text-white/50">{article.date}</p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Catégorie
            </p>
            <Badge active>{article.category}</Badge>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Série liée à cette news
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#8eddf4]">
              <Tag className="h-4 w-4 text-[#1E6C86]" />
              {article.linkedSeries}
            </button>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Actions
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                <Heart className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                <Bookmark className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/75 transition hover:scale-105 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </GradientFrame>
  );
}

function SameCategoryPanel() {
  return (
    <GradientFrame>
      <div className="p-5">
        <SectionHeader title="Dans la même catégorie" />

        <button className="group mt-5 block w-full text-left">
          <div className="relative overflow-hidden rounded-[24px]">
            <div className="aspect-[16/10]">
              <img
                src={sameCategory.image}
                alt={sameCategory.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.06)_0%,rgba(0,0,0,.18)_40%,rgba(0,0,0,.88)_100%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-sm font-bold leading-6 text-white">
                {sameCategory.title}
              </h3>

              <div className="mt-3 flex items-center gap-3 text-xs text-white/55">
                <div
                  className="h-7 w-7 rounded-full"
                  style={{ background: GRADIENT }}
                />
                <span>{sameCategory.author}</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </GradientFrame>
  );
}

function ReadAlsoCard({ item }) {
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.04)_0%,rgba(0,0,0,.18)_45%,rgba(0,0,0,.92)_100%)]" />

        <div className="absolute left-4 top-4">
          <Badge>News</Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-sm font-bold leading-6 text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-xs text-white/60">{item.author}</p>
        </div>
      </div>
    </button>
  );
}

function CommentItem({ comment }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(132,29,79,.95), rgba(30,108,134,.95))",
          }}
        >
          {comment.avatar}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-white">{comment.author}</p>
            <span className="text-white/25">•</span>
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">
              {comment.time}
            </p>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-white/70">
              {comment.reaction}
            </span>
          </div>

          <p className="mt-3 text-sm leading-7 text-white/72">
            {comment.content}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white">
              J’aime ({comment.likes})
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white">
              Répondre
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white">
              Signaler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function CommentComposer() {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        {postedComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <GradientFrame>
        <div className="p-6">
          <div className="rounded-[22px] border border-[#841D4F]/18 bg-[linear-gradient(90deg,rgba(132,29,79,.10),rgba(30,108,134,.04))] px-5 py-4 text-sm text-white/60">
            Rejoignez la discussion ou partagez votre avis sur cette news.
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/45">
                Pseudo
              </label>
              <input
                placeholder="Saisir un pseudo"
                className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/45">
                Email
              </label>
              <input
                placeholder="Vous pouvez aussi ajouter un email"
                className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03]">
            <div className="flex flex-wrap items-center gap-4 border-b border-white/10 px-4 py-3 text-sm text-white/55">
              <span className="font-semibold text-white/70">H1</span>
              <span>H2</span>
              <span>B</span>
              <span>I</span>
              <span>U</span>
              <span>•</span>
              <span>Liste</span>
            </div>

            <textarea
              rows="8"
              placeholder="Ajoutez votre commentaire ici..."
              className="w-full resize-none bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/40"
            />
          </div>

          <div className="mt-5 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex h-20 w-[300px] items-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white/60">
              Captcha
            </div>

            <button
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              style={{ background: GRADIENT }}
            >
              <Send className="h-4 w-4" />
              Commenter
            </button>
          </div>
        </div>
      </GradientFrame>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-5 sm:px-6 xl:px-8">
        <div>
          <div className="text-4xl font-bold tracking-tight text-white">
            SERIE<span className="text-[#ff4f93]">SADDICT</span>
          </div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-white/90">
            Le spécialiste des séries
          </p>
          <p className="mt-4 text-sm leading-6 text-white/55">
            Partageons ensemble notre passion des séries !
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            À propos de nous
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/55">
            <li>Équipe & recrutement</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Découvrez
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/55">
            <li>Calendrier des séries</li>
            <li>Nouvelles séries</li>
            <li>Shopping séries</li>
            <li>Streaming séries</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Utiliser SeriesAddict
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/55">
            <li>Aide</li>
            <li>CGU</li>
            <li>Cookies</li>
            <li>Données personnelles</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Newsletter
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/55">
            Pour rester au top de l’actualité des séries sans effort,
            abonnez-vous gratuitement à SeriesAddict Daily !
          </p>

          <div className="mt-5 flex overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
            <input
              placeholder="Votre email"
              className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
            />
            <button
              className="px-4 text-white"
              style={{ background: GRADIENT }}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/45">
        © 2010-2026 - <span className="text-[#ff4f93]">Series Addict</span> -
        Tous droits réservés.
      </div>
    </footer>
  );
}

export default function NewsArticleDetailsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(circle at 8% 10%, rgba(132,29,79,.16), transparent 22%),
            radial-gradient(circle at 88% 14%, rgba(30,108,134,.14), transparent 24%),
            radial-gradient(circle at 70% 76%, rgba(60,10,34,.14), transparent 22%),
            linear-gradient(180deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,0) 100%)
          `,
        }}
      />

      <div className="relative z-10">
        {/* <TopBar /> */}
        <Breadcrumb />
        <HeroArticle />

        <main className="mx-auto mt-10 max-w-7xl px-4 pb-20 sm:px-6 xl:px-8">
          <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-12">
              <div className="space-y-7 px-1 text-[15px] leading-8 text-white/72">
                {article.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <section className="space-y-5">
                <SectionHeader title="Annonces partenaires" />
                <GradientFrame>
                  <div className="h-28" />
                </GradientFrame>
              </section>

              <section className="space-y-5">
                <SectionHeader title="Lire aussi" action="Plus" />

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {readAlso.map((item) => (
                    <ReadAlsoCard key={item.id} item={item} />
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <SectionHeader title="Commentaires" />
                <CommentComposer />
              </section>
            </div>

            <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              <ReactionPanel />
              <AboutNewsPanel />
              <SameCategoryPanel />
            </aside>
          </section>
        </main>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
