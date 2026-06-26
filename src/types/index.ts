export type Currency = 'USD' | 'EUR' | 'INR';
export type BillingPeriod = 'monthly' | 'annual';

export interface PriceConfig {
  basePrice: number; // Monthly price in base currency (USD)
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  config: PriceConfig;
  popular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  detailTitle?: string;
  detailDesc?: string;
  stats?: { label: string; value: string }[];
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  agent: string;
  duration?: string;
}
