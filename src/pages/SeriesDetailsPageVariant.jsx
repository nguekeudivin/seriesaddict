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
  ArrowLeft,
  Bell,
  Loader2,
  User,
  Search,
  StickyNote,
  Pencil,
  MoreVertical,
  Bookmark,
  Share2,
  Send,
} from "lucide-react";
import ProductCard from "../components/product-card";

// ============================================================
// Données mock
// ============================================================
const PLATFORM_COLORS = {
  Netflix: "#E50914",
  "Prime Video": "#00A8E1",
  "Disney+": "#113CCF",
  "Canal+": "#6B1F7C",
  "Apple TV+": "#F5F5F7",
  OCS: "#F9B800",
};

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const ACCENT_GRADIENT = `bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan`;
const BRAND_GRADIENT_TEXT = `bg-gradient-to-r from-brand-primary to-brand-cyan`;

const GRADIENT =
  "linear-gradient(90deg,var(--color-brand-primary),var(--color-brand-cyan))";

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

const mainTrailer = {
  title: "Stranger Things",
  subtitle: "Trailer Saison 5",
  meta: "Netflix • 3:02",
  image:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
};

const sameUniverse = [
  {
    id: 1,
    title: "Trailer officiel",
    type: "Trailer",
    duration: "3:02",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80",
    active: true,
  },
  {
    id: 2,
    title: "Teaser Vecna",
    type: "Teaser",
    duration: "0:52",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Behind the scenes",
    type: "Preview",
    duration: "1:18",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000&q=80",
  },
];

const relatedTrailers = [
  {
    id: 1,
    title: "Teaser",
    subtitle: "Saison 5",
    duration: "2:14",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Making of",
    subtitle: "Making of Stranger things",
    duration: "1:44",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Interview",
    subtitle: "Le casting en interview",
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

const trailerComments = [
  {
    id: 1,
    user: "Lucas",
    time: "2h",
    text: "La cinématographie a l'ouf cette saison.",
  },
  {
    id: 2,
    user: "Emma",
    time: "4h",
    text: "Stranger Things ne cesse de me surprendre.",
  },
  {
    id: 3,
    user: "Nina",
    time: "7h",
    text: "La bande-son m'a déjà conquise.",
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
    <section className="relative min-h-[85vh] w-full overflow-hidden rounded-2xl text-white select-none">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={SERIES.backdrop}
          alt={SERIES.title}
          className="h-full w-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-wine/80 to-brand-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30" />
      </div>

      {/* Decorative accent glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 z-0 h-[32rem] w-[32rem] rounded-full bg-brand-cyan/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 z-0 h-80 w-80 rounded-full bg-brand-primary/25 blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10 flex min-h-[85vh] flex-col justify-between  py-12 ">
        {/* Contenu principal */}
        <main className="my-auto grid grid-cols-1 items-center gap-12 pt-8 lg:grid-cols-12">
          {/* Colonne Gauche : Infos, Titre et Description */}
          <div className="flex flex-col space-y-8 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/70">
              <span className="rounded-full border border-brand-primary/40 bg-brand-primary/15 px-4 py-1.5 text-brand-primary-100">
                {SERIES.platform}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                {SERIES.years}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                {SERIES.status}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                {SERIES.age} · {SERIES.runtime}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl font-black leading-[0.95] tracking-tight text-white lg:text-8xl">
                {SERIES.title}
              </h1>
              <p className="max-w-xl text-lg font-light italic text-brand-cyan-100">
                {SERIES.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-white/80">
              <div className="flex items-center gap-2">
                <Eye size={18} className="text-brand-cyan" />
                <span>{SERIES.followers.toLocaleString()}</span>
              </div>
              <div className="h-5 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="fill-brand-yellow text-brand-yellow"
                />
                <span className="text-white">{SERIES.communityScore}</span>
                <span className="text-white/50">· 15 000 votes</span>
              </div>

              <div className="flex items-center -space-x-2">
                {COMMUNITY.contributors.slice(0, 3).map((user) => (
                  <img
                    key={user.name}
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full border-2 border-brand-dark object-cover"
                  />
                ))}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-dark bg-brand-primary text-[10px] font-semibold text-white">
                  +{COMMUNITY.contributors.length - 3}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8 pt-4 lg:flex-row lg:items-start">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full p-[2px] shadow-[0_0_40px_rgba(132,29,79,0.45)] transition-transform hover:scale-105"
                style={{
                  background: `conic-gradient(${PLATFORM_COLORS[SERIES.platform] || "#ffffff"} 0deg, rgba(255,255,255,0.15) 270deg, ${PLATFORM_COLORS[SERIES.platform] || "#ffffff"} 360deg)`,
                }}
              >
                <button
                  onClick={() => navigate("/series/watch")}
                  className="flex h-full w-full items-center justify-center rounded-full bg-brand-dark text-white transition-colors hover:bg-brand-wine"
                >
                  <Play size={28} className="ml-1 fill-white" />
                </button>
              </div>

              <div className="max-w-2xl space-y-4 border-l-2 border-brand-primary/30 pl-6">
                <p className="text-base font-light leading-relaxed text-white/80">
                  {SERIES.synopsis}
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERIES.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Actions secondaires */}
          <div className="flex flex-col items-start gap-10 lg:col-span-4 lg:items-end">
            <div className="w-full max-w-sm space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md lg:text-right">
              <p className="text-xs font-black uppercase tracking-widest text-brand-cyan">
                Prochain épisode
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-black text-white">
                  {PROGRESS.nextEpisode.code}
                </p>
                <p className="text-sm font-medium text-white/70">
                  {PROGRESS.nextEpisode.title}
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between text-xs text-white/50 lg:justify-end lg:gap-4">
                <span>{PROGRESS.timeRemaining} restantes</span>
                <span className="text-brand-primary">
                  Saison {PROGRESS.season}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                aria-label="Ajouter"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-brand-cyan/50 hover:bg-white/10 hover:text-brand-cyan"
              >
                <Plus size={20} />
              </button>
              <button
                aria-label="Calendrier"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-brand-cyan/50 hover:bg-white/10 hover:text-brand-cyan"
              >
                <Calendar size={20} />
              </button>
              <button
                aria-label="Message"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-brand-cyan/50 hover:bg-white/10 hover:text-brand-cyan"
              >
                <MessageCircle size={20} />
              </button>
              <button
                aria-label="Note"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-brand-cyan/50 hover:bg-white/10 hover:text-brand-cyan"
              >
                <Pencil size={20} />
              </button>
            </div>
          </div>
        </main>

        {/* Carousel d'épisodes / vidéos en pied */}
        <footer className="mt-20 border-t border-white/10 pt-10">
          <div className="mb-6 flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            <span className="text-white">Vidéos récentes</span>
            <span className="text-white/30">|</span>
            <span className="cursor-pointer text-white/40 transition-colors hover:text-white">
              Plus
            </span>
          </div>
          <div className="scrollbar-none flex space-x-5 overflow-x-auto pb-2">
            {VIDEOS.slice(0, 4).map((video) => (
              <div
                key={video.id}
                className="group w-64 shrink-0 cursor-pointer space-y-3"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
                <p className="truncate text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  {video.type}
                </p>
                <p className="truncate text-sm text-white/80">{video.title}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

const navTabs = [
  { id: "Saisons", label: "SAISONS", active: true },
  { id: "News", label: "NEWS", active: false },
  { id: "Community", label: "COMMUNAUTE", active: false },
  { id: "Avis", label: "AVIS", active: false },
  { id: "Trailer", label: "TRAILERS", active: false },
  { id: "Shop", label: "SHOP", active: false },
  { id: "Similaires", label: "SIMILAIRES", active: false },
];

const SEASONS_DATA = [
  {
    id: 1,
    title: "Saison 1",
    subtitle: "7 épisodes · Drame historique",
    status: "Saison en cours",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    description: [
      "Au Japon féodal de 1600, un navire anglais s'échoue sur les côtes d'un village de pêcheurs. Son pilote, le marin étranger John Blackthorne, va être entraîné dans une guerre de succession qui décidera du futur du pays.",
      "Entre culture, trahisons et alliances fragiles, il devra naviguer dans un monde où chaque mot peut être une arme et chaque silence une stratégie.",
    ],
    episodes: [
      {
        id: "s1e1",
        episodeNumber: "EPISODE 1",
        title: "Anjin",
        description:
          "Destinies converge in Japan after a barbarian ship washes ashore in a poor fishing village.",
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=60",
        progress: "w-1/3",
      },
      {
        id: "s1e2",
        episodeNumber: "EPISODE 2",
        title: "Servants of Two Masters",
        description:
          "Blackthorne's arrival in Osaka stirs up a hornet's nest of rivalries.",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s1e3",
        episodeNumber: "EPISODE 3",
        title: "Tomorrow Is Tomorrow",
        description:
          "After Blackthorne survives a brazen assassination attempt, Toranaga realizes he must ferry his allies out of Osaka or risk certain defeat.",
        img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s1e4",
        episodeNumber: "EPISODE 4",
        title: "The Eightfold Fence",
        description:
          "Blackthorne and Mariko test their new alliance as they train Toranaga's gun regiment for war.",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s1e5",
        episodeNumber: "EPISODE 5",
        title: "Broken to the Fist",
        description:
          "Blackthorne is forced to adapt to a rigid new world where honor is sharper than steel.",
        img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s1e6",
        episodeNumber: "EPISODE 6",
        title: "Ladies of the Willow World",
        description:
          "A secret meeting in the pleasure district changes the balance of power in Osaka.",
        img: "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s1e7",
        episodeNumber: "EPISODE 7",
        title: "A Stick of Time",
        description:
          "Toranaga plays a dangerous game of patience while his enemies close in.",
        img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
    ],
  },
  {
    id: 2,
    title: "Saison 2",
    subtitle: "7 épisodes · Drame historique",
    status: "Terminée",
    img: "https://images.unsplash.com/photo-1498330177096-35e678187b37?auto=format&fit=crop&w=800&q=80",
    description: [
      "La guerre des régents se poursuit et Toranaga doit consolider son alliance avec les étrangers pour contrer l'armée adverse.",
      "Blackthorne découvre que le code du bushido pourrait bien devenir sa meilleure protection comme sa plus grande prison.",
    ],
    episodes: [
      {
        id: "s2e1",
        episodeNumber: "EPISODE 1",
        title: "Résilience",
        description:
          "Toranaga rassemble ses forces après une défaite cuisante.",
        img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s2e2",
        episodeNumber: "EPISODE 2",
        title: "Ombres et lames",
        description:
          "Un assassin rôde dans Osaka pendant que les négociations s'intensifient.",
        img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s2e3",
        episodeNumber: "EPISODE 3",
        title: "Le serment",
        description:
          "Mariko doit choisir entre son devoir et sa loyauté envers Blackthorne.",
        img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s2e4",
        episodeNumber: "EPISODE 4",
        title: "L'échange de prisonniers",
        description:
          "Une négociation périlleuse met en jeu la vie de plusieurs otages.",
        img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s2e5",
        episodeNumber: "EPISODE 5",
        title: "Le masque du samouraï",
        description:
          "Les secrets de la cour éclatent lors d'un festival nocturne.",
        img: "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s2e6",
        episodeNumber: "EPISODE 6",
        title: "Cendres d'Edo",
        description:
          "Un incendie mystérieux bouleverse les plans de l'armée de l'Ouest.",
        img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s2e7",
        episodeNumber: "EPISODE 7",
        title: "Le choix de Yabu",
        description:
          "Yabu doit décider s'il reste fidèle à Toranaga ou s'il vend son âme.",
        img: "https://images.unsplash.com/photo-1548613053-220e7558185a?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
    ],
  },
  {
    id: 3,
    title: "Saison 3",
    subtitle: "7 épisodes · Drame historique",
    status: "Terminée",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    description: [
      "Les factions se resserrent et Toranaga prépare le coup ultime pour prendre le pouvoir.",
      "Blackthorne se retrouve coincé entre deux mondes, deux langues et deux destins incompatibles.",
    ],
    episodes: [
      {
        id: "s3e1",
        episodeNumber: "EPISODE 1",
        title: "L'ombre du shogun",
        description:
          "Les rumeurs d'un prochain shogun déstabilisent les grandes maisons.",
        img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s3e2",
        episodeNumber: "EPISODE 2",
        title: "Trahison annoncée",
        description: "Un allié de longue date bascule dans le camp adverse.",
        img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s3e3",
        episodeNumber: "EPISODE 3",
        title: "La ligue des daimyos",
        description:
          "Toranaga tisse une alliance fragile entre les seigneurs du Nord.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b4fb?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s3e4",
        episodeNumber: "EPISODE 4",
        title: "Nuit de neige",
        description:
          "Une tempête de neige isole Osaka et pousse chacun à ses limites.",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s3e5",
        episodeNumber: "EPISODE 5",
        title: "Le poignard d'argent",
        description:
          "Un cadeau empoisonné menace de déclencher une guerre ouverte.",
        img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s3e6",
        episodeNumber: "EPISODE 6",
        title: "Le départ du Erasmus",
        description:
          "Blackthorne doit choisir entre son navire et son destin au Japon.",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb3d91?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s3e7",
        episodeNumber: "EPISODE 7",
        title: "Dernier saké",
        description:
          "Un banquet d'adieux cache des menaces et des promesses brisées.",
        img: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
    ],
  },
  {
    id: 4,
    title: "Saison 4",
    subtitle: "7 épisodes · Drame historique",
    status: "Terminée",
    img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    description: [
      "La bataille finale approche. Chaque famille doit choisir son camp avant que le sang ne coule.",
      "Blackthorne comprend que sa survie dépend désormais d'une culture qu'il commençait à mépriser.",
    ],
    episodes: [
      {
        id: "s4e1",
        episodeNumber: "EPISODE 1",
        title: "Les vents du changement",
        description: "L'armée de l'Ouest se mobilise sur les plaines d'Edo.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e2",
        episodeNumber: "EPISODE 2",
        title: "Les tambours de Sekigahara",
        description: "Les deux armées se font face dans une vallée brumeuse.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e3",
        episodeNumber: "EPISODE 3",
        title: "Champ de camélias",
        description:
          "Les blessures de la bataille révèlent les véritables alliés.",
        img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e4",
        episodeNumber: "EPISODE 4",
        title: "La reddition d'Ishido",
        description: "Le siège d'Osaka s'achève dans le sang et les promesses.",
        img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e5",
        episodeNumber: "EPISODE 5",
        title: "Le conseil des régents",
        description:
          "Les survivants se réunissent pour décider du futur du Japon.",
        img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e6",
        episodeNumber: "EPISODE 6",
        title: "L'ombre et le soleil",
        description:
          "Toranaga disparaît des radars pour préparer son ultime coup.",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e7",
        episodeNumber: "EPISODE 7",
        title: "L'aube du shogun",
        description: "Un nouveau Japon naît de la fumée des batailles passées.",
        img: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
    ],
  },
  {
    id: 5,
    title: "Saison 5",
    subtitle: "8 épisodes · Drame historique",
    status: "Terminée",
    img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    description: [
      "La bataille finale approche. Chaque famille doit choisir son camp avant que le sang ne coule.",
      "Blackthorne comprend que sa survie dépend désormais d'une culture qu'il commençait à mépriser.",
    ],
    episodes: [
      {
        id: "s4e1",
        episodeNumber: "EPISODE 1",
        title: "Les vents du changement",
        description: "L'armée de l'Ouest se mobilise sur les plaines d'Edo.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e2",
        episodeNumber: "EPISODE 2",
        title: "Les tambours de Sekigahara",
        description: "Les deux armées se font face dans une vallée brumeuse.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e3",
        episodeNumber: "EPISODE 3",
        title: "Champ de camélias",
        description:
          "Les blessures de la bataille révèlent les véritables alliés.",
        img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e4",
        episodeNumber: "EPISODE 4",
        title: "La reddition d'Ishido",
        description: "Le siège d'Osaka s'achève dans le sang et les promesses.",
        img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e5",
        episodeNumber: "EPISODE 5",
        title: "Le conseil des régents",
        description:
          "Les survivants se réunissent pour décider du futur du Japon.",
        img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e6",
        episodeNumber: "EPISODE 6",
        title: "L'ombre et le soleil",
        description:
          "Toranaga disparaît des radars pour préparer son ultime coup.",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e7",
        episodeNumber: "EPISODE 7",
        title: "L'aube du shogun",
        description: "Un nouveau Japon naît de la fumée des batailles passées.",
        img: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
      {
        id: "s4e7",
        episodeNumber: "EPISODE 7",
        title: "L'aube du shogun",
        description: "Un nouveau Japon naît de la fumée des batailles passées.",
        img: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&auto=format&fit=crop&q=60",
        progress: "w-0",
      },
    ],
  },
];

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

function CastingSection() {
  return (
    <section id="casting" className="max-w-7xl mx-auto scroll-mt-28">
      <h2 className="text-2xl font-black uppercase tracking-widest text-white">
        Casting Principal
      </h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CAST.map((member) => (
          <div
            key={member.id}
            className="bg-brand-dark/70 group relative overflow-hidden rounded-2xl border border-white/8 bg-black/40 p-5 transition hover:border-brand-cyan/30 hover:bg-black/60"
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
    </section>
  );
}

function TrailerBadge({ children, active = false }) {
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

function TrailerSectionHeader({ title, action }) {
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

function TrailerGradientFrame({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] p-[1px] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(132,29,79,.45), rgba(30,108,134,.28), rgba(255,255,255,.06))",
      }}
    >
      <div className="rounded-[27px] border border-white/[0.08] bg-[rgba(1,25,33,.68)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

function TrailerQueueItem({ item }) {
  return (
    <button className="group w-full text-left">
      <div className="flex gap-4 rounded-[22px] px-0 py-3 transition duration-300">
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
            <TrailerBadge active={item.active}>
              {item.active ? "Now" : item.type}
            </TrailerBadge>
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

function TrailerVideoTile({ item }) {
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

function TrailerSection() {
  return (
    <section id="trailers" className="max-w-7xl mx-auto space-y-14 text-white">
      <div className="grid gap-14 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <TrailerGradientFrame>
            <div className="relative overflow-hidden rounded-[27px]">
              <div className="relative aspect-[16/12]">
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
                  <TrailerBadge active>Featured</TrailerBadge>
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
                      <TrailerBadge active>New Drop</TrailerBadge>
                      <TrailerBadge>Saison 5</TrailerBadge>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                      <span>{mainTrailer.subtitle}</span>
                      <span className="text-white/30">•</span>
                      <span>{mainTrailer.meta}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TrailerGradientFrame>
        </div>

        <aside className="">
          <div className="space-y-3">
            {relatedTrailers.slice(0, 3).map((item) => (
              <TrailerVideoTile key={item.id} item={item} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

const NEWS_2 = [
  {
    title: "La saison 5 boucle son tournage principal",
    excerpt:
      "Le planning se précise et plusieurs indices laissent penser à une communication plus intense dans les prochaines semaines.",
    meta: "Breaking · 4 min",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Les frères Duffer promettent une fin plus intime",
    excerpt:
      "La conclusion devrait recentrer l'émotion sur le groupe historique sans perdre l'ampleur du spectacle.",
    meta: "Interview · 5 min",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Pourquoi Hawkins reste un décor aussi fort",
    excerpt:
      "Entre nostalgie américaine et menace invisible, la mise en scène transforme la ville en personnage à part entière.",
    meta: "Décryptage · 6 min",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=1400&q=80",
  },
];

const shopProducts = [
  {
    title: "Poster collector Upside Down",
    universe: "Poster collector",
    price: "29,90 €",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    badge: "Collector",
  },
  {
    id: 2,
    title: "Mug TARDIS",
    universe: "Doctor Who",
    price: "19,90 €",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    badge: "Best seller",
  },
  {
    id: 3,
    title: "Lucille Replica",
    universe: "The Walking Dead",
    price: "149,90 €",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80",
    badge: "Édition limitée",
  },
];

const SIMILAR_SERIES = [
  {
    title: "Dark",
    image:
      "https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "The OA",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Locke & Key",
    image:
      "https://images.unsplash.com/photo-1523598455533-144bae1f0b14?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Yellowjackets",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Bodies",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "From",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
  },
];

const SERIES_COMMENTS = [
  {
    id: 1,
    author: "Charlotte",
    avatar: "C",
    time: "Il y a 2 jours",
    reaction: "4.8/5",
    content:
      "La série garde une énergie feuilletonnante rare. Même quand l'univers grandit, le coeur émotionnel du groupe reste lisible et c'est ce qui porte vraiment la fiche.",
    likes: 14,
  },
  {
    id: 2,
    author: "Nadia",
    avatar: "N",
    time: "Il y a 5 jours",
    reaction: "4.4/5",
    content:
      "Saison 4 très généreuse visuellement, avec une ambiance bien plus noire. J'attends surtout que la dernière salve revienne à quelque chose de plus resserré.",
    likes: 9,
  },
  {
    id: 3,
    author: "Luca",
    avatar: "L",
    time: "La semaine dernière",
    reaction: "4.6/5",
    content:
      "Le mélange pop culture, horreur et coming-of-age reste redoutable. Peu de séries grand public tiennent aussi bien la mythologie et l'attachement aux personnages.",
    likes: 17,
  },
];

function AdvertisementBlock() {
  return (
    <div className="rounded-sm bg-white/60 px-4 py-10 text-center text-3xl font-black uppercase tracking-[0.2em] text-black">
      PUB
    </div>
  );
}

function MediaCard({ item, tall = true, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-[24px] text-left"
    >
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div
          className={[
            "relative overflow-hidden rounded-[24px]",
            tall ? "aspect-[16/12]" : "aspect-[16/9]",
          ].join(" ")}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-black/45 ring-1 ring-white/10 backdrop-blur">
              <Play className="ml-0.5 h-4.5 w-4.5 fill-white text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-white">
              {item.title}
            </p>
            <p className="mt-1 text-[12px] text-white/60">{item.subtitle}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

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

function ShopCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[24px] text-left transition-colors"
    >
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-4 backdrop-blur transition-colors group-hover:bg-brand-dark/70">
        <div className="overflow-hidden rounded-[18px] bg-black/20">
          <img
            src={item.image}
            alt={item.title}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>
        <div className="px-1 pb-1 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            {item.type}
          </p>
          <h3 className="mt-2 text-[14px] font-semibold text-white">
            {item.title}
          </h3>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-[14px] font-extrabold text-white">
              {item.price}
            </span>
            <span className="rounded-full border border-brand-cyan/20 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-cyan">
              série dérivée
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function SimilarSeriesCard({ item, onClick }) {
  return (
    <button onClick={onClick} className="group text-left">
      <div className="overflow-hidden rounded-[20px] border border-white/10 bg-black/20 shadow-[0_14px_30px_rgba(0,0,0,.18)] transition-colors group-hover:border-brand-cyan/40">
        <img
          src={item.image}
          alt={item.title}
          className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/75 group-hover:text-brand-cyan transition-colors">
        {item.title}
      </p>
    </button>
  );
}

function SeriesCommentItem({ comment }) {
  return (
    <GradientFrame>
      <div className="p-7">
        <div className="flex gap-5">
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
              <p className="text-sm font-semibold text-white">
                {comment.author}
              </p>
              <span className="text-white/25">•</span>
              <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                {comment.time}
              </p>
              <span className="inline-flex items-center rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-2 py-1 text-xs text-brand-cyan">
                {comment.reaction}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/80">
              {comment.content}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs transition hover:border-brand-cyan/30 hover:bg-brand-cyan/10 hover:text-brand-cyan">
                J’aime ({comment.likes})
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs transition hover:border-brand-cyan/30 hover:bg-brand-cyan/10 hover:text-brand-cyan">
                Répondre
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs transition hover:border-brand-cyan/30 hover:bg-brand-cyan/10 hover:text-brand-cyan">
                Signaler
              </button>
            </div>
          </div>
        </div>
      </div>
    </GradientFrame>
  );
}

function SeriesCommentsComposer() {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        {SERIES_COMMENTS.map((comment) => (
          <SeriesCommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <GradientFrame>
        <div className="p-6">
          <div className="rounded-[22px] border border-brand-primary/20 bg-gradient-to-r from-brand-primary/10 to-brand-cyan/5 px-5 py-4 text-sm text-white">
            Rejoignez la discussion ou partagez votre avis sur cette série.
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/70">
                Pseudo
              </label>
              <input
                placeholder="Saisir un pseudo"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-brand-cyan/40 focus:bg-white/[0.06]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/70">
                Email
              </label>
              <input
                placeholder="Vous pouvez aussi ajouter un email"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-brand-cyan/40 focus:bg-white/[0.06]"
              />
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03]">
            <div className="flex flex-wrap items-center gap-4 border-b border-white/10 px-4 py-3 text-sm text-white/55">
              <span className="font-semibold text-brand-cyan">H1</span>
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
              className="w-full resize-none bg-transparent px-4 py-4 text-sm text-white outline-none transition focus:bg-white/[0.02]"
            />
          </div>

          <div className="mt-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex h-20 w-[300px] items-center rounded-2xl border border-white/10 bg-brand-dark/50 px-4 text-sm text-white/60">
              Captcha
            </div>

            <PrimaryButton>
              <Send className="h-4 w-4" />
              Commenter
            </PrimaryButton>
          </div>
        </div>
      </GradientFrame>
    </div>
  );
}

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

function GlassPanel({
  children,
  className = "",
  radius = "rounded-[28px]",
  bodyClassName = "",
}) {
  return (
    <div
      className={["group relative overflow-hidden", radius, className].join(
        " ",
      )}
    >
      <GradientRing radiusClass={radius} thickness={1.5} />
      <GradientRing radiusClass={radius} thickness={1.5} glow hoverGlow />
      <div
        className={[
          "relative bg-brand-dark/55 backdrop-blur",
          radius,
          bodyClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function GradientFrame({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] p-[1px] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(132,29,79,.38), rgba(30,108,134,.24), rgba(255,255,255,.06))",
      }}
    >
      <div className="rounded-[27px] border border-white/8 bg-[rgba(1,25,33,.68)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-2xl font-extrabold uppercase text-white">
          {title}
        </h2>
      </div>

      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="inline-flex items-center gap-2 text-base font-semibold  text-white transition hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 text-brand-cyan" />
        </button>
      ) : null}
    </div>
  );
}

function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01]",
        className,
      ].join(" ")}
      style={{ background: GRADIENT }}
    >
      {children}
    </button>
  );
}

export default function SeriesDetailsPage() {
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(0);
  const activeSeason = SEASONS_DATA[activeSeasonIndex];

  return (
    <div className="relative min-h-screen w-full bg-black font-montserrat text-gray-300">
      {/* Glows décoratifs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <section className="bg-gradient-to-r from-brand-primary/80 to-brand-cyan/60 text-white/80 px-12 py-4 font-medium tracking-wide">
          <div className="max-w-7xl mx-auto">
            <p>
              <span className="font-bold">Starring:</span> Hiroyuki Sanada,
              Cosmo Jarvis, Anna Sawai &nbsp;•&nbsp;{" "}
              <span className="font-bold">Creators:</span> Rachel Kondo, Justin
              Marks
            </p>
          </div>
        </section>
        <nav className="bg-black/80 border-b border-white/5 px-12 overflow-x-auto scrollbar-none backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex space-x-8 whitespace-nowrap">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-4 text-sm font-black tracking-widest relative transition-colors ${
                  tab.active
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.label}
                {tab.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-cyan" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* --- SECTION CONTENU PRINCIPAL / ÉPISODES --- */}
        <main className="max-w-7xl mx-auto py-28 space-y-8">
          {/* Grille de cartes d'épisodes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="space-y-4">
              {SEASONS_DATA.map((season, index) => {
                const isActive = index === activeSeasonIndex;
                return (
                  <motion.button
                    key={season.id}
                    layout
                    onClick={() => setActiveSeasonIndex(index)}
                    initial={false}
                    animate={{
                      height: isActive ? 300 : 96,
                    }}
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    className={[
                      "w-full text-left overflow-hidden rounded-2xl relative transition-colors",
                      isActive
                        ? "shadow-lg ring-1 ring-brand-cyan/50"
                        : "bg-brand-dark/70 hover:bg-brand-dark/90 cursor-pointer",
                    ].join(" ")}
                  >
                    {/* Background image that fully reveals when active */}
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${season.img}')` }}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                        scale: isActive ? 1 : 1.08,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <div
                      className={[
                        "absolute inset-0 pointer-events-none",
                        isActive
                          ? "bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/40"
                          : "bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/40",
                      ].join(" ")}
                    />

                    <div
                      className={[
                        "relative z-10 h-full",
                        isActive
                          ? "flex flex-col justify-end p-5"
                          : "flex items-center p-4",
                      ].join(" ")}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isActive ? (
                          <motion.div
                            key="active"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35, delay: 0.12 }}
                            className="space-y-4"
                          >
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">
                              {season.status}
                            </p>
                            <h2 className="text-3xl font-black leading-tight text-white">
                              {season.title}
                            </h2>
                            <p className="text-sm font-medium text-white/70">
                              {season.subtitle}
                            </p>
                            {season.description.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className="text-xs leading-relaxed text-white/60"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="inactive"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex w-full items-center justify-between"
                          >
                            <div>
                              <span className="text-base font-bold text-white drop-shadow">
                                {season.title}
                              </span>
                              <p className="text-sm font-medium text-white/70">
                                {season.subtitle}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeSeason.episodes.length > 0 ? (
                  activeSeason.episodes.map((ep) => (
                    <div
                      key={ep.id}
                      className="group cursor-pointer flex flex-col space-y-2"
                    >
                      {/* Vignette de l'épisode */}
                      <div className="relative aspect-video w-full bg-brand-dark/60 rounded-xl overflow-hidden shadow-md">
                        <img
                          src={ep.img}
                          alt={ep.title}
                          className="w-full h-full object-cover  opacity-60 group-hover:opacity-80 group-hover:scale-102 transition-all duration-300"
                        />

                        {/* Barre de progression optionnelle */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                          <div
                            className={`h-full bg-brand-cyan ${ep.progress}`}
                          />
                        </div>
                      </div>

                      {/* Métadonnées texte de l'épisode */}
                      <div className="space-y-1 pt-1">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                            {ep.episodeNumber}
                          </span>
                          <button className="text-gray-500 hover:text-white transition-colors">
                            <MoreVertical size={14} />
                          </button>
                        </div>
                        <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-brand-cyan transition-colors">
                          {ep.title}
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center rounded-2xl border border-white/5 bg-brand-dark/70 py-12 text-sm text-white/50">
                    Aucun épisode disponible pour {activeSeason.title}.
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <CastingSection />

        <div className="mt-32 max-w-7xl mx-auto">
          <SectionHeader
            title="Videos"
            rightLabel=""
            onRightClick={() => navigate("/shop")}
          />
          <TrailerSection />
        </div>

        <section className="mt-32 max-w-7xl mx-auto space-y-32">
          <AdvertisementBlock />

          <div>
            <div>
              <SectionHeader
                title="Shopping"
                rightLabel="Tout le shop"
                onRightClick={() => navigate("/shop")}
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {shopProducts.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div id="series-similaires">
            <SectionHeader
              title="Séries similaires à la série"
              rightLabel="Toutes les recos"
              onRightClick={() => navigate("/series")}
            />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {SIMILAR_SERIES.map((item) => (
                <SimilarSeriesCard
                  key={item.title}
                  item={item}
                  onClick={() => navigate("/series")}
                />
              ))}
            </div>
          </div>

          <div id="series-avis">
            <SectionHeader
              title="Avis des seriesaddict"
              rightLabel="Tous les avis"
              onRightClick={() => navigate("/user-space")}
            />
            <SeriesCommentsComposer />
          </div>
        </section>

        <div className="h-28"></div>
      </main>
    </div>
  );
}
