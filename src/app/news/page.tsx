import { Suspense } from 'react';
import PagesContainer from '../components/PagesContainer';
import NewsGrid from './NewsGrid';

export const metadata = {
  title: 'Crypto News — CoinStream',
  description: 'Latest cryptocurrency news and market updates.',
};

function NewsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="card p-5 animate-pulse">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-20 rounded bg-surface-overlay" />
            <div className="h-4 w-10 rounded bg-surface-overlay" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-surface-overlay" />
            <div className="h-4 w-3/4 rounded bg-surface-overlay" />
          </div>
          <div className="mt-4 flex justify-between">
            <div className="h-3 w-16 rounded bg-surface-overlay" />
            <div className="h-3 w-4 rounded bg-surface-overlay" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function NewsPage() {
  return (
    <PagesContainer>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-ink-primary sm:text-3xl">Crypto News</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          Latest news from the cryptocurrency world
        </p>
      </div>

      <Suspense fallback={<NewsSkeleton />}>
        <NewsGrid />
      </Suspense>
    </PagesContainer>
  );
}
