import React from 'react';
import { Hexagon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-[rgba(60,255,20,0.1)] pt-16 pb-8 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
              <Hexagon className="w-8 h-8 text-elysium-green" strokeWidth={1.5} />
              <span className="text-xl text-white tracking-tight group-hover:glow-green transition-all duration-300">
                <strong className="font-bold">Elysium</strong><span className="font-normal">Intelligence</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Intelligence that ships to production. We build the infrastructure so you can build the product.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-elysium-green transition-colors">Ingestion</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">AutoML Pipeline</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Model Router</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Observability</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Security & VPC</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-elysium-green transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">CLI Reference</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Engineering Blog</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-elysium-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-elysium-green transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>&copy; 2026 Elysium Intelligence. Built for engineers.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};