// components/StartupAboutDT.jsx
import React from 'react';

const StartupAboutDT = () => {
  return (
    <div className="bg-primary-950">
      <div className="relative hidden w-full overflow-hidden rounded-t-[78px] bg-white px-4 py-16 after:pointer-events-none after:absolute after:inset-0 after:z-30 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDIwMCAyMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGZpbHRlciBpZD0nZ3JpdEZpbHRlcic+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzIuNScgbnVtT2N0YXZlcz0nOCcgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgZmlsdGVyPSd1cmwoI2dyaXRGaWx0ZXIpJyBvcGFjaXR5PScwLjYnIGZpbGw9JyMwMDAwMDAnIC8+PC9zdmc+')] after:bg-repeat after:opacity-60 after:content-[''] sm:px-6 md:py-16 lg:block lg:px-8">
        <div className="relative z-10 mx-auto max-w-[1440px] rounded-xl p-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="relative rounded-lg bg-[#757d90] p-8 pt-0 shadow-lg">
              <div className="m-auto max-w-[545px]">
                <div className="mb-6 bg-[#3b66c2] p-6">
                  <h2 className="text-[32px] leading-[35px] font-semibold text-white">
                    Where startups, experts and capital grow together
                  </h2>
                </div>
                <div className="space-y-6 text-xl leading-[35px] font-medium text-white">
                  <p className="">
                    Our vision is to build a self-sustaining ecosystem where
                    startups grow alongside verified experts, service providers,
                    and investors without overspending on ads or branding.
                  </p>
                  <p className="">
                    We believe that ideas should not be held back by limited
                    budget or lack of access.
                  </p>
                  <p className="">
                    That&apos;s why rather than creating yet another portal, we
                    focus more on making the essential parts of building a
                    business actually accessible.
                  </p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 h-6 w-6 rounded-full bg-white"></div>
            </div>

            {/* Card 2 - Made similar to Card 1 */}
            <div className="relative rounded-lg bg-[#4c576f] p-8 pt-0 shadow-lg">
              <div className="m-auto max-w-[545px]">
                <div className="mb-6 bg-[#757d90] p-6">
                  <h2 className="text-[32px] leading-[35px] font-semibold text-white">
                    Because founders deserve a better system
                  </h2>
                </div>
                <div className="space-y-6 text-xl leading-[35px] font-medium text-white">
                  <p className="">
                    Our aim is to remove the friction that slows founders down
                    and make growth feel more doable and less chaotic.
                  </p>
                  <p className="">
                    Most startups struggle because the support around them is
                    either too expensive, too scattered, or simply not designed
                    for people who are just starting out.
                  </p>
                  <p className="">
                    Instead of making you run around and figure it all out
                    alone, we’ve built a place where everything works together.
                  </p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 h-6 w-6 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupAboutDT;
