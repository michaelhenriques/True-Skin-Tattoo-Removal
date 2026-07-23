import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Plus, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const categories = [
  {
    name: 'The Basics',
    faqs: [
      { q: 'How does laser tattoo removal actually work?', a: 'The laser delivers ultra-fast pulses of light that pass through your skin and shatter tattoo ink into tiny particles. Your immune system then flushes those particles away naturally over the following weeks. Each session breaks up more ink, so the tattoo fades progressively.' },
      { q: 'Is laser tattoo removal the safest method available?', a: 'Laser removal is the gold standard because it targets ink without cutting or removing skin. Our non-ablative lasers leave the surrounding tissue intact, and treatments are performed by trained practitioners under physician supervision — making it the safest, most proven approach available.' },
      { q: 'Will my tattoo be completely removed?', a: 'Most tattoos can be reduced to the point of being virtually unnoticeable. Complete removal depends on ink type, depth, color, and your body\'s immune response. At your consultation we\'ll give you an honest assessment of what\'s achievable for your specific tattoo.' },
      { q: "What's the difference between complete removal and fading for a cover-up?", a: 'Complete removal aims to eliminate all visible ink. Fading for a cover-up takes just a few sessions to lighten the old tattoo enough that your artist can work cleanly over it — it\'s faster and costs far less.' },
    ],
  },
  {
    name: 'Your Treatment Plan',
    faqs: [
      { q: 'How many sessions will I need?', a: 'Most tattoos require between 6 and 10 sessions for full removal, though some may need fewer. Fading for a cover-up usually takes just 2–4 sessions. You\'ll get an honest estimate at your free consultation.' },
      { q: 'How far apart are sessions scheduled?', a: 'Sessions are spaced 6–8 weeks apart. That gap gives your skin time to heal fully and your immune system time to clear the shattered ink — rushing it doesn\'t speed up results.' },
      { q: 'Does tattoo location on the body affect results?', a: 'Yes. Areas closer to your heart and with better circulation (like the arms and chest) tend to clear faster, while extremities like fingers, toes, and ankles often take more sessions.' },
      { q: 'Do older tattoos remove faster than newer ones?', a: 'Generally yes. Older tattoos have already begun breaking down naturally over time, so the laser often clears them more quickly than fresh, densely-packed ink.' },
      { q: 'Can you remove only part of a tattoo?', a: 'Absolutely. We can target a specific section — like a name, a single word, or one element — while leaving the rest of the tattoo untouched for a cover-up or revision.' },
    ],
  },
  {
    name: 'Comfort, Safety & Side Effects',
    faqs: [
      { q: 'Does laser tattoo removal hurt?', a: 'Most clients compare each pulse to a rubber band snapping against the skin — uncomfortable but very tolerable, and sessions only take minutes. We use skin cooling to keep you comfortable throughout.' },
      { q: 'What are the possible side effects?', a: 'Common, temporary effects include redness, swelling, mild blistering, and light scabbing — similar to a mild sunburn. These typically resolve within a few days to a couple of weeks with proper aftercare.' },
      { q: 'Can laser tattoo removal cause scarring?', a: 'Performed properly with good aftercare, removal very rarely scars — the laser targets ink, not skin tissue. If your tattoo already has scarring from the original needle work, that pre-existing texture may remain.' },
      { q: 'Is laser tattoo removal safe for all skin tones?', a: 'Yes. We calibrate laser settings to your skin type using proven protocols that protect your natural pigment while targeting the ink. Your consultation includes a skin assessment so treatment is tuned safely to you.' },
      { q: 'Who is NOT a good candidate for laser tattoo removal?', a: 'Removal may be postponed if you\'re pregnant, have active skin infections or open wounds in the area, or are on certain photosensitizing medications. We\'ll review your medical history at consultation to confirm it\'s safe for you.' },
    ],
  },
  {
    name: 'Aftercare & Lifestyle',
    faqs: [
      { q: 'What should I do immediately after a session?', a: 'Keep the area clean and dry, apply the aftercare balm we provide, avoid sun exposure, and don\'t pick at any blistering or scabbing. Expect redness and swelling for a few days, similar to a mild sunburn. Most people return to normal activity immediately.' },
      { q: 'What can I do between sessions to get better results?', a: 'Stay hydrated, keep the area moisturized, avoid sun exposure, and maintain a healthy lifestyle to support your immune system. Hydration and good circulation help your body clear shattered ink faster.' },
      { q: 'How long does full healing take between sessions?', a: 'The treated area usually heals within 2–3 weeks, but we space sessions 6–8 weeks apart to give your immune system enough time to fully clear the ink before the next treatment.' },
      { q: 'Can I get a new tattoo over a removed area?', a: 'Yes. Once the area is fully healed and faded enough, your artist can tattoo over it. If you\'re planning a cover-up, we\'ll work with you to lighten the old ink to the right level for a clean canvas.' },
      { q: 'Does sun exposure affect my treatments?', a: 'Yes — tanned or sunburned skin is harder to treat safely and increases the risk of side effects. Keep the area covered and use SPF, and avoid tanning beds before and throughout your treatment plan.' },
      { q: 'Are there any medications or products I should avoid before treatment?', a: 'Avoid photosensitizing medications, retinoids, and exfoliating products on the area before your session. Tell us about any prescriptions at your consultation so we can confirm timing is safe.' },
    ],
  },
];

export default function FAQ() {
  const [openKey, setOpenKey] = useState('0-0');
  const allFaqs = categories.flatMap((c, ci) => c.faqs.map((_, fi) => `${ci}-${fi}`));

  return (
    <div className="bg-background">
      {/* header */}
      <section className="relative overflow-hidden max-w-[860px] mx-auto px-6 pt-20 pb-10 flex flex-col gap-4 items-center text-center">
        <div className="pointer-events-none absolute -top-16 right-6 w-72 h-72 rounded-full bg-accent/20 blur-[120px]" />
        <span className="relative inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-primary">
          <HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS
        </span>
        <h1 className="relative m-0 text-4xl sm:text-[52px] font-black tracking-[-0.025em] leading-[1.02]">
          Everything you're wondering
        </h1>
        <p className="relative m-0 text-[17px] text-muted-foreground max-w-[560px] leading-[1.65]">
          We believe an informed client gets better results. Here are honest answers to every question we hear.
        </p>
      </section>

      <section className="max-w-[860px] mx-auto px-6 pb-20 flex flex-col gap-10">
        {categories.map((cat, ci) => (
          <div key={cat.name} className="flex flex-col gap-4">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-[13px] font-extrabold">
                  {ci + 1}
                </span>
                <h2 className="m-0 text-xl font-extrabold tracking-[-0.01em] text-foreground">{cat.name}</h2>
                <span className="flex-1 h-px bg-border" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-3">
              {cat.faqs.map((faq, fi) => {
                const key = `${ci}-${fi}`;
                const open = openKey === key;
                return (
                  <Reveal key={key} delay={fi * 0.04}>
                    <div className={`bg-white rounded-2xl overflow-hidden border transition-colors ${open ? 'border-primary/40' : 'border-border'}`}>
                      <button
                        onClick={() => setOpenKey(open ? null : key)}
                        className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left cursor-pointer hover:bg-secondary/60 transition-colors"
                      >
                        <span className="text-[16.5px] font-extrabold leading-[1.4]">{faq.q}</span>
                        <span
                          className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-[250ms]"
                          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                        >
                          <Plus size={18} />
                        </span>
                      </button>
                      {open && (
                        <p className="m-0 px-6 pb-6 text-[15px] text-muted-foreground leading-[1.7]">{faq.a}</p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* final CTA */}
      <section className="max-w-[1160px] mx-auto px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark rounded-[28px] p-12 lg:p-14 flex flex-col gap-4 items-center text-center">
            <div className="pointer-events-none absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
            <h2 className="relative m-0 text-3xl sm:text-[34px] font-black tracking-[-0.02em] text-white">Still have questions?</h2>
            <p className="relative m-0 text-[17px] text-[#d7ecf3] leading-[1.6]">
              Your free consultation answers all of them — with a quote to match.
            </p>
            <div className="relative flex gap-3.5 flex-wrap justify-center mt-2">
              <Link
                to="/contact"
                className="no-underline inline-flex items-center gap-2 bg-white text-primary-dark text-base font-extrabold px-8 py-4 rounded-full hover:-translate-y-0.5 transition-transform"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="no-underline border-[1.5px] border-[rgba(255,255,255,0.5)] text-white text-base font-bold px-8 py-4 rounded-full hover:border-white transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}