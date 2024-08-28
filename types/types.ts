interface ContractAddress {
    contract: string;
  }
  
  interface CryptoCurrency {
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string;
    listedAt: number;
    tier: number;
    change: string;
    rank: number;
    sparkline?: string[]; // If sparkline is an array of price points, you can change the type accordingly
    lowVolume: boolean;
    coinrankingUrl: string;
    "24hVolume": string; // Property names with special characters need to be in quotes
    btcPrice: string;
    contractAddresses?: ContractAddress[]; // Assuming contractAddresses is an array of objects
  }
  
  export default CryptoCurrency;
  