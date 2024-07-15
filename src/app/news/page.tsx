import React from 'react'
import PagesContainer from '../components/PagesContainer'
import NewsCard from '../components/NewsCard'

function NewsPage() {
  return (
    <>
    <PagesContainer>
      <div className="relative mx-auto max-w-5xl text-center">
      <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
        Latest Crypto News
      </h2>
        <div className="mx-auto flex items-center justify-center bg-gray-200 mt-10">
    <div className="group relative cursor-pointer py-2">
      <div className="flex items-center justify-between rounded-lg space-x-5 bg-white px-4">
        <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4">
          Select a Crypto
        </a>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </div>
      <div className="invisible absolute z-50 flex w-full flex-col bg-blue py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
        <a className="my-2 block py-1 font-semibold text-white md:mx-2">
          BitCoin
        </a>
        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-white md:mx-2">
          Etherium
        </a>
      </div>
    </div>
      </div>

    </div>
    <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
  <div className="grid gap-8 md:grid-cols-3">
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
  </div>
  </div>
    </PagesContainer>
    </>
  )
}

export default NewsPage
