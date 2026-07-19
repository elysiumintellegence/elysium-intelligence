import React from 'react';
import { CanvasAnimation } from '@/components/CanvasAnimation';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsBar } from '@/components/StatsBar';
import { HowItWorks } from '@/components/HowItWorks';
import { ModelRouter } from '@/components/ModelRouter';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { ResearchSection } from '@/components/ResearchSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-elysium-green/30 selection:text-white overflow-x-hidden">
      <CanvasAnimation />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ModelRouter />
      <Testimonials />
      <Pricing />
      <ResearchSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;