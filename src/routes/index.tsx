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
      <section className="relative min-h-screen border-b">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-end gap-8 px-5 pb-14 pt-32 md:grid-cols-12 md:gap-10 md:px-10 md:pb-16 md:pt-40">
          <div className="md:col-span-7">
            <p className="meta">Ahmedabad, India · Since 2020</p>
            <h1 className="display mt-6 text-[17vw] leading-[0.85] md:text-[9.5vw]">
              Satyam
              <br />
              <span className="text-olive">Chaudhary</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Filmmaker · Photographer · Creative Director · Writer
            </p>
            <p className="display mt-6 max-w-xl text-2xl leading-tight md:text-3xl">
              “I create beautiful things through images, stories, and human expression.”
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/work"
                className="meta rounded-full bg-foreground px-6 py-3 text-background transition-opacity hover:opacity-85"
              >
                Selected Work
              </Link>
              <Link to="/contact" className="meta rule-link text-foreground">
                Let's Create
              </Link>
            </div>
          </div>

          <div className="grain relative md:col-span-5">
            <img
              src={portrait}
              alt="Portrait of Satyam Chaudhary holding a film camera in warm window light"
              width={1200}
              height={1600}
              className="img-cinema aspect-[3/4] w-full object-cover"
            />
            <p className="meta mt-3 flex justify-between">
              <span>Fig. 01 — Self, with camera</span>
              <span>35mm</span>
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="meta">Scroll</span>
          <span className="block h-10 w-px animate-pulse bg-foreground/40" />
        </div>
      </section>

      {/* INTRO / ABOUT TEASER */}
      <section className="border-b px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="meta">About</p>
            <h2 className="display mt-5 text-4xl md:text-5xl">
              A detour from medicine.
              <br />A return to storytelling.
            </h2>
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
          <div className="flex items-end justify-between border-b pb-6">
            <h2 className="display text-5xl md:text-7xl">Selected Work</h2>
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
                <div className="grain group overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Still from ${p.title}`}
                    loading="lazy"
                    className="img-cinema aspect-[4/3] w-full object-cover group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl">{p.title}</h3>
                  <span className="meta whitespace-nowrap">{p.year}</span>
                </div>
                <p className="meta mt-2">
                  {p.type} — {p.role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY STRIP */}
      <section className="border-b bg-card px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="meta">Photography</p>
            <h2 className="display mt-4 text-5xl md:text-7xl">Street — 5+ Years</h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Published twice in Asian Photography Magazine. People, spaces, and the ordinary hours
              in between.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[images.street1, images.street2, images.event1, images.still3].map((src, i) => (
              <Reveal key={i} delay={i * 80}>
                <img
                  src={src}
                  alt="Street and documentary photograph by Satyam Chaudhary"
                  loading="lazy"
                  className="img-cinema aspect-[3/4] w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
          <Link to="/work" className="meta rule-link mt-10 inline-block text-foreground">
            Enter the gallery
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-5xl md:text-7xl">Working Together</h2>
          <div className="mt-14 grid grid-cols-1 gap-px border bg-border md:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <p className="meta">{s.n}</p>
                  <h3 className="display mt-6 text-3xl transition-colors group-hover:text-olive">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
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
            <p className="meta">Skills</p>
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
                <li key={s} className="meta rounded-full border px-4 py-2 text-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <h2 className="display text-[13vw] leading-[0.9] md:text-[8vw]">
              Let's make something beautiful.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="mailto:SortedSatyam@gmail.com"
              className="meta rounded-full bg-foreground px-7 py-3.5 text-background"
            >
              SortedSatyam@gmail.com
            </a>
            <Link to="/contact" className="meta rounded-full border px-7 py-3.5 text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
