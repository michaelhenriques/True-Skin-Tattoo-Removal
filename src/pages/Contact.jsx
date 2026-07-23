import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { siteConfig } from '@/lib/siteConfig';
import { base44 } from '@/api/base44Client';
import { CheckCircle, Loader2 } from 'lucide-react';

const sizeOptions = [
  { value: 'xs', label: 'Extra small (up to 2")' },
  { value: 's', label: 'Small (2–4")' },
  { value: 'm', label: 'Medium (4–6")' },
  { value: 'l', label: 'Large (6"+)' },
  { value: 'multi', label: 'Multiple tattoos' },
];

const inputClass = 'border-[1.5px] border-border rounded-[10px] px-[15px] py-[13px] text-[15px] text-foreground bg-background outline-none focus:border-primary focus:bg-white transition-colors w-full';

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', size: '', placement: '', goal: 'remove', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const setGoal = (goal) => setForm({ ...form, goal });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await base44.entities.QuoteRequest.create({
        name: form.name,
        contact: form.contact,
        tattoo_size: form.size,
        placement: form.placement,
        goal: form.goal,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background">
      <section className="max-w-[1160px] mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-start">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] font-bold tracking-[0.2em] text-primary">FREE QUOTE</span>
            <h1 className="m-0 text-4xl sm:text-[46px] font-black tracking-[-0.02em]">Tell us about your tattoo</h1>
            <p className="m-0 text-[17px] text-muted-foreground leading-[1.65]">
              Fill this out and we'll get back to you with a personalized quote — we typically respond within 1 to 3 hours during the day, seven days a week. No obligation, ever.
            </p>
          </div>

          {submitted ? (
            <Reveal>
              <div className="bg-[#e6f4ec] border border-[#9fd4b4] rounded-2xl p-7 flex flex-col gap-2">
                <span className="flex items-center gap-2 text-[19px] font-extrabold text-[#1c6b3c]">
                  <CheckCircle size={22} /> Request received ✓
                </span>
                <span className="text-[15px] text-[#2e5a41] leading-[1.6]">
                  Thanks — we'll review your details and reach out with your free quote shortly. Talk soon!
                </span>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-border rounded-[20px] p-9 flex flex-col gap-5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                <label className="flex flex-col gap-[7px]">
                  <span className="text-[13.5px] font-bold text-foreground">Tattoo size</span>
                  <select value={form.size} onChange={update('size')} className={`${inputClass} cursor-pointer`}>
                    <option value="">Select a size…</option>
                    {sizeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-[7px]">
                  <span className="text-[13.5px] font-bold text-foreground">Where on the body?</span>
                  <input value={form.placement} onChange={update('placement')} placeholder="e.g. forearm, ankle, back" className={inputClass} />
                </label>
              </div>

              <label className="flex flex-col gap-[7px]">
                <span className="text-[13.5px] font-bold text-foreground">Goal</span>
                <div className="flex gap-2.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setGoal('remove')}
                    className={`px-5 py-3 rounded-full text-sm font-bold border-[1.5px] transition-colors ${
                      form.goal === 'remove' ? 'border-primary text-primary-dark bg-secondary' : 'border-border text-foreground bg-white hover:border-primary'
                    }`}
                  >
                    Complete removal
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('fade')}
                    className={`px-5 py-3 rounded-full text-sm font-bold border-[1.5px] transition-colors ${
                      form.goal === 'fade' ? 'border-primary text-primary-dark bg-secondary' : 'border-border text-foreground bg-white hover:border-primary'
                    }`}
                  >
                    Fade for a cover-up
                  </button>
                </div>
              </label>

              <label className="flex flex-col gap-[7px]">
                <span className="text-[13.5px] font-bold text-foreground">
                  Anything else? <span className="font-medium text-[#8aa0ad]">(colors, age of tattoo, questions)</span>
                </span>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Tell us about your tattoo…"
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
                  'Send My Free Quote Request'
                )}
              </button>

              <span className="text-[13px] text-[#8aa0ad] text-center">
                Tip: texting us a photo of your tattoo gets you the fastest, most accurate quote.
              </span>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-[22px]">
          <div className="bg-dark-surface rounded-[20px] p-8 flex flex-col gap-[22px]">
            <h2 className="m-0 text-[21px] font-extrabold text-white">Visit or call us</h2>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-[0.16em] text-accent">PHONE</span>
              <a href={`tel:${siteConfig.phoneRaw}`} className="no-underline text-white text-[22px] font-extrabold hover:text-accent transition-colors">
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-[0.16em] text-accent">EMAIL</span>
              <a href={`mailto:${siteConfig.email}`} className="no-underline text-[#d7e5ec] text-base hover:text-accent transition-colors break-all">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-[0.16em] text-accent">LOCATION</span>
              <span className="text-[#d7e5ec] text-base leading-[1.5]">{siteConfig.address}</span>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-accent text-sm font-bold hover:text-white transition-colors"
              >
                Open in Maps →
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-[0.16em] text-accent">HOURS · BY APPOINTMENT ONLY</span>
              <div className="flex flex-col gap-1">
                {siteConfig.hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 text-[15px]">
                    <span className="text-[#d7e5ec] font-semibold">{day}</span>
                    <span className="text-dark-muted">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-[280px] rounded-[20px] overflow-hidden border border-border bg-dark-surface no-underline"
          >
            <iframe
              title="True Skin Tattoo Removal location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
              className="w-full h-full grayscale-[0.2] pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="absolute top-3 left-3 bg-dark-surface/90 backdrop-blur-sm text-accent text-xs font-bold tracking-[0.08em] px-3 py-1.5 rounded-full border border-white/15">
              BUFORD, GA
            </span>
          </a>

          <div className="bg-secondary rounded-2xl p-6 flex flex-col gap-2">
            <span className="text-[15px] font-extrabold text-primary-dark">Serving all of North Georgia</span>
            <span className="text-sm text-[#33586b] leading-[1.6]">
              Buford · Sugar Hill · Flowery Branch · Gainesville · Cumming · Suwanee · Johns Creek · Braselton and the surrounding Lake Lanier communities
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}