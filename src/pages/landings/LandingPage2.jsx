export default function SovereignFiscalLandingPage() {
  const steps = [
    {
      title: "Fondation ITIN",
      description:
        "Établissez votre identité numérique basée aux États-Unis pour un traitement des transactions sans frontières.",
      icon: "◎",
    },
    {
      title: "Banque de Tier 1",
      description:
        "Activez des lignes de crédit à plafond élevé et des comptes de gestion privée auprès de prêteurs premium.",
      icon: "▣",
    },
    {
      title: "Data Seeding",
      description:
        "Programmez la perception algorithmique de votre profil financier pour commander les taux les plus bas.",
      icon: "◫",
    },
    {
      title: "Capital de Croissance",
      description:
        "Tirez parti de votre souveraineté structurelle pour obtenir des liquidités destinées à l'acquisition d'actifs.",
      icon: "↗",
    },
  ];

  const successStories = [
    {
      quote: "“DE REFUSÉ À 75 000 $ DE CRÉDIT EN 90 JOURS.”",
      name: "ALEJANDRO M.",
      role: "FONDATEUR E-COM",
    },
    {
      quote: "“AMEX PLATINUM OBTENUE SANS SSN EN 4 MOIS.”",
      name: "SARAH K.",
      role: "ARCHITECTE SAAS",
    },
    {
      quote: "“PASSÉ À 250 000 $ DE FINANCEMENT VIA UNE LLC.”",
      name: "DMITRI V.",
      role: "GROWTH MARKETER",
    },
    {
      quote: "“LIBERTÉ FINANCIÈRE TOTALE DEPUIS L'EXTÉRIEUR DES USA.”",
      name: "JEAN-PAUL B.",
      role: "INVESTISSEUR IMMO",
    },
    {
      quote: "“120 000 $ DÉBLOQUÉS EN LIGNES BUSINESS HAUTE LIMITE.”",
      name: "MARCO L.",
      role: "PROPRIÉTAIRE D'AGENCE",
    },
    {
      quote: "“LE SYSTÈME FONCTIONNE EXACTEMENT COMME PRÉVU.”",
      name: "SOFIA R.",
      role: "CONSULTANTE GLOBALE",
    },
    {
      quote: "“D'AUCUNE PRÉSENCE AUX USA À UN SCORE PARFAIT DE 750.”",
      name: "ERIK H.",
      role: "DÉV LOGICIEL",
    },
    {
      quote: "“LE CHEMIN FINANCIER LE PLUS ROBUSTE QUE J'AI VU.”",
      name: "CARLOS P.",
      role: "CEO LOGISTIQUE",
    },
  ];

  const faqs = [
    {
      q: "EST-CE UNE BANQUE ?",
      a: "Non, nous sommes un cabinet de conseil stratégique. Nous vous aidons à naviguer correctement les exigences des institutions financières américaines.",
    },
    {
      q: "COMBIEN DE TEMPS PREND LE PROCESSUS ITIN ?",
      a: "Généralement de 6 à 12 semaines, selon les délais de traitement de l'IRS.",
    },
    {
      q: "PUIS-JE LE FAIRE SANS LLC ?",
      a: "Oui, un ITIN vous permet d'ouvrir des comptes personnels, bien qu'une LLC offre des avantages commerciaux supplémentaires par la suite.",
    },
    {
      q: "GARANTISSEZ-VOUS L'OBTENTION D'UNE CARTE DE CRÉDIT ?",
      a: "Nous garantissons le processus et la documentation. L'approbation reste à la discrétion de la banque, mais suivre notre architecture maximise vos chances.",
    },
    {
      q: "DE QUELS DOCUMENTS AURAI-JE BESOIN ?",
      a: "Principalement un passeport valide et une preuve d'adresse étrangère. Nous fournissons une liste complète pour chaque niveau.",
    },
  ];

  const timeline = [
    {
      stage: "Étape 01",
      label: "Intégrité Structurelle",
      title: "Architecture Légale Complète",
      description:
        "Formation complète de nœuds LLC, obtention de l'ITIN et configuration d'une identité numérique sécurisée pour une confidentialité et une optimisation fiscale maximales.",
    },
    {
      stage: "Étape 02",
      label: "Effet de Levier",
      title: "Le Masterplan du Crédit",
      description:
        "Stratégies personnalisées de 'data seeding' conçues pour débloquer plus de 100 000 $ de crédit professionnel dans les 90 jours suivant l'activation.",
    },
    {
      stage: "Étape 03",
      label: "Bouclier Générationnel",
      title: "Continuité Offshore",
      description:
        "Établissement de tampons bancaires internationaux et de feuilles de route de résidence pour une liberté géopolitique ultime.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef0f3] text-[#0e1830]">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f5f6f8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#"
            className="text-2xl font-black tracking-tight text-[#0a1428]"
          >
            SOVEREIGN FISCAL
          </a>

          <nav className="hidden items-center gap-10 text-[17px] font-medium text-slate-600 md:flex">
            <a href="#roadmap" className="transition hover:text-[#0a1428]">
              La Feuille de Route
            </a>
            <a href="#pricing" className="transition hover:text-[#0a1428]">
              Tarifs
            </a>
            <a href="#faq" className="transition hover:text-[#0a1428]">
              FAQ
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-sm bg-[#08132a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_rgba(8,19,42,0.18)] transition hover:brightness-110"
          >
            Accéder maintenant
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(26,196,145,0.16),transparent_24%),linear-gradient(90deg,#111a2d_0%,#031236_50%,#071226_100%)]">
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center lg:px-8 lg:py-32">
            <div className="mx-auto mb-10 inline-flex items-center rounded-sm border border-emerald-500/40 bg-emerald-400/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Architecture Financière Stratégique
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-black uppercase italic leading-[0.92] tracking-[-0.05em] text-white md:text-7xl lg:text-[8rem]">
              Architecturez Votre
              <span className="mt-3 block text-[#18c98d]">Souveraineté US</span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              Le protocole exact pour les non-résidents souhaitant intégrer le
              système financier américain.
              <span className="font-semibold text-white">
                {" "}
                ITIN. Banque. Crédit. Financement.
              </span>{" "}
              Pas de raccourcis. Juste le système.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex min-w-[280px] items-center justify-center rounded-sm bg-[#20c48d] px-10 py-6 text-lg font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:brightness-110"
              >
                Sécurisez votre accès
              </a>
            </div>
          </div>
        </section>

        <section id="protocol" className="px-6 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-none border-2 border-[#0d1629] bg-[#f5f6f8] shadow-[20px_20px_0_rgba(15,23,42,0.05)] lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-red-600">
                Section 01 // L'Avertissement
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase italic leading-none tracking-[-0.04em] text-[#0a1430] md:text-6xl">
                Les "Hacks"
                <br />
                du Marché
              </h2>

              <div className="mt-12 space-y-10">
                {[
                  {
                    title: "“Financement Immédiat 100k”",
                    text: "Services prédateurs qui sur-promettent, mettant souvent votre profil à risque d'une liste noire permanente.",
                  },
                  {
                    title: "“Glitches à 0% d'Intérêt”",
                    text: "Failles temporaires que les banques ferment en quelques mois, menant à des pièges de dettes à taux élevés.",
                  },
                  {
                    title: "“Crédit Clé-en-Main”",
                    text: "Si vous ne possédez pas le processus, vous n'avez pas de fondation. La plupart utilisent des données frauduleuses.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center border-2 border-red-600 text-2xl text-red-600">
                      ×
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold uppercase tracking-[-0.03em] text-[#111b34]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-xl leading-relaxed text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[linear-gradient(90deg,#04143f_0%,#06102d_50%,#0a2131_100%)] p-10 text-white lg:p-16">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#18c98d]">
                Section 02 // Le Protocole
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase italic leading-none tracking-[-0.04em] md:text-6xl">
                La Vérité
                <br />
                Souveraine
              </h2>

              <div className="mt-12 space-y-10">
                {[
                  {
                    title: "Alignement Institutionnel",
                    text: "Nous vous apprenons à refléter le profil exact que les banques américaines Tier-1 sont programmées à approuver.",
                  },
                  {
                    title: "Seeding Mathématique",
                    text: "Une séquence précise de rapports de données aux trois grands bureaux de crédit pour instaurer une confiance durable.",
                  },
                  {
                    title: "Souveraineté Long Terme",
                    text: "Bâtissez une présence financière vous permettant d'opérer mondialement avec la force de la monnaie de réserve mondiale.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center bg-[#20c48d] text-2xl text-white">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold uppercase tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-xl leading-relaxed text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(90deg,#04143f_0%,#06102d_50%,#0a2131_100%)] px-6 py-20 text-center text-white lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Une Nouvelle Vision du Capital
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-slate-400">
              Regardez le briefing de 12 minutes sur l'architecture de la
              souveraineté moderne et comment contourner les gardiens
              traditionnels.
            </p>

            <div className="mx-auto mt-14 flex aspect-video max-w-4xl items-center justify-center rounded-[22px] bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(24,201,141,0.06))] shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-sm">
              <div className="flex h-28 w-28 items-center justify-center rounded-[26px] bg-[#20c48d] text-5xl shadow-[0_0_40px_rgba(32,196,141,0.35)]">
                ▶
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5f7] px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(180deg,#031237,#03112b)] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
              <div className="mx-auto aspect-[4/5] max-w-md rounded-md bg-[radial-gradient(circle_at_top,rgba(255,217,119,0.25),transparent_24%),linear-gradient(180deg,#031038,#02112e_52%,#071221_100%)] p-6 text-white">
                <div className="mx-auto mt-2 max-w-[240px] rounded-md border border-[#c1a563]/60 bg-[#c8b06d] px-5 py-4 text-center text-[#1a1a1a] shadow-lg">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em]">
                    American Express
                  </div>
                  <div className="mt-3 text-5xl">◉</div>
                </div>
                <div className="mt-8 text-[#7ef0c7]">● Bonne Nouvelle !</div>
                <div className="mt-3 text-6xl font-black tracking-[-0.05em]">
                  $75,000.00
                </div>
                <div className="mt-6 h-px bg-white/10" />
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  Nous avons approuvé votre demande de dépense de 75 000,00 $
                  sur les achats généraux avec la carte se terminant par -71001.
                </p>
                <div className="absolute bottom-8 left-8 inline-flex bg-[#20c48d] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  Protocole Vérifié
                </div>
              </div>
            </div>

            <div>
              <h2 className="max-w-2xl text-4xl font-black uppercase italic leading-[0.94] tracking-[-0.05em] text-black md:text-6xl">
                Pensez-vous
                <br />
                qu’obtenir un crédit
                <br />
                aux États-Unis en tant
                <br />
                que non-résident est
                <span className="block text-[#19b884]">impossible ?</span>
              </h2>

              <div className="mt-8 space-y-6 text-xl leading-relaxed text-slate-600">
                <p>
                  Le système financier veut vous le faire croire. Voyez-vous…
                </p>
                <p>
                  Alors que d&apos;autres chefs d&apos;entreprise non américains
                  se heurtent à des impasses avec des refus de type « résidence
                  requise », notre équipe a aidé plus de{" "}
                  <span className="font-semibold text-slate-800">
                    500 entrepreneurs internationaux
                  </span>{" "}
                  à débloquer plus de{" "}
                  <span className="font-semibold text-slate-800">
                    4,3 millions de dollars
                  </span>{" "}
                  sans s’installer en Amérique.
                </p>
                <p className="font-semibold italic text-slate-800">
                  Nous ne sommes pas des consultants financiers typiques…
                </p>
                <p>
                  Nous sommes l’équipe qui possède une expérience éprouvée, des
                  connexions bancaires établies et des systèmes certifiés pour
                  intégrer légalement le système financier américain.
                </p>
                <p className="font-semibold italic text-slate-800">
                  Pendant que vos concurrents restent à l’écart…
                </p>
                <p>Nous avons transformé l’« impossible » en inévitable.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="bg-[#eef0f3] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-black md:text-6xl">
              La Séquence d'Autorité
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Une exécution linéaire précise pour une intégrité structurelle
              maximale.
            </p>

            <div className="relative mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              <div className="absolute left-0 right-0 top-11 hidden h-px bg-slate-200 xl:block" />
              {steps.map((step) => (
                <div key={step.title} className="relative px-4">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl text-[#1cbc87] shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xs text-lg leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="bg-black px-6 py-24 text-white lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="text-sm uppercase tracking-[0.35em] text-[#1dc38e]">
                L'Investissement
              </div>
              <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Votre Chemin vers l'Autonomie Souveraine
              </h2>
            </div>

            <div className="relative mx-auto mt-20 max-w-4xl">
              <div className="absolute left-1/2 top-2 hidden h-[82%] w-px -translate-x-1/2 bg-white/10 md:block" />
              <div className="space-y-14">
                {timeline.map((item, index) => (
                  <div
                    key={item.stage}
                    className={`grid items-center gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div
                      className={`text-center ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                    >
                      <div className="mx-auto mb-4 h-4 w-4 rounded-full bg-[#1dc38e] shadow-[0_0_22px_rgba(29,195,142,0.5)] md:mx-0 md:inline-block" />
                      <div className="text-4xl font-bold text-[#1dc38e]">
                        {item.stage}
                      </div>
                      <div className="mt-1 text-lg text-slate-400">
                        {item.label}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/5 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(255,255,255,0.03)] backdrop-blur-sm">
                      <h3 className="text-3xl font-bold tracking-[-0.04em]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="cta"
              className="mx-auto mt-24 max-w-3xl rounded-[28px] border border-white/5 bg-white/[0.04] px-8 py-12 text-center shadow-[0_30px_100px_rgba(255,255,255,0.04)]"
            >
              <h3 className="text-4xl font-black uppercase italic leading-none tracking-[-0.04em] md:text-6xl">
                Commencez Votre Voyage Vers la
                <span className="block text-[#1dc38e]">
                  Souveraineté Absolue
                </span>
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-lg italic text-slate-400">
                Investissement unique pour une souveraineté structurelle à vie.
                Places limitées.
              </p>
              <a
                href="#"
                className="mt-10 inline-flex min-w-[340px] max-w-full items-center justify-center rounded-sm bg-[#20c48d] px-10 py-6 text-xl font-semibold text-white shadow-[0_0_40px_rgba(32,196,141,0.28)] transition hover:brightness-110"
              >
                Sécurisez Votre Siège
              </a>
              <p className="mt-6 text-sm text-slate-500">
                Paiement sécurisé via Stripe. Inclut un audit stratégique
                1-sur-1.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f5f7] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Records Établis
              </div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#1ac98d]">
                Protocoles Éprouvés
              </div>
              <h2 className="mt-4 text-5xl font-black uppercase italic leading-none tracking-[-0.05em] text-[#09142c] md:text-7xl">
                Briefings de
                <br />
                Réussite
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {successStories.map((story) => (
                <article
                  key={story.quote}
                  className="group flex min-h-[460px] flex-col justify-between rounded-lg bg-[radial-gradient(circle_at_top,rgba(26,201,141,0.08),transparent_18%),linear-gradient(180deg,#04143f_0%,#031027_100%)] p-6 text-white shadow-[0_22px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1"
                >
                  <div className="flex justify-center pt-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#20c48d] text-2xl shadow-[0_0_32px_rgba(32,196,141,0.25)]">
                      ▶
                    </div>
                  </div>
                  <div>
                    <p className="text-[2rem] font-black uppercase italic leading-[1.05] tracking-[-0.05em]">
                      {story.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full border border-[#1bc58e]/40 bg-white/5" />
                      <div>
                        <div className="font-semibold uppercase tracking-[0.18em]">
                          {story.name}
                        </div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1ac98d]">
                          {story.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f0f2f4] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1ac98d]">
              Base de Connaissances
            </div>
            <h2 className="mt-5 text-5xl font-black uppercase italic tracking-[-0.05em] text-[#08132a] md:text-6xl">
              Questions Fréquentes
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white px-8 py-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-2xl font-black uppercase tracking-[-0.04em] text-[#10192f] marker:hidden">
                  <span>{item.q}</span>
                  <span className="text-4xl font-light text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f5f6f8] px-6 py-28 text-center lg:px-8">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden text-[24vw] font-black uppercase tracking-[-0.05em] text-black/[0.03]">
            SOUVERAIN
          </div>
          <div className="relative mx-auto max-w-5xl">
            <h2 className="text-5xl font-black uppercase italic leading-none tracking-[-0.05em] text-[#0a1428] md:text-7xl">
              Structurez ou Échouez.
              <span className="block text-[#19ba87]">À vous de choisir.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-2xl italic leading-relaxed text-slate-500">
              La plupart des gens échouent parce qu'ils tentent de brûler les
              étapes. Ne faites pas comme eux. Construisez votre fondation
              correctement.
            </p>
            <a
              href="#"
              className="mt-12 inline-flex items-center justify-center rounded-sm bg-[#08132a] px-16 py-6 text-xl font-semibold uppercase tracking-[0.2em] text-white shadow-[0_25px_45px_rgba(8,19,42,0.16)] transition hover:brightness-110"
            >
              Démarrer maintenant
            </a>
            <div className="mt-10 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500 ring-2 ring-[#f5f6f8]" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-100 to-teal-500 ring-2 ring-[#f5f6f8]" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-100 to-amber-600 ring-2 ring-[#f5f6f8]" />
              </div>
              <span>+1 400 Architectes Souverains nous ont rejoints</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0f1e] px-6 py-16 text-center text-slate-500 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#20c48d]">
            <a href="#">Termes et conditions</a>
            <span className="text-white/15">|</span>
            <a href="#">Politique de confidentialité</a>
            <span className="text-white/15">|</span>
            <a href="#">Mentions légales</a>
          </div>

          <div className="mt-8 text-sm uppercase tracking-[0.25em] text-slate-400">
            ZAID LAWANI - Copyright © 2026
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-sm leading-relaxed text-slate-600">
            <p>
              ⚠️ Les montants de financement et les résultats mentionnés sont
              des exemples basés sur des cas réels. Les résultats peuvent varier
              selon le profil, la situation financière et les conditions de
              marché.
            </p>
            <p>
              Sovereign Fiscal n&apos;est pas une banque et ne propose aucun
              prêt. Ce site ne fait pas partie du site web de Facebook ou de
              Facebook Inc. De plus, ce site n&apos;est en aucun cas approuvé
              par Facebook. Facebook est une marque commerciale de Facebook,
              Inc.
            </p>
            <p>
              Sovereign Fiscal n&apos;est pas responsable de vos actions. Vous
              êtes seul responsable de vos propres actions et décisions et
              l&apos;évaluation et l&apos;utilisation de nos produits et
              services doivent être basées sur votre propre diligence
              raisonnable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
