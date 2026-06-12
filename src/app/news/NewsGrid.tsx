'use client';

import { ArrowTopRightOnSquareIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { useNews } from '@/hooks/useNews';
import type { NewsItem } from '@/types/api.types';
import { CoinCardSkeleton } from '@/components/ui/Skeleton';

function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-interactive block p-5 group"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="text-xs text-ink-tertiary truncate">{item.source.title}</span>
        <div className="flex shrink-0 gap-1">
          {item.currencies.slice(0, 2).map((c) => (
            <span key={c.code} className="rounded bg-accent/10 px-1.5 py-0.5 text-xs text-accent">
              {c.code}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-sm font-medium leading-relaxed text-ink-primary line-clamp-2 transition-colors group-hover:text-accent">
        {item.title}
      </h3>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-ink-tertiary">{relativeTime(item.published_at)}</span>
        <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-ink-tertiary transition-colors group-hover:text-accent" />
      </div>
    </a>
  );
}

function NoApiKey() {
  return (
    <div className="card p-10 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-xl bg-surface-overlay p-4">
          <NewspaperIcon className="h-8 w-8 text-ink-tertiary" />
        </div>
      </div>
      <h2 className="text-base font-semibold text-ink-primary">News requires an API key</h2>
      <p className="mt-2 mx-auto max-w-sm text-sm text-ink-secondary">
        Add a{' '}
        <code className="rounded bg-surface-overlay px-1.5 py-0.5 text-xs text-accent">
          GNEWS_API_KEY
        </code>{' '}
        to your environment variables to enable live crypto news from GNews.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {['Bitcoin', 'Ethereum', 'DeFi', 'NFT', 'Web3', 'Markets'].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-surface-border bg-surface-overlay px-3 py-1 text-xs text-ink-tertiary"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function NewsGrid() {
  const { data, isLoading, isError } = useNews();

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <CoinCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError || !data?.available) {
    return <NoApiKey />;
  }

  const items = data.results ?? [];

  if (items.length === 0) {
    return (
      <div className="card p-10 text-center text-sm text-ink-tertiary">
        No news articles available at this time.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
