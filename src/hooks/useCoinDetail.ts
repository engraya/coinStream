import { useQuery } from '@tanstack/react-query';
import { fetchCoinById } from '@/lib/api/coinranking';
import { QUERY_STALE_TIME, type TimePeriod } from '@/lib/constants';

export function useCoinDetail(id: string, timePeriod: TimePeriod = '24h') {
  return useQuery({
    queryKey: ['coin', id, timePeriod],
    queryFn: () => fetchCoinById(id, timePeriod),
    enabled: !!id,
    staleTime: QUERY_STALE_TIME,
  });
}
