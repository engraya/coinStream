import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '@/lib/api/coinranking';
import { QUERY_STALE_TIME } from '@/lib/constants';

export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    staleTime: QUERY_STALE_TIME * 5,
  });
}
