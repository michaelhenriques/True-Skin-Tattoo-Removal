import { Clock, CalendarClock, Activity, Snowflake, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const SESSION_IMG = 'https://trueskintattooremoval.com/assets/how-it-works-hero-HMOBCWyn.jpg';

const points = [
  { icon: Clock, title: '15–30 minutes', desc: 'Treatment sessions typically last 15–30 minutes depending on tattoo size.' },
  { icon: CalendarClock, title: '6–10 sessions', desc: 'Most tattoos require 6–10 sessions for full removal, spaced 6–8 weeks apart for optimal healing.' },
  { icon: Activity, title: 'No downtime', desc: 'You can return to normal activities immediately after treatment.' },
  { icon: Snowflake, title: 'Zimmer Cryo cooling', desc: 'Our cooling system keeps you comfortable throughout every session.' },
];

export default function SessionExpect() {
  return (
    <section className="bg-secondary/40">
      <div className="max-w-[1160px] mx-auto px-6 py-24 flex flex-col gap-14">
        <Reveal className="flex flex-col gap-3 items-center text-center max-w-[640px] mx-auto">
          <span className="text-[13px] font-bold tracking-[0.2em] text-primary">YOUR APPOINTMENT</span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">What to expect during your session</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="rounded-2xl overflow-hidden border border-border shadow-[0_18px_44px_-22px_rgba(13,35,48,0.4)]">
            <img src={SESSION_IMG} alt="Technician performing laser tattoo removal on a client's forearm" className="w-full h-auto block" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="m-0 text-[16px] font-extrabold">{p.title}</h3>
                    <p className="m-0 text-[13.5px] leading-[1.55] text-muted-foreground">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="flex flex-col items-center gap-5 text-center">
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="no-underline bg-primary text-white text-base font-bold px-8 py-4 rounded-full hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
            >
              Book Your Free Consultation
            </a>
            <a
              href="/contact"
              className="no-underline bg-white border-[1.5px] border-primary text-primary-dark text-base font-bold px-8 py-4 rounded-full hover:bg-secondary transition-colors"
            >
              Get My Free Quote
            </a>
          </div>
          <p className="m-0 text-[14px] text-muted-foreground">
            Have more questions about the process?{' '}
            <a href="https://trueskintattooremoval.com/blog" target="_blank" rel="noreferrer" className="text-primary font-bold no-underline inline-flex items-center gap-1 hover:underline">
              Browse Articles <ArrowRight size={14} />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}