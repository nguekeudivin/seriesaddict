import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Check,
  CircleAlert,
  Landmark,
  TrendingUp,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function SovereignFiscalLandingPage() {
  const steps = [
    {
      title: "Nous lançons votre base ITIN",
      description:
        "Nous posons votre base administrative pour que votre dossier existe proprement dans le système américain dès le départ.",
      icon: BadgeCheck,
    },
    {
      title: "Nous structurons votre présence bancaire",
      description:
        "Nous ouvrons la bonne trajectoire bancaire pour installer une présence crédible et cohérente avec votre objectif.",
      icon: Landmark,
    },
    {
      title: "Nous construisons votre profil de crédit",
      description:
        "Nous mettons en place les bons signaux, dans le bon ordre, pour rendre votre profil lisible, solide et finançable.",
      icon: BarChart3,
    },
    {
      title: "Nous préparons votre accès au financement",
      description:
        "Nous transformons cette base en vraie capacité de crédit, puis en options de financement plus larges.",
      icon: TrendingUp,
    },
  ];

  const successStories = [
    {
      quote: "“De refusé à 75 000 $ de crédit en 90 jours.”",
      name: "ALEJANDRO M.",
      role: "FONDATEUR E-COM",
    },
    {
      quote: "“Amex platinum obtenue sans ssn en 4 mois.”",
      name: "SARAH K.",
      role: "ARCHITECTE SAAS",
    },
    {
      quote: "“Passé à 250 000 $ de financement via une llc.”",
      name: "DMITRI V.",
      role: "GROWTH MARKETER",
    },
    {
      quote: "“Liberté financière totale depuis l'extérieur des usa.”",
      name: "JEAN-PAUL B.",
      role: "INVESTISSEUR IMMO",
    },
    {
      quote: "“120 000 $ débloqués en lignes business haute limite.”",
      name: "MARCO L.",
      role: "PROPRIÉTAIRE D'AGENCE",
    },
    {
      quote: "“Le système fonctionne exactement comme prévu.”",
      name: "SOFIA R.",
      role: "CONSULTANTE GLOBALE",
    },
    {
      quote: "“D'aucune présence aux usa à un score parfait de 750.”",
      name: "ERIK H.",
      role: "DÉV LOGICIEL",
    },
    {
      quote: "“Le chemin financier le plus robuste que j'ai vu.”",
      name: "CARLOS P.",
      role: "CEO LOGISTIQUE",
    },
  ];

  const faqs = [
    {
      q: "Est-ce une banque ?",
      a: "Non. Nous ne sommes ni une banque, ni un organisme de crédit, ni une administration. Nous sommes un cabinet de conseil stratégique qui vous aide à mieux comprendre les exigences du système financier américain et à avancer avec une structure plus cohérente.",
    },
    {
      q: "Est-ce que vous créez l’ITIN à ma place ?",
      a: "Non. Nous ne remplaçons pas l’IRS et nous ne soumettons pas une demande officielle en notre nom. Nous vous guidons dans la compréhension du processus, la préparation des documents et les étapes à suivre pour éviter les erreurs.",
    },
    {
      q: "Combien de temps prend le processus ITIN ?",
      a: "En général, le traitement peut prendre entre 6 et 12 semaines, selon les délais de l’IRS, la période de l’année et la qualité du dossier soumis.",
    },
    {
      q: "Puis-je commencer sans LLC ?",
      a: "Oui. Selon votre situation, il est possible de commencer sans LLC. Une LLC peut toutefois devenir pertinente plus tard si vous souhaitez structurer une activité commerciale ou renforcer certains aspects de votre présence dans le système.",
    },
    {
      q: "Puis-je avancer même si je ne vis pas aux États-Unis ?",
      a: "Oui. Notre accompagnement est précisément pensé pour les non-résidents qui souhaitent comprendre comment entrer dans le système financier américain de manière plus claire, plus crédible et plus structurée.",
    },
    {
      q: "Garantissez-vous l’obtention d’une carte de crédit ?",
      a: "Non. Aucune institution sérieuse ne peut garantir une approbation bancaire ou un accès au crédit. Les décisions finales appartiennent toujours aux banques et aux établissements financiers. Notre rôle est de vous aider à avancer avec une meilleure préparation.",
    },
    {
      q: "Garantissez-vous des résultats ?",
      a: "Non. Nous ne promettons ni approbation, ni financement, ni ouverture automatique de compte. Nous vous apportons une méthode, une meilleure lisibilité du processus et un accompagnement structuré pour réduire les erreurs évitables.",
    },
  ];

  const timeline = [
    {
      stage: "Étape 01",
      label: "Intégrité Structurelle",
      title: "Architecture Légale Complète",
      description:
        "Formation complète de nœuds LLC, obtention de l'ITIN et configuration d'une identité numérique sécurisée pour une confidentialité et une optimisation fiscale maximales.",
    },
    {
      stage: "Étape 02",
      label: "Effet de Levier",
      title: "Le Masterplan du Crédit",
      description:
        "Stratégies personnalisées de 'data seeding' conçues pour débloquer plus de 100 000 $ de crédit professionnel dans les 90 jours suivant l'activation.",
    },
    {
      stage: "Étape 03",
      label: "Bouclier Générationnel",
      title: "Continuité Offshore",
      description:
        "Établissement de tampons bancaires internationaux et de feuilles de route de résidence pour une liberté géopolitique ultime.",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef0f3] text-[#0e1830] font-medium">
      <style>{`
        .hero-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(180deg, rgba(255,255,255,0.85), transparent 88%);
        }

        .hero-orb {
          filter: blur(12px);
          animation: heroFloat 11s ease-in-out infinite;
        }

        .hero-orb-delay {
          animation-delay: -4s;
          animation-duration: 15s;
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -14px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-orb,
          .hero-orb-delay {
            animation: none !important;
          }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? " border-b border-slate-200/70 bg-[#f5f6f8]/95 backdrop-blur py-4"
            : " border-transparent bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto md:flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <a
            href="#"
            className={`md:inline-flex items-center text-2xl font-black tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-[#0a1428] bg-[#08132a]" : "text-white"
            }`}
          >
            {/* CARTEUSA */}
            <img
              src="/images/carte-usa.png"
              className="w-[140px] sm:w-[170px] md:w-[200px]"
            />
          </a>

          <a
            href="#cta"
            className={`hidden md:block rounded-sm px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.22em] ${
              isScrolled
                ? "bg-[#08132a] text-white shadow-lg"
                : "bg-white text-[#08132a] shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            } hover:brightness-110`}
          >
            Accéder maintenant
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.20),transparent_24%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)]">
          {/* Base grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:64px_64px]" />

          {/* Secondary micro grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Premium diagonal lattice */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(135deg,transparent_0px,transparent_34px,rgba(255,255,255,0.1)_34px,rgba(255,255,255,0.1)_35px),repeating-linear-gradient(45deg,transparent_0px,transparent_52px,rgba(109,220,255,0.06)_52px,rgba(109,220,255,0.06)_53px)]" />

          {/* Soft metal-like spotlight */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(109,220,255,0.05),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(24,201,141,0.06),transparent_24%)]" />

          {/* Large premium geometric panels */}
          <div className="pointer-events-none absolute -left-24 top-20 h-[28rem] w-[28rem] rotate-[18deg] rounded-[3rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[2px]" />
          <div className="pointer-events-none absolute right-[-10rem] top-8 h-[30rem] w-[30rem] -rotate-[16deg] rounded-[4rem] border border-cyan-300/10 bg-cyan-200/[0.02]" />
          <div className="pointer-events-none absolute bottom-[-9rem] left-[10%] h-[22rem] w-[22rem] rotate-[22deg] rounded-[3rem] border border-emerald-300/10 bg-emerald-200/[0.02]" />

          {/* Circuit/card-line motif */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.16]"
              viewBox="0 0 1600 900"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M120 170 H420 Q470 170 470 220 V260 H700"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.2"
              />
              <path
                d="M980 160 H1180 Q1240 160 1240 220 V320 H1460"
                stroke="rgba(109,220,255,0.18)"
                strokeWidth="1.2"
              />
              <path
                d="M180 690 H420 Q480 690 480 630 V540 H760"
                stroke="rgba(24,201,141,0.18)"
                strokeWidth="1.2"
              />
              <path
                d="M860 760 H1120 Q1180 760 1180 700 V620 H1450"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.2"
              />
              <path
                d="M720 100 V220 Q720 260 760 260 H920"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.2"
              />
              <path
                d="M840 900 V760 Q840 710 890 710 H1080"
                stroke="rgba(109,220,255,0.14)"
                strokeWidth="1.2"
              />

              <circle cx="420" cy="170" r="4" fill="rgba(255,255,255,0.22)" />
              <circle cx="700" cy="260" r="4" fill="rgba(255,255,255,0.22)" />
              <circle cx="1240" cy="220" r="4" fill="rgba(109,220,255,0.22)" />
              <circle cx="1460" cy="320" r="4" fill="rgba(109,220,255,0.22)" />
              <circle cx="480" cy="630" r="4" fill="rgba(24,201,141,0.22)" />
              <circle cx="760" cy="540" r="4" fill="rgba(24,201,141,0.22)" />
              <circle cx="760" cy="260" r="4" fill="rgba(255,255,255,0.18)" />
              <circle cx="890" cy="710" r="4" fill="rgba(109,220,255,0.18)" />
            </svg>
          </div>

          {/* Credit-card chip inspired motif */}
          <div className="pointer-events-none absolute left-[11%] top-[22%] hidden h-24 w-32 rounded-2xl border border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:block">
            <div className="absolute left-4 top-4 h-16 w-20 rounded-xl border border-white/12" />
            <div className="absolute left-10 top-4 h-16 w-px bg-white/12" />
            <div className="absolute left-4 top-9 h-20 w-20 -rotate-90 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
            <div className="absolute left-4 top-6 h-px w-20 bg-white/10" />
            <div className="absolute left-4 top-12 h-px w-20 bg-white/10" />
            <div className="absolute left-4 top-[18px] h-14 w-px bg-white/10" />
            <div className="absolute right-4 top-[18px] h-14 w-px bg-white/10" />
          </div>

          {/* Blur glows */}
          <div className="pointer-events-none absolute -left-16 top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-5rem] top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <motion.div
              className="mx-auto inline-flex items-center rounded-sm border border-emerald-500/40 bg-emerald-400/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.35em]"
              {...fadeUp(0.05)}
            >
              Accès au financement US
            </motion.div>

            <motion.h1
              className="mx-auto mt-8 max-w-5xl text-[1.85rem] font-black uppercase leading-[1.05] text-white sm:mt-10 sm:text-3xl lg:text-[3rem]"
              {...fadeUp(0.14)}
            >
              Construisez votre accès au
              <span className="mt-3 block bg-[linear-gradient(135deg,#b8ffe9_0%,#19c98d_50%,#6ddcff_100%)] bg-clip-text text-transparent">
                système de crédit et financement américain
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-8 max-w-4xl text-base leading-7 text-slate-300 sm:mt-10 sm:text-xl sm:leading-relaxed md:text-2xl"
              {...fadeUp(0.22)}
            >
              De l’
              <span className="text-[1.05em] font-semibold text-white">
                ITIN
              </span>{" "}
              au{" "}
              <span className="text-[1.05em] font-semibold text-white">
                compte bancaire
              </span>{" "}
              puis au{" "}
              <span className="text-[1.05em] font-semibold text-white">
                crédit
              </span>
              , une méthode structurée et efficace pour construire un{" "}
              <span className="text-[1.05em] font-semibold text-white">
                accès crédible
              </span>{" "}
              au système financier américain, sans raccourcis ni fausses
              promesses.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-5 sm:mt-14 sm:flex-row"
              {...fadeUp(0.3)}
            >
              <a
                href="#cta"
                className="inline-flex w-full max-w-[320px] min-w-0 items-center justify-center rounded-sm bg-[#20c48d] px-6 py-5 text-base font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto sm:min-w-[280px] sm:max-w-none sm:px-10 sm:py-6 sm:text-lg sm:tracking-[0.16em]"
              >
                Accéder au système
              </a>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f3f5f7] px-4 py-16 sm:px-6 sm:py-20 lg:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Obtenir un crédit aux États-Unis en tant que non-résident est
              possible.
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-700 sm:text-xl sm:leading-8">
              <p>
                Ce qui bloque la plupart des dossiers, ce n’est pas seulement le
                statut de non-résident, mais l’absence de structure, de séquence
                et de cohérence dès le départ.
              </p>

              <p>
                Nous vous aidons à construire des bases plus solides — ITIN,
                cohérence bancaire, structuration du profil et progression vers
                le crédit — avec une méthode claire, réaliste et sans promesses
                excessives.
              </p>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:mt-10 sm:px-8 sm:py-7">
              <div className="absolute left-1/2 top-0 h-1 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-400 via-green-300 to-green-400" />

              <p className="text-[15px] font-semibold leading-7 text-slate-900 sm:text-xl sm:leading-8">
                Pas de raccourcis. Seulement une approche sérieuse pour avancer
                proprement dans le système financier américain.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.06)] lg:grid-cols-2">
            <motion.div className="p-6 sm:p-8 lg:p-12" {...fadeUp(0.05)}>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600 sm:text-sm sm:tracking-[0.28em]">
                Ce que vous evitons
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#0b1430] sm:mt-5 sm:text-3xl md:text-4xl">
                Les "pieges" du Marché
              </h2>
              <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
                {[
                  {
                    title: "“Financement Immédiat 100k”",
                    text: "Services prédateurs qui sur-promettent, mettant souvent votre profil à risque d'une liste noire permanente.",
                  },
                  {
                    title: "“Glitches à 0% d'Intérêt”",
                    text: "Failles temporaires que les banques ferment en quelques mois, menant à des pièges de dettes à taux élevés.",
                  },
                  {
                    title: "“Crédit Clé-en-Main”",
                    text: "Si vous ne possédez pas le processus, vous n'avez pas de fondation. Vous pourrez commettre des erreurs",
                  },
                ].map((item) => (
                  <div key={item.title} className="md:flex gap-4 sm:gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600 sm:h-12 sm:w-12">
                      <CircleAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mt-3 md:mt-0 text-lg font-bold tracking-[-0.03em] text-[#10192f] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[linear-gradient(135deg,#07112a_0%,#04183b_42%,#07253b_100%)] p-6 text-white sm:p-8 lg:p-12"
              {...fadeUp(0.12)}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#65efbf] sm:text-sm sm:tracking-[0.28em]">
                Notre Protocole
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] sm:mt-5 sm:text-3xl md:text-4xl">
                La Vérité Souveraine
              </h2>
              <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
                {[
                  {
                    title: "Alignement Institutionnel",
                    text: "Nous vous apprenons à refléter le profil exact que les banques américaines Tier-1 sont programmées à approuver.",
                  },
                  {
                    title: "Seeding Mathématique",
                    text: "Une séquence précise de rapports de données aux trois grands bureaux de crédit pour instaurer une confiance durable.",
                  },
                  {
                    title: "Souveraineté Long Terme",
                    text: "Bâtissez une présence financière vous permettant d'opérer mondialement avec la force de la monnaie de réserve mondiale.",
                  },
                ].map((item) => (
                  <div key={item.title} className="md: flex gap-4 sm:gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#20c48d] text-white sm:h-12 sm:w-12">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mt-3 md:mt-0 text-lg font-bold tracking-[-0.03em] text-white sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="roadmap"
          className="bg-[#eef0f3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold tracking-[-0.04em] text-black sm:text-4xl md:text-6xl">
              Comment nous construisons votre accès au crédit américain
            </h2>
            <p className="mt-4 text-center text-lg leading-8 text-slate-700 sm:text-xl">
              Nous ne brûlons pas les étapes : nous posons d&apos;abord votre
              base, nous installons votre crédibilité bancaire, puis nous vous
              faisons monter vers le crédit et le financement.
            </p>

            <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-2">
              {steps.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-8"
                  {...fadeUp(0.08 + index * 0.05)}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#1dc38e] sm:h-14 sm:w-14">
                    <item.icon
                      className="h-8 w-8 sm:h-9 sm:w-9"
                      strokeWidth={2.1}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-[#10192f] sm:mt-6 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="bg-[linear-gradient(180deg,#091224_0%,#06172e_100%)] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.28em] text-[#1dc38e] sm:text-sm sm:tracking-[0.35em]">
                L'Investissement
              </div>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-[-0.05em] sm:mt-5 sm:text-5xl md:text-7xl">
                Le chemin vers votre financement americain
              </h2>
            </div>

            <div className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
              <div className="absolute left-1/2 top-2 hidden h-[82%] w-px -translate-x-1/2 bg-white/10 md:block" />
              <div className="space-y-10 sm:space-y-14">
                {timeline.map((item, index) => (
                  <div
                    key={item.stage}
                    className={`grid items-center gap-6 sm:gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div
                      className={`text-center ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                    >
                      <div className="mx-auto mb-4 h-4 w-4 rounded-full bg-[#1dc38e] shadow-[0_0_22px_rgba(29,195,142,0.5)] md:mx-0 md:inline-block" />
                      <div className="text-3xl font-bold text-[#1dc38e] sm:text-4xl">
                        {item.stage}
                      </div>
                      <div className="mt-1 text-base text-slate-200 sm:text-lg">
                        {item.label}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/5 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-8">
                      <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg sm:leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="cta"
              className="mx-auto mt-16 max-w-3xl rounded-[28px] border border-white/5 bg-white/[0.04] px-5 py-8 text-center shadow-[0_30px_100px_rgba(255,255,255,0.04)] sm:mt-24 sm:px-8 sm:py-12"
            >
              <h3 className="text-3xl font-black sm:text-4xl md:text-5xl">
                Votre accès au crédit
                <span className="block text-[#1dc38e]">
                  ne se joue pas au hasard
                </span>
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-200 sm:mt-6 sm:text-lg">
                Si votre objectif est sérieux, nous vous montrons le processus
                exacte pour devenir crédible aux yeux des banques.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex w-full max-w-[320px] min-w-0 items-center justify-center rounded-sm bg-[#20c48d] px-6 py-5 text-lg font-semibold text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:brightness-110 sm:mt-10 sm:w-auto sm:min-w-[340px] sm:max-w-full sm:px-10 sm:py-6 sm:text-xl"
              >
                Accéder à la méthode
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1ac98d] sm:text-sm sm:tracking-[0.3em]">
                Protocoles éprouvés
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-800 sm:text-2xl sm:leading-9">
                <strong className="font-bold text-[#1ac98d]">125</strong> cas
                documentés, avec des montants observés de{" "}
                <strong className="font-bold text-[#1ac98d]">75 000 $</strong> à{" "}
                <strong className="font-bold text-[#1ac98d]">250 000 $</strong>,
                sur des trajectoires allant de{" "}
                <strong className="font-bold text-[#1ac98d]">90 jours</strong> à{" "}
                <strong className="font-bold text-[#1ac98d]">4 mois</strong>.
              </p>
              <h2 className="mt-4 text-4xl font-black text-[#09142c] sm:text-5xl">
                Briefings de Réussite
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
              {successStories.map((story) => (
                <article
                  key={story.quote}
                  className="group flex min-h-[360px] flex-col justify-between rounded-lg bg-[radial-gradient(circle_at_top,rgba(26,201,141,0.08),transparent_18%),linear-gradient(180deg,#04143f_0%,#031027_100%)] p-5 text-white shadow-[0_22px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 sm:min-h-[460px] sm:p-6"
                >
                  <div className="flex justify-center pt-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20c48d] text-xl shadow-[0_0_32px_rgba(32,196,141,0.25)] sm:h-16 sm:w-16 sm:text-2xl">
                      ▶
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.95rem] font-black leading-7 sm:text-[1rem]">
                      {story.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full border border-[#1bc58e]/40 bg-white/5" />
                      <div>
                        <div className="font-semibold text-sm uppercase tracking-[0.18em]">
                          {story.name}
                        </div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1ac98d] sm:text-xs">
                          {story.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="bg-[#eef0f3] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <motion.div className="text-center" {...fadeUp(0.04)}>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19b884] sm:text-sm sm:tracking-[0.28em]">
                FAQ
              </div>
              <h2 className="mt-4 text-3xl font-black text-[#08132a] sm:mt-5 sm:text-4xl md:text-5xl">
                Questions fréquentes
              </h2>
            </motion.div>

            <div className="mt-12 space-y-4">
              {faqs.map((item, index) => (
                <motion.details
                  key={item.q}
                  className="group rounded-[24px] bg-white px-5 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:px-8 sm:py-7"
                  {...fadeUp(0.06 + index * 0.03)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold tracking-[-0.03em] text-[#10192f] marker:hidden sm:gap-5 sm:text-xl">
                    <span>{item.q}</span>
                    <span className="text-3xl font-light text-slate-400 transition group-open:rotate-45 sm:text-4xl">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                    {item.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f5f6f8] px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden text-[28vw] font-black uppercase tracking-[-0.05em] text-black/[0.04] sm:text-[24vw]">
            CREDIT
          </div>
          <div className="relative mx-auto max-w-5xl">
            <h2 className="text-3xl font-black uppercase leading-none text-[#0a1428] sm:text-4xl md:text-6xl">
              Structurez ou Échouez.
              <span className="block text-[#19ba87]">Faites le bon choix</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:mt-8 sm:text-2xl sm:leading-relaxed">
              La plupart des gens échouent parce qu'ils tentent de brûler les
              étapes. Ne faites pas comme eux. Construisez votre fondation
              correctement.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center rounded-sm bg-[#08132a] px-8 py-5 text-base font-semibold uppercase tracking-[0.16em] text-white shadow-[0_25px_45px_rgba(8,19,42,0.16)] transition hover:brightness-110 sm:mt-12 sm:w-auto sm:max-w-none sm:px-16 sm:py-6 sm:text-xl sm:tracking-[0.2em]"
            >
              Démarrer maintenant
            </a>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:mt-10 sm:flex-row sm:gap-4 sm:text-sm sm:tracking-[0.22em]">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500 ring-2 ring-[#f5f6f8]" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-100 to-teal-500 ring-2 ring-[#f5f6f8]" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-600 ring-2 ring-[#f5f6f8]" />
              </div>
              <span>+80 entrepreneurs nous ont rejoints</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0f1e] px-4 py-14 text-center text-slate-500 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[#20c48d] sm:gap-6 sm:text-sm">
            <a href="#">Termes et conditions</a>
            <span className="text-white/15">|</span>
            <a href="#">Politique de confidentialité</a>
            <span className="text-white/15">|</span>
            <a href="#">Mentions légales</a>
          </div>

          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400 sm:mt-8 sm:text-sm sm:tracking-[0.25em]">
            ZAID LAWANI - Copyright © 2026
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-[13px] leading-relaxed text-slate-400 sm:mt-12 sm:space-y-6 sm:text-sm">
            <p>
              ⚠️ Les montants de financement et les résultats mentionnés sont
              des exemples basés sur des cas réels. Les résultats peuvent varier
              selon le profil, la situation financière et les conditions de
              marché.
            </p>
            <p>
              Sovereign Fiscal n&apos;est pas une banque et ne propose aucun
              prêt. Ce site ne fait pas partie du site web de Facebook ou de
              Facebook Inc. De plus, ce site n&apos;est en aucun cas approuvé
              par Facebook. Facebook est une marque commerciale de Facebook,
              Inc.
            </p>
            <p>
              Sovereign Fiscal n&apos;est pas responsable de vos actions. Vous
              êtes seul responsable de vos propres actions et décisions et
              l&apos;évaluation et l&apos;utilisation de nos produits et
              services doivent être basées sur votre propre diligence
              raisonnable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
