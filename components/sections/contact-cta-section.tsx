import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { siteData } from "@/data/site-data";
import Image from "next/image";

export function ContactCtaSection() {
  const { contacts, thankYou } = siteData;
  const contactItems = [contacts.wechat, contacts.email, contacts.resume];

  return (
    <section id="contact-cta" className="bg-[var(--background)]">
      <Container className="section-stage py-16 sm:py-20">
        <Reveal>
          <div className="paper-page rounded-[2.4rem] border border-[var(--border-strong)] p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_260px] lg:items-start">
              <div className="space-y-8">
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
                </div>

                <div className="space-y-5">
                  <SectionHeader
                    eyebrow={contacts.eyebrow}
                    title={contacts.title}
                    description={contacts.description}
                  />

                  <div className="grid gap-4 sm:grid-cols-3">
                    {contactItems.map((item) => {
                      const content = (
                        <div className="paper-chip rounded-[1.5rem] border border-[var(--border)] px-5 py-5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[rgba(82,106,138,0.18)]">
                          <p className="text-sm text-[var(--muted-foreground)]">{item.label}</p>
                          <p className="mt-2 text-base font-medium leading-7 text-[var(--foreground)]">
                            {item.value}
                          </p>
                        </div>
                      );

                      return item.href ? (
                        <a key={item.label} href={item.href} className="block">
                          {content}
                        </a>
                      ) : (
                        <div key={item.label}>{content}</div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {contacts.actions.map((action) => (
                      <a
                        key={action.label}
                        href={action.href}
                        className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 ${
                          action.variant === "primary"
                            ? "bg-[var(--accent)] text-white shadow-[0_4px_12px_rgba(67,83,106,0.08)] hover:-translate-y-0.5 hover:bg-[#5b7393]"
                            : "border border-[var(--border-strong)] bg-[var(--surface-strong)] text-[var(--foreground)] hover:border-[rgba(82,106,138,0.18)] hover:bg-[var(--accent-soft)]"
                        }`}
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <figure className="space-y-4 lg:justify-self-end lg:pt-4">
                <div className="collage-frame overflow-hidden rounded-[1.7rem] border border-[rgba(36,49,63,0.08)] bg-[linear-gradient(180deg,rgba(253,254,255,0.94),rgba(241,245,250,0.9))] p-3 shadow-[0_6px_18px_rgba(67,83,106,0.04)]">
                  <div className="overflow-hidden rounded-[1.2rem]">
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
