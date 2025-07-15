'use client';

import React from 'react';

const LifetimeValueMB = () => {
  return (
    <div className="block pt-2 pb-10 lg:hidden">
      {/* Logo + Title */}
      <div className="flex flex-col items-start px-6 py-6">
        <div className="bg-primary-950 mb-4 h-12 w-12"></div>
        <h3 className="text-primary-950 text-2xl leading-[50px] font-semibold">
          Life Time Value
        </h3>
      </div>

      {/* Section Heading */}
      <div className={`bg-[#d7f4f9] px-6 py-6 text-[#2b3132]`}>
        <h2 className={`text-[32px] leading-[35px] font-semibold`}>
          A system that <br /> evolves with you
        </h2>
      </div>

      {/* Card 1 */}

      <div className="space-y-7 px-6 py-6 text-base leading-[35px] font-medium text-[#333333]">
        <div className="transform rounded-xl border border-[#cccc] bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
          Once you’re here, the system keeps building on what you’ve already
          done, so you can focus more on your growth, and less on managing the
          back-end.
        </div>

        {/* Card 2 */}

        <div className="transform rounded-xl border border-[#cccc] bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
          Startups don’t need to keep switching platforms every time they reach
          a new milestone. This portal allows you to evolve while staying
          connected with updated tools, advanced support, and a growing network
          of trusted people who understand your space.
        </div>

        {/* Card 3 */}

        <div className="transform rounded-xl border border-[#cccc] bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
          You don’t have to start from scratch every few months
        </div>
      </div>
    </div>
  );
};

export default LifetimeValueMB;
