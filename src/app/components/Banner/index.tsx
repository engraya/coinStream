"use client"
import Image from 'next/image';
import React, { useState } from 'react';



const Banner = () => {
    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>

            <div className="mx-auto max-w-7xl pt-16 lg:pt-24 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h2 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                            Stay Ahead in the Crypto World  <br /> with CoinStream
                            </h2>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'> Your Gateway to Real-time Cryptocurrency Data, Latest News, and Exchange Insights!". Discover the most accurate and up-to-date data, read the latest news, and explore a wide range of exchanges all in one place. Join the crypto revolution with CoinStream."</p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>Get Started</button>
                            </div>
                        </div>

                        <div className='col-span-5 lg:-m-48'>
                            <div className='arrowThree'></div>
                            <div className='arrowFour'></div>
                            <div className='arrowFive'></div>
                            <Image src="/images/Banner/banner.png" alt="nothing" width={1013} height={760} />
                            <div className='arrowSix'></div>
                            <div className='arrowSeven'></div>
                            <div className='arrowEight'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
