import { useQuery } from '@tanstack/react-query';
import { fetchStats } from '@/lib/api/coinranking';
import { QUERY_STALE_TIME } from '@/lib/constants';

export function useStats() {
  return useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats,
    staleTime: QUERY_STALE_TIME,
  });
}
