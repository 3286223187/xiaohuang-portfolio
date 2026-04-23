import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { siteData } from "@/data/site-data";

export function BeyondWorkSection() {
  const { beyondWork } = siteData;

  return (
    <section id="beyond-work" className="bg-[var(--background)]">
      <Container className="section-stage py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <Reveal>
            <div className="paper-card rounded-[2rem] border border-[var(--border-strong)] p-7 shadow-[0_12px_28px_rgba(67,83,106,0.04)] sm:p-8">
              <SectionHeader
                eyebrow={beyondWork.eyebrow}
                title={beyondWork.title}
                description={beyondWork.description}
              />
              <div className="mt-8 space-y-5 border-t border-[var(--border)] pt-6">
                <p className="text-base leading-8 text-[var(--foreground)]/90 sm:text-lg">
                  {beyondWork.intro}
                </p>
                <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                  {beyondWork.note}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {beyondWork.cards.map((card, index) => (
              <Reveal key={card.id} delay={index * 80}>
                <article className="paper-card group rounded-[2rem] border border-[var(--border-strong)] p-6 shadow-[0_10px_22px_rgba(67,83,106,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/70 hover:shadow-[0_20px_48px_rgba(67,83,106,0.08)]">
                  <div className="space-y-4">
                    {card.kicker ? (
                      <p className="hand-note text-sm text-[var(--accent)]">
                        {card.kicker}
                      </p>
                    ) : null}
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                      {card.title}
                    </h3>
                    <p className="text-base leading-8 text-[var(--muted-foreground)]">
                      {card.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <Tag key={`${card.id}-${tag}`} label={tag} />
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
