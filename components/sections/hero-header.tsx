"use client";

import { siteData } from "@/data/site-data";
import { Container } from "@/components/ui/container";

type HeroHeaderProps = {
  visible: boolean;
};

export function HeroHeader({ visible }: HeroHeaderProps) {
  const { profile } = siteData;

  return (
    <header
      className={`sticky top-0 z-20 transition-[opacity,transform,visibility] duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "nav-transition-visible" : "nav-transition-hidden"
      }`}
      aria-hidden={!visible}
    >
      <Container className="pt-5 sm:pt-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#opening-scene"
            className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(248,252,255,0.14)] px-4 py-2.5 text-sm font-medium tracking-[0.04em] text-[rgba(249,252,255,0.96)] backdrop-blur-[10px] transition-colors hover:bg-[rgba(248,252,255,0.2)]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] text-[11px] tracking-[0.18em] text-[rgba(249,252,255,0.96)]">
              HH
            </span>
            <span>{profile.name}</span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#contact-cta"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(82,106,138,0.58)] px-4 py-2.5 text-sm font-medium text-white backdrop-blur-[10px] transition-colors hover:bg-[rgba(91,115,147,0.7)]"
            >
              Resume
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
