'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

function VentureHero() {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="container flex mx-auto px-4 flex-col md:flex-row items-center py-6">
        <div className="flex flex-col md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <p className="text-secondary mb-2">For Fund Managers</p>
          <h1 className="text-7xl text-primary-800 mb-4">Venture Funds</h1>
          <p className="text-gray-800 text-lg mb-6">
            Raise capital, close deals, and manage your portfolio — all from a
            single platform. Investor Portal handles all overhead and
            back-office services, so you can focus on your deals.
          </p>
          <Button
            size={'lg'}
            variant="default"
            className="self-start hover:bg-primary-200"
          >
            Get Started
          </Button>
        </div>
        {/* Right side image */}
        <div className="flex md:w-1/2 relative items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex relative mb-6 flex-col items-center">
              <motion.div
                className="bg-primary-800 text-white p-4 w-full rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-semibold text-lg mb-3">Setup Fund</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="flex w-5 h-5 rounded-full bg-primary-950 items-center justify-center text-xs text-primary-200 mr-2">
                      ✓
                    </div>
                    <span>Accounting</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex w-5 h-5 rounded-full bg-primary-950 items-center justify-center text-xs text-primary-200 mr-2">
                      ✓
                    </div>
                    <span>Taxes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex w-5 h-5 rounded-full bg-primary-950 items-center justify-center text-xs text-primary-200 mr-2">
                      ✓
                    </div>
                    <span>LP Management Software</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex w-5 h-5 rounded-full bg-primary-950 items-center justify-center text-xs text-primary-200 mr-2">
                      ✓
                    </div>
                    <span>Valuations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex w-5 h-5 rounded-full bg-primary-950 items-center justify-center text-xs text-primary-200 mr-2">
                      ✓
                    </div>
                    <span>Account Management</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="h-16 w-1 bg-gray-300 my-2"
                initial={{ height: 0 }}
                animate={{ height: 64 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.div
                className="bg-primary-800 text-white py-1 px-4 rounded text-sm w-24 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                RAISE
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VentureHero;
