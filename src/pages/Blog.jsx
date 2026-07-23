import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';
import { blogPosts, getCatColor } from '@/lib/blogData';

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-background">
      {/* header */}
      <section className="relative overflow-hidden max-w-[1160px] mx-auto px-6 pt-20 pb-10 flex flex-col gap-4 items-center text-center">
        <div className="pointer-events-none absolute -top-20 left-1/3 w-80 h-80 rounded-full bg-accent/20 blur-[120px]" />
        <span className="relative inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-primary">
          <BookOpen size={14} /> EXPERT INSIGHTS
        </span>
        <h1 className="relative m-0 text-4xl sm:text-[52px] font-black tracking-[-0.025em] leading-[1.02]">
          The True Skin Blog
        </h1>
        <p className="relative m-0 text-[17px] text-muted-foreground max-w-[560px] leading-[1.65]">
          Honest, detailed answers to the questions we hear most — from how the laser works to what to expect on your healing journey.
        </p>
      </section>

      {/* featured post */}
      <section className="max-w-[1160px] mx-auto px-6 pb-12">
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="group relative block no-underline overflow-hidden rounded-[28px] bg-gradient-to-br from-primary to-primary-dark text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-18px_rgba(14,117,156,0.5)]"
          >
            <div className="pointer-events-none absolute -top-20 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 w-72 h-72 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-9 lg:p-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white text-primary-dark text-[11px] font-extrabold tracking-[0.08em] px-3 py-1.5 rounded-full">FEATURED</span>
                  <span className="text-[11px] font-bold tracking-[0.1em] text-accent bg-white/15 px-3 py-1.5 rounded-full">{featured.category.toUpperCase()}</span>
                </div>
                <h2 className="m-0 text-2xl sm:text-[32px] font-black tracking-[-0.02em] leading-[1.1]">{featured.title}</h2>
                <p className="m-0 text-[16px] text-[#d7ecf3] leading-[1.65]">{featured.excerpt}</p>
                <span className="mt-1 inline-flex items-center gap-2 text-white text-[15px] font-bold group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <BookOpen size={80} className="text-white/80" />
                </div>
              </div>
            </div>
            <div className="relative px-9 lg:px-12 pb-7 flex items-center gap-2 text-accent text-[13px] font-semibold">
              <Calendar size={14} /> {featured.date}
            </div>
          </Link>
        </Reveal>
      </section>

      {/* grid */}
      <section className="max-w-[1160px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <Reveal key={post.url} delay={i * 0.06}>
              <Link
                to={`/blog/${post.slug}`}
                className="group relative flex flex-col gap-4 h-full bg-white border border-border rounded-2xl p-7 no-underline transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-18px_rgba(13,35,48,0.28)] hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10.5px] font-extrabold tracking-[0.08em] px-2.5 py-1.5 rounded-full ${getCatColor(post.category)}`}>
                    {post.category.toUpperCase()}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[12.5px] text-muted-foreground font-medium">
                    <Calendar size={13} /> {post.date}
                  </span>
                </div>
                <h3 className="m-0 text-[19px] font-extrabold tracking-[-0.01em] leading-[1.25] text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="m-0 text-[14.5px] text-muted-foreground leading-[1.6] flex-1">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-primary text-[14px] font-bold group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden bg-white border border-border rounded-[28px] p-12 lg:p-14 flex flex-col gap-4 items-center text-center">
            <h2 className="m-0 text-3xl sm:text-[34px] font-black tracking-[-0.02em]">Ready to start your removal journey?</h2>
            <p className="m-0 text-[17px] text-muted-foreground max-w-[480px] leading-[1.6]">
              Book a free consultation and get an honest, customized plan for your tattoo.
            </p>
            <div className="flex gap-3.5 flex-wrap justify-center mt-2">
              <Link
                to="/contact"
                className="no-underline inline-flex items-center gap-2 bg-primary text-white text-base font-extrabold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="no-underline border-[1.5px] border-border text-foreground text-base font-bold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}