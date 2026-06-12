'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import type { TimePeriod } from '@/lib/constants';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

interface CoinChartProps {
  sparkline: (string | null)[];
  coinColor: string | null;
  timePeriod: TimePeriod;
}

function buildOptions(isDark: boolean): ChartOptions<'line'> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: isDark ? '#0F1629' : '#FFFFFF',
        titleColor:      isDark ? '#F0F4FF' : '#0F1629',
        bodyColor:       isDark ? '#8B9CC8' : '#3D4F75',
        borderColor:     isDark ? '#1E2A4A' : '#D4DBEE',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) =>
            ` $${parseFloat(String(ctx.raw)).toLocaleString('en-US', { maximumFractionDigits: 6 })}`,
        },
      },
    },
    scales: {
      x: { display: false },
      y: {
        display: true,
        grid: { color: isDark ? '#1E2A4A' : '#D4DBEE' },
        ticks: {
          color: isDark ? '#5A6B96' : '#6E7FA8',
          font: { size: 11, family: 'Poppins' },
        },
      },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
    elements: {
      point: { radius: 0, hoverRadius: 4 },
      line: { tension: 0.4 },
    },
  };
}

export function CoinChart({ sparkline, coinColor, timePeriod }: CoinChartProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';
  const filtered = sparkline.filter((v): v is string => v !== null);

  if (filtered.length < 2) {
    return (
      <div className="flex h-72 items-center justify-center rounded-xl border border-surface-border bg-surface-raised text-sm text-ink-tertiary">
        No chart data available for {timePeriod}
      </div>
    );
  }

  const color = coinColor ?? '#4F6EF7';
  const labels = Array.from({ length: filtered.length }, (_, i) => String(i));

  const data = {
    labels,
    datasets: [
      {
        data: filtered.map((v) => parseFloat(v)),
        borderColor: color,
        backgroundColor: `${color}26`,
        fill: true,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="h-72 w-full rounded-xl border border-surface-border bg-surface-raised p-4">
      <Line data={data} options={buildOptions(isDark)} />
    </div>
  );
}
