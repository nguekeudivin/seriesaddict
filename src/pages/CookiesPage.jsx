import ContentPage from "../components/ContentPage";

const cookieTypes = [
  {
    title: "Cookies essentiels",
    description:
      "Ces cookies sont nécessaires au fonctionnement du site. Ils permettent la navigation, l’authentification et la sécurité de votre session. Ils ne peuvent pas être désactivés.",
  },
  {
    title: "Cookies de performance",
    description:
      "Ils nous aident à comprendre comment les visiteurs interagissent avec la plateforme en collectant des informations anonymes. Ces données nous permettent d’améliorer l’expérience utilisateur.",
  },
  {
    title: "Cookies de personnalisation",
    description:
      "Ces cookies mémorisent vos préférences et votre historique de navigation pour vous proposer des recommandations de séries adaptées à vos goûts.",
  },
  {
    title: "Cookies publicitaires",
    description:
      "Ils sont utilisés pour limiter la fréquence d’affichage des publicités et mesurer l’efficacité des campagnes. Series Addict ne vend pas vos données personnelles à des annonceurs.",
  },
];

export default function CookiesPage() {
  return (
    <ContentPage
      title="Politique de cookies"
      subtitle="Transparence sur les cookies utilisés par Series Addict et comment les gérer."
      badge="Cookies"
    >
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">Qu’est-ce qu’un cookie ?</h2>
        <p className="text-sm leading-7 text-white/65">
          Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d’un site
          web. Il permet de mémoriser des informations relatives à votre navigation et de faciliter
          votre expérience utilisateur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-5 text-lg font-bold text-white">Les catégories de cookies utilisés</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {cookieTypes.map((type) => (
            <div
              key={type.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="mb-2 font-semibold text-white">{type.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">Gestion des préférences</h2>
        <p className="text-sm leading-7 text-white/65">
          Lors de votre première visite, un bandeau vous permet d’accepter ou de refuser les cookies
          non essentiels. Vous pouvez modifier vos choix à tout moment en cliquant sur le lien
          “Gestion des cookies” en bas de page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">Durée de conservation</h2>
        <p className="text-sm leading-7 text-white/65">
          Les cookies sont conservés pour une durée maximale de treize (13) mois à compter de leur
          dépôt sur votre terminal, conformément à la réglementation en vigueur.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-white">Contact</h2>
        <p className="text-sm leading-7 text-white/65">
          Pour toute question concernant notre politique de cookies, écrivez-nous à{" "}
          <a href="mailto:privacy@seriesaddict.fr" className="text-brand-cyan hover:underline">
            privacy@seriesaddict.fr
          </a>
          .
        </p>
      </section>
    </ContentPage>
  );
}
