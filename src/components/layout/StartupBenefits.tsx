import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const StartupBenefits = () => {
  const benefits = [
    'Investors are already waiting for startups like you',
    'You get reduced-cost agency services (90% off market rates)',
    'Free guidance from experts to become investor-ready',
    'You can tap into real audience without running a single ad',
  ];

  return (
    <div className="hidden bg-primary-950 lg:block pb-8 md:pb-12 lg:pb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* We've built a platform for startups button */}
        <div className="mb-6 md:mb-8 lg:mb-12">
          <button className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-[#001032] to-[#002471] rounded-full text-white text-xs md:text-sm">
            We&apos;ve built a platform for startups
            <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content - Benefits List */}
          <div className="flex flex-col h-full">
            <div className="space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 md:space-x-4 lg:space-x-6 "
                >
                  <div className="flex flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full items-center justify-center mt-1 md:mt-2">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-950" />
                  </div>
                  <p className="text-white text-sm md:text-lg lg:text-[20px] leading-relaxed md:leading-[32px] lg:leading-[40px] xl:leading-[50px] font-normal tracking-wide">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Video Section & CTA */}
          <div className="flex flex-col h-full">
            {/* Video Section */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden relative w-full aspect-video">
                <Image
                  src="https://picsum.photos/650/373?random=1"
                  alt="Platform demonstration"
                  width={650}
                  height={373}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="flex absolute inset-0 items-center justify-center">
                  <div className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
                    Video
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-6 md:pt-8">
              <button className="inline-flex cursor-pointer items-center px-6 py-2.5 md:px-8 md:py-3 bg-transparent border border-gray-500 hover:border-gray-400 text-white text-sm md:text-base rounded-lg transition-colors">
                See How It Works
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupBenefits;
