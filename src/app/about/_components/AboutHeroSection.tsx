import { Button } from '@/components/ui/Button'; 
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
   
    <div className="flex flex-col justify-center flex-grow px-4 py-4 bg-white sm:px-6 md:px-8 md:py-12 lg:px-8 lg:py-10">
      <div className="max-w-[1440px] w-full mx-auto md:pt-4 lg:pt-2"> 
        <div className="grid items-start grid-cols-1 gap-12 my-8 sm:my-10 md:my-8 lg:my-6 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-16 xl:gap-40">
          <div className="space-y-6 md:space-y-6 lg:space-y-8">
            <div className="md:mb-3 lg:mb-6">
              <div className="mb-6 md:mb-8 lg:mb-12">
                <h3>About</h3>
              </div>
            </div>

            <div>
              <h1 className="text-3xl text-primary-950 font-semibold leading-tight tracking-wide sm:text-4xl md:text-4xl xl:text-5xl sm:leading-tight md:leading-tight lg:leading-[59px] ">
                Taking your{' '}
                <br className="hidden lg:block" />
              
Step to the next level 
              </h1>
              <p className="text-base sm:text-lg md:text-lg lg:text-xl text-primary-950 mt-4 sm:mt-6 md:mt-6 lg:mt-8 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-none sm:max-w-none md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%]">
                 Grow Your Business by Partnering with India’s Fastest-Growing Startup Ecosystem
              </p>
            </div>

            <div className="pt-2 md:pt-2 lg:pt-4">
              <Button
                variant="default"
                size="lg"
                className="py-3 text-sm px-14 whitespace-nowrap"
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
              className="object-cover w-full h-auto rounded-lg md:max-h-80 lg:max-h-96 xl:max-h-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-6 sm:mt-12 lg:mt-8 xl:mt-6">
       
      </div>
    </div>
  );
}