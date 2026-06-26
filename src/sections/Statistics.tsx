import React from 'react';
import { STATISTICS } from '../constants';
import { SpotlightCard } from '../components/SpotlightCard';

export const Statistics = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Key Performance Indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            SLA & Telemetry Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            Backed by deterministic guarantees.
          </h2>
          <p className="text-sm md:text-base text-[#5D6470] max-w-lg leading-relaxed font-sans">
            Whether dispatching inventory agents or processing raw transaction vectors, Atlas OS is designed to meet strict enterprise throughput demands.
          </p>
        </div>

        {/* Stats Grid using custom Spotlight tracking cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((stat, idx) => (
            <SpotlightCard 
              key={idx} 
              id={`stat-card-${idx}`} 
              className="text-left flex flex-col justify-between min-h-[160px] bg-[#F8F8F6]/40 p-5"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-semibold">
                  {stat.label}
                </span>
                <p className="text-4xl md:text-5xl font-bold font-display text-[#1A1A1A] tracking-tight mt-1 mb-2">
                  {stat.value}{stat.suffix}
                </p>
              </div>
              <p className="text-xs text-[#5D6470] leading-relaxed">
                {stat.sub}
              </p>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
});

Statistics.displayName = 'Statistics';
