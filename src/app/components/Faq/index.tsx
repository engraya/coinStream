"use client"
import Image from "next/image";
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is CoinStream?",
        subheading: 'CoinStream is a cutting-edge platform that offers comprehensive services for cryptocurrency enthusiasts. We provide real-time data, the latest news, and in-depth exchange insights, empowering users with the knowledge and tools needed to navigate the dynamic world of cryptocurrencies.'
    },
    {
        heading: "2. Is CoinStream free to use?",
        subheading: ' Absolutely! CoinStream offers a robust set of free features to get you started on your crypto journey. For users seeking advanced functionalities and premium services, we also offer a premium tier that unlocks additional benefits and tools'
    },
    {
        heading: "3. How often is the data updated?",
        subheading: 'At CoinStream, we pride ourselves on delivering the most accurate and timely information. Our data is updated in real-time, ensuring you have access to the latest market trends, price changes, and insights whenever you need them'
    },
    {
        heading: "4.  Can I compare different exchanges on CoinStream?",
        subheading: 'Yes, one of CoinStream’s standout features is our comprehensive exchange comparison tool. We provide detailed insights and side-by-side comparisons of various cryptocurrency exchanges, covering aspects such as fees, security measures, user experience, and more. This enables you to make informed decisions when choosing the best exchange for your needs.'
    },
    {
        heading: "5.  How secure is CoinStream?",
        subheading: ' Security is our top priority at CoinStream. We employ state-of-the-art encryption, multi-factor authentication, and other advanced security protocols to safeguard your data and ensure a secure user experience. You can trust CoinStream to keep your information safe'
    },
    {
        heading: "6. What types of cryptocurrencies does CoinStream support?",
        subheading: ' CoinStream supports a wide range of cryptocurrencies, including all major coins and a diverse selection of altcoins. Our platform provides data, news, and exchange insights for hundreds of cryptocurrencies, ensuring you have comprehensive coverage of the crypto market.'
    },

]

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked And Question</h3>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-4 px-4 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
