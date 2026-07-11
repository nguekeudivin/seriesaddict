import { useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import ContentPage from "../components/ContentPage";

const faqs = [
  {
    question: "Comment créer un compte Series Addict ?",
    answer:
      "Cliquez sur “S’inscrire” en haut de page, renseignez votre email et choisissez un mot de passe. Vous recevrez un email de confirmation pour activer votre compte.",
  },
  {
    question: "Puis-je suivre mes séries préférées ?",
    answer:
      "Oui. Depuis la fiche d’une série, ajoutez-la à votre séritèque, marquez les épisodes vus et créez des listes personnalisées.",
  },
  {
    question: "Comment noter ou commenter une série ?",
    answer:
      "Rendez-vous sur la page de la série, puis dans l’onglet “Avis”. Vous pouvez attribuer une note, rédiger une critique et répondre aux autres membres.",
  },
  {
    question: "Qu’est-ce que le calendrier des sorties ?",
    answer:
      "Le calendrier recense les dates de diffusion des épisodes et saisons. Vous pouvez filtrer par semaine et ajouter des rappels.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Utilisez la page Contact ou envoyez un email à support@seriesaddict.fr. Nous répondons généralement sous 48 heures ouvrées.",
  },
  {
    question: "Mon compte est-il gratuit ?",
    answer:
      "L’inscription et l’accès à la majorité des fonctionnalités sont entièrement gratuits. Certaines options premium pourront être proposées ultérieurement.",
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300",
        open ? "border-white/20 bg-white/[0.05]" : "hover:border-white/15",
      ].join(" ")}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-white">{item.question}</span>
        <ChevronDown
          className={[
            "h-5 w-5 shrink-0 text-brand-cyan transition-transform duration-300",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-7 text-white/65">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HelpPage() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ContentPage
      title="Centre d’aide"
      subtitle="Trouvez rapidement des réponses à vos questions sur Series Addict."
      badge="Aide"
    >
      {/* Recherche */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une question..."
          className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-12 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/30"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <HelpCircle className="mx-auto h-10 w-10 text-white/30" />
          <p className="mt-4 text-sm text-white/60">
            Aucune question ne correspond à votre recherche.
          </p>
          <a
            href="/contact"
            className="mt-3 inline-block text-sm font-semibold text-brand-cyan hover:underline"
          >
            Contactez-nous directement
          </a>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item, index) => {
            const realIndex = faqs.indexOf(item);
            return (
              <FaqItem
                key={item.question}
                item={item}
                open={openIndex === realIndex}
                onToggle={() =>
                  setOpenIndex(openIndex === realIndex ? -1 : realIndex)
                }
              />
            );
          })}
        </div>
      )}

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
        <h3 className="font-semibold text-white">Vous ne trouvez pas votre réponse ?</h3>
        <p className="mt-2 text-sm text-white/60">
          Notre équipe est disponible pour vous accompagner.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          Nous contacter
        </a>
      </div>
    </ContentPage>
  );
}
