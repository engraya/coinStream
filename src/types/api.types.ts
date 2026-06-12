import type { Coin, CoinDetail, Exchange, GlobalStats } from './coin.types';

export interface ApiStatus {
  timestamp: number;
  error_code: string;
  error_message: string | null;
  elapsed: number;
  credits_used: number;
}

export interface CoinsListResponse {
  data: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    coins: Coin[];
  };
  status: ApiStatus;
}

export interface CoinDetailResponse {
  data: {
    coin: CoinDetail;
  };
  status: ApiStatus;
}

export interface StatsResponse {
  data: GlobalStats;
  status: ApiStatus;
}

export interface ExchangeListResponse {
  data: {
    stats: { total: number };
    exchanges: Exchange[];
  };
  status: ApiStatus;
}

export interface NewsItem {
  id: string | number;
  title: string;
  slug: string;
  url: string;
  domain: string;
  published_at: string;
  currencies: { code: string; title: string; slug: string }[];
  source: {
    title: string;
    domain: string;
  };
}

export interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsItem[];
}

export type ApiError = {
  error: string;
  status: number;
};
