import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "Le site Carte USA est édité par ZL Location, société SAS au capital de 1 000 euros, immatriculée sous le numéro 851 994 830, dont le siège social est situé au 10 rue de la Paix, 75002 Paris.",
      "Directeur de la publication : Zaid Lawani. Contact : contact@carteusa.com. Téléphone : (+33) 01 84 80 72 88.",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: [
      "Le site est hébergé par Skool, Inc., 548 Market Street, Suite 45852, San Francisco, CA 94104, États-Unis.",
      "Téléphone de l’hébergeur : +1 (415) 670-9396.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L’ensemble des éléments présents sur le site, notamment les textes, visuels, vidéos, graphismes, logos et documents, est protégé par le droit de la propriété intellectuelle.",
      "Toute reproduction, diffusion ou modification sans autorisation écrite préalable est interdite.",
    ],
  },
  {
    title: "Données personnelles",
    paragraphs: [
      "Les informations recueillies via les formulaires du site font l’objet d’un traitement destiné à la gestion des demandes et au suivi commercial.",
      "Conformément au RGPD et à la réglementation applicable, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à contact@carteusa.com.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "Les informations diffusées sur le site sont fournies à titre informatif et éducatif. Elles ne constituent ni un conseil financier, ni un conseil juridique, ni un conseil fiscal.",
      "Carte USA ne peut être tenue responsable des décisions prises sur la base des contenus publiés sur le site.",
    ],
  },
  {
    title: "Avertissement légal",
    paragraphs: [
      "Les exemples de montants de financement ou de résultats présentés sur le site sont donnés à titre illustratif.",
      "Ils dépendent de nombreux facteurs, notamment le profil, les conditions bancaires et la qualité du dossier. Ils ne constituent jamais une garantie de résultat.",
    ],
  },
];

export default function MentionsLegales() {
  return (
    <LegalPageLayout
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Cette page rassemble les informations d’identification de l’éditeur, de l’hébergeur et les principales mentions juridiques applicables au site Carte USA."
      lastUpdated="12 novembre 2025"
      meta={[
        { label: "Société", value: "ZL Location" },
        { label: "Publication", value: "Zaid Lawani" },
        { label: "Hébergeur", value: "Skool, Inc." },
      ]}
      notice="Les informations et exemples diffusés sur le site ont une finalité pédagogique. Ils ne valent pas conseil personnalisé ni promesse de résultat."
      sections={sections}
    />
  );
}
