import React from 'react';
import AboutHeroSection from "@/app/about/_components/AboutHeroSection"
import MissionDT from '@/app/about/_components/MissionDT'
import AccordionDT from '@/app/about/_components/AccordionDT'
import FAQSection from '@/components/features/FAQComponent';
import MissionMB from './_components/MissionMB';
import AccordionMobile from './_components/AccordionMB';

function About() {
  return (
    <>
      <AboutHeroSection />
      <MissionMB />
      <AccordionMobile />
      <MissionDT />
      <AccordionDT />

      
      <div className="hidden lg:block">
        <FAQSection />
      </div>
    </>
  );
}

export default About;
