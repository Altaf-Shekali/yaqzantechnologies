/**
 * Global ambient backdrop — a single fixed layer behind all content so the space
 * between sections has depth (drifting glow, faint grid, film grain) instead of flat black.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* faint grid, fading toward the edges */}
      <div className="absolute inset-0 grid-bg opacity-[0.10] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_75%)]" />

      {/* slow-drifting glow orbs at different scroll depths */}
      <div className="absolute -top-48 -left-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-[150px] animate-drift" />
      <div className="absolute top-[35%] -right-48 h-[600px] w-[600px] rounded-full bg-[oklch(0.5_0.2_260/0.10)] blur-[160px] animate-drift-slow" />
      <div className="absolute bottom-[-10%] left-[20%] h-[520px] w-[520px] rounded-full bg-primary/[0.07] blur-[150px] animate-drift" />

      {/* film grain for tactile depth */}
      <div className="absolute inset-0 grain opacity-[0.04] mix-blend-soft-light" />
    </div>
  );
}
