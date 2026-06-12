import { Suspense } from 'react';
import PagesContainer from '../components/PagesContainer';
import { ExchangeTable } from '@/components/exchanges/ExchangeTable';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { TableSkeleton } from '@/components/ui/Skeleton';
import { serverFetchExchanges } from '@/lib/api/server';

export const metadata = {
  title: 'Exchanges — CoinStream',
  description: 'Top cryptocurrency exchanges ranked by 24-hour trading volume.',
};

async function ExchangeData() {
  const data = await serverFetchExchanges();
  const exchanges = data?.data?.exchanges ?? [];
  return <ExchangeTable exchanges={exchanges} />;
}

export default function ExchangesPage() {
  return (
    <PagesContainer>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-ink-primary sm:text-3xl">Exchanges</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          Top exchanges ranked by 24-hour trading volume
        </p>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<TableSkeleton rows={12} />}>
          <ExchangeData />
        </Suspense>
      </ErrorBoundary>
    </PagesContainer>
  );
}
