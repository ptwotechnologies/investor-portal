import Image from 'next/image';

const TopInnovationSection = () => {
  return (
    <div className="bg-[#6D8D7F] py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-20">
          {' '}
          {/* Changed to grid for overall layout */}
          {/* Top Section - 50/50 Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Column */}
            <div className="grid">
              <h3 className="text-white text-lg font-normal mb-4">
                By the numbers
              </h3>
              <h1 className="text-white text-6xl font-bold leading-tight mb-8">
                Fueling innovation
              </h1>
              <p className="text-white text-xl font-light leading-loose">
                With more than half of all top-tier VC deals run through the
                platform, AngelList is at the heart of venture investing. This
                exposure gives AngelList the insight to identify gaps in the VC
                market and build the solutions that bridge them.
              </p>
            </div>
            {/* Right Column - Assets on platform */}
            <div className="grid justify-items-start">
              <hr className="border-[#B9B9B9] border w-full" />
              <div className="text-white text-[144px] font-thin tracking-wide ">
                $ 000B
              </div>
              <div className="text-white text-[16px] relative top-[-30px] font-thin">
                Assets on platform
              </div>
            </div>
          </div>
          {/* Bottom Section - 50/50 Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Side - Blog Post Card - 50% of container */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-[320px]">
                <p className="text-white font-thin  mb-3.5 ">
                  Our team sat together, spent months on planning, startegizing,
                  building and came up See more...
                </p>
                <div className="bg-[#6D8D7F] rounded-lg  mb-6">
                  <div className="relative w-full h-48 rounded mb-4">
                    <Image
                      src={`https://picsum.photos/seed/${Math.random()}/320/200`} // Random image from Picsum
                      alt="Blog Post Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="inline-block bg-gray-100 text-[#3C1D3A] text-sm px-3 py-1 rounded mb-3">
                    Product News
                  </div>
                  <h3 className="text-[#3C1D3A] text-xl  mb-4 leading-tight">
                    Empowering every fund with free data rooms
                  </h3>
                  <div className="grid grid-flow-col auto-cols-max items-center text-[#3C1D3A] text-sm">
                    {' '}
                    {/* Uses grid for text alignment */}
                    <span>MAY 19, 2022</span>
                    <span className="mx-2">•</span>
                    <span>3 MIN READ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Statistics Grid - 50% of container */}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8">
              {' '}
              {/* Adjusted to sm:grid-cols-2 for responsiveness */}
              {/* Top Left - Funds and syndicates */}
              <div className="grid">
                <hr className="border-[#B9B9B9] border w-full mb-4" />
                <div className="text-white text-[80px] font-thin leading-none mb-2">
                  00k+
                </div>
                <div className="text-white text-base font-light">
                  Funds and syndicates
                </div>
              </div>
              {/* Top Right - Active startups */}
              <div className="grid">
                <hr className="border-[#B9B9B9] border w-full mb-4" />
                <div className="text-white text-[80px] font-thin leading-none mb-2">
                  00k+
                </div>
                <div className="text-white text-base font-light">
                  Active startups
                </div>
              </div>
              {/* Bottom Left - Active investors */}
              <div className="grid">
                <hr className="border-[#B9B9B9] border w-full mb-4" />
                <div className="text-white text-[80px] font-thin leading-none mb-2">
                  00k+
                </div>
                <div className="text-white text-base font-light">
                  Active investors
                </div>
              </div>
              {/* Bottom Right - Raised by active startups */}
              <div className="grid">
                <hr className="border-[#B9B9B9] border w-full mb-4" />
                <div className="text-white text-[80px] font-thin leading-none mb-2">
                  $00.0B
                </div>
                <div className="text-white text-base font-light">
                  Raised by active startups
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInnovationSection;
