export const SERIES = {
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

export const PROGRESS = {
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

export const SEASONS = [
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

export const VIDEOS = [
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

export const CAST = [
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

export const CREW = [
  { id: 1, name: "Matt Duffer", role: "Créateur / Réalisateur" },
  { id: 2, name: "Ross Duffer", role: "Créateur / Réalisateur" },
  { id: 3, name: "Shawn Levy", role: "Producteur exécutif" },
  { id: 4, name: "Dan Cohen", role: "Producteur" },
];

export const NEWS = [
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

export const COMMUNITY = {
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

export const SHOP = [
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

export const GALLERY = [
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

export const RECOMMENDATIONS = {
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

export const NAV_SECTIONS = [
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

export const CHANNELS = [
  "ACCUEIL",
  "SÉRIES",
  "FILMS",
  "CS HORROR",
  "CS MYSTERY",
  "DOCUMENTAIRES",
  "FAMILY",
];

export const MAIN_NAV = [
  "TV program",
  "Archiv",
  "Reklama",
  "Jak naladit",
  "O nás",
  "Kontakt",
];
