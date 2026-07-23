import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CareSubHero({ tag, title, intro, accent = 'text-primary' }) {
  return (
    <section className="bg-dark-surface text-white">
      <div className="max-w-[1160px] mx-auto px-6 pt-[120px] pb-14 flex flex-col gap-4">
        <Reveal>
          <Link
            to="/patient-care"
            className="no-underline inline-flex items-center gap-2 text-dark-muted hover:text-white text-[13px] font-semibold transition-colors w-fit"
          >
            <ArrowLeft size={16} /> Back to Patient Care
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <span className={`text-[13px] font-bold tracking-[0.2em] ${accent}`}>{tag}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="m-0 text-3xl sm:text-[44px] font-black tracking-[-0.02em] leading-[1.05]">{title}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="m-0 text-[17px] leading-[1.6] text-dark-muted max-w-[640px]">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}