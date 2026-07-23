import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';
import { Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-dark-surface text-white">
      <div className="max-w-[1160px] mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
        <Reveal className="flex flex-col gap-3 items-center">
          <h2 className="m-0 text-3xl sm:text-[44px] font-black tracking-[-0.02em]">Reveal your true skin.</h2>
          <p className="m-0 text-[17px] text-dark-muted max-w-[520px]">
            Schedule your free consultation today — or get a free quote in minutes.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="flex gap-3 flex-wrap justify-center">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="no-underline bg-white text-primary-dark text-base font-bold px-8 py-4 rounded-full hover:-translate-y-0.5 transition-all"
          >
            Schedule Your Free Consultation
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="no-underline bg-transparent border-[1.5px] border-white/50 text-white text-base font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Phone size={18} /> Call Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}