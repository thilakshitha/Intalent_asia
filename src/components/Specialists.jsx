import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLUTIONS_CATEGORIES, GLOBAL_MARKETS } from '../data/content';
import { 
  Users, 
  Globe2, 
  Briefcase, 
  Check, 
  ArrowUpRight, 
  Compass,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function Specialists() {
  const [activeTab, setActiveTab] = useState('talent-acquisition');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const currentCategory = SOLUTIONS_CATEGORIES.find(c => c.id === activeTab) || SOLUTIONS_CATEGORIES[0];

  const regions = ['All', 'South Asia', 'Middle East', 'Southeast Asia', 'Oceania', 'Europe', 'North America'];

  const filteredMarkets = selectedRegion === 'All' 
    ? GLOBAL_MARKETS 
    : GLOBAL_MARKETS.filter(m => m.region.includes(selectedRegion));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-brand-teal/5 dark:bg-brand-teal/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-brand-blue dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-4 h-4 mr-1 text-brand-teal" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            End to End Recruitment & <span className="gradient-text-blue">Workforce Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Recruitment, Executive Search & Headhunting Specialists in Sri Lanka delivering integrated workforce agility for local and global teams.
          </p>
        </motion.div>

        {/* 3 Pillar Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SOLUTIONS_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 flex items-center space-x-2.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-xl shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-[#0A192F] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-blue/50'
                }`}
              >
                {cat.id === 'talent-acquisition' && <Users className="w-4 h-4" />}
                {cat.id === 'workforce-solutions' && <Globe2 className="w-4 h-4" />}
                {cat.id === 'business-solutions' && <Briefcase className="w-4 h-4" />}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <motion.div 
          key={activeTab + '-banner'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-50/80 dark:bg-[#0A192F]/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 mb-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                {currentCategory.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                {currentCategory.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                {currentCategory.description}
              </p>
            </div>
            <a
              href="services.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-white bg-slate-900 dark:bg-brand-blue hover:bg-brand-blue dark:hover:bg-blue-600 transition-colors text-sm whitespace-nowrap self-start md:self-auto flex items-center shadow-md group"
            >
              <span>Explore All {currentCategory.title}</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Dynamic Grid of Services inside Active Category with Scroll Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          >
            {currentCategory.services.map((srv, idx) => (
              <motion.div
                key={srv.name}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-[#0A192F] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-brand-blue/50 dark:hover:border-brand-teal/50 shadow-md shadow-slate-200/50 dark:shadow-black/20 hover:shadow-2xl transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center text-brand-blue dark:text-teal-400 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-brand-teal" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      #0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-teal transition-colors">
                    {srv.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <a
                    href="contact.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-blue dark:text-teal-400 hover:underline flex items-center"
                  >
                    <span>Request Solution Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Global Markets Section with Scroll Animation */}
        <motion.div 
          id="markets" 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-slate-900 via-[#0A192F] to-[#070F1E] rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Globe2 className="w-3.5 h-3.5 mr-1 text-teal-400" />
                  <span>Our Reach</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Access Talent Across <span className="gradient-text-teal">Global Markets</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
                  InTalent Asia operates across Sri Lanka, the UAE, Saudi Arabia, Qatar, Bahrain, Oman, Kuwait, India, Malaysia, Singapore, Australia, the United Kingdom, Europe, the United States, Canada, and other key markets.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-3xl font-black text-brand-teal">20+</div>
                  <div className="text-xs text-slate-400 font-semibold">Countries Supported</div>
                </div>
              </div>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedRegion === reg
                      ? 'bg-brand-teal text-white shadow-md shadow-teal-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Market Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {filteredMarkets.map((m, idx) => (
                <a
                  key={idx}
                  href="contact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-teal/40 transition-all group"
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-bold truncate group-hover:text-teal-300 transition-colors">
                      {m.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 flex-shrink-0 ml-2">
                    Active
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <span className="text-xs text-slate-400">
                Need localized payroll or recruitment in a country not listed?
              </span>
              <a
                href="contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-teal-400 hover:text-teal-300 hover:underline flex items-center"
              >
                <span>Discuss Cross-Border Sourcing</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
