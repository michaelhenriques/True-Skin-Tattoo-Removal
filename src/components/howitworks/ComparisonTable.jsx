import { Check, X } from 'lucide-react';
import Reveal from '@/components/Reveal';

const rows = [
  { ink: 'Black & Dark Blue Ink', standard: 'Highly effective', trueskin: 'Highly effective with deep-penetrating 1064nm wavelength' },
  { ink: 'Red & Orange Ink', standard: 'Limited wavelength availability', trueskin: 'Targeted 532nm wavelength for warm-toned pigments' },
  { ink: 'Green & Teal Ink', standard: 'Often requires specialized capability', trueskin: 'Dedicated 694nm ruby wavelength for green & blue pigments' },
  { ink: 'Multi-Color Tattoos', standard: 'May require extended treatment timelines', trueskin: 'Ability to address multiple ink colors during the same visit' },
  { ink: 'Skin Safety & Comfort', standard: 'Basic cooling methods', trueskin: 'Integrated advanced skin-chilling technology for enhanced comfort' },
  { ink: 'Treatment Customization', standard: 'Limited wavelength flexibility', trueskin: 'Three-wavelength system allowing customized treatment plans' },
];

export default function ComparisonTable() {
  return (
    <section className="bg-secondary/40">
      <div className="max-w-[1160px] mx-auto px-6 py-24 flex flex-col gap-12">
        <Reveal className="flex flex-col gap-3 max-w-[640px]">
          <span className="text-[13px] font-bold tracking-[0.2em] text-primary">WHY TECHNOLOGY MATTERS</span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">Not all systems treat the full spectrum of ink</h2>
          <p className="m-0 text-[16px] leading-[1.6] text-muted-foreground">
            While many removal systems are highly effective for black ink, they may have limited capability with vibrant
            or complex color combinations. Our full-spectrum system is designed to treat a broader range of pigments
            safely and precisely.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_44px_-22px_rgba(13,35,48,0.25)]">
          <div className="grid grid-cols-12 bg-primary text-white text-[13px] font-bold tracking-wide">
            <div className="col-span-12 sm:col-span-4 px-5 py-4">Feature</div>
            <div className="hidden sm:block sm:col-span-4 px-5 py-4 border-l border-white/15">Standard Systems</div>
            <div className="hidden sm:block sm:col-span-4 px-5 py-4 border-l border-white/15 bg-primary-dark">True Skin Full-Spectrum</div>
          </div>
          <div className="divide-y divide-border">
            {rows.map((r) => (
              <div key={r.ink} className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-4 px-5 py-5 font-bold text-foreground">{r.ink}</div>
                <div className="col-span-12 sm:col-span-4 px-5 py-5 border-t sm:border-t-0 sm:border-l border-border flex items-start gap-2 text-[14px] text-muted-foreground">
                  <X size={16} className="text-destructive/70 shrink-0 mt-0.5" />
                  <span>{r.standard}</span>
                </div>
                <div className="col-span-12 sm:col-span-4 px-5 py-5 border-t sm:border-t-0 sm:border-l border-border flex items-start gap-2 text-[14px] text-foreground bg-secondary/30">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{r.trueskin}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="m-0 text-[13px] text-muted-foreground italic">
            Individual results vary depending on tattoo age, ink density, color composition, skin type, and adherence to
            recommended treatment intervals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}