import React from 'react';

const CreatedByFoundersMB = () => {
  return (
    <section className="bg-[#6D8D7F] lg:hidden text-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 text-center md:text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 max-sm:text-left leading-snug md:leading-tight">
          Created by founders,<br/> who needed it first
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 font-light max-sm:text-left leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto">
          You see, we&apos;ve already spent years chasing investors, burning cash on
          Facebook ads, and paying agencies that promised the moon, guess what?
          most of it went nowhere.
        </p>

        <div className="mb-2 ">
          <p className="text-base sm:text-lg md:text-xl font-semibold max-sm:text-left leading-relaxed tracking-wide">
            They&apos;d all come back—
          </p>
          <h3 className="text-base sm:text-lg md:text-xl max-sm:text-left text-primary-white font-bold leading-relaxed md:leading-loose tracking-wide">
            The problem wasn&apos;t our Idea. <br/>It was the system around us.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CreatedByFoundersMB;