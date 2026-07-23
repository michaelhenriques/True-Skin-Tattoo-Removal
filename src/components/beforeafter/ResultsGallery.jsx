import { useState } from 'react';
import { beforeAfterResults, categories } from '@/lib/beforeAfterData';
import Reveal from '@/components/Reveal';
import Lightbox from './Lightbox';

export default function ResultsGallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const filtered = active === 'All' ? beforeAfterResults : beforeAfterResults.filter((r) => r.category === active);

  return (
    <section className="bg-dark-surface text-white">
      <div className="max-w-[1160px] mx-auto px-6 py-20 flex flex-col gap-10">
        <Reveal className="flex flex-col gap-3 max-w-[680px]">
          <h2 className="m-0 text-3xl sm:text-[36px] font-black tracking-[-0.02em]">Browse the gallery</h2>
          <p className="m-0 text-[16px] leading-[1.6] text-dark-muted">
            These results were achieved using the same full-spectrum laser technology used at True Skin. Individual
            results vary based on tattoo size, ink color, skin type, and number of sessions.
          </p>
        </Reveal>

        {/* filter pills */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[13.5px] font-bold px-5 py-2.5 rounded-full border transition-all ${
                  isActive
                    ? 'bg-white text-primary-dark border-white shadow-lg'
                    : 'bg-white/[0.06] text-white/85 border-white/15 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => (
            <Reveal
              key={r.id}
              delay={(i % 3) * 0.06}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] cursor-pointer"
            >
              <div
                onClick={() => setLightbox(r)}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={r.image}
                  alt={`Before and after tattoo removal — ${r.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,28,38,0.85)] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[11px] font-bold tracking-[0.1em] uppercase bg-[rgba(8,28,38,0.75)] backdrop-blur-sm text-accent px-3 py-1.5 rounded-full border border-white/15">
                  {r.sessions} sessions
                </span>
                <span className="absolute top-3 left-3 text-[11px] font-bold tracking-[0.08em] uppercase bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20">
                  {r.category}
                </span>
              </div>
              <div className="relative p-5">
                <h3 className="m-0 text-[16px] font-extrabold tracking-[-0.01em]">{r.title}</h3>
                <p className="m-0 mt-1 text-[13.5px] text-dark-muted">Full-spectrum laser · {r.sessions} sessions</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}