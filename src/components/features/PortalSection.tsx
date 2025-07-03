'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import React from 'react';

// Define a type for the card data for better type safety
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
    imageUrl: 'https://picsum.photos/id/237/300/300', // Example using picsum with ID for consistent image
    description: "You're building a startup that solves a real-world problem",
  },
  {
    id: 'investors',
    title: 'Investors',
    imageUrl: 'https://picsum.photos/id/238/300/300',
    description: 'You want incubated startups curated to your domain',
  },
  {
    id: 'service-professionals',
    title: 'Service Professionals',
    imageUrl: 'https://picsum.photos/id/239/300/300',
    description: 'You want incubated startups curated to your domain',
  },
];

const PortalSection: React.FC = () => {
  return (
    <section className="portal-section lg:bg-white bg-primary-950 py-10 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl  md:text-4xl font-semibold tracking-wide text-white lg:text-[#33405b] mb-8 text-left pl-4">
          Who is this portal for?
        </h2>

        {/* Desktop View */}
        <div className="hidden md:flex justify-around  mt-12">
          {portalCards.map((card) => (
            <div
              key={card.id}
              className="flex-1 rounded-lg p-3 text-center flex flex-col items-start min-w-0"
            >
              <h3 className="text-xl font-semibold text-[#667084] mb-4 text-left">
                {card.title}
              </h3>
              <div className="relative w-full aspect-square mb-6 rounded-md overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-primary-950 tracking-wider text-base text-left">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View with Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[]} // Removed Pagination module
            spaceBetween={16}
            slidesPerView={1.2} // Show current card fully + preview of next card
            centeredSlides={true}
            className="mySwiper"
          >
            {portalCards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="flex justify-center">
                  <div className="w-full max-w-sm  rounded-lg  text-center bg-primary-950  flex flex-col items-start mx-auto">
                    <h3 className="text-xl font-semibold text-white mb-4 text-left">
                      {card.title}
                    </h3>
                    <div className="relative w-full aspect-square mb-5 rounded-md overflow-hidden">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <p className="text-gray-400 font-extralight  text-base text-left">
                      {card.description}
                    </p>
                  </div>
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
