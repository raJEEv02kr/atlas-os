import React, { useState, useCallback, useMemo } from 'react';
import { PRICING_PLANS_DATA } from '../constants';
import { Currency, BillingPeriod } from '../types';
import { calculatePrice, CURRENCY_MAP } from '../utils/pricingCalculator';
import { RippleButton } from '../components/RippleButton';
import { SpotlightCard } from '../components/SpotlightCard';
import { Check, Info, ShieldCheck, Zap } from 'lucide-react';

export const Pricing = React.memo(() => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  // Callback handlers to update local state cleanly
  const selectCurrency = useCallback((cur: Currency) => {
    setCurrency(cur);
  }, []);

  const toggleBilling = useCallback(() => {
    setBillingPeriod((prev) => (prev === 'monthly' ? 'annual' : 'monthly'));
  }, []);

  // Pricing matrix data calculated and memoized locally for speed
  const plansWithPricing = useMemo(() => {
    return PRICING_PLANS_DATA.map((plan) => {
      const calc = calculatePrice(plan.config.basePrice, currency, billingPeriod);
      return {
        ...plan,
        pricing: calc
      };
    });
  }, [currency, billingPeriod]);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-t border-[#E5E7EB]" aria-label="Flexible Pricing Options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Predictable Investment Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            Transparent pricing for teams of any size.
          </h2>
          <p className="text-sm md:text-base text-[#5D6470] max-w-lg leading-relaxed">
            All tiers include isolated database schemas, secure vector memory namespaces, and SLA guarantees. Select the license right for your scale.
          </p>
        </div>

        {/* Currency & Billing Control Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 select-none">
          
          {/* Currency chip selector */}
          <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-xl p-1 flex gap-1.5 shadow-xs">
            {(['USD', 'EUR', 'INR'] as Currency[]).map((cur) => {
              const isActive = currency === cur;
              return (
                <button
                  key={cur}
                  type="button"
                  onClick={() => selectCurrency(cur)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider rounded-lg transition-all duration-150 focus:outline-none ${
                    isActive 
                      ? 'bg-[#1A1A1A] text-[#F8F8F6] shadow-sm' 
                      : 'text-[#5D6470] hover:text-[#1A1A1A]'
                  }`}
                  aria-label={`Select ${cur} Currency`}
                >
                  {cur} ({CURRENCY_MAP[cur].symbol})
                </button>
              );
            })}
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center gap-3">
            <span className={`text-xs font-medium font-sans transition-colors duration-150 ${
              billingPeriod === 'monthly' ? 'text-[#1A1A1A]' : 'text-[#5D6470]'
            }`}>
              Billed Monthly
            </span>
            
            <button
              type="button"
              onClick={toggleBilling}
              className="w-12 h-6 bg-[#E5E7EB] hover:bg-gray-300 rounded-full p-1 transition-colors duration-150 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8A]"
              aria-label="Toggle Billing Period"
            >
              <div 
                className="w-4 h-4 bg-white rounded-full shadow-xs transition-transform duration-200"
                style={{
                  transform: billingPeriod === 'annual' ? 'translateX(24px)' : 'translateX(0px)',
                  backgroundColor: billingPeriod === 'annual' ? '#0F9D8A' : '#FFFFFF'
                }}
              />
            </button>
            
            <span className={`text-xs font-medium font-sans flex items-center gap-1.5 transition-colors duration-150 ${
              billingPeriod === 'annual' ? 'text-[#0F9D8A] font-semibold' : 'text-[#5D6470]'
            }`}>
              Billed Annually
              <span className="text-[10px] bg-[#0F9D8A]/10 border border-[#0F9D8A]/20 px-2 py-0.5 rounded-full font-bold uppercase font-mono">
                Save 20%
              </span>
            </span>
          </div>

        </div>

        {/* 3-Card Interactive Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plansWithPricing.map((plan) => {
            const isProfessional = plan.popular;
            
            return (
              <SpotlightCard 
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 border h-full transition-all duration-300 relative ${
                  isProfessional 
                    ? 'border-[#0F9D8A] shadow-lg md:scale-[1.03] z-20' 
                    : 'border-[#E5E7EB] shadow-xs'
                }`}
              >
                <div>
                  
                  {/* Card Badge Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-sm font-bold font-display text-[#1A1A1A]">{plan.name}</span>
                    {isProfessional && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-[#0F9D8A] bg-[#0F9D8A]/10 border border-[#0F9D8A]/20 px-2.5 py-0.5 rounded-full">
                        <Zap className="w-2.5 h-2.5 fill-current" /> Recommended
                      </span>
                    )}
                  </div>

                  {/* Plan Pitch Description */}
                  <p className="text-xs text-[#5D6470] leading-relaxed mb-6">{plan.description}</p>

                  {/* Core Price Counter */}
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <span className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[#1A1A1A]">
                      {plan.pricing.symbol}{plan.pricing.monthlyAmount}
                    </span>
                    <span className="text-xs text-[#5D6470] font-sans font-semibold">
                      / month
                    </span>
                  </div>

                  {/* Summary of Billed Totals */}
                  <div className="h-4 mb-8">
                    {billingPeriod === 'annual' ? (
                      <p className="text-[10px] font-mono text-gray-400">
                        Billed annually ({plan.pricing.symbol}{plan.pricing.totalBilled}/yr)
                      </p>
                    ) : (
                      <p className="text-[10px] font-mono text-gray-400">
                        Billed month-to-month
                      </p>
                    )}
                  </div>

                  {/* Bulleted Feature Requirements */}
                  <div className="border-t border-gray-100 pt-6 mb-8">
                    <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase block mb-4">
                      What&apos;s Included:
                    </span>
                    <ul className="flex flex-col gap-3 text-left">
                      {plan.config.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]">
                          <Check className="w-4 h-4 text-[#0F9D8A] shrink-0 pt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card CTA Action Button */}
                <div className="mt-auto">
                  <RippleButton
                    id={`pricing-action-${plan.id}`}
                    variant={isProfessional ? 'accent' : 'secondary'}
                    className="w-full text-center"
                    onClick={() => alert(`Starting provisioning thread for ${plan.name} clusters...`)}
                  >
                    Deploy {plan.name}
                  </RippleButton>
                  
                  <p className="text-[9px] text-center text-gray-400 mt-3 font-mono">
                    Instant automated cluster boot in &lt;10s
                  </p>
                </div>

              </SpotlightCard>
            );
          })}
        </div>

        {/* Security & Isolation guarantee stamp */}
        <div className="max-w-xl mx-auto mt-16 p-4 bg-[#F8F8F6] border border-[#E5E7EB] rounded-xl flex items-center gap-3 text-left">
          <ShieldCheck className="w-5 h-5 text-[#0F9D8A] shrink-0" />
          <p className="text-[11px] text-[#5D6470] leading-relaxed font-sans">
            <strong className="text-[#1A1A1A]">Sovereign Execution Clause:</strong> Every database index and agent thread compiles into isolated runtime namespaces. We never train public networks on proprietary inputs.
          </p>
        </div>

      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';
