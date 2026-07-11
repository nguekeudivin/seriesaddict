import React, { useState } from "react";
import { Menu, Search, ChevronLeft, Play, Star } from "lucide-react";

export default function AvatarSeriesDetail() {
  const [activeSeason, setActiveSeason] = useState(1);
  const [hoveredEpisode, setHoveredEpisode] = useState(3); // Épisode 3 actif/sélectionné par défaut comme sur l'image

  const episodes = [
    {
      id: "01",
      title: "The Boy in the Iceberg",
      bgImage:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "02",
      title: "The Avatar Returns",
      bgImage:
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "03",
      title: "The Southern Air Temple",
      bgImage:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
      isCurrent: true,
    },
    {
      id: "04",
      title: "The Warriors of Kyoshi",
      bgImage:
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "05",
      title: "The King of Omashu",
      bgImage:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    // Conteneur Principal (Simule le fond d'écran général flouté de la page)
    <div className="relative min-h-screen w-full bg-[#1c1a17] p-8 flex items-center justify-center font-sans overflow-hidden select-none">
      {/* Background global décoratif de rechange si l'image principale charge lentement */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 blur-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80')",
        }}
      ></div>

      {/* LE PANNEAU DE L'INTERFACE PRINCIPALE */}
      <div className="relative w-full max-w-6xl aspect-[4/3] max-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col justify-between text-white p-10 md:p-14 border border-white/10">
        {/* Image de fond de l'interface (Paysage d'Avatar) */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-100 brightness-[0.65] contrast-[1.05]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')",
          }} // Remplace par l'artwork exact d'Avatar au besoin
        ></div>

        {/* Incrustation d'Aang à droite (avec effet de superposition et de découpe si nécessaire) */}
        {/* Note : Pour le design original, Aang dépasse légèrement du cadre. On utilise un positionnement absolu ciblé */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 z-10 pointer-events-none hidden md:block">
          <img
            src="https://i.ibb.co/Zxbp73K/aang-transparent.png" // À remplacer par ton asset PNG transparent d'Aang de dos
            alt="Aang"
            className="absolute bottom-0 right-[5%] h-[108%] max-w-none object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transform translate-y-[6%]"
          />
        </div>

        {/* 1. HEADER / NAVIGATION */}
        <header className="relative z-20 flex items-center justify-between w-full">
          {/* Menu Burger */}
          <button className="opacity-70 hover:opacity-100 transition-opacity">
            <Menu size={24} className="stroke-[1.5]" />
          </button>

          {/* Onglets centraux */}
          <nav className="flex items-center space-x-8 text-xs font-medium tracking-widest uppercase text-gray-300">
            <a
              href="#movies"
              className="hover:text-white transition-colors opacity-60"
            >
              Movies
            </a>
            <a
              href="#series"
              className="text-white border-b-2 border-cyan-400 pb-1 font-semibold"
            >
              Series
            </a>
            <a
              href="#sports"
              className="hover:text-white transition-colors opacity-60"
            >
              Sports
            </a>
            <a
              href="#music"
              className="hover:text-white transition-colors opacity-60"
            >
              Music
            </a>
          </nav>

          {/* Recherche */}
          <button className="opacity-70 hover:opacity-100 transition-opacity">
            <Search size={22} className="stroke-[1.5]" />
          </button>
        </header>

        {/* 2. CONTENU PRINCIPAL (TEXTES & INFOS) */}
        <main className="relative z-20 flex flex-col justify-center flex-grow max-w-2xl mt-4 space-y-6">
          {/* Bouton Retour */}
          <button className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-gray-300/80 hover:text-white transition-colors w-max">
            <ChevronLeft size={14} />
            <span>Return to Series</span>
          </button>

          {/* Titre Principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide font-serif text-white/95 leading-none">
            Avatar: The Last Airbender
          </h1>

          {/* Métadonnées & Étoiles */}
          <div className="flex items-center space-x-4 text-xs tracking-wider text-gray-300 font-medium">
            <span>2007</span>
            <span className="px-1.5 py-0.5 border border-gray-500 rounded-sm text-[10px] text-gray-400">
              YA-7
            </span>
            <span>3 Seasons</span>
            <div className="flex items-center space-x-0.5 pl-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-amber-400 stroke-amber-400"
                />
              ))}
            </div>
          </div>

          {/* Synopsis */}
          <p className="text-xs md:text-sm text-gray-300/80 leading-relaxed font-light tracking-wide max-w-xl">
            In a war-torn world of elemental magic, a young boy reawakens to
            undertake a dangerous mystic quest to fulfill his destiny as the
            Avatar, and bring peace to the world.
          </p>
        </main>

        {/* 3. SECTION NAVIGATION DES SAISONS & CARDS D'ÉPISODES */}
        <footer className="relative z-20 w-full mt-auto pt-6">
          {/* Selecteur de Saison */}
          <div className="flex items-center space-x-6 mb-4 text-sm tracking-wide">
            <button
              onClick={() => setActiveSeason(1)}
              className={`font-semibold transition-all ${activeSeason === 1 ? "text-white text-base font-bold" : "text-gray-400/60 hover:text-gray-200"}`}
            >
              Season 1
            </button>
            <button
              onClick={() => setActiveSeason(2)}
              className={`transition-all ${activeSeason === 2 ? "text-white text-base font-bold" : "text-gray-400/60 hover:text-gray-200"}`}
            >
              Season 2
            </button>
            <button
              onClick={() => setActiveSeason(3)}
              className={`transition-all ${activeSeason === 3 ? "text-white text-base font-bold" : "text-gray-400/60 hover:text-gray-200"}`}
            >
              Season 3
            </button>
          </div>

          {/* Liste horizontale des Épisodes */}
          <div className="grid grid-cols-5 gap-3 w-full">
            {episodes.map((ep) => {
              const isActive = ep.id === "03"; // Calqué sur le design (l'épisode 3 est en surbrillance / focus)

              return (
                <div
                  key={ep.id}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer border
                    ${
                      isActive
                        ? "ring-1 ring-white/40 shadow-xl scale-[1.02] border-white/20"
                        : "border-white/5 opacity-70 hover:opacity-90 hover:scale-[1.01]"
                    }`}
                >
                  {/* Image de l'épisode */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${ep.bgImage})` }}
                  ></div>

                  {/* Filtre de couleur/opacité sur la carte */}
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${isActive ? "bg-sky-950/40 backdrop-blur-[2px]" : "bg-black/40"}`}
                  ></div>

                  {/* Contenu textuel de la carte */}
                  <div className="absolute inset-0 p-3 flex flex-col justify-between z-10">
                    {/* Numéro de l'épisode */}
                    <span
                      className={`text-lg font-light tracking-wider ${isActive ? "text-white/90" : "text-white/60"}`}
                    >
                      {ep.id}
                    </span>

                    {/* Titre de l'épisode */}
                    <span className="text-[10px] font-medium tracking-wide truncate text-white/90">
                      {ep.title}
                    </span>
                  </div>

                  {/* Overlay spécifique pour l'épisode en cours de lecture (03) */}
                  {isActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-1">
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 hover:scale-110 transition-transform shadow-lg">
                        <Play
                          size={16}
                          className="fill-white text-white translate-x-[1px]"
                        />
                      </button>
                      <span className="text-[8px] tracking-widest text-white/70 uppercase pt-1">
                        Resume
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
}
