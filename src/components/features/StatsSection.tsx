import React from 'react';

const StatsSection = () => {
  return (
    <div className="w-full p-8 bg-white md:p-24 ">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-evenly md:items-start md:gap-16">
        <div className="max-w-md">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-primary-950">
            Fueling innovation
          </h2>
          <p className="text-sm md:text-base text-primary-950">
            With more than half of all top-tier VC deals run through the
            platform, AngelList is at the heart of venture investing. This
            exposure gives AngelList the insight to identify gaps in the VC
            market and build the solutions that bridge them.
          </p>
        </div>

        <div className="flex flex-col items-start sm-text-center md:items-end">
          <h3 className="text-6xl font-bold md:text-8xl text-primary-950">
            $171B
          </h3>
          <p className="mt-2 text-sm text-primary-950">Assets on platform</p>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-4 md:gap-12 md:mt-20">
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold md:text-5xl text-primary-950">
            72k+
          </h3>
          <p className="mt-2 text-sm text-primary-950">Active investors</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-3xl font-bold md:text-5xl text-primary-950">
            $10.7B
          </h3>
          <p className="mt-2 text-sm text-primary-950">
            Raised by active startups
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-3xl font-bold md:text-5xl text-primary-950">
            25k+
          </h3>
          <p className="mt-2 text-sm text-primary-950">Funds and syndicates</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-3xl font-bold md:text-5xl text-primary-950">
            33k+
          </h3>
          <p className="mt-2 text-sm text-primary-950">Active startups</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
