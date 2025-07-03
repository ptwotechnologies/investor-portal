import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import HrComponent from './HrComponent';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-primary-950 p-6 md:p-12 min-h-11/12 text-white">
      <div className="max-w-[1400px] h-full mx-auto lg:mt-2 lg:py-6 ">
        <div className="grid grid-cols-1 my-10 lg:grid-cols-5 gap-8 items-center">
          <div className="space-y-8 col-span-3">
            <div
              className="inline-block px-4 py-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #031F5B 0%, #054DE5 100%)',
              }}
            >
              <span className="  text-[12px] md:text-sm  text-white flex items-center gap-3 tracking-wide font-extralight">
                We&apos;ve built a platform for startups
                <ArrowRight />
              </span>
            </div>

            {/* Main headline */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-light leading-normal tracking-wide">
                82% of startups die buying
                <br />
                <span>Fake growth</span>
              </h1>
              <p className="text-xl text-gray-300 mt-6">
                This portal was built for the 18% who don&apos;t.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="white" size="lg" className="px-8 py-3 w-36">
                Get Started
              </Button>
            </div>
          </div>

          <div className="hidden lg:block col-span-2">
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
