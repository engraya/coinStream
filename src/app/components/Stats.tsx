import {
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline';
import { formatMarketCap, formatVolume } from '@/lib/utils/format';
import type { GlobalStats } from '@/types/coin.types';

const STAT_ITEMS = [
  { key: 'totalCoins'     as const, label: 'Currencies', Icon: CurrencyDollarIcon },
  { key: 'totalMarkets'   as const, label: 'Markets',    Icon: ChartBarIcon },
  { key: 'totalMarketCap' as const, label: 'Market Cap', Icon: ArrowTrendingUpIcon },
  { key: 'total24hVolume' as const, label: '24H Volume', Icon: BoltIcon },
  { key: 'totalExchanges' as const, label: 'Exchanges',  Icon: ArrowsRightLeftIcon },
];

interface StatBarProps {
  stats: GlobalStats | null;
}

function getValue(stats: GlobalStats | null, key: typeof STAT_ITEMS[number]['key']): string {
  if (!stats) return '—';
  const val = stats[key];
  if (key === 'totalMarketCap') return formatMarketCap(val as string);
  if (key === 'total24hVolume') return formatVolume(val as string);
  return String(val ?? '—');
}

const StatBar = ({ stats }: StatBarProps) => {
  return (
    <section className="border-y border-surface-border bg-surface-raised py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-y-4 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-surface-border">
          {STAT_ITEMS.map(({ key, label, Icon }) => (
            <div key={key} className="flex flex-col items-center py-2 px-6 text-center">
              <Icon className="h-4 w-4 text-accent mb-2" />
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-tertiary">{label}</dt>
              <dd className="mt-1 text-lg font-bold tabular-nums text-ink-primary">
                {getValue(stats, key)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatBar;
