import { apiClient } from './client';
import type {
  CoinsListResponse,
  CoinDetailResponse,
  StatsResponse,
  ExchangeListResponse,
  NewsResponse,
} from '@/types/api.types';
import type { TimePeriod } from '@/lib/constants';
import { DEFAULT_COIN_LIMIT } from '@/lib/constants';

export interface CoinQueryParams {
  limit?: number;
  offset?: number;
  timePeriod?: TimePeriod;
  orderBy?: 'price' | 'marketCap' | 'volume' | 'change';
  search?: string;
}

export async function fetchCoins(params: CoinQueryParams = {}): Promise<CoinsListResponse> {
  const { limit = DEFAULT_COIN_LIMIT, offset = 0, timePeriod = '24h', orderBy = 'marketCap', search } = params;
  const query = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    timePeriod,
    orderBy,
  });
  if (search) query.set('search', search);
  const res = await apiClient.get<CoinsListResponse>(`/coins?${query}`);
  return res.data;
}

export async function fetchCoinById(id: string, timePeriod: TimePeriod = '24h'): Promise<CoinDetailResponse> {
  const res = await apiClient.get<CoinDetailResponse>(`/coins/${id}?timePeriod=${timePeriod}`);
  return res.data;
}

export async function fetchStats(): Promise<StatsResponse> {
  const res = await apiClient.get<StatsResponse>('/stats');
  return res.data;
}

export async function fetchExchanges(): Promise<ExchangeListResponse> {
  const res = await apiClient.get<ExchangeListResponse>('/exchanges');
  return res.data;
}

export async function fetchNews(): Promise<NewsResponse & { available: boolean }> {
  const res = await apiClient.get<NewsResponse & { available: boolean }>('/news');
  return res.data;
}
