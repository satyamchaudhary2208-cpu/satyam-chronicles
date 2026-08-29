import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Reveal } from "@/components/reveal";
import { images, projects, services, skills } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satyam Chaudhary — Filmmaker & Photographer, Ahmedabad" },
      {
        name: "description",
        content:
          "Portfolio of Satyam Chaudhary, a filmmaker, photographer, creative director and writer based in Ahmedabad, India.",
      },
      { property: "og:title", content: "Satyam Chaudhary — Filmmaker & Photographer" },
      {
        property: "og:description",
        content: "A living archive of film, photography, theatre and writing from Ahmedabad.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center border-b">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-12 md:gap-8 md:px-10 md:pb-24 md:pt-40">
          {/* Left narrative column */}
          <div className="relative z-10 md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-accent" />
                <p className="meta text-olive">Ahmedabad, India · Since 2020</p>
              </div>
              <h1 className="display mt-6 text-[19vw] leading-[0.8] tracking-tight md:text-[9.5vw]">
                Satyam
                <br />
                <span className="ml-8 italic text-olive md:ml-16">Chaudhary</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12 max-w-md space-y-8">
                <div className="space-y-4">
                  <p className="meta">
                    Filmmaker · Photographer · Creative Director · Writer
                  </p>
                  <p className="display text-2xl italic leading-snug text-muted-foreground md:text-3xl">
                    “I create beautiful things through images, stories, and human expression.”
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/work"
                    className="group relative overflow-hidden bg-olive px-8 py-4"
                  >
                    <span className="meta relative z-10 text-background">Selected Work</span>
                    <span className="absolute inset-0 translate-y-full bg-bark transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                  <Link
                    to="/contact"
                    className="meta border border-foreground/20 px-8 py-4 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
                  >
                    Let's Create
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right visual column */}
          <div className="relative md:col-span-5">
            <Reveal delay={200}>
              <div className="relative aspect-[4/5] w-full">
                {/* Decorative accent frame */}
                <div className="absolute -inset-4 -z-10 translate-x-2 translate-y-2 border border-accent/25" />

                <div className="grain h-full w-full overflow-hidden shadow-2xl shadow-foreground/20">
                  <img
                    src={portrait}
                    alt="Portrait of Satyam Chaudhary holding a film camera in warm window light"
                    width={1200}
                    height={1600}
                    className="img-cinema h-full w-full object-cover"
                  />
                </div>

                {/* Figure caption */}
                <div className="absolute -bottom-6 -right-3 bg-ink px-5 py-3 md:-right-4">
                  <p className="meta whitespace-nowrap text-background">
                    <span className="mr-2 text-clay">Fig. 01</span> Self, with camera — 35mm
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-8 left-5 hidden items-center gap-6 md:left-10 md:flex">
          <span className="block h-px w-12 bg-olive/40" />
          <span className="meta tracking-[0.5em] text-olive">Scroll To Explore</span>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="overflow-hidden border-b bg-ink py-4">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10">
          {Array.from({ length: 2 }).map((_, r) => (
            <div key={r} className="flex shrink-0 gap-10">
              {[
                "Filmmaking",
                "Photography",
                "Creative Direction",
                "Writing",
                "Editing",
                "Theatre",
              ].map((w) => (
                <span key={w} className="meta flex items-center gap-10 text-background/80">
                  {w}
                  <span className="h-1 w-1 rounded-full bg-clay" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO / ABOUT TEASER */}
      <section className="border-b px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-accent" />
              <p className="meta text-olive">About</p>
            </div>
            <h2 className="display mt-5 text-4xl md:text-5xl">
              A detour from medicine.
              <br />
              <span className="italic text-olive">A return to storytelling.</span>
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t pt-6 md:max-w-sm">
              {[
                { k: "5+", v: "Years shooting" },
                { k: "12+", v: "Productions" },
                { k: "2×", v: "Published" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="display text-4xl leading-none">{s.k}</p>
                  <p className="meta mt-2 text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed">
              I'm a 24-year-old multimedia creative working between still and moving images. I
              cleared NEET and joined Government Dental College &amp; Hospital in Ahmedabad — then
              left in my second year, because film, photographs and stories were the thing I
              actually wanted to spend a life on.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Since then I've worked as an Assistant Director across feature films and
              documentaries, shot on the street for more than five years, trained in
              improvisational theatre, and kept writing.
            </p>
            <Link to="/about" className="meta rule-link mt-8 inline-block text-foreground">
              Read the full story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-b px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6">
            <div>
              <p className="meta text-olive">Archive — 001</p>
              <h2 className="display mt-3 text-5xl md:text-7xl">Selected Work</h2>
            </div>
            <Link to="/work" className="meta rule-link text-foreground">
              All projects
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
            {featured.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 90}
                className={
                  i === 0
                    ? "md:col-span-8"
                    : i === 1
                      ? "md:col-span-4 md:pt-24"
                      : "md:col-span-6 md:col-start-4"
                }
              >
                <Link to="/work" className="group block">
                  <div className="grain relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={`Still from ${p.title}`}
                      loading="lazy"
                      className="img-cinema aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                    <span className="meta absolute bottom-4 left-4 translate-y-3 bg-background px-4 py-2 text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View project →
                    </span>
                    <span className="meta absolute right-4 top-4 text-background/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4 border-t pt-4">
                    <h3 className="display text-3xl transition-colors duration-300 group-hover:text-olive">
                      {p.title}
                    </h3>
                    <span className="meta whitespace-nowrap">{p.year}</span>
                  </div>
                  <p className="meta mt-2">
                    {p.type} — {p.role}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY STRIP */}
      <section className="border-b bg-card px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-accent" />
                  <p className="meta text-olive">Photography</p>
                </div>
                <h2 className="display mt-4 text-5xl md:text-7xl">
                  Street — <span className="italic">5+ Years</span>
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Published twice in Asian Photography Magazine. People, spaces, and the ordinary
                hours in between.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[images.street1, images.street2, images.event1, images.still3].map((src, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className={`group relative ${i % 2 === 1 ? "md:translate-y-8" : ""}`}>
                  <div className="grain overflow-hidden">
                    <img
                      <img
 src={src}
  alt="Street and documentary photograph by Satyam Chaudhary"
  loading="lazy"
  className="img-cinema aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
/>
                  </div>
                  <figcaption className="meta mt-3 text-muted-foreground">
                    Fig. {String(i + 2).padStart(2, "0")}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Link to="/work" className="meta rule-link mt-16 inline-block text-foreground">
            Enter the gallery
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-5xl md:text-7xl">Working Together</h2>
            <p className="meta text-olive">Services — 004</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px border bg-border md:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="group relative h-full overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <span className="absolute left-0 top-0 h-px w-0 bg-olive transition-all duration-500 group-hover:w-full" />
                  <p className="meta">{s.n}</p>
                  <h3 className="display mt-6 text-3xl transition-colors group-hover:text-olive">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <span className="meta mt-8 inline-block translate-x-0 text-olive opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/services" className="meta rule-link mt-10 inline-block text-foreground">
            More on services
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-b px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="meta text-olive">Skills</p>
            <h2 className="display mt-5 text-4xl md:text-5xl">
              Satyam understands the complete filmmaking process.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Pre-production, production, camera, editing, creative direction and crew management —
              knowing how each part connects is what keeps a film standing.
            </p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {skills.map((s) => (
                <li
                  key={s}
                  className="meta rounded-full border px-4 py-2 text-foreground transition-colors duration-300 hover:border-olive hover:bg-olive hover:text-background"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-ink px-5 py-28 text-background md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-clay" />
              <p className="meta text-clay">Currently open for commissions</p>
            </div>
            <h2 className="display mt-8 text-[13vw] leading-[0.9] md:text-[8vw]">
              Let's make something <span className="italic text-clay">beautiful.</span>
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="mailto:SortedSatyam@gmail.com"
              className="meta rounded-full bg-background px-7 py-3.5 text-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              SortedSatyam@gmail.com
            </a>
            <Link
              to="/contact"
              className="meta rounded-full border border-background/30 px-7 py-3.5 text-background transition-colors duration-300 hover:bg-background hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
