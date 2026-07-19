import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, duration, suffix = "", prefix = "", decimals = 0 }: { target: number, duration: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out quint
      const easeProgress = 1 - Math.pow(1 - progress, 5);
      
      setCount(easeProgress * target);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const ModelRouter = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-black/40 border-y border-[rgba(255,255,255,0.05)] z-10 relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Right model.<br/>Right call. Every time.</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Elysium reads every request — complexity, token count, budget cap — and routes to the optimal model in real time. You write one API call. We handle the arbitrage.
            </p>
            <div className="inline-flex items-center gap-2 text-elysium-green hover:glow-green transition-all cursor-pointer font-medium">
              Explore routing logic &rarr;
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-elysium-green mb-2 tracking-tighter">
                <Counter target={5} duration={1.5} />
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">models in rotation</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-elysium-green mb-2 tracking-tighter">
                <Counter target={61} duration={1.5} suffix="ms" />
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">p99 latency</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-elysium-green mb-2 tracking-tighter">
                <Counter target={99.94} duration={1.5} suffix="%" decimals={2} />
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">router uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-elysium-green mb-2 tracking-tighter">
                <Counter target={-68} duration={1.5} prefix="" suffix="%" />
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">avg cost savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};