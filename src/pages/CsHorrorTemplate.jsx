import React from "react";
import {
  Play,
  ArrowRight,
  Info,
  Facebook,
  User,
  ChevronRight,
} from "lucide-react";

export default function CsHorrorTemplate() {
  // Liste des chaînes du sous-header
  const channels = [
    "FILM POPULAR",
    "CS HISTORY",
    "CS FILM",
    "CS HORROR",
    "CS MYSTERY",
    "JOJ CINEMA",
    "FAMILY",
  ];

  // Menu de navigation principal
  const navItems = [
    "TV program",
    "Archiv",
    "Reklama",
    "Jak naladit",
    "O nás",
    "Kontakt",
  ];

  // Liste des programmes (Horor Noci)
  const programList = [
    { day: "Pá", time: "00:00", title: "Černá smrt", active: false },
    { day: "So", time: "00:00", title: "Maniak", active: false },
    { day: "Ne", time: "00:00", title: "Hrůza v Salemu", active: true },
    { day: "Po", time: "00:00", title: "Bermudská příšera", active: false },
    { day: "Út", time: "00:00", title: "Hrůza v Salemu", active: false },
    {
      day: "St",
      time: "01:30",
      title: "Údolí smrti",
      active: false,
      hoverEffect: true,
    },
    { day: "Čt", time: "00:00", title: "Sneekweek filmu", active: false },
  ];

  // Cartes vidéo horizontales sous le hero banner
  const recommendedVideos = [
    {
      title: "Chlapec",
      year: "2016",
      duration: "97 minut",
      type: "Horor",
      active: true,
    },
    {
      title: "Petrolejová lampa",
      year: "2016",
      duration: "99 minut",
      type: "Horor",
    },
    {
      title: "Hory mají oči",
      year: "2016",
      duration: "99 minut",
      type: "Horor",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#121212] text-gray-300 font-sans selection:bg-lime-500 selection:text-black">
      {/* 1. TOP CHANNELS BAR */}
      <div className="w-full bg-[#181818] border-b border-neutral-800 text-[11px] font-bold tracking-wider text-gray-400">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start overflow-x-auto h-12 px-6 space-x-6">
          {channels.map((channel, idx) => (
            <span
              key={idx}
              className={`cursor-pointer whitespace-nowrap px-3 py-1.5 rounded transition-colors ${
                channel === "CS HORROR"
                  ? "bg-neutral-800 text-white border border-neutral-700"
                  : "hover:text-white"
              }`}
            >
              {channel}
            </span>
          ))}
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-neutral-900">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center space-x-1 font-black text-xl tracking-tight text-white cursor-pointer">
            <span className="text-lime-500">CS</span>
            <span>HORROR</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-white transition-colors text-gray-400"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-400">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-6 space-y-12">
        {/* 3. HERO BANNER SECTION */}
        <section className="relative w-full rounded-md overflow-hidden bg-[#1c1c1c] min-h-[460px] flex items-center">
          {/* Background Mock Image / Video placeholder */}
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=1200')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent z-10"></div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-xl p-8 lg:p-12 space-y-4">
            <div className="flex space-x-2">
              <span className="bg-lime-500 text-black font-extrabold text-[11px] px-2 py-0.5 rounded-sm">
                PO 25.8. o 20:00
              </span>
              <span className="bg-neutral-800 text-gray-300 font-semibold text-[11px] px-2 py-0.5 rounded-sm">
                premiera
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Chlapec
            </h1>

            <div className="flex items-center space-x-3 text-xs font-semibold text-gray-400">
              <span>2016</span>
              <span>•</span>
              <span>97 minut</span>
              <span>•</span>
              <span className="text-gray-300">Horor / Mysteriózní</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Greta je mladá Američanka, která začne po svém příjezdu do Anglie
              pracovat jako chůva v odlehlé vesnici. Po nástupu na místo zjistí,
              že osmiletý chlapec, o kterého se má starat, je porcelánová...
            </p>

            <button className="flex items-center space-x-2 text-xs font-bold text-white hover:text-lime-400 transition-colors pt-2 group">
              <span>Více o filmu</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Large Center Play Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-lg shadow-lime-500/20">
              <Play className="w-6 h-6 fill-black ml-1" />
            </button>
          </div>
        </section>

        {/* 4. CARDS UNDER HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedVideos.map((video, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-4 p-3 rounded-md transition-all cursor-pointer ${
                video.active
                  ? "bg-neutral-800/80 border border-neutral-700"
                  : "bg-[#181818] hover:bg-neutral-800"
              }`}
            >
              <div className="relative w-24 h-14 bg-neutral-900 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                <Play className="w-4 h-4 text-gray-400 fill-gray-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {video.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {video.year} | {video.duration} | {video.type}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 5. BOTTOM GRID SECTIONS (HOROR NOCI & HIGHLIGHTED) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column Left: Program Lineup (7 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-black tracking-widest text-white uppercase">
              Horor Noci
            </h3>

            <div className="space-y-1">
              {programList.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between px-4 py-2.5 rounded text-xs font-medium transition-all ${
                    item.active
                      ? "bg-lime-500 text-black font-bold"
                      : item.hoverEffect
                        ? "bg-neutral-800/90 text-white border-l-2 border-lime-500"
                        : "bg-[#161616] hover:bg-neutral-800 text-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={
                        item.active ? "text-black" : "text-gray-500 w-12"
                      }
                    >
                      {item.day} │ {item.time}
                    </span>
                    <span className={item.active ? "font-black" : "text-white"}>
                      {item.title}
                    </span>
                  </div>
                  {(item.active || item.hoverEffect) && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column Right: Big Feature Card (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-md overflow-hidden bg-[#181818] border border-neutral-800">
              {/* Media element mockup layout */}
              <div className="relative w-full h-56 bg-neutral-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800"
                  alt="Feature showcase"
                  className="w-full h-full object-cover opacity-60"
                />
                <span className="absolute top-4 left-4 bg-lime-500 text-black font-extrabold text-[10px] px-2 py-0.5 rounded-sm z-10">
                  PO 25.8. o 20:00
                </span>

                <button className="absolute right-4 bottom-4 w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center text-black shadow-lg">
                  <Play className="w-4 h-4 fill-black ml-0.5" />
                </button>
              </div>

              {/* Text Meta Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-black text-white">
                    Hrůza v Salemu
                  </h2>
                  <span className="text-[9px] font-bold border border-neutral-600 px-1 rounded text-gray-400">
                    HD
                  </span>
                </div>

                <p className="text-[11px] text-gray-500 font-semibold">
                  2010 │ Dokument / Válka / Zbraně
                </p>

                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  Greta je mladá Američanka, která začne po svém příjezdu do
                  Anglie pracovat jako chůva v odlehlé vesnici. Po nástupu na
                  místo zjistí, že osmiletý chlapec, o kterého se má starat, je
                  porcelánová...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. RECOMMENDED ARCHIVE FOOTER HEADER */}
        <section className="pt-4 border-t border-neutral-950 flex items-center justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-black uppercase text-white tracking-wider">
              Doporučené z archivu
            </h3>
            <p className="text-xs text-gray-500">
              Oblíbené dokumenty dostupné online
            </p>
          </div>
          <button className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-4 py-2 rounded transition-colors">
            Všechno
          </button>
        </section>
      </main>
    </div>
  );
}
