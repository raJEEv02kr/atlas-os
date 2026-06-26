import React from 'react';
import { RippleButton } from '../components/RippleButton';
import { Calendar, Layers } from 'lucide-react';

export const CTA = React.memo(() => {
  
  const handleStart = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsult = () => {
    alert("Atlas Solutions Engineers are standing by. Dispatching consult session request...");
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F8F6] border-t border-[#E5E7EB]" aria-label="Call to Action">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek, deep high-contrast enterprise container block */}
        <div className="bg-[#1A1A1A] text-[#F8F8F6] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
          
          {/* Engineering grid in the background of dark card */}
          <div className="absolute inset-0 engineering-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 noise-bg pointer-events-none" />
          
          {/* Subtle decoration accent glow */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#0F9D8A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 text-[#0F9D8A] animate-float-subtle">
            <Layers className="w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight max-w-2xl leading-[1.1] mb-4">
            Deploy Atlas OS. <br />
            Secure your autonomous future.
          </h2>
          
          <p className="text-sm md:text-base text-gray-400 max-w-lg leading-relaxed mb-8">
            Connect your databases, load declarative workflows, dispatch isolated agent runtimes, and watch your business operations execute autonomously.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <RippleButton 
              id="cta-start-btn" 
              variant="accent" 
              onClick={handleStart}
              className="w-full sm:w-auto"
            >
              Start Deployment
            </RippleButton>
            
            <RippleButton 
              id="cta-consult-btn" 
              variant="secondary" 
              onClick={handleConsult}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border-white/15"
            >
              <Calendar className="w-4 h-4 mr-1 text-gray-300" /> Book Consultation
            </RippleButton>
          </div>

          <p className="text-[10px] font-mono text-gray-500 mt-6 tracking-wider uppercase">
            Sovereign isolated nodes • 99.99% Guaranteed SLA uptime
          </p>

        </div>

      </div>
    </section>
  );
});

CTA.displayName = 'CTA';
