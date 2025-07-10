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
    <div className="hidden bg-primary-950 lg:block py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* We've built a platform for startups button */}
        <div className="mb-12">
          <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#001032] to-[#002471] rounded-full text-white text-sm">
            We&apos;ve built a platform for startups
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Benefits List */}
          <div className="space-y-8">
            <div className="space-y-[71px]">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex flex-shrink-0 w-6 h-6 bg-white rounded-full items-center justify-center mt-2">
                    <Check className="w-4 h-4 text-primary-950" />
                  </div>
                  <p className="text-white text-[20px] leading-[40px] font-normal tracking-wide">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Video Section & CTA */}
          <div className="space-y-8">
            {/* Video Section */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden relative w-full">
                <Image
                  src="https://picsum.photos/650/373?random=1"
                  alt="Platform demonstration"
                  width={650}
                  height={373}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="flex absolute inset-0 items-center justify-center">
                  <div className="text-gray-400 text-xl font-light tracking-wide">
                    Video
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="inline-flex cursor-pointer items-center px-8 py-3 bg-transparent border border-gray-500 hover:border-gray-400 text-white text-base rounded-lg transition-colors">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupBenefits;