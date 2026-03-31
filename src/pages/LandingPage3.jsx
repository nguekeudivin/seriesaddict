import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleAlert,
  FileText,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const bankSignals = [
  {
    icon: BadgeCheck,
    title: "Lisibilité administrative",
    text: "Un dossier compréhensible, cohérent et sans contradiction est la première condition d'entrée.",
  },
  {
    icon: Landmark,
    title: "Présence bancaire compatible",
    text: "Le compte bancaire doit renforcer le profil, pas créer une couche de doute supplémentaire.",
  },
  {
    icon: ShieldCheck,
    title: "Crédibilité du parcours",
    text: "Les décisions prises au début conditionnent la capacité à viser le crédit ensuite.",
  },
  {
    icon: TrendingUp,
    title: "Maturité progressive",
    text: "Le financement devient plus plausible quand le dossier évolue dans le bon ordre.",
  },
];

const operatingPlan = [
  {
    phase: "Bloc 01",
    title: "Mettre le point de départ au clair",
    text: "Comprendre la situation réelle, les contraintes du profil et les conditions d'entrée compatibles avec votre objectif.",
  },
  {
    phase: "Bloc 02",
    title: "Construire la base administrative",
    text: "Installer ITIN, documents et cohérence de structure avant toute tentative de montée en crédit.",
  },
  {
    phase: "Bloc 03",
    title: "Ouvrir la phase bancaire",
    text: "Créer une présence bancaire qui soutient le dossier et prépare la suite au lieu de la fragiliser.",
  },
  {
    phase: "Bloc 04",
    title: "Préparer l'accès au crédit",
    text: "Mettre en place un cadre réaliste pour accéder au crédit sans brûler les étapes ni multiplier les erreurs.",
  },
];

const blockers = [
  "Se précipiter vers le financement sans socle ITIN et bancaire clair",
  "Suivre des conseils pensés pour des résidents américains",
  "Choisir des options rapides qui dégradent le positionnement du dossier",
  "Multiplier les démarches sans lecture d'ensemble",
];

const builders = [
  "Un ordre de progression logique et défendable",
  "Un dossier documentaire propre et cohérent",
  "Une lecture des attentes réelles des institutions",
  "Une montée graduelle vers le crédit puis le financement",
];

const fitProfiles = [
  "Entrepreneurs basés hors des États-Unis",
  "Consultants et opérateurs internationaux",
  "Fondateurs e-commerce ou SaaS sans historique de crédit US",
  "Profils qui veulent une méthode sérieuse plutôt qu'une promesse rapide",
];

const dossierStack = [
  "Compréhension du point de départ",
  "Cadre ITIN et base documentaire",
  "Séquence bancaire adaptée au profil",
  "Principes de montée en crédibilité",
  "Repères pour l'accès au crédit",
  "Vision long terme vers le financement",
];

export default function LandingPage3() {
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4ecdf] text-[#1f2b25]">
      <style>{`
        .paper-grid {
          background-image:
            linear-gradient(rgba(49, 74, 61, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(49, 74, 61, 0.08) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(180deg, rgba(255,255,255,0.95), transparent 94%);
        }

        .editorial-float {
          animation: editorialFloat 11s ease-in-out infinite;
        }

        .editorial-float-delay {
          animation-delay: -4s;
          animation-duration: 15s;
        }

        @keyframes editorialFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .editorial-float,
          .editorial-float-delay {
            animation: none !important;
          }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-[#d5c6ab] bg-[#f4ecdf]/95 py-4 backdrop-blur"
            : "border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-[#21463a]">
            Carte USA
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.16em] text-[#4d5e57] md:flex">
            <a href="#signals" className="transition hover:text-[#21463a]">
              Critères
            </a>
            <a href="#plan" className="transition hover:text-[#21463a]">
              Plan
            </a>
            <a href="#method" className="transition hover:text-[#21463a]">
              Méthode
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-full border border-[#21463a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#21463a] transition hover:bg-[#21463a] hover:text-[#f4ecdf]"
          >
            Ouvrir le guide
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#d9c9ae]">
          <div className="paper-grid absolute inset-0 opacity-60" />
          <div className="editorial-float absolute left-[8%] top-24 h-24 w-24 rounded-full bg-[#d4a259]/18 blur-xl" />
          <div className="editorial-float editorial-float-delay absolute right-[10%] top-20 h-40 w-40 rounded-full bg-[#21463a]/12 blur-2xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-36">
            <motion.div {...fadeUp(0.04)}>
              <div className="inline-flex items-center rounded-full border border-[#21463a]/15 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#21463a] backdrop-blur-sm">
                Landing Page 3
              </div>
              <h1 className="mt-8 max-w-4xl font-serif text-[3rem] leading-[0.95] tracking-[-0.04em] text-[#18332a] md:text-[4.7rem]">
                Un guide opératoire pour accéder au crédit américain quand on
                vit hors des États-Unis
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4e5b55] md:text-[1.3rem]">
                Une autre façon de présenter la même promesse: moins
                "landing agressive", plus "note stratégique". L'objectif reste
                identique: construire un parcours lisible entre{" "}
                <span className="font-semibold text-[#18332a]">ITIN</span>,{" "}
                <span className="font-semibold text-[#18332a]">compte bancaire</span>,{" "}
                <span className="font-semibold text-[#18332a]">crédit</span> et{" "}
                <span className="font-semibold text-[#18332a]">financement</span>.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#plan"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#21463a] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4ecdf] transition hover:brightness-110"
                >
                  Voir le plan
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#method"
                  className="inline-flex items-center justify-center rounded-full border border-[#21463a]/18 bg-white/60 px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#21463a] transition hover:bg-white"
                >
                  Explorer la méthode
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-[#21463a]">
                {["Progression propre", "Décisions défendables", "Vision long terme"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#21463a]/12 bg-white/50 px-4 py-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="grid gap-5" {...fadeUp(0.12)}>
              <article className="rounded-[28px] border border-[#d7c7ab] bg-[#fffaf2] p-7 shadow-[0_18px_40px_rgba(39,49,43,0.06)]">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b6a3f]">
                  Dossier de départ
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#18332a]">
                  Ce qu'il faut clarifier avant toute tentative de crédit
                </h2>
                <p className="mt-4 text-base leading-7 text-[#54625b]">
                  Votre point de départ n'est pas un détail. Il détermine
                  l'ordre des actions, le type d'institutions pertinentes et le
                  rythme de progression à viser.
                </p>
              </article>

              <article className="rounded-[28px] bg-[#21463a] p-7 text-[#f5eddc] shadow-[0_22px_50px_rgba(33,70,58,0.24)]">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b17d]">
                  Ce que la banque veut voir
                </div>
                <div className="mt-5 grid gap-4">
                  {[
                    "Cohérence documentaire",
                    "Présence bancaire crédible",
                    "Séquence sans signaux contradictoires",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#d8b17d]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] border border-[#d7c7ab] bg-[#f0e5d4] p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b6a3f]">
                  Objectif
                </div>
                <div className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[#18332a]">
                  Accéder au crédit puis préparer la phase financement dans le
                  bon ordre
                </div>
              </article>
            </motion.div>
          </div>
        </section>

        <section id="signals" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div className="max-w-3xl" {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b6a3f]">
                Les vrais critères
              </div>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#18332a] md:text-5xl">
                Ce que les institutions regardent vraiment
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {bankSignals.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[28px] border border-[#d9c9ae] bg-[#fffaf2] p-7 shadow-[0_14px_35px_rgba(39,49,43,0.05)]"
                  {...fadeUp(0.08 + index * 0.04)}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21463a] text-[#f4ecdf]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#18332a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5a665f]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="plan" className="bg-[#21463a] px-6 py-20 text-[#f4ecdf] lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b17d]">
                Plan opératoire
              </div>
              <h2 className="mt-5 max-w-lg text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                Une progression par blocs, pas une course au résultat immédiat
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#dae4dd]">
                Cette structure est conçue pour donner de la lisibilité. Chaque
                bloc prépare le suivant. L'objectif n'est pas d'aller vite à
                tout prix, mais de rendre chaque décision cohérente avec la
                suite.
              </p>
            </motion.div>

            <div className="grid gap-5">
              {operatingPlan.map((item, index) => (
                <motion.article
                  key={item.phase}
                  className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
                  {...fadeUp(0.08 + index * 0.04)}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b17d]">
                    {item.phase}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#d8e0da]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <motion.article
              className="rounded-[30px] border border-[#dfceb2] bg-[#fff8ec] p-8"
              {...fadeUp(0.04)}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b6a3f]">
                Ce qui bloque
              </div>
              <div className="mt-8 space-y-4">
                {blockers.map((item) => (
                  <div key={item} className="flex gap-4 rounded-[22px] border border-[#eadfcb] bg-white/70 px-5 py-4">
                    <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-[#9f5f40]" />
                    <p className="text-base leading-7 text-[#4f5c56]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="rounded-[30px] bg-[#1c3f34] p-8 text-[#f4ecdf] shadow-[0_24px_55px_rgba(28,63,52,0.24)]"
              {...fadeUp(0.12)}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b17d]">
                Ce qu'on construit
              </div>
              <div className="mt-8 space-y-4">
                {builders.map((item) => (
                  <div key={item} className="flex gap-4 rounded-[22px] border border-white/10 bg-white/[0.05] px-5 py-4">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#d8b17d]" />
                    <p className="text-base leading-7 text-[#e7eee9]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.article
              className="rounded-[30px] border border-[#dfceb2] bg-[#fffaf2] p-8"
              {...fadeUp(0.04)}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b6a3f]">
                Pour qui
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#18332a]">
                Les profils les plus alignés avec cette approche
              </h2>
              <div className="mt-8 space-y-4">
                {fitProfiles.map((item) => (
                  <div key={item} className="flex gap-4">
                    <Users className="mt-1 h-5 w-5 shrink-0 text-[#21463a]" />
                    <p className="text-base leading-7 text-[#54615b]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="rounded-[30px] border border-[#dfceb2] bg-[#f0e5d4] p-8"
              {...fadeUp(0.12)}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b6a3f]">
                Dossier cible
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-[#18332a]">
                Ce que cette page vous aide à organiser
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {dossierStack.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[22px] border border-[#dfceb2] bg-white/55 px-5 py-4"
                  >
                    <FileText className="mt-1 h-5 w-5 shrink-0 text-[#21463a]" />
                    <p className="text-base leading-7 text-[#4f5c56]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <motion.div
            id="cta"
            className="mx-auto max-w-6xl rounded-[34px] bg-[#18332a] px-8 py-12 text-[#f4ecdf] shadow-[0_26px_70px_rgba(24,51,42,0.28)] md:px-12"
            {...fadeUp(0.05)}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b17d]">
                  Conclusion
                </div>
                <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
                  Même objectif, autre langage: rendre l'accès au crédit
                  américain plus lisible pour les non-résidents
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#dce4de]">
                  Cette version insiste moins sur l'effet marketing et davantage
                  sur la logique opératoire. Elle reste alignée sur la même
                  promesse: avancer proprement vers le crédit puis le
                  financement.
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d8b17d] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#18332a] transition hover:brightness-105"
              >
                Demander la suite
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[#d8c7aa] bg-[#efe4d2] px-6 py-12 text-center text-sm text-[#5c6963] lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-5 uppercase tracking-[0.18em] text-[#21463a]">
            <a href="#">Conditions</a>
            <a href="#">Confidentialité</a>
            <a href="#">Mentions</a>
          </div>
          <p className="mx-auto mt-8 max-w-4xl leading-7">
            Cette page présente un angle éditorial différent autour du même
            objectif stratégique. Elle ne constitue ni une banque, ni une
            garantie d'approbation, ni une offre de financement.
          </p>
        </div>
      </footer>
    </div>
  );
}
