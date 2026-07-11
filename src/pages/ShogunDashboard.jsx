import React from "react";
import {
  Play,
  Plus,
  MoreVertical,
  ArrowLeft,
  Eye,
  Star,
  Bell,
  Film,
  Loader2,
} from "lucide-react";

export default function ShogunDashboard() {
  const navTabs = [
    { id: "episodes", label: "EPISODES", active: true },
    { id: "dub", label: "SHŌGUN (ENGLISH DUB)", active: false },
    { id: "podcast", label: "SHŌGUN (PODCAST)", active: false },
    { id: "behind", label: "SHŌGUN (BEHIND THE SCENES)", active: false },
    { id: "like", label: "YOU MAY ALSO LIKE", active: false },
    { id: "extras", label: "EXTRAS", active: false },
    { id: "details", label: "DETAILS", active: false },
  ];

  const episodes = [
    {
      id: 1,
      episodeNumber: "EPISODE 1",
      title: "Anjin",
      description:
        "Destinies converge in Japan after a barbarian ship washes ashore in a poor fishing village.",
      img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=60",
      progress: "w-1/3", // Simule une barre de lecture entamée
    },
    {
      id: 2,
      episodeNumber: "EPISODE 2",
      title: "Servants of Two Masters",
      description:
        "Blackthorne's arrival in Osaka stirs up a hornet's nest of rivalries.",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=60",
      progress: "w-0",
    },
    {
      id: 3,
      episodeNumber: "EPISODE 3",
      title: "Tomorrow Is Tomorrow",
      description:
        "After Blackthorne survives a brazen assassination attempt, Toranaga realizes he must ferry his allies out of Osaka or risk certain defeat.",
      img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=60",
      progress: "w-0",
    },
    {
      id: 4,
      episodeNumber: "EPISODE 4",
      title: "The Eightfold Fence",
      description:
        "Blackthorne and Mariko test their new alliance as they train Toranaga's gun regiment for war.",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=60",
      progress: "w-0",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#1a1d24] text-gray-300 font-sans antialiased selection:bg-[#4ca6a4] selection:text-black">
      <div className="max-w-[1280px] mx-auto bg-[#14161d] shadow-2xl relative">
        {/* --- SECTION HERO BANNER (style MovieDetails) --- */}
        <section className="relative min-h-[600px] w-full overflow-hidden text-white select-none">
          {/* Image de fond avec overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&auto=format&fit=crop&q=80"
              alt="Shogun Background"
              className="h-full w-full object-cover object-top opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14161d] via-[#14161d]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-transparent to-[#14161d]/40" />
          </div>

          <div className="relative z-10 flex min-h-[600px] flex-col justify-between px-12 py-8">
            {/* Header */}
            <header className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-2xl font-black tracking-tight">
                <span className="border border-white/20 bg-black/20 px-2 py-1 font-serif text-lg tracking-widest backdrop-blur-sm">
                  FX
                </span>
                <span className="font-serif tracking-widest">SHŌGUN</span>
              </div>

              <div className="flex items-center space-x-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Trevor Noah"
                  className="h-8 w-8 rounded-full border border-white/20 object-cover"
                />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-gray-400">
                    Logged in as
                  </p>
                  <p className="text-xs font-semibold tracking-wide text-white">
                    Trevor Noah
                  </p>
                </div>
              </div>
            </header>

            {/* Bouton retour */}
            <div className="mt-4">
              <button className="flex items-center space-x-2 text-xs font-medium text-gray-300 transition-colors hover:text-white">
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            </div>

            {/* Contenu principal */}
            <main className="my-auto grid grid-cols-1 items-center gap-8 pt-4 lg:grid-cols-12">
              {/* Colonne Gauche : Infos, Titre et Description */}
              <div className="flex flex-col space-y-5 lg:col-span-7">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-300">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[9px]">
                    ✦
                  </span>
                  <span>FX Originals</span>
                </div>

                <h1 className="text-5xl font-black leading-none tracking-tight text-white lg:text-6xl">
                  SHŌGUN
                </h1>

                <div className="flex items-center space-x-6 text-sm font-medium text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-gray-400" />
                    <span>8,500,000</span>
                  </div>
                  <div className="h-4 w-px bg-white/30" />
                  <div className="flex items-center space-x-2">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span>4.9</span>
                  </div>
                </div>

                <div className="flex items-start space-x-6 pt-2">
                  <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105">
                    <Play size={24} className="fill-black ml-1" />
                  </button>

                  <div className="max-w-md space-y-3 border-l-2 border-white/20 pl-4">
                    <p className="text-xs font-light leading-relaxed text-gray-300">
                      Based on James Clavell's novel, FX's Shōgun is set in
                      Japan in the year 1600 at the dawn of a century-defining
                      civil war. Lord Yoshii Toranaga fights for his life as his
                      enemies on the Council of Regents unite against him.
                    </p>
                    <button className="block text-[10px] font-black uppercase tracking-wider text-white hover:underline">
                      View Less
                    </button>
                  </div>
                </div>
              </div>

              {/* Colonne Droite : Actions secondaires & Compte à rebours */}
              <div className="flex h-full flex-col items-end justify-between space-y-12 lg:col-span-5 lg:h-48 lg:space-y-0">
                <div className="flex items-center space-x-6 text-xs font-semibold tracking-wide text-gray-200">
                  <button className="flex items-center space-x-2 transition-colors hover:text-white">
                    <Bell size={14} />
                    <span>Remind me later</span>
                  </button>
                  <button className="flex items-center space-x-2 transition-colors hover:text-white">
                    <Film size={14} />
                    <span>Watch trailers</span>
                  </button>
                  <button className="flex items-center space-x-2 transition-colors hover:text-white">
                    <Plus size={14} />
                    <span>Add to playlist</span>
                  </button>
                </div>

                <div className="flex items-center space-x-3 rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-xs backdrop-blur-md">
                  <span className="font-medium text-gray-300">
                    Trailer will play in{" "}
                    <span className="font-bold text-white">10 seconds</span>
                  </span>
                  <Loader2 size={16} className="animate-spin text-white" />
                </div>
              </div>
            </main>

            {/* Carousel d'épisodes en pied */}
            <footer className="mt-auto border-t border-white/10 pt-6">
              <div className="mb-4 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest">
                <span className="text-white">Episodes</span>
                <span className="text-white/30">|</span>
                <span className="cursor-pointer text-white/40 transition-colors hover:text-white">
                  More
                </span>
              </div>
              <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none">
                {episodes.map((ep) => (
                  <div
                    key={ep.id}
                    className="group w-40 shrink-0 cursor-pointer space-y-2"
                  >
                    <div className="relative aspect-video overflow-hidden rounded bg-neutral-900">
                      <img
                        src={ep.img}
                        alt={ep.title}
                        className="h-full w-full object-cover opacity-70 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        <Play className="h-5 w-5 fill-white text-white" />
                      </div>
                    </div>
                    <p className="truncate text-[10px] font-bold text-white">
                      {ep.episodeNumber}
                    </p>
                    <p className="truncate text-[10px] text-gray-400">
                      {ep.title}
                    </p>
                  </div>
                ))}
              </div>
            </footer>
          </div>
        </section>

        {/* --- BARRE DES CRÉDITS / CASTING (TURQUOISE) --- */}
        <section className="bg-[#4ca6a4]/90 text-neutral-900 px-12 py-3 text-xs font-medium tracking-wide">
          <p>
            <span className="font-bold">Starring:</span> Hiroyuki Sanada, Cosmo
            Jarvis, Anna Sawai &nbsp;•&nbsp;{" "}
            <span className="font-bold">Creators:</span> Rachel Kondo, Justin
            Marks
          </p>
        </section>

        {/* --- NAVIGATION DES ONGLETS (TABS) --- */}
        <nav className="bg-[#1b1e25] border-b border-white/5 px-12 overflow-x-auto scrollbar-none">
          <div className="flex space-x-8 whitespace-nowrap">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-4 text-[11px] font-black tracking-widest relative transition-colors ${
                  tab.active
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.label}
                {tab.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4ca6a4]" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* --- SECTION CONTENU PRINCIPAL / ÉPISODES --- */}
        <main className="px-12 py-8 space-y-6">
          {/* Sélecteur de saison */}
          <div className="max-w-[200px]">
            <div className="bg-[#242832] border border-white/10 rounded px-4 py-2 text-xs font-bold text-white flex justify-between items-center cursor-pointer">
              <span>Season 1</span>
              <span className="text-gray-400 text-[10px]">▼</span>
            </div>
          </div>

          {/* Grille de cartes d'épisodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                className="group cursor-pointer flex flex-col space-y-2"
              >
                {/* Vignette de l'épisode */}
                <div className="relative aspect-video w-full bg-[#20232b] rounded overflow-hidden shadow-md">
                  <img
                    src={ep.img}
                    alt={ep.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-102 transition-all duration-300"
                  />

                  {/* Barre de progression optionnelle */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div className={`h-full bg-[#4ca6a4] ${ep.progress}`} />
                  </div>

                  {/* Tag STORM discret sur l'image */}
                  <span className="absolute bottom-2 right-2 text-[9px] font-black text-green-500 tracking-tighter opacity-70">
                    STORM
                  </span>
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
                  <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-[#4ca6a4] transition-colors">
                    {ep.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light line-clamp-3">
                    {ep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
