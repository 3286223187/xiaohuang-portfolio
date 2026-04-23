import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteData } from "@/data/site-data";

export function ClosingSignatureSection() {
  const { closingSignature } = siteData;

  return (
    <section id="closing-signature" className="bg-[var(--background)]">
      <Container className="section-stage py-18 sm:py-24 lg:py-28">
        <div className="mx-auto flex min-h-[40vh] max-w-4xl flex-col justify-center">
          <Reveal>
            <p className="hand-note text-sm tracking-[0.08em] text-[var(--accent)] sm:text-base">
              {closingSignature.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-4 space-y-0">
              <span className="sr-only">{closingSignature.title}</span>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl sm:leading-[1.25] lg:text-5xl lg:leading-[1.18]">
              {closingSignature.signature}
              </h2>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
