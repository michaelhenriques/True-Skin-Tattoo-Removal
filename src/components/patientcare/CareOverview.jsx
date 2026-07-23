import { Link } from 'react-router-dom';
import { CalendarCheck, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const cards = [
  {
    path: '/patient-care/pre-care',
    icon: CalendarCheck,
    tag: 'BEFORE YOUR SESSION',
    title: 'Pre-Care Instructions',
    desc: 'Prepare your skin and set yourself up for the most effective treatment possible.',
    accent: 'from-sky-500 via-cyan-400 to-teal-300',
    glow: 'hover:shadow-[0_18px_50px_-18px_rgba(14,165,233,0.65)]',
    tint: 'from-sky-50 via-cyan-50/40 to-transparent',
    ring: 'group-hover:border-sky-300',
    chip: 'bg-sky-100 text-sky-700',
  },
  {
    path: '/patient-care/post-care',
    icon: HeartPulse,
    tag: 'AFTER YOUR SESSION',
    title: 'Post-Care Instructions',
    desc: 'Proper aftercare is essential to safe healing and faster ink clearance between sessions.',
    accent: 'from-rose-500 via-orange-400 to-amber-300',
    glow: 'hover:shadow-[0_18px_50px_-18px_rgba(244,63,94,0.6)]',
    tint: 'from-rose-50 via-orange-50/40 to-transparent',
    ring: 'group-hover:border-rose-300',
    chip: 'bg-rose-100 text-rose-700',
  },
  {
    path: '/patient-care/tallow-balm',
    icon: Sparkles,
    tag: 'OUR AFTERCARE PRODUCT',
    title: 'Bonsai Health Honey Tallow Balm',
    desc: "We trust Bonsai Health Honey Tallow Balm to support your skin's recovery after every session.",
    accent: 'from-emerald-500 via-lime-400 to-yellow-300',
    glow: 'hover:shadow-[0_18px_50px_-18px_rgba(16,185,129,0.6)]',
    tint: 'from-emerald-50 via-lime-50/40 to-transparent',
    ring: 'group-hover:border-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700',
  },
];

export default function CareOverview() {
  return (
    <section className="relative bg-gradient-to-b from-background via-background to-secondary/40 overflow-hidden">
      {/* ambient color blobs */}
      <div className="pointer-events-none absolute -top-20 -left-24 w-96 h-96 rounded-full bg-sky-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 w-96 h-96 rounded-full bg-emerald-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-rose-300/20 blur-[120px]" />

      <div className="relative max-w-[1160px] mx-auto px-6 py-20 flex flex-col gap-12">
        <Reveal className="flex flex-col gap-3 max-w-[680px]">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-primary w-fit">
            <span className="w-7 h-px bg-primary" />
            YOUR CARE, IN THREE STEPS
          </span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em] leading-[1.05]">
            Before, after &{' '}
            <span className="text-primary">
              everything between
            </span>
          </h2>
          <p className="m-0 text-[16px] leading-[1.6] text-muted-foreground max-w-[560px]">
            Tap a guide below for everything you need to heal confidently and get your best results.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.path} delay={i * 0.08}>
                <Link
                  to={c.path}
                  className={`group relative block no-underline h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 ${c.glow} ${c.ring}`}
                >
                  {/* gradient tint wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.tint} opacity-70`} />
                  <div className="relative p-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-white shadow-lg`}>
                        <Icon size={26} />
                      </div>
                      <span className={`text-[10.5px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full ${c.chip}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[12px] font-bold tracking-[0.14em] text-muted-foreground">{c.tag}</span>
                    <h3 className="m-0 text-[21px] font-extrabold tracking-[-0.01em] text-foreground leading-tight">{c.title}</h3>
                    <p className="m-0 text-[15px] leading-[1.6] text-muted-foreground">{c.desc}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-primary text-[14px] font-bold group-hover:gap-2.5 transition-all">
                      View guide <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}