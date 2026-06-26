import React from 'react';
import { TESTIMONIALS } from '../constants';
import { SpotlightCard } from '../components/SpotlightCard';

export const Testimonials = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F6] border-t border-[#E5E7EB]" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Enterprise Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            Validated by platform engineers.
          </h2>
          <p className="text-sm md:text-base text-[#5D6470] max-w-lg leading-relaxed">
            From financial reconciliations to continuous system auditing, read how leading technology teams operate Atlas OS.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {TESTIMONIALS.map((test, idx) => (
            <SpotlightCard 
              key={idx}
              id={`testimonial-card-${idx}`}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]"
            >
              {/* Quote body */}
              <blockquote className="text-sm text-[#1A1A1A] italic leading-relaxed mb-6 font-sans">
                &ldquo;{test.quote}&rdquo;
              </blockquote>

              {/* Author bio block */}
              <div className="flex items-center gap-3.5 mt-auto border-t border-gray-100 pt-4">
                <div className={`w-9 h-9 rounded-full ${test.avatarColor} text-white flex items-center justify-center font-bold text-xs uppercase font-display`}>
                  {test.author.charAt(0)}
                </div>
                
                <div>
                  <cite className="not-italic text-xs font-bold text-[#1A1A1A] block">{test.author}</cite>
                  <span className="text-[10px] text-[#5D6470] font-medium block mt-0.5">
                    {test.role}, <strong className="font-semibold text-gray-700">{test.company}</strong>
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
