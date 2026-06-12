import { cn } from '@/lib/utils/cn';
import { isPositiveChange, formatPercent } from '@/lib/utils/format';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

interface BadgeProps {
  value: string | number;
  className?: string;
  showSign?: boolean;
}

export function Badge({ value, className, showSign = true }: BadgeProps) {
  const positive = isPositiveChange(value);
  return (
    <span
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-semibold tabular-nums',
        positive ? 'bg-positive/10 text-positive' : 'bg-negative/10 text-negative',
        className
      )}
    >
      {showSign && (
        positive
          ? <ChevronUpIcon className="h-3 w-3" />
          : <ChevronDownIcon className="h-3 w-3" />
      )}
      {formatPercent(value)}
    </span>
  );
}
