import { Currency, BillingPeriod } from '../types';

export const CURRENCY_MAP = {
  USD: { symbol: '$', rate: 1, label: 'USD' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR' },
  INR: { symbol: '₹', rate: 83.5, label: 'INR' }
};

export interface CalculatedPrice {
  symbol: string;
  monthlyAmount: number; // The equivalent monthly rate
  totalBilled: number;   // The actual amount billed (either monthlyAmount, or monthlyAmount * 12)
  billingText: string;
}

export function calculatePrice(
  basePriceUSD: number,
  currency: Currency,
  period: BillingPeriod
): CalculatedPrice {
  const { symbol, rate } = CURRENCY_MAP[currency];
  
  // Calculate price in selected currency
  let rawPrice = basePriceUSD * rate;
  
  // Round to reasonable numbers
  if (currency === 'INR') {
    // Round to nearest 100 for clean enterprise feel
    rawPrice = Math.round(rawPrice / 100) * 100;
  } else {
    // Round to nearest integer
    rawPrice = Math.round(rawPrice);
  }

  let monthlyAmount = rawPrice;
  let totalBilled = rawPrice;
  let billingText = '/ month';

  if (period === 'annual') {
    // 20% discount
    monthlyAmount = Math.round(rawPrice * 0.8);
    totalBilled = monthlyAmount * 12;
    billingText = '/ month, billed annually';
  }

  return {
    symbol,
    monthlyAmount,
    totalBilled,
    billingText
  };
}
