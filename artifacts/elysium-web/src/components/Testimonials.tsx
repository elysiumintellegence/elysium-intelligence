import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    initials: 'SJ',
    name: 'Sarah Jenkins',
    role: 'CTO, Global Finance Corp',
    quote: "Elysium didn't give us a model. It gave us a nervous system. Manual audit time dropped 80% in the first sprint.",
    metric: "$2.1M recovered in flagged transactions, Q3"
  },
  {
    initials: 'WL',
    name: 'Dr. Wei Lin',
    role: 'VP Engineering, AutoTech',
    quote: "We run complex computer vision on the factory floor at 8ms. The edge deployment is not a demo — it's the whole point.",
    metric: "40% downtime reduction · 99.1% QA recall"
  },
  {
    initials: 'MV',
    name: 'Marcus Vance',
    role: 'Head of Operations, Nexa',
    quote: "60% of tier-1 tickets resolved autonomously. The agents know our runbooks better than most new hires.",
    metric: "4.2s avg resolution time · zero compliance violations"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What runs in production</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">Not cherry-picked demos. Verified production metrics from live deployments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="glass-card p-8 rounded-xl flex flex-col hover:border-[rgba(60,255,20,0.3)] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-lg">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">"{t.quote}"</p>
              <div className="text-elysium-green font-mono text-sm border-t border-white/10 pt-4">
                &rarr; {t.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};