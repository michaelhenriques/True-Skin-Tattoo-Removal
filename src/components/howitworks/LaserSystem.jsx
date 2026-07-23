import { Zap, Palette, Gem } from 'lucide-react';
import Reveal from '@/components/Reveal';

const wavelengths = [
  {
    nm: '1064 nm',
    icon: Zap,
    title: 'The Deep Target',
    bestFor: 'Black, Dark Blue, Deep Purple',
    swatches: ['#0a0a0a', '#0b1f3a', '#2a1b4a'],
    desc: 'Penetrates deep into the skin to safely break apart heavy black linework and shading while minimizing surface damage. The foundational wavelength for safe removal on most skin tones.',
    glow: '#38bdf8',
    bar: 'from-sky-400 to-blue-600',
  },
  {
    nm: '532 nm',
    icon: Palette,
    title: 'The Bright Specialist',
    bestFor: 'Red, Orange, Yellow',
    swatches: ['#e11d48', '#f97316', '#facc15'],
    desc: 'Warm-toned inks require a different approach. Specifically calibrated to target vibrant reds and sunset tones that traditional systems often struggle to treat effectively.',
    glow: '#fb923c',
    bar: 'from-rose-500 to-amber-400',
  },
  {
    nm: '694 nm',
    icon: Gem,
    title: 'The "Secret Weapon" — Ruby',
    bestFor: 'Green, Teal, Turquoise, Lime',
    swatches: ['#16a34a', '#14b8a6', '#84cc16'],
    desc: 'A dedicated ruby wavelength — a capability not commonly found in standard setups. If your green or blue tattoo has stalled elsewhere, this is often the missing link to continue progress.',
    glow: '#4ade80',
    bar: 'from-emerald-500 to-lime-400',
  },
];

export default function LaserSystem() {
  return (
    <section className="relative bg-dark-surface text-white overflow-hidden">
      {/* ambient color wash */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),rgba(251,146,60,0.14),rgba(74,222,128,0.14),transparent)] blur-2xl pointer-events-none" />

      <div className="relative max-w-[1160px] mx-auto px-6 py-24 flex flex-col gap-14">
        <Reveal className="flex flex-col gap-3 max-w-[660px]">
          <span className="text-[13px] font-bold tracking-[0.2em] bg-gradient-to-r from-sky-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
            FULL-SPECTRUM TECHNOLOGY
          </span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">Our full-spectrum laser system</h2>
          <p className="m-0 text-[17px] leading-[1.6] text-dark-muted">
            Many removal systems are limited to one or two wavelengths — great for black ink, less reliable for vibrant
            color. Our workstation combines three medical-grade wavelengths, letting us customize every treatment to
            your tattoo's unique ink composition.
          </p>
          <span className="text-[13px] font-bold tracking-[0.14em] text-white/70 mt-1">THREE WAVELENGTHS · FULL COLOR COVERAGE</span>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {wavelengths.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal
                key={w.nm}
                delay={i * 0.08}
                className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col gap-4 overflow-hidden hover:-translate-y-1 transition-transform"
              >
                {/* colored top bar */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${w.bar}`} />
                {/* glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ background: w.glow }}
                />
                <div className="relative flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: w.glow, boxShadow: `0 8px 24px -8px ${w.glow}` }}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-[15px] font-extrabold tracking-wide" style={{ color: w.glow }}>{w.nm}</span>
                </div>

                <h3 className="relative m-0 text-[20px] font-extrabold tracking-[-0.01em]">{w.title}</h3>

                <div className="relative flex flex-col gap-2">
                  <span className="text-[12px] font-bold tracking-[0.12em] uppercase" style={{ color: w.glow }}>
                    Best for: {w.bestFor}
                  </span>
                  <div className="flex gap-1.5">
                    {w.swatches.map((c) => (
                      <span key={c} className="w-6 h-6 rounded-full border border-white/20 shadow-inner" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                <p className="relative m-0 text-[14.5px] leading-[1.6] text-dark-muted">{w.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}