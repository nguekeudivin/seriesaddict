import { useState } from "react";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import ContentPage from "../components/ContentPage";

const subjects = [
  "Question générale",
  "Problème technique",
  "Partenariat",
  "Signalement de contenu",
  "Autre",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Intégration future avec l’API de contact
    alert("Merci pour votre message. Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <ContentPage
      title="Contactez-nous"
      subtitle="Une question, une suggestion ou un problème ? L’équipe Series Addict est là pour vous aider."
      badge="Contact"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        {/* Coordonnées */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Email
            </h3>
            <p className="mt-1 text-sm text-white/60">contact@seriesaddict.fr</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Adresse
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Series Addict<br />
              12 rue de la Fiction<br />
              75010 Paris, France
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Téléphone
            </h3>
            <p className="mt-1 text-sm text-white/60">+33 1 23 45 67 89</p>
            <p className="mt-1 text-xs text-white/40">Du lundi au vendredi, 9h–18h</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/70">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/30"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/70">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/30"
                placeholder="votre@email.fr"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/70">
              Sujet
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/30"
            >
              {subjects.map((s) => (
                <option key={s} value={s} className="bg-brand-dark">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/70">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/30"
              placeholder="Décrivez votre demande..."
            />
          </div>

          <button
            type="submit"
            className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 font-semibold text-white transition hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary-600 to-brand-cyan" />
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.16),transparent_55%)]" />
            <Send className="relative h-4 w-4" />
            <span className="relative">Envoyer le message</span>
          </button>
        </form>
      </div>
    </ContentPage>
  );
}
