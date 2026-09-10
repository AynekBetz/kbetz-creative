import InquiryForm from "./InquiryForm";
import HeroDemo from "./HeroDemo";

const concepts = [
  {
    icon: "💇🏾‍♀️",
    type: "BEAUTY & SALON",
    name: "Luxe Beauty Studio",
    description: "Elegant booking-focused design for salons, stylists & beauty professionals.",
    features: ["Online Booking", "Service Menu", "Gallery"],
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    icon: "🧹",
    type: "CLEANING SERVICES",
    name: "Fresh & Clean Co.",
    description: "Professional service website designed to turn local visitors into quote requests.",
    features: ["Instant Quotes", "Service Areas", "Booking"],
    accent: "from-cyan-400 to-blue-600",
  },
  {
    icon: "🍽️",
    type: "RESTAURANT",
    name: "The Social Kitchen",
    description: "A bold restaurant experience built around menus, reservations and online ordering.",
    features: ["Digital Menu", "Reservations", "Online Orders"],
    accent: "from-orange-400 to-rose-600",
  },
  {
    icon: "🌿",
    type: "LAWN & LANDSCAPING",
    name: "Green Edge Lawn Co.",
    description: "A clean local-service design that showcases transformations and generates estimates.",
    features: ["Free Estimates", "Before & After", "Services"],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    icon: "🏠",
    type: "HOME SERVICES",
    name: "Prime Home Solutions",
    description: "Professional contractor design for showcasing projects, reviews and quote requests.",
    features: ["Project Gallery", "Reviews", "Estimates"],
    accent: "from-amber-400 to-orange-600",
  },
  {
    icon: "🛍️",
    type: "BOUTIQUE & E-COMMERCE",
    name: "Maison Luxe",
    description: "Modern storefront concept for boutiques and product-based businesses.",
    features: ["Product Shop", "Secure Checkout", "Mobile Store"],
    accent: "from-violet-400 to-pink-600",
  },
];

const packages = [
  {
    name: "STARTER",
    price: "$299",
    description: "Perfect for getting your business online.",
    items: ["1–3 Pages", "Mobile Friendly", "Contact Form", "Social Links", "Basic SEO"],
  },
  {
    name: "BUSINESS",
    price: "$499",
    description: "Built for businesses ready to grow.",
    items: ["Up to 5 Pages", "Custom Layout", "Social Integration", "SEO Setup", "Lead Forms"],
    popular: true,
  },
  {
    name: "PREMIUM",
    price: "$799",
    description: "A more powerful digital presence.",
    items: ["Up to 10 Pages", "Custom Design", "Advanced SEO", "Booking Features", "Analytics"],
  },
  {
    name: "E-COMMERCE",
    price: "$1,199",
    description: "Start selling products online.",
    items: ["Online Store", "Payment Setup", "Product Pages", "Inventory Setup", "SEO"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050511] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050511]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
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
          </div>

          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="transition hover:text-cyan-300">
              Services
            </a>
            <a href="#work" className="transition hover:text-cyan-300">
              Our Work
            </a>
            <a href="#pricing" className="transition hover:text-cyan-300">
              Pricing
            </a>
            <a
              href="/shop"
              className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text font-bold text-transparent transition hover:opacity-80"
            >
              Brand Shop
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2.5 text-sm font-bold shadow-lg shadow-purple-600/20 transition hover:scale-105"
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        {/* Futuristic KBETZ light field */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-[12%] h-[420px] w-[70%] -rotate-12 rounded-[100%] border-t-2 border-fuchsia-400/40 bg-fuchsia-500/5 blur-[2px] shadow-[0_-20px_80px_rgba(217,70,239,0.25)]" />
          <div className="absolute -right-40 top-[22%] h-[360px] w-[75%] rotate-12 rounded-[100%] border-t-2 border-cyan-300/40 bg-cyan-400/5 blur-[2px] shadow-[0_-20px_90px_rgba(34,211,238,0.25)]" />

          <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-purple-600/20 blur-[110px]" />
          <div className="absolute right-[5%] top-[28%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute left-[42%] top-[8%] h-64 w-64 rounded-full bg-fuchsia-500/15 blur-[120px]" />

          <div className="absolute left-[-10%] top-[48%] h-px w-[120%] rotate-[-8deg] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent shadow-[0_0_30px_rgba(217,70,239,0.55)]" />
          <div className="absolute left-[-10%] top-[54%] h-px w-[120%] rotate-[7deg] bg-gradient-to-r from-transparent via-purple-400/45 to-transparent shadow-[0_0_35px_rgba(168,85,247,0.5)]" />
          <div className="absolute left-[-10%] top-[61%] h-px w-[120%] rotate-[-5deg] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent shadow-[0_0_35px_rgba(34,211,238,0.55)]" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050511] to-transparent" />
        </div>
        <div className="absolute left-[-10rem] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-[120px]" />
        <div className="absolute right-[-8rem] top-52 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Websites • Branding • Digital Solutions
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-cyan-200 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.22)]">
                YOUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                BUSINESS
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                DESERVES TO
              </span>
              <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(217,70,239,0.25)]">
                LOOK THIS
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                GOOD.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              Modern, mobile-friendly websites designed to give small businesses
              a professional digital presence that gets noticed.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-7 py-3.5 font-bold shadow-xl shadow-purple-800/30 transition hover:scale-105"
              >
                See What We Can Build
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-bold transition hover:bg-white/10"
              >
                View Packages
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
              <span>✓ Mobile Friendly</span>
              <span>✓ Professional Design</span>
              <span>✓ SEO Ready</span>
              <span>✓ Built for Your Brand</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            {/* Approved neon laptop aura */}
            <div className="absolute -inset-16 rounded-[4rem] bg-gradient-to-r from-fuchsia-600/35 via-blue-600/30 to-cyan-400/35 blur-[70px]" />
            <div className="absolute -left-8 -top-8 h-[70%] w-[70%] rounded-[3rem] bg-fuchsia-500/25 blur-[55px]" />
            <div className="absolute -bottom-8 -right-8 h-[70%] w-[70%] rounded-[3rem] bg-cyan-400/25 blur-[55px]" />
            <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-fuchsia-400 via-purple-500 to-cyan-300 opacity-90 blur-[2px]" />

            <div className="relative rounded-[2rem] border border-cyan-300/40 bg-[#080817]/90 p-5 shadow-[0_0_55px_rgba(34,211,238,0.22),0_0_70px_rgba(217,70,239,0.18)] backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#09091a] p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                      Your Brand
                    </div>
                    <div className="mt-1 bg-gradient-to-r from-fuchsia-300 via-purple-200 to-cyan-300 bg-clip-text text-2xl font-black text-transparent">
                      YOUR BUSINESS
                    </div>
                  </div>
                  <div className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300">
                    LIVE
                  </div>
                </div>

                <HeroDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative overflow-hidden border-y border-purple-400/20 bg-gradient-to-b from-[#050511] via-[#08051a] to-[#050511] py-24">
        {/* KBETZ neon atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[110px]" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute -left-[15%] top-[35%] h-[260px] w-[75%] -rotate-12 rounded-[100%] border-t-2 border-fuchsia-400/45 shadow-[0_-18px_70px_rgba(217,70,239,0.35)]" />
          <div className="absolute -right-[15%] top-[45%] h-[280px] w-[75%] rotate-12 rounded-[100%] border-t-2 border-cyan-300/45 shadow-[0_-18px_80px_rgba(34,211,238,0.35)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              What We Do
            </div>
            <h2 className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mt-3 text-4xl font-black sm:text-5xl">
              More than just a pretty website.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              We create digital experiences that make your business look
              established, professional and ready for customers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["💻", "Website Design", "Modern custom websites built around your business."],
              ["📱", "Mobile Experience", "Designed to look great on phones, tablets and desktops."],
              ["✨", "Brand & Content", "Digital graphics and visual branding that match your business."],
              ["⚙️", "Business Tools", "Booking, forms, e-commerce and integrations when you need them."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-950/25 via-black/70 to-cyan-950/20 p-7 shadow-lg shadow-purple-950/20 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-purple-500/20"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-5 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-xl font-black text-transparent">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept portfolio */}
      <section id="work" className="relative overflow-hidden bg-gradient-to-b from-[#050511] via-[#08051d] to-[#050511] py-24">
        {/* Sweeping Luxevra / KBETZ light waves */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-[5%] h-[520px] w-[75%] -rotate-12 rounded-[100%] border-t-[3px] border-fuchsia-400/55 shadow-[0_-25px_100px_rgba(217,70,239,0.45)]" />
          <div className="absolute -right-40 top-[18%] h-[500px] w-[75%] rotate-12 rounded-[100%] border-t-[3px] border-cyan-300/55 shadow-[0_-25px_110px_rgba(34,211,238,0.45)]" />

          <div className="absolute -left-52 bottom-[5%] h-[420px] w-[80%] rotate-12 rounded-[100%] border-t-2 border-purple-400/55 shadow-[0_-20px_90px_rgba(168,85,247,0.45)]" />
          <div className="absolute -right-52 bottom-[8%] h-[430px] w-[80%] -rotate-12 rounded-[100%] border-t-2 border-fuchsia-400/50 shadow-[0_-20px_90px_rgba(217,70,239,0.4)]" />

          <div className="absolute left-[-10%] top-[30%] h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
          <div className="absolute right-[-10%] top-[45%] h-[430px] w-[430px] rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute bottom-[5%] left-[30%] h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[140px]" />

          <div className="absolute left-[-10%] top-[58%] h-px w-[120%] -rotate-6 bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent shadow-[0_0_35px_rgba(217,70,239,0.65)]" />
          <div className="absolute left-[-10%] top-[63%] h-px w-[120%] rotate-6 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent shadow-[0_0_35px_rgba(34,211,238,0.65)]" />
        </div>
        <div className="pointer-events-none absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-8%] top-[45%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
              Imagine Your Business Online
            </div>
            <h2 className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mt-3 text-4xl font-black sm:text-5xl">
              One vision. Endless possibilities.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Explore concept designs created to show how different businesses
              can come to life online.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <article
                key={concept.type}
                className="group overflow-hidden rounded-3xl border border-purple-400/35 bg-gradient-to-br from-[#100820]/95 via-[#070716]/95 to-[#06131b]/95 shadow-[0_0_24px_rgba(168,85,247,0.12),0_0_18px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-[0_0_35px_rgba(217,70,239,0.22),0_0_35px_rgba(34,211,238,0.18)]"
              >
                <div className={`h-2 bg-gradient-to-r ${concept.accent}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Concept
                    </span>
                  </div>

                  <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    {concept.type}
                  </div>
                  <h3 className="mt-2 text-2xl font-black bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">{concept.name}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-zinc-400">
                    {concept.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {concept.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-7 overflow-hidden rounded-2xl bg-gradient-to-br ${concept.accent} p-[1px]`}
                  >
                    <div className="overflow-hidden rounded-2xl bg-white text-zinc-900">
                      {/* Mini browser bar */}
                      <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-100 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span className="h-2 w-2 rounded-full bg-green-400" />

                        <div className="ml-2 flex-1 rounded-full bg-white px-3 py-1 text-[7px] text-zinc-400">
                          www.yourbusiness.com
                        </div>
                      </div>

                      {(() => {
                        const previewImages = {
                          "BEAUTY & SALON": "/portfolio/beauty/beauty.png",
                          "CLEANING SERVICES": "/portfolio/cleaning/cleaning.png",
                          RESTAURANT: "/portfolio/restaurant/restaurant.png",
                          "LAWN & LANDSCAPING": "/portfolio/lawn/lawn.png",
                          "HOME SERVICES": "/portfolio/home/home.png",
                          "BOUTIQUE & E-COMMERCE": "/portfolio/boutique/boutique.png",
                        };

                        const image = previewImages[concept.type];

                        return image ? (
                          <div className="group/preview relative aspect-[4/3] overflow-hidden bg-zinc-950 sm:aspect-[16/10]">
                            <img
                              src={image}
                              alt={`${concept.name} premium website concept`}
                              className={`h-full w-full object-top transition duration-[1800ms] ease-out group-hover/preview:scale-[1.025] ${
                                concept.type === "BEAUTY & SALON" ||
                                concept.type === "CLEANING SERVICES"
                                  ? "object-cover"
                                  : "object-contain"
                              }`}
                              loading="lazy"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5" />

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent opacity-0 transition duration-500 group-hover/preview:opacity-100">
                              <div>
                                <div className="text-[7px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent/65">
                                  Premium Concept
                                </div>
                                <div className="mt-0.5 text-xs font-black">
                                  {concept.name}
                                </div>
                              </div>

                              <div className="rounded-full border border-white/30 bg-black/30 px-2.5 py-1 text-[7px] font-bold backdrop-blur">
                                VIEW DESIGN
                              </div>
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Concept designs are examples created to demonstrate possible styles
            and features for different industries.
          </p>
        </div>
      </section>


      {/* Featured Real Project */}
      <section
        id="featured-project"
        className="relative overflow-hidden border-y border-purple-400/25 bg-gradient-to-b from-[#050511] via-[#0b0620] to-[#050511] py-24"
      >
        {/* Featured project neon atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/25 via-fuchsia-500/20 to-cyan-400/25 blur-[120px]" />
          <div className="absolute -left-[20%] top-[18%] h-[360px] w-[75%] -rotate-12 rounded-[100%] border-t-[3px] border-fuchsia-400/55 shadow-[0_-24px_100px_rgba(217,70,239,0.5)]" />
          <div className="absolute -right-[20%] top-[30%] h-[360px] w-[75%] rotate-12 rounded-[100%] border-t-[3px] border-cyan-300/55 shadow-[0_-24px_100px_rgba(34,211,238,0.5)]" />
          <div className="absolute bottom-[5%] left-[15%] h-80 w-80 rounded-full bg-purple-600/25 blur-[120px]" />
          <div className="absolute right-[8%] top-[12%] h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-cyan-300/40 bg-gradient-to-r from-purple-500/15 via-fuchsia-500/15 to-cyan-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
              Featured Real Project
            </div>

            <h2 className="mt-6 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-4xl font-black text-transparent sm:text-6xl">
              KBETZ SPORTS
            </h2>

            <p className="mt-3 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-lg font-bold text-transparent">
              Sports Technology Platform
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-purple-100/80">
              What started as a website idea evolved into a custom production
              platform with AI-powered picks, live sports data, user accounts,
              subscription functionality, parlay tools, results tracking, APIs,
              and production deployment.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/45 bg-gradient-to-br from-purple-950/50 via-[#050510]/95 to-cyan-950/40 p-6 shadow-[0_0_45px_rgba(217,70,239,0.22),0_0_55px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">
                  From Website Idea to Full Platform
                </div>

                <h3 className="mt-4 bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                  Built far beyond a standard website.
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "AI-Powered Picks",
                    "Live Sports Data",
                    "User Accounts",
                    "Subscriptions",
                    "Payment Processing",
                    "Parlay Tools",
                    "Results Tracking",
                    "Custom APIs",
                    "Production Deployment",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/15 to-cyan-400/20 px-3 py-2 text-xs font-bold text-cyan-100 shadow-sm shadow-purple-500/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-fuchsia-400/30 bg-gradient-to-br from-purple-600/15 via-fuchsia-500/10 to-cyan-400/15 p-7 text-center shadow-xl shadow-purple-500/10">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-200">
                  Estimated Replacement Build Value
                </div>

                <div className="mt-3 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-5xl font-black text-transparent">
                  $15,000+
                </div>

                <p className="mt-4 text-sm font-medium leading-6 text-purple-100/70">
                  Reflecting the expanded custom functionality and production
                  platform scope.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-gradient-to-r border-purple-400/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-xs font-black uppercase tracking-[0.2em] text-transparent">
                  Real Project • Live in Production
                </div>
                <div className="mt-2 text-sm font-bold text-cyan-300">
                  KBETZSports.com
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://kbetzsports.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/20"
                >
                  View Live Project →
                </a>

                <a
                  href="#contact"
                  className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02]"
                >
                  Start Your Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden border-y border-purple-400/20 bg-gradient-to-b from-[#050511] via-[#09051c] to-[#050511] py-24">
        {/* Pricing neon atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-80 w-[75%] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-cyan-500/20 blur-[110px]" />
          <div className="absolute -left-[18%] top-[28%] h-[320px] w-[70%] -rotate-12 rounded-[100%] border-t-2 border-fuchsia-400/50 shadow-[0_-20px_90px_rgba(217,70,239,0.4)]" />
          <div className="absolute -right-[18%] top-[42%] h-[320px] w-[70%] rotate-12 rounded-[100%] border-t-2 border-cyan-300/50 shadow-[0_-20px_90px_rgba(34,211,238,0.4)]" />
          <div className="absolute bottom-[-10%] left-[25%] h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
          <div className="absolute right-[-5%] top-[15%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Website Packages
            </div>
            <h2 className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mt-3 text-4xl font-black sm:text-5xl">
              Start where your business is.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Straightforward starting prices with room to customize your
              project around what your business actually needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 ${
                  plan.popular
                    ? "border-cyan-300/70 bg-gradient-to-b from-cyan-400/20 via-purple-600/20 to-[#090918] shadow-[0_0_35px_rgba(34,211,238,0.28),0_0_30px_rgba(217,70,239,0.18)]"
                    : "border-purple-400/40 bg-gradient-to-b from-purple-950/40 via-[#090918]/95 to-cyan-950/25 shadow-[0_0_25px_rgba(168,85,247,0.16),0_0_18px_rgba(34,211,238,0.08)]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-1 text-xs font-black">
                    MOST POPULAR
                  </div>
                )}

                <div className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-sm font-black tracking-[0.2em] text-transparent">
                  {plan.name}
                </div>
                <div className="mt-4 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-5xl font-black text-transparent">{plan.price}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-fuchsia-300/80">
                  Starting at
                </div>
                <p className="mt-5 min-h-14 text-sm leading-6 text-purple-100/70">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <div key={item} className="text-sm text-purple-100/80">
                      <span className="mr-2 font-black text-cyan-300">✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 block rounded-full border border-cyan-300/30 bg-gradient-to-r from-purple-500/15 via-fuchsia-500/15 to-cyan-400/15 px-5 py-3 text-center text-sm font-bold text-cyan-100 transition hover:border-fuchsia-300/50 hover:from-purple-500/25 hover:via-fuchsia-500/25 hover:to-cyan-400/25"
                >
                  Request This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#050511] via-[#08051b] to-[#03030b] py-28">
        {/* Contact neon atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/25 via-fuchsia-500/20 to-cyan-500/25 blur-[120px]" />
          <div className="absolute -left-[20%] top-[20%] h-[360px] w-[75%] -rotate-12 rounded-[100%] border-t-[3px] border-fuchsia-400/55 shadow-[0_-22px_100px_rgba(217,70,239,0.5)]" />
          <div className="absolute -right-[20%] top-[32%] h-[360px] w-[75%] rotate-12 rounded-[100%] border-t-[3px] border-cyan-300/55 shadow-[0_-22px_100px_rgba(34,211,238,0.5)]" />
          <div className="absolute left-[-10%] top-[65%] h-px w-[120%] -rotate-6 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent shadow-[0_0_40px_rgba(168,85,247,0.7)]" />
          <div className="absolute left-[10%] top-[15%] h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute right-[5%] bottom-[5%] h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="pointer-events-none absolute -inset-x-12 top-24 bottom-8 -z-10 rounded-[3rem] bg-gradient-to-r from-fuchsia-600/20 via-purple-600/15 to-cyan-500/20 blur-[55px]" />
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
            Let's Build Something
          </div>
          <h2 className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mt-4 text-4xl font-black sm:text-6xl">
            Ready to give your business a digital home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us about your business and what you want your website to do.
            We'll help you choose the right starting point.
          </p>

          <InquiryForm />

          <p className="mt-5 text-sm text-zinc-500">
            Questions? aynekbetz@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <div className="font-black">
              KBETZ <span className="text-cyan-400">CREATIVE SOLUTIONS</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-purple-300">
              by Luxevra
            </div>
          </div>

          <p className="text-sm text-zinc-500">
            Websites • Branding • Digital Solutions
          </p>
        </div>
      </footer>
    </main>
  );
}