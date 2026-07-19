import React from 'react';

export const StatsBar = () => {
  return (
    <div className="w-full border-t border-[rgba(255,255,255,0.05)] bg-[#050505] py-8 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-6">
          Running in production at 500+ engineering orgs
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400 font-mono text-sm sm:text-base opacity-70">
          <span>AEROSPACE</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>GLOBAL FIN</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>NEXUS LOGISTICS</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>QUANTUM HEALTH</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>SYNTH CORE</span>
        </div>
      </div>
    </div>
  );
};