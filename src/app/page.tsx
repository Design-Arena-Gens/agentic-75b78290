import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Logo", href: "#logo" },
  { label: "Color", href: "#color" },
  { label: "Typography", href: "#typography" },
  { label: "Packaging", href: "#packaging" },
  { label: "Digital", href: "#digital" },
  { label: "Imagery", href: "#imagery" }
];

const colorSwatches = [
  { name: "Off-White Fizz", hex: "#f9f7f4", usage: "Brand canvas, backgrounds" },
  { name: "Charcoal Pop", hex: "#1e1f24", usage: "Logo wordmark, headlines" },
  { name: "Mint Surge", hex: "#3ec8b3", usage: "Primary accents, gradients" },
  { name: "Tangerine Twist", hex: "#ff7a3d", usage: "Highlight accents, CTA" }
];

const typography = [
  {
    family: "TwistUp Round (Display Variant)",
    base: "Baloo 2",
    style: "Bold, stacked, round forms",
    usage: "Logo, hero statements"
  },
  {
    family: "TwistUp Sans (Utility Variant)",
    base: "Poppins",
    style: "Semi-bold, high legibility",
    usage: "Navigation, sub-heads"
  },
  {
    family: "TwistUp Sans Light",
    base: "Poppins",
    style: "Regular weight, taller x-height",
    usage: "Body copy, product facts"
  }
];

const flavorCards = [
  {
    name: "Citrus Lift",
    notes: "Orange, lime zest, sparkling clarity",
    color: "bg-gradient-to-br from-mint to-tangerine",
    copy: "A sweet-citrus spark ignites when the signature twist-cap pops, pushing a mint-cool fizz through bright orange zips."
  },
  {
    name: "Berry Surge",
    notes: "Strawberry burst, wild berry fizz",
    color: "bg-gradient-to-br from-mint/70 to-charcoal/90",
    copy: "Lush berry aromatics bloom as the twist unlocks the surge chamber, uplifting the core water with a juicy, sparkling pulse."
  },
  {
    name: "Mango Wave",
    notes: "Mango nectar, tropical chill",
    color: "bg-gradient-to-br from-base-dark to-tangerine",
    copy: "Succulent mango swirls pump upwards on release, wrapping the palate in smooth tropical waves and a clean, zesty finish."
  }
];

const brandPillars = [
  {
    label: "Release the Rush",
    detail: "The twist-cap unlocks concentrated natural flavor, dramatizing activation right in-hand."
  },
  {
    label: "Fresh to the Finish",
    detail: "Crisp base notes and minimal sugar keep the experience clean, crisp, and repeatable."
  },
  {
    label: "Playfully Premium",
    detail: "Rounded forms, disciplined palette, and glass-like gradients create shelf-ready trust."}
];

const iconGuidelines = [
  "Avoid literal fruit icons. Use motion cues or abstract droplets when needed.",
  "Maintain rounded corners at 6px radius minimum for UI badges.",
  "Use mint line art over off-white or charcoal backgrounds for contrast."
];

const photographyGuidelines = [
  "Feature condensation, micro-bubbles, and hand interaction with twist-cap mid-motion.",
  "Keep backgrounds light and airy; introduce diagonal surfaces to suggest upward energy.",
  "Balance 60% product, 20% lifestyle, 20% ingredient close-ups for campaigns."
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-base text-charcoal">
      <div className="pointer-events-none absolute inset-0 bg-fizz" aria-hidden />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-12 sm:px-12">
        <header className="sticky top-6 z-20 mb-10 rounded-full border border-charcoal/10 bg-base/80 px-6 py-3 shadow-brand backdrop-blur">
          <nav className="flex items-center justify-between gap-6 text-sm font-semibold uppercase tracking-wide">
            <div className="flex items-center gap-2 text-base font-bold">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint text-charcoal shadow-glow">
                TU
              </span>
              <span>TwistUp Brand System</span>
            </div>
            <ul className="hidden items-center gap-5 md:flex">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-mint"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#download"
              className="rounded-full bg-charcoal px-5 py-2 text-xs uppercase tracking-[0.2em] text-base transition hover:bg-mint hover:text-charcoal"
            >
              Brand Kit
            </Link>
          </nav>
        </header>

        <section id="overview" className="mb-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-charcoal/60">
              <span className="h-2 w-2 rounded-full bg-tangerine" />
              Twist-cap flavor ignition
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight text-charcoal md:text-6xl">
              TwistUp turns hydration into a flavor burst the moment you twist.
            </h1>
            <p className="max-w-xl text-lg text-charcoal/80">
              The TwistUp brand identity captures fizz-in-motion, a confident twist mechanism, and a refreshingly modern shelf presence. Clean geometry and a disciplined palette keep every asset bright, delicious, and retail-ready.
            </p>
            <div className="flex flex-wrap gap-6">
              {brandPillars.map(pillar => (
                <div key={pillar.label} className="max-w-xs rounded-3xl border border-charcoal/10 bg-white/70 p-6 shadow-brand">
                  <h3 className="font-display text-xl text-charcoal">{pillar.label}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-10 -right-4 h-32 w-32 rounded-full bg-mint/40 blur-2xl" aria-hidden />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-tangerine/30 blur-xl" aria-hidden />
            <div className="relative mt-6 flex w-full max-w-sm flex-col gap-5 rounded-4xl border border-white/30 bg-white/80 p-6 shadow-brand">
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-charcoal px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-base">Signature Bottle</span>
                <span className="text-sm text-charcoal/50">Twist-activated</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative grid h-72 w-48 place-items-center">
                  <div className="absolute inset-0 rounded-[2.5rem] border-[6px] border-base shadow-brand" />
                  <div className="absolute top-4 h-4 w-16 rounded-full bg-mint" />
                  <div className="absolute top-10 h-8 w-20 rounded-full bg-charcoal" />
                  <div className="absolute top-24 h-32 w-32 rounded-full bg-mint/60 blur-xl" aria-hidden />
                  <div className="absolute top-28 h-24 w-24 rounded-full border border-mint/80" aria-hidden />
                  <div className="relative flex h-60 w-24 flex-col items-center justify-between rounded-[1.5rem] bg-base/90 p-3 shadow-inner">
                    <div className="w-full rounded-full border border-charcoal/15 bg-white/80 p-2 text-center text-xs font-semibold text-charcoal">Twist Cap</div>
                    <div className="w-full rounded-[1.2rem] bg-gradient-to-br from-mint to-base p-4 text-center text-xs text-charcoal/70">
                      Flavor surge chamber
                    </div>
                    <div className="w-full rounded-[1.2rem] bg-white/90 p-3 text-center text-[11px] text-charcoal/60">
                      Filtered sparkling base water
                    </div>
                  </div>
                </div>
                <p className="text-sm text-charcoal/70">
                  The upward diagonal carve at the neck highlights the twisting action, while layered gradients illustrate flavor release.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="logo" className="mb-24 rounded-4xl border border-charcoal/10 bg-white/80 p-10 shadow-brand">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl text-charcoal">Logo System</h2>
              <p className="text-sm uppercase tracking-[0.4em] text-charcoal/50">Primary wordmark</p>
              <div className="relative inline-flex items-center gap-4 rounded-full bg-base px-8 py-4 shadow-glow">
                <svg
                  width="240"
                  height="80"
                  viewBox="0 0 240 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_12px_24px_rgba(30,31,36,0.18)]"
                >
                  <rect x="10" y="10" width="220" height="60" rx="30" fill="#1e1f24" />
                  <path
                    d="M50 52c-8 0-14-6-14-14s6-14 14-14c5.5 0 9.5 2.3 12.2 6.1l-6.7 4.2c-1.2-1.7-2.6-2.7-5.5-2.7-3.4 0-6.2 2.9-6.2 6.4s2.8 6.4 6.2 6.4c2.9 0 4.3-1 5.4-2.6l6.6 4.2C59.2 49.8 55.3 52 50 52z"
                    fill="#f9f7f4"
                  />
                  <path
                    d="M87 52c-8 0-13.8-5.8-13.8-14s5.8-14 13.8-14c4.2 0 7.1 1.2 9.5 3.4l-4.7 5c-1.4-1.2-3-1.8-4.9-1.8-3.6 0-6 2.6-6 7.3 0 4.8 2.4 7.4 6 7.4 1.9 0 3.4-.6 4.9-1.9l4.7 5c-2.4 2.2-5.3 3.4-9.5 3.4z"
                    fill="#f9f7f4"
                  />
                  <path
                    d="M103 24h8.1l5.2 9.5 5.1-9.5H129v28h-8V38.6l-4.7 8.2h-2.6l-4.7-8.2V52h-8V24z"
                    fill="#3ec8b3"
                  />
                  <path
                    d="M139 24h8v28h-8V24z"
                    fill="#f9f7f4"
                  />
                  <path
                    d="M153 52V24h13.3c5.5 0 8.7 3 8.7 7.3 0 3.1-1.7 5.1-4 6.1 3 1 4.7 3.3 4.7 6.6 0 4.6-3.4 8-9.3 8H153zm13.6-17c1.6 0 2.7-.9 2.7-2.4 0-1.5-1.1-2.4-2.7-2.4h-5.6V35h5.6zm.4 11c1.9 0 3-1 3-2.6 0-1.5-1.1-2.5-3-2.5h-6V46h6z"
                    fill="#f9f7f4"
                  />
                  <path
                    d="M184 24h20.3v6.2h-12.4v4.3h10.7v6h-10.7v5.3h12.8V52H184V24z"
                    fill="#ff7a3d"
                  />
                </svg>
                <div className="space-y-1 text-xs text-charcoal/70">
                  <p>Spacing: Maintain 0.75x cap height padding</p>
                  <p>Angle: The internal counters lean 8° to imply twist</p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-dashed border-charcoal/20 bg-base p-6">
                  <h3 className="font-semibold text-charcoal">Clear Space</h3>
                  <p className="mt-3 text-sm text-charcoal/70">
                    Minimum clear space equals the height of the letter "T" around the entire mark. No other elements or text should enter this perimeter.
                  </p>
                </div>
                <div className="rounded-3xl border border-dashed border-charcoal/20 bg-base p-6">
                  <h3 className="font-semibold text-charcoal">Lockups</h3>
                  <p className="mt-3 text-sm text-charcoal/70">
                    Promotional lockups may place seasonal flavor names beneath the wordmark in TwistUp Sans Medium with +60 tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 rounded-4xl bg-charcoal p-8 text-base text-base">
              <h3 className="font-display text-2xl text-base">Usage Rules</h3>
              <ul className="space-y-4 text-sm text-base/80">
                <li>Always render the primary logo on mint or off-white. Use white logo on photography with 60% opacity overlay.</li>
                <li>Do not rotate the mark. Maintain upward motion through supporting graphics instead.</li>
                <li>Shadow treatments should stay soft with 20-30px blur to emphasize buoyancy.</li>
                <li>Use the micro "TU" emblem for caps and secondary touchpoints.</li>
              </ul>
              <div className="rounded-3xl border border-base/30 bg-base/10 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-base/60">Micro Emblem</p>
                <p className="mt-2 font-display text-4xl text-base">TU</p>
                <p className="mt-2 text-sm text-base/70">
                  Micro emblem retains the tilt by aligning U baseline 4px above T baseline, nodding to the twist motion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="color" className="mb-24">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <h2 className="font-display text-4xl text-charcoal">Color System</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.4em] text-charcoal/50">
                Optimized for packaging & digital
              </p>
            </div>
            <div className="rounded-full border border-charcoal/10 bg-white/70 px-4 py-2 text-xs text-charcoal/70">
              Contrast ratios exceed 4.5:1 for type
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {colorSwatches.map(color => (
              <div key={color.name} className="rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-brand">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{color.name}</p>
                    <h3 className="mt-2 font-display text-3xl text-charcoal">{color.hex}</h3>
                  </div>
                  <div
                    className="h-20 w-20 rounded-2xl border border-charcoal/10"
                    style={{ backgroundColor: color.hex }}
                  />
                </div>
                <p className="mt-4 text-sm text-charcoal/70">{color.usage}</p>
                <div className="mt-4 inline-flex gap-3 text-xs text-charcoal/60">
                  <span>RGB: {hexToRgb(color.hex)}</span>
                  <span>CMYK: {hexToCmyk(color.hex)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="typography" className="mb-24 rounded-4xl border border-charcoal/10 bg-white/70 p-10 shadow-brand">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <h2 className="font-display text-4xl text-charcoal">Typography</h2>
              <p className="text-sm text-charcoal/70">
                Custom TwistUp typefaces are based on open-source families for versatility. Use alternate glyphs with rounded apexes to keep the voice upbeat.
              </p>
              <div className="rounded-3xl border border-dashed border-charcoal/20 bg-base p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Hero Styling</p>
                <p className="mt-4 font-display text-5xl text-charcoal">Twist. Release. Refresh.</p>
                <p className="mt-4 text-sm text-charcoal/70">
                  Maintain 120% line height for display copy, 150% for body type. Avoid all caps in body copy to preserve friendliness.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {typography.map(type => (
                <div key={type.family} className="rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-brand">
                  <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{type.family}</p>
                  <h3 className="mt-2 text-xl font-semibold text-charcoal">Base: {type.base}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{type.style}</p>
                  <p className="mt-4 text-sm text-charcoal/60">Usage: {type.usage}</p>
                  <div className="mt-5 rounded-2xl border border-charcoal/10 bg-base/80 px-4 py-3 text-2xl text-charcoal">
                    Flavor up the flow ↺
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packaging" className="mb-24">
          <div className="rounded-4xl border border-charcoal/10 bg-white/80 p-10 shadow-brand">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <h2 className="font-display text-4xl text-charcoal">Packaging System</h2>
                <p className="text-sm text-charcoal/70">
                  The twist mechanism is the hero. Packaging layouts spotlight the cap, twisting arrows, and the flavor release chamber through diagonal bands and gradients.
                </p>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-charcoal/10 bg-base p-6">
                    <h3 className="text-lg font-semibold text-charcoal">Front Panel</h3>
                    <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                      <li>Wordmark top-center at 140% width of twist-cap</li>
                      <li>Flavor badge sits on diagonal mint ribbon</li>
                      <li>"Twist to release" icon anchored near neck</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-charcoal/10 bg-base p-6">
                    <h3 className="text-lg font-semibold text-charcoal">Flavor Bands</h3>
                    <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                      <li>Use mint gradient for core line; tangerine rim for seasonal drops</li>
                      <li>Opacity overlays of 12% pattern in diagonal motion</li>
                      <li>Product facts anchored in charcoal with 70% opacity dividers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative grid gap-6 md:grid-cols-2">
                {flavorCards.map(flavor => (
                  <div key={flavor.name} className={`relative overflow-hidden rounded-3xl border border-white/40 bg-charcoal/90 p-6 text-base text-white shadow-brand ${flavor.color}`}>
                    <div className="absolute -top-16 right-6 h-32 w-32 rounded-full bg-white/20 blur-3xl" aria-hidden />
                    <p className="text-xs uppercase tracking-[0.4em]">Flavor</p>
                    <h3 className="mt-3 font-display text-3xl text-white">{flavor.name}</h3>
                    <p className="mt-2 text-sm text-white/80">{flavor.notes}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/85">{flavor.copy}</p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/85">
                      <span className="text-mint">↺</span> Twist to activate
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="digital" className="mb-24 rounded-4xl border border-charcoal/10 bg-white/70 p-10 shadow-brand">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-display text-4xl text-charcoal">Digital Toolkit</h2>
              <p className="text-sm text-charcoal/70">
                Web and social templates rely on roomy spacing, anchored CTAs, and motion cues that echo the twist mechanism.
              </p>
              <ul className="space-y-4 text-sm text-charcoal/70">
                <li><strong>CTA Buttons:</strong> Rounded 999px, mint fill, charcoal text. Hover transitions to gradient mint → tangerine.</li>
                <li><strong>UI Badges:</strong> Charcoal background, mint outline, 12px padding, track at 0.3em.</li>
                <li><strong>Motion:</strong> Use 0.6s ease-out rotations for icons to mimic twist release.</li>
              </ul>
              <div className="rounded-3xl border border-charcoal/10 bg-base p-6">
                <h3 className="text-lg font-semibold text-charcoal">Voice & Tone</h3>
                <p className="mt-3 text-sm text-charcoal/70">
                  Copywriting should invite participation: verbs like "twist", "unlock", "burst", and "lift" support the mechanical story. Keep sentences crisp and energetic.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-charcoal/10 bg-base/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Landing Module</p>
                <div className="mt-4 space-y-3">
                  <div className="h-10 rounded-full bg-charcoal/90" />
                  <div className="h-24 rounded-3xl bg-mint/70" />
                  <div className="h-12 rounded-2xl bg-charcoal/10" />
                  <div className="h-12 w-32 rounded-full bg-tangerine" />
                </div>
                <p className="mt-4 text-xs text-charcoal/60">
                  Layouts emphasize a hero twist graphic, central CTA, and supporting product stories in two-column grids.
                </p>
              </div>
              <div className="rounded-3xl border border-charcoal/10 bg-base/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Social Story</p>
                <div className="mt-4 flex h-64 items-center justify-center rounded-3xl bg-gradient-to-br from-mint to-base">
                  <p className="font-display text-3xl text-charcoal">Twist • Burst • Sip</p>
                </div>
                <p className="mt-4 text-xs text-charcoal/60">
                  Use bold display type stacked vertically with motion lines. Keep logo anchored top-left with 24px safe margin.
                </p>
              </div>
              <div className="rounded-3xl border border-charcoal/10 bg-base/80 p-6 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Email Header</p>
                <div className="mt-4 flex h-36 items-center justify-between rounded-3xl bg-charcoal px-6">
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.3em] text-mint">TwistUp Insider</p>
                    <p className="font-display text-3xl text-base">Unlock flavor on demand</p>
                  </div>
                  <div className="h-14 w-14 rounded-full border-2 border-mint/70 text-center text-3xl text-base">
                    ↺
                  </div>
                </div>
                <p className="mt-4 text-xs text-charcoal/60">
                  Email modules keep copy under 45 characters per line with generous padding.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="imagery" className="mb-24 rounded-4xl border border-charcoal/10 bg-white/80 p-10 shadow-brand">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-4xl text-charcoal">Imagery & Iconography</h2>
              <p className="mt-4 text-sm text-charcoal/70">
                Visuals focus on the twist motion, sparkling effervescence, and ingredient freshness while retaining polish.
              </p>
              <div className="mt-6 space-y-4">
                {photographyGuidelines.map(rule => (
                  <div key={rule} className="rounded-3xl border border-charcoal/10 bg-base/80 px-4 py-3 text-sm text-charcoal/70">
                    {rule}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-charcoal/10 bg-base p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Icon Style</p>
                <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                  {iconGuidelines.map(guideline => (
                    <li key={guideline}>{guideline}</li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex h-32 items-center justify-center rounded-3xl border border-mint/40 bg-mint/20 text-4xl text-charcoal">
                  ↺
                </div>
                <div className="flex h-32 flex-col items-center justify-center gap-2 rounded-3xl border border-tangerine/40 bg-tangerine/20">
                  <div className="h-10 w-10 rounded-full border-2 border-charcoal/20" />
                  <div className="h-10 w-10 rounded-full border-2 border-charcoal/40" />
                  <div className="text-xs text-charcoal">Motion ripples</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="rounded-4xl border border-charcoal/10 bg-charcoal p-10 text-base shadow-brand">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl text-base">Download Kit</h2>
              <p className="text-sm text-base/80">
                Access ready-to-print assets, social templates, and packaging dielines in one download. Includes CMYK and RGB versions of the logo, typography licenses, and 3D bottle renders.
              </p>
              <button className="group inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal transition hover:bg-base">
                <span>Download Brand Assets</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
              </button>
            </div>
            <div className="rounded-3xl border border-base/20 bg-base/10 p-6 text-sm text-base/80">
              <p className="text-xs uppercase tracking-[0.3em] text-base/50">File Inventory</p>
              <ul className="mt-3 space-y-2">
                <li>TwistUp-Wordmark_RGB.svg</li>
                <li>TwistUp-Wordmark_CMYK.eps</li>
                <li>Flavor-Band-Textures.ai</li>
                <li>TwistUp-Packaging-Template.pdf</li>
                <li>Social-Story-Kit.fig</li>
              </ul>
              <p className="mt-4 text-xs text-base/60">
                Assets stored in organized folders: /Logo, /Packaging, /Campaign, /Social.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function hexToRgb(hex: string) {
  const result = hex.replace("#", "");
  const bigint = parseInt(result, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

function hexToCmyk(hex: string) {
  const result = hex.replace("#", "");
  const bigint = parseInt(result, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const rFloat = r / 255;
  const gFloat = g / 255;
  const bFloat = b / 255;
  const k = 1 - Math.max(rFloat, gFloat, bFloat);
  if (k === 1) {
    return "0, 0, 0, 100";
  }
  const c = ((1 - rFloat - k) / (1 - k)) * 100;
  const m = ((1 - gFloat - k) / (1 - k)) * 100;
  const y = ((1 - bFloat - k) / (1 - k)) * 100;
  return `${c.toFixed(0)}, ${m.toFixed(0)}, ${y.toFixed(0)}, ${(k * 100).toFixed(0)}`;
}
