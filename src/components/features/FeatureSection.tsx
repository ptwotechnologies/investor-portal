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
    <div className="bg-primary-950 lg:bg-white lg:text-primary-950 text-white py-4 lg:py-10 xl:py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-6 mt-16">
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 lg:gap-12">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-12 rounded-full overflow-hidden relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 80px, 96px"
                />
              </div>
              <h3 className="text-xl text-primary-950 lg:text-base font-medium tracking-wide">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <div className="grid grid-cols-2 divide-x-2 divide-gray-700 mb-16">
            {' '}
            {/* Increased mb-8 to mb-16 */}
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full overflow-hidden relative">
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

          <div className="grid grid-cols-2 divide-x-2 divide-gray-700 mb-16">
            {' '}
            {/* Increased mb-8 to mb-12 */}
            {features.slice(2, 4).map((feature, index) => (
              <div key={index + 2} className="text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full overflow-hidden relative">
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full overflow-hidden relative">
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

          <HrComponent />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFeaturesSection;
