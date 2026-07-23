import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';
import { base44 } from '@/api/base44Client';
import { CheckCircle, Loader2 } from 'lucide-react';

const inputClass = 'border-[1.5px] border-border rounded-[10px] px-[15px] py-[13px] text-[15px] text-foreground bg-background outline-none focus:border-primary focus:bg-white transition-colors w-full';

export default function FinalCTA() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await base44.entities.QuoteRequest.create({ name: form.name, contact: form.contact, message: form.message });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-[1160px] mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 items-start">
      <Reveal className="flex flex-col gap-5">
        <span className="text-[13px] font-bold tracking-[0.2em] text-primary">FREE QUOTE</span>
        <h2 className="m-0 text-3xl sm:text-[42px] font-black tracking-[-0.02em]">Ready to leave it behind?</h2>
        <p className="m-0 text-[17px] text-muted-foreground leading-[1.65] max-w-[440px]">
          Tell us about your tattoo and we'll get back to you with a free, no-obligation quote — we typically respond within 1 to 3 hours during the day, seven days a week.
        </p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="no-underline text-primary-dark text-lg font-extrabold hover:text-primary transition-colors w-fit"
        >
          Or call {siteConfig.phone}
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        {submitted ? (
          <div className="bg-[#e6f4ec] border border-[#9fd4b4] rounded-2xl p-7 flex flex-col gap-2">
            <span className="flex items-center gap-2 text-[19px] font-extrabold text-[#1c6b3c]">
              <CheckCircle size={22} /> Request received
            </span>
            <span className="text-[15px] text-[#2e5a41] leading-[1.6]">
              Thanks — we'll reach out with your free quote shortly, usually within 1 to 3 hours.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-border rounded-[20px] p-9 flex flex-col gap-5 shadow-[0_20px_48px_-24px_rgba(13,35,48,0.2)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <label className="flex flex-col gap-[7px]">
                <span className="text-[13.5px] font-bold text-foreground">Name</span>
                <input value={form.name} onChange={update('name')} placeholder="Your name" required className={inputClass} />
              </label>
              <label className="flex flex-col gap-[7px]">
                <span className="text-[13.5px] font-bold text-foreground">Phone or email</span>
                <input value={form.contact} onChange={update('contact')} placeholder="How do we reach you?" required className={inputClass} />
              </label>
            </div>

            <label className="flex flex-col gap-[7px]">
              <span className="text-[13.5px] font-bold text-foreground">Tell us about your tattoo</span>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={4}
                placeholder="Size, colors, placement, age…"
                required
                className={`${inputClass} resize-vertical`}
              />
            </label>

            {error && <span className="text-sm text-destructive font-semibold">{error}</span>}

            <button
              type="submit"
              disabled={loading}
              className="w-full text-center bg-primary text-white text-base font-extrabold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                'Get My Free Quote'
              )}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}