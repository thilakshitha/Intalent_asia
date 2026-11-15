import React from 'react';
import { motion } from 'framer-motion';
import { VALUE_PROPOSITIONS, ASSETS } from '../data/content';
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  HeartHandshake, 
  Scale, 
  Award, 
  ArrowUpRight, 
  Building2, 
  CheckCircle 
} from 'lucide-react';

export default function ValueProp() {
  const iconMap = {
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Globe: Globe,
    HeartHandshake: HeartHandshake,
    Scale: Scale,
    Award: Award
  };

  const industries = [
    'Technology & AI',
    'Banking & FinTech',
    'Engineering & EPC',
    'Insurance',
    'Healthcare & Pharma',
    'Retail & E-Commerce',
    'Manufacturing',
    'Logistics & Supply Chain',
    'Hospitality & Tourism',
    'Education & EdTech'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#070F1E]/80 border-t border-slate-200/60 dark:border-slate-800/80">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-brand-blue dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Building2 className="w-4 h-4 mr-1 text-brand-teal" />
            <span>Global Recruitment and Workforce Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hire better talent. <span className="gradient-text-blue">Scale faster.</span> Build stronger teams.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            InTalent Asia is a global recruitment agency, executive search partner, and workforce solutions provider supporting businesses across Sri Lanka, the UAE, the Middle East, MENA, and international markets. We deliver recruitment, headhunting, executive search, Employer of Record (EOR), and workforce solutions that help companies hire faster, scale confidently, and build stronger teams.
          </p>

          <div className="mt-6 flex items-center justify-center space-x-4">
            <a
              href="contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-brand-teal hover:from-blue-700 hover:to-teal-600 shadow-lg shadow-blue-500/25 transition-all text-sm group"
            >
              <span>Start Hiring (Let's talk)</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Asymmetric Bento-Style Feature Grid with Scroll Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Big Visual Bento Card (Left Column - 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group min-h-[460px] flex flex-col justify-between p-8 text-white bg-slate-950"
          >
            {/* Background Image with Variable Placeholder */}
            <img 
              src={ASSETS.CORPORATE_WOMEN_LEADERSHIP} 
              alt="Women Led InTalent Asia Leadership"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 -z-10" 
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/60 to-transparent -z-10" />

            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal/20 text-teal-300 border border-teal-500/30">
                Ethical & Diverse Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 leading-snug">
                From Startups to Global Enterprise.
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We combine speed, accuracy, confidentiality, structured quality assurance, and responsible data protection to deliver trusted hiring support across global markets.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="text-2xl font-black text-brand-teal">Zero Cost</div>
                  <div className="text-[11px] text-slate-300">To Job Candidates</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="text-2xl font-black text-blue-400">100%</div>
                  <div className="text-[11px] text-slate-300">Compliance & Audit Ready</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 7 cols (6 Value Cards in 2x3 Grid with Staggered Scroll Animation) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {VALUE_PROPOSITIONS.map((prop, idx) => {
              const Icon = iconMap[prop.iconName] || Award;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-[#0A192F] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-brand-teal/50 dark:hover:border-brand-teal/50 shadow-md shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-500/10 to-teal-500/10 dark:from-blue-500/20 dark:to-teal-500/20 border border-blue-500/20 flex items-center justify-center text-brand-blue dark:text-brand-teal mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {prop.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-brand-teal">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    <span>InTalent Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Industry Domain Coverage Badges with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#0A192F] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Industry Expertise
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Specialized Sector Experience
              </h4>
            </div>
            <a 
              href="industries.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-blue dark:text-brand-teal hover:underline flex items-center"
            >
              <span>Explore all industries on intalent.asia</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {industries.map((ind, i) => (
              <a 
                key={i}
                href="industries.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-brand-blue/10 hover:text-brand-blue dark:hover:bg-brand-teal/10 dark:hover:text-brand-teal transition-colors cursor-pointer"
              >
                {ind}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
