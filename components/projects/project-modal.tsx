"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";

type ProjectModalProps = {
  children: ReactNode;
  title: string;
};

export function ProjectModal({ children, title }: ProjectModalProps) {
  const router = useRouter();
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      router.back();
    }, 180);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div
      className={`fixed inset-0 z-50 bg-[color:rgba(25,35,48,0.28)] transition-opacity duration-200 ${
        entered && !closing ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div className="mx-auto flex min-h-full max-w-7xl items-start justify-center px-4 py-4 sm:px-6 sm:py-6">
        <div
          className={`relative max-h-[calc(100vh-2rem)] w-full overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--background)] shadow-[0_32px_120px_rgba(38,53,75,0.2)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-h-[calc(100vh-3rem)] ${
            entered && !closing
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-[0.985] opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute right-4 top-4 z-20 flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[rgba(252,254,255,0.94)] px-2 py-2 shadow-[0_4px_12px_rgba(67,83,106,0.03)]">
            <p className="hidden text-sm text-[rgba(36,49,63,0.78)] sm:block">{title}</p>
            <button
              type="button"
              onClick={handleClose}
              className="paper-chip inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-strong)]"
              aria-label="关闭项目详情"
            >
              ×
            </button>
          </div>

          <div className="max-h-[calc(100vh-2rem)] overflow-y-auto sm:max-h-[calc(100vh-3rem)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
