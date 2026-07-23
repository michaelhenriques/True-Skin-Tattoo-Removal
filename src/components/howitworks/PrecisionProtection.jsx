import { Waves, Gauge, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';

const features = [
  {
    icon: Waves,
    title: 'Photo-Acoustic Precision',
    desc: 'Ultra-short pulses create a pressure-based "vibrational" effect, breaking ink into microscopic particles using acoustic energy rather than excessive heat — protecting surrounding tissue and supporting smoother healing.',
  },
  {
    icon: Gauge,
    title: 'Fewer Sessions, Smarter Treatments',
    desc: 'Because we can target multiple colors during the same visit, many clients may require fewer sessions depending on tattoo characteristics — more efficient fading compared to single-wavelength systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe for a Wide Range of Skin Tones',
    desc: 'Our system is highly adjustable, allowing safe and effective treatments across a broad spectrum of skin types when performed by trained professionals.',
  },
];

export default function PrecisionProtection() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 py-24 flex flex-col gap-14">
      <Reveal className="flex flex-col gap-3 items-center text-center max-w-[640px] mx-auto">
        <span className="text-[13px] font-bold tracking-[0.2em] text-primary">ENGINEERED FOR CARE</span>
        <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">Precision. Power. Protection.</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title} delay={i * 0.08} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:shadow-[0_18px_44px_-22px_rgba(13,35,48,0.28)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <Icon size={24} />
              </div>
              <h3 className="m-0 text-[20px] font-extrabold tracking-[-0.01em]">{f.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.6] text-muted-foreground">{f.desc}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}