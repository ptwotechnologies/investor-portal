'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqData: FAQItemProps[] = [
  {
    question: 'Is this just another agency trying to sell me stuff?',
    answer:
      'No, we focus on empowering you to achieve your goals without unnecessary overhead or constant upsells. Our aim is to provide value and help you succeed independently.',
  },
  {
    question: "Who's behind this platform?",
    answer:
      'Our team consists of experienced professionals passionate about helping businesses grow. We believe in transparency and providing real, actionable solutions.',
  },
  {
    question: 'Getting Started',
    answer:
      'Getting started is simple! Sign up, explore our resources, and begin implementing the strategies tailored for your success. We offer guided walkthroughs and support.',
  },
  {
    question: 'Eligibility',
    answer:
      'Our platform is designed for a wide range of businesses and individuals looking to enhance their online presence and reach. Specific eligibility criteria might apply for certain advanced features, which are detailed in our terms of service.',
  },
  {
    question: 'Expert Consultations',
    answer:
      'Yes, we offer expert consultations to provide personalized guidance and strategy development. These sessions are designed to address your unique challenges and accelerate your progress.',
  },
  {
    question: 'How do you ensure data privacy?',
    answer:
      'We employ industry-standard encryption and security protocols to protect your data. Your privacy is our top priority, and we adhere strictly to data protection regulations.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer comprehensive support including email, chat, and a dedicated knowledge base. Premium plans also include priority support and direct access to our expert team.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Absolutely. You can cancel your subscription at any time without any hidden fees. We believe in flexibility and earning your continued business through value.',
  },
  {
    question: 'Are there any hidden costs?',
    answer:
      'No, we are transparent about our pricing. All costs are clearly outlined, and there are no hidden fees or surprise charges. What you see is what you pay.',
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied within the first 30 days, simply contact us for a full refund, no questions asked.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-gray-50 px-4 py-6">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-12 text-left text-[22px] font-bold text-gray-900 lg:text-[40px]">
          Here’s what founders
          <br className="" />
          usually ask
        </h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqData.slice(0, 5).map((faq, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="cursor-pointer"
                >
                  <AccordionTrigger className="cursor-pointer text-left text-xl font-normal text-gray-800 no-underline hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 tracking-wider text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="hidden lg:block">
            <Accordion type="single" collapsible className="w-full">
              {faqData.slice(5, 10).map((faq, index) => (
                <AccordionItem
                  value={`item-${index + 5}`}
                  key={index + 5}
                  className="cursor-pointer"
                >
                  <AccordionTrigger className="cursor-pointer text-left text-xl font-normal text-gray-800 no-underline hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
