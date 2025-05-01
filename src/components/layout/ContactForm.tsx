'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/input';
import ContactCards from '../features/ContactCards';

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  serviceType: string[];
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    serviceType: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceTypeChange = (value: string) => {
    setFormData((prevData) => {
      // If the value is already selected, remove it
      if (prevData.serviceType.includes(value)) {
        return {
          ...prevData,
          serviceType: prevData.serviceType.filter((item) => item !== value),
        };
      }
      // Otherwise add it
      return {
        ...prevData,
        serviceType: [...prevData.serviceType, value],
      };
    });
  };

  const handleSubmit = (): void => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const serviceOptions = [
    {
      title: 'Venture Funds',
      description: 'Launch and manage funds of any size',
      value: 'ventureFunds',
    },
    {
      title: 'Scout Program',
      description: 'Empower your team to manage your scout fund',
      value: 'scoutProgram',
    },
    {
      title: 'Rolling Funds',
      description: 'Automatically accept new capital quarterly',
      value: 'rollingFunds',
    },
    {
      title: 'SPVs',
      description: 'Raise capital on a deal-by-deal basis',
      value: 'spvs',
    },
    {
      title: 'Digital Subscriptions',
      description: 'Intelligent investor onboarding',
      value: 'digitalSubscriptions',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <Input
              type="email"
              name="workEmail"
              placeholder="Work Email Address"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <Input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div className="space-y-2 mb-8">
            {serviceOptions.map((option) => (
              <ContactCards
                key={option.value}
                title={option.title}
                description={option.description}
                value={option.value}
                selected={formData.serviceType.includes(option.value)}
                onChange={handleServiceTypeChange}
              />
            ))}
          </div>

          <div className="flex justify-center mb-4">
            <Button
              variant={'default'}
              size="lg"
              className="bg-primary-950 text-white hover:bg-primary-200 hover:text-primary-800"
              onClick={handleSubmit}
            >
              Contact sales
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500 px-6">
            Please note that this is not an application to seek funding or other
            services for a new venture or business. By clicking "Contact sales"
            you agree to AngelList's{' '}
            <Link
              href="#"
              className="underline text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
