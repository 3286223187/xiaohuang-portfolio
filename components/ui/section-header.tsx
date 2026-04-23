type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl space-y-4 sm:space-y-5">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl sm:leading-[1.18]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
