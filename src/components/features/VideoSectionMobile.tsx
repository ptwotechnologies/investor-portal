'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useRef, useEffect, useState } from 'react'; // Import React hooks

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

  const mainImageRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);

  // Measure image height on mount and resize
  useEffect(() => {
    const updateImageHeight = () => {
      if (mainImageRef.current) {
        setImageHeight(mainImageRef.current.offsetHeight);
      }
    };

    // Set initial height
    updateImageHeight();

    // Update height on resize (debounced for performance if needed, but often fine for simple cases)
    window.addEventListener('resize', updateImageHeight);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateImageHeight);
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  // Calculate dynamic padding/margin based on measured image height
  const overlapAmount = imageHeight / 2;

  // Additional static padding/margin to add to dynamic values for fine-tuning
  // These prevent content from hugging edges too much, adjust as needed.
  const topSectionExtraPadding = 40; // px, roughly corresponds to `pb-10` or `pb-16` equivalent
  const bottomSectionExtraPadding = 24; // px, roughly corresponds to `pt-6` or `pt-8` equivalent

  return (
    <div className="relative w-full mx-auto mt-0 overflow-hidden shadow-2xl lg:hidden">
      {/* Top Section - Dynamic padding-bottom to create space for the overlapping image */}
      <div
        className="relative z-10 px-4 pt-6 text-white rounded-b-3xl bg-primary-950"
        style={{ paddingBottom: `${overlapAmount + topSectionExtraPadding}px` }}
      >
        <div className="flex w-fit items-center px-3 xs:px-4 py-2.5 rounded-full bg-gradient-to-r from-[#001032] to-[#002471] bg-white/20 backdrop-blur-sm mb-8 xs:mb-10 mx-auto">
          <span className="text-sm xs:text-[16px] text-center font-medium tracking-widest">
            We&apos;ve built a platform for startups
          </span>
        </div>

        <div className="relative mb-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2.2}
            breakpoints={{
              320: {
                slidesPerView: 2.2,
                spaceBetween: 8,
              },
              375: {
                slidesPerView: 2.4,
                spaceBetween: 4,
              },
              425: {
                slidesPerView: 2.5,
                spaceBetween: 6,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 15,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {sliderItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-[110px] h-[155px] xs:w-[130px] xs:h-[185px] sm:w-[150px] sm:h-[205px] md:w-[160px] md:h-[225px] rounded-full overflow-hidden bg-gray-300 flex-shrink-0 mb-3 xs:mb-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.altText}
                      fill
                      className="object-cover"
                      sizes="(max-width: 320px) 110px, (max-width: 425px) 130px, (max-width: 640px) 150px, (max-width: 768px) 160px, 190px"
                    />
                  </div>
                  <p className="text-white text-left text-[10px] xs:text-[12px] sm:text-[13px] mt-2 max-w-[110px] xs:max-w-[140px] sm:max-w-[160px] mx-auto leading-tight">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Container for the image and the bottom section */}
      {/* This div itself does NOT need a margin-top directly, as the top section's padding manages overlap space */}
      <div className="relative z-20">
        <div className="px-4 xs:px-6">
          {/* Main platform image wrapper - its height is determined by aspect ratio and w-full */}
          {/* -translate-y-1/2 ensures 50% *visual* overlap, pulling it up */}
          <div
            ref={mainImageRef} // Attach ref here to measure its height
            className="relative w-full aspect-[1.71/1] overflow-hidden shadow-xl rounded-2xl -translate-y-1/2"
          >
            <Image
              src="https://picsum.photos/350/200"
              alt="Startup platform illustration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Bottom section with button - Dynamic margin-top to pull it up to the correct position */}
        <div
          className="relative px-4 pt-6 pb-6 bg-white xs:px-6 xs:pb-8"
         
          style={{ marginTop: `-${overlapAmount - bottomSectionExtraPadding}px` }}
        >
          <div className="flex justify-center">
            <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#001032] to-[#002471] inline-block shadow-lg">
              <Button
                variant="white"
                className="tracking-wide text-[#001748] text-base xs:text-lg font-medium bg-white hover:bg-gray-50 transition-colors duration-200 h-11 xs:h-12 px-6 xs:px-8 rounded-lg"
              >
                See How it Works
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 xs:h-5 xs:w-5 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}