import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Reveal } from "@/components/reveal";
import { images, timeline } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Satyam Chaudhary, Multimedia Creative" },
      {
        name: "description",
        content:
          "From dental college to film sets: the story of Satyam Chaudhary, assistant director, street photographer, theatre artist and writer in Ahmedabad.",
      },
      { property: "og:title", content: "About — Satyam Chaudhary" },
      {
        property: "og:description",
        content: "A detour from medicine. A return to storytelling.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="border-b px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="meta">About</p>
          <h1 className="display mt-6 text-[14vw] leading-[0.88] md:text-[8vw]">
            A detour from medicine.
            <br />
            <span className="text-olive">A return to storytelling.</span>
          </h1>
        </div>
      </section>

      <section className="border-b px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="grain md:col-span-5">
            <img
              src={portrait}
              alt="Portrait of Satyam Chaudhary"
              loading="lazy"
              width={1200}
              height={1600}
              className="img-cinema w-full object-cover"
            />
            <p className="meta mt-3">Ahmedabad · 2026</p>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="text-xl leading-relaxed">
                Satyam is a multimedia creative with a growing focus on photography, creative
                direction and film production. He is currently gaining hands-on experience as an
                Assistant Director across film and documentary projects — pre-production planning,
                on-set coordination, production management, and visual storytelling.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                He is particularly interested in the relationship between still and moving images,
                and wants to keep expanding his practice inside dynamic production environments.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                His path has been unconventional. After finishing school in 2020 and clearing NEET,
                he joined Government Dental College &amp; Hospital, Ahmedabad. He left during his
                second year — not out of failure, but out of clarity. Filmmaking, storytelling and
                creative expression were the direction he genuinely wanted.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Alongside film and photography he is a theatre artist practicing Improvisational
                Theatre, training at Atman Theatre School, Ahmedabad since 2025, with three full
                productions behind him. He also writes stories and poetry.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="display mt-12 border-l-2 border-olive pl-6 text-2xl leading-snug">
                “I left a profession to learn a practice. I'm still learning it.”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEYOND THE FRAME */}
      <section className="border-b bg-card px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="meta">Creative Practice</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">Beyond the Frame</h2>

          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-3">
            <Reveal>
              <img
                src={images.theatre}
                alt="Performer under a stage spotlight"
                loading="lazy"
                className="img-cinema aspect-[4/3] w-full object-cover"
              />
              <h3 className="display mt-5 text-3xl">Theatre</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Professional improvisational theatre at Atman Theatre School, Ahmedabad since 2025,
                across three full productions. Theatre sharpened his sense of presence, spontaneity,
                character and how people actually behave when nobody writes their lines.
              </p>
            </Reveal>
            <Reveal delay={90} className="md:pt-16">
              <div className="flex aspect-[4/3] w-full items-center justify-center border bg-background p-8">
                <p className="display text-center text-3xl leading-snug text-olive">
                  “Some nights
                  <br />
                  the poem arrives
                  <br />
                  before the image.”
                </p>
              </div>
              <h3 className="display mt-5 text-3xl">Writing</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Stories and poetry — another way of turning over ideas, emotions, characters and the
                small unresolved things people carry.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <img
                src={images.street1}
                alt="Black and white street photograph"
                loading="lazy"
                className="img-cinema aspect-[4/3] w-full object-cover"
              />
              <h3 className="display mt-5 text-3xl">Street Photography</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                More than five years of walking and watching — people, spaces, moments, and the
                unremarkable hours that turn out to be the story.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-b px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="meta">Experience</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">The Timeline</h2>
          <ul className="mt-14">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 40}>
                <li className="grid grid-cols-1 gap-2 border-t py-6 md:grid-cols-12 md:gap-8">
                  <span className="meta md:col-span-2">{t.year}</span>
                  <span className="md:col-span-9 md:col-start-4">{t.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-8">
          <h2 className="display text-4xl md:text-6xl">See the work.</h2>
          <Link
            to="/work"
            className="meta rounded-full bg-foreground px-7 py-3.5 text-background"
          >
            Selected Work
          </Link>
        </div>
      </section>
    </div>
  );
}
