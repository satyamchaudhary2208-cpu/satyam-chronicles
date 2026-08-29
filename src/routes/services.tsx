import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { images, services, skills } from "@/data/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Creative Direction, Photography, Editing, Writing" },
      {
        name: "description",
        content:
          "Work with Satyam Chaudhary on creative direction, photography, documentary editing and writing, from Ahmedabad, India.",
      },
      { property: "og:title", content: "Services — Satyam Chaudhary" },
      {
        property: "og:description",
        content: "Creative direction, photography, documentary editing and writing.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="border-b px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <p className="meta">Services</p>
          <h1 className="display mt-6 text-[14vw] leading-[0.88] md:text-[8.5vw]">
            Ways of working
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            I work as an independent collaborator — usually somewhere between the idea and the cut.
          </p>
        </div>
      </section>

      <section className="border-b px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="group grid grid-cols-1 gap-6 border-t py-12 transition-colors duration-500 hover:bg-card md:grid-cols-12 md:gap-10 md:px-4">
                <span className="meta md:col-span-1">{s.n}</span>
                <h2 className="display text-4xl transition-colors group-hover:text-olive md:col-span-5 md:text-5xl">
                  {s.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground md:col-span-6">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <img
              src={images.still1}
              alt="Film crew silhouetted at golden hour"
              loading="lazy"
              className="img-cinema aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-8">
            <h2 className="display text-4xl md:text-5xl">
              The whole process, not just one department.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Pre-production, production, camera, editing, creative direction and crew management —
              working across all of them means knowing how a decision on day one shows up in the
              edit six months later.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="meta rounded-full border px-3 py-1.5 text-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-8">
          <h2 className="display text-4xl md:text-6xl">Have something in mind?</h2>
          <Link to="/contact" className="meta rounded-full bg-foreground px-7 py-3.5 text-background">
            Let's Create
          </Link>
        </div>
      </section>
    </div>
  );
}
