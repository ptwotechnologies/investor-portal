'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface AccordionItem {
  id: number;
  title: string;
  content: string[];
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'Really! The system is built to drain founders',
    content: [
      "First, the ad platforms charge you for every single click (doesn't matter if those clicks convert, they still get paid.) And just when you think you're learning the ropes...",
      'They start selling you courses on how to spend even more. I mean, seriously?',
      'Then comes the agencies with their retainers and compliance firms pushing paperwork with fear. Add legal fees, branding costs, social media retainers.',
      'And while all this eats away at your time, money, and energy...',
      'The one thing you actually need — real users and real investors — stays completely out of reach.',
      'Phew..!',
    ],
  },
  {
    id: 2,
    title: 'Keep financials accurate and accessible',
    content: [
      'Maintain real-time financial tracking with automated bookkeeping systems.',
      'Get instant access to your financial data whenever you need it.',
      'Generate professional financial reports for investors and stakeholders.',
      'Track expenses, revenue, and cash flow with precision.',
      'Ensure compliance with accounting standards and regulations.',
    ],
  },
  {
    id: 3,
    title: 'Receive compliance and tax support',
    content: [
      'Get expert guidance on regulatory compliance requirements.',
      'Receive timely tax preparation and filing assistance.',
      'Stay updated on changing regulations that affect your business.',
      'Access dedicated support for complex compliance issues.',
      'Ensure your startup meets all legal and tax obligations.',
    ],
  },
];

export default function SystemDrainSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section
      className="hidden md:block relative pt-0 pb-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #00194e, #001f61)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="text-white space-y-4">
            {accordionData.map((item, index) => (
              <div key={item.id} className="space-y-4">
                <div className="w-full h-px bg-white/20"></div>

                <div className="bg-transparent backdrop-blur-sm rounded-lg">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex cursor-pointer w-full px-6 py-4 items-center text-left justify-between hover:bg-white/5 transition-all duration-300 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold leading-tight pr-4">
                      {item.title}
                    </h2>
                  </button>

                  <AnimatePresence>
                    {activeAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        {/* Adjusted class for tighter paragraph spacing */}
                        <div className="px-6 pb-6 text-base opacity-90 leading-loose">
                          {item.content.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className={
                                paragraph === 'Phew..!' ? 'font-medium' : ''
                              }
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {index === accordionData.length - 1 && (
                  <div className="w-full h-px bg-white/20"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full bg-gray-400 rounded-lg overflow-hidden">
              <Image
                src="https://picsum.photos/650/564?random=1"
                alt="Business illustration"
                width={650}
                height={564}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white rounded-full px-14 py-4 shadow-lg">
            <p className="text-2xl font-semibold text-gray-800">
              Simply, a one stop solution for startups & founders!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
