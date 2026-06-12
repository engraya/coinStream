'use client';

import React, { useState } from 'react';
import { CoinChart } from '@/components/coins/CoinChart';
import { useCoinDetail } from '@/hooks/useCoinDetail';
import { TIME_PERIODS, type TimePeriod } from '@/lib/constants';
import { useWatchlistStore } from '@/store/watchlistStore';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils/cn';

interface CoinDetailClientProps {
  coinId: string;
  initialSparkline: (string | null)[];
  coinColor: string | null;
}

export default function CoinDetailClient({ coinId, initialSparkline, coinColor }: CoinDetailClientProps) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('24h');
  const { isWatched, toggleWatchlist } = useWatchlistStore();
  const watched = isWatched(coinId);

  const { data, isLoading } = useCoinDetail(coinId, timePeriod);
  const sparkline = data?.data?.coin?.sparkline ?? initialSparkline;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
        {/* Time period selector */}
        <div className="flex gap-0.5 rounded-lg border border-surface-border bg-surface-raised p-1">
          {TIME_PERIODS.map((period) => (
            <button
              key={period}
              onClick={() => setTimePeriod(period)}
              className={cn(
                'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                timePeriod === period
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-ink-tertiary hover:text-ink-secondary'
              )}
            >
              {period.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Watchlist toggle */}
        <button
          onClick={() => toggleWatchlist(coinId)}
          className={cn(
            'flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all',
            watched
              ? 'border-accent/30 bg-accent/10 text-accent'
              : 'border-surface-border bg-surface-raised text-ink-secondary hover:bg-surface-overlay hover:text-ink-primary'
          )}
          aria-label={watched ? 'Remove from watchlist' : 'Add to watchlist'}
        >
          {watched ? (
            <><BookmarkSolidIcon className="h-4 w-4" /><span>Watching</span></>
          ) : (
            <><BookmarkIcon className="h-4 w-4" /><span>Watch</span></>
          )}
        </button>
      </div>

      {isLoading ? (
        <Skeleton className="h-72 w-full rounded-xl" />
      ) : (
        <CoinChart sparkline={sparkline} coinColor={coinColor} timePeriod={timePeriod} />
      )}
    </div>
  );
}
