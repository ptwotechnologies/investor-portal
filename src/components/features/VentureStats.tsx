'use client';
import React from 'react';
import { motion } from 'framer-motion';

function VentureStats() {
  const statsData = [
    {
      value: '700+',
      label: 'Venture Funds',
    },
    {
      value: '~108',
      label: 'Unicorns invested into via Investor Poratl',
    },
    {
      value: '$17B+',
      label: 'Assets supported',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-200 pl-6 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-8xl font-bold text-primary-800 mb-2">
                {stat.value}
              </h2>
              <p className="text-primary-700 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VentureStats;
