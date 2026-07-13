import React from "react";
import {
  Home,
  Tv,
  Film,
  Users,
  Heart,
  PlayCircle,
  Settings,
  Plus,
  Search,
  Bell,
  Play,
  Share2,
} from "lucide-react";

export default function TalePage() {
  return (
    <div className="flex h-screen w-full bg-[#0a111e] text-slate-300 font-sans overflow-hidden select-none">
      {/* 1. SIDEBAR DE NAVIGATION */}
      <aside className="w-24 h-full bg-[#111927] border-r border-slate-800 flex flex-col items-center justify-between py-6 z-10">
        {/* Logo de l'application */}
        <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 cursor-pointer hover:bg-cyan-400 transition-colors">
          <span className="text-white font-black text-xl tracking-wider">
            LOGO
          </span>
        </div>

        {/* Liens de navigation principaux */}
        <nav className="flex flex-col gap-6 w-full items-center">
          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-white group w-full py-2 transition-colors">
            <Home className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-medium">
              Home
            </span>
          </button>

          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-white group w-full py-2 transition-colors">
            <Tv className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-medium">
              TV Shows
            </span>
          </button>

          {/* Onglet actif (Movies) */}
          <button className="flex flex-col items-center justify-center text-cyan-400 border-l-2 border-cyan-400 group w-full py-2 bg-gradient-to-r from-cyan-500/10 to-transparent">
            <Film className="w-5 h-5 mb-1" />
            <span className="text-[10px] tracking-widest uppercase font-bold text-cyan-400">
              Movies
            </span>
          </button>

          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-white group w-full py-2 transition-colors">
            <Users className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-medium">
              Social
            </span>
          </button>

          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-white group w-full py-2 transition-colors">
            <Heart className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-medium">
              Favourite
            </span>
          </button>

          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-white group w-full py-2 transition-colors">
            <PlayCircle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-medium">
              Trailers
            </span>
          </button>

          <button className="flex flex-col items-center justify-center text-slate-400 hover:text-white group w-full py-2 transition-colors">
            <Settings className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-medium">
              Settings
            </span>
          </button>
        </nav>

        {/* Bouton Plus / Options bas de page */}
        <div className="flex flex-col items-center gap-4 text-slate-500">
          <div className="flex gap-1 items-center justify-center opacity-60">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rotate-45"></div>
          </div>
          <span className="text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
            | More
          </span>
        </div>
      </aside>

      {/* 2. ZONE DE CONTENU PRINCIPALE (Avec fond héro) */}
      <main
        className="flex-1 h-full relative flex flex-col justify-between p-12 overflow-y-auto bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 17, 30, 0.95) 30%, rgba(10, 17, 30, 0.5) 70%, rgba(10, 17, 30, 0.85)), url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000')`,
        }}
      >
        {/* BARRE DE RECHERCHE & PROFIL HAUT DROITE */}
        <header className="self-end flex items-center gap-4 z-10">
          <div className="flex items-center bg-slate-900/60 border border-slate-700/50 rounded-md px-3 py-1.5 backdrop-blur-sm">
            <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-transparent text-xs tracking-wider placeholder-slate-500 outline-none w-32 focus:w-48 transition-all text-white uppercase"
            />
          </div>
          <button className="relative p-2 bg-slate-900/60 border border-slate-700/50 rounded-md backdrop-blur-sm hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
          </button>
          <button className="bg-white text-slate-900 text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-md hover:bg-slate-200 transition-colors">
            Login
          </button>
        </header>

        {/* SECTION DÉTAILS DU FILM */}
        <div className="my-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 mt-12">
          {/* Contenu textuel principal */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h1 className="text-6xl font-black tracking-widest text-white uppercase drop-shadow-md">
                Interstellar
              </h1>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-slate-400 uppercase mt-2">
                <span className="text-white">2016</span>
                <span>•</span>
                <span>Run Time - 122 mins</span>
                <span>•</span>
                <span>Language - English</span>
              </div>
            </div>

            {/* Boutons d'actions rapides */}
            <div className="flex items-center gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs tracking-widest uppercase px-6 py-3 rounded flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5">
                <Play className="w-3.5 h-3.5 fill-current" /> Watch Trailer
              </button>
              <button className="bg-indigo-600/40 hover:bg-indigo-600/60 border border-indigo-500/30 text-indigo-200 font-bold text-xs tracking-widest uppercase px-6 py-3 rounded flex items-center gap-2 backdrop-blur-sm transition-all">
                <Heart className="w-3.5 h-3.5 fill-current text-indigo-400" />{" "}
                592 Likes
              </button>
            </div>

            {/* Description avec affiche miniature */}
            <div className="flex flex-col md:flex-row gap-6 pt-4 items-start">
              {/* Image Miniature */}
              <div className="relative w-36 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border border-slate-700 flex-shrink-0 group">
                <div className="absolute top-2 left-2 bg-green-600 text-white font-bold text-[9px] px-1.5 py-0.5 rounded z-10">
                  PG
                </div>
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500"
                  alt="Interstellar Poster Mini"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/40 to-transparent p-2 text-center">
                  <span className="text-[10px] font-bold text-white tracking-widest block uppercase">
                    Interstellar
                  </span>
                </div>
              </div>

              {/* Texte Synopsis & Tags */}
              <div className="space-y-4 max-w-xl">
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Interstellar chronicles the adventures of a group of explorers
                  who make use of a newly discovered wormhole to surpass the
                  limitations on human space travel and conquer the vast
                  distances involved in an interstellar voyage.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Science Fiction", "Drama", "Adventure"].map((genre) => (
                    <span
                      key={genre}
                      className="text-[10px] font-bold tracking-widest uppercase bg-slate-800/60 border border-slate-700/50 px-3 py-1 rounded text-slate-400"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. COLONNE DES JAUGE & RATING DE DROITE */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-8 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-md">
            {/* Jauge Circulaire principale */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-800"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-cyan-500 drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={263.8}
                  strokeDashoffset={263.8 - (263.8 * 78) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-white">78%</span>
              </div>
            </div>

            {/* Listes des barres de progression de scores secondaires */}
            <div className="flex-1 w-full space-y-4">
              <div>
                <div className="flex justify-between text-[11px] font-bold tracking-widest text-slate-400 mb-1">
                  <span>45% - Teeevo</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[45%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-bold tracking-widest text-slate-400 mb-1">
                  <span>60% - IMDB</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[60%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-bold tracking-widest text-slate-400 mb-1">
                  <span>50% - IMDB</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[50%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DES SOUS-ONGLETS */}
        <footer className="border-t border-slate-800/60 pt-4 mt-auto z-10">
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
            <button className="text-white border-b-2 border-cyan-400 pb-2">
              Cast & Crew
            </button>
            <button className="text-slate-500 hover:text-slate-300 pb-2 transition-colors">
              Gallery
            </button>
            <button className="text-slate-500 hover:text-slate-300 pb-2 transition-colors">
              Social
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
