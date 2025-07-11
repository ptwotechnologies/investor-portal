'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';

interface CardData {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const portalCards: CardData[] = [
  {
    id: 'startups',
    title: 'Startups',
    imageUrl: 'https://picsum.photos/id/1/131/174',
    description: "You're building a startup that solves a real-world problem",
  },
  {
    id: 'investors',
    title: 'Investors',
    imageUrl: 'https://picsum.photos/id/2/131/174',
    description: 'You want incubated startups curated to your domain',
  },
  {
    id: 'service-professionals',
    title: 'Service Professionals',
    imageUrl: 'https://picsum.photos/id/3/131/174',
    description: 'You want incubated startups curated to your domain',
  },
];

const PortalSection: React.FC = () => {
  const duplicatedPortalCards = [
    ...portalCards,
    ...portalCards,
    ...portalCards,
    ...portalCards,
  ];

  return (
    <section className="portal-section lg:bg-white bg-primary-950 lg:py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-4xl font-semibold tracking-wide text-white lg:text-[#33405b] mb-8 text-left ">
          Who is this {" "}
          <br className="md:hidden" />
          portal for?
        </h2>

        {/* Desktop View (lg and up) */}
        <div className="hidden lg:block px-10 mt-12">
          <div className="h-[1px] bg-[#e6e7eb] w-full mb-6" />
          <div className="flex justify-between gap-6">
            {portalCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-stretch flex-1 group"
              >
                <div className="flex relative flex-1 rounded-2xl text-center flex-col items-start min-w-0 bg-white transition-all duration-300 ease-in-out transform group-hover:shadow-lg group-hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-[#667084] mb-4 text-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    {card.title}
                  </h3>
                  <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 33vw, 420px"
                    />
                    <Link href={`/portal/${card.id}`} passHref>
                      <div className="flex absolute bottom-4 border border-white right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center hover:bg-white/30 transition-all duration-200 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <p className="text-white lg:text-primary-950 tracking-wider text-lg text-left mt-4 mb-8">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[1px] bg-[#e6e7eb] w-full mt-6" />
        </div>

        {/* Tablet View (md only) - Separate Swiper */}
        <div className="hidden md:block lg:hidden mt-12">
          <Swiper
            modules={[]}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            className="mySwiper px-4"
          >
            {duplicatedPortalCards.map((card, index) => (
              <SwiperSlide key={`${card.id}-${index}`}>
                <div className="flex flex-col items-center w-full">
                  <div className="h-[1px] bg-[#33405b] w-full mb-4"></div>
                  <div className="flex w-full rounded-lg text-center bg-primary-950 flex-col items-start">
                    <div className="flex p-2 flex-col items-start w-full">
                      <h3 className="text-base font-semibold text-white mb-4 text-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                        {card.title}
                      </h3>
                      <div className="relative w-full h-[175px] mb-5 rounded-[5px] overflow-hidden">
                        <Image
                          src={card.imageUrl}
                          alt={card.title}
                          fill
                          className="rounded-[5px] object-cover"
                          sizes="(max-width: 768px) 33vw, 200px"
                        />
                        <Link href={`/portal/${card.id}`} passHref>
                          <div className="flex absolute border border-white bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-3 h-3 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                      <p className="text-gray-400 font-extralight text-sm text-left">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#33405b] w-full mt-4"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View (below md) */}
        <div className="block md:hidden">
          <Swiper
            modules={[]}
            spaceBetween={12}
            slidesPerView={2.3}
            loop={true}
            className="mySwiper px-2"
          >
            {duplicatedPortalCards.map((card, index) => (
              <SwiperSlide key={`${card.id}-${index}`}>
                <div className="flex flex-col items-center w-full">
                  <div className="h-[1px] bg-[#33405b] w-full mb-4"></div>
                  <div className="flex w-full rounded-lg text-center bg-primary-950 flex-col items-start">
                    <div className="flex p-2 flex-col items-start w-full">
                      <h3 className="text-base font-semibold text-white mb-4 text-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                        {card.title}
                      </h3>
                      <div className="relative w-full h-[175px] mb-5 rounded-[5px] overflow-hidden">
                        <Image
                          src={card.imageUrl}
                          alt={card.title}
                          fill
                          className="rounded-[5px] object-cover"
                          sizes="(max-width: 425px) 100vw, 160px"
                        />
                        <Link href={`/portal/${card.id}`} passHref>
                          <div className="flex absolute border border-white bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-3 h-3 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                      <p className="text-gray-400 font-extralight text-sm text-left">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#33405b] w-full mt-4"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
