function HeroBanner() {
  return (
    <div className='mt-8 md:mt-28 p-4 md:p-0'>
      <h1 className=' text-3xl sm:text-4xl  md:text-5xl lg:text-7xl xl:text-[5rem] font-bold text-white text-center max-w-4xl mx-auto leading-snug'>
        Make Your Interior More Minimalistic & Modern
      </h1>
      <p className='text-lg sm:text-xl  lg:text-xl xl:text-2xl text-white text-center mt-4 max-w-xl mx-auto font-light'>
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>

      <div className='flex items-center p-1 md:p-2 rounded-full backdrop-blur-xs bg-(--search-bg) shadow-lg border border-[#ffffff99] md:max-w-[344px] mx-auto my-6'>
        <input
          type='text'
          placeholder='Search furniture'
          className='flex-grow bg-transparent text-gray-300 placeholder-[#ffffff99] outline-none px-4 md:py-2 md:text-lg'
        />
        <button className='flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-(--custom-orange) rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
