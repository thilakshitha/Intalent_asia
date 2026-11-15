import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  return <section className="home-hero" aria-labelledby="home-title">
    <div className="hero-media">
      {/* To add a video later, place a <video autoplay muted loop playsinline> element here, with this image as its poster */}
      <div className="hero-image" role="img" aria-label="Professionals working together in a collaborative office" />
      <div className="hero-shade" />
      <div className="hero-copy page-width">
        <p className="eyebrow">Discover · Engage · Empower</p>
        <h1 id="home-title">People are the<br/><span>power behind progress.</span></h1>
        <p className="hero-lede">We connect ambitious businesses with exceptional people, building teams that move organisations forward.</p>
        <div className="hero-buttons"><a className="button button-primary" href="services.html">Our services <ArrowRight size={17}/></a><a className="button button-outline" href="contact.html">Let's talk</a></div>
      </div>
      <a href="#welcome" className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={17}/></a>
    </div>
  </section>;
}
