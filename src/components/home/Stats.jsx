import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function useCountUp(target, inView, duration = 1300) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

const stats = [
  { target: 7, suffix: '', label: "days a week we're open" },
  { target: 49, suffix: '', label: 'five-star Google reviews · 4.9 rating' },
  { target: 100, suffix: '%', label: 'free, no-obligation quotes' },
];

function StatItem({ stat, inView }) {
  const value = useCountUp(stat.target, inView);
  return (
    <div className="flex flex-col gap-1.5 items-center text-center">
      <span className="text-4xl sm:text-5xl font-black text-white tracking-[-0.02em]">
        {value}{stat.suffix}
      </span>
      <span className="text-sm font-semibold text-dark-muted tracking-[0.04em]">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} className="bg-dark-surface">
      <div className="max-w-[1160px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}