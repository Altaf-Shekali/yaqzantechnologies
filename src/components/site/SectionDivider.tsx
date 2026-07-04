/** Subtle gradient hairline that anchors the transition between sections. */
export function SectionDivider() {
  return (
    <div aria-hidden className="container mx-auto px-6">
      <div className="relative mx-auto max-w-5xl">
        <div className="h-px w-full hairline opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--brand-teal)]" />
      </div>
    </div>
  );
}
