import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LATEST_INSIGHTS, FAQS } from '../data/content';
import { 
  BookOpen, 
  HelpCircle, 
  ArrowUpRight, 
  ChevronDown, 
  Sparkles, 
  Clock, 
  Calendar 
} from 'lucide-react';

export default function InsightsAndFAQ() {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#070F1E]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Latest Thinking / Insights */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-brand-blue dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                <BookOpen className="w-4 h-4 mr-1 text-brand-teal" />
                <span>Ideas For What's Next</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Latest <span className="gradient-text-blue">Thinking</span>
              </h2>
            </div>
            <a 
              href="insights.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-brand-blue dark:text-brand-teal hover:underline group"
            >
              <span>View all insights on intalent.asia</span>
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Staggered Insights Cards with Scroll Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {LATEST_INSIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#0A192F] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-brand-blue/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md border border-white/10">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 leading-snug group-hover:text-brand-blue dark:group-hover:text-brand-teal transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-brand-blue dark:text-teal-400">
                    <a 
                      href="insights.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* High-Conversion Call To Action Banner with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative rounded-3xl bg-gradient-to-r from-brand-blue via-blue-700 to-teal-600 p-8 sm:p-12 shadow-2xl text-white overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Start a conversation
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Looking to Hire the Right Talent?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-blue-50 leading-relaxed">
                Partner with InTalent Asia for recruitment, executive search, headhunting, EOR, and workforce solutions tailored to your business.
              </p>
            </div>

            <a
              href="contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-extrabold text-brand-dark bg-white hover:bg-slate-100 shadow-xl shadow-black/10 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap flex items-center text-sm"
            >
              <span>Let's talk (Start Hiring)</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Frequently Asked Questions with Scroll Animation */}
        <motion.div 
          id="faq" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <HelpCircle className="w-4 h-4 mr-1" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked <span className="gradient-text-teal">Questions</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Clear answers regarding our recruitment, executive search, and cross-border solutions.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-[#0A192F] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 text-brand-blue dark:text-teal-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {faq.id}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-teal' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
