import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Plus,
  Heart,
  Eye,
  Users,
  Star,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Clock,
  Calendar,
  Tv,
  Film,
  Trophy,
  Quote,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Image as ImageIcon,
  Newspaper,
  BookOpen,
  Globe,
  Hash,
  Clapperboard,
  Palette,
  MonitorPlay,
  Volume2,
  X,
  ArrowRight,
  User,
  Search,
} from "lucide-react";

// ============================================================
// Données mock
// ============================================================
const SERIES = {
  title: "Stranger Things",
  originalTitle: "Stranger Things",
  tagline: "L'été 1985 ne sera jamais le même.",
  years: "2016 - 2025",
  platform: "Netflix",
  age: "16+",
  runtime: "52 min",
  status: "En cours",
  seasons: 5,
  episodes: 42,
  avgEpisodeDuration: "52 min",
  country: "États-Unis",
  language: "Anglais",
  creators: ["Matt Duffer", "Ross Duffer"],
  studios: ["21 Laps Entertainment", "Monkey Massacre", "Netflix"],
  genres: ["Science-fiction", "Drame", "Horreur", "Mystère"],
  synopsis:
    "À Hawkins, dans l'Indiana, un jeune garçon de 12 ans disparaît mystérieusement. Ses amis, sa famille et le chef de police vont vivre une enquête haletante qui les mène vers des expériences gouvernementales secrètes, des forces surnaturelles terrifiantes et une petite fille aux pouvoirs extraordinaires.",
  universe:
    "Les années 1980, le Hawkins National Laboratory et le Monde à l'envers. Un univers où la nostalgie rencontre le surnaturel.",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  backdrop:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920&q=80",
  trailerUrl: "https://www.youtube.com/embed/b9EkMc79Z3U",
  communityScore: 9.2,
  fanCount: "145K",
  followers: 145320,
  platforms: ["Netflix", "Prime Video", "Apple TV+"],
};

const PROGRESS = {
  season: 3,
  episode: 5,
  totalEpisodes: 10,
  percentage: 80,
  lastEpisode: { code: "S03E05", title: "Le Nina Project" },
  nextEpisode: {
    code: "S03E06",
    title: "Le Bain de Eleven",
    synopsis:
      "Eleven tente de retrouver ses pouvoirs dans un sauna improvisé pendant que ses amis affrontent le Flayed.",
  },
  timeRemaining: "4h 20min",
  friendsWatching: ["Marc", "Sarah", "Lucas"],
};

const SEASONS = [
  {
    id: 1,
    number: 1,
    year: 2016,
    episodes: 8,
    score: 8.7,
    synopsis:
      "La disparition de Will Byers plonge Hawkins dans l'effroi. Onze et les garçons découvrent le Monde à l'envers.",
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    progress: 100,
  },
  {
    id: 2,
    number: 2,
    year: 2017,
    episodes: 9,
    score: 8.9,
    synopsis:
      "Hawkins tente de retrouver une vie normale, mais une entité plus sombre s'éveille à l'approche d'Halloween.",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=600&q=80",
    progress: 100,
  },
  {
    id: 3,
    number: 3,
    year: 2019,
    episodes: 8,
    score: 8.5,
    synopsis:
      "L'été 1985 bat son plein au centre commercial Starcourt, tandis qu'une créature se cache sous la ville.",
    poster:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=600&q=80",
    progress: 62,
  },
  {
    id: 4,
    number: 4,
    year: 2022,
    episodes: 9,
    score: 9.1,
    synopsis:
      "Six mois après la bataille de Starcourt, le groupe est séparé. Vecna, une nouvelle menace, frappe Hawkins.",
    poster:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
    progress: 0,
  },
  {
    id: 5,
    number: 5,
    year: 2025,
    episodes: 8,
    score: null,
    synopsis:
      "La saison finale. La guerre contre Vecna et le Monde à l'envers atteindra son apogée.",
    poster:
      "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=600&q=80",
    progress: 0,
    upcoming: true,
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Bande-annonce officielle",
    type: "Trailer",
    duration: "2:34",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    url: "https://www.youtube.com/embed/b9EkMc79Z3U",
  },
  {
    id: 2,
    title: "Teaser Saison 4",
    type: "Teaser",
    duration: "1:08",
    thumbnail:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=80",
    url: "https://www.youtube.com/embed/b9EkMc79Z3U",
  },
  {
    id: 3,
    title: "Making-of Hawkins",
    type: "Making-of",
    duration: "12:20",
    thumbnail:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
    url: "https://www.youtube.com/embed/b9EkMc79Z3U",
  },
  {
    id: 4,
    title: "Les Duffer Brothers en interview",
    type: "Interview",
    duration: "8:45",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    url: "https://www.youtube.com/embed/b9EkMc79Z3U",
  },
  {
    id: 5,
    title: "Featurette : Le Monde à l'envers",
    type: "Featurette",
    duration: "5:30",
    thumbnail:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=900&q=80",
    url: "https://www.youtube.com/embed/b9EkMc79Z3U",
  },
];

const CAST = [
  {
    id: 1,
    name: "Millie Bobby Brown",
    character: "Eleven",
    role: "Actrice principale",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Finn Wolfhard",
    character: "Mike Wheeler",
    role: "Acteur principal",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Winona Ryder",
    character: "Joyce Byers",
    role: "Actrice principale",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "David Harbour",
    character: "Jim Hopper",
    role: "Acteur principal",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Gaten Matarazzo",
    character: "Dustin Henderson",
    role: "Acteur principal",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "Caleb McLaughlin",
    character: "Lucas Sinclair",
    role: "Acteur principal",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];

const CREW = [
  { id: 1, name: "Matt Duffer", role: "Créateur / Réalisateur" },
  { id: 2, name: "Ross Duffer", role: "Créateur / Réalisateur" },
  { id: 3, name: "Shawn Levy", role: "Producteur exécutif" },
  { id: 4, name: "Dan Cohen", role: "Producteur" },
];

const NEWS = [
  {
    id: 1,
    title: "La saison 5 dévoile sa première affiche officielle",
    category: "Production",
    date: "10 juillet 2026",
    image:
      "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Nouveau trailer final : la guerre approche",
    category: "Trailer",
    date: "8 juillet 2026",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Les créateurs teasent un retour inattendu",
    category: "Interview",
    date: "5 juillet 2026",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Stranger Things nominée aux Emmy Awards",
    category: "Récompenses",
    date: "2 juillet 2026",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=900&q=80",
  },
];

const COMMUNITY = {
  stats: {
    members: "145K",
    online: "3.2K",
    discussions: "12.4K",
    today: "+245",
  },
  hashtags: ["#StrangerThings", "#Vecna", "#Eleven", "#Hawkins", "#80sVibes"],
  contributors: [
    {
      name: "HawkinsFan",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      posts: 342,
    },
    {
      name: "RetroKid",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      posts: 215,
    },
    {
      name: "MomSteve",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
      posts: 567,
    },
    {
      name: "SynthWave",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
      posts: 189,
    },
  ],
  discussions: [
    {
      id: 1,
      title: "Théorie : qui est le véritable méchant de la saison 5 ?",
      author: "HawkinsFan",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      replies: 342,
      likes: 128,
      tag: "Théorie",
      hot: true,
    },
    {
      id: 2,
      title: "Les références aux années 80 les plus cool de la série",
      author: "RetroKid",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      replies: 215,
      likes: 89,
      tag: "Culture",
    },
    {
      id: 3,
      title: "Steve Harrington : le babysitter héroïque de Hawkins",
      author: "MomSteve",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
      replies: 567,
      likes: 234,
      tag: "Personnages",
      hot: true,
    },
    {
      id: 4,
      title: "Votre OST préférée de la série ?",
      author: "SynthWave",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
      replies: 189,
      likes: 76,
      tag: "Musique",
    },
  ],
  theories: [
    {
      id: 1,
      title: "Le Monde à l'envers est une dimension parallèle",
      supporters: 4120,
    },
    {
      id: 2,
      title: "Eleven est la sœur d'un autre personnage",
      supporters: 2890,
    },
    {
      id: 3,
      title: "Hopper n'est pas mort dans la saison 3",
      supporters: 5630,
    },
    {
      id: 4,
      title: "Vecna et le Demogorgon partagent une origine",
      supporters: 1980,
    },
  ],
  quotes: [
    { id: 1, text: "Les amis ne mentent pas.", character: "Eleven" },
    { id: 2, text: "Mouth-breather.", character: "Eleven" },
    { id: 3, text: "Je suis la garde du corps.", character: "Steve" },
  ],
  polls: [
    {
      id: 1,
      question: "Quel est votre personnage préféré ?",
      votes: 12450,
      options: [
        { label: "Eleven", percent: 42 },
        { label: "Steve", percent: 28 },
        { label: "Dustin", percent: 18 },
        { label: "Hopper", percent: 12 },
      ],
    },
    {
      id: 2,
      question: "Meilleure saison selon vous ?",
      votes: 8930,
      options: [
        { label: "Saison 1", percent: 15 },
        { label: "Saison 2", percent: 22 },
        { label: "Saison 3", percent: 26 },
        { label: "Saison 4", percent: 37 },
      ],
    },
  ],
  creations: [
    {
      id: 1,
      title: "Fan art Eleven vs Vecna",
      author: "ArtHawkins",
      type: "Fan art",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Cosplay du Demogorgon",
      author: "MonsterFan",
      type: "Cosplay",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Montage des meilleures scènes",
      author: "EditMaster",
      type: "Montage",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Minimalist Hawkins Poster",
      author: "PixelArt",
      type: "Design",
      image:
        "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

const SHOP = [
  {
    id: 1,
    name: "T-shirt Logo Hawkins",
    price: "29,90 €",
    status: "En stock",
    popularity: 4.8,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Figurine Eleven",
    price: "49,90 €",
    status: "En stock",
    popularity: 4.9,
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Poster Saison 4",
    price: "19,90 €",
    status: "Derniers exemplaires",
    popularity: 4.7,
    image:
      "https://images.unsplash.com/photo-1580136608260-4eb11f4b64fe?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Mug Friends don't lie",
    price: "14,90 €",
    status: "En stock",
    popularity: 4.6,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Bande originale vinyle",
    price: "34,90 €",
    status: "Précommande",
    popularity: 4.9,
    image:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80",
  },
];

const GALLERY = [
  {
    id: 1,
    title: "Affiche officielle",
    type: "Poster",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Wallpaper Monde à l'envers",
    type: "Wallpaper",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Photo promotionnelle",
    type: "Promotion",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Tournage Hawkins Lab",
    type: "Tournage",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Capture officielle",
    type: "Capture",
    image:
      "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Artwork communautaire",
    type: "Artwork",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
  },
];

const RECOMMENDATIONS = {
  similar: [
    {
      title: "Dark",
      reason: "Mêmes thèmes de mystère et de voyage temporel",
      poster:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The OA",
      reason: "Univers étrange et personnages attachants",
      poster:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Yellowjackets",
      reason: "Suspense et survie entre adolescents",
      poster:
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "From",
      reason: "Horreur rurale et secrets de petite ville",
      poster:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
    },
  ],
  friends: [
    {
      title: "Severance",
      friend: "Marc",
      note: "5 étoiles",
      poster:
        "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Last of Us",
      friend: "Sarah",
      note: "4.5 étoiles",
      poster:
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Silo",
      friend: "Lucas",
      note: "4 étoiles",
      poster:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    },
  ],
  personalized: [
    {
      title: "The Bear",
      match: "94%",
      poster:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "For All Mankind",
      match: "88%",
      poster:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Silo",
      match: "91%",
      poster:
        "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

const NAV_SECTIONS = [
  { key: "presentation", label: "Présentation" },
  { key: "progression", label: "Progression" },
  { key: "saisons", label: "Saisons" },
  { key: "videos", label: "Bandes-annonces" },
  { key: "casting", label: "Casting" },
  { key: "actualites", label: "Actualités" },
  { key: "communaute", label: "Communauté" },
  { key: "boutique", label: "Boutique" },
  { key: "galerie", label: "Galerie" },
  { key: "recommandations", label: "Recommandations" },
];

// ============================================================
// Composants helpers
// ============================================================
function GlassPanel({
  children,
  className = "",
  radius = "rounded-md",
  bodyClassName = "",
  glow = false,
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden border border-white/10 bg-[#141414]",
        radius,
        className,
      ].join(" ")}
    >
      {glow && (
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/10 blur-3xl" />
      )}
      <div className={["relative", radius, bodyClassName].join(" ")}>
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ title, rightLabel, onRightClick, icon: Icon }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 text-white/40" />}
        <h2 className="text-sm font-black uppercase tracking-widest text-white">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-1 text-xs font-semibold text-white/50 hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function ActionButton({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary: "bg-white text-black hover:scale-[1.02] hover:bg-white/90",
    outline:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
    gradient:
      "bg-gradient-to-r from-brand-primary to-brand-cyan text-white shadow-[0_0_30px_rgba(132,29,79,.35)] hover:shadow-[0_0_45px_rgba(132,29,79,.5)] hover:scale-[1.02]",
  };
  return (
    <button
      onClick={onClick}
      className={[base, styles[variant], className].join(" ")}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}

function PosterCard({ item, showReason = true, className = "" }) {
  return (
    <div className={["group cursor-pointer", className].join(" ")}>
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/40">
        <img
          src={item.poster || item.image}
          alt={item.title || item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {item.match && (
          <span className="absolute left-2 top-2 rounded-full bg-brand-primary/90 px-2 py-1 text-[10px] font-bold text-white">
            {item.match} match
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm font-bold text-white">
            {item.title || item.name}
          </h3>
          {showReason && item.reason && (
            <p className="mt-1 text-[10px] leading-tight text-white/60">
              {item.reason}
            </p>
          )}
          {showReason && item.friend && (
            <p className="mt-1 text-[10px] text-white/60">
              Recommandé par {item.friend} · {item.note}
            </p>
          )}
          {item.status && (
            <p className="mt-1 text-[10px] font-semibold text-brand-cyan">
              {item.status}
            </p>
          )}
          {item.price && (
            <p className="mt-1 text-sm font-bold text-white">{item.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function HorizontalCarousel({ children, gap = "gap-5" }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        className={[
          "flex snap-x snap-mandatory overflow-x-auto pb-4",
          gap,
        ].join(" ")}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/60 to-transparent" />
      <div className="absolute right-0 top-0 flex -translate-y-1/2 gap-2 md:-top-10">
        <button
          onClick={() => scroll("left")}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur transition hover:border-brand-cyan/50 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur transition hover:border-brand-cyan/50 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Hero + Navigation
// ============================================================
function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[460px] w-full items-center overflow-hidden rounded-md bg-[#1c1c1c]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${SERIES.backdrop})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-xl space-y-4 p-8 lg:p-12">
        <div className="flex gap-2">
          <span className="rounded-sm bg-brand-primary px-2 py-0.5 text-[11px] font-extrabold text-black">
            Top 10 en France
          </span>
          <span className="rounded-sm bg-neutral-800 px-2 py-0.5 text-[11px] font-semibold text-gray-300">
            {SERIES.platform}
          </span>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
          {SERIES.title}
        </h1>

        <div className="flex items-center gap-3 text-xs font-semibold text-gray-400">
          <span>{SERIES.years}</span>
          <span>•</span>
          <span>{SERIES.avgEpisodeDuration}</span>
          <span>•</span>
          <span className="text-gray-300">
            {SERIES.genres.slice(0, 3).join(" / ")}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-gray-400">
          {SERIES.synopsis}
        </p>

        <button
          onClick={() => navigate("/series/watch")}
          className="group flex items-center gap-2 pt-2 text-xs font-bold text-white transition-colors hover:text-brand-primary"
        >
          <span>Continuer le visionnage</span>
          <ChevronRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Large Center Play Button */}
      <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <button
          onClick={() => navigate("/series/watch")}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-black shadow-lg shadow-brand-primary/20 transition-transform hover:scale-105"
        >
          <Play className="ml-1 h-6 w-6 fill-black" />
        </button>
      </div>
    </section>
  );
}

function CastingSection() {
  return (
    <section id="casting" className="scroll-mt-28">
      <SectionHeader title="Casting" icon={Users} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CAST.map((member) => (
          <div
            key={member.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-cyan/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/10 transition group-hover:ring-brand-cyan/50">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white group-hover:text-brand-cyan">
                  {member.name}
                </p>
                <p className="text-sm text-white/60">{member.character}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-white/70">
          <Clapperboard className="h-4 w-4 text-brand-cyan" />
          Équipe créative
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CREW.map((person) => (
            <div
              key={person.id}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-white/10"
            >
              <p className="font-semibold text-white">{person.name}</p>
              <p className="text-xs text-white/50">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActualitesSection() {
  return (
    <section id="actualites" className="scroll-mt-28">
      <SectionHeader title="Actualités" icon={Newspaper} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {NEWS.map((item) => (
          <article
            key={item.id}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-brand-cyan/30 hover:bg-white/[0.05]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-3 top-3 rounded-full bg-brand-primary/90 px-2.5 py-1 text-[10px] font-bold text-white">
                {item.category}
              </div>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                {item.date}
              </p>
              <h3 className="mt-2 line-clamp-2 text-sm font-bold text-white group-hover:text-brand-cyan">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PresentationSection() {
  const details = [
    { label: "Créateurs", value: SERIES.creators.join(", ") },
    { label: "Studios", value: SERIES.studios.join(", ") },
    { label: "Pays", value: SERIES.country },
    { label: "Langue", value: SERIES.language },
    { label: "Durée", value: SERIES.avgEpisodeDuration },
    {
      label: "Format",
      value: `${SERIES.seasons} saisons · ${SERIES.episodes} épisodes`,
    },
    { label: "Années", value: SERIES.years },
    { label: "Plateforme", value: SERIES.platform },
  ];

  return (
    <section id="presentation" className="scroll-mt-28">
      <SectionHeader title="Présentation" icon={BookOpen} />

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
            Synopsis
          </p>
          <p className="text-lg leading-8 text-white/90 md:text-xl md:leading-9">
            {SERIES.synopsis}
          </p>
          <p className="text-sm leading-7 text-white/60">{SERIES.universe}</p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-md border border-white/10 bg-[#141414] p-5">
            <p className="mb-4 text-[10px] font-black uppercase tracking-widest text-white/40">
              Détails
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {details.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressionSection() {
  return (
    <section id="progression" className="scroll-mt-28">
      <SectionHeader title="Votre progression" icon={TrendingUp} />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-md border border-white/10 bg-[#141414] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            Vu jusqu'à
          </p>
          <p className="mt-1 text-xl font-black text-white">
            S{PROGRESS.season.toString().padStart(2, "0")}E
            {PROGRESS.episode.toString().padStart(2, "0")}
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-[#141414] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            Progression
          </p>
          <p className="mt-1 text-xl font-black text-white">
            {PROGRESS.percentage}%
          </p>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-brand-primary"
              style={{ width: `${PROGRESS.percentage}%` }}
            />
          </div>
        </div>
        <div className="rounded-md border border-white/10 bg-[#141414] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            Prochain épisode
          </p>
          <p className="mt-1 text-xl font-black text-white">
            {PROGRESS.nextEpisode.code}
          </p>
          <p className="text-xs text-white/60">{PROGRESS.nextEpisode.title}</p>
        </div>
        <div className="rounded-md border border-white/10 bg-[#141414] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            Temps restant
          </p>
          <p className="mt-1 text-xl font-black text-white">
            {PROGRESS.timeRemaining}
          </p>
        </div>
      </div>
    </section>
  );
}

function SaisonsSection() {
  const navigate = useNavigate();

  return (
    <section id="saisons" className="scroll-mt-28">
      <SectionHeader
        title="Les saisons"
        rightLabel="Voir toutes les saisons"
        onRightClick={() => navigate("/series/seasons")}
        icon={Tv}
      />
      <div className="space-y-1">
        {SEASONS.map((season) => (
          <div
            key={season.id}
            onClick={() => navigate(`/series/season/${season.number}`)}
            className={[
              "flex cursor-pointer items-center justify-between rounded-md px-4 py-3 text-xs font-medium transition-all",
              season.progress === 100
                ? "bg-brand-primary/90 text-black"
                : season.progress > 0
                  ? "bg-[#1a1a1a] text-white border-l-2 border-brand-primary"
                  : "bg-[#141414] text-gray-300 hover:bg-[#1a1a1a]",
            ].join(" ")}
          >
            <div className="flex items-center gap-4">
              <span
                className={[
                  "w-20 font-bold",
                  season.progress === 100 ? "text-black/70" : "text-white/40",
                ].join(" ")}
              >
                Saison {season.number}
              </span>
              <span className={season.progress === 100 ? "font-black" : ""}>
                {season.episodes} épisodes
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={[
                  "hidden sm:inline",
                  season.progress === 100 ? "text-black/70" : "text-white/40",
                ].join(" ")}
              >
                {season.year}
              </span>
              {season.progress > 0 && (
                <span
                  className={[
                    "font-bold",
                    season.progress === 100 ? "text-black" : "text-white",
                  ].join(" ")}
                >
                  {season.progress}%
                </span>
              )}
              <ChevronRight
                className={[
                  "h-4 w-4",
                  season.progress === 100 ? "text-black" : "text-white/60",
                ].join(" ")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideosSection() {
  const [playing, setPlaying] = useState(null);

  return (
    <section id="videos" className="scroll-mt-28">
      <SectionHeader title="Bandes-annonces et vidéos" icon={Film} />

      <div className="grid gap-3 md:grid-cols-3">
        {VIDEOS.map((video, idx) => (
          <div
            key={video.id}
            onClick={() => setPlaying(video.id)}
            className={[
              "group flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all",
              idx === 0
                ? "bg-[#1a1a1a] border border-white/10"
                : "bg-[#141414] hover:bg-[#1a1a1a]",
            ].join(" ")}
          >
            <div className="relative flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden rounded bg-neutral-900">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition group-hover:opacity-40"
              />
              <Play className="relative h-4 w-4 fill-white text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="truncate text-sm font-bold text-white">
                {video.title}
              </h4>
              <p className="mt-0.5 text-[11px] text-white/40">
                {video.type} · {video.duration}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur"
            onClick={() => setPlaying(null)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPlaying(null)}
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video">
                <iframe
                  src={VIDEOS.find((v) => v.id === playing)?.url}
                  title="Bande-annonce"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CommunauteSection() {
  const featuredQuote = COMMUNITY.quotes[0];

  return (
    <section id="communaute" className="scroll-mt-28">
      <SectionHeader title="Communauté" icon={MessageCircle} />

      {/* Stats + hashtags */}
      <GlassPanel radius="rounded-[28px]" bodyClassName="mb-6 p-5 md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-white">
                {COMMUNITY.stats.members}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Membres
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-brand-cyan">
                {COMMUNITY.stats.online}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                En ligne
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-white">
                {COMMUNITY.stats.discussions}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Discussions
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-green-400">
                {COMMUNITY.stats.today}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Aujourd'hui
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {COMMUNITY.hashtags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-brand-cyan/30 hover:text-white"
              >
                <Hash className="h-3 w-3" />
                {tag.replace("#", "")}
              </span>
            ))}
          </div>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Activity feed */}
        <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand-cyan" />
              <h3 className="font-bold uppercase tracking-wide text-white">
                Fil d'activité
              </h3>
            </div>
            <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan">
              Live
            </span>
          </div>

          <div className="space-y-4">
            {/* Discussion item */}
            {COMMUNITY.discussions.slice(0, 2).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-cyan/40"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">
                        {item.author}
                      </span>
                      <span className="text-[10px] text-white/40">
                        a lancé une discussion
                      </span>
                      <span className="rounded-full bg-brand-cyan/15 px-2 py-0.5 text-[10px] font-bold text-brand-cyan">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-white group-hover:text-brand-cyan">
                      {item.title}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {item.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Poll item */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-cyan/40"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary/20">
                  <Trophy className="h-5 w-5 text-brand-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/40">Sondage populaire</p>
                  <p className="font-semibold text-white group-hover:text-brand-cyan">
                    {COMMUNITY.polls[0].question}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
                    {COMMUNITY.polls[0].options.slice(0, 2).map((o) => (
                      <span
                        key={o.label}
                        className="rounded-full bg-white/[0.05] px-2 py-1"
                      >
                        {o.label} {o.percent}%
                      </span>
                    ))}
                    <span className="text-white/40">
                      {COMMUNITY.polls[0].votes.toLocaleString()} votes
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Theory item */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-cyan/40"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-cyan/15">
                  <Sparkles className="h-5 w-5 text-brand-cyan" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/40">Théorie validée</p>
                  <p className="font-semibold text-white group-hover:text-brand-cyan">
                    {COMMUNITY.theories[0].title}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {COMMUNITY.theories[0].supporters.toLocaleString()} soutiens
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote item */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer rounded-2xl border-l-4 border-brand-cyan bg-white/[0.03] p-4 transition hover:bg-white/[0.05]"
            >
              <Quote className="h-5 w-5 text-brand-cyan" />
              <p className="mt-2 text-sm italic text-white/80">
                « {featuredQuote.text} »
              </p>
              <p className="mt-2 text-xs font-bold text-white/40">
                — {featuredQuote.character}
              </p>
            </motion.div>
          </div>

          <button className="mt-6 w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3 text-sm font-semibold text-white/70 transition hover:border-brand-cyan/30 hover:text-white">
            Voir toute l'activité
          </button>
        </GlassPanel>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top contributors */}
          <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-bold uppercase tracking-wide text-white">
              <Users className="h-5 w-5 text-brand-cyan" />
              Top contributeurs
            </h3>
            <div className="space-y-3">
              {COMMUNITY.contributors.map((user, index) => (
                <div
                  key={user.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition hover:bg-white/[0.05]"
                >
                  <span className="w-5 text-center text-sm font-black text-white/20">
                    {index + 1}
                  </span>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{user.name}</p>
                    <p className="text-[10px] text-white/50">
                      {user.posts} posts
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Trending hashtags */}
          <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8">
            <h3 className="mb-4 flex items-center gap-2 font-bold uppercase tracking-wide text-white">
              <Hash className="h-5 w-5 text-brand-primary" />
              Tendances
            </h3>
            <div className="flex flex-wrap gap-2">
              {COMMUNITY.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-brand-cyan/30 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassPanel>

          {/* Featured creations */}
          <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8">
            <h3 className="mb-4 flex items-center gap-2 font-bold uppercase tracking-wide text-white">
              <Palette className="h-5 w-5 text-brand-primary" />
              Créations en vedette
            </h3>
            <div className="space-y-3">
              {COMMUNITY.creations.slice(0, 3).map((creation) => (
                <div
                  key={creation.id}
                  className="group flex cursor-pointer gap-3 overflow-hidden rounded-xl transition hover:bg-white/[0.05]"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/5">
                    <img
                      src={creation.image}
                      alt={creation.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold text-white">
                      {creation.title}
                    </p>
                    <p className="text-[10px] text-white/60">
                      {creation.type} · {creation.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

function BoutiqueSection() {
  return (
    <section id="boutique" className="scroll-mt-28">
      <SectionHeader title="Boutique officielle" icon={ShoppingBag} />
      <HorizontalCarousel>
        {SHOP.map((product) => (
          <div key={product.id} className="w-[220px] shrink-0 snap-start">
            <PosterCard item={product} showReason={false} />
            <div className="mt-2 flex items-center justify-between px-1">
              <span
                className={[
                  "text-[10px] font-semibold",
                  product.status === "En stock"
                    ? "text-green-400"
                    : "text-brand-cyan",
                ].join(" ")}
              >
                {product.status}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-white/60">
                <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />
                {product.popularity}
              </span>
            </div>
          </div>
        ))}
      </HorizontalCarousel>
    </section>
  );
}

function GalerieSection() {
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState("Tout");

  const filters = ["Tout", ...Array.from(new Set(GALLERY.map((i) => i.type)))];
  const filtered =
    filter === "Tout" ? GALLERY : GALLERY.filter((i) => i.type === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section id="galerie" className="scroll-mt-28">
      <SectionHeader title="Galerie" icon={ImageIcon} />

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
              filter === f
                ? "bg-gradient-to-r from-brand-primary to-brand-cyan text-white shadow-[0_0_15px_rgba(132,29,79,.35)]"
                : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white",
            ].join(" ")}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured */}
          <motion.div
            key={`featured-${featured.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 md:row-span-2"
            onClick={() => setLightbox(featured)}
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-brand-primary px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
              {featured.type}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xl font-black text-white">{featured.title}</p>
              <p className="text-sm text-white/70">Cliquez pour agrandir</p>
            </div>
            <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Rest grid */}
          {rest.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10"
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                {item.type}
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs font-bold text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-h-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-3 text-center text-sm font-semibold text-white">
                {lightbox.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SimilarCard({ item }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.01] transition hover:border-brand-cyan/40">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-lg font-black text-white group-hover:text-brand-cyan">
            {item.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-white/60">
            {item.reason}
          </p>
        </div>
      </div>
    </div>
  );
}

function FriendCard({ item }) {
  return (
    <div className="group flex cursor-pointer gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-brand-cyan/40 hover:bg-white/[0.05]">
      <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-white group-hover:text-brand-cyan">
          {item.title}
        </p>
        <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
          <span className="rounded-full bg-brand-primary/20 px-2 py-0.5 text-[10px] font-bold text-brand-primary">
            {item.friend}
          </span>
          <span>a regardé</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs font-bold text-white/70">
          <Star className="h-3 w-3 fill-brand-primary text-brand-primary" />
          {item.note}
        </div>
      </div>
    </div>
  );
}

function PersonalizedCard({ item, featured = false }) {
  return (
    <div
      className={[
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition hover:border-brand-cyan/40",
        featured ? "md:col-span-2 md:row-span-2" : "",
      ].join(" ")}
    >
      <img
        src={item.poster}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
        Match {item.match}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className={[
            "font-black text-white group-hover:text-brand-cyan",
            featured ? "text-2xl" : "text-base",
          ].join(" ")}
        >
          {item.title}
        </p>
        {featured && (
          <p className="mt-1 max-w-xs text-sm text-white/70">
            Recommandée spécialement pour vous selon votre historique.
          </p>
        )}
      </div>
    </div>
  );
}

function RecommandationsSection() {
  return (
    <section id="recommandations" className="scroll-mt-28">
      <SectionHeader title="Recommandations" icon={Sparkles} />

      <div className="space-y-12">
        {/* Similar series grid */}
        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white/70">
            Parce que vous avez aimé {SERIES.title}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RECOMMENDATIONS.similar.map((item) => (
              <SimilarCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Friends watching */}
        <GlassPanel radius="rounded-[28px]" bodyClassName="p-6 md:p-8">
          <h3 className="mb-5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-white/70">
            <Users className="h-4 w-4 text-brand-cyan" />
            Vos amis ont adoré
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RECOMMENDATIONS.friends.map((item) => (
              <FriendCard key={item.title} item={item} />
            ))}
          </div>
        </GlassPanel>

        {/* Personalized with featured */}
        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white/70">
            Pour vous
          </h3>
          <div className="grid h-[420px] gap-4 md:grid-cols-3 md:grid-rows-2">
            <PersonalizedCard item={RECOMMENDATIONS.personalized[0]} featured />
            {RECOMMENDATIONS.personalized.slice(1).map((item) => (
              <PersonalizedCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CHANNELS = [
  "ACCUEIL",
  "SÉRIES",
  "FILMS",
  "CS HORROR",
  "CS MYSTERY",
  "DOCUMENTAIRES",
  "FAMILY",
];

const MAIN_NAV = [
  "TV program",
  "Archiv",
  "Reklama",
  "Jak naladit",
  "O nás",
  "Kontakt",
];

function TopChannelsBar() {
  return (
    <div className="w-full border-b border-neutral-800 bg-[#181818] text-[11px] font-bold tracking-wider text-gray-400">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-6 overflow-x-auto px-6 md:justify-start">
        {CHANNELS.map((channel) => (
          <span
            key={channel}
            className={[
              "cursor-pointer whitespace-nowrap rounded px-3 py-1.5 transition-colors",
              channel === "CS HORROR"
                ? "border border-neutral-700 bg-neutral-800 text-white"
                : "hover:text-white",
            ].join(" ")}
          >
            {channel}
          </span>
        ))}
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-neutral-900 px-6 py-4">
      <div className="flex items-center gap-12">
        <div className="flex cursor-pointer items-center gap-1 text-xl font-black tracking-tight text-white">
          <span className="text-brand-primary">CS</span>
          <span>HORROR</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {MAIN_NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <Search className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
        <User className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
      </div>
    </header>
  );
}

function HeroCards() {
  const navigate = useNavigate();
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {VIDEOS.slice(0, 3).map((video, idx) => (
        <div
          key={video.id}
          onClick={() => navigate("/series/watch")}
          className={[
            "flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all",
            idx === 0
              ? "border border-neutral-700 bg-neutral-800/80"
              : "bg-[#181818] hover:bg-neutral-800",
          ].join(" ")}
        >
          <div className="relative flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden rounded bg-neutral-900">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />
            <Play className="relative h-4 w-4 fill-gray-400 text-gray-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight text-white">
              {video.title}
            </h4>
            <p className="mt-0.5 text-[11px] text-gray-500">
              {video.type} · {video.duration}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeaturedGrid() {
  const navigate = useNavigate();
  const activeSeason =
    SEASONS.find((s) => s.progress > 0 && s.progress < 100) || SEASONS[0];

  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Program lineup */}
      <div className="space-y-4 lg:col-span-5">
        <h3 className="text-xs font-black uppercase tracking-widest text-white">
          Les saisons
        </h3>
        <div className="space-y-1">
          {SEASONS.map((season) => (
            <div
              key={season.id}
              onClick={() => navigate(`/series/season/${season.number}`)}
              className={[
                "flex cursor-pointer items-center justify-between rounded-md px-4 py-2.5 text-xs font-medium transition-all",
                season.progress === 100
                  ? "bg-brand-primary font-bold text-black"
                  : season.number === activeSeason.number
                    ? "border-l-2 border-brand-primary bg-neutral-800/90 text-white"
                    : "bg-[#161616] text-gray-300 hover:bg-neutral-800",
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                <span
                  className={[
                    "w-16",
                    season.progress === 100 ? "text-black/70" : "text-gray-500",
                  ].join(" ")}
                >
                  Saison {season.number}
                </span>
                <span
                  className={
                    season.progress === 100 ? "font-black" : "text-white"
                  }
                >
                  {season.episodes} épisodes
                </span>
              </div>
              <ArrowRight
                className={[
                  "h-4 w-4",
                  season.progress === 100 ? "text-black" : "text-white/60",
                ].join(" ")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Big feature card */}
      <div className="lg:col-span-7">
        <div className="relative overflow-hidden rounded-md border border-neutral-800 bg-[#181818]">
          <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
            <img
              src={SERIES.backdrop}
              alt="Feature showcase"
              className="h-full w-full object-cover opacity-60"
            />
            <span className="absolute left-4 top-4 z-10 rounded-sm bg-brand-primary px-2 py-0.5 text-[10px] font-extrabold text-black">
              En cours
            </span>
            <button
              onClick={() => navigate("/series/watch")}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-black shadow-lg"
            >
              <Play className="ml-0.5 h-4 w-4 fill-black" />
            </button>
          </div>
          <div className="space-y-2 p-5">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-white">
                {PROGRESS.nextEpisode.code} · {PROGRESS.nextEpisode.title}
              </h2>
              <span className="rounded border border-neutral-600 px-1 text-[9px] font-bold text-gray-400">
                HD
              </span>
            </div>
            <p className="text-[11px] font-semibold text-gray-500">
              {SERIES.years} │ {SERIES.genres.join(" / ")}
            </p>
            <p className="pt-1 text-xs leading-relaxed text-gray-400">
              {PROGRESS.nextEpisode.synopsis}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SeriesDetailsPage() {
  return (
    <div className="min-h-screen w-full bg-[#121212] font-sans text-gray-300">
      <TopChannelsBar />
      <MainHeader />

      <main className="mx-auto max-w-7xl space-y-12 px-6 py-6">
        <HeroSection />
        <HeroCards />
        <FeaturedGrid />

        <CastingSection />
        <ActualitesSection />
        <CommunauteSection />
        <BoutiqueSection />
        <GalerieSection />
        <RecommandationsSection />
      </main>
    </div>
  );
}
