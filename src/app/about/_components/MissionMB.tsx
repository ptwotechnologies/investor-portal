'use client'
import React from 'react'

export default function MissionMB() {
  const sectionsData = [
    {
      id: 0,
      title: 'Our Mission',
      heading: (
        <>
          A mission to simplify <br />
          growth for every <br />
          startup
        </>
      ),
      content: (
        <>
          <p>
            Our mission is to remove everything that keeps a startup from one
            space, while connecting the right people with the right support at
            the right time.
          </p>
          <p className='text-base font-normal'>
            We created this portal to make the startup journey easier, less
            stressful, and more focused.
          </p>
          <p className='text-base font-normal'>
            Most founders start with big ideas but end up getting stuck on the
            little things that prevent them from attracting investors and
            solving problems that shouldn’t be this hard in the first place.
          </p>
        </>
      ),
      bgColor: 'bg-[#cccfd6]', // Matches the light gray from the image
      titleColor: 'text-primary-950', // Matches dark blue for title
      headingColor: 'text-white', // Matches dark blue for heading
      contentColor: 'text-white', // Matches the slightly darker gray text
      stripeColor: 'bg-primary-950', // Matches the dark blue stripe
    },
    {
      id: 1,
      title: 'Our Vision',
      heading: (
        <>
          Where startups, <br />
          experts and capital <br />
          grow together
        </>
      ),
      content: (
        <>
          <p>
            Our vision is to build a self-sustaining ecosystem where startups
            grow alongside verified experts, service providers, and investors,
            without overspending on ads or branding.
          </p>
          <p className='text-base font-normal'>
            We believe that ideas should not be held back by limited budget or
            lack of access. That&apos;s why rather than creating yet another portal,
            we focused on curating the essential parts of building a business
            actually accessible.
          </p>
        </>
      ),
      bgColor: 'bg-[#757d90]', // Matches the blue from the image
      titleColor: 'text-[#060D27]', // Matches dark blue for title
      headingColor: 'text-white', // Matches white for heading
      contentColor: 'text-white', // Matches white text
      stripeColor: 'bg-[#3b66c2]', 
    },
    {
      id: 2,
      title: 'Our Aim',
      heading: (
        <>
          Because founders <br />
          deserve a better <br />
          system
        </>
      ),
      content: (
        <>
          <p>
            Our aim is to remove the friction that slows founders down and make
            growth feel more doable and less chaotic.
          </p>
          <p className='text-base font-normal'>
            Most startups struggle because the support around them is either too
            expensive, too scattered, or simply not designed for people who are
            just starting out.
          </p>
          <p className='text-base font-normal'>
            Instead of making you run around and juggle it all out alone, we’ve
            built a place where everything works together.
          </p>
        </>
      ),
      bgColor: 'bg-[#4c576f]', // Matches the darker blue from the image
      titleColor: 'text-[#060D27]', // Matches dark blue for title
      headingColor: 'text-white', // Matches white for heading
      contentColor: 'text-white', // Matches white text
      stripeColor: 'bg-[#395590]', // Matches the dark blue stripe
    },
  ]

  return (
    
    <div className="lg:hidden">
      {sectionsData.map((section) => (
        <div key={section.id} className={`${section.bgColor} w-full`}>
          <div className="py-12 mx-auto ">
            {/* Dark blue stripe and title */}
           <div className="flex flex-col items-start px-6 mb-4 md:mb-6">
  <div className={`${section.stripeColor} w-12 h-12 mr-4 md:w-16 md:h-16`}></div>
  <h3 className={`text-2xl font-semibold leading-[50px] ${section.titleColor} md:text-3xl`}>
    {section.title}
  </h3>
</div>
{/* Stripe of heading  */}
<div className={`${section.stripeColor} px-6 py-6 `}>
            <h2 className={`font-semibold text-[32px] leading-[35px]  ${section.headingColor}`}>
              {section.heading}
            </h2>
    </div>

            {/* Content paragraphs */}
            <div className={`space-y-4 px-6 pt-4 text-lg  font-medium leading-0[35px] ${section.contentColor}`}>
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}