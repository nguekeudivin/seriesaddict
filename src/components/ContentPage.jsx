import { ArrowLeft, Sparkles } from "lucide-react";
import RichFooter from "./RichFooter";

export default function ContentPage({
  title,
  subtitle,
  badge,
  children,
  maxWidth = "max-w-4xl",
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <a href="/home" className="group inline-flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan opacity-40 blur-md transition duration-300 group-hover:opacity-60" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-brand-primary to-brand-cyan bg-clip-text text-lg font-extrabold uppercase tracking-[0.25em] text-transparent">
                Series Addict
              </div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/35">
                Le spécialiste des séries
              </div>
            </div>
          </a>

          <a
            href="/home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l’accueil
          </a>
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          {badge ? (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
              {badge}
            </div>
          ) : null}
          <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* Content */}
        <div
          className={`relative mx-auto overflow-hidden rounded-[32px] border border-white/10 bg-brand-dark/55 p-6 backdrop-blur-xl sm:p-10 ${maxWidth}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.06),transparent_38%)]" />
          <div className="relative">{children}</div>
        </div>
      </main>

      <div className="relative z-10 mt-20">
        <RichFooter />
      </div>
    </div>
  );
}
