import type {
  CoinsListResponse,
  CoinDetailResponse,
  StatsResponse,
  ExchangeListResponse,
} from '@/types/api.types';
import type { TimePeriod } from '@/lib/constants';
import { DEFAULT_COIN_LIMIT, REFERENCE_CURRENCY_UUID } from '@/lib/constants';

const BASE_URL = 'https://coinranking1.p.rapidapi.com';

function getHeaders() {
  const key = process.env.RAPID_API_KEY;
  if (!key) throw new Error('RAPID_API_KEY is not configured');
  return {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  };
}

export async function serverFetchStats(): Promise<StatsResponse | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/stats?referenceCurrencyUuid=${REFERENCE_CURRENCY_UUID}`,
      { headers: getHeaders(), next: { revalidate: 120 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function serverFetchCoins(
  limit = DEFAULT_COIN_LIMIT,
  timePeriod: TimePeriod = '24h'
): Promise<CoinsListResponse | null> {
  try {
    const params = new URLSearchParams({
      referenceCurrencyUuid: REFERENCE_CURRENCY_UUID,
      timePeriod,
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: String(limit),
      offset: '0',
    });
    const res = await fetch(`${BASE_URL}/coins?${params}`, {
      headers: getHeaders(),
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function serverFetchCoinById(
  id: string,
  timePeriod: TimePeriod = '24h'
): Promise<CoinDetailResponse | null> {
  try {
    const params = new URLSearchParams({
      referenceCurrencyUuid: REFERENCE_CURRENCY_UUID,
      timePeriod,
    });
    const res = await fetch(`${BASE_URL}/coin/${id}?${params}`, {
      headers: getHeaders(),
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function serverFetchExchanges(): Promise<ExchangeListResponse | null> {
  try {
    const params = new URLSearchParams({
      referenceCurrencyUuid: REFERENCE_CURRENCY_UUID,
      limit: '50',
      offset: '0',
      orderBy: 'volume',
      orderDirection: 'desc',
    });
    const res = await fetch(`${BASE_URL}/exchanges?${params}`, {
      headers: getHeaders(),
      next: { revalidate: 120 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
