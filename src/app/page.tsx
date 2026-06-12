import Hero from './components/Banner/index';
import MarketTicker from '@/components/ui/MarketTicker';
import StatBar from './components/Stats';
import Table from './components/Table/index';
import { serverFetchCoins, serverFetchStats } from '@/lib/api/server';

export default async function Home() {
  const [coinsData, statsData] = await Promise.all([
    serverFetchCoins(10),
    serverFetchStats(),
  ]);
  const topCoins = coinsData?.data?.coins ?? [];
  const stats    = statsData?.data ?? null;

  return (
    <main>
      <Hero topCoins={topCoins} />
      <MarketTicker coins={topCoins} />
      <StatBar stats={stats} />
      <Table coins={topCoins} />
    </main>
  );
}
