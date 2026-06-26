import React from 'react';
import { TRUSTED_COMPANIES } from '../constants';

export const Companies = React.memo(() => {
  return (
    <section className="bg-[#F8F8F6] border-y border-[#E5E7EB] py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono font-semibold uppercase tracking-widest text-[#5D6470]/60 mb-6">
          ENGINEERED FOR THE WORLD&apos;S MOST DEPLOYED TEAMS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:justify-between opacity-50 hover:opacity-85 transition-opacity duration-300">
          {TRUSTED_COMPANIES.map((company) => (
            <div 
              key={company.name} 
              className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all duration-200 cursor-default"
            >
              <span className="font-display font-bold text-base tracking-wider text-[#1A1A1A]">
                {company.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D8A]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Companies.displayName = 'Companies';
