import Link from 'next/link';
import Image from 'next/image';
import type { Coin } from '@/types/coin.types';
import { formatPrice, isPositiveChange } from '@/lib/utils/format';
import { Badge } from '@/components/ui/Badge';

interface HeroProps {
  topCoins: Coin[];
}

const Hero = ({ topCoins }: HeroProps) => {
  const previewCoins = topCoins.slice(0, 5);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left: Copy */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-positive animate-pulse" />
              Live market data
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-ink-primary lg:text-6xl">
              Track crypto<br />
              <span className="text-gradient">in real-time.</span>
            </h1>

            <p className="mb-8 max-w-lg text-base text-ink-secondary leading-relaxed">
              Prices, market caps, exchange rankings, and portfolio tracking — all in one place. Accurate data, always up to date.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/cryptocurrencies"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm shadow-accent/20 transition-all hover:bg-accent-hover"
              >
                Browse Markets
              </Link>
              <Link
                href="/watchlist"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-5 py-2.5 text-sm font-medium tracking-wide text-ink-secondary transition-all hover:bg-surface-overlay hover:text-ink-primary"
              >
                My Watchlist
              </Link>
            </div>
          </div>

          {/* Right: Live mini table preview */}
          <div className="card card-interactive p-0 overflow-hidden">
            <div className="border-b border-surface-border px-5 py-3.5 flex items-center justify-between">
              <span className="text-xs font-semibold text-ink-primary uppercase tracking-wider">Top Assets</span>
              <span className="flex items-center gap-1.5 text-xs text-ink-tertiary">
                <span className="h-1.5 w-1.5 rounded-full bg-positive animate-pulse" />
                Live
              </span>
            </div>
            <div className="divide-y divide-surface-border">
              {previewCoins.map((coin) => {
                const positive = isPositiveChange(coin.change);
                return (
                  <Link
                    key={coin.uuid}
                    href={`/cryptocurrencies/${coin.uuid}`}
                    className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-surface-overlay group"
                  >
                    <span className="w-5 text-xs text-ink-tertiary tabular-nums">{coin.rank}</span>
                    <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-surface-border">
                      <Image src={coin.iconUrl} alt={coin.name} fill unoptimized className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink-primary truncate group-hover:text-accent transition-colors">{coin.name}</p>
                      <p className="text-xs text-ink-tertiary">{coin.symbol}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-ink-primary tabular-nums">{formatPrice(coin.price)}</p>
                      <Badge value={coin.change} />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-surface-border px-5 py-3">
              <Link href="/cryptocurrencies" className="text-xs text-accent hover:text-accent-hover transition-colors">
                View all assets →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
