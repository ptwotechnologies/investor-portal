import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-500 min-h-[600px]">
      <div className="max-w-[1400px] mx-auto bg-gray-500 py-24 px-8 min-h-[600px]">
        <div className="flex max-w-4xl w-full h-full flex-col justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-light mb-12 text-left">
            Testimonials
          </h2>
          <div className="flex w-full items-center flex-grow mt-16">
            <blockquote className="text-white max-w-3xl">
              <p className=" text-2xl md:text-4xl font-light leading-relaxed mb-6">
                &quot;...it was crucial to get moving quickly and AngelList
                enabled a seamless launch.&quot;
              </p>
              <footer className="text-gray-200 text-sm opacity-90">
                <cite className="not-italic">
                  Nichole, GP, Wischoff Ventures
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
