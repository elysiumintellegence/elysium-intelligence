import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-[72px] font-bold text-white leading-tight tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Intelligence that ships
          </motion.span>
          <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            to production.
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-elysium-green italic font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Not to a slide deck.
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg md:text-xl max-w-[600px] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Elysium watches your data, feeds your models, and heals your pipelines — so your team ships decisions, not dashboards.
        </motion.p>
        
        <motion.div 
          className="terminal-text mb-12 glass-card-green inline-block px-4 py-2 rounded"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span>inference_latency &rarr; 47ms &middot; model_accuracy &rarr; 94.7% F1 &middot; uptime &rarr; 99.9%</span>
          <span className="animate-pulse ml-1">_</span>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors cursor-pointer w-full sm:w-auto justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
          <button className="px-6 py-3 rounded font-semibold text-white border border-white hover:bg-white/10 transition-colors cursor-pointer w-full sm:w-auto">
            Book a demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};