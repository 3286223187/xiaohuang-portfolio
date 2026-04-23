"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AbilityModelSection } from "@/components/sections/ability-model-section";
import { AboutSection } from "@/components/sections/about-section";
import { BeyondWorkSection } from "@/components/sections/beyond-work-section";
import { ClosingSignatureSection } from "@/components/sections/closing-signature-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { ExperienceTimelineSection } from "@/components/sections/experience-timeline-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { OpeningSceneSection } from "@/components/sections/opening-scene-section";
import { SiteHeader } from "@/components/sections/site-header";

export function HomePageShell() {
  const [contentNavProgress, setContentNavProgress] = useState(0);

  useLayoutEffect(() => {
    const { history, location } = window;
    const previousScrollRestoration = history.scrollRestoration;

    history.scrollRestoration = "manual";

    if (location.hash) {
      history.replaceState(null, "", `${location.pathname}${location.search}`);
    }

    window.scrollTo(0, 0);

    return () => {
      history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const trigger = document.getElementById("hero-nav-trigger");
    if (!trigger) return;

    let frame = 0;

    const updateVisibility = () => {
      const top = trigger.getBoundingClientRect().top;
      const start = 168;
      const end = 0;
      const rawProgress = (start - top) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setContentNavProgress(clampedProgress);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <main className="relative flex-1">
      <SiteHeader progress={contentNavProgress} />

      <div className="fixed inset-0 z-0">
        <OpeningSceneSection />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none relative h-screen" aria-hidden="true">
          <div
            id="hero-nav-trigger"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full"
          />
        </div>

        <div className="relative bg-[var(--background)]">
          <AboutSection />
          <AbilityModelSection />
          <ExperienceTimelineSection />
          <FeaturedProjectsSection />
          <BeyondWorkSection />
          <ClosingSignatureSection />
          <ContactCtaSection />
        </div>
      </div>
    </main>
  );
}
