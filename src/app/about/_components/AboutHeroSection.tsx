import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-grow flex-col justify-center bg-white px-4 py-4 sm:px-6 md:px-8 md:py-12 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] md:pt-4 lg:pt-2">
        <div className="my-8 grid grid-cols-1 items-start gap-12 sm:my-10 md:my-8 md:grid-cols-2 md:gap-8 lg:my-6 lg:grid-cols-2 lg:gap-16 xl:gap-40">
          <div className="space-y-6 md:space-y-6 lg:space-y-8">
            <div className="md:mb-3 lg:mb-6">
              <div className="mb-6 md:mb-8 lg:mb-12">
                <h3>About</h3>
              </div>
            </div>

            <div>
              <h1 className="text-primary-950 text-3xl leading-tight font-semibold tracking-wide sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight lg:leading-[59px] xl:text-5xl">
                Taking your <br className="hidden lg:block" />
                Step to the next level
              </h1>
              <p className="text-primary-950 mt-4 max-w-none text-base leading-relaxed sm:mt-6 sm:max-w-none sm:text-lg sm:leading-relaxed md:mt-6 md:max-w-[85%] md:text-lg md:leading-relaxed lg:mt-8 lg:max-w-[80%] lg:text-xl lg:leading-relaxed xl:max-w-[75%]">
                Grow Your Business by Partnering with India’s Fastest-Growing
                Startup Ecosystem
              </p>
            </div>

            <div className="pt-2 md:pt-2 lg:pt-4">
              <Button
                variant="default"
                size="lg"
                className="px-14 py-3 text-sm whitespace-nowrap"
              >
                Enroll now
              </Button>
            </div>
          </div>

          <div className="">
            <Image
              src="https://picsum.photos/600/400"
              alt="Hero illustration"
              width={600}
              height={400}
              className="h-auto w-full rounded-lg object-cover md:max-h-80 lg:max-h-96 xl:max-h-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 flex justify-center sm:mt-12 lg:mt-8 xl:mt-6"></div>
    </div>
  );
}
