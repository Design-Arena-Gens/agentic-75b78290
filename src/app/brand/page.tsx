import Link from "next/link";

const documents = [
  {
    title: "Brand Narrative",
    description: "Core story that introduces TwistUp, the twist-cap innovation, and the promise of instant flavor release.",
    file: "TwistUp-Brand-Narrative.pdf"
  },
  {
    title: "Retail Toolkit",
    description: "Shelf talkers, wobblers, side-cap displays, and palette wraps with usage instructions.",
    file: "TwistUp-Retail-Kit.zip"
  },
  {
    title: "Activation Guide",
    description: "Launch event roadmap, sampling script, and motion guidelines for on-premise activations.",
    file: "TwistUp-Activation-Guide.pdf"
  },
  {
    title: "Social Playbook",
    description: "Content cadence, hashtag strategy, and story templates for high-energy product reveals.",
    file: "TwistUp-Social-Playbook.fig"
  }
];

const guidelines = [
  {
    heading: "Mission",
    copy: "Deliver a refreshing rush on demand through a playful twist ritual that consumers can see, feel, and taste."}
  ,
  {
    heading: "Personality",
    copy: "Energetic, upbeat, capable. Always a friend who ignites the moment without going over the top."}
  ,
  {
    heading: "Promise",
    copy: "A precise twist unlocks peak flavor every time – no guessing, no fading fizz."}
];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-base px-6 py-16 text-charcoal sm:px-12">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="rounded-4xl border border-charcoal/10 bg-white/80 p-10 shadow-brand">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">TwistUp Brand Desk</p>
          <h1 className="mt-4 font-display text-5xl text-charcoal">Brand Library</h1>
          <p className="mt-4 max-w-3xl text-sm text-charcoal/70">
            Download the complete TwistUp brand kit, messaging frameworks, and activation tools. Every asset layers motion, fizz, and fresh color to keep the twist story consistent from shelf to social.
          </p>
          <div className="mt-6 inline-flex gap-3 text-xs">
            <Link
              href="/"
              className="rounded-full border border-charcoal/20 px-4 py-2 uppercase tracking-[0.3em] text-charcoal/70 transition hover:border-charcoal hover:text-charcoal"
            >
              ← Back to system
            </Link>
            <button className="rounded-full bg-mint px-5 py-2 uppercase tracking-[0.3em] text-charcoal transition hover:bg-tangerine hover:text-base">
              Download All
            </button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {guidelines.map(item => (
            <div key={item.heading} className="rounded-3xl border border-charcoal/10 bg-white/70 p-8 shadow-brand">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{item.heading}</p>
              <p className="mt-4 text-sm text-charcoal/70">{item.copy}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-display text-3xl text-charcoal">Downloadables</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {documents.map(doc => (
              <div key={doc.title} className="flex flex-col justify-between rounded-3xl border border-charcoal/10 bg-white/80 p-8 shadow-brand">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Document</p>
                  <h3 className="mt-3 text-xl font-semibold text-charcoal">{doc.title}</h3>
                  <p className="mt-3 text-sm text-charcoal/70">{doc.description}</p>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-base transition hover:bg-mint hover:text-charcoal">
                  <span>Download</span>
                  <span className="text-base">↗</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
