import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    title: "Présentation du site",
    paragraphs: [
      "Le site Carte USA est édité par ZL Location, société SAS au capital de 1 000 euros, immatriculée sous le numéro 851 994 830, dont le siège social est situé au 10 rue de la Paix, 75002 Paris.",
      "Pour toute question relative au site ou à ses services, vous pouvez nous contacter à l’adresse contact@carteusa.com ou par téléphone au (+33) 01 84 80 72 88.",
    ],
  },
  {
    title: "Objet",
    paragraphs: [
      "Les présentes conditions définissent les modalités d’accès, d’utilisation et, le cas échéant, d’achat des services proposés sur le site.",
      "Elles s’appliquent notamment aux contenus informatifs, aux formations et aux accompagnements liés au financement de projets via les cartes de crédit américaines.",
    ],
  },
  {
    title: "Accès au site",
    paragraphs: [
      "L’accès au site est libre pour toute personne disposant d’une connexion internet.",
      "Les frais liés au matériel, aux logiciels ou à la connexion restent à la charge de l’utilisateur. Carte USA peut suspendre, interrompre ou modifier tout ou partie du site sans préavis.",
    ],
  },
  {
    title: "Services proposés",
    paragraphs: [
      "Carte USA propose des contenus éducatifs, des ressources gratuites, des offres promotionnelles ainsi que des programmes de formation et d’accompagnement individuels ou collectifs.",
      "Ces services sont fournis à titre informatif et éducatif. Carte USA n’est ni une banque ni un organisme de crédit.",
    ],
  },
  {
    title: "Commandes et paiements",
    paragraphs: [
      "Certaines offres peuvent être payantes. Les prix sont indiqués en euros ou en dollars, toutes taxes comprises, sauf mention contraire.",
      "Le paiement est exigible au moment de la commande. Les transactions sont sécurisées via nos prestataires de paiement et aucune donnée bancaire n’est stockée sur le site.",
    ],
  },
  {
    title: "Droit de rétractation",
    paragraphs: [
      "Conformément à l’article L221-28 du Code de la consommation, les prestations de services numériques, telles que les formations en ligne ou les accompagnements personnalisés, ne donnent pas lieu à un droit de rétractation dès lors que l’accès au contenu a commencé avec l’accord du client.",
      "Toute demande de remboursement éventuelle peut néanmoins être examinée au cas par cas à titre commercial.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "Les informations diffusées sur le site ont un but informatif et éducatif. Elles ne constituent pas un conseil financier, fiscal ou juridique.",
      "Les exemples de résultats ou de montants cités sur le site restent illustratifs et ne garantissent aucun résultat individuel. L’utilisateur demeure seul responsable de ses décisions et de l’usage des informations partagées.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "Tous les contenus présents sur le site, notamment les textes, images, vidéos, logos, graphiques, documents et supports de formation, sont protégés par le droit de la propriété intellectuelle.",
      "Toute reproduction, diffusion ou exploitation sans autorisation écrite préalable est interdite.",
    ],
  },
  {
    title: "Données personnelles et cookies",
    paragraphs: [
      "La collecte et le traitement des données personnelles sont régis par notre politique de confidentialité.",
      "Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur et de mesurer les performances. Les préférences peuvent être gérées via le bandeau prévu à cet effet.",
    ],
  },
  {
    title: "Liens externes et droit applicable",
    paragraphs: [
      "Le site peut contenir des liens vers des services tiers. Carte USA n’assume aucune responsabilité concernant le contenu ou les pratiques de ces sites externes.",
      "Les présentes conditions sont régies par le droit français. En cas de litige, les juridictions compétentes seront celles du ressort du siège social de l’entreprise, sauf disposition légale contraire.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <LegalPageLayout
      eyebrow="Conditions d’utilisation"
      title="Termes et conditions"
      intro="Cette page précise le cadre d’utilisation du site Carte USA ainsi que les règles applicables à nos contenus, à nos services et à toute commande éventuelle."
      lastUpdated="12 novembre 2025"
      meta={[
        { label: "Éditeur", value: "ZL Location" },
        { label: "Contact", value: "contact@carteusa.com" },
        { label: "Téléphone", value: "(+33) 01 84 80 72 88" },
      ]}
      notice="Carte USA propose un accompagnement éducatif et stratégique. Aucune page du site ne constitue une offre de prêt ni une promesse d’approbation."
      sections={sections}
    />
  );
}
