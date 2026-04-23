import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteData } from "@/data/site-data";

export function ThankYouSection() {
  const { thankYou } = siteData;

  return (
    <section id="thank-you" className="bg-[var(--background)]">
      <Container className="section-stage py-12 sm:py-16">
        <Reveal>
          <div className="paper-page rounded-[2.8rem] border border-[var(--border-strong)] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_320px] lg:items-center">
              <div className="space-y-5">
                <p className="hand-note text-base text-[var(--accent)]">{thankYou.eyebrow}</p>
                <h2 className="scribble-accent max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  {thankYou.title}
                </h2>
                <p className="max-w-3xl text-xl leading-9 text-[var(--foreground)]/92">
                  {thankYou.signature}
                </p>
                <p className="max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                  {thankYou.description}
                </p>
                <div className="note-card inline-flex max-w-2xl rounded-[1.4rem] px-5 py-4">
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-[var(--foreground)]">{thankYou.name}</p>
                    <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                      {thankYou.contactLine}
                    </p>
                  </div>
                </div>
              </div>

              <figure className="space-y-4 lg:justify-self-end">
                <div className="collage-frame overflow-hidden rounded-[1.9rem] border border-[rgba(28,37,32,0.08)] bg-[linear-gradient(180deg,rgba(250,252,247,0.94),rgba(228,236,228,0.9))] p-3 shadow-[0_20px_56px_rgba(55,78,58,0.09)]">
                  <div className="overflow-hidden rounded-[1.45rem]">
                    <Image
                      src={thankYou.visual.src}
                      alt={thankYou.visual.alt}
                      width={900}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                </div>
                {thankYou.visual.caption ? (
                  <figcaption className="image-note hand-note pl-2 text-sm leading-7 text-[var(--muted-foreground)]">
                    {thankYou.visual.caption}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
