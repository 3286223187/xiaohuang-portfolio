import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import type { ProjectBlock } from "@/data/site-data";

type ProjectBlockRendererProps = {
  block: ProjectBlock;
};

function BlockShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_12px_36px_rgba(67,83,106,0.04)] sm:p-8">
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              {title}
            </h2>
          ) : null}
          {children}
        </div>
      </section>
    </Reveal>
  );
}

export function ProjectBlockRenderer({ block }: ProjectBlockRendererProps) {
  switch (block.type) {
    case "intro":
    case "text":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <p className="text-base leading-8 text-[var(--muted-foreground)]">{block.body}</p>
        </BlockShell>
      );

    case "section-heading":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <p className="text-base leading-8 text-[var(--muted-foreground)]">{block.body}</p>
        </BlockShell>
      );

    case "image":
    case "comparison-placeholder":
    case "content-sample":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          {block.body ? (
            <p className="text-base leading-8 text-[var(--muted-foreground)]">{block.body}</p>
          ) : null}
          {block.image ? (
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] p-4">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1.25rem] border border-[var(--border)]"
              />
              {block.image.caption ? (
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {block.image.caption}
                </p>
              ) : null}
            </div>
          ) : null}
        </BlockShell>
      );

    case "gallery":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <div className="grid gap-4 md:grid-cols-2">
            {block.images?.map((image) => (
              <div
                key={`${block.id}-${image.src}`}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] p-4"
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
              </div>
            ))}
          </div>
        </BlockShell>
      );

    case "highlight-cards":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <div className="grid gap-4 md:grid-cols-3">
            {block.cards?.map((card) => (
              <div
                key={`${block.id}-${card.title}`}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-5 py-5"
              >
                <p className="text-base font-medium text-[var(--foreground)]">{card.title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </BlockShell>
      );

    case "outcomes":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <div className="space-y-3">
            {block.items?.map((item) => (
              <div
                key={`${block.id}-${item}`}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-5 py-4 text-base leading-8 text-[var(--muted-foreground)]"
              >
                {item}
              </div>
            ))}
          </div>
        </BlockShell>
      );

    case "quote":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <blockquote className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-6 py-6 text-lg leading-8 text-[var(--foreground)]">
            “{block.quote}”
          </blockquote>
        </BlockShell>
      );

    case "insight":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-5 py-5">
            <p className="text-base leading-8 text-[var(--foreground)]">{block.insight}</p>
          </div>
        </BlockShell>
      );

    case "process":
      return (
        <BlockShell eyebrow={block.eyebrow} title={block.title}>
          <div className="space-y-3">
            {block.steps?.map((step, index) => (
              <div
                key={`${block.id}-${step.title}`}
                className="grid gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-5 py-5 md:grid-cols-[36px_minmax(0,1fr)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-sm font-medium text-[var(--foreground)]">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BlockShell>
      );

    default:
      return null;
  }
}
