"use client";

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface SlideItem {
  imgSrc: string;
}

const data: SlideItem[] = [
  { imgSrc: '/images/Table/cryptoone.svg' },
  { imgSrc: '/images/Table/cryptothree.svg' },
  { imgSrc: '/images/Table/cryptotwo.svg' },
  { imgSrc: '/images/Table/bitcoin.svg' },
  { imgSrc: '/images/Table/cryptoone.svg' },
  { imgSrc: '/images/Table/cryptothree.svg' },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true } },
    { breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
    { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true } },
  ],
};

const Companies = () => {
  return (
    <div className="bg-transparent text-center">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Slider {...sliderSettings}>
          {data.map((item, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={item.imgSrc}
                alt={`crypto-logo-${i}`}
                height={70}
                width={70}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Companies;
