import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Film } from "lucide-react";
import { VIDEOS } from "./data";
import { SectionHeader } from "./shared";

export default function TrailersGrid() {
  const [playing, setPlaying] = useState(null);

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Bandes-annonces et vidéos"
        icon={Film}
        rightLabel="Tout voir"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {VIDEOS.map((video) => (
          <div
            key={video.id}
            onClick={() => setPlaying(video.id)}
            className="group cursor-pointer space-y-3 overflow-hidden rounded-xl border border-white/10 bg-[#181818] p-3 transition hover:border-brand-cyan/40 hover:bg-[#1a1a1a]"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <Play className="h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-bold text-white">
                {video.duration}
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan">
                {video.title}
              </h4>
              <p className="mt-0.5 text-[11px] text-white/40">
                {video.type} · {video.duration}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur"
            onClick={() => setPlaying(null)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPlaying(null)}
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video">
                <iframe
                  src={VIDEOS.find((v) => v.id === playing)?.url}
                  title="Bande-annonce"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
