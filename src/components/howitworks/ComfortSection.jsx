import Reveal from '@/components/Reveal';

const ZIMMER_IMG = 'https://trueskintattooremoval.com/assets/zimmer-cryo-BxTF0hX7.webp';

export default function ComfortSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="rounded-2xl overflow-hidden border border-border shadow-[0_18px_44px_-22px_rgba(13,35,48,0.4)] order-2 md:order-1">
          <img src={ZIMMER_IMG} alt="Client with safety glasses during Zimmer Cryo cooling treatment" className="w-full h-auto block" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 order-1 md:order-2">
          <span className="text-[13px] font-bold tracking-[0.2em] text-primary">COMFORT FIRST</span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">Designed with your comfort in mind</h2>
          <p className="m-0 text-[16px] leading-[1.7] text-muted-foreground">
            We pair our laser with advanced skin-chilling technology that cools the area before, during, and after each
            pulse. This significantly improves comfort and helps reduce post-treatment inflammation.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-muted-foreground">
            Most clients describe the sensation as very manageable and well tolerated.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            {['Cools before, during & after', 'Reduced inflammation', 'Highly tolerable'].map((t) => (
              <span key={t} className="text-[13px] font-semibold bg-secondary text-primary-dark px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}