import { useNavigate } from "react-router-dom";
import {
  Play,
  Plus,
  Eye,
  Star,
  Bell,
  Film,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { SERIES, VIDEOS } from "./data";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden rounded-md text-white select-none">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={SERIES.backdrop}
          alt={SERIES.title}
          className="h-full w-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14161d] via-[#14161d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-transparent to-[#14161d]/40" />
      </div>

      <div className="relative z-10 flex min-h-[600px] flex-col justify-between px-6 py-6 lg:px-12 lg:py-8">
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
              {SERIES.title}
            </h1>

            <div className="flex items-center space-x-6 text-sm font-medium text-gray-300">
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-gray-400" />
                <span>{SERIES.followers.toLocaleString()}</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="flex items-center space-x-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span>{SERIES.communityScore}</span>
              </div>
            </div>

            <div className="flex items-start space-x-6 pt-2">
              <button
                onClick={() => navigate("/series/watch")}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
              >
                <Play size={24} className="ml-1 fill-black" />
              </button>

              <div className="max-w-md space-y-3 border-l-2 border-white/20 pl-4">
                <p className="text-xs font-light leading-relaxed text-gray-300">
                  {SERIES.synopsis}
                </p>
                <button className="block text-[10px] font-black uppercase tracking-wider text-white hover:underline">
                  View Less
                </button>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Actions secondaires & Compte à rebours */}
          <div className="flex h-full flex-col items-start justify-between space-y-12 lg:col-span-5 lg:h-48 lg:items-end lg:space-y-0">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold tracking-wide text-gray-200">
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

        {/* Carousel d'épisodes / vidéos en pied */}
        <footer className="mt-auto border-t border-white/10 pt-6">
          <div className="mb-4 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest">
            <span className="text-white">Latest videos</span>
            <span className="text-white/30">|</span>
            <span className="cursor-pointer text-white/40 transition-colors hover:text-white">
              More
            </span>
          </div>
          <div className="scrollbar-none flex space-x-4 overflow-x-auto pb-2">
            {VIDEOS.slice(0, 4).map((video) => (
              <div
                key={video.id}
                className="group w-40 shrink-0 cursor-pointer space-y-2"
              >
                <div className="relative aspect-video overflow-hidden rounded bg-neutral-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-5 w-5 fill-white text-white" />
                  </div>
                </div>
                <p className="truncate text-[10px] font-bold text-white">
                  {video.type}
                </p>
                <p className="truncate text-[10px] text-gray-400">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
