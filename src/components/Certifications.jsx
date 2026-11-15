import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, CLUTCH_AWARDS } from '../data/content';
import { ShieldCheck, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="certifications" className="py-24 relative bg-slate-50/70 dark:bg-[#070F1E]/80 border-y border-slate-200/70 dark:border-slate-800/80 overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/70 text-brand-teal text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 mr-1 text-brand-teal" />
            <span>Certified Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            ISO Aligned Quality, Safety & <span className="gradient-text-teal">Data Protection</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            InTalent Asia follows strict international standards across quality management, information security, privacy, and health & safety to ensure enterprise audit readiness.
          </p>
        </motion.div>

        {/* 4 Staggered ISO Certification Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div 
              key={cert.code}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-[#0A192F] rounded-2xl p-7 border border-slate-200 dark:border-slate-800/90 hover:border-brand-teal/60 dark:hover:border-brand-teal/60 shadow-lg shadow-slate-200/40 dark:shadow-black/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-colors flex flex-col justify-between"
            >
              {/* Subtle top-corner gradient highlight */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-tr-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800/90 p-2 flex items-center justify-center border border-slate-100 dark:border-slate-700/60 group-hover:scale-105 transition-transform shadow-inner">
                    <img 
                      src={cert.icon} 
                      alt={cert.code}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }} 
                    />
                    <div className="hidden w-full h-full items-center justify-center text-brand-teal font-bold text-xs">
                      {cert.code}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    {cert.tag}
                  </span>
                </div>

                <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                  {cert.code}
                </div>
                <div className="text-base font-bold text-brand-blue dark:text-teal-400 mb-3">
                  {cert.title}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Audit Verified
                </span>
                <span className="text-slate-400">UKAS / IAF Aligned</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Clutch Awards 2026 Showcase Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 via-[#0A192F] to-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Global Industry Recognition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Top Rated HR & Recruitment Firm on Clutch 2026
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Recognized across 5 premier categories for exceptional client satisfaction, recruitment delivery speed, and transparent workforce ethics.
              </p>
              
              <div className="mt-4">
                <a
                  href="about.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-teal-400 hover:text-teal-300 hover:underline"
                >
                  <span>Learn more about InTalent Asia credentials</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Badges Grid with Hover Effects */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 w-full lg:w-auto">
              {CLUTCH_AWARDS.map((award, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-colors group text-center cursor-default"
                >
                  <img 
                    src={award.img} 
                    alt={award.title}
                    className="h-16 w-auto object-contain filter drop-shadow-md mb-2 group-hover:brightness-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-[10px] font-bold text-slate-300 leading-tight">
                    {award.title.replace('Top Clutch ', '').replace(' Sri Lanka 2026', '')}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
