import Image from 'next/image';
import React from 'react';
import dummy from '../../../public/dummy.jpg';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

// Define a type for the benefit items for better type safety
interface BenefitItem {
  id: string;
  text: string;
}

// Array of benefits
const benefits: BenefitItem[] = [
  {
    id: 'benefit-1',
    text: 'You get reduced-cost agency services (90% off market rates)',
  },
  {
    id: 'benefit-2',
    text: 'Free guidance from experts to become investor-ready',
  },
  {
    id: 'benefit-3',
    text: 'And you can tap into real audience without running a single ad',
  },
  {
    id: 'benefit-4',
    text: 'Investors are already waiting for startups like you',
  },
];

const LandingPageSection = () => {
  return (
    <section className="bg-primary-950 text-white py-16 px-4 md:px-8 lg:px-16 min-h-fit">
      <div className="max-w-[1400px] mx-auto p-4 md:p-10">
        <div className="mb-12">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Benefits List */}
          <div>
            <ul className="flex flex-col sm:gap-8">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-start gap-4 mb-3">
                  {/* Placeholder for icon/bullet */}
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white flex-shrink-0 mt-1 rounded-md"
                    aria-hidden="true"
                  ></div>
                  <span className="text-base sm:text-lg leading-relaxed sm:leading-loose tracking-wide lg:tracking-widest">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src={dummy}
              alt="Platform benefits illustration"
              width={800}
              height={500}
              quality={90}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center gap-2">
                See how it works <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageSection;
