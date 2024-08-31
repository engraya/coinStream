import SharePost from "@src/app/components/Blog/SharePost";
import TagButton from "@src/app/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";
import PagesContainer from "@src/app/components/PagesContainer";
import { getCryptoById } from "@data/coinData";

async function CryptoDetailsPage({ params } : {
    params : {
      id : string
    }
  }) {

    const { id } = params

    const coinDeatils = await getCryptoById(id)
    console.log("Coin Details", coinDeatils)


  return (
    <PagesContainer>
          <>
      <section className="overflow-hidden text-white">
        <Link href={`/cryptocurrencies`}>
        <div className="justify-center gap-6 mb-4">
            <button className="relative">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black" />
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Back</span>
            </button>
        </div>
        </Link>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight">
                  {coinDeatils.data.coin.name}
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={coinDeatils?.data?.coin?.iconUrl}
                            alt="coin"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                        {coinDeatils.data.coin.symbol}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {coinDeatils.data.coin.description}
                  </p>
                  <div className="mb-10 list-inside list-disc flex justify-between text-body-color">
                  <div className="left">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Market Cap: 
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Price: 
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Rank: 
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      BTC Price:
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Change:
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Number of Markets:
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Number of Exchanges: 
                    </li>
                  </div>

                  <div className="right text-right">
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {coinDeatils.data.coin.marketCap}
                    </div>
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {coinDeatils.data.coin.price}
                    </div>
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {coinDeatils.data.coin.rank}
                    </div>
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {coinDeatils.data.coin.btcPrice}
                    </div>
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {coinDeatils.data.coin.change}
                    </div>
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    {coinDeatils.data.coin.numberOfMarkets}
                    </div>
                    <div className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {coinDeatils.data.coin.numberOfExchanges}
                    </div>
                  </div>
                </div>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-white dark:border-white dark:border-opacity-10 dark:text-white">
                  All Time High
                </h3>
                <ul className="px-8 py-6">
                  <li>
                      Price :  $ {coinDeatils.data.coin.allTimeHigh.price}
                  </li>
                  <li>
                      Timestamp : {coinDeatils.data.coin.allTimeHigh.timestamp}
                  </li>
                </ul>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-white dark:border-white dark:border-opacity-10 dark:text-white">
                  Supply
                </h3>
                <div className="flex flex-wrap px-8 py-6 text-white">
                <ul className="py-6">
                  <li>
                        Confirmed: {coinDeatils.data.coin.supply.confirmed ? "True" : ""}
                  </li>
                  <li>
                      Circulating :  {coinDeatils.data.coin.supply.circulating}
                  </li>
                  <li>
                      Total :  {coinDeatils.data.coin.supply.total}
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    </PagesContainer>
  )
}

export default CryptoDetailsPage
