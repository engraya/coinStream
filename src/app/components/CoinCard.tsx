import React from 'react'
import Image from 'next/image'
import { image } from '@public/images/images'
import Link from 'next/link'
import CryptoCurrency from '../../../types/types'
function CoinCard({ currency } : any) {
  return (
    <>

    <div className="bg-blue py-4 pr-6 pl-6 rounded-lg">
  <div className="rounded-full gg h-12 w-12 flex items-center justify-center">
    <Image src={currency?.iconUrl} alt={image} width={20} height={20} />
  </div>
  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Price</h5>
    <span className="text-offwhite text-md font-normal">${currency?.price}</span>
  </div>
  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Daily Change</h5>
    <span className="text-offwhite text-md font-normal">{currency?.change}%</span>
  </div>
  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Market Cap</h5>
    <span className="text-offwhite text-md font-normal">{currency?.marketCap}B</span>
  </div>
</div>

    </>


  )
}

export default CoinCard
