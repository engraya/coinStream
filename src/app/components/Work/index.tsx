"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Real-Time Data',
        subheading: 'Experience the power of live data streaming for all major cryptocurrencies. Stay ahead of the market with instant updates on prices, trends, and market movements. CoinStream ensures you have the most accurate and timely information to make informed decisions',

    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Latest News',
        subheading: 'Never miss a beat in the ever-evolving crypto landscape. CoinStream aggregates the latest news from top sources around the world, providing you with up-to-the-minute coverage of breaking news, expert analyses, and market insights. Stay informed and stay ahead.',

    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Exchange Insights',
        subheading: 'Navigate the complex world of cryptocurrency exchanges with ease. Our comprehensive comparison tools allow you to evaluate and choose from the best exchanges based on fees, security, user experience, and more. Make smarter trading decisions with CoinStream’s detailed exchange insights',

    },
        {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Comprehensive Analytics',
        subheading: 'Delve deeper into the crypto market with CoinStream’s advanced analytics. Access detailed charts, historical data, and technical indicators to analyze trends and make data-driven decisions. Our powerful analytics tools are designed to provide you with a competitive edge in the crypto market.',

    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>How CoinStream Works</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
