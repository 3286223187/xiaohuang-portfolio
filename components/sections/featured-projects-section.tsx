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
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-black">
              {featuredProjects.eyebrow}
            </p>
            <h2 className="mt-2 text-center text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {featuredProjects.title}
            </h2>
            <p className="mt-4 max-w-2xl text-center text-xs font-bold leading-relaxed text-black">
              {featuredProjects.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.items.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              scroll={false}
              className="group block rounded-2xl border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(242,247,252,0.86))] p-4 shadow-[0_8px_24px_rgba(67,83,106,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-white hover:shadow-[0_16px_40px_rgba(67,83,106,0.1)]"
            >
              <article className="space-y-3">
                <div className="collage-frame overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(230,238,248,0.92),rgba(251,253,255,0.9))]">
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    width={480}
                    height={360}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-[var(--muted-foreground)]">{project.category}</p>
                  <h3 className="text-base font-semibold tracking-tight text-[var(--foreground)] line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
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
