'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VentureFundManager = () => {
  // Create refs for each animated section
  const managerRef = useRef(null);
  const arrowRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  // Check if elements are in view
  const isManagerInView = useInView(managerRef, { once: true, amount: 0.5 });
  const isArrowInView = useInView(arrowRef, { once: true, amount: 0.5 });
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-12 bg-gray-100 min-h-screen">
      <div className="w-full md:w-3/5 h-full bg-stone-100 rounded-lg p-16 relative">
        <div className="flex flex-col items-center">
          {/* Manager Card */}
          <motion.div
            className="bg-teal-900 p-4 rounded-lg w-56 text-center"
            ref={managerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isManagerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/200"
                alt="Fund Manager"
                className="w-32 h-32 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-white text-xl font-semibold">You</p>
              <p className="text-gray-300 text-sm">Fund Manager</p>
            </div>
          </motion.div>

          {/* Straight Arrow */}
          <motion.div
            className="flex my-8 h-20 justify-center"
            ref={arrowRef}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={
              isArrowInView
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 0, scaleY: 0 }
            }
            transition={{ duration: 0.6, delay: isManagerInView ? 0.3 : 0 }}
            style={{ transformOrigin: 'top' }}
          >
            <svg
              width="40"
              height="80"
              viewBox="0 0 40 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="20"
                y1="0"
                x2="20"
                y2="70"
                stroke="#0F766E"
                strokeWidth="2"
              />
              <path
                d="M10 60 L 20 70 L 30 60"
                stroke="#0F766E"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </motion.div>

          {/* Service Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-80 mx-auto"
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isCardInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-medium text-teal-800 mb-6">
              AngelList takes
              <br />
              care of everything...
            </h3>

            <div className="space-y-4">
              {[
                'Accounting',
                'Taxes',
                'LP Management Software',
                'Valuations',
                'Account Management',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: isCardInView ? 0.2 + index * 0.1 : 0,
                  }}
                >
                  <div className="flex w-6 h-6 rounded-full bg-green-500 items-center justify-center mr-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L10 17L19 8"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full md:w-2/5 p-8 md:p-16"
        ref={textRef}
        initial={{ opacity: 0, x: 30 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-primary-800 mb-6">
          Everything you need
          <br />
          to run your fund
        </h2>

        <p className="text-gray-700 text-lg">
          AngelList provides a complete solution with premium service to ensure
          your fund runs smoothly. We handle legal formation, capital calls, tax
          documents, and all the other back-office services your fund needs.
        </p>
      </motion.div>
    </div>
  );
};

export default VentureFundManager;
