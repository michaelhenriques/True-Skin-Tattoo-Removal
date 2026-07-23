import Reveal from '@/components/Reveal';

const PROCESS_IMG = 'https://trueskintattooremoval.com/assets/process-infographic-DtPw8tRr.jpg';
const FADING_IMG = 'https://trueskintattooremoval.com/assets/fading-progression-CiXbTDFs.jpg';

export default function ProcessBreakdown() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 py-24 flex flex-col gap-16">
      <Reveal className="flex flex-col gap-3 items-center text-center max-w-[640px] mx-auto">
        <span className="text-[13px] font-bold tracking-[0.2em] text-primary">THE PROCESS</span>
        <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">The tattoo removal process</h2>
        <p className="m-0 text-[17px] text-muted-foreground leading-[1.6]">
          Multiple sessions of laser treatment gradually break down ink until your skin is clear.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="flex flex-col gap-5">
          <p className="m-0 text-[16px] leading-[1.7] text-foreground/80">
            During each session, our laser delivers ultra-short pulses of light energy that penetrate the skin and
            shatter ink particles into tiny fragments. Your body's immune system then naturally flushes these
            particles away over the following weeks.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-foreground/80">
            With each session, the tattoo fades progressively until the ink is fully cleared.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            {['Ultra-short pulses', 'Ink shattered to fragments', 'Immune system clears ink', 'Progressive fading'].map((t) => (
              <span key={t} className="text-[13px] font-semibold bg-secondary text-primary-dark px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl overflow-hidden border border-border shadow-[0_18px_44px_-22px_rgba(13,35,48,0.4)]">
          <img src={PROCESS_IMG} alt="5-step laser tattoo removal process infographic" className="w-full h-auto block" loading="lazy" />
        </Reveal>
      </div>

      <Reveal className="flex flex-col gap-4 items-center text-center">
        <div className="w-full max-w-[920px] rounded-2xl overflow-hidden border border-border shadow-[0_18px_44px_-22px_rgba(13,35,48,0.4)]">
          <img src={FADING_IMG} alt="Tattoo fading progression over multiple laser removal sessions" className="w-full h-auto block" loading="lazy" />
        </div>
        <p className="m-0 text-[14px] text-muted-foreground max-w-[560px]">
          Gradual fading over multiple sessions — results vary by tattoo size, ink color, and skin type.
        </p>
      </Reveal>
    </section>
  );
}