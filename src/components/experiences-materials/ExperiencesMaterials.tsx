function ExperiencesMaterials() {
  return (
    <section className='py-12 md:py-36 overflow-x-hidden'>
      <div className='flex flex-col md:flex-row md:mt-20 gap-8'>
        <div className='relative min-h-[15rem] md:min-h-[30rem] md:max-w-2/4 h-full w-full '>
          <div className="absolute top-0 left-8 right-8 md:left-0 md:right-auto md:w-3/4 h-full bg-[url('/assets/experiences.jpg')] bg-cover bg-center z-10 shadow-2xl rounded-2xl md:rounded-l-none" />
          <div className='hidden md:block absolute -top-20 left-0 w-1/2 h-full bg-(--ternery-bg) rounded-r-2xl' />
          <div className='hidden md:block absolute top-30 left-30 w-3/4 h-80 bg-(--ternery-bg) rounded-2xl' />
        </div>

        <div className='pl-8 md:pl-0 md:max-w-2/4'>
          <h5 className='text-sm md:text-lg text-(--custom-orange) font-semibold tracking-[0.17em] '>
            EXPERIENCES
          </h5>
          <h2 className='text-2xl md:text-4xl sm:text-[2.6rem] font-bold text-(--custom-black) leading-tight my-4 capitalize max-w-3/5'>
            we provide you the best experience
          </h2>
          <p className='text-(--custom-black) opacity-80 mb-4 leading-7 max-w-[65%]'>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <button className='inline-flex items-center text-sm text-(--custom-orange) hover:text-orange-600 font-light group cursor-pointer '>
            More Info
            <img
              src='/assets/right-arrow.svg'
              alt='Arrow Right'
              className='ml-2  transition-transform duration-200 group-hover:translate-x-1'
            />
          </button>
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row mt-8 md:mt-25 gap-8'>
        <div className='flex items-center'>
          <div className='w-full ml-8 md:ml-20'>
            <h5 className='text-sm md:text-lg text-(--custom-orange) font-semibold tracking-[0.17em] '>
              MATERIALS
            </h5>
            <h2 className='text-2xl md:text-4xl sm:text-[2.6rem] font-bold text-(--custom-black) leading-tight my-4 capitalize max-w-[63%]'>
              Very serious materials for making furniture
            </h2>
            <p className='text-(--custom-black) opacity-80 mb-4 leading-7 max-w-[75%]'>
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <button className='inline-flex items-center text-sm text-(--custom-orange) hover:text-orange-600 font-light group cursor-pointer '>
              More Info
              <img
                src='/assets/right-arrow.svg'
                alt='Arrow Right'
                className='ml-2  transition-transform duration-200 group-hover:translate-x-1'
              />
            </button>
          </div>
        </div>

        <div className='relative min-h-[15rem] md:min-h-[35rem] h-full w-full '>
          <div className='static md:absolute mx-8 md:mx-0 top-0 right-auto md:right-0 left-8 md:left-auto md:max-w-max md:w-full h-full block md:flex md:gap-8 z-10 md:justify-center md:items-end'>
            <div className='hidden lg:flex flex-col gap-4  h-full p-4'>
              <img
                src='/assets/materials-1.jpg'
                alt='Materials'
                className='w-56 h-56 object-cover rounded-2xl shadow-2xl'
              />
              <img
                src='/assets/materials-2.jpg'
                alt='Materials'
                className='w-56 h-80 object-cover rounded-2xl shadow-2xl'
              />
            </div>
            <img
              src='/assets/materials-3.jpg'
              alt='Materials'
              className='w-full  max-h-60 md:max-h-[27rem] object-cover rounded-2xl md:rounded-r-none shadow-2xl md:mb-10'
            />
          </div>
          <div className='hidden md:block absolute -top-20 right-0 w-1/3 h-full bg-(--ternery-bg) rounded-l-2xl' />
        </div>
      </div>
    </section>
  );
}

export default ExperiencesMaterials;
