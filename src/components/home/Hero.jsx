import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden -mt-[72px] bg-[#081c26]">
      {/* Image fallback (always present behind the video so the transparent nav shows imagery) */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
      />
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full hero-video-bg">
        <wistia-player
          media-id="alot4bfcs8"
          aspect="1.7777777777777777"
          autoplay
          muted
          loop
          play-button="false"
          controls="false"
        />
      </div>

      {/* Dark overlay for legibility — lighter at top so the transparent nav shows the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(8,28,38,0.25)] to-[rgba(8,28,38,0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,28,38,0.55)] via-[rgba(8,28,38,0.3)] to-transparent" />

      {/* Content */}
      <div className="relative max-w-[1160px] mx-auto px-6 pt-[200px] pb-36 min-h-[88vh] flex items-center">
        <div className="flex flex-col gap-6 max-w-[620px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm text-white text-[13px] font-bold tracking-[0.08em] px-4 py-2 rounded-full w-fit">
              <span className="w-[7px] h-[7px] rounded-full bg-accent animate-ts-pulse" />
              BUFORD, GA · OPEN 7 DAYS · BY APPOINTMENT ONLY
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="m-0 text-[42px] sm:text-[52px] lg:text-[60px] font-black leading-[1.05] tracking-[-0.02em] text-white">
              Your skin,<br />
              without{' '}
              <span className="bg-gradient-to-r from-white via-accent to-[rgba(173,216,230,0.5)] bg-clip-text text-transparent">
                the past.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="m-0 text-[19px] leading-[1.65] text-[#d7e5ec] max-w-[520px]">
              Safe. Precise. Effective. Advanced laser tattoo removal with licensed medical oversight — serving Sugar Hill, Suwanee, and the greater Lake Lanier area, without the drive to Atlanta.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex gap-[14px] flex-wrap">
              <Link
                to="/contact"
                className="no-underline bg-white text-primary-dark text-base font-bold px-8 py-4 rounded-full hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/pricing"
                className="no-underline bg-[rgba(255,255,255,0.12)] border-[1.5px] border-[rgba(255,255,255,0.6)] text-white text-base font-bold px-8 py-4 rounded-full hover:bg-[rgba(255,255,255,0.2)] hover:border-white transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex gap-6 flex-wrap text-[#cfe0e8] text-sm font-semibold">
              {['Free quotes', 'Licensed medical oversight', 'No Atlanta traffic'].map((item) => (
                <span key={item} className="flex items-center gap-[7px]">
                  <span className="text-accent font-extrabold">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating Google rating badge */}
      <Reveal delay={0.25}>
        <div className="hidden lg:flex absolute bottom-10 right-10 bg-white border border-border rounded-2xl px-5 py-4 items-center gap-[14px] shadow-[0_12px_32px_-12px_rgba(13,35,48,0.35)] -rotate-2">
          <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary text-[19px] font-extrabold">★</span>
          <span className="flex flex-col leading-[1.3]">
            <span className="font-extrabold text-[15px]">4.9 rating on Google</span>
            <span className="text-[13px] text-muted-foreground">Based on 49 verified reviews</span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}