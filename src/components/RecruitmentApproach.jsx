import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RECRUITMENT_METRICS, HIRING_PROCESS } from '../data/content';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  FileText,
  ArrowUpRight
} from 'lucide-react';

function AnimatedStat({ value }) {
  const [display, setDisplay] = useState(value.replace(/\d[\d,.]*/g, '0'));
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) { setDisplay(value); return; }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { setDisplay(value); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const numbers = [...value.matchAll(/\d[\d,]*(?:\.\d+)?/g)];
      const targets = numbers.map(match => Number(match[0].replaceAll(',', '')));
      const started = performance.now();
      const frame = now => {
        const progress = Math.min((now - started) / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        let offset = 0;
        const next = value.replace(/\d[\d,]*(?:\.\d+)?/g, match => {
          const target = targets[offset++];
          const current = target * eased;
          const formatted = match.includes('.') ? current.toFixed(match.split('.')[1].length) : Math.round(current).toLocaleString('en-US');
          return formatted;
        });
        setDisplay(next);
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref} aria-label={value}>{display}</span>;
}

export default function RecruitmentApproach() {
  const [activeStep, setActiveStep] = useState(0);

  const metricIcons = [Users, Clock, TrendingUp, ShieldCheck];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 mr-1 text-brand-teal" />
            <span>Disciplined Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Recruitment <span className="gradient-text-blue">Approach</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Engineered around speed, precision, and governance to ensure you secure high-retention talent faster without compromising cultural fit.
          </p>
        </motion.div>

        {/* 4 Value Metric Cards with Scroll Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {RECRUITMENT_METRICS.map((item, index) => {
            const Icon = metricIcons[index] || Users;
            return (
              <motion.div 
                key={item.metric}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white dark:bg-[#0A192F] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 hover:border-brand-blue/50 dark:hover:border-brand-blue/50 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-brand-blue dark:text-teal-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.label}
                    </span>
                  </div>

                  <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                    <AnimatedStat value={item.stat}/>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-3">
                    {item.statSuffix}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-brand-blue dark:text-teal-400">
                  <span>Guaranteed SLA Standard</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 5-Step Hiring Process Container with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-50/80 dark:bg-[#0A192F]/60 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                How We Work
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Our simple and effective <span className="gradient-text-teal">hiring process.</span>
              </h3>
            </div>
            <p className="mt-3 md:mt-0 text-sm text-slate-600 dark:text-slate-300 max-w-md">
              From requirement briefing to shortlist, interview coordination, and onboarding, our recruitment process is designed to help you hire faster and with confidence.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {HIRING_PROCESS.map((p, idx) => (
              <button
                key={p.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-300 border ${
                  activeStep === idx
                    ? 'bg-gradient-to-r from-brand-blue to-brand-teal text-white border-transparent shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-brand-blue'
                }`}
              >
                <div className={`text-xs font-extrabold mb-1 ${activeStep === idx ? 'text-white/80' : 'text-brand-blue dark:text-teal-400'}`}>
                  STEP {p.step}
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">
                  {p.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Showcase with Smooth Transition */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#070F1E] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-inner"
            >
              <div className="max-w-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-teal flex items-center justify-center font-black text-lg">
                    {HIRING_PROCESS[activeStep].step}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {HIRING_PROCESS[activeStep].title}
                  </h4>
                </div>
                <p className="text-base font-semibold text-brand-blue dark:text-teal-400 mb-2">
                  {HIRING_PROCESS[activeStep].description}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {HIRING_PROCESS[activeStep].details}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                <a
                  href="contact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-brand-teal hover:from-blue-700 hover:to-teal-600 shadow-md shadow-blue-500/20 text-sm whitespace-nowrap flex items-center justify-center group"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Submit Role Brief</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
