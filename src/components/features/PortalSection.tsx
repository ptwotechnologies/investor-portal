'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
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
  return (
    <section className="px-4 portal-section lg:bg-white bg-primary-950 lg:py-10 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-4xl font-semibold tracking-wide text-white lg:text-[#33405b] mb-8 text-left">
          Who is this <br className="md:hidden" /> portal for?
        </h2>

               {/* Desktop View (lg and up) */}
        <div className="hidden mt-12 lg:block">
          <div className="grid grid-cols-3 gap-6">
            {portalCards.map((card) => (
              <div key={card.id} className="flex flex-col items-stretch group">
                {/* Line above each card */}
                <div className="h-[1px] bg-[#e6e7eb] w-full mb-6" />

                <motion.div 
                  className="relative flex flex-col items-start flex-1 min-w-0 text-center bg-white rounded-2xl group/card"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  initial={{ y: 0, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
                >
                  <h3 className="text-lg font-semibold text-[#667084] mb-4 text-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    {card.title}
                  </h3>

                  <div className="relative w-full mb-6 overflow-hidden aspect-square rounded-2xl">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out rounded-2xl group-hover/card:scale-105"
                      sizes="(max-width: 1024px) 33vw, 420px"
                    />

                    {/* Enhanced hover capsule button */}
                    <Link href={`/portal/${card.id}`} passHref>
                      <div className="absolute bottom-4 right-4 flex items-center justify-end h-8 rounded-full
                                     bg-white/20 border border-white backdrop-blur-sm cursor-pointer overflow-hidden
                                     transition-all duration-300 ease-out w-8 px-2 group-hover/card:w-[88px] group-hover/card:px-3 group-hover/card:bg-white/30">
                        <span className="mr-2 text-sm font-medium text-white transition-all duration-300 ease-out -translate-x-2 opacity-0 whitespace-nowrap group-hover/card:opacity-100 group-hover/card:translate-x-0">
                          View
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="flex-shrink-0 w-4 h-4 text-white transition-transform duration-200 ease-out group-hover/card:translate-x-1"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  <p className="mt-4 pl-2.5 mb-8 text-lg tracking-wider text-left lg:text-primary-950">
                    {card.description}
                  </p>
                </motion.div>

                {/* Line below each card */}
                <div className="h-[1px] bg-[#e6e7eb] w-full mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet View (md only) */}
        <div className="hidden mt-12 md:block lg:hidden">
          <Swiper
            modules={[]}
            spaceBetween={24}
            slidesPerView={3}
            loop={false}
            className="px-4 mySwiper"
          >
            {portalCards.map((card, index) => (
              <SwiperSlide key={`${card.id}-${index}`}>
                <div className="flex flex-col items-center w-full">
                  <div className="h-[1px] bg-[#33405b] w-full mb-4"></div>
                  <div className="flex flex-col items-start w-full text-center rounded-lg bg-primary-950">
                    <div className="flex flex-col items-start w-full">
                      <h3 className="max-w-full mb-4 overflow-hidden text-base font-semibold text-left text-white whitespace-nowrap text-ellipsis">
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
                          <div className="absolute flex items-center justify-center transition-all duration-200 border border-white rounded-full cursor-pointer bottom-3 right-3 w-7 h-7 bg-white/20 backdrop-blur-sm hover:bg-white/30">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-3 h-3 text-white"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                      <p className="text-sm text-left text-gray-400 font-extralight">
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
        <div className="block md:hidden mt-6 px-1.5">
          <Swiper
            modules={[]}
            spaceBetween={10}
            slidesPerView={2.3}
            loop={false}
            className="mySwiper"
          >
            {portalCards.map((card, index) => (
              <SwiperSlide key={`${card.id}-${index}`}>
                <div className="rounded-lg bg-primary-950">
                  <h3 className="mb-4 overflow-hidden text-base font-semibold text-left text-white truncate whitespace-nowrap text-ellipsis">
                    {card.title}
                  </h3>
                  <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden mb-2">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 425px) 100vw, 160px"
                    />
                    <Link href={`/portal/${card.id}`} passHref>
                      <div className="absolute flex items-center justify-center w-6 h-6 transition-all duration-200 border border-white rounded-full cursor-pointer bottom-2 right-2 bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3 h-3 text-white"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <p className="text-xs font-light text-gray-400">{card.description}</p>
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
