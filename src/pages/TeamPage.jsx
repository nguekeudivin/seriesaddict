import { Linkedin, Twitter } from "lucide-react";
import ContentPage from "../components/ContentPage";

const team = [
  {
    name: "Alexandre Martin",
    role: "Fondateur & Rédacteur en chef",
    bio: "Passionné de séries depuis toujours, Alexandre a créé Series Addict pour partager sa passion avec une communauté exigeante.",
    initials: "AM",
  },
  {
    name: "Sophie Leroy",
    role: "Responsable éditorial",
    bio: "Experte en analyse de séries, Sophie supervise les contenus et les critiques pour garantir qualité et indépendance.",
    initials: "SL",
  },
  {
    name: "Julien Bernard",
    role: "Lead développeur",
    bio: "Julien conçoit les outils et l’expérience utilisateur qui permettent à la communauté de découvrir et suivre ses séries.",
    initials: "JB",
  },
  {
    name: "Camille Dupont",
    role: "Community manager",
    bio: "Camille anime les discussions et veille à ce que chaque membre se sente chez lui au sein de la communauté Series Addict.",
    initials: "CD",
  },
  {
    name: "Thomas Petit",
    role: "Responsable partenariats",
    bio: "Thomas développe les collaborations avec les studios et plateformes pour enrichir l’offre de contenus exclusifs.",
    initials: "TP",
  },
  {
    name: "Emma Rousseau",
    role: "Cheffe de projet marketing",
    bio: "Emma coordonne les campagnes et les événements qui font vivre la marque Series Addict au quotidien.",
    initials: "ER",
  },
];

export default function TeamPage() {
  return (
    <ContentPage
      title="Notre équipe"
      subtitle="Découvrez les passionnés qui font vivre Series Addict chaque jour."
      badge="Équipe"
      maxWidth="max-w-6xl"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article
            key={member.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-cyan text-lg font-bold text-white">
                {member.initials}
              </div>
              <div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-xs font-medium text-brand-cyan">{member.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">{member.bio}</p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-brand-cyan/40 hover:text-brand-cyan"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-brand-cyan/40 hover:text-brand-cyan"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-brand-primary/10 to-brand-cyan/10 p-6 text-center">
        <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
          Rejoignez l’aventure
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">
          Vous souhaitez contribuer à Series Addict ? Envoyez-nous votre candidature à{" "}
          <a href="mailto:jobs@seriesaddict.fr" className="text-brand-cyan hover:underline">
            jobs@seriesaddict.fr
          </a>
          .
        </p>
      </div>
    </ContentPage>
  );
}
