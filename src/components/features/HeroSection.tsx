import { Button } from '../ui/Button';
import Image from 'next/image';
import HrComponent from './HrComponent';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function HeroSection() {
  return (
    // The outermost div needs to flex-grow to take full available height from <main>
    // and then its internal content can be centered using flex items-center and justify-center
    <div className="flex flex-col justify-center flex-grow px-4 py-4 bg-primary-950 sm:px-6 md:px-8 md:py-12 lg:px-8 lg:py-10"> {/* Added flex flex-col justify-center */}
      <div className="max-w-[1440px] w-full mx-auto md:pt-4 lg:pt-2"> {/* Removed h-full here */}
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
              <h1 className="text-3xl text-[#F3F3FF] font-semibold leading-tight tracking-wide sm:text-4xl md:text-4xl xl:text-5xl sm:leading-tight md:leading-tight lg:leading-[59px] ">
                Everything you need{' '}
                <br className="hidden lg:block" />
                to scale your startUp
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
                className="px-6 py-3 text-sm whitespace-nowrap"
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
      <div className="flex justify-center mt-8 mb-8 sm:mt-12 lg:mt-16 xl:mt-20">
        <div className="w-[100%]">
          <HrComponent />
        </div>
      </div>
    </div>
  );
}