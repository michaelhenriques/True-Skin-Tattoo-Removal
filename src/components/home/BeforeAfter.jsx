import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-[1160px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal className="flex flex-col gap-5">
          <span className="text-[13px] font-bold tracking-[0.2em] text-primary">BEFORE & AFTER RESULTS</span>
          <h2 className="m-0 text-3xl sm:text-[38px] font-extrabold tracking-[-0.015em]">Real results, session by session</h2>
          <p className="m-0 text-[17px] text-muted-foreground leading-[1.65]">
            Real results with True Skin's advanced laser technology. Every tattoo is different, but the direction is always the same: lighter, cleaner, closer to gone. Individual results vary.
          </p>
          <Link
            to="/contact"
            className="no-underline w-fit bg-primary text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-primary-dark transition-colors"
          >
            Start your removal
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="flex gap-2 flex-nowrap overflow-x-auto">
            {siteConfig.results.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`flex-shrink-0 px-3.5 py-2.5 rounded-full text-[13.5px] font-bold border-[1.5px] transition-colors ${
                  activeCase === i
                    ? 'border-primary bg-secondary text-primary-dark'
                    : 'border-border bg-white text-foreground hover:border-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative rounded-[20px] overflow-hidden border border-border shadow-[0_20px_48px_-20px_rgba(13,35,48,0.3)] bg-secondary">
            <img
              src={siteConfig.results[activeCase].image}
              alt={`Before and after tattoo removal — ${siteConfig.results[activeCase].label}`}
              className="w-full h-auto block"
            />
            <span className="absolute bottom-3.5 left-3.5 bg-[rgba(13,35,48,0.75)] text-white text-xs font-bold tracking-[0.12em] px-3 py-1.5 rounded-full pointer-events-none">
              {siteConfig.results[activeCase].label.toUpperCase()}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}