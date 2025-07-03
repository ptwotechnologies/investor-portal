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
         max-sm:bg-[#678679] text-gray-800  overflow-hidden
          ${!isOpen ? 'rounded-full' : 'rounded-lg'}
          [&]:md:rounded-none
        `}
        initial={false}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          onClick={() => onClick(item.id)}
          whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.1)' }}
          whileTap={{ scale: 0.98 }}
        >
          <h3
            className={`sm:text-xl font-bold md:text-xl lg:text-2xl ${isOpen ? 'text-primary-950' : 'text-white'}`}
          >
            {item.title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-gray-900" />
          </motion.div>
        </motion.div>

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
              <div className="p-4 pt-0 text-gray-100 border-t border-gray-100">
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

      {!isLast && (
        <motion.div
          className="flex items-center justify-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className=" w-full h-px bg-[#8aa499]"></div>
        </motion.div>
      )}
    </>
  );
};

export default AccordionItem;
