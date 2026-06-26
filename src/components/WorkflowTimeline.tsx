import React, { useState, useEffect } from 'react';
import { Mail, ClipboardCheck, FileSpreadsheet, ShieldAlert, CheckCircle2, CircleDot } from 'lucide-react';

interface PipelineNode {
  id: number;
  label: string;
  sub: string;
  status: 'pending' | 'active' | 'success';
  icon: React.ReactNode;
}

export const WorkflowTimeline = React.memo(() => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nodes: PipelineNode[] = [
    {
      id: 0,
      label: 'Email Ingestion Gate',
      sub: 'Atlas OS detects inbound supplier invoice email attachment.',
      status: 'pending',
      icon: <Mail className="w-5 h-5" />
    },
    {
      id: 1,
      label: 'Cognitive Parsing & Extract',
      sub: 'Deep vector memory isolates and extracts line items and totals.',
      status: 'pending',
      icon: <ClipboardCheck className="w-5 h-5" />
    },
    {
      id: 2,
      label: 'Inventory Ledger Sync',
      sub: 'Queries company database to reconcile physical cargo receipts.',
      status: 'pending',
      icon: <FileSpreadsheet className="w-5 h-5" />
    },
    {
      id: 3,
      label: 'Compliance Signature Gate',
      sub: 'Verifies supplier security rating and routes payouts automatically.',
      status: 'pending',
      icon: <ShieldAlert className="w-5 h-5" />
    }
  ];

  const processedNodes = nodes.map((node, idx) => {
    let status: 'pending' | 'active' | 'success' = 'pending';
    if (idx < activeNode) {
      status = 'success';
    } else if (idx === activeNode) {
      status = 'active';
    }
    return { ...node, status };
  });

  return (
    <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 relative overflow-hidden font-sans select-none">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F8F8F6]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch justify-between">
        
        {/* Left Column: List-Based Step Description (6 Cols equivalent) */}
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0F9D8A] animate-pulse-subtle" />
            <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest">Autonomous Pipeline Sequence</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold font-display text-[#1A1A1A] leading-tight max-w-md">
            Watch actions execute in deterministic sequence.
          </h3>
          <p className="text-sm text-[#5D6470] leading-relaxed max-w-sm">
            Atlas OS runs self-correcting business tasks. Watch the steps coordinate instantly with SOC2 compliance.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-gray-500 border-t border-gray-100 pt-5">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F9D8A]" /> No cold starts
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F9D8A]" /> E2E Encrypted Payload
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Diagram Flow with SVG paths (6 Cols equivalent) */}
        <div className="flex-1 bg-[#F8F8F6] border border-[#E5E7EB] rounded-xl p-5 flex flex-col gap-6 relative">
          
          {processedNodes.map((node, idx) => {
            const isLast = idx === nodes.length - 1;
            
            return (
              <div key={node.id} className="relative flex items-start gap-4">
                
                {/* Visual Connection line & node indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                    node.status === 'success' 
                      ? 'bg-[#0F9D8A]/10 border-[#0F9D8A] text-[#0F9D8A]' 
                      : node.status === 'active'
                        ? 'bg-[#0F9D8A] border-[#0F9D8A] text-white shadow-[0_0_12px_rgba(15,157,138,0.4)]'
                        : 'bg-white border-gray-200 text-gray-400'
                  }`}>
                    {node.status === 'success' ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      node.icon
                    )}
                  </div>

                  {!isLast && (
                    <div className="w-0.5 h-12 relative my-1">
                      {/* Gray track line */}
                      <div className="absolute inset-0 bg-gray-200" />
                      {/* Active green progress segment */}
                      <div 
                        className="absolute top-0 left-0 right-0 bg-[#0F9D8A] transition-all duration-1000 ease-in-out"
                        style={{ 
                          height: node.status === 'success' ? '100%' : '0%',
                          opacity: node.status === 'success' ? 1 : 0
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Node Metadata Text */}
                <div className="flex-1 pt-0.5 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`text-sm font-semibold transition-colors duration-300 ${
                      node.status === 'active' ? 'text-[#0F9D8A]' : 'text-[#1A1A1A]'
                    }`}>
                      {node.label}
                    </h4>
                    {node.status === 'active' && (
                      <span className="flex items-center gap-1 text-[9px] font-mono font-medium text-[#0F9D8A] bg-[#0F9D8A]/10 px-1.5 py-0.5 rounded border border-[#0F9D8A]/20">
                        <CircleDot className="w-2.5 h-2.5 animate-pulse" /> EXECUTING
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#5D6470] mt-0.5 leading-relaxed">{node.sub}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
});

WorkflowTimeline.displayName = 'WorkflowTimeline';
