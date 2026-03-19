import React, { useState } from "react";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Shield,
  CheckCircle2,
  LifeBuoy,
  KeyRound,
  Send,
} from "lucide-react";

const helperItems = [
  {
    icon: KeyRound,
    title: "Lien sécurisé",
    text: "Un email de réinitialisation vous sera envoyé de manière sécurisée.",
  },
  {
    icon: Send,
    title: "Action rapide",
    text: "Cliquez sur le lien reçu pour choisir un nouveau mot de passe.",
  },
  {
    icon: LifeBuoy,
    title: "Besoin d’aide ?",
    text: "Vous pourrez réessayer ou contacter le support si nécessaire.",
  },
];

function InputField({
  icon: Icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <label className="block">
      <div className="group relative">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#841D4F]/20 via-[#3C0A22]/10 to-[#1E6C86]/20 opacity-0 blur-xl transition duration-300 group-focus-within:opacity-100" />
        <div className="relative flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 backdrop-blur-md transition duration-300 group-focus-within:border-white/20 group-focus-within:bg-white/[0.06]">
          <Icon className="h-5 w-5 text-white/55" />
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
          />
        </div>
      </div>
    </label>
  );
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Forgot password:", email);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,29,79,0.22),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(30,108,134,0.18),transparent_22%),linear-gradient(180deg,#02060B_0%,#011921_48%,#000000_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-[-8%] top-[12%] h-72 w-72 rounded-full bg-[#841D4F]/20 blur-3xl" />
        <div className="absolute bottom-[8%] right-[-5%] h-72 w-72 rounded-full bg-[#1E6C86]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
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
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à la connexion
            </a>
          </div>

          <div className="flex flex-1 items-center py-10 lg:py-16">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="relative">
                <div className="max-w-2xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60 backdrop-blur-md">
                    <Shield className="h-4 w-4 text-cyan-300" />
                    Récupération sécurisée
                  </div>

                  <h1 className="text-4xl font-extrabold uppercase leading-[0.95] sm:text-4xl xl:text-4xl">
                    Réinitialisez votre
                    <span className="block bg-gradient-to-r from-[#841D4F] via-[#B13E78] to-[#1E6C86] bg-clip-text text-transparent">
                      accès membre
                    </span>
                  </h1>

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                    Entrez votre adresse mail pour recevoir un lien de
                    réinitialisation et retrouver rapidement votre espace Series
                    Addict.
                  </p>
                </div>

                <div className="relative mt-12">
                  <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#841D4F]/40 to-transparent lg:block" />

                  <div className="relative grid gap-4 sm:grid-cols-3">
                    {helperItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                          style={{
                            transform:
                              index === 1
                                ? "translateY(18px)"
                                : "translateY(0px)",
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
                            <p className="mt-2 text-sm leading-6 text-white/55">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative mt-14 hidden lg:block">
                  <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#841D4F]/30" />
                  <div className="absolute left-28 top-0 h-56 w-56 rounded-full border border-[#1E6C86]/20" />
                  <div className="relative flex items-center gap-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#841D4F]/60 to-[#1E6C86]/50" />
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#841D4F] to-[#1E6C86] shadow-[0_0_40px_rgba(132,29,79,.35)]">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#1E6C86]/50 via-[#841D4F]/60 to-transparent" />
                  </div>
                </div>
              </section>

              <section className="relative">
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#841D4F]/20 via-[#3C0A22]/10 to-[#1E6C86]/20 blur-2xl" />
                <div className="relative rounded-[32px] border border-white/10 bg-[#011921]/55 p-6 backdrop-blur-xl sm:p-8">
                  {!submitted ? (
                    <>
                      <div className="mb-8">
                        <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                          Forgot Password
                        </div>
                        <h2 className="mt-3 text-2xl font-extrabold uppercase">
                          Mot de passe oublié
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-white/55">
                          Saisissez votre email pour recevoir un lien de
                          réinitialisation.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <InputField
                          icon={Mail}
                          type="email"
                          name="email"
                          placeholder="Adresse mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                          type="submit"
                          className="group relative mt-2 inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl font-semibold text-white"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#841D4F] via-[#A32D67] to-[#1E6C86]" />
                          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.16),transparent_55%)]" />
                          <span className="relative inline-flex items-center gap-2">
                            Envoyer le lien
                            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>

                        <p className="pt-2 text-center text-sm text-white/45">
                          Vous vous souvenez de votre mot de passe ?{" "}
                          <a
                            href="/login"
                            className="bg-gradient-to-r from-[#841D4F] to-[#1E6C86] bg-clip-text font-medium text-transparent"
                          >
                            Connectez-vous
                          </a>
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="py-6">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>

                      <div className="mt-6 text-center">
                        <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                          Email envoyé
                        </div>
                        <h2 className="mt-3 text-2xl font-extrabold uppercase">
                          Vérifiez votre boîte mail
                        </h2>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/55">
                          Si un compte existe pour{" "}
                          <span className="text-white/80">{email}</span>, vous
                          recevrez un lien pour réinitialiser votre mot de
                          passe.
                        </p>
                      </div>

                      <div className="mt-8 space-y-3">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                        >
                          Essayer une autre adresse
                        </button>

                        <a
                          href="/login"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#841D4F] to-[#1E6C86] px-4 py-3 text-sm font-semibold text-white"
                        >
                          Retour à la connexion
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
