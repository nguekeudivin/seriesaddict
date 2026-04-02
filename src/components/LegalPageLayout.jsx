import { useEffect } from "react";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import cardUsaImage from "../assets/carte-usa-image.webp";

const legalLinks = [
  { label: "Termes et conditions", to: "/conditions-generales" },
  {
    label: "Politique de confidentialité",
    to: "/politique-confidentialite",
  },
  { label: "Mentions légales", to: "/mentions-legales" },
];

export default function LegalPageLayout({
  eyebrow,
  title,
  intro,
  lastUpdated,
  meta,
  notice,
  sections,
}) {
  useEffect(() => {
    document.title = `Carte USA | ${title}`;
  }, [title]);

  return (
    <div className="min-h-screen bg-[#eef0f3] text-[#0e1830]">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f5f6f8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center">
            <img
              src={cardUsaImage}
              alt="Carte USA"
              className="w-[140px] sm:w-[170px] md:w-[200px]"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {legalLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition hover:text-emerald-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(78,223,182,0.20),transparent_24%),linear-gradient(135deg,#07101c_0%,#04122e_38%,#061530_72%,#0a1321_100%)] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(135deg,transparent_0px,transparent_34px,rgba(255,255,255,0.1)_34px,rgba(255,255,255,0.1)_35px),repeating-linear-gradient(45deg,transparent_0px,transparent_52px,rgba(109,220,255,0.06)_52px,rgba(109,220,255,0.06)_53px)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(109,220,255,0.05),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(24,201,141,0.06),transparent_24%)]" />
          <div className="pointer-events-none absolute -left-16 top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-5rem] top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l’accueil
            </Link>

            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {intro}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Mise à jour
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {lastUpdated}
                </p>
              </div>

              {meta.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Scale className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                  Cadre légal
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {notice}
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                  Accès rapide
                </h2>
                <div className="mt-5 space-y-3">
                  {legalLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-5">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Section {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items?.length ? (
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                        >
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
