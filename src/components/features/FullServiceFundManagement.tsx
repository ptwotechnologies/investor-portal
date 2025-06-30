import Image from 'next/image';
import React from 'react';

// Array of image data for the oval placeholders
const fundImages = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/oval1/200/400',
    alt: 'Fund Oval 1',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/oval2/200/400',
    alt: 'Fund Oval 2',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/oval3/200/400',
    alt: 'Fund Oval 3',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/oval4/200/400',
    alt: 'Fund Oval 4',
  },
];

function FullServiceFundManagement() {
  return (
    <div className="bg-slate-900 px-4 md:px-8 lg:px-12 py-12 md:py-20 ">
      <div className="max-w-[1400px] mx-auto bg-blue-200 rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-20 px-6 md:px-8 lg:pl-12 lg:pr-0">
          {/* Left Section: Text Content */}
          <div className="flex-shrink-0 w-full lg:w-1/2 lg:pr-8 xl:pr-12 mb-12 lg:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-4 md:mb-6 text-gray-800">
              Full Service Fund Management
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-gray-700">
              AngelList&apos;s full service offerings provides access to 50+
              services that remove friction from fund management for venture
              funds, rolling funds, and syndicates.
            </p>
            <a
              href="/fund-offerings"
              className="inline-block text-base md:text-lg font-medium underline text-gray-800 hover:text-gray-600 transition-colors"
            >
              Explore our fund & syndicate offerings
            </a>
          </div>

          {/* Right Section: All 4 Oval Images with Dividers */}
          <div className="flex flex-1 items-center justify-center lg:justify-start overflow-hidden w-full lg:w-auto">
            {/* All breakpoints: Show all 4 ovals with responsive sizing */}
            <div className="flex items-center">
              {/* First 3 full oval images */}
              {fundImages.slice(0, 3).map((img) => (
                <React.Fragment key={img.id}>
                  <div className="flex-shrink-0 w-16 h-28 sm:w-20 sm:h-32 md:w-24 md:h-40 lg:w-32 lg:h-52 xl:w-40 xl:h-64 bg-gray-500 rounded-full overflow-hidden relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 639px) 64px, (max-width: 767px) 80px, (max-width: 1023px) 96px, (max-width: 1279px) 128px, 160px"
                    />
                  </div>
                  {/* Divider Line after each image */}
                  <div className="w-px h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 bg-gray-400 mx-2 sm:mx-3 md:mx-4 lg:mx-4 xl:mx-6"></div>
                </React.Fragment>
              ))}

              {/* Fourth oval - half-cropped at the end */}
              <div className="flex-shrink-0 w-8 h-28 sm:w-10 sm:h-32 md:w-12 md:h-40 lg:w-16 lg:h-52 xl:w-20 xl:h-64 bg-gray-500 rounded-l-full overflow-hidden relative">
                <Image
                  src={fundImages[3].src}
                  alt={fundImages[3].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 32px, (max-width: 767px) 40px, (max-width: 1023px) 48px, (max-width: 1279px) 64px, 80px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullServiceFundManagement;
