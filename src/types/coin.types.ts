export interface CoinSupply {
  confirmed: boolean;
  circulating: string | null;
  total: string | null;
  max: string | null;
}

export interface CoinAllTimeHigh {
  price: string;
  timestamp: number;
}

export interface CoinLink {
  name: string;
  type: string;
  url: string;
}

export interface CoinContractAddress {
  platform: string;
  address: string;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string | null;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: (string | null)[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
  contractAddresses: CoinContractAddress[];
}

export interface CoinDetail extends Coin {
  description: string | null;
  websiteUrl: string | null;
  links: CoinLink[];
  supply: CoinSupply;
  allTimeHigh: CoinAllTimeHigh;
  numberOfMarkets: number;
  numberOfExchanges: number;
}

export interface Exchange {
  uuid: string;
  name: string;
  iconUrl: string;
  coinrankingUrl: string;
  volume: string;
  numberOfMarkets: number;
  rank: number;
  verified: boolean;
}

export interface GlobalStats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
  btcDominance: string;
  newestCoins: Coin[];
  bestCoins: Coin[];
}
