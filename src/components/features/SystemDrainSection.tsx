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
      className="relative hidden px-6 pt-0 pb-20 overflow-hidden md:block"
      style={{
        background: 'linear-gradient(to bottom, #00194e, #001f61)',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="space-y-4 text-white">
            {accordionData.map((item, index) => (
              <div key={item.id} className="space-y-4">
                <div className="w-full h-px bg-white/20"></div>

                <div className="bg-transparent rounded-lg backdrop-blur-sm">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex items-center justify-between w-full py-4 pl-0 pr-6 text-left duration-300 rounded-lg cursor-pointer trnsition-all hover:bg-white/5"
                  >
                    <h2 className="pr-4 text-xl font-semibold leading-tight">
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
                        <div className="pb-6 pl-0 pr-6 text-base leading-loose opacity-90">
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
            <div className="w-full overflow-hidden bg-gray-400 rounded-lg">
              <Image
                src="https://picsum.photos/650/564?random=1"
                alt="Business illustration"
                width={650}
                height={564}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block py-4 bg-white rounded-full shadow-lg px-14">
            <p className="text-2xl font-semibold text-gray-800">
              Simply, a one stop solution for startups & founders!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}