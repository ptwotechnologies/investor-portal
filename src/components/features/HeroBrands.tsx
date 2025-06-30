import Image from 'next/image';
import React from 'react';

function HeroBrands() {
  return (
    <div className="px-4 mt-20 text-center">
      <h3 className="mb-8 text-2xl font-light leading-8 text-white sm:text-3xl">
        Better together. Investor Portal partners with industry leaders.
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center max-w-6xl mx-auto">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="w-full max-w-[160px] h-12 md:h-14 lg:h-16 relative"
          >
            <Image
              src={`https://picsum.photos/200/60?random=${idx}`}
              alt={`Brand Logo ${idx + 1}`}
              fill
              className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 180px, 200px"
            />
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="bg-primary-800 mx-auto text-lg md:text-xl max-w-max p-4 rounded-4xl">
          <p className="gradient-text">
            Our premier partnership program assembles top professionals to
            deliver comprehensive expertise & support
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBrands;
