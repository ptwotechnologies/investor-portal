import React from 'react';
import AboutHeroSection from '@/app/about/_components/AboutHeroSection';
import MissionDT from '@/app/about/_components/MissionDT';
import AccordionDT from '@/app/about/_components/AccordionDT';
import FAQSection from '@/components/features/FAQComponent';
import MissionMB from './_components/MissionMB';
import AccordionMobile from './_components/AccordionMB';
import StartupAboutDT from './_components/StartupAboutDT';
import StartupAboutDT2 from './_components/StartupAboutDT2';
import LifetimeValueMB from './_components/LifetimeValueMB';

function About() {
  return (
    <>
      <AboutHeroSection />
      <MissionMB />
      <LifetimeValueMB />
      <AccordionMobile />
      <MissionDT />
      <StartupAboutDT />
      <StartupAboutDT2 />
      <AccordionDT />

      <div className="mt-14 hidden lg:block">
        <FAQSection />
      </div>
    </>
  );
}

export default About;
