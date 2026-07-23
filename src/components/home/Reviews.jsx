import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const reviews = [
  { text: "Walked in for a scheduled consultation thinking we'd just talk about the process and ended up liking the facility and pricing so much that we did our first removal session right then. Great experience and can't wait to go back. Highly recommend!" },
  { text: "Had a great experience here — Caleb was great at talking through the steps of the process and calming my nerves. I loved being able to have a consult and ask questions over text, with fast response. The location is nice, comfy and clean interior too!" },
  { text: "Such a great experience here today! They are so quick with communication and so nice. I went in for my consultation but they had time to do my first session which was a nice surprise! Highly recommend, can't wait for my results." },
  { text: "Super happy with my eyebrow tattoo removal, I could see the difference since the first session and they were lighting even more after the second week! Can't wait to finish the treatment. Thank you 😊" },
  { text: "I had my first tattoo removal session and had a great experience! The staff was friendly, professional, and made me feel comfortable throughout the entire process. They explained everything clearly and answered all of my questions. The procedure was quick, and the clinic was clean and welcoming. I highly recommend them to anyone considering tattoo removal!" },
];

function ReviewCard({ rev, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-[0_0_356px] text-left bg-background border border-border rounded-[18px] p-7 flex flex-col gap-3.5 cursor-pointer hover:border-primary hover:shadow-[0_12px_32px_-16px_rgba(13,35,48,0.25)] transition-all"
    >
      <span className="text-base text-[#fbbc04] tracking-[3px]">★★★★★</span>
      <p className="m-0 text-[15px] leading-[1.7] text-[#33586b] flex-1 line-clamp-4">"{rev.text}"</p>
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-base font-extrabold text-[#4285f4]">
          G
        </span>
        <span className="flex flex-col leading-[1.3]">
          <span className="text-[14.5px] font-extrabold">Verified Google Review</span>
          <span className="text-[13px] text-[#8aa0ad]">Google</span>
        </span>
      </div>
    </button>
  );
}

export default function Reviews() {
  const [selected, setSelected] = useState(null);
  const doubled = [...reviews, ...reviews];

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-10 flex flex-col gap-10">
        <Reveal className="flex flex-col gap-3">
          <span className="text-[13px] font-bold tracking-[0.2em] text-primary">GOOGLE REVIEWS</span>
          <h2 className="m-0 text-3xl sm:text-[38px] font-extrabold tracking-[-0.015em]">Word gets around</h2>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="w-[30px] h-[30px] rounded-full bg-white border border-border flex items-center justify-center text-base font-extrabold text-[#4285f4]">G</span>
            <span className="text-[15px] font-extrabold">4.9</span>
            <span className="text-[15px] text-[#fbbc04] tracking-[2px]">★★★★★</span>
            <span className="text-sm text-muted-foreground">based on 49 Google reviews</span>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-primary text-sm font-bold hover:text-primary-dark transition-colors"
            >
              See all reviews →
            </a>
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden pb-20">
        <div className="flex gap-6 w-max animate-marquee [animation-duration:55s]">
          {doubled.map((rev, i) => (
            <ReviewCard key={i} rev={rev} onClick={() => setSelected(rev)} />
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-[480px]">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-lg font-extrabold text-[#4285f4]">
                G
              </span>
              <div className="flex flex-col leading-[1.3]">
                <DialogTitle className="m-0 text-lg font-extrabold">Verified Google Review</DialogTitle>
                <DialogDescription className="m-0 text-sm text-muted-foreground">True Skin Tattoo Removal · Buford, GA</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <span className="text-lg text-[#fbbc04] tracking-[3px]">★★★★★</span>
          <p className="m-0 text-[16px] leading-[1.7] text-foreground">"{selected?.text}"</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}