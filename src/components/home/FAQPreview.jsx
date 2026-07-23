import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: 'Does it hurt?',
    a: 'Most clients compare it to a rubber band snap — brief and very manageable. We use integrated skin-cooling technology that chills the area before, during, and after each laser pulse.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most tattoos need 6–10 sessions for full removal, though some need fewer. Sessions are spaced 6–8 weeks apart. You\'ll get an honest estimate at your free consultation.',
  },
  {
    q: 'Will it leave a scar?',
    a: 'When performed properly with good aftercare, laser removal very rarely scars — the laser targets ink, not skin. We\'ll walk you through simple aftercare at every visit.',
  },
];

export default function FAQPreview() {
  return (
    <section className="max-w-[860px] mx-auto px-6 py-20">
      <Reveal className="flex flex-col gap-3 items-center text-center mb-11">
        <span className="text-[13px] font-bold tracking-[0.2em] text-primary">GOOD TO KNOW</span>
        <h2 className="m-0 text-3xl sm:text-[38px] font-extrabold tracking-[-0.015em]">Common questions</h2>
      </Reveal>

      <Reveal delay={0.1} className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-2">
            <h3 className="m-0 text-lg font-extrabold">{faq.q}</h3>
            <p className="m-0 text-[15px] text-muted-foreground leading-[1.65]">{faq.a}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="flex justify-center mt-8">
        <Link to="/faq" className="no-underline text-primary text-base font-bold">See all questions →</Link>
      </Reveal>
    </section>
  );
}