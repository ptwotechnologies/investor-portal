import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import HrComponent from './HrComponent';

export default function HeroSection() {
  return (
    <div className="bg-primary-950 p-4 sm:p-6 md:px-8 md:py-6 lg:p-12 text-white">
      <div className="max-w-[1400px] h-full mx-auto md:pt-4 lg:pt-2">
        <div className="grid grid-cols-1 my-8 sm:my-10 md:my-8 lg:my-6 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8 lg:gap-40 items-start">
          <div className="space-y-6 md:space-y-6 lg:space-y-8">
            <div className="md:mb-3 lg:mb-6">
              <div className="inline-block px-3 sm:px-4 md:px-4 py-2 md:py-2 bg-gradient-to-r from-[#001032] to-[#002471] rounded-full">
                <span className="flex text-white font-normal text-xs sm:text-sm md:text-sm lg:text-lg items-center justify-start leading-relaxed tracking-tight">
                  Built for startups ready to grow smarter
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-semibold leading-tight sm:leading-normal md:leading-tight lg:leading-relaxed tracking-wide lg:tracking-wider">
                Everything you <br className="sm:hidden md:hidden lg:hidden" />
                need to scale
                <br className="sm:hidden md:hidden lg:block" />
                your startUp
              </h1>
              <p className="text-base sm:text-lg md:text-base lg:text-lg text-[#F3F3FF] mt-4 sm:mt-6 md:mt-4 leading-relaxed md:leading-relaxed lg:leading-loose tracking-wide">
                Get expert-backed support, investor visibility, low-cost
                services and organic audience access — all in one system
              </p>
            </div>

            <div className="pt-2 md:pt-2 lg:pt-4">
              <Button
                variant="white"
                size="lg"
                className="px-6 sm:px-8 md:px-6 py-4 sm:py-6 md:py-4 w-32 sm:w-36 md:w-32 text-sm sm:text-base md:text-sm"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="hidden md:block lg:block">
            <Image
              src="https://picsum.photos/600/400"
              alt="Hero illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg md:max-h-80 lg:max-h-none object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <HrComponent />
      </div>
    </div>
  );
}
