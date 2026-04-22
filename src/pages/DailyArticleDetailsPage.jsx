import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  User,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Facebook,
  Twitter,
  Link as LinkIcon,
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

const ARTICLE = {
  id: 1,
  title: "Stranger Things : La fin d'une ere",
  subtitle:
    "Avec la saison 5 qui marquera la conclusion de la serie, revenons sur ce qui a fait de Stranger Things un phenomene culturel sans precedent dans l'histoire de Netflix.",
  author: "Charlotte Martin",
  authorBio:
    "Redactrice en chef et critique de series. Passionnee par les recits qui defient les conventions.",
  authorAvatar: "C",
  date: "26 fevrier 2026",
  readTime: "8 min",
  category: "Edito",
  image:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  likes: 245,
  comments: 34,
  shares: 89,
};

const RELATED_ARTICLES = [
  {
    id: 2,
    title: "Les series qui ont marque 2025",
    excerpt:
      "Retour sur les productions qui ont fait parler d'elles cette annee.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    readTime: "5 min",
  },
  {
    id: 3,
    title: "L'evolution du streaming en 2026",
    excerpt:
      "Comment les plateformes s'adaptent aux nouvelles habitudes des spectateurs.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Les musiques de series cultes",
    excerpt: "Quand les bandes-son deviennent des hits a part entiere.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
    readTime: "5 min",
  },
];

const COMMENTS = [
  {
    id: 1,
    author: "Lucas",
    avatar: "L",
    content:
      "Excellent article ! Je suis totalement d'accord avec l'analyse sur l'importance de la nostalgie dans le succes de la serie.",
    time: "Il y a 2 heures",
    likes: 12,
  },
  {
    id: 2,
    author: "Sarah",
    avatar: "S",
    content:
      "Personnellement, j'ai prefere les deux premieres saisons. La troisieme m'a semble un peu moins reussie.",
    time: "Il y a 4 heures",
    likes: 8,
  },
];

const ARTICLE_CONTENT = `
Depuis son arrivee sur Netflix en 2016, Stranger Things a revolutionne notre facon de consommer les series. En melangeant habilement la nostalgie des annees 80, les references a la pop culture de l'epoque, et une intrigue captivante melant science-fiction et horreur, les freres Duffer ont cree quelque chose de veritablement unique.

## Un phenomene mondial

Avec plus de 140 millions de comptes ayant visionne au moins un episode, Stranger Things est devenue la serie la plus populaire de l'histoire de Netflix. Mais au-dela des chiffres, c'est l'impact culturel qui est le plus impressionnant. Des produits derives aux conventions cosplay, en passant par les hommages dans d'autres productions, l'univers de Hawkins a transcendé l'ecran pour s'imposer dans notre realite quotidienne.

## Une alchimie parfaite

Le succes de Stranger Things repose sur plusieurs piliers solides :

- **Le casting** : La performance des jeunes acteurs, notamment Millie Bobby Brown dans le role d'Eleven, a immediatement captive le public.
- **L'ambiance** : La reconstitution minutieuse des annees 80, des vetements aux references musicales, cree une immersion totale.
- **La mythologie** : L'Upside Down et ses creatures offrent un lore riche qui recompense les spectateurs attentifs.

## L'heritage

Alors que nous attendons avec impatience la saison 5, il est deja evident que Stranger Things a ouvert la voie a une nouvelle generation de series melant adolescence et elements surnaturels. Des projets comme "The End of the F***ing World" ou "I Am Not Okay with This" doivent beaucoup a l'heritage de Hawkins.

La conclusion de cette saga nous permettra de mesurer pleinement l'impact de cette serie sur la television moderne. Une chose est sure : l'Upside Down ne disparaitra pas de nos memoires de sitot.
`;

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

function ArticleCard({ article }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-[24px]">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="line-clamp-2 text-base font-bold text-white">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/60">
            {article.excerpt}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </div>
        </div>
      </div>
    </article>
  );
}

function CommentCard({ comment }) {
  return (
    <div className="relative rounded-[20px] bg-white/5 p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-sm font-bold text-white">
          {comment.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">{comment.author}</span>
            <span className="text-xs text-white/40">{comment.time}</span>
          </div>
          <p className="mt-1 text-sm text-white/70">{comment.content}</p>
          <div className="mt-3 flex items-center gap-4">
            <button className="inline-flex items-center gap-1.5 text-xs text-white/50 transition hover:text-brand-cyan">
              <ThumbsUp className="h-3.5 w-3.5" />
              {comment.likes}
            </button>
            <button className="text-xs text-white/50 transition hover:text-white">
              Repondre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DailyArticleDetailsPage() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-5 py-8">
        <div className="mb-6 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-brand-primary/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {ARTICLE.category}
            </span>
          </div>
        </div>

        <div className="group relative mb-8 overflow-hidden rounded-[32px]">
          <GradientRing radiusClass="rounded-[32px]" thickness={3} glow />
          <div className="relative rounded-[32px] bg-brand-dark/55 backdrop-blur">
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-[32px]">
              <img
                src={ARTICLE.image}
                alt={ARTICLE.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl lg:text-4xl">
          {ARTICLE.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          {ARTICLE.subtitle}
        </p>

        <div className="mt-6 flex items-center justify-between border-y border-white/10 py-4">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-lg font-bold text-white">
              {ARTICLE.authorAvatar}
            </div>
            <div>
              <p className="font-semibold text-white">{ARTICLE.author}</p>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Calendar className="h-3 w-3" />
                {ARTICLE.date}
                <span>•</span>
                <Clock className="h-3 w-3" />
                {ARTICLE.readTime}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition ${
                liked
                  ? "border-brand-primary bg-brand-primary/20 text-brand-primary"
                  : "border-white/10 text-white/60 hover:bg-white/5"
              }`}
            >
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition ${
                bookmarked
                  ? "border-brand-cyan bg-brand-cyan/20 text-brand-cyan"
                  : "border-white/10 text-white/60 hover:bg-white/5"
              }`}
            >
              <Bookmark className="h-4 w-4" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/5">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {ARTICLE_CONTENT.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="mt-8 text-xl font-bold text-white">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul
                  key={idx}
                  className="list-disc space-y-2 pl-5 text-white/70"
                >
                  {paragraph.split("\n").map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: item
                          .replace("- ", "")
                          .replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-white">$1</strong>',
                          ),
                      }}
                    />
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="leading-relaxed text-white/70">
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 border-t border-white/10 pt-8">
          <span className="text-sm text-white/50">Partager :</span>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-[#1877F2]/20 text-[#1877F2] transition hover:scale-105">
            <Facebook className="h-4 w-4" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-[#1DA1F2]/20 text-[#1DA1F2] transition hover:scale-105">
            <Twitter className="h-4 w-4" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:scale-105">
            <LinkIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
            <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
              Commentaires ({ARTICLE.comments})
            </h3>
          </div>
          <div className="space-y-4">
            {COMMENTS.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="relative mt-4 rounded-[20px] p-[1px]">
            <div
              className={`absolute inset-0 rounded-[20px] ${ACCENT_GRADIENT} opacity-40`}
            />
            <textarea
              placeholder="Ajouter un commentaire..."
              rows={3}
              className="relative w-full resize-none rounded-[20px] bg-brand-dark/80 p-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                Articles similaires
              </h3>
            </div>
            <button className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white">
              Voir tout
              <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
