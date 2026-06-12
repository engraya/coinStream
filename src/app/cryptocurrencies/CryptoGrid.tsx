'use client';

import React, { useState, useCallback, useEffect } from 'react';
import CoinCard from '@/components/coins/CoinCard';
import { CoinGridSkeleton } from '@/components/ui/Skeleton';
import { Button } from '@/components/ui/Button';
import { useCoins } from '@/hooks/useCoins';
import { DEFAULT_COIN_LIMIT } from '@/lib/constants';
import type { TimePeriod } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const TIME_OPTIONS: { label: string; value: TimePeriod }[] = [
  { label: '1H',  value: '3h' },
  { label: '24H', value: '24h' },
  { label: '7D',  value: '7d' },
  { label: '30D', value: '30d' },
  { label: '1Y',  value: '1y' },
];

export default function CryptoGrid() {
  const [search,         setSearch]         = useState('');
  const [debouncedSearch,setDebouncedSearch] = useState('');
  const [offset,         setOffset]         = useState(0);
  const [timePeriod,     setTimePeriod]     = useState<TimePeriod>('24h');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => { setOffset(0); }, [debouncedSearch]);

  const { data, isLoading, isError, error } = useCoins({
    limit: DEFAULT_COIN_LIMIT,
    offset,
    timePeriod,
    search: debouncedSearch || undefined,
  });

  const coins   = data?.data?.coins ?? [];
  const total   = data?.data?.stats?.totalCoins ?? 0;
  const hasMore = offset + DEFAULT_COIN_LIMIT < total;

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  if (isError) {
    return (
      <div className="rounded-xl border border-negative/20 bg-negative/5 p-8 text-center">
        <p className="text-sm text-negative">
          {error instanceof Error ? error.message : 'Failed to load cryptocurrencies.'}
        </p>
        <p className="mt-2 text-xs text-ink-tertiary">Please check your API key configuration.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-tertiary" />
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search cryptocurrencies..."
            className="w-full rounded-lg border border-surface-border bg-surface-raised py-2 pl-9 pr-4 text-sm text-ink-primary placeholder-ink-tertiary outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
            aria-label="Search cryptocurrencies"
          />
        </div>

        {/* Time period selector */}
        <div className="flex gap-0.5 rounded-lg border border-surface-border bg-surface-raised p-1">
          {TIME_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTimePeriod(opt.value)}
              className={cn(
                'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                timePeriod === opt.value
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-ink-tertiary hover:text-ink-secondary'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {isLoading ? (
        <CoinGridSkeleton count={12} />
      ) : coins.length === 0 ? (
        <div className="card p-12 text-center text-sm text-ink-tertiary">
          {debouncedSearch
            ? `No results found for "${debouncedSearch}"`
            : 'No cryptocurrencies available.'}
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {coins.map((currency) => (
              <CoinCard key={currency.uuid} currency={currency} />
            ))}
          </div>

          {(hasMore || offset > 0) && (
            <div className="mt-8 flex items-center justify-center gap-3">
              {offset > 0 && (
                <Button variant="secondary" size="sm" onClick={() => setOffset((o) => Math.max(0, o - DEFAULT_COIN_LIMIT))}>
                  ← Previous
                </Button>
              )}
              {hasMore && (
                <Button variant="secondary" size="sm" onClick={() => setOffset((o) => o + DEFAULT_COIN_LIMIT)}>
                  Show more →
                </Button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
