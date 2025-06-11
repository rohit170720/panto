import { useRef } from "react";
import { testimonials } from "../../constants";

import TestimonialCard from "../testimonial-card/TestimonialCard";

function Testimonials() {
  const carouselContainer = useRef<HTMLDivElement>(null);

  const navigation = (dir: string) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container!.scrollLeft - (container!.offsetWidth + 20)
        : container!.scrollLeft + (container!.offsetWidth + 20);

    container!.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className=' py-10 md:px-8 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='w-full text-center mb-4'>
        <h5 className='text-sm md:text-lg text-(--custom-orange) font-semibold tracking-[0.17em] '>
          TESTIMONIALS
        </h5>
        <h2 className='text-2xl md:text-4xl sm:text-[2.6rem] font-bold text-(--custom-black) leading-tight my-4 capitalize'>
          Our Client Reviews
        </h2>
      </div>

      <div className='relative'>
        {/* Navigation Arrows */}
        <button
          className='absolute left:0 md:-left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10 flex items-center justify-center border border-gray-200 cursor-pointer'
          onClick={() => navigation("left")}
        >
          {/* Left Arrow SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
        </button>

        <div
          className='flex overflow-y-hidden gap-4 py-4 scrollbar-hide'
          ref={carouselContainer}
        >
          {testimonials.map((testimonial) => (
            // <ProductCard key={product.id} product={product as Product} />
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <button
          className='absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10 flex items-center justify-center border border-gray-200 cursor-pointer'
          onClick={() => navigation("right")}
        >
          {/* Right Arrow SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
