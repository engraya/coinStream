import Image from 'next/image';
import Link from 'next/link';
import type { Coin } from '@/types/coin.types';
import { formatPrice, formatMarketCap, isPositiveChange } from '@/lib/utils/format';
import { Badge } from '@/components/ui/Badge';

interface TableProps {
  coins: Coin[];
}

const Table = ({ coins }: TableProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-ink-primary">Top 10 by Market Cap</h2>
        <Link
          href="/cryptocurrencies"
          className="text-sm text-accent transition-colors hover:text-accent-hover"
        >
          View all →
        </Link>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-surface-border">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ink-tertiary w-10">#</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ink-tertiary">Asset</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ink-tertiary">Price</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ink-tertiary">24h</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-ink-tertiary">Mkt Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, i) => {
                const positive = isPositiveChange(coin.change);
                return (
                  <tr key={coin.uuid} className="border-b border-surface-border transition-colors hover:bg-surface-overlay">
                    <td className="px-4 py-4 text-sm text-ink-tertiary tabular-nums">{i + 1}</td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/cryptocurrencies/${coin.uuid}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-surface-border">
                          <Image src={coin.iconUrl} alt={coin.name} fill unoptimized className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink-primary group-hover:text-accent transition-colors">{coin.name}</p>
                          <p className="text-xs text-ink-tertiary">{coin.symbol}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-right text-sm font-semibold tabular-nums text-ink-primary">
                      {formatPrice(coin.price)}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Badge value={coin.change} />
                    </td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums text-ink-secondary">
                      {formatMarketCap(coin.marketCap)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
