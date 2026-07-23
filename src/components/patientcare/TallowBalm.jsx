import { Sparkles, Droplet, Leaf, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const ingredients = [
  { icon: ShieldCheck, tag: 'SKIN REPAIR', title: 'Grass-Fed Beef Tallow', text: "Rich in vitamins A, D, E, and K, grass-fed beef tallow closely mimics your skin's natural oils to deeply moisturize, repair, and protect the skin barrier.", accent: '#fbbf24' },
  { icon: Droplet, tag: 'MOISTURE', title: 'Manuka Honey', text: 'Naturally antibacterial and enzyme-rich, Manuka honey draws in moisture, calms irritation, and supports the skin’s healing process.', accent: '#fb923c' },
  { icon: Sparkles, tag: 'HYDRATION', title: 'Virgin Olive Oil', text: 'Packed with antioxidants and essential fatty acids, olive oil hydrates, protects, and softens skin while reinforcing its natural barrier.', accent: '#4ade80' },
  { icon: Leaf, tag: 'RENEWAL', title: 'Calendula Extract', text: 'Known for its soothing, anti-inflammatory properties, calendula helps reduce redness, restore balance, and encourage gentle skin renewal.', accent: '#38bdf8' },
];

const BALM_URL = 'https://bonsaihealthshop.com/products/tallow-honey-balm';

export default function TallowBalm() {
  return (
    <section id="tallow-balm" className="bg-background scroll-mt-[90px]">
      <div className="max-w-[1160px] mx-auto px-6 py-20 flex flex-col gap-14">
        <Reveal className="flex flex-col gap-3 max-w-[680px]">
          <span className="text-[13px] font-bold tracking-[0.2em] text-emerald-600">OUR AFTERCARE PRODUCT</span>
          <h2 className="m-0 text-3xl sm:text-[40px] font-black tracking-[-0.02em]">Bonsai Health Honey Tallow Balm</h2>
          <p className="m-0 text-[17px] leading-[1.6] text-muted-foreground">
            We don't recommend just any moisturizer. We chose Bonsai Health Honey Tallow Balm because we believe what
            goes on your skin after a session matters as much as the treatment itself.
          </p>
        </Reveal>

        {/* Why we use it */}
        <Reveal className="grid md:grid-cols-2 gap-8 items-center bg-white border border-border rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col gap-4">
            <h3 className="m-0 text-[24px] font-extrabold tracking-[-0.01em]">Why we use it</h3>
            <p className="m-0 text-[15.5px] leading-[1.65] text-muted-foreground">
              Most moisturizers rely on synthetic fillers, preservatives, and seed oils that sit on top of your skin
              rather than absorbing into it. After a laser session, your skin needs real nourishment — not a product
              that coats the surface and calls it done. Bonsai Health Honey Tallow Balm is made from four biocompatible
              ingredients that work with your skin's natural biology to repair, soothe, and restore.
            </p>
            <span className="text-[13px] font-bold tracking-[0.14em] text-foreground">NO TOXINS · NO HORMONE DISRUPTORS · NO SYNTHETIC FILLERS</span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3]">
            <img
              src="https://trueskintattooremoval.com/assets/tallow-honey-balm-21_yF2Lj.jpg"
              alt="Bonsai Health Tallow Honey Balm — Face + Body Moisturizer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Four ingredients */}
        <div className="flex flex-col gap-6">
          <Reveal className="flex flex-col gap-2">
            <h3 className="m-0 text-[26px] font-extrabold tracking-[-0.01em]">Four ingredients. Nothing extra.</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ingredients.map((ing, i) => {
              const Icon = ing.icon;
              return (
                <Reveal key={ing.title} delay={i * 0.06} className="relative bg-white border border-border rounded-2xl p-6 flex flex-col gap-3 overflow-hidden hover:-translate-y-1 transition-transform">
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ background: ing.accent }}
                  />
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: ing.accent }}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="relative text-[11px] font-bold tracking-[0.12em] text-muted-foreground">{ing.tag}</span>
                  <h4 className="relative m-0 text-[17px] font-extrabold">{ing.title}</h4>
                  <p className="relative m-0 text-[14px] leading-[1.55] text-muted-foreground">{ing.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Why it works */}
        <Reveal className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-8 sm:p-10 flex flex-col gap-4 max-w-[860px]">
          <h3 className="m-0 text-[22px] font-extrabold">Why it works for tattoo removal aftercare</h3>
          <p className="m-0 text-[15.5px] leading-[1.65] text-white/90">
            Your skin goes through a controlled healing response after every laser session. The laser breaks down ink
            particles, and your body needs to repair the skin while your immune system clears the fragments. That
            process is faster and more comfortable when your skin barrier is properly supported. Tallow's fatty acid
            profile is nearly identical to your skin's natural sebum, which means it absorbs deeply rather than sitting
            on the surface. Combined with the antibacterial properties of Manuka honey and the anti-inflammatory effect
            of calendula, this balm is uniquely suited to post-treatment recovery.
          </p>
        </Reveal>

        {/* Shop CTA */}
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between bg-white border border-border rounded-3xl p-7 sm:p-8">
          <div className="flex flex-col gap-1 max-w-[560px]">
            <h3 className="m-0 text-[20px] font-extrabold tracking-[-0.01em]">The only aftercare product we recommend</h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-muted-foreground">
              As a True Skin member, purchase it directly at our Buford clinic at a discounted member price — or order
              online anytime.
            </p>
          </div>
          <a
            href={BALM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 bg-primary text-white text-base font-bold px-7 py-3.5 rounded-full hover:bg-primary-dark transition-colors shrink-0"
          >
            <ShoppingBag size={18} />
            Shop Tallow Honey Balm
            <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal className="flex items-center gap-2 text-[15px] font-semibold text-muted-foreground">
          We provide Bonsai Health Honey Tallow Balm as part of your aftercare. Questions?{' '}
          <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary no-underline hover:underline">{siteConfig.phone}</a>
        </Reveal>
      </div>
    </section>
  );
}