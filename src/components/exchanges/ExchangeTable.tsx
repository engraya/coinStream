import Image from 'next/image';
import Link from 'next/link';
import type { Exchange } from '@/types/coin.types';
import { formatVolume } from '@/lib/utils/format';

interface ExchangeTableProps {
  exchanges: Exchange[];
}

export function ExchangeTable({ exchanges }: ExchangeTableProps) {
  if (!exchanges.length) {
    return (
      <div className="card p-8 text-center text-sm text-ink-tertiary">
        No exchange data available.
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-surface-border">
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ink-tertiary w-12">#</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ink-tertiary">Exchange</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ink-tertiary">24h Volume</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ink-tertiary">Markets</th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-ink-tertiary">Status</th>
            </tr>
          </thead>
          <tbody>
            {exchanges.map((exchange) => (
              <tr
                key={exchange.uuid}
                className="border-b border-surface-border transition-colors hover:bg-surface-overlay"
              >
                <td className="px-4 py-3.5 text-sm tabular-nums text-ink-tertiary">{exchange.rank}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-surface-border">
                      <Image src={exchange.iconUrl} alt={exchange.name} fill unoptimized className="object-cover" />
                    </div>
                    <Link
                      href={exchange.coinrankingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-ink-primary transition-colors hover:text-accent"
                    >
                      {exchange.name}
                    </Link>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-right text-sm tabular-nums text-ink-secondary">
                  {formatVolume(exchange.volume)}
                </td>
                <td className="px-4 py-3.5 text-right text-sm tabular-nums text-ink-secondary">
                  {exchange.numberOfMarkets.toLocaleString()}
                </td>
                <td className="px-4 py-3.5 text-center">
                  {exchange.verified ? (
                    <span className="inline-flex items-center gap-1 rounded-md bg-positive/10 px-2 py-0.5 text-xs font-medium text-positive">
                      ✓ Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-md bg-surface-overlay px-2 py-0.5 text-xs text-ink-tertiary">
                      Unverified
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
