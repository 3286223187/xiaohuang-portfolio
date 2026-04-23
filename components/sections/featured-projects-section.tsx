import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { siteData } from "@/data/site-data";

export function FeaturedProjectsSection() {
  const { featuredProjects } = siteData;

  return (
    <section id="featured-projects" className="bg-[var(--background)]">
      <Container className="section-stage py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <SectionHeader
              eyebrow={featuredProjects.eyebrow}
              title={featuredProjects.title}
              description={featuredProjects.description}
            />
            <div className="paper-chip rounded-[1.5rem] border border-[var(--border)] px-5 py-5">
              <p className="hand-note text-sm text-[var(--accent)]">Curated Selection</p>
              <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                这一组项目不是简单罗列经历，而是用于展示我如何处理表达、判断、推进与结果承接。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.items.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              scroll={false}
              className="group block rounded-[2rem] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(242,247,252,0.86))] p-6 shadow-[0_12px_32px_rgba(67,83,106,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-white hover:shadow-[0_24px_60px_rgba(67,83,106,0.12)]"
            >
              <article className="space-y-6">
                <div className="collage-frame overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(230,238,248,0.92),rgba(251,253,255,0.9))]">
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    width={960}
                    height={720}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[var(--muted-foreground)]">{project.category}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="text-base leading-8 text-[var(--muted-foreground)]">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <span className="text-sm text-[var(--muted-foreground)] transition-transform duration-200 group-hover:translate-x-0.5">
                    查看详情
                  </span>
                </div>
              </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
