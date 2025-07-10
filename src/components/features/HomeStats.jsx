export default function WhatMakesUsDifferent() {
  return (
    <section
      className="hidden md:block relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #001542, #00194e)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              What makes us different?
            </h2>

            <p className="text-lg leading-relaxed opacity-90">
              You see, we've already spent years chasing investors, burning cash
              on Facebook ads, and paying agencies that promised the moon, guess
              what? most of it went nowhere.
            </p>
          </div>

          {/* Top Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-sm lg:text-base opacity-80 font-medium">
                Service Professionals
              </div>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-sm lg:text-base opacity-80 font-medium">
                Startups & Businesses
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              That's when we realized —
            </p>

            <div className="space-y-2">
              <p className="text-2xl lg:text-3xl font-bold">
                The problem wasn't our ideas.
              </p>
              <p className="text-2xl lg:text-3xl font-bold">
                It was the system around us.
              </p>
            </div>
          </div>

          {/* Bottom Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-sm lg:text-base opacity-80 font-medium">
                Venture Firms
              </div>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-sm lg:text-base opacity-80 font-medium">
                Angel Investors & VCs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
