import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

export default function BeforeAfterCTA() {
  return (
    <section className="bg-background">
      <div className="max-w-[1160px] mx-auto px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white p-10 sm:p-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col gap-5 max-w-[560px]">
            <h2 className="m-0 text-3xl sm:text-[36px] font-black tracking-[-0.02em]">Ready to start your own journey?</h2>
            <p className="m-0 text-[17px] leading-[1.6] text-white/90">
              Schedule your free consultation and we'll assess your tattoo, walk you through what to expect, and build a
              personalized treatment plan.
            </p>
            <div className="flex gap-3 flex-wrap mt-1">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline bg-white text-primary-dark text-base font-bold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
              >
                Book Your Free Consultation
              </a>
              <Link
                to="/contact"
                className="no-underline bg-[rgba(255,255,255,0.12)] border-[1.5px] border-white/70 text-white text-base font-bold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors"
              >
                Get My Free Quote
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}