import React from 'react'
import { getStats } from '@data/coinData'

async function Stats() {

  const statsData = await getStats()

  return (
<section id="works" className="relative bg-gray-900 py-10">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">Crypto Stats</h2>
    </div>
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width={1000} height={500} decoding="async" data-nimg={1} className="w-full" style={{color: 'transparent'}} src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" />
      </div>
      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-12">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">1</span>
          </div>
          <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">Total Currencies</h3>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">2</span>
          </div>
          <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Total Markets</h3>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">3</span>
          </div>
          <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Total Market Caps</h3>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">4</span>
          </div>
          <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Total 24H Volumes</h3>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">5</span>
          </div>
          <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Total Exchanges</h3>
        </div>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5">
  <div className="flex flex-col bg-white/5 p-8">
    <dd className="order-first text-2xl font-semibold tracking-tight text-white">{statsData?.data?.totalCoins}</dd>
  </div>
  <div className="flex flex-col bg-white/5 p-8">
    <dd className="order-first text-2xl font-semibold tracking-tight text-white">{statsData?.data?.totalMarkets}</dd>
  </div>
  <div className="flex flex-col bg-white/5 p-8">
    <dd className="order-first text-2xl font-semibold tracking-tight text-white">{statsData?.data?.totalMarketCap}</dd>
  </div>
  <div className="flex flex-col bg-white/5 p-8">
    <dd className="order-first text-2xl font-semibold tracking-tight text-white">{statsData?.data?.total24hVolume}</dd>
  </div>
  <div className="flex flex-col bg-white/5 p-8">
    <dd className="order-first text-2xl font-semibold tracking-tight text-white">{statsData?.data?.totalExchanges}</dd>
  </div>
</dl>

    </div>
  </div>
  <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)'}}>
  </div>
</section>

  )
}

export default Stats
