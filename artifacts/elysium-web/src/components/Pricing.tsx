import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Infrastructure pricing</h2>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              className="w-12 h-6 rounded-full bg-white/10 relative cursor-pointer"
              onClick={() => setAnnual(!annual)}
            >
              <div className={`w-4 h-4 rounded-full bg-elysium-green absolute top-1 transition-all duration-300 ${annual ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm flex items-center gap-2 ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-xs text-elysium-green bg-elysium-green/10 px-2 py-0.5 rounded">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <motion.div 
            className="glass-card p-8 rounded-xl flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="text-4xl font-bold text-white mb-2">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">Proof-of-concept. No credit card.</p>
            
            <div className="bg-black/50 border border-[rgba(255,255,255,0.1)] rounded p-3 mb-8">
              <code className="terminal-text text-gray-400 text-xs">
                1M API requests/mo &middot; shared infra
              </code>
            </div>
            
            <button className="w-full py-3 rounded border border-white/20 text-white font-medium hover:bg-white/5 transition-colors mb-8 cursor-pointer">
              Deploy free
            </button>
            
            <ul className="space-y-4 text-sm text-gray-300 mt-auto">
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> 1M inference calls/month</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Standard latency</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Community support (48h)</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Shared infrastructure</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Basic observability</li>
            </ul>
          </motion.div>

          {/* Growth */}
          <motion.div 
            className="glass-card-green p-8 rounded-xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(60,255,20,0.1)] hover:shadow-[0_0_50px_rgba(60,255,20,0.2)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 bg-elysium-green text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
              Recommended
            </div>
            <h3 className="text-xl font-bold text-elysium-green mb-2">Growth</h3>
            <div className="text-4xl font-bold text-white mb-2">${annual ? 319 : 399}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">Production-grade. Ships on day one.</p>
            
            <div className="bg-black/50 border border-[rgba(60,255,20,0.2)] rounded p-3 mb-8">
              <code className="terminal-text text-xs">
                50M calls/mo &middot; &lt;50ms guaranteed
              </code>
            </div>
            
            <button className="w-full py-3 rounded bg-elysium-green text-black font-semibold hover:bg-[#32e610] transition-colors mb-8 cursor-pointer shadow-[0_0_15px_rgba(60,255,20,0.3)]">
              Start 14-day trial
            </button>
            
            <ul className="space-y-4 text-sm text-gray-300 mt-auto">
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> 50M inference calls/month</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Priority sub-50ms latency SLA</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> 24/7 engineering support (4h SLA)</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Dedicated model endpoint</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Full telemetry and trace logging</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Custom fine-tuning pipeline</li>
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
            className="glass-card p-8 rounded-xl flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-2">Custom</div>
            <p className="text-gray-400 text-sm mb-6">Unlimited scale. Contractual guarantees.</p>
            
            <div className="bg-black/50 border border-[rgba(255,255,255,0.1)] rounded p-3 mb-8">
              <code className="terminal-text text-gray-400 text-xs">
                VPC &middot; on-prem &middot; SOC2 &middot; HIPAA
              </code>
            </div>
            
            <button className="w-full py-3 rounded border border-white/20 text-white font-medium hover:bg-white/5 transition-colors mb-8 cursor-pointer">
              Talk to engineering
            </button>
            
            <ul className="space-y-4 text-sm text-gray-300 mt-auto">
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Unlimited inference volume</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Sub-10ms edge deployment SLA</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Dedicated customer success engineer</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> VPC or on-premise deployment</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> SOC2 Type II &middot; HIPAA &middot; GDPR</li>
              <li className="flex gap-3"><span className="text-elysium-green">&rarr;</span> Custom SLA with financial penalties</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="text-center mt-12 text-gray-500 text-sm">
          All plans include SOC2 data handling, 99.9% uptime SLA, and zero cold-start latency.
        </div>
      </div>
    </section>
  );
};