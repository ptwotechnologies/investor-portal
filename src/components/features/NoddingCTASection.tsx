import React from 'react';
import { Button } from '../ui/Button';

const NoddingCTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#001032] to-[#001542] py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Found yourself nodding?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Cool, let&apos;s show you around.
        </p>

        <div className="flex justify-center items-center gap-3">
          <Button
            size="lg"
            variant="outline"
            className="!w-auto min-w-[150px] px-4"
          >
            I’d Like To Get Me Started
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
