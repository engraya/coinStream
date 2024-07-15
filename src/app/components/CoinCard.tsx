import React from 'react'
import Image from 'next/image'
import { image } from '@public/images/images'
function CoinCard() {
  return (
<div className="bg-blue py-4 pr-6 pl-6 rounded-lg">
  <div className="rounded-full gg h-12 w-12 flex items-center justify-center">
    <Image src={image} alt={image} width={20} height={20} />
  </div>
  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Price</h5>
    <span className="text-offwhite text-md font-normal">$235</span>
  </div>
  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Daily Change</h5>
    <span className="text-offwhite text-md font-normal">1.2%</span>
  </div>
  <div className="flex justify-between items-center mt-4">
    <h5 className="text-offwhite text-lg font-bold">Market Cap</h5>
    <span className="text-offwhite text-md font-normal">35.9B</span>
  </div>
</div>

  )
}

export default CoinCard
