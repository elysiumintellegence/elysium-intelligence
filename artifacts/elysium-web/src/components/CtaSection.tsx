import React from 'react';
import { motion } from 'framer-motion';

export const CtaSection = () => {
  return (
    <section className="py-32 px-6 z-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-elysium-green/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          className="text-xs font-mono uppercase tracking-widest text-elysium-green mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          production &middot; at scale &middot; today
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Your data is already producing signals. <br className="hidden md:block"/>Most teams just can't hear them yet.
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Elysium watches, feeds, and heals your production stack. The loop compounds from day one.
        </motion.p>
        
        <motion.div 
          className="bg-black/50 border border-[rgba(60,255,20,0.2)] rounded p-4 mb-10 inline-block max-w-full overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <code className="terminal-text whitespace-nowrap">
            mean_time_to_insight &rarr; 11min &middot; incidents_auto_resolved &rarr; 60%
            <span className="animate-pulse ml-1">_</span>
          </code>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-elysium-green text-black px-8 py-4 rounded font-semibold hover:bg-[#32e610] transition-colors shadow-[0_0_15px_rgba(60,255,20,0.3)] hover:shadow-[0_0_25px_rgba(60,255,20,0.5)] cursor-pointer w-full sm:w-auto text-lg">
            Talk to engineering
          </button>
          <button className="px-8 py-4 rounded font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors cursor-pointer w-full sm:w-auto text-lg">
            Open the CLI
          </button>
        </motion.div>
        
        <motion.p 
          className="text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          No sales deck. No 6-week POC. Production in 11 minutes or we buy the coffee.
        </motion.p>
      </div>
    </section>
  );
};