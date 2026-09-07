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
              KBETZ <span className="text-cyan-400">CREATIVE</span>
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
      <section className="relative flex min-h-screen items-center pt-24">
        <div className="absolute left-[-10rem] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-[120px]" />
        <div className="absolute right-[-8rem] top-52 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Websites • Branding • Digital Solutions
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              YOUR BUSINESS
              <br />
              DESERVES TO
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                LOOK THIS GOOD.
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
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-purple-600/30 to-cyan-400/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
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
                    <div className="mt-1 text-2xl font-black">YOUR BUSINESS</div>
                  </div>
                  <div className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300">
                    LIVE
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-purple-700 via-fuchsia-700 to-cyan-600 p-[1px]">
                  <div className="rounded-2xl bg-[#0b0b1d] p-8">
                    <div className="text-sm font-bold text-cyan-300">
                      PROFESSIONAL. MODERN. YOURS.
                    </div>
                    <div className="mt-3 text-4xl font-black">
                      Turn your idea into a digital experience.
                    </div>
                    <div className="mt-5 h-2 w-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["DESIGN", "MOBILE", "GROWTH"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-xs font-bold text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-white/10 bg-white/[0.025] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              What We Do
            </div>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
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
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept portfolio */}
      <section id="work" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-8%] top-[45%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
              Imagine Your Business Online
            </div>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
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
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a19] transition duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className={`h-2 bg-gradient-to-r ${concept.accent}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{concept.icon}</div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Concept
                    </span>
                  </div>

                  <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    {concept.type}
                  </div>
                  <h3 className="mt-2 text-2xl font-black">{concept.name}</h3>
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

                      {concept.type === "BEAUTY & SALON" ? (
                        <div className="bg-[#fff8fb]">
                          {/* Salon navigation */}
                          <div className="flex items-center justify-between px-4 py-3">
                            <div>
                              <div className="font-serif text-sm font-black tracking-wide text-[#6b214e]">
                                LUXE
                              </div>
                              <div className="text-[6px] tracking-[0.3em] text-[#a76a8e]">
                                BEAUTY STUDIO
                              </div>
                            </div>

                            <div className="rounded-full bg-[#6b214e] px-3 py-1.5 text-[7px] font-bold text-white">
                              BOOK NOW
                            </div>
                          </div>

                          {/* Salon hero */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-[#f8d8e7] via-[#fff1f6] to-[#d8b5cf] px-5 py-7">
                            <div className="relative z-10 w-3/4">
                              <div className="text-[7px] font-bold uppercase tracking-[0.22em] text-[#9b5077]">
                                Beauty • Confidence • Luxury
                              </div>

                              <div className="mt-2 font-serif text-2xl font-black leading-none text-[#4b1738]">
                                Your beauty.
                                <br />
                                Your moment.
                              </div>

                              <div className="mt-2 max-w-[160px] text-[7px] leading-3 text-[#70445e]">
                                Luxury beauty services designed to help you look
                                and feel your absolute best.
                              </div>

                              <div className="mt-3 inline-block rounded-full bg-[#6b214e] px-3 py-1.5 text-[7px] font-bold text-white">
                                BOOK YOUR APPOINTMENT
                              </div>
                            </div>

                            <div className="absolute -bottom-8 -right-5 h-28 w-28 rounded-full bg-[#b96b96]/30" />
                            <div className="absolute right-5 top-5 text-5xl opacity-70">
                              ✨
                            </div>
                          </div>

                          {/* Salon services */}
                          <div className="grid grid-cols-3 gap-2 px-4 py-3">
                            {["HAIR", "MAKEUP", "SKIN"].map((service) => (
                              <div
                                key={service}
                                className="rounded-lg border border-[#efd7e4] bg-white px-2 py-2 text-center"
                              >
                                <div className="text-[9px]">✦</div>
                                <div className="mt-1 text-[6px] font-black tracking-wider text-[#6b214e]">
                                  {service}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : concept.type === "CLEANING SERVICES" ? (
                        <div className="bg-white text-slate-900">
                          <div className="flex items-center justify-between px-4 py-3">
                            <div>
                              <div className="text-xs font-black text-sky-600">
                                FRESH & CLEAN
                              </div>
                              <div className="text-[6px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                Professional Cleaning
                              </div>
                            </div>
                            <div className="rounded-full bg-sky-500 px-3 py-1.5 text-[7px] font-black text-white">
                              FREE QUOTE
                            </div>
                          </div>

                          <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100 px-5 py-6">
                            <div className="relative z-10 w-3/4">
                              <div className="text-[7px] font-black uppercase tracking-[0.2em] text-sky-600">
                                A Cleaner Home Starts Here
                              </div>

                              <div className="mt-2 text-xl font-black leading-none text-slate-900">
                                Spotless spaces.
                                <br />
                                Zero stress.
                              </div>

                              <div className="mt-2 text-[7px] leading-3 text-slate-500">
                                Reliable residential and commercial cleaning
                                tailored to your schedule.
                              </div>

                              <div className="mt-3 inline-block rounded-full bg-sky-500 px-3 py-1.5 text-[7px] font-black text-white">
                                GET A FREE QUOTE
                              </div>
                            </div>

                            <div className="absolute right-5 top-7 text-5xl">
                              🫧
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 p-3">
                            {["HOME", "OFFICE", "MOVE-OUT"].map((service) => (
                              <div
                                key={service}
                                className="rounded-lg border border-sky-100 bg-sky-50 p-2 text-center text-[6px] font-black text-sky-700"
                              >
                                ✦ {service}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : concept.type === "RESTAURANT" ? (
                        <div className="bg-[#160d09] text-white">
                          <div className="flex items-center justify-between px-4 py-3">
                            <div>
                              <div className="font-serif text-sm font-black text-amber-300">
                                THE SOCIAL
                              </div>
                              <div className="text-[6px] uppercase tracking-[0.3em] text-orange-200/60">
                                Kitchen & Bar
                              </div>
                            </div>

                            <div className="rounded-full border border-amber-400/50 px-3 py-1.5 text-[7px] font-bold text-amber-200">
                              RESERVE
                            </div>
                          </div>

                          <div className="relative overflow-hidden bg-gradient-to-br from-[#3a160c] via-[#24100b] to-[#090605] px-5 py-7">
                            <div className="relative z-10">
                              <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-amber-400">
                                Crafted • Local • Unforgettable
                              </div>

                              <div className="mt-2 font-serif text-2xl font-black leading-none">
                                Taste the
                                <br />
                                experience.
                              </div>

                              <div className="mt-2 max-w-[160px] text-[7px] leading-3 text-orange-100/60">
                                Elevated dishes, signature cocktails and an
                                atmosphere worth sharing.
                              </div>

                              <div className="mt-3 inline-block bg-amber-500 px-3 py-1.5 text-[7px] font-black text-black">
                                VIEW THE MENU
                              </div>
                            </div>

                            <div className="absolute -right-2 bottom-0 text-6xl opacity-80">
                              🍝
                            </div>
                          </div>

                          <div className="flex justify-between px-4 py-3 text-[6px] font-bold uppercase tracking-wider text-amber-200/70">
                            <span>Menu</span>
                            <span>Reservations</span>
                            <span>Private Dining</span>
                          </div>
                        </div>
                      ) : concept.type === "LAWN & LANDSCAPING" ? (
                        <div className="bg-[#f5fbf4] text-emerald-950">
                          <div className="flex items-center justify-between px-4 py-3">
                            <div className="text-xs font-black">
                              GREEN
                              <span className="text-emerald-600">EDGE</span>
                            </div>

                            <div className="rounded-md bg-emerald-700 px-3 py-1.5 text-[7px] font-black text-white">
                              FREE ESTIMATE
                            </div>
                          </div>

                          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-green-700 to-lime-600 px-5 py-7 text-white">
                            <div className="relative z-10 w-3/4">
                              <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-lime-200">
                                Love Your Outdoors
                              </div>

                              <div className="mt-2 text-2xl font-black leading-none">
                                Better lawns.
                                <br />
                                Better curb appeal.
                              </div>

                              <div className="mt-2 text-[7px] leading-3 text-emerald-50/80">
                                Lawn care and landscaping that keeps your
                                property looking its best.
                              </div>

                              <div className="mt-3 inline-block rounded-md bg-lime-300 px-3 py-1.5 text-[7px] font-black text-emerald-950">
                                GET MY ESTIMATE
                              </div>
                            </div>

                            <div className="absolute bottom-2 right-4 text-6xl opacity-70">
                              🌳
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 p-3 text-center">
                            {["LAWN CARE", "LANDSCAPING", "CLEANUPS"].map((service) => (
                              <div
                                key={service}
                                className="rounded-md bg-emerald-50 p-2 text-[6px] font-black text-emerald-800"
                              >
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : concept.type === "HOME SERVICES" ? (
                        <div className="bg-[#f7f5f0] text-zinc-900">
                          <div className="flex items-center justify-between px-4 py-3">
                            <div>
                              <div className="text-xs font-black">
                                PRIME HOME
                              </div>
                              <div className="text-[6px] uppercase tracking-[0.2em] text-orange-600">
                                Solutions
                              </div>
                            </div>

                            <div className="bg-zinc-900 px-3 py-1.5 text-[7px] font-black text-white">
                              GET A QUOTE
                            </div>
                          </div>

                          <div className="relative overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black px-5 py-7 text-white">
                            <div className="relative z-10 w-3/4">
                              <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-orange-400">
                                Built Right. Built To Last.
                              </div>

                              <div className="mt-2 text-2xl font-black leading-none">
                                Upgrade the
                                <br />
                                place you call home.
                              </div>

                              <div className="mt-2 text-[7px] leading-3 text-zinc-300">
                                Quality repairs, renovations and improvements
                                from a team you can trust.
                              </div>

                              <div className="mt-3 inline-block bg-orange-500 px-3 py-1.5 text-[7px] font-black text-white">
                                REQUEST A QUOTE
                              </div>
                            </div>

                            <div className="absolute bottom-2 right-4 text-6xl opacity-60">
                              🛠️
                            </div>
                          </div>

                          <div className="flex justify-between px-4 py-3 text-[6px] font-black uppercase text-zinc-600">
                            <span>Renovations</span>
                            <span>Repairs</span>
                            <span>Projects</span>
                          </div>
                        </div>
                      ) : concept.type === "BOUTIQUE & E-COMMERCE" ? (
                        <div className="bg-[#fffaf7] text-zinc-900">
                          <div className="flex items-center justify-between px-4 py-3">
                            <div className="font-serif text-sm font-black tracking-widest">
                              MAISON LUXE
                            </div>
                            <div className="text-[7px] font-black uppercase tracking-wider">
                              SHOP ◇
                            </div>
                          </div>

                          <div className="relative overflow-hidden bg-gradient-to-br from-[#e8d6ff] via-[#f6e9f2] to-[#f2c6dc] px-5 py-7">
                            <div className="relative z-10 w-3/4">
                              <div className="text-[7px] font-bold uppercase tracking-[0.25em] text-purple-700">
                                The New Collection
                              </div>

                              <div className="mt-2 font-serif text-2xl font-black leading-none">
                                Style that
                                <br />
                                speaks for you.
                              </div>

                              <div className="mt-2 text-[7px] leading-3 text-zinc-600">
                                Curated pieces designed to make every day feel
                                a little more luxurious.
                              </div>

                              <div className="mt-3 inline-block bg-black px-3 py-1.5 text-[7px] font-black text-white">
                                SHOP COLLECTION
                              </div>
                            </div>

                            <div className="absolute bottom-1 right-4 text-6xl opacity-70">
                              👜
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 p-3">
                            {["NEW", "BEST SELLERS", "ACCESSORIES"].map((item) => (
                              <div
                                key={item}
                                className="rounded-md border border-purple-100 bg-white p-2 text-center text-[6px] font-black"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-[#090918] p-5">
                          <div
                            className={`h-24 rounded-xl bg-gradient-to-r ${concept.accent} opacity-80`}
                          />
                          <div className="mt-3 h-2 w-3/4 rounded bg-white/15" />
                          <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
                        </div>
                      )}
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

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden border-y border-white/10 bg-white/[0.025] py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/10 via-purple-600/10 to-cyan-500/10 blur-[110px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Website Packages
            </div>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
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
                    ? "border-cyan-400/50 bg-gradient-to-b from-cyan-400/10 to-purple-600/10"
                    : "border-white/10 bg-[#090918]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-1 text-xs font-black">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-sm font-black tracking-[0.2em] text-zinc-300">
                  {plan.name}
                </div>
                <div className="mt-4 text-5xl font-black">{plan.price}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                  Starting at
                </div>
                <p className="mt-5 min-h-14 text-sm leading-6 text-zinc-400">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <div key={item} className="text-sm text-zinc-300">
                      <span className="mr-2 text-cyan-300">✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 block rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-center text-sm font-bold transition hover:bg-white/10"
                >
                  Request This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute bottom-[-30%] left-1/2 h-80 w-[65%] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/15 via-fuchsia-500/10 to-cyan-500/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
            Let's Build Something
          </div>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Ready to give your business a digital home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us about your business and what you want your website to do.
            We'll help you choose the right starting point.
          </p>

          <a
            href="mailto:aynekbetz@gmail.com?subject=Website%20Design%20Inquiry"
            className="mt-9 inline-block rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 px-9 py-4 text-lg font-black shadow-2xl shadow-purple-700/30 transition hover:scale-105"
          >
            Start Your Website →
          </a>

          <p className="mt-5 text-sm text-zinc-500">aynekbetz@gmail.com</p>
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