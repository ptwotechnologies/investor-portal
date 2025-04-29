import React from 'react';
import { DollarSign, Command, Zap } from 'lucide-react';

const VentureFeatures = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-100 transition-colors duration-300 hover:border-gray-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="text-secondary mr-2" size={24} />
                <h3 className="text-lg font-medium text-primary-800">
                  Earn carry
                </h3>
              </div>
              <p className="text-gray-600">
                Earn carried interest on your investments and adjust what you
                share per LP.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-100 transition-colors duration-300 hover:border-gray-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Command className="text-secondary mr-2" size={24} />
                <h3 className="text-lg font-medium text-primary-800">
                  End-to-end platform
                </h3>
              </div>
              <p className="text-gray-600">
                Investor Poratl provides a streamlined platform for everything
                you need to run your fund.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-100 transition-colors duration-300 hover:border-gray-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="text-secondary mr-2" size={24} />
                <h3 className="text-lg font-medium text-primary-800">
                  Move quickly
                </h3>
              </div>
              <p className="text-gray-600">
                Raise once, instead of deal-by-deal — so you can invest swiftly
                and win competitive allocations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureFeatures;
