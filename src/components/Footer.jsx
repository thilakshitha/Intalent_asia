import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ASSETS, CONTACT_INFO, CERTIFICATIONS } from '../data/content';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUp, 
  Linkedin, 
  Youtube, 
  Facebook, 
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  const { isDark } = useTheme();
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLinks = [
    { name: 'About Us', href: 'about.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Industries', href: 'industries.html' },
    { name: 'Current Vacancies', href: 'candidates.html' },
    { name: 'Blog & Insights', href: 'insights.html' },
    { name: 'Contact Us', href: 'contact.html' },
  ];

  const policyLinks = [
    { name: 'Terms of Service', href: 'https://intalent.asia/terms-of-service/' },
    { name: 'Privacy Policy', href: 'https://intalent.asia/candidate-privacy-notice-2/' },
    { name: 'Cookie Policy', href: 'https://intalent.asia/cookie-policy/' },
    { name: 'Corporate Governance', href: 'https://intalent.asia/corporate-governance-policy/' },
    { name: 'ESG & Sustainability', href: 'https://intalent.asia/esg-sustainability/' },
    { name: 'Sitemap', href: 'https://intalent.asia/sitemap/' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-[#070F1E] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a 
              href="index.html" 
              className="flex items-center space-x-3"
            >
              {!logoError ? (
                <img 
                  src={isDark ? ASSETS.LOGO_DARK : ASSETS.LOGO_LIGHT} 
                  alt="InTalent Asia" 
                  onError={() => setLogoError(true)}
                  className="h-10 sm:h-12 w-auto object-contain brightness-110"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-teal flex items-center justify-center">
                    <span className="text-white font-black text-xl">IT</span>
                  </div>
                  <span className="font-extrabold text-2xl text-white">
                    InTalent<span className="text-brand-teal ml-1">Asia</span>
                  </span>
                </div>
              )}
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              InTalent Asia supports businesses with recruitment, executive search, headhunting, EOR, payroll, and workforce solutions across local and global markets.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={CONTACT_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Compliance Standards Badges */}
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Certified Compliance Standards
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {CERTIFICATIONS.map(c => (
                  <span key={c.code} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-teal-400 font-bold">
                    {c.code}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sri Lanka Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Sri Lanka Office
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                <span>
                  {CONTACT_INFO.addressLine1}<br />
                  {CONTACT_INFO.addressLine2}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <a 
                  href="tel:0112067999" 
                  className="hover:text-white transition-colors font-semibold"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Policies & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Policies
            </h3>
            <ul className="space-y-2 text-xs">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 InTalent Asia . All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
