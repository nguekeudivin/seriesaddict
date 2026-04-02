import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    title: "Responsable du traitement",
    paragraphs: [
      "Les données personnelles collectées via le site Carte USA sont traitées par ZL Location, société SAS au capital de 1 000 euros, immatriculée sous le numéro 851 994 830 et domiciliée au 10 rue de la Paix, 75002 Paris.",
      "Le responsable du traitement est Zaid Lawani. Pour toute question relative à vos données, vous pouvez écrire à contact@carteusa.com.",
    ],
  },
  {
    title: "Données collectées",
    paragraphs: [
      "Nous pouvons collecter les informations que vous transmettez via nos formulaires, notamment votre nom, votre adresse e-mail, votre numéro de téléphone et les éléments utiles à la compréhension de votre demande.",
      "Nous pouvons également collecter certaines données techniques liées à votre navigation, comme l’adresse IP, le type de navigateur, la durée de visite ou les pages consultées.",
    ],
  },
  {
    title: "Finalités du traitement",
    items: [
      "Répondre à vos demandes d’information ou de contact.",
      "Vous transmettre des informations sur nos services, contenus ou programmes.",
      "Améliorer l’expérience utilisateur et le fonctionnement du site.",
      "Respecter nos obligations légales et réglementaires.",
    ],
  },
  {
    title: "Base légale",
    paragraphs: [
      "Le traitement de vos données repose, selon les cas, sur votre consentement, sur l’exécution de mesures précontractuelles ou contractuelles, ainsi que sur le respect de nos obligations légales.",
    ],
  },
  {
    title: "Durée de conservation",
    paragraphs: [
      "Sauf obligation légale contraire, vos données personnelles sont conservées pendant une durée maximale de trois ans à compter du dernier contact émanant de votre part.",
    ],
  },
  {
    title: "Partage des données",
    paragraphs: [
      "Vos données peuvent être transmises à des prestataires techniques strictement nécessaires à l’exploitation du site et à la fourniture de nos services, comme l’hébergement, le CRM, l’emailing ou la mesure publicitaire.",
      "Aucune cession à des tiers à des fins commerciales n’est réalisée. Aucun transfert hors de l’Union européenne n’est effectué sans garanties appropriées.",
    ],
  },
  {
    title: "Sécurité",
    paragraphs: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de protéger vos données contre tout accès non autorisé, perte, destruction ou altération.",
    ],
  },
  {
    title: "Vos droits",
    items: [
      "Droit d’accès et de rectification.",
      "Droit à l’effacement.",
      "Droit à la limitation du traitement.",
      "Droit d’opposition.",
      "Droit à la portabilité des données.",
    ],
    paragraphs: [
      "Pour exercer vos droits, vous pouvez écrire à contact@carteusa.com. Une réponse vous sera apportée dans un délai maximal de 30 jours.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Le site utilise des cookies nécessaires à son fonctionnement ainsi que, selon les cas, des cookies analytiques et publicitaires destinés à mesurer l’audience et les performances de nos campagnes.",
      "Vous pouvez modifier vos préférences à tout moment via le dispositif de consentement affiché lors de votre visite.",
    ],
  },
  {
    title: "Modifications",
    paragraphs: [
      "Cette politique peut être mise à jour afin de refléter les évolutions légales, réglementaires ou techniques. Toute version mise à jour remplace la précédente dès sa publication sur cette page.",
    ],
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      intro="Cette politique explique quelles données nous collectons, pourquoi nous les utilisons et quels droits vous pouvez exercer à tout moment."
      lastUpdated="12 novembre 2025"
      meta={[
        { label: "Responsable", value: "Zaid Lawani" },
        { label: "Contact", value: "contact@carteusa.com" },
        { label: "Adresse", value: "10 rue de la Paix, 75002 Paris" },
      ]}
      notice="Les données collectées via les formulaires du site sont utilisées uniquement pour le traitement de vos demandes, l’amélioration du service et le respect de nos obligations légales."
      sections={sections}
    />
  );
}
