import millify from 'millify';

export function formatPrice(price: string | number, decimals = 2): string {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(num)) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: num < 1 ? 6 : decimals,
  }).format(num);
}

export function formatMarketCap(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '$0';
  return '$' + millify(num, { precision: 2 });
}

export function formatVolume(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '$0';
  return '$' + millify(num, { precision: 2 });
}

export function formatPercent(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.00%';
  const sign = num >= 0 ? '+' : '';
  return `${sign}${num.toFixed(2)}%`;
}

export function formatTimestamp(ts: number): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(ts * 1000));
}

export function isPositiveChange(change: string | number): boolean {
  const num = typeof change === 'string' ? parseFloat(change) : change;
  return !isNaN(num) && num >= 0;
}

export function formatSupply(value: string | null): string {
  if (!value) return 'N/A';
  const num = parseFloat(value);
  if (isNaN(num)) return 'N/A';
  return millify(num, { precision: 2 });
}
