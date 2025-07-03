import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AccordionImageDisplayProps {
  imageUrl: string;
  alt: string;
}

const AccordionImageDisplay: React.FC<AccordionImageDisplayProps> = ({
  imageUrl,
  alt,
}) => {
  return (
    <motion.div
      className="hidden md:block w-full h-full min-h-[400px] relative rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      key={imageUrl}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 500px"
        priority
      />
    </motion.div>
  );
};

export default AccordionImageDisplay;
