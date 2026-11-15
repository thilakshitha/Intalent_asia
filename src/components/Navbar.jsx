import React, { useEffect, useState } from 'react';
import { Menu, Search, X, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/content';
import SearchModal from './SearchModal';

const links = [
  ['Home', 'index.html'], ['About Us', 'about.html'], ['Services', 'services.html'],
  ['Industries', 'industries.html'], ['Candidates', 'candidates.html'],
  ['Insights', 'insights.html'], ['Contact Us', 'contact.html'],
];

export default function Navbar({ active = 'Home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navLink = ([name, href]) => <a key={name} href={href} aria-current={active === name ? 'page' : undefined} onClick={() => setMenuOpen(false)} className={`nav-link ${active === name ? 'nav-active' : ''}`}>{name}</a>;
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="index.html" className="brand" aria-label="InTalent Asia home"><img src={ASSETS.LOGO_LIGHT} alt="InTalent Asia" /></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(navLink)}</nav>
        <div className="nav-actions">
          <button className="search-trigger" onClick={() => setSearchOpen(true)} aria-label="Open search"><Search size={17}/><span>Search</span></button>
          <a className="nav-cta" href="contact.html"><Sparkles size={15}/><span>Let's talk</span></a>
          <button className="menu-trigger" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
      <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}><nav aria-label="Mobile navigation">{links.map(navLink)}<button className="mobile-search" onClick={() => { setSearchOpen(true); setMenuOpen(false); }}><Search size={17}/> Search</button><a className="nav-cta" href="contact.html">Let's talk</a></nav></div>
    </header>
    <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
  </>;
}
