import React, { useState } from 'react';
import { InteractiveBento } from '../components/InteractiveBento';

export const BentoSection = React.memo(() => {
  const [activeBentoId, setActiveBentoId] = useState<string>('agent-status');

  return (
    <section id="orchestration" className="py-16 md:py-24 bg-white" aria-label="Interactive Infrastructure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Operational Telemetry
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            Interactive control of your execution cluster.
          </h2>
          <p className="text-sm md:text-base text-[#5D6470] max-w-lg leading-relaxed font-sans">
            Click across our telemetry grids to inspect the live status of agent dispatchers, query memory databases, and view cryptographically-signed audit logs.
          </p>
        </div>

        {/* Localized state wrapper containing the synchronized Bento or Accordion */}
        <div className="max-w-6xl mx-auto">
          <InteractiveBento activeId={activeBentoId} setActiveId={setActiveBentoId} />
        </div>

      </div>
    </section>
  );
});

BentoSection.displayName = 'BentoSection';
