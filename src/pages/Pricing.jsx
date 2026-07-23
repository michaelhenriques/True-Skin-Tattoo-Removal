import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

const tiers = [
  { size: 'Community Removal', dimensions: 'Gang, racist, or hate symbols', price: 'FREE', desc: 'We remove gang, racist, and hate symbol tattoos at no cost as part of our community initiative.', featured: false },
  { size: 'Tiny Tattoo', dimensions: 'Quarter size or smaller', price: '$95–125', desc: 'Finger tattoos, small symbols, tiny script.', featured: false },
  { size: 'Small Tattoo', dimensions: 'Quarter to business card', price: '$125–155', desc: 'Wrist and ankle pieces, small designs, short quotes.', featured: false },
  { size: 'Medium Tattoo', dimensions: 'Business card to softball', price: '$155–195', desc: 'Forearm and calf pieces, chest designs, larger script.', featured: true, badge: 'MOST COMMON' },
  { size: 'Large Tattoo', dimensions: 'Softball to sheet of paper', price: '$195–265', desc: 'Half sleeves, larger back and chest pieces.', featured: false },
  { size: 'X-Large Tattoo', dimensions: 'Printer paper and above', price: '$265–500', desc: 'Full sleeves, large back pieces, extensive coverage.', featured: false },
  { size: 'Permanent Makeup', dimensions: 'Microblades', price: '$165', desc: 'Eyebrow tattoos and microblading removal.', featured: false },
];

const packages = [
  { title: '3-Session Package', save: '10%', desc: 'Great for small or faded tattoos and permanent makeup', best: false },
  { title: '5-Session Package', save: '15%', desc: 'Most popular for medium tattoos', best: false },
  { title: '8-Session Package', save: '20%', desc: 'Best value for larger or complex ink', best: true },
  { title: 'Unlimited Package', save: 'Custom', desc: 'Guaranteed removal — clients average ~25% savings', best: false, guaranteed: true },
];

const discounts = [
  { label: 'Military, Veterans & First Responders', desc: '15% off' },
  { label: 'Multiple Tattoo Discount', desc: '40% off 2nd · 60% off 3rd (same visit)' },
  { label: 'Referral Reward', desc: '$50 credit per referred client who books' },
];

export default function Pricing() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden max-w-[1160px] mx-auto px-6 pt-20 pb-10 flex flex-col gap-4 items-center text-center">
        <div className="pointer-events-none absolute -top-20 right-10 w-80 h-80 rounded-full bg-accent/20 blur-[120px]" />
        <span className="relative inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-primary">
          <Sparkles size={14} /> TRANSPARENT PRICING
        </span>
        <h1 className="relative m-0 text-4xl sm:text-[52px] font-black tracking-[-0.025em] leading-[1.02]">
          Clear pricing. No surprises.
        </h1>
        <p className="relative m-0 text-[17px] text-muted-foreground max-w-[600px] leading-[1.65]">
          Pricing is based on tattoo size and complexity, customized to your goals. Final pricing is confirmed during your free consultation.
        </p>
      </section>

      {/* tiers */}
      <section className="max-w-[1160px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <Reveal key={tier.size} delay={i * 0.05}>
              <div
                className={`group relative rounded-[22px] p-7 flex flex-col gap-3 h-full transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${
                  tier.featured
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white border border-primary-dark hover:shadow-[0_26px_56px_-16px_rgba(14,117,156,0.55)]'
                    : 'bg-white border border-border hover:shadow-[0_22px_46px_-18px_rgba(13,35,48,0.22)]'
                }`}
              >
                {tier.featured && (
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                )}
                {tier.badge && (
                  <span className="self-start relative inline-flex items-center gap-1 bg-white text-primary-dark text-[10.5px] font-extrabold tracking-[0.1em] px-3 py-1.5 rounded-full">
                    <Star size={11} className="fill-primary" /> {tier.badge}
                  </span>
                )}
                <span className={`text-[12px] font-extrabold tracking-[0.14em] relative ${tier.featured ? 'text-accent' : 'text-primary'}`}>
                  {tier.size.toUpperCase()}
                </span>
                <span className={`text-[14.5px] ${tier.featured ? 'text-accent/90' : 'text-muted-foreground'}`}>{tier.dimensions}</span>
                <span className={`text-[32px] font-black tracking-[-0.02em] leading-none relative ${tier.featured ? 'text-white' : ''}`}>
                  {tier.price}
                  {tier.price !== 'FREE' && (
                    <span className={`text-base font-semibold ${tier.featured ? 'text-accent' : 'text-muted-foreground'}`}> / session</span>
                  )}
                </span>
                <span className={`text-[13.5px] leading-[1.6] relative ${tier.featured ? 'text-accent/95' : 'text-muted-foreground'}`}>{tier.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 mx-1 text-[13px] text-[#8aa0ad] leading-[1.6]">
          *Pricing varies based on ink density, placement, and treatment goals. Final sizing and pricing confirmed at your free consultation.
        </p>
      </section>

      {/* packages + discounts */}
      <section className="bg-white border-y border-border">
        <div className="max-w-[1160px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <Reveal className="flex flex-col gap-[18px]">
            <span className="text-[13px] font-bold tracking-[0.2em] text-primary">SAVE WITH PACKAGES</span>
            <h2 className="m-0 text-3xl sm:text-[36px] font-extrabold tracking-[-0.015em]">Packages that reward commitment</h2>
            <p className="m-0 text-[16px] text-muted-foreground leading-[1.65]">
              Most tattoos require multiple sessions for optimal results. Package pricing offers significant savings on standard per-session rates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packages.map((p) => (
                <div
                  key={p.title}
                  className={`relative overflow-hidden rounded-2xl p-6 flex flex-col gap-2 transition-all hover:-translate-y-1 ${
                    p.best
                      ? 'bg-gradient-to-br from-primary to-primary-dark text-white border border-primary-dark hover:shadow-[0_22px_48px_-16px_rgba(14,117,156,0.5)]'
                      : 'bg-background border border-border hover:shadow-[0_18px_40px_-18px_rgba(13,35,48,0.2)]'
                  }`}
                >
                  {p.best && (
                    <span className="self-start inline-flex items-center gap-1 bg-white text-primary-dark text-[10px] font-extrabold tracking-[0.08em] px-2.5 py-1 rounded-full">
                      <Star size={10} className="fill-primary" /> BEST VALUE
                    </span>
                  )}
                  <span className={`text-[15px] font-extrabold ${p.best ? 'text-white' : 'text-foreground'}`}>{p.title}</span>
                  <span className={`text-[26px] font-black tracking-[-0.02em] leading-none ${p.best ? 'text-white' : 'text-foreground'}`}>
                    {p.save !== 'Custom' ? `Save ${p.save}` : p.save}
                    {p.guaranteed && <span className="text-[13px] font-bold ml-1">Pricing</span>}
                  </span>
                  <span className={`text-[13px] leading-[1.5] ${p.best ? 'text-accent' : 'text-muted-foreground'}`}>{p.desc}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="bg-background border border-border rounded-[20px] p-9 flex flex-col gap-[18px]">
              <h3 className="m-0 text-xl font-extrabold">Special discounts</h3>
              <div className="flex flex-col gap-3.5">
                {discounts.map((d, i) => (
                  <div key={d.label} className={`flex justify-between gap-4 ${i < discounts.length - 1 ? 'border-b border-border pb-3' : ''}`}>
                    <span className="text-[15px] font-bold">{d.label}</span>
                    <span className="text-[14.5px] text-primary font-bold text-right whitespace-nowrap">{d.desc}</span>
                  </div>
                ))}
              </div>
              <span className="text-[13px] text-[#8aa0ad]">Discounts may not be combined unless specified. Ask during consultation.</span>
            </div>

            <div className="relative overflow-hidden rounded-[20px] p-8 flex flex-col gap-3 bg-secondary border border-border">
              <span className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-[0.2em] text-primary-dark relative">
                <ShieldCheck size={14} /> FLEXIBLE FINANCING
              </span>
              <h3 className="m-0 text-xl font-extrabold text-primary-dark">Treat now, pay later with Cherry</h3>
              <p className="m-0 text-[15px] text-[#33586b] leading-[1.65]">
                Split your treatment into manageable monthly payments. No hard credit checks, ever. True 0% APR options available, and interest-bearing plans with APRs as low as 5.99%. No hidden fees.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* final CTA */}
      <section className="max-w-[1160px] mx-auto px-6 py-20 pb-24">
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark rounded-[28px] p-12 lg:p-16 flex flex-col gap-[18px] items-center text-center">
            <div className="pointer-events-none absolute -top-16 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
            <h2 className="m-0 text-3xl sm:text-[38px] font-black tracking-[-0.02em] text-white relative">Ready to reveal your true skin?</h2>
            <p className="m-0 text-[17px] text-[#d7ecf3] max-w-[500px] leading-[1.6] relative">
              Schedule your free consultation to receive a customized treatment plan and exact pricing for your tattoo.
            </p>
            <div className="flex gap-3.5 flex-wrap justify-center relative">
              <Link
                to="/contact"
                className="no-underline inline-flex items-center gap-2 bg-white text-primary-dark text-base font-extrabold px-8 py-4 rounded-full hover:-translate-y-0.5 transition-transform"
              >
                Get My Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline border-[1.5px] border-[rgba(255,255,255,0.5)] text-white text-base font-bold px-8 py-4 rounded-full hover:border-white transition-colors"
              >
                Book My Free Consultation
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}