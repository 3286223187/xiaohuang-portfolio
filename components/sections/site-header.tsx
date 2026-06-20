"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
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
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(e.target as Node)) {
        setShowDownloadMenu(false);
      }
    };
    if (showDownloadMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDownloadMenu]);

  const handleDownload = (type: "resume" | "portfolio") => {
    const filePath = type === "resume" ? "/images/placeholders/黄瀚晖-简历.pdf" : "/images/placeholders/黄瀚晖-AI影像作品集.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = type === "resume" ? "黄瀚晖-简历.pdf" : "黄瀚晖-AI影像作品集.pdf";
    link.click();
    setShowDownloadMenu(false);
  };

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
    (1 - clampedProgress) * -headerHeight + clampedProgress * 0;

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
            <span className="paper-chip inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e0ea] bg-white overflow-hidden">
              <Image
                src="/images/placeholders/头像.jpg"
                alt="avatar"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </span>
            <span>{profile.name}</span>
          </a>

          <nav className="hidden items-center rounded-full border border-[#d7e0ea] bg-[#e9eff7] px-2 py-2 shadow-[0_4px_12px_rgba(15,23,42,0.03)] md:flex">
            <div className="flex items-center gap-2 pr-5">
              {navigation.filter((item) => item.label !== "Home").map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-[rgba(36,49,63,0.82)] transition-all hover:bg-white hover:text-[var(--accent)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="relative" ref={downloadMenuRef}>
              <button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center gap-1.5 rounded-full bg-[#4f6682] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#5b7393]"
              >
                Download
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showDownloadMenu && (
                <div className="absolute top-full mt-2 right-0 w-36 bg-white rounded-xl shadow-lg border border-[var(--border)] py-1 z-50">
                  <button
                    onClick={() => handleDownload("resume")}
                    className="w-full px-4 py-2.5 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
                  >
                    Resume
                  </button>
                  <button
                    onClick={() => handleDownload("portfolio")}
                    className="w-full px-4 py-2.5 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
                  >
                    Portfolio
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
