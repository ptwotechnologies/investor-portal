'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PricingComponent = () => {
  return (
    <div className="w-full bg-gray-50 p-6 md:p-12">
      <div className="flex flex-col space-y-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="w-2 h-2 rounded-full bg-[#6e5c3b]"></div>
          <span className="text-[#6e5c3b] font-medium">Pricing</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-primary-800 text-3xl md:text-4xl font-bold">
            Full-service fund management
            <br />
            for funds of all stages & sizes
          </h1>

          <div className="flex flex-wrap gap-4">
            <button className="text-primary-800 underline font-medium">
              Compare plans
            </button>
            <button className="text-primary-800 underline font-medium">
              Venture Fund Calculator
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[...Array(3)].map((_, i) => {
            const plans = [
              {
                title: 'Base',
                description: 'Best for funds under $3M',
                cost: '$3.5k + 0.75%',
                subtext: 'of fund size',
                features: [
                  'Fund admin',
                  'Legal fund formation',
                  'Investor closings',
                  'Transaction reviews & valuation support',
                  'Fund filing & tax services',
                ],
                additional: '* Pricing may vary with add-on services',
              },
              {
                title: 'Core',
                description: 'Best for funds between $3M—$30M',
                cost: '$20k + 0.2%',
                subtext: 'of fund size',
                features: [
                  'Dedicated account manager',
                  'Unlimited investments',
                ],
                extraText: 'Everything in Base plus',
                additional: '* Pricing may vary with add-on services',
              },
              {
                title: 'Institutional',
                description: 'Best for funds over $30M',
                cost: '$35k + 0.15%',
                subtext: 'of fund size',
                features: [
                  'All add-on services included',
                  'Audit support',
                  'Quarterly financials',
                ],
                extraText: 'Everything in Core plus',
              },
            ];

            const plan = plans[i];

            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="flex bg-white shadow-sm border border-gray-200 flex-col h-full">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-xl font-bold">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-6 space-y-8 flex-grow">
                    <div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold">{plan.cost}</span>
                        <span className="text-sm text-gray-600">
                          {plan.subtext}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">annualized cost</p>
                    </div>

                    <div className="space-y-1 text-sm">
                      <p>
                        Investments:{' '}
                        {plan.title === 'Base' ? '15' : 'Unlimited'}
                      </p>
                      <p>State Regulatory Fees: Variable</p>
                    </div>

                    <div className="space-y-4">
                      {plan.extraText && (
                        <p className="font-medium">{plan.extraText}</p>
                      )}
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {plan.additional && (
                          <li className="flex items-start gap-2 text-gray-500 text-sm">
                            <span className="font-semibold">*</span>
                            <span>{plan.additional}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 pb-6">
                    <motion.div
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-primary-800 hover:bg-primary-200 text-white hover:text-primary-800 py-6">
                        Get started
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-sm text-gray-500 mt-6 max-w-4xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Annualized costs consist of an up front setup fee and an ongoing fund
          services fee over 10 years. Annualized cost assumes a 10-year fund
          lifetime.
        </motion.p>
      </div>
    </div>
  );
};

export default PricingComponent;
