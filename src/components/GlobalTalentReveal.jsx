import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TEAM_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=88';

/** Scroll-linked image reveal placed between the homepage hero and company content. */
export default function GlobalTalentReveal() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
    restDelta: 0.0005,
  });
  const animationProgress = reduceMotion ? scrollYProgress : smoothProgress;

  const clipPath = useTransform(
    animationProgress,
    [0, 0.78],
    ['inset(13% 8% round 26px)', 'inset(0% 0% round 0px)'],
  );
  const imageScale = useTransform(animationProgress, [0, 0.78], [1.04, 1.16]);

  return (
    <section
      ref={sectionRef}
      className={`global-talent-section${reduceMotion ? ' is-static' : ''}`}
      aria-labelledby="global-talent-title"
    >
      <div className="global-talent-sticky">
        <motion.div
          className="global-talent-frame"
          style={{ clipPath: reduceMotion ? 'inset(0% 0% round 0px)' : clipPath }}
        >
          <motion.img
            className="global-talent-image"
            src={TEAM_IMAGE}
            alt="A diverse team of professionals collaborating around a table"
            loading="lazy"
            decoding="async"
            style={{ scale: reduceMotion ? 1.08 : imageScale }}
          />
          <div className="global-talent-shade" aria-hidden="true" />
          <div className="global-talent-copy">
            <p className="eyebrow">Talent knows no borders</p>
            <h2 id="global-talent-title">Connecting Global Talent.<br />Creating Opportunities.</h2>
            <p className="global-talent-description">
              We bring ambitious organisations and exceptional people together across markets, industries, and possibilities.
            </p>
            <a className="button button-primary" href="candidates.html">
              Explore Opportunities <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
