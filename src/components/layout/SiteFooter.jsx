import { Link } from 'react-router-dom';
import { siteConfig } from '@/lib/siteConfig';

export default function SiteFooter() {
  return (
    <footer className="bg-dark-surface text-dark-muted">
      <div className="max-w-[1160px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-extrabold text-[15px]">
                TS
              </span>
              <span className="flex flex-col leading-[1.1]">
                <span className="font-extrabold text-base tracking-[0.14em] text-white">TRUE SKIN</span>
                <span className="font-semibold text-[9.5px] tracking-[0.28em] text-accent">TATTOO REMOVAL</span>
              </span>
            </div>
            <p className="text-sm leading-[1.7] max-w-[300px]">
              Buford's dedicated, physician-supervised laser tattoo removal clinic. Professional-grade full-spectrum laser technology, safe for all skin tones.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-[0.18em] text-accent">PAGES</span>
            <Link to="/" className="no-underline text-[#d7e5ec] text-sm hover:text-accent transition-colors">Home</Link>
            <Link to="/pricing" className="no-underline text-[#d7e5ec] text-sm hover:text-accent transition-colors">Pricing</Link>
            <Link to="/faq" className="no-underline text-[#d7e5ec] text-sm hover:text-accent transition-colors">FAQ</Link>
            <Link to="/contact" className="no-underline text-[#d7e5ec] text-sm hover:text-accent transition-colors">Free Quote</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-[0.18em] text-accent">SERVICE AREA</span>
            {['Buford', 'Sugar Hill', 'Flowery Branch', 'Suwanee', 'Gainesville', 'Cumming', 'Johns Creek', 'Braselton'].map((city) => (
              <span key={city} className="text-sm">{city}</span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-[0.18em] text-accent">CONTACT</span>
            <a href={`tel:${siteConfig.phoneRaw}`} className="no-underline text-white text-[17px] font-bold hover:text-accent transition-colors">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="no-underline text-[#d7e5ec] text-sm hover:text-accent transition-colors">{siteConfig.email}</a>
            <span className="text-sm leading-[1.6]">{siteConfig.address}</span>
            <span className="text-sm text-accent font-semibold">Open 7 days a week · By appointment only</span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(157,184,196,0.2)] flex justify-between flex-wrap gap-3">
          <span className="text-[13px]">© 2026 True Skin Tattoo Removal. All rights reserved.</span>
          <span className="text-[13px]">Free quotes · No obligation · All skin tones welcome</span>
        </div>
      </div>
    </footer>
  );
}