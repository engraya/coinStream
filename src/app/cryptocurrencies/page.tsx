import React, { Suspense } from 'react';
import PagesContainer from '../components/PagesContainer';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { CoinGridSkeleton } from '@/components/ui/Skeleton';
import CryptoGrid from './CryptoGrid';

export const metadata = {
  title: 'Cryptocurrencies — CoinStream',
  description: 'Browse top cryptocurrencies by market cap with live prices and trends.',
};

export default function CryptoCurrenciesPage() {
  return (
    <PagesContainer>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-ink-primary sm:text-3xl">Cryptocurrencies</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          Real-time prices, market caps, and trends for top cryptocurrencies
        </p>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<CoinGridSkeleton count={12} />}>
          <CryptoGrid />
        </Suspense>
      </ErrorBoundary>
    </PagesContainer>
  );
}
