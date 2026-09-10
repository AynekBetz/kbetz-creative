const brandPackages = [
  {
    name: "BRAND STARTER",
    price: "$149",
    description: "A polished starting identity for a new or growing business.",
    features: [
      "Custom Logo Concept",
      "Brand Color Palette",
      "Font Pairing",
      "Social Profile Graphic",
      "Brand Style Snapshot",
    ],
  },
  {
    name: "SOCIAL MEDIA KIT",
    price: "$199",
    description: "Give your business a consistent, professional social presence.",
    features: [
      "Profile + Cover Graphics",
      "5 Branded Post Designs",
      "Story Templates",
      "Brand Color System",
      "Social Visual Direction",
    ],
  },
  {
    name: "BUSINESS LAUNCH KIT",
    price: "$349",
    description: "A stronger visual foundation for businesses ready to launch.",
    features: [
      "Logo + Brand Identity",
      "Color + Font System",
      "Business Card Design",
      "Social Media Kit",
      "Launch Graphics",
    ],
    featured: true,
  },
  {
    name: "CUSTOM BRAND EXPERIENCE",
    price: "Custom",
    description: "A tailored creative package built around your business.",
    features: [
      "Custom Creative Direction",
      "Expanded Brand Identity",
      "Marketing Graphics",
      "Digital Brand Assets",
      "Custom Project Scope",
    ],
  },
];

export default function BrandShop() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050511] text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050511]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="block">
            <div className="text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                KBETZ
              </span>{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                CREATIVE SOLUTIONS
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-purple-300">
              Solutions · by Luxevra
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2 text-sm font-bold text-cyan-100 transition hover:border-fuchsia-300/50"
          >
            ← Back Home
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-fuchsia-600/25 blur-[130px]" />
          <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
          <div className="absolute left-[15%] top-[30%] h-[300px] w-[75%] -rotate-12 rounded-[100%] border-t-2 border-fuchsia-400/40 shadow-[0_-18px_80px_rgba(217,70,239,0.30)]" />
          <div className="absolute right-[10%] top-[45%] h-[300px] w-[70%] rotate-12 rounded-[100%] border-t-2 border-cyan-300/40 shadow-[0_-18px_80px_rgba(34,211,238,0.30)]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-sm font-black uppercase tracking-[0.3em] text-fuchsia-300">
              KBETZ Creative Brand Shop
            </div>

            <h1 className="mt-6 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-7xl">
              Build a brand people remember.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100/70">
              Professional branding packages created to help your business look
              polished, consistent and ready to be seen.
            </p>

            <div className="mx-auto mt-8 h-1 w-40 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400" />
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {brandPackages.map((item) => (
              <article
                key={item.name}
                className={`relative flex flex-col rounded-[2rem] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${
                  item.featured
                    ? "border-cyan-300/65 bg-gradient-to-b from-cyan-500/15 via-purple-600/15 to-[#090918]/95 shadow-[0_0_40px_rgba(34,211,238,0.22),0_0_35px_rgba(217,70,239,0.18)]"
                    : "border-purple-400/35 bg-gradient-to-br from-purple-950/35 via-[#080817]/95 to-cyan-950/20 shadow-[0_0_25px_rgba(168,85,247,0.12)]"
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-4 py-1 text-[10px] font-black tracking-wider text-white">
                    BEST VALUE
                  </div>
                )}

                <div className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-sm font-black tracking-[0.18em] text-transparent">
                  {item.name}
                </div>

                <div className="mt-5 bg-gradient-to-r from-fuchsia-300 via-purple-200 to-cyan-300 bg-clip-text text-4xl font-black text-transparent">
                  {item.price}
                </div>

                {item.price !== "Custom" && (
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-300/75">
                    Starting at
                  </div>
                )}

                <p className="mt-6 min-h-20 text-sm leading-6 text-purple-100/65">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-sm text-purple-100/80"
                    >
                      <span className="mr-2 font-black text-cyan-300">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="/#contact"
                  className="mt-8 block rounded-full border border-cyan-300/35 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-cyan-400/20 px-5 py-3 text-center text-sm font-black text-cyan-100 transition hover:border-fuchsia-300/60 hover:shadow-[0_0_22px_rgba(217,70,239,0.18)]"
                >
                  Start My Brand →
                </a>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-4xl rounded-[2rem] border border-purple-400/35 bg-gradient-to-r from-purple-950/40 via-[#090918]/95 to-cyan-950/30 p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.15)] sm:p-12">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
              Need Something Different?
            </div>

            <h2 className="mt-4 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
              Your business doesn't have to fit inside a package.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-purple-100/65">
              Tell us what you're building and we'll create a custom creative
              direction around your goals.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 px-7 py-3 text-sm font-black text-white shadow-[0_0_30px_rgba(217,70,239,0.20)] transition hover:scale-[1.02]"
            >
              Request a Custom Project →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-400/20 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 KBETZ Creative Solutions · by Luxevra
      </footer>
    </main>
  );
}
