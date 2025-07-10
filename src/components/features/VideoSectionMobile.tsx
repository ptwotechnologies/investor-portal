'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

interface SliderItem {
  id: number;
  imageUrl: string;
  altText: string;
  description: string;
}

export default function StartupPlatformCard() {
  const sliderItems: SliderItem[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/300/400?random=1',
      altText: 'Investors waiting',
      description: 'Investors are already waiting for startups like you',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/300/400?random=2',
      altText: 'Reduced cost services',
      description:
        'You get reduced-cost agency services (90% off market rates)',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/300/400?random=3',
      altText: 'Free guidance from experts',
      description: 'Free guidance from experts to become investor-ready',
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/300/400?random=4',
      altText: 'Tap into real audience',
      description:
        'And you can tap into real audience without running a single ad',
    },
  ];

  return (
    <div className="w-full mx-auto m overflow-hidden mt-0 lg:hidden shadow-2xl relative">
      {/* First section */}
      <div className="px-6 pt-8 pb-30 text-white rounded-b-3xl bg-primary-950 z-10 relative">
        <div className="flex w-fit items-center px-4 py-4 rounded-full bg-gradient-to-r from-[#001032] to-[#002471] bg-white/20 backdrop-blur-sm mb-10 mx-auto">
          <span className="text-[16px] text-center font-medium tracking-widest">
            We&apos;ve built a platform for startups
          </span>
        </div>

        <div className="relative mb-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2.5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {sliderItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-[120px] h-[160px] md:w-[150px] md:h-[200px] lg:w-[180px] lg:h-[240px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0 mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.altText}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 120px, (max-width: 1200px) 150px, 180px"
                    />
                  </div>
                  <p className="text-white text-left text-[12px] mt-2 max-w-[140px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="-mt-20 z-20 relative">
        <div className="p-3">
          <div className="w-full h-48 md:h-72 rounded-lg relative overflow-hidden">
            <Image
              src="https://picsum.photos/400/300"
              alt="Startup platform illustration"
              fill
              className="object-cover"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
        </div>

        <div className="flex bg-white mb-5 mt-2 px-6 justify-center relative">
          <div className="p-[1px] rounded-sm bg-gradient-to-r from-[#001032] to-[#002471] inline-block">
            <Button
              variant="white"
              className="tracking-wide text-[#001748] text-lg font-normal bg-white hover:bg-white h-10 px-4 rounded-sm"
            >
              See How it Works <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
