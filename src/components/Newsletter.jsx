import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="rounded-3xl border border-white/5 bg-brand-dark/50 px-6 py-16 text-center backdrop-blur md:px-12 md:py-20">
        <h2 className="text-3xl font-black text-white md:text-4xl">Ne manquez aucune sortie.</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/60">
          Recevez chaque semaine les nouvelles séries, les actualités et les recommandations de la communauté.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Votre email"
            className="flex-1 rounded-full border border-white/10 bg-black/40 px-5 py-3.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-cyan/40 focus:bg-black/60"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-6 py-3.5 text-sm font-bold uppercase text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,29,79,.5)]">
            S'inscrire <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
