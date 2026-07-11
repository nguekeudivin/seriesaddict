import React from "react";
import { Play } from "lucide-react";

export default function JungleQueenDashboard() {
  return (
    <div className="min-h-screen w-full bg-[#030d12] flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden select-none">
      {/* CADRE PRINCIPAL DE L'INTERFACE */}
      <div
        className="relative w-full max-w-7xl aspect-[16/11] rounded-[24px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col justify-between p-6 md:p-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(3, 13, 18, 0.4), rgba(3, 13, 18, 0.85)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600')`,
          // Remplacez par le fond de forêt magique cyan/lumineux exact si disponible
        }}
      >
        {/* Glow central pour accentuer la lumière cyan derrière la silhouette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

        {/* ================= BARRE DE NAVIGATION SUPÉRIEURE ================= */}
        <header className="relative z-10 flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-white font-black tracking-widest text-lg">
            AR SHAKIR
          </div>

          {/* Menu principal */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] font-medium tracking-wider text-white/80">
            <button className="flex items-center gap-1 hover:text-white transition">
              Meet the cast <span className="text-[9px] text-cyan-400">▼</span>
            </button>
            <button className="hover:text-white transition">
              Director Message
            </button>
            <button className="hover:text-white transition">
              The Storyline
            </button>
            <button className="hover:text-white transition">Trivia</button>
            <button className="hover:text-white transition">Characters</button>
          </nav>
        </header>

        {/* ================= ZONE CENTRALE ET COLONNES DE CONTENU ================= */}
        <div className="relative z-10 grid grid-cols-12 flex-1 items-center my-4">
          {/* COLONNE GAUCHE : Liens Verticaux */}
          <div className="col-span-1 hidden md:flex flex-col items-start space-y-12 text-[10px] tracking-[0.2em] uppercase font-medium text-white/50 origin-left">
            <div className="rotate-270 -translate-x-4 whitespace-nowrap cursor-pointer hover:text-white transition">
              The Team Behind
            </div>
            <div className="rotate-270 -translate-x-4 whitespace-nowrap cursor-pointer hover:text-white transition">
              The Fantasy
            </div>
            <div className="rotate-270 -translate-x-4 whitespace-nowrap cursor-pointer hover:text-white transition">
              The Idea
            </div>
          </div>

          {/* COLONNE 2 : Métadonnées Gauches (Année, Réalisateur, Première) */}
          <div className="col-span-3 md:col-span-2 flex flex-col space-y-8 text-left pl-2 md:pl-0">
            <div>
              <span className="block text-[9px] tracking-[0.15em] uppercase font-bold text-white/40 mb-1">
                Year
              </span>
              <span className="block text-sm md:text-base font-black tracking-wide text-white uppercase">
                2045 BC
              </span>
              <div className="w-[2px] h-6 bg-gradient-to-b from-red-600 to-transparent mx-auto ml-4 mt-2 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </div>
            <div>
              <span className="block text-[9px] tracking-[0.15em] uppercase font-bold text-white/40 mb-1">
                Directed by
              </span>
              <span className="block text-sm md:text-base font-black tracking-wide text-white uppercase">
                AR SHAKIR
              </span>
              <div className="w-[2px] h-6 bg-gradient-to-b from-red-600 to-transparent mx-auto ml-4 mt-2 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </div>
            <div>
              <span className="block text-[9px] tracking-[0.15em] uppercase font-bold text-white/40 mb-1">
                Premiers on
              </span>
              <span className="block text-sm md:text-base font-black tracking-wide text-white uppercase whitespace-nowrap">
                23 Feb 2024
              </span>
            </div>
          </div>

          {/* CENTRE : Titre Accrocheur Majeur et Silhouette Éléments */}
          <div className="col-span-9 md:col-span-6 flex flex-col items-center justify-center text-center relative px-2">
            {/* Titre superposé avec effets spécifiques */}
            <h2 className="text-4xl sm:text-5xl lg:text-[76px] font-black tracking-tighter leading-[0.9] text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-10 select-none">
              <span className="block text-left pl-6">People</span>
              <span className="block text-left relative">
                {/* Effet rouge "DIE" */}
                <span className="text-red-600 relative inline-block mr-2 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                  Die
                  {/* Effet goutte de sang simulé sous le texte */}
                  <span className="absolute left-1 bottom-[-6px] w-[2px] h-3 bg-red-600 rounded-full" />
                  <span className="absolute left-6 bottom-[-10px] w-[2px] h-4 bg-red-600 rounded-full" />
                  <span className="absolute right-2 bottom-[-4px] w-[2px] h-2 bg-red-600 rounded-full" />
                </span>
                Legacy
              </span>
              <span className="block text-left pl-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Does Not
              </span>
            </h2>

            {/* Bouton d'action direct sous le titre */}
            <div className="w-full text-left mt-6 pl-6 z-10">
              <button className="text-[10px] font-bold tracking-[0.2em] text-white uppercase border-b-2 border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition">
                Buy Tickets
              </button>
            </div>

            {/* Image Silhouette de la Reine au centre (doit être détourée) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mix-blend-luminosity opacity-90 translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" // Remplacez par le PNG de la silhouette exacte au milieu
                alt="Queen Silhouette"
                className="h-[120%] object-contain mask-linear-gradient"
                style={{
                  clipPath: "polygon(15% 0%, 85% 0%, 75% 100%, 25% 100%)",
                }} // Simulation grossière de silhouette pour l'exemple d'intégration
              />
            </div>
          </div>

          {/* COLONNE DROITE : Métadonnées Droites & Miniature Vidéo */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-end space-y-10 md:space-y-16 text-right mt-6 md:mt-0">
            <div>
              <span className="block text-[9px] tracking-[0.15em] uppercase font-bold text-white/40 mb-1">
                Genre
              </span>
              <span className="block text-sm md:text-base font-black tracking-wide text-white uppercase">
                Adventure
              </span>
              <div className="w-[2px] h-6 bg-gradient-to-b from-red-600 to-transparent mr-4 mt-2 shadow-[0_0_8px_rgba(220,38,38,0.8)] inline-block" />
            </div>

            <div>
              <span className="block text-[9px] tracking-[0.15em] uppercase font-bold text-white/40 mb-1">
                Production
              </span>
              <span className="block text-sm md:text-base font-black tracking-wide text-white uppercase">
                Black Hole
              </span>
            </div>

            {/* Miniature vidéo cliquable avec le monstre */}
            <div
              className="relative w-44 md:w-52 aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400')`,
              }}
            >
              <div className="absolute inset-0 bg-red-950/30 mix-blend-color-burn group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/40 transition">
                  <Play
                    size={12}
                    className="text-white fill-white translate-x-[1px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION INFÉRIEURE (TITRE FILIGRANE & LOGOS) ================= */}
        <footer className="relative z-10 w-full mt-auto">
          {/* Titre Géant en arrière-plan évidé (JUNGLE QUEEN) */}
          <div className="w-full text-center pointer-events-none select-none my-2 overflow-hidden max-h-20 flex items-center justify-center">
            <h1
              className="text-5xl sm:text-7xl md:text-[105px] font-black tracking-[0.15em] text-transparent uppercase whitespace-nowrap opacity-25"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}
            >
              Jungle Queen
            </h1>
          </div>

          <hr className="border-white/5 my-4" />

          {/* Ligne des Réseaux et des Partenaires */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Icônes Sociales (Gauche) */}
            <div className="flex items-center space-x-5 text-white/40 text-xs">
              <span className="hover:text-white cursor-pointer font-bold">
                in
              </span>
              <span className="hover:text-white cursor-pointer font-bold">
                💬
              </span>
              <span className="hover:text-white cursor-pointer font-bold">
                𝕏
              </span>
              <span className="hover:text-white cursor-pointer text-sm font-bold">
                ∞
              </span>
            </div>

            {/* Grille des Logos Partenaires / Sponsors (Droite) */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-60 text-white font-serif tracking-widest text-[10px] md:text-xs">
              <span className="font-bold uppercase tracking-tighter">
                The Hayden
              </span>
              <span className="font-sans uppercase font-black text-center leading-none">
                Good
                <br />
                <span className="font-light text-[8px]">Mood</span>
              </span>
              <span className="font-mono font-bold tracking-tight">
                🌾 GOODNESS
              </span>
              <span className="border border-white/40 px-2 py-0.5 font-sans text-[9px]">
                GRAND GOLDEN GALLERY
              </span>
              <span className="font-sans italic font-bold">Parker & Co.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
