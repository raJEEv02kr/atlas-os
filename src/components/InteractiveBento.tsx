import React, { useCallback, useState } from 'react';
import { BENTO_FEATURES } from '../constants';
import { ShieldCheck, Activity, Search, BookOpen, Layers, CheckCircle2, ChevronDown, Award } from 'lucide-react';

interface InteractiveBentoProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

export const InteractiveBento = React.memo(({ activeId, setActiveId }: InteractiveBentoProps) => {
  
  // Custom cursor background tracking for the active bento card
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  }, []);

  const getIcon = (id: string, active: boolean) => {
    const size = 20;
    const color = active ? '#0F9D8A' : '#5D6470';
    
    switch (id) {
      case 'agent-status':
        return <Activity size={size} color={color} className={`transition-transform duration-300 ${active ? 'scale-110 rotate-12' : ''}`} />;
      case 'workflow-pipeline':
        return <Layers size={size} color={color} className={`transition-transform duration-300 ${active ? 'scale-110 -rotate-12' : ''}`} />;
      case 'knowledge-retrieval':
        return <Search size={size} color={color} className={`transition-transform duration-300 ${active ? 'scale-110 scale-x-[-1]' : ''}`} />;
      case 'audit-ledger':
        return <ShieldCheck size={size} color={color} className={`transition-transform duration-300 ${active ? 'scale-110 translate-y-[-2px]' : ''}`} />;
      default:
        return <Award size={size} color={color} />;
    }
  };

  return (
    <div className="w-full font-sans select-none">
      
      {/* 1. DESKTOP BENTO GRID VIEW (md:grid) */}
      <div className="hidden md:grid grid-cols-12 gap-6">
        
        {/* Bento Selector Cards (Left 7 Cols) */}
        <div className="col-span-7 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {BENTO_FEATURES.map((feat) => {
              const isActive = activeId === feat.id;
              const isHovered = hoveredCardId === feat.id;
              
              return (
                <div
                  key={feat.id}
                  id={`bento-card-${feat.id}`}
                  onClick={() => setActiveId(feat.id)}
                  onMouseMove={(e) => handleMouseMove(e, feat.id)}
                  onMouseEnter={() => setHoveredCardId(feat.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className={`cursor-pointer rounded-xl p-5 border text-left transition-all duration-300 relative overflow-hidden bg-white ${
                    isActive 
                      ? 'border-[#0F9D8A] shadow-md ring-1 ring-[#0F9D8A]/30' 
                      : 'border-[#E5E7EB] hover:border-gray-400/50 hover:shadow-sm'
                  }`}
                  style={{
                    transform: isHovered 
                      ? 'perspective(1000px) translateY(-3px) rotateX(1deg) rotateY(1deg)' 
                      : 'perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)',
                    willChange: 'transform'
                  }}
                >
                  {/* Reacting Spot Light Background */}
                  {isHovered && (
                    <div
                      className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(15, 157, 138, 0.08), transparent 80%)`,
                      }}
                    />
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive ? 'bg-[#0F9D8A]/10' : 'bg-gray-100'
                    }`}>
                      {getIcon(feat.id, isActive)}
                    </div>
                    <span className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${
                      isActive ? 'text-[#0F9D8A]' : 'text-gray-400'
                    }`}>
                      {feat.id.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1 font-display leading-tight">{feat.title}</h3>
                  <p className="text-xs text-[#5D6470] line-clamp-2 leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>

          {/* Prompt Sandbox Widget under Grid Selector */}
          <div className="bg-[#1A1A1A] text-white rounded-xl p-5 border border-white/10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <h4 className="text-xs font-mono text-[#0F9D8A] mb-2 uppercase tracking-widest">SYSTEM DECLARATIVE SCHEMA</h4>
            <div className="bg-black/40 rounded-lg p-3.5 font-mono text-[11px] text-emerald-400/90 leading-relaxed border border-white/5 no-scrollbar max-h-[140px] overflow-y-auto">
              <div><span className="text-white/40">01</span> <span className="text-pink-400">version</span>: <span className="text-yellow-200">&quot;2026.04.1&quot;</span></div>
              <div><span className="text-white/40">02</span> <span className="text-pink-400">infrastructure</span>:</div>
              <div><span className="text-white/40">03</span>   <span className="text-pink-400">engine</span>: <span className="text-yellow-200">AtlasOS-Autonomous-Fleet</span></div>
              <div><span className="text-white/40">04</span>   <span className="text-pink-400">security</span>: <span className="text-yellow-200">isolated-runtime</span></div>
              <div><span className="text-white/40">05</span> <span className="text-pink-400">pipeline</span>:</div>
              <div><span className="text-white/40">06</span>   - <span className="text-pink-400">name</span>: <span className="text-white">reconcile_and_report</span></div>
              <div><span className="text-white/40">07</span>     <span className="text-pink-400">trigger</span>: <span className="text-yellow-200">webhook.invoice_received</span></div>
              <div><span className="text-white/40">08</span>     <span className="text-pink-400">agent_fleet</span>: [BillingAgent-01, ComplianceAgent-02]</div>
            </div>
          </div>
        </div>

        {/* Bento Detailed Analytics Content (Right 5 Cols) */}
        <div className="col-span-5 bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between h-full shadow-xs relative overflow-hidden">
          {/* Subtle decoration light */}
          <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#0F9D8A]/5 rounded-full blur-2xl pointer-events-none" />

          {(() => {
            const activeFeat = BENTO_FEATURES.find((f) => f.id === activeId) || BENTO_FEATURES[0];
            return (
              <div className="h-full flex flex-col justify-between gap-6" id={`bento-detail-${activeFeat.id}`}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-[#0F9D8A] bg-[#0F9D8A]/10 px-2.5 py-0.5 rounded-full border border-[#0F9D8A]/20">
                      Active Node
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">SYSTEM_RECALL: LIVE</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1A1A] font-display mb-2">{activeFeat.detailTitle}</h3>
                  <p className="text-sm text-[#5D6470] leading-relaxed mb-6">{activeFeat.detailDesc}</p>
                </div>

                {/* Simulated Graph / Stats Visual inside detail area */}
                <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-lg p-4 mb-4">
                  <div className="text-xs font-mono text-[#5D6470] mb-3">TELEMETRY_STATISTICS</div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {activeFeat.stats?.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="text-2xl font-bold font-display text-[#1A1A1A] tracking-tight">{stat.value}</span>
                        <span className="text-[10px] font-medium text-[#5D6470] uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Micro-visual line graphs representing system memory */}
                  <div className="mt-4 flex items-center gap-1.5 h-6">
                    {[30, 45, 60, 40, 50, 70, 85, 90, 65, 80, 75, 95].map((val, idx) => (
                      <div 
                        key={idx} 
                        className="bg-[#0F9D8A] rounded-xs flex-1 transition-all duration-500 ease-out"
                        style={{ 
                          height: `${val}%`, 
                          opacity: activeId === 'agent-status' ? 0.3 + (idx * 0.05) : 0.2,
                          backgroundColor: activeId === 'audit-ledger' ? '#4B5563' : '#0F9D8A'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#5D6470]">
                  <CheckCircle2 size={14} className="text-[#0F9D8A]" /> Cryptographically signed by Atlas Engine Core
                </div>
              </div>
            );
          })()}
        </div>

      </div>

      {/* 2. MOBILE VIEW: AUTOMATICALLY CONVERTS TO ACCORDION (block md:hidden) */}
      <div className="block md:hidden flex flex-col gap-3">
        {BENTO_FEATURES.map((feat) => {
          const isActive = activeId === feat.id;
          
          return (
            <div
              key={feat.id}
              id={`mobile-bento-accordion-${feat.id}`}
              className={`border rounded-lg overflow-hidden transition-all duration-300 bg-white ${
                isActive ? 'border-[#0F9D8A] shadow-sm' : 'border-[#E5E7EB]'
              }`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => setActiveId(feat.id)}
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#0F9D8A]/10' : 'bg-gray-100'}`}>
                    {getIcon(feat.id, isActive)}
                  </div>
                  <div>
                    <span className={`block text-[9px] font-mono tracking-wider uppercase ${isActive ? 'text-[#0F9D8A]' : 'text-gray-400'}`}>
                      {feat.id.replace('-', ' ')}
                    </span>
                    <h3 className="text-xs font-semibold text-[#1A1A1A] font-display">{feat.title}</h3>
                  </div>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`text-[#5D6470] transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Accordion Content Panel (Dynamic Max Height for performant smooth open/close) */}
              <div
                className="transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isActive ? '340px' : '0px',
                  opacity: isActive ? 1 : 0,
                  overflow: 'hidden'
                }}
              >
                <div className="p-4 border-t border-[#E5E7EB] bg-[#F8F8F6]/50 flex flex-col gap-3.5 text-left">
                  <p className="text-xs text-[#5D6470] leading-relaxed">{feat.detailDesc}</p>
                  
                  {/* Local Mini-Stats visual for mobile context */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-white border border-[#E5E7EB] rounded-lg">
                    {feat.stats?.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="text-lg font-bold font-display text-[#1A1A1A]">{stat.value}</span>
                        <span className="text-[9px] font-mono text-[#5D6470] uppercase">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#5D6470]">
                    <CheckCircle2 size={12} className="text-[#0F9D8A]" /> Authenticated secure thread
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
});

InteractiveBento.displayName = 'InteractiveBento';
