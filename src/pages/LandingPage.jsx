export default function USFinancialAccessLandingPage() {
  const steps = [
    {
      number: "01",
      title: "Establish your tax identity",
      text: "Understand whether an ITIN applies to your case, what documents are required, and how to avoid the mistakes that delay the process.",
    },
    {
      number: "02",
      title: "Set up your U.S. financial base",
      text: "Choose the right structure for your situation, prepare compliant documentation, and identify realistic bank account paths.",
    },
    {
      number: "03",
      title: "Build your first credit footprint",
      text: "Learn how to start credibly, use the right products first, and avoid moves that weaken future approvals.",
    },
    {
      number: "04",
      title: "Prepare for funding access",
      text: "Move from setup to credibility with a sequence designed for long-term access, not short-term hype.",
    },
  ];

  const outcomes = [
    "A clear roadmap from ITIN to first credit access",
    "Document and eligibility guidance for each stage",
    "Banking and setup options explained realistically",
    "Common mistakes that cause delays or rejections",
    "A structured path built for non-residents",
  ];

  const audience = [
    "Founders building international businesses",
    "Freelancers and consultants serving U.S. clients",
    "Operators who want U.S. financial infrastructure",
    "Non-residents who prefer clarity over false promises",
  ];

  const offers = [
    {
      name: "Starter",
      price: "$49",
      subtitle: "Self-paced foundation",
      features: [
        "Full roadmap",
        "Step-by-step breakdown",
        "Required documents overview",
        "Key mistakes to avoid",
      ],
      cta: "Start with Starter",
      featured: false,
    },
    {
      name: "Guided Setup",
      price: "$199",
      subtitle: "Structured support",
      features: [
        "Everything in Starter",
        "Document review guidance",
        "Personalized path recommendations",
        "Decision support at each stage",
      ],
      cta: "Choose Guided Setup",
      featured: true,
    },
    {
      name: "Premium Support",
      price: "$699",
      subtitle: "Hands-on strategic help",
      features: [
        "1-on-1 support",
        "Full execution roadmap",
        "Progress tracking",
        "Priority strategy sessions",
      ],
      cta: "Apply for Premium",
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "Do you issue loans or credit cards?",
      a: "No. This service does not issue loans, credit cards, or funding. It helps non-residents understand and navigate the process correctly.",
    },
    {
      q: "Do you guarantee ITIN approval or bank approval?",
      a: "No. Final decisions belong to the relevant authorities and financial institutions. The value here is structure, preparation, and better decision-making.",
    },
    {
      q: "Is this only for business owners?",
      a: "No. It is also relevant for freelancers, consultants, and professionals who need access to U.S. financial infrastructure.",
    },
    {
      q: "How fast can someone get funding?",
      a: "There is no honest fixed timeline. Real access depends on profile strength, documentation, sequence, and responsible execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              UF
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                US Financial Access
              </p>
              <p className="text-xs text-slate-500">For non-residents</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 lg:flex">
            <a href="#process" className="transition hover:text-slate-950">
              Process
            </a>
            <a href="#who-its-for" className="transition hover:text-slate-950">
              Who it’s for
            </a>
            <a href="#offers" className="transition hover:text-slate-950">
              Offers
            </a>
            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
          </nav>

          <a
            href="#offers"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Get access
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.05),transparent_30%),linear-gradient(to_bottom,white,transparent_70%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Structured guidance. No false promises.
              </div>

              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                Access the U.S. financial system with a clear, credible path.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A step-by-step framework for non-residents who want to move from
                ITIN and banking setup to credit readiness and long-term funding
                access.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#offers"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Start with the roadmap
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-semibold tracking-tight">
                    4-step
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Structured process from identity to credit readiness
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight">
                    Trust-first
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Built around clarity, compliance, and realistic outcomes
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight">
                    Non-resident
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Designed for international founders and operators
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                <div className="flex items-start justify-between gap-6 border-b border-slate-100 pb-6">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      The framework
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      From entry to credibility
                    </h2>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Step-by-step
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 rounded-2xl bg-slate-50 p-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                  This is not a loan product, a bank, or a guarantee service. It
                  is a strategic guidance offer for people who want to enter the
                  system correctly.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-12 border-y border-slate-200 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Why this matters
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Most people do not fail because of lack of ambition. They fail
                because they start in the wrong order.
              </h2>
            </div>
            <div className="grid gap-6 text-base leading-8 text-slate-600 sm:grid-cols-2">
              <p>
                The market is full of promises about instant funding, stacked
                credit, and fast approvals. What gets ignored is the foundation
                required to make any of that viable.
              </p>
              <p>
                This page is built around a more durable approach: establish
                your presence, strengthen your profile, and move forward in a
                sequence that institutions can trust.
              </p>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A professional sequence designed for long-term access.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                Each stage exists to improve the next one. The result is not
                speed for its own sake, but a stronger profile and fewer costly
                mistakes.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-t border-slate-200 pt-8 md:grid-cols-[120px_1fr]"
                >
                  <div className="text-sm font-medium text-slate-400">
                    Step {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-semibold tracking-tight">
                        {step.title}
                      </div>
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                Included
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                What you actually receive.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
                The offer is structured to reduce confusion, improve
                preparation, and help serious clients move with more confidence.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-t border-white/10 py-5"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="who-its-for"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        >
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Who it’s for
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for serious non-residents who want a structured route into
                the U.S. financial ecosystem.
              </h2>
            </div>

            <div className="space-y-6">
              {audience.map((item) => (
                <div key={item} className="border-b border-slate-200 pb-6">
                  <p className="text-lg leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offers" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Offers
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Choose the level of support that matches your stage.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Start with the roadmap, then move into guided help only if you
              need deeper support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className={`rounded-[28px] border p-8 ${
                  offer.featured
                    ? "border-slate-950 bg-slate-950 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {offer.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm ${offer.featured ? "text-slate-300" : "text-slate-500"}`}
                    >
                      {offer.subtitle}
                    </p>
                  </div>
                  {offer.featured && (
                    <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium">
                      Recommended
                    </div>
                  )}
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight">
                    {offer.price}
                  </span>
                </div>

                <div className="mt-8 space-y-4 border-t border-black/10 pt-8 text-sm leading-7">
                  {offer.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <div
                        className={`mt-2 h-2 w-2 rounded-full ${offer.featured ? "bg-white" : "bg-slate-950"}`}
                      />
                      <span
                        className={
                          offer.featured ? "text-slate-200" : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                    offer.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {offer.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[36px] border border-slate-200 bg-white px-8 py-12 shadow-[0_20px_80px_rgba(15,23,42,0.05)] lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Transparency
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  This is guidance, not a shortcut.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  No guaranteed approvals. No fake urgency. No promise of
                  instant funding. The goal is to help you move in the right
                  order, with better preparation and stronger judgment.
                </p>
              </div>
              <a
                href="#offers"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Choose your starting point
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Common questions, answered clearly.
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {faqs.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight text-slate-950">
                    {item.q}
                    <span className="text-slate-400 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              US Financial Access
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Structured guidance for non-residents entering the U.S. financial
              system.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#process" className="transition hover:text-slate-950">
              Process
            </a>
            <a href="#offers" className="transition hover:text-slate-950">
              Offers
            </a>
            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
