import { MapPin, Phone, Mail, Facebook, Star, Users, Sparkles, Palette, Pencil, Ruler, Layers, Droplet, Brush } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "Fine Art Paints",
    desc: "Acrylic, oil, and watercolor from student to professional grade.",
    tint: "bg-primary/10 text-primary",
  },
  {
    icon: Pencil,
    title: "Sketching & Drawing",
    desc: "Graphite, charcoal, pastels, and precision drawing tools.",
    tint: "bg-accent/15 text-accent",
  },
  {
    icon: Ruler,
    title: "Architecture & Design",
    desc: "Drafting tools, scales, vellum, and technical essentials.",
    tint: "bg-secondary/25 text-ink",
  },
  {
    icon: Layers,
    title: "Canvases & Surfaces",
    desc: "Stretched canvas, boards, specialty papers, and sketchbooks.",
    tint: "bg-highlight/15 text-highlight",
  },
  {
    icon: Droplet,
    title: "Inks, Markers & Mixed Media",
    desc: "Alcohol markers, inks, gouache, and experimental materials.",
    tint: "bg-primary/10 text-primary",
  },
  {
    icon: Brush,
    title: "Studio Essentials",
    desc: "Brushes, palettes, easels, and the accessories that tie it all together.",
    tint: "bg-accent/15 text-accent",
  },
];

const loves = [
  {
    icon: Star,
    title: "Locally Trusted",
    desc: "Hundreds of positive reviews from Gainesville's creative community.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "2.8K+ followers and a 98% recommendation rating from artists and students.",
  },
  {
    icon: Sparkles,
    title: "Curated Quality",
    desc: "Hand-picked fine art materials, from first sketch to final masterpiece.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-ink-foreground font-serif text-lg font-black">S</span>
            <span className="font-serif text-lg font-bold tracking-tight text-ink">SoMa Art Media Hub</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#supplies" className="hover:text-primary transition-colors">Supplies</a>
            <a href="#love" className="hover:text-primary transition-colors">Why SoMa</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute inset-0 talavera opacity-40" />
        <div className="absolute inset-0 paper-texture opacity-50" />

        {/* Floating paint swatches */}
        <div className="pointer-events-none absolute -left-10 top-40 h-28 w-28 rounded-full bg-primary/80 blur-2xl animate-float" style={{ ['--r' as string]: '-8deg' }} />
        <div className="pointer-events-none absolute right-8 top-24 h-24 w-24 rounded-full bg-highlight/70 blur-2xl animate-float" style={{ ['--r' as string]: '12deg', animationDelay: '1.2s' }} />
        <div className="pointer-events-none absolute left-1/3 bottom-10 h-32 w-32 rounded-full bg-secondary/70 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Downtown Gainesville · 435 S Main St
            </span>
            <h1 className="mt-6 font-serif text-5xl font-black leading-[1.02] tracking-tight text-ink md:text-7xl">
              Your Gainesville hub for <span className="italic text-primary">fine arts</span>, <span className="italic text-accent">design</span>, and <span className="italic text-highlight">creative expression</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/70 text-balance md:text-xl">
              A creative, eclectic supply store where beginners, students, architects, designers, and professional artists come to find the materials that move them.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink/70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="font-semibold text-ink">98%</span> recommended
              </div>
              <div className="h-4 w-px bg-ink/20" />
              <div><span className="font-semibold text-ink">2.8K+</span> local followers</div>
              <div className="h-4 w-px bg-ink/20" />
              <div>Independently owned</div>
            </div>
          </div>

          {/* Artistic placeholder collage */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute left-0 top-6 h-64 w-48 -rotate-6 rounded-2xl bg-primary shadow-art">
                <div className="flex h-full flex-col justify-between p-5 text-primary-foreground">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">№ 01</span>
                  <div>
                    <div className="font-serif text-3xl font-black leading-none">Pigment</div>
                    <div className="mt-1 text-xs opacity-80">Terracotta · 14</div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-56 w-44 rotate-6 rounded-2xl bg-ink shadow-art">
                <div className="flex h-full flex-col justify-between p-5 text-ink-foreground">
                  <Brush className="h-6 w-6 opacity-80" />
                  <div>
                    <div className="font-serif text-2xl font-black leading-none">Studio</div>
                    <div className="mt-1 text-xs opacity-70">Since day one</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-10 h-52 w-56 rotate-3 rounded-2xl bg-jade shadow-art">
                <div className="flex h-full flex-col justify-between p-5 text-jade-foreground">
                  <div className="flex gap-1">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    <span className="h-3 w-3 rounded-full bg-secondary" />
                    <span className="h-3 w-3 rounded-full bg-accent" />
                    <span className="h-3 w-3 rounded-full bg-highlight" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-black leading-none">Paleta</div>
                    <div className="mt-1 text-xs opacity-80">Barro · Azulejo · Nopal</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-2 bottom-10 flex h-20 w-20 items-center justify-center rounded-full bg-highlight text-highlight-foreground shadow-art animate-float">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-y border-ink/10 bg-card py-24">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-serif italic text-primary">— About the shop</span>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-ink md:text-5xl">
              A neighborhood studio, stocked for every kind of maker.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-7">
            <p>
              SoMa Art Media Hub is a retail fine‑arts supply store in the heart of South Main, Gainesville. We exist to serve the people who make things — the architecture and design students pulling all‑nighters, the painters chasing light, and the professionals who know exactly which brush they want.
            </p>
            <p>
              Whether you're picking up your very first sketchbook or restocking your studio, you'll find carefully curated materials and honest advice from people who actually use them.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {["Beginners", "Students", "Architects", "Professionals"].map((t) => (
                <div key={t} className="rounded-xl border border-ink/10 bg-background px-4 py-3 text-center text-sm font-semibold text-ink">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supplies */}
      <section id="supplies" className="relative py-24">
        <div className="absolute inset-0 paper-texture opacity-50" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-serif italic text-accent">— What's on the shelves</span>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-ink md:text-5xl">
              Supplies for every stage of the creative process.
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              From the first pencil line to the final varnish, our shelves are stocked with trusted materials for every medium.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-art"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.tint}`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-ink/70">{c.desc}</p>
                <span className="pointer-events-none absolute -right-6 -top-6 font-serif text-7xl font-black text-ink/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why artists love SoMa */}
      <section id="love" className="relative overflow-hidden bg-gradient-ink py-24 text-ink-foreground">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-highlight/25 blur-3xl" />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-serif italic text-secondary">— Why artists love SoMa</span>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight md:text-5xl">
              A hub built by artists, for artists.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {loves.map((l) => (
              <div key={l.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-ink">
                  <l.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold">{l.title}</h3>
                <p className="mt-2 text-ink-foreground/70">{l.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:grid-cols-3">
            <div>
              <div className="font-serif text-4xl font-black text-secondary md:text-5xl">98%</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-ink-foreground/60">Recommendation rating</div>
            </div>
            <div className="border-white/10 sm:border-x">
              <div className="font-serif text-4xl font-black text-primary md:text-5xl">2.8K+</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-ink-foreground/60">Community followers</div>
            </div>
            <div>
              <div className="font-serif text-4xl font-black text-highlight md:text-5xl">100s</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-ink-foreground/60">Positive local reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="relative py-24">
        <div className="container">
          <div className="grid gap-10 rounded-3xl border border-ink/10 bg-card p-8 shadow-soft md:p-14 lg:grid-cols-2">
            <div>
              <span className="font-serif italic text-primary">— Stop by the shop</span>
              <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-ink md:text-5xl">
                Come make something with us.
              </h2>
              <p className="mt-4 max-w-md text-lg text-ink/70">
                Find us on South Main Street in downtown Gainesville. We're always happy to talk materials, techniques, and what you're working on.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-ink/10 bg-background p-5">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink/50">Visit</div>
                  <div className="mt-1 font-medium text-ink">435 South Main Street, Gainesville, FL</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-ink/10 bg-background p-5">
                <Phone className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink/50">Call</div>
                  <a href="tel:+13522133071" className="mt-1 block font-medium text-ink hover:text-primary">(352) 213‑3071</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-ink/10 bg-background p-5">
                <Mail className="mt-0.5 h-5 w-5 flex-none text-highlight" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink/50">Email</div>
                  <a href="mailto:somaartmediahub@gmail.com" className="mt-1 block font-medium text-ink hover:text-primary break-all">somaartmediahub@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-ink/10 bg-background p-5">
                <Facebook className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink/50">Follow</div>
                  <a href="https://www.facebook.com/somaartmediahub/" target="_blank" rel="noreferrer" className="mt-1 block font-medium text-ink hover:text-primary">facebook.com/somaartmediahub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-background py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-ink/60 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-ink-foreground font-serif text-sm font-black">S</span>
            <span className="font-serif font-bold text-ink">SoMa Art Media Hub</span>
          </div>
          <div>© {new Date().getFullYear()} SoMa Art Media Hub · Gainesville, FL</div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-highlight" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
