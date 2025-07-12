import React from 'react';
import { Button } from '../ui/Button';

const NoddingCTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#001032] to-[#001542] py-8 lg:py-12 xl:py-16  px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="mb-2 text-lg text-white lg:mb-6 lg:text-5xl">
          Found yourself nodding?
        </h2>

        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          Cool, let&apos;s show you around.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button
            size="lg"
            variant="outline"
            className="!w-auto min-w-[150px] px-4"
          >
            I&apos;d Like To Get Me Started
          </Button>
          <Button
            size="lg"
            variant="white"
            className="!w-auto min-w-[120px] md:min-w-[150px] px-4"
          >
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NoddingCTASection;