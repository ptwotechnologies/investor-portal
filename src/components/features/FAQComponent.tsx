'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const FAQComponent = () => {
  const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      question: 'How can I set up a Venture Fund?',
      answer:
        'Setting up a Venture Fund involves several steps including legal formation, investor documentation, and regulatory filings. Our team can guide you through the entire process and handle all necessary paperwork.',
    },
    {
      id: 'item-2',
      question: 'Can I set a minimum investment amount?',
      answer:
        'Yes, you can establish minimum investment thresholds for your fund. This is typically defined in your fund documents and can vary based on investor type and regulatory requirements.',
    },
    {
      id: 'item-3',
      question: 'What is a "non-qualifying" venture investment?',
      answer:
        "A non-qualifying venture investment refers to investments that don't meet specific criteria set by regulatory bodies for certain tax advantages or regulatory treatment. These may include investments in real estate, commodities, or certain foreign entities.",
    },
    {
      id: 'item-4',
      question: 'How does calling capital on Investor Poratl work?',
      answer:
        'On Investor Poratl, fund managers can initiate capital calls through the platform interface. Investors receive notifications and can fulfill their commitments electronically. The platform handles the documentation and tracking of all capital contributions.',
    },
    {
      id: 'item-5',
      question:
        'Can I set different minimums for different investors in my fund?',
      answer:
        'Yes, you can establish different minimum investment amounts for different investor categories. This is often done to accommodate various investor types such as institutional investors, family offices, and individual accredited investors.',
    },
  ];

  return (
    <div className="w-full bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#6e5c3b]"></div>
            <span className="text-[#6e5c3b] font-medium">FAQ</span>
          </div>

          <h1 className="text-primary-800 text-3xl md:text-4xl font-bold">
            Everything you
            <br /> need to know
          </h1>
        </motion.div>

        {/* Animated FAQ items */}
        <div className="max-w-4xl mx-auto cursor-pointer">
          <Accordion
            type="single"
            collapsible
            className="w-full cursor-pointer"
          >
            {faqItems.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <AccordionItem
                  value={item.id}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-medium hover:bg-gray-50 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
