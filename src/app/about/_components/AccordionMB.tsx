'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AccordionMB() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const accordionData = [
    {
      id: 0,
      title: 'Investors',
      content:
        'They use the portal to find refined, verified startups that are already prepared and aligned with their interests. Since we offer investor consultation and pitch improvement support, what they receive is already filtered, focused, and investment-ready.',
      cardBgColor: 'bg-[#33405B]', // Card 1 background color
      titleColor: 'text-white', // Consistent title color
      arrowColor: 'text-white', // Consistent arrow color
      contentColor: 'text-white', // Consistent content color
    },
    {
      id: 1,
      title: 'Service Professionals',
      content:
        'Our network of service professionals includes legal experts, accountants, marketing specialists, and technical consultants who provide specialized support to help startups navigate complex business challenges and accelerate their growth.',
      cardBgColor: 'bg-[#667084]', // Card 2 background color
      titleColor: 'text-white',
      arrowColor: 'text-white',
      contentColor: 'text-white',
    },
    {
      id: 2,
      title: 'Channel Partners',
      content:
        'Strategic channel partners work with us to expand market reach and provide additional resources to startups. They help connect entrepreneurs with distribution channels, strategic partnerships, and collaborative opportunities.',
      cardBgColor: 'bg-[#B3B7C2]', // Card 3 background color
      titleColor: 'text-[#3E4A59]', // Darker gray for title
      arrowColor: 'text-[#3E4A59]', // Darker gray for arrow
      contentColor: 'text-[#3E4A59]', // Darker gray for content
    },
  ]

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="lg:hidden">
      <div className="p-6 md:p-8">
        <h2
          className="text-[#060D27] leading-[55px] text-[40px] mb-8 font-medium ">
          Who&apos;s here and <br />
          what that matters
        </h2>
      </div>

      {accordionData.map((item, index) => {
        const isActive = activeIndex === index

        return (
          <div
            key={item.id}
            className={`w-full transition-colors duration-300 ${item.cardBgColor}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-start w-full px-6 py-6 text-left md:py-8 md:px-8 focus:outline-none"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isActive ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 mr-4 ${item.arrowColor}`}
              >
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
              </motion.div>
              <span
                className={`flex-grow font-medium leading-[29px] text-[32px] ${item.titleColor}`}
              
              >
                {item.title}
              </span>
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="px-6 pb-6 overflow-hidden md:px-8 md:pb-8"
                >
                  <p
                    className={`${item.contentColor} font-normal leading-[29px] text-base`}>
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}