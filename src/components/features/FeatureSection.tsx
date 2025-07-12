import React from 'react';
import Image from 'next/image';
import HrComponent from './HrComponent';

const ResponsiveFeaturesSection = () => {
  const features = [
    {
      title: 'Free Expert Guidance',
      image: 'https://picsum.photos/200/200?random=1',
    },
    {
      title: 'Cross-Industry Community',
      image: 'https://picsum.photos/200/200?random=2',
    },
    {
      title: 'Real Audience Access',
      image: 'https://picsum.photos/200/200?random=3',
    },
    {
      title: 'No Hidden Fees',
      image: 'https://picsum.photos/200/200?random=4',
    },
    {
      title: '24/7 Support',
      image: 'https://picsum.photos/200/200?random=5',
    },
  ];

  return (
    <div className="px-4 py-4 text-white bg-primary-950 lg:bg-white lg:text-primary-950 lg:py-10 xl:py-12 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto mb-6 mt-16">
        <div className="hidden w-full gap-8 lg:grid lg:grid-cols-4 lg:gap-12">
          {features.slice(0, 4).map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 text-center">
  <div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full lg:w-24 lg:h-24">
    <Image
      src={feature.image}
      alt={feature.title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 80px, (max-width: 1024px) 80px, 96px"
    />
  </div>
  <h3 className="text-xl font-medium tracking-wide text-primary-950 lg:text-base">
    {feature.title}
  </h3>
</div>

          ))}
        </div>

        <div className="lg:hidden">
          <div className="grid grid-cols-2 mb-16 divide-x-2 divide-gray-700">
            {' '}
            {/* Increased mb-8 to mb-16 */}
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="px-4 text-center">
                <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full sm:w-20 sm:h-20">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>
                <h3 className="text-sm font-medium text-[#abb0b9] leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 mb-16 divide-x-2 divide-gray-700">
            {' '}
            {/* Increased mb-8 to mb-12 */}
            {features.slice(2, 4).map((feature, index) => (
              <div key={index + 2} className="px-4 text-center">
                <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full sm:w-20 sm:h-20">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>
                <h3 className="text-sm text-[#abb0b9] font-medium leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {features.length > 4 && (
            <div className="flex justify-center mb-10">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full sm:w-20 sm:h-20">
                  <Image
                    src={features[4].image}
                    alt={features[4].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>
                <h3 className="text-sm text-[#abb0b9] font-medium leading-tight">
                  {features[4].title}
                </h3>
              </div>
            </div>
          )}

        <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
  <div className="w-[85%]">
    <HrComponent />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFeaturesSection;