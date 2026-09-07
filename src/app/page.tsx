export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,color-mix(in_srgb,var(--foreground)_7%,transparent),transparent)]"
      />

      <div className="seki-rise relative flex flex-col items-center text-center">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-muted">
          Coming soon
        </p>

        <h1 className="mt-6 text-6xl font-medium tracking-tight sm:text-7xl">
          Seki
        </h1>

        <div className="mt-8 h-px w-32 origin-center bg-foreground/70 seki-breathe" />

        <p className="mt-8 max-w-sm font-thai text-base leading-relaxed text-muted">
          เรากำลังเตรียมบางอย่างอยู่ กลับมาเยี่ยมชมกันเร็ว ๆ นี้
        </p>
      </div>

      <footer className="absolute inset-x-0 bottom-8 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        © {new Date().getFullYear()} Seki
      </footer>
    </main>
  );
}
