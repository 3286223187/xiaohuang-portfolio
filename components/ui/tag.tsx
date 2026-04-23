type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="paper-chip inline-flex -rotate-[1.4deg] rounded-[999px] border border-[rgba(54,70,92,0.09)] px-3.5 py-1.5 text-xs font-medium tracking-[0.02em] text-[var(--muted-foreground)] transition-all duration-200 hover:rotate-0 hover:border-[rgba(82,106,138,0.22)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]">
      {label}
    </span>
  );
}
