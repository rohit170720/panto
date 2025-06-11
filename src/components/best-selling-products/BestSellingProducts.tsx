import { useRef, useState } from "react";
import type { Product, ProductCategory } from "../../types/types";
import ProductCard from "../product-card/ProductCard";

import { products, categories } from "../../constants";

const BestSellingProducts = () => {
  const carouselContainer = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("Chair");
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

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className='font-sans bg-(--ternery-bg) py-16'>
      {" "}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl md:text-4xl text-center sm:text-[2.6rem] font-bold text-(--custom-black) leading-tight mb-8'>
          Best Selling Product
        </h2>

        {/* Categories Filter */}
        <div className='flex justify-center mb-12 bg-[#eeeeee] p-1.5 rounded-full w-max mx-auto'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as ProductCategory)}
              className={`px-2 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-lg font-light text-(--custom-text-black) cursor-pointer ${
                category === selectedCategory ? "bg-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className='text-center text-gray-500'>
            No products available in this category.
          </div>
        ) : (
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
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product as Product} />
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
        )}

        {/* View All Link */}
        <div className='text-center mt-12'>
          <button className='inline-flex items-center text-lg text-(--custom-orange) hover:text-orange-600 font-light group cursor-pointer '>
            View More
            <img
              src='/assets/right-arrow.svg'
              alt='Arrow Right'
              className='ml-2 transition-transform duration-200 group-hover:translate-x-1'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
