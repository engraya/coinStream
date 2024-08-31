import React from 'react'
import PagesContainer from '../components/PagesContainer'
import CoinCard from '../components/CoinCard'
import Link from 'next/link'
import { getCryptoCurrencies } from '@data/coinData'
async function CryptoCurrencies() {

  const currencies = await getCryptoCurrencies();

  console.log("Currencies", currencies)
  return (
    <>
    <PagesContainer>
      <div className="relative mx-auto max-w-5xl text-center">
      <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
        CryptoCurrencies
      </h2>
    </div>
    <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
  <div className="grid gap-14 md:grid-cols-4 md:gap-5">
    {currencies?.data?.coins.map((currency : any) => (
    <Link
    href={`/cryptocurrencies/${currency.uuid}`} key={currency.uuid}>
       <CoinCard currency={currency}/>
   </Link>
    ))}
  </div>
  </div>
  <div className="flex justify-center items-center mt-8">
  <button className="relative inline-flex  group">
    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3e6275] via-[#397e8f] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
    <a href="#" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Show more
    </a>
  </button>
</div>
    </PagesContainer>
    </>

  )
}

export default CryptoCurrencies
