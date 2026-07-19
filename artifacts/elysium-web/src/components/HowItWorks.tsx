import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Connect your data. All of it.',
    body: 'Live sources, warehouses, streams — Elysium ingests everything, validates schemas on arrival, and surfaces drift before it breaks your models.',
    terminal: 'sources/pg-prod → connected · lag → 0.3s'
  },
  {
    num: '02',
    title: 'Recalls your domain, not generic defaults',
    body: "AutoML fine-tunes foundation models on your proprietary data. It watches patterns you haven't named yet. Average domain accuracy lift: +31.4% over baseline.",
    terminal: 'model/churn-v3 → fine-tuned · F1 → 0.947'
  },
  {
    num: '03',
    title: 'Ships to production in one command',
    body: 'One CLI push. Canary by default. Elysium watches inference metrics and blocks rollouts that break SLAs. Zero rollback failures across 500+ production deployments.',
    terminal: 'deploy/churn-v3 → canary 5% · p99 → 9ms'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Production Loop</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We abstracted the MLOps pipeline into three deterministic steps.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="glass-card-green p-8 rounded-xl flex flex-col h-full relative overflow-hidden group hover:glow-box-green transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-7xl text-elysium-green pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20">
                {step.num}
              </div>
              <div className="text-elysium-green font-mono mb-4 text-xl font-bold">{step.num} &middot; {step.title.split(' ')[0]}</div>
              <h3 className="text-xl font-semibold text-white mb-4 leading-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{step.body}</p>
              
              <div className="bg-black/50 border border-[rgba(60,255,20,0.2)] rounded p-3 mt-auto">
                <code className="terminal-text block">
                  {step.terminal}
                  {idx === 2 && <span className="animate-pulse ml-1">_</span>}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};