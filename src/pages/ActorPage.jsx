import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Calendar,
  MapPin,
  Globe,
  Briefcase,
  Ruler,
  Languages,
  Award,
  Play,
  ChevronDown,
  ChevronUp,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Film,
  Tv,
  Trophy,
  Clock,
} from "lucide-react";

const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const ACTOR = {
  name: "Pedro Pascal",
  originalName: "José Pedro Balmaceda Pascal",
  age: 50,
  birthDate: "2 avril 1975",
  birthPlace: "Santiago, Chili",
  nationality: "Chilien / Américain",
  professions: ["Acteur", "Réalisateur", "Producteur"],
  totalMovies: 38,
  totalSeries: 24,
  activeYears: "1996 - présent",
  totalEpisodes: 315,
  awards: 8,
  nominations: 31,
  height: "1,80 m",
  languages: ["Anglais", "Espagnol"],
  agency: "CAA (Creative Artists Agency)",
  website: "https://www.pedropascal.com",
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  photo:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  backdrop:
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80",
  summary:
    "Pedro Pascal est un acteur chilien-américain connu pour ses rôles dans Game of Thrones, Narcos, The Mandalorian et The Last of Us. Il est reconnu pour son charisme et ses rôles dans les séries dramatiques et de science-fiction.",
  biography: [
    "Pedro Pascal grandit au Chili et aux États-Unis. Il découvre le théâtre très jeune et étudie à la Tisch School of the Arts de New York.",
    "Après des apparitions dans de nombreuses séries télévisées, il obtient la reconnaissance internationale avec le rôle d'Oberyn Martell dans Game of Thrones en 2014.",
    "Il confirme son statut de star avec Narcos, The Mandalorian et The Last of Us, où il incarne des personnages complexes et protecteurs.",
  ],
  education: "Tisch School of the Arts, New York University",
  debut: "Premier rôle à la télévision en 1996 dans Buffy contre les vampires",
};

const STATS = [
  { label: "Années de carrière", value: "27", icon: Clock },
  { label: "Films", value: String(ACTOR.totalMovies), icon: Film },
  { label: "Séries", value: String(ACTOR.totalSeries), icon: Tv },
  { label: "Épisodes joués", value: String(ACTOR.totalEpisodes), icon: Play },
  { label: "Récompenses", value: String(ACTOR.awards), icon: Trophy },
  { label: "Nominations", value: String(ACTOR.nominations), icon: Award },
];

const LATEST_ROLES = [
  {
    id: 1,
    title: "The Last of Us",
    character: "Joel Miller",
    type: "Série",
    year: 2025,
    rating: 4.8,
    poster:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "The Mandalorian",
    character: "Din Djarin",
    type: "Série",
    year: 2023,
    rating: 4.7,
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Gladiator II",
    character: "Marcus Acacius",
    type: "Film",
    year: 2024,
    rating: 4.3,
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Wonder Woman 1984",
    character: "Maxwell Lord",
    type: "Film",
    year: 2020,
    rating: 3.8,
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
  },
];

const FILMOGRAPHY = [
  {
    id: 1,
    title: "The Last of Us",
    year: 2023,
    role: "Acteur",
    character: "Joel Miller",
    episodes: 18,
    rating: 4.8,
    type: "Série",
    poster:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "The Mandalorian",
    year: 2019,
    role: "Acteur",
    character: "Din Djarin",
    episodes: 24,
    rating: 4.7,
    type: "Série",
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Narcos",
    year: 2015,
    role: "Acteur",
    character: "Javier Peña",
    episodes: 30,
    rating: 4.6,
    type: "Série",
    poster:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Game of Thrones",
    year: 2014,
    role: "Acteur",
    character: "Oberyn Martell",
    episodes: 7,
    rating: 4.9,
    type: "Série",
    poster:
      "https://images.unsplash.com/photo-1605218427360-6961f2edd471?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Gladiator II",
    year: 2024,
    role: "Acteur",
    character: "Marcus Acacius",
    rating: 4.3,
    type: "Film",
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "The Unbearable Weight of Massive Talent",
    year: 2022,
    role: "Acteur",
    character: "Javi Gutierrez",
    rating: 4.1,
    type: "Film",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
  },
];

const CHARACTERS = [
  {
    id: 1,
    name: "Joel Miller",
    show: "The Last of Us",
    description:
      "Un homme endurci par l'apocalypse, prêt à tout pour protéger Ellie.",
    popularity: 5,
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Din Djarin",
    show: "The Mandalorian",
    description: "Un chasseur de primes solitaire avec un code d'honneur.",
    popularity: 4.8,
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Oberyn Martell",
    show: "Game of Thrones",
    description: "Le prince venger dont la soif de justice le mène à sa perte.",
    popularity: 4.9,
    image:
      "https://images.unsplash.com/photo-1605218427360-6961f2edd471?auto=format&fit=crop&w=600&q=80",
  },
];

const AWARDS = [
  { year: 2024, title: "Emmy Awards", category: "Meilleur acteur", won: true },
  {
    year: 2024,
    title: "Golden Globes",
    category: "Meilleur acteur",
    won: true,
  },
  { year: 2023, title: "SAG Awards", category: "Meilleur acteur", won: true },
  {
    year: 2023,
    title: "Critics Choice",
    category: "Meilleur acteur",
    won: true,
  },
  {
    year: 2022,
    title: "Saturn Awards",
    category: "Meilleur acteur",
    won: true,
  },
  {
    year: 2021,
    title: "MTV Movie & TV Awards",
    category: "Meilleure performance",
    won: true,
  },
  {
    year: 2020,
    title: "Gold Derby TV Awards",
    category: "Meilleur acteur",
    won: true,
  },
  {
    year: 2019,
    title: "Saturn Awards",
    category: "Meilleur acteur",
    won: true,
  },
];

const NEWS = [
  {
    id: 1,
    title: "Pedro Pascal confirmé dans le prochain film de Ridley Scott",
    summary: "Le casting du prochain film historique prend forme.",
    date: "18 juillet 2026",
    source: "Variety",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Interview exclusive : Pedro Pascal revient sur The Last of Us",
    summary: "L'acteur partage ses réflexions sur la saison 2.",
    date: "12 juillet 2026",
    source: "Hollywood Reporter",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Nouvelle bande-annonce de Gladiator II",
    summary: "Pedro Pascal en tête d'affiche dans la suite épique.",
    date: "5 juillet 2026",
    source: "Allociné",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80",
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Interview Cannes 2024",
    type: "Interview",
    duration: "12:45",
    views: 2400000,
    date: "20 mai 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Bande-annonce The Last of Us Saison 2",
    type: "Bande-annonce",
    duration: "2:34",
    views: 8500000,
    date: "10 mars 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Making-of The Mandalorian",
    type: "Making-of",
    duration: "18:20",
    views: 1200000,
    date: "15 décembre 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
  },
];

function SectionHeader({ title, rightLabel = null }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-5 w-1 ${ACCENT_GRADIENT} rounded-full`} />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
          {title}
        </h2>
      </div>
      {rightLabel && (
        <button className="text-xs font-semibold text-brand-cyan hover:text-white transition-colors">
          {rightLabel}
        </button>
      )}
    </div>
  );
}

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < Math.round(rating) ? "fill-yellow-400" : "text-white/20"
          }
        />
      ))}
    </div>
  );
}

function SocialIcon({ href, icon: Icon }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}

export default function ActorPage() {
  const [bioOpen, setBioOpen] = useState(false);
  const [filter, setFilter] = useState("Tout");
  const [sort, setSort] = useState("Plus récent");

  const filters = [
    "Tout",
    "Films",
    "Séries",
    "Animation",
    "Documentaires",
    "Apparitions",
    "Production",
    "Réalisation",
  ];
  const sortOptions = [
    "Plus récent",
    "Plus ancien",
    "Mieux noté",
    "Plus populaire",
  ];

  const filteredFilmography = useMemo(() => {
    let items = [...FILMOGRAPHY];
    if (filter !== "Tout") {
      items = items.filter((item) => {
        if (filter === "Films") return item.type === "Film";
        if (filter === "Séries") return item.type === "Série";
        return true;
      });
    }
    if (sort === "Plus récent") items.sort((a, b) => b.year - a.year);
    if (sort === "Plus ancien") items.sort((a, b) => a.year - b.year);
    if (sort === "Mieux noté")
      items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return items;
  }, [filter, sort]);

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative min-h-[70vh] w-full overflow-hidden text-white select-none">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={ACTOR.backdrop}
            alt={ACTOR.name}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-wine/80 to-brand-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Decorative accent glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 z-0 h-[32rem] w-[32rem] rounded-full bg-brand-cyan/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 z-0 h-80 w-80 rounded-full bg-brand-primary/25 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-start gap-8 min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img
                src={ACTOR.photo}
                alt={ACTOR.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 pb-4"
          >
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-2">
              {ACTOR.name}
            </h1>
            <p className="text-white/60 text-lg mb-6">
              {ACTOR.originalName} • {ACTOR.age} ans
            </p>

            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Calendar size={14} className="text-brand-cyan" />
                <span>{ACTOR.birthDate}</span>
                <span className="mx-1 h-3.5 w-[1px] bg-white/25" />
                <MapPin size={14} className="text-brand-cyan" />
                <span>{ACTOR.birthPlace}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Ruler size={14} className="text-brand-cyan" />
                <span>{ACTOR.height}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Globe size={14} className="text-brand-cyan" />
                <span>{ACTOR.nationality}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Briefcase size={14} className="text-brand-cyan" />
                <span>{ACTOR.professions.join(", ")}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Languages size={14} className="text-brand-cyan" />
                <span>{ACTOR.languages.join(", ")}</span>
              </div>
            </div>

            <div className="">
              <p className="text-white/80 leading-relaxed mb-4">
                {ACTOR.summary}
              </p>

              <div
                className={`overflow-hidden transition-all duration-300 ${bioOpen ? "max-h-96" : "max-h-0"}`}
              >
                <div className="space-y-4 text-white/70 text-sm pt-2 pb-4">
                  {ACTOR.biography.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <p>
                    <span className="text-white font-semibold">
                      Formation :
                    </span>{" "}
                    {ACTOR.education}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Débuts :</span>{" "}
                    {ACTOR.debut}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setBioOpen(!bioOpen)}
                className="flex items-center gap-2 text-brand-cyan font-semibold text-sm hover:text-white transition-colors"
              >
                {bioOpen ? "Réduire" : "Biographie complète"}
                {bioOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {/* Statistiques intégrées au hero */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-6">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/10  p-4 text-center backdrop-blur transition-all duration-300 hover:border-brand-cyan/40 hover:from-white/15 hover:to-white/10"
                  >
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-primary/30 ring-1 ring-brand-primary/30">
                      <Icon size={16} className="text-brand-cyan-400" />
                    </div>
                    <div className="text-2xl font-black text-brand-cyan-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-white/60">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <SocialIcon href={ACTOR.socials.instagram} icon={Instagram} />
              <SocialIcon href={ACTOR.socials.twitter} icon={Twitter} />
              <SocialIcon href={ACTOR.socials.facebook} icon={Facebook} />
              <SocialIcon href={ACTOR.socials.youtube} icon={Youtube} />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Derniers rôles */}
        <section>
          <SectionHeader title="Derniers rôles" rightLabel="Tout voir" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {LATEST_ROLES.map((role) => (
              <div
                key={role.id}
                className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/50 transition-colors"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={role.poster}
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-brand-cyan font-semibold">
                      {role.type}
                    </span>
                    <span className="text-xs text-white/50">{role.year}</span>
                  </div>
                  <h3 className="font-bold text-white mb-1 truncate">
                    {role.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-2 truncate">
                    {role.character}
                  </p>
                  <RatingStars rating={role.rating} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filmographie */}
        <section>
          <SectionHeader title="Filmographie" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    filter === f
                      ? "bg-brand-primary text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50">Trier par</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-brand-primary"
              >
                {sortOptions.map((o) => (
                  <option key={o} value={o} className="bg-brand-dark">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFilmography.map((work) => (
              <div
                key={work.id}
                className="flex gap-4 bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-brand-primary/50 transition-colors"
              >
                <div className="w-24 h-36 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={work.poster}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h3 className="font-bold truncate">{work.title}</h3>
                  <p className="text-sm text-white/60 mb-1">{work.year}</p>
                  <p className="text-sm text-white/80 truncate">
                    {work.character}
                  </p>
                  <p className="text-xs text-brand-cyan mb-2">
                    {work.role}{" "}
                    {work.episodes ? `• ${work.episodes} épisodes` : ""}
                  </p>
                  <RatingStars rating={work.rating} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personnages incarnés */}
        <section>
          <SectionHeader title="Personnages emblématiques" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CHARACTERS.map((char) => (
              <div
                key={char.id}
                className="relative rounded-2xl overflow-hidden border border-white/10 group"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold mb-1">{char.name}</h3>
                  <p className="text-sm text-brand-cyan mb-2">{char.show}</p>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {char.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Actualités */}
        <section>
          <SectionHeader
            title="Actualités"
            rightLabel="Toutes les actualités"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {NEWS.map((article) => (
              <div
                key={article.id}
                className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-xs text-white/50">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.source}</span>
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vidéos */}
        <section>
          <SectionHeader title="Vidéos" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              >
                <div className="aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="fill-white text-white ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 rounded text-xs font-semibold">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4 bg-white/5">
                  <span className="text-xs text-brand-cyan font-semibold">
                    {video.type}
                  </span>
                  <h3 className="font-bold text-sm mt-1 line-clamp-1">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-white/50">
                    <span>{video.views.toLocaleString()} vues</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Récompenses & nominations */}
        <section>
          <SectionHeader title="Récompenses & nominations" />
          <div className="relative pl-6">
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-primary to-brand-cyan" />
            <div className="space-y-6">
              {AWARDS.map((award) => (
                <div
                  key={`${award.year}-${award.title}`}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-primary flex items-center justify-center">
                    {award.won ? (
                      <Award size={12} className="text-yellow-400" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                    )}
                  </div>
                  <div className="text-sm text-brand-cyan font-bold mb-0.5">
                    {award.year}
                  </div>
                  <h3 className="font-bold">{award.title}</h3>
                  <p className="text-sm text-white/60">
                    {award.category} {award.won ? "• Lauréat" : "• Nomination"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
