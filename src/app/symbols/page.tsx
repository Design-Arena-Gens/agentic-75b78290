const icons = [
  {
    name: "Cap Twist",
    description: "Primary motion icon used on packaging to signal twist direction.",
    glyph: "↺"
  },
  {
    name: "Flavor Burst",
    description: "Cluster of droplets representing flavor infusion.",
    glyph: "✶"
  },
  {
    name: "Spark Lift",
    description: "Three ascending bubbles used in social stickers and motion graphics.",
    glyph: "⋰"
  }
];

export default function SymbolsPage() {
  return (
    <main className="min-h-screen bg-base px-6 py-16 text-charcoal sm:px-12">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="rounded-4xl border border-charcoal/10 bg-white/80 p-10 shadow-brand">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Asset Library</p>
          <h1 className="mt-4 font-display text-4xl text-charcoal">Icon & Symbol Set</h1>
          <p className="mt-4 max-w-2xl text-sm text-charcoal/70">
            Simple, rounded, kinetic. Each icon echoes the twist narrative while staying flexible for print, digital, and motion uses. Keep stroke weights at 3px equivalent when exporting SVGs.
          </p>
        </header>
        <section className="grid gap-6 md:grid-cols-3">
          {icons.map(icon => (
            <div key={icon.name} className="flex flex-col items-center gap-4 rounded-3xl border border-charcoal/10 bg-white/80 p-8 text-center shadow-brand">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-charcoal/10 bg-mint/30 text-5xl text-charcoal/90">
                {icon.glyph}
              </div>
              <div>
                <h2 className="font-semibold text-charcoal">{icon.name}</h2>
                <p className="mt-2 text-sm text-charcoal/70">{icon.description}</p>
              </div>
              <button className="rounded-full border border-charcoal/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-charcoal/70 transition hover:border-charcoal hover:text-charcoal">
                Download SVG
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
