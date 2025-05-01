import React from 'react';
import Link from 'next/link';

const ContactHeader = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-8 mt-24">
      <h1 className="text-4xl font-extralight mb-12">Contact our sales team</h1>
      <p className="mb-3 font-extralight text-gray-800 text-sm">
        Fill out the form and a member of our team will reach out to you to
        discuss AngelList's software offerings for firms.
      </p>
      <p className="text-sm font-extralight text-gray-800">
        Looking for tools for startups?{' '}
        <Link
          href="/"
          className="text-primary-950 font-medium hover:text-primary-800 "
        >
          Explore offerings
        </Link>
        . For more technical info, visit our{' '}
        <Link
          href="/"
          className="text-primary-950 hover:text-primary-800 font-medium"
        >
          Help Center
        </Link>
        .
      </p>
    </div>
  );
};

export default ContactHeader;
