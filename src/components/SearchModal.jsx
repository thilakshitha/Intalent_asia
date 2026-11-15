import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight, Briefcase, FileText, Globe, Building2 } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = event => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { label: 'Executive Search & Headhunting', href: 'services.html', category: 'Services' },
    { label: 'Employer of Record (EOR) Sri Lanka', href: 'services.html', category: 'Solutions' },
    { label: 'Current Vacancies & Jobs', href: 'candidates.html', category: 'Candidates' },
    { label: 'About InTalent Asia Leadership', href: 'about.html', category: 'About' },
    { label: 'Industry Specializations', href: 'industries.html', category: 'Industries' },
    { label: 'AI in Recruitment 2026 Insights', href: 'insights.html', category: 'Insights' },
    { label: 'Contact Colombo Headquarters', href: 'contact.html', category: 'Contact' },
  ];

  const filteredLinks = query.trim() === ''
    ? quickLinks
    : quickLinks.filter(item => 
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6" role="dialog" aria-modal="true" aria-label="Search InTalent Asia">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0A192F] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            aria-label="Search services, industries, vacancies, or insights"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, industries, vacancies, or insights..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')} 
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 pb-1">
            {query.trim() === '' ? 'Popular Quick Links' : `Matching Results (${filteredLinks.length})`}
          </div>

          {filteredLinks.length > 0 ? (
            filteredLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-slate-800 text-brand-blue dark:text-brand-teal flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-teal transition-colors">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.category} • intalent.asia
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue dark:group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))
          ) : (
            <div className="text-center py-8 text-sm text-slate-500 dark:text-slate-400">
              No results found for "{query}". Visit{' '}
                <a 
                  href="services.html"
                className="text-brand-blue dark:text-brand-teal underline font-semibold"
              >
                Services
              </a>{' '}
              or{' '}
                <a 
                  href="contact.html"
                className="text-brand-blue dark:text-brand-teal underline font-semibold"
              >
                Contact Us
              </a>.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Search InTalent Asia</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
}
