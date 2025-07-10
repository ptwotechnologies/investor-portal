'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  description: string;
  imageUrl: string;
}

const TestimonialSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Breaks down your numbers, shows you how long your runway actually is, and where you're bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you're bleeding cash",
      author: 'Vivek T',
      company: 'Company name',
      description: 'Startup',
      imageUrl: 'https://picsum.photos/200/250?random=1',
    },
    {
      id: 2,
      quote:
        "Breaks down your numbers, shows you how long your runway actually is, and where you're bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you're bleeding cash",
      author: 'Sarah M',
      company: 'Tech Solutions',
      description: 'Growing early-stage',
      imageUrl: 'https://picsum.photos/200/250?random=2',
    },
    {
      id: 3,
      quote:
        "Breaks down your numbers, shows you how long your runway actually is, and where you're bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you're bleeding cash",
      author: 'John D',
      company: 'Innovation Labs',
      description: 'Startup founder',
      imageUrl: 'https://picsum.photos/200/250?random=3',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]} // Include Autoplay module
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // Set to true if you want autoplay to pause on user interaction
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.3,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.6,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 1.8,
              spaceBetween: 50,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="flex bg-white rounded-lg shadow-sm p-12 gap-8 max-w-4xl h-80 mx-auto">
                  <div className="flex-1">
                    <p className="text-[#001032] text-lg leading-relaxed mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="text-gray-500 text-sm">
                      <p className="font-medium">{testimonial.author}</p>
                      <p>{testimonial.company}</p>
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.author}
                        width={128} // Required for remote images
                        height={160} // Required for remote images
                        className="w-full h-full object-cover"
                        priority={index === 0} // Prioritize the first image for LCP
                        sizes="(max-width: 768px) 128px, (max-width: 1200px) 128px, 128px" // Define sizes for responsive loading
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="bg-white rounded-lg shadow-sm p-6 max-w-sm mx-auto">
                  <p className="text-gray-600 text-lg leading-relaxed tracking-wide mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-gray-500 text-sm tracking-wide ">
                        <p className="font-medium">{testimonial.author}</p>
                        <p className=''>{testimonial.company}</p>
                        <p className=''>{testimonial.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-20 bg-gray-200 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.author}
                          width={64} 
                          height={80} // Required for remote images
                          className="w-full h-full object-cover"
                          priority={index === 0} // Prioritize the first image for LCP
                          sizes="(max-width: 768px) 64px, 64px" // Define sizes for responsive loading
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex custom-pagination justify-center mt-8 space-x-2"></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
