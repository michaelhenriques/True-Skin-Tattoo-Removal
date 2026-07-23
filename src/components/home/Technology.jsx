import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const swatches = ['#1b1b1b', '#b3261e', '#1d5fbf', '#1d8b3d', '#e5a50a', '#7b2d8b'];
const benefits = [
  ['Faster clearing', 'the right wavelength per color means fewer wasted sessions.'],
  ['Skin-safe protocols', 'settings calibrated to your skin type to minimize risk.'],
  ['Comfort first', 'integrated cooling chills the area before, during, and after each pulse.'],
  ['Licensed medical oversight', 'every treatment is performed under licensed medical supervision.'],
];

export default function Technology() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
      <Reveal className="relative h-[300px] sm:h-[380px] lg:h-[420px] rounded-[24px] overflow-hidden shadow-[0_24px_60px_-20px_rgba(13,35,48,0.3)]">
        <img
          src="https://media.base44.com/images/public/6a5a70013ad5cedd9626d000/cdb1018fd_Screenshot2026-07-22at104813PM.png"
          alt="Astanza Trinity laser in the True Skin treatment room"
          className="w-full h-full object-cover"
        />
      </Reveal>

      <Reveal delay={0.1} className="flex flex-col gap-5">
        <span className="text-[13px] font-bold tracking-[0.2em] text-primary">OUR TECHNOLOGY</span>
        <h2 className="m-0 text-3xl sm:text-[38px] font-extrabold tracking-[-0.015em]">
          Full-spectrum laser. Every color. Every skin tone.
        </h2>
        <p className="m-0 text-[17px] text-muted-foreground leading-[1.65]">
          Three dedicated wavelengths — 1064nm, 532nm, and 694nm Ruby — treat every ink color effectively, not just black. From deep blacks and blues to stubborn greens, reds, and yellows, every treatment is precisely calibrated to your tattoo and skin type.
        </p>

        <div className="flex gap-2.5 flex-wrap items-center">
          {swatches.map((color, i) => (
            <span key={i} className="w-[26px] h-[26px] rounded-full border-2 border-border" style={{ backgroundColor: color }} />
          ))}
          <span className="text-sm font-semibold text-muted-foreground ml-1.5">…all treatable</span>
        </div>

        <div className="flex flex-col gap-3">
          {benefits.map(([title, text]) => (
            <div key={title} className="flex gap-3 items-start">
              <span className="text-primary font-extrabold text-base leading-[1.5]">✓</span>
              <span className="text-[15.5px] text-foreground leading-[1.6]">
                <strong>{title}</strong> — {text}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}