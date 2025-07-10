import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FeatureItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: FeatureItem;
  isOpen: boolean;
  onClick: (id: number) => void;
  isFirst: boolean;
  isLast: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onClick,
  isLast,
}) => {
  return (
    <>
      <motion.div
        className={`
           text-gray-800 overflow-hidden
        `}
        initial={false}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Title Container - Rounded */}
        <motion.div
          className="flex justify-between items-center p-4 cursor-pointer bg-[#628173] rounded-full transition-colors duration-200"
          onClick={() => onClick(item.id)}
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="sm:text-xl font-bold md:text-lg lg:text-2xl text-white">
            {item.title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>

        {/* Accordion Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
                opacity: { duration: 0.2 },
              }}
              className="overflow-hidden"
            >
              <div className="p-4 pt-0 text-gray-100 text-sm tracking-wide bg-[#6D8D7F] border-t font-extralight border-[#7c988c]">
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  {item.content}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Divider line below item */}
      {!isLast && (
        <motion.div
          className="flex items-center justify-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="w-full h-px bg-[#8aa499]"></div>
        </motion.div>
      )}
    </>
  );
};

export default AccordionItem;
