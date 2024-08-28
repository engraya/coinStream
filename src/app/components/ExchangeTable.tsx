import React from 'react'
import Image from 'next/image'
function ExchangeTable() {
  return (
<div className="flex flex-col mt-8">
  <div className=" overflow-x-auto pb-4">
    <div className="min-w-full inline-block align-middle">
      <div className="overflow-hidden  border rounded-lg border-gray-300">
        <table className="text-white table-auto min-w-full">
          <thead>
            <tr>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">EXCHANGES</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">MARKET</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">24h TRADE VOLUMES</th>
              <th scope="col" className="p-2 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">CHANGES</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-gray-300 ">
            <tr className="transition-all duration-500 hover:bg-white hover:text-blue">
              <td className="px-3 py-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/Table/bitcoin.svg" width={70} height={70} alt="Floyd image" />
                  <div className="data">
                    <p className="font-normal text-sm text-gray-900">BitCoin</p>
                  </div>
                </div>
              </td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">8.5K</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">$56.78B</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">45%</td>
            </tr>
            <tr className="transition-all duration-500 hover:bg-white hover:text-blue">
              <td className="px-3 py-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/Table/cryptoone.svg" width={70} height={70} alt="Floyd image" />
                  <div className="data">
                    <p className="font-normal text-sm text-gray-900">BitCoin</p>
                  </div>
                </div>
              </td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">8.5K</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">$56.78B</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">45%</td>
            </tr>
            <tr className="transition-all duration-500 hover:bg-white hover:text-blue">
              <td className="px-3 py-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/Table/cryptothree.svg" width={70} height={70} alt="Floyd image" />
                  <div className="data">
                    <p className="font-normal text-sm text-gray-900">BitCoin</p>
                  </div>
                </div>
              </td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">8.5K</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">$56.78B</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">45%</td>
            </tr>
            <tr className="transition-all duration-500 hover:bg-white hover:text-blue">
              <td className="px-3 py-3">
                <div className="flex items-center gap-3">
                  <Image src="/images/Table/cryptotwo.svg" width={70} height={70} alt="Floyd image" />
                  <div className="data">
                    <p className="font-normal text-sm text-gray-900">BitCoin</p>
                  </div>
                </div>
              </td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">8.5K</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">$56.78B</td>
              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">45%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ExchangeTable
