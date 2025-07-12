import { Button } from '../ui/Button';
import Image from 'next/image';
import HrComponent from './HrComponent';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="px-4 py-4 bg-primary-950 sm:px-6 md:px-8 md:py-12 lg:px-8 lg:py-10">
      <div className="max-w-[1440px] h-full mx-auto md:pt-4 lg:pt-2">
        <div className="grid items-start grid-cols-1 gap-12 my-8 sm:my-10 md:my-8 lg:my-6 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-16 xl:gap-40">
          <div className="space-y-6 md:space-y-6 lg:space-y-8">
            <div className="md:mb-3 lg:mb-6">
               <div className="mb-6 md:mb-8 lg:mb-12">
          <button className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-[#001032] to-[#002471] rounded-full text-white text-xs md:text-sm">
            We&apos;ve built a platform for startups
            <ArrowRight className="w-3 h-3 ml-2 md:h-4 md:w-4" />
          </button>
        </div>
            </div>

            <div>
              <h1 className="text-3xl text-[#F3F3FF] font-semibold leading-tight tracking-wide sm:text-4xl md:text-4xl xl:text-6xl sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
                Everything you need to scale your startUp
              </h1>
              <p className="text-base sm:text-lg md:text-lg lg:text-xl text-[#F3F3FF] mt-4 sm:mt-6 md:mt-6 lg:mt-8 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-none sm:max-w-none md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%]">
                Get expert-backed support, investor visibility, low-cost
                services and organic audience access — all in one system
              </p>
            </div>

            <div className="pt-2 md:pt-2 lg:pt-4">
              <Button
                variant="white"
                size="lg"
                className="w-32 px-6 py-4 text-sm sm:px-8 md:px-6 sm:py-6 md:py-4 sm:w-36 md:w-32 sm:text-base md:text-sm"
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
              className="object-cover w-full h-auto rounded-lg md:max-h-80 lg:max-h-96 xl:max-h-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
  <div className="w-[80%]">
    <HrComponent />
  </div>
</div>
    </div>
  );
}