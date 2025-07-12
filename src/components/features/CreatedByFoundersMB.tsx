import React from 'react';

const CreatedByFoundersMB = () => {
  return (
    <section className="bg-[#6D8D7F] lg:hidden text-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 text-center md:text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[25px] tracking-wide  md:text-3xl font-semibold mb-2 md:mb-4 max-sm:text-left leading-[40px]">
          Created by founders,<br/> who needed it first
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-base font-medium leading-[30px] tracking-wider  md:text-xl sm:mb-8 md:mb-10 max-sm:text-left md:leading-loose">
          You see, we&apos;ve already spent years chasing investors, burning cash on
          Facebook ads, and paying agencies that promised the moon, guess what?
          most of it went nowhere.
        </p>

        <div className="mb-2 ">
          <p className="text-base font-semibold leading-[30px] tracking-wide sm:text-lg md:text-xl max-sm:text-left">
            They&apos;d all come back—
          </p>
          <h3 className="text-base font-bold leading-[30px] tracking-wide sm:text-lg md:text-xl max-sm:text-left text-primary-white md:leading-loose">
            The problem wasn&apos;t our Idea. <br/>It was the system around us.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CreatedByFoundersMB;