import Image from "next/image";
import { siteData } from "@/data/site-data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const { profile, contacts } = siteData;

  return (
    <section id="hero-section" className="bg-[var(--background)]">
      <Container className="py-10 sm:py-12 lg:py-14">
        <div className="grid gap-12 border-y border-[rgba(29,35,41,0.08)] py-10 lg:grid-cols-[minmax(0,1.14fr)_360px] lg:items-start">
          <Reveal className="space-y-9">
            <div className="space-y-5">
              <p className="hand-note text-base text-[var(--accent)]">
                {profile.role}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-5xl lg:leading-[1.12]">
                {profile.headline}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--foreground)]/76 sm:text-lg">
                {profile.subheadline}
              </p>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
                {profile.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {profile.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    cta.variant === "primary"
                      ? "bg-[var(--foreground)] text-white shadow-[0_14px_36px_rgba(15,23,42,0.14)] hover:-translate-y-0.5"
                      : "border border-[var(--border-strong)] bg-white/78 text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                  }`}
                >
                  {cta.label}
                </a>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="paper-chip rounded-[1.4rem] bg-[rgba(109,123,138,0.08)] px-5 py-5">
                <p className="text-sm text-[var(--muted-foreground)]">主标签</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">审美表达</p>
              </div>
              <div className="paper-chip rounded-[1.4rem] bg-white/72 px-5 py-5">
                <p className="text-sm text-[var(--muted-foreground)]">能力侧重</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">表达与推进</p>
              </div>
              <div className="paper-chip rounded-[1.4rem] bg-white/72 px-5 py-5">
                <p className="text-sm text-[var(--muted-foreground)]">持续关注</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">AI 与数字化工具</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90} className="space-y-4">
            <figure className="space-y-4">
              <div className="collage-frame paper-card overflow-hidden rounded-[2.1rem] p-3">
                <div className="overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(231,237,243,0.9),rgba(250,246,238,0.9))]">
                  <Image
                    src={profile.visual.src}
                    alt={profile.visual.alt}
                    width={720}
                    height={720}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
              <figcaption className="image-note hand-note text-sm leading-7 text-[var(--muted-foreground)]">
                {profile.infoCardEyebrow} · {profile.infoCardDescription}
              </figcaption>
            </figure>

            <div
              id="contact-placeholder"
              className="paper-chip rounded-[1.5rem] px-5 py-5 text-sm leading-7 text-[var(--muted-foreground)]"
            >
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-[var(--foreground)]">{profile.name}</p>
                <p>{profile.location}</p>
              </div>
              <div className="mt-4 space-y-2 border-t border-[rgba(15,23,42,0.08)] pt-4">
                {[contacts.wechat, contacts.email, contacts.resume].map((item) => (
                  <p key={item.label}>
                    <span className="font-medium text-[var(--foreground)]">{item.label}：</span>
                    {item.value}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
