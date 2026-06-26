import React, { useState, useCallback } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  id: string;
}

const FaqItem = React.memo(({ question, answer, id }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="border-b border-[#E5E7EB] py-4" id={id}>
      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-center justify-between text-left py-2 font-display font-semibold text-sm sm:text-base text-[#1A1A1A] hover:text-[#0F9D8A] focus:outline-none transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="shrink-0 p-1 bg-gray-100 rounded-lg ml-4">
          {isOpen ? (
            <Minus size={14} className="text-[#0F9D8A] transition-transform duration-200 rotate-180" />
          ) : (
            <Plus size={14} className="text-gray-500 transition-transform duration-200" />
          )}
        </span>
      </button>

      {/* Accordion panel using max-height transition */}
      <div
        className="transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '220px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden'
        }}
      >
        <p className="text-xs sm:text-sm text-[#5D6470] leading-relaxed pt-2 pb-4 max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
});

FaqItem.displayName = 'FaqItem';

export const FAQ = React.memo(() => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-[#E5E7EB]" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Operational Intelligence
          </span>
          <h2 className="text-3xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5D6470] max-w-md leading-relaxed">
            Deep insights into the compilation safety, VPC deployments, and core scheduling infrastructure of Atlas OS.
          </p>
        </div>

        {/* FAQ Accordion List with highly-isolated item states */}
        <div className="flex flex-col">
          {FAQS.map((faq, idx) => (
            <FaqItem 
              key={idx} 
              id={`faq-item-${idx}`}
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
