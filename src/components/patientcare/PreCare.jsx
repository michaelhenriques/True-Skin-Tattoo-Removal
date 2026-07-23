import { Sun, Scissors, Droplets, Utensils, Ban, ShieldAlert, Cigarette } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const weekBefore = [
  { icon: Sun, title: 'Stay out of the sun', text: 'Avoid direct sun exposure and tanning beds on the treatment area for at least 1 week prior. Tanned or sunburned skin cannot be safely treated and will require rescheduling.' },
  { icon: Ban, title: 'Skip the self-tanner', text: 'Spray tans and self-tanning lotions must be fully faded before your session.' },
  { icon: Scissors, title: "Don't wax or use hair removal creams", text: 'On the treatment area for at least 1 week prior.' },
  { icon: Ban, title: 'Avoid retinoids and exfoliants', text: 'Retin-A, tretinoin, glycolic acid, etc. on the treatment area for 1 week before your appointment.' },
  { icon: Droplets, title: 'Stay hydrated', text: 'Well-hydrated skin responds better to laser treatment. Drink plenty of water in the days leading up to your session.' },
];

const dayOf = [
  { icon: ShieldAlert, title: 'Come with clean skin', text: 'Arrive with the treatment area free of lotions, sunscreen, makeup, or any topical products.' },
  { icon: Scissors, title: 'Shave the area', text: 'If there is hair over the tattoo, do this the day before or morning of your appointment. Note: if coming in for permanent eyebrow makeup removal, do not shave your eyebrows.' },
  { icon: Utensils, title: 'Wear comfortable, loose clothing', text: 'That gives easy access to the tattoo without a lot of adjusting.' },
  { icon: Utensils, title: 'Eat beforehand', text: "Don't come on an empty stomach — blood sugar stability helps with comfort during treatment." },
  { icon: Ban, title: 'Skip the numbing cream unless prescribed', text: 'Do not apply over-the-counter numbing creams unless we have specifically discussed and approved this with you.' },
];

const reschedule = [
  'The treatment area is actively tanned, sunburned, or has a fresh spray tan',
  'You have an open wound, active infection, cold sore, or rash near or on the tattoo',
  'You are currently taking Accutane or have taken it within the past 6 months',
  'The skin shows signs of recent trauma (bruising, irritation, or broken skin)',
  'You are pregnant or breastfeeding',
  'You have had a cosmetic injection (Botox, filler) near the treatment area within 2 weeks',
];

export default function PreCare() {
  return (
    <section id="pre-care" className="bg-background scroll-mt-[90px]">
      <div className="max-w-[1160px] mx-auto px-6 py-20 flex flex-col gap-12">
        <Reveal className="flex flex-col gap-3 max-w-[640px]">
          <span className="text-[13px] font-bold tracking-[0.2em] text-sky-600">BEFORE YOUR SESSION</span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">Before your session</h2>
          <p className="m-0 text-[17px] leading-[1.6] text-muted-foreground">
            A little preparation goes a long way. Follow these guidelines to protect your skin, maximize your results,
            and keep your appointment on schedule.
          </p>
        </Reveal>

        {/* Week before */}
        <Reveal className="flex flex-col gap-5">
          <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.01em]">The week before</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {weekBefore.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-white border border-border rounded-2xl p-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="m-0 text-[16px] font-extrabold">{item.title}</h4>
                    <p className="m-0 text-[14.5px] leading-[1.55] text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Day of */}
        <Reveal delay={0.05} className="flex flex-col gap-5">
          <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.01em]">The day of</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {dayOf.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-white border border-border rounded-2xl p-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="m-0 text-[16px] font-extrabold">{item.title}</h4>
                    <p className="m-0 text-[14.5px] leading-[1.55] text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Reschedule */}
        <Reveal delay={0.05} className="rounded-2xl border border-amber-200 bg-amber-50 p-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-amber-600" size={22} />
            <h3 className="m-0 text-[18px] font-extrabold text-amber-900">Your appointment may need to be rescheduled if…</h3>
          </div>
          <ul className="m-0 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 list-none p-0">
            {reschedule.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-amber-900">
                <span className="text-amber-500 font-extrabold mt-0.5">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 text-[14.5px] leading-[1.55] text-amber-800">
            If any of these apply, please contact us before your appointment so we can reschedule without a fee. We want
            every session to be safe and effective.
          </p>
        </Reveal>

        {/* Nicotine note */}
        <Reveal delay={0.05} className="flex gap-4 bg-dark-surface text-white rounded-2xl p-7">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
            <Cigarette size={22} className="text-accent" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="m-0 text-[17px] font-extrabold">A note on nicotine</h4>
            <p className="m-0 text-[14.5px] leading-[1.6] text-dark-muted">
              If you smoke, vape, or use any nicotine products, please know that nicotine constricts blood vessels and
              significantly slows your body's ability to clear fragmented ink between sessions. Reducing or eliminating
              nicotine use during your removal journey will meaningfully improve your results.
            </p>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-1">
          <p className="m-0 text-[15px] font-semibold text-foreground">Questions before your appointment? We're happy to help.</p>
          <div className="flex gap-4 flex-wrap text-[15px] font-bold">
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary no-underline hover:underline">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="text-primary no-underline hover:underline">{siteConfig.email}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}