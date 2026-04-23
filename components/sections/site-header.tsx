"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { siteData } from "@/data/site-data";
import { Container } from "@/components/ui/container";

type SiteHeaderProps = {
  progress?: number;
};

export function SiteHeader({ progress = 1 }: SiteHeaderProps) {
  const { navigation, profile } = siteData;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const contentSnapOffset = 80;

  useLayoutEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const updateHeight = () => {
      const nextHeight = element.offsetHeight;
      setHeaderHeight(nextHeight);
      document.documentElement.style.setProperty("--site-header-height", `${nextHeight}px`);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  const translateY =
    (1 - clampedProgress) * -headerHeight + clampedProgress * contentSnapOffset;

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-30 border-b border-[#d7e0ea] bg-[#f6f8fb] backdrop-blur-sm"
      style={{
        pointerEvents: clampedProgress <= 0.001 ? "none" : "auto",
        transform: `translateY(${translateY}px)`,
      }}
      aria-hidden={clampedProgress <= 0.001}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#opening-scene"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--foreground)]"
          >
            <span className="paper-chip inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e0ea] bg-white text-xs tracking-[0.18em] text-[var(--foreground)]">
              HH
            </span>
            <span>{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-[#d7e0ea] bg-[#e9eff7] px-2 py-2 shadow-[0_4px_12px_rgba(15,23,42,0.03)] md:flex">
            {navigation.filter((item) => item.label !== "Home" && item.label !== "Resume").map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-[rgba(36,49,63,0.82)] transition-all hover:bg-white hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact-cta"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#5b7393]"
            >
              Resume
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
