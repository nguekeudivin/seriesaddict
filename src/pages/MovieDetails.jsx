import React from "react";
import {
  ArrowLeft,
  Play,
  Eye,
  Star,
  Plus,
  Bell,
  Film,
  Loader2,
} from "lucide-react";

export default function MovieDetail() {
  // Liste fictive des artistes du bas avec leurs bordures colorées respectives
  const artists = [
    {
      id: 1,
      border: "border-amber-500",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      border: "border-blue-500",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      border: "border-pink-500",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      border: "border-orange-500",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      border: "border-cyan-500",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      border: "border-yellow-500",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      border: "border-purple-500",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      border: "border-fuchsia-500",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      border: "border-amber-600",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 10,
      border: "border-blue-600",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 11,
      border: "border-teal-500",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-hidden select-none">
      {/* Image de fond avec overlay dégradé */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=1800&auto=format&fit=crop&q=80"
          alt="Tiffany Haddish Background"
          className="w-full h-full object-cover object-center opacity-70"
        />
        {/* Dégradés précis pour isoler le texte et le bas de l'écran */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Contenu de la page */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-12 py-8">
        {/* SECTION NAVIGATION SUPÉRIEURE */}
        <header className="flex justify-between items-center">
          {/* Logo Humor */}
          <div className="flex items-center space-x-1 text-2xl font-black tracking-tight">
            <span>h</span>
            <span className="inline-block w-3 h-3 bg-white rounded-full mx-0.5"></span>
            <span>mor.</span>
          </div>

          {/* Profil Utilisateur Connecté */}
          <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Trevor Noah"
              className="w-8 h-8 rounded-full border border-white/20 object-cover"
            />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 leading-none">
                Logged in as
              </p>
              <p className="text-xs font-semibold text-white tracking-wide">
                Trevor Noah
              </p>
            </div>
          </div>
        </header>

        {/* Bouton Retour isolé */}
        <div className="mt-4">
          <button className="flex items-center space-x-2 text-xs font-medium text-gray-300 hover:text-white transition-colors">
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
        </div>

        {/* SECTION PRINCIPALE (CONTENU) */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-4">
          {/* Colonne Gauche : Infos, Titre et Description */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            {/* Label Originals */}
            <div className="flex items-center space-x-2 text-xs tracking-widest uppercase font-bold text-gray-300">
              <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-[9px]">
                ✦
              </span>
              <span>Originals</span>
            </div>

            {/* Titre du Show */}
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              The Ass That Kills
            </h1>

            {/* Métriques (Vues et Note) */}
            <div className="flex items-center space-x-6 text-sm text-gray-300 font-medium">
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-gray-400" />
                <span>20,000</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span>4.5</span>
              </div>
            </div>

            {/* Description & Bloc de lecture */}
            <div className="flex items-start space-x-6 pt-2">
              {/* Bouton Play */}
              <button className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-lg">
                <Play size={24} className="fill-black ml-1" />
              </button>

              {/* Texte descriptif */}
              <div className="max-w-md border-l-2 border-white/20 pl-4 space-y-3">
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  When she was younger, Tiffany Haddish made extra cash dancing
                  at bar mitzvahs, but a one-on-one dance with a grandpa took a
                  tragic turn.{" "}
                  <span className="text-gray-400">
                    (Contains strong language.)
                  </span>
                </p>
                <button className="text-[10px] font-black uppercase tracking-wider text-white hover:underline block">
                  View Less
                </button>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Actions secondaires & Compte à rebours */}
          <div className="lg:col-span-5 flex flex-col items-end justify-between h-full space-y-12 lg:space-y-0 lg:h-48">
            {/* Boutons d'actions horizontaux */}
            <div className="flex items-center space-x-6 text-xs font-semibold tracking-wide text-gray-200">
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <Bell size={14} />
                <span>Remind me later</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <Film size={14} />
                <span>Watch trailers</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <Plus size={14} />
                <span>Add to playlist</span>
              </button>
            </div>

            {/* Notification automatique du Trailer */}
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-xs">
              <span className="text-gray-300 font-medium">
                Trailer will play in{" "}
                <span className="text-white font-bold">10 seconds</span>
              </span>
              <Loader2 size={16} className="animate-spin text-white" />
            </div>
          </div>
        </main>

        {/* SECTION INFÉRIEURE : CARROUSEL DES ARTISTES */}
        <footer className="mt-auto pt-8 border-t border-white/10">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="text-white">Artists</span>
            <span className="text-white/30">|</span>
            <span className="text-white/40 hover:text-white cursor-pointer transition-colors">
              More
            </span>
          </div>

          {/* Grille d'avatars circulaires stylisés */}
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className={`flex-shrink-0 w-16 h-16 rounded-full border-2 ${artist.border} p-0.5 bg-black transition-transform hover:scale-110 cursor-pointer`}
              >
                <img
                  src={artist.img}
                  alt="Artist"
                  className="w-full h-full object-cover rounded-full filter grayscale contrast-125"
                />
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
