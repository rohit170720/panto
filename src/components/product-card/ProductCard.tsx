import type { Product } from "../../types/types";

const renderStars = (rating: number) => {
  return (
    <div className='flex'>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.543 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.788.565-1.843-.197-1.543-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.788-.57-.387-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z' />
        </svg>
      ))}
    </div>
  );
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className='bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 p-4 pb-0 flex flex-col justify-between transform transition duration-300 hover:scale-[1.02] !min-w-full  sm:!min-w-[calc(50%_-_0.5rem)]  md:!min-w-[calc(33%_-_0.66rem)] lg:!min-w-[calc(25%_-_0.75rem)]'>
      <div className='flex justify-center items-center h-64 mb-4'>
        <img
          src={product.image}
          alt={product.name}
          className='max-h-full max-w-full object-contain'
        />
      </div>
      <div className='p-4 pt-0'>
        <p className='text-sm text-gray-500 mb-1'>{product.category}</p>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
          {product.name}
        </h3>
        {renderStars(product.rating)}
        <div className='flex items-center justify-between mt-4 mb-2'>
          <span className='text-xl font-bold text-gray-900'>
            ${product.price}
          </span>
          <button className='bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900 transition duration-300 cursor-pointer'>
            {/* Plus Icon SVG */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4v16m8-8H4'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
