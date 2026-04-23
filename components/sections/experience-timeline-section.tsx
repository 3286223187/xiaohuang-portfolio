import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { siteData } from "@/data/site-data";

export function ExperienceTimelineSection() {
  const { experiences } = siteData;

  return (
    <section id="experience-timeline" className="bg-[var(--background)]">
      <Container className="section-stage py-16 sm:py-20">
        <Reveal>
          <SectionHeader
            eyebrow={experiences.eyebrow}
            title={experiences.title}
            description={experiences.description}
          />
        </Reveal>

        <div className="relative mt-10 rounded-[2.2rem] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(242,247,252,0.86))] px-6 py-6 shadow-[0_16px_48px_rgba(67,83,106,0.06)] sm:px-8 sm:py-8">
          <span className="absolute bottom-8 left-[11px] top-8 w-px bg-[var(--border-strong)] md:left-[219px]" />

          <div className="space-y-2">
            {experiences.items.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 100}
                className="relative grid gap-4 py-6 md:grid-cols-[180px_32px_minmax(0,1fr)] md:gap-6"
              >
                <div className="pl-8 md:pl-0">
                  <p className="text-sm font-medium tracking-[0.04em] text-[var(--muted-foreground)]">
                    {item.period}
                  </p>
                </div>

                <div className="absolute left-0 top-7 md:static">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white shadow-[0_6px_18px_rgba(67,83,106,0.06)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  </span>
                </div>

                <div className="pl-8 md:pl-0">
                  <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.84)] px-5 py-5 shadow-[0_10px_28px_rgba(67,83,106,0.05)]">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                        {item.company}｜{item.role}
                      </h3>
                      <p className="text-base leading-8 text-[var(--muted-foreground)]">
                        {item.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.keywords.map((keyword) => (
                          <Tag key={`${item.id}-${keyword}`} label={keyword} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
