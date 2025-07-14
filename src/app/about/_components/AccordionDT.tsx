'use client';
import { useState } from 'react';
import {  ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionDT() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      id: 0,
      title: 'Investors',
      content:
        'They use the portal to find refined, verified startups that are already prepared and aligned with their interests. Since we offer investor consultation and pitch improvement support, what they receive is already filtered, focused, and investment-ready.',
    },
    {
      id: 1,
      title: 'Service Professionals',
      content:
        'Our network of service professionals includes legal experts, accountants, marketing specialists, and technical consultants who provide specialized support to help startups navigate complex business challenges and accelerate their growth.',
    },
    {
      id: 2,
      title: 'Channel Partners',
      content:
        'Strategic channel partners work with us to expand market reach and provide additional resources to startups. They help connect entrepreneurs with distribution channels, strategic partnerships, and collaborative opportunities.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="hidden w-full px-4 py-16 md:py-24 sm:px-6 lg:px-8 bg-primary-950 lg:block">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[40px] leading-[55px] text-white mb-16">
          Who&apos;s here and<br />
          what that matters
        </h2>

        <div className="grid items-stretch grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Accordion - Left */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-14">
              {accordionData.map((item, index) => (
                <div key={item.id} className="">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center w-full py-4 text-left transition-colors group"
                  >
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-slate-200" />
                    </motion.div>
                    <span className="ml-6 text-3xl text-white leading-[30px] transition-colors duration-300 group-hover:text-slate-200">
                      {item.title}
                    </span>
                  </button>

                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeInOut",
                          opacity: { duration: 0.3 }
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="pb-4"
                        >
                          <p className="text-lg leading-[29px] w-[80%] text-slate-300">
                            {item.content}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right aligned */}
          <div className="flex items-start justify-end h-full">
            <motion.div 
              className="relative w-full aspect-square max-w-[650px] max-h-[564px] rounded-2xl overflow-hidden bg-slate-600"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://picsum.photos/400/400?random=2"
                alt="Startup ecosystem illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}