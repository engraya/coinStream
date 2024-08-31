import React from 'react'
import Image from 'next/image'
import { image } from '@public/images/images'
import millify from "millify";
function CoinCard({ currency } : any) {
  return (
    <>

    <div className="bg-blue py-4 pr-6 pl-6 rounded-lg transition-all duration-500">
    <div className="flex items-center justify-between">
    <div className="rounded-full gg h-12 w-12 flex items-center justify-center">
    <Image src={currency?.iconUrl} alt={image} width={20} height={20} />
  </div>
  <div>
    <h1 className="text-lg white font-extrabold text-white">
      {currency?.name}
    </h1>
  </div>
</div>

  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Price</h5>
    <span className="text-offwhite text-md font-normal">
      ${parseFloat(currency?.price).toFixed(2)}
    </span>
  </div>
  <div className="flex justify-between items-center">
    <h5 className="text-offwhite text-lg font-bold">Daily Change</h5>
    <span className="text-offwhite text-md font-normal">{currency?.change}%</span>
  </div>
  <div className="flex justify-between items-center">
    <h5 className="text-offwhite text-lg font-bold">Market Cap</h5>
    <span className="text-offwhite text-md font-normal">{millify(currency?.marketCap)}</span>
  </div>
</div>

    </>


  )
}

export default CoinCard
