// components/MondayReminder.tsx
import React from 'react';
import { Button } from '../ui/Button';

const MondayReminder: React.FC = () => {
  return (
    <div className="w-screen  flex items-center justify-center bg-primary-950 p-8 md:px-16 md:py:8 lg:py-16">
      <div className="w-full   overflow-hidden bg-gradient-to-b from-[#C1CFED] to-[#0F2B99] p-4 md:p-8 ">
        <div className="flex flex-col items-center justify-center text-center  bg-primary-950 p-4 md:py-16">
          <h2 className="text-white text-base md:text-4xl lg:text-5xl font-bold mb-6 leading-relaxed tracking-wide">
            Before you close this tab
            <br /> picture next Monday
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed tracking-wide md:text-lg mb-8 max-w-2xl">
            A designer finally polishes the landing page you&apos;ve been
            delaying. That legal fix you&apos;ve been avoiding? It&apos;s sorted
            now. And you are finally able to connect with a real audience
            without spending lakhs on ads and expensive services.
          </p>

          <p className="text-gray-300 text-sm md:text-base mb-10">
            If that&apos;s the kind of Monday you want, go ahead and set it up
            now:
          </p>

          <Button variant="white" size="lg">
            Get In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MondayReminder;
