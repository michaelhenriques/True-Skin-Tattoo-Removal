import { Snowflake, Droplet, ShieldCheck, Sun, Hand, Waves, Dumbbell, Shirt, Phone, Stethoscope } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const immediately = [
  { icon: ShieldCheck, title: 'Expect a reaction — this is normal', text: "The treated area will likely appear red, swollen, and frosted (a white/gray cast) immediately after. This is a normal laser response and typically resolves within a few hours." },
  { icon: Droplet, title: 'Apply your tallow balm', text: "We recommend Bonsai Health Honey Tallow Balm to soothe and protect the skin. Apply a thin layer to the treated area as soon as you get home." },
  { icon: Snowflake, title: 'Keep it cool', text: 'You may apply a clean cold compress to reduce redness and inflammation in the first few hours. Do not apply ice directly to skin.' },
  { icon: ShieldCheck, title: 'Keep it clean and dry', text: 'Gently cleanse the area with mild soap and water if needed. Pat dry — do not rub.' },
  { icon: Hand, title: 'Do not pop blisters', text: "Blistering can occur and is a normal part of the laser process. Leave blisters intact — they are part of your body's healing response. If a blister opens on its own, gently clean the area with a solution of 1 part white vinegar and 2 parts water using a cotton ball, apply a thin layer of tallow balm or Aquaphor, and cover with a sterile dressing. If you develop an overly large blister that has not popped on its own, contact us before attempting to treat it yourself." },
];

const firstWeek = [
  { icon: Droplet, title: 'Keep the area moisturized', text: 'Continue applying Bonsai Health Honey Tallow Balm daily until the skin has fully healed.' },
  { icon: Sun, title: 'Protect from the sun', text: 'Avoid direct sun exposure on the treated area for 3–4 days post-treatment. After that, apply SPF 50+ broad-spectrum (UVA/UVB) sunscreen over the treated area for at least 10–14 days. Keep it covered when outdoors during initial healing.' },
  { icon: Hand, title: 'No picking or scratching', text: 'Let any scabbing, flaking, or peeling resolve on its own. Picking can cause scarring and pigmentation changes.' },
  { icon: Waves, title: 'Avoid soaking the area', text: 'Showering is fine — avoid high-pressure water directly on the treated area. Avoid baths, hot tubs, pools, and lakes until all blisters and scabs have fully healed — typically 1–2 weeks.' },
  { icon: Dumbbell, title: 'Skip intense workouts', text: 'Light exercise in the first 24–48 hours is generally safe and encouraged. Avoid intense workouts during early healing, as excess heat and sweat — and muscle movement beneath the treated area — can irritate healing skin.' },
  { icon: Shirt, title: 'Loose clothing only', text: 'Avoid tight clothing or anything that rubs against the treated area while it heals.' },
  { icon: Snowflake, title: 'Itching is common', text: "Applying a cold compress 10 minutes on/off a few times a day helps most. You may also apply tallow balm, Aquaphor, vitamin E ointment, or hydrocortisone cream for relief. Let us know if itching or swelling persists more than one week after treatment." },
];

const contactIf = [
  'Increasing redness, warmth, or swelling after the first 48 hours',
  'Signs of infection — pus, streaking, or fever',
  'A blister that has broken open and is not healing',
  'Any unexpected skin reaction or concern',
];

export default function PostCare() {
  return (
    <section id="post-care" className="bg-dark-surface text-white scroll-mt-[90px]">
      <div className="max-w-[1160px] mx-auto px-6 py-20 flex flex-col gap-12">
        <Reveal className="flex flex-col gap-3 max-w-[640px]">
          <span className="text-[13px] font-bold tracking-[0.2em] text-accent">AFTER YOUR SESSION</span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">After your session</h2>
          <p className="m-0 text-[17px] leading-[1.6] text-dark-muted">
            How you care for your skin in the hours and days after treatment directly impacts your healing and your
            results. Follow these guidelines after every session.
          </p>
        </Reveal>

        {/* Immediately after */}
        <Reveal className="flex flex-col gap-5">
          <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.01em]">Immediately after (first 24 hours)</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {immediately.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-white/[0.05] border border-white/10 rounded-2xl p-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 text-accent flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="m-0 text-[16px] font-extrabold">{item.title}</h4>
                    <p className="m-0 text-[14px] leading-[1.55] text-dark-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* First week */}
        <Reveal delay={0.05} className="flex flex-col gap-5">
          <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.01em]">The first week</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {firstWeek.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-white/[0.05] border border-white/10 rounded-2xl p-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 text-accent flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="m-0 text-[16px] font-extrabold">{item.title}</h4>
                    <p className="m-0 text-[14px] leading-[1.55] text-dark-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Contact if */}
        <Reveal delay={0.05} className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-rose-300" size={22} />
            <h3 className="m-0 text-[18px] font-extrabold">Contact us if you notice…</h3>
          </div>
          <ul className="m-0 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 list-none p-0">
            {contactIf.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-rose-100">
                <span className="text-rose-300 font-extrabold mt-0.5">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 text-[14.5px] leading-[1.55] text-rose-100/90">
            When in doubt, reach out. We'd rather hear from you than have you wonder. Call or text us at{' '}
            <a href={`tel:${siteConfig.phoneRaw}`} className="font-bold text-white no-underline hover:underline">{siteConfig.phone}</a>.
          </p>
        </Reveal>

        {/* Giving your body the best chance */}
        <Reveal delay={0.05} className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 flex flex-col gap-3">
          <h3 className="m-0 text-[20px] font-extrabold">Giving your body the best chance</h3>
          <p className="m-0 text-[15px] leading-[1.6] text-white/90">
            Your immune system does the real work between sessions — it's what flushes the fragmented ink out of your
            body. Supporting it makes a real difference. Stay hydrated, get good sleep, exercise regularly to promote
            circulation, and minimize nicotine use. Clients who take care of themselves between sessions consistently
            see faster clearing.
          </p>
        </Reveal>

        <Reveal className="flex items-center gap-2 text-[15px] font-semibold">
          <Phone size={16} className="text-accent" />
          Questions after your session? We're here —{' '}
          <a href={`tel:${siteConfig.phoneRaw}`} className="text-accent no-underline hover:underline">{siteConfig.phone}</a>
        </Reveal>
      </div>
    </section>
  );
}