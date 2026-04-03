import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CirclePlay, Mail, ShieldCheck, User } from "lucide-react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import cardUsaImage from "../assets/carte-usa-image.webp";
import TestimonialVideoModal from "../components/TestimonialVideoModal";
import "react-phone-input-2/lib/style.css";

const discoveryPoints = [
  "Comment les cartes de crédit américaines peuvent vous aider à accéder à du financement pour votre activité.",
  "Les étapes importantes à suivre pour vous positionner plus sérieusement vers ce financement.",
  "Comment utiliser ce financement pour soutenir la croissance de votre activité plus intelligemment.",
];

const faqs = [
  {
    q: "Faut-il déjà avoir une entreprise ?",
    a: "Pas forcément. Selon votre situation, certaines bases peuvent être posées avant même d’avoir une structure pleinement active.",
  },
  {
    q: "Est-ce adapté aux non-résidents ?",
    a: "Oui. La page s’adresse précisément aux profils internationaux qui veulent comprendre comment avancer plus sérieusement vers le crédit américain.",
  },
  {
    q: "Combien de temps faut-il prévoir ?",
    a: "Cela dépend du point de départ, des documents disponibles et de la qualité de la mise en place.",
  },
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    profile: "Entrepreneur",
    goal: "",
  });
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
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.75,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.assign("https://carteusa.com/vsl-ytb");
  };

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

        .phone-input-container {
          width: 100%;
        }

        .phone-input-container .form-control {
          width: 100% !important;
          height: 56px !important;
          border: 1px solid rgb(203 213 225) !important;
          border-radius: 1rem !important;
          padding-left: 4.9rem !important;
          padding-right: 1rem !important;
          font-size: 1rem !important;
          color: rgb(15 23 42) !important;
          background: white !important;
          box-shadow: none !important;
        }

        .phone-input-container .form-control:focus {
          border-color: rgb(16 185 129) !important;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15) !important;
        }

        .phone-input-container .flag-dropdown {
          border: 1px solid rgb(203 213 225) !important;
          border-right: none !important;
          border-radius: 1rem 0 0 1rem !important;
          background: rgb(248 250 252) !important;
        }

        .phone-input-container .selected-flag {
          width: 4.1rem !important;
          padding-left: 0.95rem !important;
          border-radius: 1rem 0 0 1rem !important;
          background: transparent !important;
        }

        .phone-input-container .selected-flag:hover,
        .phone-input-container .selected-flag:focus {
          background: rgba(15, 23, 42, 0.04) !important;
        }

        .phone-input-container .country-list {
          width: min(340px, calc(100vw - 2rem)) !important;
          margin-top: 0.6rem !important;
          border: 1px solid rgb(226 232 240) !important;
          border-radius: 1rem !important;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12) !important;
        }

        .phone-input-container .search {
          padding: 0.75rem !important;
          background: white !important;
        }

        .phone-input-container .search-box {
          width: 100% !important;
          margin: 0 !important;
          border: 1px solid rgb(203 213 225) !important;
          border-radius: 0.85rem !important;
          padding: 0.75rem 0.9rem !important;
          color: rgb(15 23 42) !important;
        }

        .phone-input-container .country-list .country {
          padding-top: 0.7rem !important;
          padding-bottom: 0.7rem !important;
        }

        .phone-input-container .country-list .country.highlight,
        .phone-input-container .country-list .country:hover {
          background: rgb(236 253 245) !important;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-[#f5f6f8]/95 py-4 backdrop-blur"
            : "hidden bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto flex justify-center max-w-7xl items-center md:justify-between px-4 sm:px-6 lg:px-10">
          <Link to="/" className=" items-center hidden md:inline-flex">
            <img
              src={cardUsaImage}
              alt="Carte USA"
              className="w-[140px]  md:w-[150px]"
            />
          </Link>

          <button
            type="button"
            onClick={scrollToForm}
            className={`rounded-sm px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.22em] ${
              isScrolled
                ? "bg-[#08132a] text-white shadow-lg"
                : "bg-white text-[#08132a] shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            } hover:brightness-110`}
          >
            Je veux en savoir plus
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.20),transparent_24%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(135deg,transparent_0px,transparent_34px,rgba(255,255,255,0.1)_34px,rgba(255,255,255,0.1)_35px),repeating-linear-gradient(45deg,transparent_0px,transparent_52px,rgba(109,220,255,0.06)_52px,rgba(109,220,255,0.06)_53px)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(109,220,255,0.05),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(24,201,141,0.06),transparent_24%)]" />
          <div className="pointer-events-none absolute -left-24 top-20 h-[28rem] w-[28rem] rotate-[18deg] rounded-[3rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[2px]" />
          <div className="pointer-events-none absolute right-[-10rem] top-8 h-[30rem] w-[30rem] -rotate-[16deg] rounded-[4rem] border border-cyan-300/10 bg-cyan-200/[0.02]" />
          <div className="pointer-events-none absolute bottom-[-9rem] left-[10%] h-[22rem] w-[22rem] rotate-[22deg] rounded-[3rem] border border-emerald-300/10 bg-emerald-200/[0.02]" />
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
            </svg>
          </div>
          <div className="pointer-events-none absolute -left-16 top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-5rem] top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          <div className="flex justify-center pt-8">
            <img
              src="/images/carte-usa.png"
              alt="Carte USA"
              className="w-[140px]  md:w-[200px]"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-4 lg:px-8 lg:pb-28 lg:pt-8">
            <motion.div
              className="mx-auto max-w-5xl text-center"
              {...fadeUp(0.04)}
            >
              <div className="mx-auto inline-flex items-center rounded-sm border border-emerald-500/40 bg-emerald-400/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.35em]">
                Entrepreneurs • Investisseurs immobiliers • Propriétaires
                d’entreprises
              </div>

              <h1 className="mx-auto mt-8 max-w-5xl text-[2rem] font-black leading-[1.05] text-white sm:mt-10 sm:text-3xl lg:text-[3rem]">
                Découvrez comment utiliser les cartes de crédit américaines
                <span className="mt-3 block bg-[linear-gradient(135deg,#b8ffe9_0%,#19c98d_50%,#6ddcff_100%)] bg-clip-text text-transparent">
                  pour financer et développer votre activité
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-4xl text-xl leading-7 text-slate-300 sm:mt-10 sm:text-2xl sm:leading-relaxed">
                La stratégie pour utiliser le système financier américain comme
                levier de financement business, avec les bonnes bases, les
                bonnes étapes et les bons repères pour éviter les erreurs.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-sm bg-[#20c48d] px-6 py-5 text-base font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-lg sm:tracking-[0.16em]"
                >
                  Découvrir
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto mt-14 max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8 lg:p-10"
              {...fadeUp(0.12)}
            >
              <div className="text-center">
                <p className="md:text-xl font-semibold uppercase tracking-[0.28em] text-[#7ef3cf] ">
                  Voici ce que vous allez apprendre
                </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {discoveryPoints.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5 text-left sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/12 text-[#7ef3cf]">
                      <span className="text-sm font-bold">0{index + 1}</span>
                    </div>
                    <p className="mt-4 text-lg leading-7 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="lead-form"
          className="bg-[#f5f6f8] px-0 py-16 sm:px-4 sm:py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              className="text-[#0e1830] px-4 md:px-0"
              {...fadeUp(0.04)}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#19b884] sm:text-sm sm:tracking-[0.28em]">
                Formulaire
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#08132a] md:text-4xl">
                Découvrez la stratégie pour financer et développer votre
                activité
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Si votre objectif est de lancer ou de développer votre activité,
                remplissez ce formulaire pour découvrir comment utiliser les
                cartes de crédit business comme levier de financement pour votre
                activité.
              </p>

              <div className="mt-8 space-y-4 hidden md:block">
                {[
                  "Avec ou sans entreprise existante",
                  "Pensé pour des profils internationaux",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#19b884]" />
                    <p className="text-sm leading-7 text-slate-700 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[30px] border border-slate-200 bg-white p-4 md:p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]"
              {...fadeUp(0.1)}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="w-full rounded-2xl border border-slate-300 px-11 py-3.5 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="vous@example.com"
                        className="w-full rounded-2xl border border-slate-300 px-11 py-3.5 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Téléphone
                    </label>
                    <PhoneInput
                      country="fr"
                      preferredCountries={["fr"]}
                      enableSearch
                      disableSearchIcon
                      countryCodeEditable={false}
                      specialLabel=""
                      value={formState.phone}
                      onChange={(phone) =>
                        setFormState((prev) => ({ ...prev, phone }))
                      }
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoComplete: "tel",
                      }}
                      placeholder="Votre numéro"
                      containerClass="phone-input-container"
                      searchPlaceholder="Rechercher un pays"
                      preserveOrder={["preferredCountries"]}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#08132a] px-6 py-4 text-base font-semibold text-white transition hover:brightness-110"
                >
                  Découvrir la prochaine étape
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-base leading-6 text-slate-600">
                  Vos informations sont sécurisées. Nous ne partagerons JAMAIS
                  vos données avec qui que ce soit.
                </p>
              </form>
            </motion.div>
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
      </main>

      <footer className="bg-[#0a0f1e] px-4 py-14 text-center text-slate-500 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[#20c48d] sm:gap-6 sm:text-sm">
            <Link to="/conditions-generales">Termes et conditions</Link>
            <span className="text-white/15">|</span>
            <Link to="/politique-confidentialite">
              Politique de confidentialité
            </Link>
            <span className="text-white/15">|</span>
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>

          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400 sm:mt-8 sm:text-sm sm:tracking-[0.25em]">
            ZAID LAWANI - Copyright © 2026
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-[13px] leading-relaxed text-slate-400 sm:mt-12 sm:space-y-6 sm:text-sm">
            <p>
              Les décisions finales appartiennent toujours aux banques et aux
              établissements financiers. Notre rôle est de vous aider à avancer
              avec une meilleure préparation.
            </p>
            <p>
              Cette page présente une méthode et un accompagnement. Elle ne
              constitue ni une offre de prêt, ni une garantie de résultat, ni
              une promesse d’approbation.
            </p>
          </div>
        </div>
      </footer>

      <TestimonialVideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
