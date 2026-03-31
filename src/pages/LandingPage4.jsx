import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CircleAlert,
  Clock3,
  FileText,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const page1Steps = [
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

const page1MarketTraps = [
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
    text: "Si vous ne possédez pas le processus, vous n'avez pas de fondation. Vous pourrez commettre des erreurs.",
  },
];

const page1Protocol = [
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
];

const page1Timeline = [
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

const page1SuccessStories = [
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

const page1Faqs = [
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

const page1FooterNotes = [
  "⚠️ Les montants de financement et les résultats mentionnés sont des exemples basés sur des cas réels. Les résultats peuvent varier selon le profil, la situation financière et les conditions de marché.",
  "Sovereign Fiscal n'est pas une banque et ne propose aucun prêt. Ce site ne fait pas partie du site web de Facebook ou de Facebook Inc. De plus, ce site n'est en aucun cas approuvé par Facebook. Facebook est une marque commerciale de Facebook, Inc.",
  "Sovereign Fiscal n'est pas responsable de vos actions. Vous êtes seul responsable de vos propres actions et décisions et l'évaluation et l'utilisation de nos produits et services doivent être basées sur votre propre diligence raisonnable.",
];

const page2ProofStats = [
  { value: "500+", label: "entrepreneurs internationaux accompagnés" },
  { value: "4,3M$", label: "de financements observés sur des cas réels" },
  { value: "6 à 12 sem.", label: "pour le traitement ITIN selon le dossier" },
  { value: "3 phases", label: "ITIN, présence bancaire, montée en crédit" },
];

const page2Diagnostics = [
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

const page2Pitfalls = [
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

const page2Protocol = [
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

const page2Roadmap = [
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

const page2Deliverables = [
  "Lecture stratégique de votre point de départ",
  "Séquence détaillée ITIN vers banque puis crédit",
  "Cadre de décision pour éviter les mauvais choix",
  "Repères sur les délais, dépendances et blocages réels",
  "Vision claire des options pertinentes selon votre profil",
  "Méthode pour construire un positionnement crédible",
  "Vue d'ensemble sur les erreurs les plus coûteuses",
  "Approche structurée orientée crédit et financement durable",
];

const page2Faqs = [
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

const page2FooterNotes = [
  "Les résultats et montants mentionnés sont donnés à titre indicatif. Ils dépendent du profil, du contexte et des décisions des institutions concernées.",
  "Cette page ne constitue ni une offre de prêt ni une garantie d'approbation. Elle présente un cadre méthodologique et stratégique.",
];

export default function LandingPage4() {
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
          animation: stackedFloat 12s ease-in-out infinite;
        }

        .hero-orb-delay {
          animation-delay: -5s;
          animation-duration: 16s;
        }

        @keyframes stackedFloat {
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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-[#f5f6f8]/95 py-4 backdrop-blur"
            : "border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
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
            className={`hidden items-center gap-8 text-[15px] font-medium md:flex ${
              isScrolled ? "text-slate-600" : "text-slate-300"
            }`}
          >
            <a href="#page1-hero" className="transition hover:text-emerald-400">
              Page 1
            </a>
            <a
              href="#page1-pricing"
              className="transition hover:text-emerald-400"
            >
              Tarifs P1
            </a>
            <a href="#page2-hero" className="transition hover:text-emerald-400">
              Page 2
            </a>
            <a
              href="#page2-sequence"
              className="transition hover:text-emerald-400"
            >
              Séquence P2
            </a>
            <a href="#page2-faq" className="transition hover:text-emerald-400">
              FAQ P2
            </a>
          </nav>

          <a
            href="#page1-cta"
            className={`rounded-sm px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
              isScrolled
                ? "bg-[#08132a] text-white shadow-lg"
                : "bg-white text-[#08132a] shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            } hover:brightness-110`}
          >
            Accéder
          </a>
        </div>
      </header>

      <main>
        <section
          id="page1-hero"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.22),transparent_28%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)]"
        >
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <motion.div
              className="mx-auto inline-flex items-center rounded-sm border border-white/12 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80"
              {...fadeUp(0.02)}
            >
              Page 1
            </motion.div>

            <motion.div
              className="mx-auto mt-5 inline-flex items-center rounded-sm border border-emerald-500/40 bg-emerald-400/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur-sm"
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
                href="#page1-cta"
                className="inline-flex min-w-[280px] items-center justify-center rounded-sm bg-[#20c48d] px-10 py-6 text-lg font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Accéder au système
              </a>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f3f5f7] px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-4xl">
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

        <section id="page1-protocol" className="px-6 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-none lg:grid-cols-2">
            <motion.div className="p-10 lg:p-16" {...fadeUp(0.05)}>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-red-600">
                L&apos;Avertissement
              </div>
              <h2 className="mt-6 text-3xl font-black uppercase text-[#0a1430] md:text-5xl">
                Les &quot;pièges&quot;
                <br />
                du Marché
              </h2>

              <div className="mt-12 space-y-10">
                {page1MarketTraps.map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="mt-1 flex h-11 w-16 items-center justify-center border-2 border-red-600 text-2xl text-red-600">
                      <X />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase text-[#111b34] md:text-[1.65rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-xl leading-relaxed text-gray-800">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[linear-gradient(90deg,#04143f_0%,#06102d_50%,#0a2131_100%)] p-10 text-white lg:p-16"
              {...fadeUp(0.12)}
            >
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#18c98d]">
                Le Protocole
              </div>
              <h2 className="mt-6 text-3xl font-black uppercase md:text-5xl">
                La Vérité
                <br />
                Souveraine
              </h2>

              <div className="mt-12 space-y-10">
                {page1Protocol.map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="mt-1 flex h-11 w-16 items-center justify-center bg-[#20c48d] text-2xl text-white">
                      <Check />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase text-white md:text-[1.65rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-xl leading-relaxed text-slate-200">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="page1-roadmap" className="bg-[#eef0f3] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              className="text-center text-4xl font-bold tracking-[-0.04em] text-black md:text-6xl"
              {...fadeUp(0.04)}
            >
              La Séquence d&apos;Autorité
            </motion.h2>
            <motion.p
              className="mt-4 text-center text-xl text-slate-700"
              {...fadeUp(0.08)}
            >
              Une exécution linéaire précise pour un resultant optimale
            </motion.p>

            <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 xl:grid-cols-2">
              {page1Steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative px-4"
                  {...fadeUp(0.1 + index * 0.04)}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl text-[#1cbc87] shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                    <step.icon className="h-9 w-9" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="page1-pricing"
          className="bg-black px-6 py-24 text-white lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div className="text-center" {...fadeUp(0.04)}>
              <div className="text-sm uppercase tracking-[0.35em] text-[#1dc38e]">
                L&apos;Investissement
              </div>
              <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                Votre chemin vers un financement americain
              </h2>
            </motion.div>

            <div className="relative mx-auto mt-20 max-w-4xl">
              <div className="absolute left-1/2 top-2 hidden h-[82%] w-px -translate-x-1/2 bg-white/10 md:block" />
              <div className="space-y-14">
                {page1Timeline.map((item, index) => (
                  <motion.div
                    key={item.stage}
                    className={`grid items-center gap-8 md:grid-cols-2 ${
                      index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                    {...fadeUp(0.08 + index * 0.05)}
                  >
                    <div
                      className={`text-center ${
                        index % 2 === 0
                          ? "md:text-right md:pr-10"
                          : "md:text-left md:pl-10"
                      }`}
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
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              id="page1-cta"
              className="mx-auto mt-24 max-w-3xl rounded-[28px] border border-white/5 bg-white/[0.04] px-8 py-12 text-center shadow-[0_30px_100px_rgba(255,255,255,0.04)]"
              {...fadeUp(0.12)}
            >
              <h3 className="text-4xl font-bold uppercase leading-none tracking-[-0.04em] md:text-5xl">
                Changez votre future
                <span className="block text-[#1dc38e]">financier</span>
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                Investissement unique pour une souveraineté structurelle à vie.
                Places limitées.
              </p>
              <a
                href="#"
                className="mt-10 inline-flex min-w-[340px] max-w-full items-center justify-center rounded-sm bg-[#20c48d] px-10 py-6 text-xl font-semibold text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:brightness-110"
              >
                Sécurisez votre access
              </a>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div className="text-center" {...fadeUp(0.04)}>
              <div className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Records etablis
              </div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#1ac98d]">
                Protocoles eprouvés
              </div>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.05em] text-[#09142c] md:text-7xl">
                Briefings de
                <br />
                Réussite
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {page1SuccessStories.map((story, index) => (
                <motion.article
                  key={story.quote}
                  className="group flex min-h-[460px] flex-col justify-between rounded-lg bg-[radial-gradient(circle_at_top,rgba(26,201,141,0.08),transparent_18%),linear-gradient(180deg,#04143f_0%,#031027_100%)] p-6 text-white shadow-[0_22px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1"
                  {...fadeUp(0.06 + index * 0.03)}
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
                        <div className="text-sm font-semibold uppercase tracking-[0.18em]">
                          {story.name}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1ac98d]">
                          {story.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="page1-faq" className="bg-[#f0f2f4] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1ac98d]">
              Base de Connaissances
            </div>
            <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] text-[#08132a] md:text-5xl">
              Questions Fréquentes
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {page1Faqs.map((item, index) => (
              <motion.details
                key={item.q}
                className="group bg-white px-8 py-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                {...fadeUp(0.06 + index * 0.03)}
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
              </motion.details>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f5f6f8] px-6 py-28 text-center lg:px-8">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden text-[24vw] font-black uppercase tracking-[-0.05em] text-black/[0.03]">
            SOUVERAIN
          </div>
          <motion.div className="relative mx-auto max-w-5xl" {...fadeUp(0.05)}>
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] text-[#0a1428] md:text-7xl">
              Structurez ou Échouez.
              <span className="block text-[#19ba87]">À vous de choisir.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-2xl leading-relaxed text-slate-500">
              La plupart des gens échouent parce qu&apos;ils tentent de brûler
              les étapes. Ne faites pas comme eux. Construisez votre fondation
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
          </motion.div>
        </section>

        <section className="bg-[#0a0f1e] px-6 py-16 text-center text-slate-500 lg:px-8">
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
              {page1FooterNotes.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="page2-hero"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.22),transparent_28%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)]"
        >
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="hero-orb absolute left-[7%] top-24 h-28 w-28 rounded-full bg-[#7ef3cf]/25" />
          <div className="hero-orb hero-orb-delay absolute right-[8%] top-24 h-44 w-44 rounded-full bg-[#4f8cff]/18" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
            <motion.div
              className="inline-flex items-center rounded-sm border border-white/12 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80"
              {...fadeUp(0.02)}
            >
              Page 2
            </motion.div>

            <motion.div className="mt-6 max-w-5xl" {...fadeUp(0.04)}>
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
                seulement une promesse, mais une lecture plus dense du parcours:
                prérequis, séquence, risques, dépendances, délais réalistes et
                logique complète entre{" "}
                <span className="font-semibold text-white">ITIN</span>,{" "}
                <span className="font-semibold text-white">
                  présence bancaire
                </span>
                , <span className="font-semibold text-white">crédit</span> et{" "}
                <span className="font-semibold text-white">financement</span>.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#page2-sequence"
                  className="inline-flex min-w-[280px] items-center justify-center gap-3 rounded-sm bg-[#20c48d] px-10 py-6 text-lg font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Étudier la séquence
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#page2-deliverables"
                  className="inline-flex min-w-[280px] items-center justify-center rounded-sm border border-white/12 bg-white/[0.04] px-10 py-6 text-base font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Voir les livrables
                </a>
              </div>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {page2ProofStats.map((stat, index) => (
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

        <section id="page2-diagnostic" className="px-6 py-20 lg:px-8">
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
                L&apos;échec n&apos;est pas toujours lié au profil. Il vient
                souvent d&apos;un enchaînement d&apos;étapes mal exécutées,
                d&apos;une mauvaise lecture des critères et d&apos;une absence
                de stratégie d&apos;ensemble.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {page2Diagnostics.map((item, index) => (
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
                {page2Pitfalls.map((item) => (
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
                Ce qu&apos;il faut réellement construire
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                Une architecture lisible, progressive et défendable
              </h2>
              <div className="mt-10 space-y-8">
                {page2Protocol.map((item) => (
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
          id="page2-sequence"
          className="bg-[linear-gradient(180deg,#091224_0%,#06172e_100%)] px-6 py-24 text-white lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div className="max-w-4xl" {...fadeUp(0.04)}>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#64edbf]">
                Séquence détaillée
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">
                Le parcours dense, du premier signal jusqu&apos;à la phase
                financement
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-slate-300">
                Ici, l&apos;objectif n&apos;est pas de simplifier à
                l&apos;excès. Il est de rendre visible la chaîne complète pour
                savoir quoi faire, quoi ne pas faire et à quel moment chaque
                décision devient pertinente.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {page2Roadmap.map((item, index) => (
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

        <section
          id="page2-deliverables"
          className="bg-[#f7f8f9] px-6 py-24 lg:px-8"
        >
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
                {page2Deliverables.map((item, index) => (
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
                avant de s&apos;engager: fondateurs, consultants, e-commerçants,
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
                  <div
                    key={item}
                    className="flex gap-3 text-base text-slate-200"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#64edbf]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                id="page2-cta"
                href="#"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#20c48d] px-8 py-5 text-base font-semibold uppercase tracking-[0.16em] text-white transition hover:brightness-110"
              >
                Étudier votre dossier
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.aside>
          </div>
        </section>

        <section id="page2-faq" className="bg-[#eef0f3] px-6 py-24 lg:px-8">
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
              {page2Faqs.map((item, index) => (
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

        <section className="bg-[#0a0f1e] px-6 py-16 text-center text-slate-500 lg:px-8">
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
              {page2FooterNotes.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
