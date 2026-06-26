import React from 'react';
import { FEATURES } from '../constants';
import { SpotlightCard } from '../components/SpotlightCard';
import { 
  Bot, 
  GitCommit, 
  Database, 
  Scale, 
  ShieldCheck, 
  Activity, 
  Workflow, 
  History 
} from 'lucide-react';

export const Features = React.memo(() => {
  
  const getFeatureIcon = (id: string) => {
    const size = 20;
    const color = '#0F9D8A';
    
    switch (id) {
      case 'ai-agents':
        return <Bot size={size} color={color} className="animate-float-subtle" />;
      case 'workflow-builder':
        return <Workflow size={size} color={color} />;
      case 'knowledge-hub':
        return <Database size={size} color={color} />;
      case 'decision-engine':
        return <Scale size={size} color={color} />;
      case 'enterprise-security':
        return <ShieldCheck size={size} color={color} />;
      case 'analytics':
        return <Activity size={size} color={color} />;
      case 'api-integration':
        return <GitCommit size={size} color={color} />;
      case 'monitoring':
        return <History size={size} color={color} />;
      default:
        return <Bot size={size} color={color} />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-[#F8F8F6]" aria-label="Feature Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#1A1A1A] mb-4">
            An operating system built for absolute precision.
          </h2>
          <p className="text-sm md:text-base text-[#5D6470] max-w-lg leading-relaxed">
            Every layer of the Atlas architecture is designed with high structural fidelity, optimizing latency, security, and developer oversight.
          </p>
        </div>

        {/* Features 8-Card Grid with customized Spotlight effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat) => (
            <SpotlightCard 
              key={feat.id} 
              id={`feature-card-${feat.id}`}
              className="bg-white p-6 border border-[#E5E7EB] rounded-2xl flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#0F9D8A]/10 rounded-xl">
                    {getFeatureIcon(feat.id)}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {feat.badge}
                  </span>
                </div>

                {/* Text Description */}
                <h3 className="text-sm font-semibold text-[#1A1A1A] font-display mb-2">{feat.title}</h3>
                <p className="text-xs text-[#5D6470] leading-relaxed mb-4">{feat.description}</p>
              </div>

              {/* Status footer inside card */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D8A]" /> Compiled: Verified
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
});

Features.displayName = 'Features';
