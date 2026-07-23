import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const clinicImg = 'https://media.base44.com/images/public/6a5a70013ad5cedd9626d000/cdb1018fd_Screenshot2026-07-22at104813PM.png';

const pillars = [
  { icon: ShieldCheck, title: 'Medical-grade safety', text: 'Licensed medical supervision on every treatment.' },
  { icon: Sparkles, title: 'Full-spectrum results', text: 'Astanza Trinity laser treats every ink color.' },
  { icon: HeartHandshake, title: 'Judgment-free care', text: 'Honest guidance, zero pressure, all the way.' },
];

const stats = [
  { value: '6–10', label: 'Typical sessions' },
  { value: '3', label: 'Laser wavelengths' },
  { value: '100%', label: 'By appointment' },
  { value: 'Free', label: 'Your consultation' },
];

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-surface text-white">
        <div className="absolute inset-0">
          <img src={clinicImg} alt="True Skin Tattoo Removal treatment room" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(8,28,38,0.92)] via-[rgba(8,28,38,0.85)] to-[rgba(8,28,38,0.65)]" />
        </div>
        <div className="relative max-w-[1160px] mx-auto px-6 py-24 lg:py-32 flex flex-col gap-6 max-w-[820px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.22em] text-accent">
              <span className="w-8 h-px bg-accent" /> ABOUT US
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="m-0 text-4xl sm:text-[52px] lg:text-[58px] font-black tracking-[-0.025em] leading-[1.04]">
              Reveal your true skin at <span className="text-accent">True Skin</span> Tattoo Removal
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0 text-[18px] lg:text-[19px] text-[#cfe0e8] leading-[1.7] max-w-[640px]">
              A specialized laser tattoo removal clinic in Buford, Georgia — built entirely around one focused service:
              the safe, effective, and comfortable removal and fading of unwanted tattoos.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                to="/contact"
                className="no-underline inline-flex items-center gap-2 bg-white text-primary-dark text-base font-extrabold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/before-after"
                className="no-underline inline-flex items-center gap-2 border border-white/40 text-white text-base font-bold px-7 py-3.5 rounded-full hover:border-white hover:bg-white/5 transition-colors"
              >
                See Results
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary">
        <div className="max-w-[1160px] mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center text-white">
                <span className="text-3xl lg:text-4xl font-black tracking-[-0.02em]">{s.value}</span>
                <span className="mt-1 text-[12.5px] font-semibold tracking-[0.12em] uppercase text-[#d7ecf3]">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="max-w-[860px] mx-auto px-6 pt-20 pb-12 flex flex-col gap-7">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <MapPin size={18} />
            </span>
            <span className="text-[15px] font-extrabold text-foreground tracking-[-0.005em]">Buford, GA · Serving North Georgia</span>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="flex flex-col gap-6">
          <p className="m-0 text-[18px] text-foreground leading-[1.75]">
            True Skin Tattoo Removal is a specialized laser tattoo removal clinic located in Buford, Georgia, serving
            clients across North Georgia and the greater Lake Lanier region. Our practice is built entirely around a
            single, focused service — the safe, effective, and comfortable removal and fading of unwanted tattoos — so
            every detail of the experience, from the technology we use to the way we care for your skin, is tuned to
            deliver the best possible outcome.
          </p>
          <p className="m-0 text-[17px] text-muted-foreground leading-[1.75]">
            We built this app for anyone considering tattoo removal or fading for a cover-up: people who want honest
            answers about what is achievable, clear pricing without pressure, and a treatment plan tailored to their
            ink, skin tone, and goals. The app helps you learn how laser removal works, browse real before-and-after
            results, understand pre- and post-treatment care, review transparent pricing, and request a free,
            no-obligation quote in minutes — all before you ever set foot in the clinic.
          </p>
          <p className="m-0 text-[17px] text-muted-foreground leading-[1.75]">
            True Skin Tattoo Removal is operated by trained practitioners working under licensed medical supervision,
            using full-spectrum Astanza Trinity laser technology calibrated to treat every ink color on every skin tone.
            From your first consultation through your final session, our team is committed to professional, judgment-free
            care that helps you feel confident at every step of the journey.
          </p>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="max-w-[1160px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group h-full bg-white rounded-2xl border border-border p-7 flex flex-col gap-3 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(13,35,48,0.35)] transition-all">
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center">
                  <p.icon size={20} />
                </span>
                <h3 className="m-0 text-[17px] font-extrabold tracking-[-0.01em]">{p.title}</h3>
                <p className="m-0 text-[14.5px] text-muted-foreground leading-[1.6]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark rounded-[28px] p-12 lg:p-14 flex flex-col gap-4 items-center text-center">
            <div className="pointer-events-none absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
            <h2 className="relative m-0 text-3xl sm:text-[34px] font-black tracking-[-0.02em] text-white">Ready to reveal your true skin?</h2>
            <p className="relative m-0 text-[17px] text-[#d7ecf3] leading-[1.6] max-w-[520px]">
              Get a free, personalized quote and an honest assessment of what your treatment plan could look like.
            </p>
            <Link
              to="/contact"
              className="relative no-underline inline-flex items-center gap-2 bg-white text-primary-dark text-base font-extrabold px-8 py-4 rounded-full hover:-translate-y-0.5 transition-transform"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}