import React from 'react';
import { RippleButton } from '../components/RippleButton';
import { Layers } from 'lucide-react';

export const Navbar = React.memo(() => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F8F6]/85 backdrop-blur-md border-b border-[#E5E7EB] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none" aria-label="Atlas OS Home">
          <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#F8F8F6] transition-transform duration-300 group-hover:rotate-6">
            <Layers className="w-4 h-4 text-[#0F9D8A]" />
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-[#1A1A1A]">
            ATLAS OS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5D6470]" aria-label="Primary Navigation">
          <a href="#features" className="hover:text-[#1A1A1A] transition-colors duration-150 focus-visible:text-[#0F9D8A]">
            Features
          </a>
          <a href="#orchestration" className="hover:text-[#1A1A1A] transition-colors duration-150 focus-visible:text-[#0F9D8A]">
            Orchestration
          </a>
          <a href="#pipelines" className="hover:text-[#1A1A1A] transition-colors duration-150 focus-visible:text-[#0F9D8A]">
            Pipelines
          </a>
          <a href="#pricing" className="hover:text-[#1A1A1A] transition-colors duration-150 focus-visible:text-[#0F9D8A]">
            Pricing
          </a>
          <a href="#faq" className="hover:text-[#1A1A1A] transition-colors duration-150 focus-visible:text-[#0F9D8A]">
            FAQ
          </a>
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#pricing" 
            className="hidden sm:inline-block text-xs font-semibold text-[#5D6470] hover:text-[#1A1A1A] px-3 py-2 transition-colors focus-visible:text-[#0F9D8A]"
          >
            Start Trial
          </a>
          <RippleButton 
            id="nav-consult-btn" 
            variant="primary" 
            onClick={() => {
              const el = document.getElementById('pricing');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Consultation
          </RippleButton>
        </div>

      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';
