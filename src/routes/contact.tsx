import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { images } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Satyam Chaudhary, Ahmedabad" },
      {
        name: "description",
        content:
          "Get in touch with Satyam Chaudhary for films, photography, creative direction, documentary work and writing. Ahmedabad, India.",
      },
      { property: "og:title", content: "Contact — Satyam Chaudhary" },
      {
        property: "og:description",
        content: "Let's make something beautiful. Ahmedabad, India.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { label: "Email", value: "SortedSatyam@gmail.com", href: "mailto:SortedSatyam@gmail.com" },
  { label: "Phone", value: "+91 88690 48320", href: "tel:+918869048320" },
  {
    label: "Instagram",
    value: "@Satyamkasansaar",
    href: "https://instagram.com/Satyamkasansaar",
  },
  { label: "Based in", value: "Ahmedabad, India", href: null },
];

function Contact() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="border-b px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="meta">Contact</p>
          <h1 className="display mt-6 text-[13vw] leading-[0.88] md:text-[8vw]">
            Let's make
            <br />
            <span className="text-olive">something beautiful.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            For films, photographs, creative direction, documentary work, writing, or simply
            interesting collaborations — get in touch.
          </p>
        </div>
      </section>

      <section className="border-b px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <ul>
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 60}>
                  <li className="grid grid-cols-1 gap-1 border-t py-6 md:grid-cols-12">
                    <span className="meta md:col-span-4">{d.label}</span>
                    <span className="md:col-span-8">
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="rule-link display text-2xl md:text-3xl"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="display text-2xl md:text-3xl">{d.value}</span>
                      )}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:SortedSatyam@gmail.com"
                className="meta rounded-full bg-foreground px-7 py-3.5 text-background transition-opacity hover:opacity-85"
              >
                Write an email
              </a>
              <a
                href="tel:+918869048320"
                className="meta rounded-full border px-7 py-3.5 text-foreground transition-colors hover:bg-card"
              >
                Call
              </a>
            </div>
          </div>

          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <a
              href="https://instagram.com/Satyamkasansaar"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="grain overflow-hidden">
                <img
                  src={images.street2}
                  alt="Photograph from Satyam Chaudhary's Instagram archive"
                  loading="lazy"
                  className="img-cinema aspect-[4/5] w-full object-cover group-hover:scale-[1.03]"
                />
              </div>
              <p className="meta mt-4">The ongoing archive</p>
              <p className="display mt-1 text-3xl transition-colors group-hover:text-olive">
                @Satyamkasansaar
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <p className="display mx-auto max-w-[1600px] text-4xl text-olive md:text-6xl">
          For the love of beautiful things.
        </p>
      </section>
    </div>
  );
}
