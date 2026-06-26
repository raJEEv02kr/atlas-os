import React, { useState } from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export const Footer = React.memo(() => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Enrolling ${email} into the Atlas OS technical briefings pipeline...`);
    setEmail('');
  };

  return (
    <footer className="bg-[#F8F8F6] border-t border-[#E5E7EB] pt-16 pb-12 select-none" aria-label="Global Directory Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 mb-12 border-b border-[#E5E7EB]">
          
          {/* Logo & Pitch Column (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4 text-left">
            <a href="#" className="flex items-center gap-2 focus:outline-none" aria-label="Atlas OS homepage">
              <div className="w-7 h-7 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#F8F8F6]">
                <Layers className="w-3.5 h-3.5 text-[#0F9D8A]" />
              </div>
              <span className="font-display font-bold text-base tracking-wider text-[#1A1A1A]">
                ATLAS OS
              </span>
            </a>
            <p className="text-xs text-[#5D6470] leading-relaxed max-w-xs">
              The operating system for autonomous enterprise networks. Built for high-throughput deterministic business processes.
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="w-full max-w-sm mt-3 relative flex items-center" aria-label="Newsletter subscription">
              <input 
                type="email" 
                placeholder="Enter email for technical briefings"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] rounded-lg pl-3.5 pr-10 py-2 text-xs font-sans text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#0F9D8A]"
                required
                aria-label="Email address for newsletters"
              />
              <button 
                type="submit"
                className="absolute right-1.5 p-1.5 bg-[#1A1A1A] hover:bg-[#2C2C2C] text-white rounded-md transition-colors"
                aria-label="Submit newsletter subscription"
              >
                <ArrowRight size={12} className="text-[#0F9D8A]" />
              </button>
            </form>
          </div>

          {/* Group 1: Product (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-[10px] font-mono uppercase text-[#1A1A1A] tracking-wider font-bold mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#5D6470]">
              <li><a href="#features" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Features</a></li>
              <li><a href="#orchestration" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Fleet Orchestration</a></li>
              <li><a href="#pipelines" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Workflows</a></li>
              <li><a href="#pricing" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Licensing Matrix</a></li>
            </ul>
          </div>

          {/* Group 2: Platform / Engineering (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-[10px] font-mono uppercase text-[#1A1A1A] tracking-wider font-bold mb-4">Engineering</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#5D6470]">
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">API Gateway</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Security Architecture</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">SLA Guarantees</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Sovereign Runtimes</a></li>
            </ul>
          </div>

          {/* Group 3: Resources (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-[10px] font-mono uppercase text-[#1A1A1A] tracking-wider font-bold mb-4">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#5D6470]">
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Technical Briefings</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">VPC Integration Guides</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">System Telemetry</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Network Node Status</a></li>
            </ul>
          </div>

          {/* Group 4: Legal / Compliance (2 Cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-[10px] font-mono uppercase text-[#1A1A1A] tracking-wider font-bold mb-4">Compliance</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#5D6470]">
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">SOC2 Certification</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">ISO-27001 Audits</a></li>
              <li><a href="#" className="hover:text-[#1A1A1A] transition-colors focus:outline-none">Terms of Deployment</a></li>
            </ul>
          </div>

        </div>

        {/* Lower row: Copyright and stamps */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5D6470] font-mono">
          <p>© 2026 Atlas OS Inc. All systems sovereign. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D8A]" /> Node-Cluster: Optimal
            </span>
            <span className="text-gray-300">|</span>
            <span>Ref: SOC2-TYPE-II</span>
          </div>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
