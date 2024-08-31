import React from 'react'
import Image from 'next/image'
import { getCryptoCurrencies } from '@data/coinData'
import millify from "millify";
async function ExchangeTable() {

  const coins = await getCryptoCurrencies();
  return (
<div className="flex flex-col mt-8">
  <div className=" overflow-x-auto pb-4">
    <div className="min-w-full inline-block align-middle">
      <div className="overflow-hidden  border rounded-lg border-gray-300">
        <table className="text-white table-auto min-w-full">
          <thead>
            <tr>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">COINS</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">SYMBOL</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">MARKET</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">PRICE</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">CHANGES</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-gray-300 ">
            {coins.data.coins.map((coin : any) => (
            <tr key={coin.uuid} className="transition-all duration-500 hover:bg-white hover:text-blue">
            <td className="px-3 py-3">
              <div className="flex items-center gap-3">
                <Image src={coin.iconUrl} width={50} height={50} alt="image" />
                <div className="data">
                  <p className="font-normal text-sm text-gray-900">{coin.name}</p>
                </div>
              </div>
            </td>
            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{coin.symbol}</td>
            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{millify(coin.marketCap)}</td>
            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">${coin.price}</td>
            <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{coin.change}%</td>
          </tr>
            ))}
  
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ExchangeTable
