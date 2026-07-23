import Reveal from '@/components/Reveal';

const cities = [
  { name: 'Sugar Hill', time: '5 min', top: '57%', left: '33%' },
  { name: 'Suwanee', time: '15 min', top: '70%', left: '24%' },
  { name: 'Flowery Branch', time: '12 min', top: '26%', left: '64%' },
  { name: 'Gainesville', time: '20 min', top: '10%', left: '76%' },
  { name: 'Cumming', time: '15–20 min', top: '20%', left: '17%' },
  { name: 'Johns Creek', time: '25 min', top: '83%', left: '47%' },
  { name: 'Braselton', time: '15 min', top: '62%', left: '72%' },
];

export default function ServiceArea() {
  return (
    <section className="bg-dark-surface overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-28 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <Reveal className="flex flex-col gap-5">
          <span className="text-[13px] font-bold tracking-[0.2em] text-accent">SERVING NORTH GEORGIA</span>
          <h2 className="m-0 text-3xl sm:text-[38px] font-extrabold tracking-[-0.015em] text-white">
            Close to home, wherever home is
          </h2>
          <p className="m-0 text-[17px] text-dark-muted leading-[1.65]">
            Located at 4536 Nelson Brogdon Blvd in Buford, with easy access from I-985 and GA-400. We proudly serve Gwinnett, Hall, and Forsyth counties — most clients are just 10 to 20 minutes away.
          </p>

          <div className="flex flex-col">
            {cities.map((city) => (
              <div
                key={city.name}
                className="flex justify-between items-center py-[13px] px-1 border-b border-[rgba(108,196,221,0.15)] last:border-b-0"
              >
                <span className="text-white text-[15.5px] font-bold">{city.name}</span>
                <span className="text-accent text-sm font-semibold">{city.time}</span>
              </div>
            ))}
          </div>
          <span className="text-dark-muted text-sm">…and the surrounding Lake Lanier communities.</span>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
            <div className="absolute inset-0 rounded-full border border-[rgba(108,196,221,0.18)]" />
            <div className="absolute inset-[60px] rounded-full border border-[rgba(108,196,221,0.22)]" />
            <div className="absolute inset-[120px] rounded-full border border-[rgba(108,196,221,0.28)]" />
            <div className="absolute inset-[180px] rounded-full border border-[rgba(108,196,221,0.35)]" />
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(108,196,221,0.22),transparent_22%)] animate-ring-spin pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
              <span className="relative w-[18px] h-[18px]">
                <span className="absolute inset-0 rounded-full bg-accent animate-ts-ping" />
                <span className="absolute inset-0 rounded-full bg-accent border-[3px] border-dark-surface shadow-[0_0_16px_rgba(108,196,221,0.9)]" />
              </span>
              <span className="bg-accent text-dark-surface text-[12.5px] font-extrabold tracking-[0.08em] px-3 py-1.5 rounded-full whitespace-nowrap">
                TRUE SKIN · BUFORD
              </span>
            </div>

            {cities.map((city) => (
              <div
                key={city.name}
                className="absolute flex flex-col items-center gap-1.5 transition-transform hover:scale-110"
                style={{ top: city.top, left: city.left }}
              >
                <span className="w-[9px] h-[9px] rounded-full bg-dark-muted" />
                <span className="text-[#d7e5ec] text-[12.5px] font-bold whitespace-nowrap">{city.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}