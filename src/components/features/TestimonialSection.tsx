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
    <div className="px-4 py-16 bg-gray-50">
      <div className="mx-auto max-w-[1440px]"> {/* Updated this line */}
        <Swiper
          modules={[Pagination, Autoplay]}
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
            320: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
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
                <div className="flex bg-white rounded-md border-2 border-[#cccc] shadow-sm p-12 gap-8 max-w-4xl h-80 mx-auto">
                  <div className="flex-1">
                    <p className="text-[#001032] text-lg leading-relaxed mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="text-sm text-gray-500">
                      <p className="font-medium">{testimonial.author}</p>
                      <p>{testimonial.company}</p>
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 overflow-hidden bg-gray-200 rounded-lg">
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.author}
                        width={128} // Required for remote images
                        height={160} // Required for remote images
                        className="object-cover w-full h-full"
                        priority={index === 0} // Prioritize the first image for LCP
                        sizes="(max-width: 768px) 128px, (max-width: 1200px) 128px, 128px" // Define sizes for responsive loading
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="bg-white border-2 border-[#cccc] rounded-lg shadow-sm p-6 max-w-sm mx-auto">
                  <p className="mb-6 leading-relaxed tracking-wide text-gray-600 xxs:text-sm xs:text-lg">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm tracking-wide text-gray-500">
                        <p className="font-medium">{testimonial.author}</p>
                        <p>{testimonial.company}</p>
                        <p>{testimonial.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center flex-shrink-0 gap-6">
                      {/* Vertical Line */}
                      <div className="w-[1.5px] h-20 bg-gray-300" />

                      {/* Image */}
                      <div className="w-16 h-20 overflow-hidden bg-gray-200 rounded-full">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.author}
                          width={64}
                          height={80}
                          className="object-cover w-full h-full"
                          priority={index === 0}
                          sizes="(max-width: 768px) 64px, 64px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-8 space-x-2 custom-pagination"></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;