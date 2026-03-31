import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleAlert,
  Clock3,
  FileText,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const proofStats = [
  { value: "500+", label: "entrepreneurs internationaux accompagnés" },
  { value: "4,3M$", label: "de financements observés sur des cas réels" },
  { value: "6 à 12 sem.", label: "pour le traitement ITIN selon le dossier" },
  { value: "3 phases", label: "ITIN, présence bancaire, montée en crédit" },
];

const diagnostics = [
  {
    title: "Ordre de passage incohérent",
    text: "Beaucoup de non-résidents essaient d'accéder au crédit avant d'avoir une base administrative et bancaire crédible.",
  },
  {
    title: "Mauvaise lecture des critères bancaires",
    text: "Un dossier peut sembler solide sur le papier et pourtant être mal positionné pour l'institution visée.",
  },
  {
    title: "Information fragmentée",
    text: "Entre forums, vidéos, hacks et conseils contradictoires, le risque principal est d'appliquer de mauvais leviers au mauvais moment.",
  },
];

const pitfalls = [
  {
    title: "Promesses de financement immédiat",
    text: "Ces offres vendent la vitesse alors que la vraie variable est la cohérence du dossier.",
  },
  {
    title: "Stratégies copiées de profils résidents",
    text: "Un non-résident ne doit pas répliquer la trajectoire d'un entrepreneur basé aux États-Unis.",
  },
  {
    title: "Montages improvisés",
    text: "LLC, banque, crédit et financement ne doivent pas être assemblés sans logique d'ensemble.",
  },
];

const protocol = [
  {
    title: "Base documentaire propre",
    text: "Poser une structure lisible, légitime et compatible avec la suite du parcours.",
  },
  {
    title: "Présence bancaire cohérente",
    text: "Choisir les bons points d'entrée et éviter les options qui limitent la montée en crédibilité.",
  },
  {
    title: "Construction progressive du profil",
    text: "Mettre en place la séquence exacte pour installer de la confiance avant de viser le financement.",
  },
];

const roadmap = [
  {
    step: "01",
    icon: BadgeCheck,
    title: "Valider l'entrée administrative",
    text: "Éligibilité ITIN, lecture du dossier, documents, séquence et erreurs à éviter dès le départ.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Préparer le dossier documentaire",
    text: "Passeport, preuve d'adresse, cohérence des informations, structure et ordre de soumission.",
  },
  {
    step: "03",
    icon: Landmark,
    title: "Créer la présence bancaire",
    text: "Sélection du bon canal, ouverture structurée et positionnement cohérent avec l'objectif futur.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Stabiliser le profil",
    text: "Éviter les actions qui fragilisent la crédibilité du dossier ou créent des signaux inutiles.",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Monter vers le crédit",
    text: "Construire l'accès étape par étape avec une progression réaliste, propre et défendable.",
  },
  {
    step: "06",
    icon: Users,
    title: "Préparer la phase financement",
    text: "Savoir quand viser plus grand, sur quels critères, et avec quel niveau de maturité du dossier.",
  },
];

const deliverables = [
  "Lecture stratégique de votre point de départ",
  "Séquence détaillée ITIN vers banque puis crédit",
  "Cadre de décision pour éviter les mauvais choix",
  "Repères sur les délais, dépendances et blocages réels",
  "Vision claire des options pertinentes selon votre profil",
  "Méthode pour construire un positionnement crédible",
  "Vue d'ensemble sur les erreurs les plus coûteuses",
  "Approche structurée orientée crédit et financement durable",
];

const faqs = [
  {
    q: "Cette page remplace-t-elle un conseil bancaire ou juridique ?",
    a: "Non. Elle présente une méthode de structuration et de positionnement. L'approbation finale reste toujours à la discrétion des institutions concernées.",
  },
  {
    q: "Est-ce adapté si je pars de zéro ?",
    a: "Oui. La logique de la page est justement de détailler la progression depuis une absence d'historique jusqu'à un profil plus lisible.",
  },
  {
    q: "Pourquoi cette version est-elle plus dense ?",
    a: "Parce qu'elle s'adresse aux profils qui veulent comprendre le système, les dépendances entre étapes et les risques avant de passer à l'action.",
  },
  {
    q: "Combien de temps faut-il prévoir ?",
    a: "Cela dépend de votre point de départ, de la qualité du dossier et des délais des institutions. La page met l'accent sur la séquence plutôt que sur des promesses de vitesse.",
  },
];

export default function LandingPage2() {
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
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
        };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          mask-image: linear-gradient(180deg, rgba(255,255,255,0.9), transparent 88%);
        }

        .hero-orb {
          filter: blur(14px);
          animation: denseFloat 12s ease-in-out infinite;
        }

        .hero-orb-delay {
          animation-delay: -5s;
          animation-duration: 16s;
        }

        @keyframes denseFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -16px, 0);
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
            href="/"
            className={`transition-colors duration-300 ${
              isScrolled ? "text-[#0a1428]" : "text-white"
            }`}
          >
            <img
              src="/images/carte-usa-image.webp"
              alt="Carte USA"
              className="w-[200px]"
            />
          </a>

          <nav
            className={`hidden items-center gap-10 text-[16px] font-medium md:flex transition-colors duration-300 ${
              isScrolled ? "text-slate-600" : "text-slate-300"
            }`}
          >
            <a href="#diagnostic" className="transition hover:text-emerald-400">
              Diagnostic
            </a>
            <a href="#sequence" className="transition hover:text-emerald-400">
              Séquence
            </a>
            <a href="#deliverables" className="transition hover:text-emerald-400">
              Livrables
            </a>
            <a href="#faq" className="transition hover:text-emerald-400">
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
            Voir la méthode
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.22),transparent_28%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)]">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="hero-orb absolute left-[7%] top-24 h-28 w-28 rounded-full bg-[#7ef3cf]/25" />
          <div className="hero-orb hero-orb-delay absolute right-[8%] top-24 h-44 w-44 rounded-full bg-[#4f8cff]/18" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
            <motion.div className="max-w-5xl" {...fadeUp(0.04)}>
              <div className="inline-flex items-center rounded-sm border border-emerald-500/40 bg-emerald-400/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur-sm">
                Version dense de la méthode
              </div>

              <h1 className="mt-10 max-w-5xl text-3xl font-black uppercase text-white md:text-5xl lg:text-[4.2rem] lg:leading-[0.94]">
                La version complète pour construire un accès crédible au
                <span className="mt-3 block bg-[linear-gradient(135deg,#b8ffe9_0%,#19c98d_50%,#6ddcff_100%)] bg-clip-text text-transparent">
                  crédit et au financement américain
                </span>
              </h1>

              <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-[1.35rem] md:leading-9">
                Cette page est pensée pour les profils qui ne veulent pas
                seulement une promesse, mais une lecture plus dense du
                parcours: prérequis, séquence, risques, dépendances, délais
                réalistes et logique complète entre <span className="font-semibold text-white">ITIN</span>,{" "}
                <span className="font-semibold text-white">présence bancaire</span>,{" "}
                <span className="font-semibold text-white">crédit</span> et{" "}
                <span className="font-semibold text-white">financement</span>.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#sequence"
                  className="inline-flex min-w-[280px] items-center justify-center gap-3 rounded-sm bg-[#20c48d] px-10 py-6 text-lg font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Étudier la séquence
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#deliverables"
                  className="inline-flex min-w-[280px] items-center justify-center rounded-sm border border-white/12 bg-white/[0.04] px-10 py-6 text-base font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Voir les livrables
                </a>
              </div>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {proofStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                  {...fadeUp(0.1 + index * 0.05)}
                >
                  <div className="text-[2.2rem] font-black tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnostic" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div className="max-w-3xl" {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19b884]">
                Diagnostic
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#0a1430] md:text-5xl">
                Pourquoi la plupart des dossiers bloquent avant même de
                commencer
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-slate-600">
                L'échec n'est pas toujours lié au profil. Il vient souvent d'un
                enchaînement d'étapes mal exécutées, d'une mauvaise lecture des
                critères et d'une absence de stratégie d'ensemble.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {diagnostics.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                  {...fadeUp(0.08 + index * 0.05)}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <CircleAlert className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-[#10192f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.06)] lg:grid-cols-2">
            <motion.div className="p-8 lg:p-12" {...fadeUp(0.05)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                Ce que le marché vend
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#0b1430] md:text-4xl">
                Des raccourcis qui créent plus de friction que de résultats
              </h2>
              <div className="mt-10 space-y-8">
                {pitfalls.map((item) => (
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
                Ce qu'il faut réellement construire
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                Une architecture lisible, progressive et défendable
              </h2>
              <div className="mt-10 space-y-8">
                {protocol.map((item) => (
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

        <section
          id="sequence"
          className="bg-[linear-gradient(180deg,#091224_0%,#06172e_100%)] px-6 py-24 text-white lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div className="max-w-4xl" {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#64edbf]">
                Séquence détaillée
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">
                Le parcours dense, du premier signal jusqu'à la phase
                financement
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-slate-300">
                Ici, l'objectif n'est pas de simplifier à l'excès. Il est de
                rendre visible la chaîne complète pour savoir quoi faire, quoi
                ne pas faire et à quel moment chaque décision devient
                pertinente.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {roadmap.map((item, index) => (
                <motion.article
                  key={item.step}
                  className="rounded-[28px] border border-white/8 bg-white/[0.05] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                  {...fadeUp(0.08 + index * 0.04)}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#64edbf]">
                      Étape {item.step}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20c48d] text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="deliverables" className="bg-[#f7f8f9] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19b884]">
                Ce que vous obtenez
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#0a1430] md:text-5xl">
                Une lecture plus complète, plus utile et plus actionnable du
                système
              </h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.04)]"
                    {...fadeUp(0.08 + index * 0.03)}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e8fbf4] text-[#19b884]">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="rounded-[30px] bg-[#081225] p-8 text-white shadow-[0_28px_70px_rgba(8,18,37,0.26)]"
              {...fadeUp(0.12)}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20c48d] text-white">
                <Clock3 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-3xl font-bold tracking-[-0.03em]">
                Pour qui cette version est utile
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Pour les profils qui veulent comprendre la mécanique complète
                avant de s'engager: fondateurs, consultants, e-commerçants,
                indépendants, opérateurs internationaux ou dirigeants qui
                veulent éviter les erreurs de séquencement.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Vous vivez hors des États-Unis",
                  "Vous partez de zéro ou avec peu de repères",
                  "Vous cherchez un cadre crédible, pas un hack",
                  "Vous voulez préparer l'accès au crédit puis au financement",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-base text-slate-200">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#64edbf]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                id="cta"
                href="#"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#20c48d] px-8 py-5 text-base font-semibold uppercase tracking-[0.16em] text-white transition hover:brightness-110"
              >
                Étudier votre dossier
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.aside>
          </div>
        </section>

        <section id="faq" className="bg-[#eef0f3] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div className="text-center" {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#19b884]">
                FAQ
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#08132a] md:text-5xl">
                Questions fréquentes
              </h2>
            </motion.div>

            <div className="mt-12 space-y-4">
              {faqs.map((item, index) => (
                <motion.details
                  key={item.q}
                  className="group rounded-[24px] bg-white px-8 py-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                  {...fadeUp(0.06 + index * 0.03)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-xl font-bold tracking-[-0.03em] text-[#10192f] marker:hidden">
                    <span>{item.q}</span>
                    <span className="text-4xl font-light text-slate-400 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {item.a}
                  </p>
                </motion.details>
              ))}
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

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-sm leading-relaxed text-slate-400">
            <p>
              Les résultats et montants mentionnés sont donnés à titre
              indicatif. Ils dépendent du profil, du contexte et des décisions
              des institutions concernées.
            </p>
            <p>
              Cette page ne constitue ni une offre de prêt ni une garantie
              d'approbation. Elle présente un cadre méthodologique et
              stratégique.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
