export const TIME_PERIODS = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'] as const;
export type TimePeriod = (typeof TIME_PERIODS)[number];

export const DEFAULT_COIN_LIMIT = 50;
export const QUERY_STALE_TIME = 60 * 1000;      // 1 minute
export const QUERY_CACHE_TIME = 5 * 60 * 1000;  // 5 minutes

export const REFERENCE_CURRENCY_UUID = 'yhjMzLPhuIDl'; // USD
