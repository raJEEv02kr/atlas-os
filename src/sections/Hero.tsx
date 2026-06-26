import React, { useState, useCallback } from 'react';
import { HeroDashboard } from '../components/HeroDashboard';
import { RippleButton } from '../components/RippleButton';
import { ArrowRight, Play, Calendar } from 'lucide-react';

export const Hero = React.memo(() => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  }, []);

  const scrollToPricing = useCallback(() => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const playDemo = useCallback(() => {
    alert("Synthesizing system run... Atlas OS Live Demonstration cluster sandbox connecting to node-01.");
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 overflow-hidden bg-[#F8F8F6] select-none text-left"
      aria-label="Hero Introduction"
    >
      {/* Engineering Grid & Texture Layers */}
      <div className="absolute inset-0 engineering-grid opacity-75 pointer-events-none" />
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      {/* Dynamic Cursor Spotlight Effect in the Section Background */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 1 : 0.6,
          background: `radial-gradient(800px circle at ${coords.x}px ${coords.y}px, rgba(15, 157, 138, 0.05), transparent 70%)`
        }}
      />

      {/* Static premium radial soft accent glow in top-right */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0F9D8A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Pitch (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-start">
            
            {/* Version Pill tag */}
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider text-[#1A1A1A]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D8A]" />
              ATLAS OS VERSION 2.4.0
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#1A1A1A] leading-[1.05]">
              Your Business <br />
              <span className="text-[#0F9D8A]">Runs Itself.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#5D6470] font-sans leading-relaxed max-w-lg">
              Atlas OS connects your workflows, data, AI agents and business operations into one intelligent operating system. Built for continuous deterministic automation.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
              <RippleButton 
                id="hero-start-btn" 
                variant="primary" 
                onClick={scrollToPricing}
                className="w-full sm:w-auto"
              >
                Start Building <ArrowRight className="w-4 h-4 ml-1" />
              </RippleButton>
              
              <RippleButton 
                id="hero-demo-btn" 
                variant="secondary" 
                onClick={playDemo}
                className="w-full sm:w-auto"
              >
                <Play className="w-3.5 h-3.5 fill-current text-gray-700 mr-1" /> Watch Demo
              </RippleButton>
              
              <RippleButton 
                id="hero-consult-btn" 
                variant="minimal" 
                onClick={scrollToPricing}
                className="w-full sm:w-auto hidden md:inline-flex"
              >
                <Calendar className="w-4 h-4 mr-1 text-[#5D6470]" /> Book Consultation
              </RippleButton>
            </div>

            {/* Telemetry quick stats footer */}
            <div className="grid grid-cols-3 gap-6 border-t border-[#E5E7EB] pt-6 mt-4 w-full">
              <div>
                <span className="block text-xl font-bold font-display text-[#1A1A1A] tracking-tight">100%</span>
                <span className="text-[10px] font-mono uppercase text-[#5D6470] tracking-wider">Audit Trace</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-display text-[#1A1A1A] tracking-tight">2.4M</span>
                <span className="text-[10px] font-mono uppercase text-[#5D6470] tracking-wider">Tasks Daily</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-display text-[#1A1A1A] tracking-tight">0ms</span>
                <span className="text-[10px] font-mono uppercase text-[#5D6470] tracking-wider">Cold Starts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Enterprise Dashboard (7 Cols) */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl relative">
              {/* Subtle back drop shadows to highlight the dashboard */}
              <div className="absolute inset-0 bg-black/5 blur-2xl rounded-2xl transform translate-y-3 pointer-events-none" />
              <HeroDashboard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
