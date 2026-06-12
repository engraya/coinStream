import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { serverFetchCoinById } from '@/lib/api/server';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { CoinDetailSkeleton } from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import CoinDetailClient from './CoinDetailClient';
import {
  formatPrice,
  formatMarketCap,
  formatVolume,
  formatTimestamp,
  formatSupply,
} from '@/lib/utils/format';
import PagesContainer from '@/app/components/PagesContainer';

interface CoinDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: CoinDetailPageProps) {
  const data = await serverFetchCoinById(params.id);
  const coin = data?.data?.coin;
  return {
    title: coin ? `${coin.name} (${coin.symbol}) — CoinStream` : 'Coin Details — CoinStream',
    description: coin?.description ?? `Track ${coin?.name ?? 'coin'} price and market data.`,
  };
}

export default async function CryptoDetailsPage({ params }: CoinDetailPageProps) {
  const coinData = await serverFetchCoinById(params.id);
  const coin = coinData?.data?.coin;

  if (!coin) return notFound();

  return (
    <PagesContainer>
      {/* Back link */}
      <Link
        href="/cryptocurrencies"
        className="group mb-8 inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
      >
        <ChevronLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        All Cryptocurrencies
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div>
          {/* Coin header */}
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-surface-border">
              <Image src={coin.iconUrl} alt={coin.name} fill unoptimized className="object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-ink-primary sm:text-3xl">{coin.name}</h1>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="text-sm text-ink-secondary">{coin.symbol}</span>
                <span className="rounded-md border border-surface-border bg-surface-overlay px-2 py-0.5 text-xs text-ink-tertiary">
                  Rank #{coin.rank}
                </span>
                <Badge value={coin.change} />
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p className="text-4xl font-bold tabular-nums text-ink-primary">
              {formatPrice(coin.price)}
            </p>
          </div>

          {/* Chart + watchlist toggle */}
          <ErrorBoundary>
            <Suspense fallback={<CoinDetailSkeleton />}>
              <CoinDetailClient
                coinId={params.id}
                initialSparkline={coin.sparkline}
                coinColor={coin.color}
              />
            </Suspense>
          </ErrorBoundary>

          {/* Description */}
          {coin.description && (
            <div className="mt-8 rounded-xl border border-surface-border bg-surface-raised p-6">
              <h2 className="mb-3 text-base font-semibold text-ink-primary">About {coin.name}</h2>
              <p className="text-sm leading-relaxed text-ink-secondary">{coin.description}</p>
            </div>
          )}

          {/* Key Metrics */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: 'Market Cap',  value: formatMarketCap(coin.marketCap) },
              { label: 'Price',       value: formatPrice(coin.price) },
              { label: '24H Volume',  value: formatVolume(coin['24hVolume']) },
              { label: 'BTC Price',   value: parseFloat(coin.btcPrice).toFixed(8) + ' BTC' },
              { label: 'Markets',     value: coin.numberOfMarkets.toLocaleString() },
              { label: 'Exchanges',   value: coin.numberOfExchanges.toLocaleString() },
              { label: 'Listed',      value: formatTimestamp(coin.listedAt) },
              { label: 'Tier',        value: String(coin.tier) },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-surface-border bg-surface-raised p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-ink-tertiary">{label}</p>
                <p className="mt-2 text-sm font-semibold tabular-nums text-ink-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* All Time High */}
          <div className="mb-4 overflow-hidden rounded-xl border border-surface-border bg-surface-raised">
            <h3 className="border-b border-surface-border px-5 py-3 text-sm font-semibold text-ink-primary">
              All Time High
            </h3>
            <ul className="space-y-3 px-5 py-4 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-ink-tertiary">Price</span>
                <span className="font-semibold tabular-nums text-ink-primary">{formatPrice(coin.allTimeHigh.price)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink-tertiary">Date</span>
                <span className="font-medium text-ink-primary">{formatTimestamp(coin.allTimeHigh.timestamp)}</span>
              </li>
            </ul>
          </div>

          {/* Supply */}
          <div className="mb-4 overflow-hidden rounded-xl border border-surface-border bg-surface-raised">
            <h3 className="border-b border-surface-border px-5 py-3 text-sm font-semibold text-ink-primary">
              Supply
            </h3>
            <ul className="space-y-3 px-5 py-4 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-ink-tertiary">Confirmed</span>
                <span className={`font-medium ${coin.supply.confirmed ? 'text-positive' : 'text-negative'}`}>
                  {coin.supply.confirmed ? 'Yes' : 'No'}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink-tertiary">Circulating</span>
                <span className="font-medium tabular-nums text-ink-primary">{formatSupply(coin.supply.circulating)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink-tertiary">Total</span>
                <span className="font-medium tabular-nums text-ink-primary">{formatSupply(coin.supply.total)}</span>
              </li>
              {coin.supply.max && (
                <li className="flex items-center justify-between">
                  <span className="text-ink-tertiary">Max</span>
                  <span className="font-medium tabular-nums text-ink-primary">{formatSupply(coin.supply.max)}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Links */}
          {coin.links && coin.links.length > 0 && (
            <div className="overflow-hidden rounded-xl border border-surface-border bg-surface-raised">
              <h3 className="border-b border-surface-border px-5 py-3 text-sm font-semibold text-ink-primary">
                Links
              </h3>
              <ul className="divide-y divide-surface-border">
                {coin.links.slice(0, 6).map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-5 py-3 text-sm text-accent transition-colors hover:text-accent-hover hover:bg-surface-overlay"
                    >
                      <span>{link.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs capitalize text-ink-tertiary">{link.type}</span>
                        <ArrowTopRightOnSquareIcon className="h-3 w-3 text-ink-tertiary group-hover:text-accent-hover" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </PagesContainer>
  );
}
