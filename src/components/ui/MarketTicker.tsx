import type { Coin } from '@/types/coin.types';
import { formatPrice } from '@/lib/utils/format';
import { Badge } from './Badge';

interface MarketTickerProps {
  coins: Coin[];
}

const MarketTicker = ({ coins }: MarketTickerProps) => {
  if (!coins.length) return null;

  const doubled = [...coins, ...coins];

  return (
    <div className="overflow-hidden border-y border-surface-border bg-surface-raised py-2.5">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((coin, i) => (
          <span key={`${coin.uuid}-${i}`} className="inline-flex items-center gap-2 px-6 text-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coin.iconUrl}
              alt={coin.name}
              className="h-4 w-4 rounded-full"
            />
            <span className="font-medium text-ink-primary">{coin.symbol}</span>
            <span className="text-ink-secondary tabular-nums">{formatPrice(coin.price)}</span>
            <Badge value={coin.change} />
            <span className="text-surface-muted select-none mx-2">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
