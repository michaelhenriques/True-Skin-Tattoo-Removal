import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Before & After', path: '/before-after' },
  { label: 'Patient Care', path: '/patient-care' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, path) => {
    if (!path.includes('#')) return;
    e.preventDefault();
    const [, hash] = path.split('#');
    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (isHome) {
      scroll();
    } else {
      navigate('/');
      setTimeout(scroll, 350);
    }
  };

  const headerClass = transparent
    ? 'bg-transparent border-b border-transparent'
    : 'bg-[rgba(250,252,253,0.94)] backdrop-blur-xl border-b border-border';
  const textColor = transparent ? 'text-white' : 'text-foreground';
  const subColor = transparent ? 'text-accent' : 'text-primary';
  const phoneColor = transparent ? 'text-white' : 'text-primary-dark';
  const menuIconColor = transparent ? 'text-white' : 'text-foreground';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${headerClass}`}>
      <div className="max-w-[1240px] mx-auto px-5 lg:px-6 h-[70px] flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <span className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-extrabold text-[15px] tracking-wide">
            TS
          </span>
          <span className="flex flex-col leading-[1.1]">
            <span className={`font-extrabold text-base tracking-[0.14em] transition-colors ${textColor}`}>TRUE SKIN</span>
            <span className={`font-semibold text-[9.5px] tracking-[0.28em] transition-colors ${subColor}`}>TATTOO REMOVAL</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-[15px] xl:gap-[20px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`group relative no-underline text-[13px] xl:text-[13.5px] font-semibold whitespace-nowrap transition-colors ${isActive ? 'text-primary' : `${textColor} hover:text-primary`}`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-[6px] h-[2px] rounded-full bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-[14px] flex-shrink-0">
          <a href={`tel:${siteConfig.phoneRaw}`} className={`no-underline text-[13px] font-bold whitespace-nowrap transition-colors ${phoneColor}`}>
            {siteConfig.phone}
          </a>
          <Link
            to="/contact"
            className="no-underline bg-primary text-white text-[13px] font-bold px-5 py-[10px] rounded-full hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${menuIconColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => { handleNavClick(e, link.path); setMobileOpen(false); }}
                className="no-underline text-foreground text-base font-semibold py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${siteConfig.phoneRaw}`} className="no-underline text-primary-dark text-base font-bold py-2">
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="no-underline bg-primary text-white text-center text-base font-bold px-5 py-3 rounded-full mt-2"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}