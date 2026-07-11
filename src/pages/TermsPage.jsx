import ContentPage from "../components/ContentPage";

const sections = [
  {
    title: "1. Présentation",
    content:
      "Les présentes Conditions Générales d’Utilisation (CGU) régissent l’accès et l’utilisation du site Series Addict et de ses services associés. En vous inscrivant ou en naviguant sur la plateforme, vous acceptez sans réserve les présentes conditions.",
  },
  {
    title: "2. Inscription et compte utilisateur",
    content:
      "Pour accéder à certaines fonctionnalités, vous devez créer un compte. Vous êtes responsable de la confidentialité de vos identifiants et de l’utilisation de votre compte. Toute activité réalisée depuis votre compte est réputée effectuée sous votre responsabilité.",
  },
  {
    title: "3. Contenu publié par les utilisateurs",
    content:
      "Les membres peuvent publier des commentaires, critiques, listes et notes. Vous vous engagez à ne pas diffuser de contenu illicite, diffamatoire, injurieux, discriminatoire ou portant atteinte aux droits de tiers. Series Addict se réserve le droit de modérer ou supprimer tout contenu inapproprié.",
  },
  {
    title: "4. Propriété intellectuelle",
    content:
      "Les contenus éditoriaux, logos, charte graphique et logiciels de Series Addict sont protégés par le droit de la propriété intellectuelle. Les utilisateurs conservent les droits sur leurs propres publications tout en accordant à Series Addict une licence d’exploitation nécessaire à la diffusion sur la plateforme.",
  },
  {
    title: "5. Responsabilité",
    content:
      "Series Addict met en œuvre les moyens nécessaires pour assurer la disponibilité et la sécurité du service. Nous ne saurions être tenus responsables des interruptions temporaires, des pertes de données ou de l’utilisation qui serait faite des informations mises à disposition sur la plateforme.",
  },
  {
    title: "6. Modification des conditions",
    content:
      "Les présentes CGU peuvent être modifiées à tout moment pour tenir compte de l’évolution du service et de la réglementation. Les utilisateurs seront informés des modifications substantielles et sont invités à consulter régulièrement cette page.",
  },
  {
    title: "7. Droit applicable",
    content:
      "Les présentes CGU sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable avant de saisir les juridictions compétentes.",
  },
];

export default function TermsPage() {
  return (
    <ContentPage
      title="Conditions générales d’utilisation"
      subtitle="Dernière mise à jour : 10 juillet 2026"
      badge="CGU"
    >
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-bold text-white">{section.title}</h2>
            <p className="text-sm leading-7 text-white/65">{section.content}</p>
          </section>
        ))}
      </div>

      <p className="mt-10 text-xs text-white/40">
        Pour toute question relative aux CGU, contactez-nous à{" "}
        <a href="mailto:legal@seriesaddict.fr" className="text-brand-cyan hover:underline">
          legal@seriesaddict.fr
        </a>
        .
      </p>
    </ContentPage>
  );
}
