'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      {...props}
    />
  );
}

const VentureAdministration = () => {
  // Card data object
  const cardData = [
    {
      id: 1,
      title: 'Investor Poratl Platform Capital',
      description:
        'Raise funds from professional investors easily. Our platform simplifies the process for quick capital raising.',
      imageId: 237,
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Seamless closes',
      description:
        'Investors close into your SPV electronically. Investor Poratl takes care of fund formation docs and wires too.',
      imageId: 238,
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Tax preparation',
      description:
        'We prepare tax returns and manage K-1 distributions across the lifetime of your investment for full compliance.',
      imageId: 239,
      delay: 0.3,
    },
  ];
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            Full-service fund administration
          </h2>
          <p className="text-gray-600 text-lg">
            You deal with your deals. We&apos;ll deal with the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              viewport={{ once: true }}
            >
              <Card className="flex h-full flex-col border-none overflow-hidden">
                <CardHeader className="bg-[#f3f4f2] p-10 flex-shrink-0">
                  <CardTitle className="text-primary-800 text-xl mb-5">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <div className="flex flex-grow">
                  {card.imageId ? (
                    <div
                      className="relative w-full"
                      style={{ height: '240px' }}
                    >
                      <Image
                        src={`https://picsum.photos/id/${card.imageId}/800/600`}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <Skeleton className="w-full h-full" />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="default"
              className="bg-primary-800 text-primary-50 hover:bg-primary-200 hover:text-primary-800"
              size="lg"
            >
              See all services
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VentureAdministration;
