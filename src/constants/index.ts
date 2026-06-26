import { PricingPlan, FeatureItem } from '../types';

export const TRUSTED_COMPANIES = [
  { name: 'Linear', logo: 'Linear' },
  { name: 'Stripe', logo: 'Stripe' },
  { name: 'Vercel', logo: 'Vercel' },
  { name: 'Retool', logo: 'Retool' },
  { name: 'Ramp', logo: 'Ramp' },
  { name: 'Scale AI', logo: 'Scale' }
];

export const STATISTICS = [
  { value: 99.99, suffix: '%', label: 'Platform Uptime', sub: 'Enterprise SLA guaranteed reliability.' },
  { value: 84, suffix: '%', label: 'Operational Speedup', sub: 'Average acceleration in cycle time.' },
  { value: 2.4, suffix: 'M+', label: 'Tasks Executed', sub: 'Autonomous actions processed daily.' },
  { value: 0, suffix: 'ms', label: 'Cold Start Latency', sub: 'Instantaneous multi-agent coordination.' }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    description: 'Self-correcting, goal-oriented decision systems that coordinate across your business units.',
    badge: 'Core Engine'
  },
  {
    id: 'workflow-builder',
    title: 'Visual Workflow Builder',
    description: 'Design multi-stage integrations with deterministic logic gates, loops, and human-in-the-loop approvals.',
    badge: 'Logic & Routing'
  },
  {
    id: 'knowledge-hub',
    title: 'Vector Knowledge Hub',
    description: 'Connect internal wikis, DBs, and file shares to populate agent memory with real-time context.',
    badge: 'Context Retrieval'
  },
  {
    id: 'decision-engine',
    title: 'Cognitive Decision Engine',
    description: 'Evaluate high-stakes operations using probabilistic multi-factor scoring models.',
    badge: 'Advanced Scoring'
  },
  {
    id: 'enterprise-security',
    title: 'Military-Grade Security',
    description: 'Isolated secure runtimes, end-to-end encryption, and full compliance with SOC2 and GDPR guidelines.',
    badge: 'Compliance'
  },
  {
    id: 'analytics',
    title: 'Real-time Analytics',
    description: 'Track workflow cost efficiency, throughput speed, agent error rates, and resource utilization instantly.',
    badge: 'Telemetry'
  },
  {
    id: 'api-integration',
    title: 'Unified API Gateway',
    description: 'Seamlessly interface with legacy databases, custom microservices, and third-party SaaS products.',
    badge: 'Connectors'
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring',
    description: 'Audit trails and version-controlled rollbacks for every autonomous action taken by the platform.',
    badge: 'Observability'
  }
];

export const BENTO_FEATURES = [
  {
    id: 'agent-status',
    title: 'Live Agent Fleet Orchestration',
    description: 'Monitor, dispatch, and hot-reload autonomous agents executing high-priority business operations in parallel.',
    detailTitle: 'Dynamic Dispatch Fleet',
    detailDesc: 'Our orchestrator automatically balances agent workloads across secure runtimes. Redundant worker pools ensure tasks are processed even during peak traffic spikes.',
    stats: [
      { label: 'Active Fleet', value: '412 Agents' },
      { label: 'Avg Execution', value: '240ms' }
    ]
  },
  {
    id: 'workflow-pipeline',
    title: 'Deterministic State Pipeline',
    description: 'Zero-latency execution pipelines combining declarative YAML structures with real-time conditional routing.',
    detailTitle: 'Self-Correcting Pipelines',
    detailDesc: 'If a third-party service fails, Atlas OS triggers isolated rollback sequences, rotates fallback API keys, and re-evaluates next-best actions without manual intervention.',
    stats: [
      { label: 'Rollback Rate', value: '0.04%' },
      { label: 'Auto-Recovery', value: '98.9%' }
    ]
  },
  {
    id: 'knowledge-retrieval',
    title: 'Sub-Millisecond Semantic Search',
    description: 'State-of-the-art vector similarity indexing connecting structured customer records to unstructured communications.',
    detailTitle: 'Context Synthesis Hub',
    detailDesc: 'Agents query dense vector representations of internal engineering logs and client contracts in real time, delivering contextually accurate execution variables.',
    stats: [
      { label: 'Index Latency', value: '1.2ms' },
      { label: 'Recall Accuracy', value: '99.4%' }
    ]
  },
  {
    id: 'audit-ledger',
    title: 'Immutable Compliance Audit Ledger',
    description: 'Every cognitive deduction, data touchpoint, and action payload is hashed and recorded on an audit ledger.',
    detailTitle: 'SOC2-Compliant Telemetry',
    detailDesc: 'Ensure security guidelines are strictly respected. Atlas OS logs cryptographic proofs of agent decision flows to guarantee complete traceability of operations.',
    stats: [
      { label: 'Audit Trail', value: '100% Trace' },
      { label: 'Certifications', value: 'SOC2 Type II' }
    ]
  }
];

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter License',
    description: 'Deploy essential autonomous engines for specialized business units and pilot projects.',
    config: {
      basePrice: 49,
      features: [
        '3 Autonomous Agent runtimes',
        'Deterministic Workflow Engine',
        'Standard semantic storage (10GB)',
        'Full security audit logs (30 days)',
        'Next-business-day email SLA'
      ]
    }
  },
  {
    id: 'professional',
    name: 'Professional OS',
    description: 'An expansive operating system for scaling enterprise operations and automated workflows.',
    popular: true,
    config: {
      basePrice: 149,
      features: [
        '15 Autonomous Agent runtimes',
        'Visual + YAML Workflow Pipelines',
        'Sub-millisecond Vector Knowledge DB',
        'Real-time cognitive telemetry dashboard',
        'Prioritized 24/7 technical hotline',
        'Full custom API endpoint mapper'
      ]
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise Dedicated',
    description: 'Isolated sovereign instances for high-volume execution, deep compliance, and custom networks.',
    config: {
      basePrice: 499,
      features: [
        'Unlimited Autonomous Agents',
        'Isolated Dedicated Cloud instance',
        'Custom-trained internal vector indexes',
        'Infinite log retention & cryptographic audit',
        'Dedicated Technical Account Manager',
        'Custom SLA guarantees (99.99% uptime)'
      ]
    }
  }
];

export const TESTIMONIALS = [
  {
    quote: "Atlas OS has restructured how we handle business logic. We automated our entire supplier invoicing and reconciliation system, reducing cycle time by over eighty percent.",
    author: "Elena Rostova",
    role: "VP of Business Infrastructure",
    company: "Linear",
    avatarColor: "bg-emerald-500"
  },
  {
    quote: "We pilot multiple agents across our subscription audit lines. The cognitive decision engine executes compliance evaluations with deterministic precision.",
    author: "Julian Vance",
    role: "Director of Enterprise Architecture",
    company: "Stripe",
    avatarColor: "bg-slate-700"
  },
  {
    quote: "The visual workflow pipeline matched with custom vector retrievals gives our operations staff absolute confidence in our background tasks. Performance has been flawless.",
    author: "Marcus Thorne",
    role: "Head of Platform Engineering",
    company: "Vercel",
    avatarColor: "bg-zinc-900"
  }
];

export const FAQS = [
  {
    question: "How does Atlas OS guarantee deterministic outcomes with non-deterministic AI?",
    answer: "Atlas OS uses a multi-layered verification compiler. Every cognitive recommendation generated by our AI agents is passed through local rule-based safety valves, strict validation schemas, and physical constraints before execution. This ensures that agents can never execute actions outside of your defined operational boundary."
  },
  {
    question: "Can we deploy Atlas OS on our own virtual private cloud (VPC)?",
    answer: "Yes. Enterprise License tiers support fully isolated single-tenant deployments on Google Cloud, AWS, or Azure VPCs. This guarantees that your proprietary business data, vector indexes, and agent runtimes remain entirely within your private network perimeter."
  },
  {
    question: "What is the difference between a task step and an agent?",
    answer: "An Agent is an autonomous, self-correcting logic loop specialized in a domain. A Task Step is a single action executed within a workflow—such as fetching a database record, compiling a document, or making an API call. Professional plans include up to 100,000 steps per month with options to purchase high-volume blocks."
  },
  {
    question: "How does the 'human-in-the-loop' authorization gate work?",
    answer: "For sensitive operations (e.g., transfers above a threshold, legal document modifications), you can configure a physical approval gate. The workflow halts, sends a push notification or Slack alert to designated team members, and resumes immediately upon human cryptographic signing."
  }
];
