import React from 'react';

const CreatedByFoundersMB = () => {
  return (
    <section className="bg-[#6D8D7F] lg:hidden text-white py-6  lg:py-16 px-4 md:px-8 lg:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 max-sm:text-left leading-snug">
          Created by founders, who needed it first
        </h2>
        <p className="text-base md:text-lg mb-8 font-light max-sm:text-left leading-loose tracking-wider max-w-2xl mx-auto">
          You see, we’ve already spent years chasing investors, burning cash on
          Facebook ads, and paying agencies that promised the moon, guess what?
          most of it went nowhere.
        </p>

        <div className="mb-2">
          <p className="text-xl font-semibold max-sm:text-left mb-2 tracking-wide">
            They&apos;d all come back—
          </p>
          <h3 className=" text-xl md:text-4xl max-sm:text-left text-primary-white md:text-primary-950 font-bold leading-relaxed tracking-wide">
            The problem wasn&apos;t our Idea. It was the system around us.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CreatedByFoundersMB;
