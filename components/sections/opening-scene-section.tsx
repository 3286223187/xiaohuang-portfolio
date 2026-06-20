"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { siteData } from "@/data/site-data";

type OpeningSceneSectionProps = {
  scrollY?: number;
};

export function OpeningSceneSection({ scrollY = 0 }: OpeningSceneSectionProps) {
  const { openingScene, profile } = siteData;

  return (
    <section
      id="opening-scene"
      className="relative z-0 h-full min-h-screen bg-[var(--background)]"
    >
      <Reveal>
        <div className="relative h-screen min-h-screen w-full overflow-hidden">
          <Image
            src={openingScene.visual.src}
            alt={openingScene.visual.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.18)),linear-gradient(to right,rgba(0,0,0,0.18),rgba(0,0,0,0.06),rgba(0,0,0,0))] pointer-events-none" />

          <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            {/* Top: Hero Nav (centered) */}
            <div className="flex justify-center">
              <div
                className="hero-nav-container"
                style={{ transform: `translateY(${-scrollY}px)` }}
              >
                <div className="hero-nav border border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.68)] backdrop-blur-[12px]">
                  <span className="relative z-20 inline-flex min-w-0 items-center gap-2 text-sm font-medium tracking-[0.04em] text-[rgba(36,49,63,0.9)]">
                    <Image
                      src="/images/placeholders/头像.jpg"
                      alt="Profile"
                      width={28}
                      height={28}
                      className="shrink-0 rounded-full object-cover"
                    />
                    <span className="truncate">{profile.name}</span>
                  </span>

                  <div className="hero-nav-divider"></div>

                  <span className="hero-nav-label">AI Image · Content · Portfolio</span>
                </div>
              </div>
            </div>

            {/* Middle left: Opening scene label */}
            <div className="flex-1 flex flex-col justify-center">
              <p
                className="slogan-text hand-note text-base sm:text-lg lg:text-xl tracking-widest text-white/70 mb-8"
                style={{ animationDelay: '0.15s' }}
              >
                opening scene
              </p>

              {/* Chinese main title */}
              <div
                className="main-title-text mb-4"
                style={{ animationDelay: '0.3s' }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed tracking-wide" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                  于寻常之处，抵达心中的远方。
                </p>
              </div>

              {/* Subtitle */}
              <p
                className="text-xs sm:text-sm tracking-[0.2em] text-white/50 uppercase"
                style={{ animationDelay: '0.45s' }}
              >
                image notes / content work / project process
              </p>
            </div>

            {/* Bottom row */}
            <div className="flex items-end justify-between">
              {/* Portfolio 2026 - decorative, low opacity */}
              <h1
                className="portfolio-text text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                style={{ animationDelay: '0.6s' }}
              >
                Portfolio 2026
              </h1>

              {/* Right: Scroll indicator - clean, floating */}
              <div className="scroll-float flex flex-col items-center gap-3">
                <span className="text-xs tracking-[0.3em] text-white uppercase" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}>Scroll</span>
                <div className="flex flex-col gap-1">
                  <span className="scroll-v">‹</span>
                  <span className="scroll-v">‹</span>
                  <span className="scroll-v">‹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}