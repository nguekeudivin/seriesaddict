import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Check,
  CheckIcon,
  CircleAlert,
  Landmark,
  TrendingUp,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function SovereignFiscalLandingPage() {
  const steps = [
    {
      title: "Fondation ITIN",
      description:
        "Établissez votre identité numérique basée aux États-Unis pour un traitement des transactions sans frontières.",
      icon: BadgeCheck,
    },
    {
      title: "Banque de Tier 1",
      description:
        "Activez des lignes de crédit à plafond élevé et des comptes de gestion privée auprès de prêteurs premium.",
      icon: Landmark,
    },
    {
      title: "Data Seeding",
      description:
        "Programmez la perception algorithmique de votre profil financier pour commander les taux les plus bas.",
      icon: BarChart3,
    },
    {
      title: "Capital de Croissance",
      description:
        "Tirez parti de votre souveraineté structurelle pour obtenir des liquidités destinées à l'acquisition d'actifs.",
      icon: TrendingUp,
    },
  ];

  const successStories = [
    {
      quote: "“DE REFUSÉ À 75 000 $ DE CRÉDIT EN 90 JOURS.”",
      name: "ALEJANDRO M.",
      role: "FONDATEUR E-COM",
    },
    {
      quote: "“AMEX PLATINUM OBTENUE SANS SSN EN 4 MOIS.”",
      name: "SARAH K.",
      role: "ARCHITECTE SAAS",
    },
    {
      quote: "“PASSÉ À 250 000 $ DE FINANCEMENT VIA UNE LLC.”",
      name: "DMITRI V.",
      role: "GROWTH MARKETER",
    },
    {
      quote: "“LIBERTÉ FINANCIÈRE TOTALE DEPUIS L'EXTÉRIEUR DES USA.”",
      name: "JEAN-PAUL B.",
      role: "INVESTISSEUR IMMO",
    },
    {
      quote: "“120 000 $ DÉBLOQUÉS EN LIGNES BUSINESS HAUTE LIMITE.”",
      name: "MARCO L.",
      role: "PROPRIÉTAIRE D'AGENCE",
    },
    {
      quote: "“LE SYSTÈME FONCTIONNE EXACTEMENT COMME PRÉVU.”",
      name: "SOFIA R.",
      role: "CONSULTANTE GLOBALE",
    },
    {
      quote: "“D'AUCUNE PRÉSENCE AUX USA À UN SCORE PARFAIT DE 750.”",
      name: "ERIK H.",
      role: "DÉV LOGICIEL",
    },
    {
      quote: "“LE CHEMIN FINANCIER LE PLUS ROBUSTE QUE J'AI VU.”",
      name: "CARLOS P.",
      role: "CEO LOGISTIQUE",
    },
  ];

  const faqs = [
    {
      q: "EST-CE UNE BANQUE ?",
      a: "Non, nous sommes un cabinet de conseil stratégique. Nous vous aidons à naviguer correctement les exigences des institutions financières américaines.",
    },
    {
      q: "COMBIEN DE TEMPS PREND LE PROCESSUS ITIN ?",
      a: "Généralement de 6 à 12 semaines, selon les délais de traitement de l'IRS.",
    },
    {
      q: "PUIS-JE LE FAIRE SANS LLC ?",
      a: "Oui, un ITIN vous permet d'ouvrir des comptes personnels, bien qu'une LLC offre des avantages commerciaux supplémentaires par la suite.",
    },
    {
      q: "GARANTISSEZ-VOUS L'OBTENTION D'UNE CARTE DE CRÉDIT ?",
      a: "Nous garantissons le processus et la documentation. L'approbation reste à la discrétion de la banque, mais suivre notre architecture maximise vos chances.",
    },
    {
      q: "DE QUELS DOCUMENTS AURAI-JE BESOIN ?",
      a: "Principalement un passeport valide et une preuve d'adresse étrangère. Nous fournissons une liste complète pour chaque niveau.",
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
    <div className="min-h-screen bg-[#eef0f3] text-[#0e1830]">
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
            ? "border-b border-slate-200/70 bg-[#f5f6f8]/95 backdrop-blur py-4"
            : "border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#"
            className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-[#0a1428]" : "text-white"
            }`}
          >
            {/* CARTEUSA */}
            <img src="/images/carte-usa-image.webp" className="w-[200px]" />
          </a>

          <nav
            className={`hidden items-center gap-10 text-[17px] font-medium md:flex transition-colors duration-300 ${
              isScrolled ? "text-slate-600" : "text-slate-300"
            }`}
          >
            <a
              href="#roadmap"
              className={`transition hover:text-emerald-400 ${isScrolled ? "hover:text-[#0a1428]" : ""}`}
            >
              La Feuille de Route
            </a>
            <a
              href="#pricing"
              className={`transition hover:text-emerald-400 ${isScrolled ? "hover:text-[#0a1428]" : ""}`}
            >
              Tarifs
            </a>
            <a
              href="#faq"
              className={`transition hover:text-emerald-400 ${isScrolled ? "hover:text-[#0a1428]" : ""}`}
            >
              FAQ
            </a>
          </nav>

          <a
            href="#cta"
            className={`rounded-sm px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
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
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.22),transparent_28%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)]">
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <motion.div
              className="mx-auto inline-flex items-center rounded-sm border border-emerald-500/40 bg-emerald-400/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur-sm"
              {...fadeUp(0.05)}
            >
              Accès au financement US
            </motion.div>

            <motion.h1
              className="mx-auto mt-10 max-w-5xl text-2xl font-black uppercase text-white md:text-3xl lg:text-[3rem]"
              {...fadeUp(0.14)}
            >
              Construisez votre accès au
              <span className="mt-3 block bg-[linear-gradient(135deg,#b8ffe9_0%,#19c98d_50%,#6ddcff_100%)] bg-clip-text text-transparent">
                système de crédit et financement américain
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl"
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
              className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
              {...fadeUp(0.3)}
            >
              <a
                href="#cta"
                className="inline-flex min-w-[280px] items-center justify-center rounded-sm bg-[#20c48d] px-10 py-6 text-lg font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Accéder au système
              </a>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f3f5f7] px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-4xl ">
            <div>
              <h2 className="text-2xl font-black uppercase text-black md:text-4xl">
                Pensez-vous qu’obtenir un crédit aux États-Unis en tant que
                non-résident est
                <span className="block text-[#19b884]">impossible ?</span>
              </h2>

              <div className="mt-8 space-y-6 text-xl leading-relaxed text-slate-700">
                <p>
                  Ce n’est pas impossible. Mais sans structure claire, sans
                  présence bancaire cohérente, sans la bonne séquence et sans
                  les bonnes informations, la plupart des dossiers se bloquent
                  dès le départ.
                </p>
                <p>
                  Beaucoup de non-résidents essuient des refus non pas parce que
                  l’accès est fermé, mais parce qu’ils entrent dans le système
                  dans le mauvais ordre et commettent des erreurs qui
                  fragilisent leur profil.
                </p>
                <p>
                  Notre rôle est de vous aider à construire les bonnes bases :
                  ITIN, compte bancaire, positionnement crédible et montée
                  progressive vers le crédit.
                </p>
                <p>
                  Notre approche est conçue pour vous aider à éviter les erreurs
                  coûteuses et les mauvais choix. Grâce à notre expérience du
                  terrain et à notre connaissance des pratiques des institutions
                  financières, nous vous guidons avec des informations à jour et
                  pertinentes.
                </p>
                <p className="font-semibold text-slate-800">
                  Pas de raccourcis, pas de promesses irréalistes, pas de
                  montage improvisé. Seulement une méthode structurée pour
                  accéder au système financier américain de manière propre,
                  cohérente et durable, avec un objectif clair : construire
                  votre accès au crédit et au financement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.06)] lg:grid-cols-2">
            <motion.div className="p-8 lg:p-12" {...fadeUp(0.05)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                Ce que vous evitons
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#0b1430] md:text-4xl">
                Les "pieges" du Marché
              </h2>
              <div className="mt-10 space-y-8">
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
                  <div key={item.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600">
                      <CircleAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.03em] text-[#10192f]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-lg leading-8 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[linear-gradient(135deg,#07112a_0%,#04183b_42%,#07253b_100%)] p-8 text-white lg:p-12"
              {...fadeUp(0.12)}
            >
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#65efbf]">
                Notre Protocole
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                La Vérité Souveraine
              </h2>
              <div className="mt-10 space-y-8">
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
                  <div key={item.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#20c48d] text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-lg leading-8 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* <section className="bg-[linear-gradient(90deg,#04143f_0%,#06102d_50%,#0a2131_100%)] px-6 py-20 text-center text-white lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Une Nouvelle Vision du Capital
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-slate-400">
              Regardez le briefing de 12 minutes sur l'architecture de la
              souveraineté moderne et comment contourner les gardiens
              traditionnels.
            </p>

            <div className="mx-auto mt-14 flex aspect-video max-w-4xl items-center justify-center rounded-[22px] bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(24,201,141,0.06))] shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-sm">
              <div className="flex h-28 w-28 items-center justify-center rounded-[26px] bg-[#20c48d] text-5xl shadow-[0_0_40px_rgba(32,196,141,0.35)]">
                ▶
              </div>
            </div>
          </div>
        </section> */}

        <section id="roadmap" className="bg-[#eef0f3] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl text-center font-bold tracking-[-0.04em] text-black md:text-6xl">
              La séquence d'Autorité
            </h2>
            <p className="mt-4 text-xl text-center text-slate-700">
              Notre methode qui fait toute la differente : une exécution
              linéaire précise pour un resultant optimale
            </p>

            <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-2">
              {steps.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                  {...fadeUp(0.08 + index * 0.05)}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <item.icon className="h-9 w-9" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-[#10192f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="bg-[linear-gradient(180deg,#091224_0%,#06172e_100%)]  px-6 py-24 text-white lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="text-sm uppercase tracking-[0.35em] text-[#1dc38e]">
                L'Investissement
              </div>
              <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                Votre chemin vers un financement americain
              </h2>
            </div>

            <div className="relative mx-auto mt-20 max-w-4xl">
              <div className="absolute left-1/2 top-2 hidden h-[82%] w-px -translate-x-1/2 bg-white/10 md:block" />
              <div className="space-y-14">
                {timeline.map((item, index) => (
                  <div
                    key={item.stage}
                    className={`grid items-center gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div
                      className={`text-center ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                    >
                      <div className="mx-auto mb-4 h-4 w-4 rounded-full bg-[#1dc38e] shadow-[0_0_22px_rgba(29,195,142,0.5)] md:mx-0 md:inline-block" />
                      <div className="text-4xl font-bold text-[#1dc38e]">
                        {item.stage}
                      </div>
                      <div className="mt-1 text-lg text-slate-200">
                        {item.label}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/5 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(255,255,255,0.03)] backdrop-blur-sm">
                      <h3 className="text-3xl font-bold tracking-[-0.04em]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-slate-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="cta"
              className="mx-auto mt-24 max-w-3xl rounded-[28px] border border-white/5 bg-white/[0.04] px-8 py-12 text-center shadow-[0_30px_100px_rgba(255,255,255,0.04)]"
            >
              <h3 className="text-4xl font-bold md:text-5xl">
                Changez votre future
                <span className="block text-[#1dc38e]">financier</span>
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-lg  text-slate-400">
                Investissement unique pour une souveraineté structurelle à vie.
                Places limitées.
              </p>
              <a
                href="#"
                className="mt-10 inline-flex min-w-[340px] max-w-full items-center justify-center rounded-sm bg-[#20c48d] px-10 py-6 text-xl font-semibold text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:brightness-110"
              >
                Sécurisez votre access
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Records etablis
              </div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#1ac98d]">
                Protocoles eprouvés
              </div>
              <h2 className="mt-4 text-5xl font-black  text-[#09142c] md:text-7xl">
                Briefings de
                <br />
                Réussite
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {successStories.map((story) => (
                <article
                  key={story.quote}
                  className="group flex min-h-[460px] flex-col justify-between rounded-lg bg-[radial-gradient(circle_at_top,rgba(26,201,141,0.08),transparent_18%),linear-gradient(180deg,#04143f_0%,#031027_100%)] p-6 text-white shadow-[0_22px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1"
                >
                  <div className="flex justify-center pt-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#20c48d] text-2xl shadow-[0_0_32px_rgba(32,196,141,0.25)]">
                      ▶
                    </div>
                  </div>
                  <div>
                    <p className="text-[1rem] font-black uppercase">
                      {story.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full border border-[#1bc58e]/40 bg-white/5" />
                      <div>
                        <div className="font-semibold text-sm uppercase tracking-[0.18em]">
                          {story.name}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1ac98d]">
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

        <section id="faq" className="bg-[#f0f2f4] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1ac98d]">
              Base de Connaissances
            </div>
            <h2 className="mt-5 text-4xl font-black uppercase  tracking-[-0.05em] text-[#08132a] md:text-5xl">
              Questions Fréquentes
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white px-8 py-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-xl font-bold tracking-[-0.04em] text-[#10192f] marker:hidden">
                  <span>{item.q}</span>
                  <span className="text-4xl font-light text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f5f6f8] px-6 py-28 text-center lg:px-8">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden text-[24vw] font-black uppercase tracking-[-0.05em] text-black/[0.03]">
            SOUVERAIN
          </div>
          <div className="relative mx-auto max-w-5xl">
            <h2 className="text-5xl font-black uppercase  leading-none tracking-[-0.05em] text-[#0a1428] md:text-7xl">
              Structurez ou Échouez.
              <span className="block text-[#19ba87]">À vous de choisir.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-2xl  leading-relaxed text-slate-500">
              La plupart des gens échouent parce qu'ils tentent de brûler les
              étapes. Ne faites pas comme eux. Construisez votre fondation
              correctement.
            </p>
            <a
              href="#"
              className="mt-12 inline-flex items-center justify-center rounded-sm bg-[#08132a] px-16 py-6 text-xl font-semibold uppercase tracking-[0.2em] text-white shadow-[0_25px_45px_rgba(8,19,42,0.16)] transition hover:brightness-110"
            >
              Démarrer maintenant
            </a>
            <div className="mt-10 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500 ring-2 ring-[#f5f6f8]" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-100 to-teal-500 ring-2 ring-[#f5f6f8]" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-600 ring-2 ring-[#f5f6f8]" />
              </div>
              <span>+400 entrepreneurs nous ont rejoints</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0f1e] px-6 py-16 text-center text-slate-500 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#20c48d]">
            <a href="#">Termes et conditions</a>
            <span className="text-white/15">|</span>
            <a href="#">Politique de confidentialité</a>
            <span className="text-white/15">|</span>
            <a href="#">Mentions légales</a>
          </div>

          <div className="mt-8 text-sm uppercase tracking-[0.25em] text-slate-400">
            ZAID LAWANI - Copyright © 2026
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-sm leading-relaxed text-slate-400">
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
