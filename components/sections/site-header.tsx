"use client";

import { siteData } from "@/data/site-data";
import { Container } from "@/components/ui/container";

type SiteHeaderProps = {
  progress?: number;
};

export function SiteHeader({ progress = 1 }: SiteHeaderProps) {
  const { navigation, profile } = siteData;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const easedProgress = 1 - (1 - clampedProgress) * (1 - clampedProgress);
  const translateY = (1 - easedProgress) * -24;
  const opacity = easedProgress * 0.96;

  return (
    <header
      className="fixed inset-x-0 top-0 z-30 border-b border-[rgba(82,106,138,0.12)] bg-[color:rgba(246,248,251,0.92)] backdrop-blur-sm"
      style={{
        opacity,
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
            <span className="paper-chip inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] text-xs tracking-[0.18em] text-[var(--foreground)]">
              HH
            </span>
            <span>{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-[rgba(82,106,138,0.12)] bg-[var(--nav-surface)] px-2 py-2 shadow-[0_4px_12px_rgba(67,83,106,0.03)] md:flex">
            {navigation.filter((item) => item.label !== "Home" && item.label !== "Resume").map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-[rgba(36,49,63,0.82)] transition-all hover:bg-[rgba(255,255,255,0.72)] hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact-cta"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-92"
            >
              Resume
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
