import ContentPage from "../components/ContentPage";

const rights = [
  {
    title: "Droit d’accès",
    description:
      "Vous pouvez obtenir la confirmation que des données vous concernant sont traitées, ainsi qu’une copie de ces données.",
  },
  {
    title: "Droit de rectification",
    description:
      "Vous pouvez demander la correction des données inexactes ou incomplètes vous concernant.",
  },
  {
    title: "Droit à l’effacement",
    description:
      "Vous pouvez demander la suppression de vos données dans les limites prévues par la loi.",
  },
  {
    title: "Droit d’opposition",
    description:
      "Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.",
  },
];

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Données personnelles"
      subtitle="Comment Series Addict collecte, utilise et protège vos données personnelles."
      badge="Confidentialité"
    >
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">1. Responsable du traitement</h2>
        <p className="text-sm leading-7 text-white/65">
          Le responsable du traitement de vos données personnelles est la société Series Addict,
          dont le siège social est situé au 12 rue de la Fiction, 75010 Paris, France. Pour toute
          question relative à la protection des données, contactez notre délégué à la protection des
          données à{" "}
          <a href="mailto:dpo@seriesaddict.fr" className="text-brand-cyan hover:underline">
            dpo@seriesaddict.fr
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">2. Données collectées</h2>
        <p className="text-sm leading-7 text-white/65">
          Nous collectons les données que vous nous fournissez directement (nom, email, date de
          naissance, contenus publiés) ainsi que des données techniques (adresse IP, type de
          navigateur, pages visitées) nécessaires au bon fonctionnement et à l’amélioration de nos
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">3. Finalités du traitement</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/65">
          <li>Gérer votre compte et vos préférences utilisateur.</li>
          <li>Vous permettre de suivre vos séries, créer des listes et interagir avec la communauté.</li>
          <li>Personnaliser vos recommandations et les contenus affichés.</li>
          <li>Assurer la sécurité du site et prévenir les abus.</li>
          <li>Vous envoyer des communications relatives au service, si vous y consentez.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">4. Conservation des données</h2>
        <p className="text-sm leading-7 text-white/65">
          Vos données sont conservées pendant la durée nécessaire aux finalités poursuivies, et au
          maximum pendant trois ans après la suppression de votre compte, sauf obligation légale de
          conservation plus longue.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-5 text-lg font-bold text-white">5. Vos droits</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {rights.map((right) => (
            <div
              key={right.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="mb-2 font-semibold text-white">{right.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{right.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold text-white">6. Partage des données</h2>
        <p className="text-sm leading-7 text-white/65">
          Vos données ne sont pas vendues. Elles peuvent être partagées avec des prestataires
          techniques strictement nécessaires à l’hébergement et à la maintenance du service, dans le
          respect de la réglementation applicable.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-white">7. Contact</h2>
        <p className="text-sm leading-7 text-white/65">
          Pour exercer vos droits ou pour toute question relative à vos données personnelles,
          écrivez-nous à{" "}
          <a href="mailto:dpo@seriesaddict.fr" className="text-brand-cyan hover:underline">
            dpo@seriesaddict.fr
          </a>
          . Vous disposez également du droit d’introduire une réclamation auprès de la CNIL.
        </p>
      </section>
    </ContentPage>
  );
}
