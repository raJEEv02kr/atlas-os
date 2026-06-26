import React, { useState, useEffect, useMemo } from 'react';
import { Play, CheckCircle2, AlertCircle, RefreshCw, Layers, ShieldCheck, Database, Zap } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  agent: string;
  status: 'running' | 'completed' | 'queued' | 'warning';
  time: string;
  progress: number;
}

export const HeroDashboard = React.memo(() => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 't1', name: 'Synthesize invoice payloads', agent: 'BillingAgent-04', status: 'completed', time: '12s ago', progress: 100 },
    { id: 't2', name: 'Assess contract risk criteria', agent: 'ComplianceAgent-02', status: 'running', time: 'Active', progress: 64 },
    { id: 't3', name: 'Index supplier catalog vectors', agent: 'IndexAgent-09', status: 'queued', time: 'Queued', progress: 0 },
    { id: 't4', name: 'Trigger emergency audit rollback', agent: 'SecurityAgent-01', status: 'warning', time: 'Resolved', progress: 100 }
  ]);

  const [activeStep, setActiveStep] = useState(0);
  const [throughput, setThroughput] = useState<number[]>([42, 45, 52, 48, 55, 62, 59, 68, 71, 74, 69, 78]);

  // Periodic simulated state updates
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Update task progress & rotate tasks
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          if (task.status === 'running') {
            const nextProgress = task.progress + 8;
            if (nextProgress >= 100) {
              return { ...task, status: 'completed', progress: 100, time: 'Just now' };
            }
            return { ...task, progress: nextProgress };
          }
          if (task.status === 'completed' && Math.random() > 0.6) {
            // Re-queue or start another task
            return {
              ...task,
              name: getRandomTaskName(),
              agent: getRandomAgentName(),
              status: 'running',
              progress: 0,
              time: 'Active'
            };
          }
          if (task.status === 'queued' && Math.random() > 0.7) {
            return { ...task, status: 'running', progress: 10, time: 'Active' };
          }
          return task;
        });
      });

      // 2. Advance active step in the pipeline
      setActiveStep((prev) => (prev + 1) % 4);

      // 3. Update throughput with standard random walk
      setThroughput((prev) => {
        const nextVal = Math.max(30, Math.min(95, prev[prev.length - 1] + (Math.random() > 0.5 ? 4 : -4)));
        return [...prev.slice(1), Math.round(nextVal)];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getRandomTaskName = () => {
    const names = [
      'Validate ledger consistency',
      'Optimize delivery intervals',
      'Resolve pricing mismatch',
      'Ingest CRM audit data',
      'Sift unstructured feedback'
    ];
    return names[Math.floor(Math.random() * names.length)];
  };

  const getRandomAgentName = () => {
    const agents = ['LogicAgent-01', 'TaxAgent-03', 'AuditAgent-07', 'LogisticsAgent-12'];
    return agents[Math.floor(Math.random() * agents.length)];
  };

  // Memoize path points for the chart to avoid complex calculations on every frame
  const chartPoints = useMemo(() => {
    const width = 280;
    const height = 60;
    const maxVal = 100;
    const dx = width / (throughput.length - 1);
    
    return throughput.map((val, idx) => {
      const x = idx * dx;
      const y = height - (val / maxVal) * height;
      return `${x},${y}`;
    }).join(' ');
  }, [throughput]);

  return (
    <div className="w-full bg-[#1A1A1A] text-white rounded-2xl border border-white/10 shadow-2xl p-6 relative overflow-hidden select-none font-sans">
      {/* Absolute ambient lights behind the black dashboard */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0F9D8A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header of the Dashboard */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0F9D8A] animate-pulse-subtle" />
          <div>
            <h3 className="text-xs font-mono tracking-widest text-white/40 uppercase">ORCHESTRATION CLUSTER</h3>
            <p className="text-sm font-semibold font-display tracking-tight text-white/90">AtlasOS-Node-01-West</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-white/40">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-white/30" /> Core Node: Live
          </span>
          <span className="hidden sm:inline border-l border-white/10 pl-4">
            Lat: 1.2ms
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Active Task List & Fleet Control (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/60">AUTONOMOUS TASK QUEUE</span>
            <span className="text-[10px] font-mono text-[#0F9D8A] bg-[#0F9D8A]/10 px-2 py-0.5 rounded-full border border-[#0F9D8A]/20">
              Auto-Pilot
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  task.status === 'running' 
                    ? 'bg-white/[0.04] border-[#0F9D8A]/30' 
                    : 'bg-white/[0.01] border-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    {task.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9D8A]" />}
                    {task.status === 'running' && <RefreshCw className="w-3.5 h-3.5 text-[#0F9D8A] animate-spin" style={{ animationDuration: '3s' }} />}
                    {task.status === 'queued' && <div className="w-3.5 h-3.5 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-mono">Q</div>}
                    {task.status === 'warning' && <AlertCircle className="w-3.5 h-3.5 text-amber-500" />}
                    <span className="text-xs font-medium text-white/90 line-clamp-1">{task.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 shrink-0">{task.time}</span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-white/40">
                  <span className="font-mono">{task.agent}</span>
                  {task.status === 'running' && (
                    <span className="font-mono text-[#0F9D8A]">{task.progress}%</span>
                  )}
                </div>

                {/* Progress bar container */}
                {task.status === 'running' && (
                  <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#0F9D8A] h-full rounded-full transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Workflow Visualizer & Stats (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Pipeline Visual representation */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-3">
            <span className="text-xs font-medium text-white/60">ACTIVE STATE PIPELINE</span>
            
            <div className="flex flex-col gap-4 relative pl-3">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-white/10" />
              
              {/* Step 1 */}
              <div className="flex items-center gap-3 relative">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono border transition-all duration-300 z-10 ${
                  activeStep === 0 ? 'bg-[#0F9D8A] border-[#0F9D8A] text-white shadow-[0_0_10px_rgba(15,157,138,0.5)]' : 'bg-[#1A1A1A] border-white/20 text-white/60'
                }`}>1</div>
                <div>
                  <h4 className={`text-xs font-medium ${activeStep === 0 ? 'text-[#0F9D8A]' : 'text-white/80'}`}>Trigger & Context Ingestion</h4>
                  <p className="text-[10px] text-white/40">JSON Inbound parsed instantly</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3 relative">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono border transition-all duration-300 z-10 ${
                  activeStep === 1 ? 'bg-[#0F9D8A] border-[#0F9D8A] text-white shadow-[0_0_10px_rgba(15,157,138,0.5)]' : 'bg-[#1A1A1A] border-white/20 text-white/60'
                }`}>2</div>
                <div>
                  <h4 className={`text-xs font-medium ${activeStep === 1 ? 'text-[#0F9D8A]' : 'text-white/80'}`}>Vector Knowledge Recall</h4>
                  <p className="text-[10px] text-white/40">Embedding retrieval complete</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3 relative">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono border transition-all duration-300 z-10 ${
                  activeStep === 2 ? 'bg-[#0F9D8A] border-[#0F9D8A] text-white shadow-[0_0_10px_rgba(15,157,138,0.5)]' : 'bg-[#1A1A1A] border-white/20 text-white/60'
                }`}>3</div>
                <div>
                  <h4 className={`text-xs font-medium ${activeStep === 2 ? 'text-[#0F9D8A]' : 'text-white/80'}`}>Cognitive Scoring Engine</h4>
                  <p className="text-[10px] text-white/40">Evaluating next-best response</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3 relative">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono border transition-all duration-300 z-10 ${
                  activeStep === 3 ? 'bg-[#0F9D8A] border-[#0F9D8A] text-white shadow-[0_0_10px_rgba(15,157,138,0.5)]' : 'bg-[#1A1A1A] border-white/20 text-white/60'
                }`}>4</div>
                <div>
                  <h4 className={`text-xs font-medium ${activeStep === 3 ? 'text-[#0F9D8A]' : 'text-white/80'}`}>Action Dispatch Pipeline</h4>
                  <p className="text-[10px] text-white/40">API state verified & recorded</p>
                </div>
              </div>

            </div>
          </div>

          {/* Sparkline chart widget */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-white/60">THROUGHPUT RATIO</span>
              <span className="text-xs font-mono text-[#0F9D8A] font-semibold">
                {throughput[throughput.length - 1]} ops/s
              </span>
            </div>

            <div className="h-[60px] w-full flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 280 60">
                {/* SVG Area fill */}
                <defs>
                  <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0F9D8A" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#0F9D8A" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path
                  d={`M 0,60 L ${chartPoints} L 280,60 Z`}
                  fill="url(#gradient-area)"
                  className="transition-all duration-500 ease-out"
                />
                <polyline
                  fill="none"
                  stroke="#0F9D8A"
                  strokeWidth="2"
                  points={chartPoints}
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeroDashboard.displayName = 'HeroDashboard';
