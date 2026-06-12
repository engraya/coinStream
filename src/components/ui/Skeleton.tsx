import { cn } from '@/lib/utils/cn';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded bg-surface-overlay', className)} />
  );
}

export function CoinCardSkeleton() {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
      <div className="mb-4 flex items-center gap-3">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <Skeleton className="mb-2 h-6 w-28" />
      <div className="mt-3 flex justify-between">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}

export function CoinGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <CoinCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function CoinTableRowSkeleton() {
  return (
    <tr className="border-b border-surface-border">
      {Array.from({ length: 5 }).map((_, i) => (
        <td key={i} className="px-4 py-3.5">
          <Skeleton className={cn('h-4', i === 1 ? 'w-32' : 'w-16')} />
        </td>
      ))}
    </tr>
  );
}

export function TableSkeleton({ rows = 10 }: { rows?: number }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-surface-border bg-surface-overlay px-4 py-3">
        <Skeleton className="h-4 w-40" />
      </div>
      <table className="w-full">
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <CoinTableRowSkeleton key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CoinDetailSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-64 rounded-lg" />
        <Skeleton className="h-8 w-28 rounded-lg" />
      </div>
      <Skeleton className="h-72 w-full rounded-xl" />
    </div>
  );
}
