import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { siteData } from "@/data/site-data";

export function OpeningSceneSection() {
  const { openingScene, profile } = siteData;

  return (
    <section id="opening-scene" className="relative z-0 bg-[var(--background)]">
      <Reveal>
        <div className="relative min-h-screen w-full overflow-hidden">
          <Image
            src={openingScene.visual.src}
            alt={openingScene.visual.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,31,47,0.12),rgba(19,31,47,0.18))]" />

          <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="flex justify-center">
              <div className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border border-[rgba(255,255,255,0.34)] bg-[rgba(255,255,255,0.76)] px-3 py-2 backdrop-blur-[10px] sm:px-4">
                <a
                  href="#opening-scene"
                  className="inline-flex min-w-0 items-center gap-3 rounded-full px-2 py-1 text-sm font-medium tracking-[0.04em] text-[rgba(36,49,63,0.94)] transition-colors hover:text-[var(--foreground)]"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[rgba(82,106,138,0.16)] text-[10px] tracking-[0.18em] text-[rgba(36,49,63,0.9)]">
                    HH
                  </span>
                  <span className="truncate">{profile.name}</span>
                </a>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={openingScene.ctaHref}
                    className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-[rgba(36,49,63,0.84)] transition-colors hover:text-[var(--foreground)] sm:inline-flex"
                  >
                    About
                  </a>
                  <a
                    href="#contact-cta"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(82,106,138,0.18)] bg-[rgba(82,106,138,0.9)] px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[rgba(91,115,147,0.96)]"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between gap-6">
              <div className="space-y-2">
                <p className="hand-note text-base text-[rgba(249,252,255,0.92)]">
                  {openingScene.eyebrow}
                </p>
                <p className="text-sm uppercase tracking-[0.18em] text-[rgba(249,252,255,0.74)]">
                  {openingScene.role}
                </p>
              </div>
              <p className="text-sm font-medium text-[rgba(249,252,255,0.8)]">
                {openingScene.name}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
              <div className="max-w-3xl space-y-5 pb-3">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[rgba(249,252,255,0.98)] sm:text-5xl lg:text-[4.4rem] lg:leading-[1.02]">
                  {openingScene.title}
                </h1>
                <p className="max-w-xl text-base leading-8 text-[rgba(249,252,255,0.86)] sm:text-lg">
                  {openingScene.description}
                </p>
                {openingScene.visual.caption ? (
                  <p className="image-note hand-note max-w-md pl-2 text-sm leading-7 text-[rgba(249,252,255,0.78)]">
                    {openingScene.visual.caption}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-4 pt-1 lg:items-end lg:pb-2">
                <a
                  href={openingScene.ctaHref}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-[0_8px_20px_rgba(48,67,97,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b7393]"
                >
                  {openingScene.ctaLabel}
                </a>
                <span className="hand-note inline-flex items-center gap-2 text-sm text-[rgba(249,252,255,0.8)]">
                  {openingScene.scrollHint}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div
        id="hero-nav-trigger"
        aria-hidden="true"
        className="pointer-events-none h-px w-full opacity-0"
      />
    </section>
  );
}
