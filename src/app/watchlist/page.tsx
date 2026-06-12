'use client';

import React from 'react';
import Link from 'next/link';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import PagesContainer from '../components/PagesContainer';
import CoinCard from '@/components/coins/CoinCard';
import { useWatchlistStore } from '@/store/watchlistStore';
import { useCoins } from '@/hooks/useCoins';
import { CoinGridSkeleton } from '@/components/ui/Skeleton';
import { DEFAULT_COIN_LIMIT } from '@/lib/constants';

function WatchlistContent() {
  const { watchlist } = useWatchlistStore();
  const { data, isLoading } = useCoins({ limit: DEFAULT_COIN_LIMIT });
  const allCoins = data?.data?.coins ?? [];
  const watchedCoins = allCoins.filter((c) => watchlist.includes(c.uuid));

  if (isLoading) return <CoinGridSkeleton count={4} />;

  if (watchlist.length === 0) {
    return (
      <div className="card flex flex-col items-center justify-center px-8 py-24 text-center">
        <div className="mb-4 rounded-xl bg-surface-overlay p-4">
          <BookmarkIcon className="h-8 w-8 text-ink-tertiary" />
        </div>
        <h2 className="text-lg font-semibold text-ink-primary">Your Watchlist is Empty</h2>
        <p className="mt-2 max-w-sm text-sm text-ink-secondary">
          Bookmark any cryptocurrency to track it here. Click the bookmark icon on any coin card.
        </p>
        <Link
          href="/cryptocurrencies"
          className="mt-6 inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Browse Cryptocurrencies
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-6 text-sm text-ink-tertiary">
        {watchedCoins.length} of {watchlist.length} tracked {watchlist.length === 1 ? 'coin' : 'coins'} loaded
      </p>
      {watchedCoins.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {watchedCoins.map((coin) => (
            <CoinCard key={coin.uuid} currency={coin} />
          ))}
        </div>
      ) : (
        <div className="card p-8 text-center text-sm text-ink-secondary">
          Your watched coins aren&apos;t in the current top {DEFAULT_COIN_LIMIT}.{' '}
          <Link href="/cryptocurrencies" className="text-accent hover:text-accent-hover">
            Search for them directly.
          </Link>
        </div>
      )}
    </div>
  );
}

export default function WatchlistPage() {
  return (
    <PagesContainer>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-ink-primary sm:text-3xl">My Watchlist</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          Your bookmarked cryptocurrencies — saved locally in your browser
        </p>
      </div>
      <WatchlistContent />
    </PagesContainer>
  );
}
