'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import type { Coin } from '@/types/coin.types';
import { formatPrice, formatMarketCap } from '@/lib/utils/format';
import { Badge } from '@/components/ui/Badge';
import { useWatchlistStore } from '@/store/watchlistStore';
import { cn } from '@/lib/utils/cn';

interface CoinCardProps {
  currency: Coin;
  showLink?: boolean;
}

const CoinCard = React.memo(function CoinCard({ currency, showLink = true }: CoinCardProps) {
  const { isWatched, toggleWatchlist } = useWatchlistStore();
  const watched = isWatched(currency.uuid);

  const content = (
    <div className="group relative flex flex-col rounded-xl border border-surface-border bg-surface-raised p-5 transition-all duration-200 hover:border-surface-muted hover:bg-surface-overlay card-interactive">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWatchlist(currency.uuid);
        }}
        aria-label={watched ? 'Remove from watchlist' : 'Add to watchlist'}
        className={cn(
          'absolute right-3 top-3 z-10 rounded-lg p-1.5 transition-all',
          watched
            ? 'text-accent'
            : 'text-ink-tertiary opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-ink-primary hover:bg-surface-overlay'
        )}
      >
        {watched ? (
          <BookmarkSolidIcon className="h-4 w-4" />
        ) : (
          <BookmarkIcon className="h-4 w-4" />
        )}
      </button>

      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-surface-border">
          <Image src={currency.iconUrl} alt={currency.name} fill unoptimized className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink-primary">{currency.name}</p>
          <p className="text-xs text-ink-tertiary">{currency.symbol}</p>
        </div>
        <span className="rounded bg-surface-overlay px-1.5 py-0.5 text-xs text-ink-tertiary">
          #{currency.rank}
        </span>
      </div>

      <div className="mt-auto space-y-2">
        <p className="text-lg font-bold tabular-nums text-ink-primary">{formatPrice(currency.price)}</p>
        <div className="flex items-center justify-between">
          <Badge value={currency.change} />
          <p className="text-xs tabular-nums text-ink-tertiary">
            {formatMarketCap(currency.marketCap)}
          </p>
        </div>
      </div>
    </div>
  );

  if (!showLink) return content;

  return (
    <Link href={`/cryptocurrencies/${currency.uuid}`} className="block">
      {content}
    </Link>
  );
});

export default CoinCard;
