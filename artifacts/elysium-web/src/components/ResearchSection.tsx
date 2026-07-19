import React from 'react';
import { motion } from 'framer-motion';

const reports = [
  {
    category: 'Architecture',
    date: 'Mar 14, 2026',
    title: '100x model compression without accuracy loss',
    terminal: 'model/edge-v4 → 94MB · F1 → 0.947 · lat → 8.1ms'
  },
  {
    category: 'Security',
    date: 'Apr 4, 2026',
    title: 'Agent trust boundaries in multi-tenant systems',
    terminal: 'agent/compliance-scan → scope: read-only · ttl: 900s'
  },
  {
    category: 'Release',
    date: 'May 18, 2026',
    title: 'Elysium Core v2.4 — what actually changed',
    terminal: 'core/v2.4 → multi-modal · inference -40%'
  }
];

export const ResearchSection = () => {
  return (
    <section id="research" className="py-24 md:py-32 px-6 z-10 relative bg-black/40 border-y border-[rgba(255,255,255,0.05)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">From the engineering team</h2>
            <p className="text-gray-400 text-lg italic">No thought leadership. Just what broke, what healed, and what we shipped.</p>
          </div>
          <div className="text-elysium-green hover:glow-green transition-all cursor-pointer font-medium flex items-center gap-2 whitespace-nowrap">
            Read all reports &rarr;
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, idx) => (
            <motion.div 
              key={idx}
              className="glass-card p-6 rounded-xl flex flex-col group hover:border-[rgba(60,255,20,0.3)] transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-4 text-xs font-mono">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-300 uppercase tracking-wider">{report.category}</span>
                <span className="text-gray-500">{report.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-elysium-green transition-colors">{report.title}</h3>
              
              <div className="mt-auto bg-black/50 border border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(60,255,20,0.2)] rounded p-3 transition-colors">
                <code className="terminal-text text-xs text-gray-400 group-hover:text-elysium-green transition-colors block truncate">
                  {report.terminal}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};