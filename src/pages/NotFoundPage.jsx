import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Search,
  Sparkles,
  Tv,
  Home,
  Layers3,
} from "lucide-react";

const quickLinks = [
  {
    icon: Home,
    title: "Accueil",
    text: "Retournez à la page principale de la plateforme.",
    href: "/",
  },
  {
    icon: Compass,
    title: "Explorer les séries",
    text: "Parcourez le catalogue et découvrez de nouvelles séries.",
    href: "/series",
  },
  {
    icon: Layers3,
    title: "Collections",
    text: "Ouvrez les sélections éditoriales et les univers thématiques.",
    href: "/collections",
  },
];

function QuickLinkCard({ item, index }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:border-white/15 hover:bg-white/[0.06]"
      style={{
        transform: index === 1 ? "translateY(18px)" : "translateY(0px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#841D4F]/10 via-transparent to-[#1E6C86]/10 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
          <Icon className="h-5 w-5 text-white" />
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 transition duration-300 group-hover:text-white">
          Ouvrir
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,29,79,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(30,108,134,0.18),transparent_24%),linear-gradient(180deg,#02060B_0%,#011921_48%,#000000_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="absolute left-[-8%] top-[10%] h-72 w-72 rounded-full bg-[#841D4F]/20 blur-3xl" />
        <div className="absolute bottom-[8%] right-[-5%] h-72 w-72 rounded-full bg-[#1E6C86]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <a href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#841D4F] to-[#1E6C86] opacity-40 blur-md transition duration-300 group-hover:opacity-60" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-r from-[#841D4F] to-[#1E6C86] bg-clip-text text-lg font-extrabold uppercase tracking-[0.25em] text-transparent">
                  Series Addict
                </div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-white/35">
                  Discover • Track • Share
                </div>
              </div>
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l’accueil
            </a>
          </div>

          {/* Main */}
          <div className="flex flex-1 items-center py-10 lg:py-16">
            <div className="grid w-full  gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left content */}
              <section className="relative">
                <div className="max-w-2xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60 backdrop-blur-md">
                    <Tv className="h-4 w-4 text-cyan-300" />
                    Erreur • Page introuvable
                  </div>

                  <div className="flex items-end gap-4 sm:gap-6">
                    <div className="bg-gradient-to-r from-[#841D4F] via-[#B13E78] to-[#1E6C86] bg-clip-text text-7xl font-extrabold leading-none text-transparent sm:text-8xl xl:text-[9rem]">
                      404
                    </div>
                    <div className="mb-2 h-px flex-1 bg-gradient-to-r from-[#841D4F]/70 to-transparent" />
                  </div>

                  <h1 className="mt-6 text-3xl font-extrabold uppercase leading-[0.95] sm:text-4xl xl:text-4xl">
                    Cet épisode
                    <span className="block bg-gradient-to-r from-[#841D4F] via-[#B13E78] to-[#1E6C86] bg-clip-text text-transparent">
                      n’existe pas
                    </span>
                  </h1>

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                    La page que vous recherchez a peut-être été déplacée,
                    supprimée ou n’a jamais existé. Reprenons le fil de
                    l’histoire.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/"
                      className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl px-6 font-semibold text-white"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#841D4F] via-[#A32D67] to-[#1E6C86]" />
                      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.16),transparent_55%)]" />
                      <span className="relative inline-flex items-center gap-2">
                        Aller à l’accueil
                        <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                      </span>
                    </a>

                    <a
                      href="/series"
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-sm text-white/85 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      <Search className="h-4 w-4" />
                      Explorer les séries
                    </a>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="relative mt-14 hidden lg:block">
                  <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#841D4F]/30" />
                  <div className="absolute left-28 top-0 h-56 w-56 rounded-full border border-[#1E6C86]/20" />

                  <div className="relative flex items-center gap-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#841D4F]/60 to-[#1E6C86]/50" />
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#841D4F] to-[#1E6C86] shadow-[0_0_40px_rgba(132,29,79,.35)]">
                        <Compass className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#1E6C86]/50 via-[#841D4F]/60 to-transparent" />
                  </div>
                </div>
              </section>

              {/* Right side */}
              <section className="relative">
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#841D4F]/20 via-[#3C0A22]/10 to-[#1E6C86]/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#011921]/55 p-6 backdrop-blur-xl sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.06),transparent_38%)]" />

                  <div className="relative">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Accès rapide
                    </div>

                    <h2 className="mt-3 text-2xl font-extrabold uppercase">
                      Reprendre l’exploration
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                      Retournez rapidement dans la plateforme grâce aux chemins
                      les plus utiles.
                    </p>

                    <div className="relative mt-8">
                      <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#841D4F]/40 to-transparent sm:block" />

                      <div className="relative grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
                        {quickLinks.map((item, index) => (
                          <QuickLinkCard
                            key={item.title}
                            item={item}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 rounded-[24px] border border-white/8 bg-black/20 p-5">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                        Astuce
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/60">
                        Vérifiez l’URL pour repérer une erreur de saisie, ou
                        revenez au catalogue pour continuer à découvrir des
                        séries, des collections et des sélections éditoriales.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
