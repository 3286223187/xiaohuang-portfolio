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
    let animationFrame = 0;
    let currentProgress = 0;
    let targetProgress = 0;

    const updateVisibility = () => {
      const top = trigger.getBoundingClientRect().top;
      const start = 184;
      const end = -28;
      const rawProgress = (start - top) / (start - end);
      targetProgress = Math.max(0, Math.min(1, rawProgress));

      if (!animationFrame) {
        const animate = () => {
          currentProgress += (targetProgress - currentProgress) * 0.18;

          if (Math.abs(targetProgress - currentProgress) < 0.001) {
            currentProgress = targetProgress;
          }

          setContentNavProgress(currentProgress);

          if (currentProgress !== targetProgress) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            animationFrame = 0;
          }
        };

        animationFrame = requestAnimationFrame(animate);
      }

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
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <main className="flex-1">
      <SiteHeader progress={contentNavProgress} />
      <OpeningSceneSection />
      <AboutSection />
      <AbilityModelSection />
      <ExperienceTimelineSection />
      <FeaturedProjectsSection />
      <BeyondWorkSection />
      <ClosingSignatureSection />
      <ContactCtaSection />
    </main>
  );
}
