// TestimonialCard.tsx
import { FC } from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  testimonialText: string;
  image: string;
  socialLinks?: {
    twitter?: boolean;
    facebook?: boolean;
    instagram?: boolean;
  };
}

const TestimonialCard: FC<TestimonialProps> = ({
  name,
  role,
  quote,
  testimonialText,
  image,
  socialLinks = { twitter: true, facebook: true, instagram: true },
}) => {
  return (
    <div className="w-full bg-primary-50 p-4 md:p-8 lg:p-12">
      <div className="text-center mb-6">
        <h3 className="uppercase text-primary-500 text-sm font-medium tracking-wider">
          TESTIMONIAL
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mt-1">
          Client Success Stories
        </h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-8">
            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <h3 className="mt-4 font-semibold text-primary-800">{name}</h3>
            <p className="text-sm text-primary-600">{role}</p>

            <div className="flex space-x-2 mt-2">
              {socialLinks.twitter && (
                <span className="text-primary-500 cursor-pointer hover:text-primary-700">
                  <FaTwitter size={16} />
                </span>
              )}
              {socialLinks.facebook && (
                <span className="text-primary-500 cursor-pointer hover:text-primary-700">
                  <FaFacebook size={16} />
                </span>
              )}
              {socialLinks.instagram && (
                <span className="text-primary-500 cursor-pointer hover:text-primary-700">
                  <FaInstagram size={16} />
                </span>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="text-primary-500 text-4xl font-serif">"</div>
            <h4 className="text-xl font-bold text-primary-800 mb-2">{quote}</h4>
            <p className="text-primary-700">{testimonialText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
