"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { ProjectBlockRenderer } from "@/components/projects/project-block-renderer";
import type { ProjectSubItem } from "@/data/site-data";

type ProjectSubprojectsSwitcherProps = {
  subProjects: ProjectSubItem[];
};

export function ProjectSubprojectsSwitcher({
  subProjects,
}: ProjectSubprojectsSwitcherProps) {
  const [activeId, setActiveId] = useState(subProjects[0]?.id ?? "");

  const activeSubProject = useMemo(
    () => subProjects.find((item) => item.id === activeId) ?? subProjects[0],
    [activeId, subProjects],
  );

  if (!activeSubProject) {
    return null;
  }

  return (
    <div className="space-y-8">
      <Reveal>
        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_12px_36px_rgba(67,83,106,0.04)] sm:p-8">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Sub Projects
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                子项目切换
              </h2>
              <p className="text-base leading-8 text-[var(--muted-foreground)]">
                这段经历下包含多个相关方向，点击下面的切换器，可以查看不同子项目的说明、素材预留和内容区块。
              </p>
            </div>

            <div className="inline-flex flex-wrap gap-2 rounded-[1.25rem] border border-[var(--border)] bg-[rgba(252,254,255,0.94)] p-2 shadow-[0_4px_12px_rgba(67,83,106,0.03)]">
              {subProjects.map((subProject) => {
                const active = subProject.id === activeSubProject.id;

                return (
                  <button
                    key={subProject.id}
                    type="button"
                    onClick={() => setActiveId(subProject.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-250 ${
                      active
                        ? "paper-chip border border-[var(--border)] text-[var(--foreground)]"
                        : "text-[rgba(36,49,63,0.76)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {subProject.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      <div
        key={activeSubProject.id}
        className="subproject-content-enter space-y-8"
      >
        <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_12px_36px_rgba(67,83,106,0.04)] sm:p-8">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                {activeSubProject.label}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {activeSubProject.title}
              </h2>
              <p className="text-base leading-8 text-[var(--muted-foreground)]">
                {activeSubProject.summary}
              </p>
            </div>

            {activeSubProject.highlights.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-3">
                {activeSubProject.highlights.map((highlight) => (
                  <div
                    key={`${activeSubProject.id}-${highlight.title}`}
                    className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] px-5 py-5"
                  >
                    <p className="text-base font-medium text-[var(--foreground)]">
                      {highlight.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {activeSubProject.images.length > 0 ? (
          <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_12px_36px_rgba(67,83,106,0.04)] sm:p-8">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  Visual Preview
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  子项目素材预览
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {activeSubProject.images.map((image) => (
                  <div
                    key={`${activeSubProject.id}-${image.src}`}
                    className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.78)] p-4"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="h-auto w-full rounded-[1.25rem] border border-[var(--border)]"
                    />
                    {image.caption ? (
                      <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                        {image.caption}
                      </p>
                    ) : null}
                    {image.type ? (
                      <div className="mt-3">
                        <Tag label={image.type} />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {activeSubProject.blocks.map((block) => (
          <ProjectBlockRenderer key={`${activeSubProject.id}-${block.id}`} block={block} />
        ))}
      </div>
    </div>
  );
}
