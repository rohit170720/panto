import { features } from "../../constants";

const WhyChooseUs = () => {
  return (
    <section className='bg-white py-10 md:py-25 px-4 sm:px-6 lg:px-8'>
      {" "}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start'>
        <div className='col-span-1 md:col-span-1 lg:col-span-1 flex  items-center h-full'>
          <h2 className='text-2xl md:text-4xl sm:text-[2.6rem] font-bold text-(--custom-black) leading-tight'>
            Why
            <br /> Choosing Us
          </h2>
        </div>

        <div className='col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='lg:p-6 rounded-lg'>
              {" "}
              <h3 className='text-lg md:text-2xl font-semibold text-(--custom-black) mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600 mb-4 leading-7'>
                {feature.description}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
