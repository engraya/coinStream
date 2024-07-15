import React from 'react'
import PagesContainer from '../components/PagesContainer'
import ExchangeTable from '../components/ExchangeTable'
function ExchangesPage() {
  return (
    <PagesContainer>
            <div className="relative mx-auto max-w-5xl text-center">
      <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
        Exchanges
      </h2>
    </div>
      <ExchangeTable/>
    </PagesContainer>
  )
}

export default ExchangesPage
