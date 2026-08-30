import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { eventWork, images, projects, type Project } from "@/data/portfolio";
import streetFlags from "@/assets/street-flags.jpg.asset.json";
import streetMonkey from "@/assets/street-monkey.jpg.asset.json";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Films, Documentaries & Photography" },
      {
        name: "description",
        content:
          "Feature films, documentaries, experimental shorts and photography by Satyam Chaudhary, including Sab Se Khatarnak, Kayantar and CAGE.",
      },
      { property: "og:title", content: "Selected Work — Satyam Chaudhary" },
      {
        property: "og:description",
        content: "A cinematic archive of films, documentaries and photographs.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="pt-28 md:pt-36">
      <section className="border-b px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <p className="meta">Selected Work</p>
          <h1 className="display mt-6 text-[15vw] leading-[0.88] md:text-[9vw]">The Archive</h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Film, documentary, experimental work and photography — arranged the way a contact sheet
            is: in the order things happened.
          </p>
        </div>
      </section>

      {/* FILM & DOCUMENTARY */}
      <section className="border-b px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="meta border-b pb-4">Film &amp; Documentary</h2>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12">
            {projects.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 3) * 80}
                className={
                  p.size === "wide"
                    ? "md:col-span-8"
                    : p.size === "tall"
                      ? "md:col-span-4 md:pt-20"
                      : "md:col-span-6"
                }
              >
                <ProjectCard
                  project={p}
                  open={open === p.slug}
                  onToggle={() => setOpen(open === p.slug ? null : p.slug)}
                  index={i + 1}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-24 border-t pt-8">
              <h3 className="meta">Additional Work</h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed">
                College film projects, fashion films, and other collaborative productions — the
                smaller sets where most of the learning quietly happens.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className="border-b bg-card px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="meta border-b pb-4">Photography</h2>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h3 className="display text-5xl md:text-7xl">Street — 5+ Years</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Published twice in Asian Photography Magazine. Street · People · Events · Documentary
              · Portraits · Experimental.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-5">
              <img
                src={images.streetNew}
                alt="Street photograph, high contrast shadow"
                loading="lazy"
                className="img-cinema aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="md:col-span-7 md:pt-16">
              <img
                src={streetFlags.url}
                alt="Street vendor with Indian flags"
                loading="lazy"
                className="img-cinema aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="md:col-span-4">
              <img
                src={images.still3}
                alt="Experimental photograph, hands on glass"
                loading="lazy"
                className="img-cinema aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="md:col-span-8">
              <img
                src={images.event1}
                alt="Concert photograph in stage haze"
                loading="lazy"
                className="img-cinema aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
            {eventWork.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="img-cinema aspect-[4/3] w-full object-cover"
                />
                <h4 className="display mt-4 text-2xl">{e.title}</h4>
                <p className="meta mt-2">
                  {e.year} · {e.role}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 text-sm text-muted-foreground">
            Also: Navratri event photography and pre-wedding work.
          </p>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  open,
  onToggle,
  index,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <article>
      <button type="button" onClick={onToggle} className="group block w-full text-left">
        <div className="grain overflow-hidden">
          <img
            src={project.image}
            alt={`Still from ${project.title}`}
            loading="lazy"
            className="img-cinema aspect-[4/3] w-full object-cover group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-b pb-3">
          <div>
            <p className="meta">
              {String(index).padStart(2, "0")} — {project.type}
            </p>
            <h3 className="display mt-2 text-3xl transition-colors group-hover:text-olive md:text-4xl">
              {project.title}
            </h3>
          </div>
          <span className="meta whitespace-nowrap">{project.year}</span>
        </div>
        <p className="meta mt-3">{project.role}</p>
        <span className="meta mt-4 inline-block text-olive">
          {open ? "— Close" : "+ Case notes"}
        </span>
      </button>

      {open && (
        <div className="mt-6 border-l-2 border-olive pl-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{project.credits}</p>
          <p className="mt-4 leading-relaxed">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.contributions.map((c) => (
              <li key={c} className="meta rounded-full border px-3 py-1.5 text-foreground">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
