import { useQuery } from '@tanstack/react-query';
import { fetchCoins, type CoinQueryParams } from '@/lib/api/coinranking';
import { QUERY_STALE_TIME } from '@/lib/constants';

export function useCoins(params: CoinQueryParams = {}) {
  return useQuery({
    queryKey: ['coins', params],
    queryFn: () => fetchCoins(params),
    staleTime: QUERY_STALE_TIME,
  });
}
