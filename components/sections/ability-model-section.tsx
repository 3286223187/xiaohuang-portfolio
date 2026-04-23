import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { siteData } from "@/data/site-data";

export function AbilityModelSection() {
  const { abilityModel } = siteData;

  return (
    <section id="ability-model" className="bg-[var(--background)]">
      <Container className="section-stage py-16 sm:py-20">
        <Reveal>
          <SectionHeader
            eyebrow={abilityModel.eyebrow}
            title={abilityModel.title}
            description={abilityModel.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {abilityModel.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <article className="rounded-[2rem] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,247,252,0.88))] p-6 shadow-[0_14px_48px_rgba(67,83,106,0.06)] transition-transform duration-300 hover:-translate-y-1">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-8 text-[var(--muted-foreground)]">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <Tag key={point} label={point} />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
