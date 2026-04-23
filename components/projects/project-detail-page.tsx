import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProjectBlockRenderer } from "@/components/projects/project-block-renderer";
import { ProjectSubprojectsSwitcher } from "@/components/projects/project-subprojects-switcher";
import { Tag } from "@/components/ui/tag";
import type { ProjectItem } from "@/data/site-data";

type ProjectDetailPageProps = {
  project: ProjectItem;
  mode?: "page" | "modal";
};

export function ProjectDetailPage({ project, mode = "page" }: ProjectDetailPageProps) {
  const isModal = mode === "modal";

  return (
    <main className={`flex-1 ${isModal ? "bg-transparent" : "bg-[var(--background)]"}`}>
      <section className="border-b border-[var(--border)]">
        <Container className={isModal ? "py-12 sm:py-14 lg:py-16" : "py-14 sm:py-18 lg:py-24"}>
          <div className="space-y-8">
            {!isModal ? (
              <Link
                href="/#featured-projects"
                className="inline-flex items-center text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                返回首页项目区
              </Link>
            ) : null}

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                  {project.category}
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(230,238,248,0.9),rgba(251,253,255,0.92))]">
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  width={960}
                  height={720}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className={isModal ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 lg:sticky lg:top-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">项目类型</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">
                  {project.category}
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">我的角色</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">时间</p>
                <p className="mt-2 text-base font-medium text-[var(--foreground)]">
                  {project.period}
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">关键词</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--border)] bg-[rgba(255,255,255,0.72)] px-4 py-4">
                <p className="text-sm text-[var(--muted-foreground)]">项目亮点</p>
                <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                  {project.highlight}
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_12px_36px_rgba(67,83,106,0.04)] sm:p-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  Project Background
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  项目背景与目标
                </h2>
                <p className="text-base leading-8 text-[var(--muted-foreground)]">
                  {project.overview}
                </p>
                <p className="text-base leading-8 text-[var(--muted-foreground)]">
                  {project.background}
                </p>
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-5 py-5">
                  <p className="text-sm text-[var(--muted-foreground)]">要解决的问题</p>
                  <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                    {project.goal}
                  </p>
                </div>
              </div>
            </section>

            {project.subProjects?.length ? (
              <ProjectSubprojectsSwitcher subProjects={project.subProjects} />
            ) : null}

            {project.blocks.map((block) => (
              <ProjectBlockRenderer key={block.id} block={block} />
            ))}

            {!isModal ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#featured-projects"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-colors hover:opacity-90"
                >
                  返回首页项目区
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-white/50"
                >
                  返回首页
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
