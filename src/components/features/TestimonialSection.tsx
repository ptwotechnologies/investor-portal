'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

interface TestimonialProps {
  quote: string;
  testimonialText: string;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    twitter?: boolean;
    facebook?: boolean;
    instagram?: boolean;
  };
}

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: 'Loved the product!',
      testimonialText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      name: 'Maverick',
      role: 'Product Manager',
      imageUrl: 'https://picsum.photos/id/191/1200/800',
      socialLinks: {
        twitter: true,
        facebook: true,
        instagram: true,
      },
    },
    {
      quote: 'Transformed our digital strategy!',
      testimonialText:
        "Working with this team has been an absolute game-changer for our company. The platform's analytics suite helped us identify key growth opportunities we were missing. Within three months, we saw a significant increase in customer engagement.",
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      imageUrl: 'https://picsum.photos/id/1027/1200/800',
      socialLinks: {
        twitter: true,
        facebook: true,
        instagram: false,
      },
    },
    {
      quote: 'Best technical support ever!',
      testimonialText:
        'The implementation was seamless from day one. Their development team understands the challenges that modern businesses face with digital transformation. When we hit integration roadblocks, their engineers worked overtime to find solutions.',
      name: 'Michael Chen',
      role: 'CTO at InnovateSoft',
      imageUrl: 'https://picsum.photos/id/1076/1200/800',
      socialLinks: {
        twitter: false,
        facebook: true,
        instagram: true,
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto-scroll effect
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
  };

  return (
    <div
      className="w-full bg-primary-50 p-4 md:p-8 lg:p-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center mb-6">
        <h3 className="uppercase text-primary-500 text-sm font-medium tracking-wider">
          TESTIMONIAL
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mt-1">
          Client Success Stories
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 md:p-8 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-primary-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-primary-600">{testimonial.role}</p>

                <div className="flex space-x-2 mt-2">
                  {testimonial.socialLinks.twitter && (
                    <span className="text-primary-500 cursor-pointer hover:text-primary-700">
                      <FaTwitter size={16} />
                    </span>
                  )}
                  {testimonial.socialLinks.facebook && (
                    <span className="text-primary-500 cursor-pointer hover:text-primary-700">
                      <FaFacebook size={16} />
                    </span>
                  )}
                  {testimonial.socialLinks.instagram && (
                    <span className="text-primary-500 cursor-pointer hover:text-primary-700">
                      <FaInstagram size={16} />
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-primary-500 text-4xl font-serif">"</div>
                <h4 className="text-xl font-bold text-primary-800 mb-2">
                  {testimonial.quote}
                </h4>
                <p className="text-primary-700">
                  {testimonial.testimonialText}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <div className="flex absolute z-10 justify-between w-full left-0 top-1/2 -translate-y-1/2 px-2">
          <button
            onClick={goToPrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => {
                  setIsAnimating(false);
                }, 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary-600 w-6' : 'bg-primary-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
