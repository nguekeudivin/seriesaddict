export default function LandingPageReplica() {
  const logos = ["ITIN", "BANKING", "CREDIT", "ACCESS", "SYSTEM", "GROWTH"];

  const featuresTop = [
    {
      title: "Step-by-Step Process",
      text: "Follow a structured path from ITIN to funding access.",
    },
    {
      title: "Realistic Timeline",
      text: "Understand what takes time and what accelerates results.",
    },
    {
      title: "No False Promises",
      text: "No hacks, no guarantees — only what actually works.",
    },
    {
      title: "Clarity First",
      text: "Know exactly what to do at each stage of the journey.",
    },
  ];

  const steps = [
    {
      n: "1",
      title: "Build Your Identity",
      text: "Understand ITIN eligibility and prepare the right documents to enter the U.S. system.",
    },
    {
      n: "2",
      title: "Set Up Financial Presence",
      text: "Open a U.S. bank account and position yourself correctly with realistic options.",
    },
    {
      n: "3",
      title: "Access Your First Credit",
      text: "Start building trust and unlock your first credit line step by step.",
    },
  ];

  const benefits = [
    "Living outside the U.S.",
    "Starting an online business",
    "Building international income",
    "Looking for U.S. financial access",
    "No existing U.S. credit history",
    "Want a structured system, not hacks",
  ];

  const sellingPoints = [
    [
      "Clear Financial Roadmap",
      "Understand each step from ITIN to credit without confusion.",
    ],
    [
      "Build From Zero",
      "Start even without U.S. residency or prior credit history.",
    ],
    [
      "Avoid Costly Mistakes",
      "Know what to avoid before wasting time or money.",
    ],
    ["Realistic Expectations", "Learn how long each stage actually takes."],
    [
      "Strategic Positioning",
      "Understand what banks and institutions are looking for.",
    ],
    [
      "Structured Growth",
      "Move from setup to credit access with a logical progression.",
    ],
  ];

  const faqs = [
    "Can I access the U.S. system from outside the country?",
    "Do I need an LLC to get started?",
    "How long does the process take?",
    "Can I get funding immediately?",
    "What documents do I need?",
    "Is this guaranteed to work?",
  ];

  const testimonials = [
    {
      text: "I had no idea where to start. This gave me a clear path and helped me understand every step. Now I finally feel in control of the process.",
      name: "David K.",
    },
    {
      text: "Most programs promise funding. This one showed me how the system actually works. Completely different approach.",
      name: "Sarah M.",
    },
    {
      text: "Instead of chasing shortcuts, I finally built something real. The structure made all the difference.",
      name: "James T.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f7fa] text-[#1c2a39]">
      <style>{`
        .container { max-width: 1100px; margin: 0 auto; }
        .section { padding: 54px 24px; }
        .shadow-soft { box-shadow: 0 10px 30px rgba(17,34,68,.08); }
        .outline-soft { border: 1px solid #dde5ec; }
        .muted { color: #5e6b78; }
      `}</style>

      <div className="bg-[#23455f] text-white text-[11px]">
        <div className="container flex items-center justify-between px-6 py-2">
          <div>Access the U.S. Financial System Step by Step</div>
          <div>Call: +1 XXX XXX XXXX</div>
        </div>
      </div>

      <header className="bg-white border-b border-[#dde5ec]">
        <div className="container flex items-center justify-between px-6 py-5">
          <div className="text-[28px] font-extrabold tracking-[-0.02em] text-[#293647]">
            Carte<span className="font-semibold text-[#5a6470]">USA</span>
          </div>
          <button className="rounded-sm bg-[#f0ad3c] px-5 py-2.5 text-[12px] font-semibold text-[#1e2b37] shadow-sm">
            Get Access
          </button>
        </div>
      </header>

      <section className="bg-white">
        <div className="container grid gap-10 px-6 py-10 md:grid-cols-[1.05fr_.95fr] md:items-center">
          <div className="max-w-[470px] pl-0 md:pl-12">
            <h1 className="mb-4 text-[58px] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#182736]">
              Access the U.S.
              <br />
              Financial System.
            </h1>
            <p className="mb-7 max-w-[420px] text-[16px] leading-7 text-[#62707e]">
              Even as a non-resident, you can build your foundation step by
              step. From ITIN to bank account, credit, and funding access — no
              shortcuts, no false promises, just a clear path.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-sm bg-[#eda93a] px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-[#1f2a34] shadow-sm">
                Get Access Now
              </button>
              <button className="rounded-sm bg-[#eda93a] px-5 py-4 text-[13px] font-semibold text-[#1f2a34] shadow-sm">
                ☎ +1 XXX XXX XXXX
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[6px] bg-[#f7f2eb] shadow-soft outline-soft">
              <div className="grid h-[330px] grid-cols-[1.08fr_.92fr]">
                <div className="relative bg-[linear-gradient(135deg,#d2cabd_0%,#f4ecdf_48%,#e3d7c7_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_28%,rgba(255,255,255,.7),transparent_20%),radial-gradient(circle_at_40%_75%,rgba(0,0,0,.08),transparent_28%)]" />
                  <div className="absolute left-[20%] top-[14%] h-44 w-24 rounded-full bg-[rgba(192,121,90,.25)] blur-2xl" />
                  <div className="absolute left-[16%] bottom-[12%] h-28 w-36 rounded-full bg-[rgba(94,125,87,.22)] blur-2xl" />
                  <div className="absolute inset-x-8 bottom-0 h-20 rounded-t-[40px] bg-[rgba(255,255,255,.28)]" />
                  <div className="absolute left-[22%] top-[17%] h-40 w-12 rounded-full bg-[rgba(157,98,72,.55)]" />
                  <div className="absolute left-[28%] top-[12%] h-24 w-10 rounded-t-full bg-[rgba(31,67,97,.75)]" />
                  <div className="absolute left-[38%] top-[23%] h-34 w-14 rounded-[40px] bg-[rgba(208,114,75,.55)]" />
                  <div className="absolute left-[43%] top-[14%] h-22 w-11 rounded-t-full bg-[rgba(41,55,77,.85)]" />
                  <div className="absolute left-[56%] top-[19%] h-36 w-14 rounded-[40px] bg-[rgba(214,150,104,.55)]" />
                  <div className="absolute left-[60%] top-[10%] h-24 w-10 rounded-t-full bg-[rgba(196,93,72,.8)]" />
                  <div className="absolute bottom-6 left-8 rounded bg-white/85 px-3 py-1 text-[12px] font-semibold text-[#3f4a57]">
                    Clear Path • No Hype
                  </div>
                </div>
                <div className="relative bg-[linear-gradient(180deg,#e8ecef_0%,#eff3f6_45%,#d8e1ea_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_14%,rgba(255,255,255,.9),transparent_18%),radial-gradient(circle_at_10%_20%,rgba(255,255,255,.35),transparent_28%)]" />
                  <div className="absolute bottom-0 left-0 right-0 h-[68%] bg-[linear-gradient(180deg,#eef3f7,#dce4eb)]" />
                  <div className="absolute right-4 top-12 h-56 w-48 rounded-sm bg-[linear-gradient(180deg,#fbfcfd,#dfe7ef)] outline-soft" />
                  <div className="absolute right-10 top-16 h-12 w-24 bg-white/95 outline outline-1 outline-[#d7dfe7]" />
                  <div className="absolute right-10 top-28 h-28 w-28 bg-[#dce3ea]" />
                  <div className="absolute right-14 top-32 h-20 w-20 bg-[#f7fafc]" />
                  <div className="absolute bottom-3 right-0 h-48 w-36 rotate-[-7deg] rounded-full bg-[rgba(111,167,98,.35)] blur-xl" />
                  <div className="absolute bottom-20 right-4 h-28 w-8 rotate-12 rounded-full bg-[rgba(88,128,60,.5)]" />
                  <div className="absolute bottom-12 right-16 h-24 w-7 rotate-[-18deg] rounded-full bg-[rgba(125,160,82,.45)]" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl ring-8 ring-white/20">
                  <div className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-[#ef4d58]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e2e9ef] bg-[#f7fbfe]">
          <div className="container grid gap-8 px-6 py-6 md:grid-cols-4">
            {featuresTop.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-1 h-7 w-7 rounded-full border border-[#cfd8e0] bg-white text-center text-[12px] leading-7 text-[#607080]">
                  ✓
                </div>
                <div>
                  <div className="text-[16px] font-bold text-[#253243]">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-5 text-[#687584]">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container px-6">
          <h2 className="mx-auto mb-10 max-w-[620px] text-[44px] font-extrabold leading-tight tracking-[-0.03em] text-[#1c2938]">
            Enter the U.S. System in 4
            <br />
            Simple Steps
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-[6px] border border-[#e0e7ee] bg-white px-7 py-8 shadow-[0_8px_20px_rgba(30,50,70,0.04)]"
              >
                <div className="mb-3 text-[44px] font-extrabold leading-none text-[#efad3d]">
                  {step.n}
                </div>
                <div className="mb-3 text-[19px] font-bold leading-6 text-[#273547]">
                  {step.title}
                </div>
                <div className="text-[14px] leading-6 text-[#677584]">
                  {step.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button className="rounded-sm bg-[#eda93a] px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-[#1f2a34] shadow-sm">
              Get Access Now
            </button>
            <button className="rounded-sm bg-[#eda93a] px-5 py-4 text-[13px] font-semibold text-[#1f2a34] shadow-sm">
              ☎ +1 XXX XXX XXXX
            </button>
          </div>
        </div>
      </section>

      <section className="section bg-[#f4f8fb]">
        <div className="container grid gap-10 px-6 md:grid-cols-[1fr_.95fr] md:items-center">
          <div className="pl-0 md:pl-12">
            <h2 className="mb-3 text-[46px] font-extrabold leading-tight tracking-[-0.03em] text-[#1f2b39]">
              Who This Is For
            </h2>
            <div className="mb-2 text-[22px] font-bold text-[#243142]">
              We Help Non-Residents Build a Real U.S. Financial Foundation
            </div>
            <p className="mb-5 text-[15px] text-[#6a7785]">
              Whether you're trying to...
            </p>
            <ul className="space-y-3 text-[16px] text-[#394857]">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#efad3d] text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#677585]">
              We've got you covered. No matter your starting point, we guide you
              through each step so you can enter the system correctly and build
              long-term access.
            </p>
            <div className="mt-5 text-[17px] font-bold text-[#223142]">
              ☎ Start your process or access the roadmap
            </div>
            <div className="mt-7 flex gap-3">
              <button className="rounded-sm bg-[#eda93a] px-6 py-4 text-[13px] font-bold text-[#1f2a34] shadow-sm">
                Get Access →
              </button>
              <button className="rounded-sm bg-[#eda93a] px-5 py-4 text-[13px] font-semibold text-[#1f2a34] shadow-sm">
                ☎ +1 XXX XXX XXXX
              </button>
            </div>
          </div>

          <div>
            <div className="mx-auto h-[340px] max-w-[470px] overflow-hidden rounded-[8px] bg-[linear-gradient(135deg,#d8d0c8,#efe8df_45%,#d8c9bf)] shadow-soft outline-soft">
              <div className="relative h-full w-full bg-[radial-gradient(circle_at_72%_15%,rgba(255,255,255,.4),transparent_20%),radial-gradient(circle_at_20%_70%,rgba(0,0,0,.08),transparent_28%)]">
                <div className="absolute right-8 top-10 h-52 w-36 rounded-[6px] bg-[rgba(195,174,153,.35)]" />
                <div className="absolute left-10 bottom-4 h-44 w-24 rounded-t-[70px] bg-[rgba(171,111,80,.55)]" />
                <div className="absolute left-16 top-16 h-24 w-16 rounded-t-full bg-[rgba(168,115,83,.52)]" />
                <div className="absolute left-16 top-10 h-16 w-14 rounded-full bg-[rgba(162,118,89,.42)]" />
                <div className="absolute left-24 top-20 h-24 w-16 rounded-[40px] bg-[rgba(63,78,106,.85)]" />
                <div className="absolute left-36 bottom-2 h-52 w-28 rounded-t-[80px] bg-[rgba(214,179,150,.6)]" />
                <div className="absolute left-44 top-18 h-16 w-16 rounded-full bg-[rgba(191,146,115,.48)]" />
                <div className="absolute left-48 top-24 h-28 w-18 rounded-[40px] bg-[rgba(95,125,87,.72)]" />
                <div className="absolute right-10 bottom-0 h-64 w-40 rounded-t-[90px] bg-[rgba(53,81,111,.88)]" />
                <div className="absolute right-20 top-14 h-20 w-20 rounded-full bg-[rgba(202,160,128,.5)]" />
                <div className="absolute right-20 top-28 h-40 w-24 rounded-[50px] bg-[rgba(233,236,240,.88)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container grid grid-cols-2 gap-y-5 px-8 text-center text-[18px] font-semibold tracking-[0.14em] text-[#b4b8bf] md:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo}>{logo}</div>
          ))}
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container px-6">
          <h2 className="mx-auto mb-3 max-w-[760px] text-[50px] font-extrabold leading-tight tracking-[-0.03em] text-[#1e2a38]">
            We Make Entry Simple, Clear,
            <br />
            and Structured
          </h2>
          <p className="mx-auto mb-12 max-w-[680px] text-[16px] text-[#6a7785]">
            Built for non-residents who want real access — not shortcuts.
          </p>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {sellingPoints.map(([title, text]) => (
              <div key={title} className="px-4">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2d4c67] text-white shadow-md">
                  •
                </div>
                <div className="mb-2 text-[22px] font-bold leading-7 text-[#243243]">
                  {title}
                </div>
                <div className="text-[15px] leading-7 text-[#687584]">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-9">
        <div className="container grid gap-10 px-6 md:grid-cols-[1.8fr_1fr_1fr] md:items-end">
          <div className="pl-0 md:pl-8">
            <div className="max-w-[420px] text-[40px] font-extrabold leading-tight tracking-[-0.03em] text-[#203040]">
              A Structured Path Used By People Worldwide
            </div>
          </div>
          <div className="text-center">
            <div className="text-[64px] font-extrabold leading-none text-[#1d2a38]">
              ITIN
            </div>
            <div className="mt-2 text-[15px] text-[#6a7785]">
              Identity Setup
            </div>
          </div>
          <div className="text-center">
            <div className="text-[64px] font-extrabold leading-none text-[#1d2a38]">
              CREDIT
            </div>
            <div className="mt-2 text-[15px] text-[#6a7785]">Access Growth</div>
          </div>
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container px-6">
          <h2 className="mb-3 text-[50px] font-extrabold leading-tight tracking-[-0.03em] text-[#1f2c3b]">
            Ready to Start Your
            <br />
            Financial Setup?
          </h2>
          <p className="mx-auto mb-8 max-w-[760px] text-[15px] leading-7 text-[#6c7987]">
            Fill out the form below to get access to the roadmap and start
            building your U.S. financial presence step by step. No confusion, no
            false expectations — just clarity.
          </p>
          <div className="mx-auto max-w-[700px] space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                className="h-12 rounded-[3px] border border-[#cfd8e0] px-4 text-[14px] outline-none"
                placeholder="Name"
              />
              <input
                className="h-12 rounded-[3px] border border-[#cfd8e0] px-4 text-[14px] outline-none"
                placeholder="Email"
              />
            </div>
            <input
              className="h-12 w-full rounded-[3px] border border-[#cfd8e0] px-4 text-[14px] outline-none"
              placeholder="Phone"
            />
            <input
              className="h-12 w-full rounded-[3px] border border-[#cfd8e0] px-4 text-[14px] outline-none"
              placeholder="Country"
            />
            <textarea
              className="h-28 w-full rounded-[3px] border border-[#cfd8e0] px-4 py-3 text-[14px] outline-none"
              placeholder="Tell us where you are in the process"
            />
            <button className="h-12 w-full rounded-[3px] bg-[#eda93a] text-[15px] font-semibold text-[#1f2a34] shadow-sm">
              Get Access Now
            </button>
          </div>
        </div>
      </section>

      <section className="section bg-[#f4f8fb] text-center">
        <div className="container px-6">
          <h2 className="mb-10 text-[48px] font-extrabold tracking-[-0.03em] text-[#1f2b39]">
            What our customers say
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[6px] bg-white p-7 text-left shadow-[0_10px_24px_rgba(30,50,70,0.05)] outline-soft"
              >
                <div className="mb-4 text-[#efad3d]">★★★★★</div>
                <p className="text-[14px] leading-7 text-[#6a7785]">
                  “{item.text}”
                </p>
                <div className="mt-5 text-[14px] font-bold text-[#243142]">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-[14px] text-[#7a8793]">
            Rated 4.9 / 5 based on user feedback. Showing recent experiences.
          </div>
          <div className="mt-4 text-[26px] font-bold text-[#12a150]">
            ★ Trusted Process
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 px-6 md:grid-cols-[1fr_.95fr] md:items-center">
          <div className="pl-0 md:pl-12">
            <h2 className="mb-8 text-[50px] font-extrabold leading-tight tracking-[-0.03em] text-[#1e2a38]">
              Frequently Asked
              <br />
              Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((item, index) => (
                <div key={item} className="border-b border-[#e6edf3] pb-4">
                  <div className="flex items-center justify-between gap-4 text-[20px] font-bold text-[#223142]">
                    <span>{item}</span>
                    <span className="text-[#435363]">
                      {index === 0 ? "–" : "+"}
                    </span>
                  </div>
                  {index === 0 && (
                    <p className="mt-3 max-w-[520px] text-[15px] leading-7 text-[#697685]">
                      You can start from outside the U.S., but it requires
                      following the correct steps. The process takes time, and
                      results depend on your profile and consistency.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mx-auto h-[350px] max-w-[470px] overflow-hidden rounded-[8px] bg-[linear-gradient(135deg,#f1e1d4,#fbf6f2_45%,#e2d0c2)] shadow-soft outline-soft">
              <div className="relative h-full w-full bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,.6),transparent_18%),radial-gradient(circle_at_18%_78%,rgba(0,0,0,.08),transparent_25%)]">
                <div className="absolute left-14 top-16 h-16 w-40 rotate-[12deg] rounded-[18px] bg-[rgba(120,156,196,.85)]" />
                <div className="absolute left-32 top-22 h-16 w-40 rotate-[-10deg] rounded-[18px] bg-[rgba(227,213,193,.95)]" />
                <div className="absolute left-28 top-28 h-7 w-20 rounded-full bg-[rgba(191,141,110,.55)]" />
                <div className="absolute left-10 bottom-10 h-24 w-24 rounded-sm bg-white shadow-md outline-soft" />
                <div className="absolute left-20 bottom-26 h-12 w-4 bg-[#de4b43]" />
                <div className="absolute left-7 bottom-32 h-0 w-0 border-l-[40px] border-r-[40px] border-b-[34px] border-l-transparent border-r-transparent border-b-[#b7cadc]" />
                <div className="absolute left-16 bottom-20 h-14 w-12 bg-[#e8eef4]" />
                <div className="absolute right-14 bottom-12 h-28 w-28 rounded-sm bg-white shadow-md outline-soft" />
                <div className="absolute right-24 bottom-32 h-0 w-0 border-l-[52px] border-r-[52px] border-b-[44px] border-l-transparent border-r-transparent border-b-[#c1d0dd]" />
                <div className="absolute right-24 bottom-18 h-16 w-16 bg-[#e8eef4]" />
                <div className="absolute right-24 bottom-18 h-16 w-16 border-x border-[#cfd8e0]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4f8] py-16 text-center">
        <div className="container px-6">
          <h2 className="mb-5 text-[54px] font-extrabold leading-tight tracking-[-0.03em] text-[#1f2c3a]">
            Ready to Build Your U.S.
            <br />
            Financial Foundation?
          </h2>
          <p className="mx-auto mb-8 max-w-[860px] text-[16px] leading-7 text-[#687584]">
            Stop chasing shortcuts. Start building the system correctly and
            position yourself for long-term access to U.S. financial tools.
          </p>
          <div className="flex justify-center gap-3">
            <button className="rounded-sm bg-[#eda93a] px-6 py-4 text-[13px] font-bold text-[#1f2a34] shadow-sm">
              Get Access →
            </button>
            <button className="rounded-sm bg-[#eda93a] px-5 py-4 text-[13px] font-semibold text-[#1f2a34] shadow-sm">
              ☎ +1 XXX XXX XXXX
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-[#17364f] py-5 text-center text-[12px] text-white">
          © CarteUSA. All Rights Reserved.
        </div>
        <div className="bg-[#0f2335] py-4 text-center text-[14px] text-white">
          Start with the roadmap. Build correctly.
        </div>
      </footer>
    </div>
  );
}
