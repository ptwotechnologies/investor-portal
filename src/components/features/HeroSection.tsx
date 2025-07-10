import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import HrComponent from './HrComponent';

export default function HeroSection() {
  return (
    <div className="bg-primary-950 p-6 md:p-12 min-h-11/12 text-white">
      <div className="max-w-[1400px] h-full mx-auto lg:pt-2">
        <div className="grid grid-cols-1 my-10 lg:my-6 lg:grid-cols-2 gap-40 items-start">
          <div className="space-y-8">
            <div className="md:mb-6">
              <div className="inline-block pr-4 pl-1 py-2 bg-gradient-to-r from-[#001032] to-[#002471] rounded-full">
                <span className="flex text-white font-normal sm:text-[9px] md:text-lg items-center justify-start leading-[30px] tracking-tighter">
                  Built for startups ready to grow smarter
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl lg:text-5xl font-semibold leading-normal tracking-wide lg:leading-relaxed lg:tracking-wider">
                Everything you <br className="max-sm:block lg:hidden" />
                need
                <br className="max-sm:hidden lg:block" />
                to scale
                <br className="max-sm:block lg:hidden" />
                your startUp
              </h1>
              <p className="text-lg text-[#F3F3FF] mt-6 leading-loose tracking-wide ">
                Get expert-backed support, investor visibility, low-cost <br className="max-sm:hidden lg:block" />
                services and organic audience access — all in one <br className="max-sm:hidden lg:block" /> system
              </p>
            </div>

            <div>
              <Button variant="white" size="lg" className="px-8 py-6 w-36">
                Get Started
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              src="https://picsum.photos/600/400"
              alt="Hero illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 ">
        <HrComponent />
      </div>
    </div>
  );
}
