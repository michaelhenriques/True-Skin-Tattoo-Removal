const items = ['FREE QUOTES', 'OPEN 7 DAYS A WEEK', 'BY APPOINTMENT ONLY', 'ALL INK COLORS', '0% APR FINANCING', 'BUFORD, GA'];

export default function Marquee() {
  return (
    <div className="bg-primary overflow-hidden py-[15px]">
      <div className="inline-flex gap-14 whitespace-nowrap animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-14 items-center">
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-14">
                <span className="text-white text-sm font-extrabold tracking-[0.18em]">{item}</span>
                <span className="text-accent text-xs">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}