import React from 'react';
import { WorkflowTimeline } from '../components/WorkflowTimeline';

export const WorkflowSection = React.memo(() => {
  return (
    <section id="pipelines" className="py-16 md:py-24 bg-[#F8F8F6] border-t border-[#E5E7EB]" aria-label="Declarative Workflows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Deterministic Pipeline Execution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            Zero-latency, self-correcting business pipelines.
          </h2>
          <p className="text-sm md:text-base text-[#5D6470] max-w-lg leading-relaxed font-sans">
            Define steps declaratively in YAML, and let Atlas OS coordinate state changes, execute fallback rollbacks, and handle human-in-the-loop overrides.
          </p>
        </div>

        {/* Workflow Timeline visual panel */}
        <div className="max-w-5xl mx-auto">
          <WorkflowTimeline />
        </div>

      </div>
    </section>
  );
});

WorkflowSection.displayName = 'WorkflowSection';
