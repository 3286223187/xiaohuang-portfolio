import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteData } from "@/data/site-data";

export function AboutSection() {
  const { about } = siteData;

  return (
    <section id="about-section" className="bg-transparent">
      <div className="section-stage py-16 sm:py-20">
        <Container>
          <div className="sheet-grid w-full lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
          <div className="paper-page relative overflow-hidden rounded-[2.4rem] border border-[var(--border-strong)] px-7 py-8 sm:px-9 sm:py-10">
            <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-[rgba(207,216,223,0.3)] blur-2xl" />
            <div className="absolute bottom-10 left-8 h-16 w-28 rounded-full bg-[rgba(82,106,138,0.06)] blur-2xl" />
            <div className="relative space-y-6">
              <p className="hand-note text-base text-[var(--accent)]">
                {about.eyebrow}
              </p>
              <h2 className="scribble-accent max-w-4xl pr-10 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2.35rem] sm:leading-[1.16]">
                {about.title}
              </h2>
              <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                {about.body}
              </p>
              <div className="note-card inline-flex max-w-xl rounded-[1.25rem] px-5 py-4">
                <p className="text-sm leading-7 text-[var(--foreground)]/68">{about.note}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 lg:justify-self-end">
            <figure className="space-y-4">
              <div className="collage-frame overflow-hidden rounded-[1.6rem] border border-[rgba(36,49,63,0.08)] bg-[linear-gradient(180deg,rgba(253,254,255,0.94),rgba(241,245,250,0.9))] p-3 shadow-[0_6px_18px_rgba(67,83,106,0.04)]">
                <div className="overflow-hidden rounded-[1.15rem]">
                  <Image
                    src={about.visual.src}
                    alt={about.visual.alt}
                    width={900}
                    height={1200}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
              {about.visual.caption ? (
                <figcaption className="image-note hand-note pl-2 text-sm leading-7 text-[var(--muted-foreground)]">
                  {about.visual.caption}
                </figcaption>
              ) : null}
            </figure>
          </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
