export default function WhatMakesUsDifferent() { 
  return ( 
    <section 
      className="relative hidden px-6 pt-6 pb-20 overflow-hidden md:block" 
      style={{ 
        background: 'linear-gradient(to bottom, #001542, #00194e)', 
      }} 
    > 
      <div className="mx-auto space-y-16 max-w-[1440px]"> 
        {/* Top Grid */} 
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16"> 
          {/* Left Content */} 
          <div className="text-white"> 
            <h2 className="mb-8 text-4xl font-bold leading-tight lg:text-5xl"> 
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
              <div className="mb-2 text-5xl font-bold">150+</div> 
              <div className="text-sm font-medium lg:text-base opacity-80"> 
                Service Professionals 
              </div> 
            </div> 
 
            <div className="text-center text-white"> 
              <div className="mb-2 text-5xl font-bold">500+</div> 
              <div className="text-sm font-medium lg:text-base opacity-80"> 
                Startups & Businesses 
              </div> 
            </div> 
          </div> 
        </div> 
 
        {/* Bottom Grid */} 
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16"> 
          {/* Left Content */} 
          <div className="text-white"> 
            <p className="mb-6 text-lg leading-relaxed opacity-90"> 
              That's when we realized — 
            </p> 
 
            <div className="space-y-2"> 
              <p className="text-2xl font-bold lg:text-3xl"> 
                The problem wasn't our ideas. 
              </p> 
              <p className="text-2xl font-bold lg:text-3xl"> 
                It was the system around us. 
              </p> 
            </div> 
          </div> 
 
          {/* Bottom Right Stats */} 
          <div className="grid grid-cols-2 gap-8"> 
            <div className="text-center text-white"> 
              <div className="mb-2 text-5xl font-bold">10+</div> 
              <div className="text-sm font-medium lg:text-base opacity-80"> 
                Venture Firms 
              </div> 
            </div> 
 
            <div className="text-center text-white"> 
              <div className="mb-2 text-5xl font-bold">50+</div> 
              <div className="text-sm font-medium lg:text-base opacity-80"> 
                Angel Investors & VCs 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}