import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, getCatColor } from '@/lib/blogData';
import { siteConfig } from '@/lib/siteConfig';

export default function BlogPost() {
  const { slug } = useParams();
  const [notFound, setNotFound] = useState(false);
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) setNotFound(true);
  }, [slug, post]);

  if (notFound) {
    return (
      <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-black">Article not found</h1>
        <p className="text-muted-foreground">This post may have been moved or removed.</p>
        <Link to="/blog" className="no-underline inline-flex items-center gap-2 text-primary font-bold">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-background">
      <article className="max-w-[760px] mx-auto px-6 pt-12 pb-8">
        <Link
          to="/blog"
          className="no-underline inline-flex items-center gap-1.5 text-primary text-[14px] font-bold mb-8 hover:gap-2.5 transition-all"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="flex items-center justify-between mb-5">
          <span className={`text-[10.5px] font-extrabold tracking-[0.08em] px-2.5 py-1.5 rounded-full ${getCatColor(post.category)}`}>
            {post.category.toUpperCase()}
          </span>
          <span className="inline-flex items-center gap-1 text-[13px] text-muted-foreground font-medium">
            <Calendar size={13} /> {post.date}
          </span>
        </div>

        <h1 className="m-0 text-3xl sm:text-[42px] font-black tracking-[-0.025em] leading-[1.08] mb-5">
          {post.title}
        </h1>

        <p className="m-0 text-[19px] text-muted-foreground leading-[1.6] mb-10 pb-10 border-b border-border">
          {post.excerpt}
        </p>

        <div className="blog-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* CTA */}
      <section className="max-w-[760px] mx-auto px-6 pb-12">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark rounded-[24px] p-9 flex flex-col gap-3 items-center text-center">
          <div className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative m-0 text-2xl font-black text-white">Ready to get started?</h2>
          <p className="relative m-0 text-[15px] text-[#d7ecf3] max-w-[420px] leading-[1.6]">
            Submit a photo for a free, no-obligation quote. We typically respond within 1 to 3 hours, seven days a week.
          </p>
          <Link
            to="/contact"
            className="relative no-underline inline-flex items-center gap-2 bg-white text-primary-dark text-[15px] font-extrabold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform mt-1"
          >
            Get Your Free Quote <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* related */}
      <section className="max-w-[1160px] mx-auto px-6 pb-20">
        <h3 className="m-0 text-xl font-extrabold mb-6">More Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((p, i) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group no-underline flex flex-col gap-3 bg-white border border-border rounded-2xl p-6 transition-all hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-18px_rgba(13,35,48,0.24)] hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold tracking-[0.08em] px-2.5 py-1 rounded-full ${getCatColor(p.category)}`}>
                  {p.category.toUpperCase()}
                </span>
                <span className="text-[12px] text-muted-foreground font-medium">{p.date}</span>
              </div>
              <h4 className="m-0 text-[16.5px] font-extrabold leading-[1.3] text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h4>
              <span className="inline-flex items-center gap-1.5 text-primary text-[13.5px] font-bold group-hover:gap-2.5 transition-all">
                Read More <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}